const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 430, height: 932 } });
  
  page.on('console', msg => console.log('BROWSER_LOG:', msg.text()));
  page.on('pageerror', err => console.error('BROWSER_ERROR:', err));
  
  await page.goto('http://localhost:8082');
  await page.waitForTimeout(4000);
  
  await page.screenshot({ path: 'screenshot.png', fullPage: false });
  console.log('Screenshot saved to screenshot.png');
  
  await browser.close();
})();
