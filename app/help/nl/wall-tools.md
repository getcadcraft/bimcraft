---
title: Wandvormen, splitsen, verschuiven, uitrekken en vergrendelen
summary: Teken wanden als rechthoek, veelhoek, boog, op gekozen lijnen of rond een omtrek; splits ze, haal een stuk weg, verschuif, rek uit met een kader, lijn ze uit en vergrendel ze aan elkaar, aan een maat of aan een rasterlijn. Elke wijziging houdt de wanden aan elkaar gekoppeld en is één stap ongedaan maken.
keywords: wandtype wisselen, type wijzigen, opnieuw typen, wat is verschoven, lod, ontwikkelingsniveau, aansluitstijl, verstek, stomp, haaks afsnijden, wandaansluitingen, volgende, doorlopen, aansluiting verbieden, aansluiting toestaan, laagprioriteit, kern, prioriteit, verbinding, rechthoek, gedraaide rechthoek, veelhoek, ingeschreven, omgeschreven, boog, middelpunt, tangentiële boog, lijnen kiezen, tab, overtrekken, omtrek, toverstaf, splitsen, splitsen met opening, opening, segment verwijderen, weer samenvoegen, verschuiven, kopie, kaderuitrekken, kader, uitrekken, uitlijnen, vergrendelen, hangslot, beperking, maat vergrendelen, maat bewerken, raster, vergrendelen op raster, rasterlijn verplaatsen, plaatsingsverschuiving, aansluiting los, vrijstaand, groeien vanaf, meten vanaf, hartlijn, binnenvlak, buitenvlak, loskoppelen, alt
from: 5b7d2f75
---

## Wat u gaat doen

Maak en wijzig wanden met de recepten van het wandgereedschap. Elk eindigt zoals het tekenen van een wand op zijn hoeken: de hoeken koppelen zichzelf, de koppelingen worden in het bestand opgeslagen, en de hele wijziging is één stap in **Wijzigingen** die {{ui:Ongedaan maken}} terugneemt. De wanden behouden hun identiteit: een wand die u splitst, verschuift of uitrekt, is nog steeds dezelfde wand, met zijn deuren, ramen en maten.

## Een rechthoek, veelhoek of boog tekenen

Met {{ui:Tekenen}} aan, open {{ui:Vormen}} in de groep Tekenen (of kies een vorm in de lijst **Vorm** van de rij Wand). De rij Wand toont het wandtype, de tekenreferentie, de buitenzijde en de bovenkant, zoals bij het gereedschap {{ui:Wand}}. Klik daarna, of typ de punten (x,y · @dx,dy · @lengte<hoek · een lengte langs de aanwijzer):

- **Rechthoek**: twee tegenover elkaar liggende hoeken. Vier wanden, vier hoekaansluitingen, één stap.
- **Gedraaide rechthoek**: waar de eerste zijde begint en eindigt (dat bepaalt de draai en de lengte), daarna een derde klik voor de andere zijde.
- **Veelhoek**: het middelpunt, daarna een hoek (**Ingeschreven**) of het midden van een zijde (**Omgeschreven**). Stel eerst **Zijden** in (3 tot 64).
- **Boog, middelpunt**: het middelpunt, het begin (dat de straal bepaalt), het einde. **Draairichting**: de kortste weg, tegen de klok in of met de klok mee. Een boog over drie kwart van een cirkel wordt als twee wanden getekend.
- **Tangentiële boog**: klik op het einde van een wand, en daarna waar de boog eindigt. De boog vertrekt uit het einde van de wand in de eigen richting van de wand.

Een gesloten vorm krijgt zijn buitenkant naar buiten. Getekend op de **Buitenzijde** of **Binnenzijde**, is het vlak waarop u klikt het vlak dat op zijn plaats blijft.

## Wanden op lijnen die u al hebt

- **Lijnen kiezen**: klik op een lijn en er komt een wand op. Druk op {{key:Tab}} (of houd {{key:Shift}} ingedrukt terwijl u klikt) om de hele keten van lijnen die van einde tot einde aan elkaar zitten te nemen. De lijnen zijn de tekenlijnen van deze weergave, de overtreklijn en de rasterlijnen.
- **Omtrek overtrekken**: klik binnen een gebied dat is gesloten door die lijnen of door wanden. De wanden lopen om het kleinste gebied rond de klik.

## Vooraf instellen: verschuiving en aansluiting

De rij Wand heeft twee extra velden, die door het gereedschap {{ui:Wand}} en de vormen worden gebruikt:

