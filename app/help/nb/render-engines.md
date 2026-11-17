---
title: Velg hvilket program som tegner bildet
summary: Motorvalget i dialogboksen Render: våre egne to motorer, andre programmer i CadCraft Studio, og hva nettet gjør i stedet.
keywords: render, motor, renderer, rendermotor, plugin, studio, eksternt program, tegnet av, kø, tillegg-motor
from: 44a1ef5e
---

{{ui:Render}} har et valg for **Motor** over Modus. Våre egne to motorer finnes alltid og fungerer overalt. Tillegg kan legge til flere, og i CadCraft Studio har listen også programmene som tar over scenen.

| Motor | Hva den gjør | Hvor |
|---|---|---|
| Innebygd: Rask | Det raske stillbildet: dagslys, myke skygger, glass- og metallutseende, på sekunder | Nettleseren og Studio |
| Innebygd: Stråleføring | Lys som spretter mellom flater, på grafikkortet eller prosessoren, renderkøen og de andre datamaskinene på nettverket | Nettleseren og Studio |
| Et tillegs motor | Den tegner og gir bildet tilbake: se [Tegn bildet med et annet program](topic:render-other-program) | Nettleseren (en motor skrevet i JavaScript) eller Studio (en motor som kjører et program) |
| Et program som tar over scenen | Studio legger scenen i sin mappe og holder den oppdatert | Studio |
| Åpne i … | Lagrer scenen og åpner den i et program. Ingenting kommer tilbake: se [Åpne scenen i et annet program](topic:render-open-in) | Nettleseren lagrer filen |

## Hvordan valget virker

- Velger du Rask eller Stråleføring, endres Modus med det, og omvendt. Ingenting annet i dialogboksen endres for folk som aldri bruker en annen motor.
- En motor som ikke er tilgjengelig, står i listen med årsaken («ikke funnet», «trenger en nyere versjon»). Du kan ikke velge den. I nettleseren viser en motor som bare kjører i Studio «lagrer en fil». {{ui:Render}} lagrer da scenen og innstillingene til en fil som du tar med til det programmet.
- Valget lagres sammen med filens rendringsinnstillinger. Motoren du valgte sist, er startmotoren for filer som ikke har eget valg.
- Et bilde fra et annet program sier hvilket program som tegnet det, og versjonen, i dialogboksen og i renderkøen. Løftene på [Render](topic:render)-siden gjelder bare **våre egne** motorer. Et annet program belyser, tonelegger og prøver på sin egen måte, så to bilder av samme scene er like i kamera, sol, lamper og eksponering, men ikke piksel for piksel.

## Hva hver motor får

Scenen går til et annet program som en **pakke**: modellen som en USD-fil (den samme filen som [Lagre som USD](topic:usd) skriver), og en innstillingsfil. Den holder det en USD-importør ikke kan stole på: de nøyaktige materialverdiene, lampene som er på med effekt og lysprofiler, solen, himmelen, eksponeringen og kameraet slik dialogboksen ville tegnet det. Ingenting lastes opp noe sted.

## Renderkøen

Et bilde for et annet program kan vente i [renderkøen](topic:render#the-render-queue) på samme måte som våre egne. Jobben husker hvilken motor den er for.
