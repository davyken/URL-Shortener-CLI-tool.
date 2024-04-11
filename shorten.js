import { program } from 'commander';
import axios from 'axios';
import Url from './url.js';
import listShortenedURLs from './list.js';
import { config } from 'dotenv';
config();

function executeCLI() {
  program
    .version('1.0.0')
    .description('Node js URL Shortener');

  program
    .command('shorten <url>')
    .description('Shorten a URL')
    .action(async (url) => {
      try {
        const shortenedURL = await generateShortURL(url);
        console.log(`Shortened URL: ${shortenedURL}`);
      } catch (error) {
        console.error('Error generating shortened URL:', error.message);
      }
    });

  program
    .command('list')
    .description('List all shortened URLs')
    .action(async () => {
      try {
        await listShortenedURLs();
      } catch (error) {
        console.error('Error obtaining shortened URLs:', error);
      }
    });

  program.parse(process.argv);
}

async function generateShortURL(url) {
  try {
    const cleanUriEndpoint = process.env.API_KEY;
    const response = await axios.post(cleanUriEndpoint, {
      url: url
    });
    const shortenedURL = response.data.result_url;

    const createdUrl = await Url.create({
      long_url: url,
      short_url: shortenedURL
    });

    return createdUrl.short_url;

  } catch (error) {
    console.error('Error while generating shortened URL:', error);
    throw error;
  }
}

export default executeCLI;