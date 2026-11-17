---
title: Eine DWG- oder DXF-Zeichnung in 3D ansehen
summary: Stellen Sie den Modellbereich einer Zeichnung auf 3D um, um Höhen, Stärken, 3D-Flächen, Netze und Blöcke zu sehen, sie zu drehen, auf ein Objekt zu klicken und seine Eigenschaften zu sehen, und zu erkennen, was noch nicht gezeichnet wird.
keywords: 3d, dwg, dxf, zeichnung, modellbereich, Schnitt, Ausschnitt, Auswahl, wählen, Eigenschaften, Attribute, Handle, Höhe, Stärke, Extrusion, 3dface, polyface, Netz, 3D-Polylinie, Blöcke, Ansichten, Perspektive, parallel, Grenzen, acis, Volumenkörper
from: a0c6cd17
---

## Was Sie tun

Sehen Sie den Modellbereich einer Zeichnung in 3D an. Linien und Polylinien stehen auf ihren echten Höhen, Objekte mit einer Stärke stehen als Wände auf, und 3D-Flächen, Netze und 3D-Blöcke zeigen sich als Oberflächen, die Sie drehen können. Die Blätter bleiben 2D.

## Schritte

1. Öffnen Sie eine DWG oder DXF. Siehe [Eine DWG- oder DXF-Zeichnung ansehen](topic:view-dwg). Sie öffnet sich in 3D, außer unter {{ui:Settings}} › {{ui:BimCraft}} › **Zeichnungen öffnen in** ist {{ui:Model (2D)}} eingestellt.
2. Klicken Sie aus 2D in der Leiste über der Zeichnung auf {{ui:3D}} oder drücken Sie {{key:3}}.
3. Warten Sie beim ersten Mal einen Moment: Die Statuszeile zeigt „Zeichnung wird in 3D erstellt…“ und danach, wie viele Linien und Flächen sie zeigt.
4. Drehen, verschieben und zoomen Sie (siehe die Tabelle unten).
5. Klicken Sie in der zweiten Leiste auf eine Ansicht: {{ui:Iso}}, {{ui:Top}}, {{ui:Bottom}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}} oder {{ui:Right}}.
6. Klicken Sie auf {{ui:Perspective}}, um zwischen einer perspektivischen und einer parallelen Ansicht umzuschalten.
7. Klicken Sie auf {{ui:Extents}} oder drücken Sie {{key:F}}, um die ganze Zeichnung wieder zu sehen.
8. Klicken Sie erneut auf {{ui:3D}}, drücken Sie {{key:3}}, oder klicken Sie auf {{ui:Model}} oder einen Blattreiter, um zurück in 2D zu gehen.

## Was Sie sehen sollten

- Modellbereich in 3D, Z nach oben, in den eigenen Farben der Zeichnung. Flächen sind einen Ton heller als ihre Kanten.
- Layer, die Sie unter {{ui:Layers}} ausschalten, verschwinden auch aus der 3D-Ansicht.
- Rechts: die Anzahl der Linien und Flächen, die Größe der Zeichnung in X, Y und Z, **Nur in der 2D-Ansicht** und **Noch nicht gezeichnet**.

## Mit einer Schnittebene schneiden

Klicken Sie auf der 3D-Leiste auf {{ui:Section}} oder drücken Sie {{key:X}}. Die Leiste darunter funktioniert wie bei IFC-Modellen (siehe [Ein IFC-Modell mit einer Schnittebene schneiden](topic:section-plane)): Schneiden Sie von {{ui:Top}}, {{ui:Front}} oder {{ui:Side}} aus, ziehen oder tippen Sie den Versatz – hier in den eigenen Einheiten der Zeichnung –, und mit {{ui:Flip}} behalten Sie die andere Seite. Was die Ebene abschneidet, lässt sich nicht wählen. Zurück in 2D nimmt man den Schnitt weg.

## Eigenschaften eines Objekts ansehen

Klicken Sie in der 3D-Ansicht auf ein Objekt. Es färbt sich in der Auswahlfarbe, und {{ui:Properties}} zeigt, was die Datei darüber sagt: Typ, Layer, Farbe, Linientyp und Handle, dann die eigenen Daten, etwa Anfang, Ende und Länge einer Linie, Mittelpunkt und Radius eines Kreises, die Ecken einer 3D-Fläche oder den Block, Einfügepunkt, Maßstab, Drehung und Attributwerte einer Blockreferenz.

