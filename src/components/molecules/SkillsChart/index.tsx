'use client'
import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { DataArray } from '@mui/icons-material';


export function SkillsChart({
  title = 'sample title',
  dataSkills = [
    { name: 'skill1', value: 5 },
    { name: 'skill2', value: 6, wanted: 7 },
    { name: 'skill3', value: 7, wanted: 10 },
    { name: 'skill4', value: 2, wanted: 5 },
    { name: 'skill5', value: 6, wanted: 8 },
    { name: 'skill6', value: 6, wanted: 8 },
    { name: 'skill7', value: 10, wanted: 10 },
  ],
}) {
  function buntchArray(array: any[], size: number = 15): {
    name: string;
    value: number;
    wanted?: number;
  }[][] {
    let result = [];

    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    if (result?.length === 2) {
      result
    }
    return result;
  }
  function montMultiRadar(buntch: {
    name: string;
    value: number;
    wanted?: number;
  }[][]): {
    radar?: {
      indicator: { name: string, max: number, min: number }[]
      radius?: number
      center?: string[]
    }[],
    series?: {
      name: string;
      type: "radar";
      radarIndex: number;
      areaStyle?: {};
      data: {
        value: number[];
        name: string;
        itemStyle?: {
          color?: string;
        };
      }[]
    }[]
  } {
    const radar: {
      indicator: {
        name: string;
        max: number;
        min: number;
      }[];
      radius?: number;
      center?: string[];
    }[] = []
    const series: {
      name: string;
      type: "radar";
      radarIndex: number;
      areaStyle?: {};
      data: {
        value: number[];
        name: string;
        itemStyle?: {
          color?: string;
        };
      }[]
    }[] = []
    buntch.forEach((buntch, index) => {
      const { indicator, valuesConsolidated, valueswantedLvl } = tratativeSkills(buntch)
      radar.push({
        indicator: indicator,
      })
      series.push({
        name: 'Consolidated vs Wanted',
        type: 'radar',
        areaStyle: {},
        radarIndex: index,
        data: [
          {
            value: valueswantedLvl ?? [],
            name: 'Wanted Values',
            itemStyle: {
              color: "#2cd5b6"
            }
          },
          {
            value: valuesConsolidated ?? [],
            name: 'Consolidated',
            itemStyle: {
              color: "#0072bc"
            }
          }
        ]
      })
    });
    if (radar?.length === 2) {
      radar[0].radius = 60
      radar[0].center = ["20%", "50%"]
      radar[1].radius = 60
      radar[1].center = ["80%", "50%"]
    }
    if (radar?.length === 3) {
      radar[0].radius = 60
      radar[0].center = ['25%', '40%']
      radar[1].radius = 60
      radar[1].center = ['50%', '60%']
      radar[2].radius = 60
      radar[2].center = ['75%', '40%']
    }
    return {
      radar,
      series
    }
  }
  const [data, setData] = useState<{
    indicator?: { name: string, max: number, min: number }[],
    valuesConsolidated?: number[],
    valueswantedLvl?: number[]
  }>({})
  const [multiRadar, setMultiRadar] = useState<{
    radar?: {
      indicator: { name: string, max: number, min: number }[]
      radius: number
      center: string[]
    }[],
    series?: {
      type: 'radar',
      radarIndex: number,
      areaStyle: {},
      data: {
        value: [number],
        name: string
      }[]
    }[]
  }>({})
  function tratativeSkills(skills: { name: string, value: number, wanted?: number }[]) {
    const indicator: { name: string, max: number, min: number }[] = []
    const valuesConsolidated: number[] = []
    const valueswantedLvl: number[] = []
    skills.forEach((skill, index) => {
      indicator?.push({
        name: skill.name, max: 11, min: 0
      })
      valuesConsolidated?.push(skill.value)
      valueswantedLvl?.push(skill?.wanted ?? skill.value)
    })
    return {
      indicator,
      valuesConsolidated,
      valueswantedLvl
    }
  }
  useEffect(() => {
    setMultiRadar(montMultiRadar(buntchArray(dataSkills)) as any)
    setData(tratativeSkills(dataSkills))
  }, [dataSkills])
  const option = {
    animationDuration: 1500,
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'cubicOut',
    textStyle: {
      fontSize: 16 / Number(multiRadar?.radar?.length || 1),
      color: '#f8f8f8'
    },
    tooltip: {
      verticalAlign: "top",
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
      bottom: 0,
      show: true,
      data: ['Consolidado', 'Desejado'],
    },
    radar: multiRadar?.radar ?? {
      indicator: [
        { name: 'loading...', max: 11, min: 0 },
        { name: 'loading...', max: 11, min: 0 },
        { name: 'loading...', max: 11, min: 0 },
        { name: 'loading...', max: 11, min: 0 },
        { name: 'loading...', max: 11, min: 0 },
        { name: 'loading...', max: 11, min: 0 },
        { name: 'loading...', max: 11, min: 0 },
      ],
    },
    series: multiRadar?.series
  };

  if (Number(dataSkills?.length || 0) === 0) return <div className='h-[300px] w-full flex items-center justify-center font-bold text-xl opacity-50'>
    <DataArray /> no data
  </div>
  return <ReactECharts option={option} style={{ height: '300px', width: 'auto' }} />;
}