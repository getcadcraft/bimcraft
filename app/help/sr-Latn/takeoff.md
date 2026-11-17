---
title: Količine za TakeoffCraft
summary: Jedan klik šalje količine modela u TakeoffCraft: zidovi po tipu, krovovi po nagnutoj površini, slemena, kosine i ulegnuća, temelji, vrata i prozori, ormani, električni uređaji, površina poda i lista rezanja građe, obeleženi na planu svakog nivoa, sa sklopovima paketa zanata na stavkama.
keywords: predmer, količine, predračun, predračunavanje, lista materijala, spisak materijala, takeoffcraft, količine, površina zida, površina krova, kvadrati, temelj, beton, kubni jardi, lista rezanja, građa, paket zanata, sklop
from: c5a745af
---

## Šta ćete uraditi

Pretvorite model u listu materijala i predračun u TakeoffCraft. BimCraft crta plan svakog nivoa u standardnoj razmeri, obeležava svaku količinu na njemu i stavlja predmer unutar PDF-a. TakeoffCraft sam meri oznake, pa se svaki broj može proveriti na listu.

## Pošaljite

1. Kliknite {{ui:Predmer}} na traci modela (pored {{ui:Listovi}}).
2. TakeoffCraft se otvara u novoj kartici sa planovima. Kad pita, izaberite da otvorite predmer koji je pronašao u PDF-u.
3. Dodajte svoje cene u tabelu količina u TakeoffCraft-u; sklopovi već navode materijale.

:::note
Kad TakeoffCraft nije dostupan ovde, dugme umesto toga preuzima PDF. Otvorite ga kasnije u TakeoffCraft-u: on pronalazi predmer unutar njega.
:::

## Šta se meri

- **Zidovi** po tipu i visini: njihove središnje linije kao deonice, sa visinom zida na stavci, pa TakeoffCraft daje dužinu i površinu zida. Svaka deonica nosi vrata i prozore tog zida, pa ih TakeoffCraft jednom oduzima od površine zida, po istom pravilu kao BimCraft-ove specifikacije: oba se slažu za bruto, odbitke i neto. Podaci o predmeru tipa zida (jedinica, malter, cena; pogledajte [Sklopovi zidova](topic:wall-assemblies)) dolaze kao jedna cenovna stavka na stavci tog tipa. Pod metodom merenja različitim od podrazumevanog (pogledajte [Izaberite metod merenja](topic:plan-schedules-and-pdf#choose-a-measurement-method)), predmer nosi metod, svaka deonica nosi ono što spojevi oduzimaju sa njenog lica zida, a TakeoffCraft meri istim metodom i imenuje ga. Tip čija jedinica ima dužinu i visinu predaje dve komponente sa količinama: jedinice za naručivanje i zapreminu maltera, cenjene kad je cena tipa po jedinici, po 1000 jedinica ili po m³ maltera. Broj koji tačno padne na ceo broj može biti za jednu jedinicu veći u TakeoffCraft-u, jer predaja zaokružuje pozicije na listu.
- **Krovovi**: svaka ravan krova kao površina sa svojim nagibom (TakeoffCraft daje nagnutu površinu), slemena, kosine i ulegnuća (kosine i ulegnuća duž njihovog nagiba), strehe i zabati.
- **Temelji**: temelji i zidovi temelja kao deonice koje prolaze kroz svoje sredine; ploče kao površine sa svojom debljinom, pa se beton dobija po zapremini.
- **Vrata i prozori** prebrojani po tipu, sa okvirom prozora.
- **Donji ormani** po dužini njihovih prednjih strana.
- **Električni uređaji** prebrojani po vrsti.
- **Površina poda** svakog nivoa, iz njegovih prostorija.
- **Lista rezanja građe** iz konstrukcije, prebrojana na listu sopstvene (jedna tačka po komadu).

Tamo gde paket zanata ima odgovarajući sklop — spoljašnji i unutrašnji zidovi, ploče, temelji, zidovi temelja, šindra, kapa slemena i kosina, ulegnuća, strehe, unutrašnja vrata, okvir prozora, donji ormani, utičnice, prekidači, svetiljke, razvodne kutije i razvodna tabla — stavka dolazi sa svojim materijalima i formulama. Paketi dolaze bez cena i još ih nijedan procenitelj nije pregledao.

:::tip
Planovi se prave iz modela svaki put kad kliknete, pa posle promene samo ponovo kliknite {{ui:Predmer}}.
:::
