---
title: Tabeller, mål og en PDF av planen
summary: Dør-, vindu-, vegg- og romtabeller som endrer seg mens du tegner, mål på planen, og planen av en etasje lagret som PDF i en standardskala.
keywords: tabell, dørtabell, vindustabell, veggtabell, romtabell, mengder, mengdeuttak, areal, csv, regneark, mål, måltilsetting, utskrift, pdf, plott, skala, 1/4", 1:50, ark
from: d97cd16e
---

## Hva du gjør

Se hva bygningen du tegnet blir til, mens du tegner den: hvor mange dører og vinduer av hver størrelse, hvor mye vegg av hver type, hvor stort hvert rom er. Sett mål på planen og lagre den som PDF for å skrive ut eller sende.

## Tabeller

Med {{ui:Draw}} på viser **Schedules** i venstre panel én tabell om gangen:

- **Doors** og **Windows**: hver etter sin merking (D1, D2 … og W1 …, gitt når du plasserer dem), sin type, bredde, høyde (og underkant), nivå og veggen den står i.
- **Walls by type**: for hver veggtype, antall vegger, tykkelsen deres, deres samlede lengde og deres sideareal som **Gross area**, **Deductions** og **Net area**, med en totalsum.
- **Rooms**: nummer, navn, nivå, areal og omkrets, med totalt areal.
- **Floors**: hvert gulv med sitt nivå, type og tykkelse, og dets brutto areal, fradrag og nettoareal.
- **Finishes**: hvert overflatelag på veggtypene (etter materiale og vegges side) og himlingene, med antall flater og brutto, fradrag og netto.
- **Wall types: takeoff data**: det som ble skrevet inn én gang på hver veggtype (enhet, mørtel, rate), med antall vegger, deres lengde og nettoareal, og raten ganger den målte mengden. Se [Veggoppbygninger](topic:wall-assemblies).

- **Finishes by room**, **Finishes by wall**, **Finishes by zone** og **Finish quantities**: hva som dekker hvert rom, med arealer, antall fliser inkludert kutt og volumer av underlaget. Se [Rombehandling og overflatetabeller](topic:room-finishes).
- Egne **set-ups**: en tabell du grupperte, summerte og lagret under et navn. Se [Lag oppsett, lagre og eksporter en tabell](topic:schedule-layouts).

Tabellene endrer seg med hver redigering. Klikk en rad, eller ett enkelt tall, for å velge elementene den kom fra. **Download CSV** lagrer tabellen, for å åpne i et regneark; **Download Excel** og **Copy for Google Sheets** finnes under den. **Room finishes** og **Specification** ([Skriv beskrivelsen fra modellen](topic:specification)) åpnes fra samme sted.

## Areal og volum for hvert lag

Velg **Layers: area and volume** i listen Schedules. Den har én rad for hvert lag av hver veggtype, gulvtype, takttype og himlingstype i bruk: elementet, typen og dens LOD, laget (regnet fra veggens utside, eller fra toppen av et gulv, tak eller en himling), materialet og funksjonen, tykkelsen, hvor mange elementer, **net area** (nettoareal) og **volume** (volum).

- Arealet er nettoarealet av elementene av den typen, målt nøyaktig som i Walls by type, Floors og Finishes, etter prosjektets målemetode. Et tak måles på skrå; ingen målemetode har en regel for tak.
- Volumet er dette arealet ganger lagets egen tykkelse.
- Et gulv, tak eller en himling uten type er én rad: ett lag av sin egen tykkelse.
- Et luftrom listes med sitt areal og utelates fra det samlede volumet. En membran har et areal og ingen volum.

Klikk en rad for å velge elementene. **Download CSV** lagrer tabellen.

## Slik måles arealer

Hvert areal er tre tall som summerer seg: brutto minus fradrag er netto. Regelen står skrevet over hver av disse tabellene, og det er én regel: tabellene, mengdene som lagres i IFC-filen, og uttaket som sendes til TakeoffCraft, bruker alle den.

