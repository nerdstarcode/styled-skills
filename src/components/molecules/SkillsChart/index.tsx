'use client'
import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

export function SkillsChart({
  title = 'sample title',
  dataSkills = [
    { name: 'skill1', value: 5, wanted: 8 },
    { name: 'skill2', value: 6, wanted: 7 },
    { name: 'skill3', value: 7, wanted: 10 },
    { name: 'skill4', value: 2, wanted: 5 },
    { name: 'skill5', value: 6, wanted: 8 },
    { name: 'skill6', value: 6, wanted: 8 },
    { name: 'skill7', value: 10, wanted: 10 },
  ],
}) {
  const [data, setData] = useState<{
    indicator?: { name: string, max: number, min: number }[],
    valuesConsolidated?: number[],
    valueswantedLvl?: number[]
  }>({})
  function tratativeSkills(skills: { name: string, value: number, wanted: number }[]) {
    const indicator: { name: string, max: number, min: number }[] = []
    const valuesConsolidated: number[] = []
    const valueswantedLvl: number[] = []
    skills.forEach((skill, index) => {
      indicator?.push({
        name: skill.name, max: 11, min: 0
      })
      valuesConsolidated?.push(skill.value)
      valueswantedLvl?.push(skill.wanted ?? skill.value)
    })
    return {
      indicator,
      valuesConsolidated,
      valueswantedLvl
    }
  }
  useEffect(() => {
    setData(tratativeSkills(dataSkills))
  }, [dataSkills])
  const option = {
    textStyle: {
      fontSize: 16,
      fontWeight: 600,
      color: '#f8f8f8'
    },
    tooltip: {
      backgroundColor: '#070f26',
      textStyle: { color: '#f8f8f8', fontSize: 20, }
    },
    title: {
      text: title,
      textStyle: {
        color: '#ffffff80',
      }
    },
    legend: {
      data: ['Consolidado', 'Desejado'],
    },
    radar: {
      indicator: data?.indicator ?? [
        { name: 'loading...', max: 11, min: 0 },
        { name: 'loading...', max: 11, min: 0 },
        { name: 'loading...', max: 11, min: 0 },
        { name: 'loading...', max: 11, min: 0 },
        { name: 'loading...', max: 11, min: 0 },
        { name: 'loading...', max: 11, min: 0 },
        { name: 'loading...', max: 11, min: 0 },
      ]
    },
    series: [
      {
        name: 'Consolidated vs Wanted',
        type: 'radar',
        data: [
          {
            value: data?.valueswantedLvl ?? [],
            name: 'Wanted Values'
          },
          {
            value: data?.valuesConsolidated ?? [],
            name: 'Consolidated'
          }
        ]
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '500px', width: 'auto' }} />;
}