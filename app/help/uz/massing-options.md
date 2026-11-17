---
title: Massa variantlari yonma-yon saqlanadi
summary: Bir modelda bir nechta massa variantini saqlang, bittasini joriy variant qiling, uni hudud qurilish chiziqlari va servitutlar bilan tekshiring, ModelCraft dan massa oling va tanlangan variantni devor va polga ishlab chiqing.
keywords: massa, variant, variantlar, variantlar toʻplami, sxema, konsepsiya, konsepsiya loyihasi, 2-bosqich, muqobillar, variantlarni solishtirish, joriy variant, bino massasi, itarish tortish, modelcraft, civilcraft, yalpi qavat maydoni, iz, hajm, massani ishlab chiqish, servitut, qurilish chizigʻi, orqaga surish
from: 69a01459
---

## Nima qilasiz

Konsepsiyaning massa variantlarini alohida fayllar oʻrniga bitta modelda saqlang: bir nechta bino massasi yonma-yon, ulardan biri **joriy variant**, qolganlari solishtirish uchun saqlanadi.

Massa varianti bino massasidir: qavatlar soni bilan balandlikka koʻtarilgan kontur. U hali devor emas. Istalgancha saqlashingiz mumkin, ular **variantlar toʻplami** boʻyicha guruhlanadi (bir toʻplamning variantlari bir-biriga muqobil).

## Variantni saqlash

1. {{ui:Xona dasturidan massivgacha}} ni oching, xona dasturi va konturni kiriting, soʻngra {{ui:Variantlarni topish}} ni tanlang.
2. Roʻyxatdagi variantlardan birini tanlang.
3. {{ui:Modeldagi massa variantlari}} ostida, xohlasangiz {{ui:Variantlar toʻplami}} uchun nom kiriting va {{ui:Tanlangan variantni saqlash}} ni tanlang.

Variant modelda bino massasi sifatida va roʻyxatda paydo boʻladi, uning qavatlari, izi, yalpi qavat maydoni va hajmi bilan. Hech narsa qurilmaydi. Boshqasini ham shu tarzda saqlang.

Birinchi variant toʻplamning joriy varianti boʻladi. Har bir qadam bitta bekor qilish qadamidir.

## Joriy variant

Har bir toʻplamdan bittasi joriy boʻladi. Bu ikki narsani anglatadi:

- **Uning qavatlari binoning qavat maydonlari hisoblanadi.** Joriy variantda har bir qavat uchun oʻsha qavatning yalpi maydonini olib yuruvchi bitta fazo bor, shuning uchun qavat maydonlarini oʻqiydigan narsa faqat kuchdagi variantni koʻradi.
- **U hudud boʻyicha tekshiriladi.** Agar u hudud chegarasidan tashqarida, qurilish chizigʻi ustida yoki servitutda tursa, uning nomi bilan ogohlantirish {{ui:Muammolar}} da paydo boʻladi. Bu faqat ogohlantirish: hech narsa rad etilmaydi. Joriy boʻlmagan variantlar tekshirilmaydi.

Boshqa variantda {{ui:Joriy qilish}} ni bosing, uni oʻzgartirish uchun.

{{ui:Joriy boʻlmagan variantlarni yashirish}} boshqalarini 3D koʻrinishda yashiradi. Bu faqat shu brauzer uchun va faylga saqlanmaydi.

## ModelCraft dan massa

ModelCraft da {{ui:Eksport}} › {{ui:Massani BimCraft ga…}} har bir guruh yoki komponentni bitta variant sifatida yuboradi. BimCraft faylni variantlar roʻyxati bilan ochadi.

Ularni allaqachon ochiq modelga olib kirish uchun {{ui:Variantlarni fayldan qoʻshish}} ni tanlang va `.ifc` faylni tanlang. Uning massalari bir toʻplamning variantlari sifatida, bitta bekor qilish qadamida, modellashtirilgan joyida turgan holda kiradi. CivilCraft dan bino massalari fayli xuddi shunday ishlaydi.

"(shakli soddalashtirilgan)" belgisi bilan koʻrsatilgan variant ModelCraft da oddiy tik blok emas edi (u orqaga suriladi, qiyalanadi yoki yopiq emas). Bu yerdagi massasi — uning asosi konturi balandligiga koʻtarilgani; uning qavat maydonlari va hajmi esa qattiq jismning oʻzidan oʻlchangan.

## Tanlangan variantni ishlab chiqish

Variantda {{ui:Ishlab chiqish}} ni tanlang. U darajalarga (qavatlar soniga qadar qoʻshiladi), har bir qavatda konturi boʻylab devorlarga va har birida pol plitasiga aylanadi, bitta bekor qilish qadamida. Variant roʻyxatdan chiqadi; boshqa variantlar oʻz holicha qoladi. Hozircha tom yoʻq.

{{ui:Nomini oʻzgartirish}} variant nomini oʻzgartiradi, {{ui:Olib tashlash}} esa uni modeldan chiqaradi. Joriy variantni olib tashlash toʻplamning birinchi boshqa variantini joriy qiladi.

## Nimani koʻrishingiz kerak

- Har bir saqlangan variant 3D koʻrinishda blok va roʻyxatda qator sifatida.
- Har bir toʻplamdan bitta variant yonida "(joriy)".
- Joriy variant hudud chegarasi, qurilish chizigʻi yoki servitutni kesib oʻtganda {{ui:Muammolar}} da ogohlantirish.

## Yaxshi bilish kerak boʻlgan narsalar

- IFC faylda variant `CadCraft_SiteMass` xususiyatlar toʻplamiga ega bino elementi proksisi (uning variantlar toʻplami, variant nomi va joriy ekanligi shu toʻplamda). Joriy variantning qavatlari `MassingFloor` turidagi fazolar. Boshqa dasturlar proksini umumiy element sifatida oʻqiydi.
- Variantni saqlash hech qachon darajalar qoʻshmaydi; uni ishlab chiqish qoʻshadi.
- Yordamchi saqlangan variantlarni roʻyxatlashi, bittasini saqlashi, joriy qilishi, nomini oʻzgartirishi, ishlab chiqishi yoki olib tashlashi mumkin.
