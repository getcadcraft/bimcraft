---
title: Eigene Objekte und Familiendateien in die Bibliothek bringen
summary: Lesen Sie Familiendateien (.rfa) sowie IFC-, DWG-, DXF-, glTF- oder OBJ-Dateien in der Registerkarte Bibliothek, platzieren Sie sie wie jedes Bibliothekselement und behalten Sie sie unter Meine Objekte, einer privaten Liste, die nur Sie sehen.
keywords: rfa, Familie, Familien, Familienbibliothek, eigene Objekte, meine Objekte, private Objekte, private Bibliothek, Objekte importieren, Herstellerinhalte, BIM-Objekt, IFC-Objekt, gltf, obj, DWG-Block, behalten, wechseln, migrieren
from: 886261f8
---

## Was Sie tun

Bringen Sie bereits vorhandene Objekte in BimCraft: eine Familienbibliothek aus Revit, einen IFC- oder DWG-Download eines Herstellers oder ein Netz aus einem anderen Modellierprogramm. Sie lesen die Datei in der Registerkarte {{ui:Bibliothek}}, platzieren das Objekt als vollwertiges IFC-Bauteil in Ihrem Modell und behalten es unter {{ui:Meine Objekte}}, wenn Sie es später wieder verwenden möchten.

## Schritte

