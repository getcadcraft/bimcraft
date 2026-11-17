---
title: Slanje scene alatu za igre
summary: Studio može da upiše scenu u projekat Unreal Engine i da je održava usklađenom pri svakom slanju; tvoje sopstvene izmene su u sloju koji CadCraft nikad ne piše. Dodatak koji je otvara još nije objavljen.
keywords: unreal, unreal engine, alat za igre, veza, slanje, usd stage, projekat, uživo, cine kamera, movie render queue
from: 154d55ef
---

U CadCraft Studiu lista motora može da sadrži **vezu** ka projektu Unreal Engine. Samo u jednom smeru: od CadCraft-a ka Unrealu.

## Pošalji scenu

1. Izaberi stavku Unreal na listi motora. Prvi put, Studio te pita da izabereš fasciklu tvog projekta (onu sa `.uproject` datotekom); on je pamti.
2. Klikni {{ui:Send}}. Studio piše `CadCraft/<naziv datoteke>/` unutar projekta: scenu kao USD datoteku, datoteku podešavanja, profile svetla i dve male datoteke sloja.
3. Promeni model, sačuvaj i pošalji ponovo. Zamenjuju se samo scena i datoteka podešavanja.

## Tvoje izmene su sigurne

Scena koju Unreal otvara je mali korenski sloj napravljen jednom, sa dva sloja ispod njega: **tvoj** na vrhu (`<naziv>.user.usda`, prazan na početku, CadCraft ga nikad ne prepisuje) i CadCraftova scena ispod. Izmene koje sačuvaš u svom sloju ostaju kad se scena ponovo pošalje. Svetla i drugi akteri koje postaviš u Unreal nivo su van scene i takođe se ne diraju.

## Bez Studija

U pregledaču, ili na računaru gde Studio ne nalazi Unreal, izaberi **Fascikla Unreal projekta (.zip)** na listi motora i klikni {{ui:Render}}. Čuva istu fasciklu kao zip: raspakuj je u fasciklu `CadCraft` tvog projekta. Prvi put ostavi **Uključi datoteke scene** uključeno; za kasnija čuvanja isključi ga, tako da zip sadrži samo scenu i datoteku podešavanja, a tvoj sloj se nikad ne menja.

:::note
Unreal dodatak koji otvara scenu, primenjuje sunce, svetiljke, kamere i izloženost, prati svako slanje i renderuje kameru **još nije objavljen** i nije pokrenut u Unrealu. Dok ne bude, Pošalji stavlja datoteke u projekat, a Unrealovi sopstveni USD alati mogu da ih otvore. Prvi sistem je Windows; macOS sledi.
:::
