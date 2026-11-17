---
title: Kontrollér rør og kanaler mod konstruktionen
summary: Kør de færdige kollisionssæt for rør og kanaler mod vægge, dæk, bjælker og søjler, find føringer, der ligger tættere på konstruktionen end deres isolering og et mellemrum, og list de åbninger, føringerne kræver gennem vægge og dæk, som CSV og BCF.
keywords: mep, kollision, kollisionskontrol, koordinering, konstruktion, vægge, dæk, bjælker, søjler, frihøjde, blød kollision, isolering, mellemrum, åbning, åbninger, gennemføring, kappe, kerne, byggearbejde, bcf, csv
from: 2d597f01
---

## Hvad du gør

Sørg for, at installationerne passer til bygningen: hvad der løber ind i konstruktionen, hvad der går for tæt på den, og hvor vægge og dæk skal have huller. Åbn {{ui:Kollisionskontrol}} i venstre panel; afsnittet **Rør og kanaler mod konstruktionen** ligger under den sædvanlige kontrol.

## Hårde kollisioner

De to sætlister tilbyder nu også **Rør og kanaler**, **Vægge**, **Dæk og tage**, **Bjælker**, **Søjler** og **Konstruktion** (alle fire), med hvor mange elementer hver indeholder. Klik på {{ui:Rør og kanaler × konstruktion}} for at vælge den første og den sidste og køre kontrollen; eller vælg selv et vilkårligt par og klik på {{ui:Kør}}. Se [Kontrollér for kollisioner](topic:clash-check).

## Frihøjder

Nogle installationer har brug for plads omkring sig: deres isolering og plads til arbejde eller til en kappe.

1. Angiv en rørs eller kanals **Isolering**-tykkelse under Egenskaber (der tegnes intet for den).
2. Skriv **Mellemrum omkring rør og kanaler** (mm) i Kollisionskontrol.
3. Klik på {{ui:Kontrollér frihøjder}}: hver del, der er tættere på en væg, et dæk, en bjælke eller en søjle end sin isolering plus mellemrummet, står på listen med den afstand, den har, og den afstand, den skal have. Klik på en linje for at se de to.

En del, der går igennem en væg eller et dæk, er en åbning, ikke en frihøjde, og står i stedet på listen over åbninger.

## Nødvendige åbninger

Klik på {{ui:Nødvendige åbninger}}. Hvor en førings midterlinje går igennem en væg eller et dæk, lister BimCraft den åbning, den kræver: rund for et rør eller en kanal med rund form, ellers rektangulær, så stor som føringens ydre mål plus to gange dens isolering plus to gange mellemrummet, centreret, hvor føringen krydser. Klik på en linje for at se føringen og væggen eller dækket.

- {{ui:Åbninger som CSV}}: én linje pr. åbning med føringen, dens størrelse og isolering, åbningens størrelse, elementet den går igennem og dets GlobalId, niveauet, midtpunktets X, Y og Z og hvor langt føringen går igennem.
- {{ui:Åbninger som BCF-emner}}: ét emne pr. åbning med et kamera, der ser på den, og føringen og elementet valgt, til den konstruerende ingeniørs program.

:::note
Intet skæres: åbningerne er en liste til dem, der dimensionerer dem. Mellemrummet skriver du selv; ingen norm siger, hvor stor en åbning skal være. Bjælker og søjler er kollisioner, ikke åbninger: om et rør må gå igennem en af dem, er den konstruerende ingeniørs afgørelse.
:::
