const express = require('express');
const morgan = require('morgan');

const stage = process.env.STAGE || 'dev';
const port = process.env.PORT || 8080;

const routes = express.Router();

routes.get('/health', (req, res) => res.json({
        ok: true, 
        env: stage,
        message: "everything is awesome",
    })
);

const app = express();
app.use(morgan('combined'));
app.use(`/${stage}`, routes);
app.listen(port)
