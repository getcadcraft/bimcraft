---
title: Zobrazení výkresu DWG nebo DXF
summary: Otevřete DWG nebo DXF, pohybujte se v prostoru modelu a na listech, čtěte souřadnice a zjistěte, co ještě není nakresleno.
keywords: dynamické bloky, stavy viditelnosti, dwg, dxf, cad, výkres, 2d, zobrazení, prohlížeč, posun, zoom, prostor modelu, prostor papíru, rozvržení, souřadnice, otevřít dwg
from: 4db3122a
---

## Co provedete

Otevřete výkres CAD, prohlédněte si ho ve 3D nebo 2D, pohybujte se v něm, přepínejte mezi prostorem modelu a jeho listy a čtěte souřadnice. BimCraft zobrazuje výkresy DWG a DXF; neupravuje je ani neukládá. Chcete-li jej změnit, klikněte na {{ui:Upravit v CadCraft}} a výkres se otevře v kreslicí aplikaci CadCraft na nové kartě.

## Postup

1. Klikněte na {{ui:Vybrat soubor}}, nebo přetáhněte výkres na stránku.
2. Vyberte soubor `.dwg` nebo `.dxf`.
3. Počkejte, dokud stavový řádek nezobrazí "Čtení výkresu…". Velké výkresy potrvají několik sekund. Poté ukáže, jak dlouho čtení trvalo, "vykreslování…", zatímco se kreslí první obrázek, a jak dlouho to trvalo.
4. Výkres se otevře ve 3D, což je nejrychlejší způsob, jak zobrazit velký výkres (viz [Zobrazení výkresu DWG nebo DXF ve 3D](topic:dwg-in-3d)). Klikněte na {{ui:Model}} pro ploché 2D zobrazení. Chcete-li výkresy vždy otevírat ve 2D, nastavte {{ui:Nastavení}} › {{ui:BimCraft}} › **Výkresy se otevírají v** na {{ui:Model (2D)}}. Výkres bez čehokoli v prostoru modelu nebo prohlížeč, který nedokáže zobrazit 3D, se otevře ve 2D.
5. Podívejte se na karty nad výkresem: nejdřív {{ui:Model}}, pak jedna karta na každý list, ve vlastním pořadí výkresu.
6. Klikněte na kartu listu a zobrazí se tento list: papír, na kterém je model zobrazen přes své výřezy.
7. Klikněte na {{ui:Model}} pro návrat do prostoru modelu.
8. Přesuňte ukazatel nad výkres a v rohu čtěte souřadnice X a Y.

## Co uvidíte

- Výkres přizpůsobený oknu. Barvy odpovídají výkresu; bílé čáry (barva 7) se kreslí barvou inkoustu motivu a bledé barvy se na světlém motivu ztmaví, aby zůstaly čitelné.
- Panel {{ui:Výkres}} vlevo: soubor, velikost, formát (například "AutoCAD 2018 (AC1032)"), jednotky, počty entit a vrstev, počet listů a propojené výkresy a zařízení, pokud nějaké jsou.
- Seznam {{ui:Vrstvy}} vlevo.
- Vpravo: jak se pohybovat, propojené výkresy a obrázky a **Zatím nenakresleno**.

## Pohyb ve výkresu

:::mouse
| Cíl | Postup |
|---|---|
| Posun | Táhněte libovolným tlačítkem myši |
| Zoom | Otáčejte kolečkem; bod pod ukazatelem zůstane na místě |
| Přizpůsobit | Dvojklik, stiskněte {{key:F}}, nebo klikněte na {{ui:Přizpůsobit}} |
:::

:::mac mouse
Na touchpadu dvěma prsty posouvání **přibližuje**, nikoli posouvá. Štípnutí také přibližuje. Pro posun klikněte a táhněte.
:::

:::touch
Táhnutím jedním prstem posouváte. Přibližování štípnutím u výkresů ještě není hotovo: klepněte na {{ui:Přizpůsobit}} pro zobrazení celého listu a pro přiblížení použijte myš nebo touchpad.
:::

## Dynamické bloky

Dynamický blok se kreslí tak, jak jej výkres ukazuje: každý umístěný blok ve stavu viditelnosti, v jakém byl výkres uložen ("Plan" nebo "Front", "Single bowl" nebo "Double bowl"). Vpravo **Dynamické bloky** vypisuje každý umístěný v prostoru modelu: kolik jich je umístěno, jaké stavy zobrazují a každý stav, který blok má. V {{ui:3D}} klikněte na umístěný blok a ve Vlastnostech se zobrazí **Dynamický blok**, **Zobrazený stav** a **Ostatní stavy**. BimCraft stavy nepřepíná.

## Zatím nenakresleno

Některé druhy objektů se v této verzi nekreslí. Počítají se pod **Zatím nenakresleno** vpravo ("Tyto části výkresu se zatím přeskakují, nic se nedomýšlí."), abyste věděli, že něco chybí. Kreslí se úsečky, mnohočáry, oblouky, kružnice, elipsy, spline, šrafy a plné výplně, text a víceřádkový text, bloky s atributy, kóty, výnosky a víceúrovňové výnosky, tabulky, obrázky a výřezy. 3D plochy, polyfacové sítě a polygonové sítě se kreslí jako své hrany shora; přepněte na {{ui:3D}}, abyste je viděli jako plochy.

Binární DXF se neotevře; BimCraft to oznámí. Uložte jej znovu jako ASCII DXF nebo jako DWG v programu, který jej vytvořil.

## Časté chyby

- **Výkres vypadá prázdně.** Některé vrstvy mohou být ve výkresu samotném vypnuté nebo zamrazené; v {{ui:Vrstvy}} začínají odškrtnuté. Klikněte na {{ui:Vše zapnout}}. Pokud stavový řádek hlásí "*name* je prázdný výkres: neobsahuje čáry, text ani bloky.", v něm nic není.
- **List ukazuje prázdný rámeček.** List může záviset na propojených výkresech. Viz [Najít propojené výkresy a obrázky](topic:dwg-linked-files).
- **Text vypadá trochu jinak.** BimCraft kreslí text úzkým bezserifovým písmem, ne vlastními písmy výkresu, takže text může být o něco širší nebo užší než v programu, který jej vytvořil.
- **"*name* nelze přečíst. Soubor může být poškozen, nebo uložen ve formátu, který čtečka zatím nezpracovává."** Závorka na konci uvádí kód formátu souboru. Uložte jej z programu, který jej vytvořil, jako starší DWG nebo jako DXF, a zkuste to znovu.
- **Očekáváte měření, kreslení nebo úpravy.** BimCraft výkresy pouze zobrazuje. Klikněte na {{ui:Upravit v CadCraft}}, čímž se stejný soubor otevře v kreslicí aplikaci CadCraft, která jej upraví a uloží kopii jako DWG nebo DXF. Původní soubor se nemění a propojené výkresy zůstávají v BimCraft. Tlačítko se zobrazí jen tam, kde máte CadCraft k dispozici.

## Dále

- [Zobrazení výkresu DWG nebo DXF ve 3D](topic:dwg-in-3d)
- [Práce s vrstvami a listy](topic:dwg-layers-sheets)
- [Kontrola výkresu v náhledu tisku](topic:print-view)
