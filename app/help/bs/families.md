---
title: Porodice i njihove veličine
summary: Vrata, prozori i namještaj dolaze u porodicama. Svaka veličina porodice je jedan tip u IFC datoteci, pa lista tipova u BimCraft ostaje kratka, dok drugi programi čitaju obične tipove.
keywords: porodica, porodice, tip, tipovi, veličina, veličine, tip vrata, tip prozora, namještaj, sto, polica, ormarić, nova veličina, dupliraj, postavi porodicu, datoteka porodice, ccfamily, ifc biblioteka, biblioteka projekta, grupa, vidljivost, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Šta je porodica

Porodica je jedna vrsta stvari u nekoliko veličina: jedna krilna vrata koja dolaze široka 32, 36 i 42 inča, ili sto koji dolazi dug i kratak. U BimCraft porodicu vidite jednom, sa njenim veličinama ispod, umjesto duge liste tipova.

IFC nema porodica. U datoteci je svaka veličina običan tip (tip vrata, tip prozora, tip namještaja…), a porodica je grupa koja navodi njene veličine. Drugi BIM programi čitaju tipove i grupu onakve kakvi jesu; BimCraft porodicu iz njih čita nazad.

## Gdje ih naći

- Grupa **Porodice** u pregledniku projekta navodi porodice u ovom modelu, sa brojem veličina svake i brojem postavljenih. Ispod njih su **Početne porodice**: vrata i prozori alata za vrata i prozore, te sto, polica i donji ormarić.
- {{ui:Build}} › {{ui:Families…}} prikazuje istu listu u prozoru.
- Kliknite porodicu da je otvorite: njene veličine, vrijednosti svake veličine i koliko elemenata koristi svaku.

## Vrata i prozori

Alati za vrata i prozore navode porodice te vrste, a pored njih **listu veličina**. Odaberite veličinu ili upišite **W** i **H**: širina i visina koju nijedna veličina još nema postaju nova veličina porodice kada postavite vrata. Vrata iste veličine dijele jedan tip.

U {{ui:Properties}} (**Svojstva**), odabrana vrata ili prozor pokazuju svoju **Porodicu** i **Veličinu**. Izaberite drugu veličinu s liste ili upišite novu širinu ili visinu. {{ui:Open the family}} otvara porodicu kojoj pripada.

Okvir svakih vrata ili prozora prati debljinu vlastitog zida, kao i ranije, prije porodica. Tip veličine također čuva vrata nacrtana u zidu od 140 mm, za programe koji čitaju tipove.

## Nova veličina iz ove porodice

1. Otvorite porodicu.
2. Pod **Nova veličina iz ove porodice** upišite njene vrijednosti (Širina, Visina i ostale parametre porodice) i, ako želite, naziv. Bez naziva dobija ime po svojim vrijednostima.
3. Kliknite {{ui:Make the size}}.

Dvije veličine ne mogu imati iste vrijednosti. **Preimenuj** mijenja naziv veličine; **Ukloni** briše veličinu koju niko ne koristi; **Odaberi** bira elemente te veličine.

## Postavljanje namještaja

1. {{ui:Build}} › {{ui:Place family}}, ili {{ui:Place}} u prozoru porodice.
2. U traci odaberite porodicu i njenu veličinu.
3. Kliknite na plan da je postavite na nivo. Pritisnite {{key:R}} da je okrenete za 90° prije klika. {{key:Esc}} zaustavlja.

Svojstva postavljenog komada pokazuju njegovu veličinu, gdje se nalazi i koliko je okrenut; {{key:Delete}} ga uklanja. Svaki komad jedne veličine dijeli oblik te veličine, pa promjena porodice mijenja sve njih.

## Veličine iz tabele

{{ui:Sizes from a table…}} u prozoru porodice čita CSV datoteku (zarez, tačka-zarez ili tabulator). Prvi red imenuje kolone: naziv ili oznaku parametra, i opcionalno `Name`. Dužine su u milimetrima, osim ako ne napišete jedinicu (`1.2 m`, `36 in`). Kolone Da / Ne prihvataju yes, no, true, false, 1 ili 0, a parametar bez kolone zadržava svoju podrazumijevanu vrijednost. Svaki red postaje veličina, u jednom koraku koji možete poništiti; veličina koja već postoji se preskače. Jedan red koji se ne može pročitati, ili koji porodica ne može nacrtati, odbija cijelu tabelu i navodi svoj red. Najviše 200 redova i 1 MB. {{ui:Save the sizes as a table}} upisuje istu tabelu nazad.

