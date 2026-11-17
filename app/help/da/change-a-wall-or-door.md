---
title: Ændr en væg, dør eller et vindue
summary: Klik på en tegnet væg, dør eller et vindue, og ændr dens type, størrelse, højde eller placering i Egenskaber, eller træk den i planen; hver ændring er ét fortrydelsestrin.
keywords: ret vinklen op, ret, 90, ret vinkel, skæv, vinkel, ortho, rumstørrelse, indvendig flade, udvendig flade, mål fra, flytteafstand, indtastet afstand, buet, bue, buehøjde, radius, placeringslinje, justering, ændr, redigér, egenskaber, væggtype, tykkelse, længde, højde, sokkelhøjde, top, etage, vend, udvendig, dørstørrelse, vinduesstørrelse, vinduesbænk, afstand, flyt, greb, træk, skift type, flere
from: 63052d5d
---

## Hvad du skal gøre

Ændr det, du har tegnet: vælg en væg, dør eller et vindue, og skriv et nyt tal i **Egenskaber**, eller træk det i planen. Planen og 3D-visningen følger med, hjørnerne forbindes igen, og døre og vinduer bliver i deres vægge.

## Ændr en væg

1. Med {{ui:Tegn}} og {{ui:Vælg}} tændt, klik på væggen i planen (eller i 3D-visningen).
2. **Egenskaber** viser en boks med væggens tal. Ændr ét, og tryk {{key:Enter}}:
   - **Væggtype**: en anden af startertyperne. Tykkelsen og lagene ændres med den.
   - **Tykkelse**: vilkårlig tykkelse. Typen beholder sine andre lag, og dens hovedlag (stålprofilerne eller blokken) tager forskellen, fx "Udvendig 2×6, 200 mm".
   - **Mål fra**: **Midterlinje**, **Indvendig flade** eller **Udvendig flade**. **Længde** og **Rumstørrelse** læses og sættes fra den. Udvendig flade er det, planens målsætninger viser.
   - **Længde**: væggens ende flyttes langs dens linje. Væggen, der er forbundet i den ende, flyttes vinkelret på sig selv og beholder sin vinkel.
   - **Rumstørrelse** (når der er en parallel væg på tværs af rummet): skriv den størrelse, du ønsker. Denne væg flyttes vinkelret, og de forbundne vægge strækkes for at følge.
   - **Flyt vinkelret**: skriv, hvor langt væggen flyttes vinkelret på sig selv: et almindeligt tal flytter den ud, et minustal flytter den ind.
   - **Vinkel til forbundet væg**: vinklen til væggen, der er forbundet i dens start. Skriv 90 for at sætte den vinkelret. En væg, der ikke er forbundet til noget, viser **Retning** i grader fra øst.
   - {{ui:Ret vinklen op}}: drejer væggene, der er forbundet til denne, tilbage til rette vinkler, langs den retning de fleste af dem løber i. Det virker på hele den forbundne rum- eller layoutgruppe, uanset hvilken af dens vægge du vælger. En væg mere end 10 grader fra en ret vinkel bliver, som den er, så en væg sat til 45 grader er sikker. Ét {{ui:Fortryd}} tager det hele tilbage.
   - **Væghøjde**: **Op til etagen over** følger den etage, **Op til Etage 3** (og enhver etage højere) laver en væg, der løber gennem etagerne imellem; at skrive en højde sætter så, hvor langt under eller over den etage toppen ligger. **Fast højde** beholder det tal, du skriver. **Løber igennem** lister de etager, en sådan væg passerer: den tegnes lysere i deres planer, rum der lukker op mod den, og døre og vinduer kan placeres i den fra disse planer. Den flyttes og omformes på den etage, den starter på.
   - **Sokkelhøjde**: hvor højt over etagen væggen starter. Dens top bliver, hvor den var.
   - **Udvendig**: {{ui:Vend}} sætter de udvendige lag på den anden flade.
   - **Placeringslinje**: **Midterlinje**, **Udvendig flade**, **Indvendig flade**, **Venstre flade** eller **Højre flade**. Ændringen flytter intet. Senere, når væggen bliver tykkere (efter type eller **Tykkelse**) eller dens udvendige side vendes, bliver placeringslinjen stående, og væggen vokser eller vendes om den. En lige væg, der møder den i et hjørne, følger med, så hjørnet stadig lukkes. Den valgte væggs placeringslinje tegnes stiplet i planen. Vælg flere vægge for at sætte den for alle.
   - **Buehøjde** (buede vægge): hvor langt midten bøjer sig væk fra en ret linje. 0 gør den ret; en negativ værdi bøjer den til den anden side. Radius vises ved siden af.
3. Hver ændring er ét trin i **Ændringer**; {{ui:Fortryd}} tager det tilbage.

## Træk en væg i planen

Når én væg er valgt, viser den tre greb: en firkant i hver ende og en cirkel i midten.

- Træk en ende for at gøre væggen længere, kortere eller dreje den. Den fanger som Væg-værktøjet, og den fanger vinkelret på væggen, der er forbundet i dens anden ende, når du er inden for 3 grader; {{key:Shift}} holder den på planens akser.
- Væggene, der er forbundet i enden, du trækker, beholder deres vinkel: deres ender glider langs deres egne linjer for at møde væggens nye linje, så intet bliver skråt. Hold {{key:Mod}} for et frit træk (den forbundne væggens ende følger med dit, og den væg drejer), eller {{key:Alt}} for at bryde forbindelserne ved denne væg.
- Træk midten for at flytte hele væggen vinkelret på sig selv, uanset hvilken vej du trækker. Dens hjørner glider langs de forbundne vægge, så de vægge beholder deres vinkel.
- Hold {{key:Mod}} mens du trækker midten for et frit træk, når du vil bryde vinklen. {{ui:Ret vinklen op}} bringer den tilbage.
- Mens et greb holdes, skriv en afstand og tryk {{key:Enter}} (eller slip): væggen går præcis så langt, på den måde du trak. {{key:Esc}} opgiver flytningen.
- En valgt buet væg viser greb i sine ender og et rundt greb midt på sin bue. Træk det runde greb for at bøje den.
- Døre og vinduer bliver i væggen. En væg, der er for kort til det, den rummer, afvises med "Den passer ikke i den væg."

## Ændr en dør eller et vindue

1. Klik på døren eller vinduet i planen.
2. I **Egenskaber**: **Type** (en anden dør eller et andet vindue af samme slags), **Bredde**, **Højde**, **Vinduesbænk** (vinduer), **Fra starten** og **Fra enden** (afstanden fra hver ende af væggens flade til dens kant), **Hængsler** {{ui:Vend}} (døre med ét fløj og fløjvinduer; skydedøre, skjult-, lade- og foldedøre siger **Åbner mod** i stedet; faste, ophængte og billedevinduer og dobbeltdøre har ingen), og **Svinger mod** (døre) eller **Karmside** (vinduer) {{ui:Vend}}.
3. Eller træk den langs sin væg, eller over på en anden væg: se [Døre og vinduer](topic:doors-and-windows).

## Ændr flere ad gangen

Vælg flere vægge (eller flere døre, eller flere vinduer) med {{key:Shift}}+klik eller {{key:Mod}}+klik. **Egenskaber** tilbyder det, de deler: **Skift type…**, højden, størrelsen. Én ændring sætter dem alle, og ét {{ui:Fortryd}} tager det hele tilbage.

## Godt at vide

- Tallene vises i de {{ui:Enheder}}, der er valgt på værktøjslinjen.
- Vægge, døre og vinduer fra andre programmer viser deres IFC-data i **Egenskaber** som før, uden denne boks.
