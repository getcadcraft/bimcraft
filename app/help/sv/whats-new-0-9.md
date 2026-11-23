---
title: Nyheter i 0.9 (tidigare)
summary: Väggformer, dela, förskjutning, töjning och lås mot rutnät, nivåer under mark, rutnätsmått och Mät på planen, dubblerade vyer med arbetssätt och pennatabeller, Rapportera som, Collada- och Google Earth-export, Skanning till BIM, vind- och seismisk analys, tillägg för resinutskrift.
keywords: nyheter 0.9, tidigare version, vad är nytt, 0.9, versionsnoteringar, väggformer, rektangel, polygon, båge, välj linjer, spåra kontur, förskjutning, sammanfoga, lådtöjning, justera och lås, dela vägg, gap, sammanfoga igen, lås mot rutnät, växa från, mät från, lägg till nivå under, källare, nivåkommando, rutnätsmått, mät på planen, arbetssätt, dubblerad vy, egen kopia, kopplad vy, pennatabell, skriv ut som visat, rapportera som, skriv in en skala, importera svg, placera i plan, placera i modell, collada, dae, kmz, google earth, skanning till bim, vindlast, seismisk, finita element, dokumentpanel, resinutskrift, nyheter, ändringslogg, ändringar, 0.8, 0.8.1, version, nya funktioner, utrymning, personer, köer, akustik, efterklang, impulssvar, översvämning, vind, jordbävning, fara, livscykel, livslängd, ids, taggar, scheman, flytta, justera, fördela, bild, bakgrund, skanning till väggar, tomt från civilcraft, elementritningar, stomme, solceller, pv, delning, vrf, fläktkonvektor, rördimensionering, kabelbana, belysningsstyrka, betong, jämför skanning, epsg, projektion, dokument, mall, kol, kostnad, energyplus, renderingsmotor, öppna i, usd, glb, unreal, ångra, tillägg, pcf, symboler, växter, spåra, pennor, menyfliksområdet, projektbläddrare, layout
from: 816df7f8
---

Det här är vad som ändrats i BimCraft 0.9, jämfört med 0.8.1. De två stora temana är ett riktigt väggverktyg och vyer som beter sig som folk från de stora BIM-programmen förväntar sig. Runt dem kommer Collada-export, assistenter som kan placera elektriska enheter, Skanning till BIM, och vind-, seismisk och finita element-arbete på fliken {{ui:Analys}}.

## Nytt

### Väggar

- **Rita hela former.** Under {{ui:Rita}}, öppna {{ui:Former}} (eller välj en form i Form-listan på väggraden) för en rektangel, en vriden rektangel, en polygon med 3 till 64 sidor, en båge efter mittpunkt, en tangentbåge, väggar på valda linjer, eller väggar runt ett slutet område du klickar inuti. En rektangel är fyra väggar med fyra sammanfogade hörn och ett ångra-steg. Se [Väggformer, dela, förskjutning, töjning och lås](topic:wall-tools).
- **Ställ in före ritning, ändra efteråt.** Väggraden har {{ui:Förskjutning}} och {{ui:Sammanfoga}} (avmarkera för att rita fristående väggar). Efteråt använder du {{ui:Förskjutning}}, {{ui:Lådtöjning}} och {{ui:Justera och lås}} på ritade väggar. En flyttad eller töjd vägg behåller sina dörrar, fönster och måttsättningar. Varje recept är ett ångra-steg.
- **Dela väggar.** {{ui:Dela}}, {{ui:Gap}}, {{ui:Fria ändar}}, {{ui:Ta bort segment}} och {{ui:Sammanfoga}} skär en vägg vid ett klick eller där en annan vägg korsar den. En skärning genom en dörr avvisas. Se [Väggformer, dela, förskjutning, töjning och lås](topic:wall-tools).
- **Lås väggar mot rutnätslinjer.** Välj en vägg längs en rutnätslinje och bocka i {{ui:Lås mot rutnät}} i {{ui:Egenskaper}}. Med rutnätsverktyget på skriver du ett avstånd i {{ui:Flytta med}} för en vald linje, och de låsta väggarna följer i ett ångra-steg.
- **Forma en vägg.** I {{ui:Egenskaper}} för en vägg kan du fästa dess över- eller underkant vid ett tak, golv eller bjälklag, redigera dess höjdprofil, luta den, eller skära en väggöppning utan dörr eller fönster. Se [Väggform](topic:wall-shape).
- **Längden visar vilken ände som står kvar.** {{ui:Växa från}} anger om start, slut eller mitten står kvar när du ändrar längden.
- **Längd och måttsättningen på planen stämmer överens.** {{ui:Mät från}} (mittlinje, inneryta eller ytteryta) styr både fältet Längd och väggmåtten på planen. Den startar på mittlinjen, så väggmåtten på planen visar nu mittlinjen där de tidigare visade ytterytan. Ändra den i väggraden, i {{ui:Egenskaper}} eller i {{ui:Inställningar}} › {{ui:BimCraft}} › {{ui:Väggar}}.

