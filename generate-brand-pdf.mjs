import { createRequire } from 'module';
const req = createRequire(import.meta.url);
const puppeteer = req('C:/Users/ajsta/AppData/Local/Temp/node_modules/puppeteer/lib/cjs/puppeteer/puppeteer.js');

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/ajsta/.cache/puppeteer/chrome/win64-146.0.7680.66/chrome-win64/chrome.exe',
  args: ['--no-sandbox']
});
const page = await browser.newPage();
await page.goto('http://localhost:3000/brand-identity.html', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 2000));

await page.pdf({
  path: 'brandidentity.pdf',
  format: 'A4',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 }
});

await browser.close();
console.log('saved brandidentity.pdf');
