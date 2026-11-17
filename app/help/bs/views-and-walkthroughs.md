---
title: Spasite poglede i šetnje
summary: Čuvajte kamere 3D pogleda po nazivu, vraćajte se na njih, puštajte ih jedan za drugim i snimite šetnju kroz zgradu za reprodukciju.
keywords: pogledi, sačuvani pogledi, kamera, kamere, tačka gledanja, scena, scene, obilazak, prezentacija, šetnja, proletanje, snimi, pusti, putanja, animacija
from: 3af19a36
---

{{ui:Views}} na traci alata čuva kamere 3D pogleda u datoteci modela, da se vi i svako kome je pošaljete možete odmah vratiti na njih.

## Sačuvajte pogled

1. Postavite 3D pogled: rotirajte, zumirajte, sakrijte šta ne želite.
2. Kliknite {{ui:Views}}, upišite naziv (ili zadržite ponuđeni) i kliknite {{ui:Save view}} ili pritisnite {{key:Enter}}.

Čuvanje pod nazivom koji je već na listi ažurira taj pogled. Kliknite naziv pogleda da se vratite na njega; kamera se tamo glatko pomjera.

Strelice mijenjaju redoslijed, olovka preimenuje, kanta briše. Svaka promjena je jedan korak, pa je {{key:Ctrl+Z}} poništava.

## Pustite poglede

{{ui:Play the views}} prelazi s jednog pogleda na sljedeći redom liste, zadržavajući se trenutak na svakom. {{key:Esc}} ili {{ui:Stop}} ga zaustavlja.

## Snimite šetnju kroz zgradu

1. Uključite [Šetnja](topic:walk) i počnite hodati unutar zgrade.
2. U {{ui:Views}}, kliknite {{ui:Record a walk}}.
3. Hodajte s {{key:W}} {{key:A}} {{key:S}} {{key:D}} i gledajte okolo mišem.
4. Kliknite {{ui:Stop recording}}. Šetnja se čuva kao "Šetnja 1", s dužinom.

Kliknite šetnju da je pustite kako ste je hodali. {{key:Esc}} je zaustavlja.

## Renderujte šetnju kao video

Kliknite ikonicu filma pored šetnje. Dijalog za video iscrta svaki kadar šetnje s postavkama renderovanja koje ste izabrali zadnji put, u veličini, brzini kadrova i kvalitetu koje ovdje birate. Sačuvajte ga kao WebM ili MP4 video, ili kao ZIP s jednom slikom po kadru. Kadrovi traju onoliko koliko traju slike, pa počnite s {{ui:Quick}}.

## Ozvučite šetnju

Kliknite ikonicu govornog balona pored šetnje. Napišite jednu liniju za svaku izgovorenu stvar, i počnite liniju vremenom kada počinje (`12`, `0:12` ili `1:02.5`); linija bez vremena slijedi liniju iznad nakon vremena koje je potrebno da se izgovori. Izaberite jezik, na jeziku klijenta ako je to onaj koji će gledati. {{ui:Preview}} pušta riječi glasom ovog računara i prikazuje ih kao titlove; isto se dešava kad god se šetnja pusti. {{ui:Save with the walk}} čuva naraciju u IFC-u uz šetnju.

Vaš povezani asistent može napisati naraciju umjesto vas: zamolite ga da pogleda šetnju i sačuvane poglede, i on postavlja linije na jeziku koji navedete, kao jedan korak za poništavanje.

Renderovani video nema vlastiti zvuk, jer pregledač ne može snimiti sopstveni glas. Sačuvajte titlove (`.srt` ili `.vtt`) i dodajte ih videu u vašem video plejeru ili uređivaču. Koje glasove možete izabrati zavisi od računara: jezik bez instaliranog glasa i dalje dobija titlove.

## U datoteci

Pogledi i šetnje se čuvaju u IFC-u kao skup svojstava `CadCraft_Views` na projektu: običan IFC koji drugi programi ignorišu. Nalaze se u koordinatama prvog modela, pa i dalje odgovaraju nakon ponovnog učitavanja modela ili dodavanja drugog.

:::tip
Da renderujete sliku iz sačuvanog pogleda, idite na pogled, zatim kliknite [Renderuj](topic:render).
:::
