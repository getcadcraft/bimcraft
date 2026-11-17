---
title: Analiza konstruktivnog okvira
summary: Sile, reakcije i progibi greda, stubova i dijagonala modela pod opterećenjima i kombinacijama koje postavite, sačuvani u IFC-u. Pomoć pri analizi, a ne provjera po propisu.
keywords: analiza, jedinice, stope i inči, jedinica prikaza, konstruktivna analiza, provjere projekta, iskorištenost, valjani, zavareni, AISC 360, EN 1993-1-1, analiza okvira, analitički model, metoda krutosti, opterećenja, slučaj opterećenja, kombinacija, stalno opterećenje, korisno opterećenje, vlastita težina, reakcije, moment savijanja, poprečna sila, normalna sila, progib, deformisani oblik, oslonci, zglobno, uklješteno, otpuštanje, izvještaj, pdf, csv, craftscript, frame3d, grede, stubovi, elementi
from: b93b58c4
---

Kartica {{ui:Analiza}} s desne strane nalazi sile u gredama, stubovima i dijagonalama otvorenog IFC modela, reakcije u podnožjima stubova i koliko se elementi savijaju, za opterećenja koja zadate.

:::warning
To je **pomoć pri analizi, a ne provjera po propisu**. Analiza ne primjenjuje projektni normativ: ne dimenzioniše elemente niti provjerava nosivosti, i ne bira faktore opterećenja. Inženjer provjerava analitički model, njegova opterećenja i oslonce, i odlučuje šta brojevi znače. Blok {{ui:Provjere projekta}} ispod nje provjerava valjane čelične I-profile prema AISC 360 ili EN 1993-1-1, što je pomoć dok inženjer ne pregleda: pogledajte [Provjere projekta](topic:frame-analysis#design-checks).
:::

## Pokretanje

1. Otvorite IFC model i karticu {{ui:Analiza}}.
2. Odaberite jednu ili više greda, stubova ili dijagonala u prikazu, izaberite {{ui:Slučaj}}, {{ui:Opterećenje}} i {{ui:Smjer}}, upišite vrijednost i pritisnite {{ui:Dodaj opterećenje}}: kN/m za opterećenje raspoređeno duž elementa, kN za koncentrisanu silu.
3. Pritisnite {{ui:Pokreni analizu}}.

Tabela navodi najveću uzdužnu silu, poprečne sile, momente savijanja, uvijanje i progib svakog elementa; kliknite na naziv elementa da ga odaberete u prikazu. Ispod su reakcije. {{ui:Na modelu}} crta deformisani oblik ili jedan dijagram uz svaki element. Rezultati zastarijevaju kad se model promijeni: pokrenite ponovo.

Svako opterećenje i postavka je jedna promjena na listi {{ui:Promjene}}: {{ui:Poništi}} je vraća, a {{ui:Spasi kao IFC}} ih čuva u datoteci (skup svojstava projekta `CadCraft_Analysis`), pa su opterećenja još tu kad se model sljedeći put otvori ovdje.

## Kako se pravi analitički model

- Svaki IfcBeam, IfcColumn i IfcMember čiji je oblik jedna prava ekstruzija postaje element na težišnoj liniji svog presjeka. Njegova svojstva presjeka dolaze iz profila: I, U, L i T profili, pravougaonici i cijevi, kružnice i okrugle cijevi, ili bilo koja zatvorena kontura (tada je konstanta uvijanja procjena, što se navodi u izvještaju). Sve ostalo se izostavlja i broji.
- U modelu, grede staju na lice stuba i leže ispod poda. Svaki kraj elementa se duž svoje linije prenosi na osu elementa u koji se uokviruje, kad je ta osa blizu (unutar otprilike veličine presjeka), i taj element se tu dijeli. Izvještaj kaže koliko je krajeva pomjereno.
- **Podnožja stubova** na kojima ništa ne ide ispod su oslonci: uklještena (početak) ili zglobna (držana na mjestu i protiv uvijanja, a slobodna da se okreće).
- **Krajevi greda** su kruti ili zglobni prema pravilu {{ui:Krajevi greda bez veze}}; **dijagonale** (IfcMember) su zglobne na oba kraja. Odaberite jedan element da mu dodijelite krajeve, ili podnožje stuba, pa mu dajte posebno pravilo.
- Materijali prema nazivu: beton (E = 30 GPa), drvo (E = 11 GPa), inače čelik (E = 200 GPa).

Ako okvir može da se pomjeri bez savijanja ičega — mehanizam — analiza staje i kaže gdje i u kojem smjeru.

## Slučajevi, kombinacije, znaci i izvještaj

Analiza počinje sa **Stalno** (vlastita težina), **Korisno** i **Stalno + korisno**; dodajte slučajeve i kombinacije s faktorima koje traži vaš projektni normativ. N > 0 je zatezanje; My > 0 stavlja lokalnu −z stranu elementa u zatezanje (greda koja se provlači pod gravitacijom ima My > 0). {{ui:Izvještaj (PDF)}} i {{ui:Izvještaj (CSV)}} sadrže pretpostavke, presjeke, slučajeve, reakcije s njihovim zbirovima, sile u elementima, pomjeranja i anvelopu. {{ui:Izvezi kao CraftScript}} piše okvir za radni prostor Script u PartCraft-u, gdje ga biblioteka funkcija `frame3d` rješava u čitljivom kodu.

Metoda je direktna metoda krutosti, linearna i prvog reda, osim ako ne označite Drugi red (P-Delta), a provjerena je na udžbeničkim primjerima.

**Drugi red (P-Delta).** Označite *Drugi red (P-Delta)* pored Pokreni: svaka kombinacija se rješava ponovo, s uzdužnim silama elemenata koje djeluju na deformisani okvir (svaki element je podijeljen na 4 dijela, pa se računa i savijanje elementa između krajeva), dok se uzdužne sile ne ustale. Red rezultata daje broj prolaza i koliko je njihanje poraslo; momenti, progibi, provjere projekta i izvještaj tada koriste ove rezultate. Iznad elastične kritične sile okvira analiza staje i to kaže. Radi se o elastičnom ponašanju s malim rotacijama, samo savijanju, bez smanjenja krutosti i fiktivnih opterećenja (sama po sebi nije AISC metoda direktne analize); ploče, zidovi i kruti podovi ostaju prvog reda.

**Pritisak poda na ploče.** Za betonske ploče (analiza ploču tretira kao pločasti element kad joj je materijal beton), blok Opterećenja ima {{ui:Pritisak na sve ploče}}: upišite kN/m², izaberite slučaj iznad i pritisnite {{ui:Dodaj na ploče}}. Pritisak se raspoređuje na svaku ploču koju je analiza našla, naniže, i navodi se s vezom Ukloni. To je jedan pritisak za sve ploče, a ne po jedan za svaku, i nije propisno opterećenje: upišite vrijednost koju vam da inženjer.

**Prirodne frekvencije (konačni elementi).** Blok {{ui:Konačni elementi: prirodne frekvencije}} ispod rezultata nalazi najniže oblike istog modela pomoću motora konačnih elemenata: grede s otpuštanjima krajeva, ploče i zidovi kao ravni četvoročvorni ljuskasti elementi, kruti podovi, oslonci. Izaberite broj oblika (3, 6, 10 ili 20) i ploča element (četvoročvorna ljuska za debele ili tanke ploče, ili element tanke ploče) i pritisnite {{ui:Nađi frekvencije}}. Tabela daje frekvenciju svakog oblika u Hz, njegov period u sekundama i njegovu efektivnu modalnu masu po X, Y i Z kao udio mase koja može da se pomjera; {{ui:Prikaži na modelu}} crta svaki oblik na isti način kao što se crta deformisani oblik. Masa je gustina materijala puta zapremina: opterećenja ne dodaju masu, a materijal bez gustine je nema. Izvještaj (PDF, CSV) sadrži tabelu. Radi se samo o elastičnom ponašanju i malim pomjeranjima, a seizmičko ili vjetrovno opterećenje iz propisa ovdje se ne pravi. Nije provjera po propisu; inženjer pregleda rezultate.

**Spektar odziva, vremenska historija i pushover.** Tri bloka dodatno stoje ispod frekvencija i koriste isti model konačnih elemenata. Masa za sve njih je gustina materijala plus vertikalna opterećenja slučajeva koje označite, svako pomnoženo faktorom koji upišete (na primjer Stalno s 1 i Korisno s udjelom koji računate kao masu).

{{ui:Spektar odziva}} čita svaki oblik sa spektra koji zadate (tabela perioda i ubrzanja, ili oblik ASCE 7 iz SDS, SD1 i TL; dugme {{ui:Koristi vrijednosti iz bloka Seizmičko}} kopira te vrijednosti iz bloka Seizmičko), i kombinuje oblike po CQC, SRSS, pravilu deset posto ili apsolutnom zbiru, zatim spaja smjerove X, Y i Z (100 % + 30 % ili SRSS). Daje osnovnu posmičnu silu, međuspratne pomake, krajnje sile elemenata i tabelu oblika koja upozorava kad oblici koji se koriste nose manje od 90 % mase. Rezultate možete skalirati faktorom ili do osnovne posmične sile koju upišete; blok sam nikad ne računa tu osnovnu silu. Rezultati nemaju znak.

{{ui:Vremenska historija}} pokreće ubrzanje tla modalnom superpozicijom (tačno za prave linije zapisa između tačaka) ili direktnom integracijom (Newmarkovo prosječno ubrzanje s Rayleigh-jevim prigušenjem). Ulaz je izmišljen sinus ili impuls (uvijek označen kao sintetički), zapis koji nalijepite, ili tekstualna datoteka koju otvorite (vrijeme i ubrzanje, jedno ubrzanje po redu s korakom, ili datoteka u PEER stilu sa zaglavljem DT=; u g ili m/s²). Daje pomjeranje krova i osnovnu posmičnu silu u odnosu na vrijeme, pomak svakog nivoa i anvelopu krajnjih sila elemenata. Modeli s vrlo dugim zapisom čuvaju ga samo za sesiju.

{{ui:Pushover}} gura krov u stranu u malim koracima (oblik kao prvi oblik ili ravnomjeran), s plastičnim zglobovima na krajevima elemenata koji imaju I-profil. Zglob popušta pri plastičnom momentu, koji opada kako uzdužna sila raste (izračunato iz nacrtanog oblika, zaobljenja su zanemarena); očvršćavanje je opcionalno, P-delta je opcionalno, a kombinacija gravitacije se može prvo primijeniti. Daje krivu nosivosti (osnovna posmična sila u odnosu na pomjeranje krova), prvi zglob, te stanje i plastičnu rotaciju svakog zgloba. {{ui:Pokreni nelinearnu vremensku historiju}} pokreće iste zglobove pod zapisom bloka Vremenska historija, na malim modelima. Zglobovi se formiraju samo na krajevima elemenata (postavite čvor tamo gdje zglob treba da se formira unutar raspona); element otpušten na oba kraja nema nijedan, a popuštanje i izvijanje dijagonala nisu modelirani; ploče i zidovi ostaju elastični; kriteriji prihvatljivosti nisu dati. Nije provjera po propisu; inženjer pregleda rezultate. Postavke se čuvaju s modelom, a izvještaj sadrži tabele.

Još nije napravljeno: izvijanje, korekcija nedostajuće mase za spektar odziva, skaliranje zapisa, kriteriji prihvatljivosti za zglobove (dinamički odziv postoji, gore), opterećenja površina osim jednog pritiska na sve ploče, ekscentriciteti elemenata, dijagonale samo na zatezanje, zidovi i ploče u okviru, provjere zavarenih čeličnih profila prema normativu, i provjere presjeka osim valjanih I-profila. Pogledajte [Još nije napravljeno](topic:not-built-yet).

## Jedinice

Dužine prate jedinicu koju izaberete u traci alata ({{ui:Jedinice}}), kao i ostatak BimCraft-a: položaji opterećenja koje upisujete i vidite ({{ui:Iz}}, {{ui:U}}, {{ui:Na}}), tačke čvornih opterećenja i reakcija, visine spratova u {{ui:Seizmičko}}, te kolone progiba i pomaka (stope i inči prikazuju ove male dužine kao decimalne inče). Jedinicu možete promijeniti kad god; kartica se ponovo crta. Sile ostaju u kN i kN·m, a izvještaj (PDF, CSV) i CraftScript datoteka ostaju u milimetrima, s upisanom jedinicom. Dimenzije presjeka, prečnici šipki i zaštitni slojevi u bloku {{ui:Beton}} ostaju u milimetrima, kako se i zovu.

## Provjere projekta

Blok {{ui:Provjere projekta}} (isti kao u DetailCraft-u) uzima {{ui:Projektni normativ}}, ASCE 7 + AISC 360 ili EN 1990 + EN 1993-1-1, i {{ui:Klasa čelika}}. Svakom slučaju opterećenja dodijelite vrstu (stalno, korisno, vjetar …), a {{ui:Napravi kombinacije}} upisuje kombinacije opterećenja normativa za vaše slučajeve; analiza ih onda pokreće kao svaku drugu kombinaciju.

{{ui:Provjeri elemente}} zatim provjerava svaki **valjani čelični I-profil** provjerama DetailCraft-a (zatezanje, pritisak s izvijanjem, savijanje s bočnim i torzionim izvijanjem, smicanje, savijanje s uzdužnom silom, progib; klauzule su u izvještaju) i pokazuje koliko svog kapaciteta koristi, obojeno na modelu. Pomoć je **dok inženjer ne pregleda**.

**Koji elementi se provjeravaju.** IFC profil ne kaže da li je čelični I-profil valjan ili zavaren, pa BimCraft to smatra valjanim samo kad je naziv njegovog profila (inače naziv tipa elementa) veličina iz tabela AISC W ili S ili tabela EN 10365 IPE, HEA ili HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **i** kad se visina, širina, rebro i pojas u datoteci poklapaju s tom veličinom u okviru 1 %. Svaki drugi I-profil (nosač od limova, veličina pod drugim nazivom, izmijenjena veličina) uzima se kao zavaren i vraća se **nije provjereno**, kao i cijevi, uglovnici, U-profili i drugi presjeci, vitki dijelovi i uvijanje. Te elemente provjerite s inženjerom.
