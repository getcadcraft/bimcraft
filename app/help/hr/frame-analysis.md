---
title: Analiza nosive konstrukcije okvira
summary: Sile, reakcije i progibi greda, stupova i dijagonala modela pod opterećenjima i kombinacijama koje postavite, spremljeni u IFC. Pomoćno sredstvo za analizu, a ne provjera prema normi.
keywords: analiza, jedinice, stope i palci, jedinica prikaza, analiza konstrukcije, provjere proračuna, iskoristivost, valjani, zavareni, AISC 360, EN 1993-1-1, analiza okvira, analitički model, metoda krutosti, opterećenja, slučaj opterećenja, kombinacija, stalno opterećenje, korisno opterećenje, vlastita težina, reakcije, moment savijanja, poprečna sila, uzdužna sila, progib, deformirani oblik, oslonci, zglob, uklještenje, otpuštanje, izvješće, pdf, csv, craftscript, frame3d, grede, stupovi, štapovi
from: b93b58c4
---

Kartica {{ui:Analiza}} s desne strane pronalazi sile u gredama, stupovima i dijagonalama otvorenog modela, reakcije u podnožjima stupova i koliko se štapovi savijaju, za opterećenja koja zadate.

:::warning
Riječ je o **pomoćnom sredstvu za analizu, a ne o provjeri prema normi**. Analiza ne primjenjuje nijednu projektnu normu: ne dimenzionira elemente niti provjerava nosivosti i ne bira faktore opterećenja. Inženjer provjerava analitički model, njegova opterećenja i oslonce te odlučuje što brojevi znače. Blok {{ui:Provjere proračuna}} ispod nje provjerava valjane čelične I-profile prema AISC 360 ili EN 1993-1-1, što je pomoć dok ih inženjer ne pregleda: vidi [Provjere proračuna](topic:frame-analysis#design-checks).
:::

## Pokretanje

1. Otvorite IFC model i karticu {{ui:Analiza}}.
2. Odaberite jednu ili više greda, stupova ili dijagonala u prikazu, odaberite {{ui:Slučaj}}, {{ui:Opterećenje}} i {{ui:Smjer}}, upišite vrijednost i pritisnite {{ui:Dodaj opterećenje}}: kN/m za opterećenje raspoređeno duž štapa, kN za koncentrirano opterećenje.
3. Pritisnite {{ui:Pokreni analizu}}.

Tablica navodi najveću uzdužnu silu svakog štapa, poprečne sile, momente savijanja, torziju i progib; kliknite naziv štapa da ga odaberete u prikazu. Ispod su reakcije. {{ui:Na modelu}} crta deformirani oblik ili jedan učinak kao dijagram uz svaki štap. Rezultati zastarijevaju kada se model promijeni: pokrenite ponovno.

Svako opterećenje i postavka je jedna promjena na popisu {{ui:Promjene}}: {{ui:Poništi}} je vraća, a {{ui:Spremi kao IFC}} ih čuva u datoteci (svojstveni skup projekta `CadCraft_Analysis`), pa se pri sljedećem otvaranju modela ovdje njegova opterećenja i dalje nalaze.

## Kako se izrađuje analitički model

- Svaki IfcBeam, IfcColumn i IfcMember čiji je oblik jedna ravna ekstruzija postaje štap na središnjoj liniji presjeka. Njegova svojstva presjeka dolaze iz profila: I, U, L i T oblici, pravokutnici i cijevi, kružnice i kružne cijevi ili bilo koja zatvorena kontura (tada je konstanta torzije procjena, navedena u izvješću). Sve drugo se izostavlja i broji.
- U modelu grede završavaju na licu stupa i leže ispod poda. Svaki kraj štapa vodi se duž vlastite linije na os štapa u koji se ulazi, kada je ta os blizu (unutar otprilike veličine presjeka), i taj se štap tamo dijeli. Izvješće navodi koliko je krajeva pomaknuto.
- **Podnožja stupova** na koja ništa ne ide ispod su oslonci: uklješteni (početak) ili zglobni (držani na mjestu i protiv uvijanja, slobodni da se okreću).
- **Krajevi greda** su kruti ili zglobni prema pravilu {{ui:Krajevi greda bez spoja}}; **dijagonale** (IfcMember) su zglobne na oba kraja. Odaberite jedan štap da njegovim krajevima ili podnožju stupa dodijelite vlastito pravilo.
- Materijali po nazivu: beton (E = 30 GPa), drvo (E = 11 GPa), inače čelik (E = 200 GPa).

Ako se okvir može pomaknuti bez savijanja ičega — mehanizam — analiza staje i kaže gdje i u kojem smjeru.

## Slučajevi, kombinacije, predznaci i izvješće

Analiza počinje s **Stalno** (vlastita težina), **Korisno** i **Stalno + korisno**; dodajte slučajeve i kombinacije s faktorima koje traži vaša projektna norma. N > 0 je vlak; My > 0 stavlja lokalnu −z stranu štapa u vlak (greda koja se pod gravitacijom savija ima My > 0). {{ui:Izvješće (PDF)}} i {{ui:Izvješće (CSV)}} sadrže pretpostavke, presjeke, slučajeve, reakcije s njihovim zbrojevima, sile štapova, pomake i ovojnicu. {{ui:Izvezi kao CraftScript}} zapisuje okvir za radni prostor Script u PartCraftu, gdje funkcija knjižnice `frame3d` rješava ga u čitljivom kodu.

Metoda je metoda izravne krutosti, linearna i prvog reda, osim ako označite Drugi red (P-Delta), a provjerena je prema udžbeničkim primjerima.

**Drugi red (P-Delta).** Označite *Drugi red (P-Delta)* uz Pokreni: svaka kombinacija rješava se ponovno, s uzdužnim silama štapova koje djeluju na deformirani okvir (svaki štap rezan je na 4 dijela, pa se računa i savijanje štapa između krajeva), dok se uzdužne sile ne ustale. Redak rezultata daje broj prolaza i koliko je narasla bočna deformacija; momenti, progibi, provjere proračuna i izvješće tada koriste ove rezultate. Iznad elastičnog kritičnog opterećenja okvira izvođenje staje i to kaže. Riječ je o elastičnom modelu s malim rotacijama, samo savijanju, bez redukcije krutosti i bez fiktivnih opterećenja (sama po sebi nije metoda izravne analize AISC); ploče, zidovi i kruti podovi ostaju prvog reda.

**Tlak poda na ploče.** Za betonske ploče (analiza čita ploču kao ploče kada je materijal beton), u bloku Opterećenja je {{ui:Tlak na svaku ploču}}: upišite kN/m², odaberite gornji slučaj i pritisnite {{ui:Dodaj na ploče}}. Djeluje na svaku ploču koju je analiza pronašla, prema dolje, i navodi se s poveznicom Ukloni. To je jedan tlak za sve ploče, a ne po ploči, i nije normativno opterećenje: upišite vrijednost koju vam da inženjer.

**Prirodne frekvencije (konačni elementi).** Blok {{ui:Konačni elementi: vlastite frekvencije}} ispod rezultata nalazi najniže oblike istog modela pomoću motora konačnih elemenata: grede s njihovim otpuštanjima krajeva, ploče i zidovi kao ravne četveročvorne ljuske, kruti podovi, oslonci. Odaberite broj oblika (3, 6, 10 ili 20) i element ploče (četveročvorna ljuska za debele ili tanke ploče, ili element tanke ploče) te pritisnite {{ui:Pronađi frekvencije}}. Tablica daje frekvenciju svakog oblika u Hz, njegov period u sekundama i njegovu efektivnu modalnu masu duž X, Y i Z kao udio mase koja se može pomicati. {{ui:Prikaži na modelu}} crta bilo koji oblik na način kao što se crta deformirani oblik. Masa je gustoća materijala puta volumen: opterećenja ne dodaju masu, a materijal bez gustoće je nema. Izvješće (PDF, CSV) sadrži tablicu. Riječ je samo o elastičnim malim pomacima, a seizmičko ili vjetrovno opterećenje ovdje se ne stvara prema normi. Nije provjera prema normi; inženjer pregledava rezultate.

**Spektar odziva, vremenska povijest i pushover.** Tri bloka dolaze ispod frekvencija i koriste isti model konačnih elemenata. Masa za sve njih je gustoća materijala plus opterećenja usmjerena prema dolje za označene slučajeve, svako pomnoženo faktorom koji upišete (na primjer Stalno s 1, a Korisno s udjelom koji računate kao masu).

{{ui:Spektar odziva}} čita svaki oblik s spektra koji zadate (tablica perioda i ubrzanja ili oblik prema ASCE 7 iz SDS, SD1 i TL; gumb {{ui:Use the Seismic block values}} kopira te vrijednosti iz bloka {{ui:Potres}}) i kombinira oblike pomoću CQC, SRSS, pravila 10 % ili apsolutnog zbroja, a zatim spaja smjerove X, Y i Z (100 % + 30 % ili SRSS). Daje posmičnu silu u temelju, etažne pomake, sile na krajevima štapova i tablicu oblika koja upozorava kada oblici koji se koriste nose manje od 90 % mase. Rezultate možete skalirati faktorom ili do posmične sile u temelju koju upišete; blok sam nikada ne računa tu posmičnu silu. Rezultati nemaju predznak.

{{ui:Vremenska povijest}} pokreće ubrzanje tla modalnom superpozicijom (točno za ravne crte zapisa između točaka) ili izravnom integracijom (Newmarkova srednja ubrzanja s Rayleighovim prigušenjem). Ulaz je izmišljena sinusoida ili impuls (uvijek označen kao sintetički), zapis koji zalijepite ili tekstualna datoteka koju otvorite (vrijeme i ubrzanje, jedno ubrzanje po retku s korakom, ili datoteka u stilu PEER sa zaglavljem DT=; u g ili m/s²). Daje pomak krova i posmičnu silu u temelju u odnosu na vrijeme, pomak svake razine i ovojnicu sila na krajevima štapova. Modeli s vrlo dugim zapisom zadržavaju ga samo za sesiju.

{{ui:Pushover}} gura krov bočno u malim koracima (oblik kao prvi oblik ili jednoliko), s plastičnim zglobovima na krajevima štapova koji imaju I-oblik. Zglob popušta pri plastičnom momentu koji pada kako uzdužna sila raste (izračunato iz nacrtanog oblika, zaobljenja zanemarena); očvršćivanje je neobavezno, P-delta je neobavezna, a gravitacijska kombinacija može se primijeniti prvo. Daje krivulju kapaciteta (posmična sila u temelju u odnosu na pomak krova), prvi zglob te stanje i plastičnu rotaciju svakog zgloba. {{ui:Pokreni nelinearnu vremensku povijest}} pokreće iste zglobove pod zapisom bloka Vremenska povijest na malim modelima. Zglobovi nastaju samo na krajevima štapova (postavite čvor tamo gdje bi zglob trebao nastati unutar raspona); štap otpušten na oba kraja nema ih; popuštanje i izvijanje dijagonala nisu modelirani; ploče i zidovi ostaju elastični; kriteriji prihvaćanja nisu dani. Nije provjera prema normi; inženjer pregledava rezultate. Postavke se spremaju s modelom, a izvješće sadrži tablice.

Još nije izrađeno: izvijanje, korekcija nedostajuće mase za spektar odziva, skaliranje zapisa, kriteriji prihvaćanja za zglobove (dinamički odziv je tu, gore), površinska opterećenja osim jednog tlaka na svaku ploču, ekscentričnosti štapova, dijagonale samo za vlak, zidovi i ploče u okviru, provjere proračuna prema normi za zavarene oblike i za presjeke osim valjanih I-profila. Vidi [Još nije izrađeno](topic:not-built-yet).

## Jedinice

Duljine slijede jedinicu koju odaberete na traci alata ({{ui:Jedinice}}), kao i ostatak BimCraft-a: položaje opterećenja koje upisujete i vidite ({{ui:Iz}}, {{ui:U}}, {{ui:Na}}), točke opterećenja čvorova i reakcija, visine etaža u {{ui:Potres}}, te stupce progiba i pomaka (stope i palci prikazuju te male duljine kao decimalne palce). Jedinicu promijenite bilo kada; kartica se ponovno iscrta. Sile ostaju u kN i kN·m, a izvješće (PDF, CSV) i datoteka CraftScript ostaju u milimetrima s upisanom jedinicom. Dimenzije presjeka, promjeri šipki i zaštitni slojevi u bloku {{ui:Beton}} ostaju u milimetrima, kako su i imenovani.

## Provjere proračuna

Blok {{ui:Provjere proračuna}} (isti kao u DetailCraftu) uzima {{ui:Projektni propis}}, ASCE 7 + AISC 360 ili EN 1990 + EN 1993-1-1, i {{ui:Kvaliteta čelika}}. Dajte svakom slučaju opterećenja njegovu vrstu (stalno, korisno, vjetar …) i {{ui:Izradi kombinacije}} zapisuje kombinacije opterećenja norme iz vaših slučajeva; analiza ih tada pokreće kao svaku kombinaciju.

{{ui:Provjeri štapove}} zatim provjerava svaki **valjani čelični I-profil** DetailCraftovim provjerama (vlak, tlak s izvijanjem, savijanje s bočno-torzijskim izvijanjem, posmik, savijanje s uzdužnom silom, progib; klauzule su u izvješću) i pokazuje koliko kapaciteta koristi, obojeno na modelu. Riječ je o **pomoći dok je inženjer ne pregleda**.

**Koji se štapovi provjeravaju.** IFC profil ne kaže je li čelični I-profil valjan ili zavaren, pa BimCraft to smatra valjanim samo kada je naziv profila (inače naziv tipa elementa) veličina iz tablica AISC W ili S ili tablica EN 10365 IPE, HEA ili HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **i** visina, širina, struk i pojas u datoteci odgovaraju toj veličini unutar 1 %. Svaki drugi I-profil (limeni nosač, veličina pod drugim nazivom, izmijenjena veličina) uzima se kao zavaren i vraća se **nije provjereno**, kao i cijevi, kutnici, U-profili i drugi presjeci, vitki dijelovi i torzija. Te štapove provjerite s inženjerom.
