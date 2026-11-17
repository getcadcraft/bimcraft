---
title: "Estimér dagslyset i hvert rum"
summary: "Den gennemsnitlige dagslysfaktor for hvert rum ud fra dets vinduer, dets indvendige flader og den himmel, hvert vindue ser, med himmelvinklen målt i modellen. Et tidligt designestimat, ikke en simulering og ikke en kontrol mod regler."
keywords: dagslys, dagslysfaktor, gennemsnitlig dagslysfaktor, adf, vertikal himmelkomponent, vsc, solvarme, sol, g-værdi, gitter, split flux, himmelkomponent, internt reflekteret komponent, naturligt lys, vindue, verglasning, himmelvinkel, forhindring, overskygning, altan, udhæng, refleksion, transmission, tidligt design, analyse, rum, zoner
from: 5f300a78
---

Fanen {{ui:Dagslys}} i højre panel beregner hvert rums **gennemsnitlige dagslysfaktor**: hvor meget af lyset fra en overskyet himmel udenfor, der i gennemsnit når rummet, angivet i procent. Den læser den åbne IFC-models rum (zoner) og vinduer. Intet ændres i modellen, og intet uploades.

:::warning
Alt i denne fane er **en designhjælp, ikke en overensstemmelsesberegning**: tidlige designestimater efter offentliggjorte metoder, **ikke en simulering** og **ikke en kontrol mod en byggeregel eller en standard**. BS EN 17037, LEED, BREEAM og energiregler kræver en dagslyssimulering med stedets klima; brug et dagslyssimuleringsprogram til dem.
:::

## Sådan beregnes det

1. Åbn en IFC-model, der har rum (zoner) og vinduer. Modeller tegnet her har et rum inde i hvert lukket sæt vægge.
2. Åbn fanen {{ui:Dagslys}} og klik på {{ui:Beregn}}.
3. Hvert rum viser sin dagslysfaktor og et bånd: under 2 %, 2–5 %, 5 % eller mere. Klik på et rum for at se dets flader og hvert vindues areal og himmelvinkel; rummet og dets vinduer vælges i modellen.

Ændrer du en værdi, følger tallene med med det samme. Efter at have ændret modellen, klik på {{ui:Beregn igen}}. {{ui:CSV}} gemmer hvert rum med dets tal og de anvendte værdier.

## Formlen

Gennemsnitlig dagslysfaktor (%) = T × Ag × θ × M ÷ (A × (1 − R²)), summeret over rummets vinduer (Littlefairs formel, brugt i BRE 209, BS 8206-2 og CIBSE LG10):

- **T**, glassets lystransmission (0.7 til at starte: brug producentens værdi).
- **Ag**, det forglasede areal: hvert vindues areal (dets samlede bredde × højde, ellers dets størrelse i modellen) × den **forglaste andel** (0.75 til at starte: resten er ramme).
- **θ**, den himmelvinkel vinduet ser, i grader (nedenfor).
- **M**, vedligeholdelsesfaktoren for snavs på glasset (1 til at starte).
- **A**, alle indvendige flader i rummet: gulv, vægge, loft og vinduer, taget fra rummets egen form.
- **R**, deres middelrefleksion, vægtet efter areal: gulv 0.2, vægge 0.5, loft 0.7 til at starte; glas tæller som 0.1.

## Sådan måles himmelvinklen

For hvert vindue skærer BimCraft modellen med et lodret plan vinkelret på vinduet, fra glassets yderside, og kigger fra horisonten lige op. Alt det, snittet rammer foran vinduet (en bygning overfor, en altan eller et udhæng ovenover, tagudhænget), skjuler en del af de 90°. θ er det, der er tilbage. Selve vinduet og væggen, det sidder i, udelades. Det gøres på fem steder på tværs af vinduets bredde, og middelværdien tages, så en tynd stolpe foran midten tager sin andel og ikke hele himlen.

En bygning 8.5 m over vinduets midte og 9.9 m væk skjuler 40.65° (vinklen, hvis tangens er 8.5 ÷ 9.9), hvilket efterlader θ = 49.35°.

## Vertikal himmelkomponent for hvert vindue

