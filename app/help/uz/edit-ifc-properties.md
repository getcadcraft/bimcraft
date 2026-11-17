---
title: IFC xossalarini oʻzgartirish va tahrirlangan nusxani saqlash
summary: Elementning nomini, tegini, tavsifini yoki xossa qiymatini oʻzgartiring, bekor qiling va asl fayl oʻz holicha qolganda yangi IFC faylni yuklab oling.
keywords: tahrirlash, oʻzgartirish, xossalar, parametrlar, teg, nom, qayta nomlash, belgi, sifatida saqlash, yuklab olish, bekor qilish, nusxa, ifc, yozish
from: f8035d62
---

## Nima qilasiz

IFC modelidagi maʼlumotlarni tuzating: elementni qayta nomlang, tegini tuzating, xossa qiymatini oʻzgartiring. Soʻng oʻzgarishlar bilan yangi IFC fayl saqlang. Siz ochgan fayl hech qachon tegilmaydi.

## Nimani oʻzgartirish mumkin

| Maydon | Tahrirlash mumkinmi |
|---|---|
| Nomi, Obyekt turi, Teg, Tavsif | Ha |
| Yagona xossa qiymatlari (matn, raqamlar, Ha/Yoʻq) | Ha |
| Tur xossalari ("(type)" deb belgilangan toʻplamlar) | Ha, va oʻzgarish shu turdagi har bir elementga qoʻllanadi |
| Turi, GlobalId, Qator raqami | Yoʻq |
| Miqdorlar (uzunliklar, maydonlar, hajmlar, sonlar) | Yoʻq |
| Roʻyxatlar, sanab oʻtishlar va boshqa koʻp qismli qiymatlar | Yoʻq |
| Geometriya, joylashuv, elementlar qoʻshish yoki oʻchirish | Yoʻq |

## Qadamlar

1. IFC modelini oching va oʻzgartirmoqchi boʻlgan elementni bosing.
2. {{ui:Properties}} panelida oʻzgartirmoqchi boʻlgan qiymatni bosing. U matn maydoniga aylanadi. Boʻsh qiymat *boʻsh* deb koʻrsatiladi.
3. Yangi qiymatni yozing.
4. Saqlash uchun {{key:Enter}} ni bosing yoki boshqa joyni bosing. Bekor qilish uchun {{key:Esc}} ni bosing.
5. Qiymatga qarang: u endi qalin boʻlib, yonida koʻk chiziq bilan turadi, bu tahrirlangan qiymatni bildiradi.
6. Chapdagi {{ui:Changes}} boʻlimiga qarang: oʻzgarish *element*: *maydon*, eski qiymatdan yangisiga shaklida roʻyxatlanadi.
7. Boshqa qiymatlar yoki boshqa elementlar uchun takrorlang.
8. {{ui:Save as IFC}} ni bosing (u kutayotgan oʻzgarishlar sonini koʻrsatadi, masalan "IFC sifatida saqlash (3)"), yoki {{key:Mod+S}} ni bosing.
9. Yuklab olingan papkangizdan "*original name* (edited).ifc" ni toping.

## Nimani koʻrishingiz kerak

Holat qatorida "*name* (edited).ifc *n* ta oʻzgarish bilan saqlandi (… bayt). Asl faylingiz oʻzgarmagan." deyiladi. {{ui:Changes}} roʻyxati boʻshaydi, keyingi davra uchun tayyor.

## Qiymat turlari

- **Matn**: yozgan narsangiz aynan saqlanadi. Nom, Obyekt turi, Teg yoki Tavsifni tozalash qiymatni olib tashlaydi.
- **Raqamlar**: oddiy raqam yozing, masalan `2.4` yoki `1200`, faylning oʻz birliklarida. Birlik belgilarisiz. Boshqa narsa "Raqam kiriting." deb koʻrsatadi.
- **Butun sonlar** (sonlar, butun qiymatlar): kasr yozsangiz, "Butun son kiriting." chiqadi.
- **Ha/Yoʻq**: qiymat Ha va Yoʻq bilan menyuga aylanadi.

Har bir qiymat oʻz IFC turini saqlaydi, shuning uchun raqam raqam boʻlib qoladi va boshqa dasturlar uni toʻgʻri oʻqiydi.

