---
title: Rør og kanaler
summary: Tegn rør- og kanalforløb i planen efter deres centerlinjer; bøjninger, T-stykker, reduktioner og overgange laves for dig, forløbene hører til systemer med forbundne porte i IFC-filen, og de vises i planer, lister og mængdeudtrækket.
keywords: rør, rørføring, vvs, kanal, kanaler, kanalføring, ventilation, mep, mekanisk, bøjning, t-stykke, reduktion, overgang, fitting, fittings, ventil, ventiler, skydeventil, kugleventil, globeventil, kontraventil, stigeledning, fald, afløb, sanitær, regnafløb, udluftning, koldt vand, varmt vand, køle vand, varme, gas, brandbeskyttelse, tilluft, returluft, udsugning, system, systemer, port, porte, stik, sanitetsudstyr, sanitet, håndvask, vask, toilet, water closet, lavatory, køkkenvask, bruser, vaskebalje, sanitetsenheder, uhc, dfu, dimensionér afløb, afløbsdimensionering, bygningsafløb, grenledning, hovedledning, spildevand, luftmængde, cfm, friktion, lige friktion, dimensionering, liste, mængdeudtræk, nbr, nbr 5648, nbr 5688, nbr 8160, limet PVC, dn
from: 85140bc5
---

## Hvad du skal gøre

Tegn bygningens rør og kanaler, ligesom du tegner vægge: klik på hjørnerne af et forløbs centerlinje i den højde, du har sat. BimCraft laver fittings, lægger hver del i sit system og forbinder dem, så andre programmer læser forløbet som ét sammenhængende system.

## Tegn et rør

1. Tænd for {{ui:Tegn}}, åbn {{ui:Build}} og vælg {{ui:Rør}}.
2. I bjælken vælger du **systemet** (koldt vand, varmt vand, sanitært afløb, gas …). Det sætter et sædvanligt materiale: kobber til vand, PVC til afløb og udluftninger, stål til varme, køle vand, gas og brandbeskyttelse. Ændr **materialet**, **klassen** og **dimensionen**, hvis du har brug for det. Dimensioner og vægtykkelser kommer fra offentlige standarder: stålrør ASME B36.10M, kobberrør ASTM B88, PVC ASTM D1785 og PEX ASTM F876. Brasilianske projekter kan bruge **PVC-vandrør (NBR 5648)**, den limede PVC til koldt vand, og **PVC-afløbsrør (NBR 5688)**, normalserie eller forstærket serie, til afløb og udluftninger: deres dimensioner navngives efter DN (DN 25, DN 100). Når du har valgt en af dem, holder et andet system sig til de brasilianske rør (PVC-afløbsrør til et sanitært afløb efter PVC-vandrør).
3. Sæt **At**: højden af rørets centerlinje over niveauet.
4. Klik, hvor røret starter, og derefter på hvert hjørne. Dobbeltklik, eller tryk {{key:Enter}}, ved det sidste punkt. {{key:Backspace}} tager det sidste hjørne tilbage; {{key:Esc}} opgiver forløbet.

Røret snapper som vægge gør, og til andre forløb: start på et rørs ende for at fortsætte fra det, eller slut på et rørs linje for at afgrene fra det. Et nyt forløb får højden af det rør, det snapper til.

Et forløb, der starter eller slutter på en udstyrsports stik, tager dens dimension og system og sidder fast i den: se [MEP-udstyr med porte](topic:mep-equipment) og [Forbind rør og kanaler til udstyr](topic:mep-connections).

## Angiv projektets VVS-standard

Den første liste i rørbjælken er modellens **VVS-standard**: **US (IPC, tommer)** eller **Brasilien (ABNT, DN)**. Den gemmes i modellen, så alle, der åbner filen, starter forløb på samme måde. Under **US** starter et nyt forløb i kobber (vand) eller PVC Schedule 40 (afløb), i tommer, med International Plumbing Code-faldet. Under **Brasilien** starter koldt vand som PVC soldável DN 25, sanitære og regnafløb og udluftninger som PVC esgoto DN 100 med faldet fra NBR 8160, og varmt vand i kobber. Det gælder også for et forløb, der starter på et stik på en sanitetsenhed eller en udstyrsport. Allerede tegnede rør beholder deres materiale og deres egne tabeller; materialelisten forbliver åben, så du stadig kan tegne et brasiliansk forløb i en US-model med vilje. En fil uden valg opfører sig som før: et nyt forløb følger det materiale, der er i brug.

## Tegn en kanal

1. Vælg {{ui:Kanal}}. Vælg systemet (tilluft, returluft, udsugning eller udeluft) og formen: rund, rektangulær eller fladt oval.
2. Skriv bredden og højden (en rund kanals bredde er dens diameter), og **At** for centerlinjens højde.
3. For at dimensionere den ud fra luftmængden skriver du **Luftmængde** og **Friktion**-raten og klikker på {{ui:Dimensionér}}. Kanalen dimensioneres efter lige friktion, metoden i kanalkapitlet i ASHRAE Handbook, og rundes op til en lagerført dimension, så friktionen bliver lig med eller under den rate, du skrev. Uden en angivet rate bruges 0.08 in. vand pr. 100 ft (0.8 Pa/m). En rektangulær kanal beholder den højde, du skrev, og får en bredde; BimCraft siger det, når dens sider er mere end 4 til 1.
4. Klik på hjørnerne som for et rør.