### Nivåer, rutnät och mätning

- **Lägg till en nivå under.** {{ui:Lägg till en nivå under}} i panelen {{ui:Nivåer}} lägger till en nivå under den lägsta, lika hög som den, på en negativ höjd (Nivå -1, Nivå -2). Inget annat flyttas. {{ui:Lägg till nivåer…}} godtar nu negativa höjder. Om du skriver LEVEL, LEVELS, STOREY eller STOREYS på kommandoraden öppnas {{ui:Lägg till nivåer…}}, och det finns en knapp {{ui:Nivåer}} i menyerna och menyfliksflikarna. Se [Tomter, byggnader och nivåer](topic:site-building-and-levels).
- **Rutnätsmått på planen.** Med rutnätsverktyget {{ui:Rutnät}} på, bocka i {{ui:Måttsättning}} för att rita avståndet mellan närliggande linjer och den totala storleken utanför bubblorna på varje nivås plan. Se [Måttsätt ett rutnät](topic:grid-dimensions).
- **Mät på planen.** {{ui:Mät}} i gruppen {{ui:Rita}} ger ett avstånd med X- och Y-skillnaderna mellan två klick. Ingenting sparas i modellen. Se [Mät på planen](topic:measure-on-the-plan).
- **Ändra flera pelare samtidigt.** Välj pelare tillsammans med en vägg, så visar listan varje slag med {{ui:Behåll endast dessa}}. Ett klick behåller pelarna och visar deras gemensamma fält.
- **En visningsenhet överallt.** Koordinater, mått, sektioner, skalor på blad, ramens lastfliken och resultat samt texten i Problem följer den enhet du väljer. Export förblir SI.

### Vyer, blad och utskrift

