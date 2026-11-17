---
title: Rör och kanaler
summary: Rita rör- och kanalledningar i planen efter deras mittlinjer; böjar, T-stycken, reducerare och övergångar görs åt dig, ledningarna tillhör system med anslutna portar i IFC-filen, och de visas i planer, förteckningar och mängdavtagningen.
keywords: rör, rördragning, VVS, kanal, kanaler, kanalsystem, ventilation, mep, mekanik, böj, T-stycke, reducering, övergång, kopplingsdel, kopplingsdelar, ventil, ventiler, klotventil, kulventil, backventil, stigare, lutning, avlopp, spillvatten, dagvatten, ventilationsledning, kallvatten, varmvatten, kylvatten, värme, gas, brandskydd, tilluft, frånluft, avluft, system, portar, anslutning, anslutningar, armatur, armaturer, sanitetsarmatur, handfat, diskbänk, toalett, WC, tvättställ, duschkar, tvättho, enhetsvärden, uhc, dfu, dimensionera avloppen, avloppsdimensionering, huvudavlopp, grenledning, luftflöde, cfm, friktion, lika friktion, dimensionering, förteckning, mängdavtagning, nbr, nbr 5648, nbr 5688, nbr 8160, limmad PVC, avlopp, dn
from: 85140bc5
---

## Det här gör du

Rita en byggnads rör och kanaler på samma sätt som du ritar väggar: klicka i hörnen på en lednings mittlinje på den höjd du ställt in. BimCraft gör kopplingsdelarna, lägger varje del i sitt system och ansluter dem, så att andra program läser ledningen som ett enda sammanhängande system.

## Rita ett rör

1. Slå på {{ui:Rita}}, öppna {{ui:Bygge}} och välj {{ui:Rör}}.
2. I verktygsfältet väljer du **systemet** (kallvatten, varmvatten, spillvattenavlopp, gas…). Det anger ett vanligt material: koppar för vatten, PVC för avlopp och ventilation, stål för värme, kylvatten, gas och brandskydd. Ändra **material**, **klass** och **storlek** om du behöver. Storlekar och väggtjocklekar kommer från publika standarder: stålrör ASME B36.10M, kopparrör ASTM B88, PVC ASTM D1785 och PEX ASTM F876. Brasilianska projekt kan använda **PVC-vattenrör (NBR 5648)**, den limmade PVC:n för kallvatten, och **PVC-avloppsrör (NBR 5688)**, normal eller förstärkt serie, för avlopp och ventilation: deras storlekar anges med DN (DN 25, DN 100). När du har valt ett av dem håller ett annat system sig till de brasilianska rören (PVC-avloppsrör för spillvattenavlopp efter PVC-vattenrör).
3. Ställ in **Vid**: höjden för rörets mittlinje ovanför nivån.
4. Klicka där röret börjar, sedan på varje hörn. Dubbelklicka, eller tryck på {{key:Enter}}, vid den sista punkten. {{key:Backspace}} tar tillbaka det sista hörnet; {{key:Esc}} släpper ledningen.

Röret snäpper som väggar gör, och mot andra ledningar: börja på ett rörs ände för att fortsätta från det, eller sluta på ett rörs linje för att grena av från det. En ny ledning tar höjden för röret den snäpper till.

En ledning som startar eller slutar på en utrustningsports tar dess storlek och system och sitter fast vid den: se [MEP-utrustning med portar](topic:mep-equipment) och [Anslut rör och kanaler till utrustning](topic:mep-connections).

## Ange projektets VVS-standard

