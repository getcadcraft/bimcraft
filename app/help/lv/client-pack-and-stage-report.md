---
title: Klienta paketes, posma atskaites un variantu salīdzināšana
summary: Izveidojiet klienta paketi vai posma atskaiti no modeļa, ar masas variantu salīdzinājumu pēc platības un izmaksām, stāvu platībām, rasējumiem ar to pārskatījumiem un izdevumu vēsturi. Katrs skaitlis saglabā elementus, uz kuriem tas balstās.
keywords: klienta pakete, prezentācija, posma atskaite, atskaite, variantu salīdzinājums, varianti, salīdzināt variantus, platība un izmaksas, izmaksas par variantu, nav likmes, masas modelis, stāvu platības, rasējumu saraksts, izdevumu vēsture, skaitļi, saistītie skaitļi
from: f6679bf5
---

## Ko jūs darīsiet

Izveidot klienta paketi vai posma atskaiti no modeļa tādā, kāds tas ir tagad, un salīdzināt saglabātos masas variantus blakus pēc platības un izmaksām.

## Soļi

1. Kreisajā panelī atveriet **Klienta pakete un posma atskaite**.
2. Blakus Klienta pakete vai Posma atskaite izvēlieties **Atvērt dokumentos**. Dokuments parādās sadaļā Dokumenti no modeļa, kur varat mainīt tā tekstu.
3. Priekšskatījumā noklikšķiniet uz skaitļa, lai atlasītu elementus, uz kuriem tas balstās.
4. Izvēlieties **Izveidot paketi**. Tiek saglabāts viens zip fails: dokuments kā PDF, 3D skata attēls un `figures.csv`, kurā uzskaitīts katrs skaitlis ar tā elementu GlobalId.

## Lauki

Tos var izmantot jebkurā dokumentā.

| Lauks | Ko tas izdrukā |
|---|---|
| `{{stage}}` | Projekta posmu no rasējuma informācijas. |
| `{{options}}` | Saglabātie masas varianti blakus: stāvi, augstums, pamatnes laukums, bruto grīdas platība, apvalks un izmaksas. |
| `{{areas}}` | Grīdas platība pa līmeņiem no telpām. |
| `{{sheets}}` | Lapas ar pārskatījumu, kādā tās atrodas, un to pēdējās izdošanas laiku. |
| `{{issues}}` | Izdevumu vēsture un rasējumu izmaiņu žurnāls. |
| `{{changes}}` | Kas mainījies kopš pēdējā izdevuma, pa lapām. |

## Kā varianti tiek novērtēti

Izmaksas nāk tikai no jūsu projekta cenu tabulas (Enerģija/Izmaksas, 5D izmaksas). Nekas netiek novērtēts jūsu vietā.

- Cenu rinda novērtē variantu tikai tad, ja tās klasēs ir `IfcBuildingElementProxy`.
- Grīdas platību novērtē rinda, kuras vārdi nosauc varianta lietojumu, piemēram, birojs. Ja tādas nav, tiek izmantota rinda ar vārdiem bruto grīdas platība vai ēkas masa. Rinda pēc m² izmanto bruto grīdas platību. Rinda pēc m³ izmanto tilpumu.
- Apvalku (perimetrs reizināts ar augstumu) novērtē rinda ar vārdu apvalks vai fasāde.
- Variants bez atbilstošas rindas parāda **Nav likmes**. Kopsumma tiek rādīta tikai tad, kad katrai pieprasītajai daļai ir likme.

## Lietderīga informācija

- Turiet variantus ar **Saglabāt kā variantu** telpu programmas masas variantu sarakstā. Sk. Masas varianti.
- PDF nevar atlasīt elementus. Ārpus BimCraft `figures.csv` satur saiti no katra skaitļa līdz tā elementiem.

## Vēl nav izveidots

- Lapas un zīmētie skati dokumentā nav ievietoti. Pakete satur tikai 3D skata attēlu.
