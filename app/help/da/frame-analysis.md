---
title: Analysér bærende skelet
summary: Kræfter, reaktioner og nedbøjninger i modellens bjælker, søjler og afstivninger under lasttilfælde og kombinationer, du angiver, gemt i IFC. Et analysehjælpemiddel, ikke en normkontrol.
keywords: analyse, enheder, fod og tommer, visningsenhed, konstruktionsanalyse, dimensioneringskontrol, udnyttelse, valsede, svejsede, AISC 360, EN 1993-1-1, skeletanalyse, analytisk model, stivhedsmetode, laster, lasttilfælde, kombination, egenlast, nyttelast, egenvægt, reaktioner, bøjningsmoment, forskydning, normalkraft, nedbøjning, deformeret form, understøtninger, leddet, indspændt, frigørelse, rapport, pdf, csv, craftscript, frame3d, bjælker, søjler, elementer
from: b93b58c4
---

{{ui:Analyse}}-fanen til højre finder kræfterne i den åbne models bjælker, søjler og afstivninger, reaktionerne ved søjlefødderne og hvor meget elementerne bøjer, for de laster, du angiver.

:::warning
Det er et **analysehjælpemiddel, ikke en normkontrol**. Analysen anvender ingen dimensioneringsnorm: den dimensionerer ikke elementer og kontrollerer ikke kapaciteter, og den vælger ikke lastfaktorer. En ingeniør kontrollerer den analytiske model, dens laster og understøtninger og afgør, hvad tallene betyder. Blokken {{ui:Dimensioneringskontrol}} nedenfor kontrollerer valsede stål-I-profiler efter AISC 360 eller EN 1993-1-1, et hjælpemiddel, indtil en ingeniør har gennemgået det: se [Dimensioneringskontrol](topic:frame-analysis#design-checks).
:::

## Kør den

1. Åbn en IFC-model og fanen {{ui:Analyse}}.
2. Vælg en eller flere bjælker, søjler eller afstivninger i visningen, vælg en {{ui:Tilfælde}}, en {{ui:Last}} og en {{ui:Retning}}, skriv værdien og tryk {{ui:Tilføj last}}: kN/m for en last fordelt langs et element, kN for en punktlast.
3. Tryk {{ui:Kør analyse}}.

Tabellen viser hvert elements største normalkraft, forskydninger, bøjningsmomenter, torsion og nedbøjning; klik på et elements navn for at vælge det i visningen. Nedenunder vises reaktionerne. {{ui:På modellen}} tegner den deformerede form, eller én størrelse som et diagram ved siden af hvert element. Resultaterne bliver forældede, når modellen ændres: kør den igen.

Hver last og indstilling er én ændring i listen {{ui:Ændringer}}: {{ui:Fortryd}} tager den tilbage, og {{ui:Gem som IFC}} gemmer dem i filen (projektets egenskabssæt `CadCraft_Analysis`), så de stadig er der, næste gang modellen åbnes her.

## Sådan laves den analytiske model

- Hvert IfcBeam, IfcColumn og IfcMember, hvis form er én lige ekstrudering, bliver et element på sin tværsnitsakses centrallinje. Dets tværsnitsegenskaber kommer fra profilen: I-, U-, L- og T-profiler, rektangler og rør, cirkler og runde rør, eller et vilkårligt lukket omrids (så er torsionskonstanten et skøn, og rapporten siger det). Alt andet udelades og tælles.
- I en model stopper bjælker ved en søjles flade og sidder under gulvet. Hver elementende føres langs sin egen linje hen til aksen for det element, den sammenføjes med, når denne akse ligger tæt på (inden for cirka størrelsen af tværsnittene), og det element deles dér. Rapporten siger, hvor mange ender der er flyttet.
- **Søjlefødder**, som intet ligger under, er understøtninger: indspændt (startpunktet) eller leddet (fastholdt og mod vridning, men frit at dreje).
- **Bjælkeender** er stive eller leddede efter reglen {{ui:Bjælkeender uden samling}}; **afstivninger** (IfcMember) er leddede i begge ender. Vælg ét element for at give dets ender, eller en søjles fod, en regel for sig selv.
- Materialer efter navn: beton (E = 30 GPa), træ (E = 11 GPa), ellers stål (E = 200 GPa).

Hvis skelettet kan bevæge sig uden at bøje noget — en mekanisme — stopper kørslen og siger, hvor og i hvilken retning.

## Tilfælde, kombinationer, fortegn og rapporten

Analysen starter med **Dead** (egenvægt), **Live** og **Dead + live**; tilføj tilfælde og kombinationer med de faktorer, din dimensioneringsnorm kræver. N > 0 er træk; My > 0 sætter elementets lokale −z-side i træk (en bjælke, der hænger under tyngdekraften, har My > 0). {{ui:Rapport (PDF)}} og {{ui:Rapport (CSV)}} indeholder forudsætningerne, tværsnittene, tilfældene, reaktionerne med deres summer, elementkræfterne, forskydningerne og en indhylling. {{ui:Eksportér som CraftScript}} skriver skelettet til PartCraft's Script-arbejdsområde, hvor biblioteksfunktionen `frame3d` løser det i læsbar kode.

Metoden er den direkte stivhedsmetode, lineær og første orden, medmindre du sætter kryds i Anden orden (P-Delta), kontrolleret mod lærebogscases.

**Anden orden (P-Delta).** Sæt kryds i *Anden orden (P-Delta)* ved siden af Kør: hver kombination løses igen med elementernes normalkræfter virkende på den deformerede ramme (hvert element delt i 4 stykker, så elementets bøjning mellem sine ender også tæller), indtil normalkræfterne stabiliseres. Resultatlinjen viser antallet af gennemløb og hvor meget sidesvajet voksede; momenter, nedbøjninger, dimensioneringskontroller og rapport bruger så disse resultater. Over rammens elastiske kritiske last stopper kørslen og siger det. Den er elastisk med små rotationer, kun bøjning, uden stivhedsreduktion eller fiktive laster (ikke i sig selv AISC's direkte analysemetode); plader, vægge og stive gulve forbliver første orden.

**Gulvtryk på dæk.** For betondæk (analysen læser et dæk som plader, når dets materiale er beton) har lastblokken {{ui:Tryk på alle dæk}}: skriv kN/m², vælg tilfældet ovenfor og tryk {{ui:Tilføj til dæk}}. Det fordeles nedad over alle dæk, analysen fandt, og vises med et Fjern-link. Det er ét tryk for alle dæk, ikke et pr. dæk, og det er ikke en normlast: skriv den værdi, din ingeniør giver dig.

**Egenfrekvenser (endelige elementer).** Blokken {{ui:Endelige elementer: egenfrekvenser}} under resultaterne finder de laveste svingningsformer for den samme model med den endelige elementmotor: bjælker med deres ende-frigørelser, dæk og vægge som plane firknudede skaller, stive gulve og understøtninger. Vælg antal svingningsformer (3, 6, 10 eller 20) og dækelementet (den firknudede skal for tykke eller tynde dæk, eller det tynde dæk), og tryk {{ui:Find frekvenserne}}. Tabellen giver hver svingningsforms frekvens i Hz, dens periode i sekunder og dens effektive modalmasse langs X, Y og Z som en andel af den masse, der kan bevæge sig. {{ui:Vis på modellen}} tegner en hvilken som helst form, ligesom den deformerede form tegnes. Massen er materialets densitet gange rumfanget: laster tilføjer ikke masse, og et materiale uden densitet har ingen. Rapporten (PDF, CSV) indeholder tabellen. Den er elastisk og kun for små bevægelser, og der laves ingen seismisk eller vindlast ud fra en norm her. Ikke en normkontrol; din ingeniør gennemgår resultaterne.

**Responsspektrum, tidshistorik og pushover.** Tre flere blokke ligger under egenfrekvenserne og bruger den samme endelige elementmodel. Massen for dem alle er materialets densitet plus de nedadrettede laster fra de tilfælde, du sætter kryds ved, hver ganget med en faktor, du skriver (for eksempel Dead med 1 og Live med den andel, du regner som masse).

{{ui:Responsspektrum}} læser hver svingningsform af et spektrum, du angiver (en tabel med periode og acceleration, eller ASCE 7-formen ud fra SDS, SD1 og TL; knappen {{ui:Brug værdierne fra Jordskælv-blokken}} kopierer dem fra {{ui:Jordskælv}}-blokken), og kombinerer svingningsformerne med CQC, SRSS, tiprocentreglen eller en absolut sum og sammensætter så X-, Y- og Z-retningerne (100 % + 30 % eller SRSS). Det giver grundforskydningen, etagedrift, elementendekræfter og en formtabel, der advarer, når de anvendte former bærer mindre end 90 % af massen. Du kan skalere resultaterne med en faktor eller op til en grundforskydning, du skriver; blokken beregner aldrig selv den grundforskydning. Resultaterne har ingen fortegn.

{{ui:Tidshistorik}} kører en jordacceleration ved modalsuperposition (eksakt for optagelsens rette linjer mellem punkterne) eller ved direkte integration (Newmarks gennemsnitlige acceleration med Rayleigh-dæmpning). Inputtet er en konstrueret sinus eller puls (altid mærket syntetisk), en optagelse du indsætter, eller en tekstfil du åbner (tid og acceleration, én acceleration pr. linje med et trin, eller en PEER-agtig fil med en DT=-header; i g eller m/s²). Det giver tagforskydningen og grundforskydningen mod tid, driften for hver etage og indhyllingen af elementendekræfterne. Modeller med en meget lang optagelse beholder den kun for sessionen.

{{ui:Pushover}} skubber taget sidelæns i små trin (mønster som den første svingningsform, eller ensartet), med plastiske led i enderne af elementer med I-profil. Et led flyder ved det plastiske moment, som falder, når normalkraften vokser (udregnet ud fra den tegnede form, fileter ignoreret); hærdning er valgfri, P-delta er valgfri, og en tyngdekraftskombination kan anvendes først. Det giver kapacitetskurven (grundforskydning mod tagforskydning), det første led, og tilstanden og den plastiske rotation for hvert led. {{ui:Kør den ikke-lineære tidshistorik}} kører de samme led under tidshistorik-blokkens optagelse på små modeller. Led dannes kun i elementenderne (sæt en knude dér, hvor et led skal dannes inde i et spænd); et element frigjort i begge ender får ingen; flydning og knækning af afstivninger er ikke modelleret; dæk og vægge forbliver elastiske; der angives ingen acceptkriterier. Ikke en normkontrol; din ingeniør gennemgår resultaterne. Indstillingerne gemmes med modellen, og rapporten indeholder tabellerne.

Ikke lavet endnu: knækning, en manglende-masse-korrektion for responsspektret, skalering af optagelser, acceptkriterier for led (den dynamiske respons findes, ovenfor), arealbelastninger ud over det ene tryk på alle dæk, elementforskydninger, afstivninger der kun tager træk, vægge og dæk i skelettet, normkontroller af svejste profiler og af andre tværsnit end valsede I-profiler. Se [Ikke lavet endnu](topic:not-built-yet).

## Enheder

Længder følger den enhed, du vælger i værktøjslinjen ({{ui:Enheder}}), ligesom resten af BimCraft: de lastpositioner, du skriver og ser ({{ui:Fra}}, {{ui:Til}}, {{ui:Ved}}), punkterne for knudelaster og reaktioner, etagehøjderne i {{ui:Jordskælv}}, og kolonnerne for nedbøjning og drift (fod og tommer viser disse små længder i decimale tommer). Skift enheden når som helst; fanen tegnes om. Kræfter forbliver i kN og kN·m, og rapporten (PDF, CSV) og CraftScript-filen forbliver i millimeter med enheden skrevet. Tværsnitsmål, armeringsdiametre og dæklag i blokken {{ui:Beton}} forbliver i millimeter, som de hedder.

## Dimensioneringskontrol

Blokken {{ui:Dimensioneringskontrol}} (den samme som DetailCraft's) tager en {{ui:Dimensioneringsnorm}}, ASCE 7 + AISC 360 eller EN 1990 + EN 1993-1-1, og en {{ui:Stålkvalitet}}. Giv hvert lasttilfælde sin type (egenlast, nyttelast, vind …), og {{ui:Lav kombinationer}} skriver normens lastkombinationer af dine tilfælde; analysen kører dem derefter som enhver anden kombination.

{{ui:Kontrollér stålprofiler}} kontrollerer derefter hver **valset stål-I-profil** med DetailCraft's kontroller (træk, tryk med knækning, bøjning med sidedrejningsknækning, forskydning, bøjning med normalkraft, nedbøjning; paragrafferne står i rapporten) og viser, hvor stor en del af dens kapacitet den bruger, farvet på modellen. Det er et **hjælpemiddel, indtil en ingeniør har gennemgået det**.

**Hvilke elementer der kontrolleres.** En IFC-profil siger ikke, om et stål-I-profil er valset eller svejst, så BimCraft kalder det kun valset, når dets profilnavn (ellers elementets typenavn) er en størrelse fra AISC W- eller S-tabellerne eller EN 10365's IPE-, HEA- eller HEB-tabeller (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **og** højde, bredde, steg og flange i filen passer til den størrelse inden for 1 %. Ethvert andet I-profil (en pladebjælke, en størrelse under et andet navn, en redigeret størrelse) regnes som svejst og kommer tilbage **ikke kontrolleret**, det samme gælder rør, vinkelprofiler, U-profiler og andre tværsnit, slanke dele og torsion. Kontrollér disse elementer med en ingeniør.
