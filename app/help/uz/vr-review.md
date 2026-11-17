---
title: Modelni VR shlemida koʻrib chiqish
summary: IFC modelini VR shlemida real oʻlchamda koʻring: aylanib yuring, burilib koʻring, oʻlchang, kesib oching, rasmli BCF muammolarini qoʻying, uni stol usti modeli sifatida koʻring va jonli seansdagi boshqalar bilan uchrashing.
keywords: vr, virtual haqiqat, shlem, webxr, xr, immersive, quest, oculus, vive, index, pico, sayr, walkthrough, teleport, loyihani koʻrib chiqish, muvofiqlashtirish, review, oʻlchash, kesim, muammo, issues, bcf, stol usti, masshtabli model, ishtirok, avatarlar, jonli, birgalikda
from: 8994b36d
---

{{ui:VR}} asboblar panelida IFC modeli ichiga VR shlem bilan real oʻlchamda kirish imkonini beradi. Siz 3D koʻrinish kamerasi turgan joyda, undan pastdagi qavatda, xuddi oʻsha tomonga qarab turasiz. Shlem 3D koʻrinishda koʻrinadigan narsani koʻrsatadi: yashirin qavatlar, elementlar va modellar yashirin qoladi, boʻyalgan materiallar esa saqlanadi. Hech narsa yuklanmaydi: brauzer buni shu kompyuterda (yoki shlemning oʻz brauzerida) chizadi.

## Kerak boʻladigan narsalar

- Brauzer boshqara oladigan shlem (WebXR): avtonom shlemning oʻz brauzeri yoki kompyuterga ulangan shlem bilan Chrome yoki Edge.
- Ochiq IFC modeli, saytdagidek xavfsiz sahifada (https).

Shlem boʻlmasa, {{ui:VR}} oʻchiq (kulrang) boʻladi va nima uchunligini aytadi.

## Boshlash

1. 3D koʻrinishni boshlamoqchi boʻlgan joyingizga sozlang: xonada yoki binoga tashqaridan qarab.
2. Asboblar panelidagi {{ui:VR}} tugmasini bosing.
3. Shlemni kiying.

Menyu chap qoʻlingizning orqa tomonida. Oʻng boshqaruvchi bilan unga qarang va tugmani tanlash uchun tetikni bosing. (Faqat bir qoʻl bilan boʻlsa, menyu boshlagan joyingiz oldida suzib turadi.)

## Harakatlanish

- **Sakrash:** {{ui:Move}} da polga qarang va tetikni torting; oʻsha joyga tushasiz. Yoki tayoqchani oldinga suring, nishonga oling va sakrash uchun qoʻyib yuboring. Faqat polga, plitalarga va yerga (yuqoriga qaragan yuzalarga) tushish mumkin, hech qachon devorga emas.
- **Burilish:** tayoqchani chapga yoki oʻngga suring: har safar 30° ga buriladi.
- **Yurish:** oʻz harakat maydoningizda shunchaki yuring.

## Oʻlchash

{{ui:Measure}} ni tanlang, soʻng ikki nuqtada tetikni torting. Ular orasidagi masofa metrda koʻrinadi. Burchak yaqinidagi nuqta burchakka yopishadi.

## Kesib ochish

{{ui:Section}} ni tanlang va yuzada tetikni torting:

- devorda (yoki polda boʻlmagan narsada): siz bilan oʻsha yuza orasidagi hamma narsa kesib olib tashlanadi, shunda ichkarini koʻrasiz. Bu tashqaridan yoki xona boʻylab eng yaxshi ishlaydi;
- polda, yuqoridan: oʻsha pol ustida 1,2 m balandlikdagi reja kesimi, shunda devorlar pastki qismini koʻrsatadi.

{{ui:Clear}} kesimni va oʻlchovlarni olib tashlaydi. Agar boshlaganingizda model [kesish tekisligi](topic:section-plane) bilan kesilgan boʻlsa, shlem u bilan boshlanadi.

## Muammo qoʻyish

{{ui:Issue}} ni tanlang va muammo turgan joyda tetikni torting. Raqamlangan belgi uni koʻrsatadi, muammo esa {{ui:Issues}} yorligʻiga BCF mavzusi sifatida tushadi: koʻrganingizning rasmi va turgan joyingizdagi kamera bilan, modelning oʻz koordinatalarida. Ularni boshqa [muammolar](topic:issues-bcf) bilan birga BCF fayl sifatida saqlang; boshqa muvofiqlashtirish vositalari ularni xuddi shu koʻrinishda ochadi.

VRdan chiqqach, {{ui:Issues}} yorligʻida muammoga izoh qoʻshing: shlemda yozish hali qurilmagan.

## Stol usti modeli sifatida koʻrish

{{ui:Table top}} modelni oldingizdagi stolga sigʻadigan qilib kichraytiradi; uning atrofida aylaning yoki tayoqcha bilan buring. {{ui:Full size}} sizni avvalgi joyingizga qaytaradi.

## Boshqalar bilan, jonli

[Jonli seansda](topic:work-live) VR dagi hamma boshqalarni oʻz rangidagi bosh va ikki qoʻl sifatida koʻradi, ismi bilan va har biri qaragan joyida nuqta bilan. Har kimning tahrirlari bir zumda shlemingizga yetib boradi. Stol ustidagilar hali shlemda koʻrinmaydi.

## Chiqish

{{ui:Leave VR}} ni tanlang (yoki shlemni yechib, seansni shu yerda tugating). Ekrandagi 3D koʻrinish boshingiz turgan joyga siljiydi.

:::note
Shlem emulyatori bilan sinovdan oʻtkazilgan, hali har bir shlemda emas. Katta model shlemni qotirib qoʻyishi mumkin: avval kerak boʻlmagan qavatlar yoki modellarni yashiring ([yashirish va ajratish](topic:hide-and-isolate)).
:::
