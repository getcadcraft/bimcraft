---
title: Označavanje elemenata kao proverenih ili proverenih na terenu
summary: Element pročitan iz PDF-a ili skeniranja nije proveren dok ga ne proverite. Označite elemente kao proverene ili kao proverene na terenu (LOD 500) sa tim ko ih je izmerio, kada i kako, i predajte model stvarno izvedenog stanja koji kaže šta je šta.
keywords: neproveren, proveren, proveren na terenu, izvedeno stanje, stvarno izvedeno, lod 500, zatvaranje, primopredaja, izmereno na terenu, merna traka, laser, skeniranje, geodetsko snimanje, postojeća zgrada, izmena, označi kao proveren, provera, faza 7
from: df35d908
---

## Šta ćete uraditi

Pratite šta je u modelu neko zaista pregledao. Element ima jednu od tri oznake ili nijednu:

- **Neproveren**: program ga je prepoznao iz PDF-a, skeniranog crteža, prenetog crteža ili skeniranja oblaka tačaka. Niko ga još nije proverio.
- **Proveren**: osoba ga je uporedila sa crtežom iz kog potiče.
- **Proveren na terenu (LOD 500)**: osoba ga je izmerila na terenu. Ko, kada i kako čuva se uz njega.
- **Bez oznake**: nacrtala ga je osoba. Model o njemu ne tvrdi ništa.

## Koraci

1. Izaberite jedan element ili više njih (zidovi, vrata, prozori, prostorije, bilo koji element).
2. U {{ui:Svojstva}} otvorite {{ui:Provera}}.
3. Upišite ko ga je proverio ili izmerio. Datum je danas, osim ako ga ne promenite.
4. Kliknite {{ui:Označi kao proveren}}. Za merenje na terenu izaberite kako je izmereno (merna traka, laserski daljinomer, skeniranje, geodetsko snimanje) i kliknite {{ui:Označi kao proveren na terenu (LOD 500)}}.
5. {{ui:Označi kao neproveren}} i {{ui:Skini oznaku}} vraćaju. Svaki klik je jedan korak koji možete opozvati, za ceo izbor.

Da brzo označite izbor: {{ui:Alatke}} › {{ui:Označi kao proveren}} (ukucano: `MARKCHECKED`) označava izbor kao proveren od vas, danas.

## Šta treba da vidite

- U planu, neproveren element ima isprekidan okvir i „?“; element proveren na terenu ima kvačicu. Odštiklirajte {{ui:Prikaži oznake provere u planu}} u odeljku {{ui:Revizija}} da ih sakrijete.
- {{ui:Specifikacije}} › {{ui:Provera}} navodi svaki označeni element sa njegovim nivoom, stanjem, ko, kada, kako i odakle potiče.
- Revizija navodi neproverene elemente i broji element proveren na terenu kao LOD 500. Vidi [Revizija modela](topic:audit-the-model).

## Iz skeniranja

Kada upoređujete skeniranje sa modelom, {{ui:Označi odgovarajuće elemente kao proverene na terenu}} označava svaki element koji je skeniranje videlo kao izgrađen u okviru tolerancije, sa metodom „skeniranje“ i tolerancijom u napomeni. Vidi [Uporedi skeniranje sa modelom](topic:compare-scan-with-model).

:::warning
Poređenje povezuje okvir svakog elementa sa tačkama skeniranja. To nije geodetsko snimanje. Koristite ga za elemente koje ste i sami pogledali.
:::

## Model stvarno izvedenog stanja i paket primopredaje

{{ui:Napravi paket primopredaje}} na kartici {{ui:Resursi}} stavlja model stvarno izvedenog stanja u zip, sa:

- izjavom na projektu o tome koliko je elemenata proveren na terenu, proveren, neproveren i bez oznake;
- `as-built/verified-elements.csv`: svaki element i prostorija sa stanjem, ko, kada i kako;
- `as-built/as-built-drawings.pdf`: skup crteža onakav kakav je sada;
- dnevnik promena crteža, kada model ima izdate skupove.

Vidi [Resursi i održavanje](topic:assets-and-maintenance).

## Kako se čuva u IFC-u

Svaki označeni element nosi skup svojstava `CadCraft_Verification`: State, By, On, Method, Source, Note i LevelOfDevelopment (`LOD 500` dok je proveren na terenu). To su obična tekstualna svojstva, pa ih drugi programi mogu izlistati, a Pronađi, Boji po svojstvu i oznake specifikacija mogu da ih koriste. Izjava o stvarno izvedenom stanju je skup svojstava `CadCraft_AsBuilt` na projektu. Element bez tog skupa nije izmeren na terenu.

## Dalje

- [Zidovi iz skupa planova](topic:walls-from-plans)
- [Revizija modela](topic:audit-the-model)
