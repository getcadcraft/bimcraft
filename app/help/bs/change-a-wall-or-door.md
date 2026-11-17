---
title: Promijenite zid, vrata ili prozor
summary: Kliknite nacrtani zid, vrata ili prozor i promijenite njegov tip, veličinu, visinu ili mjesto u Svojstvima, ili ga prevucite u planu; svaka promjena je jedan korak poništavanja.
keywords: poravnaj, kvadrat, 90, pravi ugao, kosina, ugao, ortogonalno, veličina prostorije, unutrašnja strana, vanjska strana, mjeri od, pomak, unesena udaljenost, zakrivljeno, luk, visina luka, poluprečnik, linija lokacije, poravnanje, promjena, uređivanje, svojstva, tip zida, debljina, dužina, visina, pomak baze, vrh, nivo, okreni, vanjski, veličina vrata, veličina prozora, parapet, udaljenost, pomjeranje, hvatište, prevlačenje, promijeni tip, više
from: 63052d5d
---

## Šta ćete raditi

Promijenite ono što ste nacrtali: odaberite zid, vrata ili prozor, zatim upišite novi broj u **Svojstva** ili ga prevucite u planu. Plan i 3D pogled prate, uglovi se ponovo spajaju, a vrata i prozori ostaju u svojim zidovima.

## Promjena zida

1. Uz uključene {{ui:Crtanje}} i {{ui:Odaberi}}, kliknite zid u planu (ili u 3D pogledu).
2. **Svojstva** prikazuju okvir sa brojevima zida. Promijenite jedan i pritisnite {{key:Enter}}:
   - **Tip zida**: drugi od početnih tipova. Debljina i slojevi se mijenjaju s njim.
   - **Debljina**: bilo koja debljina. Tip zadržava ostale slojeve, a njegov glavni sloj (rebra ili blok) preuzima razliku, na primjer „Vanjski 2×6, 200 mm”.
   - **Mjeri od**: **Centralna linija**, **Unutrašnja strana** ili **Vanjska strana**. **Dužina** i **Veličina prostorije** se čitaju i postavljaju od njega. Vanjska strana je ono što pokazuju dimenzije plana.
   - **Dužina**: kraj zida se pomjera duž njegove linije. Zid spojen na tom kraju se pomjera pravo prema sebi i zadržava svoj ugao.
   - **Veličina prostorije** (kada postoji paralelan zid preko prostorije): upišite željenu veličinu. Ovaj zid se pomjera pravo, a spojeni zidovi se razvlače da prate.
   - **Pomjeri pravo**: upišite koliko daleko da se zid pomjeri pravo prema sebi: običan broj ga pomjera van, broj s minusom unutra.
   - **Ugao prema spojenom zidu**: ugao prema zidu spojenom na njegovom početku. Upišite 90 da ga postavite pod pravim uglom. Zid spojen ni za šta prikazuje **Pravac**, u stepenima od istoka.
   - {{ui:Poravnaj pod pravim uglom}}: okreće zidove povezane s ovim natrag na prave uglove, duž pravca u kojem većina njihove dužine ide. Radi na cijeloj povezanoj prostoriji ili rasporedu, koji god od njenih zidova odaberete. Zid koji je više od 10 stepeni udaljen od pravog ugla ostaje kakav jeste, pa je zid postavljen na 45 stepeni bezbjedan. Jedno {{ui:Poništi}} vraća sve.
   - **Visina zida**: **Do nivoa iznad** prati taj nivo; **Do nivoa 3** (i bilo koji viši nivo) pravi zid koji prolazi kroz nivoe između, a upisivanje visine tada postavlja koliko je vrh ispod ili iznad tog nivoa. **Fiksna visina** zadržava broj koji upišete. **Prolazi kroz** navodi nivoe kroz koje takav zid prolazi: u njihovim planovima crta se svjetlije, prostorije se tamo zatvaraju uz njega, a vrata i prozori se mogu postaviti u njega iz tih planova. Pomjera se i oblikuje na nivou na kojem počinje.
   - **Pomak baze**: koliko iznad nivoa zid počinje. Njegov vrh ostaje gdje je bio.
   - **Vanjska strana**: {{ui:Okreni}} stavlja vanjske slojeve na drugu stranu.
   - **Linija lokacije**: **Centralna linija**, **Vanjska strana**, **Unutrašnja strana**, **Lijeva strana** ili **Desna strana**. Promjena ništa ne pomjera. Kasnije, kada zid postane deblji (po tipu ili **Debljina**) ili se njegova vanjska strana okrene, linija lokacije ostaje na mjestu, a zid raste ili se okreće oko nje. Pravi zid koji se sastaje s njom pod uglom prati je, pa se ugao i dalje zatvara. Linija lokacije odabranog zida crta se u planu isprekidano. Odaberite više zidova da je postavite za sve njih.
   - **Visina luka** (zakrivljeni zidovi): koliko se sredina izbočuje od prave linije. 0 ga čini pravim; negativna vrijednost ga savija na drugu stranu. Poluprečnik se prikazuje pored.
