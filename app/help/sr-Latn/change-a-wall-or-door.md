---
title: Promenite zid, vrata ili prozor
summary: Kliknite nacrtani zid, vrata ili prozor i promenite mu tip, veličinu, visinu ili mesto u Svojstvima, ili ga prevucite u planu; svaka promena je jedan korak opozivanja.
keywords: poravnaj, kvadrat, 90, pravi ugao, nagnuto, ugao, orto, veličina prostorije, unutrašnja strana, spoljna strana, meri od, rastojanje pomeranja, uneto rastojanje, zakrivljeno, luk, visina luka, poluprečnik, linija položaja, poravnanje, promena, uređivanje, svojstva, tip zida, debljina, dužina, visina, pomeraj osnove, vrh, nivo, obrni, spolja, veličina vrata, veličina prozora, parapet, rastojanje, pomeri, hvatište, prevuci, promeni tip, više
from: 63052d5d
---

## Šta ćete uraditi

Promenite ono što ste nacrtali: izaberite zid, vrata ili prozor, pa upišite novi broj u **Svojstva** ili ga prevucite u planu. Plan i 3D prikaz prate, uglovi se ponovo spajaju, a vrata i prozori ostaju u svojim zidovima.

## Promena zida

1. Uz uključeno {{ui:Crtanje}} i uključeno {{ui:Izaberi}}, kliknite zid u planu (ili u 3D prikazu).
2. **Svojstva** prikazuju okvir sa brojevima zida. Promenite jedan i pritisnite {{key:Enter}}:
   - **Tip zida**: drugi od početnih tipova. Debljina i slojevi se menjaju s njim.
   - **Debljina**: bilo koja debljina. Tip zadržava ostale slojeve, a njegov glavni sloj (stubovi ili blok) preuzima razliku, na primer „Spoljni 2×6, 200 mm“.
   - **Meri od**: **Osa**, **Unutrašnja strana** ili **Spoljna strana**. **Dužina** i **Veličina prostorije** se čitaju i postavljaju od tog mesta. Spoljna strana je ono što prikazuju kote plana.
   - **Dužina**: kraj zida se pomera duž svoje linije. Zid spojen na tom kraju pomera se upravno na sebe i zadržava svoj ugao.
   - **Veličina prostorije** (kada postoji paralelni zid preko prostorije): upišite veličinu koju želite. Ovaj zid se pomera upravno, a spojeni zidovi se istežu da prate.
   - **Pomeri pod pravim uglom**: upišite koliko daleko da se zid pomeri upravno na sebe: običan broj ga pomera napolje, broj sa minusom unutra.
   - **Ugao prema spojenom zidu**: ugao prema zidu spojenom na njegovom početku. Upišite 90 da ga postavite pod pravim uglom. Zid koji nije ni sa čim spojen pokazuje **Pravac**, u stepenima od istoka.
   - {{ui:Poravnaj pod pravim uglom}}: okreće zidove povezane sa ovim nazad na prave uglove, duž pravca u kojem većina njihove dužine ide. Radi na celoj povezanoj prostoriji ili rasporedu, koji god zid izaberete. Zid koji je za više od 10 stepeni van pravog ugla ostaje kakav jeste, pa je onaj postavljen na 45 stepeni bezbedan. Jedan {{ui:Opozovi}} sve vraća.
   - **Visina zida**: **Do nivoa iznad** prati taj nivo; **Do Nivoa 3** (i svakog nivoa višeg) pravi zid koji prolazi kroz nivoe između; upisivanje visine tada postavlja koliko je vrh ispod ili iznad tog nivoa. **Fiksna visina** zadržava broj koji upišete. **Prolazi kroz** navodi nivoe kroz koje takav zid prolazi: u njihovim planovima crta se svetlije, prostorije tamo se zatvaraju uz njega, a vrata i prozori mogu da se postave u njemu iz tih planova. Pomera se i preoblikuje na nivou na kojem počinje.
   - **Pomeraj osnove**: koliko iznad nivoa zid počinje. Njegov vrh ostaje gde je bio.
   - **Spolja**: {{ui:Obrni}} stavlja spoljne slojeve na drugu stranu.
   - **Linija položaja**: **Osa**, **Spoljna strana**, **Unutrašnja strana**, **Leva strana** ili **Desna strana**. Promena ništa ne pomera. Kasnije, kada zid postane deblji (po tipu ili **Debljini**) ili se njegova spoljna strana obrne, linija položaja ostaje na mestu i zid raste ili se obrće oko nje. Ravan zid koji se sastaje sa njom pod uglom prati je, pa se ugao i dalje zatvara. Linija položaja izabranog zida crta se isprekidano u planu. Izaberite više zidova da je postavite za sve njih.
   - **Visina luka** (zakrivljeni zidovi): koliko se sredina izvija van prave linije. 0 ga čini ravnim; negativna vrednost ga izvija na drugu stranu. Poluprečnik se prikazuje pored.
