---
title: Bitta modelga ikki kishi kiritgan oʻzgarishlarni birlashtirish
summary: git, Fossil yoki Mercurial tahrirlangan ikki IFC model nusxasini obyektma-obyekt birlashtirsin, shunda ikki kishi bitta binoda ishlashi va ishni birlashtirishi mumkin.
keywords: birlashtirish, git, fossil, mercurial, versiyalarni boshqarish, ziddiyat, uch tomonlama, cadcraft merge, gitattributes, ifc, globalid, jamoa, ikki nusxa, tarmoqlar
from: 50733df8
---

Ikki kishi bir binoning nusxasini oladi: biri sharqiy qanotni, biri gʻarbiyni chizadi, keyinroq nusxalar bitta boʻlishi kerak. Agar ular turli obyektlarga tegishgan boʻlsa, buni inson emas, dastur bajarishi mumkin.

## Bu qanday ishlaydi

IFC faylidagi har bir devor, eshik, sath, xona va xususiyatlar toʻplamining oʻzgarmaydigan GlobalId raqami bor. Birlashtirish obyektlarni fayl beradigan raqam (`#123`) boʻyicha emas, shu id boʻyicha qidiradi, chunki dastur saqlaganda raqamlar oʻzgaradi. Obyektga biriktirilgan, lekin oʻz idisi boʻlmagan qismlar (joylashuv, shakl, birliklar) mazmuni boʻyicha solishtiriladi.

Ikkala nusxa bir xil IFC versiyasida boʻlishi kerak (2x3, 4 yoki 4.3). Birlashtirish faylingizni oʻz holicha saqlaydi, uning tartibi va raqamlari bilan, va yangisini qoʻshadi, shuning uchun birlashtirishning git diff natijasi faqat birlashtirish oʻzgartirgan narsani koʻrsatadi.

## Sozlash

Git uchun har bir omborda bir marta ikki qator kerak:

```
# .gitattributes
*.ifc merge=cadcraft

# har bir kompyuterda bir marta
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Gitsiz `cadcraft merge <base> <ours> <theirs>` ni ishga tushiring. Fossil va Mercurial xuddi shu uchta faylni oʻz birlashtirish asboblari sozlamasida oladi. Hech narsa yuklanmaydi; hammasi kompyuteringizda ishlaydi.

## Qoidalar

- Atribut faqat bir tomonda oʻzgartirilgan boʻlsa, u olinadi. Ikki tomonda bir xil oʻzgarish bir marta olinadi.
- Bir atribut ikki xil usulda oʻzgartirilgan boʻlsa (bir xil sath ikki xil nom bilan qayta nomlangan), bu **ziddiyat**: sizning tomoningiz qoladi va hisobotda ikkalasi roʻyxatlanadi. Natijani oching va qoʻlda tuzating.
- Narsalar roʻyxati (sathdagi devorlar, xususiyatlar toʻplamidagi xususiyatlar) toʻplam sifatida birlashadi: ikki tomondan qoʻshilgan narsalar saqlanadi, ikki tomondan olib tashlanganlar oʻchiriladi. Bir sathga devor qoʻshgan ikki kishi ziddiyatga kirmaydi.
- Bir tomonda qoʻshilgan obyekt shakli va xususiyatlari bilan saqlanadi. Bir tomonda olib tashlangan va ikkinchisida tegilmagan boʻlsa: olib tashlanadi. Bir tomonda olib tashlangan va ikkinchisida oʻzgartirilgan boʻlsa: olib tashlanadi va hisobotda aytiladi.
- Faylning vaqt belgisi va muallifi, hamda har bir obyektning egalik tarixi sizniki boʻlib qoladi.

Geometriya butun holda birlashtiriladi: devorning shakli bir tomondan olinadi, nuqtama-nuqta aralashmaydi. Zip qilingan IFC va IFCX fayllari birlashtirilmaydi. Birlashtirishdan keyin natijani BimCraft ilovasida oching va saqlashdan oldin Muammolar panelini koʻring.
