// import React from 'react';

type LocalsityType = {
    title: string
    countryTitle: string
}
type addressType = {
    streetTitle: string
    sity: LocalsityType
}
type technologyElementType = {
    id: number
    title: string
}
export type studentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: addressType
    technology: technologyElementType[]
}

export const student: studentType = {
    id: 1,
    name: 'Dimich',
    age: 32,
    isActive: true,
    address: {
        streetTitle: 'Surganova 2',
        sity: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technology: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        },
    ]
}


console.log(student.technology[2].title)
console.log(student.address.sity.title)