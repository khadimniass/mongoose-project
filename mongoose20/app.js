// CRUD With node-mongo
require('dotenv').config();
const {MongoClient} =require('mongodb')
const client = new MongoClient(process.env.MONGO_URL)
async function main() {
    await client.connect();
    console.log('connexion OK !');
    const db = client.db('mongoose');
    const collection = db.collection('docMongoose');
    const docInseres = collection.insertMany([
        {nom:"niass",prenom:"khadim"},
        {nom:"sy",prenom:"elhadji"},
        {nom:"Diouf",prenom:"Biram"},
    ])
    console.log(`document insérés => ${docInseres}`)
    return 'done OK !'
}
main()
.then(console.log)
.catch(console.error)
.finally(client.close());