Den första listan i rörverktygsfältet är modellens **VVS-standard**: **USA (IPC, tum)** eller **Brasilien (ABNT, DN)**. Den sparas i modellen, så alla som öppnar filen börjar rita ledningar på samma sätt. Med **USA** börjar en ny ledning i koppar (vatten) eller PVC Schedule 40 (avlopp), i tum, med International Plumbing Codes lutning. Med **Brasilien** börjar kallvatten som PVC soldável DN 25, spillvatten- och dagvattenavlopp och ventilation som PVC esgoto DN 100 med NBR 8160:s lutning, och varmvatten i koppar. Det gäller också en ledning som startar på en armaturs kopplingspunkt eller en utrustningsport. Rör som redan ritats behåller sitt material och sina egna tabeller; materiallistan är fortfarande öppen, så du kan fortfarande rita en brasiliansk ledning i en amerikansk modell med avsikt. En fil utan val beter sig som förut: en ny ledning följer materialet som används.

## Rita en kanal

1. Välj {{ui:Kanal}}. Välj systemet (tilluft, frånluft, avluft eller uteluft) och formen: rund, rektangulär eller platt oval.
2. Skriv bredd och höjd (en rund kanals bredd är dess diameter), och **Vid** för mittlinjens höjd.
3. För att dimensionera den efter luftflödet skriver du **Luftflöde** och **Friktion** och klickar på {{ui:Dimensionera}}. Kanalen dimensioneras med lika friktion, metoden i kanalkonstruktionskapitlet i ASHRAE Handbook, och avrundas uppåt till en lagerförd storlek, så att friktionen blir lika med eller under den sats du skrev. Utan skriven sats används 0.08 in. vatten per 100 ft (0.8 Pa/m). En rektangulär kanal behåller höjden du skrev och får en bredd; BimCraft säger det när dess sidor är mer än 4 till 1.
4. Klicka på hörnen som för ett rör.

## Sanitetsarmaturer

{{ui:Bygge}} › {{ui:Placera familj}} erbjuder fem armaturer att börja från, var och en med ett avlopp och en kallvattenkoppling: en **Toalettstol**, ett **Tvättställ**, en **Diskbänk**, ett **Duschkar** och en **Tvättho**. Deras framsida vetter mot dig när du placerar dem och baksidan står mot väggen. Deras avlopp ligger vid den minsta armaturavloppsdimensionen enligt NBR 8160 (DN 100 för toalettstolen, DN 50 för diskbänken, DN 40 för de andra); vatten är DN 20. Ändra deras storlekar, eller redigera dem, som vilken familj som helst: se [Familjer och deras storlekar](topic:families).

En familj anger vilken armatur den är under {{ui:Sanitetsarmatur}} på fliken {{ui:Kopplingspunkter}} i familjeredigeraren. Dess avlopp räknas då i armaturenheter: 6 UHC för en toalettstol, 1 för ett tvättställ, 3 för en diskbänk eller en tvättho, 2 för en dusch (NBR 8160), eller de avloppsenheter för armaturer som anges i IPC Table 709.1.

## Från en armaturs kopplingspunkt

Element som placerats från en familj med kopplingspunkter (ett handfats avlopp och kran, en luftterminals hals: se [Redigera en familj](topic:family-editor)) visar sina lediga kopplingspunkter som punkter medan {{ui:Rör}} eller {{ui:Kanal}} är på, och pekaren snäpper till dem.

- **Starta på en kopplingspunkt**: ledningen tar sitt system och sin storlek (röret av verktygsfältets material vid eller strax över kopplingens storlek; en rund kanal av dess diameter). När kopplingen pekar nedåt eller uppåt, som ett avlopp under ett handfat, går ledningen först rakt ned eller upp till höjden i **Vid**, och fortsätter sedan efter dina klick.
- **Sluta på en kopplingspunkt**: ledningen går ned eller upp till den och slutar där.

Ledningen är ansluten till elementet i IFC-filen, så andra program ser armaturen som en del av sitt system. Ett element som placeras senare med en koppling i änden av en ledning ansluts också till den. En ledning som flyttas bort från en koppling är inte längre ansluten till den.

## Kopplingsdelarna, gjorda åt dig

