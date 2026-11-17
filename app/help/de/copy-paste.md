---
title: "Bibliothekselemente kopieren, einfügen und duplizieren"
summary: "Ein platziertes Bibliothekselement kopieren und dort einfügen, wo Sie klicken, an gleicher Position neben dem Original oder in ein anderes Modell; die Eigenschaften anderer Bauteile als Text kopieren; rückgängig machen und wiederholen."
keywords: kopieren, einfügen, duplizieren, Zwischenablage, an gleicher Position einfügen, ausschneiden, löschen, alles auswählen, rückgängig, wiederholen, Menü Bearbeiten, mehr, Bibliothekselement, Platzierung, Wiederholung, Anordnung
from: 6ac15931
---

## Was Sie tun

Legen Sie weitere Kopien eines bereits platzierten Elements an: einen zweiten Arbeitstisch, eine Reihe Waschbecken. Dieses Thema behandelt **platzierte Bibliothekselemente**, also die Elemente, die BimCraft in das Modell geschrieben hat. Eines davon lässt sich in jedes Modell einfügen, auch in einen anderen Tab. Wände, Türen und alle anderen Bauteile werden innerhalb ihres eigenen Modells auf dieselbe Weise kopiert, ausgeschnitten, eingefügt und gelöscht: siehe [Bauteile löschen, ausschneiden, kopieren und einfügen](topic:edit-elements).

Die Befehle befinden sich in der Symbolleiste über dem Modell: {{ui:Rückgängig}}, {{ui:Wiederholen}}, {{ui:Kopieren}}, {{ui:Einfügen}} und {{ui:Mehr}}, ein Menü mit {{ui:Ausschneiden}}, {{ui:Kopieren}}, {{ui:Einfügen}}, {{ui:An gleicher Position einfügen}}, {{ui:Duplizieren}}, {{ui:Löschen}}, {{ui:Alles auswählen}} und {{ui:Auswahl aufheben}}. Ein Befehl, der gerade nicht ausgeführt werden kann, ist ausgegraut. Fahren Sie mit der Maus darüber, um den Grund zu lesen, oder klicken Sie darauf; dann nennt die Statuszeile den Grund.

## Schritte

1. Öffnen Sie ein IFC-Modell mit einem Bibliothekselement darin, oder platzieren Sie zuerst eines. Siehe [Geräte und Möbel aus der Bibliothek platzieren](topic:place-from-library).
2. Klicken Sie das Element in der 3D-Ansicht an. Seine Eigenschaften zeigen ein Feld **Bibliothekselement**.
3. Klicken Sie auf {{ui:Kopieren}} oder drücken Sie {{key:Mod+C}}.
4. Klicken Sie auf {{ui:Einfügen}} oder drücken Sie {{key:Mod+V}}. Die Platzierungsleiste öffnet sich, und ein transparenter Kasten folgt dem Zeiger, gedreht wie das Original.
5. Drücken Sie {{key:R}}, um es um 90° zu drehen, {{key:Tab}}, um seine Rückseite an einer Wand einrasten zu lassen, oder geben Sie X und Y in der Platzierungsleiste ein.
6. Klicken Sie, wo die Kopie hinkommt. Jeder Klick platziert eine weitere Kopie; drücken Sie {{key:Esc}}, um aufzuhören.
7. Klicken Sie auf {{ui:Als IFC speichern}}, um die bearbeitete Kopie des Modells herunterzuladen.

## An gleicher Position einfügen

{{ui:Mehr}}, {{ui:An gleicher Position einfügen}} oder {{key:Mod+Shift+V}} fügt ohne Klicken ein, an derselben X- und Y-Position und gleich gedreht:

- **In dasselbe Modell, auf demselben Geschoss**: Zwei Elemente genau an einer Stelle wären nutzlos. Deshalb kommt die Kopie direkt neben das Original, um eine Elementbreite plus 100 mm entlang der eigenen Breite des Elements versetzt. Fügen Sie von der neuen Kopie erneut an gleicher Position ein, um eine Reihe zu bilden.
- **Auf ein anderes Geschoss oder in ein anderes Modell**: genau dieselbe X- und Y-Position und Drehung. BimCraft verwendet das Geschoss mit demselben Namen; gibt es keines, das Geschoss mit der nächstliegenden Höhe. Die Statuszeile zeigt an, welches.

## Duplizieren

{{ui:Mehr}}, {{ui:Duplizieren}} oder {{key:Mod+D}} kopiert das gewählte Element und startet sofort das Einfügen: ein Schritt statt zwei.

## In ein anderes Modell oder in einen anderen Tab

Was Sie kopieren, wird in diesem Browser aufbewahrt. So können Sie ein anderes IFC-Modell oder BimCraft in einem anderen Tab öffnen und dort einfügen. Das andere Modell braucht das Bibliothekselement selbst: BimCraft hat es, wenn das Element in diesem Tab platziert, ersetzt oder aktualisiert wurde. Ein Element, das in einer früheren Sitzung platziert wurde, lässt sich nur in seinem eigenen Modell erneut einfügen. In einem anderen Modell platzieren Sie es über den Tab {{ui:Bibliothek}}.

## Was Sie sehen sollten

- Die Kopie im Modell, ausgewählt, mit demselben Bibliothekselement, derselben Lizenz, denselben Gerätedaten, derselben Menge und Notiz wie das Original sowie der **nächsten freien Elementnummer**. Ändern Sie die Nummer in den Eigenschaften unter `CadCraft_Placement`.
- „Platziert: *Element* (Element *n*)“ in der Änderungsliste. {{key:Mod+Z}} macht es rückgängig; {{key:Mod+Y}} stellt es wieder her.

## Gut zu wissen

- Kopien teilen den Typ des Originals. Daher verwenden alle dieselbe Geometrie, so wie beim zweimaligen Platzieren desselben Elements.
- {{ui:Rückgängig}} und {{ui:Wiederholen}} gelten für jede Änderung: bearbeitete Werte, Platzierungen, Einfügungen, Austausche und Aktualisierungen. Wiederholen stellt eine Platzierung an derselben Stelle wieder her. Eine neue Änderung löscht, was sonst wiederholt werden könnte.
- In der 2D-Ansicht einer Zeichnung gibt es nichts zu wählen und daher nichts zu kopieren. Verwenden Sie {{ui:In CadCraft bearbeiten}}, um die Zeichnung zu ändern, wenn es angezeigt wird.

## Häufige Fehler

- **{{ui:Einfügen}} meldet, die Elemente stammen aus einem anderen Modell.** Das zuletzt Kopierte war ein Bauteil oder mehrere Bauteile. Diese lassen sich nur in ihr eigenes Modell einfügen. Wählen Sie ein platziertes Bibliothekselement aus und kopieren Sie es.
- **{{ui:Einfügen}} meldet, die Kopie stammt aus einem anderen Modell ohne ihr Bibliothekselement.** Platzieren Sie das Element einmal in diesem Tab über den Tab {{ui:Bibliothek}}, dann kopieren und einfügen Sie es.
- **{{key:Mod+C}} kopiert stattdessen Seitentext.** Auf der Seite war Text ausgewählt. Klicken Sie zuerst auf das Modell.

## Siehe auch

- [Tasten und Maus](topic:keyboard#edit)
- [BimCraft-Einstellungen](topic:settings)
