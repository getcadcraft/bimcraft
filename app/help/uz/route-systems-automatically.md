---
title: Havo kanallari, drenaj, suv va sovutgich quvurlarini avtomatik yoʻnaltirish
summary: Toʻqnashuvni tekshirishda BimCraft havo kanallari, tortishish bilan drenaj, sovuq va issiq suv hamda bir yoki koʻp tarmoqli sovutgich quvurlari uchun ochiq model atrofidan yoʻl topadi va yoʻllarni fitinglari bilan bitta ortga qaytarish qadamida chizadi. Chizmachilik yordamchisi: oʻlchamlar, nishablar va tekshiruvlar dasturdagi jadvallar va siz kiritgan raqamlardan olinadi; bu yerda hech narsa loyiha biror kodga mos ekanini bildirmaydi.
keywords: avtoyoʻnaltirish, avtomatik yoʻnaltirish, havo kanallarini yoʻnaltirish, quvurlarni yoʻnaltirish, drenaj, sanitariya, tortishish, stoyka, ventilyatsiya, sifon, suv, issiq suv, aylanma halqa, sovutgich, split, multi-split, VRF, ekvivalent uzunlik, tarmoq komplekti, wye
from: 5841d513
---

## Nima qilasiz

BimCraftga modeldagi ulagichlar orasida yoʻllar tarmogʻini joylashtirishga ruxsat bering: ular devor va balkalar atrofidan oʻtadi. Soʻngra natijani siz koʻra oladigan raqamlar bilan tekshiring.

## Qadamlar

1. Modelni va toʻqnashuvni tekshirishni oching. **Havo kanallarini avtomatik yoʻnaltirish** ostida havo ishlov beruvchini va uning terminallarini tanlang yoki **Boshqa tizimlarni avtomatik yoʻnaltirish** ostida tizimni tanlang.
2. **Drenajni tortishish bilan.** Chiqish nuqtasi joyini va agar boʻlsa, stoyka joylarini kiriting. Armaturalari boʻlgan har bir qavatni olish uchun **Barcha qavatlarni bir martada yoʻnaltirish** ni belgilang: har bir qavatning drenajlari oʻz sathida stoykaga ulanadi, stoyka esa eng baland kran ustidan tagigacha yuradi. {{ui:Route}} tugmasini bosing.
3. **Sifondan ventilyatsiyagacha.** Panelda har bir sifondan uning ventilyatsiyasigacha boʻlgan masofa koʻrsatiladi. **Sifondan ventilyatsiyagacha eng katta masofa** maydoniga kodingiz ruxsat etgan eng katta masofani kiriting; undan oshgan har qanday armatura bajarilmagan deb roʻyxatlanadi va necha millimetrga oshgani koʻrsatiladi. Armaturalarda oʻz ventilyatsiya tarmogʻi boʻlmasa, **Stoyka orqali ventilyatsiya** ni belgilang: u holda masofa stoykagacha oʻlchanadi. BimCraft bu uchun kod jadvalini bermaydi: raqamni siz kiritasiz.
4. **Sovuq va issiq suv.** Manbani tanlang, manbadagi bosimni va armaturada kerak boʻlgan bosimni kiriting. **Issiq suv** ni belgilang, isitgichning issiq ulanishini tanlang va **Aylanma halqa** ni belgilang, shunda qaytish liniyasi isitgichning **issiq-qaytish** ulanishida yoki siz tanlagan boshqa ulanishda tugaydi (oxirgi ulanish sizga ulash uchun 150 mm qisqa, ochiq holda tugaydi).
5. **Split, multi-split va VRF.** Tashqi blokni tanlang, ichki bloklarni belgilang va har birining quvvatini kiriting. Chegaralarni ishlab chiqaruvchingiz maʼlumotlaridan kiriting. Burilish va shox komplekti (branch kit) ning **ekvivalent uzunligini** (ishlab chiqaruvchi qiymatlari) kiriting: shunda eng uzun va umumiy uzunliklar ekvivalent uzunliklar boʻyicha tekshiriladi.
6. {{ui:Route}} tugmasini bosing. Panel nechta yoʻl chizilganini va bajara olmagan narsalarni hamda sababini aytadi. {{ui:Undo}} hammasini bitta qadamda qaytaradi.

## Nimani koʻrishingiz kerak

Tirsaklar, troyniklar va reduksiyalar bilan quvurlar; oʻz oʻlchamining eng kichik nishabidan kam boʻlmagan darajada pasayadigan drenajlar; armaturalarda ventilyatsiya chiqishlari; suyuqlik va gaz juftligi sifatida sovutgich liniyalari, ular har bir burilishda bir xil tomonga buriladi, shox tanadan chiqqan joyda esa tarmoq komplekti belgilangan boʻladi.

## Bilish foydali

- Drenaj boshqa drenajga tutashgan joyda model troynik chizadi. Reja bu joylarni 45 gradusli wye tutashuvlari deb nomlaydi, shunda fitingni oʻzgartirishingiz mumkin.
- Issiq suv armaturaning oilasida issiq ulanish boʻlsa, oʻshani ishlatadi; boʻlmasa, sovuq ulanishdan 100 mm yonidagi ulanishni ishlatadi.
- Sovutgich liniyalari har bir blokning ikki porti orasidan boshlanadi. Blokning ikki porti burilish uchun juda yaqin boʻlsa, juftlik ular orasida markazda qoladi.
- Suv tarmogʻi hisob-kitoblarda koʻrsatilgan talab egri chizigʻi va ishqalanish raqamlaridan foydalanadi; bosimlarga ishonishdan oldin ularni kodingizniki bilan almashtiring.
- Katta uylar yarim daqiqa yoki undan koʻproq vaqt olishi mumkin, asosan issiq suv tarmogʻi sababli.
- Bu chizmachilik yordamchisi. Oʻlchamlar, nishablar, ventilyatsiya va bosimlarni amaldagi kod bilan malakali mutaxassis tekshiradi.

## Keyingi

[Toʻqnashuvlarni tekshirish](topic:clash-check) · [Quvurlar va havo kanallarini konstruksiya bilan tekshirish](topic:mep-against-structure) · [Quvurlar va jihozlar orasidagi ulanishlar](topic:mep-connections)
