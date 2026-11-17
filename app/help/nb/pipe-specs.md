---
title: Rørspesifikasjoner, ventiler, spjeld og produsentfamilier
summary: Sett opp egne rørspesifikasjoner (størrelsestabeller med materiale, skjøt og ruhet), lagret i modellfilen; plasser ventiler, filter og spjeld på strekninger; og hent inn en produsents ventil- eller utstyrsmodell som familie med tilkoblingsporter.
keywords: rørspesifikasjon, rørspesifikasjoner, rørspesifikasjon for rørledning, rørklasse, egendefinert rør, størrelsestabell, rør, hygienerør, rustfritt stål, tabell, utvendig diameter, veggtykkelse, innvendig diameter, ruhet, trykkklasse, csv, json, importer, eksporter, regneark, standard, bpe, din, en 10357, en 10255, ventil, ventiler, sommerfuglventil, balanseventil, reguleringsventil, filter, spjeld, volumspjeld, brannspjeld, oem, produsent, leverandør, familie, familier, porter, tilkobling, step, obj, gltf, ifc, radiator, konvektor, panelvarmer, luftbehandlingsaggregat, luftdyse, rist
from: bc2f7c4e
---

## Hva du gjør

Tegn rør med din egen spesifikasjon i stedet for de innebygde tabellene for stål, kobber og plast, sett ventiler og spjeld på strekningene, og plasser en produsents modell med porter som rørene kobles til.

:::note
Et hjelpemiddel for tegning og koordinering. En rørspesifikasjon inneholder tallene du skriver inn eller importerer: kontroller hver tabell mot prosjektets standard. Innebygde ventiler, filter og spjeld er skjematiske former dimensjonert ut fra strekningen, ikke en produsents eller en ventilstandards lengde.
:::

## Sett opp en rørspesifikasjon

1. Slå på {{ui:Draw}}, åpne {{ui:Build}} og velg {{ui:Pipe specs}}. Den samme knappen finnes på linjen for rørverktøyet.
2. Velg {{ui:New}}, eller start fra en fil, en innliming eller en startspesifikasjon (se nedenfor).
3. Skriv inn navnet, standarden eller referansen den følger, materialet og type ende eller skjøt.
4. Skriv inn én rad per størrelse: størrelsens navn, utvendig diameter og veggtykkelse, i millimeter. Skriv inn innvendig diameter i stedet for veggtykkelsen hvis det er det du har: den andre fylles ut. DN, trykkklasse og vekt er valgfrie.
5. Valgfritt: ruheten i millimeter (beregningen av trykkfall bruker den), en isolasjonstykkelse nye strekninger starter med, bøyeradiusen som en faktor av utvendig diameter, om spesifikasjonen har T-stykker og reduksjoner, og en egen farge i 3D.
6. Kryss av for systemene der nye strekninger skal starte i denne spesifikasjonen, for eksempel kjølt vann.
7. Velg {{ui:Save in the model}}.

Spesifikasjonene lagres i modellfilen. Alle som åpner filen har dem, og {{ui:Undo}} angrer en endring.

En spesifikasjon, eller en av størrelsene i den, kan ikke slettes mens en strekning er tegnet i den. Når du endrer tallene for en størrelse, tegnes strekningene i den størrelsen på nytt.

## Gjenbruk en spesifikasjon i en annen modell

- {{ui:Export .json}} lagrer den valgte spesifikasjonen som en liten fil; {{ui:Export all}} lagrer alle spesifikasjoner i modellen. {{ui:Import a file}} leser dem tilbake.
- {{ui:Export .csv}} lagrer størrelsestabellen for et regneark. {{ui:Import a file}} leser også en `.csv`.
- {{ui:Paste rows}} tar imot en tabell kopiert fra et regneark. Den første raden angir kolonnene: `Size`, `OD` og `Wall` (eller `ID`), og valgfritt `DN`, `Pressure`, `Weight`. Én rad per størrelse. Tall er i millimeter, med mindre du velger tommer eller en celle skriver sin enhet (`0.065 in`).

## Startspesifikasjoner

{{ui:Add a starter spec}} legger til en av disse i modellen din som en kopi du kan redigere:

| Startspesifikasjon | Størrelser |
|---|---|
| ASME BPE tube | 1/4" til 6" |
| EN 10357 series A tube (DIN 11850 row 2) | DN10 til DN200 |
| EN 10255 steel tube, medium series | DN15 til DN150 |
| EN 10255 steel tube, heavy series | DN15 til DN125 |

