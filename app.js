#! /usr/bin/env node

import { program } from 'commander';
import  executeCLI  from './shorten.js';
import pool from './DB.js'; 
import { config } from 'dotenv';
config();

program
  .name('nodeJS-url-shortener') 
  .description('Nodejs URL Shortener');

async function authenticate() {
  try {
    await pool.authenticate();
    console.log('Database connection establishement successful.');
    executeCLI();
  } catch (error) {
    console.error('Unable to connect to your database:', error);
    throw error;
  }
}

authenticate();