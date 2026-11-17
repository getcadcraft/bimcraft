---
title: Paleta symbolů
summary: Najděte elektrické a vodoinstalační symboly podle názvu nebo obrázku, označte hvězdičkou ty, které používáte, a umístěte je do půdorysu jedním kliknutím.
keywords: paleta symbolů, tlačítko panelu symbolů, stěna následuje, symboly, elektrické symboly, vodoinstalační symboly, půdorys vodoinstalace, záchod, WC, umyvadlo, dřez, vana, sprcha, podlahová vpusť, čistící otvor, hadicový kohout, ohřívač vody, ventil, uzavírací šoupátko, studená voda, teplá voda, odpad, odvětrání, styl čáry, oblíbené, hledání
from: 67f20bc0
---

## Co provedete

Otevřete jeden panel, který vypisuje elektrické symboly a symboly půdorysu vodoinstalace s jejich obrázky a názvy, najděte ten, který chcete, a umístěte jej do půdorysu. Nic zde nepotřebuje internet: symboly jsou dodány s aplikací.

## Otevření a umístění symbolu

1. Otevřete model a zvolte {{ui:Sestavení}} › {{ui:Paleta symbolů}} (příkaz zadaný textem: SYMBOLS). Stejné tlačítko je v nabídce Nástroje na liště Kreslení a jako **Symboly** ve skupině Knihovna na panelu nástrojů.
2. Zvolte sadu: **Elektrické** nebo **Vodoinstalace**, nebo **Všechny sady**. Napište do vyhledávacího pole, abyste seznam zúžili. Hledat můžete podle názvu nebo zkratky (WC, CW, HB).
3. Klikněte na symbol. Půdorys je připraven symbol umístit.
   - **Elektrický** symbol spustí nástroj Elektro s vybraným zařízením, takže platí vše z [Elektrického půdorysu](topic:electrical-plan): klikněte do půdorysu, jeden krok zpět.
   - **Vodoinstalační** symbol spustí nástroj symbolů půdorysu. Klikněte do půdorysu. Sanitární zařízení přichycené ke stěně (záchod, umyvadlo, vana, dřez, hadicový kohout) se přichytí k nejbližší ploše stěny, zády ke stěně; odpady, ventily, ohřívač vody a styly čar jdou tam, kam kliknete.
4. Stiskněte {{key:R}} pro otočení symbolu o 90 stupňů ({{key:Shift}}+{{key:R}} jej otočí opačným směrem), nebo zadejte úhel do pole **Otočení** na panelu voleb. Stiskněte {{key:Esc}} pro zastavení.

Sanitární zařízení nebo hadicový kohout, které se přichytily ke stěně, si tuto stěnu pamatují: když se stěna pohne, symbol se pohne s ní (stejná plocha, stejná vzdálenost podél stěny) ve stejném kroku zpět. Smažete-li stěnu, symbol zůstane, kde byl, a Problémy uvedou, že "ztratil svou stěnu"; přesuňte jej nebo smažte. Symboly umístěné mimo stěny nejsou k ničemu připojeny.

Každý umístěný symbol je jeden krok {{ui:Zpět}}. Umístěný symbol je anotace půdorysu v souboru IFC se svou značkou (WC1, WC2, ...). Vyberte jej, chcete-li změnit jeho značku nebo otočení ve **Vlastnostech**, nebo stiskněte {{key:Delete}}.

## Co obsahuje sada vodoinstalace

Armatury (záchod, pisoár, umyvadlo, vana, sprcha, kuchyňský dřez, jednoduchý dřez), podlahová vpusť, podlahové a stěnové čistící otvory, hadicový kohout, nástěnný hydrant, ohřívač vody, ventily (šoupátkový, globusový, kulový, zpětný, klapkový a redukční) a styly čar s jejich zkratkami: studená voda (CW), teplá voda (HW), zpětné vedení teplé vody (HWR), odpad (W), odvětrání (V), dešťová kanalizace (SD) a plyn (G). Kresby se měří s půdorysem, takže si na vytištěném listu zachovají svou velikost. Styl čáry je krátký úsek, který ukazuje styl na půdorysu; skutečné trasy potrubí kreslete nástroji pro potrubí.

:::note
Jde o běžné konvence půdorysů vodoinstalace, nakreslené námi; nejsou certifikované podle ISO 4067-1 ani ASME Y32.4. Byly porovnány s veřejnými legendami výkresů a školicími příručkami (seznam je ve zdrojové poznámce sady, která říká, kde se shodujeme a kde se lišíme), nebyly zkopírovány z žádného produktu a jsou volně k použití (Apache-2.0). Sady výkresů se liší, takže zkontrolujte legendu svého projektu. Jsou to symboly půdorysu, nikoli návrh vodoinstalace: neurčují průměry potrubí ani neověřují předpisy.
:::

## Oblíbené a klávesnice

- Klikněte na hvězdičku u symbolu (nebo na něj stiskněte {{key:F}}), abyste jej uchovali jako oblíbený. Oblíbené jsou vypsány jako první a zůstávají v tomto prohlížeči. **Jen oblíbené** zobrazí pouze ty.
- {{key:Down}} z vyhledávacího pole přejde na symboly; šipky, {{key:Home}} a {{key:End}} se pohybují mezi nimi; {{key:Enter}} vybere zaměřený; {{key:Esc}} zavře paletu.
- Na telefonu je paleta listem u spodního okraje obrazovky; když vyberete symbol, ustoupí stranou, abyste viděli půdorys. Otevřete ji znovu z nabídky Sestavení nebo tlačítkem **Paleta** na panelu voleb.

:::tip
Pokud soubor používá sadu symbolů, kterou tento build nemá, půdorys na místě symbolu zobrazí rámeček a Problémy jej vypíší.
:::

## Propojení umístěného prvku se symbolem

Světlo z Knihovny je 3D prvek, ale elektrický návrh ho zobrazuje jako svůj symbol. Umístíte jej **jednou** a propojíte:

1. Zvolte Sestavení › **Propojení symbolu** (nebo napište SYMBOLLINK). Otevře se sekce Propojení symbolu v levém panelu.
2. Vyberte umístěné prvky v půdorysu nebo ve 3D. Sekce ukáže, kolik jich je vybráno a s čím jsou propojeny.
3. Zvolte **Symbol** (z libovolné sady symbolů: Elektrické, Vodoinstalace) a zvolte **Propojit**.

Prvek je pořád jeden prvek a každý rozpis jej počítá jednou:

- **3D** vždy zobrazí jeho těleso.
- **Půdorys** zobrazí svou půdorysnou podobu jako dřív.
- Půdorys, u kterého je **Tento pohled zobrazuje propojené prvky jako** nastaveno na **Jejich symbol (rozvodový plán)**, zobrazí symbol na jeho místě. Kliknutí na symbol vybere prvek. Volba se u tohoto pohledu (půdorys podlaží, půdorys stropu nebo výnoska) uchová v souboru.

**Otočit symbol o 90°** otočí symbol vůči jeho prvku. **Odstranit propojení** propojení zruší; prvek zůstane. Rozpis **Propojené symboly** vypíše každý propojený prvek jednou, s jeho podlažím a místností, ve které stojí.

Ještě není hotovo: volba pohledu na listu je volbou půdorysu podlaží, který zobrazuje; zařízení umístěná nástrojem Elektro jsou symboly v každém půdorysu jako dříve.
