---
title: Zīmēšanas ieteikumi: neparasti izmēri tiek izveidoti ar brīdinājumu
summary: BimCraft izveido to, ko pieprasāt. Izmērs ārpus parastā kļūst par brīdinājumu sadaļā Problēmas; tas nekad nekavē zīmēšanu vai saglabāšanu.
keywords: ieteikums, brīdinājums, problēmas, noraidīts, nezīmē, pārāk mazs, pārāk šaurs, minimums, ierobežojums, kāpņu platums, paaugstinājums, pakāpiens, kolonna, rampa, durvju izmērs, režģa līnija, līmeņa augstums, jumta izbūve, spirālkāpnes, pamatnes slīpums, īsa siena, bez šķēršļiem
from: 20090130
---

## Ko jūs darīsiet

Zīmējiet izmēru, kas nav parastais, un redziet, kur BimCraft par to informē.

## Soļi

1. Zīmējiet vai mainiet elementu, kā vēlaties, piemēram, 400 mm platas kāpnes.
2. BimCraft to izveido, kā pieprasīts.
3. Augšējā joslā atveriet {{ui:Problēmas}}. Sadaļā **Zīmēšanas ieteikumi** ir brīdinājums, kas nosauc elementu, jūsu norādīto izmēru un parasto diapazonu.
4. Noklikšķiniet uz brīdinājuma, lai atlasītu elementu. Mainiet izmēru, ja tā bija kļūda, vai atstājiet to: brīdinājumu var pieņemt ar vai bez iemesla.

## Kas ir ieteikums

Agrāk šie gadījumi tika noraidīti. Tagad tos izveido, katru ar brīdinājumu:

- **Kāpnes**: šaurākas par 500 mm vai platākas par 5 m; paaugstinājumi ārpus 100 līdz 300 mm; pakāpieni ārpus 150 līdz 600 mm.
- **Spirālkāpnes**: balsts ārpus 40 līdz 400 mm; pakāpieni, kas gar gājiena līniju ir seklāki par 100 mm.
- **Kolonnas**: šaurākas par 50 mm vai zemākas par 300 mm.
- **Rampas**: šaurākas par 300 mm.
- **Durvis un logi**: šaurāki vai zemāki par 100 mm.
- **Režģa līnijas**: īsākas par 100 mm.
- **Sienas**: siena, kas kļuvusi īsāka par 50 mm, piemēram, apgriežot.
- **Līmeņi**: zemāki par 1 m vai augstāki par 100 m (jauna ēka, sadalīti līmeņi, līmeņa augstums).
- **Jumta izbūves**: platums ārpus 600 mm līdz 12 m, priekšējā siena ārpus 300 mm līdz 4 m, izvirzījums virs 1 m, sienas ārpus 50 līdz 400 mm.
- **Ēku pamatnes**: sānu slīpumi ārpus 1:1 līdz 10:1.

## Kas joprojām tiek noraidīts

Tikai tas, ko nevar izveidot vai atrast, katrs ar ziņojumu, kas paskaidro iemeslu:

- Izmērs zem 10 mm (siena zem 1 mm): nav, ko izveidot.
- Jumta izbūve, kas nav platāka par divreiz sienas biezumu: tās divas sānu sienas saietos.
- Ēku pamatne ar sānu slīpumiem, kas stāvāki par 0.1:1 (tā ir atbalsta siena) vai lēzenāki par 100:1 (grāvējums ietu bezgalīgi).
- Kaut kas, kas neiederas tur, kur to novietojāt, kontūra, kas krustojas pati ar sevi, vai elements, kas vairs nav modelī.

## Noderīgi zināt

- Ieteikums tiek aprēķināts no modeļa, tādēļ tas atkal parādās, kad vēlāk atverat failu, un pazūd, kad izmērs tiek izlabots.
- Modeļa pārbaudes, normatīvu paketes un IDS pārbaudes arī tikai uzskaita to, ko atrod. Nekas sadaļā {{ui:Problēmas}} neaptur zīmēšanu vai saglabāšanu.
- Parastie diapazoni ir vispārēja prakse, nevis būvnoteikumi. Lai iegūtu noteikumus, pievienojiet papildinājumu Building regulations un izvēlieties savu vietu.

## Tālāk

- [Pārbaudīt modeli, vai nav bieži sastopamu problēmu](topic:model-checks)
- [Kāpnes un margas](topic:stairs-and-railings)
