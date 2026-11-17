---
title: Specifikacije, kote i PDF plana
summary: Specifikacije vrata, prozora, zidova i prostorija koje se mijenjaju dok crtate, kote na planu i plan nivoa sačuvan kao PDF u standardnoj razmjeri.
keywords: specifikacija, specifikacija vrata, specifikacija prozora, specifikacija zidova, specifikacija prostorija, količine, predmjer, površina, csv, tabela, kote, kota, štampanje, pdf, crtanje, razmjera, 1/4", 1:50, list
from: d97cd16e
---

## Šta ćete raditi

Vidite šta zgrada koju ste nacrtali iznosi dok je crtate: koliko vrata i prozora svake dimenzije, koliko zida svake vrste, kolika je svaka prostorija. Stavite kote na plan i sačuvajte ga kao PDF za štampanje ili slanje.

## Specifikacije

Uz uključeno {{ui:Crtanje}}, **Specifikacije** u lijevom panelu prikazuje jednu tabelu u jednom trenutku:

- **Vrata** i **Prozori**: svaka po svojoj oznaci (D1, D2 … i W1 …, kako ih postavljate), svojoj vrsti, širini, visini (i parapetu), nivou i zidu u kojem se nalazi.
- **Zidovi po vrsti**: za svaku vrstu zida, koliko zidova, njihova debljina, ukupna dužina i bočna površina kao **Bruto površina**, **Odbici** i **Neto površina**, s ukupnim zbirom.
- **Prostorije**: broj, naziv, nivo, površina i obim, s ukupnom površinom.
- **Podovi**: svaki pod s nivoom, vrstom i debljinom, te njegovom bruto površinom, odbicima i neto površinom.
- **Završni slojevi**: svaki sloj završne obrade vrsta zida (po materijalu i strani zida) i plafoni, s brojem površina i bruto, odbicima i neto.
- **Vrste zidova: podaci za predmjer**: što je jednom uneseno za svaku vrstu zida (jedinica, malter, stopa), s brojem zidova, njihovom dužinom i neto površinom, i stopom pomnoženom s izmjerenom količinom. Pogledajte [Sklopovi zidova](topic:wall-assemblies).

- **Završne obrade po prostoriji**, **Završne obrade po zidu**, **Završne obrade po zoni** i **Količine završnih obrada**: što pokriva svaku prostoriju, s površinama, brojem pločica uključujući rezanja i zapreminama podloge. Pogledajte [Završne obrade prostorija i specifikacije završnih obrada](topic:room-finishes).
- Vaše vlastite **postavke**: specifikacija koju ste grupisali, zbrojili i sačuvali pod nazivom. Pogledajte [Raspored, čuvanje i izvoz specifikacije](topic:schedule-layouts).

Tabele se mijenjaju uz svaku izmjenu. Kliknite red ili pojedinačnu cifru da izaberete elemente iz kojih potiče. {{ui:Preuzmi CSV}} sprema tabelu da je otvorite u tabelarnom programu; **Preuzmi Excel** i **Kopiraj za Google Sheets** su ispod. {{ui:Završne obrade prostorija}} i **Specifikacija** ([Napišite specifikaciju iz modela](topic:specification)) otvaraju se s istog mjesta.

## Površina i zapremina svakog sloja

Izaberite **Slojevi: površina i zapremina** u listi Specifikacije. Ima jedan red za svaki sloj svake vrste zida, poda, krova i plafona u upotrebi: element, vrsta i njen LOD, sloj (brojan od vanjske strane zida, od vrha poda, krova ili plafona), njegov materijal i funkcija, debljina, koliko elemenata, **neto površina** i **zapremina**.

- Površina je neto površina elemenata te vrste, izmjerena tačno kao u Zidovi po vrsti, Podovi i Završni slojevi, prema mjernoj metodi projekta. Krov se mjeri po nagibu; nijedna mjerna metoda nema pravilo za krovove.
- Zapremina je ta površina pomnožena sopstvenom debljinom sloja.
- Pod, krov ili plafon bez vrste je jedan red: jedan sloj vlastite debljine.
- Vazdušna šupljina je navedena s površinom i izostavljena iz ukupne zapremine. Membrana ima površinu i nema zapreminu.

Kliknite red da izaberete njegove elemente. **Preuzmi CSV** sprema tabelu.

## Kako se mjere površine

Svaka površina su tri broja koja se zbrajaju: bruto umanjeno za odbitke je neto. Pravilo je napisano iznad svake od ovih tabela, i to je jedno pravilo: specifikacije, količine sačuvane u IFC datoteci i predmjer predat TakeoffCraft-u svi ga koriste.

