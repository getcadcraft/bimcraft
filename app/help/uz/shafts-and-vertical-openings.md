---
title: Shaxtalar va qavatlardan oʻtadigan teshiklar
summary: Shaxta ikki sath orasidagi har bir pol, shift va tomni kesadigan bitta kontur. Vertikal teshik ulardan birini kesadi. Devordagi teshik devorni kesadi.
keywords: shaxta, lift shaxtasi, elevator shaxtasi, zinapoya shaxtasi, pogʻona, vertikal teshik, pol teshigi, shift teshigi, tom teshigi, yorugʻlik teshigi, devordagi teshik, IfcOpeningElement, chegirma, sof maydon
from: 8e9e1641
---

## Nima qilasiz

Bitta chizma bilan binodan lift shaxtasini kesing, bitta qavatda teshik oching va maydonlardan nima olib tashlanganini koʻring.

## Asboblar qayerda

- Lenta tartibi: {{ui:Arxitektura}} › **Teshik** › {{ui:Shaxta}}, {{ui:Vertikal teshik}} va {{ui:Devordagi teshik}}.
- Klassik tartib: chizish paneli › {{ui:Xonalar}} menyusi (Shaxta, Vertikal teshik) va › {{ui:Devorlar}} menyusi (Devordagi teshik).

## Shaxta

1. Shaxta boshlanadigan qavatning reja koʻrinishini oching. {{ui:Shaxta}} ni tanlang.
2. Qatorda {{ui:Pastki sath}} va {{ui:Yuqori sath}} ni tanlang, va agar ular ulardan yuqorida yoki pastda boshlansa yoki tugasa, siljishlarni kiriting.
3. Kontur burchaklarini bosing. Birinchi burchakni yana bosing, ikki marta bosing yoki tugatish uchun {{key:Enter}} ni bosing.
4. Ikki balandlik orasidagi har bir pol, shift va tom kesiladi. Holat satri nechta ekanini aytadi.

Shaxta bitta narsa. U oʻtadigan istalgan sathda uning konturini tanlang: Xususiyatlarda uning nomi, sathlari va siljishlari, nimani kesishi va olib tashlangan maydoni bor. Uni oʻzgartiring — har bir teshik unga ergashadi. Oʻchiring — har bir teshik yoʻqoladi. Har biri bitta bekor qilish qadamidir.

U kesishda davom etadi: uning sathlari orasida keyinroq yaratilgan pol soʻralmasdan kesiladi, oʻchirgan poli esa qoldiriladi.

Shaxta turgan pol kesilmaydi (uning yuqori qismi pastki sath hisoblanadi). Uni ham kesish uchun pastki sathga manfiy siljish bering. Tomdan oʻtish uchun yuqori sathga musbat siljish bering.

## Vertikal teshik

1. {{ui:Vertikal teshik}} ni tanlang. Qatorda nimani kesishni tanlang: pol, shift yoki tom.
2. Kontur burchaklarini bosing va yuqoridagidek tugating.
3. Konturning ostidagi shu sathning poli, shifti yoki tomi kesiladi. U bitta elementga tegishli: polni oʻchiring — teshik u bilan birga yoʻqoladi.

## Devordagi teshik

{{ui:Devordagi teshik}} — [Devorni shakllantirish](topic:wall-shape) vositasi: rejada devorni bosing yoki 3D da uning yuzidagi ikki burchakni bosing.

## Miqdorlar

Pol uchun oʻlchash qoidasi boʻyicha, elementning sof maydoni uning yalpi maydoni minus undan kesib olingan qism. Shaxta yoki vertikal teshik har bir kesilgan pol va shiftda chegirma hisoblanadi; Pollar va pardozlash jadvallari hamda IFC miqdorlari bir xil raqamlarni koʻrsatadi. Tomda chegirma tom yuzasining maydoni: reja maydoni nishablik kosinusiga boʻlinadi.

Chetdan osilib turgan kontur faqat elementda yotgan qismni chegiradi.

## Agar hech narsa kesilmasa

Yoʻlida hech narsa boʻlmagan shaxta baribir yaratiladi va buni aytadi: keyinroq qurilgan narsani kesadi. Vertikal teshik ostida biror narsa boʻlishi kerak; hech narsa boʻlmasa holat satri buni aytadi va hech narsa yaratilmaydi.

## IFC faylda

Har bir kesim u kesadigan elementga IfcRelVoidsElement bilan bogʻlangan IfcOpeningElement boʻladi, shuning uchun har qanday IFC dasturi teshikni koʻrsatadi. Tom yuz-yuz kesiladi. Shaxtaning oʻzi uning teshiklari IfcGroup boʻladi.

## Hali qurilmagan

- Egri konturlar.
- Shaxtaning devorlari: ularni Devor asbobi bilan chizing.
- Konturni burchaklarini sudrab tahrirlash (uni Xususiyatlarda oʻzgartiring yoki oʻchirib, qayta chizing).
- Chizilgan polning oʻz Xususiyatlari faqat oʻz teshiklari chegirilgan maydonini koʻrsatadi; jadvallar va IFC miqdorlari shaxtaniki ham hisobga oladi.

Shuningdek qarang: [Xonalar va xona ajratgichlar](topic:rooms-and-separators).
