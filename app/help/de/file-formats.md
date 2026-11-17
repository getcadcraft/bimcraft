---
title: Was BimCraft aus jedem Format liest
summary: Genau das liest BimCraft aus IFC-, Projekt- und Familiendateien, DWG und DXF, und was es unberührt lässt.
keywords: Formate, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, Versionen, Kompatibilität, was gelesen wird
from: 9b8dfb4f
---

## IFC

| Gelesen | Details |
|---|---|
| Geometrie | Jedes Element mit einer Form, farbig wie in der Datei angegeben. Räume und Flächen werden durchsichtig gezeichnet und zunächst ausgeblendet |
| Geschosse | Gebäudegeschosse in Höhenreihenfolge und welche Elemente auf jedem stehen. Elemente ohne Geschoss werden als „Auf keinem Geschoss“ gruppiert |
| Anzahl der Elemente | Wie viele Elemente jeder Art (Wände, Türen, Decken …), angezeigt in {{ui:Bauteile}} |
| Projektangaben | Projektname, langer Name und Phase; Schema; das exportierende Programm, Autor und Exportdatum aus dem Dateikopf |
| Bauteildaten | Name, Typ, Objekttyp, Kennzeichen, Beschreibung, GlobalId; jeder Eigenschaftssatz und Mengensatz am Element und an seinem Typ |

Bearbeitbar sind: Name, Objekttyp, Kennzeichen, Beschreibung und einzelne Eigenschaftswerte. Gespeichert wird als neue IFC-Datei. Die Schemas IFC2X3, IFC4 und IFC4X3 öffnen sich, gelesen von der eigenen IFC-Engine von BimCraft; alles, was sie noch nicht zeichnen kann, wird im Bereich {{ui:Datei}} unter **Noch nicht gezeichnet** aufgelistet. Das Modell wird beim Öffnen zum Ursprung verschoben, daher erscheint ein weit davon platziertes Modell dennoch in der Mitte des Bildschirms. `.ifczip` und `.ifcxml` öffnen sich nicht.

## Projekt- und Familiendateien

`.rvt`-Projekte, `.rte`-Projektvorlagen, `.rfa`-Familien und `.rft`-Familienvorlagen.

| Gelesen | Details |
|---|---|
| Dateiinformationen | Version und Build, Teamarbeit, Pfad des zentralen Modells, Pfad der zuletzt gespeicherten Datei, Benutzername, Gebietsschema, Dokument-GUID |
| Projektinformationen | Die eigenen Felder des Projekts (Name, Nummer, Auftraggeber, Adresse, Status …), ohne Standardwerte für neue Projekte |
| Familieninformationen | Familienname, Kategorie, Version, letzte Aktualisierung und ihre Parameter nach Gruppe |
| Verknüpfungen | Die Liste der verknüpften Modelle, CAD-Verknüpfungen, Bilder und Keynote-Tabellen, auf die die Datei verweist |
| Vorschaubild | Die in der Datei gespeicherte Miniaturansicht |

Nicht gelesen werden: das 3D-Modell, Bauteile, Ansichten, Blätter und Listen. Sie sind in einem nicht dokumentierten Format gespeichert. BimCraft liest nur einige zehn Kilobyte aus jeder Datei, daher spielt die Dateigröße kaum eine Rolle.

## Projektdateien .pln, .pla, .tpl und .bpn

Noch nicht gelesen: BimCraft meldet dies, wenn Sie eine öffnen. Exportieren Sie das Modell als IFC und die Zeichnungen als DWG; siehe [.pln- und .pla-Projektdateien öffnen](topic:pln-project-files).

## DWG und DXF

| Gelesen | Details |
|---|---|
| Bereiche | Modellbereich und jedes Blatt (Layout) in der Reihenfolge der Reiter |
| Ansichtsfenster | Die Ansichtsfenster jedes Blatts mit ihrem Maßstab, ihrer Drehung und ihren eingefrorenen Layern |
| Layer | Name, Farbe, Ein/Aus, eingefroren, Plot-Kennzeichen und Linienstärke |
| Objekte | Linien, Polylinien, Bögen, Kreise, Ellipsen, Splines, Schraffuren und Volumenkörper, Text und mehrzeiliger Text, Blöcke und Attribute, Bemaßungen, Führungslinien und Multi-Führungslinien, Tabellen, Punkte, Bilder |
| Externe Referenzen | Gezeichnet dort, wo sie eingefügt sind, wenn ihre Dateien gefunden werden |
| Bilder | Gezeichnet aus den Bilddateien, wenn sie gefunden werden (PNG, JPEG, GIF, BMP, WebP; nicht TIFF) |
| Ausstattungskennzeichen | Kennzeichen von Gastronomie-Ausstattung (`KCL-ITEM`-Attribute), für die Ausstattungsliste |

Alles andere wird unter **Noch nicht gezeichnet** gezählt und nie geraten. DWG-Formate von AutoCAD 2000 bis 2018 sind die geprüften (R13- und R14-Dateien werden ebenfalls akzeptiert, aber keine war im Testsatz; ältere DWGs öffnen sich nicht); der Bereich {{ui:Zeichnung}} zeigt den Formatcode (etwa AC1032). DXF-Dateien aller Versionen öffnen sich, einschließlich R12. Beide werden von den eigenen Lesern von BimCraft auf dieser Registerkarte gelesen. Nichts wird zurück in DWG oder DXF gespeichert.

## In einem Ordner

| Art | Erweiterungen | Im Bericht |
|---|---|---|
| Modelle | `.rvt` `.rfa` `.rte` `.rft` | Gruppiert mit nummerierten Sicherungen, auf Integrität geprüft, Infokarte gelesen, Verknüpfungen geprüft |
| IFC | `.ifc` | Aufgelistet; öffnet sich in 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Aufgelistet mit den Modellen, die sie verknüpfen; DWG und DXF öffnen sich in 2D, DGN nicht |
| Reste | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Aufgelistet unter **Beiseitegelegt** |
| Hilfsordner | `*_backup`, `*_log`, `Revit_temp`, versteckte Ordner | Aufgelistet unter **Beiseitegelegt**, nicht gelesen |

Siehe [Ordnerbericht: Rollen, Status und Verknüpfungen](topic:folder-roles).
