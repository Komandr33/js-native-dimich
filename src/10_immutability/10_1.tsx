type addressType = {
  city: string
  street: string
}

export type userType = {
  name: string
  age: number
  address: addressType
}

type laptopType = {
  title: string
  model: string
}

export type userWidthLaptopType = userType & {
  laptop: laptopType
}

export type userBooksType = {
  books: Array<string>
}

export type skillType = {
  skills: Array<number>
}

export type widthToCompanies = {
  companies: Array<{ id: number, title: string }>
}

let user: userWidthLaptopType = {
  name: 'Andrey',
  age: 36,
  address: {
    city: 'Krasnodar',
    street: 'Veronskaya'
  },
  laptop: {
    title: 'Asus',
    model: 'Vivobook'
  }
}

export function moveUser(user: userWidthLaptopType, newCity: string) {
  return {
    ...user,
    address: {...user.address, city: newCity}
  }
}

export function upgradeUserLaptop(u: userWidthLaptopType, newLaptop: string) {
  return {
    ...u,
    laptop: {...u.laptop, title: newLaptop}
  }
}

export function moveUserToOtherHouse(user: userWidthLaptopType, newStreet: string) {
  return {
    ...user,
    address: {
      ...user.address,
      street: newStreet
    }
  }
}

export function addNewBooksToUser(user: userWidthLaptopType & userBooksType, newBooks: Array<string>) {
  return {
    ...user,
    address: {...user.address},
    books: [...user.books, ...newBooks]
    // books: user.books.concat(newBooks) ещё вариант
  }
}

export const updateBooksToUser = (
  user: userWidthLaptopType & userBooksType,
  book: string,
  newBooks: string) => ({
  ...user,
  books: user.books.map(el => el === book ? newBooks : el)
})

export const increaseTheSkill = (
  user: userWidthLaptopType & userBooksType & skillType) => ({
  ...user,
  skills: user.skills.map(el => el <= 50 ? el + 10 : el)
})

export const removeBook = (user: userWidthLaptopType & userBooksType,
                           book: string) => (
  {
    ...user,
    books: user.books.filter(el => el !== book)
  }
)

export const addToCompanies = (user: userWidthLaptopType & widthToCompanies,
                               company: string) => {
  let newObject = {
    id: user.companies.length + 1,
    title: company
  }
  return {
    ...user,
    companies: [...user.companies, newObject]
  }
}

export const updateCompany = (user: widthToCompanies,
                              id: number,
                              newTitle: string) => {
  return {
    ...user,
    companies: user.companies.map(el => el.id === id ? {...el, title: newTitle} : el)
  }
}
