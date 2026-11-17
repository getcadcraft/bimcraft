---
title: Rediger en family
summary: Ændr en families parametre, formler og legemer, vis dele med en Ja / Nej-parameter, skær og forbind legemer, giv den stik til rør og kanaler, og se resultatet tegnet ud fra den IFC den gemmes som.
keywords: family-editor, rediger family, parameter, parametre, formel, formler, synlighed, ja nej, legeme, legemer, boks, udtrækning, ekstrudering, drej, sweep, profil, bue, boolean, booleans, skær, forbind, håndtag, arbejdsplan, skitse, ny family, stik, port, rørstik, kanalstik, afløb, vandforsyning
from: 1ab31c10
---

## Åbn editoren

Åbn en family (projektbrowserens **Families**, eller {{ui:Build}} › {{ui:Families…}}) og klik på {{ui:Edit the family}}. For at starte fra intet klikker du på {{ui:New family}}: giv den et navn, sig hvad den er (en dør, et vindue, et møbel, et inventar eller noget andet) og, for en dør eller et vindue, hvilken startfamily dens plansymbol og håndtag kommer fra. Editoren åbner på en family med nogle få parametre og ét legeme.

Redigerer du en startfamily, bliver dine ændringer i denne model alene. Andre modeller beholder startfamilien, som den er.

Intet i modellen ændres, før du klikker på {{ui:Save the family}}. Editoren har sin egen fortryd og gentag (pilknapperne ved navnet, eller {{key:Mod+Z}} og {{key:Mod+Y}}). Gemning er ét trin i modellens fortryd.

## Parametre

Fanen {{ui:Parameters}} lister familiens parametre: et navn, en type og en standard. Typerne: **Længde** (millimeter), **Vinkel** (grader), **Tal**, **Heltal**, **Ja / Nej**, **Pen** (1–16), og tre der holder ord i stedet for tal: **Tekst**, **Materiale** (et af projektets materialer) og **Udfyldning** (en plan-udfyldning). Ord bruges ikke i formler. De farver et legeme (dets **Materiale**), udfylder en del af et symbol eller skrives ud som `{Name}` i et symbols tekst. Feltet **Pr. element** gør en parameter til noget hvert placeret element sætter for sig selv i stedet for sin størrelse.

- En **formel** får en parameter til at følge andre, fx `Width / 30` eller `if(Width > 1200, 2, 1)`. Længder i formler er millimeter, eller du skriver en enhed: `3'`, `6in`, `50cm`.
- Omdøbes en parameter, omdøbes den i hver formel og hvert felt der bruger den. En parameter der stadig er i brug kan ikke fjernes.
- Et legemes **Materiale** tager et projektmateriales farve (eller en Materiale-parameters), **Vist ved** skjuler det ved grovere detaljeniveauer, og **Gentag** laver kopier: et antal (et tal eller en heltalsparameter, 1 til 200) og trinnet mellem dem i x, y og z. Et gentaget legeme er en række brædder, stænger eller huller. Bruges det i et udskær, skæres kopierne sammen.
- En dør- eller vinduesfamily får også to navne fra sin væg: `WallThickness` og `Face` (1 eller −1, den side døren svinger til).

## Legemer

Fanen {{ui:Solids}} lister legemerne. Tilføj en boks, en udtrækning, en omdrejning eller et sweep:

| Legeme | Hvad du angiver |
|---|---|
| Boks | dens to hjørner: x0 til x1, y0 til y1, z0 til z1 |
| Udtrækning | en profil på en arbejdsplan (plan, forside eller side), hvor planet ligger, og en dybde |
| Omdrejning | en profil, en akse på planet og en vinkel op til 360° |
| Sweep | en sti af punkter og en radius (en stang eller en skinne) |

Hvert tal kan være et skrevet tal eller et udtryk med parametrene. Hvert legeme har en farve og **Vises når**: lad feltet stå tomt for at vise det altid, eller angiv en Ja / Nej-parameter (eller skriv en sammenligning som `Shelves >= 3`) for kun at vise det da. Det er en synlighedsparameter.

### Tegn en profil

En udtræknings- eller omdrejningsprofil tegnes på dens arbejdsplan under forhåndsvisningen:

- Klik på papiret for at tilføje et punkt efter det valgte.
- Træk et punkt for at flytte det. Punkter fanger gitteret; hold {{key:Shift}} nede for at placere dem frit.
- Klik på en lille firkant på et segment for at tilføje et punkt der. {{key:Shift}}+klik på den for at gøre segmentet til en bue (klik igen for den anden vej, og så lige).
- Dobbeltklik på et punkt for at fjerne det.

Hule punkter sættes af parametre: ændr dem i tabellen, ikke ved at trække.

## Booleans

Fanen {{ui:Booleans}} skærer det andet legeme ud af det første, eller forbinder dem. Et boolean-resultat kan skæres eller forbindes igen. Et legeme brugt i en boolean tegnes kun som en del af den.

Er det andet legeme skjult af sin Ja / Nej-parameter, beholdes det første som det er. Er det første skjult, skjules resultatet.

## Plansymbol

