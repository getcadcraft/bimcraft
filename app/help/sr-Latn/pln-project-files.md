---
title: Otvaranje .pln i .pla datoteka projekta
summary: Šta BimCraft danas radi sa datotekama .pln, .pla, .tpl i .bpn i kako iz njih izvesti IFC i DWG da se model i crteži ovde otvore.
keywords: pln, pla, tpl, bpn, datoteka projekta, arhiva, šablon, rezervna kopija, IFC izvoz, DWG izvoz, prevodilac, zone, rasporedi
from: 41fb921d
---

## Šta ćete uraditi

Dobijte projekat sačuvan kao `.pln` (projekat), `.pla` (arhiva sa svojom bibliotekom), `.tpl` (šablon) ili `.bpn` (rezervna kopija) u BimCraft. To su sopstvene datoteke programa Archicad.

## Šta se danas otvara

- **Same datoteke projekta se još ne otvaraju.** Njihov format nije objavljen, a BimCraft ga još ne čita. Kada otvorite jednu, BimCraft to kaže i upućuje na ovu stranicu.
- **BimCraft proverava prve bajtove datoteke.** Archicad projekti od verzije 17 počinju istim kratkim potpisom, pa BimCraft može sa sigurnošću da kaže da je datoteka Archicad projekat. Datoteka sa Archicad imenom koja tako ne počinje verovatno je preimenovana, oštećena ili potiče iz starije verzije. Potpis ne razlikuje projekat, arhivu i šablon.
- **IFC izvoz se potpuno otvara**: model u 3D, spratovi, zone kao prostori, podaci o elementima, skupovi svojstava i klasifikacije, sa svim alatima BimCraft-a.
- **DWG izvoz se otvara** u 2D prikazu, sa svojim slojevima i rasporedima, i u {{ui:3D}}. Za izmenu koristite {{ui:Uredi u CadCraft}}.

Ili uvezite ceo projekat kao jedan zip, sa njegovim pogledima, rasporedima i grupama svojstava: pogledajte [Otvaranje paketa projekta](topic:open-project-bundle).

## Izvoz IFC-a (model)

1. Otvorite projekat u Archicad-u.
2. Izaberite **Datoteka > Sačuvaj kao** i za vrstu datoteke izaberite **IFC**.
3. Izaberite IFC prevodilac (Archicad-ov naziv za skup podešavanja IFC izvoza). Za **IFC4 Reference View** ili **IFC2X3 Coordination View 2.0** odgovara BimCraft-u. IFC4X3 se takođe otvara.
4. Izaberite šta izvozite: ceo projekat ili samo elemente vidljive na spratovima koje gledate.
5. Sačuvajte, zatim kliknite {{ui:Izaberi datoteku}} u BimCraft-u i izaberite `.ifc` datoteku.

Pre izvoza proverite ova podešavanja u prevodiocu:

- **Zone**: izvezite ih, da sobe stignu kao prostori. Kliknite {{ui:Prostori}} u BimCraft-u da ih vidite.
- **Svojstva i klasifikacije**: izvezite ih, da se prikažu u {{ui:Svojstva}} i mogu da se koriste u {{ui:Pronađi}}, {{ui:Boja}} i {{ui:Ukupne količine}}.
- **Običan `.ifc`**, a ne `.ifczip` ili `.ifcxml`. BimCraft otvara samo običan `.ifc`.

## Izvoz DWG-a (crteži)

1. Otvorite plan, presek ili raspored koji želite.
2. Izaberite **Datoteka > Sačuvaj kao** i za vrstu datoteke izaberite **DWG**.
3. Izaberite DXF-DWG prevodilac i sačuvajte.
4. Za ceo skup listova sačuvajte rasporede iz Layout Book-a ili ih objavite kao DWG.
5. Otvorite `.dwg` u BimCraft-u. Crteži povezani izvozom otvaraju se uz njega kad su u istoj fascikli; pogledajte [Povezani crteži i slike](topic:dwg-linked-files).

## Rešavanje problema

- **„… je Archicad projekat: prvi bajtovi to potvrđuju.“** Izvezite IFC ili DWG kao gore i otvorite tu datoteku.
- **„… ima ime Archicad datoteke, ali ne počinje kao ona.“** Proverite odakle je datoteka: može biti druga vrsta datoteke sa novim imenom (pokušajte da je otvorite pod njenom pravom ekstenzijom), nedovršena kopija ili projekat iz verzije pre 17. Ako možete, otvorite ga u Archicad-u, pa izvezite IFC ili DWG.
- **Model se otvara bez soba.** Zone nisu izvezene. Uključite ih u IFC prevodiocu i izvezite ponovo.
- **Otvorenja nisu isečena.** BimCraft to kaže pod **Još nije nacrtano** u panelu {{ui:Datoteka}}. Izvezite ponovo; ako ostane, otvorite model u programu koji ga je napravio i proverite otvorenja tamo.
- **Tekst na DWG-u izgleda drugačije.** Izvoz može zadržati fontove koje BimCraft nema; BimCraft crta tekst običnim fontom bez serifa.

Pogledajte i [Dobijanje datoteke projekta u 3D preko IFC-a](topic:rvt-to-ifc) i [Šta BimCraft čita iz svakog formata](topic:file-formats).
