import express  from "express";
import dbModule from "./database.js"

const port = 3003;
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', async (req, res) => {
    console.log("Home route hit");
    res.status(200).json({message:"Home route hit"});
});

app.get('/api/games/list', async (req, res) => {
    try {
        const db = await dbModule.connect();
        const games = await dbModule.getGames();
        res.status(200).json(games);
    } catch (err) {
        res.status(500).json({error:err});
    }
});

app.get('/api/games/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const db = await dbModule.connect();
        const game = await dbModule.getGameById(id);
        res.status(200).json(game);
    } catch (err) {
        res.status(500).json({error:err});
    }
});

app.post('/api/games/add', async (req, res) => {
    const game = req.body;
    try {
        const db = await dbModule.connect();
        const result = await dbModule.addGame(game);
        res.status(200).json({message:`Added ${game.title} to MongoDB`});
    } catch (err) {
        res.status(500).json({error:err});
    }
});

app.put('/api/games/update/:id', async (req, res) => {
    const id = req.params.id;
    const updatedBook = req.body;
    try {
        const db = await dbModule.connect();
        const result = await dbModule.updateGame(id, updatedBook);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({error:err});
    }
});

app.delete('/api/games/delete/:id', async (req, res) => {
    const id = req.params.id;
    const result = await dbModule.deleteGame(id);
    res.status(200).json(result);
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
