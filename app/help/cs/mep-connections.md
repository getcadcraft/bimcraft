---
title: Připojení potrubí a vzduchovodů k zařízení
summary: Začněte nebo ukončete potrubí či vzduchovod na přípojce, aby převzalo velikost a systém přípojky a zůstalo k ní pevně připojeno, a pak zkontrolujte připojení: otevřené přípojky, nesoulad velikostí a systémů, trasy bez zdroje.
keywords: mep, připojit, připojení, spojení, přípojka, přípojky, otevřená přípojka, nesoulad velikosti, nesoulad systému, zdroj, kontrola připojení, pevné, sledovat, přesun zařízení, ifcrelconnectsports, koordinace
from: 29144fb0
---

## Co provedete

Spojte trasy se zařízením tak, aby model tvořil jeden propojený systém: výstup čerpadla s potrubím, které z něj vede, a hrdlo difuzoru s odbočkou vzduchovodu. Pak nechte BimCraft vypsat, co není propojeno.

## Kreslení z přípojky

1. Zvolte {{ui:Potrubí}} nebo {{ui:Potrubí vzduchu}}.
2. Přesuňte ukazatel na přípojku zařízení (malé kroužky; otevřená přípojka je nakreslena barvou varování). Ukazatel se k ní přichytí a ukáže **na přípojce**.
3. Klikněte: trasa začne ve výšce přípojky a **převezme její velikost a systém** (potrubí také obvyklý materiál systému). Stavový řádek uvádí, co převzala.
4. Kreslete dál jako obvykle. Ukončení trasy na jiné přípojce připojí pevně i tento konec.

Konec trasy na přípojce je k ní **pevně připojen**: přesunete-li nebo otočíte zařízení (ve Vlastnostech), konec trasy se pohne s ním; upravíte-li trasu, konec zůstane na přípojce. Ostatní rohy trasy zůstávají na místě, takže po velkém přesunu se první úsek může od přípojky odchýlit pod úhlem: přesuňte i další roh.

## Kontrola připojení

Otevřete {{ui:Sestavení}} a klikněte na {{ui:Zkontrolovat připojení}}. Seznam pod lištou ukazuje:

| Řádek | Co to znamená |
|---|---|
| Přípojka není připojena | Zařízení má připojení, ke kterému nic není nakresleno |
| Na konci nic | Trasa končí ve vzduchu |
| Spojené přípojky různých velikostí | Trasa jedné velikosti se setká s přípojkou nebo trasou jiné velikosti bez redukce (jmenovitá velikost potrubí, tvar a strany vzduchovodu) |
| Spojené přípojky různých systémů | Například vratný vzduchovod na přívodním difuzoru |
| Potrubí připojené ke vzduchovodu | Dva různé druhy připojení se setkají |
| Žádné zařízení v její síti ji nezásobuje | Nic, k čemu je trasa připojena, ať je to jakkoli daleko, nemá výstup. Odpady, dešťová a odvětrání se tu neptají: jejich voda přichází z armatur |
| Připojeno k přípojce zařízení, které už není v modelu | Zařízení bylo smazáno; nakreslete konec znovu nebo smažte trasu |

Chyby jsou nahoře. Kliknutím na řádek vyberete, co pojmenovává. {{ui:Zavřít}} seznam skryje. Kontrola čte model tak, jak je nakreslen: ověřuje připojení a velikosti, nikdy průtoky, tlaky ani vyvážení.
