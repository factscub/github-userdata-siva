const { Octokit } = require("octokit");
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors({
    origin:'*',
    methods:['GET']
}))
app.use(express.json());

const port = process.env.PORT || 3000;

const octokit = new Octokit({
    auth: process.env.AUTH
});

app.get('/', (req, res) => {
    res.send('Hello from server.');
});

app.get('/api/username/:username', async (req, res, next) => {
    try {
        const profile = await octokit.request('GET /users/{username}', {
            username: req.params.username
        });

        res.send(profile);
    } catch (error) {
        // console.log(error.status)
        next(error?.response?.data?.message);
    }
});


app.get('/api/repos', async (req, res, next) => {
    const { page, username } = req.query;
    // console.log({ page, username })
    try {
        const repos = await octokit.request('GET /users/{username}/repos', {
            username: username,
            page: page ? page : 1,
            per_page: 10
        });

        res.status(200).send(repos);
    } catch (error) {
        next('Something went wrong.');
    }
});


app.get('/api/languages', async (req, res, next) => {

    const { username: owner, repo } = req.query;

    try {
        const languages = await octokit.request('GET /repos/{owner}/{repo}/languages', {
            owner,
            repo
        });

        res.send(languages);
    } catch (error) {
        next('Something went wrong.');
    }
})
app.use((error, req, res, next) => {
    res.status(404).send({ error });

});

app.listen(port, () => console.log('server running on port ' + port));


