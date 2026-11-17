---
title: Ångra över appar i CadCraft Studio
summary: I Studio meddelar BimCraft Studio varje färdigt steg, så att Studio kan ångra ditt senaste steg i det fönster du arbetade i senast.
keywords: ångra, studio, över appar, projektångring, historik, journal, fönster
from: c66dd0c1
---

## Vad det gör

I CadCraft Studio meddelar varje appfönster Studio när ett steg är färdigt (en vägg ritad, en uppsättning väggar godkänd från en skanning). Studio håller stegen i den ordning du arbetade och kan be fönstret som gjorde det senaste steget att ångra det, med fönstrets egen ångra-funktion. Ctrl+Z i BimCraft förblir BimCraft:s egen och meddelas även till Studio.

## Att känna till

- Studio ber bara ett fönster att ångra när dess ångringslista är exakt som steget lämnade den. Efter Spara (som startar en ny ändringslista) eller efter att du byter den modell du redigerar svarar BimCraft att listan har flyttats, och Studio hoppar över det fönstret. Inget tvingas.
- Att ångra effekterna av en app i en annan app är inte byggt.
- Utanför Studio ändras ingenting.
- Menyposten i Studio som begär ångringen följer med en Studio-version; tills dess rapporteras stegen, men ingen menypost använder dem.

## Nästa

- [Arbeta live med andra](topic:work-live)
