---
title: Modelis no skenējuma
summary: Īss ceļvedis no lāzerskenēšanas līdz sienām: atveriet punktu mākoni blakus jaunai ēkai, saskaņojiet to ar līmeni un uzzīmējiet tās sienas plānā.
keywords: skenēšana, lāzerskenēšana, punktu mākonis, kā uzbūvēts, esoša ēka, uzmērījums, pārzīmēt, skenējums uz BIM, modelis no skenējuma, griezums, saskaņot, perpendikulāri, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Ko jūs darīsit

Uzzīmēt esošu ēku pēc tās lāzerskenējuma: sienas tur, kur tās rāda skenējums, pareizajā līmenī, perpendikulāri viena otrai.

## Soļi

1. **Ēka, kurā zīmēt.** {{ui:Fails}} › {{ui:Jauna ēka}}, ar tik līmeņiem, cik ir ēkai (līmeņus var pievienot vēlāk, skat. [Zemesgabals, ēka uz tā un tās līmeņi](topic:site-building-and-levels)). {{ui:Zīmēšana}} tiek ieslēgta.
2. **Skenējums.** {{ui:Rādīt}} › {{ui:Punktu mākonis}} un izvēlieties failu (LAS, LAZ, E57, PLY, PCD, PTX vai XYZ: skat. [Rādīt punktu mākoni blakus modelim](topic:point-clouds)). Mākonis parādās 3D skatā, un plānā tiek rādīts tā **griezums**: skenētie punkti 1200 mm (4 feet) virs līmeņa, punktu veidā. Šis ir augstums, kur sienas, durvis un logi ir vislabāk saskatāmi.
3. **Saskaņojiet ar līmeni.** Atveriet modeļa joslas {{ui:Skenēšana}} izvēlni un noklikšķiniet {{ui:Saskaņot tā grīdu ar šo līmeni}}: mākonis tiek pārvietots uz augšu vai uz leju, līdz skenētā grīda atrodas uz rādītā līmeņa. Pārbaudiet, vai griezums tagad šķērso sienas.
4. **Perpendikulāri ēkai.** {{ui:Skenēšana}} › {{ui:Pagriezt taisni pret ēku}} pagriež mākoni tā, ka sienas tā griezumā iet gar plāna asīm, tātad sienas, ko zīmējat ar turētu {{key:Shift}}, saskan ar skenējumu. Pagriešana notiek ap atrasto sienu vidu, tāpēc koki vai kaimiņa siena, kas iekļuvušas griezumā, neaizgriež skenējumu prom. Vispirms saskaņojiet grīdu: tad griezums šķērso sienas.
5. **Uzzīmējiet sienas.** Izvēlieties {{ui:Siena}} un noklikšķiniet gar punktiem: rīks piesaistās skenētajiem punktiem (piesaistes zīme ir neliels rombs), kā arī jūsu jau uzzīmētajām sienām. Siena tiek zīmēta pa savu centra līniju, tāpēc noklikšķiniet pa vidu starp divām punktu rindām, ko atstāj siena; biezumu ievadiet, vispirms izvēloties sienas tipu. Pēc tam pievienojiet durvis un logus tur, kur griezums rāda spraugas.
6. **Nākamais līmenis.** Plāna līmeņu sarakstā izvēlieties līmeni virs: griezums seko līmeņa griezuma augstumam. Saskaņojiet grīdu ar šo līmeni vēlreiz tikai tad, ja skenējuma stāvi neatrodas tur, kur jūsu līmeņi.

## Ko jums vajadzētu redzēt

- Griezums mainās, mainot līmeni, un biezāks griezums ({{ui:Skenēšana}} › {{ui:Griezuma biezums}}) parāda vairāk punktu tur, kur skenējums ir retāks.
- {{ui:Skenēšana}} › {{ui:Atsaukt saskaņošanu}} novieto mākoni atpakaļ tur, kur tas bija, kad to atvēra. Saskaņošana pārvieto mākoni tikai skatā: tā netiek saglabāta IFC failā, un jūsu uzzīmētās sienas paliek savās vietās. Saskaņojums pāriet kopā ar mākoni, ja maināt {{ui:Novietot}} vai {{ui:Mērvienības}}, vai atverat citu modeli.
- {{ui:Skenēšana}} › {{ui:Rādīt griezumu plānā}} paslēpj vai parāda punktus.

:::tip
Lieli skenējumi: plāns zīmē līdz 60 000 griezuma punktiem, bet 3D skats – dažus miljonus visa mākoņa punktu, abos gadījumos vienmērīgi izvēlētus visā skenējumā, tāpēc liels fails paliek ātrs. Lai pārzīmētu zīmēšanas lietotnē, izmantojiet mākoņa joslas {{ui:Pārzīmēt CadCraft}}.
:::
