---
title: Mapa na terénu pod modelem
summary: Položte pouliční mapu nebo leteckou fotografii na terén pod georeferencovaným modelem IFC, z mapových dlaždic, mapových služeb nebo obrázku se světovým souborem.
keywords: mapa, mapové vrstvy, podkladová mapa, letecký snímek, satelit, pozemek, terén, dlaždice, xyz, wms, wmts, mapová služba, světový soubor, georeference, ifcmapconversion, projektovaný CRS, epsg, kontext lokality
from: 84e2e9df
---

## Co uděláte

Uvidíte model na jeho místě: pouliční mapu nebo leteckou fotografii lokality na terénu pod ním.

## Kroky

1. Otevřete model IFC, který nese své místo na mapě (převod na mapu, IfcMapConversion, s projektovaným souřadnicovým systémem). Exportéři ho zapisují, když jsou nastaveny souřadnice projektu (bod zaměření, sdílené souřadnice).
2. Zvolte {{ui:Zobrazit}} › {{ui:Mapové vrstvy…}}. Dialog uvede souřadnicový systém modelu, například EPSG:28356. Model bez převodu na mapu nemůže mít mapové vrstvy, a dialog to řekne.
3. Zapněte {{ui:Mapové vrstvy z internetu}}. Dokud je to vypnuté, nic se od žádného serveru nežádá; když je zapnuto, servery, které přidáte, vidí okolí modelu a vaši internetovou adresu, nikdy ne váš model.
4. V {{ui:Přidat vrstvu}} zvolte dlaždice (adresa s `{z}`, `{x}` a `{y}`), službu WMS, WMTS nebo ArcGIS ({{ui:Načíst vrstvy}}, pak jednu vyberte), nebo obrázek se svým světovým souborem.
5. Zavřete dialog. Mapa leží na terénu těsně pod nejnižším bodem modelu, přes půdorys modelu a stejně daleko kolem něj.

:::note
Mapa je jen na obrazovce; není uložena v souboru IFC. Seznam vrstev se uchovává v tomto prohlížeči. Používejte jen mapové služby, jejichž podmínky to dovolují.
:::
