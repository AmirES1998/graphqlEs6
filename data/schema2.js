import {resolvers} from './resolvers' ; 

import { makeExecutableSchema } from 'graphql-tools';



const typeDefs = `
type Friend { 
    id : ID
    firstName: String
    lastName: String
    gender: Gender
    age: Int
    language: String
    email: String
}

type Alien { 
    id :ID
    firstName: String
    lastName: String
    planet: String
}

type Contact { 
    firstName: String
    lastName: String
}

enum Gender { 
    MALE
    FEMALE
    OTHER
}

type Query { 
        getFriend(id :ID): Friend
        getOneFriend(id:ID!) : Friend
        getAliens: [Alien]
    }
    
input FriendInput { 
    id : ID
    firstName: String!
    lastName: String
    gender: Gender
    age: Int
    language: String
    email: String
}

type Mutation { 
    createFriend(input: FriendInput): Friend

    updateFriend(input: FriendInput): Friend

    deleteFriend(id: ID!) :String
}


`;
 
const schema = makeExecutableSchema({typeDefs, resolvers,}) ;

export {schema} ;