---
title: Povežite cevi i kanale sa opremom
summary: Započnite ili završite cev ili kanal na priključku tako da preuzme veličinu i sistem priključka i ostane vezan za njega, zatim proverite veze: otvorene priključke, neslaganje veličine i sistema, trase bez izvora.
keywords: mep, povezivanje, veza, veze, priključak, priključci, otvoren priključak, neslaganje veličine, neslaganje sistema, izvor, proveri veze, vezan, prati, pomeri opremu, ifcrelconnectsports, koordinacija
from: 29144fb0
---

## Šta ćete uraditi

Spojite trase sa opremom tako da model bude jedan povezan sistem: izlaz pumpe sa cevi koja iz nje izlazi, grlo difuzora sa granom kanala. Zatim neka BimCraft izlista šta nije povezano.

## Crtanje sa priključka

1. Izaberite {{ui:Cev}} ili {{ui:Kanal}}.
2. Pomerite pokazivač na priključak opreme (male kružnice; otvoreni priključak je nacrtan bojom upozorenja). Pokazivač se privuče ka njemu i kaže **na priključku**.
3. Kliknite: trasa počinje na visini priključka i **preuzima njegovu veličinu i sistem** (cev takođe preuzima uobičajeni materijal sistema). Statusna linija kaže šta je preuzela.
4. Nastavite crtanje kao obično. Završetak trase na drugom priključku učvršćuje i taj kraj.

Kraj trase na priključku je **vezan** za njega: pomerite ili okrenite opremu (u Svojstvima) i kraj trase ide s njom; izmenite trasu i taj kraj ostaje na priključku. Ostali uglovi trase ostaju gde jesu, pa posle velikog pomeranja prvi krak može da se odvoji od priključka pod uglom: pomerite i sledeći ugao.

## Proverite veze

Otvorite {{ui:Verzija}} i kliknite {{ui:Proveri veze}}. Spisak ispod trake prikazuje:

| Red | Šta znači |
|---|---|
| Priključak nije povezan | Komad opreme ima vezu za koju ništa nije nacrtano |
| Ništa na svom kraju | Trasa se završava u vazduhu |
| Spojeni priključci različitih veličina | Trasa jedne veličine dodiruje priključak ili trasu druge bez redukcije (nominalna veličina cevi, oblik i stranice kanala) |
| Spojeni priključci različitih sistema | Na primer povratni kanal na difuzoru za napajanje |
| Cev spojena sa kanalom | Dve veze različitih vrsta se spajaju |
| Nijedna oprema u njenoj mreži je ne snabdeva | Ništa za šta je trasa spojena, ma koliko daleko, nema izlaz. Odvodi, kišna i ventilaciona kanalizacija se ovo ne pitaju: njihova voda dolazi od armatura |
| Vezano za priključak opreme koja više nije u modelu | Oprema je obrisana; ponovo nacrtajte kraj ili obrišite trasu |

Greške su prve. Kliknite red da izaberete ono što imenuje. {{ui:Zatvori}} sakriva spisak. Provera čita model onakav kakav je nacrtan: proverava veze i veličine, nikad protoke, pritiske ili balansiranje.
