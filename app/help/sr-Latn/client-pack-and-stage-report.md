---
title: Paketi za klijenta, izveštaji o fazama i poređenje opcija
summary: Napravi paket za klijenta ili izveštaj o fazi iz modela, sa opcijama mase upoređenim po površini i trošku, površinama spratova, crtežima sa njihovim revizijama i istorijom izdavanja. Svaka brojka čuva elemente iza sebe.
keywords: paket za klijenta, prezentacija, izveštaj o fazi, izveštaj, poređenje opcija, opcije, uporedi opcije, površina i trošak, trošak po opciji, bez cene, masa, površine spratova, spisak crteža, istorija izdavanja, brojke, povezane brojke
from: f6679bf5
---

## Šta ćeš uraditi

Napravi paket za klijenta ili izveštaj o fazi iz modela onakvog kakav je sada, i uporedi sačuvane opcije mase jednu pored druge po površini i trošku.

## Koraci

1. U levom panelu otvori **Paket za klijenta i izveštaj o fazi**.
2. Izaberi **Otvori u Dokumentima** pored Paket za klijenta ili Izveštaj o fazi. Dokument se pojavljuje u Dokumentima, iz modela, gde možeš da promeniš njegov tekst.
3. U pregledu klikni brojku da izabereš elemente iza nje.
4. Izaberi **Napravi paket**. Sačuva se jedan zip: dokument kao PDF, slika 3D prikaza i `figures.csv`, koji navodi svaku brojku sa GlobalId-jevima njenih elemenata.

## Polja

Ova polja možeš da koristiš u bilo kom dokumentu.

| Polje | Šta štampa |
|---|---|
| `{{stage}}` | Projektnu fazu iz detalja crteža. |
| `{{options}}` | Sačuvane opcije mase, jednu pored druge: spratovi, visinu, osnovu, bruto površinu spratova, omotač i trošak. |
| `{{areas}}` | Površinu spratova po nivou, iz prostorija. |
| `{{sheets}}` | Listove sa revizijom na kojoj stoje i datumom poslednjeg izdavanja. |
| `{{issues}}` | Istoriju izdavanja i spisak promena crteža. |
| `{{changes}}` | Šta se promenilo od poslednjeg izdanja, list po list. |

## Kako se opcije troškuju

Trošak dolazi samo iz tvoje cenovnike projekta (Energija/Trošak, 5D trošak). Ništa se ne procenjuje umesto tebe.

- Stavka cenovnika određuje opciju samo kad joj klase navode `IfcBuildingElementProxy`.
- Površina spratova određuje se stavkom čije reči navode namenu opcije, na primer kancelarije. Ako takve nema, koristi se stavka sa rečima bruto površina spratova ili masa zgrade. Stavka po m² koristi bruto površinu spratova. Stavka po m³ koristi zapreminu.
- Omotač (obim puta visina) određuje se stavkom sa rečju omotač ili fasada.
- Opcija bez odgovarajuće stavke prikazuje **Bez cene**. Ukupan iznos prikazuje se samo kad svaki traženi deo ima cenu.

## Dobro je znati

- Čuvaj opcije pomoću **Čuvaj kao opciju** u spisku masa programa prostorija. Vidi Opcije mase.
- PDF ne može da bira elemente. Van BimCraft-a, `figures.csv` nosi vezu od svake brojke do njenih elemenata.

## Još nije urađeno

- Listovi i nacrtani prikazi nisu smešteni u dokument. Paket sadrži samo sliku 3D prikaza.
