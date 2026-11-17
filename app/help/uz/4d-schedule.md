---
title: 4D jadvalini modelda ijro etish
summary: Vazifalar roʻyxatini CSV sifatida oching, har bir vazifani xususiyat boʻyicha elementlarga bogʻlang va sanalar boʻylab harakatlanib, nima qurilganini, nima bajarilayotganini va nima hali boshlanmaganini koʻring.
keywords: 4d, jadval, qurilish ketma-ketligi, vaqt chizigʻi, bosqichlash, dastur, gantt, vazifalar, sanalar, simulyatsiya, progress, qurilgan, csv, bosqich, faza, ish paketi, wbs, guruh
from: 1b985a64
---

## Nima qilasiz

Binoning qanday qurilayotganini kuzating: jadvalingizdagi har bir vazifa u quradigan elementlar bilan bogʻlangan holda, kunma-kun koʻrsatiladi.

## Qadamlar

1. IFC modelini oching va chap panelda {{ui:4D jadval}} ni oching.
2. {{ui:Shablonni yuklab olish}} ni bosing — har bir qavat uchun bir haftalik vazifalar roʻyxati; uni elektron jadvalda oʻzgartiring. Yoki oʻzingizniki yozing.
3. {{ui:Vazifalar roʻyxatini oching…}} ni bosing va CSV ni tanlang.
4. Sana surgichini suring yoki {{ui:Ijro etish}} ni bosing.

## Vazifalar roʻyxati

Sarlavha qatori va **Task**, **Start**, **Finish**, **Field** hamda **Value** ustunlari bor CSV. Vergul yoki nuqtali vergul ikkalasi ham ishlaydi.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| 1-qavat | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Tom | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Tom | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Sanalarni YYYY-MM-DD shaklida yozing.
- Har bir qator vazifani **Field** qiymati aynan shu **Value** ga teng boʻlgan barcha elementlar bilan bogʻlaydi. Maydon Storey, Class, Name, Type, Material, Tag yoki GlobalId kabi xususiyat boʻladi yoki toʻplami va nomi bilan yozilgan istalgan xususiyat boʻladi: `Pset_WallCommon.FireRating`.
- Koʻproq elementni bogʻlash uchun vazifani bir xil sanalar bilan bir necha qatorda takrorlang.

## Bosqichlar va ish paketlari

**Stage** ustunini, **Package** ustunini yoki ikkalasini qoʻshing — vazifalarni bosqich va ish paketlariga guruhlash uchun. Phase va WBS ham ustun nomi sifatida ishlaydi.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| 1-qavat plitasi | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Konstruksiya | Karkas |
| 1-qavat devorlari | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Konstruksiya | Karkas |
| Eshiklar | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Ichki pardoz | Duradgorlik |

- Vazifa bitta bosqich va bitta paketga tegishli. Agar shu vazifaning keyingi qatorida boshqasi koʻrsatilsa, bu qator qator raqami bilan roʻyxatga olinadi va chiqarib tashlanadi.
- Ikki bosqichdagi bir xil paket nomi — ikkita paket.

Roʻyxatda guruhlar boʻlsa, sana ustida {{ui:Koʻrsatish}} roʻyxati paydo boʻladi. Bosqich yoki paketni tanlang — u bitta butun sifatida ijro etiladi:

- surgich va {{ui:Ijro etish}} guruhning birinchi boshlanishidan oxirgi tugashigacha ishlaydi,
- roʻyxatda va boʻyashda faqat guruh vazifalari koʻrsatiladi, guruhdan tashqaridagi hamma narsa shaffof boʻladi,
- roʻyxat ostidagi qatorda oʻsha sanada uning vazifalaridan nechtasi bajarilgan, bajarilayotgan va hali bajarilishi kerakligi aytiladi,
- {{ui:Uning elementlarini tanlang}} guruhning barcha elementlarini tanlaydi — {{ui:Koʻrsatish}}, {{ui:Kesim}} yoki jadval uchun.

Butun jadvalni qayta koʻrish uchun **Barcha vazifalar** ni tanlang.

## Nimani koʻrishingiz kerak

- **Qurilgan**: barcha vazifalari tugagan elementlar oʻz ranglarida.
- **Bajarilmoqda**: oʻsha kuni bajarilayotgan vazifasi bor elementlar, oxra rangda. Vazifa boshlanish sanasidan tugash sanasigacha bajarilmoqda deb hisoblanadi.
- **Boshlanmagan**: shaffof.
- Hech bir vazifaga kirmagan elementlar oʻz holicha qoladi. Roʻyxatda har bir vazifa nechta element topganligi koʻrsatiladi. Oʻqib boʻlmagan yoki hech narsa topilmagan qatorlar qator raqamlari bilan roʻyxatga olinadi.

## Bogʻlanishlar, Gantt diagrammasi va MS Project

- Microsoft Project XML fayli (`.xml`) yoki `Predecessors` ustuni bor CSV ni oching. Bogʻlanishlar tugash-boshlanish, boshlanish-boshlanish, tugash-tugash yoki boshlanish-tugash turida boʻlishi mumkin, har biri kunlar bilan ilgarilash yoki kechikish bilan.
- Vazifalar roʻyxati ostida Gantt diagrammasi har bir vazifani bogʻlanishlar uchun oʻqlar bilan polosa sifatida chizadi. Kritik yoʻldagi vazifalar qizil rangda. Bogʻlanish halqasi yoki mavjud boʻlmagan oldingi vazifa panelda roʻyxatga olinadi.
- {{ui:MS Project XML sifatida saqlash}} va {{ui:Bogʻlanishlar bilan CSV sifatida saqlash}} jadvalni bogʻlanishlari bilan qayta yozadi.

## Keyingi

- [Elementlarni sinf, nom yoki xususiyat boʻyicha topish](topic:find)
- [Elementlarni xususiyat boʻyicha rangga boʻyash](topic:color-by-property)
