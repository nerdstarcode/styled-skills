"use client";
import React, { useEffect } from "react";
import { SkillsChart } from "@/components/molecules/SkillsChart";
import { motion } from "framer-motion";
import BaseDialog from "@/components/molecules/BaseDialog";
import { useState } from "react";
import { Rating, styled, TextField, Typography } from "@mui/material";
import { Circle } from "@mui/icons-material";
export const ConsolidatedRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#0072bc',
  },
  '& .MuiRating-iconHover': {
    color: '#0072bc',
  },
});
export const WantedRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#2cd5b6',
  },
  '& .MuiRating-iconHover': {
    color: '#2cd5b6',
  },
});
export function SoftSkillsCard({ skills, setSkills }: { skills: { name: string, value: number, wanted?: number }[], setSkills: Function }) {
  const [newSkill, setNewSkill] = useState<{ name: string, value: number, wanted?: number }>({ name: '', value: 0 })
  if (typeof window !== "undefined") {
    useEffect(() => {
      if (!localStorage?.getItem('hardSkills')) localStorage?.setItem('softSkills', JSON.stringify(skills || []))
    }, [skills])
  }
  return (
    <motion.article
      initial={{ opacity: 0, y: 0, x: -500 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: .5, duration: 1, ease: 'circOut', }}
    >
      <SkillsChart key={skills?.length} title="softSkills" dataSkills={skills} />
      <div className="px-16">
        <BaseDialog
          buttonText={
            <button className="border border-brand-primary/50 p-2 rounded-2xl w-full">
              Add Softskill
            </button>
          }
          ButtonSubmit="Add skill"
          handleCancel={() => { setNewSkill({ name: '', value: 0 }) }}
          handleSubmit={() => {
            if (newSkill?.name?.length === 0) {
              alert('Please put a name on Skill')
              throw new Error
            }
            if (Number(newSkill?.wanted || newSkill.value) < newSkill?.value) {
              alert('Please wanted lvl not be lower than consolidated')
              throw new Error
            }
            if (newSkill.value === 0 && Number(newSkill?.wanted || 0)) {
              alert('Please if you do not consolidated lvl, set wanted lvl on skill')
              throw new Error
            }
            if (skills.filter((skill) => skill.name === newSkill.name)?.length > 0) {
              alert('Skill already exists')
              throw new Error
            }
            const prevSkills = [...skills]
            prevSkills.push(newSkill)
            setSkills(prevSkills)
            setNewSkill({ name: '', value: 0 })
          }}
          ButtonCancel="Cancel"
        >
          <form className="grid md:grid-cols-2 grid-cols-1 gap-2">
            <TextField
              onChange={(event) => {
                setNewSkill((prev) => ({ ...prev, name: event.target.value }))
              }}
              className="w-full md:col-span-2"
              variant="outlined"
              placeholder="Skill name"
            />

            <div className="md:col-span-2">
              <Typography component="legend">Consolidated LvL</Typography>
              <ConsolidatedRating
                name="customized-color"
                defaultValue={0}
                getLabelText={(value) => `${value} Circle${value !== 1 ? 's' : ''}`}
                precision={0.5}
                onChange={(event, value) => { setNewSkill((prev) => ({ ...prev, value: Number(value) })) }}
                icon={<Circle fontSize="inherit" />}
                emptyIcon={<Circle fontSize="inherit" />}
                max={11}
              />
            </div>
            <div className="md:col-span-2">

              <Typography component="legend">Wanted LvL</Typography>
              <WantedRating
                name="customized-color"
                defaultValue={0}
                getLabelText={(value) => `${value} Circle${value !== 1 ? 's' : ''}`}
                precision={0.5}
                onChange={(event, value) => { setNewSkill((prev) => ({ ...prev, wanted: Number(value) })) }}
                icon={<Circle fontSize="inherit" />}
                emptyIcon={<Circle fontSize="inherit" />}
                max={11}
              />
            </div>
          </form>
        </BaseDialog>
      </div>
    </motion.article>

  );
}
