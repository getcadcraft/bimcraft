---
title: Ocelové spooly potrubí a listy spoolů
summary: Rozřežte trasu ocelového potrubí na spooly nejdelší délky a na montážních svarech, které umístíte, očíslujte je a stáhněte list spoolu pro každý spool (pohled 3D, délky řezů, tvarovky, svary, kusovník) jako PDF a CSV; vzduchovody dostanou řezný plán rovných kusů.
keywords: spool, spooly, list spoolu, izometrie, výroba, prefabrikace, montážní svar, dílenský svar, tupý svar, délka řezu, řezný plán, kusovník, bom, ocelové potrubí, schedule 40, číslo vedení, řezný plán vzduchovodů, kusy vzduchovodu
from: 539f51de
---

## Co uděláte

Proměňte trasu ocelového potrubí na díly, které dílna svařuje a montér osazuje: spooly nejdelší zvolené délky, rozdělené v místech montážních svarů, které umístíte, a každý se svým listem.

Na spooly se řeže pouze **ocelové potrubí s tupými svary** (velikosti podle ASME B36.10M, kolena s dlouhým poloměrem podle ASME B16.9). Spoje mědi, PVC a PEX nejsou tupé svary, takže jejich trasy nemají spooly.

## Rozřezání trasy na spooly

1. Vyberte trasu ocelového potrubí. V {{ui:Vlastnosti}} zaškrtněte **Rozřezat na spooly**.
2. **Nejdelší spool**: nejvyšší délka osy, kterou může mít jeden spool (zpočátku 6 m, asi 20 ft).
3. **Číslo vedení**: součást čísla každého spoolu. Nově spoolovaná trasa dostane nejbližší volné číslo své soustavy.

Spooly se číslují podél trasy od jejího prvního bodu: `CHW-12-S01`, `CHW-12-S02` … (soustava, číslo vedení, spool). Spool narůstá kus po kusu; kus, který by ho prodloužil příliš, začne další, a rovný úsek delší než spool se přeřízne tam, kde je spool plný.

## Umístění montážních svarů

1. Otevřete {{ui:Sestavení}} a zvolte {{ui:Montážní svar}}.
2. Klikněte na spoolované potrubí, kam má montážní svar patřit. Uvnitř rovného úseku se potrubí tam přeřízne; uvnitř tvarovky nebo armatury se svar přesune k bližšímu spoji.

V {{ui:Vlastnosti}} jsou vypsány montážní svary trasy, u každého s tlačítkem {{ui:Odebrat}}. Každá změna je jeden krok {{ui:Zpět}}.

## Listy spoolů

V {{ui:Vlastnosti}} spoolované trasy:

- {{ui:Listy spoolů (PDF)}}: jedna stránka na spool. Vlevo spool v izometrickém pohledu pod 30°: jeho rovné úseky očíslované, dílenské svary jako tečky, montážní svary označené FW a sever z půdorysu. Vpravo číslo spoolu, velikost, rozpis a délku, pak jeho **délky řezů**, **tvarovky**, **svary** (dílenský tupý svar v každém spoji uvnitř spoolu, montážní svar tam, kde navazuje na další spool) a jeho **kusovník** s hmotností potrubí (hmotnost ASME B36.10M plain-end).
- {{ui:Seznam spoolů (CSV)}}: totéž, blok na každý spool.

:::note
Délky řezů jsou od konce ke konci podle výkresu: žádná kořenová mezera ani přídavek na svar se neodečítá. Kolena jsou s dlouhým poloměrem B16.9; T-kusy, redukce a armatury jsou obecné, dimenzované podle potrubí, ne podle B16.9 nebo výrobce, a list to uvádí. Hmotnosti tvarovek nejsou uvedeny. Pomůcka pro kreslení a koordinaci, dimenzovaná inženýrem.
:::

## V souboru IFC

Každý díl spoolované trasy nese **CadCraft_Spool** s jejím SpoolId, trasou, číslem spoolu v trase a místem, kde podél trasy začíná a končí. Trasa si svá pravidla (nejdelší spool, montážní svary, číslo vedení) uchovává ve své vlastní sadě, takže se spooly po novém otevření souboru obnoví stejně.

## Vzduchovody: řezný plán

Otevřete {{ui:Sestavení}} a klikněte na {{ui:Řezný plán vzduchovodů}}: CSV rovných kusů vzduchovodů podle soustavy, tvaru a velikosti, kde je každý rovný úsek rozřezán na kusy o **délce kusu** na liště {{ui:Potrubí vzduchu}} (zpočátku 1500 mm, asi 5 ft), a zbytek. Pouze délky: bez švů, tloušťek plechu a spojek.
