"use client";
import React, { useEffect } from "react";
import { SkillsChart } from "@/components/molecules/SkillsChart";
import { motion } from "framer-motion";
import BaseDialog from "@/components/molecules/BaseDialog";
import { useState } from "react";
import { Rating, styled, TextField, Typography } from "@mui/material";
import { Circle } from "@mui/icons-material";
const ConsolidatedRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#0072bc',
  },
  '& .MuiRating-iconHover': {
    color: '#0072bc',
  },
});
const WantedRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#2cd5b6',
  },
  '& .MuiRating-iconHover': {
    color: '#2cd5b6',
  },
});
export interface ISkillsList {
  hardSkills?: { name: string, value: number, wanted?: number }[],
  softSkills?: { name: string, value: number, wanted?: number }[],
  setHardSkills?: Function
  setSoftSkills?: Function
}
export function SkillsList({ hardSkills, setHardSkills, softSkills, setSoftSkills }: ISkillsList) {
  if (typeof window !== "undefined") {
    useEffect(() => {
      if (hardSkills)
        localStorage?.setItem('hardSkills', JSON.stringify(hardSkills ?? []))
      if (softSkills)
        localStorage?.setItem('softSkills', JSON.stringify(softSkills ?? []))
    }, [hardSkills, softSkills])
  }
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 w-full">

      <motion.div className="flex flex-col gap-4 w-full"
        initial={{ opacity: 0, y: 0, x: -500 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: .8, duration: 1, ease: 'circOut', }}>
        <h4>HardSkills</h4>
        <motion.ul
          key={hardSkills?.length}
          className="flex flex-col gap-2"
        >
          {hardSkills?.map((skill, index) => (
            <motion.li className="flex items-center" key={index}
              initial={{ opacity: 0, y: 0, x: -500 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: .0 + (index * 0.2), duration: 1, ease: 'circOut', }}
            >
              <h5 className="w-24 text-center">{skill.name}</h5>
              <div>
                <div className="flex items-start text-sm">
                  <ConsolidatedRating
                    name="customized-color"
                    value={skill.value}
                    onChange={(event, value) => {
                      const prevSkills = [...hardSkills]
                      if (Number(value) > Number(skill.wanted)) {
                        prevSkills[index] = { ...prevSkills[index], value: Number(value), wanted: Number(value) }
                      } else {
                        prevSkills[index] = { ...prevSkills[index], value: Number(value) }
                      }
                      setHardSkills?.(prevSkills)
                    }}
                    precision={0.5}
                    icon={<Circle fontSize="small" />}
                    emptyIcon={<Circle fontSize="small" />}
                    max={11}
                  />
                </div>
                <div className="flex items-start">
                  <WantedRating
                    name="customized-color"
                    value={skill.wanted}
                    onChange={(event, value) => {
                      const prevSkills = [...hardSkills]
                      if (Number(value) < Number(skill.value)) {
                        prevSkills[index] = { ...prevSkills[index], value: Number(value), wanted: Number(value) }
                      } else {
                        prevSkills[index] = { ...prevSkills[index], wanted: Number(value) }
                      }
                      setHardSkills?.(prevSkills)
                    }}
                    precision={0.5}
                    icon={<Circle fontSize="small" />}
                    emptyIcon={<Circle fontSize="small" />}
                    max={11}
                  />
                </div>
              </div>
              <button
                onClick={() => {
                  const prevSkills = [...hardSkills]
                  prevSkills.splice(index, 1)
                  setHardSkills?.(prevSkills)
                }} className="text-brand-danger/90 ml-2 py-1 px-2 transition-colors duration-500 rounded-2xl border border-transparent hover:border-brand-danger/90">
                Remove
              </button>
            </motion.li>
          ))}

        </motion.ul>
      </motion.div>
      <motion.div className="flex flex-col gap-4 w-full"
        initial={{ opacity: 0, y: 0, x: 500 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: .8, duration: 1, ease: 'circOut', }}>
        <h4>SoftSkills</h4>
        <motion.ul
          className="flex flex-col gap-2"
        >
          {softSkills?.map((skill, index) => (
            <motion.li className="flex items-center gap-2" key={index}
              initial={{ opacity: 0, y: 0, x: 500 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: .0 + (index * 0.2), duration: 1, ease: 'circOut', }}
            >
              <h5 className="w-24 text-center">{skill.name}</h5>
              <div>
                <div className="flex items-start text-sm">
                  <ConsolidatedRating
                    name="customized-color"
                    value={skill.value}
                    onChange={(event, value) => {
                      const prevSkills = [...softSkills]
                      if (Number(value) > Number(skill.wanted)) {
                        prevSkills[index] = { ...prevSkills[index], value: Number(value), wanted: Number(value) }
                      } else {
                        prevSkills[index] = { ...prevSkills[index], value: Number(value) }
                      }
                      setSoftSkills?.(prevSkills)
                    }}
                    precision={0.5}
                    icon={<Circle fontSize="small" />}
                    emptyIcon={<Circle fontSize="small" />}
                    max={11}
                  />
                </div>
                <div className="flex items-start">
                  <WantedRating
                    name="customized-color"
                    value={skill.wanted}
                    onChange={(event, value) => {
                      const prevSkills = [...softSkills]
                      if (Number(value) < Number(skill.value)) {
                        prevSkills[index] = { ...prevSkills[index], value: Number(value), wanted: Number(value) }
                      } else {
                        prevSkills[index] = { ...prevSkills[index], wanted: Number(value) }
                      }
                      setSoftSkills?.(prevSkills)
                    }}
                    precision={0.5}
                    icon={<Circle fontSize="small" />}
                    emptyIcon={<Circle fontSize="small" />}
                    max={11}
                  />
                </div>
              </div>
              <button
                onClick={() => {
                  const prevSkills = [...softSkills]
                  prevSkills.splice(index, 1)
                  setSoftSkills?.(prevSkills)
                }} className="text-brand-danger/90 ml-2 py-1 px-2 transition-colors duration-500 rounded-2xl border border-transparent hover:border-brand-danger/90">
                Remove
              </button>
            </motion.li>
          ))}

        </motion.ul>
      </motion.div>
    </div>

  );
}
