export const productsList: Product[] = [
{ id: 1 , name: 'Mustang' , price: 550000},
{ id: 2 , name: 'Civic' , price: 500000},
{ id: 3 , name: 'Camaro' , price: 510000},
{ id: 4 , name: 'Charger' , price: 450000},
{ id: 5 , name: 'Corvette' , price: 900000}
]

export interface Product{
  id: number;
  name: string;
  price: number
}
