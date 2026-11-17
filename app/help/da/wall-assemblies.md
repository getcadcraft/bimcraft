---
title: Vægopbygninger og referencemål
summary: Byg dine egne vægtyper lag for lag med en tydelig kerne, behold et projektmaterialebibliotek, og dimensionér til flader og midterlinjer, der forbliver knyttet, når væggen ændres.
keywords: lod, udviklingsniveau, lod 200, lod 300, generisk, vægopbygning, vægtype, lag, kerne, kerneflade, kernemidterlinje, spalte, luftspalte, membran, vindspærre, materialebibliotek, materialer, tykkelse, referencemål, målsætning, associativ, placeringslinje, facadebeklædning, stolpe, gipsplade
from: 4ea8fbf5
---

## Det skal du gøre

Lav en vægtype, der passer til den væg, du vil bygge: facadebeklædning, underlag, en 5½-tommers stolpekerne og gipsplade, eller mursten, en luftspalte og en trævægskonstruktion. Markér hvilke lag der er kernen, så en målsætning eller en placeringslinje kan holde kernen, mens finishen omkring den ændres. Dimensionér derefter vægge til de flader og midterlinjer, du mener.

## Lav en vægtype

1. Start en bygning eller åbn en IFC-model, slå {{ui:Tegn}} til, og vælg {{ui:Væg}}-værktøjet.
2. Vælg en startvægtype i {{ui:Vægtype}}, og åbn {{ui:Vægopbygninger…}}. En startvægtype åbnes som en kopi; giv den nye type et navn.
3. Lagene går fra ydersiden øverst i listen til indersiden nederst. Vælg hvert lags materiale, skriv dets tykkelse (projektenheder, eller eksplicitte værdier som `12.7 mm` eller `1/2"`), vælg dets funktion (finish, underlag, konstruktion, isolering, membran), og sæt flueben i **Kerne** for kernelagene. Kernen skal være én sammenhængende gruppe.
4. {{ui:Tilføj lag}} tilføjer et lag, {{ui:Tilføj spalte}} tilføjer en luftspalte med dens ventilation (ikke angivet, uventileret, ventileret), og {{ui:Tilføj membran}} tilføjer et lag uden nominel tykkelse, fx en vindspærre. Pilene flytter et lag udad eller indad.
5. Forhåndsvisningen tegner lagene i skala med kernen understreget, nummereret ligesom rækkerne, og målsætter hvert lag, kernen og den samlede tykkelse. {{ui:Gem type}}.

Den nye type står i Væg-værktøjets liste og i en valgt vægs **Egenskaber**. Gemmer du en type, du redigerer, ændres hver væg, der bruger den; {{ui:Duplikér type}} laver en separat type og giver den kun til de vægge, du har valgt. Hver gemning er ét fortrydelsestrin, sammen med de vægge den flytter, dørene og vinduerne i dem og de målsætninger, der afhænger af dem.

En spalte tilføjer bredde. En membran tilføjer ingen: den bliver i typen, så en liste senere kan finde den, og den tælles ikke med i væggens eller kernens tykkelse. En spalte eller en membran tælles aldrig som massivt materiale. I en fil gemt som IFC2X3 bevares en membran i typens registrering, men den udelades fra dens fysiske materialelag.

## Mærk en type med dens udviklingsniveau (LOD)

En type kan angive, hvor udviklet den er. I editoren tilbyder **Udviklingsniveau (LOD)** den faste skala 100, 200, 300, 350, 400 og 500, eller **Ikke angivet**. En generisk væg ("Væg 230 generisk") er LOD 100 eller 200; en specifik opbygning med sine rigtige lag ("230 mursten, pudset på begge sider") er LOD 300 eller mere. Mærket sætter du selv: BimCraft beregner det ikke, og startvægtyperne har ingen.

Mærket vises ved siden af typens navn i Væg-værktøjets typeliste, i en vægs **Egenskaber** og i listen [Skift type](topic:wall-tools), og rapporten efter et skift siger, om niveauet gik op eller ned. For at se det i listen **Vægge efter type** og dens CSV, sæt flueben i **Vis hver vægtypes LOD i vægskemaet** under Indstillinger › BimCraft › Vægge: en sidste kolonne, LOD, tilføjes. Mærket gemmes i IFC-filen sammen med typen (i typens egenskabssæt `CadCraft_WallType`, som egenskaben `LOD`, og i typens registrering), så det er der, når du åbner filen igen. Mærket gælder foreløbig kun vægtyper, ikke enkelte elementer eller andre typer af elementer.

## Generiske vægge til skitsefasen

Væg-værktøjets typeliste starter med to **generiske** vægge: **Generisk væg 200 mm (ydervæg)** og **Generisk væg 100 mm (indervæg)**. Hver er ét lag af det generiske materiale, mærket LOD 200. Brug dem, når du ved, hvor væggene skal være, men endnu ikke hvad de består af.

En væg, hvis type er mærket **LOD 100** eller **LOD 200**, tegnes i hver plan som **ét skraveret bånd**, på alle detaljeniveauer: ingen lag, ingen laglinjer. Det gælder de generiske vægge og enhver type, du selv har lavet og mærket LOD 100 eller 200. Væggen i sig selv er komplet: den har sin tykkelse, sine døre og vinduer, sine rum og sine mængder.

For at udvikle den skifter du dens type (Rediger › Vægge › **Skift type**, eller Type i Egenskaber). Væggen tegnes aldrig igen: den samme væg får den nye type, og rapporten siger, hvad der flyttede. En type mærket LOD 300 eller højere tegnes med sine lag, som før.

For at tegne hver væg efter dens lag, uanset mærket: Indstillinger › BimCraft › Vægge, og fjern fluebenet i **Tegn vægge af en LOD 100- eller LOD 200-type som ét skraveret bånd**.

