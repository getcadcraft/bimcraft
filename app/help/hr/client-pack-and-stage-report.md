---
title: Paketi za klijenta, izvješća o fazi i usporedba varijanti
summary: Izradite paket za klijenta ili izvješće o fazi iz modela, s usporedbom varijanti volumena po površini i trošku, površinama etaža, crtežima s njihovim revizijama i poviješću izdanja. Svaka brojka čuva elemente iza sebe.
keywords: paket za klijenta, prezentacija, izvješće o fazi, izvješće, usporedba varijanti, varijante, trošak po varijanti, bez cijene, volumen, površine etaža, popis crteža, povijest izdanja, brojke, povezane brojke
from: f6679bf5
---

## Što ćete napraviti

Izradite paket za klijenta ili izvješće o fazi iz modela takvog kakav je sada te usporedite spremljene varijante volumena jednu uz drugu po površini i trošku.

## Koraci

1. U lijevoj ploči otvorite **Paket za klijenta i izvješće o fazi**.
2. Odaberite **Otvori u Dokumentima** pored Paketa za klijenta ili Izvješća o fazi. Dokument se pojavljuje u Dokumentima iz modela, gdje možete promijeniti njegov tekst.
3. U pregledu kliknite brojku da odaberete elemente iza nje.
4. Odaberite **Izradi paket**. Sprema se jedna zip datoteka: dokument kao PDF, slika 3D prikaza i `figures.csv`, koja navodi svaku brojku s GlobalId-jevima njezinih elemenata.

## Polja

Možete ih koristiti u bilo kojem dokumentu.

| Polje | Što ispisuje |
|---|---|
| `{{stage}}` | Faza projekta iz pojedinosti o crtežu. |
| `{{options}}` | Spremljene varijante volumena jedna uz drugu: etaže, visina, tlocrtna površina, bruto površina etaža, omotač i trošak. |
| `{{areas}}` | Površina etaža po razinama, iz prostorija. |
| `{{sheets}}` | Listovi s revizijom na kojoj stoje i datumom zadnjeg izdanja. |
| `{{issues}}` | Povijest izdanja i dnevnik promjena crteža. |
| `{{changes}}` | Što se promijenilo od zadnjeg izdanja, list po list. |

## Kako se troškovi određuju

Trošak dolazi samo iz cjenika vašeg projekta (Energija/Trošak, 5D trošak). Ništa se ne procjenjuje za vas.

- Redak cjenika određuje cijenu varijante samo kad njegove klase navode `IfcBuildingElementProxy`.
- Bruto površinu etaža određuje redak čije riječi navode namjenu varijante, npr. ured. Bez njega koristi se redak s riječima bruto površina etaža ili volumen zgrade. Redak po m² koristi bruto površinu etaža. Redak po m³ koristi volumen.
- Omotač (opseg puta visina) određuje redak s riječju omotač ili fasada.
- Varijanta bez odgovarajućeg retka prikazuje **Bez cijene**. Ukupni iznos prikazuje se samo kad svaki traženi dio ima cijenu.

## Dobro je znati

- Varijante zadržite s **Zadrži kao varijantu** u popisu volumena u programu prostorija. Vidi Varijante volumena.
- PDF ne može odabrati elemente. Izvan BimCraft-a `figures.csv` nosi vezu od svake brojke do njezinih elemenata.

## Još nije izrađeno

- Listovi i nacrtani prikazi nisu smješteni u dokument. Paket sadrži samo sliku 3D prikaza.
