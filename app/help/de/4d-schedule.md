---
title: Einen Bauablaufplan am Modell abspielen
summary: Eine Aufgabenliste als CSV öffnen, jede Aufgabe über eine Eigenschaft mit Bauteilen verknüpfen und durch die Termine gehen, um zu sehen, was gebaut ist, was in Arbeit ist und was noch nicht begonnen hat.
keywords: 4D, Terminplan, Bauablauf, Zeitleiste, Bauphasen, Programm, Gantt, Aufgaben, Termine, Simulation, Fortschritt, gebaut, CSV, Stufe, Phase, Arbeitspaket, WBS, Gruppe
from: 1b985a64
---

## Was Sie tun

Verfolgen Sie, wie das Gebäude entsteht: Jede Aufgabe in Ihrem Terminplan ist mit den Bauteilen verknüpft, die sie errichtet, und wird Tag für Tag angezeigt.

## Schritte

1. Öffnen Sie ein IFC-Modell und öffnen Sie {{ui:4D schedule}} im linken Bereich.
2. Klicken Sie auf {{ui:Download a template}} für eine Aufgabenliste mit einer Woche pro Geschoss und ändern Sie sie in einer Tabellenkalkulation. Oder schreiben Sie Ihre eigene.
3. Klicken Sie auf {{ui:Open a task list…}} und wählen Sie die CSV-Datei.
4. Ziehen Sie den Datumsschieber oder klicken Sie auf {{ui:Play}}.

## Die Aufgabenliste

Eine CSV-Datei mit einer Kopfzeile und den Spalten **Task**, **Start**, **Finish**, **Field** und **Value**. Kommas oder Semikola funktionieren beide.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Geschoss 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Dach | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Dach | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Schreiben Sie Daten als YYYY-MM-DD.
- Eine Zeile verknüpft die Aufgabe mit jedem Bauteil, dessen **Field** genau diesen **Value** hat. Das Feld ist eine Eigenschaft wie Storey, Class, Name, Type, Material, Tag oder GlobalId oder eine Eigenschaft, die mit Satz und Name geschrieben wird: `Pset_WallCommon.FireRating`.
- Wiederholen Sie eine Aufgabe in mehreren Zeilen mit denselben Terminen, um weitere Bauteile mit ihr zu verknüpfen.

## Phasen und Arbeitspakete

Fügen Sie eine Spalte **Stage**, eine Spalte **Package** oder beide hinzu, um Aufgaben in Phasen und Arbeitspakete zusammenzufassen. Auch Phase und WBS funktionieren als Spaltennamen.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Bodenplatte Geschoss 1 | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Rohbau | Tragwerk |
| Wände Geschoss 1 | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Rohbau | Tragwerk |
| Türen | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Ausbau | Tischlerarbeiten |

- Eine Aufgabe gehört zu einer Phase und einem Paket. Nennt eine spätere Zeile derselben Aufgabe ein anderes, wird diese Zeile mit ihrer Zeilennummer aufgelistet und ausgelassen.
- Derselbe Paketname in zwei Phasen ergibt zwei Pakete.

Wenn die Liste Gruppen hat, erscheint über dem Datum eine Liste {{ui:Show}}. Wählen Sie eine Phase oder ein Paket, und sie wird als Einheit abgespielt:

- Der Schieber und {{ui:Play}} laufen vom ersten Start bis zum letzten Ende der Gruppe,
- nur die Aufgaben der Gruppe werden aufgelistet und eingefärbt, alles außerhalb der Gruppe ist transparent,
- die Zeile unter der Liste sagt, wie viele ihrer Aufgaben an diesem Datum erledigt, in Arbeit und noch ausstehend sind,
- {{ui:Select its elements}} wählt alle Bauteile der Gruppe aus, für {{ui:Show}}, {{ui:Section}} oder eine Liste.

Wählen Sie **Alle Aufgaben**, um den gesamten Terminplan wieder zu sehen.

## Was Sie sehen

- **Gebaut**: Bauteile, deren Aufgaben alle abgeschlossen sind, in ihren eigenen Farben.
- **In Arbeit**: Bauteile mit einer Aufgabe, die an diesem Tag läuft, in Ocker. Eine Aufgabe läuft vom Startdatum bis zum Enddatum.
- **Noch nicht begonnen**: transparent.
- Bauteile in keiner Aufgabe bleiben, wie sie sind. Die Liste zeigt, wie viele Bauteile jede Aufgabe gefunden hat. Zeilen, die nicht gelesen werden konnten oder nichts gefunden haben, werden mit ihren Zeilennummern aufgelistet.

## Verknüpfungen, Gantt-Diagramm und MS Project

- Öffnen Sie eine Microsoft-Project-XML-Datei (`.xml`) oder eine CSV mit einer Spalte `Predecessors`. Verknüpfungen können Ende-Start, Start-Start, Ende-Ende oder Start-Ende sein, jeweils mit Vorlauf oder Verzug in Tagen.
- Unter der Aufgabenliste zeichnet das Gantt-Diagramm jede Aufgabe als Balken, mit Pfeilen für die Verknüpfungen. Aufgaben auf dem kritischen Pfad sind rot. Eine Verknüpfungsschleife oder ein Vorgänger, der nicht existiert, wird im Bereich aufgelistet.
- {{ui:Save as MS Project XML}} und {{ui:Save CSV with links}} schreiben den Terminplan mit seinen Verknüpfungen zurück.

## Weiter

- [Bauteile nach Klasse, Name oder Eigenschaft finden](topic:find)
- [Bauteile nach einer Eigenschaft einfärben](topic:color-by-property)
