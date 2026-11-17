---
title: En karta på marken under modellen
summary: Lägg en gatukarta eller flygbild på marken under en georefererad IFC-modell, från kartrutor, kartjänster eller en bild med en världsfil.
keywords: karta, kartlager, bakgrundskarta, flygbild, satellit, tomt, mark, kartrutor, xyz, wms, wmts, kartjänst, världsfil, georeferens, ifcmapconversion, projicerat koordinatsystem, EPSG, platskontext
from: 84e2e9df
---

## Vad du gör

Se modellen på sin plats: tomtens gatukarta eller flygbild på marken under den.

## Steg

1. Öppna en IFC-modell som har sin plats på kartan (en kartkonvertering, IfcMapConversion, med ett projicerat koordinatsystem). Exportörer skriver den när projektets koordinater (mätpunkt, gemensamma koordinater) är satta.
2. Välj {{ui:Visa}} › {{ui:Kartlager…}}. Dialogrutan visar modellens system, till exempel EPSG:28356. En modell utan kartkonvertering kan inte ha kartlager, och dialogrutan säger det.
3. Slå på {{ui:Kartlager från internet}}. Tills dess begärs inget av någon server. När den är på får de servrar du lägger till se området runt modellen och din IP-adress, aldrig din modell.
4. Under {{ui:Lägg till ett lager}} väljer du rutor (en adress med `{z}`, `{x}` och `{y}`), en WMS-, WMTS- eller ArcGIS-tjänst ({{ui:Hämta lager}}, välj sedan ett), eller en bild med sin världsfil.
5. Stäng dialogrutan. Kartan ligger på marken strax under modellens lägsta punkt, över modellens fotavtryck och lika långt utanför det.

:::note
Kartan visas bara på skärmen. Den sparas inte i IFC-filen. Listan över lager sparas i den här webbläsaren. Använd bara kartjänster vars villkor tillåter det.
:::
