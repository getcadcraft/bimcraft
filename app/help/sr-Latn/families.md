---
title: Porodice i njihove veličine
summary: Vrata, prozori i nameštaj dolaze u porodicama. Svaka veličina porodice je jedan tip u IFC datoteci, pa lista tipova ostaje kratka u BimCraft-u, dok drugi programi čitaju obične tipove.
keywords: porodica, porodice, tip, tipovi, veličina, veličine, tip vrata, tip prozora, nameštaj, sto, polica, ormarić, nova veličina, dupliraj, postavi porodicu, datoteka porodice, ccfamily, ifc biblioteka, projektna biblioteka, grupa, vidljivost, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Šta je porodica

Porodica je jedna vrsta stvari u nekoliko veličina: jedna krilna vrata koja dolaze široka 32, 36 i 42 inča, ili sto koji dolazi dugačak i kratak. U BimCraft-u vidite porodicu jednom, sa njenim veličinama ispod, umesto duge liste tipova.

IFC nema porodice. U datoteci je svaka veličina običan tip (tip vrata, tip prozora, tip nameštaja…), a porodica je grupa koja navodi njene veličine. Drugi BIM programi čitaju tipove i grupu onakve kakvi jesu; BimCraft iz njih ponovo sastavlja porodicu.

## Gde ih naći

- Grupa **Porodice** u pregledaču projekta navodi porodice u ovom modelu, sa brojem veličina svake i brojem postavljenih. Ispod njih su **Početne porodice**: vrata i prozori iz alata za vrata i prozore, kao i sto, jedinica sa policama i donji ormarić.
- {{ui:Verzija}} › {{ui:Porodice…}} prikazuje istu listu u prozoru.
- Kliknite porodicu da je otvorite: njene veličine, vrednosti svake veličine i koliko elemenata koristi svaku.

## Vrata i prozori

Alati za vrata i prozore navode porodice te vrste, a pored njih **listu veličina**. Izaberite veličinu ili ukucajte **W** i **H**: širina i visina koju nijedna veličina nema još postaje nova veličina porodice kada postavite vrata. Vrata iste veličine dele isti tip.

U {{ui:Svojstva}} izabrana vrata ili prozor prikazuju svoju **Porodicu** i **Veličinu**. Izaberite drugu veličinu sa liste ili ukucajte novu širinu ili visinu. {{ui:Otvori porodicu}} otvara porodicu kojoj pripadaju.

Okvir svakih vrata ili prozora prati debljinu sopstvenog zida, kao i ranije, pre porodica. Tip veličine takođe čuva vrata nacrtana u zidu debljine 140 mm, za programe koji čitaju tipove.

## Nova veličina iz ove porodice

1. Otvorite porodicu.
2. Pod **Nova veličina iz ove porodice** ukucajte njene vrednosti (Širina, Visina i ostali parametri porodice) i, ako želite, naziv. Bez naziva dobija ga iz svojih vrednosti.
3. Kliknite {{ui:Napravi veličinu}}.

Dve veličine ne mogu imati iste vrednosti. **Preimenuj** menja naziv veličine; **Ukloni** uklanja veličinu koju niko ne koristi; **Izaberi** bira elemente te veličine.

## Postavljanje nameštaja

1. {{ui:Verzija}} › {{ui:Postavi porodicu}}, ili {{ui:Postavi}} u prozoru porodice.
2. U traci izaberite porodicu i njenu veličinu.
3. Kliknite na plan da je postavite na nivo. Pritisnite {{key:R}} da je okrenete za 90° pre klika. {{key:Esc}} prekida.

Svojstva postavljenog komada pokazuju njegovu veličinu, gde se nalazi i koliko je okrenut; {{key:Delete}} ga uklanja. Svaki komad jedne veličine deli oblik te veličine, pa promena porodice menja sve njih.

## Veličine iz tabele

{{ui:Veličine iz tabele…}} u prozoru porodice čita datoteku CSV (zarez, tačka-zarez ili tabulator). Prvi red imenuje kolone: naziv ili oznaku parametra i, po želji, `Name`. Dužine su u milimetrima, osim ako ne napišete jedinicu (`1.2 m`, `36 in`); kolone Da / Ne prihvataju da, ne, true, false, 1 ili 0, a parametar bez kolone zadržava svoju podrazumevanu vrednost. Svaki red postaje veličina, u jednom koraku koji možete poništiti; veličina koja već postoji se preskače. Jedan red koji se ne čita, ili koji porodica ne može da nacrta, odbija celu tabelu i navodi svoj red. Najviše 200 redova i 1 MB. {{ui:Sačuvaj veličine kao tabelu}} upisuje istu tabelu nazad.

