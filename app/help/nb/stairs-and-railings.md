---
title: Trapper og rekkverk
summary: Tegn rette trapper, L-trapper, U-trapper og vindeltrapper som beregner sine opptrinn og inntrinn ut fra høyden fra gulv til gulv, med håndlister, spiler og trappehullet i etasjen over; tegn sikringsrekkverk langs terrasser og rundt åpninger.
keywords: spiral, rund trapp, trapp, trapper, trappeløp, opptrinn, inntrinn, repos, vinkeltrinn, L-trapp, U-trapp, snuoppgang, håndlist, rekkverk, sikringsrekkverk, spiler, stolpe, trappehull, fri høyde, terrasse, balkong
from: 16e5ace4
---

## Oppgave

Legg til trapper mellom nivåer og rekkverk der folk trenger dem. En trapp regner ut sine egne trinn fra høyden mellom nivåene, holder seg innenfor de vanlige grensene for boliger, setter håndlister på de åpne sidene og kutter trappehullet i etasjen over.

## Tegn en trapp

1. På nivået trappen starter fra, åpne {{ui:Bygg}} og velg {{ui:Trapp}}.
2. Velg typen — **Rett**, **L med repos**, **U med repos** eller **L med vinkeltrinn** — hvilken vei den **svinger**, dens **bredde** og hvor **håndlistene** skal være.
3. Klikk der trappen starter: midt på forkanten av nederste trinn.
4. Flytt pekeren i den retningen trappen går opp; trinnene følger den, med antall opptrinn og inntrinn. Den fester seg til veggene og til trinn på 15°; hold {{key:Shift}} for å holde den rettvinklet.
5. Klikk. {{key:Esc}} starter på nytt.

## Tegn en spiraltrapp

1. Åpne {{ui:Bygg}}, velg {{ui:Trapp}}, og velg deretter **Spiral** som type.
2. Sett **Sving**, hvilken vei den vrir seg oppover (venstre er mot klokken).
3. Klikk midt på stolpen.
4. Klikk i retningen nederste inntrinn peker.

Den starter 30" bred (inntrinnet, fra stolpen til utsiden), med en stolpe på 4½". Opptrinnene regnes ut fra høyden fra gulv til gulv, høyst 9½" som standard. Inntrinnene er 7½" dype på gangkurven, 12" ut fra stolpen. Håndlisten går på utsiden.

I **Egenskaper** får en spiraltrapp feltet **Senterstolpe**, med dens diameter. Feltet **Inntrinn** måles på gangkurven. Kontrollene er merket som standardverdier for spiraltrapper: 26" fri bredde, minst 6¾" inntrinn på gangkurven, opptrinn høyst 9½" og håndlister på 34"–38". De er ikke ingeniørberegninger; byggesaksmyndigheten avgjør.

## Slik beregnes trinnene

Høyden mellom nivåets gulv og nivået over deles i like opptrinn på høyst 7¾", og hvert inntrinn er 10" dypt (begge kan endres i **Egenskaper**). Et repos regnes som ett trinn; vinkeltrinn er tre trinn vifteformet rundt det indre hjørnet. Endres et nivås høyde, beregnes alle trapper på nivået på nytt.

:::warning
7¾" opptrinn, 10" inntrinn, 36" bredde, 6'-8" fri høyde og 34"–38" håndlister er standardverdier merket etter de vanlige boligforskriftene, ikke ingeniørberegninger. **Egenskaper** viser hvilke som er oppfylt; byggesaksmyndigheten avgjør hva som gjelder.
:::

## Endre en trapp

Velg den (klikk den i planen eller i 3D-visningen) og endre i **Egenskaper**: type og sving, bredde, høyeste opptrinn, inntrinnsdybde, håndlister og deres høyde, og **Kutt gulvet over** for trappehullet. Opptrinnene og inntrinnene den endte opp med vises under.

## Trappehullet

Når nivået over har et gulv, kutter trappen gulvet der trinnene ville gitt mindre enn 6'-8" fri høyde. Kuttet flyttes med trappen og forsvinner når trappen slettes.

## Tegn et rekkverk

1. Åpne {{ui:Bygg}} og velg {{ui:Rekkverk}}.
2. Velg **Sikringsrekkverk** (36" høyt) eller **Håndlist**, og høyden.
3. Klikk langs kanten — en terrasse, en balkong, rundt et trappehull — og dobbeltklikk eller trykk {{key:Enter}} for å avslutte.

Rekkverk får stolper i endene og i hjørnene, og spiler med mellomrom under 4". Velg ett for å endre type, høyde eller hvor langt over gulvet det starter.

## Tegn et gjerde

Velg **Gjerde** i samme rekkverksverktøy, sett høyden (1800 mm til å begynne med), klikk langs gjerdelinjen og trykk {{key:Enter}}.

- Gjerdet får en stolpe i hver ende og i hvert hjørne, og en stolpe med høyst 2.4 m mellom dem. Et panelgjerde har et panel mellom stolpene; et stavgjerde har to stenger. Dette er vanlige valg, ikke et krav i forskriften: lokale regler begrenser et gjerdes høyde.
- Det er ett element i modellen (en IfcRailing kalt Fence) med et egenskapssett {{ui:CadCraft_Fence}}: stil, høyde, stolper, paneler, stenger, porter, lengde og panelareal. Ett steg som kan angres.
- Ikke tegnet her: porter (generatoren i CivilCraft legger dem ut), pinner, terreng (gjerdet står på nivået), og å velge en enkelt stolpe.

## Hva som lagres

En trapp lagres som en IFC-trapp bygget av trappeløp (med opptrinn, inntrinn, opptrinnshøyde og inntrinnslengde), repos, vinkeltrinn og håndlister; trappehullet er en åpning i dekket over. Rekkverk er IFC-rekkverk med lengde og antall spiler og stolper.
