---
title: Form en væg: fastgør, profil, skråning og åbninger
summary: Fastgør en væggs top til et tag, en gulvplade eller et loft, giv den sin egen højdeprofil, lad den hælde, eller skær en åbning uden dør eller vindue, i Egenskaber, i en facade eller et snit, på væggens egen facadevisning eller i 3D. Hver er ét fortrydelsestrin.
keywords: fastgør, fastgør top, fastgør fod, tag, plade, loft, gavl, profil, redigér profil, højdeprofil, trappet, parapet, skråning, skrå, hæld, vip, konisk, dobbelt skråning, åbning, vægåbning, hul, gennemgang, ingen dør, greb, facade, snit, 3D, facadevisning, buet væg, kopi
from: f558b269
---

## Det skal du gøre

Ændr en vægs form over og under dens plan: dens top kan følge et tag, en gulvplade eller et loft, den kan have sin egen kontur set fra siden, den kan hælde, og den kan have åbninger uden dør eller vindue i. Væggens plan, dens hjørner og dens placeringslinje forbliver, som de var.

## Hvor du kan gøre det

- **Egenskaber**: med {{ui:Tegn}} og {{ui:Vælg}} slået til klikker du på én væg, du har tegnet. **Egenskaber** viser væggens rækker, og derefter **Form**, hvor alt skrives.
- **En facade eller et snit**: projektbrowserens blyant ({{ui:Redigér i denne visning}}) åbner visningen. Vælg en væg der, og træk i dens greb. Se "I en facade eller et snit" nedenfor.
- **Væggens egen facadevisning**: {{ui:Vægge}} › {{ui:Redigér profil…}}, og klik derefter på væggen i planen. Det virker for enhver væg, også en som ingen facade ser lige på, og for en buet væg (vist udfoldet).
- **Planen og 3D-visningen**: de fire kommandoer i {{ui:Vægge}} (gruppen Redigér): {{ui:Forbind top / bund}}, {{ui:Redigér profil}}, {{ui:Skråning}} og {{ui:Vægåbning}}. Se "I planen og i 3D" nedenfor.

Uanset hvilken vej du vælger, er det den samme ændring: ét trin i **Ændringer**, og {{ui:Fortryd}} tager den tilbage.

Lige og buede vægge tager begge alle formværktøjer. På en buet væg løber afstandene langs dens bue.

## Fastgør top eller fod

- **Fastgør top**: vælg et tag, en gulvplade eller et loft. Væggens top følger undersiden af det, du valgte, lige over hvert hjørne af væggen. Under et skråt tag får en væg en skrå top, og hvor taget skifter plan (en rygning eller et valmtag), bøjer væggens top med.
- **Fastgør fod**: vælg en gulvplade eller et loft. Væggens fod følger dens topflade.
- Hvor der ikke er noget over (eller under) en del af væggen, beholder den del væggens egen højde.
- Forbindelsen består: ændrer du tagets hældning eller udhæng, eller lofts højde, følger de fastgjorte vægge med i samme trin.
- Vælg **Egen højde** for at løse forbindelsen.

## Redigér profilen

{{ui:Redigér profil…}} åbner væggens kontur set fra siden:

- **Øverste linje**: rækker med **Langs** (afstanden fra vægens start) og **Højde** (over vægens fod). Tre rækker 0 / 3000, 2500 / 4500, 5000 / 3000 laver en gavl på en 5 m væg.
- **Nederste linje**: lad den stå tom for en fod i niveauet, eller giv rækker for en væg på et trinvist fundament.
- {{ui:Tilføj et punkt}} tilføjer en række, **Fjern** tager en væk. {{ui:Brug denne profil}} anvender den; {{ui:Tilbage til lige}} fjerner den.

Hver linje løber langs væggen én gang, fra start til slut. En linje, der går tilbage over sig selv, eller en top, der kommer ned til foden, afvises. Har du også en fastgjort top, bruges den laveste af de to.

## Lad væggen hælde

**Skråning**: **Lodret**, **Skrå** (begge flader hælder samme vej, tykkelsen forbliver) eller **Dobbelt skråning** (hver flade sin egen vinkel: en væg, der bliver tyndere eller tykkere, når den stiger). Skriv grader fra lodret. En plusvinkel hælder mod væggens venstre side, set fra dens start. Væggen bliver, hvor den er tegnet ved sin fod; de vægge, der er forbundet til den, hælder ikke med.

## Åbninger uden dør eller vindue

{{ui:Tilføj åbning}} skærer et hul på 900 bredt midt i væggen. Dens række i **Åbninger** sætter **Fra start**, **Bredde**, **Underkant** (fra niveauet) og **Højde**; **Fjern** tager den ud. Åbningen går gennem hele væggen, væggens mængder udelader den, og planen viser et hul, hvor den når planens skærehøjde. Når vægens start glider langs dens linje, beholder åbningen sin plads. En ændring, der ville efterlade den uden for væggen, afvises.

## I en facade eller et snit

Åbn visningen med projektbrowserens blyant. Med {{ui:Vælg og flyt}} slået til:

