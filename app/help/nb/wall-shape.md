---
title: Form på en vegg: feste, profil, skråstilling og åpninger
summary: Fest toppen av en vegg til et tak, en etasje eller et himling, gi den en egen konturprofil, len den, eller kutt en åpning uten dør eller vindu, i Egenskaper, i en fasade eller et snitt, på veggens egen flatevisning eller i 3D. Hver endring er ett trinn du kan angre.
keywords: fest, fest topp, fest underkant, tak, dekke, himling, gavl, profil, rediger profil, fasadekontur, trappet, attikamur, skråstilling, skrå, lene, vippe, konisk, dobbel skråstilling, åpning, veggåpning, hull, gjennomføring, ingen dør, grep, fasade, snitt, 3D, flatevisning, buet vegg, kopi
from: f558b269
---

## Det du skal gjøre

Endre en vegges form over og under planen: toppen kan følge et tak, en gulvplate eller et himling, den kan ha en egen kontur sett fra siden, den kan lene seg, og den kan ha åpninger uten dør eller vindu i seg. Veggens plan, hjørnene og plasseringslinjen forblir som de var.

## Hvor du kan gjøre det

- **Egenskaper**: med {{ui:Tegn}} og {{ui:Velg}} på, klikk én vegg du har tegnet. **Egenskaper** viser veggens rader, deretter **Form**, der alt skrives inn.
- **En fasade eller et snitt**: blyanten i prosjektleseren ({{ui:Rediger i denne visningen}}) åpner visningen; velg en vegg der og dra i grepene. Se «I en fasade eller et snitt» nedenfor.
- **Veggens egen flatevisning**: {{ui:Vegger}} › {{ui:Rediger profil}}, og klikk deretter veggen i planen. Det fungerer for enhver vegg, også en som ingen fasade ser rett på, og for en buet vegg (vist utfoldet).
- **Planen og 3D-visningen**: de fire kommandoene i {{ui:Vegger}} (Rediger-gruppen): {{ui:Fest topp / underkant}}, {{ui:Rediger profil}}, {{ui:Skråstilling}} og {{ui:Veggåpning}}. Se «I planen og i 3D» nedenfor.

Uansett hvilken vei du velger, er det samme endring: ett trinn i **Endringer**, og {{ui:Angre}} tar det tilbake.

Rette og buede vegger tar begge alle formverktøyene. På en buet vegg går avstander langs buen.

## Fest toppen eller underkanten

- **Fest topp**: velg et tak, en etasje eller et himling. Veggens topp følger undersiden av det du valgte, rett over hvert hjørne av veggen. Under et skråtak får en vegg en skrå topp, og der taket skifter plan (en møne eller et valmet hjørne) bøyer veggens topp seg med det.
- **Fest underkant**: velg en etasje eller et himling. Veggens underkant følger dens topp.
- Der det ikke er noe over (eller under) en del av veggen, beholder den delen veggens egen høyde.
- Koblingen består: endrer du takets stigning eller overheng, eller himlingets høyde, følger de festede veggene med i samme trinn.
- Velg **Egen høyde** for å løsne den.

## Rediger profilen

{{ui:Rediger profil…}} åpner veggens kontur sett fra siden:

- **Toppline**: rader med **Langs** (avstanden fra veggens start) og **Høyde** (over veggens underkant). Tre rader 0 / 3000, 2500 / 4500, 5000 / 3000 gir en gavl på en 5 m vegg.
- **Underline**: la den stå tom for en vanlig underkant på nivå, eller gi rader for en vegg på et trappet fundament.
- {{ui:Legg til et punkt}} legger til en rad, og **Fjern** tar en bort. {{ui:Bruk denne profilen}} bruker den; {{ui:Tilbake til rett}} fjerner den.

Hver linje løper langs veggen én gang, fra start til slutt. En linje som går tilbake på seg selv, eller en topp som kommer ned til underkanten, avvises. Med en festet topp i tillegg brukes den lavere av de to.

## Len veggen

**Skråstilling**: **Loddrett**, **Skrå** (begge flatene lener seg samme vei, tykkelsen beholdes) eller **Dobbel skråstilling** (hver flate sin egen vinkel: en vegg som blir tynnere eller tykkere når den stiger). Skriv inn grader fra loddrett. En positiv vinkel lener mot veggens venstre side, sett fra starten. Veggen står der den er tegnet ved underkanten; veggene som er koblet til den lener seg ikke med den.

## Åpninger uten dør eller vindu

{{ui:Legg til åpning}} kutter et hull 900 bredt midt i veggen. Raden i **Åpninger** setter **Fra start**, **Bredde**, **Underkant** (fra nivået) og **Høyde**; **Fjern** tar den bort. Åpningen går gjennom hele veggen, veggens mengder utelater den, og planen viser et gap der den når planens skjærehøyde. Når veggens start glir langs linjen sin, beholder åpningen sin plass. En endring som ville plassert den utenfor veggen, avvises.

## I en fasade eller et snitt

