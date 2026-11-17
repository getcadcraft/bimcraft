---
title: Mängder till TakeoffCraft
summary: Ett klick skickar modellens mängder till TakeoffCraft — väggar per typ, tak efter lutad area, åsar, valmar och dalar, grunder, dörrar och fönster, skåp, elapparater, golvarea och kapplistan för virke — markerade på en plan av varje nivå, med yrkespaketens kalkylsammansättningar på posterna.
keywords: mängdavtagning, mängder, kalkyl, kalkylering, materialförteckning, stycklista, takeoffcraft, väggarea, takarea, takrutor, grund, betong, kubikmeter, kubikyard, kapplista, virke, yrkespaket, kalkylsammansättning
from: c5a745af
---

## Vad du gör

Gör modellen till en materialförteckning och kalkyl i TakeoffCraft. BimCraft ritar en plan av varje nivå i en standardskala, markerar varje mängd på den och lägger mängdavtagningen inuti PDF:en. TakeoffCraft mäter markeringarna själv, så varje siffra kan kontrolleras på bladet.

## Skicka den

1. Klicka på {{ui:Mängdavtagning}} i modellfältet (bredvid {{ui:Blad}}).
2. TakeoffCraft öppnas i en ny flik med planerna. När den frågar, välj att öppna mängdavtagningen den hittade i PDF:en.
3. Lägg till dina priser i TakeoffCraft:s tabell över mängder. Kalkylsammansättningarna listar redan materialen.

:::note
När TakeoffCraft inte är tillgängligt här laddar knappen i stället ner PDF:en. Öppna den i TakeoffCraft senare: den hittar mängdavtagningen inuti.
:::

## Vad som mäts

- **Väggar** per typ och höjd: deras mittlinjer som sträckor, med väggens höjd på posten, så att TakeoffCraft ger längden och väggarean. Varje sträcka bär väggens dörrar och fönster, så TakeoffCraft drar av dem från väggarean en gång, efter samma regel som BimCraft:s förteckningar. De två stämmer överens om brutto, avdrag och netto. En väggtyps uppgifter för mängdavtagning (enhet, bruk, pris; se [Vägg-kalkylsammansättningar](topic:wall-assemblies)) följer med som en prissatt rad på den typens post. Vid en mätmetod som inte är standard (se [Välj en mätmetod](topic:plan-schedules-and-pdf#choose-a-measurement-method)) bär mängdavtagningen metoden, varje sträcka bär det som knutpunkterna tar av dess väggyta, och TakeoffCraft mäter med samma metod och anger namnet. En typ vars enhet har en längd och en höjd lämnar över två komponenter med mängder: enheterna att beställa och bruksvolymen. De prissätts när typens pris är per enhet, per 1000 enheter eller per m³ bruk. Ett antal som hamnar exakt på ett heltal kan bli en enhet högre i TakeoffCraft, eftersom överlämningen avrundar positionerna på bladet.
- **Tak**: varje takplan som en area med dess lutning (TakeoffCraft ger den lutande arean), åsar, valmar och dalar (valmar och dalar längs deras lutning), takfötter och gavelkanter.
- **Grunder**: fundament och sockelmurar som sträckor kring deras mitt, plattor som areor med deras tjocklek, så att betongen kommer ut som volym.
- **Dörrar och fönster** räknade per typ, med fönsterkarmar.
- **Underskåp** efter längden på deras frontar.
- **Elapparater** räknade per sort.
- **Golvarea** för varje nivå, från dess rum.
- **Kapplistan för virke** från stommen, räknad på ett eget blad (en punkt per stycke).

Där ett yrkespaket har en motsvarande kalkylsammansättning (ytter- och innerväggar, bjälklag, fundament, sockelmurar, takbeläggning, ås- och valmkapp, dalar, takfötter, innerdörrar, fönsterkarmar, underskåp, uttag, strömbrytare, belysning, kopplingsdosor och elcentralen) kommer posten med sina material och formler. Paketen levereras utan priser och har ännu inte granskats av en kalkylator.

:::tip
Planerna görs av modellen varje gång du klickar, så efter en ändring klickar du bara på {{ui:Mängdavtagning}} igen.
:::
