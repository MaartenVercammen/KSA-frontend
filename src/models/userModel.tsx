import { user } from "../types";


const formatUsersData = (users: Array<user>) =>{
    const newUsers: Array<user> = users.map(user => ({
            birthdate: new Date(user.birthdate),
            city: user.city,
            email: user.email,
            firstname: user.firstname,
            id: user.id,
            lastname: user.lastname,
            number: user.number,
            password: user.password,
            phone: user.phone,
            postalcode: user.postalcode,
            street: user.street,
            typename: user.typename
    }))
    return newUsers
}






export { formatUsersData }