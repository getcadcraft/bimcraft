---
title: Muammolar va BCF fayllari
summary: Modelning koʻrinishini kamera, tanlangan elementlar, yashirilganlar va kesim bilan muammo sifatida saqlang hamda uni boshqa muvofiqlashtirish vositalari bilan ulashish uchun BCF fayl sifatida saqlang; ularning BCF fayllarini ochib, muammolarini koʻring.
keywords: bcf, bcfzip, muammo, muammolar, mavzu, koʻrinish nuqtasi, toʻqnashuv hisoboti, muvofiqlashtirish, izoh, surat, bcf ochish, bcf saqlash, eksport, import
from: 2a6cf201
---

## Nima qilasiz

Modelda muammoni koʻrsating va uni koʻrsatadigan koʻrinishni saqlang, soʻng uni BCF faylida uzating — bu boshqa muvofiqlashtirish vositalari oʻqiydigan va yozadigan format.

## Qadamlar

1. IFC modelini oching va koʻrinishni sozlang: unga aylanib qarang, ishtirok etgan elementlarni tanlang, yoʻldagilarni yashiring, uni kesim tekisligi yoki quti bilan kesing.
2. Oʻng tomondagi {{ui:Muammolar}} yorligʻini bosing, soʻng {{ui:Bu koʻrinishdan yangi muammo}} ni bosing.
3. Sarlavha kiriting, xohlasangiz izoh yozing; holatni tanlang; ismingiz yoki elektron pochtangizni kiriting (tizimga kirgan boʻlsangiz, hisobingiz nomi toʻldiriladi; qarang: [BimCraft sozlamalari](topic:settings#your-name-on-issues)). {{ui:Muammo yaratish}} ni bosing.
4. Muammoning koʻrinishini qaytarish uchun uning {{ui:Koʻrsatish}} tugmasini bosing.
5. Barcha muammolarni bitta `.bcf` fayl sifatida yuklab olish uchun {{ui:BCF saqlash}} ni bosing.
6. Boshqa birov yaratgan muammolarni koʻrish uchun {{ui:BCF ochish…}} ni bosing va ularning `.bcf` yoki `.bcfzip` faylini tanlang.

## Nimani koʻrishingiz kerak

- Har bir muammo roʻyxatda: koʻrinish surati, sarlavhasi, holati, muallifi va sanasi bilan.
- {{ui:Koʻrsatish}} kamerani, tanlangan elementlarni, nima yashirilgani yoki faqat koʻrinib turganlarni va kesimni qaytaradi. Elementlar ochiq barcha modellarda GlobalId boʻyicha topiladi; agar ayrimlari topilmasa, holat qatorida aytiladi.
- Boshqa vositadan kelgan kesim tekisligi yoki qutisi modelning oʻqlariga mos kelsa, koʻrsatiladi; qiya yoki qoʻshimcha tekisliklar kesim hajmi sifatida qaytadi (6 tagacha tekislik). Muammo bir nechta qutidan iborat hajmning birinchi qutisini saqlaydi.

## Yaxshi bilish kerak

- Fayl BCF 2.1 formatida, koʻrinishni modelning oʻz koordinatalarida saqlaydi, shuning uchun boshqa vositalar kamerani xuddi shu joyga qoʻyadi.
- Muammolar siz saqlamaguningizcha shu yorliqda qoladi. Boshqa modelni ochish roʻyxatni saqlab qoladi; muammolar tegishli boʻlgan modelni ochib, keyin ularni koʻrsating.
- Boshqa vositadan kelgan parallel (ortogonal) kamera bu yerdagi perspektiv kamera bilan koʻrsatiladi va xuddi shu model qismi koʻrinishni toʻldirishi uchun orqaga suriladi.

## Keng tarqalgan xatolar

- **Koʻrsatish kamerani gʻalati joyga olib bordi.** Muammo boshqa modelda yoki boshqa koordinatalarda yaratilgan. Avval toʻgʻri modelni oching.
- **Fayl ochilmaydi.** U BCF zip emas yoki buzilgan; sababi holat qatorida aytiladi.

## Keyingi

- [Elementlarni yashirish, ajratish va orqali koʻrish](topic:hide-and-isolate)
- [IFC modelini kesim tekisligi bilan kesish](topic:section-plane)