3. Svaka promena je jedan korak u **Izmene**; {{ui:Opozovi}} je vraća.

## Prevlačenje zida u planu

Kada je jedan zid izabran, pokazuje tri hvatišta: kvadrat na svakom kraju i krug u sredini.

- Prevucite kraj da zid produžite, skratite ili okrenete. Hvata se kao alatka Zid i priljubljuje se pod pravim uglom za zid spojen na drugom kraju kada ste unutar 3 stepena; {{key:Shift}} ga drži na osama plana.
- Zidovi spojeni na kraj koji prevlačite zadržavaju svoj ugao: njihovi krajevi klize duž sopstvenih linija do nove linije zida, pa ništa ne ostaje nagnuto. Držite {{key:Mod}} za slobodno prevlačenje (kraj spojenog zida ide s vašim i taj zid se okreće), ili {{key:Alt}} da prekinete spojeve na ovom zidu.
- Prevucite sredinu da pomerite ceo zid upravno na sebe, kojim god smerom prevlačite. Njegovi uglovi klize duž spojenih zidova, pa ti zidovi zadržavaju svoj ugao.
- Držite {{key:Mod}} dok prevlačite sredinu za slobodno pomeranje, kada zaista želite da prekinete ugao. {{ui:Poravnaj pod pravim uglom}} ga vraća.
- Dok držite hvatište, upišite rastojanje i pritisnite {{key:Enter}} (ili pustite): zid ide tačno toliko daleko, na način na koji ste prevlačili. {{key:Esc}} odustaje od pomeranja.
- Izabrani zakrivljeni zid pokazuje hvatišta na krajevima i okruglo hvatište u sredini luka. Prevucite okruglo hvatište da ga savijete.
- Vrata i prozori ostaju u zidu. Zid koji je prekratak za ono što drži se odbija uz poruku „Ne staje u taj zid.“

## Promena vrata ili prozora

1. Kliknite vrata ili prozor u planu.
2. U **Svojstvima**: **Tip** (druga vrata ili prozor iste vrste), **Širina**, **Visina**, **Parapet** (prozori), **Od početka** i **Od kraja** (rastojanje od svakog kraja lica zida do njegove ivice), **Šarke** {{ui:Obrni}} (vrata sa jednim krilom i krilni prozori; klizna, džepna, štalska i harmonika vrata kažu **Otvara se na**; fiksni, viseći i slikovni prozori i dvokrilna vrata nemaju ništa), i **Smer otvaranja** (vrata) ili **Strana rama** (prozori) {{ui:Obrni}}.
3. Ili ih prevucite duž zida, ili na drugi zid: videti [Vrata i prozori](topic:doors-and-windows).

## Promena više odjednom

Izaberite više zidova (ili više vrata, ili više prozora) pomoću {{key:Shift}}+klik ili {{key:Mod}}+klik. **Svojstva** nude ono što dele: **Promeni tip…**, visinu, veličinu. Jedna promena postavlja sve njih, a jedno {{ui:Opozovi}} vraća sve.

## Dobro je znati

- Brojevi se prikazuju u {{ui:Jedinice}} izabranim na alatnoj traci.
- Zidovi, vrata i prozori iz drugih programa prikazuju svoje IFC podatke u **Svojstvima** kao i ranije, bez ovog okvira.
