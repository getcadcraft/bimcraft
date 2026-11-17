---
title: Rohrleitung an ein Spannungs- oder Isometrieprogramm senden und zurücklesen (PCF)
summary: Die Rohrleitungen des Modells als PCF-Rohrkomponentendatei schreiben oder eine PCF-Datei aus einem Rohrspannungs- oder Isometrieprogramm lesen und deren Rohr als Leitungen zeichnen.
keywords: pcf, Rohrkomponentendatei, Rohrspannung, Isometrie, Isometrien, Export, Import, Rohrleitung, Anlage, Stahlrohr, Projekt übertragen, andere Software
from: 24f91355
---

## Was Sie tun

PCF ist die Textdatei, die Rohrspannungs- und Isometrieprogramme lesen und schreiben. Sie listet die Bauteile jeder Rohrleitung mit ihren Endpunkten und Nennweiten auf.

## Exportieren

1. Wählen Sie das Rohrwerkzeug. Die Optionszeile zeigt **PCF exportieren**.
2. Klicken Sie darauf. Jede Rohrleitung im Modell wird geschrieben: gerades Rohr, Bögen (eine Drehung um 90 Grad, sonst ein Bogen), T-Stücke mit ihrem Abzweigpunkt, Reduzierungen und Armaturen.
3. Die Datei verwendet Millimeter. Nennweiten sind Nenndurchmesser in Millimetern. Der Mittelpunkt eines Bogens ist seine Ecke, an der seine beiden Schenkel zusammentreffen.

PCF wird für Stahl-Stumpfschweißrohr geschrieben. Eine Leitung aus einem anderen Werkstoff wird ebenfalls geschrieben, mit Stahl-Bauteilschlüsseln, und im Problembereich vermerkt.

## Importieren

1. Wählen Sie das Rohrwerkzeug und klicken Sie auf **PCF importieren…**, dann wählen Sie die Datei.
2. Gerades Rohr bis Bögen, Biegungen, Armaturen und Flansche werden zu einer Leitung auf der aktuellen Ebene. Eine Größenänderung beginnt eine neue Leitung. Der Abzweig eines T-Stücks wird zu einer eigenen Leitung, die am Mittelpunkt des T-Stücks beginnt.
3. Das Modell legt seine eigenen Formteile an. Reduzierungen und T-Stücke werden nicht kopiert: Sie erscheinen dort, wo Leitungen unterschiedlicher Größe oder ein Abzweig zusammentreffen.

:::note
Höhen in der Datei werden als Höhen über der aktuellen Ebene gelesen. Lasten, Halterungen und die Spannungsanalyse selbst stehen nicht in einer PCF-Datei und kommen nicht mit.
:::

## Prüfen, was übernommen wurde

- Die gesamte Rohrlänge je Rohrleitung sollte der Quelle entsprechen.
- Der Problembereich listet je einmal: einen Bogen, dessen Mittelpunkt nicht gleich weit von beiden Enden entfernt ist, Rohr ohne Länge und eine Nennweite, die keine Normgröße ist.

## Rohrleitungen, die schon in einer IFC-Datei stehen

Ist eine IFC-Datei geöffnet, schreibt **PCF exportieren** auch deren eigene Rohrsegmente, Formteile und Armaturen, neben den Leitungen, die Sie gezeichnet haben. Ein Segment erhält seine Enden von seinen Anschlüssen oder von den Enden seines Körpers. Ein Formteil ohne Anschlüsse wird ausgelassen, und der Problembereich sagt das. Sie können allein aus der IFC exportieren, wenn das Modell keine gezeichneten Leitungen hat.

Beim Import werden Halterungen, Abzweigstutzen (Olets), Flansche, Dichtungen und Kappen in der Datei nicht gezeichnet. Der Problembereich listet auf, wie viele von jeder Art ausgelassen wurden, damit nichts stillschweigend verschwindet.
