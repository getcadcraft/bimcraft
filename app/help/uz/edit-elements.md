---
title: Qurilish elementlarini oʻchirish, kesish, nusxalash va qoʻyish
summary: IFC modelidagi devor, eshik, mebel yoki boshqa istalgan elementni tanlang; ularni oʻchiring, kesing yoki nusxalab, bosgan joyingizga, joyida yoki boshqa qavatga qoʻying.
keywords: oʻchirish, olib tashlash, oʻchirib tashlash, kesish, nusxalash, qoʻyish, dublikat, koʻchirish, hammasini tanlash, qurilish elementi, devor, eshik, deraza, zina, teshik, ortga qaytarish
from: d9eec37f
---

## Nima qilasiz

IFC modelidagi narsalarni oʻzgartiring: keraksiz elementlarni olib tashlang, devorni yoki mebellar toʻplamini boshqa joyga nusxalang yoki elementlarni kesib qoʻyish orqali koʻchiring. Har bir oʻzgarish bitta bekor qilinadigan qadam, saqlash esa yangi fayl yozadi, shuning uchun asl faylingiz oʻzgarishsiz qoladi.

## Qadamlar

1. IFC modelini oching. Qarang: [IFC modelni oching va 3D da koʻrib chiqing](topic:open-ifc-model).
2. Oʻzgartirmoqchi boʻlgan narsani tanlang: elementni bosing, yana tanlash uchun {{key:Mod}} yoki {{key:Shift}} ni ushlab turib bosing, yoki koʻrinib turgan barcha elementlarni tanlash uchun {{key:Mod+A}} ni bosing ({{ui:Qoʻshimcha}}, {{ui:Hammasini tanlash}}).
3. Soʻng:
   - **Oʻchirish:** {{key:Delete}} tugmasini bosing yoki {{ui:Qoʻshimcha}}, {{ui:Oʻchirish}}.
   - **Nusxalash:** {{key:Mod+C}} ni bosing yoki {{ui:Nusxalash}} ni bosing.
   - **Kesish:** {{key:Mod+X}} ni bosing yoki {{ui:Qoʻshimcha}}, {{ui:Kesish}}. Elementlar joyidan ketadi va ularni qoʻyish mumkin boʻladi.
4. Qoʻyish uchun {{key:Mod+V}} ni bosing yoki {{ui:Qoʻyish}} ni bosing. Nusxalangan narsa oʻlchamidagi shaffof quti joylashtirish panelida tanlangan qavatda koʻrsatkich ortidan harakatlanadi. Uni 90° ga burish uchun {{key:R}} ni bosing, soʻng qayerga borishini bosing. Har bir bosish yana bitta nusxa qoʻyadi; toʻxtatish uchun {{key:Esc}} ni bosing.
5. Yoki {{key:Mod+Shift+V}} ni bosing ({{ui:Qoʻshimcha}}, {{ui:Joyida qoʻyish}}): kesishdan keyin elementlar aynan oʻz joyiga qaytadi; nusxalashdan keyin nusxa asl elementlarning yonida boʻladi.
6. Tahrirlangan modelni yuklab olish uchun {{ui:IFC sifatida saqlash}} ni bosing.

## Element bilan birga nima oʻtadi

- **Qismlar:** zina oʻz marshlarini, parda devori oʻz panellarini, qismlardan tashkil topgan har qanday element esa barcha qismlarini oladi.
- **Teshiklar:** devor unga kesilgan teshiklarni oladi. Eshik yoki derazani oʻchirish ham uni toʻldirib turgan teshikni oladi, shuning uchun devor loyihalash dasturidagidek yopiladi. BimCraft da chizilgan devorni oʻchirish uning eshik va derazalarini ham oʻchiradi hamda qolgan devorlarni qayta bogʻlaydi. Boshqa joyda yaratilgan fayldagi devorni oʻchirish, uning eshik va derazalarini oʻz joyida qoldiradi.
- **Maʼlumotlar:** nusxada asl elementdagi tur, materiallar, xususiyatlar toʻplamlari va miqdorlar boʻladi, hamda yangi GlobalId boʻladi. Keyinchalik nusxadagi qiymatni oʻzgartirsangiz, asl element oʻzgarmaydi.
- **Kutubxona elementlari** oʻz kutubxona maʼlumotlarini saqlaydi; nusxa keyingi boʻsh element raqamini oladi, qaytarib qoʻyilgan kesilgan element esa oʻz raqamini saqlaydi.

## Nimani koʻrasiz

- {{ui:Oʻzgarishlar}} roʻyxatida "Oʻchirildi: …" yoki "Qoʻyildi: …". {{key:Mod+Z}} oxirgi oʻzgarishni bekor qiladi; {{key:Mod+Y}} uni qaytadan tiklaydi.
- Oʻchirgandan keyin holat satrida nechta qism va teshik birga oʻchirilgani koʻrsatiladi.
- Qoʻyilgan elementlar tanlangan boʻladi, shuning uchun qator yaratish uchun ularni yana joyida qoʻyishingiz yoki oʻchirishingiz mumkin.

## Bilib oling

- Nusxalar asl elementning geometriyasidan foydalanadi (IFC elementlarga uni birgalikda ishlatishga imkon beradi), shuning uchun fayl juda kam kattalashadi.
- Qurilish elementlari ular nusxalangan modelga, xuddi shu varaqda qoʻyiladi. Joylashtirilgan kutubxona elementlarini boshqa modelda ishlatish uchun bir vaqtda bittadan nusxalang: qarang [Kutubxona elementlarini nusxalash, qoʻyish va dublikat qilish](topic:copy-paste).
- Qavatlar, boʻshliqlar, binolar va maydonni oʻchirib yoki nusxalab boʻlmaydi. Oʻrniga ularning ichidagi elementlarni tanlang. BimCraft da chizilgan xona unga oʻrab turgan devorlardan hosil boʻladi: ikki xonani birlashtirish uchun devorni oʻchiring.
- BimCraft ning oʻz devor, eshik va deraza asboblari bilan chizilgan devorlar, eshiklar va derazalarni hozircha nusxalab, kesib yoki dublikat qilib boʻlmaydi; holat satri buni aytadi. Ularni qayta chizing. Oʻchirish ishlaydi.
- Nusxalash, shuningdek, nusxalangan narsaning nomlari va xususiyatlarini matn sifatida buferga joylaydi, uni jadval yoki elektron xatga qoʻyish uchun.

## Keng tarqalgan xatolar

- **{{ui:Oʻchirish}} xira.** Hech narsa tanlanmagan yoki faqat qavatlar yoki boʻshliqlar tanlangan. Sababini bilish uchun ustiga koʻrsatkichni olib boring.
- **Qoʻyishda elementlar boshqa modeldan kelgani aytiladi.** Nusxalaganingizdan keyin boshqa modelni ochgansiz. Birinchi modelni qayta oching va elementlarni shu yerda nusxalang.
- **Qoʻyilgan nusxa boshqa qavatda.** Joylashtirish panelidagi {{ui:Qavat}} qayerga borishini hal qiladi; bosishdan oldin qavatni tanlang.

## Shuningdek

- [Elementlarni yashirish, ajratish va orqasidan koʻrish](topic:hide-and-isolate)
- [Tugmalar va sichqoncha](topic:keyboard#edit)
