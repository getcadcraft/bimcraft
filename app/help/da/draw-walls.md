---
title: Tegn vægge
summary: Tegn vægge på plantegningen for et niveau ved at klikke på hjørnerne eller skrive længder; hjørner sammenføjes af sig selv, og væggene gemmes som IFC.
keywords: buet, bue, placeringslinje, justering, væg, vægge, tegn, plan, plantegning, rum, hjørne, sammenføj, vægtype, 2x6, 2x4, cmu, beton, højde, niveau, niveauer, etage, skrevet længde, ortogonal, fang
from: 8269cd4b
---

## Hvad du skal gøre

Tegn bygningens vægge på en plantegning af hvert niveau. Klik, hvor en væg starter, og derefter på hvert hjørne. BimCraft sammenføjer hjørnerne for dig, giver hver væg dens lag (facadebeklædning, underlag, stolper, gipsplade …) og fører den op til niveauet ovenover. 3D-visningen viser væggene, mens du tegner.

## Åbn plantegningen

1. Start en ny bygning ([Start en ny bygning](topic:start-a-new-building)) eller åbn en IFC-model.
2. Klik på {{ui:Tegn}} i værktøjslinjen. En ny bygning åbnes med den allerede slået til.
3. Plantegningen af et niveau vises til venstre, og 3D-visningen til højre. Vælg niveau i listen øverst på plantegningen, eller med den runde knap ved siden af i panelet **Niveauer**.
4. {{ui:Plan}}, {{ui:Del}} og {{ui:3D}} er værktøjer i rækken {{ui:Visning}} på værktøjslinjen (kommandoerne PLAN, SPLIT og tasterne virker som før). Brug {{ui:Plan}} til kun plantegningen, {{ui:Del}} til begge og {{ui:3D}} for at lukke plantegningen. Når vinduet er smalt (eller grænsefladen er stor), placerer {{ui:Del}} plantegningen over 3D-visningen i stedet for ved siden af.

Plantegningen skærer niveauet 4'-0" (1200 mm) over gulvet, ligesom en gulvplan gør. Rul for at zoome; træk med midterste eller højre knap (eller hold {{key:Space}} nede og træk) for at panorere. Når {{ui:Vælg}} er slået til, panorerer et almindeligt træk også. {{key:F}} med markøren over plantegningen tilpasser den.

## Tegn et rum

1. Klik på {{ui:Væg}} (eller tryk på {{key:W}}).
2. Vælg vægtypen i den første liste, for eksempel **Ydervæg 2×6** eller **Indervæg 2×4**.
3. Vælg dens højde: **Op til niveauet ovenover** (væggen følger med, hvis det niveau flyttes), **Op til** et niveau længere oppe for en væg, der går gennem flere niveauer (en trappehal, et rum med dobbelt højde, en høj gavl), eller **Fast højde** og skriv højden. En sådan væg hører til det niveau, du tegnede den på. Plantegningerne af de niveauer, den går igennem, viser den lysere, rummene dér lukker op mod den, og du kan klikke døre og vinduer ind i den fra disse plantegninger (en dør står på det niveaus gulv). Hvis du vil flytte eller ændre selve væggen, skal du gå til det niveau, den starter på.
4. Klik, hvor den første væg starter.
5. Klik på hvert hjørne. Hvert klik laver en væg, og den næste starter, hvor den forrige sluttede. Længden og vinklen vises ved siden af markøren.
6. Klik på startpunktet igen for at lukke rummet. Statuslinjen siger, hvor mange vægge rummet har, og i midtlinjetilstand får hver væg sit yderste lag på rummets ydre side.
7. Tryk på {{key:Esc}} (eller højreklik, eller dobbeltklik) for at stoppe uden at lukke.

Et helt rum på én gang: åbn {{ui:Former}} for et rektangel, et roteret rektangel, en polygon, buer, vægge på valgte linjer eller rundt om en kontur (se [Vægformer, del, forskyd, stræk og lås](topic:wall-tools)).

## Vælg tegnereference

Vælg **Midtlinje**, **Indvendig flade** eller **Udvendig flade**, før du klikker første gang. Når en flade er valgt, beskriver dine klik og skrevne længder den flade. BimCraft forskyder vægens midtlinje med halvdelen af den samlede tykkelse og sammenføjer efterfølgende hjørner. Vælg **Udvendig til venstre** eller **Udvendig til højre** i forhold til den retning, du tegner. For en lukket kontur tegnet mod uret er det udvendige til højre; med uret er det til venstre. Med **Indvendig flade** går væggens krop til den udvendige side af din linje; med **Udvendig flade** går den til den anden side. Fladetegning bevarer din valgte udvendige side, når du lukker sløjfen. På midtlinjen tager vægge, der ikke lukker et rum, den udvendige side, du valgte. Når du lukker et rum, sætter hver væg selv sin udvendige side til rummets yderside, uanset hvilken vej du tegnede.

Hvis du ændrer vægtype, reference eller udvendig side, afsluttes den aktuelle kæde. Tæt ved et vendende hjørne afkortes lange gæringer ved at lade enderne stå lige.

Mens du tegner, kan et endepunkt over tomt rum flugte vandret eller lodret med et vægendepunkt eller et tidligere hjørne. En stiplet hjælpelinje forbinder det punkt med den fangede markør. {{key:Shift}} holder tegneretningen ortogonal; flugtningen stopper så langs den retning. Nærliggende endepunkter, midtpunkter og vægskæringer har forrang frem for fjern flugtning.

