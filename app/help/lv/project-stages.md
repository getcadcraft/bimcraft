---
title: Projekta posmi, no uzdevuma līdz norādījumiem objektā
summary: Sāciet ar uzdevumu, kurā norādītas mērķa platības, un redziet, vai izpildīts vai par maz, kamēr zīmējat. Salīdziniet koncepcijas variantus ar to, saistiet specifikācijas un mezglus ar tipiem, pārskatiet darbarasējumus un reģistrējiet norādījumus objektā pret elementiem.
keywords: uzdevums, telpu specifikācija, mērķa platība, izpildīts, par maz, telpas, koncepcijas variants, variants, masas, budžets, specifikācija, spec, mezgls, konstrukcijas mezgls, tips, darbarasējums, pārskatīt, apstiprināt, iesniegt atkārtoti, norādījums objektā, revīzija, iemesls, objekts, posms
from: 0a49b852
---

## Ko jūs darīsiet

Veiciet projekta posmus vienā panelī: uzrakstiet klienta uzdevumu kā telpas ar mērķa platībām, salīdziniet koncepcijas variantus ar to, glabājiet specifikāciju un konstrukcijas mezglus pie tipiem, kuriem tie pieder, pārskatiet darbarasējumus, kad tie atgriežas no būvniekiem, un reģistrējiet norādījumus objektā pie elementiem, kurus tie maina.

## Soļi

1. Kreisajā panelī atveriet **Projekta posmi**, pēc tam **Uzdevums**.
2. Ielīmējiet telpas, pa vienai rindā: `Dzīvojamā; 1; 30` nozīmē vienu telpu 30 m². Skaitu var izlaist. Izvēlieties **Pievienot telpas**. Aizpildiet klientu, objektu, budžetu, pielaidi un programmu, pēc tam izvēlieties **Saglabāt uzdevumu**.
3. Zīmējiet sienas. Katra telpa, ko veido sienas, un kurai ir uzdevuma telpas nosaukums (aiz tā esošs numurs, piemēram, "Guļamistaba 2", tiek ignorēts), tiek ieskaitīta. **Telpu specifikācija** rāda **Izpildīts**, **Par maz**, **Par daudz** vai **Nav zīmēts**, kā arī starpību m².
4. Lai sāktu jaunu projektu šādā veidā, izvēlieties **Sākt jaunu projektu no uzdevuma**. Tiek atvērts jauns modelis, no jūsu saglabātas veidnes, ja to izvēlaties, un uzdevums tiek ievietots kā pirmais solis.
5. Atveriet **Varianti pret uzdevumu**. Katrs modelī saglabātais masas variants tiek attēlots vienā mērogā ar savu bruto laukumu, to, ko prasa uzdevums, un to, cik uzdevuma telpu tajā iekļaujas. **Ievietot uzdevumu šeit** ievieto telpas varianta stāvos, sākot no zemākā, un norāda, kas neiekļaujas. Izmaksas nāk tikai no projekta cenu tabulas; ja atbilstoša rinda nav, tiek rādīts "Nav likmes".
6. Atveriet **Tipi, specifikācijas un mezgli**. Katrs sienas, durvju, loga un grīdas tips parāda, vai tam ir specifikācijas teksts, ar to saistītie mezgli un vietu, kur specifikācija, specifikācijas un lapas nesakrīt. **Saistīt mezglu** pievieno DetailCraft vai CadCraft failu, adresi vai šī modeļa lapu.
7. Atveriet **Darbarasējumi**. Modelī atlasiet elementus, kurus aptver darbarasējums, pēc tam izvēlieties **Saņemt to**. Izmantojiet **Apstiprināt**, **Ar piezīmēm** vai **Labot** ar pārskatītāja vārdu un piezīmi. **Iesniegts atkārtoti** izveido nākamo tā paša ieraksta revīziju un saglabā pārskatīšanas vēsturi. Stāvoklis tiek ierakstīts arī katram elementam.
8. Atveriet **Norādījumi objektā**. Atlasiet elementus, norādiet iemeslu un to, kā tas ietekmē izmaksas un laiku, saviem vārdiem, un izvēlieties **Reģistrēt to**. Pēc tam, kad problēma ir reģistrēta, **Paskaidrot izmaiņas kopš šīs problēmas** norāda, kuriem mainītajiem elementiem norādījums attiecas un kuri mainījušies, bet nav nekas reģistrēts.

## Noderīga informācija

- Katrs solis ir viena darbība **Atsaukt**. Nekas netiek noraidīts: uzdevums, kas nav izpildīts, tips, kas neatbilst savam tekstam, vai novēloti darbarasējums ir brīdinājums vai piezīme sadaļā **Problēmas**.
- Uzdevuma telpas ir telpas bez sienām. Tām ir mērķis, nevis zīmēta platība, tāpēc telpu specifikācijas un COBie tās nekad neskaita kā zīmētas telpas.
- Izkārtojums telpas stāvos izvieto tikai pēc platības. Sienas tas nezīmē.
- Specifikācijas teksts tiek rakstīts sadaļā **Dokumenti** no modeļa. Šeit tas tiek salīdzināts tikai ar paša modeļa izmēriem: standarta punkts nekad netiek rakstīts jūsu vietā.
- Darbarasējumi un norādījumi objektā ir ieraksti tajā pašā vēsturē, kas paneļa **Problēmas un revīzijas** dati, tāpēc abi paneļi tos rāda.
- Darbarasējuma stāvoklis ir katra elementa īpašība (`CadCraft_ShopDrawing`), bet norādījums objektā ir `CadCraft_SiteInstruction`, tāpēc **Atrast** un **Krāsot pēc īpašības** tos var izmantot.
- Lauka pārbaudes atzīmes (7. posms) ir **Īpašībās** sadaļā **Pārbaude**.