## Sanitetsudstyr

{{ui:Build}} › {{ui:Placér family}} tilbyder fem armaturer at starte med, hver med et afløb og et koldtvandsstik: et **Toilet**, en **Håndvask**, en **Køkkenvask**, en **Brusebakke** og en **Vaskebalje**. Deres forside vender mod dig, når du placerer dem, og bagsiden står op ad væggen. Deres afløb er ved den mindste armaturafløbsdimension i NBR 8160 (DN 100 for toilettet, DN 50 for køkkenvasken, DN 40 for de øvrige); vand er DN 20. Ændr deres dimensioner, eller redigér dem, som enhver familie: se [Familier og deres dimensioner](topic:families).

En familie siger, hvilket sanitetsudstyr den er, under {{ui:Sanitet}} på fanen {{ui:Stik}} i familieredigeringen. Dens afløb tælles så i sanitetsenheder: 6 UHC for et toilet, 1 for en håndvask, 3 for en køkkenvask eller en vaskebalje, 2 for en bruser (NBR 8160), eller afløbs-sanitetsenhederne i IPC Table 709.1.

## Fra et stik på en armatur

Elementer placeret fra en familie med stik (en håndvasks afløb og vandhane, et luftdistributionselements hals: se [Redigér en familie](topic:family-editor)) viser deres frie stik som punkter, mens {{ui:Rør}} eller {{ui:Kanal}} er tændt, og markøren snapper til dem.

- **Start på et stik**: forløbet tager sit system og sin dimension (røret med bjælkens materiale ved eller lige over stikkets dimension; en rund kanal med dens diameter). Når stikket peger nedad eller opad, som et afløb under en håndvask gør, går forløbet først lige ned eller op til højden i **At** og derefter videre ad dine klik.
- **Slut på et stik**: forløbet går ned eller op til det og slutter der.

Forløbet er forbundet til elementet i IFC-filen, så andre programmer ser armaturen som en del af dets system. Et element, der placeres senere med et stik i enden af et forløb, er også forbundet til det. Et forløb, der flyttes væk fra et stik, er ikke længere forbundet til det.

## Fittings, lavet til dig

| Hvor | Hvad BimCraft laver |
|---|---|
| Et forløb drejer | En bøjning. Stålrør med ASME B16.9's langradius (1.5 × dimensionen), andet rør med én udvendig diameter, rund kanal med 1.5 diametre, rektangulær kanal med én bredde (eller én højde ved et sving op eller ned) |
| Et forløb ender på et andet forløbs linje | Et T-stykke; det andet forløb deles der |
| To forløb mødes ende mod ende i forskellige dimensioner | En reduktion (rør) eller en overgang (kanaler) |
| To forløb i samme dimension mødes ende mod ende i en vinkel | En bøjning |

Når du ændrer, flytter eller sletter et forløb, laves alle fittings på den etage igen. Hvis et ben er for kort til fittingsene i dens ender, siger BimCraft det og ændrer intet: flyt hjørnet længere væk.

:::note
Fittings og ventiler er generiske: tegnet ud fra rørets eller kanalens dimension, ikke fra en producents katalog. Muffe-, presse- og rillefittings, ventilhuse og udstyr har producenternes egne dimensioner; kontrollér dem hos din leverandør, før du bestiller.
:::

## Stigeledninger

Mens du tegner, skriv en ny højde i **At** og tryk {{key:Enter}}: forløbet går lige op eller ned ved det sidste hjørne, med en bøjning i hver ende. En stigeledning kan gå op i etagen over. Hver etage viser de dele af et forløb, dens visningsområde når, med **UP** eller **DN** ved stigeledningen.

## Afløb og deres fald

Sanitære og regnafløb starter ved det mindste fald, International Plumbing Code tillader for deres dimension: 1/4 in. pr. ft op til 2-1/2 in., 1/8 in. pr. ft fra 3 til 6 in., 1/16 in. pr. ft fra 8 in. Brasiliansk PVC-afløbsrør starter ved faldet i NBR 8160: 2 % op til DN 75, 1 % fra DN 100. Skriv et andet fald i bjælken eller i {{ui:Egenskaber}}: `1/4"/ft`, `2 %` eller `1:50`. Forløbet falder fra sit første punkt, så tegn afløb i den retning, de løber. Planen viser faldet og en pil. {{ui:Egenskaber}} advarer, når et afløb er fladere end kodens minimum.

## Dimensionér afløb efter sanitetsenheder

Vælg et sanitært afløb: **Sanitetsenheder** i {{ui:Egenskaber}} siger, hvor mange det bærer, og den mindste dimension, de har brug for. Hvert sanitetsudstyr, hvis afløbsstik er på forløbet, tæller, og det gør hvert afløb, der løber ind i det: tegn afløb i den retning, de løber, hvert ende på det afløb, det løber ind i.

