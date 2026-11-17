---
title: Model chiziqlari va model matni: modelda, ish tekisligida chiziladi
summary: Model chizigʻi modelda yashaydigan va har bir koʻrinishda koʻrinadi chiziq, polichiziq yoki yoy. Model matni haqiqiy chuqurlikka ega 3D yozuv. Ikkalasi ham ish tekisligida chiziladi.
keywords: model chizigʻi, model matni, 3D matn, yozuv, belgi, lavha, belgilash, 3D chiziq, yoy, polichiziq, ish tekisligi, ekstruziyalangan matn, shrift, chuqurlik, detal chizigʻi, chizmachilik chizigʻi, izoh, IfcAnnotation
from: fc9cccb5
---

## Nima qilasiz

Modelning bir qismi boʻlgan chiziqlar va yozuvlar chizing, bitta koʻrinishniki emas.

## Qadamlar

1. Avval ish tekisligini oʻrnating (qarang **Ish tekisligi**). Sath tekisligi rejada chiziladi; vertikal tekislik Ish tekisligi koʻruvchisida chiziladi.
2. Chiziq uchun {{ui:Yigʻilish}} menyusidan **Model chizigʻi** ni tanlang va **Chiziq**, **Polichiziq** yoki **Yoy (uch nuqta)** ni tanlang:
   - chiziq ikki bosishdan iborat;
   - polichiziq har bir nuqta uchun bir bosish, soʻng {{key:Enter}} yoki ikki marta bosish. Birinchi nuqtani bosish uni yopadi;
   - yoy uch bosishdan iborat: boshlanishi, oʻtadigan nuqtasi va oxiri.
3. Matn uchun **Model matni** ni tanlang. Soʻzlarni yozing, bosh harf balandligi va chuqurligini belgilang, soʻng matn boshlanadigan joyni bosing (asos chizigʻining chap uchi).
4. Chiziq yoki matnni tanlab, uni **Xossalar** da koʻring. Matnning soʻzlari, balandligi va chuqurligini shu yerda oʻzgartirish mumkin. {{key:Delete}} uni oʻchiradi.

## Qayerda koʻrinadi

- Model chizigʻi oʻz sathining rejasida, 3D koʻrinishda, fasad va kesim panelida hamda ish tekisligida yotganda Ish tekisligi koʻruvchisida koʻrinadi. Chizmachilik chizigʻi (Izohlash, Chiziq) faqat bitta koʻrinishga tegishli.
- Model matni qattiq geometriya: model koʻrinadigan joyda, rejada, 3D da, fasad va kesimlarda hamda varaqlarda koʻrinadi.
- Model chiziqlari hozircha bosma varaqlarda chizilmaydi. Model matni chiziladi.

## Shrift

Model matni varaqlar va PDF lar bilan bir xil shriftda: Liberation Sans, SIL Open Font License ostida. Shriftda boʻlmagan harf soʻroq belgisi sifatida chiziladi va bu sizga aytiladi. Bitta shrift va bitta qalinlik bor. Harflar shriftning oʻz kengliklari boʻyicha joylashadi, kerningsiz.

## IFC faylda

- Model chizigʻi IfcAnnotation boʻlib, obyekt turi ModelLine. Uning shakli 3D egri: polichiziq uchun polichiziq, yoy uchun kesilgan aylana.
- Model matni IfcBuildingElementProxy boʻlib, obyekt turi ModelText. Uning shakli har bir harf boʻlagi uchun bitta ekstruziyalangan qattiq jism, O va B kabi harflarning teshiklari bilan. Miqdorlari: yuz maydoni va hajm (yuz maydoni koʻpaytirilgan chuqurlik).

## Yaxshi bilish kerak

- Har qanday oʻlcham soʻraganingizdek yasaladi. Faqat uzunligi yoʻq chiziq, uch nuqtasi bir chiziqda yotgan yoy yoki harfsiz matn rad etiladi, chunki yasash uchun hech narsa yoʻq.
- Har bir chiziq, matn yoki ularning oʻzgarishi Ortga qaytarishning bitta qadami.
