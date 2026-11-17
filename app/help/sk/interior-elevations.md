---
title: Vnútorné pohľady
summary: Vytvorte jeden list, ktorý zobrazuje štyri steny miestnosti zvnútra, s kótami a značkami, a uložte ho ako PDF.
keywords: vnútorný pohľad, miestnosť, stena, skrinka, kuchyňa, pohľad, list, PDF, kóta, značka, priestor, A-501
from: 1e3a70a8
---

## Čo urobíte

Vyberte miestnosť a získajte jeden list, ktorý zobrazuje jej štyri steny tak, ako by ste ich videli, keď stojíte vnútri. Je určený pre kuchyne, kúpeľne a každú miestnosť, kde potrebujete vidieť skrinky, dvere a okná na každej stene.

## Vytvorenie listu

1. Vyberte miestnosť. V pôdoryse so zapnutým {{ui:Kresliť}} kliknite vnútri miestnosti. V 3D pohľade alebo v strome modelu vyberte priestor (IfcSpace).
2. V **Vlastnostiach** kliknite na {{ui:Vnútorné pohľady…}}.
3. Otvorí sa dialógové okno s listom.
4. Kliknite na {{ui:Stiahnuť PDF}}, čím ho uložíte. Súbor sa volá "<file> — Vnútorné pohľady — <room>.pdf" a je to vektorové PDF.
5. Keď skončíte, kliknite na {{ui:Zavrieť}}.

## Čo list zobrazuje

List má štyri pohľady, dva na dva, v jednej mierke: najväčšia štandardná mierka, ktorá sa na list zmestí. Sú to **Severná stena**, **Východná stena**, **Južná stena** a **Západná stena**. Popisové pole nesie číslo listu A-501, názov "Vnútorné pohľady — " s číslom a názvom miestnosti, projekt a dátum.

Každý pohľad je rez v strede miestnosti, ktorý sa pozerá na stenu na tej strane. Bočné steny a všetko, čo je v nich vyrezané, napríklad okno, sa zobrazujú ako sivá plocha rezu (poché) okolo pohľadu. Pohľad končí tesne za lícom steny, takže nič za stenou sa nezobrazí.

Každý pohľad obsahuje:

- šírku miestnosti pod ním, od vnútornej plochy k vnútornej ploche;
- výšku miestnosti vedľa neho, od podlahy po úroveň nad ňou;
- štvorcovú značku na každých dverách a šesťuholníkovú značku na každom okne v tej stene, s ich označením (D1, W1 a podobne);
- kruhovú značku s číslom položky na každej položke knižnice umiestnenej pred touto stenou: skrinky, zariadenia a vybavenie.

:::note
Pohľady sa vytvárajú z modelu zakaždým, keď otvoríte dialógové okno, takže vždy zodpovedajú modelu. Presuňte skrinku a potom dialógové okno znova otvorte.
:::

## Na vlastných listoch

Každá stena každej miestnosti je tiež pohľad, ktorý môžete umiestniť na vlastný list: v prehliadači projektu kliknite na {{ui:Nový list}}, potom pod **Vnútorné pohľady** pridajte "101 Kuchyňa — Severná stena" a ďalšie. Má rovnaké kóty a značky.

## Ešte nie je hotové

Vnútorné pohľady v generovanej sade výkresov (prichádzajú z **Vlastností** miestnosti alebo z vašich vlastných listov), miestnosti, ktoré nie sú väčšinou obdĺžnikové (pohľad vyzerá štvorcovo na každej strane škatule miestnosti), kreslenie, poznámky alebo vaše vlastné kóty na nich a voľba, ktoré steny sa zobrazia. Pozri [Čo ešte nie je hotové](topic:not-built-yet).
