---
title: Raster bemaßen
summary: Den Abstand zwischen benachbarten Rasterlinien und die Gesamtgröße des Rasters auf dem Plan jedes Geschosses anzeigen; wird in der IFC-Datei gespeichert und folgt dem Raster, wenn sich Linien ändern.
keywords: Raster, Rasterbemaßung, Bemaßung, Abstand, Felder, Gesamtgröße, Rasterköpfe, Stützenraster, Plan, Blatt
from: aaea5d08
---

## Was Sie tun

Den Abstand zwischen den Rasterlinien und die Gesamtgröße des Rasters auf den Plänen anzeigen, außerhalb der Rasterköpfe, damit die daraus erstellten Blätter die Maße enthalten. Dafür brauchen Sie zuerst ein Raster: siehe [Raster und Stützen](topic:grids-and-columns).

## Schritte

1. Den Plan eines Geschosses anzeigen und auf {{ui:Raster}} klicken, um das Rasterwerkzeug einzuschalten. Die Optionszeile für das Raster erscheint.
2. {{ui:Bemaßung}} ankreuzen. Der Abstand zwischen benachbarten nummerierten Linien und zwischen benachbarten Buchstabenlinien sowie die Gesamtgröße in beide Richtungen werden auf dem Plan eingezeichnet.
3. Ein anderes Geschoss wählen: Auf dessen Plan werden dieselben Maße angezeigt.
4. Eine Linie verschieben, umbenennen oder eine hinzufügen. Die Maße folgen dem Raster.
5. {{ui:Bemaßung}} abwählen, um sie wieder zu entfernen.

## Hinweise

- Jede Änderung ist ein Rückgängig-Schritt: {{key:Mod+Z}} macht sie rückgängig.
- Die Einstellung wird mit dem Raster in der IFC-Datei gespeichert, und die auf Blättern platzierten Pläne zeigen die Maße.
- Wenn das Modell kein Raster hat, das sich ändern lässt (ein Raster aus einer Datei eines anderen Programms lässt sich hier nicht ändern), zeigt die Statuszeile „Es gibt kein Raster zum Ändern.“
