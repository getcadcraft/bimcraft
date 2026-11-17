---
title: Otvaranje datoteka projekta .pln i .pla
summary: Što BimCraft danas radi s datotekama .pln, .pla, .tpl i .bpn te kako izvesti IFC i DWG iz njih da se model i crteži ovdje otvore.
keywords: pln, pla, tpl, bpn, datoteka projekta, arhiva, predložak, sigurnosna kopija, izvoz ifc, izvoz dwg, prijevodnik, zone, layouti
from: 41fb921d
---

## Što ćete raditi

Unijeti projekt spremljen kao `.pln` (projekt), `.pla` (arhiva s njezinom knjižnicom), `.tpl` (predložak) ili `.bpn` (sigurnosna kopija) u BimCraft. To su vlastite datoteke programa Archicad.

## Što se danas otvara

- **Same datoteke projekta se još ne otvaraju.** Njihov format nije objavljen, a BimCraft ga još ne čita. Kad otvorite jednu, BimCraft to kaže i upućuje na ovu temu.
- **BimCraft provjerava prvih nekoliko bajtova datoteke.** Projekti Archicada od verzije 17 počinju istim kratkim potpisom, pa BimCraft može sa sigurnošću reći je li datoteka Archicad projekt. Datoteka s nazivom Archicada koja tako ne počinje vjerojatno je preimenovana, oštećena ili dolazi iz starije verzije. Potpis ne razlikuje projekt, arhivu i predložak.
- **Izvoz IFC-a se otvara u cijelosti**: model u 3D-u, etaže, zone kao prostori, podaci o elementima, skupovi svojstava i klasifikacije, sa svim alatima BimCrafta.
- **Izvoz DWG-a se otvara** u 2D pogledu, sa svojim slojevima i layoutima, te u {{ui:3D}}. Za uređivanje koristite {{ui:Uredi u CadCraftu}}.

Ili unesite cijeli projekt kao jedan zip, sa svojim pogledima, layoutima i grupama svojstava: vidi [Otvaranje paketa projekta](topic:open-project-bundle).

## Izvoz IFC-a (model)

1. Otvorite projekt u Archicadu.
2. Odaberite **File > Save As** i odaberite **IFC** kao vrstu datoteke.
3. Odaberite IFC prijevodnik (Archicadov naziv za skup postavki izvoza IFC-a). Za BimCraft odgovara **IFC4 Reference View** ili **IFC2X3 Coordination View 2.0**. IFC4X3 se također otvara.
4. Odaberite što izvoziti: cijeli projekt ili samo elemente vidljive na etažama koje gledate.
5. Spremite, zatim kliknite {{ui:Odaberi datoteku}} u BimCraftu i odaberite datoteku `.ifc`.

Provjerite ove postavke u postavkama prijevodnika prije izvoza:

- **Zone**: izvezite ih da sobe dođu kao prostori. Kliknite {{ui:Prostori}} u BimCraftu da ih vidite.
- **Svojstva i klasifikacije**: izvezite ih da se prikazuju u {{ui:Svojstva}} i da se mogu koristiti u {{ui:Traži}}, {{ui:Boja}} i {{ui:Zbrojevi količina}}.
- **Obična `.ifc`**, a ne `.ifczip` ili `.ifcxml`. BimCraft otvara samo obični `.ifc`.

## Izvoz DWG-a (crteži)

1. Otvorite tlocrt, presjek ili layout koji želite.
2. Odaberite **File > Save As** i odaberite **DWG** kao vrstu datoteke.
3. Odaberite DXF-DWG prijevodnik i spremite.
4. Za cijeli skup listova spremite layoute iz Layout Booka ili ih objavite kao DWG.
5. Otvorite `.dwg` u BimCraftu. Crteži povezani izvozom otvaraju se s njim kad su u istoj mapi; vidi [Povezani crteži i slike](topic:dwg-linked-files).

## Rješavanje problema

- **„… je Archicad projekt: njegovi prvi bajtovi to pokazuju.“** Izvezite IFC ili DWG kao gore i otvorite tu datoteku.
- **„… ima naziv kao Archicad datoteka, ali ne počinje kao ona.“** Provjerite odakle datoteka dolazi: možda je riječ o drugoj vrsti datoteke s novim nazivom (pokušajte je otvoriti pod njezinom pravom ekstenzijom), o kopiji koja nije dovršena ili o projektu iz verzije prije 17. Otvorite je u Archicadu ako možete, zatim izvezite IFC ili DWG.
- **Model se otvara bez soba.** Zone nisu izvezene. Uključite ih u IFC prijevodniku i izvezite ponovo.
- **Otvori nisu izrezani.** BimCraft to kaže pod **Još nije nacrtano** u panelu {{ui:Datoteka}}. Izvezite ponovo; ako ostane, otvorite model u programu koji ga je napravio i provjerite otvore tamo.
- **Tekst na DWG-u izgleda drukčije.** Izvoz može zadržati fontove koje BimCraft nema; BimCraft crta tekst običnim sans-serif fontom.

Vidi i [Prikaz datoteke projekta u 3D-u kroz IFC](topic:rvt-to-ifc) i [Što BimCraft čita iz svakog formata](topic:file-formats).
