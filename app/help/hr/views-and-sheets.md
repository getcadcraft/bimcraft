---
title: Pogledi, rasponi pogleda i vlastiti listovi
summary: Pronađite svaki tlocrt, pročelje, presjek, 3D pogled, specifikaciju i list u pregledniku projekta, postavite kako se svaki tlocrt presijeca i što prikazuje, napravite oblačiće, nacrtajte linije i šrafure u jednom pogledu, čuvajte postavke u predlošcima pogleda i slažite vlastite listove.
keywords: oblačić, pogled oblačića, pogled detalja, uvećani tlocrt, crtanje, linije detalja, linije crtanja, šrafura, područje šrafure, ispunjeno područje, uzorak ispune, reflektirani tlocrt stropa, rcp, tlocrt stropa, mreža stropa, svjetiljke, preglednik projekta, pogledi, raspon pogleda, izrez, područje izreza, izrez pogleda, mjerilo, podloga, prikaz druge etaže, polutonovi, ravnina reza, visina reza, vrh, dno, dubina pogleda, vidljivost, kategorije, sakrij u pogledu, predložak pogleda, predlošci, list, listovi, zaglavlje, viewport, slaganje listova, raspored, layout, pdf, postavke tlocrta, preglednik
from: ee1d5afe
---

## Što ćete napraviti

Radite na način na koji su organizirani BIM projekti: svaki pogled u jednom popisu, svaki tlocrt presječen tamo gdje želite, iste postavke za više tlocrta kroz predložak i listovi koje sami slažete.

## Preglednik projekta

1. Uključite {{ui:Crtanje}}. Lijeva ploča ima {{ui:Preglednik projekta}} ispod modela.
2. Popisuje:
   - **Tlocrti etaža**: svaku etažu. Kliknite jednu da vidite njen tlocrt. Gumb s klizačem pored nje postavlja njezin raspon pogleda (ispod). Tlocrt koji slijedi predložak prikazuje ime predloška.
   - **Tlocrti stropova**: reflektirani tlocrt stropa svake etaže (ispod).
   - **Oblačići**: svaki oblačić s pogledom na kojem je nacrtan i {{ui:Novi oblačić}}. **Nedostaje** popisuje oblačiće čiji je pogled nestao.
   - **Pročelja** i **Presjeci**: četiri strane i svaka linija presjeka. Kliknite jednu da otvorite komplet crteža u kojem su nacrtani.
   - **3D pogledi**: pogledi koje ste spremili s {{ui:Pogledi}}.
   - **Specifikacije**: kliknite jednu da se prikaže ispod tlocrta.
   - **Listovi**: listovi koje ste napravili, {{ui:Novi list}}, i {{ui:Komplet crteža…}} za cijeli komplet napravljen iz modela.
   - **Predlošci pogleda**, s {{ui:Novi predložak}}, i **Veze** (povezani modeli).

## Postavljanje raspona pogleda tlocrta

1. Kliknite gumb s klizačem pored etaže pod **Tlocrti etaža**.
2. Postavite visine, iznad te etaže:
   - **Presjek na**: mjesto na kojem tlocrt presijeca zidove, vrata i prozore (1200 mm, otprilike 4 ft, osim ako ne promijenite).
   - **Vrh**: stvari iznad presjeka i ispod vrha crtaju se isprekidano (visoki ormarić, greda). Ostavite prazno za visinu etaže.
   - **Dno** i **Dubina ispod dna**: stvari niže od presjeka crtaju se tankim linijama do dna i toliko ispod njega.
3. Pod **Prikazano u ovom tlocrtu** isključite ono što ovaj tlocrt izostavlja: namještaj, prostorije, stupove i tako dalje.
4. Da izostavite pojedinačne elemente: odaberite ih u tlocrtu ili 3D pogledu, otvorite dijaloški okvir i kliknite {{ui:Sakrij odabrane ovdje}}. {{ui:Prikaži sve}} ih vraća.
5. Kliknite {{ui:Upotrijebi ove postavke}}.

Tlocrt se odmah ponovno presijeca, a komplet crteža i vaši listovi slijede ga. Isječak oblaka točaka također slijedi visinu presjeka.

## Izrez tlocrta, mjerilo i drugi tlocrt ispod

Sve tri su u istom dijaloškom okviru (gumb s klizačem pored etaže):

- **Mjerilo**: mjerilo po kojem se tlocrt ispisuje ({{ui:Ispis}} na traci tlocrta) i na koje dolazi na list. **Prilagodi** odabire najveće standardno mjerilo koje stane.
- **Područje izreza**: kliknite {{ui:Nacrtaj na tlocrtu…}}, zatim kliknite jedan kut i suprotni kut na tlocrtu ({{key:Esc}} zaustavlja). Tlocrt izvan područja je zastrt na zaslonu, a i dalje možete raditi tamo; ispisan, na listovima i u kompletu crteža tlocrt prikazuje samo ono što je unutra. {{ui:Očisti}} uklanja izrez. {{ui:Prilagodi}} prilagođava izrez.
- **Podloga**: odaberite drugu etažu. Njezini zidovi, presječeni elementi, vrata i prozori crtaju se svijetlo ispod ovog tlocrta, da poravnate stvari s etažom ispod ili iznad. Ovdje ih ne možete odabrati, a ispisuju se svijetlosivo.

