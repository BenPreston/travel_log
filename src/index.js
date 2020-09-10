const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const middlewares = require('./middlewares')

const app = express();

app.use(helmet())
app.use(morgan('common'))
app.use(cors( {
    origin: 'http://localhost:3000'
}))

app.get('/', (req, res) => {
    res.json({
        message: 'Hi there'
    })
})

app.use(middlewares.notFound)

app.use(middlewares.errorHandler)

const port = process.env.listen || 1300

app.listen(port, () => {
    console.log(`Ẁe are running live on port: ${port}`);
}) 