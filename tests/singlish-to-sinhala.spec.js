const { test, expect } = require('@playwright/test');

test('Pos_Fun_0001 - Convert a simple daily sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('mama saruQQgal yavanavaa.');

  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  
  // Wait until the output contains any text (max 10 seconds)
  await outputBox.waitFor({ state: 'visible' });
  await expect(outputBox).toContainText('මම සරුංගල් යවනවා.', { timeout: 10000 });
});

test('Pos_Fun_0002 - Convert a longer daily sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('mama panthi ivara velaa loku naendhaage gedhara yanavaa.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('ම පන්ති ඉවර වෙලා ලොකු නැන්දාගෙ ගෙදර යනවා.');
});

test('Pos_Fun_0003 - Convert a training-related sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('adha puhuNUviim thiyanavanam mama anivaaryayen enavaa.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('අද පුහුණුවීම් තියනවනම් මම අනිවාර්යයෙන් එනවා.');
});

test('Pos_Fun_0004 - Ask about coming tomorrow', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('oyaa heta enavadha?');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('ඔයා හෙට එනවද?');
});

test('Pos_Fun_0005 - Ask to come carefully', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('parissamata gihin enna.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('පරිස්සමට ගිහින් එන්න.');
});

test('Pos_Fun_0006 - Ask to bring a pen', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('samaavelaa mata mee paeena aran dhenna puluvandha?');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('සමාවෙලා මට මේ පෑන අරන් දෙන්න පුලුවන්ද?');
});

test('Pos_Fun_0007 - Short exclamation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('yahapathakma veeva!');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('යහපතක්ම වේව!');
});

test('Pos_Fun_0008 - Forget something', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('ammatasiri mata eka poddak amathaka unaa baQQ.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('අම්මටසිරි මට එක පොඩ්ඩක් අමතක උනා බං.');
});

test('Pos_Fun_0009 - Cannot study', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('Mata paadam karanna baehae.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('මට පාඩම් කරන්න බැහැ.');
});

test('Pos_Fun_0010 - Father got a new vehicle', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').fill('thaththaa aluth vaahanayak gaththa.');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('තත්තා අලුත් වාහනයක් ගත්ත.', { timeout: 10000 });
});


test('Pos_Fun_0011 - Watching a movie', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('mama chithrapatiyak balana gaman inne.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('මම චිත්‍රපටියක් බලන ගමන් ඉන්නේ.');
});



test('Pos_Fun_0012 - Convert sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('mama labana sathiye aluth nivasak miladhii gannavaa.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('මම ලබන සතියෙ අලුත් නිවසක් මිලදී ගන්නවා.');
});

test('Pos_Fun_0013 - Convert sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('ovun pitarata saQQchaaraya karanavaa.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('ඔවුන් පිටරට සංචාරය කරනවා.');
});

test('Pos_Fun_0014 - Convert sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('aeya dhinapathaa puvathpath kiyavanavaa.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('ඇය දිනපතා පුවත්පත් කියවනවා');
});

test('Pos_Fun_0015 - Convert sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('ohu concert ekata yanna kalin office eka lock kalaa.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('ඔහු concert එකට යන්න කලින් office එක lock කලා.');
});

test('Pos_Fun_0016 - Convert sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('ohu google samaagamee CEO lesa vaeda karanavaa.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('ඔහු google සමාගමේ CEO ලෙස වැඩ කරනවා.');
});

test('Pos_Fun_0017 - Convert sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('api Chilaw beach eke aevidhimudha?');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('අපි Chilaw beach eke ඇවිදිමුද?');
});

test('Pos_Fun_0018 - Convert sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('mouse eka Rs.1500 k vuNaa.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('mouse එක Rs.1500 ක් වුණා.');
});

test('Pos_Fun_0019 - Convert sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('Film eka 10.30 AM patan gannavaa.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('Film එක 10.30 AM පටන් ගන්නවා.');
});

test('Pos_Fun_0020 - hari hari vaeda thamayi matath venne', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('hari hari vaeda thamayi matath venne.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('හරි හරි වැඩ තමයි මටත් වෙන්නෙ.');
});

test('Pos_Fun_0021 - api sakuraa mal balanna Japan yanavaa', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('api sakuraa mal balanna Japan yanavaa.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('අපි සකුරා මල් බලන්න Japan යනවා.');
});

