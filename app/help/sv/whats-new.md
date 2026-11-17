---
title: Nyheter i 0.9
summary: Väggformer, dela, förskjutning, töjning och lås mot rutnät, nivåer under mark, rutnätsmått och Mät i planen, dubbletter av vyer med arbetssätt och pennortabeller, Rapportera som, export till Collada och Google Earth, Scan to BIM, vind- och seismisk analys, tillägg för hartsutskrift.
keywords: nyheter, 0.9, versionsinformation, väggformer, rektangel, polygon, båge, välj linjer, spåra kontur, förskjutning, sammanfoga, lådtöjning, justera och lås, dela vägg, gap, sammanfoga, lås mot rutnät, växa från, mät från, lägg till en nivå under, källare, nivåkommando, rutnätsmått, mät i planen, arbetssätt, duplicera vy, egen kopia, kopplad vy, pennortabell, skriv ut som visat, rapportera som, skriv in en skala, importera svg, placera i plan, placera i modell, collada, dae, kmz, google earth, scan to bim, vindlast, seismisk, finita element, dokumentpanel, hartsutskrift, nyheter, ändringslogg, ändringar, 0.8, 0.8.1, version, nya funktioner, evakuering, människor, köer, akustik, efterklang, impulssvar, översvämning, vind, jordbävning, fara, livscykel, livslängd, ids, taggar, förteckningar, flytta, justera, fördela, bild, bakgrund, skanning till väggar, tomt från civilcraft, elementritningar, stomme, sol, pv, dela, vrf, fläktkonvektor, rördimensionering, kabelbana, belysningsstyrka, betong, seismisk, jämför skanning, epsg, projektion, dokument, mall, kol, kostnad, energyplus, renderingsmotor, öppna i, usd, glb, unreal, ångra, tillägg, pcf, symboler, växter, spåra, pennor, menyflik, projektnavigator, layout
from: 5624fe88
---

Det här är vad som ändrats i BimCraft 0.9, jämfört med 0.8.1. De två stora temana är ett riktigt väggverktyg och vyer som beter sig så som personer från de stora BIM-programmen förväntar sig. Runt dem kommer Collada-export, assistenter som kan placera elektriska enheter, Scan to BIM samt vind-, seismik- och finita elementberäkningar i fliken {{ui:Analys}}.

## Nytt

### Väggar

- **Rita hela former.** Under {{ui:Rita}}, öppna {{ui:Former}} (eller välj en form i listan Form på raden Vägg) för en rektangel, en roterad rektangel, en polygon med 3 till 64 sidor, en båge från mittpunkt, en tangentbåge, väggar på markerade linjer eller väggar runt ett slutet område som du klickar inuti. En rektangel blir fyra väggar med fyra sammanfogade hörn och ett steg i ångra. Se [Väggformer, dela, förskjutning, töjning och lås](topic:wall-tools).
- **Ställ in före du ritar, ändra efteråt.** Väggraden har {{ui:Förskjutning}} och {{ui:Sammanfoga}} (kryssa ur för att rita fristående väggar). Efteråt använder du {{ui:Förskjutning}}, {{ui:Lådtöjning}} och {{ui:Justera och lås}} på ritade väggar. En flyttad eller töjd vägg behåller sina dörrar, fönster och måttsättning. Varje recept är ett steg i ångra.
- **Dela väggar.** {{ui:Dela}}, {{ui:Gap}}, {{ui:Fria ändar}}, {{ui:Ta bort segment}} och {{ui:Sammanfoga}} delar en vägg med ett klick eller där en annan vägg korsar den. Ett snitt genom en dörr nekas. Se [Väggformer, dela, förskjutning, töjning och lås](topic:wall-tools).
- **Lås väggar till rutnätslinjer.** Markera en vägg längs en rutnätslinje och kryssa i {{ui:Lås mot rutnät}} under {{ui:Egenskaper}}. Med rutnätsverktyget på skriver du ett avstånd i {{ui:Flytta med}} för en vald linje, och de låsta väggarna följer i ett steg i ångra.
- **Forma en vägg.** Under {{ui:Egenskaper}} för en vägg kan du fästa dess överkant eller underkant mot ett tak, ett golv eller ett undertak, redigera dess höjdkontur, luta den eller skära en väggöppning utan dörr eller fönster. Se [Väggform](topic:wall-shape).
- **Längden visar vilken ände som står kvar.** {{ui:Växa från}} anger om början, slutet eller mitten står kvar när du ändrar längden.
- **Längd och måttsättning i planen stämmer.** {{ui:Mät från}} (mittlinje, insida eller utsida) styr både fältet Längd och väggmåtten i planen. Den börjar på mittlinjen, så väggmåtten i planen visar nu mittlinjen där de tidigare visade utsidan. Ändra den på raden Vägg, under {{ui:Egenskaper}} eller i {{ui:Inställningar}} › {{ui:BimCraft}} › {{ui:Väggar}}.

