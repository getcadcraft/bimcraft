---
title: Otvaranje .pln i .pla datoteka projekta
summary: Šta BimCraft danas radi s datotekama .pln, .pla, .tpl i .bpn i kako iz njih izvesti IFC i DWG da se model i crteži ovdje otvore.
keywords: pln, pla, tpl, bpn, datoteka projekta, arhiva, šablon, sigurnosna kopija, izvoz IFC, izvoz DWG, prevodilac, zone, rasporedi
from: 41fb921d
---

## Šta ćete uraditi

Unijeti projekat sačuvan kao `.pln` (projekat), `.pla` (arhiva s bibliotekom), `.tpl` (šablon) ili `.bpn` (sigurnosna kopija) u BimCraft. Ovo su vlastite datoteke programa Archicad.

## Šta se danas otvara

- **Same datoteke projekta se još ne otvaraju.** Njihov format nije objavljen, a BimCraft ga još ne čita. Kad otvorite jednu, BimCraft to kaže i upućuje vas ovdje.
- **BimCraft provjerava prve bajtove datoteke.** Archicad projekti od verzije 17 počinju istim kratkim potpisom, pa BimCraft može sa sigurnošću reći da je datoteka Archicad projekat. Datoteka s Archicad nazivom koja tako ne počinje vjerovatno je preimenovana, oštećena ili potiče iz starije verzije. Potpis ne razlikuje projekat, arhivu i šablon.
- **IFC izvoz se otvara u cijelosti**: model u 3D, spratovi, zone kao prostorije, podaci o elementima, skupovi svojstava i klasifikacije, sa svim alatima BimCraft-a.
- **DWG izvoz se otvara** u 2D prikazu, sa slojevima i rasporedima, i u {{ui:3D}}. Za uređivanje koristite {{ui:Uredi u CadCraft}}.

Ili unesite cijeli projekat kao jedan zip, sa prikazima, rasporedima i grupama svojstava: vidi [Otvaranje paketa projekta](topic:open-project-bundle).

## Izvoz IFC (model)

1. Otvorite projekat u Archicad-u.
2. Izaberite **File > Save As** i za tip datoteke odaberite **IFC**.
3. Izaberite IFC prevodilac (Archicad-ov naziv za skup postavki izvoza IFC-a). Za BimCraft odgovara **IFC4 Reference View** ili **IFC2X3 Coordination View 2.0**. IFC4X3 se također otvara.
4. Izaberite šta izvoziti: cijeli projekat ili samo elemente vidljive na spratovima koje gledate.
5. Sačuvajte, pa kliknite {{ui:Odaberi datoteku}} u BimCraft-u i izaberite `.ifc` datoteku.

Prije izvoza provjerite ove postavke u prevodiocu:

- **Zone**: izvezite ih, da prostorije stignu kao prostori. Kliknite {{ui:Prostorije}} u BimCraft-u da ih vidite.
- **Svojstva i klasifikacije**: izvezite ih, da se prikažu u {{ui:Svojstva}} i mogu se koristiti u {{ui:Pronađi}}, {{ui:Boja}} i {{ui:Ukupne količine}}.
- **Običan `.ifc`**, a ne `.ifczip` ili `.ifcxml`. BimCraft otvara samo običan `.ifc`.

## Izvoz DWG (crteži)

1. Otvorite plan, presjek ili raspored koji želite.
2. Izaberite **File > Save As** i za tip datoteke odaberite **DWG**.
3. Izaberite DXF-DWG prevodilac i sačuvajte.
4. Za cijeli set listova sačuvajte rasporede iz Layout Book-a ili ih objavite kao DWG.
5. Otvorite `.dwg` u BimCraft-u. Crteži povezani pri izvozu se otvaraju s njim kad su u istom folderu; vidi [Povezani crteži i slike](topic:dwg-linked-files).

## Rješavanje problema

- **"… je Archicad projekat: njegovi prvi bajtovi to kažu."** Izvezite IFC ili DWG kao gore i otvorite tu datoteku.
- **"… ima Archicad naziv, ali ne počinje kao Archicad datoteka."** Provjerite odakle je datoteka: može biti druga vrsta datoteke s novim nazivom (pokušajte je otvoriti pod pravom ekstenzijom), kopija koja nije završila, ili projekat iz verzije prije 17. Otvorite je u Archicad-u ako možete, pa izvezite IFC ili DWG.
- **Model se otvara bez prostorija.** Zone nisu izvezene. Uključite ih u IFC prevodiocu i izvezite ponovo.
- **Otvori nisu isječeni.** BimCraft to kaže pod **Još nije nacrtano** u panelu {{ui:Datoteka}}. Izvezite ponovo; ako ostane, otvorite model u programu u kojem je nastao i provjerite otvore tamo.
- **Tekst u DWG-u izgleda drugačije.** Izvoz možda zadržava fontove koje BimCraft nema; BimCraft crta tekst jednostavnim sans-serif fontom.

Vidi takođe [Dobijanje datoteke projekta u 3D kroz IFC](topic:rvt-to-ifc) i [Šta BimCraft čita iz svakog formata](topic:file-formats).
