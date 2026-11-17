---
title: Bir nechta skanerni bittaga registratsiya qilish
summary: Turli joylardan olingan skanerlarni tanlangan nuqta juftliklari yoki kiritilgan nishonlar orqali bitta kadrga joylashtiring, ICP bilan aniqlang, registratsiyani loyiha sifatida saqlang va registratsiyalangan bulutni LAS yoki E57 sifatida eksport qiling.
keywords: registratsiya, registration, skanerlar, nuqtalar buluti, icp, iterative closest point, nishonlar, nuqta juftliklari, qattiq almashtirish, tekislash, birlashtirish, e57, las, skanerdan BIM ga
from: e8e270db
---

## Nima qilasiz

Bir joyning bir nechta skanerlari (har biri oʻz skaner joylashuvidan olingan) oʻz koordinatalarida boshlanadi. Ularni registratsiya qiling: har bir skanerga bitta joylashuv bering, shunda hammasi bitta koordinatalar tizimida turadi, soʻng buni loyiha sifatida saqlang va registratsiyalangan bulutni bitta LAS yoki E57 fayl sifatida yozing.

## Skanerlarni joylashtirish

1. Muloqot oynasini oching ({{ui:Skanerlarni registratsiya qilish…}} boshlash panelida, yoki model ochiq boʻlgandan keyin {{ui:Koʻrsatish}} › {{ui:Skanerlarni registratsiya qilish…}}). {{ui:Skanerlar qoʻshish…}} LAS, LAZ, E57, PLY, PCD, PTX, PTS yoki XYZ fayllarini oladi yoki ularni muloqot oynasiga tashlang. Turli birliklardan foydalanadigan skanerlar izoh bilan rad etiladi: avval bittasini aylantiring.
2. {{ui:Siljitiladigan skaner}} va {{ui:Solishtirib joylashtirish}} ni tanlang. Rasmda hozirgi holatdagi har bir skaner kadrda bitta rangda koʻrsatiladi: {{ui:Reja}}, {{ui:Old}} yoki {{ui:Yon}}; surish uchun sudrang, kattalashtirish uchun gʻildirakchadan foydalaning.
3. **Nuqta juftliklari boʻyicha.** {{ui:Juftni tanlash}} ni bosing, soʻng siljitiladigan skanerdagi nuqtani, soʻng boshqa skanerdagi oʻsha joyni (burchak, nishon yoki ustun poyi) bosing. Buni kamida uch marta, bir chiziqda boʻlmagan va bir-biridan uzoqda joylashgan nuqtalar bilan bajaring. {{ui:Juftlar boʻyicha joylashtirish}} ni bosing: skaner eng kichik kvadratlar usuli bilan joylashtiriladi va **Qolgan** har bir juftlik hali qancha xato qilishini koʻrsatadi. Katta raqamli juftlik notoʻgʻri tanlangan: uni xoch belgisi bilan olib tashlang va qayta joylashtiring.
4. **Nishonlar boʻyicha.** Agar nuqtaning haqiqiy koordinatalari ma'lum boʻlsa (geodezik nishonlar), {{ui:Tanlang, soʻng maqsadni kiriting}} ni bosing, nuqtani uning skanerida bosing va qatorga nishonning X, Y va Z qiymatlarini kiriting. Juftliklar va kiritilgan nishonlar erkin aralashtiriladi.

## ICP bilan aniqlash

Juftliklar taxminiy joylashuv beradi. {{ui:Aniqlash}} skanerni shunday siljitadiki, uning sirtlari boshqa skanerniki ustiga tushadi: avval **nuqtadan nuqtaga**, soʻng **nuqtadan tekislikka**. Jadvalda har bir bosqichning xatosi va nechta nuqta mos kelgani koʻrsatiladi; undan yuqoridagi chiziq xatoning pasayishini koʻrsatadi. {{ui:Toʻxtatish}} joriy bosqichdan keyin jarayonni tugatadi va erishilganini saqlab qoladi. {{ui:Ortga qaytarish}} butun jarayonni (yoki oxirgi joylashtirishni) bekor qiladi; {{ui:Qayta oʻrnatish}} skanerni uning fayl koordinatalariga qaytaradi.

Noutbukda tez ishlash uchun ICP nuqtalarning kamaytirilgan qismi bilan ishlaydi ({{ui:Ishlatiladigan nuqtalar}}, 5,000 dan 60,000 gacha) va {{ui:Eng katta mos kelish masofasi}} dan uzoqroq mosliklarni eʼtiborsiz qoldiradi (sukut boʻyicha skaner hajmining 5%, aniqlashgan sari kichrayadi). Unga avval taxminiy joylashuv kerak: bir-biriga deyarli tegmaydigan skanerlar moslashtirib boʻlmasligini xabar qiladi. Faqat tekis yoki faqat toʻgʻri sirtlar oʻz boʻylab joylashuvni tuzatolmaydi; bunday holda juftliklar qoʻshing.

## Saqlash va eksport

- {{ui:Loyihani saqlash}} kichik `.ccscans.json` fayl yozadi: har bir skanerning nomi, hajmi va birinchi 64 KB ning barmoq izi, uning almashtirishi bilan birga. Unda nuqtalar yoʻq. {{ui:Loyihani ochish…}} skaner fayllarini shu havolalar boʻyicha topadi (fayllar avval qoʻshilgan boʻlishi kerak) va har bir almashtirishni qayta tiklaydi.
- {{ui:LAS eksport}} va {{ui:E57 eksport}} har bir skanerni registratsiyalangan joyida oʻz ichiga olgan bitta fayl yozadi. Asl fayllardagi nuqtalar hech qachon qayta yozilmaydi; almashtirish chiqishda qoʻllanadi. {{ui:Fayllardan barcha nuqtalarni oʻqish}} yoqilgan boʻlsa, har bir fayl har bir nuqta uchun qayta oʻqiladi (har bir skanerda 20 million gacha); oʻchirilgan boʻlsa, faqat koʻrish oynasida koʻrsatilgan nuqtalar yoziladi.
- {{ui:Roʻyxatga olingan bulutni koʻrsatish}} (BimCraft) LAS ni yozadi va uni modelning yonida 3D koʻrinishda ochadi, xuddi har qanday bulut kabi.

:::note
Hech narsa yuklanmaydi. Registratsiya fayllarning oʻz birliklarida ishlaydi va millimetrlarni saqlaydi: LAS mos masshtab bilan yoziladi (0.1 mm gacha), E57 esa double qiymatlar bilan. Koordinatalar tizimi LAS ga faqat har bir skaner bir xil EPSG kodini koʻrsatganda oʻtkaziladi. E57 yozuvchi bizning oʻzimizniki; u ushbu oʻquvchi va libE57Format bilan qayta oʻqish orqali tekshirilgan.
:::
