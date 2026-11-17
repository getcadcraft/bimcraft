---
title: Bogʻlangan chizmalar va rasmlarni toping
summary: Chizmaning bogʻlangan chizmalarini (xrefs) va rasmlarni koʻrsating: uning jildini ochish yoki fayllarni qoʻlda qoʻshish orqali.
keywords: xref, tashqi havola, bogʻlangan chizma, biriktirish, qoplama, rasm, surat, logotip, sarlavha bloki, yoʻqolgan xref, etransmit, havolalar menejeri
from: 5593d4b1
---

## Nima qilasiz

Chizmani toʻliq qiling: u bogʻlangan chizmalarni (tashqi havolalar yoki xrefs) va ishlatgan rasmlarni, masalan sarlavha blokidagi logotipni koʻrsating.

## Oson yoʻl: jildni oching

1. {{ui:Open a folder}} ni bosing va chizma hamda uning havolalari joylashgan jildni tanlang, masalan loyihaning butun `Cad` jildi.
2. Jild hisobotida **CAD chizmalari** ga suring.
3. Chizmani bosing.
4. Oʻngdagi {{ui:Properties}} panelini koʻring: **Bogʻlangan chizmalar** va **Rasmlar** ostida.

BimCraft har bir bogʻlangan chizmani uning nomi boʻyicha qidiradi ("*name*.dwg"), avval chizma bilan bir jildda, soʻng ochgan jildning istalgan joyida. Rasmlar ham xuddi shunday topiladi, oʻxshash nom boʻyicha ham: eTransmit yoki Revit eksporti koʻpincha loyiha nomini oldiga qoʻshadi, shuning uchun `logo.png` `Tower-logo-5425051.png` sifatida topiladi.

## Boshqa yoʻl: fayllarni qoʻlda qoʻshing

1. Chizmani yolgʻiz oching.
2. Oʻngda, **Bogʻlangan chizmalar** ostida {{ui:Add linked drawings…}} ni bosing. **Rasmlar** ostidagi tugma {{ui:Add pictures…}}; ikkalasi bir xil tanlovchini ochadi.
3. Bogʻlangan `.dwg` fayllarni va rasm fayllarini tanlang. Bir vaqtda bir nechtasini tanlashingiz mumkin.
4. BimCraft chizmani ular bilan qayta ochayotganda kuting.

## Nimani koʻrishingiz kerak

Har bir bogʻlangan chizma va rasm yorliq bilan roʻyxatlanadi:

| Yorliq | Bildiradi |
|---|---|
| **Koʻrsatilgan** | Topilgan va chizilgan. Undagi yoʻl qayerdan kelganini koʻrsatadi yoki "siz qoʻshgan". |
| **Oʻxshash nom bilan koʻrsatilgan** | Oʻxshash nom boʻyicha topilgan rasm. Toʻgʻri ekanligini tekshiring. |
| **Topilmadi** | Jildda yoki siz qoʻshgan fayllarda yoʻq. Yoʻqolgan rasm boʻsh ramka sifatida koʻrinadi. |
| **TIFF brauzerda koʻrsatilmaydi** | Rasm TIFF fayl, brauzerlar uni chizmaydi. Uni bir xil nom bilan PNG sifatida saqlab, qoʻshing. |
| **Oʻqib boʻlmadi** | Fayl topildi, lekin rasm sifatida ochilmadi. |

{{ui:Drawing}} paneli chapda bogʻlangan chizmalar uchun "*m* tadan *n* tasi yuklangan" deb koʻrsatadi. Bogʻlangan chizmalarning qatlamlari {{ui:Layers}} da "*link name*|*layer*" sifatida chiqadi.

## Keng tarqalgan xatolar

- **Faqat chizmani ochish.** "Bu chizma bogʻlangan chizmalar qoʻshilguncha faqat oʻz mazmunini koʻrsatadi. Butun loyiha jildini ochish ularni avtomatik topadi."
- **Juda kichik jildni ochish.** Agar havolalar qoʻshni jildda boʻlsa, ota jildni oching.
- **Nomi oʻzgartirilgan havolalar.** BimCraft bogʻlangan chizmalarni nomi boʻyicha moslaydi. Diskda nomi oʻzgartirilgan havola topilmaydi; uni qoʻlda qoʻshing.
- **Havolalarning havolalari.** BimCraft ochiq chizma bogʻlagan chizmalarni yuklaydi. Ular ichida bogʻlangan chizmalar izlanmaydi, shuning uchun bu versiyada odatda koʻrinmaydi.
