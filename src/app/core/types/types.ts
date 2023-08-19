export interface Customers{
    id: number,
    firstName: string,
    lastName: string,
    dateBirth: Date,
    cpf: string,
    gender: string,
    phone: string,
    email: string,
    addressId: number
}

export interface Address{
    id: number,
    street: string,
    number: number,
    neighborhood: string,
    city: string,
    state: string,
    country: string,
    zipcode: string
}

export interface Orders{
    date: any
    id: number,
    requestedDate: string,
    status: string,
    items: string
}

export interface Products{
    id: number,
    name: string,
    description: string,
    price: number,
    imgUrl: string,
    category: string,
    sku: number,
    supplier: string
}

export interface Login{
    id: number,
    name: string,
    username: string,
    password: string,
    role: string
}

export interface Role {
    value: string;
    viewValue: string;
  }