- **Verschuiving**: de wanden worden op deze afstand van de lijn waarop u klikt getekend: + links ervan, − rechts ervan, gezien in de richting waarin u tekent.
- **Aansluiten**: haal het vinkje weg om vrijstaande wanden te tekenen. Hun einden krijgen **Aansluiting verbieden** en blijven vrij, waar ze ook gaan (zie [Een wand wijzigen](topic:change-a-wall-or-door)).

## Splitsen, een stuk weghalen, weer samenvoegen

Open {{ui:Wanden}} in de groep Bewerken.

- **Splitsen**: klik op een wand waar hij moet worden doorgesneden, of typ de afstand vanaf zijn begin. In de buurt van een wand die hem kruist, springt de snede naar het punt waar ze elkaar ontmoeten. De twee delen hebben hetzelfde type en blijven van einde tot einde aan elkaar. **Opening** laat een ruimte van die lengte, gecentreerd op de snede. **Vrije uiteinden** geeft de gesneden einden in plaats daarvan Aansluiting verbieden (Instellingen › BimCraft › Wanden › **Wanneer een wand wordt gesplitst** bepaalt welke standaard is aangevinkt). Een deur of raam gaat mee met het deel waarin het staat; een snede erdoorheen wordt geweigerd.
- **Segment verwijderen**: klik waar het stuk begint en waar het eindigt. Een deur in het stuk gaat ermee mee.
- **Weer samenvoegen**: klik op de twee delen van één wand (op één lijn, hetzelfde type). Ze worden weer één wand, de eerste waarop u klikte, met de deuren van beide.

## Aansluitstijl, aansluiting verbieden, laagprioriteit

Open {{ui:Wanden}} in de groep Bewerken.

- **Aansluitstijl**: klik op een hoek waar twee rechte wanden eindigen. Elke klik gaat naar de volgende stijl: **Verstek** (beide einden afgesneden op de lijn van de binnenste naar de buitenste hoek, waarmee elke hoek begint), **Stomp** (de ene wand loopt door tot het buitenvlak van de andere, die ertegen stopt) en **Haaks afsnijden** (als stomp, en de wand die doorloopt eindigt haaks; bij een rechte hoek lijkt het op stomp). **Volgende**, of {{key:Tab}}, maakt de andere wand de wand die doorloopt. De lijst **Stijl** in de balk toont de hoek waarop u als laatste klikte. Dezelfde twee keuzes staan in **Eigenschappen** van één wand: **Aansluitstijl bij begin / bij einde** en **Loopt door**. Elke wijziging is één stap in **Wijzigingen**. De plattegrond, het 3D-volume, de ruimten en de hoeveelheden volgen.
- Bij een T-aansluiting loopt de wand waarvan de zijkant wordt geraakt altijd door. Waar twee wanden elkaar kruisen, zegt een klik (of **Doorlopend waar gekruist** in Eigenschappen) welke van de twee doorloopt; dat bepaalt welke lagen van de wand door het kruispunt worden getekend.
- De stijl hoort bij de aansluiting: hij blijft als de wanden verschuiven en verdwijnt alleen als de aansluiting verdwijnt (de wand wordt verwijderd, aan dat einde gesplitst, of het einde krijgt Aansluiting verbieden). Een hoek met een gebogen wand, of waar drie of meer wanden samenkomen, houdt de verstek. Een hoek die scherper is dan ongeveer 30 graden, of platter dan ongeveer 150, valt ook terug op verstek.
- **Aansluiting verbieden**: klik dicht bij een wandeinde. Dat einde wordt vrijgemaakt: het sluit niet aan op iets, waar de wand ook gaat, totdat u er opnieuw op klikt. Vrije einden worden met een kruis gemarkeerd terwijl het gereedschap aan staat. Dezelfde schakelaar is **Aansluiten bij begin / Aansluiten bij einde** in Eigenschappen.
- **Laagprioriteit**: waar wanden met lagen elkaar ontmoeten, snijdt de sterkere laag de zwakkere, zodat kernen op kernen aansluiten en een afwerking stopt tegen de sterkere laag. Elke laag heeft een prioriteit van 0 tot 999; standaard komt die uit de functie van de laag (constructie 800, ondergrond 600, isolatie 400, membraan 300, afwerking 200, een spouw 100). {{ui:Laagprioriteit}} opent de wandopbouw, waar de kolom **Prioriteit** het eigen getal van een laag instelt. Lagen met gelijke prioriteit stoppen tegen elkaar, en een lijn wordt alleen getekend tussen verschillende materialen. U ziet het op plattegronden met **Gemiddeld** of **Fijn** detail, bij hoeken, T-aansluitingen en kruisingen van twee rechte wanden; Instellingen › BimCraft › Wanden › **Wandlagen schoonmaken waar wanden elkaar ontmoeten** schakelt het uit. Het verandert alleen wat binnen de wanden wordt getekend: de omtrekken en hoeveelheden van de wanden blijven zoals de aansluitstijl ze geeft.

