import Url from './url.js';

async function ShortenedURLsList() {
  const shortenedURLs = await Url.findAll({
    attributes: ['id', 'short_url'],
});
let output = 'Here is your shortened URLs:\n';
shortenedURLs.forEach((shortURL) => {
  output += `ID: ${shortURL.id}, URL: ${shortURL.short_url}\n`;
});
console.log(output);
}


export default ShortenedURLsList;
