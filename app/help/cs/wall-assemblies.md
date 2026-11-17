---
title: Skladby stěn a referenční kóty
summary: Vytvořte si vlastní typy stěn vrstvu po vrstvě s jasně určeným jádrem, veďte knihovnu materiálů projektu a kótujte k lícům a osám, které zůstanou připojené, když se stěna změní.
keywords: lod, úroveň rozpracování, lod 200, lod 300, obecné, skladba stěny, typ stěny, vrstvy, jádro, líc jádra, osa jádra, dutina, vzduchová mezera, membrána, difuzní fólie, knihovna materiálů, materiály, tloušťka, referenční kóta, kóta, asociativní, osa polohy, obklad fasády, sloupek, sádrokarton
from: 4ea8fbf5
---

## Co uděláte

Vytvořte typ stěny, který odpovídá stěně, kterou budete stavět: obklad fasády, opláštění, jádro z 5½palcových sloupků a sádrokarton, nebo cihlu, vzduchovou mezeru a dřevěnou stěnu. Označte, které vrstvy jsou jádro, aby kóta nebo osa polohy mohla držet jádro, zatímco se obklady kolem něj mění. Pak kótujte stěny k lícům a osám, které myslíte.

## Vytvoření typu stěny

1. Začněte budovu nebo otevřete model IFC, zapněte {{ui:Kreslení}} a vyberte nástroj {{ui:Stěna}}.
2. V {{ui:Typ stěny}} vyberte výchozí typ a otevřete {{ui:Skladby stěn…}}. Výchozí typ se otevře jako kopie; novému typu dejte název.
3. Vrstvy jdou od vnějšku nahoře v seznamu k vnitřku dole. Pro každou vrstvu vyberte materiál, zadejte její tloušťku (jednotky projektu, nebo přesné hodnoty, například `12.7 mm` nebo `1/2"`), zvolte její funkci (povrch, podklad, konstrukce, izolace, membrána) a zaškrtněte vrstvy **Jádro**. Jádro musí tvořit jeden souvislý celek.
4. {{ui:Přidat vrstvu}} přidá vrstvu, {{ui:Přidat mezeru}} přidá vzduchovou mezeru s jejím větráním (neurčeno, nevětrané, větrané) a {{ui:Přidat membránu}} přidá vrstvu bez jmenovité tloušťky, například difuzní fólii. Šipky posouvají vrstvu směrem ven nebo dovnitř.
5. Náhled vykreslí vrstvy v měřítku, jádro je podtržené, očíslované stejně jako řádky, a okótuje každou vrstvu, jádro i celkovou tloušťku. Klikněte na {{ui:Uložit typ}}.

Nový typ je v seznamu nástroje Stěna a v **Vlastnostech** vybrané stěny. Uložení upraveného typu změní každou stěnu, která jej používá; {{ui:Duplikovat typ}} vytvoří samostatný typ a dá jej jen vybraným stěnám. Každé uložení je jeden krok zpět spolu se stěnami, které přesune, dveřmi a okny v nich a kótami, které na nich závisejí.

Dutina přidává šířku. Membrána žádnou nepřidává: zůstává v typu, aby ji rozpis mohl později najít, a nezapočítává se do tloušťky stěny ani jádra. Dutina nebo membrána se nikdy nepočítají jako plný materiál. V souboru uloženém jako IFC2X3 zůstává membrána v záznamu typu, ale vynechává se z jeho fyzických materiálových vrstev.

## Označení typu úrovní rozpracování (LOD)

Typ může říct, jak je rozpracovaný. V editoru nabízí **Úroveň rozpracování (LOD)** pevnou stupnici 100, 200, 300, 350, 400 a 500, nebo **Nenastaveno**. Obecná stěna („Wall 230 generic“) je LOD 100 nebo 200; konkrétní skladba se skutečnými vrstvami („230 clay brick, plastered both sides“) je LOD 300 nebo vyšší. Označení nastavujete vy: BimCraft ho nevypočítává a výchozí typy ho nemají.

