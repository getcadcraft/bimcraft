---
title: Okvirna konstrukcija zidova, podova i krovova
summary: Generirajte stupiće, rubnike, nadvoje, podne nosače, rogove ili rešetke iz modela i zadržite ih s njim; ponovno se izrađuju kada se zidovi, otvori, podovi ili krov promijene, a popis građe je popis za rezanje.
keywords: TJI, I-nosač, tablica raspona nosača, učitavanje tablice, okvirna konstrukcija, okvir, stupić, stupići, rubnik, gornji rubnik, nadvoj, kraljevski stupić, jednostruki stupić, dovratnik, kratki stupić, prag, podupiranje, kut, kalifornijski kut, T-spoj, nosač, obrubni nosač, obrubna greda, rog, rog krova, sljemenski rog, ljevak, kratki rog, sljemenjak, stropni nosač, vezna greda, građa, popis za rezanje, board feet, 2x4, 2x6, razmak, osni razmak
from: 76d0ffb5
---

## Što ćete učiniti

Okvirajte zgradu prema onome što ste nacrtali. BimCraft raspoređuje stupiće, rubnike i nadvoje u zidovima, podne nosače u podovima i rogove (ili rešetke) u krovu, dimenzionira ih prema označenim zadanim tablicama, zadržava ih s modelom i ponovno ih izrađuje kad god se promijeni ono što uokviruju. Popis **Građa** je popis za rezanje.

## Okvirajte

1. Na razini otvorite {{ui:Izgradnja}} i odaberite {{ui:Okvirna konstrukcija}}.
2. Odaberite **razmak** (16" ili 24" osni razmak; 400 ili 600 mm), **kutove** (trostupićne ili kalifornijske), **Rogovi** ili **Rešetke** za krovove te hoće li zidovi dobiti red **podupiranja** na pola visine. Za podove odaberite **Piljena građa** ili **TJI (preliminarno)** i postavite smjer podnih nosača na automatski, plan X ili plan Y.
3. Kliknite **Okvirajte svaki zid** ili kliknite jedan zid, pod ili krov (na razini na kojoj krov stoji) da okvirate samo to.

Isključite **Prikaži okvir** da sakrijete svaki komad okvira, kao sloj; **Prozirno** skriva zidove, podove i krovove koji su uokvireni da možete gledati sam okvir.

## Što dobivate

- **Zidovi**: donji rubnik (rezan kod vrata), dvostruki gornji rubnik, stupići na rasporedu od početka zida, kraljevski i jednostruki stupići te nadvoj na svakim vratima i prozoru, kratki stupići iznad nadvoja i ispod prozora, grubi prag ispod prozora, kutovi gdje se zidovi sastaju (zid koji prolazi uzima kutne stupiće), dva pomoćna stupića gdje se drugi zid spaja u T-spoju, te podupiranje između stupića.
- **Podovi**: podni nosači preko kraće strane poda, zadano, ili duž odabrane osi plana; obrubni nosači oko ruba, te dvostruki nosači i nadvoji oko stubišnog otvora, a nosači koji kroz njega prolaze skraćeni su (repni nosači). Način TJI bira najmanju navedenu seriju i visinu koja doseže izmjereni svjetli raspon pri odabranom razmaku.
- **Krovovi**: obični rogovi okomito na svaki streh, kratki rogovi tamo gdje ih sijeku četverostrešnice i ljevci, četverostrešni i ljevkasti rogovi, sljemenjaci, stropni nosači na vjenčanicama i vezne grede — ili jednostavne rešetke na razmaku, po jedan komad svaka.

## Promjena

Odaberite bilo koji komad okvira u 3D prikazu ili stablu modela. **Svojstva** prikazuju njegov okvir: promijenite razmak, vrstu i smjer podnih nosača, kutove, podupiranje ili okvir krova. Pomicanje zidova, vrata i prozora ili promjena poda ili krova ponovno izrađuje okvir sam od sebe.

Da zadržite komad koji ste postavili namjerno kada se okvir ponovno izrađuje, odaberite ga i izaberite **Zadrži ovaj komad kada se okvir ponovno izrađuje**. Zadržani komad ostaje gdje jest; kada se okvir oko njega promijeni, označen je da ga možete provjeriti.

