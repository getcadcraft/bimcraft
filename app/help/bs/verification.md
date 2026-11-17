---
title: Označite elemente kao provjerene ili provjerene na terenu
summary: Element pročitan iz PDF-a ili skeniranja je neprovjeren dok ga ne provjerite. Označite elemente kao provjerene ili kao provjerene na terenu (LOD 500) uz to ko ih je izmjerio, kada i kako, i predajte model onako kako je izveden, koji kaže šta je šta.
keywords: neprovjereno, provjereno, provjereno na terenu, izvedeno, as-built, lod 500, zatvaranje, predaja, izmjereno na terenu, mjerna traka, laser, skeniranje, geodetsko snimanje, postojeća zgrada, izmjena, označi kao provjereno, provjera, faza 7
from: df35d908
---

## Šta ćete raditi

Pratite šta je u modelu neko stvarno pregledao. Element ima jednu od tri oznake, ili nijednu:

- **Neprovjereno**: program ga je prepoznao iz PDF-a, skeniranog crteža, prenesenog crteža ili skeniranja oblaka tačaka. Niko ga još nije provjerio.
- **Provjereno**: osoba ga je uporedila s crtežom iz kojeg potiče.
- **Provjereno na terenu (LOD 500)**: osoba ga je izmjerila na terenu. Ko, kada i kako čuva se uz njega.
- **Bez oznake**: nacrtala ga je osoba. Model o njemu ne tvrdi ništa.

## Koraci

1. Odaberite jedan element ili više njih (zidove, vrata, prozore, prostorije, bilo koji element).
2. U {{ui:Properties}}, otvorite {{ui:Verification}}.
3. Upišite ko je provjerio ili izmjerio. Datum je današnji, osim ako ga ne promijenite.
4. Kliknite {{ui:Mark as checked}}. Za mjerenje na terenu izaberite kako je izmjereno (mjerna traka, laserski daljinomjer, skeniranje, geodetsko snimanje) i kliknite {{ui:Mark as field-verified (LOD 500)}}.
5. {{ui:Mark as unverified}} i {{ui:Take the mark off}} vraćaju. Svaki klik je jedan korak koji možete poništiti, za cijeli izbor.

Za brzo označavanje izbora: {{ui:Tools}} › {{ui:Mark as checked}} (ukucano: `MARKCHECKED`) označava izbor kao provjeren od vas, danas.

## Šta treba da vidite

- U planu, neprovjereni element ima isprekidan okvir i "?"; element provjeren na terenu ima kvačicu. Odštiklirajte {{ui:Show verification marks in the plan}} u odjeljku {{ui:Audit}} da ih sakrijete.
- {{ui:Schedules}} › {{ui:Verification}} navodi svaki označeni element s nivoom, stanjem, ko, kada, kako i odakle potiče.
- Revizija navodi neprovjerene elemente i računa element provjeren na terenu kao LOD 500. Vidi [Revizija modela](topic:audit-the-model).

## Iz skeniranja

Kada uporedite skeniranje s modelom, {{ui:Mark the matching elements as field-verified}} označava svaki element koji je skeniranje vidjelo kao izveden u okviru tolerancije, s metodom "scan" i tolerancijom u bilješci. Vidi [Uporedi skeniranje s modelom](topic:compare-scan-with-model).

:::warning
Ta usporedba spaja okvir svakog elementa s tačkama skeniranja. To nije geodetsko snimanje. Koristite je za elemente koje ste također pregledali.
:::

## Model onako kako je izveden i paket za predaju

{{ui:Build the handover package}} na kartici {{ui:Assets}} stavlja model onako kako je izveden u zip, sa:

- izjavom na projektu o tome koliko je elemenata provjereno na terenu, provjereno, neprovjereno i bez oznake;
- `as-built/verified-elements.csv`: svaki element i prostorija sa stanjem, ko, kada i kako;
- `as-built/as-built-drawings.pdf`: skup crteža kakav je sada;
- dnevnikom izmjena crteža, kada model ima izdate skupove.

Vidi [Resursi i održavanje](topic:assets-and-maintenance).

## Kako se čuva u IFC-u

Svaki označeni element nosi skup svojstava `CadCraft_Verification`: State, By, On, Method, Source, Note i LevelOfDevelopment (`LOD 500` dok je provjeren na terenu). To su obična tekstualna svojstva, pa ih drugi programi navode, a Pronađi, Boji po svojstvu i specifikacije sa oznakama mogu ih koristiti.
Izjava o izvedenom stanju je skup svojstava `CadCraft_AsBuilt` na projektu. Element bez tog skupa nije izmjeren na terenu.

## Dalje

- [Zidovi iz skupa planova](topic:walls-from-plans)
- [Revizija modela](topic:audit-the-model)
