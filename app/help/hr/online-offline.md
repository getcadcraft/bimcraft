---
title: Na mreži i izvan mreže
summary: Što BimCraft učitava s web-mjesta, kako Spremi za izvanmrežni rad čini da se IFC modeli i DWG crteži otvaraju bez veze te zašto se ništa što otvorite nikad ne šalje.
keywords: izvan mreže, na mreži, internet, veza, bez mreže, zrakoplov, posjet gradilištu, spremi za izvanmrežni rad, spremno za izvanmrežni rad, učitavanje, privatnost, wasm, webassembly, IFC motor, dwg, oblak
from: 39e5c7eb
---

BimCraft čita vaše datoteke unutar kartice preglednika. Otvaranje, pregledavanje, uređivanje i spremanje nikad ne šalju vaše datoteke nigdje, na mreži ili izvan nje. [Rad izvan mreže](common:offline) objašnjava kako izvanmrežne kopije rade u svim aplikacijama; ova stranica pokriva ono što je posebno za BimCraft.

## Što BimCraft učitava s web-mjesta

| Dio | Kada se učitava bez izvanmrežne kopije | Veličina |
|---|---|---|
| Sama aplikacija, s 3D preglednikom i kodom IFC motora | Kad otvorite BimCraft | Nekoliko megabajta |
| WebAssembly dio IFC motora | Prva IFC datoteka koju otvorite u kartici: „Pokretanje IFC motora…“ | Oko 1.6 MB |

DWG i DXF crteži, projektne datoteke i obitelji te mape ne trebaju ništa dodatno: njihovi čitači dio su aplikacije.

## Spremanje BimCraft-a za izvanmrežni rad

1. Otvorite BimCraft dok ste na mreži.
2. Kliknite {{ui:Save for offline}} u traci aplikacije na vrhu.
3. Pratite kako gumb broji: „Spremanje 40 od 212“, na primjer. Kopija programa BimCraft je oko 11 MB, jer uključuje IFC motor.
4. Pričekajte da se pojavi {{ui:Offline ready}}.

Kada se pojavi {{ui:Offline ready}}, IFC modeli, DWG i DXF crteži, projektne datoteke, mape i ova pomoć otvaraju se bez veze. Ne morate prvo otvoriti IFC ili DWG da biste „zagrijali“ čitače.

Da biste ažurirali ili uklonili kopiju, kliknite {{ui:Offline ready}} i odaberite {{ui:Save again (get the newest version)}} ili {{ui:Remove the offline copy}}.

## Što gumb govori

| Gumb | Znači |
|---|---|
| {{ui:Save for offline}} | Još nema izvanmrežne kopije u ovom pregledniku. Kliknite da je spremite |
| „Spremanje *n* od *m*“ | Spremanje; držite karticu otvorenom dok ne završi |
| {{ui:Offline ready}} | Spremljeno. Zadržite pokazivač da vidite kada; kliknite za izbornik |
| {{ui:Could not save}} | Neke datoteke nisu se preuzele. Provjerite vezu i kliknite da pokušate ponovno. Zadnja ispravna kopija, ako postoji, ostaje sačuvana |
| {{ui:Offline not available}} | Ovaj prozor ne može čuvati izvanmrežnu kopiju (privatni prozor ili računalo pod nadzorom). Vidi [Rad izvan mreže](common:offline) |

:::offline
Niste na mreži.

- Ako gumb piše {{ui:Offline ready}}, svaka vrsta datoteke otvara se kao obično.
- Ako ne piše, radi samo ono što je ova kartica već učitala: čitač koji se nikad nije učitao u ovoj kartici ne može se pokrenuti, a otvaranje takve vrste datoteke prikazuje pogrešku preglednika u statusnoj traci. Ne osvježavajte karticu dok ponovno ne budete na mreži.
:::

## Što nikad ne treba vezu

Kada je BimCraft otvoren u kartici, ovo radi bez veze čak i bez spremljene kopije:

- Čitanje projektnih i obiteljskih datoteka te provjera mapa.
- Odabir elemenata, čitanje svojstava i uređivanje IFC vrijednosti u modelu koji je već otvoren.
- {{ui:Save as IFC}} i {{ui:Download CSV}}: oba su preuzimanja napravljena u kartici.

## Što još nije dostupno

- **Spremanje u oblak.** Datoteke se spremaju samo na vaše računalo.

Vidi [Gdje idu vaše datoteke](common:your-files).
