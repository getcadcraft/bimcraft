---
title: "EnergyPlus bilan isitish va sovitishni tekshirish"
summary: "Modelni EnergyPlus fayli sifatida yozing yoki brauzerda unda EnergyPlus 26.2.0 versiyasini ishga tushiring va uning loyiha yuklamalarini tezkor isitish va sovitish yordamchisi bilan solishtiring. Dastlabki loyihalash uchun ikkinchi fikr, muvofiqlik hisobi emas."
keywords: energyplus, energiya simulyatsiyasi, loyiha kuni, isitish yuklamasi, sovitish yuklamasi, ob-havo fayli, epw, idf, issiqlik massasi, yillik energiya, simulyatsiya
from: b82a5bf2
---

## Nima qilasiz

**EnergyPlus bilan tekshirish** paneli ochiq modelni EnergyPlus kiritish fayli (IDF) sifatida yozadi: har bir xona uchun bitta zona, devorlar, polllar, tomlar va derazalar U-qiymatlari bilan, havo almashinuvi va ideal isitish hamda sovitish. Istalgan vaqtda **bu faylni saqlashingiz** va uni oʻz EnergyPlus dasturingizda ishga tushirishingiz mumkin.

Agar dvigatelni ham sozlasangiz, panel shu joyning oʻzida simulyatsiya qila oladi va EnergyPlus ning loyihaviy isitish va sovitishini tezkor yordamchining koʻrsatkichlari yonida, xonama-xona koʻrsatadi.

Bu loyihalash yordamchisi. Energiya kodlari, sertifikatlash va ruxsatnomalar tasdiqlangan vosita hamda u talab qiladigan iqlim maʼlumotlarini talab qiladi, natija esa uni tasdiqlaydigan shaxs tomonidan koʻrib chiqilishi kerak.

## Dvigatelni sozlash

BimCraft EnergyPlus ni oʻzi bilan olib yurmaydi. Bu katta WebAssembly yigʻma fayli (siqilgan holda taxminan 6 MB, qoʻshimcha 4.6 MB maʼlumot fayli bilan), shuning uchun uni oʻzingiz joylashtirasiz va panelga manzilini kiritasiz. Sahifa uni faqat simulyatsiya tugmasini bosganda yuklaydi, hech qachon ishga tushirishda emas. Manzil https, shu saytdagi yoʻl yoki localhost boʻlishi kerak.

## Loyiha kunlari yoki bir yil

- **Loyiha kunlarini simulyatsiya qilish** ob-havo fayli talab qilmaydi. U quyoshsiz sovuq qishki kunni va ochiq issiq yozgi kunni Kunduzgi yorugʻlik yorligʻidagi isitish va sovitish kiritmalaridagi haroratlarda ishga tushiradi va har bir xonaning yuklamasini vattlarda koʻrsatadi.
- **Bir yilni simulyatsiya qilish** siz tanlagan EPW formatidagi ob-havo faylini talab qiladi. U odamlar, yoritish va jihozlarni bir xil kiritmalardan qoʻshadi (doim yoqilgan, chunki jadval oʻylab topilmaydi) va har bir xonaning isitish va sovitish energiyasini kVt·soat da koʻrsatadi. Ob-havo fayllarining oʻz litsenziyalari bor, shuning uchun ishlatishga haqqingiz bor faylni ishlating.

## Issiqlik massasi

Belgilang {{ui:Maʼlum qatlamli devorlarga issiqlik massasi berish}}: maʼlum material qatlamlari bor devorlar, tomlar va polllar qatlam-qatlam yoziladi, zichlik va solishtirma issiqlik sigʻimi material nomi boʻyicha tipik qiymatlarning qisqa jadvalidan olinadi. Qatlamlar avval tashqaridan olinadi, fayl ularni roʻyxatga olgan tartibda. Qatlamlarsiz elementlar oʻz U-qiymatida, issiqlik massasisiz qoladi.

## Taqqoslashni oʻqish

Ikki usul biroz boshqa savollarga javob beradi. Tezkor yordamchi har bir elementni saqlaydi; EnergyPlus fayli esa har bir xonaning U-qiymatlarini sirt turi boʻyicha oʻrtachalaydi. Xonaning loyihaviy isitishidagi 15 % dan katta farq ⚠ panelida ikkala raqam bilan eslatma sifatida chiqadi. Sovitish loyihalashda koʻproq farq qiladi: tezkor yordamchi eng yuqori yuklamani bitta sanadagi quyoshdan hisoblaydi, EnergyPlus esa oʻz loyiha kunida oʻlchamlaydi.
