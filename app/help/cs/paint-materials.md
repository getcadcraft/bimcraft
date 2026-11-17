---
title: Malování materiálů na stěny, podlahy a střechy
summary: Dejte prvkům materiál, například cihlu, obklad, šindel, dřevo nebo dlažbu, na celý prvek nebo na jednu stranu; uloží se do IFC a zobrazí se ve vykreslených obrázcích.
keywords: malovat, malování, materiál, materiály, povrch, povrchová úprava, textura, cihla, obklad, šindel, střešní krytina, dřevo, kámen, dlažba, beton, omítka, tráva, štěrk, sklo, kov, strana stěny, vnitřek, vnější strana, povrch podlahy, místnost, styl povrchu
from: fbfed676
---

{{ui:Malovat}} na panelu nástrojů otevře knihovnu materiálů nad 3D pohledem: cihla a tvárnice, obklad, krytiny, dřevo, kámen, dlažba, beton, omítka, terén, sklo a kov.

## Malování prvků

1. Klikněte na {{ui:Malovat}}.
2. Klikněte na materiál.
3. Klikněte na prvky v 3D pohledu. Každé kliknutí namaluje prvek, na který jste klikli.

Chcete-li malovat více prvků najednou, nejprve je vyberte (kliknutím, {{key:Ctrl}}+klik nebo [vyhledáním](topic:find)) a poté klikněte na materiál: každý vybraný prvek ho převezme jedním krokem.

Prvek ihned ukáže barvu materiálu v 3D pohledu. Jeho textura se zobrazí ve [vykresleném obrázku](topic:render). {{key:Esc}} nebo {{ui:Zavřít}} malování ukončí.

## Malování jedné strany

Zvolte {{ui:Jen klikanou stranu}} a poté klikněte na stranu, kterou chcete: vnější stranu stěny v obkladu a její vnitřek v jiném povrchu, horní stranu podlahy ve dřevě a spodní stranu ponechte beze změny. Zbytek prvku si svůj materiál ponechá.

Stranu určují vlastní směry prvku, takže zůstane stejnou stranou, i když prvek posunete nebo otočíte.

Chcete-li malovat podlahy místnost po místnosti, dejte každé místnosti vlastní podlahu ({{ui:Kreslení}} › {{ui:Podlaha}} › **Tato místnost**, viz [Místnosti, podlahy, stropy a střechy](topic:floors-and-roofs)), a poté namalujte horní stranu každé podlahy.

## Odebrání materiálu

Klikněte na pruhovaný vzorek ({{ui:Bez materiálu}}) a poté klikněte na prvek. Odstraní se každý materiál na něm, včetně materiálů na stranách.

## V souboru

Malování mění IFC (každý krok je jeden úkon, {{key:Ctrl+Z}} ho vrátí zpět) a zůstává čistým IFC:

- každý namalovaný prvek dostane sadu vlastností `CadCraft_Render`, která pojmenovává jeho materiál, a jednu vlastnost pro každou namalovanou stranu;
- jeho těleso dostane styl povrchu s barvou materiálu, takže ji ostatní BIM programy zobrazí. V IFC4 styl uvádí i texturu.

Když BimCraft přetvoří stěnu, kterou jste namalovali (třeba posunete její konec), stěna si zachová svůj materiál a barvu v BimCraftu, na obrázcích i v jiných programech.

:::note
Textury kreslí přímo BimCraft: fungují offline a jsou volně použitelné pro cokoli (CC0). Vlastní obrazové textury zatím nejsou hotové.
:::

## Textury v 3D pohledu

Namalovaná cihlová stěna ukáže své cihly, dřevěná podlaha svá prkna, ve skutečné velikosti, jakmile je barva nanesena. Zrušte zaškrtnutí u **Zobrazit textury ve 3D pohledu** v paletě Malovat, pokud chcete vidět ploché barvy (velmi velký model je vypne sám a řekne to). Barvení podle vlastnosti vždy ukazuje své vlastní barvy. Textury kreslí program, takže se nic nestahuje, a vykreslení i soubor glTF je nesou tak či onak.