Označení se zobrazí vedle názvu typu v seznamu typů nástroje Stěna, ve **Vlastnostech** stěny a v seznamu [Vyměnit typ](topic:wall-tools). Hlášení po výměně říká, zda úroveň stoupla, nebo klesla. Chcete-li ji vidět v rozpisu **Stěny podle typu** a jeho CSV, zaškrtněte v Nastavení › BimCraft › Stěny možnost **Zobrazit LOD každého typu stěny v rozpisu stěn**: přidá se poslední sloupec LOD. Označení se ukládá do souboru IFC spolu s typem (v sadě vlastností typu `CadCraft_WallType` jako vlastnost `LOD` a uvnitř záznamu typu), takže zůstane i po novém otevření souboru. Označení je zatím jen u typů stěn, ne u jednotlivých prvků nebo jiných druhů prvků.

## Obecné stěny pro fázi náčrtu

Seznam typů nástroje Stěna začíná dvěma **obecnými** stěnami: **Generic wall 200 mm (exterior)** a **Generic wall 100 mm (interior)**. Každá je jedna vrstva obecného materiálu s označením LOD 200. Použijte je, když víte, kde stěny jdou, ale ještě ne, z čeho jsou.

Stěna, jejíž typ je označen **LOD 100** nebo **LOD 200**, se v každém půdorysu kreslí jako **jeden šrafovaný pás** při každé úrovni podrobnosti: bez vrstev a bez čar vrstev. To platí pro obecné stěny i pro každý váš vlastní typ označený LOD 100 nebo 200. Stěna sama je úplná: má svou tloušťku, dveře a okna, své místnosti a množství.

Abyste ji rozpracovali, vyměňte její typ (Upravit › Stěny › **Vyměnit typ**, nebo Typ ve Vlastnostech). Stěna se už nekreslí znovu: stejná stěna dostane nový typ a hlášení říká, co se změnilo. Typ označený LOD 300 nebo vyšší se kreslí se svými vrstvami jako dřív.

Chcete-li kreslit každou stěnu podle jejích vrstev bez ohledu na označení, v Nastavení › BimCraft › Stěny zrušte zaškrtnutí **Kreslit stěny typu LOD 100 nebo LOD 200 jako jeden šrafovaný pás**.

Výchozí dveře a okna jsou také obecné druhy (velikost a způsob otevírání, ne výrobek). Když je zapnuto **Zobrazit LOD každého typu stěny v rozpisu stěn**, rozpisy Dveře a Okna ukazují pro ně LOD 200.

## Přidělení dat pro výkaz výměr

V editoru typu stěny vezme **Data pro výkaz výměr** to, co odhadce potřebuje vědět o stěně, jednou pro celý typ: **jednotku**, ze které je stěna postavena (cihlu nebo blok: její název, délku, výšku a šířku), **maltu** (název a tloušťku spáry) a **sazbu** s kódem měny (tři písmena, například USD, EUR nebo ZAR) a tím, na co se vztahuje: na metr čtvereční nebo stopu čtvereční čisté plochy stěny, na metr nebo stopu délky stěny, nebo na každou stěnu. Vše je volitelné.

Data se ukládají s typem do souboru. Každá stěna daného typu je pak hlásí: {{ui:Rozpisy}} › **Typy stěn: data pro výkaz výměr** vypíše jednotku, maltu, sazbu a součin sazby s naměřeným množstvím, a výkaz předaný TakeoffCraft nese tato data u položky daného typu stěny. Změníte-li je u typu, každá stěna to bude následovat.

Tři další pole slouží k počítání cihel nebo bloků a malty:

- **Odpad na jednotky, %** se přidá k počtu jednotek. Nechte prázdné, chcete-li použít hodnotu metody měření projektu, nebo žádnou, pokud metoda žádnou nemá. Zadejte 0, chcete-li mít bez odpadu, ať metoda říká cokoli.
- **Přídavná malta, %** je pro kapsy nebo perforace, které berou maltu. Přidá se k objemu malty. Nechte prázdné, pokud žádná není.
- **Vrstvy z této jednotky**: zaškrtněte každou vrstvu, která je listem zdiva z této cihly nebo bloku. Dutinová stěna má dva. Pokud nezaškrtnete žádnou, počítají se vrstvy jádra.

