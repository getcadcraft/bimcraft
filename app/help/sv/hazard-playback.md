---
title: Spela upp en översvämning, vind eller jordbävning i byggnaden
summary: Vatten som stiger genom rummen, vindtryck på varje våning eller en jordbävning som skakar våningarna, uppspelat på ett plan eller en fasad med ett tidsreglage. Enkla modeller med sina antaganden listade; ingen normkontroll och ingen konstruktionsberäkning.
keywords: fara, översvämning, vind, jordbävning, seismisk, drift, svaj, basskjuvkraft, vattennivå, klimat, scenario, havsnivå, uppspelning, våning, period
from: ff0d34d1
---

Avsnittet {{ui:Uppspelning av fara}} i den vänstra panelen spelar upp en fara på den öppna IFC-modellen. Inget i modellen ändras.

:::warning
Det här är **enkla modeller för att se vad en fara gör med den här layouten**, inte en översvämningsstudie, en vindnormskontroll eller en konstruktionsberäkning. Varje resultat listar sina antaganden.
:::

## Översvämning

Ange den högsta vattennivån över lägsta våningsplanet och minuterna för att stiga, hålla och sjunka. Vatten tränger in i ett rum genom en öppning vars tröskel vattnet har passerat, och rum som förbinds med våta rum genom öppningar under vattnets nivå står på samma nivå (kvasistatiskt). Tabellen visar när varje rum först blir vått och hur djupt; planen spelar upp det. Skriv in den mest vatten ett rum tål, så varnas för rum över den gränsen. **Klimatframtider:** läs in din egen scenariofil (JSON eller CSV med ett år, en höjning av havsnivån och en översvämningsfaktor) och välj ett år. Eller aktivera tillägget Klimatframtider och välj ett scenario och ett år: översvämningen körs två gånger, nuvarande bredvid framtida (se avsnittet om klimatframtider). Typerna Exponering för skogsbrand och Värme: framtida väderfil finns i samma lista.

## Vind

Trycket följer ½ρV² med hastigheten som ökar med höjden; kraften på en våning är det trycket gånger en byfaktor, de två tryckkoefficienterna, bredden och våningshöjden. Du får skjuvkraft, vältningsmoment och sidoförskjutningen.

## Jordbävning

En skjuvbyggnad: en massa per våningsplan (fotavtryck × kilogram per kvadratmeter, som du anger), samma styvhet i varje våning anpassad till den första perioden du anger (en tiondels sekund per våning om du lämnar fältet tomt, och det står så), dämpning och en vald markrörelse (en puls eller filtrerat brus) vid den toppacceleration du väljer. Resultatet är varje vånings våningsdrift, våningsaccelerationerna och basskjuvkraften; höjdvyn spelar upp sidoförskjutningen, ritad större än den är. Skriv in en tillåten driftkvot och våningar över den varnas. Den är elastisk: inget ger efter och inget spricker.

## Golvstyvhet från analysramen

För en jordbävning eller för vindens sidoförskjutning, välj **Analysramen** som källa till styvheten i stället för att skriva in en period. Varje våning pressas åt sidan i tur och ordning, ramen (balkar, pelare, stagning, bjälklag) löses, och våningarnas styvhet med allt som samverkar driver körningen. Vikten är medlemmarnas egen plus golvlasten per kvadratmeter som du anger i varje våningsplans ruta. Den verkliga första perioden visas. Den är elastisk: inget ger efter, och vridning modelleras inte. För vind är våningskrafterna fortfarande de antagna ovan (en potensprofil, din byfaktor och de fasta tryckkoefficienterna, inte en vindnorm); bara sidoförskjutningen kommer från ramen, genom att lösa ramens hela styvhetsmatris mot dessa krafter. Modellen kräver en IFC med en ram som analysfliken kan läsa.

## Enheter

Vattendjup, sidoförskjutning och drift våning för våning, avstånd och areor visas i de {{ui:Enheter}} du valde. Krafter (kN), tider och accelerationer behåller sina egna enheter, och ett värde du skriver i en ruta märkt i meter förblir i meter. Detsamma gäller för resultaten för evakuering, dagsljus, värme och kyla samt inredning: längder, areor och volymer följer ditt val; tryck, flöde, temperatur, energi och effekt konverteras aldrig.
