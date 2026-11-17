---
title: Rør og kanaler
summary: Tegn rør- og kanalstrekninger i plan etter senterlinjene deres; bend, T-stykker, reduksjoner og overganger lages for deg, strekningene hører til systemer med tilkoblede porter i IFC-filen, og de vises i planer, tabeller og mengdeuttaket.
keywords: rør, rør, rørledninger, sanitær, kanal, kanaler, kanalsystem, vvs, mep, mekanisk, bend, T-stykke, reduksjon, overgang, rørdel, rørdeler, ventil, ventiler, kulventil, kuleventil, globeventil, tilbakeslagsventil, stigestreng, fall, avløp, sanitær, storm, ventilasjon, kaldtvann, varmtvann, kjølt vann, oppvarming, gass, brannvern, tilluft, returluft, avtrekk, system, systemer, port, porter, kobling, koblinger, apparat, apparater, sanitærutstyr, servant, vask, toalett, dusj, vaskekar, enhetsverdier, uhc, dfu, dimensjoner avløpene, avløpsdimensjonering, sanitær grein, grein, samleledning, luftmengde, friksjon, lik friksjon, dimensjonering, tabell, mengdeuttak, nbr, nbr 5648, nbr 5688, nbr 8160, pvc soldável, esgoto, dn
from: 85140bc5
---

## Hva du gjør

Tegn rørene og kanalene i en bygning slik du tegner vegger: klikk på hjørnene i en streknings senterlinje i høyden du har satt. BimCraft lager rørdelene, legger hver del i sitt system og kobler dem, slik at andre programmer leser strekningen som ett sammenhengende system.

## Tegn et rør

1. Slå på {{ui:Draw}}, åpne {{ui:Build}} og velg {{ui:Pipe}}.
2. Velg **system** i linjen (kaldtvann, varmtvann, sanitært avløp, gass ...). Det setter et vanlig materiale: kobber for vann, PVC for avløp og ventilasjon, stål for oppvarming, kjølt vann, gass og brannvern. Endre **material**, **class** og **size** hvis du trenger det. Størrelser og vegger hentes fra offentlige standarder: stålrør ASME B36.10M, kobberrør ASTM B88, PVC ASTM D1785 og PEX ASTM F876. Brasilianske prosjekter kan bruke **PVC water pipe (NBR 5648)**, PVC limt for kaldtvann, og **PVC drain pipe (NBR 5688)**, série normal eller forsterket, for avløp og ventilasjon: størrelsene deres angis med DN (DN 25, DN 100). Når du velger en av dem, holder et annet system seg til de brasilianske rørene (PVC avløpsrør for et sanitært avløp etter PVC vannrør).
3. Sett **At**: høyden på rørets senterlinje over nivået.
4. Klikk der røret starter, deretter på hvert hjørne. Dobbeltklikk, eller trykk {{key:Enter}}, ved siste punkt. {{key:Backspace}} tar tilbake siste hjørne; {{key:Esc}} forkaster strekningen.

Røret fester seg som vegger gjør, og til andre strekninger: start på et rørs ende for å fortsette fra den, eller slutt på et rørs linje for å grene av. En ny strekning får høyden til røret den fester seg til.

En strekning som starter eller slutter på en port på et utstyr, får dets størrelse og system og sitter fast til det: se [MEP-utstyr med porter](topic:mep-equipment) og [Koble rør og kanaler til utstyr](topic:mep-connections).

## Sett prosjektets sanitærstandard

Den første listen i rørlinjen er modellens **sanitærstandard**: **US (IPC, inches)** eller **Brazil (ABNT, DN)**. Den lagres i modellen, slik at alle som åpner filen starter strekninger på samme måte. Under **US** starter en ny strekning i kobber (vann) eller PVC Schedule 40 (avløp), i tommer, med fallet fra International Plumbing Code. Under **Brazil** starter kaldtvann som PVC soldável DN 25, sanitære avløp og takvann og ventilasjon som PVC esgoto DN 100 med fallet i NBR 8160, og varmtvann i kobber. Det gjelder også en strekning som starter på en koblingsport til et apparat eller en utstyrsport. Rør som allerede er tegnet, beholder materialet og sine egne tabeller; materiallisten er fortsatt åpen, så du kan fortsatt tegne én brasiliansk strekning i en amerikansk modell med vilje. En fil uten valg oppfører seg som før: en ny strekning følger materialet i bruk.

## Tegn en kanal

1. Velg {{ui:Duct}}. Velg systemet (tilluft, returluft, avtrekk eller uteluft) og formen: rund, rektangulær eller flat oval.
2. Skriv inn bredden og høyden (en rund kanals bredde er diameteren), og **At** for høyden på senterlinjen.
3. For å dimensjonere den ut fra luftmengden, skriv inn **Airflow** og **Friction**-raten og klikk {{ui:Size it}}. Kanalen dimensjoneres etter lik friksjon, metoden i kanalkapitlet i ASHRAE Handbook, og rundes opp til en lagerført størrelse, slik at friksjonen blir på eller under raten du skrev inn. Uten en skrevet rate brukes 0,08 in. vann per 100 ft (0,8 Pa/m). En rektangulær kanal beholder høyden du skrev inn og får en bredde; BimCraft sier fra når sidene er mer enn 4 til 1.
4. Klikk på hjørnene som for et rør.

