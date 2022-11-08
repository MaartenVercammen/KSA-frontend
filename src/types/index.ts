export interface User {
  id?: string;
  firstName: string;
  lastName: string,
  password: string;
  email: string;
  role: Roles;
}

export interface Groep {
  naam: string;
  logo: string;
}

export interface LeidingNummer {
  voornaam: string;
  achternaam: string;
  number: string;
  img: string;
}

export enum Roles {
  BRAGGEL = 'BRAGGEL',
  ADMIN = 'ADMIN',
  BONDS = 'BONDS',
}

export interface Post {
  id?: string;
  title: string;
  content: string;
  date?: Date;
}

export interface Magazine {
  id?: string,
  title: string,
  path: string,
}

export enum MagazineTypes {
  SPECIAL = 'special',
  MONTHLY = 'monthly',
}
