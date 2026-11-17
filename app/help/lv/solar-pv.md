---
title: Saules PV masīvi, ēnojums un ražība
summary: Uzstādiet saules masīvus uz jumtiem vai zemes, nosedziet tos no modeļa, novērtējiet gada enerģiju, izmēriet stringus un izveidojiet vienas līnijas diagrammas datus. Visi ievadi ir parādīti, un sākuma modulis un zudumi ir vispārīgi.
keywords: saule, pv, fotoelektrisks, masīvs, modulis, jumts, ēnojums, ražība, kwh, kwp, stringu izmēri, invertors, vienas līnijas, slīpums, azimuts, rindu atstarpe
from: adf4aaf3
---

## Ko jūs darīsiet

Atveriet rūti **Saules PV**. Izvēlieties jumta virsmu (tās slīpums un orientācija tiek nolasīti no modeļa) vai izveidojiet zemes masīvu ar slīpumu un orientāciju; moduļi tiek ievietoti iekšā ar atkāpēm un saskaitīti, dodot līdzstrāvas jaudu kWp. Masīva novietošana ieraksta to modelī kā saules ierīces vienā atsaukšanas solī.

## Ēnojums, ražība un stringi

- **Ēnojums** met staru no katra moduļa uz sauli tipiskām dienām katrā mēnesī pret modeļa pašu ģeometriju, tātad kaimiņu ēkas, parapeti un rindas priekšā tiek ņemtas vērā. Tiek samazināta tikai tiešā saules gaisma, un daļēji noēnots masīvs zaudē jaudu proporcionāli.
- **Ražība** dod kWh pa mēnešiem un gadā, kWh uz kWp un veiktspējas koeficientu. Saule nāk no jūsu pašu mēneša kopsummām horizontālai virsmai, ja tās ierakstāt. Bez tām rūtī tiek izmantota skaidro debesu augšējā robeža, un par to tiek paziņots. **Iegūt klimatu no NASA POWER** ar pogu cilnē Ražība: tā nosūta tikai objekta platumu un garumu, vienreiz, un atbildi saglabā šajā datorā (pārbaudīts no pārlūkprogrammas 2026-10-30). PVGIS neļauj tīmekļa lapai nolasīt tā atbildi, tāpēc cilne dod saiti, kas jaunā cilnē atver PVGIS mēneša datus šim objektam; ielīmējiet to, ko tas rāda, lodziņā, un divpadsmit mēneši aizpildīsies.
- **Stringi** pārbauda moduļus pa stringiem attiecībā pret invertora sprieguma logu aukstākajā un karstākajā dienā, bet paralēlos stringus — pret tā strāvu.
- **Vienas līnijas** izveido diagrammas datus (masīvs, kombinētājs, atslēdzējs, invertors, panelis, tīkls) ar vadu un drošinātāju izmēriem no faktoriem, ko ievadāt. Tie ir dati un SVG; CadCraft Elektrības papildinājums tos var novietot kā simbolus.

Moduļa, invertora, zudumu un vadu faktori, kas nāk kopā ar BimCraft, ir vispārīgi piemēri, kas katrā rezultātā ir marķēti. Ievadiet ražotāja datus un normatīvās vērtības, pēc kurām projektējat, un liek to pārskatīt personai, kas par to atbild.
