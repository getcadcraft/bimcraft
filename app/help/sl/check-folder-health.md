---
title: Preverjanje mape za poškodovane kopije, manjkajoče povezave in ostanke
summary: Z poročilom o mapi poiščite odrezane datoteke modelov, izberite najnovejšo popolno varnostno kopijo, preverite, katere povezave manjkajo, in odkrijte datoteke zaklepov ter začasne datoteke.
keywords: preverjanje stanja mape, poškodovano, pokvarjeno, nepopolno, odrezano, varnostna kopija, manjkajoče povezave, manjkajoč xref, revizija, ostanki, datoteke zaklepov, dwl, bak, predaja
from: 3025a539
---

## Kaj boste naredili

Preverite projektno mapo, preden jo predate ali začnete z njo delati: je vsak model popoln, katera varnostna kopija je zadnja dobra in so tu vse povezane datoteke?

## Koraki: poškodovane kopije

1. Odprite projektno mapo. Glejte [Odpiranje celotne projektne mape](topic:open-project-folder).
2. Preberite opombe pod imenom mape. „2 datoteki sta nepopolni ali neberljivi. Glejte modele spodaj.“ pomeni, da je treba pogledati.
3. V **Modeli** poglejte stolpec **Stanje**. **Popolno** je v redu. Rumeno „1 nepopolna“ pomeni, da je ena kopija slaba, druga pa zdrava. Rdeče **Nepopolno** pomeni, da zdrava kopija ni bila najdena.
4. Pod modelom s težavo odprite **Vse … kopije**. Prikaže se glavna datoteka in vsaka oštevilčena varnostna kopija, od najnovejše proti najstarejši, z velikostjo, datumom in stanjem.
5. Preberite opombo nad seznamom, na primer: „Tower.rvt je nepopolna (183.2 MB, mora biti vsaj 214.0 MB). Kartica prikazuje najnovejšo popolno kopijo, Tower.0012.rvt (3. mar. 2025).“
6. Kliknite kopijo, ki jo želite odpreti. Kliknete lahko samo popolne kopije.

## Kaj preverjanje stanja naredi

Vsaka kopija vsakega modela dobi hitro preverjanje glave, po 512 bajtov, zato se tudi mapa z velikimi modeli preveri v nekaj sekundah. Datoteka, katere lastni kazalec kaže za njen konec, je bila odrezana med kopiranjem, nalaganjem ali sinhronizacijo. Datoteka v oblačnem pogonu, ki je še „samo na spletu“, izgleda enako.

Kartica za vsak model se prebere iz glavne datoteke, kadar je zdrava, in iz najnovejše zdrave varnostne kopije, kadar ni.

## Koraki: manjkajoče povezave

1. Poiščite opombo „*n* povezanih datotek ni v tej mapi.“ pod imenom mape.
2. Pomaknite se do **Povezane in sklicane datoteke**. Manjkajoče povezave so navedene najprej.
3. Za vsako povezavo preberite stolpec **Kje**:
   - **V tej mapi**: najdeno na poti, ki jo je model shranil.
   - **Najdeno enako ime**: datoteka z istim imenom je drugje v mapi. Preverite, ali je prava.
   - **Knjižnična datoteka**: tabela ključnih oznak ali kod sestavov. Te so na vsakem računalniku s programom, zato v mapi niso pričakovane.
   - **Ni v tej mapi**: nikjer v mapi ni najdena.
4. Preberite **Uporablja**, da vidite, kateri modeli se sklicujejo na vsako datoteko.

BimCraft vsako povezavo išče najprej po njeni relativni poti, nato po koncu njene shranjene poti (tako je `\\strežnik\projekti\Tower\Cad\X-Refs\site.dwg` najdena kot `X-Refs/site.dwg`, če ste izbrali mapo `Cad`), nato po imenu datoteke kjerkoli v mapi.

## Koraki: ostanki

1. Pomaknite se do **Odloženo** na koncu poročila.
2. Preberite tri vrstice, ki se lahko pojavijo:
   - Pomožne mape (`*_backup`, `*_log`, `Revit_temp`): niso prebrane.
   - Ostanki zaklepov, dnevnikov in varnostnih kopij: datoteke, kot so `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Pustijo jih programi, ki so se sesuli ali so bili odprti, ko je bila mapa kopirana. Običajno jih lahko varno izbrišete, ko jih nihče več nima odprtih.
   - Druge datoteke: vse drugo, kar BimCraft ne bere.

## Pogoste napake

- **Brisanje poškodovane glavne datoteke, preden ste shranili dobro varnostno kopijo.** Najprej kopirajte najnovejšo popolno varnostno kopijo, šele nato se lotite poškodovane datoteke.
- **Slepo zaupanje „Najdeno enako ime“.** Dva različna načrta si lahko delita ime. Če ste v dvomih, odprite oba.
- **Mišljenje, da je manjkajoča knjižnična datoteka težava.** Tabele ključnih oznak in kod sestavov so na vsakem računalniku poleg programa.
- **Število datotek se med brskalniki razlikuje.** V Firefoxu in Safariju {{ui:Open a folder}} („Odpri mapo“) preda vse datoteke, tudi tiste v pomožnih mapah, zato število (in omejitev 20.000 datotek) vključuje tudi njih. Povlečena mapa pomožne mape preskoči, kot to naredita Chrome in Edge. Poročilo je sicer enako.