- **Arbetssätt.** {{ui:Inställningar}} › {{ui:BimCraft}} › {{ui:Arbetssätt}} väljer om varje vy har egna annoteringar och pennatabeller, eller delar dem. Se [Arbetssätt, dubblerade vyer, pennor på papper, Rapportera som och mallar](topic:working-style).
- **Duplicera en vy.** Planer, takplaner, hänvisningar, fasader och sektioner kan dupliceras som {{ui:Egen kopia}} eller {{ui:Kopplad}}; {{ui:Gör till egen kopia}} gör en kopplad vy oberoende. Se [Arbetssätt, dubblerade vyer, pennor på papper, Rapportera som och mallar](topic:working-style).
- **Skriv ut som visat, eller genom en pennatabell.** Pennöverstyrningar sparas i IFC-filen tillsammans med vyn, och blad och PDF-filer ritar dem som skärmen gör. Samma ämne täcker pennatabeller.
- **Rapportera som.** {{ui:Rapportera som}} i {{ui:Egenskaper}} skriver en platta som ritats som en väg, en vägg som en panel eller ett tak som en ramp till IFC-filen som den klass du väljer, och räknar den så i scheman, mängder, Hitta, Färg efter och Problem.
- **Redigera i fasader och sektioner.** Rita och flytta väggar, öppningar, nivåer, måttsättningar och noteringar direkt i en fasad eller sektion, med dina egna bladstorlekar och ritningshuvuden. Se [Redigera i fasader och sektioner](topic:edit-in-elevations).
- **Blad.** Varje blad kan vara liggande eller stående. En ruta {{ui:Skriv in en skala}} sitter bredvid skallistan på varje placerad vy (1:64, 2:1, 1/4" = 1'). Du kan dra en placerad ritning eller flytta den med piltangenterna, och {{ui:Format…}} › {{ui:Importera SVG…}} gör din egen bladdesign till ett ritningshuvud med fält som skrivs in per blad.
- **Bibliotekskrediter på ett blad.** En ritningsuppsättning med biblioteksobjekt får ett schema för bibliotekskrediter som du kan placera på valfritt blad. Se [Bibliotekskrediter](topic:library-credits).

### Bibliotek: placering

- **Placering följer vyn.** I planvyn visar biblioteket {{ui:Placera i plan}}; i 3D visar det {{ui:Placera i modell}}; i delad vy visar det en delad knapp med {{ui:Placera i plan}} som huvudåtgärd. Båda sätten skriver samma IFC-element. Du kan också dra ett biblioteskort till planen eller 3D-vyn; med penna eller finger, tryck och håll, dra sedan. Se [Placera från biblioteket](topic:place-from-library).

### Filer och assistenter

- **Collada och Google Earth.** {{ui:Collada}} i verktygsfältet (menyn Arkiv i menystilarna) skriver en .dae, eller en .kmz placerad där modellen står på kartan. Se [Exportera modellen som Collada eller för Google Earth](topic:collada).
- **Assistenter kan placera elektriska enheter.** Din anslutna assistent har nya verktyg för att lägga till, lista, ändra och ta bort enheter och för att ställa in lampor. Assistenter förblir av tills du slår på dem i {{ui:Inställningar}}. Se [Låt en AI-assistent arbeta med din modell](topic:assistants).
- **Skanning till BIM (tillägg).** Av som standard och kräver tillägget Punktmoln. Det föreslår golv, väggar, dörrar och fönster från en skanning med det uppmätta avvikelsen för varje; att godta är ett ångra-steg.

### Analys

- **Vind- och seismiska platsdata.** På fliken {{ui:Analys}}: vindlaster enligt ASCE 7-10 eller 7-16 för en styv innesluten byggnad, med en kraft på varje våning som lastfall, och seismiska platsdata med en USGS-sökning och dimensioneringsspektrumet.
- **Uppföljning av konstruktion och finita element.** Betongkontroller enligt ACI 318-19, ekvivalenta horisontella krafter enligt ASCE 7-22, våningsdrift, bjälklag och väggar som plattor, och lastkombinationer från ASCE 7 och EN 1990. Vår egen motor för finita element hanterar skal, tetraedrar och modal analys. Se [Kontrollera betongelement och ta fram seismiska laster](topic:concrete-and-seismic) och [Ramanalys](topic:frame-analysis).

### Andra tillägg och dokument

- **Inomhusbelysning (tillägg).** Placerar armaturer och skriver luxvärdena som tal i varje nivås plan, med en bländningsuppskattning och en utskriftbar rapport.
- **Dokumentpanelen.** {{ui:Fil}} › {{ui:Dokument…}} har utcheckning och incheckning med en låsfil, revisionsbokstäver, utgivningsstatus och historik.
- **Regioner och stål.** Sydafrikanska ritnings- och byggregelpaket i tillägget Regelverk, och 976 brittiska stålprofiler i den gemensamma profiltabellen.
- **Kostnadsfria tillägg för resinutskrift.** Skivare, stöd och bädd, exponeringstest, och filformaten GOO, SL1, Chitubox och Anycubic, alla av som standard.

## I alla appar

- Om du håller muspekaren över en knapp eller reglage visas ett Bootstrap-verktygstips.
- StartTipset på en tom ritningsyta har en stängningsknapp; BimCraft minns att det stängdes.
- En panels flikrad som inte får plats rullar nu i stället för att skäras av.
- Med ett dokument öppet läser webbläsarfliken ”<dokument> - BimCraft | CadCraft”.
- I {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Layout}} är layouterna en rullgardinslista med tvårads-val.
- Språklistan i {{ui:Inställningar}} erbjuder fler språk än i 0.8; språk som inte är engelska är maskinutkast.