- **Zid**: bruto je jedna strana zida, njegova dužina duž središnje linije puta njegova visina (stvarna površina za zid s oblikovanim vrhom ili podnožjem). Svaka vrata, prozor i drugi otvor odbijaju se, širina puta visina, svaki otvor jednom.
- **Pod ili plafon**: bruto je površina unutar njegovog obrisa. Svaki otvor i izrez unutar njega odbija se jednom.
- **Završna obrada zida**: svaki sloj završne obrade vrste zida pokriva jednu stranu zida, mjereno kao zid, s istim odbijenim otvorima. Završna obrada je sloj zida: navedena je pod Završne obrade i nije dodata površini zida, pa zid s vratima nikad nije računat dvaput.

To je **zadana vrijednost CadCraft**: svaki otvor se odbija, bez obzira na veličinu; dužine zidova su duž središnje linije; reveli se ne mjere. Koristi je svaki projekt dok ne izaberete drugu metodu.

## Izbor mjerne metode

Iznad specifikacije, **Mjerna metoda** navodi metode koje dolaze uz BimCraft, a **Učitaj datoteku metode** uzima metodu vaše kancelarije. Izbor se čuva u IFC datoteci, kao jedan korak poništavanja, i tri stvari slijede odmah: specifikacije, neto količine sačuvane u datoteci i predmjer predat TakeoffCraft-u. Pravilo iznad svake tabele tada počinje metodom, njenim izvorom, datumom kad je izvor pročitan i riječima **Nije provjerio količinski inženjer**.

Metoda je mala datoteka činjenica, a ne programski kod. Za svaku količinu navodi:

- **najmanji otvor koji se odbija**: na primjer, otvor od 0.5 m² ili manji ostaje u površini zida;
- **kako se mjere spojevi zidova**: duž središnje linije; ili zid koji se završava uz drugi mjeri se do lica tog zida; ili se svaki kraj zida koji se spaja s drugim zidom mjeri do bliskog lica;
- **da li se reveli mjere** za završnu obradu (povrati završne obrade u otvore), kao površina ili, kad su plitki, kao dužina. Dubina revela uzima se kao polovina debljine zida;
- **šta kaže o zidanju**: kako se mjeri, i svaki otpad ili dodatak za malter koji navodi.

Metode koje dolaze uz BimCraft:

| Metoda | Zidovi: najmanji otvor koji se odbija | Završne obrade zidova | Plafoni | Zidanje |
|---|---|---|---|---|
| CadCraft zadana | svaki otvor | svaki otvor | svaki izrez | bez dodataka |
| RICS NRM 2 (Ujedinjeno Kraljevstvo), 2. izdanje 2021 | 0.5 m² ili manje ostaje | 1 m² ili manje ostaje | 1 m² ili manje ostaje | po površini; bez navedenih procenata |
| AAQS Standard Method for Africa 2015 | 0.5 m² ili manje ostaje | 0.5 m² ili manje ostaje | 0.5 m² ili manje ostaje | po površini; mjereno neto, 0% otpada |
| IS 1200 (Indija), 1976, zidanje opekom | 0.1 m² ili manje ostaje | zadano (vidi dolje) | zadano | po zapremini |
| BIA Technical Note 10 (Sjedinjene Američke Države), 2009 | svaki otvor | zadano | zadano | 5% otpada na jedinice, 15% na malter |

Pročitajte ova ograničenja prije nego se oslonite na metodu:

- **Nijedan količinski inženjer nije provjerio nijednu od njih.** Svaka je napravljena čitanjem navedenog izvora i bilježenjem njenih brojeva uz klauzulu iz koje potiču. Ako ste količinski inženjer i možete provjeriti jednu, tvorci aplikacije bi voljeli čuti od vas.
- Tamo gdje pravilo nije moglo biti pročitano iz izvora, metoda kaže **nije potvrđeno** za njega i koristi se zadana CadCraft vrijednost. Nijedna metoda koja dolazi uz BimCraft nema potvrđeno pravilo za spojeve zidova, reveli ili podove, pa se oni mjere zadanim načinom pod svima.
- IS 1200 odbija otvore u žbuci u tri opsega. Datoteka metode još ne može sadržavati opsege, pa završne obrade zidova koriste zadanu vrijednost pod tom metodom, i pravilo to navodi.
- Južnoafrički standardni sistem mjerenja građevinskih radova **nije** među njima: njegov tekst nije mogao biti pročitan. AAQS metoda za Afriku kaže da je zasnovana na izdanju tog sistema iz 1991, ali to je drugi dokument.
- BIA Technical Note 10 je industrijska napomena za procjenu, a ne standardna metoda mjerenja.
- Otvor koji je tačno najmanje veličine prati vlastite riječi metode („ne prelazi“, „manje od“). Dimenzije unutar 2 dijela na 10 000 od nje računaju se kao tačno ona.
- Pod metodom, neto bočna površina zida i neto površina poda ili plafona iz datoteke prate metodu, a naziv metode navodi skup količina. Bruto površine i zapremine u datoteci ostaju kako su nacrtane.

