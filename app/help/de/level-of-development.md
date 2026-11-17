---
title: Entwicklungsstufe (LOD) und Meilensteinprüfungen
summary: Elementen eine Entwicklungsstufe zuweisen, deren Herkunft anzeigen, das Modell gegen die Entwicklungsstufe prüfen, die ein Meilenstein verlangt, und fehlende Tags und unbenannte Räume beheben. Jede Prüfung gibt nur Hinweise; nichts wird blockiert.
keywords: LOD, Entwicklungsstufe, LOD 100, LOD 200, LOD 300, LOD 350, LOD 400, LOD 500, Meilenstein, Meilensteintabelle, Modellprüfungen, fehlende Tags, unbenannte Räume, früh generisch, IFC-Klasse, Klassifizierung
from: 2091c79b
---

## Was Sie tun

Legen Sie fest, wie weit jedes Element entwickelt ist, und prüfen Sie danach das gesamte Modell gegen das, was ein Projektmeilenstein verlangt.

## Schritte

1. Wählen Sie ein Element (oder mehrere) und öffnen Sie {{ui:Eigenschaften}}. Suchen Sie {{ui:Entwicklungsstufe}}.
2. Wählen Sie eine Stufe aus der Liste. Jede Stufe wird durch ihre Bedeutung benannt, und jede enthält die darunterliegenden Stufen. Ein Schritt zum Rückgängigmachen deckt die gesamte Auswahl ab.
3. Prüfen Sie, woher die Stufe stammt: vom Element selbst, von seinem Typ oder von einer vor Ort überprüften Markierung.
4. Um das Modell zu prüfen, öffnen Sie links {{ui:Modellprüfungen}} und dann {{ui:LOD-Meilensteine}}. Wählen Sie den Meilenstein und die Tabelle (die Starttabelle oder Ihre eigene CSV- oder JSON-Datei, die Sie mit {{ui:Last}} laden).
5. Klicken Sie auf {{ui:Modell prüfen}}. Die Summen und eine Zeile für jede Tabellenzeile zeigen, was seine Stufe erreicht hat und was nicht; die Befunde erscheinen auch in der Liste „Probleme“.
6. Klicken Sie unter {{ui:Fehlende Tags und unbenannte Räume}} auf {{ui:Suchen}}, bearbeiten Sie die Vorschläge bei Bedarf und klicken Sie auf {{ui:Übernehmen}}.

## Was Sie sehen sollten

- Die Stufe, die Sie am Element gewählt haben, daneben die IFC-Klasse und die Klassifizierungscodes.
- Summen und Zeilen für den Meilenstein. Eine Tabelle ändert nie die Bedeutung einer Stufe: Die Skala ist festgelegt, eine Tabelle legt nur fest, welche Stufe ein Meilenstein braucht.
- „Früh generisch bleiben“: Hinweis, Elemente bei einem frühen Meilenstein generisch zu halten. Es ist nur ein Hinweis.

## Gut zu wissen

- Hier wird nichts blockiert. Ein Modell unterhalb der Stufe, die ein Meilenstein verlangt, wird aufgelistet, aber nicht abgelehnt.
- Die drei Teile einer Stufe (Geometrie, Informationen, Dokumentation) können jeweils einzeln gesetzt werden. Eine Markierung zeigt erreicht, unterschritten oder nicht angegeben.
