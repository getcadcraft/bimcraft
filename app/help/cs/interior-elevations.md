---
title: Vnitřní pohledy
summary: Vytvořte jeden list, který ukazuje čtyři stěny místnosti zevnitř, s kótami a štítky, a uložte jej jako PDF.
keywords: vnitřní pohled, místnost, stěna, skříňka, kuchyně, pohled, list, PDF, kóta, štítek, prostor, A-501
from: 1e3a70a8
---

## Co budete dělat

Vyberte místnost a získáte jeden list, který zobrazuje její čtyři stěny tak, jak byste je viděli, kdybyste stáli uvnitř. Je určen pro kuchyně, koupelny a každou místnost, kde potřebujete vidět skříňky, dveře a okna na každé stěně.

## Vytvoření listu

1. Vyberte místnost. V půdorysu, když je {{ui:Draw}} zapnuto, klikněte dovnitř místnosti. Ve 3D pohledu nebo ve stromu modelu vyberte prostor (IfcSpace).
2. V **Vlastnostech** klikněte na {{ui:Interior elevations…}}.
3. Dialog se otevře s listem.
4. Klikněte na {{ui:Download PDF}}, čímž jej uložíte. Soubor se jmenuje „<file> — Interior elevations — <room>.pdf“ a je to vektorové PDF.
5. Až skončíte, klikněte na {{ui:Close}}.

## Co list zobrazuje

List má čtyři pohledy, po dvou ve dvou řadách, všechny v jednom měřítku: největším standardním měřítku, které se vejde. Jsou to **Severní stěna**, **Východní stěna**, **Jižní stěna** a **Západní stěna**. Razítko nese číslo listu A-501, název „Vnitřní pohledy — “ s číslem a názvem místnosti, projekt a datum.

Každý pohled je veden přes střed místnosti a dívá se na stěnu na dané straně. Boční stěny a vše, co je v nich vyříznuto, například okno, se zobrazí kolem pohledu jako šedá plocha řezu. Pohled končí těsně za lícem stěny, takže nic za stěnou nebude vidět.

Každý pohled obsahuje:

- šířku místnosti pod ním, od vnitřní strany k vnitřní straně;
- výšku místnosti vedle něj, od podlahy po úroveň nad ní;
- čtvercový štítek na každých dveřích a šestiúhelníkový štítek na každém okně v dané stěně, s jejich označením (D1, W1 a tak dále);
- kruhový štítek s číslem položky u každé položky knihovny umístěné před touto stěnou: skříněk, armatur a zařízení.

:::note
Pohledy se vytvářejí z modelu pokaždé, když dialog otevřete, takže se vždy shodují s modelem. Přesuňte skříňku a pak dialog znovu otevřete.
:::

## Na vlastních listech

Každá stěna každé místnosti je také pohled, který můžete umístit na list, který vytvoříte. V prohlížeči projektu klikněte na {{ui:New sheet}} a pak pod **Vnitřní pohledy** přidejte „101 Kuchyně — Severní stěna“ a další. Má stejné kóty a štítky.

## Co ještě není hotovo

Vnitřní pohledy ve vygenerované sadě výkresů (berou se z **Vlastností** místnosti nebo z vašich vlastních listů), místnosti, které nejsou převážně obdélníkové (pohled na každé straně vypadá jako čtverec podle obalového kvádru místnosti), kreslení, poznámky nebo vlastní kóty na těchto pohledech a volba, které stěny se zobrazí. Viz [Co ještě není hotovo](topic:not-built-yet).