Startsættets døre og vinduer er også generiske typer (en størrelse og en måde at åbne på, ikke et produkt). Med **Vis hver vægtypes LOD i vægskemaet** slået til viser skemaerne for Døre og Vinduer LOD 200 for dem.

## Giv en type dens mængdeudtrækdata

I vægtypeeditoren tager **Mængdeudtrækdata** det, man skal vide om væggen, én gang for typen: **enheden**, væggen er bygget af (en mursten eller en blok: dens navn, længde, højde og bredde), **mørtlen** (navn og fugetykkelse) og en **sats** med dens valutakode (tre bogstaver, fx USD, EUR eller ZAR) og det, den gælder pr.: en kvadratmeter eller kvadratfod nettovægareal, en meter eller fod væglængde, eller hver væg. Alt er valgfrit.

Det gemmes med typen i filen. Hver væg af typen rapporterer derefter det: {{ui:Lister}} › **Vægtyper: mængdeudtrækdata** viser enheden, mørtlen, satsen og satsen gange den målte mængde, og mængdeudtrækket, der sendes til TakeoffCraft, bærer det på den vægtypes post. Ændrer du det på typen, følger alle vægge med.

Tre felter mere er til at tælle mursten eller blokke og mørtel:

- **Spild på enheder, %** lægges til antallet af enheder. Lad det stå tomt for at bruge tallet fra projektets opmålingsmetode, eller ingen, hvis metoden ikke har nogen. Skriv 0 for at have intet spild, uanset hvad metoden siger.
- **Ekstra mørtel, %** er til huller eller perforeringer, der tager mørtel. Det lægges til mørtelvolumen. Lad det stå tomt for ingen.
- **Lag bygget af denne enhed**: sæt flueben i hvert lag, der er et blad af denne mursten eller blok. En hulmur har to. Uden flueben tælles kernelagene.

Satsen kan også være pr. enhed til bestilling, pr. 1000 enheder til bestilling eller pr. m³ mørtel. Hvor enheden har en længde og en højde, viser **Vægtyper: mængdeudtrækdata** enhederne pr. m² (eller ft²) af ét blad, enhederne til bestilling og mørtelvolumen; formlerne står i [Mursten, blokke og mørtel](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). En type har én enhed: to blade af forskellige enheder (et murstensydblad og et blokindblad) kan endnu ikke tælles på én type.

## Hold kernen fast

Under **Egenskaber** sættes en vægs **Placeringslinje** til en kerneflade eller kernens midterlinje. Når du senere tilføjer eller fortykker en finish, bliver linjen, hvor den er, og væggen vokser omkring den. Vægge, der møder den i et hjørne, følger med, så lige hjørner forbliver lukkede.

## Projektmaterialer

{{ui:Materialebibliotek…}} viser projektets materialer: navn, kategori, den tykkelse et lag starter med, visningsfarve, skæreudfyldningsmønster og noter. Biblioteket gemmes i IFC'en med projektet. Når du vælger et materiale til et lag, får laget materialets standardtykkelse, som du derefter kan ændre. Redigerer du biblioteket senere, ændres vægge, du allerede har tegnet, aldrig. Du kan også lave et materiale fra lagets materialeliste med {{ui:+ Nyt materiale…}}.

## Referencemål

{{ui:Notér}} › {{ui:Referencemål}}: vælg vandret, lodret eller justeret, og en reference: den udvendige eller indvendige finishflade, den udvendige eller indvendige kerneflade, væggens midterlinje eller kernens midterlinje. Vælg den første væg, skift referencen hvis du vil, vælg den anden, og klik derefter, hvor målelinjen skal være. To referencer på én væg måler dens samlede tykkelse eller kernetykkelse. {{ui:Referencemål…}} viser visningens målsætninger, herunder dem der har mistet en væg, med Egenskaber, Genbind referencer og Slet.

### Målsæt hele planen efter regler

{{ui:Notér}} › {{ui:Mål planen…}} målsætter ydersiden af den plan, du ser på: den samlede størrelse i hver retning og en række målsætninger langs hver ydre kant (vægender, vægge der møder kanten, og døre og vinduer i den), med rækkerne placeret fri af bygningen. Sæt flueben i det, du vil have, læs antallet, og klik derefter på {{ui:Tilføj målene}}. De er almindelige referencemål, så de følger væggene, når væggene flyttes, og du kan vælge, flytte eller slette hver enkelt. Hele sættet er ét fortrydelsestrin, og kører du det igen, laves der ingen dubletter.

Den målsætter kun ydersiden: rum inde i bygningen, buede vægge og vægge, der ikke står vinkelret på planen, overlades til håndværktøjerne, og gitterlinjer er ikke vægge, så målsætninger mellem gitre laves ikke her. Din tilsluttede assistent kan gøre det samme med `plan_dimension`.

Målsætningen er knyttet til væggene, ikke til et sted på skærmen: når en væg flyttes, eller dens type ændres, følger værdien med. Slettes en væg, siger målsætningen, at den er uløst, og viser intet tal, før du genbinder den eller fortryder. Længdefeltet tager også plankoordinater som `10',12'` for en målelinje på et præcist sted.

Målsætninger gælder for vægge, BimCraft har tegnet, i planvisninger. Ikke lavet endnu: målsætninger i snit og facader, til døre, vinduer og andre komponenter, og opbygningslag tegnet i plan og snit; se [Hvad der ikke er lavet endnu](topic:not-built-yet).

## Se også

[Tegn vægge](topic:draw-walls), [Ændr en væg, dør eller et vindue](topic:change-a-wall-or-door), [Egenskaber](topic:properties-panel).
