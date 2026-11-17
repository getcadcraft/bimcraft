---
title: Fundamenter under veggene
summary: Legg en platting på grunn, sokkelvegger med platting, kryperom eller kjeller under en bygning med ett klikk; grunnmurene dimensjoneres etter veggene og antall etasjer, og fundamentet følger med når veggene flyttes.
keywords: fundament, grunnmur, platting på grunn, forsterket kant, monolittisk platting, sokkelvegg, kryperom, kjeller, kjellervegg, frost, betong, bredde på grunnmur
from: c0e20172
---

## Hva du skal gjøre

Gi bygningen et fundament som passer veggene. BimCraft følger utsiden av veggene, dimensjonerer grunnmurene etter veggtypen og hvor mange etasjer som står på dem, og lager fundamentet på nytt hver gang veggene endres.

## Legg inn et fundament

1. På nivået der veggene står på det (vanligvis det første), åpne {{ui:Bygg}} og velg {{ui:Fundament}}.
2. Velg utførelse:
   - **Platting på grunn**: en 4" betongplatting der overkanten er gulvet, med en forsterket kant under veggene.
   - **Sokkelvegger og platting**: fundamentvegger opp til gulvet på grunnmur, med en platting innenfor dem.
   - **Kryperom**: fundamentvegger som stopper under gulvkonstruksjonen, på grunnmur, uten platting.
   - **Kjeller**: fundamentvegger i full høyde på grunnmur, med en kjellerplatting under gulvkonstruksjonen.
3. Pek inne i bygningen: grunnmurene vises stiplet med sin størrelse. Klikk.

Klikker du på en bygning som allerede har et fundament, velges det, slik at du kan endre det i stedet for å legge til et nytt.

## Endre det

Velg fundamentet (klikk inne i bygningen med {{ui:Fundament}}, eller klikk en av delene i 3D-visningen eller modelltreet) og endre det i **Egenskaper**: utførelsen, grunnmurens bredde og dybde, hvor dypt grunnmurens underkant ligger, veggtykkelsen, hvor langt under gulvet veggene stopper, kjellerhøyden og plattingens tykkelse. Hver endring er ett trinn å angre.

Størrelser merket **auto** kommer fra veggene: grunnmurer 12", 15" eller 23" brede for én, to eller tre etasjer på platting eller sokkelvegger, 18", 22" eller 27" over et kryperom eller en kjeller, og 4" bredere under mur- eller betongvegger. Skriv en størrelse for å sette din egen; skriv `0` for å gå tilbake til auto.

:::warning
De automatiske størrelsene er merkede standardverdier for vanlige lette trehus, ikke prosjektering. En konstruktør eller ingeniør kontrollerer grunnmurer, dybder og vegger mot grunnen, frostdybden og lastene.
:::

## Hva som lagres

Et fundament lagres som en IFC-elementsamling («Foundation») laget av en grunnmur (eller en plattings forsterkede kant), en fundamentvegg og en platting etter utførelsen, alle av betong, hver med sine mengder: lengder, bredder, høyder, arealer og volum, klart for mengdeuttak.

## Greit å vite

- Flytt, legg til eller slett vegger, og fundamentet under dem lages på nytt. Tegner du vegger på nivået over, blir grunnmurene under bredere for den ekstra etasjen.
- {{key:Delete}} fjerner et valgt fundament med alle delene.
- Med terrenget på stedet i modellen (se [Tomtens terreng, byggeplaten og belegg](topic:terrain)) trinnes sokkelvegger og kryperomsgrunnmurer ned med det, i 8"-trinn.
- Grunnmurer under innervegger er ikke bygget ennå.
