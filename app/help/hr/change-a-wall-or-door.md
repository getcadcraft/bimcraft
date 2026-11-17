---
title: Promjena zida, vrata ili prozora
summary: Kliknite nacrtani zid, vrata ili prozor i promijenite mu vrstu, veličinu, visinu ili mjesto u Svojstvima, ili ga povucite u tlocrtu. Svaka promjena je jedan korak poništavanja.
keywords: poravnaj u pravokut, pravokutnik, 90, pravi kut, iskošenje, kut, ortogonalno, veličina prostorije, unutarnja ploha, vanjska ploha, mjeri od, udaljenost pomaka, upisana udaljenost, zakrivljeno, luk, visina luka, polumjer, linija položaja, poravnanje, promjena, uređivanje, svojstva, vrsta zida, debljina, duljina, visina, odmak od podnožja, vrh, etaža, okreni, vanjski, veličina vrata, veličina prozora, parapet, udaljenost, pomakni, hvatište, povuci, promijeni vrstu, više
from: 63052d5d
---

## Što ćete učiniti

Promijenite ono što ste nacrtali: odaberite zid, vrata ili prozor, pa upišite novi broj u **Svojstva** ili ga povucite u tlocrtu. Tlocrt i 3D prikaz slijede, kutovi se ponovno spajaju, a vrata i prozori ostaju u svojim zidovima.

## Promjena zida

1. Uz uključeno {{ui:Draw}} i uključeno {{ui:Select}}, kliknite zid u tlocrtu (ili u 3D prikazu).
2. **Svojstva** prikazuju okvir s brojevima zida. Promijenite jedan i pritisnite {{key:Enter}}:
   - **Vrsta zida**: druga od početnih vrsta. Debljina i slojevi mijenjaju se s njom.
   - **Debljina**: bilo koja debljina. Vrsta zadržava druge slojeve, a njezin glavni sloj (stupci ili blok) preuzima razliku, na primjer „Vanjski 2×6, 200 mm“.
   - **Mjeri od**: **Središnja linija**, **Unutarnja ploha** ili **Vanjska ploha**. **Duljina** i **Veličina prostorije** čitaju se i postavljaju od njega. Vanjska ploha je ono što prikazuju kote tlocrta.
   - **Duljina**: kraj zida pomiče se duž svoje linije. Zid spojen na tom kraju pomiče se okomito na sebe i zadržava svoj kut.
   - **Veličina prostorije** (kad postoji paralelni zid preko prostorije): upišite željenu veličinu. Ovaj zid se pomiče okomito, a spojeni zidovi se rastežu da slijede.
   - **Pomakni okomito**: upišite koliko daleko pomaknuti zid okomito na sebe: običan broj ga pomiče van, a negativan unutra.
   - **Kut prema spojenom zidu**: kut prema zidu spojenom na njegovom početku. Upišite 90 da bude okomito. Zid spojen ni na što prikazuje **Smjer**, u stupnjevima od istoka.
   - {{ui:Square up}}: vraća zidove spojene s ovim na prave kutove, duž smjera u kojem većina njihove duljine ide. Radi na cijeloj spojenoj prostoriji ili rasporedu, bez obzira koji od zidova odaberete. Zid koji je više od 10 stupnjeva izvan pravog kuta ostaje kakav jest, pa je zid postavljen na 45 stupnjeva siguran. Jedno {{ui:Undo}} vraća sve.
   - **Visina zida**: **Do etaže iznad** prati tu etažu, a **Do razine 3** (i bilo koje više) pravi zid koji prolazi kroz etaže između; upisivanje visine tada postavlja koliko je vrh ispod ili iznad te etaže. **Fiksna visina** zadržava broj koji upišete. **Prolazi kroz** navodi etaže kroz koje takav zid prolazi: u njihovim tlocrtima crta se svjetlije, sobe se tamo zatvaraju uz njega, a vrata i prozori mogu se postaviti u njega iz tih tlocrta. Pomiče se i oblikuje na etaži na kojoj počinje.
   - **Odmak od podnožja**: koliko iznad etaže zid počinje. Njegov vrh ostaje gdje je bio.
   - **Vanjska strana**: {{ui:Flip}} stavlja vanjske slojeve na drugu plohu.
   - **Linija položaja**: **Središnja linija**, **Vanjska ploha**, **Unutarnja ploha**, **Lijeva ploha** ili **Desna ploha**. Sama promjena ništa ne pomiče. Kasnije, kad zid postane deblji (vrstom ili **Debljinom**) ili mu se vanjska strana okrene, linija položaja ostaje na mjestu i zid raste ili se okreće oko nje. Ravni zid koji se s njom spaja pod kutom slijedi je, pa se kut i dalje zatvara. Linija položaja odabranog zida crta se crtkano u tlocrtu. Odaberite više zidova da je postavite za sve.
   - **Visina luka** (zakrivljeni zidovi): koliko se sredina odmiče od ravne linije. 0 je ravno; negativna vrijednost savija na drugu stranu. Polumjer se prikazuje pokraj nje.