Åpne visningen med blyanten i prosjektleseren. Med {{ui:Velg og flytt}} på:

- **Profil**: klikk en vegg som vender mot visningen. Topp- og underlinjene blir blå, med et firkantet grep på hvert punkt og en prikk midt i hvert stykke.
  - Dra en firkant for å flytte det punktet (de to endepunktene flyttes bare opp og ned).
  - Dra en prikk for å flytte hele stykket opp eller ned.
  - Dobbeltklikk en linje (eller høyreklikk den) for å legge til et punkt der. {{ui:Legg til et punkt (topp)}} og {{ui:Legg til et punkt (bunn)}} legger til et i midten av det lengste stykket.
  - Klikk en firkant og trykk Delete (eller høyreklikk den) for å fjerne det punktet. {{ui:Tilbake til rett}} fjerner profilen.
  - Med et punkt valgt, skriv inn dets **Langs** og **Høyde** i stripen under verktøylinjen.
- **Feste**: stripen har listene **Fest topp** og **Fest underkant** for den valgte veggen. Eller bruk verktøyet {{ui:Fest topp}} eller {{ui:Fest underkant}}: klikk veggen eller veggene, og deretter taket, gulvet eller himlingen, vist som stiplede bokser. Alle valgte vegger festes i ett trinn.
- **Veggåpninger**: med verktøyet {{ui:Veggåpning}} drar du et rektangel på en veggs flate. Tilbake i {{ui:Velg og flytt}} drar du en åpning for å flytte den, drar du ett av de åtte grepene for å endre størrelsen, skriver inn **Fra start**, **Bredde**, **Underkant** og **Høyde** i stripen, eller trykker Delete for å fjerne den.
- **Skråstilling**: en vegg visningen ser langs (sett rett forfra, som et snitt gjennom den, eller i en fasade fra enden) kan også klikkes. Dra det runde håndtaket øverst for å lene den, eller velg **Loddrett**, **Skrå** eller **Dobbel skråstilling** i stripen og skriv inn vinklene.

Størrelser fanger opp til 10 mm; skriv inn en verdi for alt som er finere. En buet vegg kan redigeres i en fasade mens den går én vei tvers over visningen. Dens egen flatevisning fungerer alltid.

## I planen og i 3D

Åpne {{ui:Vegger}} i Rediger-gruppen:

- {{ui:Fest topp / underkant}}: velg **Fest topp** eller **Fest underkant** i verktøyets rad. Klikk veggen eller veggene (i planen eller i 3D-visningen), og deretter det de skal festes til. I 3D klikker du selve taket, gulvet eller himlingen. I planen klikker du et punkt under det; når det er mer enn ett, spør en liste hvilket.
- {{ui:Rediger profil}}: i planen klikker du en vegg for å åpne dens flatevisning. I 3D klikker du en vegg: profilpunktene får grep, og du drar ett av dem i veggens plan.
- {{ui:Skråstilling}}: klikk en vegg (plan eller 3D) og skriv inn hvor langt den lener seg.
- {{ui:Veggåpning}}: i planen klikker du en vegg der åpningen skal gå. Dens **Bredde**, **Høyde** og **Underkant** står i verktøyets rad. I 3D klikker du ett hjørne på veggens flate, og så det motsatte hjørnet. Med en vegg valgt i 3D har åpningene sine grep: hjørnene endrer størrelse, midten flytter.

De 3D-grepene er 3D-visningens egne, så de venter mens snittboksen viser sine grep.

## På planen

En skrå vegg tegnes der planen skjærer den (1200 over nivået, med mindre visningen sier noe annet). Konturen flyttes over med hvor mye den lener seg i den høyden, og en dobbel skråstilling er bredere eller smalere der. Konturen ved gulvet tegnes med de tynne linjene for det som ligger under snittet. Veggens hjørner, grep og mål står ved underkanten.

## Kopier

{{ui:Kopier dette nivået…}} og Flytt med **Kopier** tar med veggens profil, skråstilling og veggåpninger. En vegg festet til et gulv eller et himling er festet til det kopierte gulvet eller himlingen på det nye nivået. En feste til et tak kopieres ikke med et nivå, fordi tak ikke kopieres. En kopi på samme nivå forblir festet til det samme taket, gulvet eller himlingen.

## I filen

En formet vegg skrives som et fasettert legeme (IfcFacetedBrep), som andre programmer leser slik den er tegnet. Innstillingene står på veggen (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). En åpning er en IfcOpeningElement i veggen, uten noe som fyller den.

## Ikke bygget ennå

- En profil med overheng eller hull i konturen (bruk åpninger for hull).
- I 3D: legge til eller fjerne profilpunkter, og skråstilling med et håndtak (bruk veggens flatevisning, en fasade eller et snitt, eller skriv inn verdiene).
- {{ui:Forskyvning}} med Kopier på kopierer ikke formen eller veggåpningene (Flytt med Kopier gjør det).
- Lagene i en skrå vegg tegnes ikke på middels og fine planer (konturen gjør det).
- Åpninger som ikke er rektangler.
