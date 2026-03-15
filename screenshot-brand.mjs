import { createRequire } from 'module';
const req = createRequire(import.meta.url);
const puppeteer = req('C:/Users/ajsta/AppData/Local/Temp/node_modules/puppeteer/lib/cjs/puppeteer/puppeteer.js');

const PH = 1123; // A4 height in px at 96dpi
const browser = await puppeteer.launch({
  executablePath: 'C:/Users/ajsta/.cache/puppeteer/chrome/win64-146.0.7680.66/chrome-win64/chrome.exe',
  args: ['--no-sandbox']
});
const page = await browser.newPage();
await page.setViewport({ width: 794, height: PH });
await page.goto('http://localhost:3000/brand-identity.html', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 1500));

const pages = ['cover','overview','logos','colors','pairings','typography','voice','reference'];
for (let i = 0; i < pages.length; i++) {
  await page.screenshot({
    path: `temporary screenshots/review-brand-${pages[i]}.png`,
    clip: { x: 0, y: i * PH, width: 794, height: PH }
  });
  console.log(`saved review-brand-${pages[i]}.png`);
}
await browser.close();
