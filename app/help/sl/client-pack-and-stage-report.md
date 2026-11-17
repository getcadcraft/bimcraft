---
title: Paketi za naročnika, poročila o fazah in primerjava variant
summary: Iz modela pripravite paket za naročnika ali poročilo o fazi, z variantami masivnosti, primerjanimi po površini in ceni, tlorisnimi površinami, seznamom risb z revizijami in zgodovino izdaj. Vsaka številka ohrani elemente, na katerih temelji.
keywords: paket za naročnika, predstavitev, poročilo o fazi, poročilo, primerjava variant, variante, primerjava po površini in ceni, cena na varianto, brez cene, masivnost, tlorisne površine, seznam risb, zgodovina izdaj, številke, povezane številke
from: f6679bf5
---

## Kaj boste naredili

Iz modela, kakršen je zdaj, pripravite paket za naročnika ali poročilo o fazi, in obdržane variante masivnosti primerjajte drugo ob drugi po površini in ceni.

## Koraki

1. V levem podoknu odprite **Paket za naročnika in poročilo o fazi**.
2. Izberite **Odpri v Dokumentih** poleg Paket za naročnika ali Poročilo o fazi. Dokument se pojavi v Dokumentih iz modela, kjer lahko spremenite njegovo besedilo.
3. V predogledu kliknite številko, da izberete elemente, na katerih temelji.
4. Izberite **Sestavi paket**. Shrani se en zip: dokument kot PDF, slika 3D pogleda in `figures.csv`, ki našteje vsako številko z GlobalId njenih elementov.

## Polja

Ta polja lahko uporabite v vsakem dokumentu.

| Polje | Kaj natisne |
|---|---|
| `{{stage}}` | Faza projekta iz podrobnosti risbe. |
| `{{options}}` | Obdržane variante masivnosti drugo ob drugi: etaže, višina, tloris, bruto tlorisna površina, ovoj in strošek. |
| `{{areas}}` | Tlorisna površina po ravneh, iz prostorov. |
| `{{sheets}}` | Listi z revizijo, na kateri stojijo, in časom zadnje izdaje. |
| `{{issues}}` | Zgodovina izdaj in dnevnik sprememb risb. |
| `{{changes}}` | Kaj se je spremenilo od zadnje izdaje, list za listom. |

## Kako se variante ocenijo s ceno

Strošek prihaja samo iz cenika vašega projekta (Energija/Strošek, 5D strošek). Ničesar za vas ne ocenjujemo.

- Vrstica cenika oceni varianto samo, kadar njeni razredi navajajo `IfcBuildingElementProxy`.
- Tlorisno površino oceni vrstica, katere besede navajajo namembnost variante, na primer pisarna. Brez nje se uporabi vrstica z besedami bruto tlorisna površina ali stavbna masa. Vrstica po m² uporablja bruto tlorisno površino. Vrstica po m³ uporablja prostornino.
- Ovoj (obseg krat višina) oceni vrstica z besedo ovoj ali fasada.
- Varianta brez ustrezne vrstice prikaže **Brez cene**. Skupni znesek se prikaže samo, kadar ima vsak zahtevani del ceno.

## Dobro je vedeti

- Variante obdržite z **Obdrži kot varianto** v seznamu masivnosti v programu prostorov. Glejte Variante masivnosti.
- PDF ne more izbirati elementov. Zunaj BimCraft `figures.csv` nosi povezavo od vsake številke do njenih elementov.

## Še ni izdelano

- Listi in narisani pogledi niso postavljeni v dokument. Paket vsebuje samo sliko 3D pogleda.
