---
title: Projektfaser, fra byggeprogram til instrukser på byggepladsen
summary: Start fra et byggeprogram med målarealer, og se om rummene er opfyldt eller for små, mens du tegner. Sammenlign konceptvarianter med det, knyt specifikationer og konstruktionsdetaljer til typer, gennemgå værkstedstegninger og registrér instrukser på byggepladsen mod elementer.
keywords: byggeprogram, rumskema, målareal, opfyldt, for lille, rum, konceptvarianter, varianter, massing, budget, specifikation, spec, detalje, konstruktionsdetalje, type, værkstedstegning, gennemgang, godkend, send igen, instruks på byggepladsen, revision, årsag, felt, fase
from: 0a49b852
---

## Hvad du skal gøre

Arbejd gennem et projekts faser i ét panel: skriv bygherrens byggeprogram som rum med målarealer, sammenlign konceptvarianter med det, hold specifikationer og konstruktionsdetaljer knyttet til de typer, de hører til, gennemgå værkstedstegninger, når de kommer tilbage fra håndværkerne, og registrér instrukser på byggepladsen mod de elementer, de ændrer.

## Trin

1. I det venstre panel åbn **Projektfaser**, og derefter **Byggeprogram**.
2. Indsæt rummene, ét pr. linje: `Stue; 1; 30` betyder ét rum på 30 m². Antallet kan udelades. Vælg **Tilføj rummene**. Udfyld bygherre, grund, budget, tolerance og tidsplan, og vælg derefter **Gem byggeprogrammet**.
3. Tegn vægge. Hvert rum, som væggene danner, og som har byggeprogrammets rumnavn (et tal efter det, fx "Soveværelse 2", ignoreres), tælles med. **Rumskemaet** viser **Opfyldt**, **For lille**, **For stor** eller **Ikke tegnet** med forskellen i m².
4. For at begynde et nyt projekt på denne måde, vælg **Start et nyt projekt fra et byggeprogram**. Det åbner en ny model, ud fra en af dine gemte skabeloner, hvis du vælger en, og lægger byggeprogrammet ind som første trin.
5. Åbn **Varianter i forhold til byggeprogrammet**. Hver massevariant, der er gemt i modellen, vises på samme målestok med sit bruttoareal, det byggeprogrammet kræver, og hvor mange af byggeprogrammets rum der kan være plads til. **Stabl byggeprogrammet her** lægger rummene ind i variantens etager, lavest først, og siger, hvad der ikke får plads. Omkostning kommer kun fra projektets prisliste; uden en matchende række står der "Ingen sats".
6. Åbn **Typer, specifikationer og detaljer**. Hver væg-, dør-, vindues- og dæktype viser, om den har specifikationstekst, de detaljer, der er knyttet til den, og hvor specifikationen, lister og tegninger er uenige. **Knyt en detalje** tilføjer en DetailCraft- eller CadCraft-fil, en adresse eller et ark fra denne model.
7. Åbn **Værkstedstegninger**. Vælg de elementer i modellen, en værkstedstegning dækker, og vælg derefter **Modtag den**. Brug **Godkend**, **Som anført** eller **Revidér** med gennemgangens navn og note. **Sendt igen** laver den næste revision af samme post og bevarer gennemgangshistorikken. Status skrives også på hvert element.
8. Åbn **Instrukser på byggepladsen**. Vælg elementerne, angiv årsagen og, med dine egne ord, hvad den gør ved omkostning og tid, og vælg **Registrér den**. Når et emne er registreret, siger **Forklar ændringerne siden dette emne**, hvilke ændrede elementer en instruks dækker, og hvilke der er ændret uden at noget er registreret.

## Godt at vide

- Hvert trin kan fortrydes med ét **Fortryd**. Intet afvises: et byggeprogram, der ikke er opfyldt, en type, der ikke stemmer med sin tekst, eller en værkstedstegning, der er forsinket, er en advarsel eller en bemærkning under **Problemer**.
- Rummene i byggeprogrammet er rum uden vægge. De har et mål, ikke et tegnet areal, så rumlister og COBie tæller dem aldrig som tegnede rum.
- En opstilling stabler kun rum i etager ud fra areal. Den tegner ingen vægge.
- Specifikationsteksten skrives i **Dokumenter** fra modellen. Her sammenlignes den kun med modellens egne mål: ingen standards paragraf skrives for dig.
- Værkstedstegninger og instrukser på byggepladsen er poster i samme historik som panelet **Emner og revisioner**, så begge paneler viser dem.
- Status for en værkstedstegning er en egenskab for hvert element (`CadCraft_ShopDrawing`), og en instruks på byggepladsen er `CadCraft_SiteInstruction`, så **Søg** og **Farve efter egenskab** kan bruge dem.
- Felter, der er verificeret på stedet (trin 7), findes i **Egenskaber** under **Verifikation**.
