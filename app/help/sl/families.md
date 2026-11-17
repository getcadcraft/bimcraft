---
title: Družine in njihove velikosti
summary: Vrata, okna in pohištvo so v družinah. Vsaka velikost družine je en tip v datoteki IFC, zato seznam tipov v BimCraftu ostane kratek, drugi programi pa berejo navadne tipe.
keywords: družina, družine, tip, tipi, velikost, velikosti, tip vrat, tip okna, pohištvo, miza, polica, omara, nova velikost, podvoji, postavi družino, datoteka družine, ccfamily, knjižnica IFC, projektna knjižnica, skupina, vidnost, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Kaj je družina

Družina je ena vrsta predmeta v več velikostih: enokrilna vrata, ki so široka 32", 36" in 42", ali miza, ki je dolga ali kratka. V BimCraftu vidite družino enkrat, njene velikosti pa so pod njo, namesto dolgega seznama tipov.

IFC nima družin. V datoteki je vsaka velikost navaden tip (tip vrat, tip okna, tip pohištva …), družina pa je skupina, ki našteje svoje velikosti. Drugi programi za BIM berejo tipe in skupino tako, kot sta, BimCraft pa iz njih prebere družino nazaj.

## Kje jih najdete

- Skupina **Družine** v brskalniku projekta našteje družine v tem modelu, s številom njihovih velikosti in številom postavljenih. Pod njimi so **Začetne družine**: vrata in okna iz orodij za vrata in okna ter miza, enota police in spodnja omara.
- {{ui:Zgradba}} › {{ui:Družine…}} prikaže isti seznam v oknu.
- Kliknite družino, da jo odprete: njene velikosti, vrednosti vsake velikosti in koliko elementov uporablja vsako.

## Vrata in okna

Orodji za vrata in okna naštejeta družine te vrste, poleg njih pa **seznam velikosti**. Izberite velikost ali vpišite **W** in **H**: širina in višina, ki je nobena velikost še nima, postaneta nova velikost družine, ko postavite vrata. Vrata iste velikosti delijo en tip.

V {{ui:Lastnosti}} izbrana vrata ali okno prikažeta svojo **Družino** in **Velikost**. Izberite drugo velikost iz seznama ali vpišite novo širino ali višino. {{ui:Odpri družino}} odpre družino, ki ji pripadajo.

Okvir vrat ali okna sledi debelini lastne stene, kot je bilo prej. Tip velikosti prav tako ohrani vrata, narisana v 140 mm steni, za programe, ki berejo tipe.

## Nova velikost iz te družine

1. Odprite družino.
2. Pod **Nova velikost iz te družine** vpišite njene vrednosti (Širina, Višina in drugi parametri družine) in, če želite, tudi ime. Brez imena se velikost poimenuje po svojih vrednostih.
3. Kliknite {{ui:Izdelaj velikost}}.

Dve velikosti ne moreta imeti istih vrednosti. **Preimenuj** spremeni ime velikosti; **Odstrani** odstrani velikost, ki je nihče ne uporablja; **Izberi** izbere elemente te velikosti.

## Postavite pohištvo

1. {{ui:Zgradba}} › {{ui:Vstavi družino}} ali {{ui:Postavi}} v oknu družine.
2. V vrstici izberite družino in njeno velikost.
3. Kliknite na tloris, da postavite kos na etažo. Pred klikom pritisnite {{key:R}}, da ga zasučete za 90°. {{key:Esc}} ustavi postavljanje.

{{ui:Lastnosti}} postavljenega kosa prikažejo njegovo velikost, mesto in kot zasuka; {{key:Delete}} ga odstrani. Vsak kos ene velikosti deli obliko te velikosti, zato sprememba družine spremeni vse hkrati.

## Velikosti iz tabele

{{ui:Velikosti iz tabele…}} v oknu družine prebere datoteko CSV (vejica, podpičje ali tabulator). Prva vrstica poimenuje stolpce: ime ali oznako parametra in neobvezno `Name`. Dolžine so v milimetrih, razen če napišete enoto (`1.2 m`, `36 in`). Stolpci Da / Ne sprejmejo yes, no, true, false, 1 ali 0, parameter brez stolpca pa ohrani svojo privzeto vrednost. Vsaka vrstica postane velikost, v enem koraku, ki ga lahko razveljavite; velikost, ki je že tam, se preskoči. Ena vrstica, ki je ne preberemo ali je družina ne more narisati, zavrne celotno tabelo in navede svojo vrstico. Največ 200 vrstic in 1 MB. {{ui:Shrani velikosti kot tabelo}} zapiše isto tabelo nazaj.

