export interface user {
  id: number;
  naam: string;
  password: string;
  email: string;
  role: Roles;
}

export interface leidingNummer {
  voornaam: string;
  achternaam: string;
  number: string;
  img: string;
}

export enum Roles {
  GUEST = "GUEST",
  ADMIN = "ADMIN",
  MODERATOR = "MODERATOR",
}
