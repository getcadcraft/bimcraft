---
title: Preberite projektno ali družinsko datoteko
summary: Odprite datoteko .rvt, .rfa, .rte ali .rft in preberite njeno izdajo, deljenje dela, podatke o projektu, parametre družine, povezave in predogledno sliko, brez programa, ki jo je ustvaril.
keywords: rvt, rfa, rte, rft, projektna datoteka, družina, izdaja, različica, katera različica, gradnja, deljenje dela, centralna datoteka, podatki o projektu, predogled, sličica, povezave
from: df3600e1
---

## Kaj boste naredili

Ugotovite, kaj je v projektni ali družinski datoteki, ne da bi jo odprli v Revitu: katera izdaja jo je shranila, ali je v deljenem delu, podatke o projektu in na kaj kaže. Uporabno, kadar datoteka pride od nekoga drugega in morate vedeti, v kateri izdaji jo odpreti.

## Koraki

1. Kliknite {{ui:Izberi datoteko}}.
2. Izberite datoteko `.rvt`, `.rfa`, `.rte` ali `.rft`.
3. Počakajte trenutek. Vrstica stanja pokaže "Branje datoteke…", nato pa "Odprto *ime datoteke*".
4. Na vrhu kartice si oglejte predogledno sliko, shranjeno v datoteki, vrsto datoteke in izdajo, v kateri je bila shranjena, ter ime projekta.
5. Pomaknite se navzdol in preberite razdelke kartice.

## Kaj naj vidite

Kartica na sredini z naslednjimi razdelki, kadar jih datoteka vsebuje:

| Razdelek | Kaj vam pove |
|---|---|
| File | Ime datoteke, velikost, vrsta (projekt, predloga projekta, družina ali predloga družine), izdaja in gradnja, v kateri je bila shranjena, deljenje dela, pot do centralnega modela, kje je bila nazadnje shranjena, kdo jo je shranil, jezik in GUID dokumenta |
| Project information | Lastna polja projekta, kot so ime, številka, naročnik, naslov in status. Polja, ki so še na privzetih vrednostih novega projekta, so izpuščena. |
| Family, Family: … | Za družino: njeno ime, kategorijo, izdajo, zadnjo posodobitev in njene parametre, skupino za skupino |
| Linked and referenced files | Vsak povezani model, povezava CAD, slika in tabela opomb, na katero datoteka kaže, z njeno shranjeno potjo |

Na levi strani podokno {{ui:Datoteka}} ponovi ključna dejstva in doda **Read**: koliko datoteke je BimCraft dejansko prebral, navadno okoli 40 KB datoteke, ki je veliko megabajtov. Na desni strani podokno {{ui:Lastnosti}} pove, da lastnosti elementov potrebujejo model 3D.

## Zakaj ni 3D

Model 3D in elementi znotraj projektne datoteke so shranjeni v nedokumentiranem formatu. BimCraft bere samo dele datoteke, ki so dokumentirani ali očitno berljivi: podatke o datoteki, podatke o projektu, podatke o družini, seznam povezav in predogledno sliko. Preostalega ne ugiba. Če želite model videti v 3D in brati lastnosti elementov, izvozite IFC iz programa, ki je datoteko ustvaril. Glejte [Pridobite datoteko projekta v 3D prek IFC](topic:rvt-to-ifc).

## Pogoste napake

- **Pričakovanje 3D.** Glejte zgoraj.
- **Povezave kažejo samo shranjeno pot.** Datoteka, odprta sama, ne more preveriti, ali njene povezave obstajajo. Odprite raje mapo, v kateri je, in BimCraft označi vsako povezavo kot najdeno ali ne: [Odprite celotno mapo projekta](topic:open-project-folder).
- **"This file is incomplete…"** Datoteka je bila odrezana med kopiranjem, nalaganjem ali sinhronizacijo. To se zgodi tudi z datoteko v oblaku, ki je še "samo na spletu". BimCraft jo kljub temu odpre in prikaže samo tisto, kar je bilo obnovljeno: oranžno opozorilo na vrhu kartice, razdelek **Recovered from this file** s seznamom delov, katerih vsak bajt je v datoteki, in **Not in the file** za preostalo. Za manjkajoči del ničesar ne dopolni, zato lahko manjkajo izdaja, predogledna slika ali podatki o projektu, kadar so bili shranjeni za mestom reza. Če je bil odrezan že seznam vsebine datoteke, ni mogoče odpreti ničesar. Original znova kopirajte in ga ponovno odprite za celotno datoteko.
- **"No preview picture in this file".** Nekatere datoteke so shranjene brez nje. To je običajno.
- **Odpiranje varnostne kopije po pomoti.** Datoteke z imeni, kot je `Tower.0004.rvt`, so oštevilčene varnostne kopije. Če odprete mapo, jih BimCraft združi z njihovim modelom.
