---
title: Belgilar, turlar va aktivlar, loyiha shablonlari va Tez toʻplamlar
summary: Kutubxonada uch turdagi element bor (Belgilar, Turlar, Aktivlar). Loyihangizga Tur qoʻshing, umumiy loyiha shablonidan boshlang, Tez toʻplam qoʻshing va oʻz shablon hamda turlaringizni kutubxonaning yuklash sahifasi orqali ulashing.
keywords: kutubxona, belgilar, turlar, aktivlar, tur, devor turi, pol turi, tom turi, shift turi, loyiha shabloni, shablon, tez toʻplam, toʻplam, ulashish, yuklash, versiya, oʻzgarishlar jurnali, LOD, tasniflash, litsenziya, amaliyotdan eslatmalar
from: e13b0e67
---

## Nima qilasiz

Kutubxonada kerakli narsani uning turi boʻyicha toping, chizayotgan loyihangizga Tur qoʻshing, boshqa birov ulashgan shablondan yangi loyiha boshlang va oʻz shablon, tur hamda toʻplamlaringizni ulashing.

## Kutubxonaning uch turdagi elementi

- **Belgilar** — chizma konvensiyalari: faqat 2D, annotatsiya oʻlchamida chizilgan, intizom boʻyicha guruhlangan.
- **Turlar** — element nimadan iborat ekanligini aytadi: uning qatlamlari haqiqiy qalinligi bilan, ishlab chiqish darajasi (LOD) va tasniflash kodi. Tur loyihaga qoʻshiladi, chizilmaydi.
- **Aktivlar** — haqiqiy oʻlchamda reja koʻrinishi va 3D jismi boʻlgan jismoniy obyektlar: eshiklar, derazalar, mebel, moslamalar va jihozlar.

{{ui:Kutubxona}} yorligʻida **Kutubxona** ni tanlang va **Element turi** dan Hammasi, Belgilar, Turlar yoki Aktivlarni koʻrsatish uchun foydalaning.

## Loyihangizga Tur qoʻshish

1. **Element turi** ostida **Turlar** ni tanlang va bittasini oching.
2. Rasm ostida uning qurilishi, LOD va tasniflashini tekshiring, soʻng {{ui:Bu loyihaga qoʻshish}} ni bosing.
3. U devor, pol, tom yoki shift turi sifatida qoʻshiladi, uni chizish mumkin. Agar shu nomdagi tur allaqachon boʻlsa, yangisi nusxa sifatida qoʻshiladi va sizniki oʻz holicha qoladi. Bitta Ortga qaytarish uni olib tashlaydi.

## Loyiha shablonlari va Tez toʻplamlar

Odamlar nima ulashganini koʻrish uchun {{ui:Toʻplamlar}} ni tanlang.

- **Loyiha shabloni** — qavatlari, setkalari, turlari va sozlamalari bor IFC fayl. {{ui:Shablonlarimga saqlash}} uni **Yangi bino** boʻlimida **Boshlash manbasi** ostiga qoʻyadi.
- **Tez toʻplam** — kutubxona elementlari roʻyxati. {{ui:Toʻplam elementlarini koʻrsatish}} ularni joylashtirish mumkin boʻlgan kartochkalar sifatida koʻrsatadi.
- Har bir toʻplamning versiyasi va oʻzgarishlar jurnali bor, eng yangisi birinchi. 0 bilan boshlanadigan versiya muhokama uchun; 1.0.0 esa faqat chiziq egasi qabul qilgan narsalar uchun.

## Oʻz elementlaringizni ulashish

- **Loyiha shabloni:** {{ui:Shablon sifatida saqlash}} ni tanlang, {{ui:Kutubxonada ulashish uchun fayl ham yaratish}} belgisini qoʻying, ichidagilarni va versiyani kiriting. Siz `.json` fayl olasiz.
- **Tez toʻplam:** {{ui:Toʻplamlar}} da {{ui:Bu loyihadan tez toʻplam yaratish}} ni tanlang. U loyiha ishlatadigan kutubxona elementlarini koʻrsatadi.
- **Tur:** {{ui:Tur toʻplamlari}} da bitta turni belgilang va {{ui:Kutubxona elementi sifatida saqlash…}} ni tanlang.

Faylni kutubxonaning yuklash sahifasida yuklang. U har qanday element bilan bir xil koʻrib chiqishdan oʻtadi va litsenziyani shu yerda tanlaysiz: har bir element litsenziyasini koʻrsatishi kerak. Elementlardan LOD, IFC sinfi va tasniflash kodi (faqat nom emas, kod) soʻraladi.

## Amaliyotdan eslatmalar

Kutubxona elementining har bir sahifasida tizimga kirgan aʼzolar eslatma qoʻshishi mumkin: haqiqiy loyihada ishlatilgan, namunaviy loyihada sinab koʻrilgan yoki muammo topilgan. Loyiha turini bir necha soʻz bilan ayting va mijoz nomlarini qoldiring. Eslatma ommaviy boʻladi va sharh emas: u elementni oʻzgartirmaydi.

## Yaxshi bilish kerak

- Ilovadan hech narsa yuborilmaydi. Fayllar kompyuteringizda tayyorlanadi va ularni oʻzingiz yuklaysiz.
- Shablondan yasalgan toʻplam IFC matnini saqlangan holatida olib yuradi. Yuklashdan oldin undagi maxfiy narsalarni tekshiring.
- CadCraft kutubxona yorligʻida Belgilar va Aktivlarni koʻrsatadi; Turlar va shablonlar BimCraft loyihalari uchun.
