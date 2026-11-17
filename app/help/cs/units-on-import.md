---
title: Jednotky při importu: soubor uvádí své jednotky, nebo se nejprve zeptáme
summary: Když soubor, který přinášíte, uvádí své jednotky, BimCraft je použije a oznámí to. Když je neuvádí, BimCraft se zeptá dříve, než cokoli umístí, a zapamatuje si vaši odpověď pro tento soubor.
keywords: jednotky, import, otevřít, OBJ, STL, DWG, DXF, IFC, mračno bodů, položka knihovny, milimetry, metry, palce, stopy, měřítko, špatná velikost, příliš velký, příliš malý, 1000krát, zeptat se, zapamatováno
from: f044e9bc
---

## Co provedete

Přineste soubor a ujistěte se, že se načte ve správné velikosti.

## Postup

1. Otevřete nebo přidejte soubor obvyklým způsobem: {{ui:Otevřený}}, {{ui:Soubory}} v knihovně, {{ui:Mračna bodů}}, nebo Sestavit › Z výkresu.
2. Pokud soubor uvádí své jednotky, nic se neptá. Stavový řádek říká, které jednotky soubor uvádí.
3. Pokud je neuvádí, zobrazí se dialog s položkou **Jednotky** souboru. Vyberte, čemu odpovídá jedna jednotka v souboru, a klikněte na {{ui:Použít tyto jednotky}}. Dokud neodpovíte, nic se neumístí.
4. {{ui:Zrušit}} (nebo {{key:Esc}}) nepřinese nic.

## Které soubory uvádějí své jednotky

- **IFC**: uvádí svou délkovou jednotku a "Otevřeno" říká, která to je. IFC, který žádnou neuvádí, se před otevřením zeptá; vaše odpověď se zapíše do modelu, takže soubor ji uvádí po uložení.
- **DWG a DXF**: jednotky vložení výkresu. Výkres bez nich se zeptá (soubory v knihovně, Sestavit › Z výkresu, terén z vrstevnic).
- **Seznamy bodů** pro terén: žádné jednotky neuvádějí. Zeptá se vás.
- **Mračna bodů**: LAS a LAZ se souřadnicovým systémem, E57, PTX a PLY své jednotky uvádějí. U ostatních se zeptáme.
- **OBJ a STL**: jednotky nikdy neuvádějí. Zeptá se vás.
- **glTF a GLB**: metry, podle pravidla samotného formátu.
- **Obrázky**: vlastní velikost nemají. Obrázek se přizpůsobí pohledu a jeho velikost nastavíte pomocí **Měřítko podle dvou bodů**. Zadaná velikost se pro daný soubor zapamatuje: při novém umístění se načte v této velikosti a stavový řádek to oznámí.
- **Doplněk Mračna bodů**: zeptá se, když sestavujete mrak, jehož soubor neuvádí jednotku, a čísla mraku označí jednotkou, kterou nese.

## Dobré vědět

- Odpověď se pro daný soubor (jeho název, velikost a datum) zapamatuje na tomto počítači ve všech aplikacích CadCraft. Až se stejný soubor příště načte, nezeptáme se znovu a stavový řádek oznámí, že byly použity zapamatované jednotky.
- Chcete-li být znovu dotázáni: paleta příkazů ({{key:Mod+K}}) › **Znovu se zeptat na jednotky importovaných souborů**.
- Seznam jednotek, který import už má (Jednotky v knihovně, Jednotky v liště mračna, Jednotky výkresu v Sestavit › Z výkresu), jednotky i tak změní dodatečně. Seznam Jednotky nástroje terénu je nyní jen výchozí hodnotou otázky.
