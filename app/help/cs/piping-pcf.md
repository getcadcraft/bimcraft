---
title: Odeslání potrubí do programu pro pevnostní výpočty nebo izometrie a načtení zpět (PCF)
summary: Zapište trasy potrubí modelu jako soubor komponent potrubí PCF, nebo načtěte soubor PCF z programu pro pevnostní výpočty nebo izometrie a nakreslete jeho potrubí jako trasy.
keywords: pcf, soubor komponent potrubí, pevnostní analýza, izometrie, izometrie, export, import, potrubí, zařízení, ocelové potrubí, přenos zakázky, jiný software
from: 24f91355
---

## Co uděláte

PCF je prostý textový soubor, který čtou a zapisují programy pro pevnostní výpočty a izometrie. Vypisuje komponenty každého potrubního vedení s jejich koncovými body a světlostmi.

## Export

1. Zvolte nástroj Potrubí. Řádek voleb ukazuje **Exportovat PCF**.
2. Klikněte na něj. Zapíše se každá trasa potrubí v modelu: rovné potrubí, kolena (otočení o 90 stupňů, jinak oblouk), T-kusy s jejich bodem odbočky, redukce a armatury.
3. Soubor používá milimetry. Světlosti jsou jmenovité průměry v milimetrech. Střední bod kolena je jeho roh, kde se stýkají obě ramena.

PCF se zapisuje pro ocelové potrubí s tupými svary. Trasa z jiného materiálu se zapíše také, s klíči ocelových komponent, a uvede se v panelu Problémy.

## Import

1. Zvolte nástroj Potrubí a klikněte na **Importovat PCF…**, pak vyberte soubor.
2. Rovné potrubí přes kolena, oblouky, armatury a příruby se stane jednou trasou na aktuální úrovni. Změna velikosti začne novou trasu. Odbočka T-kusu se stane vlastní trasou začínající ve středu T-kusu.
3. Model si staví své vlastní tvarovky. Redukce a T-kusy se nekopírují: objeví se tam, kde se stýkají trasy různých velikostí nebo odbočka.

:::note
Výšky v souboru se čtou jako výšky nad aktuální úrovní. Zatížení, podpory a samotná pevnostní analýza nejsou v souboru PCF a nepřenášejí se.
:::

## Kontrola přenesených dat

- Celková délka potrubí na každé vedení by měla odpovídat zdroji.
- Panel Problémy vypíše vždy jednou pro každou položku: koleno, jehož střední bod není stejně daleko od obou konců, potrubí bez délky a světlost, která není standardní velikostí.

## Potrubí již obsažené v souboru IFC

Když je otevřen soubor IFC, **Exportovat PCF** zapíše také jeho vlastní úseky potrubí, tvarovky a armatury vedle tras, které jste nakreslili. Úsek dostane své konce z bodů, nebo z konců svého tělesa. Tvarovka bez bodů se vynechá a panel Problémy to uvede. Export můžete provést jen z IFC, když model nemá nakreslené trasy.

Při importu se podpory, odbočky (olety), příruby, těsnění a záslepky v souboru nekreslí. Panel Problémy uvádí, kolik kterých bylo vynecháno, takže nic nezmizí bez upozornění.