Sazbu lze také vztáhnout na jednotku k objednání, na 1000 jednotek k objednání, nebo na m³ malty. Tam, kde má jednotka délku a výšku, ukazuje **Typy stěn: data pro výkaz výměr** jednotky na m² (nebo ft²) jednoho listu, jednotky k objednání a objem malty; vzorce jsou v [Cihly, bloky a malta](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Typ má jednu jednotku: dva listy různých jednotek (cihlový vnější a blokový vnitřní) zatím nelze spočítat na jednom typu.

## Držte jádro na místě

Ve **Vlastnostech** nastavte **Osu polohy** stěny na líc jádra nebo na osu jádra. Když později přidáte nebo zesílíte povrch, tato osa zůstane na místě a stěna vyroste kolem ní. Stěny, které se k ní připojují v rohu, ji následují, takže rohy zůstanou rovné a uzavřené.

## Materiály projektu

{{ui:Knihovna materiálů…}} vypíše materiály projektu: název, kategorii, tloušťku, s níž vrstva začíná, barvu zobrazení, vzor výplně řezu a poznámky. Knihovna se ukládá do IFC spolu s projektem. Výběr materiálu pro vrstvu jí dá výchozí tloušťku materiálu, kterou pak můžete změnit. Pozdější úprava knihovny nikdy nepřemění stěny, které jste už nakreslili. Materiál můžete vytvořit také ze seznamu materiálů vrstvy pomocí {{ui:+ Nový materiál…}}.

## Referenční kóty

{{ui:Kótování}} › {{ui:Referenční kóta}}: zvolte vodorovnou, svislou nebo zarovnanou kótu a referenci: vnější nebo vnitřní líc povrchu, vnější nebo vnitřní líc jádra, osu stěny nebo osu jádra. Vyberte první stěnu, případně změňte referenci, vyberte druhou a klikněte, kam má kótovací čára jít. Dvě reference na jedné stěně měří její celkovou tloušťku nebo tloušťku jádra. {{ui:Referenční kóty…}} vypíše kóty zobrazení, včetně těch, které ztratily stěnu, s možnostmi Vlastnosti, Znovu navázat reference a Smazat.

### Okótujte celý půdorys podle pravidel

{{ui:Kótování}} › {{ui:Okótovat půdorys…}} okótuje vnější obvod půdorysu podlaží, který si prohlížíte: celkovou velikost v obou směrech a řadu kót podél každé vnější hrany (konce stěn, stěny, které se k hraně připojují, a dveře a okna v ní), s řadami umístěnými mimo budovu. Zaškrtněte, co chcete, přečtěte počet a pak klikněte na {{ui:Přidat kóty}}. Jsou to běžné referenční kóty: řídí se stěnami, když se stěny pohnou, a můžete kteroukoli z nich vybrat, přesunout nebo smazat. Celá sada je jeden krok zpět a opětovné spuštění žádnou novou kótu nevytvoří.

Okótuje pouze vnější obvod. Místnosti uvnitř budovy, zakřivené stěny a stěny, které nejsou kolmé k půdorysu, zůstávají pro ruční nástroje, a osy mřížky nejsou stěny, takže kóty mezi osami se zde nevytvářejí. Váš připojený asistent to umí také pomocí `plan_dimension`.

Kóta je připojena ke stěnám, ne k místu na obrazovce: když se stěna pohne nebo se změní její typ, hodnota se řídí. Je-li stěna smazána, kóta je označena jako nevyřešená a nezobrazuje číslo, dokud ji znovu nenavážete nebo nevrátíte krok zpět. Pole délky přijímá i souřadnice půdorysu, například `10',12'`, pro kótovací čáru na přesném místě.

Kóty jsou pro stěny, které BimCraft nakreslil, v pohledech na půdorys. Ještě není hotovo: kóty v řezech a pohledech, kóty ke dveřím, oknům a dalším komponentám a vrstvy skladeb nakreslené v půdorysu a řezu. Viz [Co ještě není hotovo](topic:not-built-yet).

## Viz také

[Kreslení stěn](topic:draw-walls), [Změna stěny, dveří nebo okna](topic:change-a-wall-or-door), [Vlastnosti](topic:properties-panel).
