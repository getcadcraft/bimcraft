---
title: "Mijoz toʻplamlari, bosqich hisobotlari va variantlarni solishtirish"
summary: "Modeldan mijoz toʻplamini yoki bosqich hisobotini tuzing: massa variantlari maydon va xarajat boʻyicha yonma-yon solishtirilgan, qavat maydonlari, qayta koʻrib chiqishlari bilan chizmalar va muammolar tarixi bilan. Har bir raqam uni tashkil etgan elementlarni saqlaydi."
keywords: mijoz toʻplami, taqdimot, bosqich hisoboti, hisobot, variantlarni solishtirish, variantlar, maydon va xarajat, variant boʻyicha xarajat, stavka yoʻq, massa, qavat maydonlari, chizmalar roʻyxati, muammolar tarixi, raqamlar, bogʻlangan raqamlar
from: f6679bf5
---

## Nima qilasiz

Modeldan hozirgi holati boʻyicha mijoz toʻplamini yoki bosqich hisobotini tuzing va saqlangan massa variantlarini maydon va xarajat boʻyicha yonma-yon solishtiring.

## Qadamlar

1. Chap panelda **Mijoz toʻplami va bosqich hisoboti** ni oching.
2. Mijoz toʻplami yoki Bosqich hisoboti yonidagi **Hujjatlarda ochish** ni tanlang. Hujjat modeldan Hujjatlar boʻlimida paydo boʻladi, u yerda matnini oʻzgartirishingiz mumkin.
3. Koʻrinishda raqamni bosing: uning ortidagi elementlar tanlanadi.
4. **Toʻplamni yaratish** ni tanlang. Bitta zip saqlanadi: hujjat PDF sifatida, 3D koʻrinish rasmi va `figures.csv`, u har bir raqamni va uning elementlarining GlobalId lari bilan sanab chiqadi.

## Maydonlar

Ulardan istalgan hujjatda foydalanishingiz mumkin.

| Maydon | Nimani chop etadi |
|---|---|
| `{{stage}}` | Chizma tafsilotlaridagi loyiha bosqichi. |
| `{{options}}` | Saqlangan massa variantlari yonma-yon: qavatlar, balandlik, egallagan maydon, umumiy qavat maydoni, tashqi qobiq va xarajat. |
| `{{areas}}` | Xonalardan darajalar boʻyicha qavat maydoni. |
| `{{sheets}}` | Varaqlar, har biri turgan qayta koʻrib chiqish va oxirgi marta chiqarilgan sanasi bilan. |
| `{{issues}}` | Muammolar tarixi va chizmalar oʻzgarishlar jurnali. |
| `{{changes}}` | Oxirgi chiqarilgandan beri nima oʻzgargani, varaq boʻyicha. |

## Variantlar qanday hisoblanadi

Xarajat faqat loyihangizning narxlar jadvalidan (Energiya/Xarajat, 5D xarajat) keladi. Siz uchun hech narsa taxmin qilinmaydi.

- Narx qatori variantni faqat uning sinflari `IfcBuildingElementProxy` deb nomlasa narxlaydi.
- Qavat maydonini variant foydalanishini nomlovchi soʻzlar bor qator narxlaydi, masalan, ofis. Bunday qator boʻlmasa, umumiy qavat maydoni yoki binoning massasi soʻzlari bor qator ishlatiladi. m² bilan berilgan qator umumiy qavat maydonidan foydalanadi. m³ bilan berilgan qator hajmdan foydalanadi.
- Tashqi qobiqni (perimetr koʻpaytirilgan balandlik) soʻzi envelope yoki facade boʻlgan qator narxlaydi.
- Mos qatori boʻlmagan variant **Stavka yoʻq** koʻrsatadi. Jami faqat soʻralgan har bir qismning stavkasi boʻlganda koʻrsatiladi.

## Bilib qoʻying

- Variantlarni xona dasturining massa roʻyxatida **Variant sifatida saqlash** bilan saqlang. Qarang: Massa variantlari.
- PDF elementlarni tanlay olmaydi. BimCraft tashqarisida `figures.csv` har bir raqamdan uning elementlariga havolani olib boradi.

## Hali amalga oshirilmagan

- Varaqlar va chizilgan koʻrinishlar hujjat ichiga joylashtirilmaydi. Toʻplamda faqat 3D koʻrinish rasmi boʻladi.
