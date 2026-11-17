---
title: Felder im Bereich Eigenschaften
summary: Was jedes Feld im Bereich Eigenschaften sowie in den Bereichen Datei, Zeichnung und Ordner bedeutet und welche Sie ändern können.
keywords: Eigenschaften, Felder, Attribute, GlobalId, GUID, kopieren, Wert kopieren, alles kopieren, CSV, Zwischenablage, Seriennummer, Tag, Objekttyp, Zeile, Express-ID, Eigenschaftssatz, Pset, Mengen, Schema, Dateibereich
from: fe55b435
---

## Ein IFC-Element

Der obere Teil des Bereichs {{ui:Eigenschaften}} zeigt die Art des Elements ohne das Präfix „Ifc“ (zum Beispiel "Door", "WallStandardCase" oder "FurnishingElement") sowie seinen Namen oder „Unbenannt“.

| Feld | Bedeutung | Bearbeitbar |
|---|---|---|
| Name | Der Name des Elements, oft der Familien- und Typname vom Exporter | Ja |
| Typ | Der Name des Typs des Elements, wenn es einen hat | Nein |
| Objekttyp | Eine frei formulierte Typbeschreibung, die manche Exporter ausfüllen | Ja |
| Tag | Die Kennung oder Marke des Elements; viele Exporter schreiben hier die Element-ID hin | Ja |
| Beschreibung | Freier Text | Ja |
| GlobalId | Die dauerhafte 22-stellige IFC-Kennung des Elements, in jedem Export desselben Elements gleich | Nein |
| Zeile | Die Zeilennummer (`#1234`) des Elements in dieser IFC-Datei. Sie ändert sich zwischen Exporten | Nein |

Darunter folgen die **Eigenschaftssätze**, nach Namen sortiert:

- Jeder Satz öffnet und schließt sich, wenn Sie auf seinen Namen klicken. Die ersten drei sind geöffnet.
- Ein mit „(type)“ markierter Satz gehört zum Typ des Elements: „Typeigenschaft: Eine Änderung hier gilt für jedes Element dieses Typs.“
- Mengensätze (Längen, Flächen, Volumen, Anzahlen, Gewichte) sind nur lesbar.
- Listen und Aufzählungswerte werden nur lesbar angezeigt.
- Ja-/Nein-Werte werden als **Ja** oder **Nein** angezeigt.
- Zahlen werden für die Anzeige auf vier Nachkommastellen gerundet. Längen (eine Längeneigenschaft oder die Länge einer Menge) werden in den auf der Symbolleiste gewählten {{ui:Einheiten}} angezeigt, mit der Einheit daneben. Sie können einen neuen Wert in dieser Einheit eingeben oder mit einer anderen Einheitenangabe (2.4 m, 8'-0"). BimCraft schreibt dann die Zahl der Datei zurück. Andere Zahlen werden so angezeigt, wie die Datei sie hat.
- Ein leerer Wert wird als *leer* angezeigt. Ein bearbeiteter Wert ist fett gedruckt und hat einen blauen Balken daneben.

## Einen Wert kopieren

Jeder Wert im Bereich {{ui:Eigenschaften}} hat daneben eine kleine Kopierschaltfläche. Klicken Sie darauf, um diesen Wert genau so, wie er angezeigt wird, in die Zwischenablage zu legen, zum Beispiel eine GlobalId, eine Seriennummer oder einen beliebigen Wert eines Eigenschaftssatzes. Kopieren startet nie eine Bearbeitung.

Oben kopiert {{ui:Alles kopieren}} alle Werte des Elements als Text, Satz für Satz. {{ui:Als CSV kopieren}} kopiert sie als Zeilen mit Gruppe, Eigenschaft und Wert zum Einfügen in eine Tabellenkalkulation; leere Werte bleiben erhalten, damit jedes Feld eine Zeile hat. Das funktioniert genauso für ein Element eines anderen geöffneten Modells. Sind mehrere Modelle geöffnet, beginnt die CSV mit einer Spalte „Modell“, die ihre Datei nennt.

## Der Dateibereich (IFC)

| Feld | Bedeutung |
|---|---|
| Datei, Größe | Die Datei, die Sie geöffnet haben |
| Schema | Die IFC-Version, zum Beispiel IFC2X3 oder IFC4 |
| Projekt | Der Name des Projekts und sein langer Name |
| Phase | Die Projektphase, wenn der Exporter eine geschrieben hat |
| Exportiert aus | Das exportierende Programm, aus dem Dateikopf |
| Autor | Der Autor im Dateikopf |
| Exportiert | Datum und Uhrzeit im Dateikopf |
| Elemente | Wie viele Elemente mit einer Form gezeichnet wurden |
| Dreiecke | Wie viele Dreiecke ihre Formen ergeben; ein Maß dafür, wie groß das Modell ist |

## Der Dateibereich (Projekt- und Familiendateien)

| Feld | Bedeutung |
|---|---|
| Art | Projekt, Projektvorlage, Familie oder Familienvorlage |
| Gespeichert in | Die Version, die die Datei zuletzt gespeichert hat |
| Build | Der genaue Build dieser Version |
| Gelesen | Wie viel der Datei BimCraft gelesen hat, im Verhältnis zu ihrer Größe |

## Der Zeichnungsbereich (DWG und DXF)

| Feld | Bedeutung |
|---|---|
| Format | Die Version, in der die Zeichnung gespeichert wurde, mit ihrem Formatcode, zum Beispiel AC1032 |
| Einheiten | Die Einfügeeinheiten der Zeichnung, wenn sie gesetzt sind |
| Objekte | Wie viele Objekte gelesen wurden |
| Layer | Wie viele Layer es gibt |
| Blätter | Wie viele Blätter (Layouts) es gibt, oder Keine |
| Externe Referenzen | Wie viele ihrer externen Referenzen gefunden und geladen wurden |
| Ausrüstung | Wie viele gekennzeichnete Ausrüstungsteile auf Blättern liegen |

## Der Ordnerbereich

| Feld | Bedeutung |
|---|---|
| Ordner, Dateien, Größe | Der geöffnete Ordner, wie viele Dateien er enthält und ihre Gesamtgröße |
| Modelle | Projekt- und Familiendateien, wobei jede mit ihren Sicherungen einmal gezählt wird |
| CAD-Zeichnungen, IFC-Modelle | Wie viele von jedem |
| Probleme | Wie viele Modellkopien unvollständig oder nicht lesbar sind, oder Keine |
