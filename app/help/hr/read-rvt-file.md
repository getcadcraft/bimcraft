---
title: Čitanje datoteke projekta ili obitelji
summary: Otvorite datoteku .rvt, .rfa, .rte ili .rft i pročitajte njezino izdanje, zajednički rad, podatke o projektu, parametre obitelji, veze i pregledni prikaz, bez programa koji ju je napravio.
keywords: rvt, rfa, rte, rft, datoteka projekta, obitelj, izdanje, verzija, koja verzija, build, zajednički rad, središnji model, podaci o projektu, pregled, sličica, veze
from: df3600e1
---

## Što ćete raditi

Saznati što je u datoteci projekta ili obitelji bez otvaranja u Revitu: koje ju je izdanje spremilo, je li zajednički rađena, podatke o projektu i na što se veže. Korisno kad datoteka stigne od nekoga i trebate znati u kojem izdanju je otvoriti.

## Koraci

1. Kliknite {{ui:Odaberi datoteku}}.
2. Odaberite datoteku `.rvt`, `.rfa`, `.rte` ili `.rft`.
3. Pričekajte trenutak. Statusni redak kaže „Čitanje datoteke…“, a zatim „Otvoreno *naziv datoteke*“.
4. Pogledajte vrh kartice: pregledna slika spremljena u datoteci, vrsta datoteke i izdanje u kojem je spremljena te naziv projekta.
5. Pomaknite se dolje da pročitate odjeljke kartice.

## Što biste trebali vidjeti

Kartica u sredini, s ovim odjeljcima kad ih datoteka ima:

| Odjeljak | Što vam govori |
|---|---|
| Datoteka | Naziv datoteke, veličina, vrsta (projekt, predložak projekta, obitelj ili predložak obitelji), izdanje i build u kojem je spremljena, zajednički rad, putanja središnjeg modela, gdje je zadnji put spremljena, tko ju je spremio, lokalizacija i GUID dokumenta |
| Podaci o projektu | Polja samog projekta, kao naziv, broj, naručitelj, adresa i status. Polja koja su još na zadanim vrijednostima novog projekta se izostavljaju. |
| Obitelj, Obitelj: … | Za obitelj: naziv, kategorija, izdanje, zadnje ažuriranje i njezini parametri, skupina po skupini |
| Povezane i referencirane datoteke | Svaki povezani model, CAD veza, slika i tablica napomena na koje datoteka upućuje, s njezinom spremljenom putanjom |

Na lijevoj strani, panel {{ui:Datoteka}} ponavlja ključne činjenice i dodaje **Pročitano**: koliko datoteke je BimCraft zapravo pročitao, obično oko 40 KB datoteke koja je veličine mnogo megabajta. Na desnoj strani, panel {{ui:Svojstva}} kaže da svojstva elemenata trebaju 3D model.

## Zašto nema 3D-a

3D model i elementi unutar datoteke projekta pohranjeni su u nedokumentiranom formatu. BimCraft čita samo dijelove datoteke koji su dokumentirani ili jasno čitljivi: podatke o datoteci, podatke o projektu, podatke o obitelji, popis veza i pregledni prikaz. Ne nagađa ostalo. Da vidite model u 3D-u i pročitate svojstva elemenata, izvezite IFC iz programa koji je napravio datoteku. Vidi [Prikaz datoteke projekta u 3D-u kroz IFC](topic:rvt-to-ifc).

## Česte pogreške

- **Očekivati 3D.** Vidi gore.
- **Veze pokazuju samo spremljenu putanju.** Datoteka otvorena sama ne može provjeriti postoje li njezine veze. Otvorite umjesto toga mapu u kojoj živi, pa BimCraft označi svaku vezu kao pronađenu ili nepronađenu: [Otvaranje cijele mape projekta](topic:open-project-folder).
- **„This file is incomplete…“** Datoteka je prekinuta dok je kopirana, učitavana ili sinkronizirana. I datoteka u oblaku koja je još „samo online“ to radi. BimCraft je ipak otvara i prikazuje samo ono što je oporavljeno: jantarna obavijest na vrhu kartice, odjeljak **Oporavljeno iz ove datoteke** s dijelovima čiji su svi bajtovi u datoteci, i **Nije u datoteci** za ostalo. Ništa se ne popunjava za nedostajući dio, pa izdanje, pregledna slika ili podaci o projektu mogu nedostajati kad su bili pohranjeni nakon točke prekida. Ako je prekinut i sam popis sadržaja datoteke, ništa se ne može otvoriti. Kopirajte original ponovo i ponovo ga otvorite za cijelu datoteku.
- **„No preview picture in this file“.** Neke datoteke se spremaju bez nje. To je normalno.
- **Otvaranje sigurnosne kopije greškom.** Datoteke nazvane poput `Tower.0004.rvt` su numerirane sigurnosne kopije. Otvaranje mape grupira ih s njihovim modelom.
