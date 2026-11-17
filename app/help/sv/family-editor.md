---
title: Redigera en familj
summary: Ändra en familjs parametrar, formler och solider, visa delar med en Ja / Nej-parameter, skär och foga solider, ge den kopplingar för rör och kanaler, och se resultatet ritat från den IFC som sparas.
keywords: familjeredigerare, redigera familj, parameter, parametrar, formel, formler, synlighet, ja nej, solid, solider, låda, extrudering, extrudera, revolvera, svep, profil, båge, boolesk, booleska operationer, skär, foga, handtag, arbetsplan, skiss, ny familj, koppling, kopplingar, port, portar, rörkoppling, kanalkoppling, avlopp, vattenförsörjning
from: 1ab31c10
---

## Öppna redigeraren

Öppna en familj (projektbläddrarens **Familjer**, eller {{ui:Bygge}} › {{ui:Familjer…}}) och klicka på {{ui:Redigera familjen}}. För att börja från noll klickar du på {{ui:Ny familj}}. Ge familjen ett namn, ange vad den är (en dörr, ett fönster, en möbel, en armatur eller något annat) och, för en dörr eller ett fönster, vilken startfamilj dess planritningssymbol och handtag kommer från. Redigeraren öppnas på en familj med några parametrar och en solid.

Redigerar du en startfamilj behålls dina ändringar bara i den här modellen. Andra modeller behåller startfamiljen som den är.

Ingenting i modellen ändras förrän du klickar på {{ui:Spara familjen}}. Redigeraren har egen ångra och gör om (pilknapparna bredvid namnet, eller {{key:Mod+Z}} och {{key:Mod+Y}}). Att spara är ett steg i modellens ångra.

## Parametrar

Fliken {{ui:Parametrar}} listar familjens parametrar: ett namn, en typ och ett standardvärde. Typerna är **Längd** (millimeter), **Vinkel** (grader), **Tal**, **Heltal**, **Ja / Nej**, **Penna** (1–16) och tre som innehåller ord i stället för tal: **Text**, **Material** (ett av projektets material) och **Fyllning** (en planfyllning). Ord används inte i formler. De färgsätter en solid (dess **Material**), fyller en symboldel eller skrivs ut som `{Name}` i en symbols text. Rutan **Per element** gör en parameter till något som varje placerat element sätter för sig själv i stället för sin storlek.

- En **formel** låter en parameter följa andra, till exempel `Width / 30` eller `if(Width > 1200, 2, 1)`. Längder i formler är millimeter, eller så skriver du en enhet: `3'`, `6in`, `50cm`.
- Byter du namn på en parameter byts det i alla formler och fält som använder den. En parameter som fortfarande används kan inte tas bort.
- En solids **Material** tar ett projektmaterials färg (eller en Material-parameters). **Visas vid** döljer den på grövre detaljnivåer. **Upprepa** gör kopior: ett antal (ett tal eller en heltalsparameter, 1 till 200) och steget mellan dem i x, y och z. En upprepad solid är en rad av brädor, stänger eller hål. Används den i en skärning skärs kopiorna tillsammans.
- En dörr- eller fönsterfamilj får också två namn från sin vägg: `WallThickness` och `Face` (1 eller −1, den sida dörren svänger åt).

## Solider

Fliken {{ui:Solider}} listar solider. Lägg till en låda, en extrudering, en revolvering eller ett svep:

| Solid | Vad du anger |
|---|---|
| Låda | dess två hörn: x0 till x1, y0 till y1, z0 till z1 |
| Extrudering | en profil på en arbetsplan (plan, front eller sida), var planet ligger och ett djup |
| Revolvering | en profil, en axel på planet och en vinkel upp till 360° |
| Svep | en bana av punkter och en radie (en stång eller ett räcke) |

Varje tal kan vara ett skrivet tal eller ett uttryck av parametrarna. Varje solid har en färg och **Visas när**. Lämna det tomt för att alltid visa solidén, eller ange en Ja / Nej-parameter (eller skriv en jämförelse som `Shelves >= 3`) för att bara visa den då. Det är en synlighetsparameter.

### Rita en profil

En extrudering eller en revolverings profil ritas på dess arbetsplan under förhandsvisningen:

- Klicka på papperet för att lägga till en punkt efter den valda.
- Dra en punkt för att flytta den. Punkter fångas till rutnätet. Håll ned {{key:Shift}} för att placera dem fritt.
- Klicka på en liten ruta på ett segment för att lägga till en punkt där. {{key:Shift}}+klick på den gör segmentet till en båge (klicka igen för det andra hållet, sedan rakt).
- Dubbelklicka på en punkt för att ta bort den.

Ihåliga punkter ställs in av parametrar. Ändra dem i tabellen, inte genom att dra.

## Booleska operationer

Fliken {{ui:Booleska operationer}} skär den andra solidén ur den första, eller fogar dem. Resultatet av en boolesk operation kan skäras eller fogas igen. En solid som används i en boolesk operation ritas bara som en del av den.

När den andra solidén döljs av sin Ja / Nej-parameter behålls den första som den är. När den första döljs döljs resultatet.

## Planritningssymbol

