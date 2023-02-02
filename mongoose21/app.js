// CRUD With node-mongo
require('dotenv').config();
const {MongoClient} =require('mongodb')
const client = new MongoClient(process.env.MONGO_URL)
async function main() {
    await client.connect();
    console.log('connexion OK !');
    const db = client.db('mongoose');
    const collection = db.collection('docMongoose');
        //CREATE
    // try {
    //     insertData = await collection.insertMany([
    //         {
    //             name:"NIASS",
    //             age:25,
    //             sexe:"M",
    //             hobby:"codding"
    //         },
    //         {
    //             name:"SY",
    //             age:23,
    //             sexe:"M",
    //             hobby:"driving"
    //         },
    //         {
    //             name:"NDIAYE",
    //             age:30,
    //             sexe:"F",
    //             hobby:"cooking"
    //         },
    //         {
    //             name:"DIOUF",
    //             age:23,
    //             sexe:"M",
    //             hobby:"talking"
    //         },
    //         {
    //             name:"DIOP",
    //             age:25,
    //             sexe:"F",
    //             hobby:"reading"
    //         }
    //     ]);
    //     console.log('document inséres => ',insertData)
    // } catch (e) {
    //     throw e;
    // }
        // READ
    // try {
        //const findData = await collection.findData();
        // const findData = await collection.findOne({name:"NIASS"});
        // console.log('document trouvés =>',findData);
    
        // const findData = await collection.find({age:25});
        // console.log('document trouvés =>',await findData.toArray());
    // } catch (e) {
    //     throw e;
    // }

    // try {
        /** Update One */
        // const Updatebiram = await collection.updateOne({name:"DIOUF"},{
        //     $set:{name:"Mame Birame Diouf",sexe:28}
        // });
        // console.log(await Updatebiram);

        /**Update many */
        // const updateAge =await collection.updateMany({age:25},{
        //     $set:{age:28}
        // });
        // console.log(await updateAge);
    // } catch (e) {
    //     throw e;
    // }
    /** Delete */
    try {
        /** deleteOne */
        // const deleteBiram =await collection.deleteOne({name:"Mame Birame Diouf"})
        // console.log(await deleteBiram)
        /** delete many */
        
        /** delete many */
        const deleteMany = await collection.deleteMany({age:28})
        console.log(await deleteMany)
    } catch (e) {
        throw e;
    }
    return 'done OK !'
}
main()
.then(console.log)
.catch(console.error)
.finally(client.close());