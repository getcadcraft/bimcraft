---
title: Quvurni kuchlanish yoki izometrik dasturiga yuborish va qaytarib oʻqish (PCF)
summary: Modelning quvur trassalarini PCF quvur komponent fayli sifatida yozing yoki quvur kuchlanish yoki izometrik dasturidan PCF faylni oʻqing va uning quvurini trassalar sifatida chizing.
keywords: pcf, quvur komponent fayli, quvur kuchlanishi, izometrik, izometriklar, eksport, import, quvur, zavod, poʻlat quvur, loyihani koʻchirish, boshqa dasturlar
from: 24f91355
---

## Nima qilasiz

PCF bu quvur kuchlanish va izometrik dasturlari oʻqiydigan va yozadigan oddiy matnli fayl. U har bir quvur liniyasining komponentlarini ularning uchlari va teshiklari (diametri) bilan sanab chiqadi.

## Eksport

1. Quvur asbobini tanlang. Opsiyalar qatorida **Export PCF** koʻrinadi.
2. Uni bosing. Modeldagi har bir quvur trassasi yoziladi: toʻgʻri quvur, tirsaklar (90 gradus burilish, aks holda egilish), shoxlanish nuqtasi bilan troynik, reduktorlar va klapanlar.
3. Fayl millimetrdan foydalanadi. Teshiklar millimetrdagi nominal diametrlar. Tirsakning markaziy nuqtasi uning burchagi, ya’ni ikki oyogʻi uchrashadigan joy.

PCF poʻlat uchma-uch payvandli quvur uchun yoziladi. Boshqa materialdagi trassa ham poʻlat komponent kalitlari bilan yoziladi va Muammolar panelida qayd etiladi.

## Import

1. Quvur asbobini tanlang va **Import PCF…** ni bosing, soʻng faylni tanlang.
2. Toʻgʻri quvurdan tirsaklar, egilishlar, klapanlar va flanslar orqali bitta trassa joriy qavatda boʻladi. Oʻlcham oʻzgarishi yangi trassani boshlaydi. Troynikning shoxi troynik markazidan boshlanadigan oʻz trassasiga aylanadi.
3. Model oʻz fittinglarini oʻzi yotqizadi. Reduktorlar va troynik nusxalanmaydi: ular turli oʻlchamdagi trassalar yoki shox uchrashgan joyda paydo boʻladi.

:::note
Fayldagi balandliklar joriy qavatdan yuqori balandlik sifatida oʻqiladi. Yuklamalar, tayanchlar va kuchlanish tahlilining oʻzi PCF faylida yoʻq va u bilan kelmaydi.
:::

## Nima kelganini tekshirish

- Har bir quvur liniyasi boʻyicha umumiy quvur uzunligi manbanikiga mos kelishi kerak.
- Muammolar paneli har biri bir marta roʻyxatga oladi: ikki uchidan bir xil masofada boʻlmagan markaziy nuqtali tirsak, uzunligi yoʻq quvur va standart oʻlchamga kirmaydigan teshik.

## IFC faylidagi quvurlar

IFC fayl ochiq boʻlganda **Export PCF** ham oʻzining quvur segmentlarini, fittinglarini va klapanlarini yozadi, siz chizgan trassalar yonida. Segment uchlarini portlaridan yoki tanasining uchlaridan oladi. Portlari boʻlmagan fitting chiqarib tashlanadi va Muammolar paneli buni aytadi. Model chizilgan trassalarga ega boʻlmasa, faqat IFC dan eksport qilishingiz mumkin.

Importda fayldagi tayanchlar, olet, flanslar, prokladkalar va qopqoqlar chizilmaydi. Muammolar paneli har biridan nechtasi tashlab ketilganini sanaydi, shuning uchun hech narsa sezilmay yoʻqolmaydi.
