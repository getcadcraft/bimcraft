---
title: Kontrola složky na poškozené kopie, chybějící odkazy a zbytky
summary: Použijte přehled složky k nalezení uříznutých souborů modelů, výběru nejnovější úplné zálohy, zjištění chybějících odkazů a odhalení zámkových a dočasných souborů.
keywords: kontrola stavu, poškozené, poškozeno, nekompletní, uříznuté, záloha, chybějící odkazy, xref chybí, audit, zbytky, zámkové soubory, dwl, bak, předání
from: 3025a539
---

## Co uděláte

Před předáním projektové složky nebo před zahájením práce na ní zkontrolujte: je každý model úplný, která záloha je poslední dobrá a jsou tam všechny připojené soubory?

## Postup: poškozené kopie

1. Otevřete složku projektu. Viz [Otevření celé projektové složky](topic:open-project-folder).
2. Přečtěte poznámky pod názvem složky. Hlášení „2 soubory jsou nekompletní nebo nečitelné. Viz modely níže.“ znamená, že je co kontrolovat.
3. V **Modelech** se podívejte do sloupce **Stav**. **Kompletní** je v pořádku. Oranžové „1 nekompletní“ znamená, že jedna kopie je vadná, ale jiná je v pořádku. Červené **Nekompletní** znamená, že nebyla nalezena žádná neporušená kopie.
4. U modelu s problémem otevřete **Všechny kopie …**. Seznam obsahuje hlavní soubor a každou číslovanou zálohu, nejnovější nahoře, s velikostí, datem a stavem.
5. Přečtěte poznámku nad seznamem, například „Tower.rvt je nekompletní (183.2 MB, má mít alespoň 214.0 MB). Karta zobrazuje nejnovější kompletní kopii, Tower.0012.rvt (3. března 2025).“
6. Klikněte na kopii, kterou chcete otevřít. Lze klikat jen na kompletní kopie.

## Co kontrola stavu dělá

Každá kopie každého modelu dostane rychlou kontrolu své hlavičky, 512 bajtů každá, takže i složka s velkými modely se zkontroluje během několika sekund. Soubor, jehož vlastní index ukazuje za jeho konec, byl uříznut při kopírování, nahrávání nebo synchronizaci. Soubor na cloudovém disku, který je ještě „pouze online“, vypadá stejně.

Karta každého modelu se čte z hlavního souboru, pokud je v pořádku, a z nejnovější neporušené zálohy, pokud není.

## Postup: chybějící odkazy

1. Hledejte poznámku „*n* připojených souborů není v této složce.“ pod názvem složky.
2. Přejděte na **Připojené a odkazované soubory**. Chybějící odkazy jsou uvedeny nejdříve.
3. U každého odkazu přečtěte sloupec **Kde**:
   - **V této složce**: nalezeno na cestě, kterou model uložil.
   - **Nalezen stejný název**: soubor se stejným názvem je jinde ve složce. Ověřte, že je to správný.
   - **Soubor z knihovny**: tabulka klíčových poznámek nebo kódů sestav. Ty jsou na každém počítači dodávány s programem, takže ve složce se nečekají.
   - **Není v této složce**: nenalezeno nikde ve složce.
4. Sloupec **Používá** ukazuje, které modely který soubor odkazují.

BimCraft hledá každý odkaz nejprve podle jeho relativní cesty, pak podle konce jeho uložené cesty (takže `\\server\jobs\Tower\Cad\X-Refs\site.dwg` se najde jako `X-Refs/site.dwg`, když jste vybrali složku `Cad`), a nakonec podle názvu souboru kdekoli ve složce.

## Postup: zbytky

1. Přejděte na **Odložené** na konci přehledu.
2. Přečtěte tři řádky, které se mohou objevit:
   - Složky pro údržbu (`*_backup`, `*_log`, `Revit_temp`): nečtou se.
   - Zbytky zámků, protokolů a záloh: soubory jako `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Zanechají je programy, které se zhroutily nebo byly otevřené, když se složka kopírovala. Obvykle je lze bezpečně smazat, jakmile je nikdo nemá otevřené.
   - Ostatní soubory: vše ostatní, co BimCraft nečte.

## Časté chyby

- **Smazání poškozeného hlavního souboru dříve, než uložíte dobrou zálohu.** Nejprve zkopírujte nejnovější úplnou zálohu, pak řešte poškozený soubor.
- **Slepé důvěřování „Nalezen stejný název“.** Dva různé výkresy mohou mít stejný název. Pokud si nejste jisti, otevřete oba.
- **Považování chybějícího souboru z knihovny za problém.** Tabulky klíčových poznámek a kódů sestav jsou na každém počítači součástí programu.
- **Počet souborů se liší mezi prohlížeči.** Ve Firefoxu a Safari předá {{ui:Otevřít složku}} každý soubor, včetně těch uvnitř složek pro údržbu, takže počet (a limit 20 000 souborů) je zahrnuje. Přetažení složky do okna je přeskočí, jako to dělají Chrome a Edge. Jinak je přehled stejný.
