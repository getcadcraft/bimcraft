---
title: Specifikacije, kote i PDF plana
summary: Specifikacije vrata, prozora, zidova i prostorija koje se menjaju dok crtate, kote na planu, i plan sprata sačuvan kao PDF u standardnoj razmeri.
keywords: specifikacija, specifikacija vrata, specifikacija prozora, specifikacija zidova, specifikacija prostorija, količine, predmer, površina, csv, tabela, kote, kota, štampa, pdf, crtanje, razmera, 1/4", 1:50, list
from: d97cd16e
---

## Šta ćete uraditi

Vidite šta zgrada koju crtate zbirno iznosi, dok je crtate: koliko vrata i prozora svake dimenzije, koliko zida svakog tipa, kolika je svaka prostorija. Stavite kote na plan i sačuvajte ga kao PDF za štampu ili slanje.

## Specifikacije

Kada je {{ui:Draw}} uključen, **Specifikacije** u levom panelu prikazuje jednu tabelu u jednom trenutku:

- **Vrata** i **Prozori**: svaka po svojoj oznaci (D1, D2 … i W1 …, kako ih postavljate), svojim tipu, širini, visini (i parapetu), nivou i zidu u kojem je.
- **Zidovi po tipu**: za svaki tip zida, koliko zidova, njihova debljina, ukupna dužina i bočna površina kao **Bruto površina**, **Odbici** i **Neto površina**, s ukupnim zbirom.
- **Prostorije**: broj, naziv, nivo, površina i obim, s ukupnom površinom.
- **Podovi**: svaki pod s nivoom, vrstom i debljinom, i njegova bruto površina, odbici i neto površina.
- **Završni slojevi**: svaki sloj završne obrade tipova zidova (po materijalu i strani zida) i plafoni, s brojem strana i bruto, odbicima i neto.
- **Tipovi zidova: podaci za predmer**: ono što je jednom uneto za svaki tip zida (jedinica, malter, stopa), s brojem zidova, njihovom dužinom i neto površinom, i stopom pomnoženom s izmerenom količinom. Pogledajte [Zidni sklopovi](topic:wall-assemblies).

- **Završni slojevi po prostoriji**, **Završni slojevi po zidu**, **Završni slojevi po zoni** i **Količine završne obrade**: šta pokriva svaku prostoriju, s površinama, brojem pločica uključujući rezanja i zapreminama podloge. Pogledajte [Završna obrada prostorija i specifikacije završne obrade](topic:room-finishes).
- Vaše sopstvene **postavke**: specifikacija koju ste grupisali, zbrojili i sačuvali pod nazivom. Pogledajte [Rasporedite, sačuvajte i izvezite specifikaciju](topic:schedule-layouts).

Tabele se menjaju sa svakom izmenom. Kliknite red ili jednu brojku da izaberete elemente iz kojih potiče. **Preuzmi CSV** čuva tabelu da je otvorite u tabelarnom programu; **Preuzmi Excel** i **Kopiraj za Google Sheets** su ispod nje. **Završna obrada prostorija** i **Specifikacija** ([Napišite specifikaciju iz modela](topic:specification)) otvaraju se s istog mesta.

## Površina i zapremina svakog sloja

Izaberite **Slojevi: površina i zapremina** u listi Specifikacije. Ima jedan red za svaki sloj svakog tipa zida, poda, krova i plafona u upotrebi: element, tip i njegov LOD, sloj (računat od spoljne strane zida, od gornje strane poda, krova ili plafona), njegov materijal i funkciju, njegovu debljinu, koliko elemenata, **neto površinu** i **zapreminu**.

- Površina je neto površina elemenata tog tipa, merena tačno kao u Zidovi po tipu, Podovi i Završni slojevi, po metodi merenja projekta. Krov se meri po nagibu; nijedna metoda merenja nema pravilo za krovove.
- Zapremina je ta površina pomnožena debljinom samog sloja.
- Pod, krov ili plafon bez tipa je jedan red: jedan sloj sopstvene debljine.
- Vazdušna šupljina navodi se s površinom i ne ulazi u ukupnu zapreminu. Membrana ima površinu i nema zapreminu.

Kliknite red da izaberete njegove elemente. **Preuzmi CSV** čuva tabelu.

## Kako se meri površina

Svaka površina su tri broja koja se zbrajaju: bruto umanjen za odbitke jednak je neto. Pravilo je napisano iznad svake od ovih tabela i to je jedno pravilo: specifikacije, količine sačuvane u IFC datoteci i predmer poslat u TakeoffCraft svi koriste isto.

