---
title: Uokvirivanje zidova, podova i krovova
summary: Napravite stubove, rožnjače, nadvratnike, grede, krovne rogove ili rešetke iz modela i zadržite ih uz njega; prave se ponovo kad se zidovi, otvori, podovi ili krov promene, a specifikacija Građa je spisak za sečenje.
keywords: TJI, I-nosač, tablica raspona greda, učitaj tablicu, uokvirivanje, okvir, stub, stubovi, rožnjača, gornja rožnjača, nadvratnik, glavni stub, pomoćni stub, nosač otvora, dopuna, donji venac, prag, blokada, ugao, kalifornijski ugao, T spoj, greda, podna greda, obodna greda, rog, ugaoni rog, ulučni rog, pomoćni rog, sljemenjača, plafonska greda, vezna greda, rešetka, građa, spisak za sečenje, bord-stopa, 2x4, 2x6, razmak, osno rastojanje
from: 76d0ffb5
---

## Šta ćete uraditi

Uokvirite zgradu prema onome što ste nacrtali. BimCraft raspoređuje stubove, rožnjače i nadvratnike u zidovima, grede u podovima i rogove (ili rešetke) u krovu, dimenzioniše ih prema označenim podrazumevanim tablicama, zadržava ih uz model i pravi ih ponovo kad god se ono što uokviruju promeni. Specifikacija **Građa** je spisak za sečenje.

## Uokvirite

1. Na nivou otvorite {{ui:Verzija}} i izaberite {{ui:Konstrukcija}}.
2. Izaberite **razmak** (16" ili 24" osno; 400 ili 600 mm), **uglove** (tri stuba ili kalifornijski), **Rogove** ili **Rešetke** za krovove, i da li zidovi dobijaju red **blokada** na sredini visine. Za podove izaberite **Pilanska građa** ili **TJI (preliminarno)** i podesite pravac greda na automatski, plan X ili plan Y.
3. Kliknite **Uokviri svaki zid** ili kliknite jedan zid, pod ili krov (na nivou na kome krov stoji) da uokvirite samo to.

Isključite **Prikaži konstrukciju** da sakrijete svaki deo konstrukcije, kao sloj; **Providno** sakriva zidove, podove i krovove koji su uokvireni, da biste gledali samo konstrukciju.

## Šta dobijate

- **Zidovi**: donji venac (presečen na vratima), dvostruki gornji venac, stubovi na rasporedu od početka zida, glavni i pomoćni stubovi i nadvratnik na svakim vratima i prozoru, dopune iznad nadvratnika i ispod prozora, gruba prag ispod prozora, uglovi gde se zidovi spajaju (zid koji prolazi uzima uglovne stubove), dva pomoćna stuba gde se drugi zid priključuje, i blokade između stubova.
- **Podovi**: grede preko kraće strane poda po pravilu, ili duž izabrane ose plana; obodne grede oko ivice, i dvostruki dopunski nosači i nadvratnici oko stepeništa, sa gredama koje prolaze kroz njega presečene kraće (krajnje grede). TJI režim bira najmanju navedenu seriju i visinu koja dostiže izmereni svetli raspon pri izabranom razmaku.
- **Krovovi**: obični rogovi upravni na svaki strešni venac, pomoćni rogovi gde ih seku ugaoni i ulučni rogovi, ugaoni i ulučni rogovi, sljemenjače, plafonske grede na rožnjačama i vezne grede — ili jednostavne rešetke na razmaku, po jedan komad svaka.

## Promena

Izaberite bilo koji deo konstrukcije u 3D prikazu ili u stablu modela. **Svojstva** prikazuju njenu konstrukciju: promenite razmak, vrstu i pravac podnih greda, uglove, blokade ili krovnu konstrukciju. Pomeranje zidova, vrata i prozora, ili promena poda ili krova, ponovo pravi konstrukciju sama od sebe.

Da biste zadržali deo koji ste namerno postavili kad se konstrukcija ponovo pravi, izaberite ga i izaberite **Zadrži ovaj deo kad se konstrukcija ponovo napravi**. Zadržani deo ostaje gde jeste; kad se konstrukcija oko njega promeni, biva obeležen da ga proverite.

