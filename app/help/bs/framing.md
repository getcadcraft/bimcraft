---
title: Konstrukcija zidova, podova i krovova
summary: Generišite stubove, ramu, nadvoje, grede, rogove ili rešetke iz modela i čuvajte ih uz njega; prave se iznova kad se zidovi, otvori, podovi ili krov promijene, a specifikacija građe je lista za rezanje.
keywords: TJI, I-greda, tabela raspona greda, učitaj tabelu, konstrukcija, okvir, stub, rama, gornja rama, nadvoj, glavni stub, pomoćni stub, okvirna greda, kratki stub, podprozornik, blokiranje, ugao, kalifornijski ugao, T-spoj, greda, obodna greda, rog, ugaoni rog, dolinski rog, sljeme, greda plafona, vezna greda, rešetka, građa, lista za rezanje, board feet, razmak, osni razmak, 2x4, 2x6
from: 76d0ffb5
---

## Šta ćete uraditi

Konstruišite zgradu prema onome što ste nacrtali. BimCraft raspoređuje stubove, ramu i nadvoje u zidovima, grede u podovima i rogove (ili rešetke) u krovu, dimenzioniše ih prema označenim zadanim tabelama, čuva ih uz model i pravi ih iznova kad god se promijeni ono što uokviruju. Specifikacija **Građa** je lista za rezanje.

## Konstruišite

1. Na nivou otvorite {{ui:Verzija}} i izaberite {{ui:Konstrukcija}}.
2. Izaberite **razmak** (16" ili 24" osno; 400 ili 600 mm), **uglove** (trostubni ili kalifornijski), **Rogovi** ili **Rešetke** za krovove, i da li zidovi dobijaju red **blokiranja** na pola visine. Za podove izaberite **Obična građa** ili **TJI (preliminarno)** i postavite smjer greda na automatski, plan X ili plan Y.
3. Kliknite **Konstruiši svaki zid**, ili kliknite jedan zid, pod ili krov (na nivou na kojem stoji krov) da konstruišete samo to.

Isključite **Prikaži konstrukciju** da sakrijete sve konstrukcijske dijelove, kao sloj; **Prozirno** sakriva zidove, podove i krovove koji imaju konstrukciju, da biste vidjeli samu konstrukciju.

## Šta dobijate

- **Zidovi**: donja rama (isječena na vratima), dvostruka gornja rama, stubovi na rasporedu od početka zida, glavni i pomoćni stubovi i nadvoj na svim vratima i prozorima, kratki stubovi iznad nadvoja i ispod prozora, grubi podprozornik ispod prozora, uglovi gdje se zidovi sastaju (zid koji prolazi preuzima uglovne stubove), dva pojačana stuba gdje se drugi zid uvezuje, i blokiranje između stubova.
- **Podovi**: grede preko kraće strane poda kao zadano, ili duž izabrane osi plana; obodne grede oko ivice, a udvostručene okvirne grede i nadvoji oko stepenišnog otvora, s gredama koje prolaze kroz njega isječenim kraće (repne grede). TJI režim bira najmanju navedenu seriju i visinu koja dosegne izmjereni svijetli raspon pri izabranom razmaku.
- **Krovovi**: obični rogovi okomito na svaku strehu, pomoćni rogovi gdje ih četverovodi i doline režu, ugaoni i dolinski rogovi, sljemene daske, grede plafona na ramama i vezne grede — ili jednostavne rešetke na razmaku, po jedan komad svaka.

## Promjena

Odaberite bilo koji konstrukcijski dio u 3D prikazu ili stablu modela. **Svojstva** prikazuju njegovu konstrukciju: promijenite razmak, vrstu i smjer podnih greda, uglove, blokiranje ili krovnu konstrukciju. Pomjeranje zidova, vrata i prozora, ili promjena poda ili krova, ponovo pravi konstrukciju sama od sebe.

Da zadržite dio koji ste postavili namjerno kad se konstrukcija ponovo pravi, odaberite ga i izaberite **Zadrži ovaj dio kad se konstrukcija ponovo napravi**. Zadržani dio ostaje gdje jeste; kad se konstrukcija oko njega promijeni, označen je da ga možete provjeriti.