## Bekor qilish

1. {{ui:Changes}} boʻlimidagi {{ui:Undo}} ni bosing, yoki maydonda matn yozmayotganingizda {{key:Mod+Z}} ni bosing.
2. Koʻproq bekor qilish uchun takrorlang. Har bir bekor qilish eng yangi oʻzgarishni olib tashlaydi.

Saqlashdan oʻtib bekor qilib boʻlmaydi: saqlagandan keyin roʻyxat qaytadan boshlanadi. Saqlangan fayl hamma narsani saqlab qoladi.

## Nega tahrirlangan narsa bitta elementni oʻzgartiradi

Eksportchilar joy tejash uchun maʼlumotni ulashadi. Bitta xossalar toʻplami yigirmata eshik bilan ulashilgan boʻlishi mumkin, va bitta qiymat ("Yongʻin chidamliligi: 60 min") toʻqsonta toʻplamda roʻyxatlangan boʻlishi mumkin. BimCraft umumiy qiymatni oddiy oʻzgartirsa, uni ulashgan har bir element ham oʻzgarardi.

Shuning uchun BimCraft yozishdan oldin nusxa oladi:

- Tahrirlayotgan xossalar toʻplami boshqa elementlar bilan ulashilgan boʻlsa, sizning elementingiz oʻz nusxasini oladi va faqat nusxa oʻzgaradi.
- Qiymat boshqa toʻplamlar bilan ulashilgan boʻlsa, sizning toʻplamingiz qiymatning oʻz nusxasini oladi.

Qoʻshnilar eski maʼlumotlarini saqlaydi. Bu *nusxa-yozishda* deyiladi. U faylga bir nechta kichik yozuv qoʻshadi, ularni har bir IFC dastur odatdagidek oʻqiydi.

**Tur xossalari ataylab istisno.** "(type)" deb belgilangan toʻplam elementning turiga tegishli, va IFC da shu turdagi har bir element uni oʻsha yerdan oʻqiydi. Uni oʻzgartirish turni oʻzgartiradi, shuning uchun shu turdagi har bir element yangi qiymatni koʻrsatadi. {{ui:Changes}} roʻyxati bunday tahrirlarni "(type)" bilan belgilaydi. Qarang: [Bir turdagi hamma elementlar uchun tur xossasini oʻzgartirish](topic:type-vs-instance).

## Yozishdan oldingi ogohlantirishlar

- Saqlanmagan oʻzgarishlar bilan boshqa faylni ochish "*file* faylida *n* ta saqlanmagan oʻzgarish bor. Ularni tashlab yuboraymi?" deb soʻraydi. Ishlashni davom ettirish uchun Bekor qilish ni bosing, soʻng saqlang.
- Saqlanmagan oʻzgarishlar bilan yorigʻni yopish yoki qayta yuklash brauzerdan chiqishni soʻraydi.

## Keng tarqalgan xatolar

- **Birliklarni yozish.** `2400 mm` rad etiladi. `2400` yozing.
- **Bitta elementni nazarda tutib, tur xossasini oʻzgartirish.** Yozishdan oldin "(type)" izohiga qarang. Agar bitta element boshqacha boʻlishini xohlasangiz, buning oʻrniga nusxa xossasini yoki uning Tegi yoki Nomini oʻzgartiring.
- **Asl fayl oʻzgarishini kutish.** Saqlash har doim yangi fayl yuklab oladi. Xohlasangiz, asl faylni oʻzingiz almashtiring va nusxasini saqlang.
- **Hech qanday oʻzgarishsiz {{key:Mod+S}} ni bosish.** BimCraft faqat saqlanadigan narsa boʻlsa saqlaydi; aks holda brauzerning oʻz "Sahifani saqlash" oynasi ochilishi mumkin. Uni yoping.
- **Ikki marta saqlab, ikkita kichik fayl kutish.** Har bir saqlash modelni ochganingizdan beri qilingan har bir tahrirni oʻz ichiga oladi.
- **Tahrirlar loyiha faylga qaytishini kutish.** BimCraft faqat IFC yozadi. Tahrirlangan IFC ni muallif dasturingizga istalgan IFC kabi import qiling.
