---
title: Umístění pohledu a otevření jeho výkresu
summary: Umístěte značku pohledu na půdorys, nasměrujte ji tak, jak má pohled vypadat, pak najděte jeho výkres ve správci pohledů, upravte ho a vložte na list. Postupy pro layouty s pásem karet a pro klasický layout.
keywords: pohled, značka pohledu, označení pohledu, umístit pohled, nový pohled, vytvořit pohled, vnější pohled, boční pohled, pohled zepředu, pohled z bodu, kde je můj pohled, otevřít pohled, pohled na listu, otočit pohled, přejmenovat pohled, severní pohled, dlaždicově uspořádat pohledy, rozdělit pohled, půdorys a 3D vedle sebe
from: a7cfd2b9
---

## Co uděláte

Vytvoříte vlastní pohled: výkres budovy viděné z bodu, který zvolíte, s výhledem tím směrem, jaký zvolíte. Stačí dvě kliknutí na půdorys. Výkres se pak zobrazí mezi ostatními pohledy budovy.

:::note
Čtyři strany už existují. Každá budova má pohledy Sever, Východ, Jih a Západ v {{ui:Project browser}} pod {{ui:Elevations}} bez jakéhokoli umisťování. Vlastní pohled umístěte, když chcete pohled odjinud: kolmo na šikmé křídlo, ze dvora nebo na jednu stěnu uvnitř místnosti.
:::

## Kde je nástroj

- Layouty s pásem karet: {{ui:View}} › **Vytvořit** › {{ui:Elevation}}.
- Klasický layout: zapněte {{ui:Draw}}, pak {{ui:Build}} › {{ui:Elevation}}.
- Libovolný styl nabídek: příkaz se jmenuje {{ui:Elevation}}; paleta příkazů ho najde a příkazový řádek přijímá ELEVATION.

## Postup

1. Zvolte {{ui:Elevation}}. Pohled se umístí na půdorys, takže pokud jste byli v 3D pohledu, BimCraft zobrazí půdorys podlaží, na kterém jste byli. Kurzor říká **Klikněte, kde pohled stojí**.
2. Klikněte, odkud se pohled bere. U vnějšího pohledu klikněte mimo budovu, kousek od stěny, kterou chcete vidět.
3. Kurzor nyní říká **Klikněte na směr pohledu**. Pohybujte kurzorem směrem k budově: šipka ukazuje směr a krátká čára přes první kliknutí je hrana, ze které se pohled dívá. Klikněte.
4. Na půdorysu se objeví kruh s číslem a ukazatelem. To je značka pohledu. První je 1, další 2.
5. Stiskněte Esc pro dokončení, nebo pokračujte a umístěte další.

Umístění značky je jeden krok: {{key:Mod+Z}} ji vrátí zpět.

## Otevření výkresu

Půdorys zůstane před vámi i po druhém kliknutí. Výkres je v {{ui:Project browser}}:

1. Otevřete {{ui:Elevations}}. Váš pohled je uveden za čtyřmi stranami jako **Elevation 1**.
2. Klikněte na tlačítko tužky {{ui:Edit in this view}} na jeho řádku, abyste výkres viděli a mohli v něm pracovat: přesouvat stěny, dveře, okna a podlaží, přidávat poznámky a kóty. Viz [Úprava v pohledech a řezech](topic:edit-in-elevations).
3. Klikněte na samotný řádek a otevřete sadu výkresů, nebo přidejte pohled na vlastní list. Viz [Pohledy a listy](topic:views-and-sheets).

V klasickém layoutu je správce pohledů v levém panelu, když je zapnuto {{ui:Draw}}. V layoutech s pásem karet je to karta {{ui:Project Browser}} v části Vlastnosti.

## Co pohled ukazuje

- Vše před značkou, až po budovu. Nic za ní.
- Podlaží s jejich názvy a výškami.
- Pokud značka stojí uvnitř budovy, je v tom místě přeříznuto vše, v čem stojí, jako to dělá řez. Pro čistý vnější pohled stůjte venku.

## Změna

Vyberte značku na půdorysu (klikněte na její kruh pomocí {{ui:Select}}). Vlastnosti obsahují:

- {{ui:Label}}: její číslo nebo vlastní název, až 8 znaků.
- {{ui:Flip the view}}: dívat se opačným směrem ze stejného místa.
- {{ui:Look as far as}}: jak daleko před značkou pohled sahá. 0 zobrazí vše.

Stisknutím Delete odstraníte značku i její výkres. Zpět je obnoví.

:::tip
Chcete-li během práce vidět současně půdorys a 3D pohled, použijte {{ui:View}} › **Okna** › {{ui:Tile Views}} v layoutech s pásem karet, nebo {{ui:Split}} v klasickém layoutu. Kliknutí na kartu pohledu se vrátí k jednomu pohledu.
:::

## Omezení

- Značku zatím nelze na půdorysu přetáhnout ani otočit. Smažte ji a umístěte znovu, nebo použijte {{ui:Flip the view}}.
- V seznamu pohledů, které můžete přidat na list, je vlastní pohled uveden spolu s řezy.
- Značky dveří a oken se kreslí na čtyřech bočních pohledech, ne na pohledu, který jste umístili.

## V IFC

Značka se v souboru uloží jako IfcAnnotation s názvem "Elevation 1" a typem objektu "Elevation marker", v podlaží, na kterém byla umístěna. Jiný program ji zobrazí jako anotaci; samotný výkres vytváří BimCraft pokaždé znovu z modelu.
