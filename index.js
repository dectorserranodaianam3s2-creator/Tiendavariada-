import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const uri = "mongodb://dectorserranodaianam3s2_db_user:bakugo2317@ac-otfjtrq-shard-00-00.w1txzzz.mongodb.net:27017,ac-otfjtrq-shard-00-01.w1txzzz.mongodb.net:27017,ac-otfjtrq-shard-00-02.w1txzzz.mongodb.net:27017/?ssl=true&replicaSet=atlas-bpl10u-shard-0&authSource=admin&appName=Cluster0";

const client = new MongoClient(uri, {
  tls: true,
  tlsAllowInvalidCertificates: true
});

let db;

export async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db("tienda_variada");
    console.log("✅ Conectado a tienda_variada");
  }
  return db;
}

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/productos', async (req, res) => {
  const db = await connectDB();
  const datos = await db.collection('productos').find({}).toArray();
  res.json(datos);
});

app.get('/api/categorias', async (req, res) => {
  const db = await connectDB();
  const datos = await db.collection('Categoría').find({}).toArray();
  res.json(datos);
});

app.get('/api/clientes', async (req, res) => {
  const db = await connectDB();
  const datos = await db.collection('clientes').find({}).toArray();
  res.json(datos);
});

app.get('/api/resenas', async (req, res) => {
  const db = await connectDB();
  const datos = await db.collection('reseñas').find({}).toArray();
  res.json(datos);
});

app.get('/api/metodos-pago', async (req, res) => {
  const db = await connectDB();
  const datos = await db.collection('metodo de pago').find({}).toArray();
  res.json(datos);
});

app.listen(3000, async () => {
  console.log('🚀 Servidor en puerto 3000');
  await connectDB();
});