3. Svaka promjena je jedan korak u **Promjene**; {{ui:Undo}} je vraća.

## Povlačenje zida u tlocrtu

Kad je jedan zid odabran, prikazuje tri hvatišta: kvadrat na svakom kraju i krug na sredini.

- Povucite kraj da zid postane duži, kraći ili da ga okrenete. Hvata se kao alat Zid, a poravnava se okomito na zid spojen na drugom kraju kad ste unutar 3 stupnja; {{key:Shift}} ga drži na osima tlocrta.
- Zidovi spojeni na kraj koji povlačite zadržavaju svoj kut: njihovi krajevi klize duž vlastitih linija da se sastanu s novom linijom zida, pa ništa ne postaje nagnuto. Držite {{key:Mod}} za slobodno povlačenje (kraj spojenog zida ide s vašim i taj zid se okreće), ili {{key:Alt}} da prekinete spojeve na ovom zidu.
- Povucite sredinu da pomaknete cijeli zid okomito na sebe, bez obzira na smjer. Njegovi kutovi kližu duž spojenih zidova, pa ti zidovi zadržavaju svoj kut.
- Držite {{key:Mod}} dok povlačite sredinu za slobodno pomicanje, kad doista želite prekinuti kut. {{ui:Square up}} ga vraća.
- Dok držite hvatište, upišite udaljenost i pritisnite {{key:Enter}} (ili ga pustite): zid ide točno toliko, na način kojim ste povlačili. {{key:Esc}} odustaje od pomaka.
- Odabrani zakrivljeni zid prikazuje hvatišta na krajevima i okruglo hvatište na sredini luka. Povucite okruglo hvatište da ga savijete.
- Vrata i prozori ostaju u zidu. Zid prekratak za ono što drži odbija se porukom „Ne stane u taj zid.“

## Promjena vrata ili prozora

1. Kliknite vrata ili prozor u tlocrtu.
2. U **Svojstva**: **Vrsta** (druga vrata ili prozor iste vrste), **Širina**, **Visina**, **Parapet** (prozori), **Od početka** i **Od kraja** (udaljenost od svakog kraja plohe zida do njegova ruba), **Šarke** {{ui:Flip}} (vrata s jednim krilom i krilni prozori; klizna, džepna, staja i preklopna vrata umjesto toga kažu **Otvara se prema**; fiksni, obješeni i slikovni prozori te dvokrilna vrata nemaju ništa), i **Zakreće se prema** (vrata) ili **Strana okvira** (prozori) {{ui:Flip}}.
3. Ili ga povucite duž zida, ili na drugi zid: pogledajte [Vrata i prozori](topic:doors-and-windows).

## Promjena više odjednom

Odaberite više zidova (ili više vrata, ili više prozora) s {{key:Shift}}+klik ili {{key:Mod}}+klik. **Svojstva** nude ono što dijele: **Promijeni vrstu…**, visinu, veličinu. Jedna promjena postavlja sve, a jedno {{ui:Undo}} vraća sve.

## Dobro je znati

- Brojevi se prikazuju u {{ui:Units}} koje su odabrane na alatnoj traci.
- Zidovi, vrata i prozori iz drugih programa prikazuju svoje IFC podatke u **Svojstva** kao i prije, bez ovog okvira.
