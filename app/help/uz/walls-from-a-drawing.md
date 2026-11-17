---
title: Chizilgan chizmadan devorlar
summary: DWG yoki DXF rejasini sath uchun devorlar, eshiklar va derazalarga aylantiring va rejaning ostida chizmani havola sifatida saqlang.
keywords: dwg, dxf, izlash, izlangan, rejani import qilish, aylantirish, cad dan bim ga, 2d dan 3d ga, chiziqlardan devorlar, qatlamlar, bloklar, bloklardan eshiklar, ostki qatlam, havola chizma, fon, xref, chizma dasturi
from: 3bf213f1
---

## Nima qilasiz

Chizma dasturida siz (yoki boshqa biri) chizgan rejani modelning boshlanishi qilib ishlating: uning devor chiziqlari devorlarga, eshik va deraza bloklari esa eshik va derazalarga aylanadi.

## Qadamlar

1. {{ui:Draw}} ni yoqing va rejadagi sathlar roʻyxatidan chizma koʻrsatadigan sathni tanlang.
2. {{ui:Build}} › {{ui:From a drawing…}} ni tanlang, soʻng {{ui:Choose a drawing…}} ni va DWG yoki DXF ni tanlang.
3. Dialogda:
   - **Chizma birliklari** chizmadan olinadi; notoʻgʻri boʻlsa boshqasini tanlang (futda chizilgan reja dyuym sifatida oʻqilsa, u oʻn ikki marta kichik boʻladi).
   - **Devorlar bilan qatlamlar**: devor chiziqlari joylashgan qatlamlarni belgilang. Nomida "wall" boʻlgan qatlamlar siz uchun belgilab qoʻyiladi.
   - **Chiziqlar**: **har bir devorning ikkala yuzi** (rejalar odatda shunday chiziladi: 600 mm gacha masofada parallel har bir juft chiziq bitta devor boʻladi, qalinligi oraliq kabi), **devorlarning oʻq chiziqlari**, yoki **bitta yuz** devor chapda yoki oʻngda. Oʻq chiziqlari yoki bitta yuz bilan devor turi qalinlikni belgilaydi.
   - **Devor turi** va **Devor balandligi**, xuddi {{ui:Wall}} asbobidagidek.
   - **Bloklar**: eshik yoki deraza boʻlgan har bir blok uchun eshik yoki deraza turini tanlang, yoki uni qoldiring. Nomida "door" yoki "window" boʻlgan bloklar siz uchun tanlanadi. Har biri oʻtirgan devorga qoʻyiladi, devor boʻylab blok kengligida; eshik ochiladigan tomoni — uning ochilish yoyi chizilgan tomon.
   - **Qayerga borishi**: chizmaning oʻz koordinatalarida, yoki uning chap pastki burchagi reja boshida.
   - **Bu sathning rejasi ostidagi chizmani saqlash**: qoldirsangiz, qoʻshgan narsangiz ostida chizma yupqa chiziq sifatida koʻrinadi.
4. Tanlovlar ostidagi satr nechta devor, eshik va deraza yaratishini aytadi. {{ui:Make them}} ni bosing.

## Nimani koʻrasiz

- Sathdagi devorlar, eshiklar va derazalar, bir-biriga tutashgan joylarda birikkan, va ular yopgan xonalar bilan; hammasi bitta qadam, shuning uchun {{key:Mod+Z}} uni qaytaradi.
- Chizma rejaning ostida yupqa chiziqlar sifatida. {{ui:Build}} › {{ui:From a drawing…}} sathda saqlangan chizmalarni har biri {{ui:Remove}} bilan roʻyxatlaydi; birini olib tashlash devorlarni qoldiradi.
- IFC faylida saqlangan chizma sathdagi izoh (uning chiziqlari) boʻladi, shuning uchun boshqa BIM dasturlari ham uni koʻrsatadi.

:::note
PDF yoki skaner ham ishlaydi: qarang [Rejalar toʻplamidan devorlar](topic:walls-from-plans). Yoylar tashlab yuboriladi (BimCraft toʻgʻri devorlarni chizadi), blok ichidagi chiziqlar ham shunday. "Ikkala yuz" usulida juftligi boʻlmagan chiziqlar dialogda sanaladi va tashlab yuboriladi: ularni {{ui:Wall}} asbobi bilan chizing yoki {{ui:Modify}} › {{ui:Trim / extend}} bilan tartibga soling (qarang [Devorlarni kesish, uzaytirish va ulash](topic:trim-extend-walls)).
:::

:::tip
Chizma dasturida skaner ustidan izlaganmisiz? Skanerni ham bu yerda oching va devorlarni u bilan solishtiring: qarang [Skanerdan model](topic:model-from-a-scan).
:::
