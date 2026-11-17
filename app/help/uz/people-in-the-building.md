---
title: Odamlarni bino boʻylab yurgizish
summary: Xonalar, eshiklar va zinalar orqali evakuatsiya yoki odatdagi kunning kelishi: bino torayadigan joylarda navbatlar, har bir xonadan chiqishgacha eng uzun yoʻl va topilmalar Muammolar sifatida. Loyihalash qarorlari uchun taxminiy olomon modeli, yongʻin xavfsizligi sertifikati emas.
keywords: odamlar, evakuatsiya, chiqish yoʻli, chiqish, qochish, yurish masofasi, navbat, olomon, oqim, eshik kengligi, zinalar, kelish, toʻsiq, tor joy, simulyatsiya, aholi, piyoda, nima boʻlsa, toʻsilgan eshik
from: 84aa8920
---

{{ui:Binodagi odamlar}} boʻlimi chap panelda ochiq IFC modelning xonalari, eshiklari va zinalari boʻylab odamlarni yuritadi. Modeldagi hech narsa oʻzgarmaydi va hech narsa yuklanmaydi.

:::warning
Bu **loyihalash yordamchisi, yongʻin xavfsizligi sertifikati emas**. U yongʻin, tutun, vahima, harakatlanish qiyinchiliklari yoki kod sizdan nimani talab qilishini bilmaydi. Chegaralar sizniki: chiqishgacha eng uzun yoʻl va mavjud vaqt sizning kiritgan raqamlaringiz, hech biri taxmin qilinmaydi.
:::

## Ishga tushirish

1. Yopiq xonalari va eshiklari bor modelni oching. Faqat bir tomonida xonasi bor eshik chiqish hisoblanadi; ikki xona orasidagi eshik ularni bogʻlaydi; zina uchlaridagi xonalarni bogʻlaydi.
2. **Evakuatsiya** (hamma chiqishga yuradi), **Kelish** (hamma kirib xonaga boradi) yoki **Almashinuv** (xonalardagi odamlar chiqadi, shuncha odam kiradi) ni va har bir odamga toʻgʻri keladigan pol maydonini tanlang. Koridor, zina, vestibyul yoki hojatxona deb nomlangan xonalarda hech kim turmaydi.
3. {{ui:Run}} ni bosing. Oxirgi odam chiqqan vaqtni (va yarmi hamda oʻnda toʻqqiztasi qachon chiqqanini) olasiz, har bir eshik va zinadagi navbatni, eng uzun yoʻlli xonani va yurishni ijro etadigan rejani.

## Agar-chi savollari

{{ui:Shut}} ni jadvaldagi eshikda belgilang va yana ishga tushiring: odamlar boshqa yoʻl topadi yoki chiqish yoʻli yoʻq xonalar xato sifatida roʻyxatlanadi. Ikki barobar keng eshik xonani ancha tez boʻshatadi; jadvalda navbatlar qayerda ekani koʻrinadi.

## Qanday ishlaydi

Har bir xona — panjara, shuning uchun odamlar burchaklar atrofidan yuradi, devor ichidan emas. Xona toʻlgan sari tezlik pasayadi (S = 1.4 (1 − 0.266 D) m/s, bu yerda D — har bir m² dagi odamlar soni). Eshik kengligining har bir metridan soniyasiga 1.3 kishi oʻtkazadi, har ikki tomondan 150 mm ayirilgan holda; zina 1.0 va sekinroq yurish. Odamlar birinchi kelgan birinchi boʻlib chiqadigan navbatda turadi. Ishga tushirish raqami bir xil ishga tushirishni aynan takrorlaydi.

Yordamchi ham shuni bajara oladi: evakuatsiyani yoki har bir xonadan chiqishgacha eng uzun yoʻlni soʻrang.

## Har bir xonadagi odamlar

Har qanday xona uchun odamlar sonini kiritish uchun {{ui:Har bir xonadagi odamlar}} ni oching. Boʻsh katak pol maydoni raqamini ishlatadi (kulrang rangda koʻrsatiladi); 0 xonani boʻshatadi. Sizning raqamlaringiz ishga tushirishda ishlatiladi va shu brauzerda saqlanadi.

## Eshiklardagi qarama-qarshi oqim

**Almashinuv** rejimida chiqayotgan va kirayotgan odamlar bir xil eshiklarda uchrashadi. Eshik oxirgi odam orqasida yaqindan teskari yoʻnalishda oʻtgan odamni oʻtkazganda, u oʻz tezligining bir qismini saqlaydi (bu yerda 0.8; taxmin, chunki nashr etilgan qiymatlar turlicha), va jadval yoʻnalish oʻzgarishlarini sanaydi. Tez-tez yoʻnalish oʻzgartiradigan eshik Muammolar da eslatma sifatida roʻyxatlanadi.

## Zinalar va maydonchalar

Zinaning har bir maydonchasi yuruvchiga burilish uchun bir soniya sarflaydi (taxmin). Toʻgʻri zinada yoʻq; L yoki U shaklidagi zinada bitta bor. Zinaning oʻtkazish qobiliyati hali ham uning pogʻonalari kengligidan olinadi.

## 3D koʻrinishda

{{ui:Show the people in the 3D view}} ni belgilang — yuruvchilar modelda figura sifatida paydo boʻladi, nima qilayotganiga qarab rangli, va ishga tushirishni ijro etganda harakat qiladi. Modelga hech narsa qoʻshilmaydi.
