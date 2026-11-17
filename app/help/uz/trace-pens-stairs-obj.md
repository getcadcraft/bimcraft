---
title: Qavatni iz olish, koʻrinish boʻyicha qalamlar, eskizdan zina, OBJ ochish
summary: Boshqa qavatni rejada shtrix chiziq bilan koʻrsatish va tekislash, devorlar, eshiklar va derazalarga bitta koʻrinishda oʻz qalamini berish, zina olish uchun yurish chizigʻini chizish hamda Wavefront OBJ toʻrini ochish.
keywords: iz olish, havola, shabah, tagqatlam, qalam, chiziq qalinligi, chiziq turi, qayta belgilash, zina, eskiz, maydoncha, OBJ, toʻr, import, Wavefront
from: 333ebbde
---

## Qavatni iz olish

{{ui:Yigʻilish}} menyusida {{ui:Iz olish}} ni tanlang, soʻng roʻyxatdan koʻrinishni tanlang: boshqa qavatning rejasi, qavat shifti rejasi yoki bogʻlanish (kesimga kesilgan). Uning devorlari, ustunlari va polari siz chizayotgan reja ostida shtrix chiziq bilan koʻrinadi. Uni tayanch nuqtani bosish orqali koʻchiring, soʻng oʻsha nuqta qayerga borishi kerakligini bosing yoki X, Y va burchakni kiriting (u oʻz markazi atrofida buriladi). {{ui:Qayta oʻrnatish}} uni joyiga qaytaradi, {{ui:Yashirish}} olib tashlaydi. U faqat havola: uni hech narsa tanlamaydi, chop etilmaydi va IFCʼga saqlanmaydi. BimCraft uni bu brauzerda har bir qavat uchun eslab qoladi.

## Qalamlar koʻrinish boʻyicha

{{ui:Qalamlar}} ni tanlang. Qalam nima uchunligini ayting: barcha devorlar, barcha eshiklar, barcha derazalar, tanlangan elementning turi yoki tanlangan elementlar. Qalinlik, chiziq (tutash, shtrix, nuqtali) va rangni tanlang, soʻng {{ui:Qoʻllash}} ni bosing. Oʻzgarish faqat shu qavat rejasi uchun. Tanlov turni, tur esa butun kategoriyani ustun qoʻyadi. {{ui:Hammasini tozalash}} ularni olib tashlaydi. Ular bu brauzerda saqlanadi. 3D da rangli qalamlarni modelda boʻyash uchun **3D da qalam ranglari** ni belgilang (qalinlik yoki shtrix faqat chiziqniki, shuning uchun 3D da faqat rang koʻrinadi); qaytish uchun belgini olib tashlang. {{ui:Chop etish}} ular bilan rejaning PDF ini chizadi: qalinlik ekrandan masshtablanadi (standart devor qalami 1,75 piksel 0,5 mm ga teng), shtrixlar shtrix boʻlib qoladi va rang qogʻoz mavzusidagi qiymatida chop etiladi.

## Eskizdan zina

{{ui:Zinani eskizlash}} ni tanlang va yurish chizigʻining burchaklarini, pastki pogʻonadan boshlab, bosing. Bitta chiziq toʻgʻri zina, toʻgʻri burchak bilan tutashgan ikki chiziq L, uchta chiziq (yuqoriga, koʻndalangiga, orqaga) U boʻladi. Maydonchani chizish uchun {{key:L}} ni bosing: uning burchaklarini bosing va {{key:Enter}} ni bosing; uning qisqa tomoni zinaning kengligini belgilaydi. Zinani joylashtirish uchun {{key:Enter}} ni bosing. Har bir pogʻona chizigʻingiz uzunligi va balandlik uchun kerak boʻlgan pogʻona sonidan hisoblanadi. Shundan soʻng u oddiy zina boʻladi: uni Xususiyatlarda oʻzgartiring, zina teshigi va tutqichlar ularga ergashadi.

Zinani oddiy zina oʻrniga oila sifatida joylashtirish uchun {{key:Enter}} dan oldin asbob qatoridagi **Oila qilish** ni belgilang (yoki {{key:F}} ni bosing). U bitta element sifatida kiradi va oila muharririda kengligi, pogʻona, umumiy balandlik, har bir marshdagi pogʻonalar va U ning oraligʻi parametrlar sifatida ochiladi, shuning uchun oʻlchamlar, reja belgisi yoki nuqtalar qoʻshishingiz mumkin. Pogʻonalar va pogʻona balandligi ulardan kelib chiqadi. Unda tutqichlar va zina teshigi yoʻq: ular oddiy zinaga tegishli.

## OBJ ochish

`.obj` faylni boshqa fayl kabi oching. OBJ da birliklar yoʻq, shuning uchun BimCraft uni metrda va Y yuqoriga qarab oʻqiydi, koʻpchilik dasturlar shunday yozadi. Har bir obyekt yoki guruh bitta qavatda bitta toʻr elementi boʻladi, shuning uchun uni koʻrish, oʻlchash, kesish, modelga joylashtirish va IFC sifatida saqlash mumkin. Chiziqlar, egri chiziqlar va sirtlar chiqarib tashlanadi, holat qatori buni aytadi.

Obyekt aniq toʻgʻri prizma boʻlsa (ikkita parallel, bir xil uchi va ularga perpendikulyar tekis yon tomonlari boʻlgan yopiq toʻr: plita, ustun, devor bloki, teshikli plastina), u IFCʼda IFCʼning oʻz ekstruziyali qattiq jismi sifatida oʻz konturi va chuqurligi bilan saqlanadi, uchburchaklar roʻyxati sifatida emas. Boshqa dasturlar uni haqiqiy qattiq jism sifatida oʻqiydi, u kichik boʻlib qoladi va chuqurligi hamda konturi keyinroq tahrirlanishi mumkin. Holat qatori shu tarzda nechta obyekt saqlanganini koʻrsatadi. Aniq prizma boʻlmagan har qanday narsa (torayib boradigan shakl, bitta uchi siljigan toʻr, boʻshligi bor toʻr) uchburchaklar boʻlib qoladi. STEP fayl ham xuddi shunday oʻqiladi.