## TJI podovi iz tabele koju učitate

BimCraft ne nosi tabele raspona proizvođača greda (one su proizvođačeve i mijenjaju se s svakim izdanjem). Izaberite konstrukciju poda, postavite **Podne grede** na **TJI (preliminarno)** i izaberite **Učitaj tabelu…** u **Svojstvima**: datoteku u formatu `cadcraft-tji-table`, JSON ili CSV, koju ste napravili iz aktuelnih tabela raspona proizvođača. Ona navodi proizvođača, proizvod i izdanje, i odakle su brojevi, te za svaki slučaj opterećenja (korisno opterećenje, stalno opterećenje, granicu progiba, dužinu oslonca) navodi najveći svijetli raspon svake serije i visine pri svakom razmaku.

- BimCraft uzima **svijetli raspon** poda, bira najplići visinu i u njoj seriju čiji navedeni raspon ga dosiže za razmak i slučaj opterećenja koje ste izabrali, pa konstruiše pod njome. Ako je raspon ili razmak van tabele, to kaže i ništa ne mijenja.
- Opterećenja, granica progiba, dužina oslonca, tabela i rečenica „Preliminarne smjernice za raspored; konačni izbor zahtijeva tabele proizvođača i projektna opterećenja“ štampaju se na specifikaciji građe, upisuju se u model s konstrukcijom i navode se na panelu **Problemi** kao napomena. Tabela označena kao primjer to kaže u upozorenju.
- Uz dodatak **Građevinski propisi** uključen, njegovo pravilo za podne grede također čita učitanu tabelu; bez tabele TJI grede se izostavljaju iz te provjere, kao i ranije.
- Tabela ostaje u ovom pregledaču dok je ne obrišete ili ne učitate drugu. Datoteka: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: inči, stope, psf; ili `metric`: mm, metri, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) i `rows` (`series`, `depth`, `spans`: za svaki id slučaja, razmak i najveći svijetli raspon, na primjer `"16": "15-6"`). U CSV-u iste činjenice su redovi `# ključ = vrijednost`, pa zatim `series,depth,case,spacing,span`.
- Bez učitane tabele, TJI raspored se odbija i ništa se ne mijenja: **Učitajte TJI tabelu: tabele proizvođača su njihove i nisu ugrađene.** Model konstruisan starijom ugrađenom TJI tabelom (prije ove promjene) zadržava svaku gredu koju ima; Svojstva i Problemi kažu da je tabela potrebna, a pod se može ponovo konstruisati kad učitate jednu. Grede od masivnog rezanog drveta rade kao i prije.

Ovo je smjernica za raspored. Konačni izbor greda zahtijeva tabele proizvođača, projektna opterećenja i inženjera.

## Specifikacija građe

U panelu **Specifikacije** izaberite **Građa**: svaki konstrukcijski dio grupisan po veličini i po standardnoj dužini koju biste kupili (cijele dužine od 2' počevši od 8'; koraci od 600 mm za milimetarske modele), s brojem komada i board feet. **CSV** preuzima listu.

:::warning
Veličine rame, greda, rogova i greda plafona dolaze iz označenih zadanih tabela za tipičnu jednospratnu ili dvospratnu kuću, a ne iz proračuna. **Svojstva** kažu kad je raspon ili otvor van njihove tabele. Projektant ili inženjer provjerava raspone, opterećenja i spojeve.

Rasporedi TJI koriste samo tabelu koju učitate, koju pravite iz aktuelnih tabela raspona proizvođača; BimCraft ne isporučuje nijednu. Prijedlog ne provjerava oslonac, koncentrisana opterećenja, konzole, otvore, nadvoje stepenišnog otvora ili spojeve, a I-profil modela je šematski.
:::

## Šta se čuva

Svaki konstruisani zid, pod ili krov je IFC sklop elemenata ("Framing") od IFC elemenata (stubovi, rama, rogovi, vezne grede, blokiranje, rešetke) i greda (nadvoji, grede, obodne grede, sljemene daske), svaki sa svojom veličinom, dužinom i board feet.
