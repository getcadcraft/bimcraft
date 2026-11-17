---
title: Pošalji element u PartCraft i vrati ga
summary: Izaberi oslonac, nosač, ogradu ili komad opreme, projektuj ga kao deo u PartCraft-u sa zgradom oko njega, i prihvati novi oblik nazad u model.
keywords: partcraft, deo, pošalji, veza, element, oslonac, nosač, ograda, ograđa, oprema, projektovanje, povratak, prihvati, izmenjeno, veze delova
from: 4ce2f449
---

## Šta ćete uraditi

Projektujte jedan element zgrade kao deo: pošaljite ga u PartCraft, promenite ga tamo (sečenje, dodavanje, bušenje, promena veličine) i vratite novi oblik u model.

## Koraci

1. Izaberite jedan element u modelu: opšti element, opremu, stub, gredu, ogradu ili nameštaj.
2. Izaberite {{ui:Veze delova}} na traci alata, zatim {{ui:Pošalji u PartCraft}}. PartCraft se otvara u novom tabu sa elementom kao delom. Elementi unutar 3 m prikazuju se sivo pored njega da biste ga projektovali na mestu. Tamo se ne mogu menjati.
3. Promenite deo u PartCraft-u. U PartCraft-u izaberite {{ui:Datoteka}} › {{ui:Izvezi}} › {{ui:Sačuvaj nazad u BimCraft}}. Možete sačuvati nazad koliko god puta želite.
4. U BimCraft-u dugme {{ui:Veze delova}} prikazuje broj, a kartica navodi element kao {{ui:Izmenjeno u PartCraft-u}}, sa promenom veličine i zapremine opisanom rečima.
5. Izaberite {{ui:Prikaži}} da ga pogledate, zatim {{ui:Prihvati}} da elementu dajete novi oblik, ili {{ui:Zadrži moje}} da ostane kako je bio.

## Šta treba da vidite

- Prihvatanje je jedan korak opoziva. Element zadržava svoje mesto, GlobalId, tip, materijal i svojstva. Menja se samo njegovo telo.
- Element dobija skup svojstava {{ui:CadCraft_PartLink}} sa vezom, njenim statusom i revizijom.
- {{ui:Pošalji ponovo}} otvara isti element u PartCraft-u još jednom, preko iste veze.

## Dobro je znati

- Zidovi, podovi, krovovi, vrata, prozori, stepeništa, rampe i prostori crtaju se alatima zgrade iz obrisa i ponovo grade posle svake promene. Telo iz druge aplikacije bi bilo prepisano, pa se takvi elementi odbijaju uz razlog.
- Oblik se vraća kao mreža (IFC tesalacija), a ne kao elementi dela. Istorija dela ostaje u PartCraft-u.
- Ako se element promenio u modelu posle slanja, kartica to kaže pre prihvatanja: prihvatanje zamenjuje te promene.
- Ništa se ne otprema. Dve aplikacije su stranice istog sajta i prenose element između sebe u ovom pregledaču. Obe moraju biti otvorene u istom pregledaču.
- Element mora da se zatvori u čvrsto telo u PartCraft-u. Element čiji oblik ima velike otvorene praznine se tamo odbija, uz broj otvorenih ivica.
- Da biste prihvatili, model koji sadrži element mora biti aktivan.