{{ui:Beregn}} måler også, for hvert vindue, hvad det ser af hele himlen: det samme lodrette snit, drejet mod alle retninger hen over vinduets front (hver 2°, fra den ene side til den anden), så en bygning til siden, en finne eller en dyb niche tager sin andel. Ud fra det beregner BimCraft den **vertikale himmelkomponent (VSC)**: hvor meget af det overskyede himmellys der når glasset, som en andel af det en åben, flad tagflade ville få. Et vindue med intet foran sig får **39.6 %**, det højeste et lodret vindue kan; en lang bygning, der rejser sig 25° over vinduet, efterlader ca. **27 %**, tallet som britisk vejledning (BRE 209) bruger som tommelfingerregel. Hvert vindue i et rums detaljer viser sin VSC og sin **forhindringsvinkel** (hvor højt ting rejser sig lige foran det).

Himlen er den standardiserede CIE-overskyede himmel, som er tre gange så lys lige op som ved horisonten, og snittet er nøjagtigt: intet samples.

## Solen gennem vinduerne på en dato

Åbn {{ui:Sol gennem vinduerne på en dato}} og vælg en dato. BimCraft følger solen gennem dagen i kvarter-timer og lægger for hvert vindue den varme sammen, som solen bringer gennem glasset:

- den **direkte sol**, når den står foran vinduet, og intet i modellen skjuler den (det samme nøjagtige snit, drejet mod solen: en altan, der skygger for den høje sommersol ved middag, lukker den lave vintersol ind);
- **himmelens lys** på glasset, med fradrag for det vinduet ikke kan se;
- lyset **fra jorden** (dens refleksion: 0.2 til at starte);
- alt igennem glassets **g-værdi** (andelen af solens energi, det lader igennem: 0.6 til at starte; brug producentens værdi) og dets forglaste andel.

Hvert rum viser dagens samlede værdi i kWh og sin top i watt med tidspunktet; et rums detaljer tegner dagen som et diagram. Himlen er klar efter Hottels model (Duffie & Beckman, *Solar Engineering of Thermal Processes*), med sommer- eller vintertallene for stedet og sæsonen og stedets højde; solens placering er fra NOAA. Stedets breddegrad og længdegrad kommer fra IFC'ens site, og nord fra modellens sande nord. Har modellen intet site, skriv en breddegrad og længdegrad. Tider er normal tid (ingen sommertid) i den tidszone, du skriver, ellers i den, længdegraden antyder.

Det udelader: skyer (det er en klar dag), at glasset lukker mindre ind ved lave vinkler, rammer der skygger for glasset, persienner, og det væggene og taget optager. Kølingsestimatet i samme fane bruger toppen.

## Dagslysfaktoren på et gitter

Åbn {{ui:Dagslysfaktor på et gitter}} og {{ui:Beregn gitteret}}: BimCraft lægger et gitter over hvert rums gulv i arbejdsplanets højde (0.85 m til at starte), en halv meter ind fra væggene, og beregner dagslysfaktoren i hvert punkt efter **BRE split-flux-metoden**:

- **himmelkomponenten**: den overskyede himmel set fra punktet gennem hvert vindues åbning, med fradrag for rammerne;
- **den eksternt reflekterede komponent**: det punktet ser af bygninger udenfor gennem vinduet, der lyser med en tiendedel af himlen bag dem (ændr forhindringens lysstyrke, hvis de er meget lysere eller mørkere);
- **den internt reflekterede komponent**: lyset, der kaster sig rundt i rummet, fra rummets flader og refleksioner, vinduernes areal og hvor meget af det, der er udenfor dem (BRE-formlen, med glassets transmission i stedet for det klare glas, den går ud fra).

Hvert rum viser sin middelværdi, sit laveste punkt og hvor stor en del der får 2 % eller mere; et rums detaljer tegner dets plan med hvert punkt farvet efter dets dagslysfaktor og vinduerne i rødt. For at det kan køre hurtigt på enhver computer får et rum højst **400 punkter**: i et stort rum vokser afstanden, så det passer (skriv en afstand for at vælge din egen).

## Hvad det udelader

- Tagvinduer (glas liggende eller skråt) vises, men tælles ikke med: formlerne her er for vinduer i vægge.
- Vinduer uden rum bag sig (en gang uden zone, for eksempel) vises for sig.
- Vinduesfalse (åbningen tages på den udvendige flade), blænding, soltimer og klimabaseret dagslys. Til BS EN 17037, LEED eller BREEAM brug et dagslyssimuleringsprogram.
- Båndene er fra ældre britisk vejledning (BS 8206-2), vist som en rettesnor, aldrig som bestået eller ikke bestået.
