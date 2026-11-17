---
title: "Tasnif kodlari (Uniclass, OmniClass, UniFormat)"
summary: "Har bir element va turga tasnif kodi bering, loyiha qaysi tizimlardan foydalanishini tanlang, ilova bilan kelgan Uniclass jadvallaridan qidiring, oʻz ofisingizning litsenziyali jadvallarini yuklang va kodlarni jadvallarda koʻrsating. Kodlar boshqa dasturlar uchun IFC faylga yoziladi."
keywords: tasnif, tasniflash, kod, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, jadval, element kodi, tur kodi, standart kod, IfcClassification, IfcClassificationReference, cobie, jadval ustuni, csv, litsenziya, licence
from: 222b94cd
---

## Nima qilasiz

Devor, pol, tom, eshik, deraza va modeldagi har bir narsaga tasnif kodi qoʻying, uchta tizimgacha yonma-yon: Uniclass, OmniClass va UniFormat. Boshqa boʻlimlar va boshqa dasturlar nomga emas, kodga tayanadi, shuning uchun kodlar IFC faylda har qanday BIM dasturi oʻqiydigan tasnif havolalari sifatida saqlanadi.

## Elementga kod berish

1. Bitta (yoki bir nechta) elementni tanlang va **Xususiyatlar** ni oching. {{ui:Tasnif}} boʻlimini oching.
2. Kodni tizim katagiga yozing va Enter bosing. Kod roʻyxati yuklangan boʻlsa, kodning bir qismini yoki bir necha soʻzni (masalan, pardali devor) yozing va mos keladiganlardan tanlang: kodning sarlavhasi siz uchun toʻldiriladi.
3. {{ui:Qoʻllanadi}} kodning qayerga borishini aytadi: **Bu element** yoki **Uning turi (turdagi har bir element)**. Devor turidagi kod shu turdagi har bir devor tomonidan oʻqiladi, keyinroq chizganlaringiz ham.
4. {{ui:Tozalash}} kodni olib tashlaydi.

Har bir kod ostida boʻlim uning qayerdan kelganini aytadi: shu elementga oʻrnatilgan, turidan yoki sinfi uchun loyiha standarti. Elementning oʻz kodi har doim turining kodidan, turning kodi esa standartdan ustun. Bir nechta element tanlanganda "turli" degan katak ular bitta kodni boʻlishmasligini bildiradi; bittasini yozish uni hammasiga beradi. Har bir oʻzgarish bitta qaytarish bosqichi.

Kodni har doim yozish mumkin, roʻyxat yuklangan boʻlsa ham, boʻlmasa ham. Agar u shu tizimning kodiga oʻxshamasa yoki yuklangan roʻyxatda boʻlmasa, maslahat shuni aytadi va kod siz yozganingizdek saqlanadi.

## Loyiha tizimlarini tanlash

Model panelidagi **Maʼlumotlar** ni oching va {{ui:Tasnif}} ni tanlang ({{ui:Loyiha tasnifi…}} ni Xususiyatlar boʻlimida ham).

- Bu loyiha foydalanadigan tizimlarni belgilang. Xususiyatlarda faqat ular koʻrinadi.
- **Uniclass**: Elementlar/funksiyalar (EF), Tizimlar (Ss) va Mahsulotlar (Pr) jadvallari ilova bilan birga keladi. Ular © NBS, Creative Commons Attribution-NoDerivatives 4.0 litsenziyasi bilan, oʻzgartirilmasdan uzatiladi. Dialogda har bir jadvalning nashri va oʻqilgan kuni koʻrsatiladi. Ular eng yangisi emas: nashriyot har chorakda yangilarini oʻz saytida chiqaradi.
- **OmniClass** va **UniFormat**: ilova bilan kod roʻyxati kelmaydi, chunki nashriyot litsenziyasiz jadvallarni uzatishga ruxsat bermaydi. Istalgan kodni yozing yoki ofisingizning litsenziyali jadvalini yuklang.
- {{ui:Jadval yuklash (CSV)…}} ofisingizning jadvalini kod ustuni va sarlavha ustuni bilan CSV fayldan oʻqiydi (Code, Number yoki Identifier va Title, Name yoki Description deb nomlangan sarlavha qatori oʻzi topiladi; boʻlmasa, birinchi ikki ustun ishlatiladi). Jadval shu brauzerda qoladi va loyiha fayliga hech qachon kiritilmaydi. Faylda faqat siz bergan kodlar saqlanadi. Yangiroq Uniclass jadvalini ham xuddi shunday yuklashingiz mumkin.
- {{ui:Elementlarga sinfi boʻyicha standart kod bering}} har bir devor, pol, tom, eshik, deraza, zina, pandus, ustun, toʻsin va jihozga, agar oʻz kodi boʻlmasa, Elementlar/funksiyalar jadvalidan boshlangʻich Uniclass kodini beradi. Keyinroq chizilgan elementlar ham shuni oladi.
- {{ui:Kodlarni jadvallarda ustun sifatida koʻrsatish}} Eshiklar, Derazalar, Turlar boʻyicha devorlar va Xonalar jadvallariga hamda ularning CSV siga har bir tizim uchun bitta ustun qoʻshadi. Kodlari farq qilsa, bir nechta elementdan iborat qator "turli" koʻrsatadi.

## Bilib qoʻying

- Standart kodlar CadCraft ning oʻz boshlangʻich tanlovi, nashriyotniki emas, va mutaxassis tomonidan tekshirilmagan. Ularni loyihangizning standarti bilan solishtiring.
- Faylda standart kod "CadCraft default" bogʻlanish nomi bilan belgilangan haqiqiy tasnif boʻladi va element yoki uning turi oʻz kodini olishi bilanoq u yoʻqoladi.
- Import qilingan faylda allaqachon mavjud kodlar oʻqiladi va koʻrsatiladi, tizim nomi uchun boshqa dastur qanday yozganidan qat'i nazar. Boshqa tizimlarning kodlari (ofisning oʻz kodlari) roʻyxatlanadi va tegilmaydi.
- Kodlar fayl qayta ochilganda oʻqiladi, shu yerda yoki boshqa dasturda. Ular, shuningdek, laboratoriya varianti yoqilgan boʻlsa, IFC5 alpha (IFCX) eksportiga kiritiladi, faqat tomga oʻrnatilgan kod bundan mustasno.
- Hali qurilmagan: jadvalni daraja boʻyicha koʻrish uchun daraxt, qavatlar va xonalarga loyiha standarti sifatida kodlar, hamda kodni tanlangan nashr bilan tekshirish.
