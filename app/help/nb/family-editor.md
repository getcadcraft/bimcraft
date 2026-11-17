---
title: Rediger en familie
summary: Endre en families parametere, formler og legemer, vis deler med en Ja / Nei-parameter, kutt og slå sammen legemer, gi den koblinger for rør og kanaler, og se resultatet tegnet fra IFC-filen den lagres til.
keywords: familieredigering, rediger familie, parameter, parametere, formel, formler, synlighet, ja nei, legeme, legemer, boks, ekstrudering, ekstrudere, roter, sveip, profil, bue, boolsk, boolske, kutt, slå sammen, differanse, union, håndtak, arbeidsplan, skisse, ny familie, kobling, koblinger, port, porter, rørkobling, kanalkobling, avløp, vanntilførsel
from: 1ab31c10
---

## Åpne redigeringsprogrammet

Åpne en familie (gruppen **Familier** i prosjektutforskeren, eller {{ui:Bygg}} › {{ui:Familier…}}) og klikk {{ui:Rediger familien}}. For å starte fra null, klikk {{ui:Ny familie}}: gi den et navn, si hva den er (en dør, et vindu, møbler, et armatur eller noe annet), og for en dør eller et vindu, hvilken startfamilie planssymbolet og håndtaket kommer fra. Redigeringsprogrammet åpnes med en familie med noen få parametere og ett legeme.

Redigerer du en startfamilie, beholdes endringene bare i denne modellen. Andre modeller beholder startfamilien som den er.

Ingenting i modellen endres før du klikker {{ui:Lagre familien}}. Redigeringsprogrammet har sin egen angre og gjør om (pilknappene ved siden av navnet, eller {{key:Mod+Z}} og {{key:Mod+Y}}); lagring er ett steg i modellens angre.

## Parametere

Fanen {{ui:Parametere}} lister familiens parametere: et navn, en type og en standardverdi. Typene: **Lengde** (millimeter), **Vinkel** (grader), **Tall**, **Heltall**, **Ja / Nei**, **Penn** (1–16), og tre som holder ord i stedet for tall: **Tekst**, **Materiale** (ett av prosjektets materialer) og **Fyll** (et planfyll). Ord brukes ikke i formler; de gir et legeme farge (sitt **Materiale**), fyller en del av et symbol, eller skrives ut som `{Name}` i et symbols tekst. Boksen **Per element** gjør en parameter til noe hvert plassert element setter for seg selv i stedet for størrelsen.

- En **formel** får en parameter til å følge andre, for eksempel `Width / 30` eller `if(Width > 1200, 2, 1)`. Lengder i formler er millimeter, eller skriv en enhet: `3'`, `6in`, `50cm`.
- Å gi en parameter nytt navn endrer det i alle formler og felt som bruker den. En parameter som fortsatt er i bruk, kan ikke fjernes.
- Et legemes **Materiale** tar fargen til et prosjektmateriale (eller til en Materiale-parameter), **Vist ved** skjuler det ved grovere detaljnivåer, og **Gjenta** lager kopier: et antall (et tall eller en heltallsparameter, 1 til 200) og trinnet mellom dem i x, y og z. Et gjentatt legeme er en rad med planker, stenger eller hull; brukt i et kutt kuttes kopiene sammen.
- En dør- eller vindusfamilie får også to navn fra veggen sin: `WallThickness` og `Face` (1 eller −1, siden døren svinger mot).

## Legemer

Fanen {{ui:Legemer}} lister legemene. Legg til en boks, en ekstrudering, en rotasjon eller et sveip:

| Legeme | Hva du angir |
|---|---|
| Boks | to hjørner: x0 til x1, y0 til y1, z0 til z1 |
| Ekstrudering | en profil på et arbeidsplan (plan, front eller side), hvor planet er, og en dybde |
| Rotasjon | en profil, en akse i planet, og en vinkel opptil 360° |
| Sveip | en bane av punkter og en radius (en stang eller en skinne) |

Hvert tall kan være et skrevet tall eller et uttrykk av parameterne. Hvert legeme har en farge og **Vist når**: la den stå tom for alltid å vise det, eller nevn en Ja / Nei-parameter (eller skriv en sammenligning, for eksempel `Shelves >= 3`) for å vise det bare da. Det er en synlighetsparameter.

### Tegn en profil

En profil for en ekstrudering eller en rotasjon tegnes på arbeidsplanet under forhåndsvisningen:

- Klikk på arket for å legge til et punkt etter det valgte.
- Dra et punkt for å flytte det. Punkter fester seg til rutenettet; hold {{key:Shift}} for å plassere dem fritt.
- Klikk en liten firkant på et segment for å legge til et punkt der. {{key:Shift}}+klikk den for å gjøre segmentet til en bue (klikk igjen for den andre veien, og så rett).
- Dobbeltklikk et punkt for å fjerne det.

Hule punkter angis av parametere: endre dem i tabellen, ikke ved å dra.

## Boolske

Fanen {{ui:Boolske}} kutter det andre legemet ut av det første, eller slår dem sammen. Resultatet av en boolsk operasjon kan kuttes eller slås sammen igjen. Et legeme brukt i en boolsk operasjon tegnes bare som en del av den.

Når det andre legemet skjules av sin Ja / Nei-parameter, beholdes det første som det er; når det første skjules, skjules resultatet.

## Plansymbol