## Nastavi na vsakem elementu

Parameter, označen **Za vsak element** v urejevalniku (Da / Ne, ki doda nadsvetlobno okno, oznako ali material), ni del velikosti: dvoja vrata iste velikosti se lahko razlikujeta. Izberite element, **{{ui:Lastnosti}}** prikažejo te parametre; spremenite enega in ta element se nariše znova s svojo obliko (pohištvo in armature dobijo lastno obliko, vrata in okna pa se znova naredijo v svojih stenah). Če jih vse nastavite nazaj na privzete vrednosti, se element vrne na obliko svoje velikosti.

## Stopnja podrobnosti

{{ui:Zgradba}} › {{ui:Družine…}} › **Stopnja podrobnosti** nastavi za vsako družino v modelu, kaj se shrani v telesa in nariše v simbolih v tlorisu: **Fino** ohrani vse, **Srednje** in **Grobo** pa izpustita dele, ki jih urejevalnik označi kot finejše (manjše datoteke, hitrejši pogledi). **Samodejno** shrani vse in pusti, da pogled lista izbere glede na merilo: 1:50 in večje fino, 1:100 srednje, 1:200 in manjše grobo. Je en korak, ki ga lahko razveljavite.

## Podvoji družino

Ni vam treba začeti iz nič. {{ui:Podvoji}} kopira družino z njenimi parametri, telesi in velikostmi pod novim imenom. Kopijo spremenite v urejevalniku; original ostane nespremenjen.

## Datoteke družin

- {{ui:Shrani datoteko družine}} shrani `.ccfamily.json`: parametre, telesa in velikosti družine. Odprite jo v drugem modelu z {{ui:Odpri datoteko družine…}} v skupini Družine.
- {{ui:Shrani kot IFC}} shrani družino kot majhno datoteko IFC: tipe njenih velikosti in njeno skupino, deklarirano z IFC projektno knjižnico. Drugi programi jo odprejo kot niz tipov; BimCraft jo odpre spet kot družino.

Datoteka družine, odprta tukaj, se prebere kot podatki in preveri, preden se kaj zapiše. Družina, katere ključ je že v modelu, pride kot ločena družina. Družina, ki vsebuje druge (glejte „Družine znotraj“ v pomoči za urejevalnik), jih prinese s seboj: datoteka jih našteje, model pa obdrži tiste, ki jih že ima.

## Družine v knjižnici

Odprite {{ui:Družine…}} in izberite {{ui:Iz knjižnice…}}, da vidite družine, ki so bile deljene v knjižnici. {{ui:Dodaj v ta projekt}} prebere eno kot datoteko družine: BimCraft preveri vsako polje, preden kaj naredi, družina pride kot samostojna družina in se odpre v urejevalniku. Dodajanje je en korak razveljavitve. Če knjižnice ni mogoče doseči, seznam to pove in nič se ne spremeni. Da delite svojo, uporabite {{ui:Shrani vse kot knjižnico}} in datoteko pošljite v knjižnico (osebje knjižnice objavi datoteko družine z ukazom, vsaka družina pa je svoj element z velikostmi).

## Tipi drugih programov

Tipi, narejeni z drugimi programi, se prikažejo tudi v skupini Družine, razvrščeni po ugibanju: po delu imena njihovih elementov pred prvo dvopičjem, sicer pa po imenih tipov, ki se razlikujejo le v številkah. Okno družine pove, katero ugibanje je uporabilo. Naštejeni so in njihove elemente lahko izberete, vendar tukaj niso urejeni, ker nimajo recepta družine.

:::note
Začetna vrata in okna so narisana natanko tako kot pred družinami. Datoteke, narejene pred družinami, se odprejo nespremenjene: njihova vrata in okna se prikažejo pod svojo družino z uporabljenimi velikostmi in se premaknejo na lastno velikost, ko jih prvič spremenite.
:::

Glejte tudi [Uredi družino](topic:family-editor) in [Vrata in okna](topic:doors-and-windows).
