---
title: Čitanje datoteke projekta ili familije
summary: Otvorite datoteku .rvt, .rfa, .rte ili .rft i pročitajte njeno izdanje, deljeni rad, podatke o projektu, parametre familije, veze i sliku pregleda, bez programa koji ju je napravio.
keywords: rvt, rfa, rte, rft, datoteka projekta, familija, izdanje, verzija, koja verzija, build, deljeni rad, centralni model, podaci o projektu, pregled, sličica, veze
from: df3600e1
---

## Šta ćete uraditi

Saznajte šta je u datoteci projekta ili familije bez otvaranja u Revit-u: koje izdanje ju je sačuvalo, da li je u deljenom radu, koji su podaci o projektu i na šta se povezuje. Korisno kad datoteka stigne od nekoga pa treba da znate u kom izdanju da je otvorite.

## Koraci

1. Kliknite {{ui:Izaberi datoteku}}.
2. Izaberite datoteku `.rvt`, `.rfa`, `.rte` ili `.rft`.
3. Sačekajte trenutak. Statusna linija kaže „Čitam datoteku…“, a zatim „Otvoreno: *naziv datoteke*“.
4. Pogledajte vrh kartice: sliku pregleda sačuvanu u datoteci, vrstu datoteke i izdanje u kojem je sačuvana, i naziv projekta.
5. Skrolujte nadole da pročitate odeljke kartice.

## Šta treba da vidite

Kartica u sredini, sa ovim odeljcima kad ih datoteka sadrži:

| Odeljak | Šta vam govori |
|---|---|
| Datoteka | Naziv, veličina, vrsta (projekat, šablon projekta, familija ili šablon familije), izdanje i build u kojem je sačuvana, deljeni rad, putanja centralnog modela, gde je poslednji put sačuvana, ko ju je sačuvao, jezik i GUID dokumenta |
| Podaci o projektu | Sopstvena polja projekta, kao što su naziv, broj, klijent, adresa i status. Polja koja su još na podrazumevanim vrednostima novog projekta su izostavljena. |
| Familija, Familija: … | Za familiju: njen naziv, kategorija, izdanje, poslednje ažuriranje i njeni parametri, grupu po grupu |
| Povezane i referencirane datoteke | Svaki povezani model, CAD veza, slika i tabela ključnih napomena na koje datoteka ukazuje, sa svojom sačuvanom putanjom |

Levo, panel {{ui:Datoteka}} ponavlja ključne činjenice i dodaje **Pročitano**: koliko datoteke je BimCraft zaista pročitao, obično oko 40 KB datoteke veličine mnogo megabajta. Desno, panel {{ui:Svojstva}} kaže da svojstva elemenata zahtevaju 3D model.

## Zašto nema 3D

3D model i elementi unutar datoteke projekta sačuvani su u nedokumentovanom formatu. BimCraft čita samo delove datoteke koji su dokumentovani ili jasno čitljivi: podatke o datoteci, podatke o projektu, podatke o familiji, spisak veza i sliku pregleda. Ostalo ne pogađa. Da vidite model u 3D i pročitate svojstva elemenata, izvezite IFC iz programa koji je napravio datoteku. Pogledajte [Dobijanje datoteke projekta u 3D preko IFC-a](topic:rvt-to-ifc).

## Česte greške

- **Očekivanje 3D prikaza.** Pogledajte iznad.
- **Veze prikazuju samo sačuvanu putanju.** Datoteka otvorena sama ne može da proveri da li njene veze postoje. Umesto toga otvorite fasciklu u kojoj se nalazi; BimCraft tada označava svaku vezu kao nađenu ili ne: [Otvaranje cele fascikle projekta](topic:open-project-folder).
- **„Ova datoteka je nepotpuna…“** Datoteka je prekinuta dok je kopirana, otpremana ili sinhronizovana. I datoteka na oblaku koja je još „samo na mreži“ tako se ponaša. BimCraft ipak otvara datoteku i prikazuje samo ono što je oporavljeno: upozorenje u jantarnoj boji na vrhu kartice, odeljak **Oporavljeno iz ove datoteke** sa delovima čiji su svi bajtovi u datoteci, i **Nije u datoteci** za ostalo. Ništa se ne popunjava za nedostajući deo, pa izdanje, slika pregleda ili podaci o projektu mogu nedostajati kad su sačuvani iza mesta prekida. Ako je prekinut i sam spisak sadržaja datoteke, ništa se ne može otvoriti. Ponovo kopirajte original i otvorite ga za celu datoteku.
- **„Nema slike pregleda u ovoj datoteci“.** Neke datoteke se čuvaju bez nje. To je normalno.
- **Otvaranje rezervne kopije greškom.** Datoteke nazvane kao `Tower.0004.rvt` su numerisane rezervne kopije. Otvaranje fascikle ih grupiše uz njihov model.
