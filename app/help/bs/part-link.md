---
title: Pošalji element u PartCraft i vrati ga
summary: Odaberi oslonac, nosač, ogradu ili komad opreme, dizajniraj ga kao dio u PartCraftu uz zgradu oko njega, te prihvati novi oblik nazad u model.
keywords: partcraft, dio, pošalji, veza, element, oslonac, nosač, plot, ograda, oprema, dizajn, povratni put, prihvati, promijenjeno, veze dijelova
from: 4ce2f449
---

## Šta ćeš uraditi

Dizajniraj jedan element zgrade kao dio: pošalji ga u PartCraft, promijeni ga tamo (izreži, dodaj, izbuši, promijeni veličinu) i vrati novi oblik u model.

## Koraci

1. Odaberi jedan element u modelu: generički element, opremu, stub, gredu, ogradu ili namještaj.
2. Izaberi {{ui:Veze dijelova}} na alatnoj traci, pa {{ui:Pošalji u PartCraft}}. PartCraft se otvara u novoj kartici sa elementom kao dijelom. Elementi unutar 3 m nacrtani su sivo pored njega da ga možeš dizajnirati na mjestu. Tamo se ne mogu mijenjati.
3. Promijeni dio u PartCraftu. U PartCraftu izaberi {{ui:Datoteka}} › {{ui:Izvezi}} › {{ui:Spasi nazad u BimCraft}}. Možeš spašavati nazad koliko puta želiš.
4. Nazad u BimCraftu dugme {{ui:Veze dijelova}} pokazuje broj, a kartica navodi element kao {{ui:Promijenjeno u PartCraftu}}, sa promjenom veličine i zapremine opisanom riječima.
5. Izaberi {{ui:Prikaži}} da ga pogledaš, pa {{ui:Prihvati}} da elementu daš novi oblik, ili {{ui:Zadrži moje}} da ostane kakav je bio.

## Šta treba da vidiš

- Prihvatanje je jedan korak poništavanja. Element zadržava svoje mjesto, GlobalId, tip, materijal i svojstva. Mijenja se samo njegovo tijelo.
- Element dobija skup svojstava {{ui:CadCraft_PartLink}} sa vezom, njenim statusom i revizijom.
- {{ui:Pošalji ponovo}} otvara isti element u PartCraftu još jednom, na istoj vezi.

## Dobro je znati

- Zidovi, podovi, krovovi, vrata, prozori, stepeništa, rampe i prostori crtaju se alatima zgrade iz obrisa i ponovo grade nakon svake promjene. Tijelo iz druge aplikacije bi bilo prepisano, pa se takvi elementi odbijaju uz razlog.
- Oblik se vraća kao mreža (IFC tesselacija), a ne kao značajke dijela. Historija dijela ostaje u PartCraftu.
- Ako se element promijenio u modelu nakon što si ga poslao, kartica to kaže prije prihvatanja: prihvatanje zamjenjuje te promjene.
- Ništa se ne učitava. Dvije aplikacije su stranice jednog sajta i prenose element između sebe u ovom pregledaču. Obje moraju biti otvorene u istom pregledaču.
- Element se mora zatvoriti u čvrsto tijelo u PartCraftu. Element čiji oblik ima velike otvorene praznine se tamo odbija, uz broj otvorenih ivica.
- Da prihvatiš, učini model koji sadrži element aktivnim.
