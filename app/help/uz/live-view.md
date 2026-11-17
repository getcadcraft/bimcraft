---
title: Jonli koʻrinish
summary: Modelni real vaqt koʻrinishida, quyosh, soyalar va qaytgan yorugʻlik bilan koʻrsatadigan, modelning yonidagi panel; u qilgan har bir oʻzgarishni kuzatadi. Uning ichida yuring va kun vaqti hamda oyni sozlang.
keywords: jonli koʻrinish, live view, real vaqt, realtime, real vaqt render, sayr, birinchi shaxs, taqdimot, mijoz, ikkinchi ekran, ikkinchi oyna, monitor, kun vaqti, quyosh, fasl, oy, soyalar, ambient occlusion, akslar, qaytgan yorugʻlik, global illumination, webgpu, webgl
from: ea5c02bf
---

Jonli koʻrinish modelni real vaqt koʻrinishida koʻrsatadi: osmon va quyosh hududingizning joyi va sanasi boʻyicha, quyosh soyalari, elementlarga bergan boʻyoqlar va materiallar, chiroqlar hamda devor va polslardan qaytgan yorugʻlik. U siz qilgan ishni kuzatadi: 3D koʻrinishni burasiz, u ham buriladi; modelni oʻzgartirasiz, u oʻzgarishni bir zumdan soʻng koʻrsatadi. Hech narsa yuklanmaydi.

U [Rasmni render qilish](topic:render) bilan bir xil sahnani, boʻyoqlarni, chiroqlarni va quyoshni chizadi; tayyor rasm uchun oʻsha boʻlimdan foydalaning.

## Ochish

1. Modelni oching va asboblar panelida {{ui:Jonli koʻrinish}} ni tanlang. Panel ilova ustida, pastki oʻng burchakda ochiladi.
2. Uni koʻchirish uchun sarlavha satrini suring, kattalashtirish uchun esa burchagidan torting.
3. {{ui:Jonli koʻrinish yangi oynada}} (yonidagi tugma) yoki paneldagi {{ui:Yangi oyna}} uni ikkinchi ekran uchun alohida oynaga koʻchiradi. Brauzeringiz qalqib chiquvchi oynalarni bloklasa, u panel sifatida ochiladi.
4. {{ui:Yopish}} uni yopadi.

## Boshqaruv

| Boshqaruv | Nima qiladi |
|---|---|
| {{ui:Koʻrinishni kuzatish}} | Yoqilgan: jonli koʻrinish 3D koʻrinish qaragan joyga qaraydi. Sayr qilish uni oʻchiradi |
| {{ui:Sayr}} | Modelni kezib chiqish (quyida) |
| {{ui:Tortishish}} | Sayr qilayotganda: qavatlarda turish va zinalarga chiqish. Oʻchiq boʻlsa: uchish |
| {{ui:Vaqt}} | Kunning soati. Quyosh siz surganingizda harakatlanadi |
| {{ui:Oy}} | Oy, shunda qishda va yozda quyoshni koʻrishingiz mumkin |
| {{ui:Sifat}} | {{ui:Bu kompyuter uchun}} yoki {{ui:Past}}, {{ui:Oʻrta}} yoki {{ui:Yuqori}} |

Pastki satr koʻrinishni nima chizayotganini (WebGPU yoki WebGL 2), sifatni va qaytgan yorugʻlikni aytadi.

## Model boʻylab sayr qilish

1. 3D koʻrinishni turmoqchi boʻlgan joyingizga burang va {{ui:Sayr}} ni tanlang. Siz koʻrinishning kuzatish nuqtasi ostidagi polda, 1,6 m balandlikda turasiz.
2. Jonli koʻrinishni bosing, soʻngra {{key:W}} {{key:A}} {{key:S}} {{key:D}} yoki strelka tugmalaridan foydalaning. Yugurish uchun {{key:Shift}} ni ushlab turing. Atrofga qarash uchun suring.
3. 40 sm gacha boʻlgan pogʻonalardan oshib oʻtiladi (zinalar); undan balandroq narsa devor hisoblanadi. Devorlar sizni toʻxtatadi va siz ularning boʻylab sirpanasiz.
4. {{ui:Tortishish}} oʻchiq boʻlsa, uchasiz: {{key:E}} yuqoriga, {{key:Q}} pastga.
5. {{key:Esc}} sayrni toʻxtatadi.

## Qaytgan yorugʻlik

Quyoshli devordan polga qaytadigan yorugʻlik va xonaning qorongʻi ichki qismi har bir protsessor yadrosida fonda hisoblanadi. Hisoblash davomida pastki satrda {{ui:Qaytgan yorugʻlik: 40 %}} yoziladi; tayyor boʻlganda koʻrinish uni qabul qiladi. Har bir oʻzgarishdan keyin u qaytadan boshlanadi.

:::note
Bu jonli koʻrinish uchun taxminiy hisob, render qilingan rasm emas: nuqtalar orasidagi kichik tafsilotlar yaqin nuqtalarning qaytgan yorugʻligini oladi.
:::

:::note
Brauzerlar bir-biridan farq qiladi. Brauzerda WebGPU boʻlsa, jonli koʻrinish undan foydalanadi; boshqa holda WebGL 2 ishlatiladi va u bir xil koʻrinadi. Ikkalasi ham boʻlmasa, panel buni aytadi.
:::
