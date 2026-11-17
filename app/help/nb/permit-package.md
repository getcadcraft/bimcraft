---
title: Søknadspakken og myndighetens støttedokumenter
summary: Samle regelkontrollen, de sannsynlige merknadene, modellen og myndighetens liste over støttedokumenter i én zip-fil, med hvert dokument koblet til arket eller tabellen som oppfyller det.
keywords: godkjenningsprosess, innleveringsformat, påkrevde tegninger, arkstørrelse, filformat, kopier, regelpakke, tillatelse, søknadspakke, byggesøknad, plangodkjenning, lovpålagt innlevering, støttedokumenter, sjekkliste, myndighet, kommune, plansøknad, merknader, Byggeforskrifter, manglende dokumenter
from: 47dd77ee
---

## Hva du skal gjøre

Lag én zip-fil for en lovpålagt innlevering (når myndighetens liste kommer fra en regelpakke, inneholder den også godkjenningstrinnene og innleveringsformatet): et forsideark, merknadene en saksbehandler sannsynligvis vil gi (skrevet ut fra kontrollene, ikke gjettet), regelrapporten når tillegget Byggeforskrifter er på, modellen, og listen over støttedokumenter din godkjennende myndighet ber om.

Dette er en veiledning laget fra modellen. Den ansvarlige prosjekterende og myndigheten avgjør hva som kreves og hva som godtas.

## Steg

1. Med en modell åpen, åpne {{ui:Søknadspakke}} i venstre panel.
2. Skriv prosjektets navn, adresse og søker, og list opp arkene og skjemaene dine, ett per linje.
3. Under {{ui:Støttedokumenter}} velger du {{ui:Myndighetens liste}}. Listene kommer fra regelpakker: legg til tillegget Byggeforskrifter og kryss av pakken for ditt sted i Innstillinger › Byggeforskrifter (en pakke kan inneholde reglene, en godkjenningsprosess, et innleveringsformat, tegningskonvensjoner og standardmerknader). Den generelle listen fungerer uten.
4. Les listen. Hvert dokument er {{ui:Koblet}} (med arket og hvorfor), {{ui:Levert av deg}}, {{ui:Gjelder ikke}} eller {{ui:Mangler}}.
5. For et papir du selv leverer (et skjema, et grunnbrev, en gebyrkvittering) velger du {{ui:Levert av meg}}. For et punkt merket «hvis det gjelder» som ikke gjelder, velger du {{ui:Gjelder ikke her}}. For å koble et dokument til et ark selv, velg arket.
6. Åpne {{ui:Godkjenningsprosess}} og {{ui:Innleveringsformat}} under listen for å lese trinnene og hva du skal levere (arkstørrelser, filformater, kopier). Et gebyr eller en tidsramme vises bare når kildene i pakken oppgir det, med side og dato da det ble lest.
7. Klikk {{ui:Lag søknadspakken (zip)}}. Trinnene og formatet står også på forsiden.

## Hvordan et dokument kobles

Et dokument kobles til et ark som holder riktig type visning (en plan, en fasade, et snitt), til et ark som holder riktig tabell (dørtabellen, for en dørtabell), eller til et ark hvis tittel sier det (et ark med tittelen «Situasjonsplan»). Når modellen har radene, men ingen ark holder tabellen, eller tomten er tegnet, men ingen ark har tittel som situasjonsplan, forblir punktet manglende og sier hvorfor.

## Godt å vite

- **Ingen av myndighetenes lister er verifisert av en lokal fagperson.** Hver ble lest fra den publiserte kilden den siterer, på datoen den viser, og skrevet med våre egne ord. Krav endres: sjekk myndighetens egen gjeldende liste.
- Det settet fortsatt mangler, eller et ark som ikke har størrelsen, retningen eller målestokken pakken krever, vises i listen {{ui:Problemer}} som en merknad. Merknader er råd: de stopper aldri pakken.
- Manglende dokumenter stopper aldri pakken. De listes på forsiden og i `04-supporting-documents.csv`.
- Listene er data, ikke kode, inne i regelpakker: Sør-Afrika (National Building Regulations, regel A2), Cape Town (med regionen Sør-Afrika lagt til fra biblioteket), England (nasjonale krav til informasjon), Portland i Oregon, en oppdiktet undervisningspakke, og en generell liste som ikke tilhører noen myndighet. Hvem som helst kan skrive en pakke for sitt eget sted.
- Valgene dine lagres i modellen, så de er der når du åpner den igjen, og hvert er ett trinn du kan angre.

Se også [Ark](topic:sheets) og [Tomten, bygningen på den og nivåene](topic:site-building-and-levels).