- Eine Blockreferenz wird als Ganzes gewählt, die darin verschachtelten Blöcke ebenso.
- Ein Klick wenige Pixel neben einer Linie wählt die Linie.
- Halten Sie {{key:Mod}} und klicken Sie, um weitere Objekte zu wählen oder eines abzuwählen; {{ui:Properties}} zählt sie dann nach Typ.
- {{key:Esc}} oder ein Klick auf leeren Raum hebt die Auswahl auf.
- Objekte auf ausgeschalteten Layern lassen sich nicht wählen.

## Sich bewegen

:::mouse
| Ziel | So geht's |
|---|---|
| Drehen | Mit der mittleren Taste ziehen oder mit der linken Taste |
| Verschieben | Mit der rechten Taste ziehen oder {{key:Shift}} halten und ziehen |
| Zoomen | Mit dem Rad scrollen; es zoomt auf das, was unter dem Mauszeiger liegt |
| Alles sehen | {{ui:Extents}} oder {{key:F}} |
| Von einer Seite aus sehen | Auf eine Fläche, Kante oder Ecke des ViewCube unten rechts klicken |
:::

Der ViewCube kann unter {{ui:Settings}} durch ein Achsensymbol ersetzt oder ausgeblendet werden. Siehe [BimCraft-Einstellungen](topic:settings).

:::mac mouse
Auf dem Trackpad wischen Sie mit zwei Fingern, um zu drehen, halten {{key:Shift}} und wischen zum Verschieben, und zoomen Sie per Pinch-Geste.
:::

:::touch
Ziehen Sie mit einem Finger, um zu drehen. Bewegen Sie zwei Finger auseinander oder zusammen, um zu zoomen, und bewegen Sie beide gemeinsam, um zu verschieben.
:::

## Was in 3D gezeichnet wird

| In der Zeichnung | In 3D |
|---|---|
| Linien, 3D-Polylinien | Auf ihren echten Höhen |
| Polylinien, Kreise, Bögen, Ellipsen | In ihrer eigenen Ebene, auf ihrer Höhenlage, geneigt, wenn die Zeichnung sie neigt |
| Stärke an Linien, Polylinien, Kreisen und Bögen | Wände dieser Höhe; Kreise sind oben und unten geschlossen |
| 3D-Flächen, Polyface-Netze, Polygonnetze | Schattierte Flächen mit ihren sichtbaren Kanten |
| Blöcke | Platziert, gedreht und skaliert in 3D, auch verschachtelte Blöcke |
| Schraffuren | Ihre Umrisse |
| Einfache 2D-Linien | Flach, dort wo sie gezeichnet wurden |

## Nur in der 2D-Ansicht

Text, mehrzeiliger Text und die sichtbaren Attribute von Blöcken werden in 3D in ihrer eigenen Ebene auf ihrer eigenen Höhe gezeichnet, und ein Klick auf sie wählt sie. Breite Polylinien zeigen ihre Breite als flaches Band. Multi-Führungslinien, Bilder und Schraffurmuster werden unter **Nur in der 2D-Ansicht** gezählt. Sehen Sie sie auf der Registerkarte {{ui:Model}} oder auf den Blättern.

## Noch nicht gezeichnet

Volumenkörper und Flächen, die als ACIS-Körper gespeichert sind (3D-Volumenkörper, Körper, Regionen und Flächen), und Unterteilungsnetze werden unter **Noch nicht gezeichnet** mit ihrer Anzahl aufgelistet. Sie werden übersprungen, nicht geschätzt.

## Häufige Fehler

- **Alles wirkt flach.** Die Zeichnung ist 2D: Ihre Linien haben keine Höhe. Klicken Sie auf {{ui:Front}}, um es zu prüfen; eine flache Zeichnung erscheint als Linie.
- **Ein Volumenmodell zeigt nichts.** Volumenkörper aus einem Volumenmodellierer sind ACIS-Körper und stehen unter **Noch nicht gezeichnet**. Exportieren Sie das Modell als IFC oder als 3D-Flächen aus dem Programm, das es erstellt hat.
- **Die Zeichnung ist ein winziger Haufen in der Mitte.** Etwas weit Entferntes im Modellbereich, etwa eine alte Kopie eines Grundrisses, vergrößert die Grenzen. Zoomen Sie mit dem Rad dorthin, wo Sie hinsehen möchten.

## Weiter

- [Mit Layern und Blättern arbeiten](topic:dwg-layers-sheets)
- [Ein IFC-Modell mit einer Schnittebene schneiden](topic:section-plane)
