---
title: Izaberi element i pročitaj njegova svojstva
summary: Klikni bilo koji element u 3D modelu da ga istakneš i pročitaš njegov naziv, tip, oznaku, GlobalId, skupove svojstava i količine.
keywords: svojstva, izbor, klik, element, parametri, skupovi svojstava, pset, količine, globalid, guid, tip, pregled
from: 43b80aa8
---

## Šta ćeš uraditi

Izaberi elemente u IFC modelu i pročitaj sve što datoteka kaže o njima: atribute, skupove svojstava, svojstva tipa i količine.

## Koraci

1. Otvori IFC model.
2. Klikni element, na primjer vrata. Klikni bez povlačenja: povlačenje preko nekoliko piksela rotira umjesto biranja.
3. Pogledaj element: istaknut je plavo.
4. Pogledaj panel {{ui:Svojstva}} desno. Na vrhu su vrsta elementa (kao „Door“ ili „WallStandardCase“) i njegovo ime.
5. Pročitaj prvi blok: **Naziv**, **Tip**, **Vrsta objekta**, **Oznaka**, **Opis**, **GlobalId** i **Linija**.
6. Pomjeri se nadolje do skupova svojstava. Prva tri su otvorena; klikni naziv bilo kojeg drugog skupa da ga otvoriš.
7. Klikni drugi element da pređeš na njega.
8. Pritisni {{key:Esc}}, ili klikni praznu pozadinu, da očistiš izbor.

## Šta treba da vidiš

- Istaknuti element i njegove podatke desno.
- Skupove svojstava po abecedi. Skupovi koji dolaze iz **tipa** elementa imaju „ (tip)“ iza naziva i napomenu „Svojstvo tipa: promjena ovdje važi za svaki element ovog tipa.“
- Skupovi količina (kao dužine, površine i zapremine) navedeni uz ostale skupove. Količine su samo za čitanje.
- Vrijednosti koje možeš promijeniti izgledaju kao dugmad. [Promijeni IFC svojstva i sačuvaj izmijenjenu kopiju](topic:edit-ifc-properties) pokazuje kako.

[Polja panela Svojstva](topic:properties-panel) objašnjava svako polje.

## Pristup skrivenim elementima

1. Da dođeš do nečega unutar zgrade, odznači spratove iznad njega na listi {{ui:Spratovi}}.
2. Da dođeš do zida iza volumena prostorije, isključi {{ui:Prostorije}}.
3. Klikni element.

## Česte greške

- **Povlačenje malo dok klikneš.** BimCraft to shvata kao rotaciju i ne bira. Drži miš mirno.
- **Očekivanje jedinica uz brojeve.** Vrijednosti se prikazuju kako su zapisane u datoteci, zaokružene na četiri decimale, bez oznake jedinice. Dužine u metričkom izvozu su obično milimetri ili metri; provjeri postavke izvoznika.
- **Traženje parametra po poznatom nazivu.** Izvoznici preimenuju i grupišu parametre u IFC skupove svojstava kao što je `Pset_WallCommon`. Pregledaj svaki skup; prilagođeni parametri često su u skupu nazvanom po programu za izvoz ili tvojoj kompaniji.
- **Očekivanje polja za pretragu.** Klikni da izabereš element; {{key:Mod}}+klik ili {{key:Shift}}+klik bira još, a {{key:Mod+A}} bira svaki prikazani element. Lista {{ui:Elementi}} lijevo samo broji elemente po vrsti; nije klikabilna.
- **Biranje na kartici datoteke projekta.** Kartica datoteke nema elemente za izbor: „Svojstva elemenata trebaju 3D model. Otvori IFC izvoz ove datoteke da ih vidiš.“
