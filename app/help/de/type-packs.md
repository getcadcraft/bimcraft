---
title: Typpakete: Wandtypen als offene Dateien teilen
summary: Wandtypen mit ihren Schichten, Materialien, Tags und Klassifikationscodes sowie Familien als eine offene Datei (einfaches JSON oder IFC) speichern und in ein anderes Projekt hinzufügen. Wandtypen aus einer IFC-Datei eines anderen Programms lassen sich ebenfalls lesen.
keywords: Typpaket, Typen, Wandtyp, teilen, exportieren, importieren, Bibliothek, offenes Format, JSON, IFC, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, Materialien, Schichten, Vorlage, Büronorm, Familien
from: e4c91331
---

## Was Sie erreichen

Übertragen Sie Ihre Wandtypen von einem Projekt in ein anderes oder geben Sie sie jemandem, der mit einem anderen Programm arbeitet. Ein Typpaket enthält jeden Wandtyp mit seinen Schichten, Dicken, Materialien, Kern, Hohlräumen, Schichtpriorität, Detaillierungsgrad, Mengendaten und Klassifikationscodes sowie alle Familien, die Sie hinzufügen. Es ist eine offene Datei: einfacher JSON-Text, den jeder lesen kann, oder eine IFC-Datei. Nichts darin ist an eine Firma, ein Land oder ein Konto gebunden.

## Typen aus einem Projekt speichern

1. Öffnen Sie **Daten** in der Modellleiste und wählen Sie {{ui:Typpakete}}.
2. Aktivieren Sie unter {{ui:Arten aus diesem Projekt speichern}} die Wandtypen, die aufgenommen werden sollen. Die eigenen Typen des Projekts sind aktiviert; ein Starttyp kann hinzugefügt werden und wird als Kopie aufgenommen. Aktivieren Sie Familien, wenn Sie sie aufnehmen möchten.
3. Geben Sie einen {{ui:Paketname}} ein.
4. {{ui:Als Paket speichern (.json)}} lädt eine Datei `.cctypes.json` herunter. {{ui:Als IFC speichern (.ifc)}} lädt eine IFC-Datei herunter, die nur Typen enthält: jeder Wandtyp als IfcWallType mit seinem Materialschichtsatz, seinen Materialien und seiner Klassifikation, für jedes BIM-Programm.

## Typen zu einem Projekt hinzufügen

1. Wählen Sie im selben Dialog {{ui:Ein Paket oder eine IFC-Datei öffnen…}} und wählen Sie ein `.json`-Paket oder eine `.ifc`-Datei.
2. Der Dialog listet auf, was die Datei enthält: jeden Wandtyp mit seiner Dicke, Anzahl der Schichten und Codes, die Materialien und die Familien.
3. Legen Sie fest, was mit {{ui:Eine Art, die dieses Projekt bereits hat}} geschieht: **Die des Projekts behalten**, **Die des Pakets als Kopie hinzufügen** (sie erhält einen neuen Namen, der mit „(2)“ endet) oder **Ersetzen (nur wenn keine Wand sie verwendet)**.
4. {{ui:Zum Projekt hinzufügen}}. Der Dialog listet auf, was hinzugefügt, kopiert, ersetzt oder beibehalten wurde. Es ist ein Rückgängig-Schritt.

Die neuen Typen erscheinen sofort in der Typliste des Wandwerkzeugs.

## Boden-, Dach- und Deckentypen

Die Liste der zu speichernden Typen enthält auch die Boden-, Dach- und Deckentypen des Projekts sowie deren Starttypen (gekennzeichnet als Boden, Dach, Decke). Ein Paket kann alle vier Arten enthalten; jeder Typ nennt seine IFC-Klasse (IfcWallType, IfcSlabType, IfcCoveringType). Ein Boden-, Dach- oder Deckentyp, den Elemente verwenden, wird nicht aus einem Paket ersetzt: Ändern Sie ihn im Typeditor.

## Ein Typ als Bibliothekselement

Wählen Sie genau einen Typ aus und klicken Sie auf **Als Bibliothekselement speichern…**. Dies speichert eine Datei `.cctype.json`: ein Bibliothekselement der Art Typen, das genau diesen einen Typ enthält (seine Schichten, Materialien, Detaillierungsgrad und Klassifikationscodes). Laden Sie es in die Bibliothek hoch, um es zu teilen. {{ui:Ein Paket oder eine IFC-Datei öffnen}} liest auch ein solches Element und fügt seinen Typ wie ein Paket dem Projekt hinzu.

## Gut zu wissen

- Eine IFC-Datei aus einem anderen Programm kann hier ebenfalls geöffnet werden. Jeder ihrer Wandtypen mit Materialschichten wird gelesen: Name, Materialien und Dicken der Schichten sowie ein etwaiger Hohlraum stammen aus der Datei selbst. Welche Schichten der Kern sind und was jede Schicht bewirkt (Oberfläche, Tragwerk, Dämmung), wird geschätzt, der Typ wird als **(geschätzt)** markiert, und Sie sollten ihn im Wandtypeditor prüfen. Ein Wandtyp ohne Schichten wird weggelassen und benannt.
- Ein Material, das das Projekt bereits hat, bleibt unverändert. Ein neues Material, dessen Name bereits vergeben ist, erhält „(Paket)“ nach seinem Namen.
- Ein Typ, den Wände verwenden, wird nie aus einem Paket ersetzt. Ändern Sie ihn im Wandtypeditor, der seine Wände ordnungsgemäß verschiebt.
- Ein Code, der an einer einzelnen Wand gesetzt ist, wird nicht übertragen: Er gehört zu dieser Wand. Ein Code, der am Typ gesetzt ist, wird übertragen.
- Eine Datei mit einem Feld, das das Format nicht kennt, einer Schicht, deren Material fehlt, oder mit Inhalt, der kein reiner Text ist, wird abgelehnt, und die Meldung sagt, wo und warum.
- Noch nicht umgesetzt: Boden-, Dach- und Deckentypen (sie haben in dieser Version keine Typen: Jede hat ihre eigene Dicke), Tür- und Fenstertypen außer Familien sowie Schraffuren oder Farben aus der Datei eines anderen Programms.