- **Zid**: bruto je jedna strana zida, njegova dužina duž središnje linije puta njegova visina (stvarna strana za zid sa oblikovanim vrhom ili podnožjem). Svaka vrata, prozor i drugi otvor odbijaju se, širina puta visina, svaki otvor jednom.
- **Pod ili plafon**: bruto je površina unutar njegove konture. Svaki otvor i izrez unutar njega odbija se jednom.
- **Završna obrada zida**: svaki sloj završne obrade tipa zida pokriva jednu stranu zida, merenu kao zid, sa istim odbijenim otvorima. Završna obrada je sloj zida: navodi se pod Završni slojevi i ne dodaje se površini zida, pa se zid s vratima nikada ne broji dvaput.

To je **podrazumevano pravilo CadCraft**: svaki otvor se odbija, bez obzira na veličinu; dužine zidova su duž središnje linije; bočne strane otvora (reveal) se ne mere. To koristi svaki projekat dok ne izaberete drugu metodu.

## Izbor metode merenja

Iznad specifikacije, **Measurement method** navodi metode koje dolaze uz BimCraft, a **Load a method file** učitava metodu vaše kancelarije. Izbor se čuva u IFC datoteci, kao jedan korak poništavanja, i tri stvari slede ga odjednom: specifikacije, neto količine sačuvane u datoteci i predmer poslat u TakeoffCraft. Pravilo iznad svake tabele tada počinje metodom, njenim izvorom, datumom kada je izvor pročitan i rečima **Nije proverio količinski inženjer**.

Metoda je mala datoteka činjenica, a ne programski kod. Za svaku količinu ona kaže:

- **najmanji otvor koji se odbija**: na primer, otvor od 0.5 m² ili manji ostaje u površini zida;
- **kako se mere spojevi zidova**: duž središnje linije; ili sa zidom koji se završava na drugom meren do lica tog zida; ili sa svakim krajem zida koji se sreće s drugim zidom meren do bliže strane;
- **da li se mere bočne strane otvora (reveal)** za završnu obradu (povratke završne obrade u otvore), kao površina ili, kada su plitki, kao dužina. Dubina bočne strane otvora uzima se kao polovina debljine zida;
- **šta kaže o zidanju**: kako se meri i koju rezervu za otpad ili malter navodi.

Metode koje dolaze uz BimCraft:

| Metoda | Zidovi: najmanji otvor koji se odbija | Završne obrade zidova | Plafoni | Zidanje |
|---|---|---|---|---|
| CadCraft podrazumevana | svaki otvor | svaki otvor | svaki izrez | bez rezervi |
| RICS NRM 2 (Ujedinjeno Kraljevstvo), 2. izdanje 2021 | 0.5 m² ili manje ostaje u površini | 1 m² ili manje ostaje u površini | 1 m² ili manje ostaje u površini | po površini; nisu navedeni procenti |
| AAQS Standard Method for Africa 2015 | 0.5 m² ili manje ostaje u površini | 0.5 m² ili manje ostaje u površini | 0.5 m² ili manje ostaje u površini | po površini; mereno neto, 0% otpada |
| IS 1200 (Indija), 1976, zidanje | 0.1 m² ili manje ostaje u površini | podrazumevano (vidi dole) | podrazumevano | po zapremini |
| BIA Technical Note 10 (SAD), 2009 | svaki otvor | podrazumevano | podrazumevano | 5% otpada na jedinice, 15% na malter |

Pročitajte ova ograničenja pre nego što se oslonite na metodu:

- **Nijedan količinski inženjer nije proverio nijednu od njih.** Svaku je neko napravio čitajući navedeni izvor i upisujući njegove brojke s klauzulom iz koje potiču. Ako ste količinski inženjer i možete da proverite neku, tvorci aplikacije bi voleli da čuju od vas.
- Gde pravilo nije moglo da se pročita iz izvora, metoda za njega kaže **nije potvrđeno**, a koristi se podrazumevano pravilo CadCraft. Nijedna metoda koja dolazi uz BimCraft nema potvrđeno pravilo za spojeve zidova, bočne strane otvora ili podove, pa se ona mere podrazumevanim načinom u svim metodama.
- IS 1200 odbija otvore u malteru u tri opsega. Datoteka metode još ne može da sadrži opsege, pa završne obrade zidova koriste podrazumevano pod tom metodom, a pravilo to kaže.
- Južnoafrički standardni sistem merenja građevinskih radova **nije** među njima: njegov tekst nije mogao da se pročita. AAQS metoda za Afriku kaže da je zasnovana na izdanju tog sistema iz 1991, ali to je drugi dokument.
- BIA Technical Note 10 je industrijska napomena za procenu, a ne standardna metoda merenja.
- Otvor koji je tačno najmanje veličine prati sopstvene reči metode („ne prelazi“, „manje od“). Dimenzije u granici od 2 dela na 10 000 od nje računaju se kao tačno ona.
- Pod nekom metodom, neto bočna površina zida i neto površina poda ili plafona iz datoteke prate metodu, a skup količina to navodi. Bruto površine i zapremine u datoteci ostaju kakve su nacrtane.

