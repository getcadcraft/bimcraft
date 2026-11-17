---
title: Terén pozemku, podklad budovy a dlažba
summary: Přeneste terén do modelu ze zaměřených bodů, vrstevnic, skenu LAS / LAZ, GeoTIFF, povrchu LandXML (z CivilCraftu) nebo několika výškových bodů; vyřízněte podklad budovy domu se sklony a výkopem / násypem; položte na něj příjezdy, chodníky a terasy; předejte jej CivilCraftu jako LandXML.
keywords: terén, podloží, pozemek, topografie, zaměření, body, PNEZD, vrstevnice, LAS, LAZ, LiDAR, GeoTIFF, DEM, výška, výškový bod, sklon, úprava terénu, podklad, podklad budovy, výkop, násyp, zemní práce, průsečík svahu, svah, příjezd, chodník, terasa, dlažba, LandXML, CivilCraft
from: 208298d6
---

## Co uděláte

Umístěte dům na jeho pozemek. Terén se stane součástí modelu: zobrazí se v 3D, řeže se v řezech a pohledech a na půdorysu jsou vrstevnice. Pod domem se vyřízne podklad budovy, příjezdy a chodníky jej budou sledovat a základy s ním budou klesat.

## Zavedení terénu

1. Otevřete {{ui:Sestavení}} a vyberte {{ui:Terén}}.
2. Buď:
   - **Otevřít soubor zaměření…**: zaměřené body (PNEZD, PENZD nebo prostě X, Y, výška; oddělené čárkou, tabulátorem nebo mezerou), vrstevnice v DXF nebo DWG (polyčáry ve své výšce, 3D polyčáry), sken LAS nebo LAZ (body terénu zachovány, zředěny zhruba na jeden na čtvereční metr), GeoTIFF nebo ASCII mřížka výšek, nebo **LandXML** povrch, jaký exportuje CivilCraft (jeho vlastní body a trojúhelníky se zachovají; když soubor obsahuje více povrchů, BimCraft se zeptá, který je terén; jednotky převezme ze souboru). Nejprve zvolte jednotky souboru (LandXML je uvádí sám).
   - Nebo zadejte **Výškový bod** (od podlahy této úrovně, takže `-1'` je stopu pod ní) a klikněte na body na půdorysu, změňte výšku a klikněte na další, pak **Vytvořit terén**. Na začátek stačí tři body.

Souřadnice zaměření daleko od modelu (state plane, UTM) se přesunou na dům a výšky se nastaví tak, aby terén u domu byl zhruba 8" pod prvním podlažím. **Zvýšit terén** ve **Vlastnostech** to opraví o libovolnou hodnotu.

## Podklad budovy

1. Vyberte {{ui:Podklad budovy}}.
2. Nastavte **Okraj** kolem domu, jak hluboko **podklad leží pod podlahou** (8" pod deskou, více pod podsklepením s plazivým prostorem) a **Sklony** ven k stávajícímu terénu (`2:1` = dvě stopy ven za každou stopu nahoru nebo dolů).
3. Ukažte dovnitř domu a klikněte.

Terén pod domem se vyrovná a až k okraji, pak stoupá do svahu (výkop) a klesá na nižší stranu (násyp), dokud nenarazí na stávající terén. **Vlastnosti** terénu a podkladu udávají objemy výkopu a násypu. Přesunete-li stěny, podklad je bude následovat.

## Příjezdy, chodníky a terasy

Vyberte {{ui:Dlažba}}, zvolte **Chodník**, **Příjezd** nebo **Terasa** a klikněte na rohy. Klikněte znovu na první roh, dvakrát klikněte nebo stiskněte {{key:Enter}} pro dokončení. Dlažba kopíruje hotový sklon; druh nebo tloušťku změníte ve **Vlastnostech**.

## Základy kopírují sklon

Když je terén v modelu, stěnové základy a základy podsklepení jej sledují: podél každé stěny zůstává základ ve své hloubce pod terénem vně a v celých krocích po 8" se schodovitě snižuje tam, kde terén klesá (viz [Základy pod stěnami](topic:foundations)).

## Předání CivilCraftu

**LandXML pro CivilCraft** (v řádku Terén nebo ve **Vlastnostech** terénu) stáhne stávající terén a hotový sklon jako soubor LandXML. Otevřete jej v CivilCraftu pro skutečné urovnání, odvodnění a zemní práce.

## Dobré vědět

- Terén vyžaduje model IFC4, stejně jako každá nová budova.
- Vrstevnice se zobrazují na půdorysu úrovně terénu v intervalu nastaveném ve **Vlastnostech** terénu; každá pátá je silnější.
- Terén se uloží jako prvek terénu IFC (uzavřený trojúhelníkový povrch, takže jej řezy protínají); podklad a dlažba se ukládají spolu s ním. Chcete-li začít znovu, smažte terén – jeho podklad a dlažba půjdou s ním.
