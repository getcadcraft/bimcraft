---
title: Ish tekisligi: uni oʻrnatish, koʻrsatish, unga toʻgʻridan qarash
summary: Ish tekisligi model chiziqlari, model matni va Ish tekisligi koʻruvchisi ishlatadigan tekislik. Uni qavatga, yuzaga, nomlangan yordamchi tekislikka yoki chiziqqa oʻrnating; koʻrinishlarda koʻrsating; vertikal tekislikda chizish uchun koʻruvchini oching.
keywords: ish tekisligi, ish tekisligini oʻrnatish, ish tekisligini koʻrsatish, yordamchi tekislik, ish tekisligi koʻruvchisi, nomlangan tekislik, yuza, qavat, vertikal tekislik, devorga chizish, fasad chizmasi, tutish, tekislash, ref plane
from: 8aceee1d
---

## Nima qilasiz

Chizadigan tekisligingizni tanlang, uning qayerdaligini koʻring va vertikal turgan tekislikda chizing.

## Qadamlar

1. **Chizish** ni yoqing va **Qurish** menyusini oching (lenta tartibida: Arxitektura yorligʻi, Ish tekisligi).
2. **Ish tekisligini oʻrnatish** ni tanlang. Soʻng quyidagilardan birini bajaring:
   - **Oʻrnatish** ro'yxatidan qavatni tanlang;
   - yonidagi ro'yxatdan nomlangan yordamchi tekislikni tanlang;
   - rejadagi chiziqni bosing: devor, panjara chizigʻi, yordamchi tekislik, model chizigʻi yoki pardali tizim. Ish tekisligi shu chiziq orqali oʻtuvchi vertikal tekislik boʻladi;
   - 3D koʻrinishda tekis yuzani bosing. Ish tekisligi shu yuzada yotadi.
3. Uni koʻrish uchun **Ish tekisligini koʻrsatish** ni tanlang: 3D koʻrinishda metrlik panjarali rangli varaq, rejada shtrixli kontur yoki chiziq, hamda balandlik va kesim panelida shtrixli kontur. Uni yashirish uchun yana tanlang.
4. Tekislikka toʻgʻridan qarash uchun **Ish tekisligi koʻruvchisi** ni tanlang. Qora chiziqlar tekislik kesib oʻtgan modeldir. Uning asboblari yordamida tekislikda model chizigʻi, model matni yoki yordamchi tekislik chizing. **3D da koʻrish** 3D koʻrinishni tekislikka qaratadi.

## Yordamchi tekisliklar

Yordamchi tekislik chiziq sifatida chiziladigan nomlangan tekislikdir.

1. **Yordamchi tekislik** ni tanlang. Agar xohlasangiz, uning qatoriga nom kiriting (aks holda sizga nom beriladi) va balandlik kiriting.
2. Boshlanish va tugash nuqtasini bosing. Rejada bu vertikal tekislik hosil qiladi. Ish tekisligi koʻruvchisida esa u ish tekisligiga tik turadigan tekislik hosil qiladi.
3. Rejada u nomi bilan birga shtrixli yashil chiziq sifatida koʻrinadi; 3D koʻrinishda va balandlik va kesim panelida esa shtrixli kontur sifatida.
4. Uni nomini oʻzgartirish, uzunligi, balandligi va pastki nuqtasini oʻzgartirish uchun tanlang, yoki **Ish tekisligi sifatida ishlatish** ni bosing.

Ikki yordamchi tekislikda bir xil nom boʻla olmaydi, chunki tanlash nom orqali amalga oshadi.

## Foydali maʼlumot

- Ish tekisligi oʻrnatilmagan model eng past qavatda ishlaydi.
- Ish tekisligi faylda saqlanadi. Uni koʻrsatish yoki yashirish esa shu brauzerda eslab qolinadi, faylda emas.
- Agar ish tekisligi yordamchi tekislikni kuzatsa va siz oʻsha tekislikni siljitsangiz, ish tekisligi u bilan birga siljiydi.
- Vertikal ish tekisligida Model chizigʻi va Model matni asboblari koʻruvchini ochadi, chunki reja balandlikka ishora qila olmaydi.
- Chizish asboblari rejada chizilgan yordamchi tekisliklarning uchlarini koʻruvchidagi boshqa chiziqlar uchlari kabi ushlaydi.

## IFC faylida

- Ish tekisligi loyihada xossalar toʻplami (CadCraft_WorkPlane) sifatida saqlanadi.
- Yordamchi tekislik obyekt turi ReferencePlane va nomi bilan IfcAnnotation boʻladi. Uning shakli tekislikning yopiq konturi, shuning uchun boshqa dastur uning qayerdaligini koʻrsata oladi. Uning CadCraft_ReferencePlane toʻplami boshlangʻich nuqta, yoʻnalish, normal va oʻlchamni saqlaydi. IFCda yordamchi tekislik uchun alohida sinf yoʻq; annotatsiya bino elementi hisoblanmaydi va xonalarni chegaralamaydi.
