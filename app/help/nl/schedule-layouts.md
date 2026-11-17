---
title: Een staat indelen, opslaan en exporteren
summary: Groepeer een staat, geef hem subtotalen en totalen, voeg een kolom toe die uit een eigenschap wordt gelezen, sla hem op als instelling in het bestand, en exporteer hem als werkboek (.xlsx), als tekst om in een online spreadsheet te plakken, of als CSV. De kantoorstandaard vult in wat een staat niet vermeldt.
keywords: indeling van staat, groeperen op, subtotaal, totaal, koppen, kantoorstandaard, standaardbeleid, instelling, deurstaat per verdieping, brandwering, ijzerwaren, xlsx, werkboek, online spreadsheet, plakken, csv, exporteren, spreadsheet, elementen, selecteren uit staat, getal
from: 95dfd801
---

## Wat u gaat doen

Maak van een gewone staat die welke uw kantoor uitgeeft: gegroepeerd op verdieping, type of ruimte, met subtotalen en een totaal, met de kolommen die u nodig heeft, onder de eigen naam. Stuur hem daarna naar een spreadsheet. Elke rij en elk getal weet nog steeds van welke elementen het komt.

## Stappen

1. Zet {{ui:Tekenen}} aan en open **Staten** in het linkerpaneel. Kies een staat, bijvoorbeeld **Deuren**.
2. Kies boven de tabel **Groeperen op** (een kolom van de staat, zoals Verdieping of Type, of **Geen groepering**) en **Totalen** (**Geen totalen**, **Eén totaal**, of **Subtotalen en een totaal**). **Zoals ingesteld** laat de keuze aan de opgeslagen instelling of aan de kantoorstandaard.
3. Om een kolom toe te voegen die uit de elementen wordt gelezen, typt u onder de tabel een eigenschaps- of tagnaam (bijvoorbeeld `FireRating`, `Pset_DoorCommon.FireRating` of de naam van een tag, zoals `Ironmongery`) en klikt u op **Kolom toevoegen**. BimCraft leest eerst de eigen eigenschapsets van het element, daarna die van zijn type. Heeft een element nog geen waarde, dan zegt BimCraft dat. De kolom vult zich vanzelf zodra een waarde is ingesteld.
4. Typ een naam (bijvoorbeeld "Deurstaat per verdieping") en klik op **Opslaan als instelling**. De instelling wordt bewaard in het gebouwbestand en voegt zich met die naam aan de lijst Staten toe. Ze volgt elke wijziging van het model. **Deze instelling verwijderen** haalt hem er weer uit. Beide zijn één stap in Ongedaan maken.

## Klik op een getal om te selecteren waar het vandaan komt

Klik op elke rij of elk afzonderlijk getal om de elementen erachter te selecteren, in de plattegrond en in 3D:

- een rij selecteert de elementen van die rij;
- een subtotaal of totaal selecteert alles wat het optelt, en een groepskop selecteert zijn groep;
- een getal met eigen elementen selecteert die: de **Aftrekposten** van een wandtype selecteren zijn deuren en ramen, en de wandoppervlakte van een ruimte selecteert zijn wanden.

Hetzelfde werkt in een document dat uit het model is gemaakt: klik in het voorbeeld op een getal van een staat.

## Exporteren

- **Excel downloaden** slaat een .xlsx-werkboek op. Lengtes, oppervlakken, volumes en aantallen zijn echte getallen, in de eenheid die de kolom toont (voet en inch blijven tekst). Een tweede blad, **Elementen**, geeft voor elke regel de GlobalId's van de elementen erachter.
- **Kopiëren voor Google Sheets** zet de staat als tabgescheiden tekst op uw klembord. Klik in een Google Sheet op cel A1 en plak. **Een nieuw Google Sheet openen** opent `sheets.new`, het eigen adres van Google voor een lege spreadsheet, in uw eigen Google-account. BimCraft meldt u niet aan bij Google en stuurt daar niets naartoe: het plakken is aan u.
- **CSV downloaden** slaat de tabel op zoals hij op het scherm is ingedeeld.

## De kantoorstandaard

Een kantoor kan één keer vastleggen hoe de staten zijn ingedeeld. Zet de add-on **Standaardbeleid** aan ([Standaardbeleid](topic:default-policies)) en stel in **Instellingen › Globaal › Standaardbeleid › Indeling van staten (kantoorstandaard)** in:

| Beleid | Wat het doet |
|---|---|
| Staten groeperen op | Verdieping, Type, Ruimte of geen groepering, voor elke staat die zo'n kolom heeft |
| Totalen in staten | Geen totalen, één totaal aan het eind, of een subtotaal onder elke groep en een totaal |
| Titel van de staat | Een patroon, bijvoorbeeld `{project}: {schedule}` |
| Kolomkoppen | Zoals geschreven, IN HOOFDLETTERS of Met Hoofdletters |

De standaard geldt voor elke staat, wie hem ook instelt: de gewone staten in het paneel, een opgeslagen instelling, een staat die een assistent instelt, de exports en de staten in een document. Een instelling die zelf groepering, totalen of titel vermeldt, behoudt die. De standaard vult de rest aan. Het paneel zegt welke onderdelen de kantoorstandaard heeft ingesteld. Het beleid reist mee in het bestand Standaardbeleid, samen met de andere.

## Goed om te weten

- Een instelling noemt haar bronstaat en haar kolommen; ze bevat geen getallen. De getallen worden elke keer uit het model gelezen.
- Lijsten die geen rijen van elementen zijn (de wandsamenstellingen en de materiaallegenda), hebben hier geen indeling en geen export.
- Een assistent kan dit alles voor u doen: zie [Laat een AI-assistent met uw model werken](topic:assistants).