Disse tabellene viser utvendige diametre og vegger som to eller flere publiserte leverandørsider oppgir for standarden, og som er enige. De er ikke hentet fra selve standardene. Størrelser som bare én side oppgir, er utelatt. Hver startspesifikasjon viser sine kildesider og er merket «sjekk mot prosjektets standard». Det er ingen ruhet, trykkklasse eller vekt.

## Tegn en strekning i en spesifikasjon

1. Velg {{ui:Pipe}}. Et system du krysset av i en spesifikasjon, starter i den. For andre strekninger velger du spesifikasjonen i materiallisten: spesifikasjoner listes etter de innebygde materialene som «Spec: navn».
2. Størrelseslisten inneholder nå bare spesifikasjonens størrelser. Velg én og tegn strekningen.

Vil du flytte en strekning inn i en spesifikasjon senere, velg den og endre **Material** i {{ui:Properties}}. Størrelsen blir spesifikasjonens nærmeste størrelse etter utvendig diameter.

I IFC-filen har røret navnet, standarden, materialet, skjøten og dimensjonene til spesifikasjonen (`CadCraft_PipeSpec` og `Pset_PipeSegmentTypeCommon`, på røret og på typen).

Dimensjonerings- og trykkfallsberegningene bruker spesifikasjonens innvendige diameter. Når spesifikasjonen har en ruhet, beregnes friksjonen for en strekning med den (Darcy-Weisbach); uten den brukes beregningens vanlige standardverdi.

## Ventiler, filter og spjeld

1. Velg {{ui:Valve}} og velg typen i linjen: sluseventil, kulventil, sommerfuglventil, kuleventil, tilbakeslagsventil, balanseventil eller reguleringsventil, eller et filter, for rør; et volumspjeld eller et brannspjeld for kanaler.
2. Klikk på strekningen der den skal stå. Strekningen kuttes rundt den, og begge sider forblir koblet. Den får strekningens størrelse og flytter seg med strekningen.

{{ui:Properties}} for strekningen lister hver enkelt med {{ui:Remove}}; strekningen lukkes igjen.

Trykkfallsberegningen regner med et rørdelstap bare for sluseventiler, kulventiler, globeventiler og tilbakeslagsventiler. De andre typene, spjeld og produsenters familier gir ikke tap der: ta hensyn til dem i din egen kontroll. De telles i tabellen **Fittings and valves** og i mengdeuttaket, og skrives til IFC som ventiler, et filter (siling) og spjeld med to tilkoblede porter.

## En produsents modell som familie

1. Åpne {{ui:Build}} og velg {{ui:Families}}, deretter {{ui:Import a model}}. IFC-, STEP-, OBJ-, STL-, glTF- og bibliotekselementfiler leses. For OBJ og STL angir du filens enheter og opp-akse først.
2. I portdialogen skriver du inn navnet, produsenten og modellnummeret.
3. Velg om den skal stå **On a run** (en ventil, et filter eller et spjeld) eller være **Equipment**, og hvordan den skrives.
4. Gi den sine porter. Hver har et navn, rør eller kanal, mediet, størrelsen i millimeter (et rørs utvendige diameter), nominell dimensjon slik spesifikasjonen din angir den, type ende, posisjon og hvilken vei den vender. {{ui:On a face}} setter en port i midten av en flate på modellens boks. Den lille oversikten ovenfor viser portene.
5. Velg {{ui:Save the family in the model}}.

En familie som skal stå på en strekning, trenger nøyaktig to porter som vender bort fra hverandre på én linje. Velg den i listen for ventilverktøyet og klikk på en strekning: den plasseres med sin egen lengde, og rørene kobles til portene.

En familie strekkes aldri. Hvis portene ikke har strekningens størrelse, får du beskjed når du plasserer den, og {{ui:Check connections}} lister den.

En utstyrsfamilie plasseres med {{ui:Equipment}}, type **Manufacturer's family**. Rør og kanaler fester seg til portene.

{{ui:Download as a Library item}} lagrer en familie med sine porter som en fil du kan sende inn til biblioteket.

## Radiatorer og konvektorer

{{ui:Equipment}} har også **Radiator** og **Convector / panel heater**: generiske figurer med en tilløps- og en returtilkobling for varmtvann. Se [MEP-utstyr med porter](topic:mep-equipment).
