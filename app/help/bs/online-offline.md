---
title: Na mreži i van mreže
summary: Šta BimCraft učitava sa sajta, kako Spasi za rad van mreže omogućava da se IFC modeli i DWG crteži otvaraju bez veze i zašto se ništa što otvoriš nikad ne otprema.
keywords: van mreže, na mreži, internet, veza, bez mreže, avion, posjeta lokaciji, spasi za rad van mreže, spremno za rad van mreže, otprema, privatnost, wasm, webassembly, IFC motor, dwg, cloud
from: 39e5c7eb
---

BimCraft čita tvoje datoteke unutar kartice preglednika. Otvaranje, pregled, uređivanje i spašavanje nikad ne šalju tvoje datoteke nigdje, ni na mreži ni van nje. [Rad van mreže](common:offline) objašnjava kako kopije za rad van mreže funkcionišu u svim aplikacijama; ova stranica pokriva ono što je posebno za BimCraft.

## Šta BimCraft učitava sa sajta

| Dio | Kada se učitava bez kopije za rad van mreže | Veličina |
|---|---|---|
| Sama aplikacija, sa 3D prikazivačem i kodom IFC motora | Kad otvoriš BimCraft | Nekoliko megabajta |
| Dio IFC motora u WebAssembly-ju | Prvi IFC fajl koji otvoriš u kartici: „Pokretanje IFC motora…“ | Oko 1.6 MB |

DWG i DXF crteži, projektne i porodične datoteke i folderi ne traže ništa dodatno: njihovi čitači su dio aplikacije.

## Spasi BimCraft za rad van mreže

1. Otvori BimCraft dok si na mreži.
2. Klikni {{ui:Spasi za rad van mreže}} u traci aplikacije na vrhu.
3. Prati kako dugme broji: „Spašavanje 40 od 212“, na primjer. Kopija programa BimCraft je oko 11 MB, jer uključuje IFC motor.
4. Sačekaj {{ui:Spremno za rad van mreže}}.

Kad piše {{ui:Spremno za rad van mreže}}, IFC modeli, DWG i DXF crteži, projektne datoteke, folderi i ova pomoć se svi otvaraju bez veze. Ne moraš prvo otvoriti IFC ili DWG da bi „zagrijao“ čitače.

Da ažuriraš ili ukloniš kopiju, klikni {{ui:Spremno za rad van mreže}} i odaberi {{ui:Spasi ponovo (preuzmi najnoviju verziju)}} ili {{ui:Ukloni kopiju za rad van mreže}}.

## Šta dugme kaže

| Dugme | Znači |
|---|---|
| {{ui:Spasi za rad van mreže}} | Još nema kopije za rad van mreže u ovom pregledaču. Klikni da je spasiš |
| „Spašavanje *n* od *m*“ | Spašava se; ostavi karticu otvorenu dok ne završi |
| {{ui:Spremno za rad van mreže}} | Spašeno. Pređi mišem da vidiš kada; klikni za meni |
| {{ui:Nije moguće spasiti}} | Neke datoteke se nisu preuzele. Provjeri vezu i klikni za novi pokušaj. Posljednja dobra kopija, ako postoji, ostaje sačuvana |
| {{ui:Rad van mreže nije dostupan}} | Ovaj prozor ne može čuvati kopiju za rad van mreže (privatni prozor ili upravljani računar). Vidi [Rad van mreže](common:offline) |

:::offline
Nisi na mreži.

- Ako dugme kaže {{ui:Spremno za rad van mreže}}, svaka vrsta datoteke se otvara kao i obično.
- Ako ne kaže, radi samo ono što je ova kartica već učitala: čitač koji se nikad nije učitao u ovoj kartici ne može da se pokrene, a otvaranje te vrste datoteke prikazuje grešku pregledača u statusnoj liniji. Ne osvježavaj karticu dok ponovo ne budeš na mreži.
:::

## Šta nikad ne treba vezu

Kad je BimCraft otvoren u kartici, ovo radi van mreže i bez spašene kopije:

- Čitanje projektnih i porodičnih datoteka i provjera foldera.
- Odabir elemenata, čitanje svojstava i uređivanje IFC vrijednosti u modelu koji je već otvoren.
- {{ui:Spasi kao IFC}} i {{ui:Preuzmi CSV}}: oba su preuzimanja napravljena u kartici.

## Šta još nije dostupno

- **Spašavanje u oblaku.** Datoteke se spašavaju samo na tvoj računar.

Vidi [Gdje idu tvoje datoteke](common:your-files).
