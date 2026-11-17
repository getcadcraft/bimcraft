---
title: Začněte novou budovu
summary: Vytvořte prázdný model budovy s jejími úrovněmi, nakreslete její stěny, umístěte položky z knihovny a uložte jej jako IFC.
keywords: nový, nová budova, prázdný, bez obsahu, začít od nuly, šablona, úrovně, podlaží, podlahy, vytvořit, model
from: 68786865
---

## Co provedete

Začněte model budovy od nuly, místo abyste jeden otevřeli. BimCraft vytvoří prázdný model IFC s projektem, pozemkem, budovou a jejími úrovněmi. Na podlaží můžete umístit zařízení a nábytek z knihovny a uložit to jako soubor IFC.

:::note
Stěny lze kreslit již teď: viz [Kreslení stěn](topic:draw-walls). Dveře, okna, podlahy a střechy se připravují jako další.
:::

## Postup

1. Klikněte na {{ui:Nová budova}} pod **Otevřít soubor nebo složku**, nebo na úvodní stránce.
2. Napište **Název budovy**.
3. Zvolte, kolik **Úrovní** má (1 až 200).
4. Napište **Výšku úrovně**, od podlahy k podlaze: například `10'-0"`, `10'6"` nebo `3000 mm`. Prosté číslo znamená stopy v USA, jinde milimetry.
5. Každé pole je již vyplněno, takže je můžete nechat, jak jsou. Pod nimi pole říká, s čím začínáte: jednotky, **Typ stěny**, který nástroj Stěna nakreslí jako první (můžete zvolit jiný ze seznamu), a první list.
6. Klikněte na {{ui:Vytvořit}}. Úrovně jsou naskládány od 0, každá o jednu výšku úrovně výš než předchozí, a pojmenovány Úroveň 1, Úroveň 2 a tak dále. Zobrazí se ve stromu modelu a půdorys Úrovně 1 se otevře vedle 3D pohledu se zapnutým {{ui:Kreslení}}.
7. Nakreslete stěny: klikněte na {{ui:Stěna}} a pak na dva body. Viz [Kreslení stěn](topic:draw-walls). Přejmenujte úrovně nebo změňte jejich výšky v panelu **Úrovně**.
8. Umístěte položky: viz [Umístění zařízení a nábytku z knihovny](topic:place-from-library). Lišta umístění vypisuje každou úroveň.
9. Klikněte na {{ui:Uložit jako IFC}}. Soubor je pojmenován podle budovy, například `Smith's house.ifc`.

## Dobré vědět

- Model se ukládá v milimetrech jako IFC4. Ostatní programy BIM ho otevřou.
- Nová budova má jeden list **A-101**, který drží půdorys nejnižší úrovně: A3 v měřítku 1:100, pokud pracujete v metrických jednotkách, jinak Tabloid v měřítku 1/8" = 1'-0". Je prázdný až do první stěny, pak zobrazuje půdorys, jak kreslíte. Otevřete jej pod **Listy** v prohlížeči projektu, kde změníte jeho papír, měřítko nebo razítko, přidáte pohledy nebo jej smažete. Budova začatá ze šablony přinese místo toho listy šablony.
- Chcete-li změnit, s čím každá nová budova začíná (typ stěny pro metrické projekty, úrovně, první list, nástroj aktivní po Vytvořit), viz [Výchozí zásady](topic:default-policies).
- Před první stěnou nic nemusí být nastaveno. Typ stěny, výšky úrovní, jednotky a list lze změnit později.
- **Podlaží** v levém panelu vypisuje jen podlaží, na kterých něco je; strom modelu vypisuje všechna.
- Dokud nic neuložíte, nová budova se počítá jako neuložené změny. BimCraft se zeptá, než otevřete jiný soubor nebo odejdete, a ponechá kopii v tomto prohlížeči, kdyby se karta zavřela.