## Åtgärdat

- **Flytta fungerar på trappor,** och på ramper, räcken, takplan, fristående enheter, bilder och banor.
- **Att dra en vägg snedvrider inte längre rummet.** Mittengreppet flyttar väggen kvadratiskt mot sig själv och dess hörn glider längs de sammanfogade väggarna. Håll ned {{key:Mod}} för den gamla fria flytten; {{ui:Rätvinkla}} ger tillbaka 90 grader.
- **En ändring av tjocklek eller typ i en sammanfogad nod** håller nu hörnet stängt vid ett L, ett T, en nod med tre väggar och intill en böjd vägg.
- **Att flytta eller kopiera en grupp rum** behåller sammanfogade väggar utanför gruppen sammanfogade.
- **Att göra om behåller identiteten hos ett väggmått.**
- **Att välja en vägg med Rita av** ger inte längre något fel i Egenskaper.
- **Rendering faller tillbaka till WebGL** när grafikkortet inte kan starta, i stället för att stanna.
- **EnergyPlus-kontrollen kan slås på** igen.
- **Dokument öppnas som en centrerad dialogruta.** {{key:Esc}}, X:et eller ett klick på den nedtonade sidan stänger den.
- **Knapparna {{ui:Plan}}, {{ui:Delad}} och {{ui:3D}} visas** så snart en modell är öppen, inte bara efter att Rita slagits på en gång.

## Ärliga begränsningar

- Inget skrevs ut på riktig hårdvara. Resinstöden är nya och inte prövade.
- Resultat för vind, seismik, betong och finita element är kontrollhjälpmedel för en ingenjör, kontrollerade mot slutna formler, inte mot en verklig byggnad.
- Skanning till BIM prövades på en syntetisk byggnad, inte en verklig skanning, och hittar bara rektangulära rum.
- Collada har inte öppnats i Blender eller Google Earth här.
- Belysningsuppskattningen är kontrollerad mot vår egen spårning, inte mot andra belysningsprogram.
- De sydafrikanska siffrorna är overifierade.
- Sammanfogningsstilar för väggar (stumt, geringsskuret, kantat) och lagerprioritet är inte byggda; hörn är geringsskurna.
- Språk som inte är engelska är maskinutkast.

Allt annat finns i [Vad som ännu inte är byggt](topic:not-built-yet). Tidigare ändringar finns i noteringarna för 0.8 och 0.8.1 längre ned på den här sidan.

## Tidigare: 0.8 och 0.8.1

Det här är vad som ändrats i BimCraft 0.8 (2026-11-01) och 0.8.1 (2026-11-02), jämfört med 0.7. BimCraft kan nu svara på frågor om en byggnad och testa den, med människor, ljud, vatten, vind och jordbävningar, och ritar den med fler verktyg; 0.8.1 är en felrättningsversion.

### Nytt

**Testa byggnaden**

