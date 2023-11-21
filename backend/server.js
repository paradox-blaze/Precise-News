import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = 7256;

app.use(cors());
app.use(express.static('public'))


mongoose.connect('mongodb://localhost:27017/wordList');

const wordSchema = new mongoose.Schema({
    word: String,
});

const WordValid = mongoose.model('WordValid', wordSchema, 'wordlevalid');
const WordSolutions = mongoose.model('WordSolutions', wordSchema, 'wordlesolutions');


app.get('/getAllWords', async (req, res) => {
    res.json(await WordValid.find({}, { _id: 0, word: 1 }));
})

app.get('/getWordOfDay', async (req, res) => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const dateNumeric = day * 1000000 + month * 10000 + year;

    const seed = dateNumeric % (await WordSolutions.countDocuments());
    const randomWord = await WordSolutions.findOne().skip(seed + 1);
    res.json({ word: randomWord.word.toUpperCase() });
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
