import { ThemeProvider } from "./context/ThemeContext";
import { TopBar } from "./components/TopBar";
import { Header } from "./components/Header";
import { Divider } from "./components/Divider";
import { SummarySection } from "./components/SummarySection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { SkillsSection } from "./components/SkillsSection";
import { ActionButtons } from "./components/ActionButtons";
import { Toaster } from "sonner";
import cvData from "./data/cv-data";
import { motion, useAnimationControls } from "motion/react";
import { useState, useCallback } from "react";

function CVLayout() {
  const controls = useAnimationControls();
  const [isHovering, setIsHovering] = useState(false);

  const startFloat = useCallback(async () => {
    setIsHovering(true);
    // Initial lift
    await controls.start({
      y: -6,
      boxShadow: "0 14px 36px rgba(0,0,0,0.08)",
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    });
    // Continuous gentle floating loop
    controls.start({
      y: [-6, -10, -6, -4, -6],
      rotateX: [0.4, 0.8, 0.2, -0.2, 0.4],
      rotateY: [-0.2, 0.1, -0.3, 0.1, -0.2],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    });
  }, [controls]);

  const stopFloat = useCallback(async () => {
    setIsHovering(false);
    controls.stop();
    controls.start({
      y: 0,
      rotateX: 0,
      rotateY: 0,
      boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    });
  }, [controls]);

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{
        backgroundColor: "var(--dot-bg)",
        backgroundImage:
          "radial-gradient(var(--dot-color) 0.5px, var(--dot-bg-alpha) 0.5px), radial-gradient(var(--dot-color-alt) 0.5px, transparent 0.5px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 15px 15px",
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Sticky TopBar */}
      <div className="sticky top-0 z-50 px-4 sm:px-8 md:px-16 pt-3 pb-3">
        <TopBar />
      </div>

      {/* Outer wrapper — max 1440px */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 pb-8 sm:pb-12 md:pb-16">
        {/* Card */}
        <motion.div
          className="bg-white dark:bg-[#1a1a1a] rounded-2xl sm:rounded-3xl shadow-[0_1px_8px_rgba(0,0,0,0.05)] dark:shadow-[0_1px_8px_rgba(0,0,0,0.3)] w-full max-w-[960px] mx-auto transition-colors duration-500"
          animate={controls}
          onMouseEnter={startFloat}
          onMouseLeave={stopFloat}
          style={{ perspective: 1200 }}
        >
          <div className="flex flex-col gap-10 sm:gap-[53px] px-6 sm:px-10 md:px-14 py-10 sm:py-14">
            {/* Header */}
            <Header data={cvData.personal} />

            {/* Divider */}
            <Divider />

            {/* Content Sections */}
            <div className="flex flex-col gap-8 sm:gap-[32px] w-full">
              <SummarySection text={cvData.summary} />
              <ExperienceSection entries={cvData.experience} />
              <EducationSection entries={cvData.education} />
              <SkillsSection categories={cvData.skills} />
            </div>

            {/* Action Buttons */}
            <ActionButtons />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CVLayout />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            borderRadius: "12px",
          },
        }}
      />
    </ThemeProvider>
  );
}