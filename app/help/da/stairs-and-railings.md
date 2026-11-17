---
title: Trapper og gelændere
summary: Tegn lige, L-, U- og vindeltrapper, der dimensionerer deres stigtrin og trin ud fra højden fra gulv til gulv, med håndlister og balustre og trappehullet skåret i etagen ovenover; tegn værn langs terrasser og omkring åbninger.
keywords: spiral, rund trappe, trappe, trapper, trappeløb, stigtrin, trin, repos, vindeltrin, L-trappe, U-trappe, zigzag, håndliste, værn, gelænder, balustre, spindel, stolpe, trappehul, frihøjde, terrasse, altan
from: 16e5ace4
---

## Hvad du gør

Tilføj trapper mellem niveauer og gelændere, hvor folk har brug for dem. En trappe regner sine egne trin ud fra højden mellem niveauerne, holder dem inden for de sædvanlige boligmæssige grænser, sætter håndlister på sine åbne sider og skærer sit trappehul i etagen ovenover.

## Tegn en trappe

1. På det niveau, trappen starter fra, åbn {{ui:Build}} og vælg {{ui:Trappe}}.
2. Vælg typen — **Lige**, **L med repos**, **U med repos** eller **L med vindeltrin** — hvilken vej den **drejer**, dens **bredde** og hvor dens **håndlister** skal være.
3. Klik, hvor trappen starter: midt på forkanten af det nederste trin.
4. Flyt markøren den vej, trappen går op; trinene følger den med antallet af stigtrin og trin. Den fastgør sig til væggene og til 15°-trin; hold {{key:Shift}} nede for at holde den på rette vinkler.
5. Klik. {{key:Esc}} starter forfra.

## Tegn en spiraltrappe

1. Åbn {{ui:Build}}, vælg {{ui:Trappe}}, og vælg derefter **Spiral** som type.
2. Angiv **Drej**, hvilken vej den snor sig op (venstre er mod uret).
3. Klik på midten af dens stolpe.
4. Klik på den vej, det nederste trin peger.

Den starter 30" bred (trinnet, fra stolpen til ydersiden), med en 4½" stolpe. Stigtrinene regnes ud fra højden fra gulv til gulv, højst 9½" som standard. Trinene er 7½" dybe på gangliniet, 12" ude fra stolpen. Håndlisten løber på ydersiden.

I **Egenskaber** får en spiraltrappe **Midterstolpe**, dens diameter. Feltet **Trin** måles på gangliniet. Dens kontroller er mærket som standardværdier for spiraltrapper: 26" fri bredde, mindst 6¾" trin på gangliniet, stigtrin højst 9½" og håndlister 34"–38". De er ikke teknisk beregning; byggemyndigheden afgør det.

## Sådan regnes trinene ud

Højden mellem niveauets gulv og niveauet ovenover deles i lige store stigtrin, højst 7¾" hver, og hvert trin er 10" dybt (begge kan ændres i **Egenskaber**). Et repos tæller som ét trin; vindeltrin er tre trin, der vifter ud omkring det indvendige hjørne. Ændrer du et niveaus højde, regnes hver trappe på det igen.

:::warning
7¾" stigtrin, 10" trin, 36" bredde, 6'-8" frihøjde og 34"–38" håndlister er mærket som standardværdier efter den sædvanlige boligbyggeregulering, ikke teknisk beregning. **Egenskaber** siger, hvilke der er opfyldt; din byggemyndighed afgør, hvad der gælder.
:::

## Ændr en trappe

Vælg den (klik på den i planen eller i 3D-visningen) og ændr i **Egenskaber**: dens type og drejning, bredde, højeste stigtrin, trindybde, håndlister og deres højde, og **Skær etagen ovenover** for trappehullet. Stigtrinene og trinene, den endte med, vises nedenunder.

## Trappehullet

Når niveauet ovenover har et gulv, skærer trappen i det, hvor trinene ville have mindre end 6'-8" frihøjde. Udskæringen flytter sig med trappen og forsvinder, når trappen slettes.

## Tegn et gelænder

1. Åbn {{ui:Build}} og vælg {{ui:Gelænder}}.
2. Vælg **Værn** (36" høj) eller **Håndliste** og dens højde.
3. Klik langs kanten — en terrasse, en altan, omkring et trappehul — og dobbeltklik eller tryk {{key:Enter}} for at afslutte.

Gelændere får stolper i deres ender og hjørner og balustre med mellemrum under 4". Vælg et for at ændre dets type, højde eller hvor højt over gulvet det starter.

## Tegn et hegn

Vælg **Hegn** i det samme gelænderværktøj, angiv dets højde (1800 mm til at starte med), klik langs hegnets linje og tryk {{key:Enter}}.

- Hegnet får en stolpe i hver ende og hvert hjørne, og en stolpe højst hver 2.4 m imellem. Et panelhegn har et panel mellem stolperne; et skinnehegn har to skinner. Disse mål er almindelige valg, ikke et krav i byggereglerne: lokale regler begrænser et hegns højde.
- Det er ét element i modellen (en IfcRailing med navnet Fence) med et egenskabssæt {{ui:CadCraft_Fence}}: stil, højde, stolper, paneler, skinner, låger, længde og panelareal. Ét trin at fortryde.
- Ikke tegnet her: låger (generatoren i CivilCraft lægger dem ud), tremmer, terræn (hegnet står på niveauet) og valg af en enkelt stolpe.

## Hvad der gemmes

En trappe gemmes som en IFC-trappe af trappeløb (med deres stigtrin, trinhøjde og trinlængde), repos, vindeltrin og håndlister; trappehullet er en åbning i dækket ovenover. Gelændere er IFC-gelændere med deres længde og deres antal balustre og stolper.
