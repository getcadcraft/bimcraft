---
title: Quvur va havo kanallarini oʻlchamlash, kabel toʻldirilishi va yoritishni tekshirish
summary: Taʼminot quvurlari va havo kanallarining oʻlchamlarini bosim pasayishi bilan tekshiring, kabellarni kabel lotoklari va quvurlar orqali yoʻnaltiring va ularning toʻldirilishini koʻring, xonalardagi yoritilganlikni IES yoki EULUMDAT fayllaridan hisoblang. Standart qiymatlar belgilangan; amaldagi kodning qiymatlarini kiriting.
keywords: oʻlchamlash, quvur oʻlchami, havo kanali oʻlchami, bosim pasayishi, sanitariya birliklari, talab, hunter, hazen-williams, tezlik, ishqalanish, teng ishqalanish, ventilyator bosimi, shiber, kritik yoʻl, kabel lotogi, kabel quvuri, toʻldirish, kabel jadvali, ies, ldt, eulumdat, fotometriya, yoritilganlik, lyuks, bir xillik, yoritish hisobi, quvvat zichligi, mep, hisob-kitoblar, muammolar
from: 9cb90815
---

## Nima qilasiz

Quvurlar, havo kanallari, kabel lotoklari va kabel quvurlarini odatdagidek chizing, soʻng **Hisob-kitoblar** panelini oching. Har bir yorliq modelni oʻqiydi, jadval koʻrsatadi va notoʻgʻri narsalarni ⚠ panelida Muammolar sifatida roʻyxatlaydi. Oʻlcham muammoni tuzatsa, **Oʻlchamlarni qoʻllash** yoʻlaklarni bitta {{ui:Ortga qaytarish}} qadamida oʻzgartiradi.

Bular hisoblash uchun yordamchi vositalar. Har bir standart qiymat ekranda belgilangan va ularning hech biri kod jadvali emas: loyihalashingiz asos qilgan standartdan raqamlarni kiriting va natijani uni tasdiqlaydigan muhandis tekshirsin.

## Quvurlar

1. **Tizim** kalitini tanlang (sovuq suv `cw`, issiq suv `hw`).
2. Eng yuqori tezlikni va, bosimni tekshirmoqchi boʻlsangiz, manbadagi bosimni va uskunaga kerak boʻlgan eng kam bosimni belgilang.
3. {{ui:Tekshirish}} ni bosing.

Har bir quvur undan pastdagi sanitariya birliklarining talabini tashiydi. Talab sanitariya birliklari va oqim oʻrtasidagi egri chiziqdan olinadi, Hunter tasvirlagandek. **Oʻrnatilgan egri chiziq namuna, kod jadvali emas**; buni Muammolar siz oʻz egri chizigʻingizni kiritguncha aytib turadi. Ishqalanish Hazen–Williams boʻyicha, fitinglar yoʻqotish koeffitsiyentlari bilan hisoblanadi, koʻtarilish esa metriga 9.8 kPa yoʻqotadi. Uskunaning birliklari uning turidan yoki yordamchi vosita `loads_set` bilan oʻrnatilgan raqamdan olinadi.

## Havo kanallari

Tizimni, ishqalanish darajasini (teng ishqalanish) yoki tezlikni va har qanday gʻaltak, filtr yoki shovqin yutgich yoʻqotishini belgilang. Terminallar havo oqimini diffuzerdagi `loads_set` dan oladi. Jadval har bir boʻlak uchun tezlik va ishqalanishni, kritik yoʻlda **ventilyator bosimini** va har bir boshqa terminal shiberi qabul qilishi kerak boʻlgan bosimni koʻrsatadi. Fitinglar yoʻqotishi yaxlitlangan standart koeffitsiyentlar bilan hisoblanadi, fitinglar bazasidan emas.

## Kabel lotoklari va kabel quvurlari

Ularni Havo kanali asbobi bilan chizing: **Kabel lotoki** va **Kabel quvuri** tizimlari kabel tashuvchi sifatida saqlanadi, shuning uchun boshqa dasturlar ularni lotok va quvur deb oʻqiydi. Kabellar boʻlimida kabel roʻyxatini joylashtiring (yorliq, tashqi diametri mm da, soni, qayerdan, qayerga). `from` va `to` — jihoz yorligʻi yoki millimetrda `x,y,z` nuqta. Kabellar lotok va quvurlar orqali eng qisqa uzluksiz yoʻldan oʻtadi; har bir yoʻlak kiritgan chegaralarga nisbatan toʻldirilishini koʻrsatadi, jadval esa zaxira foizi va uchlarini oʻz ichiga olgan uzunlik bilan CSV sifatida saqlanadi.

## Yoritish

Har bir chiroqqa uning IES (LM-63) yoki EULUMDAT faylini `photometry_set` yordamchi vositasi bilan bering. Maqsadlarni, setka qadamini va ish yuzasi balandligini kiriting. Natija faqat **toʻgʻridan-toʻgʻri** yoritilganlik: oʻzaro aks ettirishlar va soyalar hisobga olinmaydi, shuning uchun xonada bu pastki chegara.

## Yongʻin sprinklerlari

**Yongʻin sprinklerlari** qoʻshimchasi oʻz boʻlimiga ega; uning yordamini qarang.
