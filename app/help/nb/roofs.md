---
title: Tak: takvinkel for hver vegg, gavler, pulttak og takflater
summary: Sett hver vegg under et tak til skrånende, gavlende eller ingen, bruk forhåndsinnstillingene for valmet, gavl og pulttak, løft taket med murhøyden, legg til vindskie og underside, og tegn enkelte takflater der det automatiske taket ikke passer.
keywords: endre tak, rediger tak, valgt tak, takegenskaper, angre tak, tak, takvinkel, per vegg, gavl, gavlende, pulttak, valmet, renne, møne, murhøyde, hæl, vindskie, underside, takfot, skråkant, overheng, takflate, verandatak, takkvist, gavltakkvist, pulttakkvist
from: 096084a7
---

## Hva du gjør

Form taket ut fra veggene under det. Hver vegg får sin egen innstilling, så ett tak kan være valmet i fronten, gavlet i endene og stoppe flatt mot en høyere vegg bak. For en veranda eller en flate det automatiske taket ikke kan lage, tegn en takflate etter hjørnene.

## Sett et tak på

1. På etasjen der veggene som bærer taket står, klikk {{ui:Roof}}.
2. Skriv **Takvinkel** (`6/12`, eller grader som `30`) og **Overheng**.
3. Velg en forhåndsinnstilling: **Valmet tak**, **Gavler på de korte sidene**, **Gavler på de lange sidene**, eller **Pulttak** (siden nærmest pekeren er den lave takfoten, og de andre sidene er gavlender).
4. La **Vindskie og underside** være avkrysset for lukkede takskjegg med et vindskiebord. Fjern haken for en bar takkant.
5. Pek inne i bygningen: takfoten, mønet, valmene og rennene vises på planen. Klikk.

Alle former fungerer: L-, T-, U- og plusformer, skrå hjørner og utskjæringer. Valmer, møner og renner finnes der takflatene møtes.

## Én vegg om gangen

Velg taket (på etasjen over veggene, klikk inne i konturen), og se under **Hver vegg** i **Egenskaper**. Peker du på en rad, markeres den veggen på planen.

- **Skrånende**: veggen har en skrå takflate over seg. Skriv dens egen takvinkel ved siden av, for eksempel `12/12` for bratte ender på et `6/12`-tak.
- **Gavlende**: taket slutter i en loddrett ende over veggen. Veggen fylles opp til taket, og taket går forbi den med **Gavloverheng**.
- **Ingen (slutter i flukt)**: taket slutter ved veggen, uten overheng og uten gavlvegg. Brukes for et tak mot en høyere vegg.

Listen **Ender** øverst setter alle vegger på en gang. **Sett per vegg** vises når veggene ikke lenger stemmer med en forhåndsinnstilling.

## Endre et tak du har satt på

Velg taket. **Egenskaper** viser de samme innstillingene som takverktøyet: **Takvinkel**, **Overheng**, **Gavloverheng**, **Murhøyde**, **Vindskiehøyde**, **Lukkede takskjegg** og **Tykkelse**. Hver endring vises med en gang i planen og i 3D, med de samme kontrollene som verktøyet. En takvinkel på 80 grader eller mer avvises, og det samme gjelder en innstilling som ikke kan lage et tak. Skriv en verdi og trykk {{key:Enter}}, eller forlat feltet.

Hver endring er ett angretrinn. Flere endringer i samme felt etter hverandre (skriv `6/12`, deretter `7/12`, så `8/12`) slås sammen til ett trinn. Ett {{key:Ctrl}}+{{key:Z}} gjenoppretter da taket slik det var før serien. Endring av et annet felt starter et nytt trinn.

## Murhøyde, vindskie og underside

- **Murhøyde** er der takflatene møter utsiden av veggene, målt fra etasjens gulv. La den stå tom for å sette taket på toppen av veggene. Skriv en større verdi for en hevet hæl.
- **Vindskiehøyde** er brettet langs takfoten og opp langs skråkantene. Skriv `0` for ingen.
- **Lukkede takskjegg** setter en vannrett underside under hver takfot, fra veggen til baksiden av vindskien.

Hver takflate møter veggen i murhøyden. Vegger med ulike takvinkler beholder derfor én murlinje, og takfotene deres ender i ulik høyde, slik de ville vært bygget.

## Tegn en takflate

1. På etasjen der veggene takflaten står på, åpne {{ui:Build}} og velg {{ui:Roof plane}}.
2. Skriv **Takvinkel** og, hvis det ikke er toppen av veggene, **Takfothøyde**.
3. Klikk hjørnene. Den første siden du tegner, er takfoten. Flaten stiger fra den mot resten av formen.
4. Klikk det første hjørnet igjen, dobbeltklikk, eller trykk {{key:Enter}} for å avslutte. {{key:Esc}} fjerner hjørnene.

En takflate følger ikke veggene. Velg den på etasjen over (klikk inne i den) for å endre takvinkel, takfothøyde eller tykkelse. Trykk {{key:Delete}} for å fjerne den.

## Legg til en takkvist

1. Vis etasjen taket er på.
2. Åpne {{ui:Build}} og velg {{ui:Dormer}}.
3. I alternativraden velger du **Takkvisttype** (**Gavl** eller **Pulttak**), og setter **Bredde**, **Fasadevegg** (høyden på fasadeveggen fra takets topp til takkvistens takfot), **Takvinkel** og **Overheng**.
4. Klikk på en takflate der midten av takkvistens front skal være.

BimCraft bygger fasadeveggen, to kinnvegger og takkvistens tak, og kjører taket tilbake til det møter hovedtaket. En gavltakkvist har to flater som møtes i en møne. En pulttakkvist har én flate, som må være mindre bratt enn taket. Taket under takkvisten skjæres bort. Takkvisten følger taket når veggene flyttes.

Pek på takkvisten for å endre type, bredde, fasadevegg, takvinkel eller overheng i **Egenskaper**. {{key:Delete}} fjerner den og lukker taket igjen. Den må passe på én takflate, borte fra valmer, renner og mønet. Bare tak laget med {{ui:Roof}}-verktøyet kan ha takkvister, ikke takflater tegnet for hånd. Ikke bygget ennå: et vindu i takkvistens front, og takkvister på håndtegnede takflater.

## Hva som lagres

Tak er IFC-tak laget av én takplate per flate, gavlvegger, ett vindskieelement og ett undersidedekke. Taket har lengdene til sine møner, valmer, renner, takfoter og skråkanter, og sine arealer, til bruk i mengdeuttak. En takflate er et IFC-tak med én takplate.

:::tip
Angre tar tilbake enhver takendring i ett trinn, også en forhåndsinnstilling som endrer alle vegger.
:::