## TJI podovi iz tablice koju učitate

BimCraft ne nosi tablice raspona greda proizvođača (one su proizvođačeve i menjaju se sa svakim izdanjem). Izaberite konstrukciju poda, postavite **Podne grede** na **TJI (preliminarno)** i izaberite **Učitaj tablicu…** u **Svojstvima**: datoteka u formatu `cadcraft-tji-table`, JSON ili CSV, koju ste napravili iz aktuelnih tablica raspona proizvođača. Ona navodi proizvođača, proizvod i izdanje, i odakle su brojevi, i za svaki slučaj opterećenja (korisno opterećenje, stalno opterećenje, granica progiba, dužina oslanjanja) navodi najveći svetli raspon svake serije i visine pri svakom razmaku.

- BimCraft uzima **svetli raspon** poda, bira najplići visinu, i unutar nje seriju čiji navedeni raspon ga dostiže za razmak i slučaj opterećenja koje ste izabrali, pa pod uokviruje njome. Ako je raspon ili razmak van tablice, to kaže i ništa ne menja.
- Opterećenja, granica progiba, dužina oslanjanja, tablica i rečenica „Preliminarno uputstvo za raspored; konačan izbor zahteva tablice proizvođača i opterećenja projekta” štampaju se na specifikaciji Građa, upisuju se u model sa konstrukcijom i navode se u panelu **Problemi** kao napomena. Tablica označena kao primer to kaže u upozorenju.
- Sa uključenim dodatkom **Građevinski propisi**, njegovo pravilo za podne grede takođe čita učitanu tablicu; bez tablice TJI grede se izostavljaju iz te provere, kao i ranije.
- Tablica ostaje u ovom pregledaču dok je ne obrišete ili ne učitate drugu. Datoteka: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: inči, stope, psf; ili `metric`: mm, metri, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) i `rows` (`series`, `depth`, `spans`: za svaki id slučaja, razmak i najveći svetli raspon, kao `"16": "15-6"`). U CSV-u iste činjenice su redovi `# ključ = vrednost`, zatim `series,depth,case,spacing,span`.
- Bez učitane tablice, TJI raspored se odbija i ništa se ne menja: **Učitajte TJI tablicu: tablice proizvođača su njihove i nisu ugrađene.** Model uokviren starijom ugrađenom TJI tablicom (pre ove promene) zadržava svaku gredu koju ima; Svojstva i Problemi kažu da je tablica potrebna, a pod se može ponovo uokviriti kad učitate jednu. Grede od pilanske građe rade kao i ranije.

Ovo je smernica za raspored. Konačan izbor greda zahteva tablice proizvođača, opterećenja projekta i inženjera.

## Spisak za sečenje

U panelu Specifikacije izaberite **Građa**: svaki deo konstrukcije grupisan po veličini i po standardnoj dužini koju biste kupili (cele dužine u koracima od 2' počevši od 8'; u milimetrima, koraci od 600 mm počevši od 2400 mm), sa brojem komada i bord-stopama. **CSV** ga preuzima.

:::warning
Visine nadvratnika, greda, rogova i plafonskih greda dolaze iz označenih podrazumevanih tablica za tipičnu jednospratnu ili dvospratnu kuću, a ne iz inženjerskog proračuna. **Svojstva** kažu kad je raspon ili otvor van svoje tablice. Projektant ili inženjer proverava raspone, opterećenja i veze.

TJI rasporedi koriste samo tablicu koju učitate, koju pravite od aktuelnih tablica raspona proizvođača; BimCraft ne isporučuje nijednu. Predlog ne proverava oslanjanje, tačkasta opterećenja, konzole, otvore, nadvratnike stepeništa ili veze, a I oblik u modelu je šematski.
:::

## Šta se čuva

Svaki uokviren zid, pod ili krov je IFC sklop elemenata („Framing”) sastavljen od elemenata (stubovi, rožnjače, rogovi, vezne grede, blokade, rešetke) i greda (nadvratnici, grede, obodne grede, sljemenjače), svaki sa svojom veličinom, dužinom i bord-stopama.
