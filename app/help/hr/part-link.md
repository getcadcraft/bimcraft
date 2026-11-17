---
title: Pošaljite element u PartCraft i vratite ga
summary: Odaberite oslonac, konzolu, ogradu ili komad opreme, oblikujte ga kao dio u PartCraftu uz zgradu oko njega te prihvatite novi oblik natrag u model.
keywords: partcraft, dio, slanje, veza, element, oslonac, konzola, ograda, oprema, oblikovanje, povratni prijenos, prihvati, promijenjeno, veze dijelova
from: 4ce2f449
---

## Što ćete učiniti

Oblikujte jedan element zgrade kao dio: pošaljite ga u PartCraft, promijenite ga tamo (izrežite, dodajte, izbušite, promijenite veličinu) i vratite novi oblik u model.

## Koraci

1. Odaberite jedan element u modelu: generički element, opremu, stup, gredu, ogradu ili namještaj.
2. Na alatnoj traci odaberite {{ui:Veze dijelova}}, zatim {{ui:Pošalji u PartCraft}}. PartCraft se otvara u novoj kartici s elementom kao dijelom. Elementi unutar 3 m prikazani su sivo uz njega da ga možete oblikovati na mjestu. Tamo se ne mogu mijenjati.
3. Promijenite dio u PartCraftu. U PartCraftu odaberite {{ui:Datoteka}} › {{ui:Izvezi}} › {{ui:Spremi natrag u BimCraft}}. Spremanje natrag možete raditi koliko god želite.
4. Natrag u programu BimCraft gumb {{ui:Veze dijelova}} pokazuje broj, a kartica navodi element kao {{ui:Promijenjeno u PartCraftu}} s promjenom veličine i volumena opisanom riječima.
5. Odaberite {{ui:Prikaži}} da ga pogledate, zatim {{ui:Prihvati}} da elementu dodijelite novi oblik ili {{ui:Zadrži moje}} da ostane kakav je bio.

## Što biste trebali vidjeti

- Prihvaćanje je jedan korak poništavanja. Element zadržava svoje mjesto, GlobalId, tip, materijal i svojstva. Zamjenjuje se samo njegovo tijelo.
- Element dobiva skup svojstava {{ui:CadCraft_PartLink}} s vezom, njezinim statusom i revizijom.
- {{ui:Pošalji ponovno}} otvara isti element u PartCraftu još jednom, na istoj vezi.

## Dobro je znati

- Zidovi, podovi, krovovi, vrata, prozori, stubišta, rampe i prostori crtaju se alatima zgrade iz obrisa i ponovno se grade nakon svake promjene. Tijelo iz druge aplikacije bilo bi prepisano, pa se takvi elementi odbijaju uz obrazloženje.
- Oblik se vraća kao mreža (IFC tesselacija), a ne kao značajke dijela. Povijest dijela ostaje u PartCraftu.
- Ako se element promijenio u modelu nakon što ste ga poslali, kartica to kaže prije prihvaćanja: prihvaćanje zamjenjuje te promjene.
- Ništa se ne učitava na poslužitelj. Dvije aplikacije su stranice jedne web-stranice i prenose element među sobom u ovom pregledniku. Obje moraju biti otvorene u istom pregledniku.
- Element se u PartCraftu mora zatvoriti u puno tijelo. Element čiji oblik ima velike otvorene praznine tamo se odbija, uz broj otvorenih bridova.
- Za prihvaćanje model koji sadrži element mora biti aktivan.
