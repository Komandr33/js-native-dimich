import {studentType} from '../02/02';
import {addSkill} from './03';

let student: studentType;
beforeEach(() => {
  student = {
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
})

test('new skill should bee added to student', () => {
  const res = addSkill(student, 'JS');

  expect(student.technology.length).toBe(4)
  expect(student.technology[3].title).toBe('JS')
})

