export interface user {
    firstname: string;
    lastname: string;
    birthdate: Date;
    email: string;
    phone: string;
    street: string;
    number: number;
    postalcode: number;
    city: string;
    password: string;
    typename: string;
    member: string;
    leidingover: string;
    duty: string;
}

export enum usertype {
    'Lid',
    'Leiding',
    'Ouder',
}

export enum group {
    'Rubskes',
    'Leeuwkes',
    'Jongknapen',
    'Knapen',
    'Jonghernieuwers',
    'Hernieuwer',
    'Leiding',
    '',
}

export enum duty {
    'Bonds',
    '',
}