## Postavi na svaki element

Parametar označen **Po elementu** u uređivaču (Da / Ne koji dodaje transom, oznaku ili materijal) nije dio veličine: dvoja vrata iste veličine mogu se razlikovati. Odaberite element i **Svojstva** pokazuju te parametre; promijenite jedan i taj element se ponovo crta sa svojim oblikom (namještaj i instalacije dobijaju svoj oblik, a vrata i prozori se ponovo prave u svojim zidovima). Vratite ih sve na podrazumijevane vrijednosti i element se vraća na oblik svoje veličine.

## Nivo detalja

{{ui:Build}} › {{ui:Families…}} › **Nivo detalja** postavlja, za svaku porodicu u modelu, šta se čuva u tijelima i crta u simbolima plana: **Fino** zadržava sve, **Srednje** i **Grubo** izostavljaju dijelove koje uređivač označava kao sitnije (manje datoteke, brži prikazi). **Automatski** čuva sve, a prikaz lista bira po razmjeri: 1:50 i veće fino, 1:100 srednje, 1:200 i manje grubo. Jedan korak koji možete poništiti.

## Dupliraj porodicu

Ne morate početi od nule. {{ui:Duplicate}} kopira porodicu sa njenim parametrima, tijelima i veličinama pod novim nazivom. Izmijenite kopiju u uređivaču; original ostaje kakav je bio.

## Datoteke porodica

- {{ui:Save the family file}} čuva `.ccfamily.json`: parametre porodice, tijela i veličine. Otvorite je u drugom modelu pomoću {{ui:Open a family file…}} u grupi Porodice.
- {{ui:Save as IFC}} čuva porodicu kao malu IFC datoteku: tipove njenih veličina i njenu grupu, deklarisane IFC bibliotekom projekta. Drugi programi je otvaraju kao skup tipova; BimCraft je otvara kao porodicu.

Datoteka porodice otvorena ovdje čita se kao podaci i provjerava se prije nego što se bilo šta upiše. Porodica čiji je ključ već u modelu ulazi kao zasebna porodica. Porodica koja sadrži druge (vidi Porodice unutra, u pomoći za uređivač) donosi ih sa sobom: datoteka ih navodi, a model zadržava one koje već ima.

## Porodice u Biblioteci

Otvorite {{ui:Families…}} i izaberite {{ui:From the Library…}} da vidite porodice koje su podijeljene u Biblioteci. {{ui:Add to this project}} čita jednu kao datoteku porodice: BimCraft provjerava svako polje prije nego što išta napravi, porodica ulazi kao vlastita porodica i otvara se u uređivaču. Dodavanje je jedan korak poništavanja. Da podijelite svoju, koristite {{ui:Save all as a library}} i pošaljite datoteku u Biblioteku (osoblje Biblioteke objavljuje datoteku porodice naredbom, a svaka porodica je zasebna stavka sa svojim veličinama). Ako Biblioteka nije dostupna, lista to kaže i ništa se ne mijenja.

## Tipovi drugih programa

Tipovi napravljeni u drugim programima također se prikazuju u grupi Porodice, grupisani po pretpostavci: po dijelu naziva njihovih elemenata prije prve dvotačke, inače po nazivima tipova koji se razlikuju samo brojevima. Prozor porodice kaže koju pretpostavku je koristio. Navedeni su i možete odabrati njihove elemente, ali se ovdje ne uređuju: nemaju recept porodice.

:::note
Početna vrata i prozori crtaju se tačno kao prije porodica. Datoteke napravljene prije porodica otvaraju se nepromijenjene: njihova vrata i prozori prikazuju se pod svojom porodicom, sa veličinama koje su u upotrebi, i prelaze na vlastitu veličinu prvi put kada ih promijenite.
:::

Pogledajte također [Uređivanje porodice](topic:family-editor) i [Vrata i prozori](topic:doors-and-windows).
