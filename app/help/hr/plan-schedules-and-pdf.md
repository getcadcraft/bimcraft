---
title: Tablice, kote i PDF tlocrta
summary: Tablice vrata, prozora, zidova i prostorija koje se mijenjaju dok crtate, kote na tlocrtu te tlocrt etaže spremljen kao PDF u standardnom mjerilu.
keywords: tablica, tablica vrata, tablica prozora, tablica zidova, tablica prostorija, količine, predmjer, površina, csv, proračunska tablica, kote, kota, ispis, pdf, plotanje, mjerilo, 1/4", 1:50, list
from: d97cd16e
---

## Što ćete raditi

Vidite što zgrada koju crtate zbraja dok je crtate: koliko vrata i prozora svake veličine, koliko zida svake vrste, kolika je svaka prostorija. Stavite kote na tlocrt i spremite ga kao PDF za ispis ili slanje.

## Tablice

Uz uključen {{ui:Crtanje}}, **Specifikacije** u lijevoj ploči prikazuje jednu tablicu odjednom:

- **Vrata** i **Prozori**: svaki po svojoj oznaci (D1, D2 … i W1 …, kako ih postavljate), svojoj vrsti, širini, visini (i pragu), razini i zidu u kojem je.
- **Zidovi po tipu**: za svaki tip zida, koliko ima zidova, njihova debljina, ukupna duljina i površina strane kao **Bruto površina**, **Odbitci** i **Neto površina**, s ukupnim zbrojem.
- **Prostorije**: broj, naziv, razina, površina i opseg, s ukupnom površinom.
- **Podovi**: svaki pod s razinom, vrstom i debljinom te njegovom bruto površinom, odbicima i neto površinom.
- **Završne obrade**: svaki sloj završne obrade tipova zidova (po materijalu i strani zida) i stropovi, s brojem ploha te bruto, odbicima i neto.
- **Tipovi zidova: podaci za predmjer**: što je jednom upisano za svaki tip zida (jedinica, mort, stopa), s brojem zidova, njihovom duljinom i neto površinom, te stopa pomnožena izmjerenom količinom. Pogledajte [Zidni sklopovi](topic:wall-assemblies).

- **Završne obrade po prostoriji**, **Završne obrade po zidu**, **Završne obrade po zoni** i **Količine završnih obrada**: što pokriva svaku prostoriju, s površinama, brojem pločica uključujući rezove i volumenima podloge. Pogledajte [Završne obrade prostorija i tablice završnih obrada](topic:room-finishes).
- Vaši vlastiti **postavi**: tablica koju ste grupirali, zbrojili i spremili pod nazivom. Pogledajte [Slaganje, spremanje i izvoz tablice](topic:schedule-layouts).

Tablice se mijenjaju uz svaku izmjenu. Kliknite redak ili jednu brojku da odaberete elemente iz kojih dolazi. **Preuzmi CSV** sprema tablicu za otvaranje u proračunskoj tablici; **Preuzmi Excel** i **Kopiraj za Google Sheets** nalaze se ispod nje. **Sobne završne obrade** i **Specifikacija** ([Pisanje specifikacije iz modela](topic:specification)) otvaraju se s istog mjesta.

## Površina i volumen svakog sloja

Odaberite **Slojevi: površina i volumen** u popisu Specifikacije. Ima jedan redak za svaki sloj svakog tipa zida, poda, krova i stropa u uporabi: element, tip i njegov LOD, sloj (brojeno od vanjske strane zida, od vrha poda, krova ili stropa), njegov materijal i funkciju, debljinu, broj elemenata, **neto površinu** i **volumen**.

- Površina je neto površina elemenata tog tipa, izmjerena točno kao u Zidovi po tipu, Podovi i Završne obrade, prema mjernoj metodi projekta. Krov se mjeri po nagibu; nijedna mjerna metoda nema pravilo za krovove.
- Volumen je ta površina pomnožena debljinom samog sloja.
- Pod, krov ili strop bez tipa je jedan redak: jedan sloj vlastite debljine.
- Zračni sloj navodi se s površinom i izostavlja se iz ukupnog volumena. Membrana ima površinu i nema volumen.

Kliknite redak da odaberete njegove elemente. **Preuzmi CSV** sprema tablicu.

## Kako se mjere površine

Svaka površina su tri broja koja se zbrajaju: bruto umanjen za odbitke jednak je neto. Pravilo je napisano iznad svake od ovih tablica, i to je jedno pravilo: tablice, količine spremljene u IFC datoteci i predmjer predan TakeoffCraftu koriste sve isto.

