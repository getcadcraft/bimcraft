---
title: Riješi kolizije popravcima svake discipline
summary: Iz rezultata kolizija, lista Predloži popravke za svaku koliziju navodi šta svaka disciplina može uraditi — kanal zaobiđen ispod grede, cijev pomjerena u stranu, stub pomjeren, otvor u gredi — svaka popravka isprobana na kopiji modela, s kompromisima, da ih ti prihvatiš ili odbiješ. Prihvaćene popravke ulaze kao jedan korak poništavanja.
keywords: kolizija, popravka kolizije, rješavanje kolizija, koordinacija, predloži popravke, preusmjeravanje, zaobilaženje, pomak, kanal, cijev, kablovska polica, greda, stub, otvor, omotač, kompromis, disciplina, konstrukcija, mašinske instalacije, vodovod, elektro, arhitektura, asistent
from: f7bafdd9
---

## Šta ćete uraditi

Pretvori listu kolizija u odluke. Svaka disciplina (konstrukcija, mašinske instalacije, vodovod, elektro, arhitektura) predlaže popravke samo za svoje elemente, svaka popravka se provjerava na kopiji modela, a ti biraš.

## Koraci

1. Prvo pokreni provjeru kolizija. Vidi [Provjeri kolizije](topic:clash-check) i [Provjeri cijevi i kanale naspram konstrukcije](topic:mep-against-structure).
2. Ispod rezultata klikni {{ui:Propose fixes}}. Panel **Predložene popravke** se otvara pored modela.
3. Za svaku koliziju vidiš prijedloge svake discipline, najbolji prvi. Svaka linija kaže šta radi i koji su kompromisi: da li rješava koliziju, koliko novih kolizija pravi, koja pravila krši, koliko trase dodaje ili koliko se pomjera, koliko fitinga i ocjenu troška.
4. Klikni {{ui:Show}} da vidiš elemente u 3D. Klikni {{ui:Accept}} na popravku koju želiš (jedna po koliziji), ili {{ui:Reject}}.
5. Linija na dnu kaže šta sve tvoje prihvaćene popravke rade zajedno: koliko kolizija je riješeno, koliko ih je ostalo i da li se bilo šta novo sudara.
6. Klikni {{ui:Apply accepted fixes (one undo step)}}. Provjera kolizija se ponovo pokreće. {{ui:Undo}} ih sve vraća odjednom.

## Šta svaka disciplina smije

- **Mašinske instalacije** (kanali, cijevi za grijanje i hlađenje): zaobilaženje iznad ili ispod na kraku koji udara, podizanje ili spuštanje cijele trase, pomjeranje u stranu, izravnavanje pravougaonog kanala uz istu površinu.
- **Vodovod** (voda, odvodi, gas, protivpožarni): isti pomaci, osim što se gravitacioni odvod nikad ne preusmjerava; može se samo pomjeriti kao cjelina, zadržavajući pad.
- **Elektro** (kablovske police i instalacione cijevi): isti pomaci; polica mora ostaviti 150 mm slobodno iznad sebe za polaganje kabla.
- **Konstrukcija**: pomjeriti stub (do 300 mm), ili otvor u rebru grede ili u ploči za trasu koja prolazi. Svaka konstrukcijska popravka kaže da je konstruktor odobrava.
- **Arhitektura**: omotač u zidu za trasu koja prolazi, ili pomjeriti zid za koji je poznato da ne nosi opterećenje.

## Šta biste trebali vidjeti

- Popravke koje krše pravilo su označene: bliže od razmaka od 25 mm do nečeg drugog, ispod linije slobodne visine od 2,100 mm, otvor u rebru veći od 40% visine grede ili preblizu njenih krajeva, greda koja bi promijenila raspon.
- Popravke koje BimCraft može napraviti primjenjuju se na model: trase koje si nacrtao alatima Cijev i Kanal i stubovi koje si nacrtao. Ostale kažu **Samo savjet**: prihvatanje njih samo dodaje problem na kartici Problemi.

## Dobro je znati

- Popravke dolaze iz ugrađenih pravila u aplikaciji; za njih se ne koristi AI.
- Ako povežeš asistenta (vidi [Neka AI asistent radi s tvojim modelom](topic:assistants)), on može čitati kolizije i dodati vlastite prijedloge za jednu disciplinu u otvoreni panel. Provjeravaju se na isti način, označeni su nazivom asistenta, i ništa se ne mijenja dok ne prihvatiš i primijeniš.
- Kopija se provjerava s kutijama oko svakog elementa i svakog kraka trase, pa kosa trasa može pokazati koliziju koju provjera kolizija ne bi. Pokreni provjeru kolizija ponovo nakon primjene: ona je konačna riječ.
- Granice (koliko se trasa smije pomjeriti, koliko visoko zaobilaženje smije ići, razmak) su zadane vrijednosti napisane u panelu.

## Dalje

- [Problemi i BCF datoteke](topic:issues-bcf)
- [Crtaj trase cijevi i kanala](topic:pipes-and-ducts)