| Var | Vad BimCraft gör |
|---|---|
| En ledning svänger | En böj. Stålrör i långradien enligt ASME B16.9 (1.5 × storleken), annat rör på en ytterdiameter, rund kanal på 1.5 diametrar, rektangulär kanal på en bredd (eller en höjd för en sväng upp eller ned) |
| En ledning slutar på en annan ledning linje | Ett T-stycke; den andra ledningen delas där |
| Två ledningar möts ände mot ände i olika storlekar | En reducering (rör) eller en övergång (kanaler) |
| Två ledningar av samma storlek möts ände mot ände i en vinkel | En böj |

När du ändrar, flyttar eller tar bort en ledning görs varje kopplingsdel på den våningen om. Om ett ben är för kort för kopplingsdelarna i dess ändar säger BimCraft det och ändrar ingenting: flytta hörnet längre bort.

:::note
Kopplingsdelarna och ventilerna är generiska: ritade efter rör- eller kanalstorleken, inte efter en tillverkares katalog. Muffkopplingar, pressfogar och spårkopplingar, ventilkroppar och utrustning har tillverkarnas egna storlekar; kontrollera dem med din leverantör innan du beställer.
:::

## Stigare

Medan du ritar skriver du en ny höjd i **Vid** och trycker på {{key:Enter}}: ledningen går rakt upp eller ned vid det sista hörnet, med en böj i varje ände. En stigare kan gå upp in i våningen ovanför. Varje våning visar de delar av en ledning som dess visningsintervall når, med **UP** eller **DN** vid stigaren.

## Avlopp och deras lutning

Spillvatten- och dagvattenavlopp startar vid den minsta lutning International Plumbing Code tillåter för deras storlek: 1/4 in. per ft upp till 2-1/2 in., 1/8 in. per ft från 3 till 6 in., 1/16 in. per ft från 8 in. Brasiliansk PVC-avloppsrör startar vid NBR 8160:s lutning: 2 % upp till DN 75, 1 % från DN 100. Skriv en annan lutning i verktygsfältet eller i {{ui:Egenskaper}}: `1/4"/ft`, `2 %` eller `1:50`. Ledningen faller från sin första punkt, så rita avlopp i den riktning de rinner. Planen visar fallet och en pil. {{ui:Egenskaper}} varnar när ett avlopp är flackare än kodens minimum.

## Dimensionera avloppen efter armaturenheter

Välj ett spillvattenavlopp: **Armaturenheter** i {{ui:Egenskaper}} säger hur många den bär och den minsta storlek de behöver. Varje sanitetsarmatur vars avloppskoppling ligger på ledningen räknas, och så gör varje avlopp som rinner in i den: rita avlopp i den riktning de rinner, och låt varje avlopp sluta på det avlopp det rinner in i.

- Avlopp i brasiliansk PVC-avloppsrör räknar **UHC** och följer NBR 8160; de andra räknar **DFU** och följer International Plumbing Code.
- **Avlopp**: en **Grenledning** dimensioneras efter kodens tabell för armaturgrenar; ett **Huvudavlopp** efter dess tabell efter lutning, så dess **Lutning** spelar roll.
- Ett avlopp är aldrig mindre än de armaturavlopp det betjänar (en toalettstol behöver DN 100, eller 3 in.), och inte mindre än ett avlopp som rinner in i det. Enligt NBR 8160 är ett huvudavlopp minst DN 100.

{{ui:Dimensionera avloppen}} gör varje spillvattenavlopp i modellen som är för litet för sina armaturenheter till den storlek det behöver, som ett steg du kan ångra. Ett avlopp som ritats större än det behöver lämnas som det är. När ett avlopp bär mer än den största storleken på dess rör kan bära vid dess lutning säger BimCraft det: ge det en brantare lutning eller ett annat rör.

:::note
Tabellerna är de för horisontella avlopp. Stammar, ventilationsledningar och dagvattenavlopp dimensioneras inte här: kontrollera dem, och hela konstruktionen, mot den kod som gäller för projektet.
:::

