---
title: Střechy: sklon pro každou stěnu, štíty, pultové střechy a roviny střech
summary: Nastavte každou stěnu pod střechou na šikmou, štítovou nebo žádnou, použijte předvolby valbové, štítové a pultové střechy, zvedněte střechu výškou pozednice, přidejte okapové prkno a podhled a nakreslete samostatné roviny střech tam, kde se automatická střecha nehodí.
keywords: změnit střechu, upravit střechu, vybraná střecha, vlastnosti střechy, zpět střecha, střecha, sklon, pro každou stěnu, štít, štítová hrana, pultová, přístřešek, valba, nárožník, hřeben, údolí, výška pozednice, pata, okapové prkno, podhled, okap, štítová hrana, přesah, rovina střechy, střešní rovina, vikýř, štítový vikýř, pultový vikýř
from: 096084a7
---

## Co budete dělat

Tvarujte střechu podle stěn pod ní. Každá stěna má vlastní nastavení, takže jedna střecha může být na přední straně valbová, na koncích štítová a u vyšší stěny vzadu přilehlá ke stěně bez přesahu. Pro přístřešek nebo jakoukoli plochu, kterou automatická střecha nezvládne, nakreslete rovinu střechy podle jejích rohů.

## Položení střechy

1. Na podlaží, jehož stěny nesou střechu, klikněte na {{ui:Střecha}}.
2. Napište **Sklon** (`6/12`, nebo stupně, například `30`) a **Přesah**.
3. Vyberte předvolbu: **Valbová střecha**, **Štíty na krátkých stranách**, **Štíty na dlouhých stranách**, nebo **Pultová** (strana nejblíže ukazateli je nízký okap; ostatní strany jsou štítové hrany).
4. Nechte **Okapové prkno a podhled** zaškrtnuté pro uzavřené okapy s okapovým prknem, nebo ho odškrtněte pro holou hranu střechy.
5. Klikněte dovnitř budovy: na plánu se ukážou okap, hřeben, valby a údolí. Klikněte.

Funguje libovolný obrys: tvary L, T, U a plus, šikmé rohy a výřezy. Valby, hřebeny a údolí se najdou tam, kde se roviny střechy setkávají.

## Jedna stěna najednou

Vyberte střechu (na podlaží nad stěnami klikněte dovnitř jejího obrysu) a podívejte se pod **Každá stěna** ve **Vlastnostech**. Ukázání na řádek označí tu stěnu na plánu.

- **Šikmá**: stěna má nad sebou šikmou rovinu střechy. Vedle ní napište její vlastní sklon, například `12/12` pro strmé konce u střechy se sklonem `6/12`.
- **Štítová hrana**: střecha končí nad touto stěnou svislou hranou, stěna je vyplněna až ke střeše a střecha přesahuje přes ni o **Přesah štítu**.
- **Žádná (končí zarovna)**: střecha u té stěny končí bez přesahu a bez štítové zdi, pro střechu přilehlou k vyšší stěně.

Seznam **Okraje** nahoře nastaví všechny stěny najednou; **Nastavit pro každou stěnu** se ukáže, když se stěny přestanou shodovat s předvolbou.

## Změna střechy, která už je položena

Vyberte střechu a **Vlastnosti** ukážou stejná nastavení jako nástroj Střecha: **Sklon**, **Přesah**, **Přesah štítu**, **Výška pozednice**, **Výška okapového prkna**, **Uzavřené okapy** a **Tloušťka**. Každá změna se hned ukáže na plánu i ve 3D, se stejnými kontrolami jako nástroj (sklon 80 stupňů nebo více se odmítne, stejně jako nastavení, z něhož nelze vytvořit střechu). Napište hodnotu a stiskněte {{key:Enter}}, nebo opusťte pole.

Každá změna je jeden krok zpět. Několik změn téhož pole za sebou (napište `6/12`, pak `7/12`, pak `8/12`) se spojí do jednoho kroku, takže jedno {{key:Ctrl}}+{{key:Z}} vrátí to, co měla střecha před celou řadou; změna jiného pole začne nový krok.

## Výška pozednice, okapové prkno a podhled

- **Výška pozednice** je místo, kde se roviny střechy setkávají s vnější stranou stěn, měřeno od podlahy podlaží. Nechte prázdné, aby střecha seděla na horní hraně stěn; napište větší hodnotu pro zvednutou patu.
- **Výška okapového prkna** je prkno podél okapů a nahoru po štítových hranách. Napište `0`, pokud žádné nechcete.
- **Uzavřené okapy** dají pod každý okap vodorovný podhled, od stěny k zadní straně okapového prkna.

Každá rovina se stýká se svou stěnou ve výšce pozednice, takže stěny s různými sklony drží jednu čáru pozednice a jejich okapy končí v různých výškách, jak by se to vyrobilo v krovu.

## Nakreslení roviny střechy

1. Na podlaží, na kterém rovina stojí, otevřete {{ui:Sestavení}} a vyberte {{ui:Rovina střechy}}.
2. Napište **Sklon** a, pokud nejde o horní hranu stěn, **Výšku okapu**.
3. Klikejte na rohy. První strana, kterou nakreslíte, je okap; rovina stoupá od něj k zbytku tvaru.
4. Klikněte znovu na první roh, dvakrát klikněte, nebo stiskněte {{key:Enter}}, čímž dokončíte. {{key:Esc}} rohy zahodí.

Rovina střechy nesleduje stěny. Vyberte ji na podlaží nad (klikněte dovnitř), abyste změnili její sklon, výšku okapu nebo tloušťku, nebo stiskněte {{key:Delete}}, abyste ji odstranili.

## Přidání vikýře

1. Zobrazte podlaží, na kterém je střecha.
2. Otevřete {{ui:Sestavení}} a vyberte {{ui:Vikýř}}.
3. V řádku možností vyberte **Druh vikýře** (**Štítový**, nebo **Pultový**) a nastavte **Šířku**, **Přední stěnu** (výšku přední stěny od horní hrany střechy po okap vikýře), **Sklon** a **Přesah**.
4. Klikněte na plochu střechy tam, kam přijde střed přední strany vikýře.

BimCraft postaví přední stěnu, dvě boční lícní zdi a střechu vikýře a vede ji zpět, dokud nenarazí na střechu. Štítový vikýř má dvě roviny, které se setkávají v hřebeni. Pultový vikýř má jednu rovinu, která musí být méně strmá než střecha. Střecha pod vikýřem se vyřízne. Vikýř se při pohybu stěn pohybuje spolu se střechou.

Vyberte jej, abyste změnili jeho druh, šířku, přední stěnu, sklon nebo přesah ve **Vlastnostech**. {{key:Delete}} jej odstraní a střechu znovu uzavře. Musí se vejít na jednu plochu střechy, mimo valby, údolí a hřeben; a vikýře přijímají jen střechy vytvořené nástrojem {{ui:Střecha}}, ne roviny střech kreslené ručně. Ještě není hotovo: okno v přední straně vikýře a vikýře na ručně kreslených rovinách střech.

## Co se ukládá

Střechy jsou střechy IFC složené z jedné desky na každou rovinu, ze štítových stěn, jednoho okapového prkna a jednoho podhledu. Střecha nese délky hřebene, valby, údolí, okapu a štítové hrany a své plochy pro výkazy výměr. Rovina střechy je střecha IFC s jednou deskou.

:::tip
Zpět vrátí jakoukoli změnu střechy v jednom kroku, včetně předvolby, která mění každou stěnu.
:::