## Placeringslinje

Med **Reference** sat til **Udvendig flade** eller **Indvendig flade** bevarer væggen den flade som sin placeringslinje. Hvis væggen senere bliver tykkere, eller dens yderside vendes, bliver fladen, hvor den er, og væggen vokser eller vendes omkring den. En lige væg, der møder den i et hjørne, følger med, så hjørnet stadig lukker. Du kan ændre placeringslinjen bagefter i **Egenskaber**: se [Ændr en væg, dør eller et vindue](topic:change-a-wall-or-door).

## Tegn en buet væg

1. Klik på {{ui:Væg}}, og vælg derefter **Buet** i listen **Form** i indstillingsrækken.
2. Klik, hvor væggen starter, og derefter hvor den slutter.
3. Klik på et punkt på dens bue. Eller skriv buehøjden og tryk på {{key:Enter}}.
4. Kæden fortsætter fra væggens ende. Tryk på {{key:Esc}} for at afslutte den.

En buet væg sammenføjes med vægge i sine ender (hjørne- og T-sammenføjninger virker), danner rum og holder døre og vinduer langs sin bue. De forbliver lige enheder, vinkelret på væggen i deres midte, og deres afstand måles langs buen. En væg kan dreje højst tre fjerdedele af en cirkel. Den fanger sine ender og midtpunktet af sin bue.

Ikke lavet endnu for buede vægge: {{ui:Beskær / forlæng}} og {{ui:Hjørne}}, rammeværk, automatiske målsætninger i plan og fangning langs buen. Se [Hvad der endnu ikke er lavet](topic:not-built-yet).

## Skriv en længde i stedet for at klikke

Efter det første klik skriver du og trykker på {{key:Enter}}:

| Skriv | Tegner |
|---|---|
| `12'6"` eller `3810` | en væg så lang, i den retning markøren viser |
| `12'6"<90` | så lang, i den vinkel (grader, mod uret fra højre) |
| `@3000,0` | til et punkt så langt fra det sidste, på tværs og opad |
| `1200,3400` | til det punkt på plantegningen |

Når værktøjet Væg er slået til, går et tal, du skriver, direkte ind i feltet {{ui:Længde}}. I fod og tommer er et almindeligt tal tommer; i millimeter er det millimeter. Du kan altid skrive enheden: `3.5 m`, `10 ft`, `6 1/2"`.

## Fangning

- Vægendepunkter, deres hjørner i fladen og vægmidtpunkter fanges, når markøren er nær dem (en firkant, en trekant).
- Markøren fanger en vægs midterlinje eller en af fladerne (et kryds).
- Fra det sidste punkt holdes retningen i hver 15°, når den er tæt på. Hold {{key:Shift}} nede for at holde den på 0°, 90°, 180° eller 270°.
- Frie retninger runder længden af til 1/2" (eller 10 mm).

## Ændr, fortryd, slet

- Hver væg er ét trin i **Ændringer**: {{ui:Fortryd}} og {{ui:Gentag}} tager vægge tilbage og lægger dem tilbage.
- Med {{ui:Vælg}} slået til klikker du på en væg i plantegningen for at vælge den. 3D-visningen og **Egenskaber** følger med. {{key:Delete}} sletter de valgte vægge, og de vægge, de var sammenføjet med, ryddes op igen.

## Niveauer

Panelet **Niveauer** viser hvert niveau med dets kote og højde.

- Skriv et nyt navn, en ny kote eller højde, og tryk på {{key:Enter}}. Hvis du ændrer et niveaus højde (eller kote), flyttes niveauerne over det med samme mængde, og vægge, der går op til et niveau, følger med.
- {{ui:Tilføj et niveau øverst}} tilføjer et niveau over det øverste, lige så højt.
- {{ui:Tilføj et niveau under}} tilføjer et niveau under det laveste (en kælder), lige så højt som det. Dets kote er negativ, når det laveste niveau er på 0, og intet andet niveau flyttes. {{ui:Fortryd}} fjerner det igen.
- {{ui:Kopiér dette niveau…}} tegner det, der er på niveauet, du kigger på, igen på et andet niveau eller på et nyt niveau øverst: dets vægge med døre og vinduer, gulve og lofter (ikke tage). Vægge, der gik op til niveauet ovenover, går op til niveauet over det nye. Rum dukker op af sig selv. Ét {{ui:Fortryd}} tager det hele tilbage. Hvis det andet niveau allerede har vægge, føjes kopien til dem.
- {{ui:Enheder}} på værktøjslinjen vælger enhederne (fod og tommer, tommer, decimalfod, millimeter, centimeter eller meter) for alt, som tegneværktøjerne viser og læser.

## Gem

Klik på {{ui:Gem som IFC}}. Hver væg bliver en IFC-væg med sin midterlinje, sin sammenføjede form, sin type og sine lag, `Pset_WallCommon` og basismængder (længde, højde, arealer og volumener). Så kan andre BIM-programmer åbne den og lave lister over den.

## Godt at vide

- Vægge tegnes på deres midterlinje. Tykkelsen kommer fra vægtypen.
- Plantegningen viser vægge, der er tegnet her, udfyldt, og alt andet (biblioteksemner, modeller fra andre programmer) skåret af det samme plan. Det, der ligger under snittet, vises i tynde linjer.
- Vægge lavet af andre programmer vises i plantegningen, men kan ikke ændres med disse værktøjer endnu.
