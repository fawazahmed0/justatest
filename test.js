const {firefox} = require('playwright');

(async () => {

    const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://translate.google.com');

await page.fill('textarea', `有些人说：我们已信真主和末日了。其实，他们绝不是信士。
他们想欺瞒真主和信士，其实，他们只是自欺，却不觉悟。
他们的心里有病，故真主增加他们的心病；他们将为说谎而遭受重大的刑罚。
有人对他们说：你们不要在地方上作恶。他们就说：我们只是调解的人。`);

await new Promise(r => setTimeout(r, 1000));

sectionText = await page.$eval('.transliteration-content', e => e.textContent)


console.log(sectionText)
//    await browser.close();

})();
