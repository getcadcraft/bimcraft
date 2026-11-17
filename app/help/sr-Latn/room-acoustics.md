---
title: Proveri reverberaciju prostorije i poslušaj je
summary: Vreme reverberacije po oktavnim pojasevima za svaku prostoriju (Sabine i Eyring) iz njene veličine i završnih obrada, zadata ciljna vrednost i glas, pljesak ili muzika puštena kroz izračunati impulsni odziv prostorije.
keywords: akustika, reverberacija, vreme reverberacije, rt60, sabine, eyring, apsorpcija, eho, zvuk, slušanje, impulsni odziv, govor, učionica, kancelarija, tepih, plafonska ploča, buka
from: 16996cbb
---

Odeljak {{ui:Akustika prostorija}} u levom panelu računa koliko zvuk traje u svakoj prostoriji. Čita površinu poda, visinu, zidove, vrata i prozore iz otvorenog IFC modela. Ništa u modelu se ne menja.

## Izbor završnih obrada

Gde model kaže šta je na površini, prostorija to čita: unutrašnji sloj tipa svakog zida (gips, malter, cigla, beton i blok su poznati), vrsta poda (drvo ili beton) i da li je plafon obložen pločama. Oznaka pored svakog izbora kaže da li je iz modela, podrazumevana ili vaš izbor; izaberite drugu završnu obradu da je zamenite. Ono što model ne kaže ostaje na podrazumevanoj vrednosti. Koeficijenti su **tipične objavljene vrednosti**; zamenite ih podacima o ispitivanju proizvoda kada ih imate. Upišite **cilj** (najdužu srednjefrekventnu reverberaciju koju želite) i svaka prostorija iznad njega dobija upozorenje, uz apsorpciju koja bi je smanjila.

## Čitanje tabele

Reverberacija je data za 125 Hz do 4 kHz. Sabine odgovara živim prostorijama, a Eyring mrtvim; red označen sa *Korišćeno* uzima Eyring kada je prosečna apsorpcija veća od 0.2. Apsorpcija vazduha je uključena (skraćuje visoke pojaseve u velikim prostorijama). To je statistički model: pretpostavlja da se zvuk ravnomerno širi, pa su duge ili ravne prostorije i vrlo male prostorije gruba orijentacija, a nameštaj, ljudi i otvorena vrata nisu uračunati.

## Slušanje

{{ui:Pusti u ovoj prostoriji}} pušta glas (napravljen ovde), pljesak, trzane tonove ili **vašu zvučnu datoteku** (ostaje na vašem računaru) kroz impulsni odziv izračunat za prostoriju: direktni zvuk, prve refleksije kutije te veličine i rep koji se gasi pri sopstvenom vremenu reverberacije prostorije u svakom pojasu. {{ui:Pusti suvo}} pušta isti zvuk istom jačinom bez prostorije. Impulsni odziv ili zvuk u prostoriji možete sačuvati kao WAV datoteke. Zvuči kao prostorija te veličine i završne obrade, a ne kao neka stvarna prostorija.

## Ljudi i nameštaj

Upišite broj **ljudi u ovoj prostoriji** da dodate njihovu apsorpciju. Nameštaj koji model sadrži (kauči, kreveti, stolice, stolovi, ormani, prepoznat po nazivu) dodaje svoju. Brojke su grube planske vrednosti, zaokružene; zamenite ih merenjima za prostoriju koja je bitna.

## Izvor i slušalac

Pod {{ui:Izvor i slušalac}} pritisnite {{ui:Postavi izvor}} ili {{ui:Postavi slušaoca}} i kliknite na plan prostorije. Zvuk koji puštate tada se čuje odatle: direktni zvuk stiže posle razdaljine, a reverberantni deo je na jačini za tu razdaljinu. Ukloni oba da se vratiš na polje za razdaljinu.

## Neujednačena apsorpcija i režimi prostorije

Pod {{ui:Neujednačena apsorpcija (kutijasta prostorija)}} upišite prostoriju kao kutiju i izaberite završne obrade poda, plafona i zidova. Tabela dodaje Fitzroy i Arau-Puchades uz Sabine i Eyring: oni tri para suprotnih površina razmatraju odvojeno, pa soba sa tepihom i tvrdim plafonom nije pročitana kao prekratka. Kada se parovi dosta razlikuju, beleška kaže kome verovati. Ispod tabele, **Režimi prostorije** navodi najniže stojeće talase kutije i frekvenciju ispod koje prostorija ima zasebne režime umesto ravnomernog zvučnog polja. To su predviđanja za kutijastu prostoriju, pomoćno sredstvo za projektovanje, a ne merenje.

## Jedinice

Površine prostorija, visine, zapremine i razdaljine prikazuju se u {{ui:Jedinice}} koje ste izabrali (kvadratne i kubne stope, inči, milimetri, centimetri ili metri). Sam proračun ostaje u SI; menja se samo prikaz. Vremena (sekunde), frekvencije i nivoi se ne menjaju.
