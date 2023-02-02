// CRUD With node-mongo
require('dotenv').config();
const mongoose = require('mongoose')
const validator = require('validator')
main().catch(er=>{console.log(er)})

async  function main() {
    await mongoose.connect(process.env.MONGO_URL)
    const User = mongoose.model('User',{
        name:{
            type:String,
            default:"Bamba",
        },
        age:{
            type:Number,
            required:true,
            validate(v){
                if(v<0) throw Error('age doit etre positif');
            }
        },
        sexe:{
            type:String
        },
        email:{
            type:String,
            validate(v){
                if(!validator.isEmail(v)) throw new Error('email non valide');
            }
        },
        password:{
            type:String,
            validate(v){
                if(!validator.isLenght(v,{min:4,max:6})) throw new Error('le mot de pass n"est pas valide ');
            
            }
        }
    });
    const firstUser = new User({
        sexe:"Masculin",
        age:25,
        email:"",
        password:""
    });

    const secondUser = new User({
        name:"Elhadji SY",
        sexe:"Masculin",
        age:28,
        email:"",
        password:""
    });

    const firstsave = await firstUser.save();
    const secondsave = await secondUser.save();
    console.log(firstsave, secondsave);
}