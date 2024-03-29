import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import routes from './routes/routes.js';
import { connect } from './utils/db.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
connect();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, '/public')));
app.use(routes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
