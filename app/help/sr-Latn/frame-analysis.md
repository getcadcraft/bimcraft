---
title: Analiza konstruktivnog okvira
summary: Sile, reakcije i progibi greda, stubova i dijagonala modela pod opterećenjima i kombinacijama koje zadate, sačuvani u IFC-u. Pomoćno sredstvo za analizu, a ne provera propisa.
keywords: analiza, jedinice, stope i inči, jedinica prikaza, konstruktivna analiza, proračunske provere, iskorišćenost, valjani, zavareni, AISC 360, EN 1993-1-1, analiza okvira, analitički model, metoda krutosti, opterećenja, slučaj opterećenja, kombinacija, stalno opterećenje, korisno opterećenje, sopstvena težina, reakcije, moment savijanja, smicanje, aksijalna sila, progib, deformisani oblik, oslonci, zglobni, uklještenje, otpuštanje, izveštaj, pdf, csv, craftscript, frame3d, grede, stubovi, elementi
from: b93b58c4
---

Kartica {{ui:Analiza}} sa desne strane pronalazi sile u gredama, stubovima i dijagonalama otvorenog modela, reakcije u podnožjima stubova i koliko se elementi savijaju, za opterećenja koja zadate.

:::warning
Ovo je **pomoćno sredstvo za analizu, a ne provera propisa**. Analiza ne primenjuje nijedan propis za proračun: ne dimenzioniše elemente niti proverava nosivost, i ne bira faktore opterećenja. Inženjer proverava analitički model, njegova opterećenja i oslonce i odlučuje šta brojevi znače. Blok {{ui:Proračunske provere}} ispod proverava valjane čelične I-profile prema AISC 360 ili EN 1993-1-1, a to je pomoć dok inženjer ne pregleda: videti [Proračunske provere](topic:frame-analysis#design-checks).
:::

## Pokretanje

1. Otvorite IFC model i karticu {{ui:Analiza}}.
2. Izaberite jednu ili više greda, stubova ili dijagonala u prikazu, izaberite {{ui:Slučaj}}, {{ui:Opterećenje}} i {{ui:Pravac}}, upišite vrednost i pritisnite {{ui:Dodaj opterećenje}}: kN/m za opterećenje raspoređeno duž elementa, kN za tačkasto opterećenje.
3. Pritisnite {{ui:Pokreni analizu}}.

Tabela navodi najveću aksijalnu silu, smicanja, momente savijanja, torziju i progib svakog elementa; kliknite na naziv elementa da ga izaberete u prikazu. Ispod su reakcije. {{ui:Na modelu}} crta deformisani oblik ili jednu vrstu sile kao dijagram pored svakog elementa. Rezultati zastarevaju kad se model promeni: pokrenite ponovo.

Svako opterećenje i podešavanje je jedna promena u listi {{ui:Izmene}}: {{ui:Opozovi}} je vraća, a {{ui:Sačuvaj kao IFC}} ih čuva u datoteci (skup svojstava projekta `CadCraft_Analysis`), pa su sledeći put kad se model ovde otvori njegova opterećenja i dalje tu.

## Kako se pravi analitički model

- Svaki IfcBeam, IfcColumn i IfcMember čiji je oblik jedna prava ekstruzija postaje element na težišnoj liniji svog preseka. Njegova svojstva preseka dolaze iz profila: I, U, L i T oblici, pravougaonici i cevi, krugovi i kružne cevi, ili bilo koji zatvoreni obris (tada je konstanta torzije procena, navedena u izveštaju). Sve drugo se izostavlja i broji.
- U modelu grede staju na lice stuba i leže ispod poda. Svaki kraj elementa prenosi se duž svoje linije na osu elementa u koji se uklapa, kad je ta osa blizu (u okviru otprilike veličine preseka), i taj element se tu deli. Izveštaj kaže koliko je krajeva pomereno.
- **Podnožja stubova** na kojima ništa ne ide ispod su oslonci: uklešteni (početak) ili zglobni (držani na mestu i protiv uvijanja, slobodni da se okreću).
- **Krajevi greda** su kruti ili zglobni prema pravilu {{ui:Krajevi greda bez veze}}; **dijagonale** (IfcMember) su zglobne na oba kraja. Izaberite jedan element da mu dodelite krajeve, ili podnožje stuba, sopstveno pravilo.
- Materijali po nazivu: beton (E = 30 GPa), drvo (E = 11 GPa), inače čelik (E = 200 GPa).

Ako okvir može da se pomera a da ništa ne savija (mehanizam), analiza staje i kaže gde i u kom pravcu.

## Slučajevi, kombinacije, znaci i izveštaj

Analiza počinje sa **Stalno** (sopstvena težina), **Korisno** i **Stalno + korisno**; dodajte slučajeve i kombinacije sa faktorima koje traži vaš propis za proračun. N > 0 je zatezanje; My > 0 stavlja lokalnu −z stranu elementa u zatezanje (greda koja propada pod gravitacijom ima My > 0). {{ui:Izveštaj (PDF)}} i {{ui:Izveštaj (CSV)}} sadrže pretpostavke, preseke, slučajeve, reakcije sa njihovim zbirovima, sile u elementima, pomeranja i omotač. {{ui:Izvezi kao CraftScript}} zapisuje okvir za radni prostor Script u PartCraft-u, gde biblioteka funkcija `frame3d` rešava ga u čitljivom kodu.

Metoda je metoda direktne krutosti, linearna i prvog reda, osim ako ne štiklirate Drugi red (P-Delta), i proverena je na udžbeničkim primerima.

**Drugi red (P-Delta).** Štiklirajte *Drugi red (P-Delta)* pored Pokreni: svaka kombinacija se ponovo rešava sa aksijalnim silama elemenata koje deluju na deformisani okvir (svaki element je podeljen na 4 dela, pa se i savijanje elementa između krajeva računa), dok se aksijalne sile ne ustale. Red rezultata daje broj prolaza i koliko je porasla bočna deformacija; momenti, progibi, proračunske provere i izveštaj tada koriste ove rezultate. Iznad elastičnog kritičnog opterećenja okvira izvođenje staje i to kaže. Elastično je uz male rotacije, samo savojno, bez smanjenja krutosti i fiktivnih opterećenja (samo po sebi nije AISC metoda direktne analize); ploče, zidovi i kruti podovi ostaju prvog reda.

**Pritisak poda na ploče.** Za betonske ploče (analiza čita ploču kao ploče kad je njen materijal beton), blok Opterećenja ima {{ui:Pritisak na svaku ploču}}: upišite kN/m², izaberite slučaj iznad i pritisnite {{ui:Dodaj na ploče}}. Deluje na svaku ploču koju je analiza našla, nadole, i navodi se sa vezom Ukloni. To je jedan pritisak za sve ploče, a ne po jedan za svaku, i nije propisno opterećenje: upišite vrednost koju vam daje inženjer.

**Prirodne frekvencije (konačni elementi).** Blok {{ui:Konačni elementi: sopstvene frekvencije}} ispod rezultata nalazi najniže oblike istog modela sa motorom konačnih elemenata: grede sa svojim otpuštanjima na krajevima, ploče i zidovi kao ravni četvoročvorni ljuskasti elementi, kruti podovi, oslonci. Izaberite koliko oblika (3, 6, 10 ili 20) i ploču (četvoročvorna ljuska za debele ili tanke ploče, ili element za tanku ploču) i pritisnite {{ui:Nađi frekvencije}}. Tabela daje frekvenciju svakog oblika u Hz, njegov period u sekundama i njegovu efektivnu modalnu masu duž X, Y i Z kao deo mase koja može da se pomera; {{ui:Prikaži na modelu}} crta bilo koji oblik na isti način kao deformisani oblik. Masa je gustina materijala puta zapremina: opterećenja ne dodaju masu, a materijal bez gustine nema masu. Izveštaj (PDF, CSV) sadrži tabelu. Važi samo za elastična i mala pomeranja, a seizmičko ili vetrovno opterećenje iz propisa se ovde ne pravi. Nije provera propisa; inženjer pregleda rezultate.

**Spektar odgovora, vremenska istorija i pushover.** Još tri bloka nalaze se ispod frekvencija i koriste isti model konačnih elemenata. Masa za sve njih je gustina materijala plus stalna opterećenja naniže slučajeva koje štiklirate, svako pomnoženo faktorom koji upišete (na primer Stalno sa 1 i Korisno sa udelom koji računate kao masu).

{{ui:Spektar odgovora}} čita svaki oblik sa spektra koji zadate (tabela perioda i ubrzanja, ili oblik ASCE 7 iz SDS, SD1 i TL; dugme {{ui:Koristi vrednosti bloka Seizmičko}} kopira te vrednosti iz bloka Seizmičko) i kombinuje oblike po CQC, SRSS, pravilu deset procenata ili apsolutnom zbiru, zatim spaja pravce X, Y i Z (100 % + 30 % ili SRSS). Daje osnovnu silu smicanja, međuspratna pomeranja, sile na krajevima elemenata i tabelu oblika koja upozorava kada korišćeni oblici nose manje od 90 % mase. Rezultate možete skalirati faktorom ili do osnovne sile smicanja koju upišete; blok nikad sam ne računa tu osnovnu silu. Rezultati nemaju predznak.

{{ui:Vremenska istorija}} pušta ubrzanje tla putem modalne superpozicije (tačno za prave linije zapisa između tačaka) ili direktne integracije (Newmark-ov prosečni metod ubrzanja sa Rayleigh-ovim prigušenjem). Ulaz je izmišljen sinus ili impuls (uvek označen kao sintetički), zapis koji nalepite, ili tekstualna datoteka koju otvorite (vreme i ubrzanje, jedno ubrzanje po redu sa korakom, ili datoteka u PEER stilu sa zaglavljem DT=; u g ili m/s²). Daje pomeranje krova i osnovnu silu smicanja u vremenu, pomeranje svakog nivoa i omotač sila na krajevima elemenata. Modeli sa veoma dugim zapisom čuvaju ga samo za sesiju.

{{ui:Pushover}} gura krov u stranu u malim koracima (oblik kao prvi oblik ili ravnomeran), sa plastičnim zglobovima na krajevima elemenata koji imaju I oblik. Zglob popušta pri plastičnom momentu, koji opada kako aksijalna sila raste (izračunato iz nacrtanog oblika, zaobljenja zanemarena); ojačanje je opciono, P-delta je opciono, a kombinacija gravitacije može se primeniti prvo. Daje krivu nosivosti (osnovna sila smicanja prema pomeranju krova), prvi zglob, i stanje i plastičnu rotaciju svakog zgloba. {{ui:Pokreni nelinearnu vremensku istoriju}} pokreće iste zglobove pod zapisom bloka Vremenska istorija, na malim modelima. Zglobovi nastaju samo na krajevima elemenata (postavite čvor tamo gde zglob treba da nastane unutar raspona); element otpušten na oba kraja nema ih, a popuštanje i izvijanje dijagonala nisu modelovani; ploče i zidovi ostaju elastični; nisu dati kriterijumi prihvatljivosti. Nije provera propisa; inženjer pregleda rezultate. Podešavanja se čuvaju sa modelom, a izveštaj sadrži tabele.

Još nije napravljeno: izvijanje, korekcija nedostajuće mase za spektar odgovora, skaliranje zapisa, kriterijumi prihvatljivosti za zglobove (dinamički odgovor je tu, iznad), površinska opterećenja osim jednog pritiska na sve ploče, ofseti elemenata, dijagonale koje primaju samo zatezanje, zidovi i ploče u okviru, i provere propisa za zavarene oblike i za preseke osim valjanih I-profila. Videti [Još nije napravljeno](topic:not-built-yet).

## Jedinice

Dužine prate jedinicu koju izaberete na traci sa alatima ({{ui:Jedinice}}), kao ostatak BimCraft-a: pozicije opterećenja koje upisujete i vidite ({{ui:Iz}}, {{ui:U}}, {{ui:Na}}), tačke opterećenja čvorova i reakcija, visine spratova u {{ui:Seizmičko}}, i kolone progiba i međuspratnih pomeranja (stope i inči prikazuju ove male dužine u decimalnim inčima). Promenite jedinicu u bilo kom trenutku; kartica se ponovo iscrtava. Sile ostaju u kN i kN·m, a izveštaj (PDF, CSV) i datoteka CraftScript ostaju u milimetrima, sa upisanom jedinicom. Dimenzije preseka, prečnici šipki i zaštitni slojevi u bloku {{ui:Beton}} ostaju u milimetrima, kako su i nazvani.

## Proračunske provere

Blok {{ui:Proračunske provere}} (isti kao u DetailCraft-u) uzima {{ui:Standard proračuna}}, ASCE 7 + AISC 360 ili EN 1990 + EN 1993-1-1, i {{ui:Kvalitet čelika}}. Dajte svakom slučaju opterećenja njegovu vrstu (stalno, korisno, vetar …), a {{ui:Napravi kombinacije}} upisuje kombinacije opterećenja propisa od vaših slučajeva; analiza ih zatim pokreće kao svaku drugu kombinaciju.

{{ui:Proveri elemente}} zatim proverava svaki **valjani čelični I-profil** DetailCraft-ovim proverama (zatezanje, pritisak sa izvijanjem, savijanje sa bočno-torzionim izvijanjem, smicanje, savijanje sa aksijalnom silom, progib; klauzule su u izveštaju) i pokazuje koliki deo svoje nosivosti koristi, obojen na modelu. To je **pomoć dok inženjer ne pregleda**.

**Koji se elementi proveravaju.** IFC profil ne kaže da li je čelični I-profil valjan ili zavaren, pa BimCraft to smatra valjanim samo kada je naziv njegovog profila (inače naziv tipa elementa) veličina iz AISC W ili S tablica, ili EN 10365 tablica IPE, HEA ili HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **i** visina, širina, rebro i pojasnica u datoteci odgovaraju toj veličini u okviru 1 %. Svaki drugi I-profil (limeni nosač, veličina pod drugim nazivom, izmenjena veličina) uzima se kao zavaren i vraća se **nije proveren**, kao i cevi, uglovnici, kanali i drugi preseci, vitki delovi i torzija. Takve elemente proverite sa inženjerom.
