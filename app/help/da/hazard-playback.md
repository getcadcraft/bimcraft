---
title: Afspil en oversvømmelse, vind eller et jordskælv på bygningen
summary: Stigende vand gennem rummene, vindtryk på hver etage eller et jordskælv, der ryster etagerne, afspillet på en plan eller en facade med en tidsskyder. Simple modeller med deres antagelser angivet; ikke en normkontrol eller en konstruktionsprojektering.
keywords: fare, oversvømmelse, vind, jordskælv, seismisk, drift, sving, basisforskydning, vandstand, klima, scenarie, havniveau, afspilning, etage, periode
from: ff0d34d1
---

{{ui:Afspilning af fare}}-afsnittet i venstre panel afspiller en fare på den åbne IFC-model. Intet i modellen ændres.

:::warning
Dette er **simple modeller til at se, hvad en fare gør ved denne indretning**, ikke en oversvømmelsesanalyse, en vindnormkontrol eller en konstruktionsprojektering. Hvert resultat angiver sine antagelser.
:::

## Oversvømmelse

Angiv den højeste vandstand over det laveste gulv og minutterne til stigning, fastholdelse og fald. Vand kommer ind i et rum gennem en åbning, hvis tærskel vandet er passeret, og rum, der er forbundet med våde rum gennem åbninger under vandstanden, står på samme niveau (kvasistatisk). Tabellen viser, hvornår hvert rum først bliver vådt, og hvor dybt; planen afspiller det. Skriv den mest vand, et rum må tage, og rum over den giver advarsler. **Klimafremtider:** indlæs din egen scenariefil (JSON eller CSV med et år, en havstigning og en oversvømmelsesfaktor) og vælg et år. Eller slå add-on'en Klimafremtider til og vælg et scenarie og et år: oversvømmelsen køres to gange, nutid ved siden af fremtid (se »Klimafremtider: oversvømmelse, varme og skovbrand i 2050 og 2080«). Typerne Eksponering for skovbrand og Varme: fremtidig vejrfil findes i den samme liste.

## Vind

Trykket følger ½ρV², hvor hastigheden stiger op ad højden; kraften på en etage er dette tryk gange en vindstødsfaktor, de to trykkoefficienter, bredden og etagehøjden. Du får forskydning, væltningsmoment og svajning.

## Jordskælv

En forskydningsbygning: en masse pr. etage (fodaftryk × kilogram pr. kvadratmeter, som du angiver), samme stivhed i hver etage, tilpasset den første periode, du angiver (en tiendedel sekund pr. etage, hvis du lader feltet stå tomt, og det siger resultatet), dæmpning og en konstrueret jordbevægelse (en puls eller filtreret støj) ved den maksimale acceleration, du vælger. Resultatet er hver etages drift, gulvaccelerationerne og basisforskydningen; facaden afspiller svajningen, tegnet større, end den er. Skriv en driftsrate, du tillader, og etager over den giver advarsler. Den er elastisk: intet flyder eller revner.

## Etagestivhed fra analyserammen

Ved et jordskælv eller vindsvajning skal du vælge **Analyserammen** som kilde til stivheden i stedet for at skrive en periode. Hver etage skubbes vandret på skift, rammen (bjælker, søjler, afstivning, dæk) løses, og etagernes stivhed, når alt virker sammen, styrer beregningen. Vægten er elementernes egen vægt plus den gulvlast pr. kvadratmeter, som du angiver i feltet på hver etages plan. Den reelle første periode vises. Den er elastisk: intet flyder, og vridning er ikke modelleret. Ved vind er etagekræfterne stadig de antagne ovenfor (en potensprofil, din vindstødsfaktor og de faste trykkoefficienter, ikke en vindnorm); kun svajningen kommer fra rammen, ved at den fulde stivhedsmatrix for rammen løses mod disse kræfter. Modellen kræver en IFC med en ramme, som fanen Analyse kan læse.

## Enheder

Vanddybder, svajning og drift etage for etage, afstande og arealer vises i de {{ui:Enheder}}, du valgte. Kræfter (kN), tider og accelerationer beholder deres egne enheder, og en værdi, du skriver i et felt mærket i meter, forbliver i meter. Det samme gælder for resultaterne for evakuering, dagslys, varme og køling samt indretning: længder, arealer og volumener følger dit valg; tryk, flow, temperatur, energi og effekt konverteres aldrig.
