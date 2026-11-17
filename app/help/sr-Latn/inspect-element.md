---
title: Izaberite element i pročitajte njegova svojstva
summary: Kliknite bilo koji element u 3D modelu da ga istaknete i pročitate njegov naziv, tip, oznaku, GlobalId, skupove svojstava i količine.
keywords: svojstva, izbor, izaberi, klik, element, parametri, skupovi svojstava, pset, količine, globalid, guid, tip, pregled
from: 43b80aa8
---

## Šta ćete uraditi

Izaberite elemente u IFC modelu i pročitajte sve što datoteka kaže o njima: atribute, skupove svojstava, svojstva tipa i količine.

## Koraci

1. Otvorite IFC model.
2. Kliknite element, na primer vrata. Kliknite bez prevlačenja: prevlačenje za više od nekoliko piksela kruži umesto da bira.
3. Pogledajte element: istaknut je plavom bojom.
4. Pogledajte panel {{ui:Svojstva}} s desne strane. Na vrhu su vrsta elementa (kao „Door” ili „WallStandardCase”) i njegov naziv.
5. Pročitajte prvi blok: **Ime**, **Tip**, **Vrsta objekta**, **Oznaka**, **Opis**, **GlobalId** i **Linija**.
6. Pomerite se do skupova svojstava. Prva tri su otvorena; kliknite naziv bilo kog drugog skupa da ga otvorite.
7. Kliknite drugi element da pređete na njega.
8. Pritisnite {{key:Esc}}, ili kliknite praznu pozadinu, da obrišete izbor.

## Šta treba da vidite

- Istaknuti element i njegovi podaci s desne strane.
- Skupovi svojstava po abecednom redu. Skupovi koji dolaze iz **tipa** elementa imaju „ (tip)” posle naziva i napomenu „Svojstvo tipa: promena ovde važi za svaki element ovog tipa.”
- Skupovi količina (kao dužine, površine i zapremine) navedeni su uz ostale skupove. Količine su samo za čitanje.
- Vrednosti koje možete menjati izgledaju kao dugmad. [Promenite IFC svojstva i sačuvajte izmenjenu kopiju](topic:edit-ifc-properties) pokazuje kako.

[Polja panela Svojstva](topic:properties-panel) objašnjava svako polje.

## Pristup skrivenim elementima

1. Da dođete do nečega unutar zgrade, odštiklirajte spratove iznad njega na listi {{ui:Spratovi}}.
2. Da dođete do zida iza zapremine prostorije, isključite {{ui:Prostori}}.
3. Kliknite element.

## Česte greške

- **Malo prevlačenja dok kliknete.** BimCraft to tretira kao kruženje i ne bira. Držite miš nepomično.
- **Očekivanje jedinica uz brojeve.** Vrednosti se prikazuju kako su sačuvane u datoteci, zaokružene na četiri decimale, bez oznake jedinice. Dužine u metričkom izvozu su obično milimetri ili metri; proverite podešavanja izvoznika.
- **Traženje parametra po poznatom nazivu.** Izvoznici preimenuju i grupišu parametre u IFC skupove svojstava, kao što je `Pset_WallCommon`. Pogledajte svaki skup; prilagođeni parametri često su u skupu nazvanom po programu koji izvozi ili po vašoj kompaniji.
- **Očekivanje polja za pretragu.** Kliknite da izaberete element; {{key:Mod}}+klik ili {{key:Shift}}+klik bira još, a {{key:Mod+A}} bira svaki prikazani element. Lista {{ui:Elementi}} s leve strane samo broji elemente po vrsti; nije za klik.
- **Biranje na kartici datoteke projekta.** Kartica datoteke nema elemente za izbor: „Svojstva elemenata zahtevaju 3D model. Otvorite IFC izvoz ove datoteke da ih vidite.”
