const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const TARGET_URL = 'https://neelbelsare.vercel.app';
const OUT_DIR = path.join(__dirname, '..', 'docs', 'screenshots');

async function capture() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  console.log('Launching Chrome from:', CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  console.log('Navigating to:', TARGET_URL);
  await page.goto(TARGET_URL, { waitUntil: 'networkidle2', timeout: 30000 });

  // Wait 3 seconds for initial animations & video poster to settle
  await new Promise(r => setTimeout(r, 3000));

  // 1. Hero Section
  console.log('Capturing 01_hero.png...');
  await page.screenshot({ path: path.join(OUT_DIR, '01_hero.png') });

  // 2. Name Reveal & About
  console.log('Capturing 02_about.png...');
  await page.evaluate(() => {
    const el = document.getElementById('name-reveal') || document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(OUT_DIR, '02_about.png') });

  // 3. Projects Section (Top / Pillars)
  console.log('Capturing 03_flagship_project.png...');
  await page.evaluate(() => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(OUT_DIR, '03_flagship_project.png') });

  // 4. 10-Minute Order Lifecycle Flow
  console.log('Capturing 04_order_flow.png...');
  await page.evaluate(() => {
    window.scrollBy(0, 750);
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(OUT_DIR, '04_order_flow.png') });

  // 5. Engineering Blog Section
  console.log('Capturing 05_engineering_blog.png...');
  await page.evaluate(() => {
    const el = document.getElementById('blog');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(OUT_DIR, '05_engineering_blog.png') });

  // 6. Tech Stack Matrix
  console.log('Capturing 06_tech_stack.png...');
  await page.evaluate(() => {
    const el = document.getElementById('techstack');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(OUT_DIR, '06_tech_stack.png') });

  await browser.close();
  console.log('All screenshots captured successfully in:', OUT_DIR);
}

capture().catch(err => {
  console.error('Capture failed:', err);
  process.exit(1);
});