## Ventiler

1. Välj {{ui:Ventil}} och typen: spjällventil, kulventil, klotventil eller backventil.
2. Klicka på ett rör där den ska sitta. Röret delas runt den och ventilen ansluts till båda sidorna.

{{ui:Egenskaper}} för ledningen listar dess ventiler, var och en med {{ui:Ta bort}}.

Fler ventiltyper, ett filter, spjäll i kanaler, egna rörspecer och tillverkares familjer: se [Rörspecifikationer, ventiler, spjäll och tillverkares familjer](topic:pipe-specs).

## Ändra en ledning

Välj vilken del som helst av en ledning, i planen eller 3D-vyn. I {{ui:Egenskaper}}:

- **System**, **Material**, **Klass** och **Storlek** (rör), eller **Form**, **Bredd**, **Höjd** (kanaler).
- **Höjd över nivån** flyttar hela ledningen upp eller ned.
- **Isolering**: dess tjocklek, sparad för kontrollen av utrymme och lista över öppningar (inget ritas för den): se [Kontrollera rör och kanaler mot konstruktionen](topic:mep-against-structure).
- Stålrör: **Dela i spolar**: se [Rörspolar och rörspolblad i stål](topic:pipe-spools).
- **Lutning** (rör).
- **Flöde** med {{ui:Dimensionera}}: för vatten den minsta storleken som håller vattnet vid 8 ft/s (2.4 m/s), eller 5 ft/s (1.5 m/s) för varmvatten; vid 3 m/s för brasiliansk PVC-vattenrör (NBR 5626). För kanaler kanalens hastighet och friktion som den ritats. Spillvattenavlopp dimensioneras i stället efter sina armaturenheter: se **Dimensionera avloppen efter armaturenheter** nedan.

Varje ändring är ett steg i {{ui:Ångra}}. {{key:Delete}} tar bort hela ledningen.

## Planer

- Rör mindre än 150 mm (cirka 6 in.) ritas som en linje på deras mittlinje, större rör och alla kanaler som två linjer på deras bredd.
- Varje system har sin egen färg; plan-PDF:en skriver ut dem i svart.
- Varje ledning märks med sin storlek och sitt system (till exempel `2" CW` eller `16×10 SA`).
- En plans visningsintervall avgör vilka ledningar den visar, och {{ui:Visas i den här planen}} kan utelämna **Rör** eller **Kanaler**: se [Vyer, visningsintervall och egna ark](topic:views-and-sheets).

## Förteckningar och mängdavtagningen

Panelen {{ui:Förteckningar}} lägger till **Rör** (efter system, material och storlek, med deras längder), **Kanaler** (efter system, form och storlek, med längder och yttre ytarea) och **Kopplingsdelar och ventiler** (efter typ och storlek, räknade). Klicka på en rad för att välja vad den listar; {{ui:Ladda ner CSV}} laddar ner den.

{{ui:Mängdavtagning}} tar med ledningarna till TakeoffCraft: rör och kanal efter storlek som ledningar ritade i planen (lutande avlopp mäts längs sin lutning), kopplingsdelar och ventiler räknade där de sitter: se [Skicka modellens kvantiteter till TakeoffCraft](topic:takeoff). Stigare utelämnas från det bladet, eftersom en plan inte kan mäta dem; förteckningen Rör har deras längd.

## I IFC-filen

Varje ledning är en sammanställning som innehåller sina delar: rör- och kanalsegment, kopplingsdelar och ventiler, var och en med sin typ, sitt material, en färg för sitt system och sina portar. Portar som rör vid varandra är anslutna, och varje del tillhör sitt distributionssystem (IFC2X3-filer får detsamma som flödessegment, kopplingsdelar och styrenheter i ett system). Andra program som läser IFC-system ser en sammanhängande ledning per system. Ledningens egen definition sparas med den, så att BimCraft gör om den på samma sätt när du ändrar den.