### Nivåer, rutnät och mätning

- **Lägg till en nivå under.** {{ui:Lägg till en nivå under}} i panelen {{ui:Nivåer}} lägger till en nivå under den lägsta, lika hög som den, på negativ höjd (Nivå -1, Nivå -2). Inget annat flyttas. {{ui:Lägg till nivåer…}} godtar nu negativa höjder. Om du skriver LEVEL, LEVELS, STOREY eller STOREYS på kommandoraden öppnas {{ui:Lägg till nivåer…}}, och det finns en knapp {{ui:Nivåer}} i menyerna och i menyflikarna. Se [Tomter, byggnader och nivåer](topic:site-building-and-levels).
- **Rutnätsmått i planen.** Med verktyget {{ui:Rutnät}} på markerar du {{ui:Måttsättning}} för att rita avståndet mellan närliggande linjer och den totala storleken utanför bubblorna i varje nivås plan. Se [Måttsätt ett rutnät](topic:grid-dimensions).
- **Mät i planen.** {{ui:Mät}} i gruppen {{ui:Rita}} ger ett avstånd med skillnaderna i X och Y mellan två klick. Inget sparas i modellen. Se [Mät i planen](topic:measure-on-the-plan).
- **Ändra flera kolumner samtidigt.** Markera kolumner tillsammans med en vägg så listar urvalet varje typ med {{ui:Behåll endast dessa}}. Ett klick behåller kolumnerna och visar deras gemensamma fält.
- **En visningsenhet överallt.** Koordinater, mått, sektioner, skalor på blad, fliken Laster och resultat för ramen samt texten under Problem följer den enhet du väljer. Exporter förblir SI.

### Vyer, blad och utskrift

