
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb'

let _db = null;

async function connect() {
    if (!_db) {
        const connectionString = "mongodb+srv://treypoynter:dirtsucks%2346@cluster0.rzjkspz.mongodb.net/?retryWrites=true&w=majority";
        const dbName = "RetroAmazon";
        const client = await MongoClient.connect(connectionString);
        _db = client.db(dbName);
    }
    return _db;
}

async function ping() {
    const db = await connect();  // calls the connect method
    await db.command({ping:1});
    console.log(`Pinged your deployment. Connected to MongoDB Services!`);
}

async function getGames() {
    const db = await connect();
    const games = await db.collection("game").find().toArray();
    return games;
}

async function getGameById(id) {
    const db = await connect();
    const game = await db.collection('game').findOne({_id:new ObjectId(id)});
    return game;
}

async function addGame(game) {
    const db = await connect();
    const result = await db.collection('game').insertOne(game);
    return result;
}

async function updateGame(id, updatedGame) {
    const db = await connect();
    const result = await db.collection('game').updateOne({_id:new ObjectId(id)}, {$set:{...updatedGame}});
    return result;
}

async function deleteGame(id) {
    const db = await connect();
    const result = await db.collection('game').deleteOne({_id:new ObjectId(id)});
    return result;
}

ping();

export default {connect, ping, getGames, getGameById, addGame, updateGame, deleteGame}
