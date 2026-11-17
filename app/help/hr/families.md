---
title: Obitelji i njihove veličine
summary: Vrata, prozori i namještaj dolaze u obiteljima. Svaka veličina obitelji je jedan tip u IFC datoteci, pa popis tipova u BimCraftu ostaje kratak, dok drugi programi čitaju obične tipove.
keywords: obitelj, obitelji, tip, tipovi, veličina, veličine, tip vrata, tip prozora, namještaj, stol, polica, ormarić, nova veličina, dupliciraj, postavi obitelj, datoteka obitelji, ccfamily, ifc knjižnica, knjižnica projekta, grupa, vidljivost, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Što je obitelj

Obitelj je jedna vrsta stvari u nekoliko veličina: jedna jednokrilna vrata koja dolaze široka 32, 36 i 42 in, ili stol koji dolazi dugačak i kratak. U BimCraftu obitelj vidite jednom, s njezinim veličinama ispod nje, umjesto dugačkog popisa tipova.

IFC nema obitelji. U datoteci je svaka veličina običan tip (tip vrata, tip prozora, tip namještaja…), a obitelj je grupa koja navodi svoje veličine. Drugi BIM programi čitaju tipove i grupu onakve kakvi jesu; BimCraft iz njih ponovno čita obitelj.

## Gdje ih naći

- Grupa **Obitelji** u pregledniku projekta navodi obitelji u ovom modelu, s brojem veličina svake i brojem postavljenih. Ispod njih su **Početne obitelji**: vrata i prozori alata Vrata i Prozor, te stol, jedinica police i donji ormarić.
- {{ui:Izgradnja}} › {{ui:Obitelji…}} prikazuje isti popis u prozoru.
- Kliknite obitelj da je otvorite: njezine veličine, vrijednosti svake veličine i koliko elemenata koristi svaku.

## Vrata i prozori

Alati Vrata i Prozor navode obitelji te vrste, a pored njih **popis veličina**. Odaberite veličinu ili upišite **W** i **H**: širina i visina koju nijedna veličina još nema postaje nova veličina obitelji kad postavite vrata. Vrata iste veličine dijele jedan tip.

U {{ui:Svojstva}} odabrana vrata ili prozor prikazuju svoju **Obitelj** i **Veličinu**. Odaberite drugu veličinu s popisa ili upišite novu širinu ili visinu. {{ui:Otvori obitelj}} otvara obitelj kojoj pripadaju.

Svaki okvir vrata ili prozora prati debljinu vlastitog zida, kao i prije obitelji. Tip veličine također čuva prikaz vrata u zidu od 140 mm, za programe koji čitaju tipove.

## Nova veličina iz ove obitelji

1. Otvorite obitelj.
2. Pod **Nova veličina iz ove obitelji** upišite njezine vrijednosti (Širina, Visina i ostale parametre obitelji) i, ako želite, naziv. Bez naziva dobiva naziv prema vrijednostima.
3. Kliknite {{ui:Izradi veličinu}}.

Dvije veličine ne mogu imati iste vrijednosti. **Preimenuj** mijenja naziv veličine; **Ukloni** briše veličinu koju nitko ne koristi; **Odaberi** odabire elemente te veličine.

## Postavljanje namještaja

1. {{ui:Izgradnja}} › {{ui:Postavi obitelj}}, ili {{ui:Postavi}} u prozoru obitelji.
2. U traci odaberite obitelj i njezinu veličinu.
3. Kliknite na tlocrt da ga postavite na razinu. Pritisnite {{key:R}} da ga zakrenete za 90° prije klika. {{key:Esc}} zaustavlja postavljanje.

{{ui:Svojstva}} postavljenog komada pokazuju njegovu veličinu, gdje se nalazi i koliko je zakrenut; {{key:Delete}} ga uklanja. Svaki komad jedne veličine dijeli oblik te veličine, pa promjena obitelji mijenja sve njih.

## Veličine iz tablice

{{ui:Veličine iz tablice…}} u prozoru obitelji čita CSV datoteku (zarez, točka-zarez ili tabulator). Prvi redak imenuje stupce: naziv ili oznaku parametra i, po želji, `Name`. Duljine su u milimetrima, osim ako ne napišete jedinicu (`1.2 m`, `36 in`). Stupci Da / Ne prihvaćaju yes, no, true, false, 1 ili 0, a parametar bez stupca zadržava zadanu vrijednost. Svaki redak postaje veličina, u jednom koraku koji možete poništiti; veličina koja već postoji preskače se. Jedan redak koji se ne može pročitati ili koji obitelj ne može nacrtati odbija cijelu tablicu i navodi svoj redak. Najviše 200 redaka i 1 MB. {{ui:Spremi veličine kao tablicu}} zapisuje istu tablicu natrag.

