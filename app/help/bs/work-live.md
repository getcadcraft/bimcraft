---
title: Rad na jednom modelu zajedno uz Live TeamWork
summary: Šta se mijenja u BimCraft-u dok ste u Live TeamWork sesiji iz CadCraft Studija: izmjene svih na istom IFC modelu, vlastito poništavanje i pridruživanje iz preglednika na istoj mreži.
keywords: live, live teamwork, studio live, zajedno, saradnja, sesija, podijeli uživo, pridruži se, ifc, svojstva, preimenuj, kursor, pokazivač, vidjeti jedni druge, imena, boja, odabir, poništi, domaćin
from: 32061b72
---

## Šta ćete naučiti

Šta se dešava s IFC modelom kad više ljudi istovremeno uređuje isti model. CadCraft Studio pokreće i pridružuje se Live TeamWork sesiji (Podijeli, Pridruži se); ova stranica govori o samom modelu.

## Svi uređuju istovremeno

Model domaćina stiže svima koji se pridruže. Preimenujte elemente, mijenjajte vrijednosti njihovih svojstava, postavljajte, mijenjajte ili uklanjajte stavke biblioteke i elemente kao i obično. Vaše izmjene se vide odmah; izmjene drugih se pojave nakon kratkog vremena nakon što ih naprave. Kad izmjena mijenja ono što vidite (element postavljen ili uklonjen), BimCraft ponovo iscrtava model i zadržava vaš pogled.

- **Dvoje ljudi mijenja jedan element:** kasnija izmjena na istom redu modela pobjeđuje. Skup svojstava koji dijeli više elemenata kopira se za element koji uređujete, kao i uvijek, pa ostali zadržavaju svoje vrijednosti.
- **Element koji je neko upravo uklonio** više se ne može uređivati: vaša izmjena se poništava, a statusna traka kaže zašto.
- Novi redovi modela svake osobe dobijaju vlastite brojeve, pa dvoje ljudi nikad ne dobiju isti.

## Vidite jedni druge

Svako u sesiji ima svoju boju. U 3D prikazu vidite pokazivač svake osobe kao strelicu u njihovoj boji, s imenom pored, na elementu na koji pokazuju, i isprekidani okvir u njihovoj boji oko svakog elementa koji su odabrali.

Pokazivači, imena i odabiri postoje samo za sesiju: nikad se ne spremaju u datoteku niti idu u nečiji poništaj. Glatko se pomjeraju do mjesta gdje je svaka osoba, pa su glatki i na sporoj vezi.

## Poništi samo svoj rad

{{ui:Poništi}} poništava vašu posljednju izmjenu i ostavlja izmjene drugih netaknutima. Kad je neko promijenio istu stvar nakon toga, ništa se ne poništava i statusna traka kaže ko.

## Pridruživanje iz preglednika

Saradnik bez Studija može skenirati sliku ispod koda domaćina telefonom, tabletom ili računarom na istoj mreži. BimCraft se otvara u pregledaču i otvara model domaćina čim vas domaćin pusti unutra. Link za poziv omogućava nekome da se pridruži s druge mreže: domaćin treba licencu Team Cloud Plan za aplikaciju, svi ostali se pridružuju besplatno, a link radi samo dok je sesija domaćina otvorena.

## Kad sesija završi

Samo domaćin sprema model. Svi ostali zadržavaju nespašenu kopiju: koristite Spasi kao IFC ako je želite sačuvati.

:::note
Samo prvi model u sceni se dijeli. Otvaranje druge datoteke tokom sesije ostavlja sesiju u tom prozoru.
:::