**Napomene o ovoj metodi**, ispod izbora, kažu šta svaki izvor ostavlja otvoreno. **Otvori izvor** vodi do dokumenta.

### Metoda vaše kancelarije

Datoteka metode je JSON u formatu `cadcraft-measurement-method`. Svaka vrednost u njoj navodi klauzulu iz koje potiče; vrednost bez klauzule se odbija. Datoteka se proverava pri učitavanju, pogrešno polje se imenuje, i ništa se ne koristi iz datoteke koja ne prolazi proveru. Kada je izabrana, datoteka se čuva unutar projekta, pa se projekat otvara isto na drugom računaru. Njen id je običan naziv po vašem izboru (ne mora biti id metode koja dolazi uz aplikaciju).

## Cigle, blokovi i malter

**Tipovi zidova: podaci za predmer** broji jedinice i malter svakog tipa zida čija jedinica ima dužinu i visinu (pogledajte [Dajte tipu podatke za predmer](topic:wall-assemblies#give-a-type-its-takeoff-data)). Ovo su formule, tačno kako se računaju:

- **Jedinice po površini jednog sloja** = 1 / ((dužina jedinice + spoj) × (visina jedinice + spoj)). Cigla 215 × 65 mm sa spojem od 10 mm: 1 / (225 × 75 mm) = 59.26 po m².
- **Širine jedinica preko sloja** = (debljina sloja + spoj) / (širina jedinice + spoj), zaokruženo na ceo broj, najmanje 1. Sloj od 102.5 mm od cigli od 102.5 mm je 1; zid od 215 mm od istih cigli je 2.
- **Jedinice** = jedinice po površini × širine jedinica preko sloja × neto površina lica zida, zbrojeno preko zidanih slojeva tipa.
- **Jedinice za naručivanje** = jedinice × (1 + otpad % / 100), zaokruženo naviše na celu jedinicu. Otpad je onaj unet na tipu; ako nije unet, onaj metode, ako ga navodi; inače 0%.
- **Malter** = neto površina × debljina sloja, umanjeno za zapreminu jedinica (jedinice × dužina × visina × širina), zatim plus dodatni procenat unet na tipu za udubljenja (frogs) ili perforacije, zatim plus dodatak metode ako ga navodi. Potrebna je širina jedinice.

Pretpostavke: svaki zidani sloj tipa građen je od jedne jedinice tipa; sloj deblji od jedne širine jedinice broji se kao toliko širina jedinica, svaka kao sloj položen dužinom, pa se rezane jedinice, zatvarači i posebni oblici ne broje odvojeno; gde nijedan sloj nije označen kao građen od jedinice, jezgreni slojevi se uzimaju kao slojevi zida, a napomena iznad tabele to kaže. **Amount** je stopa pomnožena onim na šta se stopa odnosi, što sada može biti i jedinica za naručivanje, 1000 jedinica za naručivanje ili m³ maltera.

Oznake su IFC oznake elemenata: promenite jednu u Svojstvima (Tag) i specifikacija je prati. Za svaki IFC model, nacrtan ili ne, [Zbrojite količine, navedite elemente i prostore u specifikaciji](topic:quantity-totals) zbraja svako svojstvo.

## Kote

Plan prikazuje dužinu svakog nacrtanog zida duž njegove spoljne strane (unutrašnji zid: duž jedne strane), a za zid s vratima ili prozorima, lanac od uglova do svakog otvora. {{ui:Kote}} u traci modela ih sakriva i ponovo prikazuje.

## Sačuvajte plan kao PDF

1. Prikažite nivo koji želite i podesite jedinice u panelu **Nivoi**.
2. Kliknite {{ui:Štampaj}} u traci modela.
3. BimCraft čuva „<datoteka> — <nivo>.pdf“: plan crno-belo, u najvećoj standardnoj razmeri koja staje na stranicu (1/4" = 1'-0", 1/8" = 1'-0" … na Letter u stopama i inčima; 1:50, 1:100 … na A4 u milimetrima), sa ispunjenim zidovima, vratima, prozorima, nazivima prostorija i površinama, kotama, i naslovnom trakom s nivoom, datotekom, visinom preseka, datumom i razmerom.

PDF je nacrtan kao linije i tekst, pa ostaje oštar pri svakom zumu i njegov tekst može da se pretražuje.

## Dobro je znati

- Specifikacije navode ono što su alati za crtanje napravili. Vrata i prozori iz drugih programa pojavljuju se umesto toga u **Zbiru količina**. Pogledajte [Zbir količina za modele](topic:quantity-totals).
- Da biste formirali predračun, predajte količine TakeoffCraft-u: pogledajte [Količine za TakeoffCraft](topic:takeoff). CSV preuzimanje ostaje za tabelarni program.
