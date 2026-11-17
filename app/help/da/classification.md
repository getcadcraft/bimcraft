---
title: Klassifikationskoder (Uniclass, OmniClass, UniFormat)
summary: Giv hvert element og hver type en klassifikationskode, vælg hvilke systemer et projekt bruger, søg i de Uniclass-tabeller, der følger med appen, indlæs dit kontors egne licenserede tabeller, og vis koderne i lister. Koderne skrives ind i IFC-filen til anden software.
keywords: klassifikation, klassificér, kode, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabel, elementkode, typekode, standardkode, IfcClassification, IfcClassificationReference, cobie, listekolonne, csv, licens, license
from: 222b94cd
---

## Hvad du skal gøre

Sæt en klassifikationskode på vægge, gulve, tage, døre, vinduer og alt andet i modellen, i op til tre systemer side om side: Uniclass, OmniClass og UniFormat. Andre fag og anden software er afhængige af koden, ikke af navnet, så koderne gemmes i IFC-filen som klassifikationsreferencer, som ethvert BIM-program kan læse.

## Giv et element en kode

1. Vælg et element (eller flere) og åbn **Egenskaber**. Åbn afsnittet {{ui:Klassifikation}}.
2. Skriv koden i feltet for dens system og tryk Enter. Med en kodeliste indlæst skriver du en del af en kode eller et par ord (»curtain wall«) og vælger blandt matchene: kodens titel udfyldes for dig.
3. {{ui:Gælder for}} siger, hvor koden går hen: **Dette element** eller **Dens type (hvert element af typen)**. En kode på en vægtype læses af hver væg af den type, også dem du tegner senere.
4. {{ui:Ryd}} fjerner en kode.

Under hver kode siger afsnittet, hvor den kommer fra: sat på dette element, fra dets type eller projektets standard for dens klasse. Et elements egen kode vinder altid over typens, og typens over en standard. Når flere elementer er valgt, betyder en boks, der siger »varies«, at de ikke deler én kode; skriver du en, gives den til alle. Hver ændring er ét fortrydelsestrin.

Koden kan altid skrives, uanset om en liste er indlæst. Hvis den ikke ligner en kode i det system, eller ikke står på den indlæste liste, siger et hint det, og koden beholdes, som du skrev den.

## Vælg projektets systemer

Åbn **Data** på modellinjen og vælg {{ui:Klassifikation}} (eller {{ui:Projektklassifikation…}} i afsnittet Egenskaber).

- Sæt flueben i de systemer, dette projekt bruger. Egenskaber viser så kun dem.
- **Uniclass**: tabellerne Elements/ functions (EF), Systems (Ss) og Products (Pr) følger med appen. De er © NBS, licenseret under Creative Commons Attribution-NoDerivatives 4.0, og videregives uændret. Dialogen viser hver tabels udgave og den dag, den blev læst. De er ikke de nyeste tabeller: udgiveren udgiver nye hvert kvartal på sit eget websted.
- **OmniClass** og **UniFormat**: ingen kodeliste følger med appen, da udgiveren ikke tillader tabellerne at blive videregivet uden licens. Skriv en vilkårlig kode, eller indlæs dit kontors egen licenserede tabel.
- {{ui:Indlæs en tabel (CSV)…}} læser dit kontors egen tabel fra en CSV-fil med en kodekolonne og en titelkolonne (en overskriftsrække med navnene Code, Number eller Identifier og Title, Name eller Description findes selv; uden den bruges de to første kolonner). Tabellen bliver i denne browser og lægges aldrig i projektfilen. Kun de koder, du tildeler, gemmes i filen. Du kan indlæse en nyere Uniclass-tabel på samme måde.
- {{ui:Giv elementer en standardkode efter deres klasse}} giver hver væg, hvert gulv, tag, dør, vindue, trappe, rampe, søjle, bjælke og møbel en startkode fra tabellen Elements/ functions, når det ikke har en egen. Elementer, du tegner bagefter, får den også.
- {{ui:Vis koderne som kolonner i listerne}} tilføjer én kolonne pr. system til listerne Døre, Vinduer, Vægge efter type og Rum samt deres CSV. En række med flere elementer viser »varies«, når deres koder er forskellige.

## Godt at vide

- Standardkoderne er CadCraft's eget startvalg, ikke udgiverens, og de er ikke kontrolleret af en praktiker. Kontrollér dem mod dit projekts standard.
- I filen er en standard en rigtig klassifikation, markeret med relationsnavnet »CadCraft default«, og den forsvinder, så snart elementet eller dets type får en egen kode.
- Koder, en importeret fil allerede har, læses og vises, uanset hvilken stavemåde det andet program brugte for systemets navn. Koder fra andre systemer (et kontors eget) listes og lades være.
- Koderne læses tilbage, når filen åbnes igen, her eller i et andet program. De medtages også i IFC5-alpha-eksporten (IFCX), når den laboratorieindstilling er slået til, undtagen en kode sat på et tag.
- Ikke lavet endnu: et træ til at gennemse en tabel niveau for niveau, koder på etager og rum som projektstandarder, og kontrol af en kode mod den udgave, filen angiver.
