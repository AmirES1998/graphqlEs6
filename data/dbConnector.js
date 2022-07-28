import mongoose from "mongoose";
import Sequelize from "sequelize"; 
import _ from 'loadsh'; 
import casual from 'casual' ; 
 
// mongo connection

mongoose.Promise = global.Promise ; 

mongoose.connect('mongodb://localhost:27017/friends') ; 

const friendSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: { 
        type: String
    },
    gender: {
        type: String
    },
    language: {
        type : String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    }
}); 

const Friends = mongoose.model('friends', friendSchema);

// Sql

const sequelize = new Sequelize('database', null, null, {
    dialect: 'sqlite',
    storage: './amir.sqlite'
}) ; 

const Aliens = sequelize.define('Aliens', {
    firstName: {type: Sequelize.STRING},
    lastName: {type: Sequelize.STRING},
    planet: {type: Sequelize.STRING},
}) ; 

Aliens.sync({force: true}).then(() => {
    _.times(10,(i) => {
        Aliens.create({
            // firstName: casual._first_name,
            // lastName: casual._last_name,
            // planet: casual.word,

            
            firstName: "firstName" +  i,
            lastName: "lastName" +  i,
            planet: casual.word,
        })
    })
})




export {Friends, Aliens} ; 