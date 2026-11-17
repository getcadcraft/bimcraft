---
title: Úprava rodiny
summary: Měňte parametry, vzorce a tělesa rodiny, zobrazujte části podle parametru Ano / Ne, řežte a spojujte tělesa, dejte rodině konektory pro potrubí a vzduchotechniku a sledujte výsledek nakreslený z IFC, které se uloží.
keywords: editor rodiny, úprava rodiny, parametr, parametry, vzorec, vzorce, viditelnost, ano ne, těleso, tělesa, kvádr, vytažení, extrude, rotační těleso, revolve, tažení po dráze, sweep, profil, oblouk, booleovská operace, řez, spojení, rozdíl, sjednocení, úchyt, úchyty, pracovní rovina, skica, nová rodina, konektor, konektory, port, porty, konektor potrubí, konektor vzduchotechniky, odtok, přívod vody
from: 1ab31c10
---

## Otevření editoru

Otevřete rodinu (skupinu **Rodiny** v průzkumníku projektu, nebo {{ui:Build}} › {{ui:Families…}}) a klikněte na {{ui:Edit the family}}. Chcete-li začít od nuly, klikněte na {{ui:New family}}: dejte jí název, určete, čím je (dveře, okno, nábytek, zařízení nebo něco jiného), a u dveří nebo oken zvolte, odkud pochází jejich symbol v půdorysu a úchyt. Editor se otevře na rodině s několika parametry a jedním tělesem.

Úprava startovní rodiny ponechá vaše změny jen v tomto modelu. Ostatní modely si startovní rodinu ponechají beze změny.

Nic v modelu se nezmění, dokud neklikněte na {{ui:Save the family}}. Editor má vlastní zpět a znovu (šipková tlačítka vedle názvu, nebo {{key:Mod+Z}} a {{key:Mod+Y}}); uložení je jeden krok v zpět modelu.

## Parametry

Záložka {{ui:Parameters}} vypisuje parametry rodiny: název, druh a výchozí hodnotu. Druhy: **Délka** (milimetry), **Úhel** (stupně), **Číslo**, **Celé číslo**, **Ano / Ne**, **Pero** (1–16) a tři, které drží slova místo čísel: **Text**, **Materiál** (jeden z materiálů projektu) a **Výplň** (výplň půdorysu). Slova se ve vzorcích nepoužívají; barví těleso (jeho **Materiál**), vyplňují část symbolu, nebo se tisknou jako `{Name}` v textu symbolu. Pole **Pro každý prvek** udělá z parametru něco, co každý umístěný prvek nastavuje sám za sebe, místo aby to bylo v jeho velikosti.

- **Vzorec** nechá parametr sledovat jiné, například `Width / 30` nebo `if(Width > 1200, 2, 1)`. Délky ve vzorcích jsou v milimetrech, nebo napište jednotku: `3'`, `6in`, `50cm`.
- Přejmenování parametru ho přejmenuje ve všech vzorcích a polích, které ho používají. Parametr, který se stále používá, nelze odstranit.
- **Materiál** tělesa převezme barvu materiálu projektu (nebo parametru Materiál), **Zobrazeno při** jej skryje při hrubších úrovních podrobnosti a **Opakovat** vytvoří kopie: počet (číslo nebo celočíselný parametr, 1 až 200) a krok mezi nimi v x, y a z. Opakované těleso je řada prken, tyčí nebo otvorů; použité v řezu se kopie řežou společně.
- Rodina dveří nebo oken také dostane dva názvy ze své stěny: `WallThickness` a `Face` (1 nebo −1, strana, na kterou se dveře otevírají).

## Tělesa

Záložka {{ui:Solids}} vypisuje tělesa. Přidejte kvádr, vytažení, rotační těleso nebo tažení po dráze:

| Těleso | Co nastavíte |
|---|---|
| Kvádr | jeho dva rohy: x0 až x1, y0 až y1, z0 až z1 |
| Vytažení | profil na pracovní rovině (půdorys, čelo nebo bok), kde rovina je, a hloubku |
| Rotační těleso | profil, osu na rovině a úhel až 360° |
| Tažení po dráze | dráhu bodů a poloměr (tyč nebo madlo) |

