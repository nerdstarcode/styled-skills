"use client";
import { SkillsChart } from "@/components/molecules/SkillsChart";
import { motion } from "framer-motion";
import Image from "next/image";
import pefil from "@/public/image.jpeg"
import BaseDialog from "@/components/molecules/BaseDialog";
import { HardSkillsCard } from "@/components/templates/HardSkillsCard";
import { useState } from "react";
import { SkillsList } from "@/components/templates/SkillsList";
import { SoftSkillsCard } from "@/components/templates/SoftSkillsCard";
import { ExportImage } from "@/components/atoms/ExportImage";
export default function Home() {
  const [hardSkills, setHardSkills] = useState<{ name: string, value: number, wanted?: number }[]>(localStorage?.getItem('hardSkills') ? JSON?.parse(localStorage?.getItem('hardSkills') as any) : [])
  const [softSkills, setSoftSkills] = useState<{ name: string, value: number, wanted?: number }[]>(localStorage?.getItem('softSkills') ? JSON?.parse(localStorage?.getItem('softSkills') as any) : [])
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col py-16 gap-8 items-center justify-items-center min-h-screen px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex w-full items-center"
      >
        <Image src={pefil} alt="perfil-image" className="w-40 h-40 rounded-full" />
        <div className="px-4">
          <h1 className="text-4xl ">Sthiven Raphael Melo Correia</h1>
          <h2 className="text-2xl opacity-50">Intern Software Developer</h2>
        </div>
        <div className="flex ml-auto">
          <ExportImage />
        </div>
      </motion.div>
      <div className="grid grid-cols-2 w-full">
        <HardSkillsCard skills={hardSkills} setSkills={setHardSkills} />
        <SoftSkillsCard skills={softSkills} setSkills={setSoftSkills} />
      </div>
      <SkillsList
        hardSkills={hardSkills}
        setHardSkills={setHardSkills}
        softSkills={softSkills}
        setSoftSkills={setSoftSkills}
      />
    </div>
  );
}
