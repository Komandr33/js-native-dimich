import {student, studentType} from '../02_object/02';
import {governmentBuildingsType, HouseType} from '../02_object/02_types';

export const addSkill = (st: studentType, skill: string) => {
  st.technology.push({
    id: student.technology.length + 1,
    title: skill
  })
}

export function addMoneyToBudget(g: governmentBuildingsType, addBudget: number) {
  g.budget += addBudget
}

export function repairHouse(hoses: HouseType) {
  hoses.repaired = true
}

export function toFireStaff(g: governmentBuildingsType, reduced: number) {
  g.staffCount -= reduced
}

export function toHireStaff(g: governmentBuildingsType, increased: number) {
  g.staffCount += increased
}

