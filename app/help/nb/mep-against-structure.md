---
title: Kontroller rør og kanaler mot konstruksjonen
summary: Kjør de ferdige kollisjonssettene for rør og kanaler mot vegger, dekker, bjelker og søyler, finn strekninger som er nærmere konstruksjonen enn isolasjonen og et mellomrom, og list opp åpningene strekningene trenger gjennom vegger og dekker, som CSV og BCF.
keywords: mep, kollisjon, kollisjonskontroll, koordinering, konstruksjon, vegger, dekker, bjelker, søyler, klaring, myk kollisjon, isolasjon, mellomrom, åpning, åpninger, gjennomføring, hylse, kjerne, byggherrens arbeid, bcf, csv
from: 2d597f01
---

## Hva du skal gjøre

Sørg for at installasjonene passer til bygningen: hva som går inn i konstruksjonen, hva som går for nær den, og hvor veggene og dekkene må ha hull. Åpne {{ui:Kollisjonskontroll}} i venstre panel; seksjonen **Rør og kanaler mot konstruksjonen** ligger under den vanlige kontrollen.

## Harde kollisjoner

De to settlistene tilbyr nå også **Rør og kanaler**, **Vegger**, **Dekker og tak**, **Bjelker**, **Søyler** og **Konstruksjon** (alle fire), med hvor mange elementer hver har. Klikk {{ui:Rør og kanaler × konstruksjon}} for å velge den første og den siste og kjøre kontrollen; eller velg et hvilket som helst par selv og klikk {{ui:Kjør}}. Se [Kontroller for kollisjoner](topic:clash-check).

## Klaringer

Noen installasjoner trenger rom rundt seg: isolasjonen deres, og plass til å arbeide eller til en hylse.

1. Gi en rør- eller kanalstrekning dens **isolasjonstykkelse** i Egenskaper (ingenting tegnes for den).
2. Skriv inn **Mellomrom rundt rør og kanaler** (mm) i Kollisjonskontroll.
3. Klikk {{ui:Kontroller klaringer}}: hver del som er nærmere en vegg, et dekke, en bjelke eller en søyle enn isolasjonen pluss mellomrommet, listes opp med avstanden den har og avstanden den vil ha. Klikk en linje for å se de to.

En del som går gjennom en vegg eller et dekke er en åpning, ikke en klaring, og listes der i stedet.

## Nødvendige åpninger

Klikk {{ui:Nødvendige åpninger}}. Der en streknings midtlinje går gjennom en vegg eller et dekke, lister BimCraft opp åpningen den trenger: rund for et rundt rør eller en rund kanal, ellers rektangulær, så stor som strekningens utvendige mål pluss to ganger isolasjonen pluss to ganger mellomrommet, sentrert der den krysser. Klikk en linje for å se strekningen og veggen eller dekket.

- {{ui:Åpninger som CSV}}: én linje per åpning med strekningen, dens størrelse og isolasjon, åpningens størrelse, elementet den går gjennom og dets GlobalId, etasjen, senterets X, Y og Z, og hvor langt strekningen går gjennom.
- {{ui:Åpninger som BCF-saker}}: én sak per åpning, med et kamera som ser på den og på strekningen og elementet som er valgt, for konstruksjonsingeniørens program.

:::note
Ingenting kuttes: åpningene er en liste for de som dimensjonerer dem. Mellomrommet er ditt å skrive inn; ingen regel sier hvor stor en åpning må være. Bjelker og søyler er kollisjoner, ikke åpninger: om et rør får gå gjennom en av dem, er konstruksjonsingeniørens avgjørelse.
:::