- **Arbetssätt.** {{ui:Inställningar}} › {{ui:BimCraft}} › {{ui:Arbetssätt}} väljer om varje vy har egna annoteringar och pennortabeller eller delar dem. Se [Arbetssätt, duplicerade vyer, pennor på papper, Rapportera som och mallar](topic:working-style).
- **Duplicera en vy.** Planer, takplaner, detaljreferenser, fasader och sektioner kan dupliceras som {{ui:Egen kopia}} eller {{ui:Kopplad}}. {{ui:Gör till egen kopia}} gör en kopplad vy oberoende. Se [Arbetssätt, duplicerade vyer, pennor på papper, Rapportera som och mallar](topic:working-style).
- **Skriv ut som visat, eller via en pennortabell.** Pennöverstyrningar sparas i IFC tillsammans med vyn, och blad och PDF-filer ritar dem som skärmen gör. Samma ämne omfattar pennortabeller.
- **Rapportera som.** {{ui:Rapportera som}} under {{ui:Egenskaper}} skriver en platta som ritats som väg, en vägg som panel eller ett tak som ramp till IFC som den klass du väljer, och räknar den så i förteckningar, mängder, sök, {{ui:Färglägg efter}} och Problem.
- **Redigera i fasader och sektioner.** Rita och flytta väggar, öppningar, nivåer, måttsättning och noteringar direkt i en fasad eller sektion, med egna bladstorlekar och ritningshuvuden. Se [Redigera i fasader och sektioner](topic:edit-in-elevations).
- **Blad.** Varje blad kan vara liggande eller stående. En ruta {{ui:Skriv in en skala}} står bredvid skallistan på varje placerad vy (1:64, 2:1, 1/4" = 1'). Du kan dra en placerad ritning eller flytta den lite med piltangenterna, och {{ui:Format…}} › {{ui:Importera SVG…}} gör din egen bladdesign till ett ritningshuvud med fält som skrivs in per blad.
- **Bibliotekskrediter på ett blad.** En ritningsuppsättning med biblioteksobjekt får en förteckning över bibliotekskrediter som du kan placera på valfritt blad. Se [Bibliotekskrediter](topic:library-credits).

### Bibliotek: placering

- **Placeringen följer vyn.** I planvyn visar biblioteket {{ui:Placera i plan}}; i 3D visar det {{ui:Placera i modell}}; i delad vy visar det en delad knapp med {{ui:Placera i plan}} som huvudåtgärd. Båda sätten skriver samma IFC-element. Du kan också dra ett bibliotekskort till planen eller 3D-vyn. Med penna eller finger trycker du och håller kvar, och drar sedan. Se [Placera från biblioteket](topic:place-from-library).

### Filer och assistenter

- **Collada och Google Earth.** {{ui:Collada}} i verktygsfältet (menyn Fil i menystilarna) skriver en .dae-fil, eller en .kmz-fil placerad där modellen står på kartan. Se [Exportera modellen som Collada eller för Google Earth](topic:collada).
- **Assistenter kan placera elektriska enheter.** Din anslutna assistent har nya verktyg för att lägga till, lista, ändra och ta bort enheter och för att ställa in belysning. Assistenter är av tills du slår på dem i {{ui:Inställningar}}. Se [Låt en AI-assistent arbeta med din modell](topic:assistants).
- **Scan to BIM (tillägg).** Av som standard och kräver tillägget Punktmoln. Det föreslår golv, väggar, dörrar och fönster från en skanning, med den uppmätta avvikelsen för varje, och att godta dem är ett steg i ångra.

### Analys

- **Vind- och seismiska platsdata.** I fliken {{ui:Analys}}: vindlaster enligt ASCE 7-10 eller 7-16 för en styv, sluten byggnad, med en kraft på varje våningsplan som lastfall, samt seismiska platsdata med sökning i USGS och designspektrum.
- **Strukturell uppföljning och finita element.** Betongkontroller enligt ACI 318-19, ekvivalenta horisontella krafter enligt ASCE 7-22, våningsdrift, bjälklag och väggar som plattor samt lastkombinationer enligt ASCE 7 och EN 1990. Vår egen motor för finita element klarar skal, tetraedrar och modalanalys. Se [Kontrollera betongelement och ta fram seismiska laster](topic:concrete-and-seismic) och [Ramanalys](topic:frame-analysis).

### Övriga tillägg och dokument

- **Inomhusbelysning (tillägg).** Placerar armaturer och skriver luxvärdena som siffror i varje nivås plan, med en uppskattning av bländning och en utskriftsbar rapport.
- **Dokumentpanelen.** {{ui:File}} › {{ui:Dokument…}} har utcheckning och incheckning med en låsfil, revisionsbokstäver, utgivningsstatus och historik.
- **Regioner och stål.** Sydafrikanska ritnings- och byggregelpaket i tillägget Regelverk, samt 976 brittiska stålprofiler i den gemensamma profiltabellen.
- **Gratis tillägg för hartsutskrift.** Slicer, stöd och flotte, exponeringstest samt filformaten GOO, SL1, Chitubox och Anycubic, alla av som standard.

## I alla appar

- När du pekar på en knapp eller kontroll visas ett Bootstrap-verktygstips.
- Startens tips i ett tomt ritningsområde har en stängknapp; BimCraft kommer ihåg att den stängts.
- En panels flikrad som inte får plats rullar nu i stället för att klippas av.
- När ett dokument är öppet visar webbläsarfliken ”<dokument> - BimCraft | CadCraft”.
- Under {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Layout}} är layouterna en rullista med tvårads alternativ.
- Språklistan i {{ui:Inställningar}} har fler språk än i 0.8; språk utom engelska är maskinella utkast.

