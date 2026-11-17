---
title: Provjerite odjek prostorije i poslušajte ga
summary: Vrijeme odjeka po oktavnom pojasu za svaku prostoriju (Sabine i Eyring) iz njezine veličine i završnih obrada, vlastiti cilj te glas, pljesak ili glazba puštena kroz izračunati impulsni odziv prostorije.
keywords: akustika, odjek, vrijeme odjeka, rt60, sabine, eyring, apsorpcija, eho, zvuk, slušanje, impulsni odziv, govor, učionica, ured, tepih, pločica stropa, buka
from: 16996cbb
---

Odjeljak {{ui:Akustika prostorija}} lijeve ploče izračunava koliko dugo zvuk odjekuje u svakoj prostoriji. Iz otvorenog IFC modela čita površinu poda, visinu, zidove, vrata i prozore svake prostorije. Ništa se u modelu ne mijenja.

## Odaberite završne obrade

Ako model kaže što je na nekoj površini, prostorija to čita: unutarnji sloj tipa svakog zida (gips, žbuka, opeka, beton i blok su poznati), vrstu poda (drvo ili beton) i je li strop obložen pločicama. Oznaka uz svaki izbor kaže je li iz modela, zadana vrijednost ili vaš izbor; odaberite drugu završnu obradu da je zamijenite. Sve što model ne navodi ostaje na zadanoj vrijednosti. Koeficijenti su **tipične objavljene vrijednosti**; zamijenite ih podacima ispitivanja proizvoda kad ih imate. Upišite **cilj** (najduži srednjefrekvencijski odjek koji želite) i svaka prostorija iznad njega dobit će upozorenje s apsorpcijom koja bi ga spustila.

## Čitanje tablice

Odjek je prikazan za 125 Hz do 4 kHz. Sabine odgovara odjekujućim prostorijama, a Eyring prigušenima; redak označen *Korišteno* uzima Eyring kad je prosječna apsorpcija veća od 0.2. Zrakova apsorpcija uključena je (skraćuje visoke pojaseve u velikim prostorijama). To je statistički model: pretpostavlja da se zvuk širi ravnomjerno, pa su dugačke ili ravne prostorije i vrlo male prostorije gruba smjernica, a namještaj, ljudi i otvorena vrata nisu uračunati.

## Slušanje

{{ui:Reproduciraj u ovoj prostoriji}} reproducira glas (snimljen ovdje), pljesak, trzane note ili **vlastitu zvučnu datoteku** (ostaje na vašem računalu) kroz impulsni odziv izračunat za prostoriju: izravni zvuk, prve refleksije kutije te veličine i rep koji se gasi s vlastitim vremenom odjeka prostorije u svakom pojasu. {{ui:Reproduciraj suho}} reproducira isti zvuk na istoj razini bez prostorije. Impulsni odziv ili zvuk u prostoriji možete spremiti kao WAV datoteke. Zvuči kao prostorija te veličine i završne obrade, a ne kao neka stvarna prostorija.

## Ljudi i namještaj

Upišite broj **osoba u ovoj prostoriji** da dodate njihovu apsorpciju. Namještaj koji model sadrži (sofe, kreveti, stolice, stolovi, ormari, prepoznat po nazivu) dodaje vlastitu. Brojke su grube vrijednosti za planiranje, zaokružene; za važnu prostoriju zamijenite ih mjerenjima.

## Izvor i slušatelj

Pod {{ui:Izvor i slušatelj}} pritisnite {{ui:Postavi izvor}} ili {{ui:Postavi slušatelja}} i kliknite tlocrt prostorije. Zvuk koji reproducirate tada se čuje odande: izravni zvuk stiže nakon udaljenosti, a odjekujući dio ima razinu za tu udaljenost. Poništite oba da se vratite na okvir za udaljenost.

## Neujednačena apsorpcija i sobni modovi

Pod {{ui:Neujednačena apsorpcija (soba u obliku kutije)}} upišite prostoriju kao kutiju i odaberite završne obrade poda, stropa i zidova. Tablica uz Sabine i Eyring dodaje Fitzroy i Arau-Puchades: oni tri para suprotnih površina razmatraju zasebno, pa soba s tepihom i tvrdim stropom nije očitana prekratko. Kad se parovi jako razlikuju, napomena kaže kojem vjerovati. Ispod tablice **Sobni modovi** navodi najniže stojne valove kutije i frekvenciju ispod koje prostorija ima zasebne modove umjesto ravnomjernog zvučnog polja. To su predviđanja za kutijastu prostoriju, pomoć pri projektiranju, a ne mjerenje.

## Jedinice

Površine, visine, volumeni i udaljenosti prostorije prikazuju se u {{ui:Jedinice}} koju ste odabrali (kvadratne i kubne stope, palci, milimetri, centimetri ili metri). Sam proračun ostaje u SI; mijenja se samo prikaz. Vremena (sekunde), frekvencije i razine ostaju nepromijenjeni.
