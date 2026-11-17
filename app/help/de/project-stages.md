---
title: Projektphasen, vom Briefing bis zu den Bauanweisungen
summary: Starten Sie mit einem Briefing mit Zielflächen und sehen Sie beim Zeichnen, ob die Vorgaben erfüllt oder unterschritten werden. Vergleichen Sie Konzeptoptionen damit, verknüpfen Sie Spezifikationen und Details mit Typen, prüfen Sie Werkstattzeichnungen und erfassen Sie Bauanweisungen zu Bauteilen.
keywords: Briefing, Raumprogramm, Zielfläche, erfüllt, unterschritten, Räume, Konzeptoptionen, Optionen, Baukörper, Budget, Spezifikation, Spec, Detail, Konstruktionsdetail, Typ, Werkstattzeichnung, prüfen, genehmigen, erneut einreichen, Bauanweisung, Revision, Ursache, Baustelle, Phase
from: 0a49b852
---

## Was Sie tun

Arbeiten Sie die Phasen eines Projekts in einem Bereich durch: Schreiben Sie das Briefing des Auftraggebers als Räume mit Zielflächen, vergleichen Sie Konzeptoptionen damit, halten Sie Spezifikation und Konstruktionsdetails bei den Typen, zu denen sie gehören, prüfen Sie Werkstattzeichnungen, sobald sie von den Gewerken zurückkommen, und erfassen Sie Bauanweisungen zu den Bauteilen, die sie ändern.

## Schritte

1. Öffnen Sie im linken Bereich **Projektphasen** und dann **Briefing**.
2. Fügen Sie die Räume ein, einen pro Zeile: `Living; 1; 30` bedeutet einen Raum mit 30 m². Die Anzahl darf fehlen. Wählen Sie **Räume hinzufügen**. Tragen Sie Auftraggeber, Grundstück, Budget, Toleranz und Programm ein und wählen Sie dann **Briefing speichern**.
3. Zeichnen Sie Wände. Jeder Raum, den die Wände bilden und der den Namen eines Briefing-Raums trägt (eine Zahl danach, etwa „Schlafzimmer 2“, wird ignoriert), wird gezählt. Das **Raumprogramm** zeigt **Erfüllt**, **Zu klein**, **Zu groß** oder **Nicht gezeichnet**, mit der Differenz in m².
4. Um auf diese Weise ein neues Projekt zu beginnen, wählen Sie **Neues Projekt aus einem Briefing starten**. Es öffnet ein neues Modell, aus einer Ihrer gespeicherten Vorlagen, wenn Sie eine wählen, und fügt das Briefing als ersten Schritt ein.
5. Öffnen Sie **Optionen im Vergleich mit dem Briefing**. Jede im Modell gespeicherte Baukörperoption wird in einem einheitlichen Maßstab mit ihrer Bruttofläche, dem, was das Briefing verlangt, und der Anzahl der Briefing-Räume gezeigt, die hineinpassen. **Briefing hier einordnen** verteilt die Räume auf die Geschosse der Option, das unterste zuerst, und sagt, was nicht passt. Die Kosten kommen nur aus der Preistabelle des Projekts; ohne passende Zeile steht dort „Kein Einheitspreis“.
6. Öffnen Sie **Typen, Spezifikationen und Details**. Jeder Wand-, Tür-, Fenster- und Bodentyp zeigt, ob er einen Spezifikationstext hat, die damit verknüpften Details und wo Spezifikation, Listen und Blätter nicht übereinstimmen. **Detail verknüpfen** fügt eine DetailCraft- oder CadCraft-Datei, eine Adresse oder ein Blatt dieses Modells hinzu.
7. Öffnen Sie **Werkstattzeichnungen**. Wählen Sie die Bauteile im Modell, die eine Werkstattzeichnung abdeckt, und dann **Eingang erfassen**. Verwenden Sie **Genehmigen**, **Mit Auflagen** oder **Überarbeiten** mit Name und Notiz des Prüfers. **Erneut eingereicht** erstellt die nächste Revision desselben Datensatzes und behält den Prüfverlauf bei. Der Status wird außerdem an jedem Bauteil vermerkt.
8. Öffnen Sie **Bauanweisungen**. Wählen Sie die Bauteile, geben Sie die Ursache an und was sie für Kosten und Termine bedeutet, in Ihren eigenen Worten, und wählen Sie **Erfassen**. Nachdem ein Thema erfasst wurde, zeigt **Änderungen seit diesem Thema erläutern**, welche geänderten Bauteile eine Anweisung abdeckt und welche ohne erfasste Anweisung geändert wurden.

## Gut zu wissen

- Jeder Schritt lässt sich mit Rückgängig zurücknehmen. Nichts wird abgelehnt: Ein Briefing, das nicht erfüllt wird, ein Typ, der seinem Text widerspricht, oder eine überfällige Werkstattzeichnung ist eine Warnung oder ein Hinweis unter Probleme.
- Die Briefing-Räume sind Flächen ohne Wände. Sie haben ein Ziel, aber keine gezeichnete Fläche, daher zählen Raumlisten und COBie sie nie als gezeichnete Räume.
- Eine Anordnung verteilt Räume nur nach Fläche auf Geschosse. Sie zeichnet keine Wände.
- Der Spezifikationstext wird in Dokumente des Modells geschrieben. Hier wird er nur mit den eigenen Maßen des Modells verglichen: Eine Klausel einer Norm wird nie für Sie geschrieben.
- Werkstattzeichnungen und Bauanweisungen sind Datensätze in derselben Historie wie der Bereich Themen und Revisionen, daher zeigen beide Bereiche sie an.
- Der Status einer Werkstattzeichnung ist eine Eigenschaft jedes Bauteils (`CadCraft_ShopDrawing`), und eine Bauanweisung ist `CadCraft_SiteInstruction`, sodass Suchen und Nach Eigenschaft einfärben sie nutzen können.
- Vor Ort geprüfte Markierungen (Phase 7) stehen in den Eigenschaften unter Prüfung.
