---
title: Količine za TakeoffCraft
summary: Jedan klik šalje količine modela u TakeoffCraft — zidove po tipu, krovove po nagnutoj površini, slemena, kose grebene i žlijebove, temelje, vrata i prozore, ormariće, električne uređaje, površinu poda i listu za rezanje građe — označene na planu svakog nivoa, sa sklopovima paketa zanata na stavkama.
keywords: predmjer, količinski predmjer, predračun, procjena, procjenjivanje, lista materijala, specifikacija materijala, takeoffcraft, količine, površina zida, površina krova, kvadrati, temelj, beton, kubni metri, lista za rezanje, građa, paket zanata, sklop
from: c5a745af
---

## Šta ćeš uraditi

Pretvori model u listu materijala i predračun u TakeoffCraft. BimCraft crta plan svakog nivoa u standardnoj razmjeri, označava svaku količinu na njemu i stavlja predmjer unutar PDF-a. TakeoffCraft sam mjeri oznake, pa se svaki broj može provjeriti na listu.

## Pošalji

1. Klikni {{ui:Predmjer}} na traci modela (pored {{ui:Listovi}}).
2. TakeoffCraft se otvara u novoj kartici sa planovima. Kada pita, odaberi da otvori predmjer koji je pronašao u PDF-u.
3. Dodaj svoje cijene u tabelu količina u TakeoffCraft-u; sklopovi već navode materijale.

:::note
Kada TakeoffCraft nije dostupan ovdje, dugme umjesto toga preuzima PDF. Kasnije ga otvori u TakeoffCraft-u: on sam pronalazi predmjer unutra.
:::

## Šta se mjeri

- **Zidovi** po tipu i visini: njihove osne linije kao dionice, sa visinom zida na stavci, pa TakeoffCraft daje dužinu i površinu zida. Svaka dionica nosi vrata i prozore zida, pa ih TakeoffCraft jednom oduzima od površine zida, po istom pravilu kao specifikacije u BimCraftu: oba se slažu za bruto, odbitke i neto. Podaci za predmjer tipa zida (jedinica, malter, cijena; vidi [Sklopovi zida](topic:wall-assemblies)) dolaze kao jedna cijenjena stavka na stavci tog tipa. Pod metodom mjerenja različitom od zadane (vidi [Izaberi metodu mjerenja](topic:plan-schedules-and-pdf#choose-a-measurement-method)), predmjer nosi metodu, svaka dionica nosi ono što spojevi odmjeravaju sa njene površine zida, a TakeoffCraft mjeri po istoj metodi i imenuje je. Tip čija jedinica ima dužinu i visinu predaje dvije komponente sa količinama: jedinice za naručivanje i zapreminu maltera, cijenjene kada je cijena tipa po jedinici, po 1000 jedinica ili po m³ maltera. Broj koji tačno padne na cijeli broj može biti za jednu jedinicu veći u TakeoffCraft-u, jer predaja zaokružuje pozicije na listu.
- **Krovovi**: svaka ravan krova kao površina sa svojim nagibom (TakeoffCraft daje nagnutu površinu), slemena, kosi grebeni i žlijebovi (kosi grebeni i žlijebovi duž svog nagiba), strehe i zabatne ivice.
- **Temelji**: temelji i zidovi temelja kao dionice oko svojih sredina, ploče kao površine sa svojom debljinom, pa se beton dobija po zapremini.
- **Vrata i prozori** brojani po tipu, sa okvirima prozora.
- **Donji ormarići** po dužini njihovih prednjih strana.
- **Električni uređaji** brojani po vrsti.
- **Površina poda** svakog nivoa, iz njegovih prostorija.
- **Lista za rezanje građe** iz skele, brojana na zasebnom listu (jedna tačka po komadu).

Gdje paket zanata ima odgovarajući sklop — vanjski i unutrašnji zidovi, ploče, temelji, zidovi temelja, šindra, sljeme i kosi greben, žlijebovi, strehe, unutrašnja vrata, okviri prozora, donji ormarići, utičnice, prekidači, svjetla, razvodne kutije i razvodni ormar — stavka dolazi sa svojim materijalima i formulama. Paketi dolaze bez cijena i još ih nijedan procjenitelj nije pregledao.

:::tip
Planovi se prave iz modela svaki put kad klikneš, pa nakon promjene samo ponovo klikni {{ui:Predmjer}}.
:::
