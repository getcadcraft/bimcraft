---
title: Propojení dalších modelů pro koordinaci
summary: Zobrazte jiný model IFC vedle svého odkazem (nikdy se nesloučí), umístěte ho podle sdílených souřadnic, souřadnic mapy nebo dvou bodů, přichyťte se k němu při kreslení a znovu ho načtěte, když se změní jeho soubor.
keywords: propojení, propojený model, odkaz, xref, koordinace, federace, konstrukce, MEP, konzultant, sdílené souřadnice, zaměření, souřadnice mapy, znovu načíst, uvolnit, odkaz na dokument, IfcDocumentReference
from: 3e0f1eab
---

## Co uděláte

Kreslete proti modelu konzultanta (konstrukce, technika budovy, stávající budova), aniž byste cokoli kopírovali do svého souboru.

Propojený model se zobrazuje v 3D pohledu a řeže se ve vašich půdorysech, ale nikdy se nemění a nikdy se neukládá do vašeho modelu. Váš model si uchovává jen odkaz: název souboru a místo, kam patří.

## Propojení modelu

1. V levém panelu, v sekci {{ui:Propojené modely}}, klikněte na {{ui:Propojit model…}} a vyberte soubor IFC. Zobrazí se ihned a jeho řádek říká **Zobrazeno**.
2. Vyberte, kam patří, v {{ui:Umístění}}:
   - **Sdílené souřadnice** (výchozí): jeho souřadnice jsou vaše, jako kdyby oba modely byly vytyčeny ze stejného počátku.
   - **Souřadnice mapy**: souřadnice mapy obou souborů je seřadí (obě musí mít převod na mapu; BimCraft to oznámí, pokud ho některý nemá).
   - **Podle dvou bodů…**: klikněte na bod v propojeném modelu a pak na místo ve vašem; poté na druhou dvojici. Odkaz se posune a otočí (kolem svislé osy), aby seděl.
3. Každá změna odkazu a umístění je jeden krok: {{key:Mod+Z}} ji vrátí zpět.

## Práce s ním

- Půdorysy zobrazují propojený model řezaný ve výšce řezu podlaží jako tenké čáry. Nástroj {{ui:Stěna}} a ostatní kreslicí nástroje se přichytávají k jeho rohům a hranám.
- Vyberte jeho prvky v 3D pohledu a přečtěte si jejich vlastnosti. Propojený model není ten, který upravujete, takže jeho přepínač v {{ui:Modely}} je vypnutý.
- **Soubor se změnil?** Pokud prohlížeč umí soubor sledovat (soubor otevřený přes výběr souborů prohlížeče, nebo ve Studiu), BimCraft odkaz sám znovu načte několik sekund poté, co je soubor znovu uložen, a oznámí to. Jinak klikněte na {{ui:Znovu načíst}}.
- {{ui:Uvolnit}} ho skryje a uvolní paměť; odkaz zůstane ve vašem modelu. {{ui:Načíst…}} ho znovu zobrazí (vyberete soubor, protože prohlížeč nemůže otevřít soubor jen podle jeho názvu).
- Tlačítko × odebere odkaz z vašeho modelu.

## Co byste měli vidět

- Ve vašem souboru IFC: IfcDocumentReference pro každý odkaz (název souboru), svázaný s projektem, a místo, kam patří, v sadě vlastností projektu CadCraft_Links. Když svůj model znovu otevřete, jeho odkazy jsou uvedeny jako **Nenačteno**, dokud je nenačtete.

:::note
Kontroly kolizí, Porovnání a Hledání mohou použít načtený odkaz stejně jako jakýkoli jiný otevřený model: viz [Několik modelů IFC najednou](topic:several-models).
:::
