---
title: "Toʻqnashuvlarni har bir yoʻnalishning tuzatishlari bilan hal qilish"
summary: "Toʻqnashuv natijalaridan «Tuzatishlarni taklif qilish» har bir toʻqnashuv uchun har bir yoʻnalish nima qilishi mumkinligini roʻyxatlaydi: toʻsin ostidan aylanib oʻtadigan havo kanali, chetga surilgan quvur, koʻchirilgan ustun, toʻsindagi teshik. Ularning har biri modelning nusxasida afzallik-kamchiliklari bilan sinab koʻriladi, siz qabul yoki rad etasiz. Qabul qilingan tuzatishlar bitta qaytarish bosqichi sifatida qoʻshiladi."
keywords: toʻqnashuv, toʻqnashuv tuzatishi, toʻqnashuvlarni hal qilish, muvofiqlashtirish, tuzatishlarni taklif qilish, aylanib oʻtish, havo kanali, quvur, lotok, toʻsin, ustun, teshik, gilza, afzallik-kamchilik, yoʻnalish, konstruksiya, mexanik, santexnika, elektr, arxitektura, yordamchi
from: f7bafdd9
---

## Nima qilasiz

Toʻqnashuvlar roʻyxatini qarorlarga aylantiring. Har bir yoʻnalish (konstruksiya, mexanika, santexnika, elektr, arxitektura) faqat oʻz elementlari uchun tuzatishlar taklif qiladi, har bir taklif modelning nusxasida tekshiriladi va siz tanlaysiz.

## Qadamlar

1. Avval toʻqnashuvni tekshirishni ishga tushiring. Qarang: [Toʻqnashuvlarni tekshirish](topic:clash-check) va [Quvurlar va havo kanallarini konstruksiya bilan tekshirish](topic:mep-against-structure).
2. Natijalar ostida {{ui:Tuzatishlarni taklif qilish}} ni bosing. **Taklif qilingan tuzatishlar** paneli model yonida ochiladi.
3. Har bir toʻqnashuv uchun har bir yoʻnalishning takliflarini koʻrasiz, eng yaxshisi birinchi. Har bir qator nima qilishini va uning afzallik-kamchiliklarini aytadi: u toʻqnashuvni hal qiladimi, nechta yangi toʻqnashuv yaratadi, qaysi qoidalarni buzadi, qancha yoʻl qoʻshadi yoki qancha siljiydi, nechta fitting va xarajat ballini.
4. Biror taklif ustidagi {{ui:Koʻrsatish}} ni bosib elementlarni 3D da koʻring. Istalgan tuzatish ostidagi {{ui:Qabul qilish}} ni bosing (har bir toʻqnashuv uchun bittadan) yoki {{ui:Rad etish}} ni bosing.
5. Pastki qatorda qabul qilgan tuzatishlaringiz birgalikda nima qilishi aytiladi: nechta toʻqnashuv hal qilingan, nechtasi qolgan va yangi narsa toʻqnashadimi.
6. {{ui:Qabul qilingan tuzatishlarni qoʻllash (bitta qaytarish bosqichi)}} ni bosing. Toʻqnashuvni tekshirish yana ishga tushadi. {{ui:Ortga qaytarish}} ularning hammasini bir vaqtda qaytaradi.

## Har bir yoʻnalish nima qilishi mumkin

- **Mexanika** (havo kanallari, isitish va sovitish quvurlari): toʻqnashgan qismda ustidan yoki ostidan aylanib oʻtish, butun yoʻnalishni koʻtarish yoki tushirish, yonga surish, toʻrtburchak havo kanalini bir xil maydon bilan yassilash.
- **Santexnika** (suv, kanalizatsiya, gaz, yongʻin): xuddi shu harakatlar, faqat tortishish kuchi bilan ishlaydigan kanalizatsiyaga hech qachon aylanib oʻtish berilmaydi; u faqat butunligicha, nishabini saqlab siljishi mumkin.
- **Elektr** (lotoklar va kabel quvurlari): xuddi shu harakatlar; lotok kabel yotqizish uchun uning ustida 150 mm boʻsh joy saqlashi kerak.
- **Konstruksiya**: ustunni koʻchirish (300 mm gacha), yoki oʻtib ketayotgan yoʻnalish uchun toʻsin tanasidagi yoki plitadagi teshik. Har bir konstruksiya tuzatishi konstruktor tomonidan tasdiqlanishi kerakligini aytadi.
- **Arxitektura**: oʻtib ketayotgan yoʻnalish uchun devordagi gilza yoki yuk koʻtarmasligi maʼlum boʻlgan devorni koʻchirish.

## Nimani koʻrasiz

- Qoidani buzadigan tuzatishlar belgilanadi: boshqa narsaga 25 mm boʻshliqdan yaqinroq, 2,100 mm boʻsh joy chizigʻidan pastda, toʻsin tanasidagi teshik toʻsin balandligining 40% dan katta yoki uchlariga juda yaqin boʻlsa, yoki toʻsin oraligʻi oʻzgarsa.
- BimCraft qila oladigan tuzatishlar modelga qoʻllanadi: siz chizgan Quvur va Havo kanali vositalari bilan chizilgan yoʻnalishlar hamda chizgan ustunlar. Qolganlari **Faqat maslahat** deb yozilgan: ularni qabul qilish Muammolar yorligʻiga muammo qoʻshadi.

## Bilib qoʻying

- Tuzatishlar ilovaning oʻrnatilgan qoidalaridan keladi; ulardan AI ishlatilmaydi.
- Agar yordamchini ulasangiz (qarang: [AI yordamchi bilan modelda ishlash](topic:assistants)), u toʻqnashuvlarni oʻqiy oladi va ochiq panelga bitta yoʻnalish uchun oʻz takliflarini qoʻshishi mumkin. Ular xuddi shunday tekshiriladi, yordamchi nomi bilan belgilanadi va siz qabul qilib qoʻllamaguningizcha hech narsa oʻzgarmaydi.
- Nusxa har bir element va yoʻnalishning har bir boʻlagi atrofidagi qutilar bilan tekshiriladi, shuning uchun qiya yoʻnalish toʻqnashuv tekshiruvi koʻrsatmaydigan toʻqnashuvni koʻrsatishi mumkin. Tuzatishni qoʻllagach, toʻqnashuvni tekshirishni qayta ishga tushiring: yakuniy hukm shu.
- Chegaralar (yoʻnalish qancha siljishi mumkin, aylanib oʻtish qancha koʻtarilishi mumkin, boʻshliq) panelda yozilgan standart qiymatlardir.

## Keyingi

- [Muammolar va BCF fayllari](topic:issues-bcf)
- [Quvur va havo kanali yoʻnalishlarini chizish](topic:pipes-and-ducts)
