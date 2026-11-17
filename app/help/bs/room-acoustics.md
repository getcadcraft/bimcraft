---
title: Provjeri vrijeme odjeka prostorije i poslušaj ga
summary: Vrijeme odjeka po oktavnim pojasevima za svaku prostoriju (Sabine i Eyring) iz njene veličine i završnih obrada, zadani vlastiti cilj, i glas, pljesak ili muzika puštena kroz izračunati impulsni odziv prostorije.
keywords: akustika, odjek, vrijeme odjeka, rt60, sabine, eyring, apsorpcija, jeka, zvuk, slušanje, impulsni odziv, govor, učionica, kancelarija, tepih, plafonska ploča, buka
from: 16996cbb
---

Odjeljak {{ui:Akustika prostorije}} na lijevom panelu računa koliko zvuk traje u svakoj prostoriji. Iz otvorenog IFC modela čita površinu poda, visinu, zidove, vrata i prozore svake prostorije. Ništa u modelu se ne mijenja.

## Odaberi završne obrade

Gdje model kaže šta je na površini, prostorija to čita: unutrašnji sloj tipa svakog zida (gips, malter, cigla, beton i blok su poznati), vrstu poda (drvo ili beton) i da li je plafon obložen pločama. Oznaka pored svakog izbora kaže da li je iz modela, zadana vrijednost ili vaš izbor; odaberite drugu završnu obradu da je zamijenite. Sve što model ne kaže ostaje na zadanoj vrijednosti. Koeficijenti su **tipične objavljene vrijednosti**; zamijenite ih podacima ispitivanja proizvoda kad ih imate. Upišite **cilj** (najduže srednjefrekventno vrijeme odjeka koje želite) i svaka prostorija koja ga premašuje bit će označena upozorenjem, sa apsorpcijom koja bi ga smanjila.

## Čitanje tabele

Odjek je dat za 125 Hz do 4 kHz. Sabine odgovara živim prostorijama, a Eyring mrtvim; red označen sa *Used* uzima Eyring kad je prosječna apsorpcija veća od 0.2. Apsorpcija zraka je uključena (skraćuje visoke pojaseve u velikim prostorijama). To je statistički model: pretpostavlja da se zvuk ravnomjerno širi, pa su duge ili ravne prostorije i vrlo male prostorije gruba procjena, a namještaj, ljudi i otvorena vrata nisu uračunati.

## Slušanje

{{ui:Pusti u ovoj prostoriji}} pušta glas (napravljen ovdje), pljesak, trzane tonove ili **vaš vlastiti zvučni zapis** (ostaje na vašem računaru) kroz impulsni odziv izračunat za prostoriju: direktni zvuk, prve refleksije kutije te veličine i rep koji se gasi u vremenu odjeka prostorije u svakom pojasu. {{ui:Pusti suho}} pušta isti zvuk istim nivoom bez prostorije. Impulsni odziv ili zvuk u prostoriji možete sačuvati kao WAV datoteke. Zvuči kao prostorija te veličine i završne obrade, a ne kao neka stvarna prostorija.

## Ljudi i namještaj

Upišite broj **ljudi u ovoj prostoriji** da dodate njihovu apsorpciju. Namještaj koji model sadrži (sofe, kreveti, stolice, stolovi, ormari, prepoznat po nazivu) dodaje svoju. Brojke su grube planske vrijednosti, zaokružene; zamijenite ih mjerenjima za prostoriju koja je bitna.

## Izvor i slušalac

Pod {{ui:Izvor i slušalac}} pritisnite {{ui:Postavi izvor}} ili {{ui:Postavi slušaoca}} i kliknite na plan prostorije. Zvuk koji puštate tada se čuje odatle: direktni zvuk stiže nakon udaljenosti, a odjeknuti dio je na nivou za tu udaljenost. Obrišite oba da se vratite na polje za udaljenost.

## Neujednačena apsorpcija i modovi prostorije

Pod {{ui:Neujednačena apsorpcija (kutijasta prostorija)}} upišite prostoriju kao kutiju i odaberite završne obrade poda, plafona i zidova. Tabela uz Sabine i Eyring dodaje Fitzroy i Arau-Puchades: oni tri para suprotnih površina razmatraju odvojeno, pa prostorija s tepihom i tvrdim plafonom nije pogrešno ocijenjena kao prekratka. Kad se parovi jako razlikuju, napomena kaže kojem vjerovati. Ispod tabele, **Modovi prostorije** navodi najniže stojne valove kutije i frekvenciju ispod koje prostorija ima zasebne modove umjesto ravnomjernog zvučnog polja. To su predviđanja za kutijastu prostoriju, pomoćno sredstvo za projektovanje, a ne mjerenje.

## Jedinice

Površine prostorija, visine, zapremine i udaljenosti prikazani su u {{ui:Jedinice}} koju ste odabrali (kvadratne i kubne stope, inči, milimetri, centimetri ili metri). Proračun sam ostaje u SI; mijenja se samo prikaz. Vremena (sekunde), frekvencije i nivoi se ne mijenjaju.
