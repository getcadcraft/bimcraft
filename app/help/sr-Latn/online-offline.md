---
title: Na mreži i van mreže
summary: Šta BimCraft učitava sa sajta, kako Sačuvaj za rad van mreže omogućava da se IFC modeli i DWG crteži otvaraju bez veze, i zašto se ništa što otvorite nikad ne šalje.
keywords: van mreže, na mreži, internet, veza, bez mreže, avionski režim, poseta lokaciji, sačuvaj za rad van mreže, spremno za rad van mreže, slanje, privatnost, wasm, WebAssembly, IFC motor, DWG, oblak
from: 39e5c7eb
---

BimCraft čita vaše datoteke u pregledaču. Otvaranje, pregledanje, uređivanje i čuvanje nikad ne šalju vaše datoteke nigde, na mreži ili van nje. [Rad van mreže](common:offline) objašnjava kako kopije za rad van mreže rade u svakoj aplikaciji; ova stranica pokriva ono što je posebno za BimCraft.

## Šta BimCraft učitava sa sajta

| Deo | Kad se učitava bez kopije za rad van mreže | Veličina |
|---|---|---|
| Sama aplikacija, sa 3D prikazivačem i kodom IFC motora | Kad otvorite BimCraft | Nekoliko megabajta |
| WebAssembly deo IFC motora | Prva IFC datoteka koju otvorite u kartici: „Pokrećem IFC motor…“ | Oko 1,6 MB |

DWG i DXF crteži, projektne i porodične datoteke i fascikle ne traže ništa dodatno: njihovi čitači su deo aplikacije.

## Sačuvajte BimCraft za rad van mreže

1. Otvorite BimCraft dok ste na mreži.
2. Kliknite {{ui:Save for offline}} na traci aplikacije na vrhu.
3. Posmatrajte kako dugme broji: „Čuvam 40 od 212“, na primer. Kopija BimCraft-a je oko 11 MB, jer sadrži IFC motor.
4. Sačekajte {{ui:Offline ready}}.

Kad piše {{ui:Offline ready}}, IFC modeli, DWG i DXF crteži, projektne datoteke, fascikle i ova pomoć otvaraju se bez veze. Ne morate prvo da otvorite IFC ili DWG da bi se čitači „zagrejali“.

Da ažurirate ili uklonite kopiju, kliknite {{ui:Offline ready}} i izaberite {{ui:Save again (get the newest version)}} ili {{ui:Remove the offline copy}}.

## Šta piše na dugmetu

| Dugme | Znači |
|---|---|
| {{ui:Save for offline}} | Još nema kopije za rad van mreže u ovom pregledaču. Kliknite da sačuvate jednu |
| „Čuvam *n* od *m*“ | Čuvanje; ostavite karticu otvorenu dok se ne završi |
| {{ui:Offline ready}} | Sačuvano. Pređite mišem da vidite kad; kliknite za meni |
| {{ui:Could not save}} | Neke datoteke nisu preuzete. Proverite vezu i kliknite da pokušate ponovo. Poslednja dobra kopija, ako postoji, se čuva |
| {{ui:Offline not available}} | Ovaj prozor ne može da čuva kopiju za rad van mreže (privatni prozor ili upravljani računar). Pogledajte [Rad van mreže](common:offline) |

:::offline
Niste na mreži.

- Ako dugme piše {{ui:Offline ready}}, svaka vrsta datoteke se otvara kao obično.
- Ako ne piše, radi samo ono što je ova kartica već učitala: čitač koji se nikad nije učitao u ovoj kartici ne može da se pokrene, a otvaranje te vrste datoteke prikazuje grešku pregledača u statusnoj liniji. Ne osvežavajte karticu dok ponovo ne budete na mreži.
:::

## Šta nikad ne traži vezu

Kad je BimCraft otvoren u kartici, ovo radi van mreže i bez sačuvane kopije:

- Čitanje projektnih i porodičnih datoteka i provera fascikli.
- Biranje elemenata, čitanje svojstava i uređivanje IFC vrednosti u modelu koji je već otvoren.
- {{ui:Save as IFC}} i {{ui:Download CSV}}: oba su preuzimanja napravljena u kartici.

## Šta još nije dostupno

- **Čuvanje u oblaku.** Datoteke se čuvaju samo na vašem računaru.

Pogledajte [Gde idu vaše datoteke](common:your-files).