**Napomene o ovoj metodi**, ispod birača, navode šta svaki izvor ostavlja otvoreno. **Otvori izvor** vodi do dokumenta.

### Vlastita metoda vaše kancelarije

Datoteka metode je JSON u formatu `cadcraft-measurement-method`. Svaka vrijednost u njoj navodi klauzulu iz koje dolazi; vrijednost bez klauzule se odbija. Datoteka se provjerava pri učitavanju, pogrešno polje se imenuje, i ništa se ne koristi iz datoteke koja ne prođe. Kad je izabrana, datoteka se čuva unutar projekta, pa se projekt jednako otvara na drugom računaru. Njen id je običan naziv po vašem izboru (ne smije biti id metode koja dolazi uz aplikaciju).

## Cigle, blokovi i malter

**Vrste zidova: podaci za predmjer** broje jedinice i malter svake vrste zida čija jedinica ima dužinu i visinu (pogledajte [Dajte vrsti podatke za predmjer](topic:wall-assemblies#give-a-type-its-takeoff-data)). Ovo su formule, tačno kako se računaju:

- **Jedinice po površini jednog sloja** = 1 / ((dužina jedinice + spoj) × (visina jedinice + spoj)). Cigla 215 × 65 mm sa spojem od 10 mm: 1 / (225 × 75 mm) = 59.26 po m².
- **Širine jedinica preko sloja** = (debljina sloja + spoj) / (širina jedinice + spoj), zaokruženo na cijeli broj, najmanje 1. Sloj od 102.5 mm od cigli od 102.5 mm je 1; zid od 215 mm od istih cigli je 2.
- **Jedinice** = jedinice po površini × širine jedinica preko × neto površina lica zida, zbrojeno preko slojeva zidanja vrste.
- **Jedinice za naručiti** = jedinice × (1 + otpad % / 100), zaokruženo naviše na cijelu jedinicu. Otpad je onaj unesen na vrsti; bez unosa, onaj metode, ako ga navodi; inače 0%.
- **Malter** = neto površina × debljina sloja, umanjeno za zapreminu jedinica (jedinice × dužina × visina × širina), zatim plus dodatni procenat unesen na vrsti za rupe ili perforacije, zatim plus dodatak metode ako ga navodi. Potrebna je širina jedinice.

Pretpostavlja se: svaki sloj zidanja vrste građen je od jedine jedinice te vrste; sloj deblji od jedne širine jedinice broji se kao toliko širina jedinica, svaka kao sloj položen po dužini, pa se rezane jedinice, zatvarači i posebni oblici ne broje odvojeno; gdje nijedan sloj nije označen kao građen od jedinice, jezgreni slojevi se uzimaju kao slojevi zidanja, i napomena iznad tabele to navodi. **Iznos** je stopa pomnožena s onim na šta se stopa odnosi, što sada može biti i jedinica za naručiti, 1000 jedinica za naručiti ili m³ maltera.

Oznake su IFC oznake elemenata: promijenite jednu u **Svojstvima** (Oznaka) i specifikacija slijedi. Za svaki IFC model, nacrtan ili ne, [Zbrojite količine, navedite elemente i raspoređite prostore](topic:quantity-totals) zbraja bilo koje svojstvo.

## Kote

Plan prikazuje dužinu svakog nacrtanog zida duž njegove vanjske strane (unutrašnji zid: duž jedne strane) i, za zid s vratima ili prozorima, lanac od uglova do svakog otvora. {{ui:Kote}} u traci modela ih sakriva i ponovo prikazuje.

## Čuvanje plana kao PDF

1. Prikažite nivo koji želite i postavite jedinice u panelu **Nivoi**.
2. Kliknite {{ui:Štampaj}} u traci modela.
3. BimCraft sprema „<datoteka> — <nivo>.pdf“: plan u crno-bijelom, u najvećoj standardnoj razmjeri koja staje na stranicu (1/4" = 1'-0", 1/8" = 1'-0" … na Letter u stopama i inčima; 1:50, 1:100 … na A4 u milimetrima), sa ispunjenim zidovima, vratima, prozorima, nazivima prostorija i površinama, kotama, i naslovnom trakom s nivoom, datotekom, visinom presjeka, datumom i razmjerom.

PDF je nacrtan kao linije i tekst, pa ostaje oštar pri bilo kojem zumu, a njegov tekst se može pretraživati.

## Dobro je znati

- Specifikacije navode ono što su alati za crtanje napravili. Vrata i prozori iz drugog programa prikazuju se umjesto toga u Zbirnim količinama.
- Da izračunate posao, predajte količine TakeoffCraft-u: pogledajte [Količine za TakeoffCraft](topic:takeoff). Preuzimanje CSV-a ostaje za tabelarni program.
