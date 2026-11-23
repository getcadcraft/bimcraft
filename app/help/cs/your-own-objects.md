---
title: Přineste vlastní objekty a soubory rodin do Knihovny
summary: Čtěte soubory rodin (.rfa) a soubory IFC, DWG, DXF, glTF nebo OBJ na kartě Knihovna, umisťujte je jako jakoukoli položku knihovny a uchovávejte je v Mých objektech, soukromém seznamu, který vidíte jen vy.
keywords: rfa, rodina, rodiny, knihovna rodin, vlastní objekty, moje objekty, soukromé objekty, soukromá knihovna, import objektů, obsah výrobce, bim objekty, objekt ifc, gltf, obj, blok dwg, uložit, přepnout, migrovat
from: 886261f8
---

## Co budete dělat

Přinesete si objekty, které už máte, do BimCraft: knihovnu rodin z Revitu, IFC nebo DWG ke stažení od výrobce, síť z jiného modeláře. Soubor načtete na kartě {{ui:Knihovna}}, objekt umístíte do modelu jako řádný prvek IFC a, pokud ho budete chtít později znovu, uložíte ho do {{ui:Moje objekty}}.

## Postup

1. Otevřete model IFC, nebo založte novou budovu.
2. Klikněte na kartu {{ui:Knihovna}} vedle {{ui:Vlastnosti}}.
3. Klikněte na {{ui:Soubory…}}, potom na {{ui:Vybrat soubor…}}. Vyberte jeden soubor nebo více najednou: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` nebo `.csv`. Nebo klikněte na {{ui:Vyberte složku…}}, abyste načetli celou složku a složky v ní (až 200 souborů najednou).
4. Klikněte na kartu, abyste viděli, co bylo načteno: náhled půdorysu, název, výrobce a model, velikosti a poznámky.
5. Klikněte na {{ui:Umístit do půdorysu}} nebo {{ui:Umístit do modelu}}, abyste jej umístili.
6. Chcete-li jej používat v dalších projektech, klikněte na {{ui:Uložit do mých objektů}}. Když je načteno více souborů, {{ui:Uložit vše do mých objektů}} uloží všechny najednou.
7. Později objekty najdete kliknutím na {{ui:Moje objekty}} na kartě Knihovna. Umisťují se, vyměňují a aktualizují jako jakákoli položka knihovny.

Soubory se na této kartě pouze čtou. Nic se nenahrává, dokud nezvolíte {{ui:Uložit do mých objektů}}.

## Co se načte z každého druhu souboru

| Soubor | Co dostanete |
|---|---|
| IFC | Každý typ prvku jako objekt se skutečným 3D tvarem, třídou IFC a sadami vlastností |
| glTF, GLB, OBJ | Jeden objekt se skutečným 3D tvarem jako síť. Nejprve nastavte jednotky a směr nahoru. |
| DWG, DXF | Každý blok jako objekt s půdorysným výkresem a atributy |
| Soubor rodiny (`.rfa`) | Název rodiny, kategorie, výrobce, model, parametry a její typy. **Ne její 3D tvar:** místo něj stojí krabice podle šířky, hloubky a výšky rodiny. |
| CSV | Jeden objekt na řádek: název, velikosti a údaje, nakreslené jako krabice |

## Soubory rodin a jejich 3D tvar

3D tvar uvnitř souboru `.rfa` je uložen v nedokumentovaném formátu, takže BimCraft čte údaje rodiny a jeho geometrii neodhaduje. Karta to říká: „Geometrie z této rodiny nebyla načtena; místo ní stojí krabice.“

Chcete-li rodinu přinést se skutečným tvarem, exportujte ji z programu, který ji vytvořil (Revit):

1. Otevřete rodinu, nebo projekt s rodinou v něm umístěnou.
2. Zvolte **Soubor > Export > IFC**. Viz [nastavení exportu, které zde fungují nejlépe](topic:rvt-to-ifc).
3. V BimCraft načtěte soubor `.ifc` pomocí {{ui:Soubory…}}. Každý typ rodiny přijde jako vlastní objekt se svým tvarem a sadami vlastností.

Mnoho výrobců nabízí IFC nebo DWG ke stažení vedle souboru rodiny. Ty se načtou přímo.

## Typy rodin

Rodina s několika typy přijde jako jedna položka s volbou {{ui:Varianta}}, jedna varianta na typ. Každá varianta má hodnoty, které se mezi typy liší, a svou vlastní krabici, když typ má šířku a hloubku. Rodina s jedním typem je prostá položka naplněná hodnotami tohoto typu.

Některé rodiny drží své typy v katalogu typů: soubor `.txt` se stejným názvem vedle souboru rodiny. Vyberte oba najednou, nebo vyberte složku, a řádky katalogu se stanou variantami.

## Údaje rodiny na skutečném tvaru

Když složka obsahuje soubor rodiny a soubor IFC, glTF nebo OBJ se stejným názvem (`Chair.rfa` a `Chair.ifc`), vyberte oba najednou, nebo vyberte složku. BimCraft vytvoří jednu položku: soubor rodiny dá název, výrobce, model, parametry a typy a druhý soubor dá skutečný 3D tvar. Poznámky řeknou, z kterého souboru tvar pochází. Jeden tvar se použije pro každý typ.

Když je v souboru rodiny uložen obrázek, detaily položky ho ukážou pod výkresem půdorysu. Obrázek se zobrazí jen tam; s položkou se neuchovává.

## Moje objekty

{{ui:Moje objekty}} je váš vlastní soukromý seznam v Knihovně. Vidíte v něm jen vy: není ve veřejné knihovně, ve vyhledávání ani ho nevidí váš tým. Sleduje váš účet, takže stejné objekty jsou na jiném počítači, jakmile se přihlásíte do knihovny.

- K uložení objektu musíte být přihlášeni do knihovny. Viz [přihlášení do knihovny](topic:library-credits).
- Uložení objektu odešle jen ten jeden objekt na váš účet. Do té doby zůstává na vašem počítači.
- {{ui:Odebrat z mých objektů}} vyjme objekt ze seznamu. Kopie, které už jsou umístěné ve výkresech, zůstanou.
- Chcete-li objekt sdílet se všemi, nahrajte jej místo toho do veřejné knihovny pod licencí, kterou zvolíte.

:::note
Moje objekty se testují a pro váš účet nemusí být ještě otevřené. Pokud zdroj chybí, nebo se objeví zpráva „Moje objekty pro tento účet ještě nejsou otevřené“, své soubory můžete stále číst a umisťovat pomocí {{ui:Soubory…}}; jsou uloženy uvnitř vašeho modelu.
:::

## Časté chyby

- **Očekávání skutečného tvaru z `.rfa`.** Čte se jen jeho data. Pro tvar exportujte IFC.
- **Dvě položky tam, kde jste čekali jednu.** Rodina a její soubor tvaru se spojí jen tehdy, když se názvy přesně shodují (kromě koncovky) a leží ve stejné složce.
- **Síť přijde tisíckrát příliš velká nebo ležící na boku.** Před výběrem souboru nastavte {{ui:Jednotky souboru}} a {{ui:Osa nahoru u sítě}} pod {{ui:Soubory…}}.
- **„Žádná data rodiny“ u souboru.** Je to projekt (`.rvt` uložený s jinou koncovkou), nebo šablona rodiny, ne rodina. Viz [Čtení souboru projektu nebo rodiny](topic:read-rvt-file).
- **Uložení obsahu, který nesmíte ukládat.** Některé placené knihovny nedovolují kopie mimo svou vlastní službu. Zkontrolujte podmínky obsahu, který jste sami nevytvořili.
