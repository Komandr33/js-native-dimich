import {governmentBuildingsType, HouseType} from '../02_object/02_types';


export function getStreetsTitlesOfGovernmentBuildings(gB: Array<governmentBuildingsType>) {
  return gB.map(el => el.address.street.title)
}

export function getStreetsTitlesOfHouses(houses: Array<HouseType>) {
  return houses.map(house => house.address.street.title)
}