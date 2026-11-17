---
title: Čuvanje pogleda i šetnji
summary: Čuvajte kamere 3D modela po imenu, vraćajte se na njih, puštajte ih jednu za drugom i snimite šetnju kroz zgradu za reprodukciju.
keywords: pogledi, sačuvani pogledi, kamera, kamere, tačka gledanja, scena, scene, obilazak, prezentacija, šetnja, prolazak, snimi, pusti, putanja, animacija
from: 3af19a36
---

{{ui:Pogledi}} na traci čuva kamere 3D pogleda u datoteci modela, pa vi i svako kome je pošaljete možete odmah da se vratite na njih.

## Čuvanje pogleda

1. Podesite 3D pogled: orbitirajte, zumirajte, sakrijte ono što ne želite.
2. Kliknite {{ui:Pogledi}}, ukucajte ime (ili zadržite ponuđeno) i kliknite {{ui:Sačuvaj pogled}} ili pritisnite {{key:Enter}}.

Čuvanje sa imenom koje je već na listi ažurira taj pogled. Kliknite ime pogleda da se vratite na njega; kamera se tamo glatko pomera.

Strelice menjaju redosled, olovka preimenuje, kanta briše. Svaka promena je jedan korak, pa je {{key:Ctrl+Z}} opoziva.

## Pusti poglede

{{ui:Pusti poglede}} prelazi s jednog pogleda na sledeći po redosledu na listi, zadržavajući se trenutak kod svakog. {{key:Esc}} ili {{ui:Zaustavi}} ga završava.

## Snimanje šetnje

1. Uključite [Šetnju](topic:walk) i počnite da šetate unutar zgrade.
2. U {{ui:Pogledi}} kliknite {{ui:Snimi šetnju}}.
3. Šetajte sa {{key:W}} {{key:A}} {{key:S}} {{key:D}} i gledajte okolo mišem.
4. Kliknite {{ui:Zaustavi snimanje}}. Šetnja se čuva kao „Šetnja 1“, sa svojom dužinom.

Kliknite šetnju da je pustite onako kako ste je prošetali. {{key:Esc}} je zaustavlja.

## Renderovanje šetnje kao video

Kliknite ikonu filma pored šetnje. Dijalog za video crta svaki kadar šetnje sa podešavanjima renderovanja koja ste poslednji put izabrali, u veličini, brzini kadrova i kvalitetu koje ovde birate. Sačuvajte ga kao WebM ili MP4 video, ili kao ZIP sa jednom slikom po kadru. Kadrovi traju koliko i slike, pa počnite sa {{ui:Brzo}}.

## Narracija šetnje

Kliknite ikonu govornog mehurića pored šetnje. Napišite jedan red za svaku izrečenu stvar i započnite red vremenom kada počinje (`12`, `0:12` ili `1:02.5`). Red bez vremena ide posle reda iznad, nakon vremena koje je potrebno da se izgovori. Izaberite jezik, po jeziku klijenta ako je on taj koji će gledati. {{ui:Pregled}} pušta reči glasom ovog računara i prikazuje ih kao titlove; isto se dešava kad god se šetnja pusti. {{ui:Sačuvaj uz šetnju}} čuva narraciju u IFC-u uz šetnju.

Vaš povezani asistent može da napiše narraciju umesto vas: zamolite ga da pogleda šetnju i sačuvane poglede, a on postavlja redove na jeziku koji navedete, kao jedan korak za opozivanje.

Renderovani video nema sopstveni zvuk, jer pregledač ne može da snimi sopstveni glas. Sačuvajte titlove (`.srt` ili `.vtt`) i dodajte ih u video u vašem plejeru ili uređivaču. Koje glasove možete izabrati zavisi od računara: jezik bez instaliranog glasa i dalje dobija titlove.

## U datoteci

Pogledi i šetnje se čuvaju u IFC-u kao skup svojstava `CadCraft_Views` na projektu: običan IFC koji drugi programi ignorišu. Nalaze se u koordinatama prvog modela, pa i dalje odgovaraju nakon što se model ponovo učita ili se doda drugi model.

:::tip
Da renderujete sliku iz sačuvanog pogleda, idite na pogled, pa kliknite [Renderuj](topic:render).
:::
