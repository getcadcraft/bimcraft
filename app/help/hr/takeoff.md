---
title: Količine za TakeoffCraft
summary: Jednim klikom model šalje količine u TakeoffCraft: zidovi po vrsti, krovovi po nagnutoj površini, sljemena, slijemena i doline, temelji, vrata i prozori, donji ormarići, električni uređaji, površina etaža i popis građe za rezanje, označeni na tlocrtu svake etaže, sa sklopovima paketa struke na stavkama.
keywords: predmjer, procjena količina, predračun, procjena, popis materijala, sastavnica, takeoffcraft, količine, površina zida, površina krova, squares, temelj, beton, cubic yards, popis za rezanje, građa, paket struke, sklop
from: c5a745af
---

## Što ćete napraviti

Pretvorite model u popis materijala i predračun u TakeoffCraftu. BimCraft crta tlocrt svake etaže u standardnom mjerilu, označava svaku količinu na njemu i stavlja predmjer u PDF. TakeoffCraft sam mjeri oznake, pa se svaki broj može provjeriti na listu.

## Slanje

1. Kliknite {{ui:Predmjer}} na traci modela (uz {{ui:Listovi}}).
2. TakeoffCraft se otvara u novoj kartici s tlocrtima. Kad pita, odaberite da otvorite predmjer koji je pronašao u PDF-u.
3. Dodajte svoje cijene u tablicu količina TakeoffCrafta; sklopovi već navode materijale.

:::note
Kad TakeoffCraft ovdje nije dostupan, gumb umjesto toga preuzima PDF. Otvorite ga kasnije u TakeoffCraftu: on u njemu sam pronalazi predmjer.
:::

## Što se mjeri

- **Zidovi** po vrsti i visini: njihove središnje linije kao dionice, s visinom zida na stavci, pa TakeoffCraft daje duljinu i površinu zida. Svaka dionica nosi vrata i prozore zida, pa ih TakeoffCraft jednom oduzima od površine zida, po istom pravilu kao specifikacije u BimCraftu: oboje se slažu za bruto, odbitke i neto. Podaci o obračunu vrste zida (jedinica, žbuka, stopa; vidi [Sklopovi zidova](topic:wall-assemblies)) dolaze kao jedna cijenjena stavka na stavci te vrste. Uz način mjerenja različit od zadanog (vidi [Odabir načina mjerenja](topic:plan-schedules-and-pdf#choose-a-measurement-method)), predmjer nosi taj način, svaka dionica nosi ono što spojevi oduzimaju od njezine strane zida, a TakeoffCraft mjeri istim načinom i imenuje ga. Vrsta čija jedinica ima duljinu i visinu predaje dvije komponente s količinama: jedinice za naručivanje i volumen žbuke, cijenjene kad je stopa po jedinici, po 1000 jedinica ili po m³ žbuke. Broj koji točno padne na cijeli broj može biti za jednu jedinicu veći u TakeoffCraftu, jer predaja zaokružuje položaje na listu.
- **Krovovi**: svaka ravnina krova kao površina s nagibom (TakeoffCraft daje nagnutu površinu), sljemena, slijemena i doline (slijemena i doline duž njihova nagiba), strehe i zabatni rubovi.
- **Temelji**: temelji i zidovi temelja kao dionice oko njihovih sredina, ploče kao površine s debljinom, pa se beton dobije po volumenu.
- **Vrata i prozori** prebrojani po vrsti, s okvirima prozora.
- **Donji ormarići** po duljini njihovih čela.
- **Električni uređaji** prebrojani po vrsti.
- **Površina etaže** svake etaže, iz njezinih prostora.
- **Popis građe za rezanje** iz konstrukcije, prebrojan na vlastitom listu (jedna točka po komadu).

Gdje paket struke ima odgovarajući sklop (vanjski i unutarnji zidovi, ploče, temelji, zidovi temelja, šindra, kapa sljemena i slijemena, doline, strehe, unutarnja vrata, okviri prozora, donji ormarići, utičnice, prekidači, svjetla, razvodne kutije i razvodna ploča), stavka dolazi s njegovim materijalima i formulama. Paketi dolaze bez cijena i još ih nije pregledao procjenitelj.

:::tip
Tlocrti se izrađuju iz modela pri svakom kliku, pa nakon promjene samo ponovno kliknite {{ui:Predmjer}}.
:::