- **Zid**: bruto je jedna strana zida, njegova duljina duž središnje linije puta njegova visina (stvarna ploha za zid s oblikovanim vrhom ili podnožjem). Svaka vrata, prozor i drugi otvor odbijaju se, širina puta visina, svaki jednom.
- **Pod ili strop**: bruto je površina unutar njihovog obrisa. Svaki otvor i izrez unutar njega odbija se jednom.
- **Završna obrada zida**: svaki sloj završne obrade tipa zida pokriva jednu stranu zida, mjeren kao zid, s istim odbijenim otvorima. Završna obrada je sloj zida: navodi se pod Završne obrade i ne dodaje se površini zida, pa se zid s vratima nikad ne broji dvaput.

To je **zadana metoda CadCraft**: svaki otvor se odbija, bez obzira na veličinu; duljine zidova su duž središnje linije; ukosnice se ne mjere. To je ono što svaki projekt koristi dok ne odaberete drugu metodu.

## Odabir mjerne metode

Iznad tablice, **Mjerna metoda** navodi metode koje dolaze s BimCraftom, a **Učitaj datoteku metode** uzima metodu vašeg ureda. Izbor se sprema u IFC datoteku, kao jedan korak poništavanja, i tri stvari slijede ga odmah: tablice, neto količine spremljene u datoteci i predmjer predan TakeoffCraftu. Pravilo iznad svake tablice tada počinje metodom, njezinim izvorom, datumom kad je izvor pročitan i riječima **Nije provjerio količinski inženjer**.

Metoda je mala datoteka činjenica, a ne programski kod. Za svaku količinu navodi:

- **najmanji otvor koji se odbija**: na primjer, otvor od 0.5 m² ili manji ostaje u površini zida;
- **kako se mjere spojevi zidova**: duž središnje linije; ili zid koji završava na drugom mjeri se do lica tog zida; ili svaki kraj zida koji se spaja s drugim zidom mjeri se do bliže plohe;
- **mjeri li se ukosnica** za završnu obradu (povratci završne obrade u otvore), kao površina ili, kad je plitka, kao duljina. Dubina ukosnice uzima se kao polovica debljine zida;
- **što kaže o zidanju**: kako se mjeri i koji dodatak za otpad ili mort navodi.

Metode koje dolaze s BimCraftom:

| Metoda | Zidovi: najmanji otvor koji se odbija | Završne obrade zidova | Stropovi | Zidanje |
|---|---|---|---|---|
| CadCraft zadano | svaki otvor | svaki otvor | svaki izrez | bez dodataka |
| RICS NRM 2 (Ujedinjeno Kraljevstvo), 2. izdanje 2021 | 0.5 m² ili manje ostaje | 1 m² ili manje ostaje | 1 m² ili manje ostaje | po površini; nisu navedeni postoci |
| AAQS Standard Method for Africa 2015 | 0.5 m² ili manje ostaje | 0.5 m² ili manje ostaje | 0.5 m² ili manje ostaje | po površini; mjereno neto, 0% otpada |
| IS 1200 (Indija), 1976, zidarija | 0.1 m² ili manje ostaje | zadano (vidi niže) | zadano | po volumenu |
| BIA Technical Note 10 (Sjedinjene Američke Države), 2009 | svaki otvor | zadano | zadano | 5% otpada na jedinice, 15% na mort |

Pročitajte ova ograničenja prije nego se oslonite na metodu:

- **Nijedan količinski inženjer nije provjerio nijednu od njih.** Svaku je izradio čitajući navedeni izvor i bilježeći njezine brojke uz stavak iz kojeg potječu. Ako ste količinski inženjer i možete provjeriti jednu, tvorci aplikacije bi voljeli čuti od vas.
- Gdje se pravilo nije moglo pročitati iz izvora, metoda za njega navodi **nije potvrđeno** i koristi se zadana metoda CadCraft. Nijedna metoda koja dolazi s BimCraftom nema potvrđeno pravilo za spojeve zidova, ukosnice ili podove, pa se oni pod svima mjere na zadani način.
- IS 1200 odbija otvore u žbuci u tri pojasa. Datoteka metode još ne može sadržavati pojaseve, pa završne obrade zidova pod tom metodom koriste zadano, a pravilo to navodi.
- Južnoafrički standardni sustav mjerenja građevinskih radova **nije** među njima: njegov tekst nije se mogao pročitati. AAQS metoda za Afriku kaže da je izrađena prema izdanju tog sustava iz 1991., ali to je drugi dokument.
- BIA Technical Note 10 je bilješka industrije za procjenu, a ne standardna mjerna metoda.
- Otvor koji je točno najmanje veličine slijedi vlastite riječi metode („ne prelazi“, „manje od“). Veličine unutar 2 dijela na 10 000 od nje računaju se kao točno ona.
- Pod metodom, neto površina bočne strane zida i neto površina poda ili stropa iz datoteke slijede metodu, a skup količina to navodi. Bruto površine i volumeni u datoteci ostaju kako su nacrtani.

