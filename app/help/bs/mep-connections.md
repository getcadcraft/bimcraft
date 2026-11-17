---
title: Poveži cijevi i zračne kanale s opremom
summary: Počni ili završi cijev ili kanal na priključku tako da preuzme veličinu i sistem priključka i ostane fiksirana za njega, pa provjeri veze — otvoreni priključci, neslaganja veličine i sistema, trase bez izvora.
keywords: mep, povezivanje, veza, veze, priključak, priključci, otvoren priključak, neslaganje veličine, neslaganje sistema, izvor, provjera veza, fiksirano, prati, pomjeri opremu, ifcrelconnectsports, koordinacija
from: 29144fb0
---

## Šta ćeš uraditi

Spoji trase s opremom tako da model bude jedan povezan sistem: izlaz pumpe s cijevi koja iz nje izlazi, grlo difuzora s njegovim granskim kanalom. Zatim neka BimCraft navede šta nije spojeno.

## Crtaj iz priključka

1. Izaberi {{ui:Pipe}} ili {{ui:Duct}}.
2. Pomjeri pokazivač na priključak opreme (male kružnice; otvoreni priključak je nacrtan bojom upozorenja). Pokazivač se priljubi uz njega i kaže **na priključku**.
3. Klikni: trasa počinje na visini priključka i **preuzima njegovu veličinu i sistem** (cijev također preuzima uobičajeni materijal sistema). Statusna linija kaže šta je preuzela.
4. Nastavi crtati kao obično. Završetak trase na drugom priključku fiksira i taj kraj.

Kraj trase na priključku je **fiksiran** za njega: pomjeri ili okreni opremu (u Svojstvima) i kraj trase ide s njom; uredi trasu i taj kraj ostaje na priključku. Ostali uglovi trase ostaju gdje jesu, pa nakon velikog pomjeranja prvi dio može odstupiti od priključka pod uglom: pomjeri i sljedeći ugao.

## Provjeri veze

Otvori {{ui:Build}} i klikni {{ui:Check connections}}. Spisak ispod trake pokazuje:

| Red | Šta znači |
|---|---|
| Priključak nije povezan | Oprema ima vezu na koju ništa nije nacrtano |
| Ništa na njegovom kraju | Trasa završava u praznom prostoru |
| Spojeni priključci različitih veličina | Trasa jedne veličine dolazi do priključka ili trase druge veličine bez redukcije (nazivna veličina cijevi, oblik i stranice kanala) |
| Spojeni priključci različitih sistema | Na primjer povratni kanal na dovodnom difuzoru |
| Cijev spojena na kanal | Dvije veze različite vrste se sastaju |
| Nijedna oprema u njenoj mreži je ne snabdijeva | Ništa za šta je trasa spojena, koliko god daleko, nema izlaz. Odvodi, kišna kanalizacija i ventilacioni vodovi se ovo ne pitaju: njihova voda dolazi iz armatura |
| Fiksirano za priključak opreme koja više nije u modelu | Oprema je obrisana; ponovo nacrtaj kraj ili obriši trasu |

Greške su prve. Klikni red da izabereš ono što imenuje. {{ui:Close}} sakriva spisak. Provjera čita model onakav kakav je nacrtan: provjerava veze i veličine, nikad protoke, pritiske ili balansiranje.
