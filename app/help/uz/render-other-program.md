---
title: Rasmni boshqa dastur bilan chizish
summary: Bizning oʻz yoʻl kuzatuvchimiz Render rasmini chizadi; boshqa dastur uni faqat CadCraft Studio dagi render-dvigatel qoʻshimchasi orqali chiza oladi. Nima olib oʻtilishi va nega ayrim dasturlar hech qachon taklif qilinmasligi.
keywords: render, dvigatel, tashqi dastur, qoʻshimcha dvigateli, studio, fon, navbat, usd, gltf, chizgan, blender, gpl
from: 652b413c
---

Rasm {{ui:Render}} da **bizning oʻz dvigatellarimiz** tomonidan chiziladi: {{ui:Tez}} va Yoʻl kuzatuvchi, brauzerda va CadCraft Studio da. Boshqa dastur faqat **render-dvigatel qoʻshimchasi** uni olib kelganda chizishi mumkin: qarang [Render dvigatelini qoʻshimcha orqali qoʻshish](topic:render-engine-addons). Sahnani boshqa dasturga olib borib u yerda ishlash uchun [Sahnani boshqa dasturda ochish](topic:render-open-in) yoki [Sahnani oʻyin dvigateliga yuborish](topic:render-unreal) dan foydalaning.

## Qoʻshimcha dvigateli bilan rasm chizish

1. Qoʻshimchani Sozlamalar › Qoʻshimchalar boʻlimida yoqing. Uning dvigateli {{ui:Render}} ning Dvigatellar roʻyxatida paydo boʻladi.
2. Uni tanlang. Uning oʻz sozlamalari Dvigatellar roʻyxati ostida koʻrinadi.
3. {{ui:Render}} ni bosing. Studio da qoʻshimcha birinchi marta dastur ishga tushirganda, Studio buni oʻz muloqot oynasida soʻraydi. Chizish paytida jarayon koʻrsatiladi; {{ui:Toʻxtatish}} uni tugatadi. Rasm uni chizgan dvigatel bilan belgilangan holda paydo boʻladi.

JavaScript da yozilgan dvigatel brauzerda ham ishlaydi. Kompyuterda dastur ishga tushiradigan dvigatel faqat Studio da ishlaydi; brauzerda u saqlanadigan fayl sifatida koʻrinadi.

## Nima olib oʻtiladi

Dvigatel **paket** oladi: model USD fayl sifatida (va agar u soʻrasa, glTF fayl sifatida), hamda aniq material qiymatlari, quyosh va osmon, yoqilgan har bir chiroq quvvati va yorugʻlik profili, kamera va ekspozitsiya bilan sozlamalar fayli. Har bir dastur yorugʻlik, tonlash va namunalarni oʻz usulida qoʻllaydi, shuning uchun rasmlar kamera, quyosh, chiroqlar va ekspozitsiya boʻyicha oʻxshash, lekin piksel-pikselgacha emas.

## CadCraft hech qachon ishga tushirmaydigan dasturlar

CadCraft hech qachon GNU GPL litsenziyasidagi dasturni ishga tushirmaydi va uni hech qachon Dvigatellar roʻyxatida yoki Ochish manzilida koʻrsatmaydi. Blender ulardan biri, shuning uchun u Dvigatellar roʻyxatida yoʻq. {{ui:Render}} dan saqlangan USD yoki glTF fayl u yerda ham, boshqa fayllarni oʻqiydigan har qanday dasturda boʻlgani kabi, ochiladi.

:::note
Panoramali va stereo kameralar hamda osmon rasmi (osmon ranglari oʻrniga ishlatiladi) boshqa dasturga olib oʻtilmaydi. Boshqa dasturda qilingan hech narsa modelga qaytmaydi.
:::
