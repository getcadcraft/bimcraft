---
title: Otevřete model IFC a rozhlédněte se ve 3D
summary: Otevřete soubor IFC, otáčejte, posouvejte a přibližujte a použijte Přizpůsobit, Shora, Zepředu a Z boku, abyste se zorientovali.
keywords: ifc, 3d, otáčení, posun, zoom, přizpůsobit, pohled shora, pohled zepředu, pohled z boku, navigace, kostka pohledu, kamera
from: 68b460dd
---

## Co uděláte

Otevřete model IFC, pohybujte se po něm ve 3D a přejděte na standardní pohledy. Asi pět minut.

Potřebujete soubor `.ifc`. Většina programů BIM jej exportuje; v Revitu je to **File > Export > IFC**. Viz [Dostat projektový soubor do 3D přes IFC](topic:rvt-to-ifc).

## Postup

1. Klikněte na {{ui:Vybrat soubor}} (nebo na oblast pro přetažení vlevo nahoře).
2. Vyberte svůj soubor `.ifc` a potvrďte.
3. Počkejte, až stavový řádek dokončí. Poprvé ukáže "Starting the IFC engine…", pak "Reading the model…" a "Building geometry: … of … elements".
4. Podívejte se na model: otevře se ve třech čtvrtinách pohledu, přizpůsobený obrazovce.
5. Klikněte na {{ui:Shora}} na panelu nástrojů nad modelem, abyste se podívali přímo dolů.
6. Klikněte na {{ui:Zepředu}}, abyste viděli přední stranu, pak na {{ui:Z boku}}, abyste se podívali z boku.
7. Klikněte na {{ui:Přizpůsobit}}, nebo stiskněte {{key:F}}, a vrátíte se do pohledu ve třech čtvrtinách na celý model.

## Co byste měli vidět

- Model uprostřed, s tenkými tmavými hranami pro vzhled jako výkres.
- Panel {{ui:Soubor}} vlevo: název souboru, velikost, schéma IFC (například IFC2X3 nebo IFC4), název projektu, fázi, program, ze kterého byl exportován, autora, datum exportu a počty prvků a trojúhelníků.
- Seznamy {{ui:Podlaží}} a {{ui:Prvky}} pod ním.
- Stavový řádek: "Opened *file name*: *n* elements in *s* s".

## Pohyb

:::mouse
| Akce | Postup |
|---|---|
| Otáčet | Táhněte levým tlačítkem |
| Posouvat | Táhněte pravým tlačítkem, nebo podržte {{key:Shift}} (nebo {{key:Mod}}) a táhněte levým tlačítkem |
| Přibližovat | Otočte kolečkem, nebo táhněte prostředním tlačítkem |
| Zobrazit vše | Stiskněte {{key:F}}, nebo klikněte na {{ui:Přizpůsobit}} |
:::

:::mac mouse
Na touchpadu: táhněte jedním prstem, který je stisknutý, pro otáčení; podržte {{key:Shift}} nebo {{key:Mod}} a táhněte pro posun; přibližujte posunem dvěma prsty nebo roztažením. Klik dvěma prsty je pravé tlačítko a můžete jím táhnout pro posun, ale {{key:Shift}} a tažení je snazší.
:::

:::touch
| Akce | Postup |
|---|---|
| Otáčet | Táhněte jedním prstem |
| Přibližovat | Roztáhněte dva prsty |
| Posouvat | Posuňte dva prsty společně |
| Zobrazit vše | Klepněte na {{ui:Přizpůsobit}} |
:::

Otáčení se vždy točí kolem bodu uprostřed modelu. Posun tento bod přesouvá, takže po dlouhém posunu může být otáčení mimo střed: kliknutím na {{ui:Přizpůsobit}} jej obnovíte.

## Stínovaný, s hranami, nebo drátový

Tři malá tlačítka těsně nad kostkou pohledu určují, jak se model kreslí: {{ui:Stínovaný}}, {{ui:Stínovaný s hranami}} (výchozí) a {{ui:Drátový}}. Jsou to také příkazy (Pohled v nabídkách a v seznamu pro přizpůsobení), takže mohou mít vlastní klávesy. {{ui:Půdorys}}, {{ui:Rozdělit}} a {{ui:3D}} jsou v řádku {{ui:Pohled}} na panelu nástrojů.

## Časté chyby

- **Očekávání pojmenovaných pohledů.** BimCraft má čtyři pevné pohledy ({{ui:Přizpůsobit}}, {{ui:Shora}}, {{ui:Zepředu}}, {{ui:Z boku}}), kostku pohledu v pravém dolním rohu a volné otáčení. Pohledy neukládá.
- **Hledání půdorysů a řezů.** V této verzi nejsou 2D půdorysy ani řezné boxy. Model řežte jednou rovinou {{ui:Řez}} ([Řez modelu IFC rovinou](topic:section-plane)), nebo vypněte podlaží: [Zobrazení a skrytí podlaží, prostorů a hran](topic:storeys-and-spaces).
- **Otevření projektového souboru a očekávání 3D.** Projektový soubor se otevře jako karta souboru. Nejdřív exportujte IFC.
- **Otevření `.ifczip`.** Rozbalte jej, nebo exportujte prostý `.ifc`.
- **Velmi velký model zpomaluje kartu nebo ji shodí.** Viz [Prohlížeče, zařízení a paměť](topic:platforms).

## Dále

[Výběr prvku a čtení jeho vlastností](topic:inspect-element).
