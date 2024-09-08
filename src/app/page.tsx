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
import { Input } from "@mui/material";
import ProfileImage from "@/components/atoms/ProfileImage";
export default function Home() {
  const [hardSkills, setHardSkills] = useState<{ name: string, value: number, wanted?: number }[]>([])
  const [softSkills, setSoftSkills] = useState<{ name: string, value: number, wanted?: number }[]>([])
  const [name, setName] = useState<string | null>(null)
  const [role, setRole] = useState<string | null>(null)
  if (typeof window !== "undefined") {
    useEffect(() => {
      setHardSkills(localStorage?.getItem('hardSkills') ? JSON?.parse(localStorage?.getItem('hardSkills') as any) : [])
      setSoftSkills(localStorage?.getItem('softSkills') ? JSON?.parse(localStorage?.getItem('softSkills') as any) : [])
    }, [])
    useEffect(() => {
      const localName = localStorage?.getItem('name')
      if (name === null) {
        setName(localName ?? '')
      } else {
        localStorage?.setItem('name', name ?? '')
      }
    }, [name])
    useEffect(() => {
      const localRole = localStorage?.getItem('role')
      if (role === null) {
        setRole(localRole ?? '')
      } else {
        localStorage?.setItem('role', role ?? '')
      }
    }, [role])

  }
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col py-16 gap-8 items-center justify-items-center min-h-screen px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex w-full items-center"
      >
        <ProfileImage />
        <div className="px-4 flex flex-col">
          <input value={name ?? ''} onChange={(event) => { setName(event?.target?.value) }} type="text" className="border-none bg-transparent md:text-4xl focus:outline-none w-fit" placeholder="Type your name here" />
          <input value={role ?? ''} onChange={(event) => { setRole(event?.target?.value) }} type="text" className="pl-1 border-none bg-transparent text-sm md:text-2xl focus:outline-none opacity-55" placeholder="Type your role here" />
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
