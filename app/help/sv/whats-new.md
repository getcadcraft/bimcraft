---
title: Nytt i 0.8 och 0.8.1
summary: BimCraft lägger till personer som går genom byggnaden, rumsakustik som du kan höra, uppspelning av översvämning, vind och jordbävning, en livscykelvy på femtio år, kontroller mot en IDS, taggar och förteckningar, Flytta, Justera och Fördela, bilder under planen, väggar från en skanning, elementritningar, sol, split- och VRF-system, dimensionering av rör och kablar, betong- och seismiska kontroller, valfri kartprojektion, ett val av renderingsmotor och Studio-ångra; 0.8.1 åtgärdar de nedtonade verktygen i menyflikens layout.
keywords: nyheter, vad är nytt, versionsinformation, ändringslogg, ändringar, 0.8, 0.8.1, version, nya funktioner, utrymning, människor, köer, akustik, efterklang, impulssvar, översvämning, vind, jordbävning, fara, livscykel, livslängd, ids, taggar, förteckningar, flytta, justera, fördela, bild, bakgrund, skanning till väggar, tomt från civilcraft, elementritningar, stomme, sol, pv, split, vrf, fläktkonvektor, rördimensionering, kabelstege, belysningsstyrka, betong, seismisk, jämför skanning, epsg, projektion, dokument, mall, koldioxid, kostnad, energyplus, renderingsmotor, öppna i, usd, glb, unreal, ångra, tillägg, pcf, symboler, växter, spåra, pennor, menyflik, projektbläddrare, layout
from: 87b03056
---

Detta är vad som ändrats i BimCraft 0.8 (2026-11-01) och 0.8.1 (2026-11-02), jämfört med 0.7. BimCraft kan nu svara på frågor om en byggnad och testa den, med människor, ljud, vatten, vind och jordbävningar, och rita den med fler verktyg; 0.8.1 är en felrättningsversion.

## Nytt

### Testa byggnaden

- **Människor i byggnaden.** Avsnittet {{ui:People in the building}} i vänstra panelen låter en utrymning eller en vanlig dags ankomster gå genom dina rum, dörrar och trappor. Du ser köerna där byggnaden smalnar, den längsta gången till en utgång från varje rum och hur lång tid den sista personen tar. Markera {{ui:Stängd}} på en dörr för att se vad som ändras, och markera {{ui:Visa personerna i 3D-vyn}} för att se gångarna. Resultaten går till Problem. En grov folkmodell för designbeslut, inte ett brandsäkerhetsintyg. Se [Låt personer gå genom byggnaden](topic:people-in-the-building).
- **Rumsakustik, och höra den.** Avsnittet {{ui:Rumsakustik}} ger varje rums efterklangstid per oktavband (Sabine och Eyring) utifrån dess storlek och de ytskikt du väljer, och med ett eget mål säger det hur mycket absorption som skulle krävas. {{ui:Spela upp i det här rummet}} spelar upp en röst, ett klapp, plockade toner eller din egen ljudfil genom ett impulssvar beräknat för rummet. Absorptionsvärdena är typiska publicerade värden som du kan ersätta. Se [Rumsakustik](topic:room-acoustics).
- **Uppspelning av översvämning, vind och jordbävning.** {{ui:Uppspelning av fara}} spelar upp vatten som stiger genom rummen, vindtryck på varje våning och en jordbävning som skakar våningarna, på en plan eller en fasad, med en tidsreglage. Enkla modeller med sina antaganden på panelen; inte en kontroll mot regelverk. Se [Spela upp en översvämning, vind eller en jordbävning](topic:hazard-playback).
- **Vad som slits ut på femtio år.** {{ui:Livscykelvy}} listar fönster, dörrar, ytskikt och tak med en livslängd vardera, de år de byts ut och, när du skriver in en kostnad per enhet, kostnaden per år och dess nuvärde. {{ui:Spara schemat (CSV)}} skriver ut det. Livslängderna är planeringsvärden. Se [Se vad som slits ut under femtio år](topic:life-cycle-view).
- **Betong- och seismiska kontroller.** Blocken {{ui:Betongelement}} och {{ui:Seismiska laster}} under fliken {{ui:Analys}} kontrollerar betongbalkar och pelare enligt ACI 318-19 och beräknar ekvivalenta horisontella krafter enligt ASCE 7-22 på styva bjälklag, med våningsdrift. För en ingenjör att kontrollera. Se [Kontrollera betongelement och ta fram seismiska laster](topic:concrete-and-seismic).

### Kontrollera och rapportera

