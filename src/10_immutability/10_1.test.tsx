import {
  addNewBooksToUser, addToCompanies, increaseTheSkill,
  moveUser,
  moveUserToOtherHouse, removeBook, skillType, updateBooksToUser, updateCompany,
  upgradeUserLaptop,
  userBooksType,
  userWidthLaptopType, widthToCompanies
} from './10_1';


test('change user', () => {
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

  const copyUser = moveUser(user, 'Seville')

  expect(user).not.toBe(copyUser);
  expect(user.address).not.toBe(copyUser.address);
  expect(user.laptop).toBe(copyUser.laptop)
  expect(copyUser.address.city).toBe('Seville')

})

test('upgrade laptop to the macbook', () => {
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

  const copyUser = upgradeUserLaptop(user, 'Macbook')

  expect(user).not.toBe(copyUser);
  expect(user.laptop).not.toBe(copyUser.laptop);
  expect(user.address).toBe(copyUser.address)
  expect(copyUser.laptop.title).toBe('Macbook')
  expect(user.laptop.title).toBe('Asus')
})

test('move user street', () => {
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
    },
  }

  const copyUser = moveUserToOtherHouse(user, 'Vizantiyskaya')

  expect(user).not.toBe(copyUser);
  expect(user.laptop).toBe(copyUser.laptop);
  expect(user.address).not.toBe(copyUser.address)
  expect(copyUser.address.street).toBe('Vizantiyskaya')
  expect(user.address.street).toBe('Veronskaya')
})

test('add new books to user', () => {
  let user: userWidthLaptopType & userBooksType = {
    name: 'Andrey',
    age: 36,
    address: {
      city: 'Krasnodar',
      street: 'Veronskaya'
    },
    laptop: {
      title: 'Asus',
      model: 'Vivobook'
    },
    books: ['Head First HTML&CSS', 'JS for children', 'React']
  }

  const copyUser = addNewBooksToUser(user, ['ts', 'MySQL'])

  expect(user).not.toBe(copyUser);
  expect(user.laptop).toBe(copyUser.laptop);
  expect(user.address).not.toBe(copyUser.address);
  expect(user.books).not.toBe(copyUser.books);
  expect(copyUser.books[3]).toBe('ts');
  expect(copyUser.books[4]).toBe('MySQL');
  expect(user.books.length).toBe(3)
})

test('update book to user', () => {
  let user: userWidthLaptopType & userBooksType = {
    name: 'Andrey',
    age: 36,
    address: {
      city: 'Krasnodar',
      street: 'Veronskaya'
    },
    laptop: {
      title: 'Asus',
      model: 'Vivobook'
    },
    books: ['Head First HTML&CSS', 'JS', 'React']
  }

  const copyUser = updateBooksToUser(user, 'JS', 'ts')

  expect(user).not.toBe(copyUser);
  expect(user.laptop).toBe(copyUser.laptop);
  expect(user.address).toBe(copyUser.address);
  expect(user.books).not.toBe(copyUser.books);
  expect(copyUser.books[1]).toBe('ts');
  expect(user.books[1]).toBe('JS')
})

test('increase the skills user', () => {
  let user: userWidthLaptopType & userBooksType & skillType = {
    name: 'Andrey',
    age: 36,
    address: {
      city: 'Krasnodar',
      street: 'Veronskaya'
    },
    laptop: {
      title: 'Asus',
      model: 'Vivobook'
    },
    books: ['Head First HTML&CSS', 'JS', 'React'],
    skills: [30, 50, 80, 22, 51, 49]
  }

  const copyUser = increaseTheSkill(user)

  expect(user).not.toBe(copyUser);
  expect(user.laptop).toBe(copyUser.laptop);
  expect(user.address).toBe(copyUser.address);
  expect(user.books).toBe(copyUser.books);
  expect(copyUser.skills[0]).toBe(40);
  expect(copyUser.skills[1]).toBe(60)
  expect(copyUser.skills[2]).toBe(80)
  expect(copyUser.skills[3]).toBe(32)
  expect(copyUser.skills[4]).toBe(51)
  expect(user.skills[0]).toBe(30)
})

test('remove book', () => {
  let user: userWidthLaptopType & userBooksType = {
    name: 'Andrey',
    age: 36,
    address: {
      city: 'Krasnodar',
      street: 'Veronskaya'
    },
    laptop: {
      title: 'Asus',
      model: 'Vivobook'
    },
    books: ['Head First HTML&CSS', 'JS', 'React']
  }

  const copyUser = removeBook(user, 'JS')

  expect(user).not.toBe(copyUser);
  expect(user.laptop).toBe(copyUser.laptop);
  expect(user.address).toBe(copyUser.address);
  expect(user.books).not.toBe(copyUser.books);
  expect(user.books[0]).toBe('Head First HTML&CSS')
  expect(user.books[1]).toBe('JS')
  expect(user.books[2]).toBe('React')
  expect(user.books.length).toBe(3)
  expect(copyUser.books[0]).toBe('Head First HTML&CSS');
  expect(copyUser.books[1]).toBe('React');
  expect(copyUser.books.length).toBe(2)
})

test('add to companies', () => {
  let user: userWidthLaptopType & widthToCompanies = {
    name: 'Andrey',
    age: 36,
    address: {
      city: 'Krasnodar',
      street: 'Veronskaya'
    },
    laptop: {
      title: 'Asus',
      model: 'Vivobook'
    },
    companies: [
      {id: 1, title: 'Епам'},
      {id: 2, title: 'Yandex'},
    ]
  }

  const copyUser = addToCompanies(user, 'Google')

  expect(user).not.toBe(copyUser);
  expect(user.companies).not.toBe(copyUser.companies);
  expect(user.companies.length).toBe(2)
  expect(copyUser.companies.length).toBe(3);
  expect(copyUser.companies[2].title).toBe('Google');
})

test('update company', () => {
    let user: userWidthLaptopType & widthToCompanies = {
      name: 'Andrey',
      age: 36,
      address: {
        city: 'Krasnodar',
        street: 'Veronskaya'
      },
      laptop: {
        title: 'Asus',
        model: 'Vivobook'
      },
      companies: [
        {id: 1, title: 'Епам'},
        {id: 2, title: 'Yandex'},
      ]
    }

    const copyUser = updateCompany(user, 1, 'Epam') as userWidthLaptopType & widthToCompanies

    expect(user).not.toBe(copyUser);
    expect(user.address).toBe(copyUser.address)
    expect(user.companies).not.toBe(copyUser.companies);
    expect(user.companies.length).toBe(2)
    expect(copyUser.companies.length).toBe(2);
    expect(user.companies[0].title).toBe('Епам')
    expect(copyUser.companies[0].title).toBe('Epam')
  }
)