Fanen {{ui:Plansymbol}} tegner det planen viser for denne familien, i stedet for snittet av legemene: linjer, rektangler, sirkler, buer, mangekanter og tekst, i familiens egne akser. Hver del har en **penn** (1–16, et uttrykk eller en Penn-parameter), et **fyll** (ingen, heldekkende, diagonal, kryss, betong, isolasjon, jord, eller en Fyll-parameter), et **vist av**-uttrykk, et **snittområde** i millimeter over sin base (tegnes med full tykkelse når planets snitt er innenfor den, tynt under den og stiplet over den: et skap over snittet vises stiplet), et detaljnivå og en gjentakelse. Tekst kan nevne parametere som `{Name}`. **Planen viser: Snittet av legemene** lar planen fortsette å kutte legemene mens symbolet blir i familien. Andre programmer leser symbolet som familiens fotavtrykk (linjer og former; teksten blir i BimCraft).

## Familier inni

Fanen {{ui:Familier inni}} setter en annen familie inn i denne: et ben i et bord, et håndtak på en dør. Velg familien, deretter hvor den skal (x, y, z), hvor mye den er snudd (bare kvartsvinger: 0, 90, 180, 270), når den vises, og verdiene den får, én per linje, for eksempel `Height = Height - 40`. Når den indre familien lagres, tegnes denne på nytt. En familie som holdes av en annen, kan ikke slettes. En familie kan ikke inneholde seg selv, heller ikke via en annen, og nøstingen stopper på fire nivåer.

## Hotspots

Et hotspot er et punkt eller en kant du drar for å endre en parameter. På fanen {{ui:Hotspots}} legger du til ett, velger aksen det dras langs og tallparameteren det endrer, og skriver posisjonen i samme uttrykk som legemene. I forhåndsvisningen velger du **Hotspots** under håndtakene for å dra dem. På et plassert element i planen (velg det med {{ui:Velg}}) vises x- og y-hotspotene som håndtak: dra ett, og elementet får størrelsen som setter hotspotet der, gjennom eventuelle formler mellom dem; ett Angre setter det tilbake. Et hotspot kan ikke endre en styrt parameter, et Ja / Nei eller et ord.

I 3D-visningen vises de samme hotspotene som håndtak på det valgte elementet, og opp-og-ned-hotspotene (akse z) vises der også, noe planen ikke kan tegne. Velg elementet, dra et håndtak langs sin akse og slipp: elementet får størrelsen som setter hotspotet der, som ett angrersteg. Håndtakene skjules mens snittboksen er på, siden den bruker de samme håndtakene.

## Koblinger

Familier plassert på et gulv (møbler, armatur og andre) har en fane {{ui:Koblinger}}: punktene der et rør eller en kanal kobles til elementet, som på en vasks kran og avløp. Klikk {{ui:Legg til en kobling}} og angi:

- **Type**: rør eller kanal, og dens **System** (kaldtvann, sanitæravløp, tilluft …).
- **x**, **y** og **z**: hvor den er, i familiens egne akser. Som et legemes tall kan hver være et tall eller en formel av parameterne, så koblingen flytter seg med størrelsen.
- **Utgang**: retningen et rør eller en kanal forlater den, langs en av familiens akser (et avløp under en vask går **Ned**).
- **Størrelse (mm)**: rørets nominelle dimensjon (DN) eller den runde kanalens diameter.
- **Strømning**: **Inn** for en kobling som mates (en kran), **Ut** for en som tømmer.

Forhåndsvisningen tegner hver kobling som en ring med en pil for utgangen. Dører og vinduer har ingen koblinger.

For et sanitærarmatur velger du hvilket det er under **Sanitærarmatur** (toalett, servant, kjøkkenvask, dusj, vaskekar). Startarmaturene sier det allerede.

Hvert element plassert fra familien får sine koblinger som porter i IFC-filen, og de lages på nytt når elementet endrer størrelse eller familien lagres. Programmer som leser IFC-systemer ser hvor hvert rør eller hver kanal hører hjemme.

## Forhåndsvisningen og dens håndtak

Forhåndsvisningen er familien skrevet som IFC, av samme kode som lagrer den i modellen, og tegnet tilbake. Det du ser, er det andre programmer får. Under den angir **Vist størrelse** parameterverdiene forhåndsvisningen bruker.

**Håndtak** er prikker på forhåndsvisningen: **Størrelsen** viser et håndtak for Width, Depth og Height; **Det valgte legemet** viser ett på hver flate av legemet du valgte. Dra et håndtak:

- på en flate satt av en parameter endres den viste størrelsen (familiens formler beholdes);
- på en flate satt av et skrevet tall endres tallet.

## Lagring

{{ui:Lagre familien}} kontrollerer familien, tegner deretter hver størrelse på nytt og lager hvert element på nytt, som ett steg som kan angres. Hvis en størrelse ikke kan tegnes med endringen (for eksempel ville et legeme ikke ha bredde i den størrelsen), lagres ingenting, og redigeringsprogrammet sier hvilken størrelse.

Hvis noen andre lagret den samme familien mens redigeringsprogrammet var åpent (i en Live TeamWork-økt, eller i et annet vindu), avviser {{ui:Lagre familien}} og sier det i stedet for å erstatte deres endring med din. Lukk redigeringsprogrammet, åpne familien på nytt for å se endringen deres, og gjør din om igjen.

:::note
Geometrien lagres som IFCs egne legemer: ekstrudering, rotasjon, sveipede skiver og boolske resultater. Ingenting gjøres om til en liste av trekanter, så filene forblir små, og andre programmer kan lese formene som former. Profiler med buer lagres med buer i IFC4; IFC2X3 har ingen bue-segmenter i en profil, så der lagres buene som korte rette stykker.
:::

Se også [Familier og deres størrelser](topic:families).
