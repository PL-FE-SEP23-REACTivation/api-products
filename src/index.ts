import dotenv from 'dotenv';
import cors from 'cors';
import express, { Express } from 'express';
import routes from './routes/routes.js';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/', routes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
