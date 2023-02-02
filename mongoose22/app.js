// CRUD With node-mongo
require('dotenv').config();
const mongoose = require('mongoose')

main().catch(er=>{console.log(er)})

async  function main() {
    await mongoose.connect(process.env.MONGO_URL)
    const User = mongoose.model('User',{
        name:String,
        sexe:String,
        age:Number,
        hobby:String
    });
    const firstUser = new User({
        name:"Khadim NIASS",
        sexe:"Masculin",
        age:25,
        hobby:"listening"
    });

    const secondUser = new User({
        name:"Elhadji SY",
        sexe:"Masculin",
        age:28,
        hobby:"reading"
    });

    console.log(firstUser,secondUser);
    await firstUser.save();
    await secondUser.save();
}