## Åtgärdat

- **Flytta fungerar på trappor,** och på ramper, räcken, takplan, fristående enheter, bilder och stigar.
- **Att dra en vägg snedvrider inte längre rummet.** Mittenhandtaget flyttar väggen rätvinklig mot sig själv, och dess hörn glider längs de sammanfogade väggarna. Håll ned {{key:Mod}} för den gamla fria flytten; {{ui:Rätvinkla}} ger tillbaka 90 grader.
- **En ändring av tjocklek eller typ i en sammanfogad nod** håller nu hörnet stängt vid ett L, ett T, en nod med tre väggar och intill en böjd vägg.
- **Flytta eller kopiera en grupp rum** behåller sammanfogade väggar utanför gruppen sammanfogade.
- **Gör om behåller identiteten hos ett väggmått.**
- **Att välja en vägg när Rita är av** ger inte längre ett fel i Egenskaper.
- **Rendering faller tillbaka till WebGL** när grafikkortet inte kan starta, i stället för att stanna.
- **EnergyPlus-kontrollen kan slås på** igen.
- **Dokument öppnas som en centrerad dialogruta.** {{key:Esc}}, X eller ett klick på den nedtonade sidan stänger den.
- **Knapparna {{ui:Plan}}, {{ui:Dela}} och {{ui:3D}} visas** så snart en modell är öppen, inte först efter att Rita har slagits på en gång.

## Ärliga begränsningar

- Inget har skrivits ut på riktig hårdvara. Hartsstöden är nya och ej prövade.
- Resultat för vind, seismik, betong och finita element är hjälpmedel för en ingenjör, kontrollerade mot slutna formler, inte mot en verklig byggnad.
- Scan to BIM testades på en syntetisk byggnad, inte på en verklig skanning, och hittar bara rum med räta vinklar.
- Collada har inte öppnats i Blender eller Google Earth här.
- Belysningsuppskattningen är kontrollerad mot vår egen spårning, inte mot andra ljusprogram.
- De sydafrikanska siffrorna är overifierade.
- Sammanfogningsstilar för väggar (stumt, geringsskuren, kvadratisk) och lagerprioritet är inte byggda; hörn är geringsskurna.
- Språk utom engelska är maskinella utkast.

Allt annat finns i [Vad som ännu inte är byggt](topic:not-built-yet). Tidigare ändringar finns i avsnitten om 0.8 och 0.8.1 längre ner på den här sidan.

## Tidigare: 0.8 och 0.8.1

Det här är vad som ändrats i BimCraft 0.8 (2026-11-01) och 0.8.1 (2026-11-02), jämfört med 0.7. BimCraft kan nu svara på frågor om en byggnad och prova den, med människor, ljud, vatten, vind och jordbävningar, och ritar den med fler verktyg; 0.8.1 är en felrättningsversion.

### Nytt

**Prova byggnaden**

