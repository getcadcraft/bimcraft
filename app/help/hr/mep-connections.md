---
title: Spajanje cijevi i kanala na opremu
summary: Započnite ili završite cijev ili kanal na priključku da preuzme njegovu veličinu i sustav te ostane vezan uz njega, zatim provjerite veze: otvorene priključke, neslaganja veličine i sustava te dionice bez izvora.
keywords: mep, spajanje, veze, priključak, priključci, otvoreni priključak, neslaganje veličine, neslaganje sustava, izvor, provjera veza, fiksirano, slijedi, premještanje opreme, ifcrelconnectsports, koordinacija
from: 29144fb0
---

## Što ćete učiniti

Spojite dionice s opremom tako da model bude jedan povezani sustav: izlaz pumpe s cijevi koja iz nje izlazi, grlo difuzora s njegovim granom kanala. Zatim neka BimCraft popiše što nije povezano.

## Crtanje iz priključka

1. Odaberite {{ui:Cijev}} ili {{ui:Zračni kanal}}.
2. Pomaknite pokazivač na priključak neke opreme (male kružnice; otvoreni priključak nacrtan je bojom upozorenja). Pokazivač se privuče na njega i piše **na priključku**.
3. Kliknite: dionica počinje na visini priključka i **preuzima njegovu veličinu i sustav** (cijev također preuzima uobičajeni materijal sustava). Redak statusa kaže što je preuzela.
4. Crtajte dalje kao i obično. Završetak dionice na drugom priključku veže i taj kraj.

Kraj dionice na priključku **fiksiran** je uz njega: pomaknete ili zakrenete opremu (u Svojstvima) i kraj dionice ide s njom; uredite dionicu i taj kraj ostaje na priključku. Ostali kutovi dionice ostaju gdje jesu, pa nakon velikog pomaka prvi krak može otpasti s priključka pod kutom: pomaknite i sljedeći kut.

## Provjera veza

Otvorite {{ui:Izgradnja}} i kliknite {{ui:Provjeri veze}}. Popis ispod trake prikazuje:

| Redak | Što znači |
|---|---|
| Priključak nije spojen | Oprema ima vezu na koju ništa nije nacrtano |
| Ništa na njegovom kraju | Dionica završava u zraku |
| Spojeni priključci različitih veličina | Dionica jedne veličine susreće priključak ili dionicu druge bez reducira (nazivna veličina cijevi, oblik i stranice kanala) |
| Spojeni priključci različitih sustava | Na primjer povratni kanal na difuzoru za dovod |
| Cijev spojena na kanal | Dvije veze različitih vrsta se susreću |
| Nijedna oprema u njezinoj mreži ju ne opskrbljuje | Ništa na što je dionica spojena, koliko god daleko, nema izlaz. Odvodi, oborinska odvodnja i odzračni vodovi se ne provjeravaju: njihova voda dolazi s armatura |
| Vezana uz priključak opreme koja više nije u modelu | Oprema je obrisana; ponovo nacrtajte kraj ili obrišite dionicu |

Greške dolaze prve. Kliknite redak da odaberete ono što imenuje. {{ui:Zatvori}} skriva popis. Provjera čita model kako je nacrtan: provjerava veze i veličine, nikad protoke, tlakove ili uravnoteženje.
