---
title: Paketi za klijenta, izvještaji o fazi i poređenje opcija
summary: Napravi paket za klijenta ili izvještaj o fazi iz modela, s opcijama volumena upoređenim po površini i trošku, površinama spratova, crtežima s revizijama i historijom izdanja. Svaka brojka čuva elemente iza sebe.
keywords: paket za klijenta, prezentacija, izvještaj o fazi, izvještaj, poređenje opcija, opcije, uporedi opcije, površina i trošak, trošak po opciji, bez cijene, volumen, površine spratova, spisak crteža, historija izdanja, brojke, povezane brojke
from: f6679bf5
---

## Šta ćete uraditi

Napravi paket za klijenta ili izvještaj o fazi iz modela kakav je sad, i uporedi sačuvane opcije volumena jednu pored druge po površini i trošku.

## Koraci

1. U lijevom panelu otvori **Paket za klijenta i izvještaj o fazi**.
2. Izaberi **Otvori u Dokumentima** pored Paket za klijenta ili Izvještaj o fazi. Dokument se pojavljuje u Dokumentima iz modela, gdje možeš promijeniti tekst.
3. U pregledu klikni brojku da odabereš elemente iza nje.
4. Izaberi **Napravi paket**. Sačuva se jedan zip: dokument kao PDF, slika 3D pogleda i `figures.csv`, koji navodi svaku brojku s GlobalId-jevima njenih elemenata.

## Polja

Možeš ih koristiti u bilo kojem dokumentu.

| Polje | Šta ispisuje |
|---|---|
| `{{stage}}` | Faza projekta iz detalja crteža. |
| `{{options}}` | Sačuvane opcije volumena jedna pored druge: spratovi, visina, tlocrtna površina, bruto površina poda, omotač i trošak. |
| `{{areas}}` | Površina poda po nivou, iz prostorija. |
| `{{sheets}}` | Listovi s revizijom u kojoj svaki stoji i kad je zadnji put izdat. |
| `{{issues}}` | Historija izdanja i dnevnik promjena crteža. |
| `{{changes}}` | Šta se promijenilo od zadnjeg izdanja, list po list. |

## Kako se opcije troškuju

Trošak dolazi samo iz tvoje tabele cijena projekta (Energija/Trošak, 5D trošak). Ništa se ne procjenjuje umjesto tebe.

- Red u tabeli cijena određuje cijenu opcije samo kad njegove klase navode `IfcBuildingElementProxy`.
- Površinu poda određuje red čije riječi navode namjenu opcije, kao kancelarija. Bez takvog koristi se red s riječima bruto površina poda ili građevinska masa. Red po m² koristi bruto površinu poda. Red po m³ koristi zapreminu.
- Omotač (obim puta visina) određuje red s riječju omotač ili fasada.
- Opcija bez odgovarajućeg reda prikazuje **Bez cijene**. Ukupno se prikazuje samo kad svaki traženi dio ima cijenu.

## Dobro je znati

- Zadrži opcije s **Zadrži kao opciju** na listi opcija volumena u programu prostorija. Vidi Opcije volumena.
- PDF ne može odabrati elemente. Van BimCraft-a, `figures.csv` nosi vezu od svake brojke do njenih elemenata.

## Još nije napravljeno

- Listovi i nacrtani pogledi nisu postavljeni u dokument. Paket sadrži samo sliku 3D pogleda.