- **Människor i byggnaden.** Avsnittet {{ui:Människor i byggnaden}} i vänster panel låter en evakuering eller en vanlig dags ankomster gå genom dina rum, dörrar och trappor. Du ser köerna där byggnaden smalnar, den längsta gångvägen till en utgång från varje rum och hur lång tid den sista personen tar. Kryssa i {{ui:Stängd}} på en dörr för att se vad som ändras, och kryssa i {{ui:Visa personerna i 3D-vyn}} för att se gångarna. Resultaten går till Problem. En grov folkmassemodell för designbeslut, inte ett brandskyddscertifikat. Se [Låt människor gå genom byggnaden](topic:people-in-the-building).
- **Rumsakustik, och höra den.** Avsnittet {{ui:Rumsakustik}} ger varje rums efterklangstid per oktavband (Sabine och Eyring) utifrån dess storlek och de ytskikt du väljer, och med ett eget mål säger den hur mycket absorption som skulle behövas. {{ui:Spela upp i det här rummet}} spelar upp en röst, ett klapp, plockade toner eller din egen ljudfil genom ett impulssvar beräknat för rummet. Absorptionsvärdena är typiska publicerade värden som du kan byta ut. Se [Rumsakustik](topic:room-acoustics).
- **Uppspelning av översvämning, vind och jordbävning.** {{ui:Uppspelning av fara}} spelar upp vatten som stiger genom rummen, vindtryck på varje våningsplan och en jordbävning som skakar våningarna, i en plan eller en fasad med en tidsreglage. Enkla modeller med deras antaganden på panelen; inte en normkontroll. Se [Spela upp en översvämning, vind eller jordbävning](topic:hazard-playback).
- **Vad som slits ut på femtio år.** {{ui:Livscykelvy}} listar fönster, dörrar, ytskikt och tak med en livslängd vardera, de år de byts ut och, när du skriver in en kostnad per enhet, kostnaden per år och dess nuvärde. {{ui:Spara schemat (CSV)}} skriver ut den. Livslängderna är planeringsvärden. Se [Se vad som slits ut under femtio år](topic:life-cycle-view).
- **Kontroller av betong och seismik.** Blocken {{ui:Betongelement}} och {{ui:Seismiska laster}} i fliken {{ui:Analys}} kontrollerar betongbalkar och -pelare enligt ACI 318-19 och tar fram ekvivalenta horisontella krafter enligt ASCE 7-22 för styva bjälklag, med våningsdrift. För en ingenjör att kontrollera. Se [Kontrollera betongelement och ta fram seismiska laster](topic:concrete-and-seismic).

**Kontrollera och rapportera**

- **Kontrollera mot en IDS.** Läs in filen `.ids` som en kund gav dig och se varje element som inte uppfyller den i Problem, innan du levererar IFC-filen. Öppna {{ui:Kontrollera mot en IDS}} under {{ui:Modellkontroller}}. Se [Kontrollera en modell mot en kunds IDS](topic:check-against-ids).
- **Taggar och förteckningar.** Definiera egna taggar, sätt dem på många element samtidigt och skapa förteckningar vars kolumner, filter och grupper läser dem; taggarna sparas i IFC. Se [Taggar och förteckningar](topic:tags-and-schedules).
- **Dokument från modellen.** {{ui:Dokument från modellen}} fyller en specifikationsmall från den öppna IFC-filen och sparar den som PDF, Word-dokument eller Markdown. Se [Dokument från modellen](topic:documents-from-the-model).
- **Jämför en skanning med modellen.** När en punktmoln är öppen bedömer {{ui:Jämför}} varje element som byggt, delvis byggt, saknas eller inte nått, och visar procenten byggt. Se [Jämför en skanning med modellen](topic:compare-scan-with-model).
- **Koldioxid och kostnad.** Panelen Koldioxid summerar inbäddat koldioxidutsläpp från en faktortabell som du kan redigera, och panelen Kostnad fördelar priser över 4D-schemat. Faktorerna som följer med BimCraft är generiska och markerade som okontrollerade. Se [Inbäddad koldioxid och kostnad](topic:embodied-carbon-and-5d-cost).
- **Vilken kartprojektion som helst.** {{ui:Mät}} › {{ui:Koordinatsystem…}} tar ett EPSG-nummer, en UTM-zon, ett namn eller din egen projektionsdefinition. Se [Georeferera med valfri projektion](topic:georeference-any-projection).

**Rita och redigera**

