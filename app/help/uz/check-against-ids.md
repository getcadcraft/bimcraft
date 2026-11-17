---
title: "Modelni mijozning IDS talabi boʻyicha tekshirish"
summary: "Sizga berilgan .ids faylini yuklang va IFC ni topshirishdan oldin unga javob bermaydigan har bir elementni Muammolarda koʻring."
keywords: ids, axborot yetkazish spetsifikatsiyasi, buildingsmart, talablar, topshirish, tekshirish, validatsiya, sifat nazorati, eir, bep, xususiyat, tasnif, material, xarid
from: 7b960222
---

## Nima qilasiz

IDS (Information Delivery Specification, buildingSMART standarti) — IFC tarkibida boʻlishi kerak boʻlgan narsalar roʻyxati: qaysi sinflar, qaysi xususiyatlar va qanday qiymatlar, tasniflar, materiallar, narsalar qayerda boʻlishi kerak. Mijozlar va davlat xaridlari ish bilan birga shunday roʻyxat yuboradi. BimCraft ochiq IFC modelni shu roʻyxat bilan solishtiradi va talabga javob bermaydigan har bir elementni koʻrsatadi.

## Qadamlar

1. IFC modelni oching.
2. Chap panelda {{ui:Model tekshiruvi}} ostidagi {{ui:IDS boʻyicha tekshirish}} ni oching yoki menyu uslubingizdagi {{ui:IDS boʻyicha tekshirish…}} ni tanlang.
3. {{ui:.ids faylini yuklash…}} tugmasini bosing va faylni tanlang. Hech narsa yuklanmaydi.
4. Natijani oʻqing: har bir spetsifikatsiya bilan {{ui:Oʻtdi}} yoki {{ui:Oʻtmadi}} va u nechta elementga tegishli ekani.
5. {{ui:Muammolar}} ({{key:Ctrl+Shift+M}}) ni oching va xatolikni bosing: element tanlanadi va unga yaqinlashtiriladi.

## Nimani koʻrasiz

- Har bir element va talab uchun bitta ogohlantirish: spetsifikatsiya nomi, IDS nimani talab qilgani va elementda nima borligi bilan.
- Modelda mos keladigan hech narsa boʻlmagan majburiy spetsifikatsiya alohida bitta ogohlantirish boʻladi.
- Muammolardagi tekshiruv hisoboti IDS bilan boshlanadi: uning sarlavhasi, versiyasi, muallifi va har bir spetsifikatsiya boʻyicha tegishli, oʻtgan va oʻtmagan elementlar soni.

## Bilib qoʻying

- IFC faqat IDS haqidagi havolani saqlaydi (nomi, sarlavhasi, versiyasi va xesh), IDS ning oʻzini emas: mijozning IDS i maxfiy boʻlishi mumkin, IFC esa boshqa odamlarga yuboriladi. IDS model yonida shu brauzerda qoladi, shuning uchun saqlangan IFC ni bu yerda qayta ochsangiz, u yana tekshiriladi. IDS ni yuklash yoki unutish bitta qadam boʻlib, uni bekor qilish mumkin.
- Boshqa kompyuterda yoki boshqa brauzerda ochilganda, Muammolarda IDS topilmagani haqida eslatma chiqadi: qayta tekshirish uchun uni yana yuklang.
- IDS ni IFC bilan birga yuborish uchun, uni yuklashdan oldin Sozlamalarda BimCraft yorligʻidagi {{ui:IDS ni IFC ichida saqlash}} ni yoqing.
- Har bir tahrir, bekor qilish va qayta bajarish bir oz keyin qayta tekshiriladi.
- Qiymatlar IDS usulida solishtiriladi: matn aynan (katta-kichik harf hisobga olinadi), sonlar SI birliklarida kichik ogʻish bilan (uzunliklar metrda, shuning uchun millimetrdagi model avval aylantiriladi).
- Boshqa IFC versiyasi uchun yozilgan spetsifikatsiya (masalan, model IFC4 boʻlganda IFC2X3) baribir tekshiriladi; natijada buni aytiladi.
- Agar IDS fayli IDS auditi belgilaydigan nuqsonlarga ega boʻlsa, dialog ularni sanaydi; ular ichidagi spetsifikatsiyalar oʻtmaydi.
- Istalgan muammo kabi, oʻtmaslikni sabab bilan qabul qilishingiz mumkin. Element qiymatlari oʻzgarmasa, u qabul qilingan holatda qoladi.

- IDS dagi shablonlar butun qiymat sifatida oʻqiladi. Boshidagi `^` va oxiridagi `$` ham "butun qiymat" deb olinadi, koʻpchilik IDS fayllari ularni shunday nazarda tutadi.

## Keyingi

- [Modelda umumiy muammolarni tekshirish](topic:model-checks)
- [Devor yoki eshikni oʻzgartirish](topic:change-a-wall-or-door)
