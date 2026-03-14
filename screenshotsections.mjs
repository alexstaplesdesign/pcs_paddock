import { createRequire } from 'module';
const req = createRequire(import.meta.url);
const puppeteer = req('C:/Users/ajsta/AppData/Local/Temp/node_modules/puppeteer/lib/cjs/puppeteer/puppeteer.js');

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/ajsta/.cache/puppeteer/chrome/win64-146.0.7680.66/chrome-win64/chrome.exe',
  args: ['--no-sandbox']
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
await new Promise(r => setTimeout(r, 1200));

const sections = ['hero','about','menu','specials','hours','order','reservations','footer'];
for (const id of sections) {
  const el = await page.$('#' + id) || await page.$('footer');
  if (!el) continue;
  const box = await el.boundingBox();
  await page.screenshot({
    path: `temporary screenshots/section-${id}.png`,
    clip: { x: box.x, y: box.y, width: box.width, height: Math.min(box.height, 1400) }
  });
  console.log('saved section-' + id);
}
await browser.close();
