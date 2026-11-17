---
title: Iekārtu specifikācijas izveide un CSV eksports
summary: Pārvērtiet ēdināšanas zīmējuma pozīciju marķējumus iekārtu specifikācijā, filtrējiet to, pārejiet uz katru pozīciju tās lapā un lejupielādējiet to kā CSV.
keywords: iekārtas, specifikācija, ēdināšana, virtuve, pozīciju marķējumi, kcl, atribūti, bom, materiālu saraksts, csv, izklājlapa, eksports, datu izguve
from: e3faa1c8
---

## Ko jūs darīsiet

Nolasiet iekārtu sarakstu no virtuves vai ēdināšanas zīmējuma, pārbaudiet to, atrodiet katru pozīciju plānā un lejupielādējiet to kā izklājlapas failu.

Tas darbojas ar zīmējumiem, kuru iekārtu marķējumi glabā savus datus kā bloku atribūtus, kā to dara virtuves projektēšanas bibliotēkas, piemēram, KCL: katrs marķējums satur pozīcijas numuru (`KCL-ITEM`), daudzumu, kategoriju, ražotāju, modeli, elektriskos un santehniskos datus un piezīmes. Citiem zīmējumiem nav cilnes ar nosaukumu {{ui:Equipment}}.

## Soļi

1. Atveriet zīmējumu, ideāli no tā projekta mapes, lai tā saistītie zīmējumi tiktu ielādēti arī.
2. Noklikšķiniet uz cilnes {{ui:Equipment}} virs zīmējuma. Tās nosaukumā rādīts, cik pozīciju ir uz lapām, piemēram, "Aprīkojums (88)".
3. Izlasiet specifikāciju: **Pozīcija**, **Daudz.**, **Aprīkojums**, **Ražotājs**, **Modelis**, **Elektriskais**, **Santehnika** un **Kur**.
4. Izvēlnē virs tabulas izvēlieties, ko uzskaitīt: **Visas lapas**, vienu lapu, **Nav nevienā lapā** vai **Viss zīmējumā marķētais**. Katra izvēle rāda savu skaitu.
5. Ierakstiet filtra lodziņā ("Filtrs: kategorija, ražotājs, modelis…"), lai sašaurinātu sarakstu, piemēram, `ledusskapis` vai `208`.
6. Noklikšķiniet uz pozīcijas lapas nosaukuma kolonnā **Kur**.
7. Apskatiet zīmējumu: BimCraft pārslēdzas uz šo lapu, tuvina pozīciju un apvelk to ar riņķi. Statusa rindā rakstīts "Pozīcija *n*, *kategorija* ir apvilkta ar riņķi uz *lapas*."
8. Noklikšķiniet uz cilnes {{ui:Equipment}}, lai atgrieztos pie specifikācijas.
9. Noklikšķiniet uz {{ui:Download CSV}}.

## Ko jums vajadzētu redzēt

- Fails ar nosaukumu "*zīmējuma nosaukums* equipment.csv" (ar lapas nosaukumu iekavās, ja uzskaitījāt vienu lapu) jūsu lejupielāžu mapē. To var atvērt Excel, Numbers, LibreOffice vai Google Sheets.
- Statusa rinda: "Lejupielādēts *faila nosaukums* (*n* vienumi)."

CSV ir šādas kolonnas: Pozīcija, Daudz., Kategorija, Ražotājs, Modelis, Elektriskais, Santehnika, Piezīmes, Elektrības piezīmes, Santehnikas piezīmes, Lapas, Novietots (cik marķējumu). Tas lejupielādē tieši tās rindas, ko rāda tabula, pēc izvēlnes un filtra.

## Kā veidota specifikācija

- Tā tiek nolasīta no **pašiem marķējumiem**, nevis no specifikācijas tabulas, kas zīmēta lapā. Piezīme virs tabulas norāda, cik marķējumu tika nolasīti.
- Viena rinda ir viens pozīcijas numurs ar vienu datu kopu. Tās daudzums ir tā marķējumu **summa**, kā to skaita drukāta specifikācija: plaukti, kas marķēti "5" vienā vietā un "3" citā, ir 8, rādīts kā "5 + 3".
- **Kur** uzskaita lapas, kas rāda katru pozīciju, noteiktas pēc tā, ko katras lapas skatu logi rāda, proti, ko drukā. "Tikai modelis" nozīmē, ka neviena lapa to nerāda.
- **Numurs izmantots divreiz** atzīmē vienu pozīcijas numuru uz divām dažādām iekārtām. Rindai ir dzintara krāsas atzīme.
- Marķējumi, ko neviena lapa nerāda, tiek atdalīti zem **Nav nevienā lapā**. Tie bieži ir atlikumi no iepriekšējiem plāniem vai citiem darbiem, un tie nekad netiek sajaukti ar **Visas lapas**.
- **Elektriskais** rāda ampērus, kW, HP, voltus, fāzi, pieslēgumu un kontaktdakšu, kā tie ir marķēti. **Santehnika** rāda pieslēguma izmērus: CW aukstais ūdens, HW karstais ūdens, DD tiešā notekūdeņu novadīšana, ID netiešā notekūdeņu novadīšana un gāze. Citi marķējumu lauki vēl netiek rādīti.

## Biežākās kļūdas

- **Nav cilnes ar nosaukumu {{ui:Equipment}}.** Zīmējumā nav `KCL-ITEM` marķējumu, vai tā iekārtas ir zīmētas bez datiem. Nav ko nolasīt.
- **Skaiti atšķiras no drukātās specifikācijas.** Drukātā specifikācijā var būt papildu numuri vai īsāki nosaukumi nekā marķējumos. Ticiet marķējumiem par to, kas ir novietots; atšķirības pārbaudiet ar projektētāju.
- **Atverot CSV, redzamas dīvainas rakstzīmes.** Fails ir UTF-8. Atveriet to ar izklājlapas importa komandu un izvēlieties UTF-8, ja programma to prasa.
- **Šūna sākas ar apostrofu.** Vērtības, kas sākas ar `=`, `+`, `-` vai `@`, saņem vadošo `'`, lai izklājlapas tās nebūtu izpildījušas kā formulas.
- **{{key:F}} un {{key:P}} nedara neko.** Tie darbojas zīmējumā, nevis specifikācijā. Vispirms noklikšķiniet uz lapas cilnes.