## TJI podovi iz tablice koju učitate

BimCraft ne sadrži tablice raspona proizvođača nosača (one su proizvođačeve i mijenjaju se s svakim izdanjem). Odaberite okvir poda, postavite **Podni nosači** na **TJI (preliminarno)** i odaberite **Učitaj tablicu…** u **Svojstva**: datoteku u formatu `cadcraft-tji-table`, JSON ili CSV, koju ste izradili iz aktualnih tablica raspona proizvođača. Ona navodi proizvođača, proizvod i izdanje te odakle su brojevi, i za svaki slučaj opterećenja (korisno opterećenje, stalno opterećenje, ograničenje progiba, duljina oslanjanja) navodi najveći svjetli raspon svake serije i visine pri svakom razmaku.

- BimCraft uzima **svjetli raspon** poda, bira najplići visinu, a unutar nje seriju čiji navedeni raspon doseže za odabrani razmak i slučaj opterećenja, te njome okvira pod. Ako je raspon ili razmak izvan tablice, to kaže i ništa ne mijenja.
- Opterećenja, ograničenje progiba, duljina oslanjanja, tablica i rečenica „Preliminarne smjernice za raspored; konačni izbor zahtijeva tablice proizvođača i opterećenja projekta” ispisuju se na popisu građe, upisuju se u model s okvirom i navode se na ploči **Problemi** kao napomena. Tablica označena kao primjer to kaže u upozorenju.
- Uz dodatak **Propisi o gradnji** uključen, njegovo pravilo za podne nosače također čita učitanu tablicu; bez tablice TJI nosači se, kao i prije, izostavljaju iz te provjere.
- Tablica ostaje u ovom pregledniku dok je ne obrišete ili učitate drugu. Datoteka: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: inches, feet, psf; ili `metric`: mm, metri, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) i `rows` (`series`, `depth`, `spans`: za svaki id slučaja, razmak i najveći svjetli raspon, npr. `"16": "15-6"`). U CSV-u iste činjenice su retci `# key = value`, zatim `series,depth,case,spacing,span`.
- Bez učitane tablice, TJI raspored se odbija i ništa se ne mijenja: **Učitajte TJI tablicu: tablice proizvođača su njihove i nisu ugrađene.** Model okviran starijom ugrađenom TJI tablicom (prije ove promjene) zadržava svaki svoj nosač; Svojstva i Problemi kažu da je tablica potrebna, a pod se može ponovno okvirati kada učitate jednu. Nosači od piljene građe rade kao i prije.

Ovo je smjernica za raspored. Konačni izbor nosača zahtijeva tablice proizvođača, opterećenja projekta i inženjera.

## Popis za rezanje

U panelu Popisi odaberite **Građa**: svaki komad okvira grupiran po dimenziji i po standardnoj duljini koju biste kupili (cijele duljine od 2' od 8'; koraci od 600 mm iz milimetara), s brojem komada i board feet. **CSV** ga preuzima.

:::warning
Dimenzije nadvoja, nosača, rogova i stropnih nosača dolaze iz označenih zadanih tablica za tipičnu kuću s jednom ili dvije etaže, a ne iz inženjerskog proračuna. **Svojstva** kažu kada je raspon ili otvor izvan svoje tablice. Projektant ili inženjer provjerava raspone, opterećenja i spojeve.

Rasporedi TJI koriste samo tablicu koju učitate, a koju izradite iz aktualnih tablica raspona proizvođača; BimCraft ne isporučuje nijednu. Prijedlog ne provjerava oslanjanje, koncentrirana opterećenja, konzole, otvore, nadvoje stubišnih otvora ni spojeve, a I-profil modela je shematski.
:::

## Što se sprema

Svaki okvireni zid, pod ili krov je IFC sklop elemenata („Framing”) od IFC štapova (stupića, rubnika, rogova, veznih greda, podupiranja, rešetki) i greda (nadvoja, nosača, obrubnih greda, sljemenjaka), svaki sa svojom dimenzijom, duljinom i board feet.
