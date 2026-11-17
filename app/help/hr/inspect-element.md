---
title: Odaberite element i pročitajte njegova svojstva
summary: Kliknite bilo koji element u 3D modelu da ga istaknete i pročitate njegovo ime, vrstu, oznaku, GlobalId, skupove svojstava i količine.
keywords: svojstva, odabir, klik, element, parametri, skupovi svojstava, pset, količine, globalid, guid, tip, pregled
from: 43b80aa8
---

## Što ćete učiniti

Odaberite elemente u IFC modelu i pročitajte sve što datoteka kaže o njima: atribute, skupove svojstava, svojstva tipa i količine.

## Koraci

1. Otvorite IFC model.
2. Kliknite element, na primjer vrata. Kliknite bez povlačenja: povlačenje od više piksela okreće prikaz umjesto odabira.
3. Pogledajte element: istaknut je plavom bojom.
4. Pogledajte okno {{ui:Svojstva}} desno. Na vrhu su vrsta elementa (kao „Door“ ili „WallStandardCase“) i njegovo ime.
5. Pročitajte prvi blok: **Naziv**, **Tip**, **Vrsta objekta**, **Oznaka**, **Opis**, **GlobalId** i **Redak**.
6. Pomaknite se do skupova svojstava. Prva tri su otvorena; kliknite naziv bilo kojeg drugog skupa da ga otvorite.
7. Kliknite drugi element da se prebacite na njega.
8. Pritisnite {{key:Esc}} ili kliknite praznu pozadinu da poništite odabir.

## Što biste trebali vidjeti

- Istaknuti element i njegove podatke desno.
- Skupove svojstava poredane po abecedi. Skupovi koji dolaze iz **tipa** elementa imaju " (tip)" iza naziva i napomenu „Svojstvo tipa: promjena ovdje primjenjuje se na svaki element ovog tipa.“
- Skupovi količina (kao duljine, površine i volumeni) navedeni su uz ostale skupove. Količine se samo čitaju.
- Vrijednosti koje možete promijeniti izgledaju kao gumbi. [Mijenjanje IFC svojstava i spremanje uređene kopije](topic:edit-ifc-properties) pokazuje kako.

[Polja okna Svojstva](topic:properties-panel) objašnjava svako polje.

## Pristup skrivenim elementima

1. Da dođete do nečega unutar zgrade, odznačite etaže iznad njega na popisu {{ui:Etaže}}.
2. Da dođete do zida iza volumena prostorije, isključite {{ui:Prostori}}.
3. Kliknite element.

## Česte pogreške

- **Povlačenje malo pri kliku.** BimCraft to shvaća kao okretanje i ne odabire. Držite miš mirno.
- **Očekivanje jedinica uz brojeve.** Vrijednosti se prikazuju kako su pohranjene u datoteci, zaokružene na četiri decimale, bez oznake jedinice. Duljine u metričkom izvozu obično su milimetri ili metri; provjerite postavke izvoznika.
- **Traženje parametra po poznatom nazivu.** Izvoznici preimenuju i grupiraju parametre u IFC skupove svojstava kao što je `Pset_WallCommon`. Pregledajte svaki skup; vlastiti parametri često su u skupu nazvanom po programu koji izvozi ili po vašoj tvrtki.
- **Očekivanje okvira za pretragu.** Kliknite da odaberete element; {{key:Mod}}+klik ili {{key:Shift}}+klik odabire još, a {{key:Mod+A}} odabire svaki prikazani element. Popis {{ui:Elementi}} lijevo samo broji elemente po vrsti; nije moguće na njega kliknuti.
- **Odabir na kartici datoteke projekta.** Kartica datoteke nema elemenata za odabir: „Svojstva elemenata trebaju 3D model. Otvorite IFC izvoz ove datoteke da ih vidite.“