Každé číslo může být zadané číslo, nebo výraz z parametrů. Každé těleso má barvu a **Zobrazit, když**: nechte prázdné, aby se zobrazovalo vždy, nebo uveďte parametr Ano / Ne (případně zápis porovnání, například `Shelves >= 3`), aby se zobrazovalo jen tehdy. To je parametr viditelnosti.

### Kreslení profilu

Profil vytažení nebo rotačního tělesa se kreslí na jeho pracovní rovině pod náhledem:

- Klikněte na papír a přidejte bod za vybraným bodem.
- Bod přetáhněte a přesunete ho. Body přichytávají k mřížce; podržte {{key:Shift}}, abyste je umístili volně.
- Klikněte na malý čtvereček na úsečce a přidejte tam bod. {{key:Shift}}+klik na něj udělá z úsečky oblouk (klikněte znovu pro opačný směr, pak rovně).
- Dvojklikem na bod jej odstraníte.

Duté body nastavují parametry: měňte je v tabulce, ne tažením.

## Booleovské operace

Záložka {{ui:Booleans}} vyřízne druhé těleso z prvního, nebo je spojí. Výsledek booleovské operace lze znovu řezat nebo spojovat. Těleso použité v booleovské operaci se kreslí jen jako její součást.

Je-li druhé těleso skryté svým parametrem Ano / Ne, první se zachová beze změny; je-li skryté první, skryje se výsledek.

## Symbol v půdorysu

Záložka {{ui:Plan symbol}} kreslí, co půdorys ukazuje pro tuto rodinu místo řezu jejích těles: čáry, obdélníky, kružnice, oblouky, mnohoúhelníky a text, v osách rodiny. Každá část má **pero** (1–16, výraz nebo parametr Pero), **výplň** (žádná, plná, šikmá, křížová, beton, izolace, zemina, nebo parametr Výplň), výraz **zobrazeno podle**, **rozsah řezu** v milimetrech nad svou základnou (část se nakreslí plnou čárou, když je řez půdorysu uvnitř ní, tenkou pod ním a čárkovaně nad ním: skříňka nad řezem se ukáže čárkovaně), úroveň podrobnosti a opakování. Text může uvádět parametry jako `{Name}`. **Půdorys ukazuje: Řez těles** ponechá řez půdorysu tělesa, zatímco symbol zůstane v rodině. Ostatní programy čtou symbol jako půdorysnou stopu rodiny (čáry a tvary; text zůstává v BimCraftu).

## Vnořené rodiny

Záložka {{ui:Families inside}} vloží jinou rodinu do této: nohu do stolu, úchyt na dveře. Vyberte rodinu, pak kam patří (x, y, z), o kolik je otočena (jen čtvrtotáčky: 0, 90, 180, 270), kdy se zobrazuje, a hodnoty, které dostane, jedna na řádek jako `Height = Height - 40`. Uložení vnořené rodiny překreslí tuto rodinu; rodinu, kterou drží jiná, nelze smazat; rodina nemůže obsahovat sama sebe, ani přes jinou, a vnoření končí na čtyřech úrovních.

## Úchyty

Úchyt je bod nebo hrana, kterou táhnete a měníte parametr. Na záložce {{ui:Hotspots}} přidejte jeden, vyberte osu, podél které táhne, a číselný parametr, který mění, a zapište jeho polohu stejnými výrazy jako u těles. V náhledu zvolte pod tažnými body **Úchyty** a přetáhněte je. Na umístěném prvku v půdorysu (vyberte jej nástrojem {{ui:Select}}) se úchyty x a y zobrazí jako úchopy: přetáhnete-li jeden, prvek převezme velikost, která tam úchyt postaví, přes všechny vzorce mezi nimi; jedno zpět jej vrátí. Úchyt nemůže měnit řízený parametr, parametr Ano / Ne ani slovo.