- **Kontrollera mot en IDS.** Läs in den `.ids`-fil en kund gav dig och se varje element som inte uppfyller den i Problem, innan du levererar IFC-filen. Öppna {{ui:Kontrollera mot en IDS}} under {{ui:Modellkontroller}}. Se [Kontrollera en modell mot en kunds IDS](topic:check-against-ids).
- **Taggar och förteckningar.** Definiera egna taggar, sätt dem på många element samtidigt och skapa förteckningar vars kolumner, filter och grupper läser dem; taggarna sparas i IFC-filen. Se [Taggar och förteckningar](topic:tags-and-schedules).
- **Dokument från modellen.** {{ui:Dokument från modellen}} fyller i en specifikationsmall från den öppna IFC-filen och sparar den som PDF, Word-dokument eller Markdown. Se [Dokument från modellen](topic:documents-from-the-model).
- **Jämför en skanning med modellen.** Med ett punktmoln öppet bedömer {{ui:Jämför}} varje element som byggt, delvis byggt, saknas eller inte nått, och visar procent byggt. Se [Jämför en skanning med modellen](topic:compare-scan-with-model).
- **Koldioxid och kostnad.** Rutan Koldioxid summerar inbäddad koldioxid utifrån en faktortabell som du kan redigera, och rutan Kostnad fördelar priser över 4D-schemat. Faktorerna som följer med BimCraft är generiska och märkta som ej kontrollerade. Se [Inbäddad koldioxid och kostnad](topic:embodied-carbon-and-5d-cost).
- **Valfri kartprojektion.** {{ui:Mät}} › {{ui:Koordinatsystem…}} tar ett EPSG-nummer, en UTM-zon, ett namn eller din egen projektionsdefinition. Se [Georeferera med valfri projektion](topic:georeference-any-projection).

### Rita och redigera

- **Flytta, Justera och Fördela.** Under {{ui:Bygge}}; {{key:Shift+M}} startar Flytta (vanlig {{key:M}} är fortfarande Mät). Flytta kopierar medan du går med {{key:C}}, varje steg är ett ångra-steg, och det följer med i en Live TeamWork-session. Se [Flytta, kopiera, justera och fördela](topic:move-align-distribute).
- **Bilder under planen.** {{ui:Bygge}} › {{ui:Bild}} placerar en PNG-, JPEG- eller WebP-bild under en nivås plan eller på ett vertikalt plan. Ange skalan med två punkter, och flytta, vrid, tona och lås den. Ett område som kopieras i MarkupCraft klistras in i sitt blads skala. Se [Lägg en bild under planen](topic:pictures-as-backgrounds).
- **Väggar från en skanning.** Med en skanning öppen kommer väggar, dörrar och rum som förslag som du behåller eller förkastar ett i taget, i ett enda ångra-steg. Endast väggar i två vinkelräta riktningar hittas. Se [Gör om en skanning till väggar](topic:scan-to-walls).
- **Spåra, pennor och skissa trappa.** {{ui:Spåra}} visar en annan nivå streckad under planen, {{ui:Pennor}} ger väggar, dörrar och fönster en egen linjetjocklek i en och samma vy, och {{ui:Skissa trappa}} gör en gånglinje till en trappa. En Wavefront OBJ-nät öppnas. Se [Spåra en nivå, pennor och en trappa från en skiss](topic:trace-pens-stairs-obj).
- **Byggnader runt en adress.** Byggnaderna och fastigheten som CivilCrafts Adress till tomt hittade kommer som förslag; du markerar de du vill lägga till. Se [Börja från CivilCrafts tomt](topic:site-from-civilcraft).
- **Elementritningar.** {{ui:Bygge}} › {{ui:Elementritningar}} ramar in väggar, bjälklag och tak i trä eller lättprofilstål och sparar en kapplista som CSV och verkstadsritningar som PDF. Startvärden, inte en konstruktionsberäkning. Se [Elementritningar](topic:panel-drawings).
- **Symbolpalett och växter.** {{ui:Bygge}} › {{ui:Symbolpalett}} hittar el- och VVS-symboler efter namn; källan {{ui:Växter}} i {{ui:Bibliotek}} listar cirka 400 växter med planssymboler. Se [Symbolpalett](topic:symbol-palette) och [Placera en växt](topic:plant-list).

### Rör, kanaler och energi

- **Split, VRF och fläktkonvektorer.** Inom- och utomhusenheter med deras anslutningar, och köldmediumledningar dimensionerade utifrån en tabell med typiska exempelvärden som du kan ändra. Se [Split, VRF och fläktkonvektorer](topic:split-vrf-fan-coils).
- **Beräkningar.** Panelen Beräkningar kontrollerar dimensioner på tilloppsrör och kanaler med tryckfall, drar kablar genom kabelstegar och rör och visar deras fyllnadsgrad, och beräknar belysningsstyrka från IES- eller EULUMDAT-filer. Standardvärden är märkta; skriv in värdena från din egen norm. Se [Beräkningar för rör, kanal, kabel och ljus](topic:mep-calculations).
- **PCF-filer.** Rörverktygets **Exportera PCF** skriver ut ledningarna för program för rörspänning och isometri, och en PCF-fil som läses in ritar sitt rör. Se [Rörkomponentfiler](topic:piping-pcf).
- **Solceller (PV).** Placera paneler på tak eller mark, skugga dem från modellen, uppskatta årlig energi, kontrollera strängar och ta fram data för enlinjeschema. Startmodulen och förlusterna är generiska. Se [Solceller (PV)](topic:solar-pv).
- **EnergyPlus-fil.** Panelen Kontrollera med EnergyPlus skriver modellen som en IDF-fil att köra i din egen EnergyPlus. Att köra den i webbläsaren kräver en version som du själv är värd för och skriver adressen till; BimCraft innehåller den inte. Se [Kontrollera värme och kyla med EnergyPlus](topic:check-with-energyplus).

