---
title: Sjakter og åpninger gjennom dekker
summary: En sjakt er én kontur som kutter alle dekker, himlinger og tak mellom to nivåer. En vertikal åpning kutter ett av dem. Veggåpning kutter en vegg.
keywords: sjakt, heissjakt, trappeåpning, opptrinn, vertikal åpning, gulvåpning, himlingsåpning, takåpning, takluke-åpning, hull i dekke, veggåpning, IfcOpeningElement, fradrag, nettoareal
from: 8e9e1641
---

## Hva du gjør

Kutt en heissjakt gjennom en bygning med én skisse, kutt et hull i ett dekke, og les hva som er tatt ut av arealene.

## Hvor verktøyene er

- Båndoppsett: {{ui:Arkitektur}} › **Åpning** › {{ui:Sjakt}}, {{ui:Vertikal åpning}} og {{ui:Veggåpning}}.
- Klassisk oppsett: Tegnlinjen › {{ui:Rom}}-menyen (Sjakt, Vertikal åpning) og › {{ui:Vegger}}-menyen (Veggåpning).

## En sjakt

1. Åpne plantegningen for nivået sjakten starter på. Velg {{ui:Sjakt}}.
2. Velg {{ui:Fra nivå}} og {{ui:Til nivå}} i raden, og forskyvninger hvis den starter eller slutter over eller under dem.
3. Klikk på hjørnene i konturen. Klikk første hjørne igjen, dobbeltklikk eller trykk Enter for å fullføre.
4. Alle dekker, himlinger og tak mellom de to høydene kuttes. Statuslinjen viser hvor mange.

En sjakt er ett objekt. Velg konturen på et hvilket som helst nivå den går gjennom: Egenskaper viser navn, nivåer og forskyvninger, hva den kutter og arealet som er fjernet. Endrer du den, følger alle åpninger med. Sletter du den, forsvinner alle åpninger. Hver endring er ett steg som kan angres.

Den fortsetter å kutte: et dekke som lages senere mellom nivåene, kuttes uten at det må bes om det, og et dekke du sletter, slippes.

Dekket sjakten står på, kuttes ikke (toppen er bunnen). Gi bunnen en negativ forskyvning for å kutte det også. Gi toppen en positiv forskyvning for å gå gjennom taket.

## En vertikal åpning

1. Velg {{ui:Vertikal åpning}}. Velg i raden hva som skal kuttes: dekket, himlingen eller taket.
2. Klikk på hjørnene i konturen, og fullfør som ovenfor.
3. Dekket, himlingen eller taket på dette nivået under konturen kuttes. Den tilhører det ene elementet: slett dekket, så forsvinner åpningen med det.

## En veggåpning

{{ui:Veggåpning}} er verktøyet i [Form en vegg](topic:wall-shape): klikk på en vegg i plantegningen, eller på to hjørner på flaten i 3D.

## Mengder

Etter måleregelen for dekker er et elements nettoareal bruttoarealet minus det som er kuttet ut av det. En sjakt eller vertikal åpning er et fradrag på hvert dekke og hver himling den kutter. Tabellene for dekker og overflater og IFC-mengdene viser de samme tallene. På et tak er fradraget takflatens areal: planarealet delt på cosinus av takvinkelen.

En kontur som stikker utenfor kanten, gir bare fradrag for den delen som ligger på elementet.

## Hvis ingenting kuttes

En sjakt uten noe i veien lages likevel, og det sies fra om det: den vil kutte det som bygges der senere. En vertikal åpning trenger noe under seg. Uten noe der sier statuslinjen fra om det, og ingenting lages.

## I IFC

Hvert kutt er et IfcOpeningElement med IfcRelVoidsElement til elementet det kutter, slik at alle IFC-programmer viser hullet. Et tak kuttes flate for flate. Selve sjakten er en IfcGroup av åpningene sine.

## Ikke bygget ennå

- Buede konturer.
- Veggene i en sjakt: tegn dem med veggverktøyet.
- Redigering av konturen ved å dra i hjørnene (endre den i Egenskaper, eller slett og tegn på nytt).
- Egenskapene til et tegnet dekke viser bare arealet minus egne åpninger. Tabellene og IFC-mengdene inkluderer sjaktens.

Se også [Rom og romskillere](topic:rooms-and-separators).
