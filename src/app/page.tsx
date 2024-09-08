"use client";
import { SkillsChart } from "@/components/molecules/SkillsChart";
import { motion } from "framer-motion";
import Image from "next/image";
import pefil from "@/public/image.jpeg"
import BaseDialog from "@/components/molecules/BaseDialog";
import { HardSkillsCard } from "@/components/templates/HardSkillsCard";
import { useEffect, useState } from "react";
import { SkillsList } from "@/components/templates/SkillsList";
import { SoftSkillsCard } from "@/components/templates/SoftSkillsCard";
import { ExportImage } from "@/components/atoms/ExportImage";
export default function Home() {
  const [hardSkills, setHardSkills] = useState<{ name: string, value: number, wanted?: number }[]>([])
  const [softSkills, setSoftSkills] = useState<{ name: string, value: number, wanted?: number }[]>([])
  if (typeof window !== "undefined") {
    useEffect(() => {
      setHardSkills(localStorage?.getItem('hardSkills') ? JSON?.parse(localStorage?.getItem('hardSkills') as any) : [])
      setSoftSkills(localStorage?.getItem('softSkills') ? JSON?.parse(localStorage?.getItem('softSkills') as any) : [])
    })
  }
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col py-16 gap-8 items-center justify-items-center min-h-screen px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex w-full items-center"
      >
        <Image src={pefil} alt="perfil-image" className="w-20 md:w-40 md:h-40 rounded-full" />
        <div className="px-4">
          <h1 className="text-xs md:text-4xl ">Sthiven Raphael Melo Correia</h1>
          <h2 className="text-sm md:text-2xl opacity-50">Intern Software Developer</h2>
        </div>
        <div className="flex ml-auto">
          <ExportImage />
        </div>
      </motion.div>
      <div className="grid md:grid-cols-2 grid-cols-1 w-full">
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
