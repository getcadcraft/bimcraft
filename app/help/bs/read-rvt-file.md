---
title: Čitanje projektne ili porodične datoteke
summary: Otvorite .rvt, .rfa, .rte ili .rft datoteku i pročitajte njeno izdanje, zajednički rad, informacije o projektu, parametre porodice, veze i sliku pregleda, bez programa u kojem je nastala.
keywords: rvt, rfa, rte, rft, datoteka projekta, porodica, izdanje, verzija, koja verzija, build, zajednički rad, centralni model, informacije o projektu, pregled, sličica, veze
from: df3600e1
---

## Šta ćete uraditi

Saznati šta je u projektnoj ili porodičnoj datoteci bez otvaranja u Revit-u: koje ju je izdanje sačuvalo, da li je u zajedničkom radu, informacije o projektu i na šta se povezuje. Korisno kad datoteka stigne od nekoga i treba znati u kojem izdanju je otvoriti.

## Koraci

1. Kliknite {{ui:Odaberi datoteku}}.
2. Izaberite `.rvt`, `.rfa`, `.rte` ili `.rft` datoteku.
3. Sačekajte trenutak. Statusna linija kaže "Čitam datoteku…", a zatim "Otvoreno *naziv datoteke*".
4. Pogledajte vrh kartice: sliku pregleda sačuvanu u datoteci, vrstu datoteke i izdanje u kojem je sačuvana, te naziv projekta.
5. Skrolujte dolje da pročitate odjeljke kartice.

## Šta treba da vidite

Kartica u sredini, s ovim odjeljcima kad ih datoteka ima:

| Odjeljak | Šta vam kaže |
|---|---|
| Datoteka | Naziv datoteke, veličina, vrsta (projekat, šablon projekta, porodica ili šablon porodice), izdanje i build u kojem je sačuvana, zajednički rad, putanja centralnog modela, gdje je zadnji put sačuvana, ko ju je sačuvao, jezik i GUID dokumenta |
| Informacije o projektu | Polja projekta, kao naziv, broj, klijent, adresa i status. Polja koja su još na podrazumijevanim vrijednostima novog projekta su izostavljena. |
| Porodica, Porodica: … | Za porodicu: naziv, kategorija, izdanje, zadnje ažuriranje i njeni parametri, grupu po grupu |
| Povezane i referencirane datoteke | Svaki povezani model, CAD veza, slika i tabela ključnih napomena na koje datoteka ukazuje, sa sačuvanom putanjom |

Lijevo, panel {{ui:Datoteka}} ponavlja ključne činjenice i dodaje **Pročitano**: koliko datoteke je BimCraft stvarno pročitao, obično oko 40 KB od datoteke veličine više megabajta. Desno, panel {{ui:Svojstva}} kaže da svojstva elemenata trebaju 3D model.

## Zašto nema 3D

3D model i elementi unutar projektne datoteke su sačuvani u nedokumentovanom formatu. BimCraft čita samo dijelove datoteke koji su dokumentovani ili jasno čitljivi: podatke o datoteci, informacije o projektu, podatke o porodici, spisak veza i sliku pregleda. Ostalo ne pogađa. Da vidite model u 3D i pročitate svojstva elemenata, izvezite IFC iz programa u kojem je datoteka nastala. Vidi [Dobijanje projektne datoteke u 3D kroz IFC](topic:rvt-to-ifc).

## Česte greške

- **Očekivanje 3D.** Vidi gore.
- **Veze pokazuju samo sačuvanu putanju.** Datoteka otvorena sama ne može provjeriti postoje li njene veze. Otvorite umjesto toga folder u kojem se nalazi, pa BimCraft označi svaku vezu kao nađenu ili nenađenu: [Otvaranje cijelog foldera projekta](topic:open-project-folder).
- **"Ova datoteka je nepotpuna…"** Datoteka je prekinuta pri kopiranju, otpremanju ili sinhronizaciji. Tako se ponaša i datoteka u oblaku koja je još "Samo na mreži". BimCraft je ipak otvara i prikazuje samo ono što je povraćeno: žuto upozorenje na vrhu kartice, odjeljak **Oporavljeno iz ove datoteke** s dijelovima čiji je svaki bajt u datoteci, i **Nije u datoteci** za ostalo. Ništa se ne popunjava za nedostajući dio, pa izdanje, slika pregleda ili informacije o projektu mogu nedostajati kad su sačuvani iza mjesta prekida. Ako je prekinut i sam spisak sadržaja datoteke, ništa se ne može otvoriti. Ponovo kopirajte original i otvorite ga za punu datoteku.
- **"Nema slike pregleda u ovoj datoteci".** Neke datoteke su sačuvane bez nje. To je normalno.
- **Otvaranje sigurnosne kopije greškom.** Datoteke nazvane kao `Tower.0004.rvt` su numerisane sigurnosne kopije. Otvaranje foldera ih grupiše s njihovim modelom.
