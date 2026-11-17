---
title: Elementen markeren als gecontroleerd of veldgecontroleerd
summary: Een element dat uit een PDF of een scan is gelezen, is niet gecontroleerd totdat u het controleert. Markeer elementen als gecontroleerd, of als veldgecontroleerd (LOD 500) met wie ze hebben opgemeten, wanneer en hoe, en lever een as-built-model op dat aangeeft welke is welke.
keywords: niet gecontroleerd, gecontroleerd, veldgecontroleerd, as built, as-built, lod 500, afsluiting, oplevering, op de bouwplaats opgemeten, meetlint, laser, scan, opmeting, bestaand gebouw, verbouwing, markeren als gecontroleerd, verificatie, fase 7
from: df35d908
---

## Wat u gaat doen

Houd bij wat er in het model daadwerkelijk door iemand is bekeken. Een element heeft een van drie markeringen, of geen:

- **Niet gecontroleerd**: het programma heeft het herkend uit een PDF, een gescande tekening, een overgetrokken tekening of een scan van een puntenwolk. Niemand heeft het nog gecontroleerd.
- **Gecontroleerd**: een persoon heeft het vergeleken met de tekening waar het uit kwam.
- **Veldgecontroleerd (LOD 500)**: een persoon heeft het op de bouwplaats opgemeten. Wie, wanneer en hoe worden erbij bewaard.
- **Geen markering**: door een persoon getekend. Het model doet er geen uitspraak over.

## Stappen

1. Kies één element of meerdere (wanden, deuren, ramen, ruimten, elk element).
2. Open in {{ui:Eigenschappen}} het onderdeel {{ui:Verificatie}}.
3. Typ wie het heeft gecontroleerd of opgemeten. De datum is vandaag, tenzij u die wijzigt.
4. Klik op {{ui:Markeren als gecontroleerd}}. Voor een meting op de bouwplaats kiest u hoe het is opgemeten (meetlint, laserafstandsmeter, scan, opmeting) en klikt u op {{ui:Markeren als veldgecontroleerd (LOD 500)}}.
5. Met {{ui:Markeren als niet gecontroleerd}} en {{ui:Markering verwijderen}} gaat u terug. Elke klik is één stap die u ongedaan kunt maken, voor de hele selectie.

Om een selectie snel te markeren: {{ui:Hulpmiddelen}} › {{ui:Markeren als gecontroleerd}} (getypt: `MARKCHECKED`) markeert die als door u gecontroleerd, vandaag.

## Wat u zou moeten zien

- In de plattegrond heeft een niet-gecontroleerd element een gestippeld kader en een "?"; een veldgecontroleerd element heeft een vinkje. Schakel {{ui:Toon verificatiemarkeringen in de plattegrond}} in het onderdeel {{ui:Controle}} uit om ze te verbergen.
- {{ui:Staten}} › {{ui:Verificatie}} toont elk gemarkeerd element met zijn niveau, status, wie, wanneer, hoe en waar het vandaan komt.
- De controle toont niet-gecontroleerde elementen en telt een veldgecontroleerd element als LOD 500. Zie [Het model controleren](topic:audit-the-model).

## Vanuit een scan

Wanneer u een scan met het model vergelijkt, markeert {{ui:Overeenkomende elementen markeren als veldgecontroleerd}} elk element dat de scan als gebouwd heeft gezien binnen de tolerantie, met de methode "scan" en de tolerantie in de notitie. Zie [Een scan met het model vergelijken](topic:compare-scan-with-model).

:::warning
Die vergelijking koppelt het kader van elk element aan scanpunten. Het is geen opmeting. Gebruik het voor elementen die u ook zelf hebt bekeken.
:::

## Het as-built-model en het opleveringspakket

{{ui:Opleveringspakket samenstellen}} op het tabblad {{ui:Assets}} zet het as-built-model in het zipbestand, met:

- een vermelding op het project van hoeveel elementen veldgecontroleerd, gecontroleerd, niet-gecontroleerd en ongemarkeerd zijn;
- `as-built/verified-elements.csv`: elk element en elke ruimte met hun status, wie, wanneer en hoe;
- `as-built/as-built-drawings.pdf`: de tekenset zoals die nu is;
- het wijzigingslogboek van de tekeningen, wanneer het model uitgegeven sets heeft.

Zie [Assets en onderhoud](topic:assets-and-maintenance).

## Hoe het in de IFC wordt bewaard

Elk gemarkeerd element draagt de eigenschapsset `CadCraft_Verification`: State, By, On, Method, Source, Note en LevelOfDevelopment (`LOD 500` terwijl het veldgecontroleerd is). Het zijn gewone tekst-eigenschappen, zodat andere programma's ze tonen, en Zoeken, Kleur op eigenschap en staten per label ze kunnen gebruiken. Het as-built-overzicht is de eigenschapsset `CadCraft_AsBuilt` op het project. Een element zonder die set is niet op de bouwplaats opgemeten.

## Volgende

- [Muren uit een set plattegronden](topic:walls-from-plans)
- [Het model controleren](topic:audit-the-model)
