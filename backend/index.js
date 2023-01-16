const { Octokit } = require("octokit");
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json());

const port = process.env.PORT || 3000;

const octokit = new Octokit({
    auth: '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'
});

app.get('/', (req, res) => {
    res.send('Hello from server.');
});

app.get('/api/profile/:username', async (req, res, next) => {
    try {
        const profile = await octokit.request('GET /users/{username}', {
            username: req.params.username
        });
        res.send(profile);
    } catch (error) {
        next('Something went wrong.');
    }
});

app.get('/api/repos', async (req, res, next) => {
    const { page, username, limit } = req.query;
    try {
        const repos = await octokit.request('GET /users/{username}/repos', {
            username: username,
            page: page ? page : 1,
            per_page: limit ? limit : 10
        });

        res.send(repos);
    } catch (error) {
        next('Something went wrong.');
    }
});

app.use((error, req, res, next) => {
    res.send({ error });
});

app.listen(port, () => console.log('server running on port ' + port));


