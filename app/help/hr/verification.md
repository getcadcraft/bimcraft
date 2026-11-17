---
title: Označite elemente kao provjerene ili provjerene na terenu
summary: Element pročitan iz PDF-a ili skena nije provjeren dok ga ne provjerite. Označite elemente kao provjerene ili kao provjerene na terenu (LOD 500) uz to tko ih je mjerio, kada i kako, te predajte izvedbeni (as-built) model koji kaže što je što.
keywords: neprovjereno, provjereno, provjereno na terenu, izvedeno stanje, as-built, lod 500, zatvaranje, primopredaja, izmjereno na terenu, mjerna vrpca, laser, skeniranje, geodetsko snimanje, postojeća zgrada, izmjena, označi kao provjereno, provjera, faza 7
from: df35d908
---

## Što ćete napraviti

Pratite što je u modelu netko stvarno pregledao. Element ima jednu od tri oznake ili nijednu:

- **Neprovjereno**: program ga je prepoznao iz PDF-a, skeniranog crteža, precrtanog crteža ili skena oblaka točaka. Nitko ga još nije provjerio.
- **Provjereno**: osoba ga je usporedila s crtežom iz kojeg potječe.
- **Provjereno na terenu (LOD 500)**: osoba ga je izmjerila na terenu. Tko, kada i kako čuva se uz njega.
- **Bez oznake**: nacrtala ga je osoba. Model o njemu ne tvrdi ništa.

## Koraci

1. Odaberite jedan element ili više njih (zidove, vrata, prozore, prostorije, bilo koji element).
2. U {{ui:Svojstva}} otvorite {{ui:Provjera}}.
3. Upišite tko ga je provjerio ili izmjerio. Datum je današnji dok ga ne promijenite.
4. Kliknite {{ui:Označi kao provjereno}}. Za mjerenje na terenu odaberite kako je izmjereno (mjerna vrpca, laserski daljinomjer, skeniranje, geodetsko snimanje) i kliknite {{ui:Označi kao provjereno na terenu (LOD 500)}}.
5. {{ui:Označi kao neprovjereno}} i {{ui:Ukloni oznaku}} vraćaju natrag. Svaki klik je jedan korak koji možete poništiti, za cijeli odabir.

Za brzo označavanje odabira: {{ui:Alati}} › {{ui:Označi kao provjereno}} (upisano: `MARKCHECKED`) označava ga kao provjerenog od vas, danas.

## Što biste trebali vidjeti

- U tlocrtu neprovjereni element ima isprekidani okvir i „?“; element provjeren na terenu ima kvačicu. Odznačite {{ui:Prikaži oznake provjere u tlocrtu}} u odjeljku {{ui:Revizija}} da ih sakrijete.
- {{ui:Specifikacije}} › {{ui:Provjera}} popisuje svaki označeni element s njegovom etažom, stanjem, tko, kada, kako i odakle potječe.
- Revizija popisuje neprovjerene elemente i broji element provjeren na terenu kao LOD 500. Vidi [Revizija modela](topic:audit-the-model).

## Iz skena

Kad uspoređujete sken s modelom, {{ui:Označi odgovarajuće elemente kao provjerene na terenu}} označava svaki element koji je sken vidio kao izgrađen unutar tolerancije, s metodom „scan” i tolerancijom u bilješci. Vidi [Usporedba skena s modelom](topic:compare-scan-with-model).

:::warning
Usporedba uspoređuje okvir svakog elementa s točkama skena. To nije geodetsko snimanje. Koristite je za elemente koje ste i sami pogledali.
:::

## Izvedbeni model i paket primopredaje

{{ui:Izradi paket primopredaje}} na kartici {{ui:Resursi}} stavlja izvedbeni (as-built) model u zip, sa:

- izjavom na projektu o tome koliko je elemenata provjereno na terenu, provjereno, neprovjereno i bez oznake;
- `as-built/verified-elements.csv`: svaki element i prostorija s njihovim stanjem, tko, kada i kako;
- `as-built/as-built-drawings.pdf`: skup crteža kakav je sada;
- dnevnik promjena crteža, kad model ima izdane komplete.

Vidi [Resursi i održavanje](topic:assets-and-maintenance).

## Kako se čuva u IFC-u

Svaki označeni element nosi skup svojstava `CadCraft_Verification`: State, By, On, Method, Source, Note i LevelOfDevelopment (`LOD 500` dok je provjeren na terenu). To su obična tekstualna svojstva, pa ih drugi programi popisuju, a Pronađi, Boja prema svojstvu i specifikacije oznaka mogu ih koristiti. Izjava izvedbenog stanja je skup svojstava `CadCraft_AsBuilt` na projektu. Element bez tog skupa nije izmjeren na terenu.

## Dalje

- [Zidovi iz skupa planova](topic:walls-from-plans)
- [Revizija modela](topic:audit-the-model)
