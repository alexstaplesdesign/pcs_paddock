import { createRequire } from 'module';
const req = createRequire(import.meta.url);
const puppeteer = req('C:/Users/ajsta/AppData/Local/Temp/node_modules/puppeteer/lib/cjs/puppeteer/puppeteer.js');

const id = process.argv[2] || 'hero';
const selector = id === 'footer' ? 'footer' : '#' + id;

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/ajsta/.cache/puppeteer/chrome/win64-146.0.7680.66/chrome-win64/chrome.exe',
  args: ['--no-sandbox']
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
await new Promise(r => setTimeout(r, 1000));
const el = await page.$(selector);
// Get page-absolute position before scrolling
const box = await page.evaluate(sel => {
  const el = document.querySelector(sel);
  const rect = el.getBoundingClientRect();
  return { x: rect.left + window.scrollX, y: rect.top + window.scrollY, width: rect.width, height: rect.height };
}, selector);
// Scroll to element to trigger IntersectionObserver reveal animations
await page.evaluate(y => window.scrollTo(0, y), box.y);
await new Promise(r => setTimeout(r, 700));
await page.screenshot({
  path: `temporary screenshots/review-${id}.png`,
  clip: { x: box.x, y: box.y, width: box.width, height: Math.min(box.height, 1400) }
});
await browser.close();
console.log(`saved review-${id}.png`);