- **En vegg**: brutto er én flate av veggen, dens lengde langs senterlinjen ganger dens høyde (den reelle flaten for en vegg med formet topp eller bunn). Hver dør, hvert vindu og hver annen åpning fradrages, bredde ganger høyde, én gang per åpning.
- **Et gulv eller en himling**: brutto er arealet innenfor konturen. Hver åpning og utsparing inni den fradrages én gang.
- **En veggbehandling**: hvert overflatelag på veggtypen dekker én flate av veggen, målt som veggen, med de samme åpningene fradratt. En behandling er et lag av veggen: den listes under Finishes og legges ikke til veggarealet, så en vegg med en dør telles aldri to ganger.

Dette er **CadCraft-standarden**: hver åpning fradrages, uansett størrelse; veggenes lengder måles langs senterlinjen; reveer måles ikke. Det er det alle prosjekter bruker til du velger en annen metode.

## Velg en målemetode

Over tabellen lister **Measurement method** metodene som følger med BimCraft, og **Load a method file** tar inn kontorets egen. Valget lagres i IFC-filen, som ett steg i angring, og tre ting følger det samtidig: tabellene, nettomengdene som lagres i filen, og uttaket som sendes til TakeoffCraft. Regelen over hver tabell begynner da med metoden, kilden, datoen kilden ble lest, og ordene **Unchecked by a quantity surveyor** (ikke kontrollert av en mengdeberegner).

En metode er en liten fil med fakta, ikke programkode. For hver mengde sier den:

- **den minste åpningen som fradrages**: for eksempel en åpning på 0,5 m² eller mindre forblir i veggarealet;
- **hvordan veggforbindelser måles**: langs senterlinjen; eller med en vegg som ender mot en annen, målt til flaten på den veggen; eller med hver veggende som møter en annen vegg, målt til nærflaten;
- **om reveer måles** for en behandling (behandlingens svinger inn i åpningene), som et areal eller, når de er grunne, som en lengde. Dybden på en revee tas som halve veggtykkelsen;
- **hva den sier om murverk**: hvordan det måles, og eventuelle svinn- eller mørtelpåslag den oppgir.

Metodene som følger med BimCraft:

| Metode | Vegger: minste åpning fradratt | Veggbehandlinger | Himlinger | Murverk |
|---|---|---|---|---|
| CadCraft-standarden | hver åpning | hver åpning | hver utsparing | ingen påslag |
| RICS NRM 2 (Storbritannia), 2. utgave 2021 | 0,5 m² eller mindre forblir | 1 m² eller mindre forblir | 1 m² eller mindre forblir | etter areal; ingen prosenter oppgitt |
| AAQS Standard Method for Africa 2015 | 0,5 m² eller mindre forblir | 0,5 m² eller mindre forblir | 0,5 m² eller mindre forblir | etter areal; målt netto, 0 % svinn |
| IS 1200 (India), 1976, murverk | 0,1 m² eller mindre forblir | standard (se nedenfor) | standard | etter volum |
| BIA Technical Note 10 (USA), 2009 | hver åpning | standard | standard | 5 % svinn på enheter, 15 % på mørtel |

Les disse begrensningene før du stoler på en metode:

- **Ingen mengdeberegner har kontrollert noen av dem.** Hver ble laget ved å lese kilden som er oppgitt, og ved å føre dens tall med klausulen de kommer fra. Er du mengdeberegner og kan kontrollere en, vil appens lagere gjerne høre fra deg.
- Der en regel ikke kunne leses fra kilden, sier metoden **not confirmed** (ikke bekreftet) for den, og CadCraft-standarden brukes. Ingen metode som følger med BimCraft har en bekreftet regel for veggforbindelser, reveer eller gulv, så de måles på standardmåten under alle.
- IS 1200 fradrar åpninger i puss i tre bånd. En metodefil kan ikke holde bånd ennå, så veggbehandlinger bruker standarden under den metoden, og regelen sier det.
- Den sørafrikanske standarden for måling av byggarbeid, **The South African Standard System of Measuring Building Work**, er **ikke** blant dem: teksten kunne ikke leses. AAQS-metoden for Afrika sier at den bygger på 1991-utgaven av det systemet, men det er et annet dokument.
- BIA Technical Note 10 er et bransjenotat for kalkyle, ikke en standard målemetode.
- En åpning som er nøyaktig den minste størrelsen, følger metodens egne ord («not exceeding», «less than»). Størrelser innenfor 2 deler per 10 000 av den teller som nøyaktig den.
- Under en metode følger filens nettosideareal av vegg og nettoareal av gulv eller himling metoden, og mengdesettet nevner den. Brutto areal og volumene i filen beholdes slik de er tegnet.

