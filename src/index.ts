import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  console.log('Request received on endpoint ');
  res.status(200).send({ 'name': 'Aayush' });
})

app.post('/', (req: Request, res: Response) => {
  console.log('POST request received on the endpoint');
  console.log('Request body', req.body);
  const color = req.body['color']
  res.status(200).send({ 'name': color });
})

app.listen(port, () => {
  console.log(`App listening on ${port}`);
})


