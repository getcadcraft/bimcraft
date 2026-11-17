---
title: Otevření celé složky projektu
summary: Ukažte BimCraftu na složku projektu a uvidíte všechny modely, jejich zálohy a odkazy najednou; pole Začněte zde navrhne, se kterým souborem pracovat.
keywords: složka, adresář, složka projektu, síťový disk, server, začněte zde, který soubor, zálohy, odkazy, xrefs, nedávné složky, přetažení složky
from: 16fbdce2
---

## Co uděláte

Otevřete celou složku projektu, například tu, kterou jste dostali pro zakázku, a nechte BimCraft, ať ji roztřídí: které modely tam jsou, které kopie jsou zálohy, co na co odkazuje, které soubory jsou poškozené a který soubor nejspíš chcete otevřít.

Čte se jen několik kilobajtů, které každá karta modelu potřebuje, takže složka na síťovém disku nebo synchronizovaná cloudová složka je v pořádku.

## Postup

:::chromium
1. Klikněte vlevo na {{ui:Otevřít složku}} (nebo doprostřed prázdné obrazovky).
2. V okně, které se otevře, vyberte složku projektu a klikněte na **Vybrat** (nebo **Nahrát** či **Otevřít**, podle systému).
3. Když se prohlížeč zeptá „Povolit webu zobrazit soubory?“, klikněte na **Zobrazit soubory**. Tím kartě jen umožníte číst složku; nic se nenahrává.
4. Počkejte, až stavový řádek napočítá: „Výpis složky: … souborů“, poté „Kontrola souborů Revit: … z …“.
:::

:::firefox
1. Klikněte vlevo na {{ui:Otevřít složku}} (nebo doprostřed prázdné obrazovky).
2. V okně, které se otevře, vyberte složku projektu a potvrďte. Firefox může požádat o potvrzení, že stránka smí číst soubory složky; ty zůstanou na vašem počítači.
3. Počkejte, až stavový řádek ukáže „Čtení složky: … souborů“, poté „Kontrola souborů Revit: … z …“.
:::

:::safari
1. Klikněte vlevo na {{ui:Otevřít složku}} (nebo doprostřed prázdné obrazovky).
2. V okně, které se otevře, vyberte složku projektu a klikněte na **Nahrát**. Navzdory tomuto slovu nic neopustí váš Mac: soubory se jen předají kartě.
3. Počkejte, až stavový řádek ukáže „Čtení složky: … souborů“, poté „Kontrola souborů Revit: … z …“.
:::

Složku můžete také **přetáhnout** z {{pick:mac=Finderu|windows=Průzkumníku souborů|linux=vašeho správce souborů}} na stránku. Přetažená složka se otevře bez jakékoli výzvy k povolení v každém prohlížeči.

## Co uvidíte

Zpráva o složce vyplní střed:

- Název složky, počty modelů, výkresů CAD, modelů IFC a souborů a celková velikost.
- Červené nebo oranžové poznámky, pokud jsou některé soubory neúplné nebo některé propojené soubory ve složce chybí.
- Pole {{ui:Začněte zde}}: soubor, který BimCraft navrhuje otevřít, s důvody.
- **Modely**: jeden řádek na model, jeho zálohy jsou seskupeny pod ním.
- **Propojené a odkazované soubory**, **Modely IFC**, **Výkresy CAD** a **Odložené**, pokud je ve složce něco z toho.

Vlevo panel {{ui:Složka}} to shrnuje; **Problémy** ukáže „Žádné“, pokud je každá kopie v pořádku.

## Použití pole Začněte zde

Pole pojmenuje jeden soubor a řekne proč, například:

- „Nejnovější uložená práce v této složce (3. března 2025).“
- „*Consultant.rvt* je propojen do jiných modelů, takže je podklad, ne soubor k úpravě.“
- „*Tower.rvt* vypadá jako zřejmá volba, ale je poškozený; jeho poslední dobrá kopie je z …“
- „Toto je centrální model: v Revitu ho otevřete přes „Create New Local“ a pracujte v lokální kopii.“

1. Přečtěte si důvody.
2. Klikněte na {{ui:Otevřít jeho kartu}}, abyste si přečetli kartu tohoto souboru, nebo na {{ui:Zobrazit v seznamu}}, abyste našli jeho řádek v **Modely**.
3. Před použitím se zeptejte toho, kdo na projektu naposledy pracoval. Pole to také říká: je to odhad podle názvů, dat a odkazů.

## Otevírání souborů ze zprávy

1. Klikněte na název modelu, abyste otevřeli jeho kartu. Karta ověří každý odkaz oproti složce.
2. Klikněte na {{ui:Zpět na}} a na název složky nahoře na kartě (nebo na {{ui:Zpět na složku}} vlevo), abyste se vrátili.
3. Klikněte na libovolný soubor IFC pod **Modely IFC**, abyste ho otevřeli ve 3D.
4. Klikněte na libovolný DWG nebo DXF pod **Výkresy CAD**, abyste ho otevřeli ve 2D. Jeho propojené výkresy a obrázky se ve složce najdou automaticky.

## Znovu otevření složky později

:::chromium
Složky, které jste otevřeli přes {{ui:Otevřít složku}} nebo přetažením, jsou vlevo uvedeny pod {{ui:Nedávné složky}}. Klikněte na {{ui:Znovu otevřít}} a název složky a otevře se znovu bez nového výběru. Po restartu prohlížeče se Chrome nebo Edge zeptají ještě jednou; zvolte „Povolit při každé návštěvě“, aby se už neptaly. Seznam je uložen jen v tomto prohlížeči a nikam se neodesílá. Kliknutím na × složku zapomenete.
:::

:::firefox safari
Tento prohlížeč si složky mezi návštěvami nepamatuje. Vyberte složku znovu přes {{ui:Otevřít složku}}, nebo ji přetáhněte.
:::

## Časté chyby

- **Výběr příliš velké složky.** Přes 20 000 souborů: „Tato složka má více než 20 000 souborů. Vyberte menší složku, například jen jeden projekt.“ Vyberte složku projektu, ne celý disk.
- **Výběr nadřazené složky několika projektů.** Pole {{ui:Začněte zde}} pak vybírá napříč projekty. Vyberte jeden projekt.
- **Složky samotného Revitu vypadají jako ignorované.** Složky `*_backup`, `*_log` a `Revit_temp` jsou údržba a jsou vypsány pod **Odložené**, nečtou se.
- **Očekávání, že se model otevře ve 3D z karty.** Soubor projektu je jen karta. Otevřete jeho export IFC.
- **Telefony a tablety.** Mnoho mobilních prohlížečů složky vůbec nevybere. Použijte počítač.

Viz [Kontrola složky na poškozené kopie, chybějící odkazy a zbytky](topic:check-folder-health) a [Zpráva o složce: role, stavy a odkazy](topic:folder-roles).
