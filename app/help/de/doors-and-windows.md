---
title: "Türen und Fenster"
summary: "Setzen Sie Türen und Fenster in gezeichnete Wände: Zeigen Sie auf eine Wand, sehen Sie den Schwenkbereich und die Abstände zu den Ecken, klicken Sie. Die Wandöffnung schneidet sich selbst aus."
keywords: Tür, Türen, Fenster, Öffnung, Schwenkbereich, Scharnier, Anschlag, Umkehren, Schiebetür, Taschentür, Garagentor, Doppeltür, Flügelfenster, Kippfenster, Schiebefenster, Festverglasung, Brüstung, Sturz, Falttür, Schranktür, Flügeltür, Scheunentür, Seitenlichter, Haustür, Ausstellfenster, Panoramafenster, Oberlicht
from: 4d8ac009
---

## Was Sie tun

Setzen Sie Türen und Fenster in Wände, die Sie gezeichnet haben ([Wände zeichnen](topic:draw-walls)). Zeigen Sie auf eine Wand, und die Tür oder das Fenster zeigt, wohin es käme, in welche Richtung es schwingt und wie weit es von jeder Ecke entfernt ist. Klicken Sie, und die Öffnung schneidet sich im Grundriss und in 3D selbst aus der Wand.

## Eine Tür setzen

1. Schalten Sie {{ui:Zeichnen}} ein und klicken Sie auf {{ui:Tür}} (oder drücken Sie {{key:D}}).
2. Wählen Sie den Typ: **Einflügelige Drehtür**, **Zweiflügelige Drehtür**, **Schiebetür**, **Taschentür**, **Garagentor**, **Falttür für Schrank**, **Flügeltüren**, **Scheunentür (an der Wand)** oder **Haustür mit Seitenlichtern**. Ihre übliche Größe füllt **B** und **H**. Wählen Sie eine andere aus der Größenliste daneben oder geben Sie andere ein, zum Beispiel `2'-8"` oder `800`. Die Liste bietet auch die Türfamilien dieses Modells an (siehe [Familien und ihre Größen](topic:families)).
3. Zeigen Sie auf eine Wand. Das Symbol der Tür folgt dem Zeiger entlang der Wand, und der Abstand von jedem Ende dieser Fläche wird im Grundriss angezeigt.
4. Die Tür schwingt zu der Seite der Wand, auf der der Zeiger liegt. Drücken Sie {{key:H}} (oder klicken Sie auf {{ui:Umkehren}}), um die Scharniere an das andere Ende zu setzen.
5. Klicken Sie. Die Tür ist gesetzt, und das Werkzeug bleibt für die nächste aktiv. Zeigen Sie auf die Mitte einer Wand, und die Tür zentriert sich selbst.

Um sie in einem genauen Abstand zu setzen, zeigen Sie auf die Wand nahe der Ecke, von der Sie messen. Geben Sie den Abstand ein (zum Beispiel `2'` oder `600`) und drücken Sie {{key:Enter}}. Der Abstand verläuft vom näheren Ende der Wandfläche bis zur Kante der Tür.

## Ein Fenster setzen

1. Klicken Sie auf {{ui:Fenster}} (oder drücken Sie {{key:N}}).
2. Wählen Sie den Typ: **Festverglasung**, **Einfachhängefenster**, **Doppelhängefenster**, **Flügelfenster**, **Schiebefenster**, **Kippfenster**, **Panoramafenster** oder **Oberlicht**. Legen Sie seine **B**, **H** und **Brüstung** fest. Die Brüstung ist die Höhe der Unterkante des Fensters über dem Boden.
3. Zeigen Sie auf eine Wand und klicken Sie, oder geben Sie einen Abstand ein und drücken Sie {{key:Enter}} wie bei Türen. Ein Fenster sitzt auf der Außenseite der Wand.

## Verschieben, umkehren, löschen

- Wenn {{ui:Wählen}} aktiv ist, ziehen Sie eine Tür oder ein Fenster entlang der Wand. Ziehen Sie es auf eine andere Wand, um es dorthin zu verschieben.
- {{key:Delete}} löscht die gewählten Türen und Fenster; die Wand schließt sich.
- Das Verschieben oder Löschen einer Wand verschiebt oder löscht, was darin liegt. Wenn sich der Anfang einer Wand entlang ihrer eigenen Linie verschiebt, behalten ihre Türen und Fenster ihren Platz.
- {{ui:Rückgängig}} und {{ui:Wiederholen}} nehmen jedes Setzen, Verschieben oder Löschen zurück und stellen es wieder her.

## Was abgelehnt wird

- **Es passt nicht in diese Wand.** Die Tür oder das Fenster ist breiter als die Wand oder würde über ihr Ende hinausragen. Versuchen Sie eine kürzere Breite oder eine längere Wand.
- **Es ist höher als die Wand.** Die Brüstung plus die Höhe liegt über der Oberkante der Wand.

## Was gespeichert wird

Jede Tür oder jedes Fenster ist eine IFC-Tür bzw. ein IFC-Fenster mit seiner Größe, Bedienung (zum Beispiel einflügelig, links öffnend), seinem Größentyp (ein Typ für jede Größe seiner Familie), `Pset_DoorCommon` oder `Pset_WindowCommon` und Basismengen. Sie füllt eine IFC-Öffnung in ihrer Wand. Die Netto-Seitenfläche und das Volumen der Wand lassen die Öffnung aus. Andere BIM-Programme öffnen sie als Tür in einer Wand.

## Gut zu wissen

- Der Grundriss zeigt Türen um 90° geöffnet mit ihrem Schwenkbereich, Schiebetüren als zwei Flügel, Taschentüren, die in die Wand gleiten, Garagentore als gestrichelte Linie oben und Fenster mit ihren Rahmen- und Glaslinien.
- Die Breite ist die Gesamtbreite des Rahmens. Das Türblatt ist die Breite abzüglich der beiden Zargen.
- Das Kopieren gezeichneter Türen und Fenster ist noch nicht umgesetzt: Setzen Sie ein weiteres.

## Kellerfluchtfenster mit Schacht

Wählen Sie **Kellerfluchtfenster mit Schacht** in der Liste der Fenstertypen. Es beginnt als Flügelfenster mit 36 × 48 Zoll und einer Brüstung 36 Zoll über dem Geschoss. Der Schacht liegt an der Außenseite der Wand, mit mindestens 48 Zoll lichter Breite, 36 Zoll Vorsprung und einer Sohle 6 Zoll unter der Brüstung. Im Grundriss erscheint er als gestrichelte Linien und in 3D als drei offene Seiten. Der Schacht ist Teil des IFC-Körpers des Fensters. Daher nimmt Speichern, Verschieben, Größenändern oder Löschen des Fensters ihn mit. Beim Größenändern bleiben mindestens 6 Zoll neben jeder Zarge.

Dies sind Modellierungsstandards, keine Bescheinigung der Fluchtweg-Konformität. Prüfen Sie die tatsächliche lichte Öffnung des Herstellers, die örtlichen Anforderungen, das Gelände, die Entwässerung und eine eventuell erforderliche Leiter gesondert. Tiefe und Höhe des Schachts sind voreingestellte Maße; sie folgen nicht dem Gelände.
