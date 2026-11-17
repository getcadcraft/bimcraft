---
title: Zobrazení výkresu DWG nebo DXF ve 3D
summary: Přepněte prostor modelu výkresu do 3D a uvidíte výšky, tloušťky, 3D plochy, sítě a bloky, otáčejte kolem nich, klikněte na objekt pro jeho vlastnosti a zjistěte, co ještě není vykresleno.
keywords: 3d, dwg, dxf, výkres, prostor modelu, otáčení, orbit, řez, průřez, ořez, výběr, vybrat, vlastnosti, atributy, handle, výška, tloušťka, vytažení, 3dface, polyface, síť, 3D mnohočára, bloky, pohledy, perspektiva, rovnoběžné, rozsah, acis, tělesa
from: a0c6cd17
---

## Co uděláte

Podívejte se na prostor modelu výkresu ve 3D. Čáry a mnohočáry leží ve svých skutečných výškách, objekty s tloušťkou stojí jako stěny a 3D plochy, sítě a 3D bloky se zobrazí jako plochy, kolem kterých můžete otáčet. Listy zůstávají ve 2D.

## Postup

1. Otevřete DWG nebo DXF. Viz [Zobrazení výkresu DWG nebo DXF](topic:view-dwg). Otevře se ve 3D, pokud {{ui:Nastavení}} › {{ui:BimCraft}} › **Výkresy se otevírají v** neříká {{ui:Model (2D)}}.
2. Z 2D klikněte na {{ui:3D}} v pruhu nad výkresem, nebo stiskněte {{key:3}}.
3. Počkejte chvilku poprvé: stavový řádek ukáže "Vytváření výkresu ve 3D…", pak kolik čar a ploch zobrazuje.
4. Otáčejte, posouvejte a zoomujte (viz tabulka níže).
5. Klikněte na pohled ve druhém pruhu: {{ui:Izo}}, {{ui:Shora}}, {{ui:Zdola}}, {{ui:Zepředu}}, {{ui:Zezadu}}, {{ui:Zleva}} nebo {{ui:Zprava}}.
6. Klikněte na {{ui:Perspektiva}} pro přepnutí mezi perspektivou a rovnoběžným pohledem.
7. Klikněte na {{ui:Rozsah}} nebo stiskněte {{key:F}}, aby se znovu ukázal celý výkres.
8. Klikněte znovu na {{ui:3D}}, stiskněte {{key:3}}, nebo klikněte na {{ui:Model}} či na záložku listu, abyste se vrátili do 2D.

## Co byste měli vidět

- Prostor modelu ve 3D, Z nahoru, v barvách samotného výkresu. Plochy jsou o odstín světlejší než jejich hrany.
- Vrstvy, které vypnete v {{ui:Vrstvy}}, zmizí i z 3D zobrazení.
- Vpravo: počet čar a ploch, velikost výkresu v X, Y a Z, **Jen ve 2D zobrazení** a **Ještě nevykresleno**.

## Řez rovinou

Klikněte na {{ui:Řez}} na 3D pruhu, nebo stiskněte {{key:X}}. Pruh pod ním funguje jako u modelů IFC (viz [Řez modelem IFC rovinou řezu](topic:section-plane)): řežte od {{ui:Shora}}, {{ui:Zepředu}} nebo {{ui:Z boku}}, potáhněte nebo zadejte posun — zde v jednotkách samotného výkresu — a {{ui:Otočit}} pro zachování druhé strany. Co rovina odřízne, nejde vybrat. Návrat do 2D řez odstraní.

## Zjištění vlastností objektu

Klikněte na objekt v 3D zobrazení. Změní barvu výběru a {{ui:Vlastnosti}} ukáže, co o něm soubor říká: jeho typ, vrstvu, barvu, typ čáry a handle, pak jeho vlastní data, například začátek, konec a délku čáry, střed a poloměr kružnice, rohy 3D plochy, nebo u odkazu na blok jeho blok, vložný bod, měřítko, otočení a hodnoty atributů.