## Sanitærutstyr

{{ui:Build}} › {{ui:Place family}} tilbyr fem apparater å starte fra, hver med et avløp og en kaldtvannskobling: en **Water closet** (toalett), en **Lavatory** (servant), en **Kitchen sink** (kjøkkenvask), en **Shower tray** (dusjkar) og en **Laundry tub** (vaskekar). Frontene deres vender mot deg når du plasserer dem, og baksiden står mot veggen. Avløpene deres er ved minste apparatavløp i NBR 8160 (DN 100 for toalettet, DN 50 for kjøkkenvasken, DN 40 for de andre); vann er DN 20. Endre størrelsene, eller rediger dem, som enhver familie: se [Familier og deres størrelser](topic:families).

En familie sier hvilket apparat den er under {{ui:Plumbing fixture}} på fanen {{ui:Connectors}} i familieredigeringen. Avløpet telles da i enhetsverdier: 6 UHC for et toalett, 1 for en servant, 3 for en kjøkkenvask eller et vaskekar, 2 for en dusj (NBR 8160), eller drenerings-enhetsverdiene i IPC Table 709.1.

## Fra et apparats kobling

Elementer plassert fra en familie med koblinger (et vaskebasseng sitt avløp og kran, eller en luftterminals hals: se [Rediger en familie](topic:family-editor)) viser sine frie koblinger som punkter mens {{ui:Pipe}} eller {{ui:Duct}} er på, og pekeren fester seg til dem.

- **Start på en kobling**: strekningen tar systemet og størrelsen sin (røret i linjens materiale på eller like over koblingens størrelse; en rund kanal av dens diameter). Når koblingen peker ned eller opp, slik et avløp under et vaskebasseng gjør, går strekningen først rett ned eller opp til høyden i **At**, og deretter videre etter klikkene dine.
- **Slutt på en kobling**: strekningen går ned eller opp til den og ender der.

Strekningen er koblet til elementet i IFC-filen, slik at andre programmer ser apparatet som en del av systemet sitt. Et element som plasseres senere med en kobling på enden av en strekning, er også koblet til den. En strekning som flyttes bort fra en kobling, er ikke lenger koblet til den.

## Rørdelene, laget for deg

| Hvor | Hva BimCraft lager |
|---|---|
| En strekning svinger | Et bend. Stålrør med langradius etter ASME B16.9 (1,5 × størrelsen), annet rør med én utvendig diameter, rund kanal med 1,5 diametre, rektangulær kanal med én bredde (eller én høyde ved sving opp eller ned) |
| En strekning ender på en annen streknings linje | Et T-stykke; den andre strekningen deles der |
| To strekninger møter hverandre ende mot ende i ulike størrelser | En reduksjon (rør) eller en overgang (kanaler) |
| To strekninger av én størrelse møter hverandre ende mot ende i en vinkel | Et bend |

Når du endrer, flytter eller sletter en strekning, lages hver rørdel på det nivået på nytt. Hvis et ben er for kort for rørdelene i endene, sier BimCraft fra og endrer ingenting: flytt hjørnet lenger unna.

:::note
Rørdelene og ventilene er generiske: tegnet ut fra rørets eller kanalens størrelse, ikke fra en produsents katalog. Muffe-, presse- og sponterte rørdeler, ventilhus og utstyr har produsentenes egne størrelser; kontroller dem med leverandøren din før du bestiller.
:::

## Stigestrenger

Mens du tegner, skriver du en ny høyde i **At** og trykker {{key:Enter}}: strekningen går rett opp eller ned ved siste hjørne, med et bend i hver ende. En stigestreng kan gå opp til nivået over. Hvert nivå viser delene av en strekning som visningsomfanget når, med **UP** eller **DN** ved stigestrengen.

## Avløp og deres fall

Sanitære og stormavløp starter med det minste fallet International Plumbing Code tillater for deres størrelse: 1/4 in. per fot opp til 2-1/2 in., 1/8 in. per fot fra 3 til 6 in., 1/16 in. per fot fra 8 in. Brasiliansk PVC avløpsrør starter med fallet i NBR 8160: 2 % opp til DN 75, 1 % fra DN 100. Skriv et annet fall i linjen eller i {{ui:Properties}}: `1/4"/ft`, `2 %` eller `1:50`. Strekningen faller fra sitt første punkt, så tegn avløp i den retningen de renner. Planen viser fallet og en pil. {{ui:Properties}} advarer når et avløp er flatere enn kodens minimum.

## Dimensjoner avløpene etter enhetsverdier

Velg et sanitært avløp: **Fixture units** i {{ui:Properties}} sier hvor mange det fører og den minste størrelsen de trenger. Hvert sanitærapparat hvis avløpskobling er på strekningen, telles, og det samme gjelder hvert avløp som renner inn i den: tegn avløp i den retningen de renner, og hver ender på avløpet den renner inn i.

