---
title: Rješavanje sudara prema rješenjima svake struke
summary: Iz rezultata provjere sudara, Predloži rješenja navodi za svaki sudar što bi svaka struka mogla učiniti: kanal obiđen ispod grede, cijev pomaknuta u stranu, stup pomaknut, otvor u gredi. Svako se isprobava na kopiji modela s kompromisima, a vi prihvaćate ili odbijate. Prihvaćena rješenja ulaze kao jedan korak poništavanja.
keywords: sudar, rješenje sudara, rješavanje sudara, koordinacija, predloži rješenja, preusmjeravanje, obilazak, pomak, kanal, cijev, kabelska ladica, greda, stup, otvor, čahura, kompromis, struka, konstrukcija, strojarstvo, vodovod, elektrotehnika, arhitektura, asistent
from: f7bafdd9
---

## Što ćete napraviti

Pretvorite popis sudara u odluke. Svaka struka (konstrukcija, strojarstvo, vodovod, elektrotehnika, arhitektura) predlaže rješenja samo za svoje elemente, svaki prijedlog provjerava se na kopiji modela, a vi birate.

## Koraci

1. Najprije pokrenite provjeru sudara. Vidi [Provjera sudara](topic:clash-check) i [Provjera cijevi i kanala prema konstrukciji](topic:mep-against-structure).
2. Ispod rezultata kliknite {{ui:Predloži rješenja}}. Okno **Predložena rješenja** otvara se uz model.
3. Za svaki sudar vidite prijedloge svake struke, najbolji prvi. Svaki redak govori što radi i koji su mu kompromisi: rješava li sudar, koliko novih sudara stvara, koja pravila krši, koliko dodaje dionice ili koliko se pomiče, koliko spojnih elemenata koristi i ocjenu troška.
4. Kliknite {{ui:Prikaži}} da vidite elemente u 3D. Kliknite {{ui:Prihvati}} na rješenje koje želite (jedno po sudaru), ili {{ui:Odbij}}.
5. Redak na dnu govori što svi vaši prihvaćeni prijedlozi čine zajedno: koliko je sudara riješeno, koliko ih ostaje i pojavljuje li se što novo.
6. Kliknite {{ui:Primijeni prihvaćena rješenja (jedan korak poništavanja)}}. Provjera sudara pokreće se ponovno. {{ui:Poništi}} vraća sve odjednom.

## Što smije svaka struka

- **Strojarstvo** (kanali, cijevi grijanja i hlađenja): obilazak iznad ili ispod na kraku koji pogađa, podizanje ili spuštanje cijele dionice, pomicanje u stranu, sploštavanje pravokutnog kanala uz istu površinu.
- **Vodovod** (voda, odvodi, plin, protupožarna instalacija): isti potezi, osim što se odvodu pod padom nikad ne daje obilazak; može se pomaknuti samo kao cjelina, zadržavajući pad.
- **Elektrotehnika** (kabelske ladice i instalacijske cijevi): isti potezi; ladica mora imati 150 mm slobodnog prostora iznad sebe za polaganje kabela.
- **Konstrukcija**: pomicanje stupa (do 300 mm) ili otvora u hrptu grede ili u ploči za dionicu koja prolazi. Svaki konstrukcijski prijedlog kaže da ga odobrava inženjer konstrukcije.
- **Arhitektura**: čahura u zidu za dionicu koja prolazi ili pomicanje zida za koji je poznato da ne nosi opterećenje.

## Što biste trebali vidjeti

- Rješenja koja krše pravilo označena su: bliže od razmaka od 25 mm nečemu drugom, ispod linije slobodne visine od 2,100 mm, otvor u hrptu veći od 40% visine grede ili preblizu njezinim krajevima, greda koja bi promijenila raspon.
- Rješenja koja BimCraft može primijeniti na model: dionice koje ste nacrtali alatima Cijev i Kanal te stupovi koje ste nacrtali. Ostala su označena **Samo savjet**: njihovo prihvaćanje dodaje temu na kartici Teme.

## Dobro je znati

- Rješenja dolaze iz ugrađenih pravila u aplikaciji; za njih se ne koristi umjetna inteligencija.
- Ako povežete AI pomoćnika (vidi [Omogućite AI pomoćniku rad s vašim modelom](topic:assistants)), on može čitati sudare i dodati vlastite prijedloge za jednu struku u otvoreno okno. Provjeravaju se na isti način, označeni su imenom pomoćnika, a ništa se ne mijenja dok ne prihvatite i primijenite.
- Kopija se provjerava s okvirima oko svakog elementa i svakog kraka dionice, pa kosa dionica može pokazati sudar koji provjera sudara ne bi. Nakon primjene ponovno pokrenite provjeru sudara: ona je konačna riječ.
- Ograničenja (koliko se dionica smije pomaknuti, koliko visoko obilazak smije ići, razmak) zadane su vrijednosti zapisane u oknu.

## Dalje

- [Teme i BCF datoteke](topic:issues-bcf)
- [Crtanje dionica cijevi i kanala](topic:pipes-and-ducts)
