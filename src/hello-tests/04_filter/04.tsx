import {CityType, governmentBuildingsType} from '../02_object/02_types';

export function demolishHousesOnTheStreet(c: CityType, a: string) {
  c.houses = c.houses.filter(el => el.address.street.title !== a)
}

export function getBuildingsWithStaffCountGreaterThen(g: Array<governmentBuildingsType>, n: number) {
  return g.filter(el => el.staffCount > n)
}