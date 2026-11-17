---
title: Nabídky, klávesy a myš
summary: Vyberte styl nabídek, který odpovídá tomu, jak už pracujete, přidejte libovolnému příkazu vlastní klávesu, přesouvejte příkazy mezi nabídkami a nastavte, co dělá kolečko myši a každé tlačítko myši.
keywords: styl nabídek, nabídky, panel nabídek, pás karet, příkazový řádek, klávesové zkratky, klávesy, přizpůsobit, přemapovat, myš, kolečko, obrátit, směr zoomu, prostřední tlačítko, posun, otáčení, dvoupísmenné klávesy, export, import, přepnutí, známé
from: a424e836
---

Příkazy v BimCraftu jsou stejné, ať k nim přistoupíte jakkoli. **Styl nabídek** určuje jen to, kde se nacházejí na obrazovce, jak se jmenují a kterými klávesami se spouštějí, takže si můžete zachovat své zvyklosti. Zvolte jej v {{ui:Nastavení}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Nabídky, klávesy a myš}}; změna se projeví okamžitě a tento prohlížeč si ji zapamatuje.

## Pět stylů

| Styl | Co získáte |
|---|---|
| {{ui:CadCraft}} | Vlastní panel nástrojů a klávesy BimCraftu ({{key:W}} stěna, {{key:D}} dveře, {{key:N}} okno, {{key:X}} řez, {{key:F}} přizpůsobit). Výchozí styl. |
| {{ui:Návrh interiéru}} | Panel nabídek (Soubor, Úpravy, Sestavení, Knihovna, 3D, CAD, Nástroje, Pohled) nad řadou nástrojů pro stavbu, jak je rozvrhují programy pro návrh bytů. Stejné jednoduché klávesy plus {{key:Mod+L}} pro knihovnu, {{key:F9}} pro 3D pohled, {{key:F10}} pro půdorys a {{key:F11}} pro oba. |
| {{ui:Pás karet BIM}} | Karty velkých tlačítek (Architektura, Vložit, Anotace, Upravit, Pohled, Výstup) s nabídkou Soubor a rychlými tlačítky vpravo. Klávesy o dvou písmenech: {{key:W}} pak {{key:A}} pro stěnu, {{key:D}} {{key:R}} dveře, {{key:W}} {{key:N}} okno, {{key:S}} {{key:C}} řez, {{key:Z}} {{key:F}} přizpůsobit. Prostřední tlačítko posouvá; {{key:Shift}} a prostřední tlačítko otáčejí. |
| {{ui:Klasické kreslení}} | Malý pás karet a příkazový řádek pro ty, kdo píšou příkazy: WALL, DOOR, WINDOW, ROOF, U (zpět), ZOOM, SECTION, PLOT, INSERT, HELP. Začněte psát kdekoli a písmena půjdou na příkazový řádek; {{key:Enter}} spustí, {{key:Enter}} na prázdném řádku zopakuje poslední příkaz, {{key:Esc}} ho vymaže. |
| {{ui:Prohlížeč}} | Pro otevírání a kontrolu modelů místo jejich kreslení: nabídky {{ui:Soubor}}, {{ui:Pohled}}, {{ui:Zobrazit}}, {{ui:Kontrolovat}} a {{ui:Úpravy}} nad řadou nástrojů pro prohlížení (přizpůsobit, shora, zepředu, ze strany, řez, měřit, skrýt, izolovat, průhled, zobrazit vše, procházka). Nástroje pro stavbu čekají v nabídce {{ui:Model}} na konci. Stejné klávesy jako ve vlastním stylu BimCraftu. |

Nabídky a pásy karet se zobrazí, jakmile otevřete model nebo začnete novou stavbu; dříve otevřete soubory a začnete stavby v panelu vlevo.

