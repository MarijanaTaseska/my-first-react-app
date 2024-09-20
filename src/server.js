require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.static('client/build'));

app.get('/', (req, res) => {
    res.send('Hello from Marianas React APP')
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

