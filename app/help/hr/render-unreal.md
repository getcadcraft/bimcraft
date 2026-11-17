---
title: Pošaljite scenu game engineu
summary: Studio može zapisati scenu u Unreal Engine projekt i održavati je usklađenom pri svakom slanju; vaše vlastite izmjene žive u sloju koji CadCraft nikad ne piše. Dodatak koji je otvara još nije objavljen.
keywords: unreal, unreal engine, game engine, veza, pošalji, usd stage, projekt, uživo, cine kamera, movie render queue
from: 154d55ef
---

U CadCraft Studiju popis Motor može sadržavati **vezu** na Unreal Engine projekt. Samo u jednom smjeru: od CadCrafta prema Unrealu.

## Pošaljite scenu

1. Odaberite stavku Unreal na popisu Motor. Prvi put Studio vas traži da odaberete mapu vašeg projekta (onu s datotekom `.uproject`); zapamtit će je.
2. Kliknite {{ui:Send}}. Studio piše `CadCraft/<naziv datoteke>/` unutar projekta: scenu kao USD datoteku, datoteku postavki, profile svjetla i dvije male datoteke slojeva.
3. Promijenite model, spremite i ponovno pošaljite. Zamjenjuju se samo scena i datoteka postavki.

## Vaše vlastite izmjene su sigurne

USD stage koji Unreal otvara je mali korijenski sloj napravljen jednom, s dva sloja ispod njega: **vaš** na vrhu (`<name>.user.usda`, na početku prazan, CadCraft ga nikad ne prepisuje) i CadCraftova scena ispod. Izmjene koje spremite u vlastiti sloj ostaju kad se scena ponovno pošalje. Svjetla i drugi akteri koje postavite u Unreal razini nalaze se izvan stagea i također se ne diraju.

## Bez Studija

U pregledniku, ili na računalu na kojem Studio ne pronalazi Unreal, odaberite **Mapa Unreal projekta (.zip)** na popisu Motor i kliknite {{ui:Render}}. Sprema istu mapu kao zip: raspakirajte je u mapu `CadCraft` vašeg projekta. Ostavite **Uključi datoteke stagea** uključeno prvi put; isključite je za kasnija spremanja, tako da zip sadrži samo scenu i datoteku postavki, a vaš vlastiti sloj se nikad ne zamjenjuje.

:::note
Unreal dodatak koji otvara stage, primjenjuje sunce, svjetiljke, kamere i ekspoziciju, prati svako slanje i renderira kameru **još nije objavljen** i nije pokrenut u Unrealu. Dok ne bude, Pošalji stavlja datoteke u projekt, a vlastiti USD alati Unreala mogu ih otvoriti. Prvi sustav je Windows; slijedi macOS.
:::
