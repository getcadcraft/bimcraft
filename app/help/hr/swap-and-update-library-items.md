---
title: Zamjena postavljene stavke i ažuriranje stavki iz knjižnice
summary: Zamijenite jednu postavljenu stavku knjižnice drugom uz zadržavanje njezina mjesta i broja stavke te provjerite ima li u knjižnici novijih verzija svega u modelu.
keywords: zamjena, zamijeni, zamjenski, ažuriranje, novija verzija, provjeri ažuriranja, knjižnica, povučeno, promjena licence, broj stavke
from: 8bdfe01d
---

## Što ćete napraviti

Predomislite se o stavci bez ponovnog pomicanja i držite stavke iz knjižnice u modelu ažurnima.

## Zamjena jedne stavke

1. Kliknite postavljenu stavku knjižnice u modelu.
2. U {{ui:Svojstva}} kliknite {{ui:Zamijeni stavku…}} u okviru **Stavka knjižnice**. Otvara se kartica {{ui:Knjižnica}}.
3. Pronađite novu stavku i kliknite njezinu karticu.
4. Kliknite {{ui:Zamijeni … ovom stavkom}}.

Element zadržava svoje mjesto, zakret, etažu, broj stavke, količinu i bilješke. Njegov tip, oblik i podaci stavke mijenjaju se u novu stavku. Stavke postavljene na isti način dijele jedan tip, kao i kad ih postavljate.

Stavka koja ima varijante (vidi [Postavljanje i zamjena stavke iz knjižnice koja ima varijante](topic:library-variants)) pri zamjeni navodi svoje druge varijante na vrhu kartice {{ui:Knjižnica}}: jedan klik za svaku.

Kada je nova stavka druge vrste stvari, primjerice umivaonik umjesto stola, IFC razred elementa mijenja se da odgovara (ovdje s elementa namještaja na sanitarni terminal), pa ga drugi softver ispravno raspoređuje. Ostaje isti element, s istim GlobalId, pa veze prema njemu i dalje rade. {{key:Mod+Z}} vraća stari razred sa starom stavkom.

## Provjera ažuriranja

1. Kliknite {{ui:Ažuriranja}} na alatnoj traci (ili {{ui:Provjeri ažuriranja}} u okviru stavke knjižnice).
2. Pročitajte popis: svaka stavka knjižnice u modelu s verzijom u modelu, najnovijom verzijom i statusom: **Ažurno**, **Novija verzija**, **Povučeno** ili **Nije pronađeno**. Navodi se i što se promijenilo (geometrija, podaci, licenca ili ispravak).
3. Kliknite {{ui:Ažuriraj}} u retku ili {{ui:Ažuriraj sve}}.

## Što biste trebali vidjeti

- „Ažurirano postavljanja: *n*. Mjesta, brojevi stavki, količine i bilješke se čuvaju.“
- „Ažurirano: *stavka*“ retci u popisu promjena. {{key:Mod+Z}} poništava svaki.

## Dobro je znati

- Mogu se provjeriti samo stavke iz knjižnice. Stavke iz datoteka nemaju id knjižnice.
- Kad se licenca promijenila, kopija koju ste već postavili zadržava licencu s kojom je došla dok je ne ažurirate.
- **Povučena** stavka se ne nudi za nova postavljanja. Ona povučena zbog autorskih prava ne može se uopće preuzeti; zamijenite je s {{ui:Zamijeni stavku…}}.
- Postavljena varijanta ostaje ta varijanta kad novija verzija stavke još je ima; inače preuzima zadanu varijantu stavke.
- Provjera šalje samo id-ove stavki i verzije, nikad vaš model.