**Notater om denne metoden**, under velgeren, sier hva hver kilde lar stå åpent. **Open the source** går til dokumentet.

### Kontorets egen metode

En metodefil er JSON i formatet `cadcraft-measurement-method`. Hver verdi i den nevner klausulen den kommer fra; en verdi uten klausul avvises. Filen kontrolleres når du laster den inn, et feil felt blir navngitt, og ingenting brukes fra en fil som ikke består. Når den er valgt, lagres filen i prosjektet, slik at prosjektet åpnes likt på en annen datamaskin. Id-en er et enkelt navn du velger selv (den kan ikke være id-en til en metode som følger med appen).

## Murstein, blokker og mørtel

**Veggtyper: mengdedata** teller enhetene og mørtelen for hver veggtype der enheten har en lengde og en høyde (se [Gi en type sine mengdedata](topic:wall-assemblies#give-a-type-its-takeoff-data)). Dette er formlene, nøyaktig som de regnes:

- **Enheter per areal av ett skall** = 1 / ((enhetens lengde + fuge) × (enhetens høyde + fuge)). En 215 × 65 mm murstein med 10 mm fuge: 1 / (225 × 75 mm) = 59.26 per m².
- **Enhetsbredder tvers over et skall** = (skallets tykkelse + fuge) / (enhetens bredde + fuge), avrundet til et helt tall, minst 1. Et 102,5 mm skall av 102,5 mm murstein er 1; en 215 mm vegg av de samme murstein er 2.
- **Enheter** = enheter per areal × enhetsbredder tvers over × nettoarealet av veggflaten, summert over typens murskall.
- **Enheter å bestille** = enheter × (1 + svinn % / 100), avrundet opp til en hel enhet. Svinnet er det som er skrevet inn på typen; uten noe skrevet inn, metodens, hvis den oppgir ett; ellers 0 %.
- **Mørtel** = nettoareal × skalltykkelse, minus enhetenes volum (enheter × lengde × høyde × bredde), så pluss den ekstra prosenten skrevet inn på typen for fordypninger eller perforering, så pluss metodens påslag hvis den oppgir ett. Den trenger enhetsbredden.

Det som antas: hvert murskall i en type er bygget av typens ene enhet; et skall tykkere enn én enhetsbredde telles som så mange enhetsbredder, hver som et skall lagt på langs, så kuttede enheter, avslutningssteiner og spesialformer telles ikke separat; der intet lag er avkrysset som bygget av enheten, regnes kjernelagene som skallene, og noten over tabellen sier det. **Mengde** er raten ganger det raten gjelder per, som nå også kan være en enhet å bestille, 1000 enheter å bestille eller en m³ mørtel.

Merkingene er elementenes IFC-merking: endrer du en i **Properties** (Tag), følger tabellen etter. For hver IFC-modell, tegnet eller ikke, summerer [Summer mengder, list elementer og tabeller for rom](topic:quantity-totals) enhver egenskap.

## Mål

Planen viser hver tegnet vegg sin lengde langs utsiden (en innervegg: langs én flate) og, for en vegg med dører eller vinduer, en kjede fra hjørnene til hver åpning. {{ui:Dimensions}} i modellinjen skjuler dem og viser dem igjen.

## Lagre planen som PDF

1. Vis nivået du vil, og angi enhetene i panelet **Levels**.
2. Klikk {{ui:Print}} i modellinjen.
3. BimCraft lagrer «<fil> — <nivå>.pdf»: planen i svart-hvitt i den største standardskalaen som passer på arket (1/4" = 1'-0", 1/8" = 1'-0" … på Letter i fot og tommer; 1:50, 1:100 … på A4 i millimeter), med veggene fylt, dører, vinduer, romnavn og arealer, mål, og en tittelstripe med nivået, filen, snitthøyden, datoen og skalaen.

PDF-filen tegnes som linjer og tekst, så den er skarp ved enhver zoom, og teksten kan søkes i.

## Greit å vite

- Tabellene lister det tegneverktøyene laget. Dører og vinduer fra et annet program vises i stedet i [Mengdesummer](topic:quantity-totals).
- For å prise jobben, send mengdene til TakeoffCraft: se [Mengder til TakeoffCraft](topic:takeoff). CSV-nedlastingen finnes for et regneark.