## Het type van veel wanden wisselen

Van schetsplattegronden naar werktekeningen is het meestal een wijziging van type: een generieke wand wordt de specifieke opbouw. U tekent niets opnieuw.

1. Kies de wanden (één, of meerdere met {{key:Ctrl}} of {{key:Shift}}).
2. Druk in Eigenschappen op **Type wisselen…** onder Wandtype (of open {{ui:Wanden}} in de groep Bewerken en kies {{ui:Type wisselen}}, wat dezelfde lijst opent). De lijst opent binnen Eigenschappen, in het blok van de gekozen wanden. Het is geen dialoogvenster en het bedekt niets: de plattegrond, de 3D-weergave en het kiezen blijven werken terwijl hij open is, en hij volgt de wanden die u kiest.
3. De lijst toont elk wandtype met zijn dikte en zijn LOD-label, bijvoorbeeld "Wall 230 generic, LOD 200" en "230 clay brick, plastered both sides, LOD 300". De typen die de gekozen wanden nu hebben, zijn gemarkeerd. Typ in **Zoeken** om hem te beperken: een naam, een dikte, of `lod 300`.
4. Klik op een type. Elke gekozen wand verandert in één stap, dus één {{ui:Ongedaan maken}} neemt de hele wissel terug. Het kleine x sluit de lijst.

Elke wand behoudt zijn locatielijn. Een wand op zijn hartlijn groeit naar beide zijden; een wand waarvan de locatielijn een vlak is, houdt dat vlak en groeit de andere kant op, en de wanden die erop aansluiten volgen bij de hoeken. Wanden die aan een gewisselde wand zijn vergrendeld, volgen hem ook. Deuren en ramen blijven in hun wanden en worden opnieuw gesneden voor de nieuwe dikte.

Na de wissel toont de lijst **Wat is verschoven**: hoeveel wanden zijn gewijzigd en naar wat, de dikte en het LOD vóór en na, de wanden die opzij zijn verschoven om hun locatielijn te behouden, de aangesloten wanden die zijn gevolgd, de deuren en ramen die opnieuw zijn gehost, en elke ruimte waarvan het oppervlak is veranderd, met het oppervlak vóór en na. De statusbalk zegt hetzelfde in één regel. Het rapport vertelt alleen; het stopt een wissel nooit. Een type kiezen in **Eigenschappen › Wandtype** doet dezelfde wissel en geeft hetzelfde rapport.

Twee dingen stoppen een wissel, en dan wordt er niets gewijzigd: een deur of raam dat niet meer in zijn wand past (een wand wordt korter waar een hoek meegaat; maak de deur eerst smaller of verplaats hem weg van de hoek), en een vergrendeling die de wissel zou breken (een wand die door zijn hartlijn aan een rasterlijn is vergrendeld terwijl zijn locatielijn een vlak is; ontgrendel hem of zet zijn locatielijn terug op de hartlijn).

Een assistent die met BimCraft is verbonden, kan dezelfde wissel doen (de gereedschappen `wall_types_list` en `walls_swap_type`) en krijgt hetzelfde rapport terug.

Het LOD-label van een type wordt ingesteld in de editor van wandopbouwen: zie [Wandopbouwen](topic:wall-assemblies).

## Verschuiven en kaderuitrekken

- **Verschuiving**: klik op een wand, en daarna op de kant waarheen hij moet, of typ de afstand. De wand verschuift haaks op zichzelf en de wanden die erop aansluiten rekken mee uit. Vink **Kopiëren** aan voor een evenwijdige kopie in plaats daarvan (die is niet aan het origineel gekoppeld).
- **Kaderuitrekken**: klik op twee hoeken van een kader, daarna op een punt om vanaf te verplaatsen en een punt om naartoe te verplaatsen. Elk wandeinde binnen het kader verschuift; een wand die helemaal binnen ligt verschuift, en de wanden die erin stoten komen mee; wanden die het kader kruisen, rekken uit.

