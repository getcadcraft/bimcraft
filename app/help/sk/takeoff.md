---
title: Množstvá do TakeoffCraft
summary: Jedným kliknutím pošlite množstvá modelu do TakeoffCraft — steny podľa typu, strechy podľa šikmej plochy, hrebene, nárožia a údolia, základy, dvere a okná, skrinky, elektrické zariadenia, plocha podlaží a rezný zoznam dreva — vyznačené na pôdoryse každej úrovne, so zostavami balíkov profesií na položkách.
keywords: výkaz výmer, výkaz množstiev, odhad, odhadovanie, zoznam materiálov, kusovník, takeoffcraft, množstvá, plocha stien, plocha strechy, štvorce, základová pätka, betón, kubické yardy, rezný zoznam, rezivo, balík profesie, zostava
from: c5a745af
---

## Čo urobíte

Premeňte model na zoznam materiálov a rozpočet v TakeoffCraft. BimCraft nakreslí pôdorys každej úrovne v štandardnej mierke, vyznačí na ňom každé množstvo a výkaz výmer vloží do PDF. TakeoffCraft samotné značky premeria, takže každé číslo možno skontrolovať na liste.

## Odoslanie

1. Kliknite na {{ui:Výkaz výmer}} na paneli modelu (vedľa {{ui:Listy}}).
2. TakeoffCraft sa otvorí v novej karte s pôdorysmi. Keď sa opýta, zvoľte otvorenie výkazu výmer, ktorý našiel v PDF.
3. Doplňte svoje ceny do tabuľky množstiev v TakeoffCraft; zostavy už uvádzajú materiály.

:::note
Ak TakeoffCraft tu nie je k dispozícii, tlačidlo namiesto toho stiahne PDF. Otvorte ho neskôr v TakeoffCraft: nájde výkaz výmer v ňom.
:::

## Čo sa meria

- **Steny** podľa typu a výšky: ich stredové osi ako úseky, s výškou steny na položke, takže TakeoffCraft vypočíta dĺžku a plochu steny. Každý úsek nesie dvere a okná steny, takže ich TakeoffCraft odpočíta z plochy steny raz, podľa rovnakého pravidla ako tabuľky BimCraft: obe sa zhodujú v hrubej ploche, odpočtoch a čistej ploche. Údaje o výkaze pre typ steny (jednotka, malta, sadzba; pozri [Zostavy stien](topic:wall-assemblies)) prichádzajú ako jeden ocenený riadok na položke tohto typu. Pri inej metóde merania než predvolenej (pozri [Výber metódy merania](topic:plan-schedules-and-pdf#choose-a-measurement-method)) výkaz nesie metódu, každý úsek nesie to, čo spoje odčítajú z jeho plochy steny, a TakeoffCraft meria rovnakou metódou a pomenuje ju. Typ, ktorého jednotka má dĺžku aj výšku, odovzdá dva komponenty s množstvami: jednotky na objednanie a objem malty, ocenené, keď je sadzba za jednotku, za 1000 jednotiek alebo za m³ malty. Počet, ktorý vyjde presne na celé číslo, môže byť v TakeoffCraft o jednu jednotku vyšší, pretože odovzdanie zaokrúhľuje polohy na liste.
- **Strechy**: každá rovina strechy ako plocha so svojím sklonom (TakeoffCraft vypočíta šikmú plochu), hrebene, nárožia a údolia (nárožia a údolia pozdĺž ich sklonu), okapy a štíty.
- **Základy**: základové pätky a steny na základoch ako úseky okolo ich stredov, dosky ako plochy s hrúbkou, takže betón vychádza podľa objemu.
- **Dvere a okná** počítané podľa typu, s obkladom okien.
- **Spodné skrinky** podľa dĺžky ich čiel.
- **Elektrické zariadenia** počítané podľa druhu.
- **Plocha podlažia** každej úrovne z jej miestností.
- **Rezný zoznam dreva** z konštrukcie, počítaný na vlastnom liste (jedna bodka na kus).

Ak balík profesie má zodpovedajúcu zostavu — vonkajšie a vnútorné steny, dosky, základové pätky, steny na základoch, šindle, hrebeňová a nárožná lišta, údolia, okapy, vnútorné dvere, obklad okien, spodné skrinky, zásuvky, vypínače, svetlá, rozvodné krabice a rozvádzač — položka prichádza so svojimi materiálmi a vzorcami. Balíky prichádzajú bez cien a zatiaľ ich nepreskúmal odhadca.

:::tip
Pôdorysy sa vytvárajú z modelu zakaždým, keď kliknete, takže po zmene len znova kliknite na {{ui:Výkaz výmer}}.
:::
