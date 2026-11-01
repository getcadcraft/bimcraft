---
title: BimCraft ilovasidagi koordinatalar
summary: Siz qayerda ishlayotganingiz: kursorning plan va 3D koʻrinishdagi holati, siz turgan sath, loyiha boshi va uchastkaning geodezik nuqtasi.
keywords: koordinatalar, qayerdaman, joylashuv, holat, kursor, x y z, sath, qavat, loyiha boshi, boshlangʻich nuqta, asosiy nuqta, geodezik nuqta, uchastka, xarita koordinatalari, sharqiy koordinata, shimoliy koordinata, georeferens, birliklar, joy
from: 84df5245
---

## Nima qilasiz

Modelda qayerda ekaningizni bir qarashda bilib oling: qaysi sathda chizayotganingizni, kursor loyiha boshidan qanchalik uzoqda ekanini va uchastkaning geodezik nuqtasi qayerda joylashganini.

## Raqamlar qayerda koʻrinadi

- **3D koʻrinish ustida** (pastki oʻng burchakda, koʻrinish kubi yonida): kursorni model ustiga olib boring. Quti nuqta qaysi sathda ekanini va shu sath polidan qanchalik balandda ekanini, soʻng **X, Y va Z** ni koʻrsatadi. Boʻsh joy ustida u eng pastki sathning polidagi nuqtani koʻrsatadi.
- **Planda** (pastki oʻng burchakda, {{ui:Draw}} yoqilgan boʻlsa): plan koʻrsatayotgan sath va uning polining balandligi, hamda kursor plan ustida boʻlganda **X va Y**.
- Agar faylda xarita aylantirishi boʻlsa (xarita koordinatalari bilan eksport qilingan boʻlsa), ikkala quti ham xarita toʻridagi **sharqiy va shimoliy koordinatalarni** qoʻshadi, siz tanlagan {{ui:Units}} birligida (birlik har doim raqamlar yonida yoziladi; fut va dyuym oʻnli futda koʻrsatiladi). DWG yoki DXF chizma oʻz birliklarini saqlaydi: uning kursor koʻrsatkichi ularni nomlaydi va ular hech qachon aylantirilmaydi.

Har bir X, Y va Z **loyiha boshidan** oʻlchanadi, panelda tanlangan {{ui:Units}} birligida (fut va dyuym, dyuym, oʻnli fut, millimetr, santimetr yoki metr). Musbat Y modelning shimolini koʻrsatadi, u har doim haqiqiy shimol boʻlavermaydi. Xarita sharqiy va shimoliy koordinatalari ham xuddi shu tanlovga amal qiladi (fut va dyuym oʻnli futda koʻrsatiladi). Agar xarita tizimining oʻz birligi siz tanlagan birlikdan boshqacha boʻlsa, u raqamlardan keyin qavs ichida nomlanadi, masalan *(AQSH geodezik futlari)*, shunda geodezist tizimning oʻzi qaysi birlikda yozilganini koʻrishi mumkin.

## Ikki belgi

- **Loyiha boshi** (xoch bilan qizil doira): nuqta 0, 0, 0, modeldagi har bir koordinata shu nuqtadan oʻlchanadi.
- **Geodezik nuqta** (uchburchakli koʻk doira): uchastkaning tayanch nuqtasi, uning kenglik, uzunlik va balandligi yoki xarita koordinatalari shu nuqta uchun beriladi. 3D koʻrinishda u qayerda ekanini bilish uchun unga kursorni olib boring.

Uchastka loyiha boshida joylashgan boʻlsa, masalan bu yerda chizilgan yangi bino kabi, bitta belgi ikkalasini koʻrsatadi. Belgilarni yashirish yoki koʻrsatish uchun ikkala qutidagi nishon (xoch) tugmasini bosing; BimCraft tanlovingizni shu brauzerda eslab qoladi.

## Nimani koʻrishingiz kerak

- Kursor harakatlanganda raqamlar oʻzgaradi va planning qutisi siz qavatlar roʻyxatida tanlagan sath nomini koʻrsatadi.
- Belgilar siz orbita boʻylab aylantirganda, surganda va kattalashtirganda joyida qoladi.

:::tip
Nuqtaning kenglik va uzunligini bilish uchun {{ui:Measure}} › {{ui:Location}} dan foydalaning: qarang [3D da masofalar, yuza maydonlari va joylashuvlarni oʻlchash](topic:measure).
:::

:::touch
Sensorli ekranda 3D qutida sichqoncha yoki qalam ishlatmaguningizcha hech narsa koʻrinmaydi: barmoq esa koʻrinishni suradi.
:::