**Napomene o ovoj metodi**, pod birača, navode što svaki izvor ostavlja otvorenim. **Otvori izvor** vodi do dokumenta.

### Vlastita metoda vašeg ureda

Datoteka metode je JSON u formatu `cadcraft-measurement-method`. Svaka vrijednost u njoj imenuje stavak iz kojeg potječe; vrijednost bez stavka se odbija. Datoteka se provjerava pri učitavanju, pogrešno polje se imenuje, a ništa iz datoteke koja ne prođe provjeru se ne koristi. Kad je odabrana, datoteka se sprema unutar projekta, pa se projekt otvara isto na drugom računalu. Njezin id je običan naziv po vašem izboru (ne smije biti id metode koja dolazi s aplikacijom).

## Opeke, blokovi i mort

**Tipovi zidova: podaci za predmjer** broje jedinice i mort svakog tipa zida čija jedinica ima duljinu i visinu (pogledajte [Dajte tipu podatke za predmjer](topic:wall-assemblies#give-a-type-its-takeoff-data)). Ovo su formule, točno kako se računaju:

- **Jedinice po površini jednog sloja** = 1 / ((duljina jedinice + spoj) × (visina jedinice + spoj)). Opeka 215 × 65 mm sa spojem od 10 mm: 1 / (225 × 75 mm) = 59.26 po m².
- **Širine jedinica preko sloja** = (debljina sloja + spoj) / (širina jedinice + spoj), zaokruženo na cijeli broj, najmanje 1. Sloj od 102.5 mm od opeka od 102.5 mm je 1; zid od 215 mm od istih opeka je 2.
- **Jedinice** = jedinice po površini × širine jedinica preko sloja × neto površina plohe zida, zbrojeno po zidarskim slojevima tipa.
- **Jedinice za naručiti** = jedinice × (1 + otpad % / 100), zaokruženo na gore na cijelu jedinicu. Otpad je onaj upisan na tipu; ako nije upisan, onaj metode, ako ga navodi; inače 0%.
- **Mort** = neto površina × debljina sloja, umanjeno za volumen jedinica (jedinice × duljina × visina × širina), zatim plus dodatni postotak upisan na tipu za šupljine ili perforacije, zatim plus dodatak metode ako ga navodi. Treba širinu jedinice.

Pretpostavlja se: svaki zidarski sloj tipa izgrađen je od jedne jedinice tipa; sloj deblji od jedne širine jedinice broji se kao toliko širina jedinica, svaka kao sloj položen po dužini, pa se rezane jedinice, zaključci i posebni oblici ne broje zasebno; gdje nijedan sloj nije označen kao izgrađen od jedinice, glavni slojevi uzimaju se kao slojevi, a napomena iznad tablice to kaže. **Iznos** je stopa pomnožena s onim na što se stopa odnosi, što sada može biti i jedinica za naručiti, 1000 jedinica za naručiti ili m³ morta.

Oznake su IFC oznake elemenata: promijenite jednu u **Svojstvima** (Oznaka) i specifikacija se prilagodi. Za svaki IFC model, nacrtan ili ne, [Zbrajanje količina, popis elemenata i raspored prostora](topic:quantity-totals) zbraja bilo koje svojstvo.

## Kote

Tlocrt prikazuje duljinu svakog nacrtanog zida duž njegove vanjske strane (unutarnji zid: duž jedne strane) i, za zid s vratima ili prozorima, lanac od kutova do svakog otvora. {{ui:Kote}} u traci modela ih skriva i ponovno prikazuje.

## Spremanje tlocrta kao PDF

1. Prikažite razinu koju želite i postavite jedinice na ploči **Razine**.
2. Kliknite {{ui:Ispis}} u traci modela.
3. BimCraft sprema „<datoteka> — <razina>.pdf“: tlocrt crno-bijelo u najvećem standardnom mjerilu koje stane na stranicu (1/4" = 1'-0", 1/8" = 1'-0" … na Letter u stopama i palcima; 1:50, 1:100 … na A4 u milimetrima), sa zidovima ispunjenima, vratima, prozorima, nazivima prostorija i površinama, kotama i naslovnom trakom s razinom, datotekom, visinom presjeka, datumom i mjerilom.

PDF je nacrtan kao linije i tekst, pa ostaje oštar pri svakom zumu i njegov se tekst može pretraživati.

## Dobro je znati

- Tablice navode ono što su alati za crtanje stvorili. Vrata i prozori iz drugog programa prikazuju se umjesto toga u Ukupnim količinama.
- Za cijenu posla predajte količine TakeoffCraftu: pogledajte [Količine za TakeoffCraft](topic:takeoff). Preuzimanje CSV-a ostaje za proračunsku tablicu.
