---
title: Stěny z obkresleného výkresu
summary: Převeďte půdorys DWG nebo DXF na stěny, dveře a okna v podlaží a ponechte výkres pod půdorysem jako referenci.
keywords: dwg, dxf, obkreslení, obkreslený, import půdorysu, převod, cad na bim, 2d na 3d, stěny z čar, vrstvy, bloky, dveře z bloků, podklad, referenční výkres, pozadí, xref, kreslicí aplikace
from: 3bf213f1
---

## Co uděláte

Použijte půdorys, který jste (nebo někdo jiný) nakreslili v kreslicí aplikaci, jako začátek modelu: jeho čáry stěn se stanou stěnami a jeho bloky dveří a oken se stanou dveřmi a okny.

## Postup

1. Zapněte {{ui:Kreslení}} a zvolte podlaží, které výkres ukazuje, v seznamu podlaží půdorysu.
2. Zvolte {{ui:Sestavení}} › {{ui:Z výkresu…}}, pak {{ui:Vyberte výkres…}} a vyberte DWG nebo DXF.
3. V dialogu:
   - **Jednotky výkresu** se berou z výkresu; zvolte jiné, pokud jsou špatně. Půdorys nakreslený ve stopách, načtený jako palce, je dvanáctkrát menší.
   - **Vrstvy se stěnami**: zaškrtněte vrstvy, na kterých jsou čáry stěn. Vrstvy, jejichž názvy obsahují „wall“ (stěna), jsou zaškrtnuty za vás.
   - **Čáry jsou**: **oba líce každé stěny** (obvyklý způsob, jakým se půdorysy kreslí: každá dvojice rovnoběžných čar do 600 mm od sebe se stane jednou stěnou stejně tlustou jako mezera), **osy stěn**, nebo **jeden líc** se stěnou vlevo nebo vpravo od něj. U os nebo jednoho líce nastaví tloušťku typ stěny.
   - **Typ stěny** a **Výška stěny**, jako u nástroje {{ui:Stěna}}.
   - **Bloky**: pro každý blok, který je dveřmi nebo oknem, vyberte typ dveří nebo okna, nebo jej vynechte. Bloky, jejichž názvy obsahují „door“ (dveře) nebo „window“ (okno), se vyberou za vás. Každý se vloží do stěny, na které sedí, tak široký, jak je blok podél stěny. Dveře se otevírají na stranu, kam je nakreslen jejich otvírací oblouk.
   - **Kam to patří**: podle vlastních souřadnic výkresu, nebo s levým dolním rohem v počátku půdorysu.
   - **Ponechat výkres pod půdorysem tohoto podlaží**: nechte zaškrtnuté, chcete-li vidět výkres jako tenké čáry pod tím, co vytvoříte.
4. Řádek pod volbami říká, kolik stěn, dveří a oken se vytvoří. Klikněte na {{ui:Vytvořit je}}.

## Co uvidíte

- Stěny, dveře a okna v podlaží, spojené tam, kde se stýkají, s místnostmi, které uzavírají. Vše je jeden krok, takže {{key:Mod+Z}} to vrátí zpět.
- Výkres jako tenké čáry pod půdorysem. {{ui:Sestavení}} › {{ui:Z výkresu…}} vypíše výkresy uložené v podlaží, každý s {{ui:Odebrat}}; odebrání jednoho nechá stěny být.
- V souboru IFC je ponechaný výkres anotací podlaží (jeho čáry), takže jej ukážou i ostatní BIM programy.

:::note
Funguje i PDF nebo sken: viz [Stěny z sady výkresů](topic:walls-from-plans). Oblouky se vynechávají (BimCraft kreslí rovné stěny), stejně jako čáry uvnitř bloků. Čáry bez protějšku v režimu „oba líce“ se v dialogu počítají a vynechávají: nakreslete tyto stěny nástrojem {{ui:Stěna}}, nebo je upravte pomocí {{ui:Upravit}} › {{ui:Oříznout / prodloužit}} (viz [Oříznutí, prodloužení a spojení stěn](topic:trim-extend-walls)).
:::

:::tip
Obkreslili jste sken v kreslicí aplikaci? Otevřete zde i sken a zkontrolujte stěny podle něj: viz [Model ze skenu](topic:model-from-a-scan).
:::