- Avløp i brasiliansk PVC avløpsrør telles i **UHC** og følger NBR 8160; de andre telles i **DFU** og følger International Plumbing Code.
- **Drain**: en **Branch** (grein) dimensjoneres etter kodens tabell for apparatgreiner; et **Building drain** (bygningsavløp) etter tabellen for fall, så **Slope** betyr noe.
- Et avløp er aldri mindre enn avløpene til apparatene det betjener (et toalett trenger DN 100, eller 3 in.), og heller ikke mindre enn et avløp som renner inn i det. Under NBR 8160 er et bygningsavløp minst DN 100.

{{ui:Size the drains}} gjør hvert sanitære avløp i modellen som er for lite for enhetsverdiene sine, til størrelsen det trenger, som ett steg du kan angre. Et avløp tegnet større enn det trenger, lates være. Når et avløp fører mer enn den største størrelsen for røret kan ved sitt fall, sier BimCraft fra: gi det et brattere fall eller et annet rør.

:::note
Tabellene er for horisontale avløp. Stammer, ventilasjon og stormavløp dimensjoneres ikke her: kontroller dem, og hele prosjektet, mot normen som gjelder for prosjektet.
:::

## Ventiler

1. Velg {{ui:Valve}} og typen: sluseventil, kulventil, globeventil eller tilbakeslagsventil.
2. Klikk på et rør der den skal stå. Røret kuttes rundt den, og ventilen kobles til begge sider.

{{ui:Properties}} for strekningen lister ventilene, hver med {{ui:Remove}}.

Flere ventiltyper, et filter, spjeld på kanaler, egne rørspesifikasjoner og produsenters familier: se [Rørspesifikasjoner, ventiler, spjeld og produsentfamilier](topic:pipe-specs).

## Endre en strekning

Velg en del av en strekning, i planen eller 3D-visningen. Under {{ui:Properties}}:

- **System**, **Material**, **Class** og **Size** (rør), eller **Shape**, **Width**, **Height** (kanaler).
- **Height above the level** flytter hele strekningen opp eller ned.
- **Insulation**: tykkelsen, som beholdes for kontrollen av klaring og listen over åpninger (ingenting tegnes for den): se [Kontroller rør og kanaler mot konstruksjonen](topic:mep-against-structure).
- Stålrør: **Cut into spools**: se [Stålrørspooler og spoolark](topic:pipe-spools).
- **Slope** (rør).
- **Flow** med {{ui:Size it}}: for vann, den minste størrelsen som holder vannet på 8 ft/s (2,4 m/s), eller 5 ft/s (1,5 m/s) for varmtvann; på 3 m/s for brasiliansk PVC vannrør (NBR 5626). For kanaler, hastigheten og friksjonsraten for kanalen slik den er tegnet. Sanitære avløp dimensjoneres i stedet etter sine enhetsverdier: se **Size the drains by fixture units** nedenfor.

Hver endring er ett steg i {{ui:Undo}}. {{key:Delete}} fjerner hele strekningen.

## Planer

- Rør mindre enn 150 mm (omtrent 6 in.) tegnes som én linje på senterlinjen; større rør og alle kanaler tegnes som to linjer i sin bredde.
- Hvert system har sin egen farge; PDF-planen skriver dem ut i svart.
- Hver strekning merkes med sin størrelse og sitt system (for eksempel `2" CW` eller `16×10 SA`).
- Planens visningsomfang avgjør hvilke strekninger den viser, og {{ui:Shown in this plan}} kan utelate **Pipes** eller **Ducts**: se [Visninger, visningsomfang og egne ark](topic:views-and-sheets).

## Tabeller og mengdeuttaket

Panelet {{ui:Schedules}} legger til **Pipes** (etter system, materiale og størrelse, med lengdene deres), **Ducts** (etter system, form og størrelse, med lengder og det ytre overflatearealet) og **Fittings and valves** (etter type og størrelse, talt). Klikk en rad for å velge hva den lister; {{ui:Download CSV}} laster den ned.

{{ui:Takeoff}} tar strekningene med til TakeoffCraft: rør og kanaler etter størrelse som strekninger tegnet i planen (skrå avløp måles langs fallet), rørdeler og ventiler telles der de står: se [Send modellens mengder til TakeoffCraft](topic:takeoff). Stigestrenger utelates fra det arket, fordi en plan ikke kan måle dem; tabellen Pipes har lengden deres.

## I IFC-filen

Hver strekning er en samling som holder sine deler: rør- og kanalsegmenter, rørdeler og ventiler, hver med sin type, sitt materiale, en farge for sitt system og sine porter. Berørende porter er koblet, og hver del hører til sitt distribusjonssystem (IFC2X3-filer får det samme som flytsegmenter, rørdeler og styreenheter i et system). Andre programmer som leser IFC-systemer, ser én sammenhengende strekning per system. Strekningens egen definisjon beholdes med den, slik at BimCraft lager den på nytt likt når du endrer den.