- **Flytta, justera och fördela.** Under {{ui:Bygge}}; {{key:Shift+M}} startar Flytta (vanliga {{key:M}} är fortfarande Mät). Flytta kopierar medan du går med {{key:C}}, varje steg är ett steg i ångra, och det följer med i en Live TeamWork-session. Se [Flytta, kopiera, justera och fördela](topic:move-align-distribute).
- **Bilder under planen.** {{ui:Bygge}} › {{ui:Bild}} placerar en PNG-, JPEG- eller WebP-fil under en nivås plan eller på ett vertikalt plan. Ställ in skalan med två punkter, och flytta, vrid, tona bort och lås den. Ett område kopierat i MarkupCraft klistras in i sin bladskala. Se [Lägg en bild under planen](topic:pictures-as-backgrounds).
- **Väggar från en skanning.** Med en skanning öppen kommer väggar, dörrar och rum som förslag som du behåller eller förkastar ett i taget, i ett steg i ångra. Endast väggar i två vinkelräta riktningar hittas. Se [Gör om en skanning till väggar](topic:scan-to-walls).
- **Spåra, pennor och skissad trappa.** {{ui:Spåra}} visar en annan nivå streckad under planen, {{ui:Pennor}} ger väggar, dörrar och fönster en egen linjetjocklek i en och samma vy, och {{ui:Skissa trappa}} gör en gångväg till en trappa. En Wavefront OBJ-mesh öppnas. Se [Spåra en nivå, pennor och en trappa från en skiss](topic:trace-pens-stairs-obj).
- **Byggnader kring en adress.** Byggnaderna och tomten som CivilCraft:s Adress till tomt hittade kommer som förslag; du kryssar i dem du vill lägga till. Se [Börja från CivilCraft:s tomt](topic:site-from-civilcraft).
- **Elementritningar.** {{ui:Bygge}} › {{ui:Elementritningar}} ramar in väggar, bjälklag och tak i trä eller lättprofilstål och sparar en kapplista som CSV och verkstadsritningar som PDF. Startvärden, inte en konstruktionsberäkning. Se [Elementritningar](topic:panel-drawings).
- **Symbolpalett och växter.** {{ui:Bygge}} › {{ui:Symbolpalett}} hittar el- och VVS-symboler efter namn; källan {{ui:Växter}} i {{ui:Bibliotek}} listar cirka 400 växter med planssymboler. Se [Symbolpalett](topic:symbol-palette) och [Placera en växt](topic:plant-list).

**Rör, kanaler och energi**

- **Split, VRF och fläktkonvektorer.** Inne- och utomhusenheter med deras anslutningar, och kopplingsledningar dimensionerade från en tabell med typiska exempelvärden som du kan ändra. Se [Split, VRF och fläktkonvektorer](topic:split-vrf-fan-coils).
- **Beräkningar.** Panelen Beräkningar kontrollerar dimensionerna för tilloppsrör och kanaler med tryckfall, drar kablar genom kabelbanor och rör och visar deras fyllnadsgrad, samt beräknar belysningsstyrka utifrån IES- eller EULUMDAT-filer. Standardvärden är märkta; skriv in värdena från din egen norm. Se [Beräkningar för rör, kanal, kabel och ljus](topic:mep-calculations).
- **PCF-filer.** Rörverktygets **Exportera PCF** skriver ut rördragningarna för program för rörspänning och isometri, och en PCF-fil som läses in ritar sitt rör. Se [Komponentfiler för rör](topic:piping-pcf).
- **Solceller (PV).** Placera uppsättningar på tak eller mark, skugga dem från modellen, uppskatta årlig energi, kontrollera strängar och ta fram data för enlinjeschema. Startmodulen och förlusterna är generiska. Se [Solceller](topic:solar-pv).
- **EnergyPlus-fil.** Panelen Kontrollera med EnergyPlus skriver modellen som en IDF att köra i din egen EnergyPlus. Att köra den i webbläsaren kräver en version som du själv är värd för och skriver in adressen till; BimCraft medföljer den inte. Se [Kontrollera värme och kyla med EnergyPlus](topic:check-with-energyplus).

**Bilder och filer**

- **Välj renderingsmotor.** {{ui:Rendera}} har ett val {{ui:Motor}}. Våra två inbyggda motorer (Snabb och Strålspårning) förblir standard. **Öppna i** sparar scenen som en USD- eller glTF-fil, och en Unreal-projektmapp som en .zip; i CadCraft Studio kan ett tillägg lägga till en motor. Unreal-insticksprogrammet som öppnar projektet är inte släppt. Se [Välj vilket program som ritar bilden](topic:render-engines).
- **Ångra i Studio.** Inne i CadCraft Studio meddelar BimCraft Studio varje färdigt steg, så att Studio kan ångra ditt senaste steg i det fönster du använde sist. Se [Ångra över apparna](topic:undo-across-apps).
- **Tillägg i din fil.** En IFC-fil noterar vilka tillägg som skrivit i den, och erbjuder de du saknar när du öppnar den. Se [Tillägg i din fil](topic:add-ons-in-your-file).

