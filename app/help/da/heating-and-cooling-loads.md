---
title: Anslå varme- og køleeffekt
summary: Hvert rums varmetab, dets opvarmning over et år i graddage og dets kølespids, ud fra det, der afgrænser det i modellen, og hvert elements U-værdi, med alle indtastede værdier vist. Et designhjælpemiddel, ikke en overensstemmelsesberegning.
keywords: energi, opvarmning, køling, varmetab, varmebelastning, kølebelastning, u-værdi, varmegennemgangstal, graddage, hdd, ventilation, luftskifte, interne varmetilskud, solvarmetilskud, lambda, ledningsevne, isolering, tidlig projektering, analyse, rum, zoner
from: ec312d20
---

På fanen {{ui:Dagslys}} åbner du, når du har klikket på {{ui:Beregn}}, {{ui:Varme- og køleeffekt}} og klikker på {{ui:Beregn effekterne}}. Hvert rum får sit **varmetab** på en kold dimensioneringsdag, sin **opvarmning over et år** og sin **kølespids** på en varm dag. Intet uploades, og intet i modellen ændres, medmindre du skriver en U-værdi.

:::warning
Dette er **et designhjælpemiddel, ikke en overensstemmelsesberegning**: et stationært anslag med alle indtastninger på skærmen. Det er **ikke** ISO 52016-1-metoden, ikke en simulering og ikke et energimærke; det dimensionerer ikke kedler, varmepumper eller kølemaskiner. Kontrollér resultaterne, og dimensionér udstyr sammen med en ingeniør.
:::

## Hvad der afgrænser hvert rum

BimCraft finder det i selve modellen, så enhver IFC fra et hvilket som helst program virker (den har ikke brug for de rumafgrænsninger, nogle programmer eksporterer). Fra hver del af hvert rums egen flade kigger den lige ud:

- den første væg, det første vindue, den første dør, gulv, tag, beklædning, gardinvæg eller bjælke, den møder, **afgrænser** den del;
- lige bag det element enten **et andet rum** (regnes som nabo, ved samme temperatur: intet tab), **intet** (udenfor) eller, under et gulv på den laveste etage, **terrænet**;
- en åben døråbning ind i et andet rum regnes som nabo; en del, der slet ikke møder noget (inden for 1.5 m til siden eller nedad, 8 m op), står opført under rummet og udelades.

Vinduer og døre får deres egen størrelse fra IFC'en (samlet bredde × højde) fra den væg, de sidder i. Klik på et rum i tabellen for at se alle elementer, der afgrænser det, med deres areal, deres U-værdi og hvor U-værdien kommer fra.

## U-værdier

For hvert element bruger BimCraft, i denne rækkefølge:

1. **IFC'ens egen U-værdi** — `ThermalTransmittance` i elementets fælles egenskabssæt (for eksempel `Pset_WallCommon`) eller i dets type. De fleste designprogrammer kan skrive den.
2. **Dets materialelag** — 1 ÷ (indvendig overflademodstand + hvert lags tykkelse ÷ dets ledningsevne λ + udvendig overflademodstand), med de sædvanlige overflademodstande (0.13 og 0.04 m²K/W for vægge; 0.10 opad og 0.17 nedad indvendigt). Typiske ledningsevner at starte med (mineraluld 0.035, mursten 0.77, beton 1.4…); under {{ui:Materialernes ledningsevne}} skriver du producentens, og alle U-værdier fra disse lag følger med.
3. **En typisk værdi** (vægge 0.3, tage 0.2, gulve 0.25, vinduer 1.4, døre 1.6 W/m²K), markeret som sådan — skriv din egen.

En U-værdi, du skriver i et rums detaljer, skrives ind i elementets fælles egenskabssæt som `ThermalTransmittance` (ét trin; {{key:Mod+Z}} fortryder det). Hvis flere elementer deler det sæt (for eksempel én vægtype), ændres de alle sammen, og statuslinjen siger, hvor mange.

## Opvarmning

- **Varmetab** = Σ U × A × (inde − ude) for alt mod ude + Σ U × A × (inde − jord) for gulve på terræn + 0.335 × luftskifte pr. time × rummets volumen × (inde − ude). 0.335 Wh pr. m³ pr. kelvin er luftens densitet (1.2 kg/m³) gange dens varmekapacitet (1005 J/kgK).
- **Opvarmning over et år** = (rummets tab pr. grad til ude, gennem konstruktionen og luften, plus dets tab til jord skaleret til den samme forskel) × **graddagene** × 24 ÷ 1000, i kWh. Skriv graddagene for stedet, eller {{ui:Læs graddage fra en CSV…}} (én række pr. dag eller måned; det sidste tal i hver række lægges sammen). Brug graddage til den basistemperatur, din kilde bruger: den basis tager allerede højde for den gratis varme fra personer, lys og solen.

## Køling

**Kølespidsen** = varmen gennem konstruktionen og luften ved sommerens dimensioneringstemperatur + personer (gulvareal pr. person × varme pr. person) + belysning og udstyr pr. m² gulvareal + **solen**: spidsen af {{ui:Sol gennem vinduerne på en dato}} for det rum. Beregn solen først, på en varm dag; indtil da tæller solen 0, og afsnittet siger det. Spidsen for hver del lægges sammen, selv om de falder på forskellige tidspunkter, hvilket overdriver lidt.

## Hvad den udelader

- ISO 52016-1's månedlige og timebaserede metoder (en betalt standard), varme lagret i bygningens masse, kuldebroer, hvordan varme- og kølesystemer yder, og klimafiler.
- Rum ved siden af hinanden regnes ved samme temperatur; uopvarmede rum er ikke modelleret.

Se også [Anslå dagslyset i hvert rum](topic:daylight-factor).
