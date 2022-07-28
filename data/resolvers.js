import mongoose from 'mongoose';
import { Aliens, Friends } from './dbConnector';

// class Friend { 
//     constructor(id, {firstName, lastName, gender, age,  language, email}) {
//         this.id = id; 
//         this.firstName = firstName ; 
//         this.lastName = lastName ; 
//         this.gender = gender ; 
//         this.age = age ; 
//         this.language = language ; 
//         this.email = email ;
//     }
// }

// const friendDatabase = {} ; 

// resolver map

export const resolvers = {

    Query: {
        getFriend: ({id}) => {
            return new Friend(id, friendDatabase[id]) ;
        },
        getOneFriend: (root, {id}) => {
            return new Promise((resolve, object) => {
                Friends.findById(id, (err, friend) => {
                    if(err) reject(err)
                    else resolve(friend)
                })
            })
        },
        getAliens: () => {
            return Aliens.findAll() ; 
        }
    },

    Mutation: {
        // for create user on mongoDb
        createFriend: (root, {input}) => {

            const newFriend = new Friends({
                firstName: input.firstName ,
                lastName: input.lastName ,
                gender: input.gender ,
                language: input.language ,
                age: input.age ,
                email: input.email ,
            })

            newFriend.id = newFriend._id ; 
            return new Promise((resolve, object)=>{
                newFriend.save((err)=>{
                    if(err) reject(err)
                    else resolve(newFriend)
                })
            })
        },

        updateFriend: (root, {input}) => {
            return new Promise((resolve, object) => { 
                Friends.findOneAndUpdate({_id: input.id}, input, {new: true},(err, friend)=>{
                    if(err) reject(err)
                    else resolve(friend)
                })
            })
        },

        deleteFriend: (root, {id}) => {
            return new Promise((resolve, object) => {
                Friends.findOneAndDelete({_id: id}, (err) => {
                    if(err) reject(err)
                    else resolve('Successfully deleted friend')
                })
            })
        },

        // for memory storage
       /*  createFriend: ({input}) => {
            let id = require('crypto').randomBytes(10).toString('hex') ;
            friendDatabase[id] = input ; 
            console.log(friendDatabase[id], id);
            return new Friend(id, input) ;
        } */

        
    }
} ; 
