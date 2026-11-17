---
title: Jihozlar jadvalini tuzish va CSV eksport qilish
summary: Oziq-ovqat xizmati chizmasidagi element belgilarini jihozlar jadvaliga aylantiring, uni filtrlang, har bir elementning varaqiga oʻting va CSV sifatida yuklab oling.
keywords: jihozlar, jadval, oziq-ovqat xizmati, oshxona, element belgilari, kcl, atributlar, bom, materiallar roʻyxati, csv, elektron jadval, eksport, maʼlumotlarni ajratib olish
from: e3faa1c8
---

## Nima qilasiz

Oshxona yoki oziq-ovqat xizmati chizmasidan jihozlar roʻyxatini oʻqing, tekshiring, har bir elementni rejada toping va elektron jadval fayli sifatida yuklab oling.

Bu KCL kabi oshxona loyihalash kutubxonalari singari, jihoz belgilari maʼlumotlarini blok atributlari sifatida saqlaydigan chizmalarda ishlaydi: har bir belgi element raqamini (`KCL-ITEM`), miqdorini, kategoriyasini, ishlab chiqaruvchisini, modelini, elektr va santexnika maʼlumotlarini hamda izohlarni saqlaydi. Boshqa chizmalarda {{ui:Jihozlar}} yorligʻi boʻlmaydi.

## Qadamlar

1. Chizmani oching, imkon boʻlsa loyiha papkasidan, shunda bogʻlangan chizmalari ham yuklanadi.
2. Chizma ustidagi {{ui:Jihozlar}} yorligʻini bosing. Uning belgisi varaqlardagi elementlar sonini koʻrsatadi, masalan "Jihozlar (88)".
3. Jadvalni oʻqing: **Element**, **Miqdor**, **Jihoz**, **Ishlab chiqaruvchi**, **Model**, **Elektr**, **Santexnika** va **Qayerda**.
4. Jadval ustidagi menyuda nimani sanab chiqishni tanlang: **Har bir varaq**, bitta varaq, **Hech bir varaqda emas** yoki **Chizmada belgilangan hammasi**. Har bir tanlov oʻz sonini koʻrsatadi.
5. Roʻyxatni toraytirish uchun filtr qutisiga yozing ("Filtr: kategoriya, ishlab chiqaruvchi, model…"), masalan `refrigerator` yoki `208`.
6. **Qayerda** ustunidagi varaq nomini bosing.
7. Chizmaga qarang: BimCraft oʻsha varaqqa oʻtadi, elementni kattalashtiradi va uning atrofiga halqa chizadi. Holat satrida: "Element *n*, *kategoriya* — *varaq* ustida halqalandi."
8. Jadvalga qaytish uchun {{ui:Jihozlar}} ni bosing.
9. {{ui:CSV yuklab olish}} ni bosing.

## Natija

- Yuklab olish papkangizda "*chizma nomi* equipment.csv" nomli fayl paydo boʻladi (bitta varaqni tanlaganingizda qavs ichida varaq nomi bilan). U Excel, Numbers, LibreOffice yoki Google Sheets da ochiladi.
- Holat satri: "*fayl nomi* yuklab olindi (*n* ta element)."

CSV ustunlari: Element, Miqdor, Kategoriya, Ishlab chiqaruvchi, Model, Elektr, Santexnika, Izohlar, Elektr izohlari, Santexnika izohlari, Varaqlar, Joylangan (nechta belgi). U faqat jadvalda koʻrinib turgan qatorlarni yuklaydi, menyu va filtrdan keyin.

## Jadval qanday tuziladi

- U chizilgan jadvaldan emas, **belgilarning oʻzidan** oʻqiladi. Jadval ustidagi izoh nechta belgi oʻqilganini koʻrsatadi.
- Bir qator bitta element raqamiga va bitta maʼlumotlar toʻplamiga teng. Uning miqdori belgilar **yigʻindisi**, chop etilgan jadval hisoblagani kabi: bir joyda "5", boshqasida "3" belgilangan javon 8 boʻladi va "5 + 3" koʻrinishida chiqadi.
- **Qayerda** ustunida har bir elementni koʻrsatuvchi varaqlar roʻyxati chiqadi, har bir varaqning koʻrinishlari koʻrsatgan narsalaridan aniqlanadi, chop etiladigan narsa. "Faqat model" degani hech bir varaq uni koʻrsatmaydi.
- **Ikki marta ishlatilgan raqam** bir element raqamini ikkita xil jihozda belgilanganini bildiradi. Qatorda sariq belgi boʻladi.
- Hech bir varaq koʻrsatmagan belgilar **Hech bir varaqda emas** ostida alohida saqlanadi. Ular koʻpincha oldingi rejalardan yoki boshqa ishlardan qolgan boʻladi va hech qachon **Har bir varaq** ga aralashtirilmaydi.
- **Elektr** ustunida belgilanganidek amper, kW, HP, volt, faza, ulanish va vilka koʻrsatiladi. **Santexnika** ustunida ulanish oʻlchamlari koʻrsatiladi: CW sovuq suv, HW issiq suv, DD toʻgʻridan-toʻgʻri drenaj, ID bilvosita drenaj va gaz. Boshqa belgi maydonlari hali koʻrsatilmaydi.

## Keng tarqalgan xatolar

- **{{ui:Jihozlar}} yorligʻi yoʻq.** Chizmada `KCL-ITEM` belgilari yoʻq yoki jihozlar maʼlumotsiz chizilgan. Oʻqiladigan narsa yoʻq.
- **Sanoqlar chop etilgan jadvaldan farq qiladi.** Chop etilgan jadvalda zaxira raqamlar boʻlishi yoki belgilardagidan qisqaroq nomlar ishlatilishi mumkin. Joylashtirilganini belgilarga qarab bilib oling; farqlarni loyihachi bilan tekshiring.
- **CSV ochilganda gʻalati belgilar chiqadi.** Fayl UTF-8. Elektron jadval dasturining import buyrugʻi bilan oching va dastur soʻrasa UTF-8 ni tanlang.
- **Katakcha apostrof bilan boshlanadi.** `=`, `+`, `-` yoki `@` bilan boshlanadigan qiymatlar elektron jadval ularni formula sifatida ishga tushirmasligi uchun oldiga `'` qoʻyiladi.
- **{{key:F}} va {{key:P}} hech narsa qilmaydi.** Ular jadvalda emas, chizmada ishlaydi. Avval varaq yorligʻini bosing.
