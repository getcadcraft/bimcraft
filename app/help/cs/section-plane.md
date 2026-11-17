---
title: Řez IFC modelem řeznou rovinou
summary: Řežte 3D model shora, zepředu nebo z boku, nebo ponechte jen to, co je uvnitř řezného kvádru či objemu z více kvádrů se šikmými stěnami, abyste viděli dovnitř. Řez posouvejte tažením nebo psaním, otočte jej a vyberte, co řez ukazuje.
keywords: řez, řezná rovina, řezný kvádr, úchyty, tažení, okraj, výběrový kvádr, ořezový kvádr, řez, ořezání, půdorys, pohled, uvnitř, interiér, otočit, odsazení, řezný objem, schodovitý řez, L-tvar, náklon, šikmý řez, šikmá rovina, dodatečná rovina
from: 6315e71a
---

## Co budete dělat

Prořízněte model IFC jednou rovinou a podívejte se dovnitř: shora pro půdorys, nebo zepředu či z boku pro řez budovou.

## Postup

1. Otevřete model IFC. Viz [Otevřete model IFC a rozhlédněte se v 3D](topic:open-ifc-model).
2. Klikněte na {{ui:Řez}} v panelu nástrojů, nebo stiskněte {{key:X}}. Model se přeřízne v polovině výšky a pod panelem nástrojů se objeví lišta.
3. Vyberte, odkud řezat: {{ui:Shora}}, {{ui:Zepředu}} nebo {{ui:Z boku}}. Zepředu a Z boku také otočí pohled, aby se na řez díval.
4. Posuňte řez: přetáhněte posuvník **Odsazení**, nebo zadejte vzdálenost v metrech do pole a stiskněte {{key:Enter}}. Můžete zadat i milimetry, například `1200 mm`.
5. Klikněte na {{ui:Otočit}}, chcete-li ponechat druhou stranu řezu.
6. Klikněte na prvek v řezu a zobrazte jeho vlastnosti.
7. Klikněte na {{ui:Vypnuto}}, znovu na {{ui:Řez}}, nebo stiskněte {{key:X}}, čímž řez zrušíte.

## Řezný kvádr

Kliknutím na {{ui:Kvádr}} v téže liště ponecháte jen to, co je uvnitř kvádru. U každé z {{ui:X}}, {{ui:Y}} a {{ui:Z}} jsou dva posuvníky: kde kvádr začíná a kde končí, v metrech od okraje modelu. Hodnoty se zobrazují vedle nich.

- {{ui:Kvádr kolem výběru}} přizpůsobí kvádr vybraným prvkům a přiblíží na ně. Nechá 300 mm volného místa na každé straně; změníte to v {{ui:Nastavení}} › {{ui:BimCraft}} › {{ui:Rezerva kolem výběru}}.
- Jsou-li vybrány prvky, {{ui:Zobrazit}} › {{ui:Řezový kvádr kolem výběru}} nebo {{key:Shift+X}} udělá totéž jedním krokem, i když žádný řez není zapnut.
- **Úchyty** na kvádru ho posouvají myší: přetáhněte čtverec uprostřed plochy a posunete tu plochu, uprostřed hrany a posunete dvě plochy, které se tam stýkají, nebo roh a posunete tři. Posuvníky je následují. V {{ui:Shora}} roh posouvá kvádr v půdorysu, v {{ui:Zepředu}} nebo {{ui:Z boku}} v pohledu.
- {{ui:Celý model}} rozevře kvádr zpět na celý model.
- {{ui:Shora}}, {{ui:Zepředu}} nebo {{ui:Z boku}} se vrátí k jediné rovině.

## Objem z více kvádrů, nakloněné plochy a dodatečné roviny

Kvádr není vždy tvar, který potřebujete: schodovitý řez, křídlo tvaru L nebo řez podél stěny, která není kolmá k mřížce.

