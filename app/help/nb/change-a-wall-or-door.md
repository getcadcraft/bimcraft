---
title: Endre en vegg, dør eller et vindu
summary: Klikk en tegnet vegg, dør eller et vindu og endre type, størrelse, høyde eller plassering i Egenskaper, eller dra det i planen. Hver endring er ett angrestegg.
keywords: rett opp, kvadrat, 90, rett vinkel, skjev, vinkel, ortho, romstørrelse, innside, utside, mål fra, flyttavstand, skrevet avstand, buet, bue, buehøyde, radius, plasseringslinje, justering, endre, rediger, egenskaper, veggtype, tykkelse, lengde, høyde, sokkelforskyvning, topp, etasje, snu, dørstørrelse, vindusstørrelse, sålbenk, avstand, flytt, håndtak, dra, endre type, flere
from: 63052d5d
---

## Hva du skal gjøre

Endre det du tegnet: velg en vegg, dør eller et vindu, og skriv et nytt tall i **Egenskaper** eller dra det i planen. Planen og 3D-visningen følger, hjørnene møtes igjen, og dører og vinduer blir i veggene sine.

## Endre en vegg

1. Med {{ui:Tegn}} på og {{ui:Velg}} på, klikk veggen i planen (eller i 3D-visningen).
2. **Egenskaper** viser en boks med veggens tall. Endre ett og trykk {{key:Enter}}:
   - **Veggtype**: en annen av startypene. Tykkelsen og lagene endres med den.
   - **Tykkelse**: en hvilken som helst tykkelse. Typen beholder sine andre lag, og hovedlaget (stenderne eller blokken) tar forskjellen, for eksempel «Utvendig 2×6, 200 mm».
   - **Mål fra**: **Midtlinje**, **Innside** eller **Utside**. **Lengde** og **Romstørrelse** leses og settes fra den. Utside er det planens mål viser.
   - **Lengde**: veggens ende flyttes langs linjen sin. Veggen som er knyttet til den enden, flyttes vinkelrett på seg selv og beholder vinkelen sin.
   - **Romstørrelse** (når det finnes en parallell vegg over rommet): skriv størrelsen du vil ha. Denne veggen flyttes vinkelrett, og de tilknyttede veggene strekkes for å følge.
   - **Flytt vinkelrett**: skriv hvor langt veggen skal flyttes vinkelrett på seg selv. Et vanlig tall flytter den ut, et minustall flytter den inn.
   - **Vinkel til tilknyttet vegg**: vinkelen til veggen som er knyttet ved starten. Skriv 90 for å sette den rett. En vegg som ikke er knyttet til noe, viser **Retning**, i grader fra øst.
   - {{ui:Rett opp}}: snur veggene som er koblet til denne, tilbake til rette vinkler, langs den retningen de fleste av dem går i. Den virker på hele det sammenhengende rommet eller oppsettet, uansett hvilken av veggene du velger. En vegg mer enn 10 grader fra rett vinkel blir stående, så en vegg satt til 45 grader er trygg. Ett {{ui:Angre}} tar alt tilbake.
   - **Veggshøyde**: **Opp til etasjen over** følger den etasjen. **Opp til etasje 3** (og enhver etasje lenger opp) lager en vegg som går gjennom etasjene mellom. Skriver du en høyde, angis hvor langt under eller over den etasjen toppen ligger. **Fast høyde** beholder tallet du skriver. **Går gjennom** lister etasjene en slik vegg passerer: den tegnes lysere i planene deres, rom der lukkes mot den, og dører og vinduer kan plasseres i den fra disse planene. Den flyttes og formes på etasjen den starter på.
   - **Sokkelforskyvning**: hvor høyt over etasjen veggen starter. Toppen blir der den var.
   - **Utside**: {{ui:Snu}} legger de utvendige lagene på den andre flaten.
   - **Plasseringslinje**: **Midtlinje**, **Utside**, **Innside**, **Venstre flate** eller **Høyre flate**. Å endre den flytter ingenting. Senere, når veggen blir tykkere (etter type eller **Tykkelse**) eller utsiden snus, blir plasseringslinjen stående, og veggen vokser eller snur seg rundt den. En rett vegg som møter den i et hjørne, følger, så hjørnet fortsatt lukkes. Den valgte veggens plasseringslinje tegnes stiplet i planen. Velg flere vegger for å sette den for alle.
   - **Buehøyde** (buede vegger): hvor langt midten bøyer seg fra en rett linje. 0 gjør den rett; en negativ verdi bøyer den til den andre siden. Radiusen vises ved siden av.
3. Hver endring er ett steg i **Endringer**. {{ui:Angre}} tar det tilbake.

## Dra en vegg i planen

Når én vegg er valgt, viser den tre håndtak: en firkant i hver ende og en sirkel i midten.

- Dra en ende for å gjøre veggen lengre, kortere eller vri den. Den fester seg som verktøyet for vegger, og fanger opp vinkelrett på veggen som er knyttet i den andre enden når du er innen 3 grader. {{key:Shift}} holder den på planens akser.
- Veggene som er knyttet i enden du drar, beholder vinkelen sin: endene deres glir langs sine egne linjer for å møte veggens nye linje, så ingenting blir skrått. Hold {{key:Mod}} for fri dra (endenen til den tilknyttede veggen følger med deg, og den veggen vrir seg), eller {{key:Alt}} for å bryte forbindelsene til denne veggen.
- Dra midten for å flytte hele veggen vinkelrett på seg selv, uansett hvilken vei du drar. Hjørnene glir langs de tilknyttede veggene, så disse beholder vinkelen sin.
- Hold {{key:Mod}} mens du drar midten for fri flytting, når du faktisk vil bryte vinkelen. {{ui:Rett opp}} gjør den rett igjen.
- Mens et håndtak holdes, skriv en avstand og trykk {{key:Enter}} (eller slipp): veggen går nøyaktig så langt, på den måten du dro. {{key:Esc}} avbryter flyttingen.
- En valgt buet vegg viser håndtak i endene og et rundt håndtak midt på buen. Dra det runde håndtaket for å bøye den.
- Dører og vinduer blir i veggen. En vegg som er for kort for det den holder, avvises med «Det får ikke plass i den veggen.»

## Endre en dør eller et vindu

1. Klikk døren eller vinduet i planen.
2. I **Egenskaper**: **Type** (en annen dør eller et annet vindu av samme slag), **Bredde**, **Høyde**, **Sålbenk** (vinduer), **Fra starten** og **Fra slutten** (avstanden fra hver ende av veggflaten til kanten), **Hengsler** {{ui:Snu}} (dører med ett blad og vinduer med vipp; skyve-, lomme-, låve- og foldedører sier i stedet **Åpner mot**; faste, hengte og bildevinduer og dobbeltdører har ingen), og **Svinger mot** (dører) eller **Karmside** (vinduer) {{ui:Snu}}.
3. Eller dra den langs veggen sin, eller over på en annen vegg: se [Dører og vinduer](topic:doors-and-windows).

## Endre flere samtidig

Velg flere vegger (eller flere dører, eller flere vinduer) med {{key:Shift}}+klikk eller {{key:Mod}}+klikk. **Egenskaper** tilbyr det de har felles: **Endre type…**, høyden og størrelsen. Én endring setter alle, og ett {{ui:Angre}} tar alt tilbake.

## Greit å vite

- Tallene vises i {{ui:Enheter}} valgt på verktøylinjen.
- Vegger, dører og vinduer fra andre programmer viser IFC-dataene sine i **Egenskaper** som før, uten denne boksen.