Pogled predloška nosi mjerilo uz visine i kategorije. Područje izreza i podloga uvijek pripadaju samo jednom tlocrtu.

## Tlocrt stropa etaže

Svaka etaža ima reflektirani tlocrt stropa pored svojeg tlocrta: tlocrt gledan odozdo, za raspored stropova i onoga što o njima visi.

1. Kliknite etažu pod **Tlocrti stropova** u pregledniku ili odaberite {{ui:Tlocrt stropa}} pored etaže na traci tlocrta.
2. Zidovi su presječeni na 2300 mm (otprilike 7'-6"). Crta se ono što leži iznad tog presjeka i ispod visine etaže: stropovi s mrežom i oznakom visine (`CLG 2438`), svjetiljke, grede. Vrata, prozori i ono što leži ispod presjeka su izostavljeni.
3. Za izradu stropa koristite {{ui:Strop}} kao na tlocrtu etaže, zatim ga odaberite i u Svojstvima izaberite njegov **Uzorak**. Vidi [Prostorije, podovi, stropovi i krovovi](topic:floors-and-roofs).
4. Za objesiti svjetiljku o njega postavite stavku iz knjižnice dok je prikazan tlocrt stropa: ide u **Na stropu**. Vidi [Postavljanje opreme i namještaja iz knjižnice](topic:place-from-library).
5. Gumb s klizačem pored tlocrta stropa postavlja njegov presjek i vrh, mjerilo, kategorije, područje izreza i podlogu, kao kod tlocrta etaže. Tlocrti stropova ne primaju predložak pogleda.

Crta se jednako orijentiran kao tlocrt etaže (reflektirani tlocrt, a ne zrcalna slika). Strop niži od presjeka se ne crta: spustite presjek za tlocrt stropa te etaže. Tlocrti stropova idu na vaše listove kao tlocrti; komplet crteža ih sam ne dodaje.

## Napravite oblačić

Oblačić prikazuje dio tlocrta uvećan, u vlastitom mjerilu, kao vlastiti pogled: kuhinju, stubište, kut zida.

1. Prikažite tlocrt, tlocrt stropa ili oblačić kojem pripada.
2. Odaberite {{ui:Anotiraj}} › {{ui:Oblačić}} na traci tlocrta (ili {{ui:Novi oblačić}} u pregledniku), zatim kliknite jedan kut područja i suprotni kut. {{key:Esc}} zaustavlja.
3. Oblačić se pravi u 1:20 (1/2" = 1'-0" u stopama i inčima). Njegov pravokutnik i okrugla oznaka crtaju se na tlocrtu.
4. Kliknite oznaku s {{ui:Odaberi}}, ili oblačić u pregledniku, da ga otvorite: tlocrt pokazuje samo to područje, u mjerilu oblačića. Traka kaže {{ui:Oblačić:}} i njegovo ime; {{ui:Gore}} vraća na pogled na kojem je nacrtan.
5. Gumb s klizačem pored njega (u pregledniku ili na traci) preimenuje ga, mijenja mu mjerilo, ponovno crta njegov pravokutnik ili ga briše.

Oblačić pokazuje ono što njegov pogled pokazuje: isti presjek, iste kategorije, stropove tlocrta stropa. Oblačić oblačića radi isto. Stavite oblačić na list kao tlocrt; njegova oznaka tada kaže gdje se nalazi (`1 / A-501`: prvi pogled na listu A-501). {{ui:Ispis}} u oblačiću ispisuje samo to područje u njegovom mjerilu.

Brisanje oblačića briše i oblačiće nacrtane unutar njega te linije i šrafure nacrtane u njima (pitat ćete se prvo). Ako se obriše etaža na kojoj je oblačić nacrtan, oblačić ostaje pod **Nedostaje** dok ga ne obrišete, a listovi na kojima je prijavljuju ga kao nedostajućeg.

## Crtajte linije i šrafure u jednom pogledu

Crtanje je 2D rad koji pripada samo jednom pogledu: bilješke linijama, šrafirano područje betona ili zemlje, ispunjeno područje. Nikad nije u 3D pogledu niti u drugom tlocrtu.

1. Prikažite tlocrt etaže, tlocrt stropa ili oblačić u kojem crtate.
2. Odaberite iz {{ui:Anotiraj}} na traci tlocrta:
   - {{ui:Linija}}: kliknite gdje počinje i gdje završava. Sljedeća linija počinje gdje je završila zadnja; {{key:Enter}} počinje ispočetka.
   - {{ui:Polilinija}}: kliknite njezine točke; {{key:Enter}} ili dvostruki klik je završava, klik na prvu točku je zatvara.
   - {{ui:Pravokutnik}}: dva suprotna kuta.
   - {{ui:Područje šrafure}}: odaberite **Uzorak** (Puna ispuna, Dijagonalno, Križno, Beton, Izolacija, Zemlja) i njegovo mjerilo na traci, zatim kliknite kutove; {{key:Enter}}, dvostruki klik ili klik na prvi kut ga zatvara. S označenim {{ui:Ispuni prostoriju}}, jedan klik u prostoriji šrafira njezin obris.
3. Točke se hvataju kao kod zidova; {{key:Shift}} drži liniju pod pravim kutom, a duljinu možete upisati kao kod zidova. {{key:Backspace}} uklanja zadnju točku.

Odaberite liniju ili šrafuru s {{ui:Odaberi}} na tlocrtu. Svojstva mijenjaju uzorak i mjerilo šrafure i imaju {{ui:Pomakni…}} (kliknite točku s koje pomičete, pa gdje ide). {{key:Delete}} je briše. Svaka linija, šrafura i promjena je jedan korak.

Linije i šrafure ispisuju se s tlocrtom, idu na vaše listove s njim i nalaze se u kompletu crteža. Isključite **Anotacije** u rasponu pogleda da ih izostavite iz tog pogleda.

## Čuvajte postavke u predlošku pogleda

1. Kliknite {{ui:Novi predložak}} u pregledniku, ili {{ui:Spremi kao predložak…}} u rasponu pogleda tlocrta (taj tlocrt tada koristi njega).
2. Dajte mu ime, postavite visine i kategorije, i kliknite {{ui:Spremi predložak}}.
3. U bilo kojem rasponu pogleda tlocrta odaberite predložak. Tlocrt preuzima njegove visine i kategorije; promijenite predložak da promijenite svaki tlocrt koji ga koristi. Elementi koje ste sakrili jedan po jedan ostaju skriveni u svom tlocrtu.
4. Kliknite predložak u pregledniku da ga promijenite, preimenujete ili obrišete. Brisanje ostavlja njegove tlocrte s njegovim postavkama kao njihovim vlastitim.

## Slaganje vlastitog lista

1. Kliknite {{ui:Novi list}}. Upišite njegov broj i naslov te odaberite papir.
2. Kliknite {{ui:Dodaj}} pored tlocrta, tlocrta stropa, oblačića, pročelja, presjeka ili specifikacije. Ulazi u sredinu lista.
3. Povucite ga na mjesto. Kad je odabran, izaberite **Mjerilo**, ili ostavite mjerilo samog tlocrta (ako ga ima), inače mjerilo koje stane u trećinu lista. {{ui:Ukloni s lista}} ga uklanja.
4. Kliknite {{ui:Spremi list}}. Pojavljuje se pod **Listovi**; kliknite ga da ga kasnije promijenite.
5. {{ui:Preuzmi kao PDF}} sprema taj list kao jednu stranicu.

## Što biste trebali vidjeti

- Tlocrti presječeni na vašim visinama, s isprekidanim onim što je iznad presjeka i izostavljenim onim što ste isključili.
- Tlocrt s izrezom zastrt izvan svog područja na zaslonu i presječen na njega na papiru, u mjerilu koje ste mu dali.
- Tlocrt stropa s mrežama stropova i oznakama visine te svjetiljkama na stropu.
- Oblačići s pravokutnikom i oznakom na tlocrtu, svaki se otvara u svom mjerilu.
- Linije i šrafure samo u pogledu u kojem ste ih nacrtali.
- Vaši listovi se ponovno crtaju iz modela svaki put kad ih otvorite, pa uvijek odgovaraju modelu. Pogled čija je etaža ili linija presjeka obrisana prijavljuje se, ne crta se.
- Svaka promjena ovdje je jedan korak: {{key:Mod+Z}} je poništava.

:::note
Sve ovo se čuva u IFC datoteci kao skupovi svojstava koje drugi programi ne diraju: raspon pogleda i tlocrt stropa svake etaže na etaži, predlošci, oblačići i vaši listovi na projektu. Linije i šrafure su IFC anotacije u svojoj etaži, pa ih drugi programi vide kao 2D krivulje i šrafirana područja (vlastiti crtež svakog uzorka), iako ne i kojem pogledu pripadaju.
:::

:::tip
Drugi BIM programi presjek zovu rasponom pogleda ili ravninom reza, predloške predlošcima pogleda ili postavkama pogleda, linije crtanja linijama detalja, a područja šrafure ispunjenim područjima. Ideje su iste; postavke pogleda ne putuju s njima.
:::