Ve 3D pohledu se stejné úchyty zobrazují jako úchopy na vybraném prvku a ukazují se i úchyty nahoru a dolů (osa z), které půdorys nemůže nakreslit. Vyberte prvek, přetáhněte úchop podél jeho osy a pusťte: prvek převezme velikost, která tam úchyt postaví, jako jeden krok zpět. Úchopy jsou skryté, když je zapnutý řezný box, protože používá stejné úchopy.

## Konektory

Rodiny umístěné na podlaží (nábytek, zařízení a další) mají záložku {{ui:Connectors}}: body, kde se potrubí nebo potrubí vzduchotechniky napojuje na prvek, jako na baterii a odtok umyvadla. Klikněte na {{ui:Add a connector}} a nastavte:

- **Druh**: potrubí, nebo vzduchotechnika, a jejich **Systém** (studená voda, odpad, přívod vzduchu…).
- **x**, **y** a **z**: kde je, v osách rodiny. Stejně jako čísla tělesa může každé být číslo nebo vzorec z parametrů, takže se konektor pohybuje s velikostí.
- **Směr výstupu**: směr, kterým potrubí nebo vzduchotechnika odchází, podél jedné z os rodiny (odtok pod umyvadlem je **Dolů**).
- **Velikost (mm)**: jmenovitá velikost potrubí (DN), nebo průměr kruhového potrubí vzduchotechniky.
- **Průtok**: **Vstup** pro konektor, který je napájen (baterie), **Výstup** pro ten, který odvádí.

Náhled kreslí každý konektor jako kroužek se šipkou ve směru výstupu. Dveře a okna konektory nemají.

Pro sanitární zařízení vyberte, o jaké zařízení jde, pod **Sanitární zařízení** (záchod, umyvadlo, kuchyňský dřez, sprcha, výlevka do prádelny). Startovní zařízení to už uvádějí.

Každý prvek umístěný z rodiny dostane své konektory jako porty v souboru IFC a vytvoří se znovu, když se prvek změní velikost nebo když se rodina uloží. Programy, které čtou systémy IFC, vidí, kam každé potrubí nebo vzduchotechnika patří.

## Náhled a jeho tažné body

Náhled je rodina zapsaná jako IFC stejným kódem, který ji ukládá do modelu, a znovu vykreslená. Co vidíte, to dostanou ostatní programy. Pod ním **Zobrazená velikost** nastavuje hodnoty parametrů, které náhled používá.

**Tažné body** jsou tečky na náhledu: **Velikost** ukáže tažný bod pro Šířku, Hloubku a Výšku; **Vybrané těleso** ukáže jeden na každé ploše vybraného tělesa. Tažný bod táhněte:

- na ploše nastavené parametrem: změní se zobrazená velikost (vzorce rodiny se zachovají);
- na ploše nastavené zadaným číslem: změní se toto číslo.

## Ukládání

{{ui:Save the family}} rodinu zkontroluje, pak každou její velikost nakreslí znovu a každý její prvek vytvoří znovu, jako jeden krok, který lze vrátit zpět. Pokud velikost nelze nakreslit se změnou (například těleso by v dané velikosti nemělo šířku), nic se neuloží a editor uvede, která velikost to je.

Pokud někdo jiný uložil stejnou rodinu, zatímco byl váš editor otevřen (v relaci Live TeamWork nebo v jiném okně), {{ui:Save the family}} odmítne a řekne to, místo aby nahradil jeho změnu vaší. Zavřete editor, rodinu znovu otevřete, uvidíte jeho změnu a udělejte svou znovu.

:::note
Geometrie se ukládá jako vlastní tělesa IFC: vytažení, rotační tělesa, tažené kotouče a výsledky booleovských operací. Nic se nepřevádí na seznam trojúhelníků, takže soubory zůstávají malé a ostatní programy mohou tvary číst jako tvary. Profily s oblouky se ukládají s oblouky v IFC4; IFC2X3 nemá oblouky v profilu, takže se tam oblouky ukládají jako krátké rovné kusy.
:::

Viz také [Rodiny a jejich velikosti](topic:families).
