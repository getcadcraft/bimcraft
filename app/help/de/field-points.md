---
title: Punkte für das Abstecken und für Bestandskontrollen
summary: Nummerieren Sie die Stellen, die ein Trupp aus dem Modell absteckt – Stützenmitten, Wandenden, Ankerschrauben, Hülsen, jedes gewählte Element –, schreiben Sie sie für eine Totalstation und lesen Sie danach die gemessenen Bestandspunkte wieder ein, um zu sehen, was abweicht.
keywords: Absteckpunkte, Abstecken, Absteckung, Totalstation, Vermessung, Punktdatei, csv, txt, pnezd, penzd, xyz, Hochwert, Rechtswert, Höhe, Bestand, Ist, Prüfung, Toleranz, Abweichung, Ankerschrauben, Stützenmitten, Wandenden, Hülsen, Vermessungskoordinaten, Kartenumrechnung
from: acea9606
---

Die Registerkarte {{ui:Punkte}} rechts erstellt aus dem geöffneten Modell die Punkte, die ein Trupp auf der Baustelle absteckt, und prüft danach die Punkte, die er misst.

## Punkte erstellen

1. Öffnen Sie ein IFC-Modell und die Registerkarte {{ui:Punkte}}.
2. Markieren Sie, was abgesteckt werden soll: **Stützenmitten** (der Fußpunkt der Mittellinie jeder Stütze), **Wandenden** (beide Enden der Wandachse an ihrem Fuß), **Ankerschrauben**, **Hülsen** (Elemente, deren Name oder Typ „sleeve“ enthält) und die **gewählten Elemente** (jeweils an ihrem Platzierungspunkt – wählen Sie sie vorher in der Ansicht aus).
3. Wählen Sie die erste Nummer und ein Präfix, die Koordinaten, die Einheiten, die Spalten und die Datei:
   - **Modell**: die eigenen Koordinaten der Datei. **Vermessungsraster**: das Kartenraster der Georeferenzierung des Modells (nur angezeigt, wenn die IFC eine Kartenumrechnung enthält), in Metern oder der von Ihnen gewählten Einheit.
   - Spalten **PNEZD** (Punkt, Hochwert, Rechtswert, Höhe, Beschreibung), **PENZD** oder **XYZ**; **CSV** (Kommas) oder **TXT** (Tabulatoren).
4. Drücken Sie {{ui:Punkte erstellen}}: Die Liste zeigt sie, und die Ansicht markiert sie blau. {{ui:Die Punkte herunterladen}} schreibt die Datei.

Punkte kommen in fester Reihenfolge – nach Art, dann zeilenweise über den Plan –, sodass ein erneutes Erstellen aus demselben Modell dieselben Zahlen ergibt. Die Datei ist diejenige, die CivilCraft öffnet und die EXPORTPOINTS von CadCraft schreibt: ein Punkt je Zeile, drei Dezimalstellen, eine Beschreibung in Anführungszeichen, wenn sie ein Komma enthält.

## Die Bestandspunkte prüfen

Wenn der Trupp die gemessenen Werte zurücksendet, wählen Sie eine **Toleranz** in Millimetern und wie die Punkte zugeordnet werden – nach **Punktnummer** (sie haben Ihre Nummern beibehalten) oder nach dem **nächsten Messpunkt** – und drücken Sie {{ui:Bestandspunkte einlesen…}}. Lesen Sie die Datei in denselben Einheiten und Koordinaten, die Sie geschrieben haben.

Danach liegt jeder Sollpunkt **innerhalb** der Toleranz, **außerhalb** davon oder **nicht gemessen**, und jeder Messpunkt, den niemand angefordert hat, ist **zusätzlich**. Die Tabelle gibt die Abweichungen in der Einheit an, die Sie in der Werkzeugleiste wählen; Fuß werden als Dezimalzoll angezeigt (Ist minus Soll: Rechtswert, Hochwert, Höhe und der Abstand im Plan). Die Ansicht markiert jeden Punkt grün oder rot mit einer Linie zum Messpunkt und grau, wenn er nicht gemessen wurde. {{ui:Bericht (CSV)}} schreibt den gesamten Vergleich.

Hier wird nichts am Modell geändert. Noch nicht umgesetzt: das Abstecken von Deckenkanten, Rasterschnittpunkten oder automatisch erstellten Öffnungen sowie das direkte Senden von Punkten an ein Messgerät – verwenden Sie dafür die Datei.
