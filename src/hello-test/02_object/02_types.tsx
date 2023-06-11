export type  CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<governmentBuildingsType>
    citizensNumber: number
}
export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type  governmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

type AddressType = {
    number?: number
    street: TitleType
}
type TitleType = {
    title: string
}