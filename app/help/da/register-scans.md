---
title: Registrér flere scanninger til én
summary: Placér scanninger taget fra forskellige positioner i én ramme ved hjælp af valgte punktpar eller indtastede mål, finjustér dem med ICP, gem registreringen som et projekt, og eksportér den registrerede punktsky som LAS eller E57.
keywords: registrering, registrér, scanninger, punktsky, icp, iterative closest point, mål, punktpar, stiv transformation, flugt, sammenlæg, e57, las, scan til BIM
from: e8e270db
---

## Hvad du gør

Flere scanninger af ét sted (hver fra sin egen scannerposition) starter i deres egne koordinater. Registrér dem: giv hver scanning én placering, så de alle sidder i én ramme, gem det derefter som et projekt, og skriv den registrerede punktsky til én LAS- eller E57-fil.

## Placér scanningerne

1. Åbn dialogen ({{ui:Registrér scanninger…}} på startpanelet, eller {{ui:Vis}} › {{ui:Registrér scanninger…}} når en model er åben). {{ui:Tilføj scanninger…}} tager LAS-, LAZ-, E57-, PLY-, PCD-, PTX-, PTS- eller XYZ-filer, eller slip dem på dialogen. Scanninger med forskellige enheder afvises med en note: konvertér en først.
2. Vælg {{ui:Scanning at flytte}} og {{ui:Placér mod}}. Billedet viser hver scanning i rammen, som den er nu, med én farve pr. scanning: {{ui:Plan}}, {{ui:Front}} eller {{ui:Side}}; træk for at panorere, brug hjulet til at zoome.
3. **Efter punktpar.** Klik på {{ui:Vælg et par}}, derefter et punkt på scanningen, der skal flyttes, og derefter det samme sted på en anden scanning (et hjørne, et mål, foden af en søjle). Gør det mindst tre gange, med punkter, der ikke ligger på en linje, og som er spredt ud. Klik på {{ui:Placér efter par}}: scanningen placeres ved en mindste-kvadraters-tilpasning, og **Resterende** viser, hvor langt hvert par stadig er fra. Et par med et stort tal er et dårligt valg: fjern det med krydset, og placér igen.
4. **Efter mål.** Hvis et punkts sande koordinater er kendte (opmålte mål), klik på {{ui:Vælg, og skriv derefter målet}}, klik på punktet på dets scanning, og skriv målets X, Y og Z i rækken. Par og indtastede mål kan frit blandes.

## Finjustér med ICP

Par giver en grov placering. {{ui:Finjustér}} flytter scanningen, til dens flader ligger på den andens: først **punkt til punkt**, derefter **punkt til plan**. Tabellen lister hvert trin med dets fejl og hvor mange punkter der matchede; linjen over den tegner fejlen, der falder. {{ui:Stop}} afslutter kørslen efter det igangværende trin og beholder det, der blev nået. {{ui:Fortryd}} tager hele kørslen (eller den sidste placering) tilbage; {{ui:Nulstil}} sætter scanningen tilbage til dens filkoordinater.

For at holde det hurtigt på en bærbar computer arbejder ICP på en nedsamplet andel af punkterne ({{ui:Brugte punkter}}, 5,000 til 60,000) og ignorerer matches længere væk end {{ui:Største matchafstand}} (som standard 5% af scanningens størrelse, der bliver mindre, efterhånden som den falder til ro). Den har brug for en grov placering først: scanninger, der næsten ikke overlapper, melder, at de ikke kan matches. Flader, der kun er flade eller kun er lige, kan ikke fastlåse en position langs sig selv; tilføj par i så fald.

## Gem og eksportér

- {{ui:Gem projekt}} skriver en lille `.ccscans.json`-fil: hver scannings navn, størrelse og et fingeraftryk af dens første 64 KB, med dens transformation. Den indeholder ingen punkter. {{ui:Åbn projekt…}} finder scanningsfilerne ud fra disse referencer (filerne skal være tilføjet først) og sætter hver transformation tilbage.
- {{ui:Eksportér LAS}} og {{ui:Eksportér E57}} skriver én fil med alle scanninger på deres registrerede plads. Punkter omskrives aldrig i originalerne; transformationen anvendes på vej ud. Med {{ui:Læs alle punkter fra filerne}} slået til læses hver fil igen for hvert punkt (op til 20 millioner pr. scanning); slået fra skrives kun de punkter, der vises i fremviseren.
- {{ui:Vis registreret sky}} (BimCraft) skriver LAS-filen og åbner den i 3D-visningen ved siden af modellen, ligesom enhver anden punktsky.

:::note
Intet uploades. Registrering arbejder i filernes egne enheder og bevarer millimeter: en LAS skrives med en skala, der passer (ned til 0.1 mm), en E57 med dobbeltpræcisionstal. Et koordinatsystem bæres kun over i LAS, når hver scanning angiver den samme EPSG-kode. E57-skriveren er vores egen; den kontrolleres ved at læse dens filer tilbage med denne læser og med libE57Format.
:::
