import axios from "axios";

export type UserData = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: object[]
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }

}


export default class User{
    constructor(){}

    async getAllUsers(): Promise<UserData[]>{
        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            const { data } = res;
            return data
        } catch(e){
            throw new Error("Cannot fetch user data!"); 
        }
    }

    async getRandomUser(userData: Promise<UserData[]>): Promise<UserData>{
        const data = await userData
        const randInx = Math.floor(Math.random() * data.length)
        return data[randInx]
    }

    printBasicInformation(userData: UserData): void{
        const { ...addressInfo } = userData.address
        console.log(`${userData.name} is from 
        ${addressInfo.suite}, ${addressInfo.street}, ${addressInfo.city}, ${addressInfo.zipcode}`
        )
    }
}

