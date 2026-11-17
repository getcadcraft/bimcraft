---
title: Reši sudare popravkama po disciplinama
summary: Iz rezultata provere sudara, Predloži popravke navodi za svaki sudar šta bi svaka disciplina mogla da uradi, na primer kanal obiđen ispod grede, cev pomerena u stranu, kolona pomerena ili otvor u gredi. Svaka popravka se proba na kopiji modela sa svojim kompromisima, a ti prihvataš ili odbijaš. Prihvaćene popravke ulaze kao jedan korak opoziva.
keywords: sudar, popravka sudara, rešavanje sudara, koordinacija, predloži popravke, obilaženje, pomeranje, kanal, cev, polica, greda, kolona, otvor, čaura, kompromis, disciplina, konstrukcija, mašinstvo, vodovod, elektro, arhitektura, asistent
from: f7bafdd9
---

## Šta ćeš uraditi

Pretvori listu sudara u odluke. Svaka disciplina (konstrukcija, mašinstvo, vodovod, elektro, arhitektura) predlaže popravke samo za svoje elemente, svaki predlog se proverava na kopiji modela, a ti biraš.

## Koraci

1. Prvo pokreni proveru sudara. Vidi [Proveri sudare](topic:clash-check) i [Proveri cevi i kanale prema konstrukciji](topic:mep-against-structure).
2. Ispod rezultata klikni {{ui:Predloži popravke}}. Panel **Predložene popravke** otvara se pored modela.
3. Za svaki sudar vidiš predloge svake discipline, najbolji prvi. Svaki red kaže šta popravka radi i koji su njeni kompromisi: da li rešava sudar, koliko novih sudara pravi, koja pravila krši, koliko trase dodaje ili koliko se pomera, koliko fitinga ima i ocenu troška.
4. Klikni {{ui:Prikaži}} da vidiš elemente u 3D. Klikni {{ui:Prihvati}} na popravku koju želiš (jednu po sudaru) ili {{ui:Odbij}}.
5. Red na dnu kaže šta sve tvoje prihvaćene popravke rade zajedno: koliko je sudara rešeno, koliko ih je ostalo i da li se nešto novo sudara.
6. Klikni {{ui:Primeni prihvaćene popravke (jedan korak opoziva)}}. Provera sudara se ponovo pokreće. {{ui:Opozovi}} vraća sve njih odjednom.

## Šta sme svaka disciplina

- **Mašinstvo** (kanali, cevi za grejanje i hlađenje): obilazak iznad ili ispod na kraku koji udara, podizanje ili spuštanje cele trase, pomeranje u stranu, spljoštavanje pravougaonog kanala uz istu površinu.
- **Vodovod** (voda, odvodi, gas, protivpožarni sistem): isti potezi, osim što odvod na sopstveni pad nikad ne dobija obilazak; može samo da se pomeri kao celina, zadržavajući pad.
- **Elektro** (kablovske police i instalacione cevi): isti potezi; polica mora da ostavi 150 mm slobodnog prostora iznad sebe za polaganje kablova.
- **Konstrukcija**: pomeranje kolone (do 300 mm) ili otvor u rebru grede ili u međuspratnoj konstrukciji za trasu koja prolazi. Svaka konstrukcijska popravka kaže da je statičar overava.
- **Arhitektura**: čaura u zidu za trasu koja prolazi, ili pomeranje zida za koji je poznato da ne nosi opterećenje.

## Šta bi trebalo da vidiš

- Popravke koje krše pravilo su obeležene: bliže od razmaka od 25 mm do nečeg drugog, ispod linije slobodne visine od 2,100 mm, otvor u rebru veći od 40% visine grede ili preblizu njenih krajeva, greda koja bi promenila raspon.
- Popravke koje BimCraft može da napravi primenjuju se na model: trase koje si nacrtao alatima Cev i Kanal i kolone koje si nacrtao. Ostale nose oznaku **Samo savet**: prihvatanje tada dodaje problem na kartici {{ui:Problemi}}.

## Dobro je znati

- Popravke dolaze iz ugrađenih pravila u aplikaciji; za njih se ne koristi veštačka inteligencija.
- Ako povežeš asistenta (vidi [Pusti AI asistenta da radi sa modelom](topic:assistants)), on može da pročita sudare i doda sopstvene predloge za jednu disciplinu u otvoreni panel. Oni se proveravaju na isti način, obeleženi su imenom asistenta, i ništa se ne menja dok ih ne prihvatiš i primeniš.
- Kopija se proverava okvirima oko svakog elementa i svakog kraka trase, pa kosa trasa može da pokaže sudar koji provera sudara ne bi. Pokreni proveru sudara ponovo posle primene: ona je konačna reč.
- Granice (koliko trasa sme da se pomeri, koliko visoko obilazak sme da ide, razmak) su podrazumevane vrednosti navedene u panelu.

## Dalje

- [Problemi i BCF datoteke](topic:issues-bcf)
- [Crtanje trasa cevi i kanala](topic:pipes-and-ducts)
