---
title: Georeference s libovolnou projekcí
summary: Řekněte BimCraftu, v jakém mapovém systému jsou souřadnice modelu, z celého seznamu EPSG, z libovolné zóny UTM nebo z projekce, kterou si sami definujete, a použijte jej pro Polohu, mapové vrstvy a mračna bodů.
keywords: projekce, souřadnicový systém, crs, epsg, utm, zóna utm, vlastní projekce, proj4, řetězec proj, prj, wkt, georeference, georeferencování, převod do mapy, ifcprojectedcrs, moje projekce, zeměpisná šířka, zeměpisná délka, východ, sever, lambert, gauss-kruger, státní rovinná soustava, státní síť
from: 6894c1f2
---

Některé plány jsou nakresleny v mapovém systému, který není v krátkém seznamu: zóna UTM, státní síť, nebo projekce, kterou někdo zapsal jako textovou definici. {{ui:Měřit}} › {{ui:Souřadnicový systém…}} vám umožní určit, který systém model používá.

## Vyberte systém pro model

1. Otevřete model, zvolte {{ui:Měřit}} a pak {{ui:Souřadnicový systém…}}.
2. Pište do vyhledávacího pole. Funguje kterýkoli z těchto:
   - číslo EPSG: `32633` nebo `EPSG:2277`;
   - zóna UTM: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - slova z názvu: `lambert 93`, `mga zone 56`, `texas central`;
   - definice projekce: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, volitelně s názvem před ní (`Moje síť = +proj=…`);
   - text souboru `.prj`, nebo použijte {{ui:Načíst soubor .prj…}}.
3. Vyberte výsledek a pak {{ui:Použít tento systém}}.

Volba se uloží v modelu (sada vlastností pojmenovaná `CadCraft_CRS` na projektu), takže se otevře znovu spolu s modelem. Uložte model, abyste ji zachovali. {{ui:Odebrat z modelu}} se vrátí k tomu, co říká soubor.

Pokud vaše definice dává stejné souřadnice jako některý uvedený systém EPSG, BimCraft to řekne a použije tento kód; když několik uvedených systémů sdílí stejnou matematiku, pojmenuje i ostatní.

## Moje projekce

Definici, kterou vložíte, nebo soubor `.prj`, který načtete, lze uchovat tlačítkem {{ui:Uložit do Mých zobrazení}}. Seznam je na tomto zařízení (v tomto prohlížeči) a nabídne se při příštím otevření výběru.

## Co to používá

- {{ui:Měřit}} › {{ui:Poloha}} převede vybraný bod na zeměpisnou šířku a délku přes systém modelu. Dříve se zastavil s poznámkou, když soubor pojmenoval svůj mapový systém bez kódu EPSG; s uloženou volbou dá odpověď.
- Mapové vrstvy pod modelem používají týž systém. Mračno bodů nebo soubor terénu v jiném systému se nabídne v systému modelu (viz níže).
- {{ui:Nastavení}} › {{ui:BimCraft}} › {{ui:Poloha}} › {{ui:Zvolit jiný systém…}} nastaví, co {{ui:Poloha}} hlásí navíc: zeměpisnou šířku a délku v libovolném uvedeném zeměpisném systému, nebo východ a sever v libovolném projekčním systému, vedle vlastního systému modelu.

## Model, který ještě není na mapě

Pokud soubor nemá převod do mapy, výběr systému otevře {{ui:Umístit tento model na mapu}}. Můžete ji otevřít také z {{ui:Měřit}} › {{ui:Počátek na mapě…}}.

1. Zadejte počátek modelu jako východ a sever v daném systému, nebo zadejte zeměpisnou šířku a délku a zvolte {{ui:Převést na východ a sever}}.
2. Zadejte natočení k mřížkovému severu (stupně, proti směru hodinových ručiček; 0 znamená, že osa Y modelu ukazuje na mřížkový sever) a výšku počátku.
3. Měřítko začíná na rozdílu jednotek mezi modelem a mapou (0.001 pro model v milimetrech na metrové mřížce). Měňte je jen pro kombinovaný faktor země–mřížka.
4. Zvolte {{ui:Umístit na mapu}}. Jeden krok zpět zapíše IfcProjectedCRS a IfcMapConversion (IFC4). Model sám se nepohne.

Soubor IFC2X3 nemá ani jednu z těchto entit. BimCraft zapíše tytéž hodnoty způsobem, který ten standard dovoluje: sady vlastností buildingSMART `ePSet_MapConversion` a `ePSet_ProjectedCRS` na projektu, zeměpisnou šířku a délku staveniště a skutečný sever. Dialog to uvádí. Uložte model, abyste ho zachovali.

## Model, který je už na mapě

Když soubor už se na mapě umisťuje sám a vy zvolíte jiný systém, BimCraft se zeptá:

- {{ui:Změnit jen to, co hlásí Poloha}} ponechá vlastní georeferenci souboru a použije vaši volbu pro {{ui:Poloha}}, mapové vrstvy a mračna bodů (čísla modelu se pak čtou jako čísla v novém systému).
- {{ui:Přesunout model do tohoto systému}} přepíše georeferenci: počátek projde projekcí (východ, sever, výška, natočení a měřítko) a IfcProjectedCRS (název, datum, projekce, zóna, jednotka) se přepíše, takže uložené IFC říká nový systém. Místo na Zemi zůstane stejné: počátek si ponechá svou zeměpisnou šířku a délku. Prvky uvnitř modelu se nikdy nemění; mění se jen georeference.

Dialog ukáže starý a nový počátek, než zvolíte. Přesun tam a zpět vrátí počátek do jednoho milimetru.

## Mračna bodů a terén v jiném systému

Mračno nebo geodetický soubor nese vlastní systém (LAS, LAZ, E57, GeoTIFF), nebo žádný. Když se liší od systému modelu, BimCraft nabídne {{ui:Převést do systému modelu}}. Body se přesunou po dávkách (ve Workeru, když je jich mnoho, aby stránka zůstala použitelná), soubor na vašem počítači se nedotkne a stavový řádek říká, co se stalo. Otevřete soubor znovu, chcete-li se vrátit k jeho vlastnímu systému. U mračna, které je už otevřené, dělá totéž {{ui:Převést do modelu…}} v panelu mračna.

Když soubor s mračnem neuvádí žádný systém, BimCraft se zeptá {{ui:V jakém systému je tento soubor?}}: zvolte jej tlačítkem {{ui:Vyberte systém…}} a odpověď se pro tento soubor na tomto zařízení zapamatuje. {{ui:Ponechat vlastní systém souboru}} ponechá body tak, jak jsou.

## Když je něco přibližné

Problémy jsou uvedeny v dialogu a v panelu Problémy, nikdy potichu:

- Místo mimo oblast, pro kterou je systém určen: čísla fungují, ale zkreslení roste.
- Posuny data, které potřebují mřížkový soubor (NADCON, NTv2 a podobné), nejsou k dispozici. Systémy na jiném datu se přesunou posunem bez mřížky, který uvádí registr EPSG, a výsledek je přibližný v uvedené přesnosti, kterou zpráva uvádí v metrech.
- Bod, který nelze promítnout, se vynechá a spočítá; soubor nad limitem velikosti se odmítne a limit se uvede.

:::tip
Mapové souřadnice potřebují převod do mapy. Soubor bez něj se umístí na mapu pomocí {{ui:Počátek na mapě…}}.
:::

:::note
Přechod mezi daty bez mřížkového souboru je přesný na několik metrů; výsledek Polohy uvede, o kolik, když to katalog zná.
:::