test('Pos_Fun_0022 - api adha coffee shop ekakata yanavaa. oyath enavadha?', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('api adha coffee shop ekakata yanavaa. oyath enavadha?');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('අපි අද coffee shop එකකට යනවා. ඔයත් එනවද?');
});

test('Pos_Fun_0023 - hariyata vaedee karanna', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('hariyata vaedee karanna.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('හරියට වැඩේ කරන්න.');
});

test('Pos_Fun_0024 - ennamachaQQ heta api volleyball practice innavaa...', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('ennamachaQQ heta api volleyball practice innavaa. uBA enavadha heta? enavanam lunch ekayi vathura boothaleekuyi geenna. coach heta aluth service type ekak kiyala dhenavaa kivvaa. eeka nisaa puluvannam anivaaryen enna. uBAta oone nam havasata apith ekka yanna puluvan machoo.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('එන්නමචං හෙට අපි volleyball practice ඉන්නවා. උඹ එනවද හෙට? එනවනම් lunch එකයි වතුර බෝතලේකුයි ගේන්න. coach හෙට අලුත් service type එකක් කියල දෙනවා කිව්වා. ඒක නිසා පුලුවන්නම් අනිවාර්යෙන් එන්න. උඹට ඕනෙ නම් හවසට අපිත් එක්ක යන්න පුලුවන් මචෝ.');
});



test('Neg_Fun_001 - Handle sentence without spaces', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('matahetapanthiennavennenaee');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).not.toContainText('මට හෙට පන්ති එන්න වෙන්නෙ නෑ');
});

test('Neg_Fun_002 - Excessive spacing and line breaks', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').fill('kaviishaagee      vathura      boothalaya                                      padipelin    bimata vaetunaa');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('කවීශාගේ');
});

test('Neg_Fun_003 - Special characters & symbol', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').fill('naQQgii perapaasal &navaa.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('නංගී පෙරපාසල්');
});

test('Neg_Fun_004 - Long informal paragraph with typos', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').fill('mata badagini. e unata gedara mama kanna kemathi kema mukuthma na. oyaata puluwanda gedara enkitaaa kanna kaeema monaea hari aran enna.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('මට බඩගිනි');
});

test('Neg_Fun_005 - Mixed English abbreviations', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').fill('BTW eyaa WFH intern eka karanne.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('BTW එයා WFH intern');
});

test('Neg_Fun_006 - Invalid date symbols', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').fill('vinoodha chaarikaava 2025-##-@@ vana dhinata yedhii thibenavaa');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('විනෝද චාරිකාව');
});

test('Neg_Fun_007 - Excess punctuation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').fill('mama maalu allanna yanavaa!!!!?????**/');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('මම මාලු අල්ලන්න');
});

test('Neg_Fun_008 - Random garbage text', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').fill('naQQgii raeeta kaeema hadhanavaa hbxyugywjhcs');
  await page.waitForTimeout(1000);

  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toHaveText('');
});


test('Neg_Fun_009 - Dialectal spelling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').fill('naendaa heta polata yanava.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('හෙට පොලට');
});

test('Neg_Fun_010 - Repeated words', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').fill('mata mata mata mata mata meeka meeka meeka hoDHAtama hoDHAtama hoDHAtama pramaaNAvath pramaaNAvath pramaaNAvath.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('ප්‍රමාණවත්');
});


test('Pos_UI_01 - UI handles long valid sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').fill('mama heta aluth laptop ekak miladhii ganna balaaporoththuven innavaa.');
  await page.waitForTimeout(1000);
  const outputBox = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputBox).toContainText('මම හෙට අලුත් laptop එකක් මිලදී ගන්න');
});

// Pos_UI_002 - Verify Sinhala output updates automatically in real time
test('Pos_UI_002 - Sinhala output updates automatically in real time', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    const outputBox = page.locator('div.whitespace-pre-wrap').first();

    // Type gradually to simulate real user typing
    await inputBox.type(
        'mama heta aluth laptop ekak miladhii ganna balaaporoththuven innavaa.',
        { delay: 100 }
    );

    // UI validation: output should appear automatically without clicking any button
    await expect(outputBox).not.toHaveText('', { timeout: 15000 });

    // Confirm Sinhala text is generated
    await expect(outputBox).toContainText(
        'මම හෙට අලුත් laptop එකක් මිලදී ගන්න බලාපොරොත්තුවෙන් ඉන්නවා.'
    );
});
