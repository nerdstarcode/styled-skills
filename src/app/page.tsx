"use client";
import { SkillsChart } from "@/components/molecules/SkillsChart";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Animate with Framer Motion
      </motion.h1>
      <div className="grid grid-cols-2 w-full">
        <SkillsChart title="HardSkills" dataSkills={[
          { name: 'skill1', value: 5, wanted: 8 },
          { name: 'skill2', value: 6, wanted: 7 },
          { name: 'skill3', value: 7, wanted: 10 },
          { name: 'skill4', value: 2, wanted: 5 },
          { name: 'skill5', value: 6, wanted: 8 },
          { name: 'skill6', value: 6, wanted: 8 },
          { name: 'skill7', value: 10, wanted: 10 },
        ]} />
        <SkillsChart title="SoftSkills" dataSkills={[
          { name: 'skill1', value: 5, wanted: 8 },
          { name: 'skill2', value: 6, wanted: 7 },
          { name: 'skill3', value: 7, wanted: 10 },
          { name: 'skill4', value: 2, wanted: 5 },
          { name: 'skill5', value: 6, wanted: 8 },
          { name: 'skill6', value: 6, wanted: 8 },
          { name: 'skill7', value: 10, wanted: 10 },
        ]} />
      </div>
    </div>
  );
}
