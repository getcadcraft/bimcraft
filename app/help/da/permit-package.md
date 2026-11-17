---
title: Byggetilladelsespakken og myndighedens støttedokumenter
summary: Saml regelkontrollen, de sandsynlige gennemgangskommentarer, modellen og myndighedens liste over støttedokumenter i én zip-fil, hvor hvert dokument er koblet til det ark eller den liste, der opfylder det.
keywords: godkendelsesproces, indleveringsformat, påkrævede tegninger, arkstørrelse, filformat, kopier, regelpakke, tilladelse, tilladelsespakke, byggesag, planbgodkendelse, lovpligtig indsendelse, støttedokumenter, tjekliste, myndighed, kommune, gennemgangskommentarer, nationale byggeregler, manglende dokumenter
from: 47dd77ee
---

## Hvad du gør

Byg én zip-fil til en lovpligtig indsendelse (når myndighedens liste kommer fra en regelpakke, indeholder den også godkendelsestrinene og indleveringsformatet): en forside, de kommentarer en gennemganer sandsynligvis vil komme med (skrevet ud fra kontrollerne, ikke gættet), regelrapporten, når tillægget Byggeforskrifter er slået til, modellen og listen over støttedokumenter, som din godkendende myndighed beder om.

Dette er en vejledning, lavet ud fra modellen. Den registrerede fagperson og myndigheden afgør, hvad der kræves, og hvad der accepteres.

## Trin

1. Med en model åben åbner du {{ui:Byggetilladelsespakke}} i venstre panel.
2. Skriv projektets navn, adresse og ansøger, og list dine ark og blanketter, én pr. linje.
3. Under {{ui:Støttedokumenter}} vælger du {{ui:Myndighedens liste}}. Listerne kommer fra regelpakker: tilføj tillægget Byggeforskrifter og sæt flueben ved pakken for dit sted under Indstillinger › Byggeforskrifter (en pakke kan indeholde reglerne, en godkendelsesproces, et indleveringsformat, tegnekonventioner og standardnoter). Den generelle liste virker uden det.
4. Læs listen. Hvert dokument er {{ui:Koblet}} (med arket og hvorfor), {{ui:Leveret af dig}}, {{ui:Gælder ikke}} eller {{ui:Mangler}}.
5. For et papir, du selv leverer (en blanket, et tingbogsdokument, en gebyrkvittering), vælger du {{ui:Leveret af mig}}. For et punkt markeret "hvis det gælder", der ikke gør det, vælger du {{ui:Gælder ikke her}}. For selv at koble et dokument til et ark vælger du arket.
6. Åbn {{ui:Godkendelsesproces}} og {{ui:Indleveringsformat}} under listen for at læse trinnene og hvad du skal aflevere (arkstørrelser, filformater, kopier). Et gebyr eller en tidsfrist vises kun, når pakkens kilde angiver det, med side og den dato, den blev læst.
7. Klik på {{ui:Lav byggetilladelsespakken (zip)}}. Trinene og formatet står også på forsiden.

## Sådan kobles et dokument

Et dokument kobles til et ark, der har den rette slags visning (en etageplan, en facade, et snit), til et ark, der har den rette liste (dørlisten, for en dørliste), eller til et ark, hvis titel siger det (et ark med titlen "Situationsplan"). Når modellen har rækkerne, men intet ark har listen, eller stedet er tegnet, men intet ark er titlet som situationsplan, forbliver punktet manglende og siger hvorfor.

## Godt at vide

- **Hver myndighedsliste er ikke verificeret af en lokal fagperson.** Hver er læst fra den offentliggjorte kilde, den henviser til, på den dato den viser, og skrevet med vores egne ord. Krav ændrer sig: kontrollér myndighedens egen aktuelle liste.
- Det, sættet stadig mangler, eller et ark, der ikke har den størrelse, retning eller målestok, pakken kræver, vises på listen **Problemer** som en note. Noter er råd: de stopper aldrig pakken.
- Manglende dokumenter stopper aldrig pakken. De listes på forsiden og i `04-supporting-documents.csv`.
- Listerne er data, ikke kode, inde i regelpakker: Sydafrika (National Building Regulations, regulation A2), Cape Town (med regionen Sydafrika tilføjet fra biblioteket), England (nationale informationskrav), Portland i Oregon, en fiktiv undervisningspakke og en generel liste, der ikke er nogen myndigheds. Hvem som helst kan skrive en pakke til deres eget sted.
- Dine valg gemmes i modellen, så de er der, når du åbner den igen, og hvert er ét trin, du kan fortryde.

Se også [Ark](topic:sheets) og [Byggegrunden, bygningen på den og dens niveauer](topic:site-building-and-levels).
