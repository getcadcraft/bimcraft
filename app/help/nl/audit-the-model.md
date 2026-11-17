---
title: Het model controleren: ruimten, tags, LOD, clashes en interfaces
summary: Voer klaargezette controles uit op naamloze ruimten, ontbrekende tags, elementen onder het ontwikkelingsniveau dat de projectfase vraagt, clashes tussen disciplines en LOD 350-interfaces. Alleen advies: er wordt niets geblokkeerd.
keywords: controle, check, naamloze ruimte, ontbrekende tag, markering, lod, ontwikkelingsniveau, mijlpaal, fase, clash, discipline, coördinatie, interface, lod 350, opening, latei, ligger, doorvoer, mantelbuis, leiding, kanaal, problemen, controlerapport, advies
from: cc83a14d
---

## Wat u gaat doen

Bekijk het hele model in één keer voordat u het uitgeeft. De controle voert klaargezette regelsets uit en zet wat zij vinden als advies in de lijst {{ui:Problems}}. Er wordt niets geblokkeerd: u lost een bevinding op, of accepteert haar met een reden, zoals elk ander probleem.

## Stappen

1. Open {{ui:Model checks}} › {{ui:Audit}} in het linkerpaneel, of {{ui:Tools}} › {{ui:Audit the model…}} (getypt: `AUDIT`).
2. Kies de {{ui:Project stage}}. Het is dezelfde fase als in de tekeningdetails.
3. Vink de regelsets aan die u wilt uitvoeren.
4. Klik op {{ui:Run the audit}}.
5. Lees de regel voor elke regelset, en open daarna {{ui:Open the Problems list}}. Een klik op een bevinding kiest haar element.
6. {{ui:The check report}} downloadt het rapport: elke bevinding, wie wat heeft geaccepteerd en waarom, en de regelsets die zijn uitgevoerd.

## De regelsets

- **Naamloze ruimten**: een ruimte zonder naam, of een ruimte die nog heet zoals het programma haar noemde ("Room 3").
- **Ontbrekende tags**: een deur of raam zonder markering, een ruimte zonder nummer, een elektrisch apparaat zonder tag.
- **Elementen onder het LOD van de fase**: elke wand, vloer, plafond, dak, deur en raam waarvan het LOD lager is dan wat de fase vraagt. Een element leest de LOD-tag van zijn type; een op de bouwplaats geverifieerd element is LOD 500. Elementen zonder tag worden in één opmerking geteld, omdat ze niet gecontroleerd kunnen worden.
- **Clashes tussen disciplines**: elementen van twee disciplines (architectuur, constructie, werktuigbouw, sanitair, elektra, op IFC-klasse) die in elkaar lopen. Een dak dat op zijn muren rust, wordt niet geteld.
- **LOD 350-interfaces**: elke deur en elk raam zit in een opening van zijn wand, de opening past in de wand, twee openingen overlappen niet, een opening die breder is dan de grens heeft een latei of ligger (een element erboven, of een opmerking op de deur of het raam), en een leiding, kanaal of kabelgoot die een wand of vloer kruist, heeft daar een opening. Bevindingen worden geteld per paar disciplines.
- **Herkende elementen die niemand heeft gecontroleerd**: wanden, deuren, ramen en ruimten die uit een PDF, een scan of een tekening zijn gelezen en nog niet geverifieerd zijn. Zie [Elementen markeren als gecontroleerd of op de bouwplaats geverifieerd](topic:verification).

## Het LOD dat elke fase vraagt

Open {{ui:The LOD each stage asks for}} om de tabel te zien of te wijzigen.

:::note
De tabel en de lateibreedte zijn de startwaarden van CadCraft. Ze komen niet uit een standaard: een project stelt het LOD per fase in in zijn BIM-uitvoeringsplan. Stel ze in op de uwe. Een kantoor kan de tabel voor iedereen instellen in Instellingen › Default Policies › Audit; een wijziging in het gedeelte Audit blijft op deze computer bewaard.
:::

## Goed om te weten

- Een latei kan worden genoteerd in plaats van gemodelleerd: kies de deur of het raam en vul {{ui:Lintel or header note}} in onder {{ui:Verification}} in Eigenschappen.
- Een leiding die door een echte opening gaat, kruist geen oppervlak en wordt niet gemeld. Een leiding die recht door de wand is gemodelleerd, wel.
- De clashcontrole stopt na enkele seconden bij een zeer groot model, en zegt dat. Voor een volledige controle van twee gekozen sets gebruikt u [Clashes tussen elementen zoeken](topic:clash-check).
- Voer de controle opnieuw uit nadat u het model hebt gewijzigd. Geaccepteerde bevindingen blijven geaccepteerd zolang hun nummers niet veranderen.
- Het leest het model. Het vervangt geen coördinatiebeoordeling door de verantwoordelijke personen.

## Volgende

- [Veelvoorkomende problemen in een model controleren](topic:model-checks)
- [Clashes tussen elementen zoeken](topic:clash-check)
- [Elementen markeren als gecontroleerd of op de bouwplaats geverifieerd](topic:verification)