- **Personer i byggnaden.** Avsnittet {{ui:Människor i byggnaden}} i den vänstra panelen går igenom en utrymning eller en vanlig dags ankomster genom dina rum, dörrar och trappor. Du ser köerna där byggnaden smalnar, den längsta gången till en utgång från varje rum och hur lång tid den sista personen tar. Bocka i {{ui:Stängd}} på en dörr för att se vad som ändras, och bocka i {{ui:Visa personerna i 3D-vyn}} för att se gångarna. Resultaten går till Problem. En grov folkmassemodell för designbeslut, inte ett brandsäkerhetsintyg. Se [Gå igenom byggnaden med personer](topic:people-in-the-building).
- **Rumsakustik, och höra den.** Avsnittet {{ui:Rumsakustik}} ger varje rums efterklangstid per oktavband (Sabine och Eyring) utifrån dess storlek och de ytskikt du väljer, och med ett mål som du själv anger säger det hur mycket absorption som skulle behövas för att nå det. {{ui:Spela upp i det här rummet}} spelar en röst, ett klapp, plockade toner eller din egen ljudfil genom ett impulssvar beräknat för rummet. Absorptionsvärdena är typiska publicerade värden som du kan ersätta. Se [Rumsakustik](topic:room-acoustics).
- **Uppspelning av översvämning, vind och jordbävning.** {{ui:Uppspelning av fara}} spelar upp vatten som stiger genom rummen, vindtryck på varje våning och en jordbävning som skakar våningarna, på en plan eller fasad med en tidsreglage. Enkla modeller med deras antaganden på panelen; ingen kontroll mot en byggnorm. Se [Spela upp en översvämning, vind eller en jordbävning](topic:hazard-playback).
- **Vad som slits ut på femtio år.** {{ui:Livscykelvy}} listar fönster, dörrar, ytskikt och tak med en livslängd vardera, åren de byts ut och, när du skriver ett pris per enhet, kostnaden per år och dess nuvärde. {{ui:Spara schemat (CSV)}} skriver ut det. Livslängderna är planeringssiffror. Se [Se vad som slits ut på femtio år](topic:life-cycle-view).
- **Kontroller av betong och seismik.** Blocken {{ui:Betongelement}} och {{ui:Seismiska laster}} på fliken {{ui:Analys}} kontrollerar betongbalkar och -pelare enligt ACI 318-19 och tar fram ekvivalenta horisontella krafter enligt ASCE 7-22 på styva bjälklag, med våningsdrift. För en ingenjör att kontrollera. Se [Kontrollera betongelement och ta fram seismiska laster](topic:concrete-and-seismic).

**Kontrollera och rapportera**

- **Kontrollera mot en IDS.** Läs in filen `.ids` som en kund gav dig och se varje element som inte uppfyller den i Problem, innan du levererar IFC-filen. Öppna {{ui:Kontrollera mot en IDS}} under {{ui:Modellkontroller}}. Se [Kontrollera en modell mot en kunds IDS](topic:check-against-ids).
- **Taggar och scheman.** Definiera egna taggar, sätt dem på många element samtidigt och gör scheman vars kolumner, filter och grupperingar läser dem; taggarna sparas i IFC-filen. Se [Taggar och scheman](topic:tags-and-schedules).
- **Dokument från modellen.** {{ui:Dokument från modellen}} fyller en specifikationsmall från den öppna IFC-filen och sparar den som PDF, Word-dokument eller Markdown. Se [Dokument från modellen](topic:documents-from-the-model).
- **Jämför en skanning med modellen.** Med en punktmoln öppen bedömer {{ui:Jämför}} varje element som byggt, delvis byggt, saknas eller inte nått, och visar procenten byggt. Se [Jämför en skanning med modellen](topic:compare-scan-with-model).
- **Kol och kostnad.** Kolrutan summerar inbäddat koldioxidutsläpp från en faktortabell du kan redigera, och kostnadsrutan fördelar priser över 4D-schemat. Faktorerna som följer med BimCraft är generiska och markerade som ej kontrollerade. Se [Inbäddat kol och kostnad](topic:embodied-carbon-and-5d-cost).
- **Vilken kartprojektion som helst.** {{ui:Mät}} › {{ui:Koordinatsystem…}} tar ett EPSG-nummer, en UTM-zon, ett namn eller din egen projektionsdefinition. Se [Georeferera med vilken projektion som helst](topic:georeference-any-projection).

**Rita och redigera**

