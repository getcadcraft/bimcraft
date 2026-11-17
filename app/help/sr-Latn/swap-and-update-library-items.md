---
title: Zamenite postavljenu stavku i ažurirajte stavke iz biblioteke
summary: Zamenite jednu postavljenu stavku iz biblioteke drugom uz zadržavanje njenog mesta i broja stavke, i proverite u Biblioteci da li postoje novije verzije svega u modelu.
keywords: zamena, zameni, zamenski, ažuriranje, novija verzija, proveri ažuriranja, biblioteka, povučeno, promena licence, broj stavke
from: 8bdfe01d
---

## Šta ćete uraditi

Predomislite se o stavci bez ponovnog pomeranja, i držite stavke iz biblioteke u modelu aktuelnim.

## Zamenite jednu stavku

1. Kliknite postavljenu stavku iz biblioteke u modelu.
2. U {{ui:Svojstva}}, kliknite {{ui:Zameni stavku…}} u polju **Stavka iz biblioteke**. Otvara se kartica {{ui:Biblioteka}}.
3. Pronađite novu stavku i kliknite njenu karticu.
4. Kliknite {{ui:Zameni … ovim}}.

Element zadržava svoje mesto, okretanje, sprat, broj stavke, količinu i beleške. Njegov tip, oblik i podaci stavke se menjaju u novu stavku. Stavke postavljene na isti način dele jedan tip, kao i kad ih postavljate.

Stavka koja ima varijante (pogledajte [Postavite i zamenite stavku iz biblioteke koja ima varijante](topic:library-variants)) navodi svoje druge varijante na vrhu kartice {{ui:Biblioteka}} kad je zamenite: jedan klik za svaku.

Kada je nova stavka druga vrsta stvari, na primer umivaonik umesto stola, IFC klasa elementa se menja da odgovara (ovde sa elementa nameštaja na sanitarni terminal), pa ga drugi softver pravilno uvrštava u specifikacije. Ostaje isti element, sa istim GlobalId, pa veze ka njemu i dalje rade. {{key:Mod+Z}} vraća staru klasu sa starom stavkom.

## Proverite ažuriranja

1. Kliknite {{ui:Ažuriranja}} na traci (ili {{ui:Proveri ažuriranja}} u okviru stavke iz biblioteke).
2. Pročitajte listu: svaka stavka iz Biblioteke u modelu sa svojom verzijom u modelu, najnovijom verzijom i statusom: **Aktuelno**, **Novija verzija**, **Povučeno** ili **Nije pronađeno**. Takođe navodi šta se promenilo (geometrija, podaci, licenca ili ispravka).
3. Kliknite {{ui:Ažuriraj}} u redu, ili {{ui:Ažuriraj sve}}.

## Šta treba da vidite

- „Ažurirano je *n* postavljanja. Mesta, brojevi stavki, količine i beleške se zadržavaju.“
- Redovi „Ažurirano: *stavka*“ u listi promena. {{key:Mod+Z}} opoziva svaki.

## Dobro je znati

- Proveriti se mogu samo stavke koje dolaze iz Biblioteke. Stavke iz datoteka nemaju ID biblioteke.
- Kad se licenca promeni, kopija koju ste već postavili zadržava licencu sa kojom je došla dok je ne ažurirate.
- **Povučena** stavka se ne nudi za nova postavljanja. Ona povučena zbog autorskih prava ne može se uopšte preuzeti; zamenite je sa {{ui:Zameni stavku…}}.
- Postavljena varijanta ostaje ta varijanta kad novija verzija stavke i dalje je ima; inače preuzima podrazumevanu varijantu stavke.
- Provera šalje samo ID-ove i verzije stavki, nikad vaš model.