**I alla appar**

- **Anslut din AI.** Din egen assistent kan styra BimCraft genom Studios anslutning och svara på frågor om modellen, till exempel vilka rum som ligger under en given yta. Studio har ingen egen AI. Se [Låt en AI-assistent arbeta med din modell](topic:assistants).
- **Verktygsfältsrader.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Verktygsfältsrader}} erbjuder Bryt, 2 rader eller 1 rad; Bryt är fortfarande standard.
- **Inmatningsenheter.** Pekplatta, penna, 3D-mus, handkontroll och MIDI-inställningar delas av alla appar.
- **Problem och Live.** Varningspanelen och Live-sessioner fungerar som tidigare, med de nya kontrollerna ovan som matar Problem.
- **Språk.** 54 språk, varav tio är nya. De som inte är engelska är maskinella utkast som ännu inte lästs av en infödd talare; hjälpämnena är mestadels på engelska.

### Åtgärdat i 0.8.1

- **Menyflik och layout för projektnavigatorn.** Infoga › Importera CAD, Infoga › Bild och Hantera › Projektenheter sa ”Inte byggt i BimCraft ännu”. Bild öppnar nu verktyget Bild, Importera CAD öppnar {{ui:Bygge}} › {{ui:Från en ritning…}} (DWG, DXF, PDF eller en skanning), och Projektenheter öppnar {{ui:Inställningar}} › {{ui:Globalt}} › {{ui:Enheter}}. Flytta och Justera kör verktygen Flytta och Justera, Nivå öppnar {{ui:Lägg till nivåer…}}, Faser öppnar avsnittet Renoveringsfaser och Material öppnar materialbiblioteket.
- **Avsnittet DWG-klasser.** Det lästes som fel typ; åtgärdat i BimCraft och de andra apparna som läser DWG.
- **Språk under körning.** Studio och de paketerade utgåvorna kan nu byta språk utan omstart. Detta är ännu inte testat på alla plattformar; säg till om språket inte ändras.
- **Skript för Archicad-paketet.** `archicad_bundle.py`, en separat nedladdning, hittar nu Archicads sökväg, bevakar mappen i upp till 20 sekunder och försöker igen bredvid paketet.

### Inte i den här versionen än

- **Säkerhets- och designhjälpmedel.** Människor i byggnaden har ingen gränsvärde för gångavstånd från en byggnorm (du skriver in gränsvärdet) och har inte kontrollerats för hand mot en verklig ritning. Akustik-, livscykel- och faravärdena är planeringsvärden, inte en normkontroll.
- **Klimatscenarier och EnergyPlus.** Inga inbyggda klimatscenarier: du kan läsa in en scenariofil för översvämningskörningen. EnergyPlus-körningen i webbläsaren ingår inte i den här versionen.
- **Menyflikens layout.** Materialmängder förblir ”Inte byggt” eftersom BimCraft saknar en materialmängdslista, och 54 andra nedtonade verktyg i menyflikarna har ännu inget BimCraft-verktyg bakom sig.
- **Signering och plattformar.** Windows-installerare och macOS .dmg-filen är osignerade, så SmartScreen visar {{ui:Mer information}}, sedan {{ui:Kör ändå}}, och macOS kräver högerklick och sedan {{ui:Öppna}}. Versionen för iPad och iPhone byggdes inte om för 0.8.1.
- **Tester på riktiga sidor.** Några äldre webbläsartester för BimCraft misslyckas fortfarande på vår testsida, som före 0.8.1.

Allt annat finns i [Vad som ännu inte är byggt](topic:not-built-yet). Tidigare ändringar finns i [Nyheter i 0.7](topic:whats-new-0-7).
