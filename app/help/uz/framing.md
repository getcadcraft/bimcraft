---
title: Devorlar, pollar va tomlarni karkaslash
summary: Modeldan stoykalar, yuqori va pastki plitalar, peremichkalar, balkalar, stropilalar yoki fermalar yarating va ularni model bilan saqlang; devorlar, teshiklar, pollar yoki tom oʻzgarganda ular qayta yasaladi, Yogʻoch materiallar jadvali esa kesish roʻyxatidir.
keywords: TJI, I-balka, balka oraliq jadvali, jadval yuklash, karkas, stoyka, plita, yuqori plita, peremichka, asosiy stoyka, qoʻshimcha stoyka, trimmer, qisqa stoyka, ostona, burchak, Kaliforniya burchagi, tavr, balka, rim balka, chet balka, stropila, choʻkma stropila, vodiy stropilasi, qoʻshimcha stropila, tizma taxtasi, shift balkasi, bogʻlovchi, ferma, yogʻoch materiallar, kesish roʻyxati, taxta futi, 2x4, 2x6, oraliq, markaz boʻyicha
from: 76d0ffb5
---

## Nima qilasiz

Binoni chizganingizdan karkaslang. BimCraft devorlardagi stoykalar, plitalar va peremichkalarni, polardagi balkalarni va tomdagi stropilalarni (yoki fermalarni) joylashtiradi, ularni yorliqlangan standart jadvallardan oʻlchaydi, modelga bogʻlab saqlaydi va ular karkas qilgan narsa oʻzgarganda qayta yasaydi. **Yogʻoch materiallar** jadvali kesish roʻyxatidir.

## Karkaslash

1. Qavatda {{ui:Yigʻilish}} ni oching va {{ui:Karkas}} ni tanlang.
2. **Qadam** ni tanlang (markazdan 16" yoki 24"; 400 yoki 600 mm), **burchaklar** (uch stoykali yoki Kaliforniya), tomlar uchun **Stropilalar** yoki **Fermalar**, va devorlarda oʻrta balandlikda **tirgak** qatori boʻladimi. Pollar uchun **Arrali yogʻoch** yoki **TJI (dastlabki)** ni tanlang va **Pol balkalari** yoʻnalishini avtomatik, reja X yoki reja Y ga qoʻying.
3. **Barcha devorlarni karkaslash** tugmasini bosing yoki faqat shu devorni, polni yoki tomni (tom turgan qavatda) karkaslash uchun bitta devor, pol yoki tomni bosing.

**Karkasni koʻrsatish** ni oʻchirsangiz, barcha karkas qismlari qatlam kabi yashiriladi; **Shaffof** karkaslangan devorlar, pollar va tomlarni yashiradi, shunda faqat karkasni koʻrishingiz mumkin.

## Nimani olasiz

- **Devorlar**: pastki plita (eshiklarda kesilgan), ikkilangan yuqori plita, boshlanishdan boshlab reja boʻyicha stoykalar, har bir eshik va deraza ustida peremichka va asosiy hamda qoʻshimcha stoykalar, peremichkalar ustida va derazalar ostida qisqa stoykalar, deraza ostida xom ostona, devorlar uchrashadigan joyda burchaklar (oʻtadigan devor burchak stoykalarini oladi), boshqa devor tegib kirgan joyda ikkita tayanch stoyka va stoykalar orasidagi tirgak.
- **Pollar**: standart boʻyicha qisqa tomon boʻylab balkalar, yoki siz tanlagan reja oʻqi boʻylab; chetlar atrofida rim balkalar, zinapoya teshigi atrofida ikkilangan trimmerlar va peremichkalar, unda oʻtadigan balkalar qisqartirilgan (dum balkalari). TJI rejimi tanlangan qadamda oʻlchangan toʻgʻri oraliqqa yetadigan eng kichik koʻrsatilgan qator va chuqurlikni tanlaydi.
- **Tomlar**: har bir chekka boʻylab kvadrat umumiy stropilalar, choʻkma va vodiylar kesgan joyda qoʻshimcha stropilalar, choʻkma va vodiy stropilalari, tizma taxtalari, plitalarda shift balkalari va bogʻlovchilar — yoki oraliqda oddiy fermalar, har biri bitta boʻlak.

## Oʻzgartirish

Karkasning istalgan qismini 3D koʻrinishda yoki model daraxtida tanlang. **Xossalar** uning karkasini koʻrsatadi: qadamni, pol balkasi turi va yoʻnalishini, burchaklarni, tirgakni yoki tom karkasini oʻzgartiring. Devorlar, eshiklar va derazalarni koʻchirish yoki pol yoki tomni oʻzgartirish karkasni oʻzi qayta yasaydi.

Qasddan joylashtirgan qismni karkas qayta yasalganda saqlash uchun uni tanlang va **Bu qismni karkas qayta yasalganda saqlash** ni tanlang. Saqlangan qism oʻz joyida qoladi; atrofidagi karkas oʻzgarsa, u tekshirish uchun belgilanadi.

## TJI pollar siz yuklagan jadvaldan

