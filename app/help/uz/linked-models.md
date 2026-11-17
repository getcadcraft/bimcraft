---
title: Muvofiqlashtirish uchun boshqa modellarni bogʻlash
summary: Boshqa IFC modelini oʻzingiznikining yonida koʻrsating (hech qachon birlashtirilmaydi), uni umumiy koordinatalar, xarita koordinatalari yoki ikki nuqta boʻyicha joylashtiring, chizish vaqtida unga tutiling va fayli oʻzgarganda uni qayta yuklang.
keywords: bogʻlash, bogʻlangan model, havola, xref, muvofiqlashtirish, federatsiya, konstruksiya, MEP, maslahatchi, umumiy koordinatalar, geodezik oʻlchash, xarita koordinatalari, qayta yuklash, yuklanmagan qilish, hujjat havolasi, IfcDocumentReference
from: 3e0f1eab
---

## Nima qilasiz

Maslahatchining modeli (konstruksiya, kommunikatsiyalar, mavjud bino) bilan hech narsani oʻz faylingizga nusxalamasdan chizing.

**Bogʻlangan model** 3D koʻrinishda koʻrsatiladi va rejalarda kesiladi, lekin hech qachon oʻzgartirilmaydi va modelingizga hech qachon saqlanmaydi. Modelingizda faqat bogʻlanish saqlanadi: faylning nomi va u qayerga joylashishi.

## Modelni bogʻlash

1. Chap panelning {{ui:Bogʻlangan modellar}} boʻlimida {{ui:Modelni bogʻlash…}} ni bosing va IFC faylni tanlang. U darhol koʻrinadi, uning qatori esa **Koʻrsatilgan** deb yozadi.
2. {{ui:Joylashuvi}} ichida u qayerga joylashishini tanlang:
   - **Umumiy koordinatalar** (boshlash uchun): uning koordinatalari sizniki, xuddi ikkala model bir boshlangʻich nuqtadan belgilangandek.
   - **Xarita koordinatalari**: ikkala faylning xarita koordinatalari ularni tekislaydi (ikkalasida ham xarita konversiyasi boʻlishi kerak; birortasida boʻlmasa, BimCraft buni aytadi).
   - **Ikki nuqta boʻyicha…**: bogʻlangan modelda nuqtani, soʻngra uning sizning modelingizdagi joyini bosing; keyin yana bir juft. Bogʻlanish moslash uchun koʻchiriladi va (vertikal oʻq atrofida) buriladi.
3. Har bir bogʻlanish va joylashuv oʻzgarishi bitta qadam: {{key:Mod+Z}} uni qaytaradi.

## U bilan ishlash

- Rejalarda bogʻlangan model sath kesish balandligida ingichka chiziqlar bilan koʻrsatiladi, {{ui:Devor}} asbobi va boshqa chizish asboblari esa uning burchaklari va qirralariga tutiladi.
- Xususiyatlarini oʻqish uchun 3D koʻrinishda uning elementlarini tanlang; bogʻlangan model hech qachon tahrirlanadigan model emas, shuning uchun {{ui:Modellar}} dagi radio tugmasi oʻchiq.
- **Fayl oʻzgardimi?** Brauzer faylni kuzata olganda (brauzerning fayl tanlagichi orqali ochilgan fayl yoki Studio da), BimCraft fayl qayta saqlangandan bir necha soniya oʻtib bogʻlanishni oʻzi qayta yuklaydi va buni aytadi. Aks holda {{ui:Qayta yuklash}} ni bosing.
- {{ui:Yuklanmagan qilish}} uni yashiradi va xotirani boʻshatadi; bogʻlanish modelingizda qoladi. {{ui:Yuklash…}} uni yana koʻrsatadi (faylni siz tanlaysiz: brauzer faylni oʻz nomi boʻyicha oʻzi ocha olmaydi).
- × bogʻlanishni modelingizdan olib tashlaydi.

## Nimani koʻrishingiz kerak

- IFC faylingizda: har bir bogʻlanish uchun IfcDocumentReference (faylning nomi), loyihaga bogʻlangan va uning qayerga joylashgani loyihaning CadCraft_Links xususiyatlar toʻplamida. Modelingizni yana ochganingizda uning bogʻlanishlari yuklanmaguncha **Yuklanmagan** deb roʻyxatlanadi.

:::note
Toʻqnashuvlarni tekshirish, Taqqoslash va Qidirish yuklangan bogʻlanishni boshqa ochiq model kabi ishlatishi mumkin: qarang [Bir nechta IFC modelni birga koʻrish](topic:several-models).
:::
