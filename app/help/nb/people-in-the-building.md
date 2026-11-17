---
title: Før personer gjennom bygningen
summary: En evakuering eller en vanlig dags ankomster gjennom rommene, dørene og trappene dine, med køer der bygningen smalner, den lengste gangveien til en utgang fra hvert rom, og funnene som Problemer. En grov folkemodell for designbeslutninger, ikke et brannsikkerhetssertifikat.
keywords: personer, evakuering, rømning, flukt, utgang, gangavstand, kø, folkestrøm, flyt, dørbredde, trapper, ankomster, flaskehals, simulering, beboere, fotgjenger, hva hvis, blokkert dør
from: 84aa8920
---

{{ui:Personer i bygningen}}-seksjonen i venstre panel fører personer gjennom rommene, dørene og trappene i den åpne IFC-modellen. Ingenting i modellen endres, og ingenting lastes opp.

:::warning
Dette er **et designhjelpemiddel, ikke et brannsikkerhetssertifikat**. Det kjenner ikke til brann, røyk, panikk, bevegelseshemninger eller hva en forskrift krever av deg. Begrensningene er dine: den lengste gangveien til en utgang og tiden som er til rådighet, er tall du skriver inn, og ingen av dem er forutsatt.
:::

## Kjør den

1. Åpne en modell med lukkede rom og dører. En dør med et rom bare på den ene siden er en utgang; en dør mellom to rom forbinder dem; en trapp forbinder rommene i endene sine.
2. Velg **Evakuering** (alle går til en utgang), **Ankomster** (alle kommer inn og går til et rom) eller **Utveksling** (personene i rommene går ut mens like mange kommer inn), og gulvarealet per person. Rom med navn som gang, trapp, foaje eller toalett har ingen personer.
3. Klikk {{ui:Kjør}}. Du får tiden da den siste personen er ute (og når halvparten og ni av ti er det), køen ved hver dør og trapp, rommet med lengst gangvei, og en plan som spiller av kjøringen.

## Hva-hvis

Kryss av {{ui:Stengt}} på en dør i tabellen og kjør på nytt: folk finner en annen vei, eller rommene uten vei ut listes som feil. En dør dobbelt så bred tømmer et rom mye raskere; tabellen viser hvor køene er.

## Hvordan det fungerer

Hvert rom er et rutenett, så folk går rundt hjørner, ikke gjennom vegger. Hastigheten avtar når et rom fylles (S = 1.4 (1 − 0.266 D) m/s, D i personer per m²). En dør slipper gjennom 1.3 personer per sekund for hver meter av sin bredde, minus 150 mm på hver side; en trapp 1.0 og tregere gange. Personer venter i en kø etter tur. Et kjørenummer gjentar nøyaktig den samme kjøringen.

Assistenten kan kjøre det samme: be om en evakuering, eller den lengste gangveien til en utgang fra hvert rom.

## Personer i hvert rom

Åpne {{ui:Personer i hvert rom}} for å skrive inn et tall for ethvert rom. En tom boks bruker tallet for gulvareal (vist i grått); 0 tømmer et rom. Tallene dine brukes til kjøringen og lagres i denne nettleseren.

## Motstrøm ved dører

I **Utveksling** møtes folk som går ut og folk som kommer inn ved de samme dørene. Når en dør slipper en person den andre veien like etter den siste personen, beholder den en del av sin hastighet (0.8 her; en antakelse, siden publiserte verdier varierer), og tabellen teller retningsskiftene. En dør som skifter retning ofte, listes under {{ui:Problemer}} som en merknad.

## Trapper og repos

Hvert repos i en trapp koster en gående ett sekund å snu (en antakelse). En rett trapp har ingen; en L- eller U-trapp har ett. Trappens hastighet kommer fortsatt fra bredden på løpet.

## I 3D-visningen

Kryss av {{ui:Vis personene i 3D-visningen}}, så vises de gående som figurer i modellen, fargelagt etter hva de gjør, og de beveger seg når du spiller av kjøringen. Ingenting legges til i modellen.