BimCraft hech qanday balka ishlab chiqaruvchisining oraliq jadvallarini oʻz ichiga olmaydi (ular ishlab chiqaruvchiniki va har bir nashrda oʻzgaradi). Pol karkasini tanlang, **Pol balkalari** ni **TJI (dastlabki)** ga oʻrnating va **Xossalar** da **Jadvalni yuklash…** ni tanlang: `cadcraft-tji-table` formatidagi fayl, JSON yoki CSV, uni ishlab chiqaruvchining joriy oraliq jadvallaridan tuzgansiz. U ishlab chiqaruvchi, mahsulot va nashrni, raqamlar qayerdan olinganini nomlaydi va har bir yuklama holati uchun (vaqtinchalik yuklama, doimiy yuklama, egilish chegarasi, tayanch uzunligi) har bir qator va chuqurlik uchun har bir qadamdagi eng katta toʻgʻri oraliqni roʻyxatlaydi.

- BimCraft polning **toʻgʻri oraliqini** oladi, eng yupqa chuqurlikni va undan ichida qatorni tanlaydi, uning koʻrsatilgan oraligʻi tanlagan qadam va yuklama holati uchun yetadi, va pol shu bilan karkaslanadi. Agar oraliq yoki qadam jadvaldan tashqarida boʻlsa, buni aytadi va hech narsani oʻzgartirmaydi.
- Yuklamalar, egilish chegarasi, tayanch uzunligi, jadval va "Dastlabki joylashtirish boʻyicha koʻrsatma; yakuniy tanlov ishlab chiqaruvchi jadvallari va loyiha yuklarini talab qiladi" jumlasi Yogʻoch materiallar jadvalida chop etiladi, karkas bilan birga modelga yoziladi va **Muammolar** panelida eslatma sifatida roʻyxatlanadi. Belgilangan jadval buni ogohlantirishda aytadi.
- **Qurilish qoidalari** qoʻshimchasi yoqilgan boʻlsa, uning pol-balka qoidasi ham yuklangan jadvalni oʻqiydi; jadvalsiz TJI balkalari oʻsha tekshiruvdan chiqarib tashlanadi, oldingidek.
- Jadval shu brauzerda siz uni tozalamaguningizcha yoki boshqasini yuklamaguningizcha qoladi. Fayl: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: inches, feet, psf; yoki `metric`: mm, metres, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) va `rows` (`series`, `depth`, `spans`: har bir holat idsi uchun qadam va eng katta toʻgʻri oraliq, masalan `"16": "15-6"`). CSV da xuddi shu faktlar `# key = value` qatorlari, soʻng `series,depth,case,spacing,span` boʻladi.
- Jadval yuklanmagan boʻlsa, TJI joylashuvi rad etiladi va hech narsa oʻzgarmaydi: **TJI jadvalini yuklang: ishlab chiqaruvchi jadvallari ularniki va ichiga oʻrnatilmagan.** Oldingi ichki TJI jadvali bilan (bu oʻzgarishgacha) karkaslangan model har bir balkani saqlaydi; **Xossalar** va **Muammolar** jadval kerakligini aytadi va bitta yuklaganingizdan keyin pol qayta karkaslanishi mumkin. Qattiq kesimli balkalar oldingidek ishlaydi.

Bu joylashtirish boʻyicha koʻrsatma. Yakuniy balka tanlovi ishlab chiqaruvchi jadvallari, loyiha yuklari va muhandisni talab qiladi.

## Kesish roʻyxati

**Jadvallar** panelida **Yogʻoch materiallar** ni tanlang: har bir karkas qismi oʻlchami va sotib olasiz boʻlgan standart uzunlik boʻyicha guruhlangan (8 futdan boshlab butun 2 futlik uzunliklar; millimetrda 2400 dan boshlab 600 mm qadamlar), qismlar soni va taxta futlari bilan. **CSV** uni yuklab oladi.

:::warning
Peremichka, balka, stropila va shift balkasi oʻlchamlari bir yoki ikki qavatli tipik uy uchun yorliqlangan standart jadvallardan olingan, muhandislik hisobi emas. **Xossalar** oraliq yoki teshik oʻz jadvalidan tashqarida ekanini aytadi. Oraliqlar, yuklamalar va ulanishlarni loyihachi yoki muhandis tekshiradi.

TJI joylashuvi faqat siz yuklagan jadvaldan foydalanadi; uni ishlab chiqaruvchining joriy oraliq jadvallaridan tuzasiz, BimCraft hech birini oʻz ichiga olmaydi. Taklif tayanch, nuqtaviy yuklar, konsollar, teshiklar, zinapoya peremichkalari yoki ulanishlarni tekshirmaydi, va modeldagi I-shakl sxematik.
:::

## Saqlanadigan maʼlumotlar

Har bir karkaslangan devor, pol yoki tom IFC element yigʻmasi ("Framing") boʻlib saqlanadi: IFC elementlari (stoykalar, plitalar, stropilalar, bogʻlovchilar, tirgaklar, fermalar) va balkalar (peremichkalar, balkalar, rim balkalar, tizma taxtalari), har birida oʻz oʻlchami, uzunligi va taxta futlari bilan.
