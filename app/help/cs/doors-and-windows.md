---
title: Dveře a okna
summary: Umisťujte dveře a okna do nakreslených stěn: ukažte na stěnu, uvidíte směr otevírání a vzdálenosti k rohům, klikněte; otvor ve stěně se vyřízne sám.
keywords: dveře, okno, otvor, otevírání, závěs, strana, otočit, posuvné dveře, kapsové dveře, garážová vrata, dvoukřídlé dveře, křídlové okno, posuvné okno, výklopné okno, pevné okno, parapet, překlad, skládací dveře, dveře do skříně, francouzská okna, stodolové dveře, bočnice, vchodové dveře, markýza, výkladní okno, nadsvětlík
from: 4d8ac009
---

## Co provedete

Umístěte dveře a okna do stěn, které jste nakreslili ([Kreslení stěn](topic:draw-walls)). Ukažte na stěnu a dveře nebo okno ukážou, kam by šly, kterým směrem se otevírají a jak daleko jsou od každého rohu. Klikněte a otvor se v půdorysu i ve 3D vyřízne ze stěny sám.

## Umístění dveří

1. Při zapnutém {{ui:Kreslení}} klikněte na {{ui:Dveře}} (nebo stiskněte {{key:D}}).
2. Vyberte typ: **Jednokřídlové dveře**, **Dvoukřídlé dveře**, **Posuvné dveře**, **Kapsové dveře**, **Garážová vrata**, **Skládací dveře do skříně**, **Francouzské dveře**, **Stodolové dveře (na stěně)** nebo **Vchodové dveře s bočnicemi**. Jejich obvyklá velikost vyplní **Š** a **V**; vyberte jinou ze seznamu velikostí vedle nich, nebo zadejte jiné, například `2'-8"` nebo `800`. Seznam nabízí také dveřní rodiny tohoto modelu (viz [Rodiny a jejich velikosti](topic:families)).
3. Ukažte na stěnu. Symbol dveří se pohybuje podél stěny za ukazatelem a na půdorysu se ukáže vzdálenost od každého konce té plochy stěny.
4. Dveře se otevírají na tu stranu stěny, na které je ukazatel. Stiskněte {{key:H}} (nebo klikněte na {{ui:Otočit}}), aby závěsy byly na druhém konci.
5. Klikněte. Dveře se umístí a nástroj zůstane zapnutý pro další. Ukažte na střed stěny a dveře se vycentrují samy.

Chcete-li je umístit přesně v určité vzdálenosti, ukažte na stěnu blízko rohu, od kterého měříte, zadejte vzdálenost (například `2'` nebo `600`) a stiskněte {{key:Enter}}. Vzdálenost jde od bližšího konce líce stěny k hraně dveří.

## Umístění okna

1. Klikněte na {{ui:Okno}} (nebo stiskněte {{key:N}}).
2. Vyberte typ: **Pevné okno**, **Jednoduché závěsné okno**, **Dvojité závěsné okno**, **Křídlové okno**, **Posuvné okno**, **Výklopné okno**, **Výkladní okno** nebo **Nadsvětlík**, a jeho **Š**, **V** a **Parapet** (výška spodní hrany okna nad podlahou).
3. Ukažte na stěnu a klikněte, nebo zadejte vzdálenost a stiskněte {{key:Enter}} jako u dveří. Okno sedí na vnější straně stěny.

## Přesun, otočení, smazání

- S zapnutým {{ui:Vybrat}} přetáhněte dveře nebo okno podél stěny. Přetažením na jinou stěnu se přesunou tam.
- {{key:Delete}} smaže vybrané dveře a okna; stěna se uzavře.
- Přesun nebo smazání stěny přesune nebo smaže to, co je v ní. Když se začátek stěny posune podél vlastní přímky, její dveře a okna si zachovají své místo.
- {{ui:Zpět}} a {{ui:Znovu}} vrátí a zopakují každé umístění, přesun nebo smazání.

## Co je odmítnuto

- **Nevejde se do té stěny.** Dveře nebo okno jsou širší než stěna nebo by trčely přes její konec. Zkuste kratší šířku nebo delší stěnu.
- **Je vyšší než stěna.** Parapet plus výška je nad horní hranou stěny.

## Co se ukládá

Každé dveře nebo okno je dveře nebo okno IFC s velikostí, způsobem otevírání (například jednokřídlé dveře otevíravé vlevo), svým typem velikosti (jeden typ pro každou velikost své rodiny), `Pset_DoorCommon` nebo `Pset_WindowCommon` a základními množstvími; vyplní otvor IFC ve své stěně. Čistá plocha stěny a její objem otvor vynechávají. Jiné BIM programy je otevřou jako dveře ve stěně.

## Dobré vědět

- Půdorys ukazuje dveře otevřené na 90° s jejich směrem otevírání, posuvné dveře jako dvě křídla, kapsové dveře zasouvající se do stěny, garážová vrata jako čárkovanou čáru nad hlavou a okna s rámem a čarami skla.
- Šířka je celková šířka rámu; křídlo dveří je šířka mínus obě ostění.
- Kopírování nakreslených dveří a oken zatím není hotovo: umístěte další.

## Suterénní únikové okno a šachta

Vyberte **Suterénní únikové okno se šachtou** v seznamu typů oken. Začne jako křídlové okno 36 × 48 in s parapetem 36 in nad úrovní. Šachta je na vnější straně stěny, s nejméně 48 in volné šířky, 36 in výsahu a dnem 6 in pod parapetem. V půdorysu se zobrazí jako čárkované čáry a ve 3D jako tři strany bez horního krytu. Šachta je součástí těla IFC okna, takže uložení, přesun, změna velikosti nebo smazání okna ji táhne s sebou. Změna velikosti zachová nejméně 6 in vedle každého ostění.

Jde o výchozí hodnoty modelování, ne o osvědčení souladu s předpisy pro únik. Skutečný volný průchod výrobce, místní požadavky, terén, odvodnění a případný potřebný žebřík zkontrolujte zvlášť. Hloubka a výška šachty jsou přednastavené rozměry; neřídí se terénem.