Fliken {{ui:Planritningssymbol}} ritar det planen visar för den här familjen i stället för snittet av dess solider: linjer, rektanglar, cirklar, bågar, polygoner och text, i familjens egna axlar. Varje del har en **penna** (1–16, ett uttryck eller en Penna-parameter), en **fyllning** (ingen, heltäckande, diagonal, korsad, betong, isolering, jord eller en Fyllning-parameter), ett **visas av**-uttryck och ett **skärintervall** i millimeter ovanför dess bas. En del ritas med full tjocklek när planets snitt ligger inom intervallet, tunn under det och streckad ovanför. Ett skåp ovanför snittet visas alltså streckat. Varje del har också en detaljnivå och en upprepning. Text kan nämna parametrar som `{Name}`. **Planen visar: Snittet av solider** låter planen fortsätta skära solider medan symbolen finns kvar i familjen. Andra program läser symbolen som familjens fotavtryck (linjer och former; texten stannar i BimCraft).

## Familjer inuti

Fliken {{ui:Familjer inuti}} lägger en annan familj inuti den här: ett ben i ett bord, ett handtag på en dörr. Välj familjen, sedan var den ska (x, y, z), hur mycket den är vriden (bara kvartsvarv: 0, 90, 180, 270), när den visas och de värden den får, ett per rad, som `Height = Height - 40`. När du sparar den inre familjen ritas den här om. En familj som hålls av en annan kan inte tas bort. En familj kan inte innehålla sig själv, inte ens genom en annan, och nästlingen stannar vid fyra nivåer.

## Hotspots

En hotspot är en punkt eller en kant som du drar för att ändra en parameter. På fliken {{ui:Hotspots}} lägger du till en, väljer axeln den dras längs och taltparametern den ändrar, och skriver dess position med samma uttryck som solidernas. I förhandsvisningen väljer du **Hotspots** under handtagen för att dra dem. På ett placerat element i planen (välj det med {{ui:Markera}}) visas x- och y-hotspots som handtag. Drar du ett handtag tar elementet den storlek som lägger hotspoten där, genom alla formler mellan dem. Ett Ångra för tillbaka det. En hotspot kan inte ändra en styrd parameter, en Ja / Nej-parameter eller ett ord.

I 3D-vyn visas samma hotspots som handtag på det valda elementet. De upp-och-ner-riktade (axel z) visas där också, vilket planen inte kan rita. Välj elementet, dra ett handtag längs dess axel och släpp. Elementet tar då den storlek som lägger hotspoten där, som ett steg att ångra. Handtagen döljs medan snittlådan är på, eftersom den använder samma handtag.

## Kopplingar

Familjer som placeras på golvet (möbler, armaturer och andra) har en flik {{ui:Kopplingspunkter}}. Den innehåller punkterna där ett rör eller en kanal ansluts till elementet, som på ett handfats kran och avlopp. Klicka på {{ui:Lägg till en kopplingspunkt}} och ange:

- **Typ**: rör eller kanal, och dess **System** (kallvatten, spillavlopp, tilluft …).
- **x**, **y** och **z**: var den är, i familjens egna axlar. Precis som solidernas tal kan vart och ett vara ett tal eller en formel av parametrarna, så kopplingen rör sig med storleken.
- **Utgång**: riktningen ett rör eller en kanal lämnar den längs en av familjens axlar. Ett avlopp under ett handfat går **Ner**.
- **Storlek (mm)**: rörets nominella dimension (DN) eller den runda kanalens diameter.
- **Flöde**: **In** för en koppling som matas (en kran), **Ut** för en som avleder.

Förhandsvisningen ritar varje koppling som en ring med en pil för utgången. Dörrar och fönster har inga kopplingar.

För en sanitetsarmatur väljer du vilken den är under **Sanitetsarmatur** (toalett, handfat, diskho, dusch, tvättbänk). Startarmaturerna säger det redan.

Varje element placerat från familjen får sina kopplingar som portar i IFC-filen. De görs om när elementet ändrar storlek eller när familjen sparas. Program som läser IFC-system ser då var varje rör eller kanal hör hemma.

## Förhandsvisningen och dess handtag

Förhandsvisningen är familjen skriven som IFC, av samma kod som sparar den i modellen, och ritad tillbaka. Det du ser är vad andra program får. Under den ställer **Visad storlek** in de parametervärden som förhandsvisningen använder.

**Handtag** är prickar i förhandsvisningen. **Storleken** visar ett handtag för Width, Depth och Height. **Den valda solidén** visar ett på varje yta av solidén du valde. Dra ett handtag:

- på en yta som styrs av en parameter ändras den visade storleken (familjens formler behålls),
- på en yta som styrs av ett skrivet tal ändras talet.

## Spara

{{ui:Spara familjen}} kontrollerar familjen, ritar om varje storlek av den och gör om varje element av den, som ett steg som du kan ångra. Om en storlek inte kan ritas med ändringen (till exempel om en solid skulle sakna bredd i den storleken) sparas ingenting, och redigeraren säger vilken storlek det gäller.

Om någon annan sparade samma familj medan din redigerare var öppen (i en Live TeamWork-session, eller i ett annat fönster) vägrar {{ui:Spara familjen}} och säger det. Den ersätter inte deras ändring med din. Stäng redigeraren, öppna familjen igen för att se deras ändring och gör din om.

:::note
Geometrin sparas som IFC:s egna solider: extruderingar, revolveringar, svepta skivor och booleska resultat. Inget görs om till en lista av trianglar, så filerna förblir små och andra program kan läsa formerna som former. Profiler med bågar sparas med bågar i IFC4. IFC2X3 har inga bågsegment i en profil, så där sparas bågarna som korta raka bitar.
:::

Se även [Familjer och deras storlekar](topic:families).
