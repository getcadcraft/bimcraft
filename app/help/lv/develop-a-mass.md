---
title: "Izstrādājiet ēkas masu no teritorijas izpētes"
summary: "Paņemiet ēkas masu, kas izpētīta CivilCraft teritorijas skatā, un izstrādājiet to līmeņos, sienās un grīdās, saglabājot teritorijas vietu kartē."
keywords: "masa, ēkas masa, masas veidošana, teritorijas izpēte, izstrādāt, CivilCraft, nodot, līmeņi, sienas, grīdas, pamatne, georeferencēšana, IFC"
from: 557b94d1
---

CivilCraft teritorijas skats var zīmēt ēku masas zemes gabalā un pārbaudīt tās pret zemi, ierakstītajām robežām un sauli. **Izstrādāt BimCraft** tur atver BimCraft jaunā cilnē ar masām; **Masas kā IFC** saglabā tās kā failu, ko šeit atverat parastajā veidā. Abos gadījumos katra masa nonāk kā teritorija, ēka ar vienu līmeni katram stāvam un viens bloks (pati masa), kas nes savus skaitļus.

## Masas izstrāde

1. Izvēlieties masu 3D skatā. Īpašībās redzama tās izmantošana, stāvi un stāva augstums, pamatne, bruto grīdas platība, kā tā novietota uz nogāzes un tās zemes gabals.
2. Noklikšķiniet uz **Izstrādāt šo masu**.

Vienā atsaukšanas solī katram šīs ēkas līmenim tiek pievienotas sienas ap pamatni (pamatne ir sienu ārējā virsma; katra siena sniedzas līdz augstāk esošajam līmenim, un augstākā ir viena stāva augsta), kā arī grīda visas ēkas zem. Bloks tiek aizstāts, un ēka saglabā pētījuma skaitļus īpašību kopā `CadCraft_SiteMass`, atzīmētā kā izstrādāta. Jumta nav: jumts ir atkarīgs no projekta.

## Teritorijas novietojums

Fails no CivilCraft ir rakstīts projekta paša garuma vienībās un, ja CivilCraft projektam bija koordinātu sistēma, tiek nests kā projekta kartes pārvēršana. Masas izstrāde to neskar, tāpēc ēka paliek vietā, kur to rāda karte.