## Postavljeno na svaki element

Parametar označen sa **Po elementu** u uredniku (Da / Ne koji dodaje nadsvetlo, oznaku ili materijal) nije deo veličine: dva vrata iste veličine mogu se razlikovati. Izaberite element i **Svojstva** prikazuju ove parametre; promenite jedan i taj element se ponovo crta sa sopstvenim oblikom (nameštaj i uređaji dobijaju sopstveni oblik, a vrata i prozori se ponovo prave u svojim zidovima). Vratite ih sve na podrazumevano i element se vraća na oblik svoje veličine.

## Nivo detalja

{{ui:Verzija}} › {{ui:Porodice…}} › **Nivo detalja** određuje, za svaku porodicu u modelu, šta se čuva u telima i crta u simbolima u planu: **Fino** čuva sve, a **Srednje** i **Grubo** izostavljaju delove koje urednik označava kao sitnije (manje datoteke, brži pogledi). **Automatski** čuva sve i prepušta pogledu lista da izabere prema razmeri: 1:50 i veće fino, 1:100 srednje, 1:200 i manje grubo. Jedan korak koji možete poništiti.

## Dupliranje porodice

Ne morate da počnete od nule. {{ui:Dupliraj}} kopira porodicu sa njenim parametrima, telima i veličinama pod novim nazivom. Kopiju menjate u uredniku; original ostaje kakav je bio.

## Datoteke porodica

- {{ui:Sačuvaj datoteku porodice}} čuva `.ccfamily.json`: parametre, tela i veličine porodice. Otvorite je u drugom modelu sa {{ui:Otvori datoteku porodice…}} u grupi Porodice.
- {{ui:Sačuvaj kao IFC}} čuva porodicu kao malu IFC datoteku: tipove njenih veličina i njenu grupu, prijavljene preko IFC projektne biblioteke. Drugi programi je otvaraju kao skup tipova; BimCraft je otvara kao porodicu ponovo.

Datoteka porodice otvorena ovde čita se kao podatak i proverava se pre nego što se bilo šta upiše. Porodica čiji je ključ već u modelu dolazi kao zasebna porodica. Porodica koja sadrži druge (vidi Porodice unutra, u pomoći za urednik) donosi ih sa sobom: datoteka ih navodi, a model zadržava one koje već ima.

## Porodice u Biblioteci

Otvorite {{ui:Porodice…}} i izaberite {{ui:Iz biblioteke…}} da vidite porodice koje su podeljene u Biblioteci. {{ui:Dodaj u ovaj projekat}} čita jednu kao datoteku porodice: BimCraft proverava svako polje pre nego što išta napravi, porodica dolazi kao sopstvena porodica i otvara se u uredniku. Dodavanje je jedan korak koji možete poništiti. Da podelite sopstvenu, koristite {{ui:Sačuvaj sve kao biblioteku}} i pošaljite datoteku Biblioteci (osoblje Biblioteke objavljuje datoteku porodice komandom, a svaka porodica je sopstvena stavka sa svojim veličinama). Ako Biblioteka ne može da se dostigne, lista to kaže i ništa se ne menja.

## Tipovi drugih programa

Tipovi koje prave drugi programi takođe se prikazuju u grupi Porodice, grupisani po pretpostavci: po delu naziva njihovih elemenata pre prve dvotačke, a inače po nazivima tipova koji se razlikuju samo brojevima. Prozor porodice kaže koju pretpostavku je koristio. Navedeni su i možete izabrati njihove elemente, ali se ovde ne menjaju: nemaju recept porodice.

:::note
Početna vrata i prozori crtaju se tačno kao pre porodica. Datoteke napravljene pre porodica otvaraju se nepromenjene: njihova vrata i prozori prikazuju se pod svojom porodicom, sa veličinama koje se koriste, i prelaze na sopstvenu veličinu prvi put kada ih promenite.
:::

Pogledajte i [Uređivanje porodice](topic:family-editor) i [Vrata i prozori](topic:doors-and-windows).
