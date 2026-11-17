---
title: Pošaljite scenu motoru za igre
summary: Studio može upisati scenu u projekat Unreal Engine i držati je usklađenom pri svakom slanju; vaše vlastite izmjene žive u sloju koji CadCraft nikada ne piše. Dodatak koji je otvara još nije objavljen.
keywords: unreal, unreal engine, motor za igre, veza, pošalji, usd stage, projekat, uživo, cine camera, red filmskog renderovanja
from: 154d55ef
---

U CadCraft Studiju lista „Motor“ može sadržavati **vezu** ka projektu Unreal Engine. Samo u jednom smjeru: od CadCraft-a ka Unrealu.

## Pošaljite scenu

1. Odaberite stavku Unreal na listi „Motor“. Prvi put Studio vas pita da odaberete fasciklu vašeg projekta (onu sa `.uproject` datotekom); zapamtiće je.
2. Kliknite {{ui:Pošalji}}. Studio piše `CadCraft/<naziv datoteke>/` unutar projekta: scenu kao USD datoteku, datoteku postavki, profile svjetla i dvije male datoteke sloja.
3. Promijenite model, spasite i pošaljite ponovo. Zamjenjuju se samo scena i datoteka postavki.

## Vaše vlastite izmjene su sigurne

Scena koju Unreal otvara je mali korijenski sloj napravljen jednom, sa dva sloja ispod njega: **vaš** na vrhu (`<naziv>.user.usda`, prazan na početku, nikada ga CadCraft ne prepisuje) i CadCraftova scena ispod. Izmjene koje spasite u vašem sloju ostaju kad se scena ponovo pošalje. Svjetla i drugi akteri koje postavite u Unreal nivou su van scene i također se ne diraju.

## Bez Studija

U pregledniku, ili na računaru gdje Studio ne nađe Unreal, odaberite **Fascikla Unreal projekta (.zip)** na listi „Motor“ i kliknite {{ui:Renderuj}}. Spašava istu fasciklu kao zip: raspakujte je u fasciklu `CadCraft` vašeg projekta. Ostavite **Uključi datoteke scene** uključeno prvi put; isključite je za kasnija spašavanja, tako da zip sadrži samo scenu i datoteku postavki, a vaš vlastiti sloj se nikada ne zamjenjuje.

:::note
Dodatak za Unreal koji otvara scenu, primjenjuje sunce, svjetiljke, kamere i izloženost, prati svako slanje i renderuje kameru **još nije objavljen** i nije pokrenut u Unrealu. Dok ne bude, Pošalji stavlja datoteke u projekat, a Unrealovi vlastiti USD alati ih mogu otvoriti. Windows je prvi sistem; macOS slijedi.
:::
