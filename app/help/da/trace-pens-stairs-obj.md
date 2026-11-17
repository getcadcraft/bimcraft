---
title: Optegn en etage, indstil penne pr. visning, skitsér en trappe og åbn en OBJ
summary: Vis en anden etage stiplet under planen og flugt den op, giv vægge, døre og vinduer deres egen pen i én visning, tegn en gangline for at få en trappe, og åbn et Wavefront OBJ-net.
keywords: referencetegning, ghost, underlæg, pen, linjetykkelse, linjetype, tilsidesættelse, trappe, skitse, repos, OBJ, net, import, Wavefront
from: 333ebbde
---

## Optegn en etage

Vælg {{ui:Trace}} i menuen {{ui:Build}}, og vælg derefter en visning på listen: en anden etages plan, en etages loftsplan eller en detalje (skåret til dens udsnit). Dens vægge, søjler og dæk vises stiplet under planen, du tegner på. Flyt den ved at klikke et basispunkt på referencen og derefter der, hvor punktet skal hen, eller skriv X, Y og en vinkel (den drejer om sit eget centrum). {{ui:Reset}} sætter den tilbage, {{ui:Hide}} fjerner den. Den er kun en reference: intet kan vælges, den udskrives ikke, og den gemmes ikke i IFC. BimCraft husker den for hver etage i denne browser.

## Penne pr. visning

Vælg {{ui:Pens}}. Angiv, hvad pennen er til: alle vægge, alle døre, alle vinduer, typen af det valgte element eller de valgte elementer. Vælg en tykkelse, en linjetype (fuld, stiplet, prikket) og en farve, og tryk derefter på {{ui:Apply}}. Ændringen gælder kun for denne etages plan. Et valg slår en type, og en type slår en hel kategori. {{ui:Clear all}} fjerner dem. De gemmes i denne browser. Sæt flueben i **Pennefarver i 3D** for at male farvepennene på modellen i 3D-visningen (tykkelse og streger hører til linjen, så kun farven vises der); fjern fluebenet for at gå tilbage. {{ui:Print}} tegner dem på PDF'en af planen: tykkelsen skaleres fra skærmen (standardpennen til vægge på 1.75 pixels er 0.5 mm), stiplinjer forbliver stiplede, og en farve udskrives i sin papirtemaværdi.

## En trappe fra en skitse

Vælg {{ui:Sketch stair}} og klik hjørnerne på ganglinien, med det nederste trin først. Én linje er en lige trappe, to linjer, der mødes i en ret vinkel, er et L, og tre linjer (op, på tværs, tilbage) er et U. Tryk på {{key:L}} for at tegne et repos: klik dets hjørner og tryk på {{key:Enter}}, og dets korte side angiver trappens bredde. Tryk på {{key:Enter}} for at placere trappen. Hvert trin beregnes ud fra længden af din linje og det antal stigtrin, højden kræver. Derefter er det en almindelig trappe: ændr den i Egenskaber, så følger trappehullet og håndlisterne med.

Sæt flueben i **Lav det til en familie** i værktøjets række (eller tryk på {{key:F}}) før {{key:Enter}} for i stedet at placere trappen som en familie (en lige, L- eller U-trappe). Den kommer ind som ét element og åbnes i familieeditoren med sin bredde, trin, samlede højde, trinene i hvert løb og mellemrummet i et U som parametre, så du kan tilføje størrelser, et plansymbol eller hotspots. Trin og stigtrinshøjde følger af dem. Den har ingen håndlister eller trappehul: dem hører til en almindelig trappe.

## Åbn en OBJ

Åbn en `.obj`-fil ligesom enhver anden fil. En OBJ har ingen enheder, så BimCraft læser meter med Y opad, som de fleste programmer skriver den. Hvert objekt eller hver gruppe bliver ét netelement på en enkelt etage, og du kan derefter se, måle, skære i snit, placere det i en model og gemme det som IFC. Linjer, kurver og overflader udelades, og statuslinjen oplyser det.

Et objekt, der er præcis et lige prisme (et lukket net med to parallelle, ens endeflader og plane sider vinkelret på dem: en dæk, en stolpe, en vægblok, en plade med huller), gemmes i IFC som IFC's egne ekstruderede massive legeme med sin kontur og dybde og ikke som en liste af trekanter. Andre programmer læser det som et rigtigt massivt legeme, det forbliver lille, og dets dybde og kontur kan redigeres senere. Statuslinjen siger, hvor mange objekter der blev gemt på den måde. Alt, der ikke er præcist et prisme (en konisk form, et net hvor ét hjørne er flyttet, et net med et hul), forbliver trekanter. En STEP-fil læses på samme måde.