- **Profil**: klik på en væg, der vender mod visningen. Dens øverste og nederste linjer bliver blå, med et kvadratisk greb i hvert punkt og en prik midt i hvert stykke.
  - Træk et kvadrat for at flytte det punkt (de to endepunkter flytter sig kun op og ned).
  - Træk en prik for at flytte hele stykket op eller ned.
  - Dobbeltklik på en linje (eller højreklik) for at tilføje et punkt der. {{ui:Tilføj et punkt (top)}} og {{ui:Tilføj et punkt (bund)}} tilføjer et midt i det længste stykke.
  - Klik på et kvadrat og tryk Delete (eller højreklik) for at fjerne det punkt. {{ui:Tilbage til lige}} fjerner profilen.
  - Med et punkt valgt skriver du dets **Langs** og **Højde** i båndet under værktøjslinjen.
- **Fastgør**: båndet har listerne **Fastgør top** og **Fastgør fod** for den valgte væg. Eller brug værktøjet {{ui:Fastgør top}} eller {{ui:Fastgør fod}}: klik på væggen eller væggene og derefter på taget, pladen eller loftet, vist som stiplede bokse. Alle de valgte vægge fastgøres i ét trin.
- **Vægåbninger**: med værktøjet {{ui:Vægåbning}} trækker du en rektangel på en vægflade. Tilbage i {{ui:Vælg og flyt}} trækker du en åbning for at flytte den, trækker et af dens otte greb for at ændre størrelse, skriver **Fra start**, **Bredde**, **Underkant** og **Højde** i båndet, eller trykker Delete for at fjerne den.
- **Skråning**: en væg, visningen kigger langs (set fra enden, som et snit gennem den, eller i en facade fra dens ende), kan også klikkes. Træk det runde håndtag øverst for at lade den hælde, eller vælg **Lodret**, **Skrå** eller **Dobbelt skråning** i båndet og skriv vinklerne.

Mål springer i trin af 10 mm; skriv en værdi for alt, der er finere. En buet væg kan redigeres i en facade, mens den løber én vej hen over visningen. Dens egen facadevisning virker altid.

## I planen og i 3D

Åbn {{ui:Vægge}} i gruppen Redigér:

- {{ui:Forbind top / bund}}: vælg **Fastgør top** eller **Fastgør fod** i værktøjets række. Klik på væggen eller væggene (i planen eller i 3D-visningen), og derefter på det, de skal fastgøres til: i 3D klikker du på selve taget, gulvet eller loftet; i planen klikker du på et punkt under det (er der mere end ét, spørger en liste hvilket).
- {{ui:Redigér profil}}: i planen klikker du på en væg for at åbne dens facadevisning. I 3D klikker du på en væg: dens profilpunkter får greb, og du trækker et i væggens plan.
- {{ui:Skråning}}: klik på en væg (plan eller 3D), og skriv hvor meget den hælder.
- {{ui:Vægåbning}}: i planen klikker du på en væg, hvor åbningen skal være. Dens **Bredde**, **Højde** og **Underkant** står i værktøjets række. I 3D klikker du på ét hjørne på væggens flade og derefter på det modsatte hjørne. Med en væg valgt i 3D har dens åbninger greb: hjørnerne ændrer størrelse, midten flytter.

De 3D-greb er 3D-visningens egne, så de venter, mens snitboksen viser sine greb.

## På planen

En skrå væg tegnes der, hvor planen skærer den (1200 over niveauet, medmindre visningen siger andet): dens kontur flyttes så langt, som den hælder i den højde, og en dobbelt skråning er bredere eller smallere der. Dens kontur ved gulvet tegnes med de tynde linjer for det, der ligger under snittet. Vægens hjørner, greb og målsætninger bliver ved dens fod.

## Kopier

{{ui:Kopiér dette niveau…}} og Flyt med **Kopiér** tager vægens profil, skråning og vægåbninger med. En væg fastgjort til en gulvplade eller et loft er fastgjort til den kopierede plade eller det kopierede loft på det nye niveau. En fastgørelse til et tag kopieres ikke med et niveau (tage kopieres ikke). En kopi på samme niveau bliver fastgjort til samme tag, gulv eller loft.

## I filen

En formet væg skrives som et facetteret legeme (IfcFacetedBrep), som andre programmer læser, som den er tegnet. Dens indstillinger står på væggen (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). En åbning er et IfcOpeningElement i væggen uden noget, der fylder den.

## Ikke lavet endnu

- En profil med udhæng eller huller i konturen (brug åbninger til huller).
- I 3D: tilføjelse eller fjernelse af profilpunkter, og skråning med et håndtag (brug væggens facadevisning, en facade eller et snit, eller skriv værdierne).
- {{ui:Forskydning}} med **Kopiér** slået til kopierer ikke formen eller vægåbningerne (Flyt med **Kopiér** gør).
- En skrå væggs lag tegnes ikke på Middel- og Fin-planer (dens kontur gør).
- Åbninger, der ikke er rektangler.
