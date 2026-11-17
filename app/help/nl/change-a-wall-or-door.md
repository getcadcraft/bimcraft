---
title: Een wand, deur of raam wijzigen
summary: Klik op een getekende wand, deur of raam en wijzig zijn type, maat, hoogte of plaats in Eigenschappen, of sleep hem in het plan; elke wijziging is één stap voor ongedaan maken.
keywords: haaks maken, haaks, 90, rechte hoek, scheef, hoek, ortho, ruimtemaat, binnenvlak, buitenvlak, meten vanaf, verplaatsingsafstand, ingetypte afstand, gebogen, boog, boogshoogte, straal, plaatsingslijn, uitlijning, wijzigen, bewerken, eigenschappen, wandtype, dikte, lengte, hoogte, basisverschuiving, bovenkant, niveau, omdraaien, buitenkant, deurmaat, raammaat, dorpel, afstand, verplaatsen, grip, slepen, type wijzigen, meerdere
from: 63052d5d
---

## Wat u gaat doen

Wijzig wat u hebt getekend: kies een wand, deur of raam en typ een nieuw getal in **Eigenschappen** of sleep hem in het plan. Het plan en de 3D-weergave volgen, de hoeken sluiten weer aan, en deuren en ramen blijven in hun wanden.

## Een wand wijzigen

1. Met {{ui:Draw}} en {{ui:Select}} aan, klikt u op de wand in het plan (of in de 3D-weergave).
2. **Eigenschappen** toont een vak met de getallen van de wand. Wijzig er één en druk op {{key:Enter}}:
   - **Wandtype**: een ander van de startertypen. De dikte en de lagen veranderen mee.
   - **Dikte**: elke dikte. Het type behoudt zijn andere lagen, en zijn hoofdlaag (de stijlen of het blok) neemt het verschil op, bijvoorbeeld "Buiten 2×6, 200 mm".
   - **Meten vanaf**: **Middenlijn**, **Binnenvlak** of **Buitenvlak**. **Lengte** en **Ruimtemaat** lezen en stellen vanaf daar in. Buitenvlak is wat de maatvoering van het plan toont.
   - **Lengte**: het uiteinde van de wand verschuift langs zijn lijn. De wand die aan dat uiteinde is verbonden, verschuift haaks op zichzelf en behoudt zijn hoek.
   - **Ruimtemaat** (wanneer er over de ruimte een evenwijdige wand loopt): typ de gewenste maat. Deze wand verschuift haaks en de aansluitende wanden rekken mee.
   - **Haaks verschuiven**: typ hoe ver de wand haaks op zichzelf moet verschuiven: een gewoon getal verschuift hem naar buiten, een getal met een minteken naar binnen.
   - **Hoek met aansluitende wand**: de hoek met de wand die aan zijn begin is verbonden. Typ 90 om hem haaks te zetten. Een wand die aan niets is verbonden, toont **Richting**, in graden vanaf het oosten.
   - {{ui:Square up}}: draait de wanden die aan deze wand zijn verbonden terug naar rechte hoeken, langs de richting waarin het grootste deel van hun lengte loopt. Het werkt op de hele verbonden ruimte of indeling, welke van zijn wanden u ook kiest. Een wand die meer dan 10 graden van een rechte hoek afligt, blijft zoals hij is, zodat een wand op 45 graden veilig is. Eén {{ui:Undo}} neemt alles terug.
   - **Wandhoogte**: **Tot het niveau erboven** volgt dat niveau, **Tot Niveau 3** (en elk verder niveau) maakt een wand die door de niveaus ertussen loopt; het intypen van een hoogte stelt dan in hoe ver onder of boven dat niveau de bovenkant ligt. **Vaste hoogte** houdt het getal aan dat u typt. **Loopt door** toont de niveaus die zo'n wand passeert: hij wordt lichter getekend in hun plannen, ruimten daar sluiten erop aan, en deuren en ramen kunnen vanuit die plannen erin worden geplaatst. Hij wordt verplaatst en gevormd op het niveau waar hij begint.
   - **Basisverschuiving**: hoe ver boven het niveau de wand begint. Zijn bovenkant blijft waar hij was.
   - **Buitenkant**: {{ui:Flip}} zet de buitenlagen op het andere vlak.
   - **Plaatsingslijn**: **Middenlijn**, **Buitenvlak**, **Binnenvlak**, **Linkervlak** of **Rechtervlak**. Veranderen verplaatst niets. Later, wanneer de wand dikker wordt (via type of **Dikte**) of zijn buitenkant wordt omgedraaid, blijft de plaatsingslijn staan en groeit of draait de wand eromheen. Een rechte wand die er op een hoek op aansluit, volgt, zodat de hoek toch sluit. De plaatsingslijn van de gekozen wand wordt in het plan gestippeld getekend. Kies meerdere wanden om hem voor allemaal in te stellen.
   - **Boogshoogte** (gebogen wanden): hoe ver het midden van een rechte lijn afbuigt. 0 maakt hem recht; een negatieve waarde buigt hem naar de andere kant. De straal wordt ernaast getoond.
