import {student, studentType} from "../02/02";
import {governmentBuildingsType, HouseType} from "../02/02_types";

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