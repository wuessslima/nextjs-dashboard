import { Customer, Invoice, Revenue, User } from './definitions';

export const users: User[] = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: 'password123',
  },
];

export const customers: Customer[] = [
  {
    id: '3958dc9e-712f-404b-b447-e8d898d0a8af',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba.png',
  },
  {
    id: '3958dc9e-712f-404b-b447-e8d898d0a8b0',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee.png',
  },
  {
    id: '3958dc9e-712f-404b-b447-e8d898d0a8b1',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector.png',
  },
  {
    id: '50ca3e18-62cd-11ed-81ce-0242ac130002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven.png',
  },
  {
    id: '3958dc9e-712f-404b-b447-e8d898d0a8b2',
    name: 'Krish Giri',
    email: 'krish@giri.com',
    image_url: '/customers/krish.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-5d333944107f',
    name: 'Brent Diverson',
    email: 'brent@diverson.com',
    image_url: '/customers/brent.png',
  },
];

export const invoices: Invoice[] = [
  {
    customer_id: '3958dc9e-712f-404b-b447-e8d898d0a8af',
    amount: 15795,
    status: 'pending',
    date: '2024-12-06',
    id: '0001',
  },
  {
    customer_id: '3958dc9e-712f-404b-b447-e8d898d0a8b0',
    amount: 10000,
    status: 'pending',
    date: '2024-11-14',
    id: '0002',
  },
  {
    customer_id: '3958dc9e-712f-404b-b447-e8d898d0a8b1',
    amount: 6500,
    status: 'pending',
    date: '2024-10-29',
    id: '0003',
  },
  {
    customer_id: '50ca3e18-62cd-11ed-81ce-0242ac130002',
    amount: 3210,
    status: 'paid',
    date: '2024-09-10',
    id: '0004',
  },
  {
    customer_id: '3958dc9e-712f-404b-b447-e8d898d0a8b2',
    amount: 6070,
    status: 'paid',
    date: '2024-08-05',
    id: '0005',
  },
  {
    customer_id: '76d65c26-f784-44a2-ac19-5d333944107f',
    amount: 14201,
    status: 'pending',
    date: '2024-07-12',
    id: '0006',
  },
  {
    customer_id: '3958dc9e-712f-404b-b447-e8d898d0a8af',
    amount: 9800,
    status: 'pending',
    date: '2024-06-27',
    id: '0007',
  },
  {
    customer_id: '3958dc9e-712f-404b-b447-e8d898d0a8b0',
    amount: 8147,
    status: 'paid',
    date: '2024-06-09',
    id: '0008',
  },
];

export const revenue: Revenue[] = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3400 },
  { month: 'Dec', revenue: 4800 },
];