- Odkaz na blok se vybere celý, včetně bloků v něm vnořených.
- Klik několik pixelů od čáry vybere čáru.
- Podržte {{key:Mod}} a klikněte, abyste vybrali další objekty, nebo jeden odebrali; {{ui:Vlastnosti}} je pak spočítá podle typu.
- {{key:Esc}}, nebo klik na prázdné místo, výběr zruší.
- Objekty na vypnutých vrstvách nejdou vybrat.

## Pohyb

:::mouse
| Cíl | Postup |
|---|---|
| Otáčení | Táhněte prostředním tlačítkem, nebo levým |
| Posun | Táhněte pravým tlačítkem, nebo podržte {{key:Shift}} a táhněte |
| Zoom | Otáčejte kolečkem; zoomuje k tomu, co je pod kurzorem |
| Zobrazit vše | {{ui:Rozsah}} nebo {{key:F}} |
| Pohled z boku | Klikněte na stěnu, hranu nebo roh kostky pohledu v pravém dolním rohu |
:::

Kostku pohledu lze v {{ui:Nastavení}} nahradit ikonou os, nebo skrýt. Viz [Nastavení BimCraftu](topic:settings).

:::mac mouse
Na trackpadu přejíždějte dvěma prsty pro otáčení, podržte {{key:Shift}} a přejíždějte pro posun a stažením prstů zoomujte.
:::

:::touch
Táhněte jedním prstem pro otáčení. Stažením dvou prstů zoomujte a posunem obou spolu posouvejte.
:::

## Co se kreslí ve 3D

| Ve výkresu | Ve 3D |
|---|---|
| Čáry, 3D mnohočáry | Ve svých skutečných výškách |
| Mnohočáry, kružnice, oblouky, elipsy | Ve vlastní rovině, ve své kótě výšky, nakloněné, když je výkres nakloní |
| Tloušťka na čarách, mnohočarách, kružnicích a obloucích | Stěny této výšky; kružnice jsou uzavřené nahoře a dole |
| 3D plochy, polyface sítě, polygonové sítě | Stínované plochy s viditelnými hranami |
| Bloky | Umístěné, otočené a v měřítku ve 3D, včetně vnořených bloků |
| Šrafy | Jejich obrysy |
| Prostá 2D kresba | Naplocho, tam, kde byla nakreslena |

## Jen ve 2D zobrazení

Text, víceřádkový text a viditelné atributy bloků se kreslí ve 3D ve své rovině a ve své výšce, a klik na ně je vybere. Široké mnohočáry ukazují svou šířku jako plochý pás. Víceúrovňové výnosky, obrázky a vzory šrafování se počítají pod **Jen ve 2D zobrazení**: zobrazte je na záložce {{ui:Model}} nebo na listech.

## Ještě nevykresleno

Tělesa a plochy uložené jako těla ACIS (3D tělesa, tělesa, oblasti a plochy) a rozdělené sítě jsou uvedeny pod **Ještě nevykresleno** s počtem. Přeskočí se a nic se nedoplňuje.

## Časté chyby

- **Všechno vypadá naplocho.** Výkres je 2D: jeho čáry nemají výšku. Klikněte na {{ui:Zepředu}} a ověřte to; naplocho nakreslený výkres se ukáže jako čára.
- **Plný model nic neukazuje.** Tělesa vytvořená modelářem těles jsou těla ACIS, uvedená pod **Ještě nevykresleno**. Exportujte model jako IFC nebo jako 3D plochy z programu, který jej vytvořil.
- **Výkres je malý shluk uprostřed.** Něco daleko v prostoru modelu, například stará kopie půdorysu, zvětší rozsah. Přiblížte kolečkem tam, kam se chcete podívat.

## Další

- [Práce s vrstvami a listy](topic:dwg-layers-sheets)
- [Řez modelu IFC rovinou řezu](topic:section-plane)