3. Svaka promjena je jedan korak u **Promjene**; {{ui:Poništi}} ga vraća.

## Prevlačenje zida u planu

Kada je jedan zid odabran, prikazuje tri hvatišta: kvadrat na svakom kraju i krug u sredini.

- Prevucite kraj da zid produžite, skratite ili okrenete. Hvata se kao alat Zid, i hvata pravo prema zidu spojenom na drugom kraju kada ste u okviru 3 stepena; {{key:Shift}} ga zadržava na osama plana.
- Zidovi spojeni na kraju koji prevlačite zadržavaju svoj ugao: njihovi krajevi klize duž svojih linija da se sretnu s novom linijom zida, pa ništa ne postane nagnuto. Držite {{key:Mod}} za slobodno prevlačenje (kraj spojenog zida ide s vašim i taj zid se okreće), ili {{key:Alt}} da prekinete spojeve na ovom zidu.
- Prevucite sredinu da cijeli zid pomjerite pravo prema sebi, u kojem god pravcu prevlačite. Njegovi uglovi klize duž spojenih zidova, pa ti zidovi zadržavaju svoj ugao.
- Držite {{key:Mod}} dok prevlačite sredinu za slobodno pomjeranje, kada zaista želite prekinuti ugao. {{ui:Poravnaj pod pravim uglom}} ga vraća.
- Dok je hvatište pritisnuto, upišite udaljenost i pritisnite {{key:Enter}} (ili pustite): zid ide tačno toliko daleko, na način na koji ste prevlačili. {{key:Esc}} odbacuje pomjeranje.
- Odabrani zakrivljeni zid pokazuje hvatišta na krajevima i okruglo hvatište u sredini luka. Prevucite okruglo hvatište da ga savijete.
- Vrata i prozori ostaju u zidu. Zid koji je prekratak za ono što drži odbija se porukom „Ne staje u taj zid.”

## Promjena vrata ili prozora

1. Kliknite vrata ili prozor u planu.
2. U **Svojstvima**: **Tip** (drugačija vrata ili prozor iste vrste), **Širina**, **Visina**, **Parapet** (prozori), **Od početka** i **Od kraja** (udaljenost od svakog kraja lica zida do njegove ivice), **Šarke** {{ui:Okreni}} (vrata sa jednim krilom i prozori na krilo; klizna, džepna, štala i harmonika vrata umjesto toga kažu **Otvara se prema**; fiksni, viseći i slikovni prozori te dvostruka vrata nemaju ništa), i **Okreće se prema** (vrata) ili **Strana okvira** (prozori) {{ui:Okreni}}.
3. Ili ih prevucite duž zida, ili na drugi zid: vidi [Vrata i prozori](topic:doors-and-windows).

## Promjena više odjednom

Odaberite više zidova (ili više vrata, ili više prozora) sa {{key:Shift}}+klik ili {{key:Mod}}+klik. **Svojstva** nude ono što dijele: **Promijeni tip…**, visinu, veličinu. Jedna promjena postavlja sve njih, a jedno {{ui:Poništi}} vraća sve.

## Dobro je znati

- Brojevi se prikazuju u {{ui:Jedinice}} izabranim na traci alata.
- Zidovi, vrata i prozori iz drugih programa prikazuju svoje IFC podatke u **Svojstvima** kao i prije, bez ovog okvira.
