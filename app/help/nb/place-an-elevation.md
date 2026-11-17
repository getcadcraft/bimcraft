---
title: Plasser en fasade og åpne visningen
summary: Plasser en fasademarkør på plantegningen, pek den dit den skal se, og finn så tegningen i prosjektleseren, rediger i den og legg den på et ark. Steg for båndoppsettene og for det klassiske oppsettet.
keywords: fasade, fasadevisning, fasademarkør, fasadeetikett, plasser en fasade, ny fasade, lag en fasade, ytre fasade, sidevisning, frontvisning, visning fra et punkt, hvor er fasaden min, åpne fasade, fasade på et ark, snu fasade, gi nytt navn til fasade, nordfasade, flislegg visninger, del visning, plan og 3D side om side
from: a7cfd2b9
---

## Hva du skal gjøre

Lag en fasade selv: en tegning av bygningen sett fra et punkt du velger, og i den retningen du velger. Det tar to klikk på en plantegning. Tegningen blir deretter listet sammen med bygningens øvrige fasader.

:::note
De fire sidene finnes allerede. Hver bygning har nord-, øst-, sør- og vestfasade i {{ui:Prosjektleser}} under {{ui:Fasader}}, uten at du plasserer noe. Plasser en egen når du vil ha en visning fra et annet sted: rett mot en skrå fløy, fra innsiden av en gårdsplass eller av én vegg inne i et rom.
:::

## Hvor verktøyet er

- Båndoppsett: {{ui:Visning}} › **Opprett** › {{ui:Kote}}.
- Klassisk oppsett: slå på {{ui:Tegn}}, deretter {{ui:Bygg}} › {{ui:Kote}}.
- Alle menystiler: kommandoen heter Kote. Kommandopaletten finner den, og kommandolinjen tar ELEVATION.

## Steg

1. Velg {{ui:Kote}}. En fasademarkør plasseres på en plantegning, så hvis du var i 3D-visningen, viser BimCraft planen for etasjen du var i. Pekeren sier **Klikk der fasademarkøren står**.
2. Klikk der visningen tas fra. For en ytre fasade klikker du utenfor bygningen, et lite stykke fra veggen du vil se.
3. Pekeren sier nå **Klikk slik den ser ut**. Flytt mot bygningen: en pil viser retningen, og den korte linjen over det første klikket er kanten visningen ser fra. Klikk.
4. En sirkel med et nummer og en peker vises på planen. Det er fasademarkøren. Den første er 1, den neste 2.
5. Trykk Esc for å avslutte, eller fortsett og plasser en til.

Å plassere en markør er ett steg: {{key:Mod+Z}} angrer den.

## Åpne tegningen

Plantegningen blir stående foran deg etter det andre klikket. Tegningen finner du i {{ui:Prosjektleser}}:

1. Åpne {{ui:Fasader}}. Din står etter de fire sidene som **Fasade 1**.
2. Klikk blyantknappen {{ui:Rediger i denne visningen}} på raden for å se tegningen og arbeide i den: flytt vegger, dører, vinduer og nivåer, og legg til merknader og mål. Se [Rediger i fasader og snitt](topic:edit-in-elevations).
3. Klikk på selve raden for å åpne tegningssettet, eller legg visningen til på et ark du lager selv. Se [Visninger og ark](topic:views-and-sheets).

I det klassiske oppsettet ligger prosjektleseren i venstre panel når {{ui:Tegn}} er på. I båndoppsettene er den fanen {{ui:Prosjektleser}} under Egenskaper.

## Hva visningen viser

- Alt foran markøren, så langt bygningen går. Ingenting bak den.
- Nivåene, med navn og høyder.
- Hvis markøren står inne i bygningen, kuttes det den står i der, slik et snitt kutter. For en ren ytre fasade står du utenfor.

## Endre den

Velg markøren på planen (klikk sirkelen med {{ui:Velg}}). Egenskaper har:

- {{ui:Etikett}}: nummeret eller et navn du selv velger, opptil 8 tegn.
- {{ui:Snu visningen}}: se motsatt vei fra samme sted.
- {{ui:Se så langt som}}: hvor langt foran markøren visningen rekker. 0 viser alt.

Trykk Delete for å fjerne markøren og tegningen. Angre legger begge tilbake.

:::tip
For å se planen og 3D-visningen samtidig mens du arbeider, bruk {{ui:Visning}} › **Vinduer** › {{ui:Flislegg visninger}} i båndoppsettene, eller {{ui:Del}} i det klassiske oppsettet. Et klikk på en visningsfane går tilbake til én visning.
:::

## Begrensninger

- En markør kan ikke dras eller snus på planen ennå. Slett den og plasser den på nytt, eller bruk {{ui:Snu visningen}}.
- I listen over visninger du kan legge til på et ark, er en egen fasade listet sammen med snittene.
- Dør- og vindusetiketter tegnes på de fire sidefasadene, ikke på en du har plassert.

## I IFC

Markøren lagres i filen som en IfcAnnotation med navnet "Elevation 1" og objekttypen "Elevation marker", i etasjen den ble plassert i. Et annet program viser den som en merknad. Selve tegningen lages av BimCraft fra modellen hver gang.
