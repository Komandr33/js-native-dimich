import {CityType} from '../02_object/02_types';
import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from './03';
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from '../04_filter/04';

let city: CityType;

beforeEach(() => {
  city = {
    title: 'New York',
    houses: [
      {
        id: 1,
        buildedAt: 2012,
        repaired: false,
        address: {
          number: 100,
          street: {title: 'White street'}
        }
      },
      {
        id: 2,
        buildedAt: 2008,
        repaired: false,
        address: {
          number: 100,
          street: {title: 'Happy street'}
        }
      },
      {
        id: 3,
        buildedAt: 2020,
        repaired: false,
        address: {
          number: 101,
          street: {title: 'Happy street'}
        }
      }
    ],
    governmentBuildings: [
      {
        type: 'HOSPITAL',
        budget: 200000,
        staffCount: 200,
        address: {
          street: {title: 'Central Str'}
        }
      },
      {
        type: 'FIRE-STATION',
        budget: 500000,
        staffCount: 1000,
        address: {
          street: {title: 'South Str'}
        }
      }
    ],
    citizensNumber: 1000000
  }
})

// Типизация. Отработка
// 01_tests. Создайте в отдельном файле функцию, чтобы тесты прошли
test('Budget should be for changed fot HOSPITAL', () => {
  addMoneyToBudget(city.governmentBuildings[0], 100000);
  expect(city.governmentBuildings[0].budget).toBe(300000);
});
// 02_object. Тесты должны пройти
test('Budget should be changed for FIRE-STATION', () => {
  addMoneyToBudget(city.governmentBuildings[1], -100000);
  expect(city.governmentBuildings[1].budget).toBe(400000);
});
// 03_function. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be repaired', () => {
  repairHouse(city.houses[1]);
  expect(city.houses[1].repaired).toBeTruthy();
});
// 04_filter. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be reduced', () => {
  toFireStaff(city.governmentBuildings[0], 20);

  expect(city.governmentBuildings[0].staffCount).toBe(180);
});
// 05. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be increased', () => {
  toHireStaff(city.governmentBuildings[0], 20);

  expect(city.governmentBuildings[0].staffCount).toBe(220);
});

// Метод filter. Отработка
// 01_tests. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02_object. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be destroyed', () => {
  demolishHousesOnTheStreet(city, 'Happy street');

  expect(city.houses.length).toBe(1);
  expect(city.houses[0].id).toBe(1);

})

// 03_function. Массив строений, где работают больше 500 людей
test('buildings with correct staff count', () => {
  let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

  expect(buildings.length).toBe(1);
  expect(buildings[0].type).toBe('FIRE-STATION')
})