## Een maat bewerken en vergrendelen

Kies een referentiemaat (Annoteren › {{ui:Referentiemaat}}) en typ zijn waarde in **Eigenschappen**: de wand van zijn tweede referentie verschuift haaks op zichzelf, de eerste referentie blijft staan en de aangesloten wanden volgen. Vink **Deze maat vergrendelen** aan om de waarde vast te houden: als een van beide wanden later verschuift, volgt de andere. Een vergrendelde waarde kan niet worden overtypt totdat u het vinkje weghaalt.

## Uitlijnen en vergrendelen

**Uitlijnen en vergrendelen**: klik op een wandvlak (of op de hartlijn, dicht bij het midden van de wand) of op een rasterlijn, daarna op het vlak van de wand dat op die lijn moet komen. De wand verschuift haaks erop. Vink eerst **Vergrendelen** aan om ze uitgelijnd te houden: er verschijnt een hangslot op de plattegrond, en wanneer de ene wand verschuift, volgt de andere. **Eigenschappen** van een wand toont zijn **Vergrendelingen**, elk met **Ontgrendelen**.

## Wanden vergrendelen aan rasterlijnen

Kies een wand die langs een rasterlijn loopt, of waarvan het einde erop ligt, en kies de rasterlijn in **Eigenschappen** › **Vergrendelen op raster**. Kies daarna de rasterlijn met het gereedschap {{ui:Raster}} en typ een afstand in {{ui:Verplaatsen met}}: de lijn verschuift haaks op zichzelf en de wanden die eraan vergrendeld zijn volgen, met hun aangesloten wanden, in één stap. Een wand die aan een rasterlijn is vergrendeld, kan er niet vanzelf af worden verplaatst (verplaats de lijn, of ontgrendel de wand); een rasterlijn die zo wordt gedraaid dat een vergrendelde wand er niet haaks op kan blijven staan, wordt geweigerd. Een rasterlijn hernoemen houdt de vergrendeling; hem verwijderen haalt de vergrendeling weg.

## Lengte: welke kant houdt stand en wat wordt gemeten

- **Groeien vanaf** (Eigenschappen van één wand): **Begin houdt stand** (het einde verschuift), **Einde houdt stand** (het begin verschuift) of **Midden houdt stand** (beide einden verschuiven elk de helft). Terwijl u de Lengte typt, markeert de plattegrond het punt dat standhoudt. De wand die aansluit aan het einde dat verschuift, verschuift haaks op zichzelf en houdt zijn hoek.
- **Meten vanaf** (naast Maten op de plattegrond, in Eigenschappen, en in Instellingen › BimCraft › Wanden): de hartlijn, het binnenvlak of het buitenvlak. Het veld Lengte en de wandmaten van de plattegrond lezen hetzelfde, zodat ze overeenkomen. Het begint op de hartlijn.
- Om een wand los van zijn aansluitingen te verplaatsen (ze breken, de wand behoudt zijn identiteit), houdt u {{key:Alt}} ingedrukt terwijl u zijn middelste greep sleept.

## Goed om te weten

- Deze recepten zijn die van de specificatie van het wandgereedschap (pagina's 4 tot 9). Aansluitstijl en laagprioriteit zijn gemaakt voor rechte wanden; laagprioriteit is alleen zichtbaar op de plattegrond (niet in doorsneden, gevels of 3D, waar een wand één volume is), niet bij knooppunten van drie of meer wanden, en membranen worden niet doorgegeven.
- De aansluitstijl van een aansluiting wordt in het IFC-bestand opgeslagen in het record ervan (de naam van de `IfcRelConnectsPathElements`, bijvoorbeeld `CadCraft join L butt 1`), zodat andere programma's de aansluiting nog steeds lezen en een ouder bestand met verstek opent.
- De vergrendelingen en de aansluitingen worden in het IFC-bestand opgeslagen (de vergrendelingen als `CadCraft_WallHolds` op het project, de aansluitingen als `IfcRelConnectsPathElements`), dus ze zijn er wanneer u het bestand weer opent.
- Gebogen wanden kunnen worden gesplitst, weer samengevoegd en van een stuk worden ontdaan; ze worden niet verschoven of vergrendeld.
- Zie ook [Wanden tekenen](topic:draw-walls), [Een wand, deur of raam wijzigen](topic:change-a-wall-or-door) en [Een wand vormgeven](topic:wall-shape).
