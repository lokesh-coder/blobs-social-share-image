const puppeteer = require("puppeteer");

module.exports = async function (html) {
  if (!html) {
    throw Error("You must provide an html property.");
  }
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(html);
  const element = await page.$("body");
  const buffer = await element.screenshot({});
  await browser.close();
  return buffer;
};