1. V {{ui:Kvádr}} klikněte na {{ui:Přidat kvádr}}. Řez nyní ponechá to, co je uvnitř **kteréhokoli** z kvádrů, takže dva kvádry tvoří schodovitý nebo L-tvarý objem. Seznam vedle říká, který kvádr posuvníky mění ({{ui:Kvádr 1}}, {{ui:Kvádr 2}}…); {{ui:Odebrat tento kvádr}} odstraní vybraný. Objem má nejvýše 8 kvádrů.
2. Otevřete {{ui:Náklon a roviny}} a upravte vybraný kvádr:
   - Vyberte {{ui:Plocha}} a zadejte, jak daleko se nakloní na každou stranu, ve stupních (až 80). Plocha se otáčí kolem svého středu; ostatní plochy zůstávají tam, kam je nastavily posuvníky. {{ui:Kolmo}} ji vrátí zpět.
   - {{ui:Přidat rovinu}} přeřízne kvádr další rovinou. {{ui:Plochy}} je směr, kterým odvrácená strana čelí, ve stupních od X k Y; {{ui:Sklon}} je, jak moc se to stáčí nahoru (0 pro svislou rovinu, 90 pro vodorovnou); {{ui:Odsazení}} je vzdálenost roviny od středu kvádru v metrech. × ji odstraní. Kvádr má nejvýše 6 dodatečných rovin.
3. Kde objem protíná pevná tělesa, řezné plochy se vyplní jako dřív, i tam, kde se dva kvádry stýkají ve schodu.

:::tip
Pokud obrys zmizí a nic nezbyde, náklony nebo roviny nenechají uvnitř toho kvádru nic; lišta to oznámí. Nakloňte plochu zpět nebo změňte odsazení roviny.
:::

## Budova natočená na pozemku

Mnohé modely stojí vůči osám souboru pod úhlem (skutečný sever, sdílené souřadnice). Když stěny běží pod úhlem, nový řez začíná kolmo k budově: {{ui:Zepředu}}, {{ui:Z boku}} a kvádr běží podél jejích vlastních stěn a {{ui:Kolmo k budově}} v liště řezu je zapnuto. Klikněte na něj pro osy modelu a znovu pro návrat (stavový řádek říká, o kolik je budova natočená). S **Nastavení › BimCraft › Budova natočená na pozemku › Tak, jak je umístěna na pozemku** začínají řezy a pohledy místo toho na osách modelu. Viz [Nastavení](topic:settings).

## Co byste měli vidět

- **Shora** ponechá to, co je pod řezem, takže se díváte dolů do místností. Odsazení se měří nahoru od spodku modelu.
- **Zepředu** ponechá to, co je za řezem, pohled zepředu; **Z boku** ponechá to, co je za ním, pohled z boku. Odsazení se měří od přední nebo boční strany modelu.
- Tenký barevný obrys ukazuje, kde rovina je.
- Kde rovina protíná stěnu, desku nebo jiné těleso, je řezná plocha vyplněna tmavou barvou jako nakreslený řez. {{ui:Výplň}} v liště ji zapíná a vypíná.
- Kostka pohledu v pravém dolním rohu otočí model, abyste na řez viděli z libovolné strany.
- Výběr klikem vybere to, co vidíte: vše, co je odříznuto, nelze vybrat.

## Časté chyby

- **Nic se nezměnilo.** Řez může být nad střechou nebo mimo model. Přetáhněte posuvník nebo zadejte menší odsazení.
- **Odsazení skočilo zpět.** Vzdálenost za modelem se přesune na jeho konec a stavový řádek to oznámí.
- **Problém (BCF) ukazuje jen část mého objemu.** Problém uchová jeden kvádr s jeho nakloněnými plochami a rovinami: první kvádr objemu. Lišta to oznámí, když problém vytvoříte.
- **Řez je dutý.** {{ui:Výplň}} v liště je vypnutá: klikněte na ni, aby se vyplnily řezné plochy stěn, desek a dalších těles.
- **Vyplněný řez vypadá zrnitě nebo mu chybí kus.** Vyplňování vyžaduje uzavřená tělesa; prvek, jehož tvar v souboru není uzavřený (jediný list, listí stromu), zůstane nevyplněný, místo aby byl přemalován. Prvek složený z částí různých barev (rám a jeho sklo) se vyplní, když se jeho části těsně stýkají.
- **Kde je lišta řezu?** Je nahoře v 3D pohledu, který řeže: v polovině 3D v {{ui:Rozdělit}}, a pod panelem kreslení, je-li {{ui:Půdorys}} samotný. V krátkém pohledu se posouvá.

## Dál

- [Zobrazení a skrytí podlaží, prostorů a hran](topic:storeys-and-spaces)
- [Výkres DWG nebo DXF ve 3D](topic:dwg-in-3d) — výkresy ve 3D mají tutéž řeznou rovinu.
