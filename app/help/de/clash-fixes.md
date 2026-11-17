---
title: Kollisionen mit den Lösungen jedes Fachbereichs klären
summary: Lösungen vorschlagen listet aus den Kollisionsergebnissen für jede Kollision auf, was jeder Fachbereich dagegen tun könnte, etwa einen Kanal unter einem Träger umleiten, ein Rohr zur Seite schieben, eine Stütze versetzen oder eine Öffnung in einem Träger. Jede Lösung wird an einer Kopie des Modells mit ihren Abwägungen geprüft, damit Sie annehmen oder ablehnen. Angenommene Lösungen werden als ein Rückgängig-Schritt eingefügt.
keywords: Kollision, Kollisionslösung, Kollisionen klären, Koordination, Lösungen vorschlagen, umleiten, Umgehung, Versatz, Kanal, Rohr, Kabelrinne, Träger, Stütze, Öffnung, Hülse, Abwägung, Fachbereich, Tragwerk, Haustechnik, Sanitär, Elektro, Architektur, Assistent
from: f7bafdd9
---

## Was Sie tun

Machen Sie aus einer Liste von Kollisionen Entscheidungen. Jeder Fachbereich (Tragwerk, Technik, Sanitär, Elektro, Architektur) schlägt Lösungen nur für seine eigenen Elemente vor. Jede Lösung wird an einer Kopie des Modells geprüft, und Sie entscheiden.

## Schritte

1. Führen Sie zuerst die Kollisionsprüfung aus. Siehe [Auf Kollisionen prüfen](topic:clash-check) und [Rohre und Kanäle gegen das Tragwerk prüfen](topic:mep-against-structure).
2. Klicken Sie unter den Ergebnissen auf {{ui:Lösungen vorschlagen}}. Das Bedienfeld **Vorgeschlagene Lösungen** öffnet sich neben dem Modell.
3. Für jede Kollision sehen Sie die Vorschläge jedes Fachbereichs, die besten zuerst. Jede Zeile sagt, was sie bewirkt, und nennt ihre Abwägungen: ob sie die Kollision löst, wie viele neue Kollisionen sie erzeugt, welche Regeln sie verletzt, wie viel Strecke sie hinzufügt oder wie weit sie verschiebt, wie viele Formstücke nötig sind und ein Kostenwert.
4. Klicken Sie auf {{ui:Anzeigen}}, um die Elemente in 3D zu sehen. Klicken Sie auf {{ui:Akzeptieren}} bei der gewünschten Lösung (eine je Kollision) oder auf {{ui:Ablehnen}}.
5. Die Zeile unten zeigt, was alle angenommenen Lösungen zusammen bewirken: wie viele Kollisionen gelöst sind, wie viele übrig bleiben und ob etwas Neues kollidiert.
6. Klicken Sie auf {{ui:Akzeptierte Lösungen anwenden (ein Rückgängig-Schritt)}}. Die Kollisionsprüfung läuft erneut. {{ui:Rückgängig}} nimmt alle auf einmal zurück.

## Was jeder Fachbereich darf

- **Technik** (Kanäle, Heizungs- und Kühlleitungen): oben oder unten am getroffenen Abschnitt vorbeiführen, die ganze Führung anheben oder absenken, seitlich verschieben, einen rechteckigen Kanal bei gleicher Fläche flacher machen.
- **Sanitär** (Wasser, Abwasser, Gas, Brandschutz): dieselben Bewegungen, außer dass einem Freispiegel-Abwasserrohr nie eine Umgehung gegeben wird. Es kann nur als Ganzes verschoben werden und behält sein Gefälle.
- **Elektro** (Kabelrinnen und Leerrohre): dieselben Bewegungen; eine Kabelrinne muss 150 mm frei darüber halten, um Kabel zu verlegen.
- **Tragwerk**: eine Stütze verschieben (bis zu 300 mm) oder eine Öffnung im Steg eines Trägers oder in einer Decke für die Führung schaffen, die hindurchgeht. Jede tragwerkliche Lösung muss vom Tragwerksplaner freigegeben werden.
- **Architektur**: eine Hülse in einer Wand für die Führung, die hindurchgeht, oder eine Wand verschieben, von der bekannt ist, dass sie keine Last trägt.

## Was Sie sehen sollten

- Lösungen, die eine Regel verletzen, sind markiert: näher als der Abstand von 25 mm zu etwas anderem, unter der lichten Höhe von 2,100 mm, eine Stegöffnung größer als 40 % der Trägerhöhe oder zu nah an ihren Enden, ein Träger, der seine Spannweite ändern würde.
- Lösungen, die BimCraft umsetzen kann, werden im Modell angewendet: Führungen, die Sie mit den Werkzeugen Rohr und Kanal gezeichnet haben, und Stützen, die Sie gezeichnet haben. Die anderen sagen **Nur Empfehlung**; das Annehmen fügt dann stattdessen ein Thema auf der Registerkarte {{ui:Themen}} hinzu.

## Gut zu wissen

- Die Lösungen stammen aus eingebauten Regeln des Programms; dafür wird keine KI verwendet.
- Wenn Sie einen Assistenten verbinden (siehe [Einen KI-Assistenten mit Ihrem Modell arbeiten lassen](topic:assistants)), kann er die Kollisionen lesen und eigene Vorschläge für einen Fachbereich im offenen Bedienfeld hinzufügen. Sie werden auf dieselbe Weise geprüft, mit dem Namen des Assistenten markiert, und nichts wird verändert, bis Sie annehmen und anwenden.
- Die Kopie wird mit Kästen um jedes Element und jeden Abschnitt einer Führung geprüft. Daher kann eine schräge Führung eine Kollision zeigen, die die Kollisionsprüfung nicht zeigen würde. Führen Sie die Kollisionsprüfung nach dem Anwenden erneut aus: Sie hat das letzte Wort.
- Die Grenzen (wie weit eine Führung verschoben werden darf, wie hoch eine Umgehung steigen darf, der Abstand) sind die Voreinstellungen, die im Bedienfeld stehen.

## Weiter

- [Themen und BCF-Dateien](topic:issues-bcf)
- [Rohr- und Kanalführungen zeichnen](topic:pipes-and-ducts)
