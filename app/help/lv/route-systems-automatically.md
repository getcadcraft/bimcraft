---
title: Automātiski trasēt gaisa vadus, notekas, ūdens un aukstumaģenta caurules
summary: Sadursmju pārbaudē BimCraft atrod ceļu ap atvērto modeli gaisa vadiem, gravitācijas notekām, aukstajam un karstajam ūdenim un sadalītiem vai daudzsadalītiem aukstumaģenta cauruļvadiem un zīmē trases ar to fitingiem vienā atsaukšanas solī. Projektēšanas palīglīdzeklis: izmērus, nogāzes un pārbaudes nodrošina programmas tabulas un jūsu ierakstītie skaitļi; nekas šeit nenozīmē, ka projekts atbilst normatīviem.
keywords: auto trase, automātiskā trasēšana, trasēt gaisa vadus, trasēt caurules, notekas, sanitārā, gravitācija, stāvvads, ventilācija, sifons, ūdens, karsts ūdens, cirkulācijas cilpa, aukstumaģents, sadalīts, daudzsadalīts, VRF, ekvivalentais garums, atzarojuma komplekts, Y savienojums
from: 5841d513
---

## Ko jūs darīsiet

Ļaujiet BimCraft izkārtot cauruļu tīklu starp savienotājiem, kas jau atrodas modelī, apejot sienas un sijas, un pēc tam pārbaudiet to pret skaitļiem, ko varat redzēt.

## Soļi

1. Atveriet modeli un sadursmju pārbaudi. Sadaļā **Automātiski trasēt gaisa vadus** izvēlieties gaisa apstrādes iekārtu un tās termināļus, vai sadaļā **Automātiski trasēt citas sistēmas** izvēlieties sistēmu.
2. **Sanitārā drenāža ar gravitāciju.** Ierakstiet izplūdes pozīciju un, ja tās ir zināmas, stāvvadu pozīcijas. Atzīmējiet **Trasēt katru stāvu vienā reizē**, lai ņemtu katru stāvu, kurā ir sanitārie mezgli: katra stāva notekas savienojas ar stāvvadu savā līmenī, un stāvvads iet no virs augstākā krāna līdz tā pamatnei. Nospiediet {{ui:Trasēt}}.
3. **Sifons līdz ventilācijai.** Panelis uzskaita attālumu no katra sifona līdz tā ventilācijai. Laukā **Lielākais attālums no sifona līdz tā ventilācijai** ierakstiet lielāko, ko pieļauj jūsu normatīvi; jebkurš mezgls, kas to pārsniedz, tiek uzskaitīts kā neizpildīts ar pārsnieguma milimetriem. Atzīmējiet **Ventilēt caur stāvvadu**, ja mezgliem nav savu ventilācijas atzaru: tad attālums tiek mērīts līdz stāvvadam. BimCraft nenes līdzi normatīvu tabulu šim nolūkam: skaitli ierakstāt jūs.
4. **Aukstais un karstais ūdens.** Izvēlieties avotu, ierakstiet spiedienu avotā un spiedienu, kāds nepieciešams pie mezgla. Atzīmējiet **Karstais ūdens**, izvēlieties sildītāja karstā savienojuma pieslēgumu un atzīmējiet **Cirkulācijas cilpa**, lai atgriezes līniju beigtu pie sildītāja savienojuma **karstā atgriezums** vai pie jebkura cita savienojuma, ko izvēlaties (tas beidzas 150 mm īsāks, atvērts, lai jūs to pievienotu).
5. **Sadalītie, daudzsadalītie un VRF.** Izvēlieties ārējo bloku, atzīmējiet iekšējos blokus un ierakstiet katra jaudu. Ierakstiet ierobežojumus no sava ražotāja datiem. Ierakstiet līkuma un atzarojuma komplekta **ekvivalento garumu** (ražotāja vērtības), un garākais un kopējais garums tiek pārbaudīts pēc ekvivalentajiem garumiem.
6. Nospiediet {{ui:Trasēt}}. Panelis norāda, cik trašu tika zīmētas, un to, ko nevarēja izdarīt un kāpēc. {{ui:Atsaukt}} atsauc visu vienā solī.

## Ko jums vajadzētu redzēt

Caurules ar elkoņiem, trijnieciem un reducētājiem; notekas, kas krīt vismaz ar mazāko nogāzi savam izmēram; ventilācijas atzari pie mezgliem; aukstumaģenta līnijas kā šķidruma un gāzes pāris, kas katrā stūrī pagriežas vienādi, ar atzarojuma komplektu atzīmētu vietā, kur atzars atiet no stumbra.

## Labi zināt

- Vietā, kur notekas savienojas ar citu noteku, modelis zīmē trijnieku. Plānā šīs vietas nosauktas kā 45 grādu Y veida savienojumi, lai varētu mainīt fitingu.
- Karstais ūdens izmanto mezgla pašu karsto savienojumu, ja tā saime to ir, un savienojumu 100 mm blakus aukstajam, ja nav.
- Aukstumaģenta līnijas sākas starp katras vienības abiem portiem. Ja vienības abi porti atrodas pārāk tuvu līkumam, pāris paliek centrēts starp tiem.
- Ūdens tīkls izmanto pieprasījuma līkni un berzes skaitļus, kas rādīti aprēķinos; aizstājiet tos ar savu normatīvu vērtībām, pirms paļaujaties uz spiedieniem.
- Lielām mājām var paņemt pusminūti vai vairāk, galvenokārt karstā tīkla dēļ.
- Šis ir projektēšanas palīglīdzeklis. Kvalificēta persona pārbauda izmērus, nogāzes, ventilāciju un spiedienus pret piemērojamo normatīvu.

## Tālāk

[Pārbaudīt sadursmes](topic:clash-check) · [Pārbaudīt caurules un gaisa vadus pret konstrukciju](topic:mep-against-structure) · [Savienojumi starp caurulēm un iekārtām](topic:mep-connections)