3. Elke wijziging is één stap in **Wijzigingen**; {{ui:Undo}} neemt haar terug.

## Een wand in het plan slepen

Wanneer één wand is gekozen, toont hij drie grepen: een vierkant aan elk eind en een cirkel in het midden.

- Sleep een eind om de wand langer, korter of draai te maken. Hij snapt zoals het hulpmiddel Wand, en hij vangt haaks op de wand die aan zijn andere eind is verbonden wanneer u binnen 3 graden bent; {{key:Shift}} houdt hem op de assen van het plan.
- De wanden die aan het eind dat u sleept zijn verbonden, behouden hun hoek: hun eindpunten schuiven langs hun eigen lijnen om de nieuwe lijn van de wand te raken, zodat niets scheef komt te staan. Houd {{key:Mod}} ingedrukt voor een vrij slepen (het eind van de verbonden wand komt met het uwe mee en die wand draait), of {{key:Alt}} om de verbindingen bij deze wand te verbreken.
- Sleep het midden om de hele wand haaks op zichzelf te verplaatsen, in welke richting u ook sleept. Zijn hoeken schuiven langs de verbonden wanden, zodat die wanden hun hoek behouden.
- Houd {{key:Mod}} ingedrukt terwijl u het midden sleept voor een vrije verplaatsing, wanneer u de hoek juist wilt verbreken. {{ui:Square up}} brengt hem terug.
- Terwijl een greep wordt vastgehouden, typt u een afstand en drukt op {{key:Enter}} (of laat los): de wand gaat precies die afstand, op de manier waarop u sleepte. {{key:Esc}} laat de verplaatsing vallen.
- Een gekozen gebogen wand toont grepen aan zijn uiteinden en een ronde greep in het midden van zijn boog. Sleep de ronde greep om hem te buigen.
- Deuren en ramen blijven in de wand. Een wand die te kort is voor wat erin zit, wordt geweigerd met "Het past niet in die wand."

## Een deur of raam wijzigen

1. Klik op de deur of het raam in het plan.
2. In **Eigenschappen**: **Type** (een andere deur of een ander raam van dezelfde soort), **Breedte**, **Hoogte**, **Dorpel** (ramen), **Vanaf het begin** en **Vanaf het eind** (de afstand vanaf elk eind van het wandvlak tot zijn rand), **Scharnieren** {{ui:Flip}} (deuren met één vleugel en draaiende ramen; schuif-, inbouw-, schuur- en tweedelige deuren zeggen in plaats daarvan **Opent naar**; vaste, hangende en schilderijramen en dubbele deuren hebben er geen), en **Draait naar** (deuren) of **Kozijnzijde** (ramen) {{ui:Flip}}.
3. Of sleep hem langs zijn wand, of naar een andere wand: zie [Deuren en ramen](topic:doors-and-windows).

## Meerdere tegelijk wijzigen

Kies meerdere wanden (of meerdere deuren, of meerdere ramen) met {{key:Shift}}+klik of {{key:Mod}}+klik. **Eigenschappen** biedt wat zij delen: **Type wijzigen…**, de hoogte, de maat. Eén wijziging stelt ze allemaal in, en één {{ui:Undo}} neemt het hele ding terug.

## Goed om te weten

- De getallen worden getoond in de {{ui:Units}} die op de werkbalk zijn gekozen.
- Wanden, deuren en ramen uit andere programma's tonen hun IFC-gegevens in **Eigenschappen** zoals voorheen, zonder dit vak.
