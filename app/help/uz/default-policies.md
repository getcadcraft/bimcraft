---
title: "Standart siyosatlar: yangi bino nimadan boshlanishini belgilash"
summary: Bir marta belgilang: yangi bino qaysi devor turi, sathlar, birinchi varaq, LOD teglari, birliklar va asbob bilan boshlanadi, metrik va dyuymli loyihalar uchun, va siyosatlarni ofis boʻylab kichik fayl sifatida ulashing.
keywords: standart, standartlar, standart siyosatlar, siyosat, ofis standarti, ofis standartlari, shablon, yangi bino, birinchi devor turi, metrik devor, gʻisht, LOD, rivojlanish darajasi, birinchi varaq, qogʻoz, masshtab, sathlar, sath nomlari, sath balandligi, qavat balandligi, devor asbobi, birliklar, ulashish, eksport, import, json
from: 42379aa5
---

## Nima qilasiz

BimCraft ga yangi bino nimadan boshlanishini ayting, shunda ofisdagi hech kim har safar bir xil narsalarni oʻzgartirmaydi. Bu qoʻshimcha: u yoqmaguningizcha oʻchiq turadi va siz belgilamagan siyosat BimCraftning oʻz standarti holicha qoladi.

:::note
Bu **yangi** binolar va **yangi** narsalar uchun standartlar. Siz boshlagan loyiha oʻzgarmaydi.
:::

## Qadamlar

1. Sozlamalarni oching, {{ui:Qoʻshimchalar}} ga oʻting va {{ui:Standart siyosatlar}} ni yoqing.
2. Sozlamalarda **BimCraft** yorligʻini oching va chapdagi roʻyxatdan {{ui:Standart siyosatlar}} ni tanlang.
3. Kerakli siyosatlarni belgilang. Har biri **BimCraftning oʻz** qiymatidan boshlanadi, qavsda uning nima ekani yozilgan. **Metrik** va **Dyuymli** katakchasi bor siyosat loyihaning har bir turi uchun bitta qiymat oladi; faqat kerak boʻlganlarini toʻldiring.
4. Saqlash tugmasi yoʻq: har bir oʻzgarish siz qilgan zahoti saqlanadi. Ishlatib boʻlmaydigan qiymat soʻzlar bilan rad etiladi va eski qiymat qoladi.
5. {{ui:Yangi bino}} ni bosing. Muloqot oynasi siyosatlaringiz bilan toʻldiriladi va siyosat belgilagan har bir qiymat yonida **Standart siyosatlaringizdan** yozuvi koʻrinadi. {{ui:Yaratish}} dan oldin ularning istalganini hali oʻzgartirishingiz mumkin.

## Siyosatlar

- **Yangi binoning birliklari**: birliklar Yaratishda shunga almashadi.
- **Sathlar soni**, **Sath nomlari** va **Sath balandligi**. Nomda `{n}` 1, 2, 3 ni sanaydi; `{n0}` 0, 1, 2 ni sanaydi; `{nn}` va `{nn0}` xuddi shu narsani ikki xonali raqamlar bilan qiladi. Shunday qilib `Qavat {nn0}` Qavat 00, Qavat 01, Qavat 02 ni beradi.
- **Birinchi devor turi**: Devor asbobi birinchi nimani chizishi. Metrik ofis 300 mm tashqi gʻisht bilan boshlashi mumkin, dyuymli loyihalar esa Tashqi 2×6 da qoladi.
- **Standart devor turlarida LOD tegi**: standart toʻqqiz tur har qayerda turi roʻyxatga olinsa, koʻrsatadigan rivojlanish darajasi (LOD 100 dan 500 gacha). Qarang: [Devor yigʻmalarini qurish](topic:wall-assemblies).
- **Yangi yaratilgan devor turining LOD**: yangi tur tur tahrirlagichida boshlaydigan teg. U yerda oʻzgartirishingiz mumkin.
- **Birinchi varaq**: uning qogʻozi, masshtabi, varaq raqami va nomi (eng pastki sathning nomi uchun `{level}` dan foydalaning), yoki birinchi varaq umuman boʻlmasligi.
- **Qogʻozdagi annotatsiya oʻlchamlari** (Sozlamalar › Umumiy › Standart siyosatlar): ofisning balandliklari, chop etilgan millimetrda, izohlar, oʻlcham matni, teglar, xona nomlari, toʻr doirasi harflari, koʻrinish sarlavhalari va jadval matni uchun. Yangi bino ularni Yaratishda oladi va faylida saqlaydi. Qarang: [Toʻliq oʻlchamda chizing, masshtab boʻyicha izohlang](topic:annotation-sizes).
- **Yaratishdan keyin faol asbob**: Tanlash, BimCraft oʻzicha qilganidek, yoki Devor, shunda rejadagi birinchi ikki bosish allaqachon devor chizadi.

## Jadval tuzilmasi: ofis standarti

**Sozlamalar › Umumiy › Standart siyosatlar** ichida, **Jadval tuzilmasi (ofis standarti)** boʻlimida har bir jadval qanday guruhlanishini, jami va umumiy yigʻindi boʻlishini, sarlavhasini va ustun sarlavhalarining harf holatini belgilang. Oʻz sozlamasini aytmagan har bir jadval, kim sozlasa ham, shularni oladi. Qarang: [Jadvalni joylashtiring, saqlang va eksport qiling](topic:schedule-layouts).

## Ofis boʻylab ulashing

1. Sozlamalarda **Umumiy** yorligʻini oching va {{ui:Standart siyosatlar}} ni tanlang.
2. Xohlasangiz **Ofis nomi** ni kiriting. U faylga yoziladi.
3. {{ui:Faylga saqlash}} ni bosing. `.ccdefaults.json` bilan tugaydigan kichik fayl olasiz.
4. Boshqa kompyuterda qoʻshimchani yoqing, xuddi shu joyga kiring va {{ui:Fayldan yuklash}} ni bosing. Fayldagi siyosatlar oʻsha kompyuterdagilarni almashtiradi.

Umumiy yorligʻida ham **Yangi loyiha oʻlchov tizimi** bor: u qoʻshimchasi yoqilgan har bir ilova uchun amal qiladi. Va {{ui:Barcha siyosatlarni tiklash}}. BimCraft yorligʻidagi {{ui:BimCraftning oʻz standartlarini tiklash}} faqat BimCraftniki tozalaydi.

## Bilish foydali

- Fayl oddiy, ochiq JSON: siyosat nomlari va qiymatlari roʻyxati. Fayl nomlagan, bu versiya tanimaydigan siyosat tashlab yuboriladi va xabarda nomi aytiladi; qolganlari yuklanadi.
- Siyosatlar shu brauzerda saqlanadi, bu kompyuterdagi barcha CadCraft ilovalari uchun. Ular bino faylida saqlanmaydi va kompyuterlar orasida sinxronlanmaydi: faylni ishlating.
- Standart turdagi LOD tegi shu kompyuterdagi siyosatdan olinadi. Standartning nusxasi sifatida yaratgan tur tegini bino faylida olib yuradi.
- BimCraftda aniqlik sozlamasi yoʻq, shuning uchun bu yerda aniqlik siyosati ham yoʻq.
- Shablondan boshlangan bino shablonning oʻz sathlari va varaqlarini oladi. Devor turi va birliklar siyosati baribir qoʻllanadi.
- Qoʻshimchani oʻchiring, hammasi yana BimCraftning oʻz holiga qaytadi. Siyosatlaringiz uni qaytadan yoqqanda uchun saqlanadi.