- **Flytta, Justera och Fördela.** Under {{ui:Bygge}}; {{key:Shift+M}} startar Flytta (vanliga {{key:M}} är fortfarande Mät). Flytta kopierar när du går med {{key:C}}, varje steg är ett ångra-steg, och det följer med i en Live TeamWork-session. Se [Flytta, kopiera, justera och fördela](topic:move-align-distribute).
- **Bilder under planen.** {{ui:Bygge}} › {{ui:Bild}} placerar en PNG, JPEG eller WebP under en nivås plan eller på ett vertikalt plan. Ange skalan med två punkter, och flytta, vrid, tona och lås den. Ett område kopierat i MarkupCraft klistras in i sin bladskala. Se [Lägg en bild under planen](topic:pictures-as-backgrounds).
- **Väggar från en skanning.** När en skanning är öppen kommer väggar, dörrar och rum som förslag som du behåller eller förkastar ett i taget, i ett ångra-steg. Endast väggar i två vinkelräta riktningar hittas. Se [Gör en skanning till väggar](topic:scan-to-walls).
- **Spår, pennor och trappa från skiss.** {{ui:Spåra}} visar en annan nivå streckad under planen, {{ui:Pennor}} ger väggar, dörrar och fönster egen linjetjocklek i en vy, och {{ui:Skissa trappa}} gör en gångled till en trappa. Ett Wavefront OBJ-nät öppnas. Se [Spåra en nivå, pennor och en trappa från en skiss](topic:trace-pens-stairs-obj).
- **Byggnader runt en adress.** Byggnaderna och fastigheten som CivilCraft's Adress till tomt hittade kommer som förslag; du bockar i de du vill lägga till. Se [Börja från CivilCrafts tomt](topic:site-from-civilcraft).
- **Elementritningar.** {{ui:Bygge}} › {{ui:Elementritningar}} ramar in väggar, bjälklag och tak i trä eller lättprofilerat stål och sparar en kapplista som CSV och verkstadsritningar som PDF. Startvärden, inte en konstruktionsberäkning. Se [Elementritningar](topic:panel-drawings).
- **Symbolpalett och växter.** {{ui:Bygge}} › {{ui:Symbolpalett}} hittar el- och VVS-symboler efter namn; källan {{ui:Växter}} i {{ui:Bibliotek}} listar omkring 400 växter med plansymboler. Se [Symbolpalett](topic:symbol-palette) och [Placera en växt](topic:plant-list).

**Rör, kanaler och energi**

- **Split, VRF och fläktkonvektorer.** Inom- och utomhusenheter med deras anslutningar, och kopplingsrör dimensionerade från en tabell med typiska exempelvärden som du kan ändra. Se [Split, VRF och fläktkonvektorer](topic:split-vrf-fan-coils).
- **Beräkningar.** Beräkningsrutan kontrollerar tilloppsrör och kanaldimensioner med tryckfall, leder kablar genom kabelbanor och rör och visar deras fyllnad, och beräknar belysningsstyrka från IES- eller EULUMDAT-filer. Standardvärden är märkta; skriv in värdena från din kod. Se [Beräkningar för rör, kanal, kabel och ljus](topic:mep-calculations).
- **PCF-filer.** Rörverktygets **Exportera PCF** skriver ledningarna till program för rörspänning och isometriska ritningar, och en PCF-fil som läses in tillbaka ritar sitt rör. Se [Filer för rördelar](topic:piping-pcf).
- **Solceller.** Montera fält på tak eller mark, skugga dem från modellen, uppskatta årsenergin, kontrollera strängar och ta fram data för ett enlinjeschema. Startmodulen och förlusterna är generiska. Se [Solceller](topic:solar-pv).
- **EnergyPlus-fil.** Rutan Kontrollera med EnergyPlus skriver modellen som en IDF att köra i din egen EnergyPlus. Att köra den i webbläsaren kräver en version du själv är värd för och skriver adressen till; BimCraft levererar den inte. Se [Kontrollera värme och kyla med EnergyPlus](topic:check-with-energyplus).

**Bilder och filer**

- **Välj renderingsmotor.** {{ui:Rendera}} har ett val {{ui:Motor}}. Våra två inbyggda motorer (Snabb och Strålspårning) förblir standard. **Öppna i** sparar scenen som en USD- eller glTF-fil, och en Unreal-projektmapp som en .zip; i CadCraft Studio kan ett tillägg lägga till en motor. Unreal-insticksprogrammet som öppnar projektet är inte släppt. Se [Välj vilket program som ritar bilden](topic:render-engines).
- **Ångra i Studio.** Inne i CadCraft Studio berättar BimCraft för Studio om varje färdigt steg, så att Studio kan ångra ditt senaste steg i det fönster du använde sist. Se [Ångra över apparna](topic:undo-across-apps).
- **Tillägg i din fil.** En IFC-fil anger vilka tillägg som skrev till den, och erbjuder de du saknar när du öppnar den. Se [Tillägg i din fil](topic:add-ons-in-your-file).

