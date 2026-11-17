---
title: Wanden uit een set plattegronden (PDF of scan)
summary: Maak van de pagina's van een PDF, of van een gescande tekening, wanden, deuren en ramen, met één niveau per pagina en de pagina bewaard onder elke plattegrond.
keywords: pdf, plattegronden, set plattegronden, scan, gescande tekening, tiff, overtrekken, wanden uit een pdf, wanden uit een scan, niveaus, pagina's, schaal, deuren, ramen, draairichting, dorpel, onderlegger
from: b70d9db7
---

## Wat u gaat doen

Start een model uit de plattegronden die u op papier hebt: een PDF (getekend als lijnen, of een scan binnen een PDF) of een scan (PNG, JPEG, TIFF met één of meer pagina's). Elke pagina wordt de wanden, deuren en ramen van één niveau.

## Stappen

1. Zet {{ui:Tekenen}} aan. Kies {{ui:Build}} › {{ui:Vanuit een tekening…}}, daarna {{ui:Kies een tekening…}} en kies de PDF of de scan.
2. **Pagina's en niveaus.** Elke pagina wordt getoond met wat het is (**lijnwerk**, of **een afbeelding (overgetrokken)**) en het niveau waar het naartoe gaat: een van de niveaus die u hebt, **een nieuw niveau boven de andere**, of **deze pagina weglaten**. Pagina's worden in volgorde aan uw niveaus gekoppeld; wijzig er elk van.
3. **Schaal.** Voor een PDF zegt u hoe hij is getekend (**1 : 100**, **1 : 50**…). Voor alles anders, of als u het niet weet, kies **vanaf een afstand die ik ken**: klik op de twee uiteinden van een maat of een schaalbalk in het voorbeeld, en typ daarna de werkelijke afstand. Alle pagina's gebruiken de ene schaal.
4. Kies het **wandtype** en de **hoogte van een nieuw niveau**. Laat **Elke pagina onder de plattegrond van zijn niveau houden** aangevinkt om elke pagina als dunne lijnen onder zijn plattegrond te zien.
5. De regel onder de keuzes zegt hoeveel wanden, deuren en ramen er worden gemaakt, en op hoeveel niveaus. Klik op {{ui:Maken}}.

## Hoe het een pagina leest

- **Wanden** komen uit paren evenwijdige lijnen tot 600 mm uit elkaar (de twee vlakken van een wand); de wand is zo dik als de opening. Arcering en letters worden weggelaten.
- **Deuren en ramen.** Een opening in een wand (500 tot 2600 mm) met een draairichting ernaast getekend, is een deur, scharnierend aan één uiteinde van de opening en openend naar de kant van de draairichting. Een opening of een wand met dorpellijnen erin is een raam. Een opening met geen van beide is een deur tot 1300 mm en een raam daarboven.
- **Een scan** wordt eerst recht gezet als die scheef is gescand (het dialoogvenster zegt dat), zwart-wit gemaakt, van vlekjes gezuiverd en overgetrokken; een **PDF-pagina die een afbeelding is**, wordt eerst getekend en daarna op dezelfde manier behandeld. Het overtrekken vindt het midden van elke lijn en past rechte lijnen en bogen erop; het gebruikt geen netwerk en geen getraind model.
- **Ruimten** volgen vanzelf uit de gesloten lussen die de wanden maken. Als de PDF tekst heeft, krijgt een ruimte haar naam uit de letters erin (de grootste; een maat, een schaal of een bladnummer is geen naam). Een scan heeft geen tekst, dus haar ruimten houden de namen die het programma ze geeft.
- **Alles wat van de pagina is gelezen, is als niet-gecontroleerd gemarkeerd**: elke wand, deur, raam en ruimte heeft een gestippeld vak en een "?" in de plattegrond totdat u het controleert. Kies wat u hebt gecontroleerd en gebruik {{ui:Tools}} › {{ui:Markeren als gecontroleerd}}. Zie [Elementen markeren als gecontroleerd of op locatie geverifieerd](topic:verification).

## Wat u ziet

- De wanden, deuren, ramen en ruimten op elk niveau, en eventuele nieuwe niveaus, allemaal als één stap: {{key:Mod+Z}} neemt alles terug.
- Elke pagina als dunne lijnen onder de plattegrond van zijn niveau, vermeld onder {{ui:Build}} › {{ui:Vanuit een tekening…}} met {{ui:Verwijderen}}.

:::note
Dit is wat de lijnen hebben opgeleverd, met de nauwkeurigheid van de pagina. Een scan kan een zwakke wand verliezen, twee wanden die heel dicht bij elkaar liggen samenvoegen, of een wand in een vlek vinden; een draaiing die de tekening niet toont, maakt van een opening een gewone deur. Controleer elk niveau tegen de pagina voordat u erop vertrouwt, en herstel wat fout is met de gereedschappen {{ui:Wand}}, {{ui:Deur}} en {{ui:Raam}}.
:::