- Afløb i brasiliansk PVC-afløbsrør tæller **UHC** og følger NBR 8160; de øvrige tæller **DFU** og følger International Plumbing Code.
- **Afløb**: en **Grenledning** dimensioneres efter kodens tabel for armaturgrene; et **Bygningsafløb** efter sin tabel ud fra faldet, så dets **Fald** har betydning.
- Et afløb er aldrig mindre end de sanitetsafløb, det betjener (et toilet kræver DN 100 eller 3 in.), og heller ikke mindre end et afløb, der løber ind i det. Under NBR 8160 er et bygningsafløb mindst DN 100.

{{ui:Dimensionér afløbene}} gør hvert sanitært afløb i modellen, der er for lille til sine sanitetsenheder, til den dimension, det har brug for, som ét trin, du kan fortryde. Et afløb tegnet større end nødvendigt lades være. Når et afløb bærer mere, end den største dimension af dets rør kan ved sit fald, siger BimCraft det: giv det et stejlere fald eller et andet rør.

:::note
Tabellerne er for vandrette afløb. Stigeledninger, udluftninger og regnafløb dimensioneres ikke her: kontrollér dem og hele projektet mod den kode, der gælder for projektet.
:::

## Ventiler

1. Vælg {{ui:Ventil}} og typen: skydeventil, kugleventil, globeventil eller kontraventil.
2. Klik på et rør, hvor den skal være. Røret skæres over om den, og ventilen forbindes til begge sider.

Egenskaber for forløbet lister dets ventiler, hver med {{ui:Fjern}}.

Flere ventiltyper, et filter, spjæld på kanaler, dine egne rørspecifikationer og producentfamilier: se [Rørspecifikationer, ventiler, spjæld og producentfamilier](topic:pipe-specs).

## Ændr et forløb

Vælg en del af et forløb, i planen eller 3D-visningen. Under {{ui:Egenskaber}}:

- **System**, **Materiale**, **Klasse** og **Dimension** (rør), eller **Form**, **Bredde**, **Højde** (kanaler).
- **Højde over niveauet** flytter hele forløbet op eller ned.
- **Isolering**: dens tykkelse, gemt til kontrollen af plads og listen over udsparinger (der tegnes intet for den): se [Kontrollér rør og kanaler mod konstruktionen](topic:mep-against-structure).
- Stålrør: **Skær i spools**: se [Stålrørsspools og spoolark](topic:pipe-spools).
- **Fald** (rør).
- **Flow** med {{ui:Dimensionér}}: for vand den mindste dimension, der holder vandet på 8 ft/s (2.4 m/s), eller 5 ft/s (1.5 m/s) for varmt vand; ved 3 m/s for det brasilianske PVC-vandrør (NBR 5626). For kanaler kanalens hastighed og friktionsrate, som den er tegnet. Sanitære afløb dimensioneres i stedet efter deres sanitetsenheder: se **Dimensionér afløb efter sanitetsenheder** ovenfor.

Hver ændring er ét trin i {{ui:Fortryd}}. {{key:Delete}} fjerner hele forløbet.

## Planer

- Rør mindre end 150 mm (ca. 6 in.) tegnes som én linje på centerlinjen; større rør og alle kanaler som to linjer i deres bredde.
- Hvert system har sin egen farve; plan-PDF'en udskriver dem i sort.
- Hvert forløb er mærket med sin dimension og sit system (for eksempel `2" CW` eller `16×10 SA`).
- En plans visningsområde bestemmer, hvilke forløb den viser, og {{ui:Vist i denne plan}} kan udelade **Rør** eller **Kanaler**: se [Visninger, visningsområder og dine egne ark](topic:views-and-sheets).

## Lister og mængdeudtrækket

Panelet {{ui:Lister}} tilføjer **Rør** (efter system, materiale og dimension, med deres længder), **Kanaler** (efter system, form og dimension, med længder og det udvendige overfladeareal) og **Fittings og ventiler** (efter type og dimension, talt). Klik på en række for at vælge, hvad den lister; {{ui:Download CSV}} downloader den.

{{ui:Mængdeudtræk}} tager forløbene med til TakeoffCraft: rør og kanaler efter dimension som forløb tegnet i planen (skrå afløb måles langs deres fald), fittings og ventiler talt, hvor de er: se [Send modellens mængder til TakeoffCraft](topic:takeoff). Stigeledninger er udeladt fra det ark, fordi en plan ikke kan måle dem; listen Rør har deres længde.

## I IFC-filen

Hvert forløb er en samling, der holder sine dele: rør- og kanalsegmenter, fittings og ventiler, hver med sin type, sit materiale, en farve for sit system og sine porte. Berørende porte er forbundet, og hver del hører til sit distributionssystem (IFC2X3-filer får det samme som flowsegmenter, fittings og controllere i et system). Andre programmer, der læser IFC-systemer, ser ét sammenhængende forløb pr. system. Forløbets egen definition gemmes med det, så BimCraft laver det igen på samme måde, når du ændrer det.