**I alla appar**

- **Anslut din AI.** Din egen assistent kan styra BimCraft via Studios anslutning och svara på frågor om modellen, till exempel vilka rum som ligger under en given yta. Studio har ingen AI av sin egen. Se [Låt en AI-assistent arbeta med din modell](topic:assistants).
- **Verktygsfältsrader.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Verktygsfältsrader}} erbjuder Bryt, 2 rader eller 1 rad; Bryt förblir standard.
- **Indatoenheter.** Styrplatta, penna, 3D-mus, handkontroll och MIDI-inställningar delas av alla appar.
- **Problem och Live.** Varningspanelen och Live-sessioner fungerar som förut, med de nya kontrollerna ovan som matar Problem.
- **Språk.** 54 språk, tio av dem nya. De som inte är engelska är maskinutkast som ännu inte lästs av en infödd talare; hjälpämnena är mestadels på engelska.

### Åtgärdat i 0.8.1

- **Menyflik + layout för Projektbläddraren.** Infoga › Importera CAD, Infoga › Bild och Hantera › Projektenheter sa ”Finns inte ännu i BimCraft”. Bild öppnar nu verktyget Bild, Importera CAD öppnar {{ui:Bygge}} › {{ui:Från en ritning…}} (DWG, DXF, PDF eller en skanning), och Projektenheter öppnar {{ui:Inställningar}} › {{ui:Global}} › {{ui:Enheter}}. Flytta och Justera kör verktygen Flytta och Justera, Nivå öppnar {{ui:Lägg till nivåer…}}, Faser öppnar avsnittet Renoveringsfaser och Material öppnar materialbiblioteket.
- **DWG-klassavsnitt.** Det lästes som fel typ; åtgärdat i BimCraft och de andra apparna som läser DWG.
- **Språk under körning.** Studio och de paketerade utgåvorna kan nu byta språk utan omstart. Detta är ännu inte testat på alla plattformar; säg till om språket inte ändras.
- **Archicad-paketskript.** `archicad_bundle.py`, en separat nedladdning, hittar nu Archicads sökväg, bevakar mappen i upp till 20 sekunder och försöker igen bredvid paketet.

### Inte i den här versionen än

- **Säkerhets- och designhjälpmedel.** Personer i byggnaden har ingen gränsdistans från en byggnorm (du skriver in gränsen) och har inte kontrollerats för hand mot en verklig plan. Akustik-, livscykel- och faresiffrorna är planeringsvärden, inte en kontroll mot en byggnorm.
- **Klimatframtider och EnergyPlus.** Inga inbyggda klimatframtider: du kan läsa in en scenariofil för översvämningskörningen. EnergyPlus-körningen i webbläsaren ingår inte i den här versionen.
- **Menyfliksplacering.** Material Takeoff ligger kvar som ”Finns inte ännu” eftersom BimCraft inte har någon materialmängdslista, och 54 andra nedtonade menyfliksverktyg har ännu inget BimCraft-verktyg bakom sig.
- **Signering och plattformar.** Windows-installerare och macOS .dmg är osignerade, så SmartScreen visar {{ui:Mer information}} och sedan {{ui:Kör ändå}}, och macOS kräver högerklick och sedan {{ui:Öppen}}. iPad- och iPhone-versionen byggdes inte om för 0.8.1.
- **Tester på riktiga sidor.** Vissa äldre webbläsartester för BimCraft misslyckas fortfarande på vår testsida, som de gjorde före 0.8.1.

Allt annat finns i [Vad som ännu inte är byggt](topic:not-built-yet). Tidigare ändringar finns i [Nyheter i 0.7](topic:whats-new-0-7).