## Postavlja se na svaki element

Parametar označen **Po elementu** u uređivaču (Da / Ne koji dodaje nadsvjetlo, oznaku ili materijal) nije dio veličine: dvoja vrata iste veličine mogu se razlikovati. Odaberite element i {{ui:Svojstva}} prikazuju te parametre; promijenite jedan i taj element se ponovno crta sa svojim oblikom (namještaj i armature dobivaju vlastiti oblik, a vrata i prozori ponovno se izrađuju u svojim zidovima). Vratite ih sve na zadane vrijednosti i element se vraća na oblik svoje veličine.

## Razina detalja

{{ui:Izgradnja}} › {{ui:Obitelji…}} › **Razina detalja** određuje, za svaku obitelj u modelu, što se sprema u tijela i crta u simbolima tlocrta: **Fina** zadržava sve, a **Srednja** i **Gruba** izostavljaju dijelove koje uređivač označava kao sitnije (manje datoteke, brži prikazi). **Automatska** sprema sve i prepušta pogledu lista da odabere prema mjerilu: 1:50 i veće fino, 1:100 srednje, 1:200 i manje grubo. Jedan korak koji možete poništiti.

## Dupliciraj obitelj

Ne morate kretati od nule. {{ui:Dupliciraj}} kopira obitelj s njezinim parametrima, tijelima i veličinama pod novim nazivom. Kopiju izmijenite u uređivaču; izvornik ostaje kakav je bio.

## Datoteke obitelji

- {{ui:Spremi datoteku obitelji}} sprema `.ccfamily.json`: parametre, tijela i veličine obitelji. Otvorite je u drugom modelu pomoću {{ui:Otvori datoteku obitelji…}} u grupi Obitelji.
- {{ui:Spremi kao IFC}} sprema obitelj kao malu IFC datoteku: tipove njezinih veličina i njezinu grupu, označene IFC knjižnicom projekta. Drugi programi je otvaraju kao skup tipova; BimCraft je otvara kao obitelj.

Datoteka obitelji otvorena ovdje čita se kao podatak i provjerava prije nego se bilo što zapiše. Obitelj čiji ključ već postoji u modelu ulazi kao zasebna obitelj. Obitelj koja sadrži druge (vidi {{ui:Obitelji unutra}} u pomoći za uređivač) donosi ih sa sobom: datoteka ih navodi, a model zadržava one koje već ima.

## Obitelji u Knjižnici

Otvorite {{ui:Obitelji…}} i odaberite {{ui:Iz knjižnice…}} da vidite obitelji koje su podijeljene u Knjižnici. {{ui:Dodaj u ovaj projekt}} čita jednu kao datoteku obitelji: BimCraft provjerava svako polje prije nego što išta izradi, obitelj ulazi kao zasebna obitelj i otvara se u uređivaču. Dodavanje je jedan korak poništavanja. Da podijelite svoju, koristite {{ui:Spremi sve kao knjižnicu}} i pošaljite datoteku u Knjižnicu (osoblje Knjižnice objavljuje datoteku obitelji naredbom, a svaka obitelj je zasebna stavka sa svojim veličinama). Ako se Knjižnica ne može doseći, popis to kaže i ništa se ne mijenja.

## Tipovi drugih programa

Tipovi koje su izradili drugi programi također se prikazuju u grupi Obitelji, grupirani prema pretpostavci: prema dijelu naziva elemenata prije prve dvotočke, a inače prema nazivima tipova koji se razlikuju samo brojevima. Prozor obitelji kaže koju je pretpostavku upotrijebio. Oni su navedeni i možete odabrati njihove elemente, ali se ovdje ne uređuju: nemaju recept obitelji.

:::note
Početna vrata i prozori crtaju se točno kao prije obitelji. Datoteke izrađene prije obitelji otvaraju se nepromijenjene: njihova vrata i prozori prikazuju se pod svojom obitelji, s veličinama koje su u upotrebi, a prelaze na vlastitu veličinu prvi put kad ih promijenite.
:::

Vidi također [Uređivanje obitelji](topic:family-editor) i [Vrata i prozori](topic:doors-and-windows).
