---
title: Místnosti, podlahy, stropy a střechy
summary: Místnosti vzniknou tehdy, když je stěny uzavřou; místnosti nebo celé budově přiřaďte podlahu a strop a na stěny položte valbovou nebo sedlovou střechu. Vše se přizpůsobí, když se stěny posunou.
keywords: místnost, místnosti, prostor, plocha, obvod, podlaha, deska, podkladová podlaha, strop, střecha, valbová střecha, sedlová střecha, sklon, převis, okap, hřeben, úžlabí, 6/12
from: 1fb1813c
---

## Co uděláte

Dokončete obálku budovy. Místnosti vzniknou samy ze stěn; podlahy, stropy a střechu vytvoříte každé jedním kliknutím. Protože se odvozují ze stěn, přizpůsobí se, když se stěny posunou.

## Místnosti

Každý prostor uzavřený nakreslenými stěnami je místnost. Objeví se ve chvíli, kdy poslední stěna prostor uzavře, s číslem (101, 102 … v prvním podlaží, 201 … v dalším) a názvem (**Místnost 1**, **Místnost 2** …), a její plocha se zobrazí uprostřed na půdorysu.

- Když je zapnuto {{ui:Vybrat}}, klikněte dovnitř místnosti, abyste ji vybrali. V **Vlastnostech** změňte její **Název** (například `Kuchyně`) a **Číslo**; její plocha a obvod jsou zobrazeny.
- Smažete-li stěnu mezi dvěma místnostmi, stanou se jednou; nakreslíte-li stěnu přes místnost, rozdělí se na dvě. Místnost si ponechá název a číslo, i když se okolní stěny posunou.
- Místnost nelze smazat samostatně: je to prostor, který vytvářejí stěny.

Plochy se měří uvnitř líce stěn. Místnosti se ukládají jako prostory IFC s plochou podlahy, obvodem, výškou a objemem, takže je tabulky čtou (viz [Sčítání množství, výpis prvků a tabulky prostorů](topic:quantity-totals)).

## Podlahy

1. Klikněte na {{ui:Podlaha}}.
2. Zvolte **Tato místnost** nebo **Celá budova**, **Druh** (dřevěná podlaha, nebo betonová deska) a její tloušťku.
3. Ukažte dovnitř místnosti (nebo kamkoli dovnitř budovy). Zvýrazní se to, co by podlaha pokryla, s její plochou.
4. Klikněte. Horní hrana podlahy je úroveň podlaží; podlaha jde dolů o svou tloušťku. Podlaha pro celou budovu dosahuje k vnějším lícům stěn.

## Stropy

1. Klikněte na {{ui:Strop}}.
2. Zvolte **Tato místnost** nebo **Celá budova** a její **Výšku** nad podlahou.
3. Ukažte dovnitř a klikněte.
4. Chcete-li ho vidět zespodu, s jeho mřížkou a svítidly, přepněte půdorys na jeho stropní půdorys: viz [Pohledy, rozsahy pohledů a vaše vlastní listy](topic:views-and-sheets).

## Střecha

1. Na úrovni, jejíž stěny nesou střechu, klikněte na {{ui:Střecha}}.
2. Zadejte **Sklon** jako stoupání na 12 (`6/12`) nebo ve stupních (`30`), a **Převis**.
3. Zvolte **Konce**: **Valbová střecha** (každá strana je šikmá), **Štíty na krátkých stranách** nebo **Štíty na dlouhých stranách** (budova se čtyřmi stranami), nebo **Pultová střecha**.
4. Ukažte dovnitř budovy: okap a hřeben se zobrazí na půdorysu. Klikněte.

Střecha sedí na stěnách, na úrovni nad nimi, a její spodek se stýká s vnějším lícem stěn. Štítové konce se vyplní štítovou zdí stejně tlustou jako zeď pod ní. Budova tvaru L, T nebo U dostane valbovou střechu, jejíž křídla se stýkají v úžlabích.

## Změna

Vyberte podlahu, strop nebo střechu (ve 3D pohledu, ve stromu modelu, nebo střechu kliknutím dovnitř jejího obrysu na úrovni nad ní) a změňte ji ve **Vlastnostech**: druh podlahy, její tloušťku a o kolik je horní hrana nad úrovní; u stropu výšku, tloušťku a **Vzor** (mřížku, kterou strop kreslí v půdorysu stropu: žádná, 600 × 600, 600 × 1200, 2' × 2' nebo 2' × 4'); u střechy sklon, převis, konce a tloušťku. Každá změna je jeden krok zpět.

## Dejte podlaze, stropu nebo střeše typ s vrstvami

Podlaha, strop a střecha mohou mít **typ**, stejně jako stěna: pojmenovanou skladbu vrstev, každou s jejím materiálem a skutečnou tloušťkou.

- **Když ji umístíte.** Nástroje Podlaha, Strop, Střecha a Kreslit podlahu mají na svém řádku seznam **Typ**. **Bez typu** ji umístí jako dosud, se svou vlastní tloušťkou. Typ ji umístí tak tlustou, jak jsou dohromady tlusté vrstvy typu.
- **Později.** Vyberte podlahu, strop nebo střechu a zvolte **Typ** ve **Vlastnostech**. Prvek zůstává týmž prvkem: jeho místo, místnost a data se zachovají a nic se znovu nekreslí. Mění se jen jeho typ, tloušťka a materiál. Tak se prvek z náčrtové fáze stane propracovaným: vyměňte jeho obecný typ za skutečný.
- **Upravit typ…** otevře editor typu pro daný typ: vrstvy shora dolů, jádro, funkci každé vrstvy a označení LOD typu. Uložení změní každý prvek daného typu v jediném kroku a jeden krok zpět to vrátí. Změníte-li výchozí typ, uloží se kopie jako váš vlastní typ.
- Dokud má prvek typ, jeho **Tloušťka** je tloušťka typu a nelze ji zadat ručně. Chcete-li ji změnit, zvolte jiný typ nebo **Bez typu**.

Výchozí typy jsou jeden **obecný** typ pro každý z nich (jedna vrstva obecného materiálu, označená LOD 200) a dva vrstvené (označené LOD 300): dřevěný trámový strop s betonovou mazaninou a betonová podlaha s mazaninou; dřevěná střecha a betonová plochá střecha; sádrokartonový strop a podhledový strop z dlaždic. Jsou to výchozí hodnoty, nikoli ověřené konstrukce: před použitím zkontrolujte vrstvy.

Výkaz **Vrstvy: plocha a objem** uvádí každou vrstvu každého typu v použití; viz [Výkazy, kóty a PDF](topic:plan-schedules-and-pdf). Typy podlah, stropů a střech se přenášejí mezi projekty v balíčku typů nebo jako položka knihovny; viz [Balíčky typů](topic:type-packs).

## Dobré vědět

- Posunutí, přidání nebo smazání stěn znovu vytvoří místnosti, podlahy, stropy a střechu nad nimi.
- Střecha se přizpůsobí libovolnému obrysu. Chcete-li každé stěně dát vlastní sklon, štít nebo pultový konec, zvýšený věnec, okapní prkno a podhled, nebo nakreslit jedinou rovinu střechy, viz [Střechy: sklon pro každou stěnu, štíty, pultové střechy a roviny střech](topic:roofs).
- {{key:Delete}} smaže vybranou podlahu, strop nebo střechu.