Fanen {{ui:Plan symbol}} tegner det planen viser for denne family, i stedet for snittet af dens legemer: linjer, rektangler, cirkler, buer, polygoner og tekst, i familiens egne akser. Hver del har en **pen** (1–16, et udtryk eller en Pen-parameter), en **udfyldning** (ingen, fuld, diagonal, krydset, beton, isolering, jord eller en Udfyldning-parameter), et **vist af**-udtryk, et **snitområde** i millimeter over sin basis (tegnes med fuld tykkelse når planens snit er inde i det, tyndt under det og stiplet over det: et skab over snittet vises stiplet), et detaljeniveau og en gentagelse. Tekst kan nævne parametre som `{Name}`. **Planen viser: Legemernes snit** lader planen blive ved at skære legemerne, mens symbolet forbliver i familien. Andre programmer læser symbolet som familiens fodaftryk (linjer og figurer; teksten bliver i BimCraft).

## Families indeni

Fanen {{ui:Families inside}} sætter en anden family ind i denne: et ben i et bord, et håndtag på en dør. Vælg familien, og angiv derefter hvor den går (x, y, z), hvor meget den er drejet (kun kvartdrej: 0, 90, 180, 270), hvornår den vises, og de værdier den får, én pr. linje som `Height = Height - 40`. Gemmer du den indre family, tegnes denne igen. En family der holdes af en anden kan ikke slettes. En family kan ikke indeholde sig selv, heller ikke gennem en anden, og indlejringen stopper ved fire niveauer.

## Hotspots

Et hotspot er et punkt eller en kant du trækker for at ændre en parameter. På fanen {{ui:Hotspots}} tilføjer du et, vælger aksen det trækkes langs og tal-parameteren det ændrer, og skriver dets position i de samme udtryk som legemerne. I forhåndsvisningen vælger du **Hotspots** under håndtagene for at trække dem. På et placeret element i planen (vælg det med {{ui:Select}}) vises x- og y-hotspots som greb: træk et, og elementet får den størrelse der sætter hotspottet der, gennem eventuelle formler imellem. Ét fortryd sætter det tilbage. Et hotspot kan ikke ændre en styret parameter, en Ja / Nej eller et ord.

I 3D-visningen vises de samme hotspots som greb på det valgte element, og de op-og-ned-hotspots (akse z) vises også der, hvilket planen ikke kan tegne. Vælg elementet, træk et greb langs sin akse og slip: elementet får den størrelse der sætter hotspottet der, som ét fortryd-trin. Grebene er skjult mens snitboksen er tændt, da den bruger de samme greb.

## Stik

Familier placeret på et gulv (møbler, inventar og andre) har fanen {{ui:Connectors}}: de punkter hvor et rør eller en kanal går ind i elementet, som ved en vaskeskåls hane og afløb. Klik på {{ui:Add a connector}} og angiv:

- **Type**: rør eller kanal, og dets **System** (koldt vand, spildevand, tilluft …).
- **x**, **y** og **z**: hvor det er, i familiens egne akser. Ligesom et legemes tal kan hvert enten være et tal eller en formel af parametrene, så stikket flytter sig med størrelsen.
- **Udgangsretning**: retningen et rør eller en kanal går ud af det, langs en af familiens akser (et afløb under en vask går **Ned**).
- **Størrelse (mm)**: rørets nominelle størrelse (DN) eller den runde kanals diameter.
- **Flow**: **Ind** for et stik der forsynes (en hane), **Ud** for et der afløber.

Forhåndsvisningen tegner hvert stik som en ring med en pil i udgangsretningen. Døre og vinduer har ingen stik.

For et sanitetsinventar vælger du hvilket det er under **Sanitetsinventar** (toilet, håndvask, køkkenvask, bruseniche, vaskekar). Startinventarerne siger det allerede.

Hvert element placeret fra familien får sine stik som porte i IFC-filen. De laves igen når elementet ændrer størrelse, eller familien gemmes. Programmer der læser IFC-systemer ser, hvor hvert rør eller hver kanal hører hjemme.

## Forhåndsvisningen og dens håndtag

Forhåndsvisningen er familien skrevet som IFC, af den samme kode der gemmer den i modellen, og tegnet tilbage. Det du ser, er det andre programmer får. Under den sætter **Vist størrelse** de parameterværdier forhåndsvisningen bruger.

**Håndtag** er prikker på forhåndsvisningen: **The size** viser et håndtag for Width, Depth og Height, og **The solid picked** viser ét på hver flade af det legeme du valgte. Træk et håndtag:

- på en flade sat af en parameter ændres den viste størrelse (familiens formler beholdes)
- på en flade sat af et skrevet tal ændres tallet

## Gemning

{{ui:Save the family}} kontrollerer familien og tegner så hver af dens størrelser igen og laver hvert af dens elementer igen, som ét trin du kan fortryde. Hvis en størrelse ikke kan tegnes med ændringen (fx ville et legeme have ingen bredde i den størrelse), gemmes intet, og editoren siger hvilken størrelse.

Hvis nogen andre gemte den samme family mens din editor var åben (i en Live TeamWork-session, eller i et andet vindue), afviser {{ui:Save the family}} og siger det, i stedet for at erstatte deres ændring med din. Luk editoren, åbn familien igen for at se deres ændring, og lav din igen.

:::note
Geometrien gemmes som IFC's egne legemer: udtrækninger, omdrejninger, sweepede skiver og boolean-resultater. Intet bliver til en liste af trekanter, så filerne forbliver små, og andre programmer kan læse formerne som former. Profiler med buer gemmes med buer i IFC4. IFC2X3 har ingen bue-segmenter i en profil, så der gemmes buerne som korte rette stykker.
:::

Se også [Families og deres størrelser](topic:families).
