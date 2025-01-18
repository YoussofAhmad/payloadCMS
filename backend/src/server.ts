import express from 'express';
import payload from 'payload';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

const app = express();

// Add CORS middleware
app.use(cors({
  origin: 'http://localhost:3001', // Your frontend URL
  credentials: true
}));

// Configure Mongoose globally
mongoose.set('bufferCommands', true);
mongoose.set('bufferTimeoutMS', 30000);
mongoose.set('debug', true);

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || '',
    mongoURL: process.env.MONGO_URI || '',
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  app.listen(3000, async () => {
    console.log('Express is now listening on port 3000');
  });
};

start();