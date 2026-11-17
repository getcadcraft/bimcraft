---
title: "Pardali tizimlar: toʻr boʻyicha oynali devorlar, oraliq profillar bilan"
summary: Pardali tizimni devor kabi chizing yoki yuzaga qoʻying, soʻng uning toʻr chiziqlarini va oraliq profillarini belgilang. U IfcCurtainWall sifatida, panellari va oraliq profillari bilan saqlanadi.
keywords: pardali tizim, pardali devor, pardali toʻr, oraliq profil, oynalash, vitrina, shisha devor, panel, shisha, yuz boʻyicha, yuz, massa, toʻr chizigʻi, qadam, profil, fanlik, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Nima qilasiz

Oraliq profillar orasida shisha panellardan iborat oynali devor yasang, uning toʻr chiziqlari joyini oʻzgartiring va qaysi chiziqlarda oraliq profil boʻlishini tanlang.

## Qadamlar

1. {{ui:Chizish}} ni yoqing va **Qurilish** menyusini oching (lenta tartibida: Arxitektura yorligʻi).
2. **Pardali tizim** ni tanlang. Uning qatorida yuqori chegarani (yuqoridagi qavat yoki balandlik), yuqoriga qarab har necha masofada chiziq (boʻsh qoldirilsa, chiziq yoʻq), oraliq profil boʻladimi-yoʻqmi va oraliq profil shaklini belgilang.
3. Devor chizganingizdek, boshlanish va tugash nuqtalarini bosing. {{key:Shift}} uni toʻgʻri burchakli qiladi.
4. Toʻrni oʻzgartirish uchun **Pardali toʻr** ni tanlang va tizimni bosing:
   - **Chiziq qoʻshish**: kursor bosilgan joyga tik chiziq qoʻyiladi. Gorizontal chiziq uchun avval **Balandlikda** maydoniga uning balandligini kiriting.
   - **Chiziqni koʻchirish**: chiziqni bosing, soʻng u qayerga borishini bosing.
   - **Chiziqni olib tashlash**: chiziqni bosing.
   - **Qadam boʻyicha belgilash**: **Har** maydoniga qadamni kiriting, soʻng tizimni bosing.
5. Oraliq profillarni oʻzgartirish uchun **Oraliq profil** ni tanlang, u nimaga taalluqli ekanini belgilang (bosgan tik chiziq, balandlikdagi gorizontal chiziq, chegara yoki barcha chiziqlar), **Oraliq profillarni joylash** yoki **Oraliq profillarni olib tashlash** va profilni tanlang, soʻng tizimni bosing.
6. Tizimni tanlang: **Xususiyatlar** da uning hammasini koʻrasiz: har bir toʻr chizigʻi oʻrni, oraliq profil belgisi va uni olib tashlash tugmasi, qadam, chegara, profil va shisha qalinligi.

## Yuz boʻyicha

**Yuz boʻyicha** 3D koʻrinishda bosgan tekis yuzda pardali tizim yasaydi. Uning qatorida xuddi shu toʻr va oraliq profil sozlamalari bor.

- U 3D koʻrinishda koʻrsatiladigan har qanday elementning istalgan tekis yuzida ishlaydi: massa, devor, pol, tom tekisligi, ustun yoki joylashtirilgan element. Yuz tik, qiya yoki gorizontal boʻlishi mumkin.
- Tizim yuzning konturini oladi. Fronton (uchburchak) yoki boshqa gʻalati shakl shisha va oraliq profillarni shu kontur boʻyicha kesadi.
- U **devor** ham yasashi mumkin: tik yuzning pastki qismi boʻylab va yuz balandligicha. Bu yerdagi devor doim tik turadi, shuning uchun qiya yoki gorizontal yuz unda ishlamaydi.
- Tom yasamaydi. BimCraftdagi tom qavat konturidan va qiyaligidan hisoblanadi, bitta yuzdan emas.
- Egri yuz koʻp kichik tekis yuzlardan iborat: bir bosish ulardan bittasini oladi.
- Ichida teshiklari bor yuz: tizim yuzning tashqi konturini qoplaydi.

## Qanday oʻlchanadi

- **Yalpi maydon** tizimning konturi.
- **Shisha maydoni** panellar yasalganicha: toʻr oraliq profili boʻlgan tomonda har bir panel yarim oraliq profil kengligini, chegara oraliq profilida esa toʻliq kengligini yoʻqotadi.
- Tik oraliq profil chegaradan chegaragacha oʻtadi. Gorizontal oraliq profil har bir tik oraliq profilda va chegarada toʻxtaydi. Chegara oraliq profillari kontur ichida joylashadi; ikkitasi uchrashgan joyda tikroq boʻlgan oʻtadi. Birikmalar qiya emas, toʻgʻri kesiladi.
- **Jadvallar** da, model shunday tizimga ega boʻlgach, shu raqamlar bilan **Pardali tizimlar** roʻyxati bor.

## IFC faylida

Qavatida IfcCurtainWall, unda har bir panel uchun bitta IfcPlate (pardali panel) va har bir oraliq profil boʻlagi uchun bitta IfcMember (oraliq profil), har birining oʻz shakli, materiali va asosiy miqdorlari bor.

## Bilish foydali

- Har qanday oʻlcham soʻralganidek yasaladi. Faqat maydoni boʻlmagan kontur rad etiladi, chunki yasash uchun hech narsa yoʻq.
- Devor kabi chizilgan tizim chizilgan balandligini saqlaydi. Keyinroq qavatni koʻchirsangiz, uning balandligini Xususiyatlarda qayta belgilang.
- Koʻchirish vositasi pardali tizimni hali koʻchirmaydi. Uni oʻchirib qayta chizing yoki toʻrini joyida oʻzgartiring.
- {{ui:Ortga qaytarish}} har bir qadamni qaytaradi: butun tizimni, bir toʻr oʻzgarishini yoki bir oraliq profil oʻzgarishini.
