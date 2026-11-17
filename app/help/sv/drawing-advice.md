---
title: Ritningsråd: ovanliga storlekar ritas, med en varning
summary: BimCraft gör det du begär. En storlek utanför det vanliga blir en varning i Problem; den stoppar aldrig ritning eller sparande.
keywords: råd, varning, problem, nekad, ritar inte, för liten, för smal, minimum, gräns, trappbredd, sättsteg, steg, pelare, ramp, dörrstorlek, rutnätslinje, nivåhöjd, takkupa, spiraltrappa, plattlutning, kort vägg, inga spärrar
from: 20090130
---

## Vad du ska göra

Rita en storlek som inte är den vanliga och se var BimCraft informerar dig om det.

## Steg

1. Rita eller ändra elementet som du vill ha det: till exempel en trappa som är 400 mm bred.
2. BimCraft gör det som du bad om.
3. Öppna {{ui:Problem}} i den översta raden. Under **Ritningsråd** finns en varning som anger elementet, storleken du angav och det vanliga intervallet.
4. Klicka på varningen för att markera elementet. Ändra storleken om det var ett misstag, eller låt den vara: en varning kan godtas, med eller utan skäl.

## Vad är råd

Dessa nekades förr. De görs nu, var och en med en varning:

- **Trappor**: smalare än 500 mm eller bredare än 5 m; sättsteg utanför 100 till 300 mm; steg utanför 150 till 600 mm.
- **Spiraltrappor**: en stolpe utanför 40 till 400 mm; steg under 100 mm djupa längs gånglinjen.
- **Pelare**: under 50 mm i tvärsnitt eller under 300 mm höga.
- **Ramper**: under 300 mm breda.
- **Dörrar och fönster**: under 100 mm breda eller höga.
- **Rutnätslinjer**: under 100 mm långa.
- **Väggar**: en vägg som blir under 50 mm lång, till exempel genom en trimning.
- **Nivåer**: under 1 m eller över 100 m höga (nytt hus, delade nivåer, en nivås höjd).
- **Takkupor**: utanför 600 mm till 12 m breda, en framvägg utanför 300 mm till 4 m, ett överhäng över 1 m, väggar utanför 50 till 400 mm.
- **Byggplattor**: sidolutningar utanför 1:1 till 10:1.

## Vad som fortfarande nekas

Endast det som inte kan byggas eller hittas, var och en med ett meddelande som säger varför:

- En storlek under 10 mm (en vägg under 1 mm): det finns inget att bygga.
- En takkupa som inte är bredare än två gånger dess väggtjocklek: dess två sidoväggar skulle mötas.
- En byggplatta med sidolutningar brantare än 0.1:1 (det är en stödmur) eller flackare än 100:1 (planeringen skulle fortsätta i all oändlighet).
- Något som inte ryms där du placerade det, en kontur som korsar sig själv, eller ett element som inte längre finns i modellen.

## Bra att veta

- Rådet beräknas utifrån modellen, så det finns kvar när du öppnar filen senare, och det försvinner när storleken rättas till.
- Modellkontroller, regelpaket och IDS-kontroller listar också bara det de hittar. Inget i {{ui:Problem}} stoppar dig från att rita eller spara.
- De vanliga intervallen är allmän praxis, inte en byggnorm. För en norm, lägg till tillägget Byggregler och välj din plats.

## Nästa

- [Kontrollera en modell för vanliga problem](topic:model-checks)
- [Trappor och räcken](topic:stairs-and-railings)