1. Öffnen Sie ein IFC-Modell oder beginnen Sie ein neues Gebäude.
2. Klicken Sie auf die Registerkarte {{ui:Bibliothek}} neben {{ui:Eigenschaften}}.
3. Klicken Sie auf {{ui:Dateien…}} und dann auf {{ui:Datei wählen…}}. Wählen Sie eine Datei oder mehrere gleichzeitig: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` oder `.csv`. Oder klicken Sie auf {{ui:Ordner wählen…}}, um einen ganzen Ordner und die darin liegenden Ordner zu lesen (bis zu 200 Dateien auf einmal).
4. Klicken Sie auf eine Karte, um zu sehen, was gelesen wurde: die Planvorschau, den Namen, Hersteller und Modell, die Maße und die Hinweise.
5. Klicken Sie auf {{ui:Im Plan platzieren}} oder {{ui:Im Modell platzieren}}, um es zu platzieren.
6. Um es in anderen Projekten wieder zu verwenden, klicken Sie auf {{ui:In meinen Objekten behalten}}. Wenn mehrere Dateien gelesen wurden, behält {{ui:Alle in meinen Objekten behalten}} sie in einem Schritt.
7. Später finden Sie sie, wenn Sie in der Registerkarte Bibliothek auf {{ui:Meine Objekte}} klicken. Sie werden wie jedes Bibliothekselement platziert, ausgetauscht und aktualisiert.

Die Dateien werden in dieser Registerkarte gelesen. Nichts wird hochgeladen, bis Sie {{ui:In meinen Objekten behalten}} wählen.

## Was aus jeder Dateiart gelesen wird

| Datei | Was Sie erhalten |
|---|---|
| IFC | Jeder Elementtyp als Objekt mit seiner echten 3D-Form, IFC-Klasse und Eigenschaftssätzen |
| glTF, GLB, OBJ | Ein Objekt mit seiner echten 3D-Form als Netz. Legen Sie vorher die Einheiten und die Oben-Richtung fest. |
| DWG, DXF | Jeder Block als Objekt mit seiner Planzeichnung und seinen Attributen |
| Familiendatei (`.rfa`) | Name, Kategorie, Hersteller, Modell, Parameter und Typen der Familie. **Nicht deren 3D-Form:** Ein Quader mit Breite, Tiefe und Höhe der Familie steht an ihrer Stelle. |
| CSV | Ein Objekt pro Zeile: Name, Maße und Daten, als Quader gezeichnet |

## Familiendateien und ihre 3D-Form

Die 3D-Form in einer `.rfa`-Datei ist in einem nicht dokumentierten Format gespeichert. BimCraft liest deshalb die Daten der Familie und rät ihre Geometrie nicht. Die Karte weist darauf hin: „Geometrie aus dieser Familie nicht gelesen; ein Quader steht an ihrer Stelle.“

Um eine Familie mit ihrer echten Form zu übernehmen, exportieren Sie sie aus dem Programm, in dem sie erstellt wurde (Revit):

1. Öffnen Sie die Familie oder ein Projekt, in dem die Familie platziert ist.
2. Wählen Sie **Datei > Exportieren > IFC**. Siehe [die Exporteinstellungen, die hier am besten funktionieren](topic:rvt-to-ifc).
3. Lesen Sie in BimCraft die `.ifc`-Datei mit {{ui:Dateien…}}. Jeder Familientyp kommt als eigenes Objekt mit seiner Form und seinen Eigenschaftssätzen an.

Viele Hersteller bieten neben der Familiendatei einen IFC- oder DWG-Download an. Diese werden direkt gelesen.

## Familientypen

Eine Familie mit mehreren Typen kommt als ein Element mit einer Auswahl {{ui:Variante}} an, eine Variante pro Typ. Jede Variante hat die Werte, die sich zwischen den Typen unterscheiden, und einen eigenen Quader, wenn der Typ eine Breite und eine Tiefe hat. Eine Familie mit einem Typ ist ein einfaches Element, das mit den Werten dieses Typs gefüllt ist.

Manche Familien speichern ihre Typen in einem Typenkatalog: einer `.txt`-Datei mit demselben Namen neben der Familiendatei. Wählen Sie beide zusammen oder wählen Sie den Ordner. Dann werden die Zeilen des Katalogs zu Varianten.

## Die Daten einer Familie an einer echten Form

Liegt in einem Ordner eine Familiendatei und eine IFC-, glTF- oder OBJ-Datei mit demselben Namen (`Chair.rfa` und `Chair.ifc`), wählen Sie beide zusammen oder wählen Sie den Ordner. BimCraft erstellt ein Element: Die Familiendatei liefert Name, Hersteller, Modell, Parameter und Typen, die andere Datei die echte 3D-Form. Die Hinweise sagen, aus welcher Datei die Form stammt. Eine Form wird für alle Typen verwendet.

Wenn in einer Familiendatei ein Bild gespeichert ist, zeigen die Details des Elements dieses Bild unter der Planzeichnung. Das Bild wird nur dort angezeigt; es wird nicht mit dem Element gespeichert.

## Meine Objekte

{{ui:Meine Objekte}} ist Ihre eigene, private Liste in der Bibliothek. Nur Sie sehen, was darin steht: Sie ist nicht in der öffentlichen Bibliothek, nicht in der Suche und wird nicht Ihrem Team angezeigt. Sie folgt Ihrem Konto, sodass dieselben Objekte auf einem anderen Computer da sind, sobald Sie sich bei der Bibliothek anmelden.

- Sie müssen bei der Bibliothek angemeldet sein, um ein Objekt zu behalten. Siehe [bei der Bibliothek anmelden](topic:library-credits).
- Wenn Sie ein Objekt behalten, wird nur dieses eine Objekt an Ihr Konto gesendet. Bis dahin bleibt es auf Ihrem Computer.
- {{ui:Aus meinen Objekten entfernen}} nimmt ein Objekt aus der Liste. Bereits platzierte Kopien in Zeichnungen bleiben erhalten.
- Um ein Objekt mit allen zu teilen, laden Sie es stattdessen in die öffentliche Bibliothek hoch, unter einer Lizenz Ihrer Wahl.

:::note
Meine Objekte wird gerade getestet und ist für Ihr Konto möglicherweise noch nicht freigeschaltet. Fehlt die Quelle, oder heißt es „Meine Objekte ist für dieses Konto noch nicht freigeschaltet“, können Sie Ihre eigenen Dateien trotzdem mit {{ui:Dateien…}} lesen und platzieren. Sie werden in Ihrem Modell gespeichert.
:::

## Häufige Fehler

- **Die echte Form aus einer `.rfa` erwarten.** Nur deren Daten werden gelesen. Exportieren Sie für die Form IFC.
- **Zwei Elemente, wo Sie eines erwartet haben.** Eine Familie und ihre Formdatei werden nur verbunden, wenn ihre Namen bis auf die Endung genau übereinstimmen und sie im selben Ordner liegen.
- **Ein Netz ist tausendmal zu groß oder liegt auf der Seite.** Stellen Sie {{ui:Einheiten der Datei}} und {{ui:Oben-Achse eines Netzes}} unter {{ui:Dateien…}} ein, bevor Sie die Datei wählen.
- **„Keine Familiendaten“ bei einer Datei.** Es handelt sich um ein Projekt (`.rvt`, mit anderer Endung gespeichert) oder um eine Familienvorlage, nicht um eine Familie. Siehe [Projekt- oder Familiendatei lesen](topic:read-rvt-file).
- **Inhalte behalten, die Sie nicht speichern dürfen.** Manche kostenpflichtigen Bibliotheken erlauben keine Kopien außerhalb ihres eigenen Dienstes. Prüfen Sie die Bedingungen für Inhalte, die Sie nicht selbst erstellt haben.
