---
title: Qavatlar, boʻshliqlar va qirralarni koʻrsatish va yashirish
summary: Bino ichini koʻrish uchun qavatlarni oʻchiring, xonalar va boʻshliqlarni koʻrsating, qirra chiziqlarini esa yoqing yoki oʻchiring.
keywords: qavatlar, sathlar, poʻllar, yashirish, ajratish, xonalar, boʻshliqlar, ifcspace, qirralar, koʻrinish, kesim
from: b838dcc0
---

## Nima qilasiz

IFC modelining ichini koʻrish uchun siz qiziqqan qavatdan yuqoridagi qavatlarni oʻchirasiz, soʻngra xonalar va boʻshliqlarni koʻrsatasiz va toza koʻrinish uchun qirra chiziqlarini oʻchirasiz.

## Bitta qavatni koʻrish

1. IFC modelni oching. Qarang: [IFC modelni ochish va 3D da koʻrib chiqish](topic:open-ifc-model).
2. Chapdagi {{ui:Qavatlar}} roʻyxatini toping. Eng yuqori qavat birinchi boʻladi, xuddi kesimni tomdan pastga qarab oʻqigandek.
3. Tomning va siz koʻrmoqchi boʻlgan qavatdan yuqoridagi har bir qavatning belgisini olib tashlang.
4. Shu qavatga tepadan qarash uchun {{ui:Yuqori}} ni bosing.
5. Qavatlarni qaytarish uchun ularning belgisini yana qoʻying.

## Nimani koʻrasiz

Belgisi olib tashlangan har bir qavat, undagi hamma narsa bilan birga, darhol yoʻqoladi. Roʻyxatda faqat biror koʻrinadigan narsaga ega boʻlgan qavatlar chiqadi. Hech bir qavatga biriktirilmagan elementlar pastda **Qavatda emas** deb guruhlanadi; sayt elementlari va baʼzi mebellar koʻpincha shu yerga tushadi.

## Xonalar va boʻshliqlarni koʻrsatish

1. Model ustidagi asboblar panelida {{ui:Boʻshliqlar}} ni bosing. Tugma bosilgan holatda qoladi.
2. Modelga qarang: xonalar va boʻshliqlar oʻchiq rangli, shaffof hajmlar sifatida koʻrinadi.
3. Xususiyatlarini oʻqish uchun boʻshliqni bosing: oʻngda uning nomi, raqami va maydoni koʻrinadi.
4. Yashirish uchun {{ui:Boʻshliqlar}} ni yana bosing.

Boʻshliqlar model ochilganda yashirin boʻladi, chunki aks holda ular devor va polni yopib qoʻyardi.

## Qirralar

1. Ingichka qirra chiziqlarini oʻchirish uchun {{ui:Qirralar}} ni bosing.
2. Ularni qaytarish uchun yana bosing.

Juda katta modellarda (1.5 million uchburchakdan ortiq) tugma oʻchirilgan holda boʻladi va "Edges are off for very large models" degan maslahat koʻrsatiladi. Bu xotirani tejaydi.

## Keng tarqalgan xatolar

- **Qavatning belgisini olib tashlab, uning baʼzi qismlarini hali ham koʻrish.** Element eksport qiluvchi dastur tomonidan biriktirilgan qavatga tegishli. Baland devor yoki zina koʻpincha faqat asosiy qavatga tegishli boʻladi: yuqori qavat yashirilganda u qoladi, pastki qavat bilan esa yoʻqoladi.
- **Ichini koʻrish uchun qavatlarni yashirish.** Kesim qutisi koʻpincha tezroq boʻladi: qarang [IFC modelni kesim tekisligi bilan kesish](topic:section-plane#a-section-box). Shuningdek {{ui:Model daraxti}} dagi qatorlarning belgisini olib tashlashingiz mumkin (qarang [Model daraxtida yoʻlni topish](topic:model-tree)).
- **Boʻshliqni devor orqali bosish.** Bosish eng yaqin koʻrinadigan yuzani tanlaydi. Yuqori qavatni yashiring yoki {{ui:Yuqori}} ga oʻting, soʻngra bosing.
- **Qavat nomlari gʻalati koʻrinadi.** BimCraft fayldagi saqlangan qavat nomlarini koʻrsatadi. Agar ular "Level 1" yoki raqam boʻlsa, bu eksportchi yozgan narsa.
