---
title: Märgista elemendid kontrollituks või objektil kontrollituks
summary: PDF-ist või skaneeringust loetud element on kontrollimata, kuni sa selle kontrollid. Märgista elemendid kontrollituks või objektil kontrollituks (LOD 500), koos sellega, kes, millal ja kuidas nad mõõdeti, ning anna üle valminud mudel, mis ütleb, milline on milline.
keywords: kontrollimata, kontrollitud, objektil kontrollitud, valminud, as-built, lod 500, sulgemine, üleandmine, objektil mõõdetud, mõõdulint, laser, skaneering, mõõdistus, olemasolev hoone, muutmine, märgi kontrollituks, kontrollimine, etapp 7
from: df35d908
---

## Mida teed

Hoia silma peal, mida mudelis on keegi tegelikult üle vaadanud. Elemendil on üks kolmest märgistusest või ükski:

- **Kontrollimata**: programm tundis selle ära PDF-ist, skaneeritud joonisest, ülejoonistatud joonisest või punktpilve skaneeringust. Keegi pole seda veel kontrollinud.
- **Kontrollitud**: inimene võrdles seda joonisega, millest see pärineb.
- **Objektil kontrollitud (LOD 500)**: inimene mõõtis seda objektil. Kes, millal ja kuidas on selle juures hoitud.
- **Märgistuseta**: joonistas inimene. Mudel ei väida selle kohta midagi.

## Sammud

1. Vali üks element või mitu (seinad, uksed, aknad, ruumid, mis tahes element).
2. Ava {{ui:Omadused}} all {{ui:Kontrollimine}}.
3. Kirjuta, kes kontrollis või mõõtis. Kuupäev on täna, kui sa seda ei muuda.
4. Klõpsa {{ui:Märgi kontrollituks}}. Objektil mõõtmise puhul vali, kuidas mõõdeti (mõõdulint, laserkaugusmõõtja, skaneering, mõõdistus), ja klõpsa {{ui:Märgi objektil kontrollituks (LOD 500)}}.
5. {{ui:Märgi kontrollimata}} ja {{ui:Eemalda märgis}} viivad tagasi. Iga klõps on üks samm, mida saab tagasi võtta, kogu valiku kohta.

Valiku kiireks märgistamiseks: {{ui:Tööriistad}} › {{ui:Märgi kontrollituks}} (kirjutatuna: `MARKCHECKED`) märgib valiku kontrollituks sinu poolt, täna.

## Mida peaksid nägema

- Plaanil on kontrollimata elemendil katkendlik kast ja "?"; objektil kontrollitud elemendil linnuke. Eemalda linnuke {{ui:Näita plaanil kontrollimärke}} all jaotises {{ui:Audit}}, et need peita.
- {{ui:Loendid}} › {{ui:Kontrollimine}} loetleb iga märgistatud elemendi koos tasandi, oleku, kes, millal, kuidas ja allikaga.
- Audit loetleb kontrollimata elemendid ja loeb objektil kontrollitud elemendi LOD 500 hulka. Vt [Auditeeri mudel](topic:audit-the-model).

## Skaneeringust

Kui võrdled skaneeringut mudeliga, {{ui:Märgi vastavad elemendid objektil kontrollituks}} märgib iga elemendi, mida skaneering nägi valminuna tolerantsi piires, meetodiga "skaneering" ja tolerantsiga märkmes. Vt [Võrdle skaneeringut mudeliga](topic:compare-scan-with-model).

:::warning
Võrdlus seob iga elemendi kasti skaneeringu punktidega. See ei ole mõõdistus. Kasuta seda elementidel, mida oled ka ise üle vaadanud.
:::

## Valminud mudel ja üleandmispakett

{{ui:Koosta üleandmispakett}} kaardil {{ui:Varad}} paneb valminud mudeli zip-faili koos:

- kokkuvõttega projektil, mitu elementi on objektil kontrollitud, kontrollitud, kontrollimata ja märgistuseta;
- `as-built/verified-elements.csv`: iga element ja ruum oma oleku, kes, millal ja kuidas;
- `as-built/as-built-drawings.pdf`: joonisekomplekt sellisena, nagu ta praegu on;
- joonisemuudatuste logi, kui mudelil on välja antud komplekte.

Vt [Varad ja hooldus](topic:assets-and-maintenance).

## Kuidas see IFC-s hoitakse

Iga märgistatud element kannab omadusehulka `CadCraft_Verification`: State, By, On, Method, Source, Note ja LevelOfDevelopment (`LOD 500`, kui objektil kontrollitud). Need on lihtsad tekstiomadused, nii et teised programmid neid loevad ja Otsing, Värvimine omaduse järgi ning siltidega loendid saavad neid kasutada. Valminud mudeli kokkuvõte on projekti omaduste hulk `CadCraft_AsBuilt`. Element ilma selle hulgata ei ole objektil mõõdetud.

## Edasi

- [Seinad plaanikomplektist](topic:walls-from-plans)
- [Auditeeri mudel](topic:audit-the-model)
