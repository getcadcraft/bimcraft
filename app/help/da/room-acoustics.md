---
title: Tjek et rums efterklang og lyt til det
summary: Efterklangstid i oktavbånd for hvert rum (Sabine og Eyring) ud fra dets størrelse og overflader, et mål du selv sætter, og en stemme, et klap eller musik afspillet gennem en beregnet impulsrespons for rummet.
keywords: akustik, efterklang, efterklangstid, rt60, sabine, eyring, absorption, ekko, lyd, lyt, impulsrespons, tale, klasseværelse, kontor, tæppe, loftsplade, støj
from: 16996cbb
---

Afsnittet {{ui:Room acoustics}} i venstre panel beregner, hvor længe lyden hænger ved i hvert rum. Det læser hvert rums gulvareal, højde, vægge, døre og vinduer fra den åbne IFC-model. Intet i modellen ændres.

## Vælg overfladerne

Hvor modellen siger, hvad der er på en flade, læser rummet det: det indvendige lag i hver væggs type (gips, puds, mursten, beton og blok er kendt), gulvets type (træ eller beton) og om et loft er med fliser. Etiketten ved hvert valg siger, om det kommer fra modellen, er en standard eller dit eget valg; vælg en anden overflade for at overstyre den. Alt, modellen ikke siger noget om, bliver på standarden. Koefficienterne er **typiske publicerede værdier**; erstat dem med en produkts testdata, når du har dem. Skriv et **mål** (den længste mellemfrekvente efterklangstid du ønsker), så markeres ethvert rum over det som en advarsel, med den absorption der vil bringe det ned.

## Læs tabellen

Efterklangen angives for 125 Hz til 4 kHz. Sabine passer til levende rum og Eyring til døde; linjen mærket *Brugt* tager Eyring, hvor den gennemsnitlige absorption er over 0.2. Luftens absorption er medregnet (den forkorter de høje bånd i store rum). Det er en statistisk model: den antager, at lyden spredes jævnt, så lange eller flade rum og meget små rum er et groft estimat, og møbler, personer og åbne døre tælles ikke med.

## Lyt

{{ui:Play it in this room}} afspiller en stemme (lavet her), et klap, plukkede toner eller **din egen lydfil** (den bliver på din computer) gennem en impulsrespons beregnet for rummet: den direkte lyd, de første refleksioner for en boks af den størrelse og en hale, der dør ud med rummets egen efterklangstid i hvert bånd. {{ui:Play it dry}} afspiller den samme lyd i samme niveau uden rummet. Du kan gemme impulsresponsen eller lyden i rummet som WAV-filer. Det lyder som et rum af den størrelse og med den overflade, ikke som noget bestemt virkeligt rum.

## Personer og møbler

Skriv antallet af **personer i dette rum** for at tilføje deres absorption. Møbler, som modellen indeholder (sofaer, senge, stole, borde, garderober, fundet ud fra navnet), tilføjer deres egen. Tallene er grove planlægningsværdier, afrundet; erstat dem med målinger for et rum, der betyder noget.

## Kilde og lytter

Under {{ui:Source and listener}} trykker du på {{ui:Place the source}} eller {{ui:Place the listener}} og klikker på rummets plan. Lyden du afspiller, høres så derfra: den direkte lyd kommer efter afstanden, og den efterklingende del er på niveauet for den afstand. Ryd begge for at vende tilbage til afstandsfeltet.

## Ujævn absorption og rumsvingninger

Under {{ui:Uneven absorption (box room)}} skriver du rummet som en boks og vælger dets gulv-, loft- og vægoverflader. Tabellen tilføjer Fitzroy og Arau-Puchades til Sabine og Eyring: de behandler de tre par modsatte flader hver for sig, så et tæppelagt rum med et hårdt loft ikke læses for kort. Når parrene adskiller sig meget, siger en note, hvilket man skal stole på. Under tabellen lister **Rumsvingninger** de laveste stående bølger i boksen og frekvensen, under hvilken rummet har separate svingningstilstande i stedet for et jævnt lydfelt. Det er forudsigelser for et kasserum, et designhjælpemiddel og ikke en måling.

## Enheder

Rummenes arealer, højder, volumener og afstande vises i den {{ui:Units}}, du valgte (kvadratfod og kubikfod, tommer, millimeter, centimeter eller meter). Selve beregningen forbliver i SI; kun visningen ændrer sig. Tider (sekunder), frekvenser og niveauer er uændrede.