:::tip
Klávesa, která patří k vlastnímu rozvržení BimCraftu, ale ne ke zvolenému stylu, nic neudělá a stavový řádek uvede, kam její příkaz přešel ("V Pás karet BIM je Řez na SC"). Klávesy {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} a šipky mají vždy svůj význam a běžící nástroj si zachovává vlastní klávesy: {{key:R}} a {{key:Tab}} při umisťování, {{key:W}} {{key:A}} {{key:S}} {{key:D}} při procházení, {{key:H}} u nástrojů dveří a oken, čísla při zadávání délky.
:::

## Přizpůsobte si to

1. Vyberte styl nejblíže tomu, co chcete, a klikněte na {{ui:Přizpůsobit…}}.
2. Na {{ui:Klávesy a nabídky}} najděte příkaz (pomůže vyhledávací pole). Klikněte na {{ui:Přidat klávesu}} a stiskněte klávesu, nebo dvě klávesy za sebou pro klávesu o dvou písmenech. Kliknutím na klávesu ji odeberete.
3. U panelu nabídek nebo pásu karet {{ui:Kde je}} přesune příkaz do jiné nabídky nebo panelu, nebo na {{ui:Jen klávesy}}.
4. Na {{ui:Myš}} nastavte kolečko, tlačítka, která posouvají půdorys, a co dělá každé tlačítko v 3D pohledech.
5. Dejte mu název a klikněte na {{ui:Uložit}}.

Uložení vestavěného stylu vytvoří vaši vlastní kopii ("Můj Návrh interiéru"); vestavěný styl se nikdy nemění. Klávesa přiřazená dvěma příkazům nebo klávesa, která by se spustila dřív, než by šlo napsat klávesu o dvou písmenech, se zobrazí červeně a před uložením ji musíte opravit.

## Myš

- **Kolečko myši**: {{ui:Posun kolečkem nahoru přibližuje}} (výchozí) nebo {{ui:Posun kolečkem nahoru oddaluje}}, a jak rychle. Gesto štípnutí na touchpadu vždy zoomuje tak, jak se pohybují vaše prsty.
- **Posun půdorysu a výkresů**: libovolným z levého, prostředního a pravého tlačítka. {{key:Space}} a tažení také posouvá; tažení levým tlačítkem posouvá jen tam, kde by kliknutí nic nevybralo ani nekreslilo.
- **Tažení v 3D pohledech**: {{ui:Každý pohled vlastní}} ponechá tlačítka BimCraftu (levé otáčí, pravé posouvá). Nebo nastavte každé tlačítko na otáčení, posun, zoom nebo nic; {{key:Shift}} s tlačítkem zamění otáčení a posun. Kliknutí bez tažení stále vybírá.

## Vezměte si to s sebou

{{ui:Exportovat}} uloží používaný styl jako malý soubor `.ccinput.json`; {{ui:Importovat…}} jej přidá, ze jiného počítače nebo od kolegy. Importovaný soubor může odkazovat jen na vlastní příkazy BimCraftu: cokoli dalšího v něm (příkaz, který tato verze nemá, klávesa, která tu nefunguje) se vynechá a spočítá se ve stavovém řádku. {{ui:Smazat tento styl}} odstraní jeden z vašich vlastních.

:::note
Tato nastavení zůstávají v tomto prohlížeči. {{ui:Používat tento styl ve všech aplikacích}} pod kartami stylů způsobí, že se každá aplikace otevře v odpovídajícím stylu (vlastní panel nástrojů, panel nabídek, pás karet nebo Klasické kreslení; {{ui:Prohlížeč}} patří jen BimCraftu a jinde nemá protějšek), se změnami, které jste v každé aplikaci provedli; aplikace bez odpovídajícího stylu si ponechá vlastní. Volba jiného stylu v jedné aplikaci změní jen tuto aplikaci.
:::

Související: [Klávesnice a myš](topic:keyboard) · [Nastavení BimCraftu](topic:settings) · [Přechod z jiných BIM a kreslicích programů](topic:coming-from)
