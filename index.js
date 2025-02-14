require('dotenv/config');
const cors = require('cors');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');
const appRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT ?? 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(appRoutes);

app.set('trust proxy', 1);

app.use(
    '/',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpecs, {
        customSiteTitle: 'Todos API',
        customfavIcon: undefined
    })
);

app.listen(PORT, () => {
    console.log(`✅✅✅...Server exposed on port: ${PORT}...✅✅✅`);
});