### Bilder och filer

- **Välj renderingsmotor.** {{ui:Rendera}} har ett val {{ui:Motor}}. Våra två inbyggda motorer (Fast och Path tracer) är fortfarande standard. **Öppna i** sparar scenen som en USD- eller glTF-fil, och en Unreal-projektmapp som en .zip-fil; i CadCraft Studio kan ett tillägg lägga till en motor. Unreal-insticksprogrammet som öppnar projektet är inte släppt. Se [Välj vilket program som ritar bilden](topic:render-engines).
- **Ångra i Studio.** I CadCraft Studio talar BimCraft om för Studio varje avslutat steg, så att Studio kan ångra ditt senaste steg i det fönster du använde senast. Se [Ångra över apparna](topic:undo-across-apps).
- **Tillägg i din fil.** En IFC-fil noterar vilka tillägg som skrev till den, och erbjuder de du saknar när du öppnar den. Se [Tillägg i din fil](topic:add-ons-in-your-file).

### I varje app

- **Anslut din AI.** Din egen assistent kan styra BimCraft via Studios anslutning och svara på frågor om modellen, till exempel vilka rum som ligger under ett visst område. Studio har ingen egen AI. Se [Låt en AI-assistent arbeta med din modell](topic:assistants).
- **Verktygsfältsrader.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Verktygsfältsrader}} erbjuder Radbryt, 2 rader eller 1 rad; Radbryt är fortfarande standard.
- **Indatorer.** Styrplatta, penna, 3D-mus, kontroller och MIDI-inställningar delas av alla appar.
- **Problem och Live.** Varningspanelen och Live-sessioner fungerar som tidigare, med de nya kontrollerna ovan som matar Problem.
- **Språk.** 54 språk, varav tio är nya. De som inte är engelska är maskinöversättningar som ännu inte har granskats av en modersmålstalare; hjälpämnena är mestadels på engelska.

## Åtgärdat i 0.8.1

- **Menyflik och layout för projektbläddraren.** Infoga › Importera CAD, Infoga › Bild och Hantera › Projektenheter visade "Finns inte i BimCraft ännu". Bild öppnar verktyget Bild, Importera CAD öppnar {{ui:Bygge}} › {{ui:Från en ritning…}} (DWG, DXF, PDF eller en skanning), och Projektenheter öppnar {{ui:Inställningar}} › {{ui:Globalt}} › {{ui:Enheter}}. Flytta och Justera kör verktygen Flytta och Justera, Nivå öppnar {{ui:Lägg till nivåer…}}, Faser öppnar avsnittet Renoveringsfaser och Material öppnar materialbiblioteket.
- **Avsnittet DWG-klasser.** Det lästes som fel typ; åtgärdat i BimCraft och de andra apparna som läser DWG.
- **Språk vid körning.** Studio och de paketerade utgåvorna kan nu byta språk utan omstart. Detta är ännu inte testat på alla plattformar; säg till om språket inte ändras.
- **Skript för Archicad-paket.** `archicad_bundle.py`, en separat nedladdning, hittar nu Archicads sökväg, bevakar mappen i upp till 20 sekunder och försöker igen bredvid paketet.

## Ännu inte i denna version

- **Säkerhets- och designhjälpmedel.** Människor i byggnaden har ingen gränslängd för gångavstånd från ett byggregelverk (du skriver in gränsen) och har inte kontrollerats för hand mot en verklig ritning. Akustik-, livscykel- och faruppskattningarna är planeringsvärden, inte en kontroll mot regelverk.
- **Klimatframtider och EnergyPlus.** Inga inbyggda klimatframtider: du kan läsa in en scenariofil för översvämningskörningen. EnergyPlus-körningen i webbläsaren ingår inte i den här versionen.
- **Menyflikens layout.** Materialmängdavtagning står kvar som "Finns inte ännu" eftersom BimCraft saknar en materialmängdförteckning, och 54 andra nedtonade verktyg i menyfliken har inget BimCraft-verktyg bakom sig ännu.
- **Signering och plattformar.** Windows-installationsprogrammen och macOS .dmg-filen är osignerade, så SmartScreen visar {{ui:Mer information}} och sedan {{ui:Kör ändå}}, och macOS kräver högerklick och sedan {{ui:Öppen}}. iPad- och iPhone-bygget byggdes inte om för 0.8.1.
- **Tester på riktiga sidor.** Vissa äldre BimCraft-webbläsartester misslyckas fortfarande på vår testsida, som de gjorde före 0.8.1.

Allt annat finns i [Vad som ännu inte finns](topic:not-built-yet). Tidigare ändringar finns i [Nytt i 0.7](topic:whats-new-0-7).
