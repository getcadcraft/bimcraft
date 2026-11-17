---
title: Spremanje pogleda i vodiča korak po korak
summary: Čuvajte kamere 3D pogleda po imenu, vraćajte se na njih, puštajte ih jedan za drugim i snimite šetnju kroz zgradu za reprodukciju.
keywords: pogledi, spremljeni pogledi, kamera, kamere, pogled, scena, scene, obilazak, prezentacija, vodič, šetnja, obilazak zgrade, snimi, reproduciraj, putanja, animacija
from: 3af19a36
---

{{ui:Pogledi}} na alatnoj traci čuva kamere 3D pogleda u datoteci modela, pa vi i svi kojima je pošaljete možete odmah na njih.

## Spremite pogled

1. Postavite 3D pogled: okrenite, zumirajte, sakrijte što ne želite.
2. Kliknite {{ui:Pogledi}}, upišite ime (ili zadržite ponuđeno) i kliknite {{ui:Spremi pogled}} ili pritisnite {{key:Enter}}.

Spremanje s imenom koje je već na popisu ažurira taj pogled. Kliknite ime pogleda da se vratite na njega; kamera se glatko pomakne tamo.

Strelice mijenjaju redoslijed, olovka preimenuje, kanta briše. Svaka promjena je jedan korak, pa je {{key:Ctrl+Z}} poništava.

## Reproducirajte poglede

{{ui:Reproduciraj poglede}} prelazi s jednog pogleda na sljedeći prema redoslijedu na popisu, zaustavljajući se na trenutak na svakom. {{key:Esc}} ili {{ui:Zaustavi}} završava.

## Snimite vodič korak po korak

1. Uključite [Šetnju](topic:walk) i počnite hodati unutar zgrade.
2. U {{ui:Pogledi}} kliknite {{ui:Snimi šetnju}}.
3. Hodajte s {{key:W}} {{key:A}} {{key:S}} {{key:D}} i gledajte oko sebe mišem.
4. Kliknite {{ui:Zaustavi snimanje}}. Šetnja se sprema kao „Walk 1”, sa svojom duljinom.

Kliknite šetnju da je reproducirate kao što ste je prošli. {{key:Esc}} je zaustavlja.

## Renderirajte vodič kao video

Kliknite ikonu filma pored šetnje. Dijaloški okvir za video iscrtava svaki kadar šetnje s postavkama renderiranja koje ste zadnje odabrali, u veličini, brzini kadrova i kvaliteti koje ovdje birate. Spremite ga kao WebM ili MP4 video, ili kao ZIP s jednom slikom po kadru. Kadrovi traju koliko i slike, pa počnite s {{ui:Brzo}}.

## Pripovijedajte vodič

Kliknite ikonu govornog mjehurića pored šetnje. Napišite jedan redak za svaku izrečenu stvar, a svaki redak započnite vremenom kad počinje (`12`, `0:12` ili `1:02.5`); redak bez vremena slijedi redak iznad nakon vremena koje treba da se izgovori. Odaberite jezik, prema jeziku klijenta ako je to onaj tko će gledati. {{ui:Pregled}} reproducira riječi glasom ovog računala i prikazuje ih kao titlove; isto se događa kad god se šetnja reproducira. {{ui:Spremi uz šetnju}} zadržava naraciju u IFC-u uz šetnju.

Vaš povezani pomoćnik može napisati naraciju umjesto vas: zamolite ga da pogleda šetnju i spremljene poglede, pa on postavlja retke na jeziku koji navedete, kao jedan korak poništavanja.

Renderirani video nema vlastiti zvuk, jer preglednik ne može snimiti vlastiti glas. Spremite titlove (`.srt` ili `.vtt`) i dodajte ih videu u svom playeru ili uređivaču. Koje glasove možete odabrati ovisi o računalu: jezik bez instaliranog glasa i dalje dobiva titlove.

## U datoteci

Pogledi i šetnje čuvaju se u IFC-u kao skup svojstava `CadCraft_Views` na projektu: običan IFC koji drugi programi ignoriraju. Nalaze se u koordinatama prvog modela, pa i dalje odgovaraju nakon ponovnog učitavanja modela ili dodavanja drugog.

:::tip
Za renderiranje slike iz spremljenog pogleda, idite na pogled, pa kliknite [Renderiraj](topic:render).
:::
