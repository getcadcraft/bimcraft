---
title: Prosjektfaser fra oppdragsbeskrivelse til byggeplassinstrukser
summary: Start fra en oppdragsbeskrivelse med målarealer, og se om de er oppfylt eller mangler mens du tegner, sammenlign konseptalternativer mot den, koble spesifikasjoner og detaljer til typene, gjennomgå verkstedtegninger og registrer byggeplassinstrukser mot elementer.
keywords: oppdragsbeskrivelse, romprogram, målareal, oppfylt, mangler, rom, konseptalternativer, alternativer, volumstudie, budsjett, spesifikasjon, spek, detalj, konstruksjonsdetalj, type, verkstedtegning, gjennomgang, godkjenn, send inn på nytt, byggeplassinstruks, revisjon, årsak, felt, fase
from: 0a49b852
---

## Hva du gjør

Arbeid gjennom et prosjekts faser i ett panel: skriv kundens oppdragsbeskrivelse som rom med målarealer, sammenlign konseptalternativer mot den, behold spesifikasjonen og konstruksjonsdetaljene sammen med typene de hører til, gjennomgå verkstedtegninger når de kommer tilbake fra fagene, og registrer byggeplassinstrukser mot elementene de endrer.

## Steg

1. I venstre panel åpner du **Prosjektfaser**, og deretter **Oppdragsbeskrivelse**.
2. Lim inn rommene, ett per linje: `Living; 1; 30` betyr ett rom på 30 m². Antallet kan utelates. Velg **Legg til rommene**. Fyll ut kunde, tomt, budsjett, toleranse og program, og velg deretter **Lagre oppdragsbeskrivelsen**.
3. Tegn vegger. Hvert rom som veggene danner og som har navnet til et oppdragsrom, telles med (et tall etter navnet, som «Soverom 2», ignoreres). **Romprogram** viser **Oppfylt**, **Mangler**, **Over** eller **Ikke tegnet**, med differansen i m².
4. For å starte et nytt prosjekt på denne måten, velg **Start et nytt prosjekt fra en oppdragsbeskrivelse**. Det åpnes en ny modell, basert på en av malene dine hvis du velger en, og oppdragsbeskrivelsen legges inn som første steg.
5. Åpne **Alternativer mot oppdragsbeskrivelsen**. Hvert volumalternativ som finnes i modellen, tegnes i samme målestokk med bruttoarealet, det oppdragsbeskrivelsen krever, og hvor mange av oppdragsrommene som får plass. **Stable oppdragsrommene her** legger rommene inn i alternativets etasjer, laveste først, og sier hva som ikke får plass. Kostnad kommer bare fra prosjektets prisliste; uten en passende rad står det «Ingen sats».
6. Åpne **Typer, spesifikasjoner og detaljer**. Hver vegg-, dør-, vindu- og gulvtype viser om den har spesifikasjonstekst, hvilke detaljer som er koblet til den, og hvor spesifikasjonen, skjemaene og arkene er uenige. **Koble til en detalj** legger til en DetailCraft- eller CadCraft-fil, en adresse eller et ark i denne modellen.
7. Åpne **Verkstedtegninger**. Velg elementene verkstedtegningen dekker i modellen, og velg deretter **Motta den**. Bruk **Godkjenn**, **Godkjent med merknad** eller **Revider** med gjennomgåerens navn og merknad. **Sendt inn på nytt** lager neste revisjon av samme post og beholder gjennomgangshistorikken. Status skrives også på hvert element.
8. Åpne **Byggeplassinstrukser**. Velg elementene, oppgi årsak og hva den gjør med kostnad og tid, med egne ord, og velg **Registrer den**. Etter at en instruks er registrert, sier **Forklar endringene siden denne saken** hvilke endrede elementer en instruks dekker, og hvilke som er endret uten at noe er registrert.

## Greit å vite

- Hvert steg kan angres med ett **Angre**. Ingenting avvises: en oppdragsbeskrivelse som ikke er oppfylt, en type som ikke stemmer med teksten, eller en forfalt verkstedtegning gir en advarsel eller en merknad i **Problemer**.
- Oppdragsrommene er områder uten vegger. De har et måltall, ikke et tegnet areal, så romskjemaer og COBie teller dem ikke som tegnede rom.
- Et oppsett stabler bare rom i etasjer etter areal. Det tegner ingen vegger.
- Spesifikasjonsteksten skrives i **Dokumenter** fra modellen. Her sammenlignes den bare med modellens egne mål: ingen paragraf fra en standard skrives for deg.
- Verkstedtegninger og byggeplassinstrukser er poster i samme historikk som panelet **Saker og revisjoner**, så begge paneler viser dem.
- Status for en verkstedtegning er en egenskap for hvert element (`CadCraft_ShopDrawing`), og en byggeplassinstruks er `CadCraft_SiteInstruction`, så **Finn** og **Farge etter egenskap** kan bruke dem.
- Felt-verifiserte merker (steg 7) finnes i **Egenskaper** under **Verifisering**.
