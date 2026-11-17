---
title: Tage: en hældning for hver væg, gavle, pulttage og tagflader
summary: Sæt hver væg under et tag til skråt, gavlende eller ingen, brug forvalgene valmtag, gavl og pulttag, løft taget med remhøjden, tilføj vindskede og soffit, og tegn enkelte tagflader der, hvor det automatiske tag ikke passer.
keywords: ændr et tag, rediger et tag, valgt tag, tagegenskaber, fortryd tag, tag, hældning, pr. væg, gavl, gavlende, pulttag, anlæg, valmtag, tagdal, kip, remhøjde, fodpunkt, vindskede, soffit, tagfod, skråkant, udhæng, tagflade, verandatag, kvist, gavlkvist, pultkvist
from: 096084a7
---

## Hvad du vil gøre

Form taget ud fra væggene under det. Hver væg får sin egen indstilling, så ét tag kan være valmet foran, have gavle i enderne og stoppe fladt mod en højere væg bagtil. Til en veranda eller en flade, det automatiske tag ikke kan lave, tegner du en tagflade ved dens hjørner.

## Sæt et tag på

1. På etagen, hvis vægge bærer taget, klik på {{ui:Roof}}.
2. Skriv **Taghældning** (`6/12`, eller grader som `30`) og **Udhæng**.
3. Vælg et forvalg: **Valmtag**, **Gavle på de korte sider**, **Gavle på de lange sider** eller **Pulttag** (siden tættest på markøren er den lave tagfod; de andre sider er gavlender).
4. Lad **Vindskede og soffit** være markeret for lukkede tagudhæng med en vindskedeplade, eller fjern markeringen for en bar tagkant.
5. Peg inde i bygningen: tagfoden, kippen, valmene og dalene vises i planen. Klik.

Enhver kontur virker: L-, T-, U- og plusformer, skrå hjørner og udskæringer. Valme, kipper og tagdale findes, hvor tagfladerne mødes.

## Én væg ad gangen

Vælg taget (på etagen over væggene, klik inde i dets kontur), og find **Hver væg** under **Egenskaber**. Peger du på en række, markeres den væg i planen.

- **Skråt**: væggen har en skrånende tagflade over sig. Skriv dens egen hældning ved siden af, fx `12/12` for stejle ender på et `6/12`-tag.
- **Gavlende**: taget ender i en lodret gavl over væggen, væggen fyldes op til taget, og taget går ud over den med **Gavludhæng**.
- **Ingen (slutter lige)**: taget stopper ved væggen uden udhæng og uden gavlvæg, fx til et tag mod en højere væg.

**Ender**-listen øverst sætter alle vægge på én gang; **Sæt pr. væg** vises, når væggene ikke længere passer til et forvalg.

## Ændr et tag, du allerede har sat på

Vælg taget, og **Egenskaber** viser de samme indstillinger, som værktøjet Tag har: **Taghældning**, **Udhæng**, **Gavludhæng**, **Remhøjde**, **Vindskedehøjde**, **Lukkede tagudhæng** og **Tykkelse**. Hver ændring vises med det samme i planen og i 3D, med de samme kontroller som værktøjet (en hældning på 80 grader eller mere afvises, og det samme gælder en indstilling, der ikke kan give et tag). Skriv en værdi og tryk {{key:Enter}}, eller forlad feltet.

Hver ændring er ét fortrydelsestrin. Flere ændringer i det samme felt efter hinanden (skriv `6/12`, så `7/12`, så `8/12`) samles i ét trin, så ét {{key:Ctrl}}+{{key:Z}} gendanner taget til, hvad det var før serien; ændrer du et andet felt, starter et nyt trin.

## Remhøjde, vindskede og soffit

- **Remhøjde** er der, hvor tagfladerne møder ydersiden af væggene, målt fra etagens gulv. Lad den stå tom for at sætte taget oven på væggene; skriv en større værdi for et hævet fodpunkt.
- **Vindskedehøjde** er brættet langs tagfoden og op ad skråkanterne. Skriv `0` for ingen.
- **Lukkede tagudhæng** sætter en vandret soffit under hver tagfod, fra væggen til bagsiden af vindskeden.

Hver flade møder sin væg i remhøjden, så vægge med forskellig hældning har én remlinje, og deres tagfødder ender i forskellige højder, sådan som de ville blive tømret.

## Tegn en tagflade

1. På etagen, som væggene, tagfladen står på, åbn {{ui:Build}} og vælg {{ui:Roof plane}}.
2. Skriv **Taghældning** og, hvis det ikke er toppen af væggene, **Tagfodshøjde**.
3. Klik på hjørnerne. Den første side, du tegner, er tagfoden; fladen stiger fra den mod resten af formen.
4. Klik igen på det første hjørne, dobbeltklik, eller tryk {{key:Enter}} for at afslutte. {{key:Esc}} fjerner hjørnerne.

En tagflade følger ikke væggene. Vælg den på etagen over (klik inde i den) for at ændre dens hældning, tagfodshøjde eller tykkelse, eller tryk {{key:Delete}} for at fjerne den.

## Tilføj en kvist

1. Vis etagen, taget ligger på.
2. Åbn {{ui:Build}} og vælg {{ui:Dormer}}.
3. I valgrækken vælger du **Kvisttype** (**Gavl** eller **Pult**) og sætter **Bredde**, **Frontvæg** (højden på frontvæggen fra tagets top til kvistens tagfod), **Taghældning** og **Udhæng**.
4. Klik på en tagflade, hvor midten af kvistens front skal være.

BimCraft bygger frontvæggen, to kindervægge og kvistens tag og kører det tilbage, indtil det møder taget. En gavlkvist har to flader, der mødes i en kip. En pultkvist har én flade, som skal være fladere end taget. Taget under kvisten skæres væk. Kvisten følger taget, når væggene flyttes.

Vælg den for at ændre dens type, bredde, frontvæg, hældning eller udhæng under **Egenskaber**. {{key:Delete}} fjerner den og lukker taget igen. Den skal ligge på én tagflade, væk fra valmene, dalene og kippen, og kun tage lavet med værktøjet {{ui:Roof}} kan have kviste, ikke tagflader tegnet i hånden. Ikke lavet endnu: et vindue i kvistens front og kviste på tagflader tegnet i hånden.

## Hvad der gemmes

Tage er IFC-tage, lavet af én tagplade pr. flade, gavlvægge, ét vindskedeelement og ét soffitdække. Taget bærer sine længder for kip, val, tagdal, tagfod og skråkant samt sine arealer til mængdeudtræk. En tagflade er et IFC-tag med én plade.

:::tip
Fortryd tager enhver ændring af et tag i ét trin, også et forvalg, der ændrer hver væg.
:::
