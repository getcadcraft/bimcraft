---
title: Zamijeni postavljeni element i ažuriraj stavke iz biblioteke
summary: Zamijeni jedan postavljeni element iz biblioteke drugim, zadržavajući njegovo mjesto i broj stavke, i provjeri u Biblioteci da li postoje novije verzije svega u modelu.
keywords: zamjena, zamijeni, zamijeniti, ažuriraj, novija verzija, provjeri ažuriranja, biblioteka, povučeno, promjena licence, broj stavke
from: 8bdfe01d
---

## Šta ćeš uraditi

Promijeni odluku o elementu bez ponovnog pomjeranja, i drži stavke iz biblioteke u modelu aktuelnim.

## Zamijeni jedan element

1. Klikni postavljeni element iz biblioteke u modelu.
2. U {{ui:Svojstva}} klikni {{ui:Zamijeni stavku…}} u polju **Stavka biblioteke**. Otvara se kartica {{ui:Biblioteka}}.
3. Nađi novu stavku i klikni njenu karticu.
4. Klikni {{ui:Zamijeni … ovom}}.

Element zadržava svoje mjesto, okretanje, sprat, broj stavke, količinu i bilješke. Njegov tip, oblik i podaci stavke mijenjaju se u novu stavku. Stavke postavljene na isti način dijele jedan tip, kao i kada ih postavljaš.

Stavka koja ima varijante (vidi [Postavi i zamijeni stavku biblioteke koja ima varijante](topic:library-variants)) navodi svoje ostale varijante na vrhu kartice {{ui:Biblioteka}} kada je zamijeniš: po jedan klik za svaku.

Kada je nova stavka druga vrsta stvari, na primjer sudoper umjesto stola, IFC klasa elementa se mijenja da odgovara (ovdje sa elementa namještaja na sanitarni terminal), pa je drugi softver ispravno raspoređuje. Ostaje isti element, sa istim GlobalId, pa veze prema njemu i dalje rade. {{key:Mod+Z}} vraća staru klasu sa starom stavkom.

## Provjeri ažuriranja

1. Klikni {{ui:Ažuriranja}} na traci (ili {{ui:Provjeri ažuriranja}} u okviru stavke biblioteke).
2. Pročitaj listu: svaka stavka biblioteke u modelu sa svojom verzijom u modelu, najnovijom verzijom i statusom: **Aktuelno**, **Novija verzija**, **Povučeno** ili **Nije pronađeno**. Također navodi šta se promijenilo (geometrija, podaci, licenca ili ispravka).
3. Klikni {{ui:Ažuriraj}} u redu, ili {{ui:Ažuriraj sve}}.

## Šta bi trebao vidjeti

- "Ažurirano *n* postavljanja. Mjesta, brojevi stavki, količine i bilješke se čuvaju."
- Redovi "Ažurirano: *stavka*" u listi promjena. {{key:Mod+Z}} poništava svaki.

## Dobro je znati

- Mogu se provjeriti samo stavke koje su došle iz Biblioteke. Stavke iz datoteka nemaju id biblioteke.
- Kada se licenca promijenila, kopija koju si već postavio zadržava licencu sa kojom je došla, dok je ne ažuriraš.
- **Povučena** stavka se ne nudi za nova postavljanja. Ona povučena zbog autorskih prava se uopće ne može preuzeti; zamijeni je sa {{ui:Zamijeni stavku…}}.
- Postavljena varijanta ostaje ta varijanta kada novija verzija stavke još uvijek ima nju; inače preuzima zadanu varijantu stavke.
- Provjera šalje samo ID-ove i verzije stavki, nikada tvoj model.
