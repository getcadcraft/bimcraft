---
title: Die Symbolpalette
summary: Finden Sie Elektro- und Sanitärsymbole nach Name oder Bild, markieren Sie die, die Sie verwenden, mit einem Stern, und platzieren Sie sie mit einem Klick im Plan.
keywords: Symbolpalette, Symbole, Symbol-Schaltfläche, Wand folgt, Elektrosymbole, Sanitärsymbole, Sanitärplan, WC, Toilette, Waschbecken, Spüle, Badewanne, Dusche, Bodenablauf, Reinigungsöffnung, Schlauchanschluss, Warmwasserbereiter, Ventil, Absperrschieber, Kaltwasser, Warmwasser, Abwasser, Entlüftung, Linienstil, Favoriten, Suche
from: 67f20bc0
---

## Was Sie hier tun

Öffnen Sie ein Bedienfeld, das die Elektrosymbole und die Sanitärplansymbole mit ihren Bildern und Namen auflistet, finden Sie das gewünschte und platzieren Sie es im Plan. Nichts davon braucht das Internet: Die Symbole sind mit der App ausgeliefert.

## Öffnen und ein Symbol platzieren

1. Öffnen Sie ein Modell und wählen Sie {{ui:Build}} › {{ui:Symbolpalette}} (Befehl eingeben: SYMBOLS). Dieselbe Schaltfläche steht im Menü Werkzeuge der Zeichnen-Leiste und als **Symbole** in der Gruppe Bibliothek der Symbolleiste.
2. Wählen Sie einen Satz: **Elektro** oder **Sanitär**, oder **Alle Sätze**. Geben Sie in das Suchfeld ein, um die Liste einzugrenzen. Sie können nach Name oder nach Abkürzung suchen (WC, CW, HB).
3. Klicken Sie auf ein Symbol. Der Plan ist bereit, es zu platzieren.
   - Ein **Elektro**-Symbol startet das Werkzeug Elektro mit diesem Gerät gewählt, sodass alles aus [Der Elektroplan](topic:electrical-plan) gilt: Klicken Sie im Plan; ein Schritt von {{ui:Rückgängig}}.
   - Ein **Sanitär**-Symbol startet das Werkzeug für Planymbole. Klicken Sie im Plan. Eine Ausstattung, die an einer Wand steht (ein WC, Waschbecken, eine Badewanne, eine Spüle, ein Schlauchanschluss), rastet an der nächsten Wandfläche ein, mit dem Rücken zur Wand. Abläufe, Ventile, der Warmwasserbereiter und Linienstile kommen dorthin, wo Sie klicken.
4. Drücken Sie {{key:R}}, um das Symbol um 90 Grad zu drehen ({{key:Shift}}+{{key:R}} dreht es in die andere Richtung), oder geben Sie einen Winkel in **Drehung** in der Optionsleiste ein. Drücken Sie {{key:Esc}}, um zu beenden.

Eine Ausstattung oder ein Schlauchanschluss, der an einer Wandfläche eingerastet ist, merkt sich diese Wand: Wird die Wand verschoben, wandert das Symbol mit (gleiche Fläche, gleicher Abstand entlang der Wand), im selben Schritt von {{ui:Rückgängig}}. Löschen Sie die Wand, bleibt das Symbol, wo es war, und **Probleme** listet „hat seine Wand verloren“ auf; verschieben oder löschen Sie es. Symbole abseits von Wänden sind an nichts gebunden.

Jedes platzierte Symbol ist ein Schritt von {{ui:Rückgängig}}. Ein platziertes Symbol ist eine Planannotation in der IFC-Datei mit seinem Tag (WC1, WC2, ...). Wählen Sie es aus, um sein Tag oder seine Drehung in **Eigenschaften** zu ändern, oder drücken Sie {{key:Delete}}.

## Was der Sanitärsatz enthält

Ausstattung (WC, Urinal, Waschbecken, Badewanne, Dusche, Küchenspüle, Einzelspüle), ein Bodenablauf, Reinigungsöffnungen am Boden und an der Wand, ein Schlauchanschluss, ein Wandhydrant, ein Warmwasserbereiter, Ventile (Absperrschieber, Durchgangsventil, Kugelhahn, Rückschlagventil, Absperrklappe, Druckminderer) und Linienstile mit ihren Abkürzungen: Kaltwasser (CW), Warmwasser (HW), Warmwasserrücklauf (HWR), Abwasser (W), Entlüftung (V), Regenwasser (SD) und Gas (G). Die Zeichnungen skalieren mit dem Plan, sodass sie auf dem gedruckten Blatt ihre Größe behalten. Ein Linienstil ist ein kurzes Stück, das den Stil im Plan zeigt; zeichnen Sie die echten Rohrzüge mit den Rohrwerkzeugen.

:::note
Dies sind übliche Konventionen für Sanitärpläne, von uns gezeichnet; nicht nach ISO 4067-1 oder ASME Y32.4 zertifiziert. Sie wurden mit öffentlichen Zeichnungslegenden und Schulungsunterlagen verglichen (die Liste steht im Quellenhinweis des Satzes, der angibt, wo wir übereinstimmen und wo wir abweichen), nicht von einem Produkt kopiert, und sie sind frei verwendbar (Apache-2.0). Zeichnungssätze unterscheiden sich, prüfen Sie daher die Legende Ihres eigenen Projekts. Es sind Planymbole, kein Sanitärentwurf: Sie bemessen keine Rohre und prüfen keine Bauvorschriften.
:::

## Favoriten und Tastatur

- Klicken Sie auf den Stern eines Symbols (oder drücken Sie darauf {{key:F}}), um es als Favorit zu behalten. Favoriten stehen zuerst und bleiben in diesem Browser gespeichert. **Nur Favoriten** zeigt nur diese an.
- {{key:Down}} aus dem Suchfeld wechselt in die Symbole; die Pfeiltasten, {{key:Home}} und {{key:End}} bewegen sich zwischen ihnen; {{key:Enter}} wählt das markierte aus; {{key:Esc}} schließt die Palette.
- Auf einem Telefon ist die Palette ein Blatt am unteren Bildschirmrand; sie weicht zur Seite, wenn Sie ein Symbol wählen, damit Sie den Plan sehen. Öffnen Sie sie erneut über das Menü Build oder die Schaltfläche **Palette** in der Optionsleiste.

:::tip
Verwendet eine Datei einen Symbolsatz, den dieser Build nicht hat, zeigt der Plan an dessen Stelle ein Kästchen, und **Probleme** listet es auf.
:::

## Ein platziertes Element mit einem Symbol verknüpfen

Eine Leuchte aus der Bibliothek ist ein 3D-Element, aber ein Elektroplan zeigt sie als ihr Symbol. Sie platzieren sie **einmal** und verknüpfen sie:

1. Wählen Sie Build › **Symbolverknüpfung** (oder geben Sie SYMBOLLINK ein). Ein Abschnitt Symbolverknüpfung öffnet sich im linken Bereich.
2. Wählen Sie die platzierten Elemente im Plan oder in 3D. Der Abschnitt zeigt, wie viele gewählt sind und womit sie verknüpft sind.
3. Wählen Sie das **Symbol** (aus einem beliebigen Symbolsatz: Elektro, Sanitär) und wählen Sie **Verknüpfen**.

Das Element bleibt ein einziges Element, und jede Liste zählt es einmal:

- **3D** zeigt immer seinen Körper.
- Ein **Plan** zeigt seine Planform, wie bisher.
- Ein Plan, dessen **Diese Ansicht zeigt verknüpfte Elemente als** auf **Ihr Symbol (ein Installationsplan)** steht, zeigt an ihrer Stelle das Symbol. Ein Klick auf das Symbol wählt das Element. Die Wahl bleibt für diese Ansicht erhalten (der Grundriss einer Ebene, ihr Deckenplan oder ein Ausschnitt) und wird in der Datei gespeichert.

**Das Symbol um 90° drehen** dreht das Symbol gegenüber seinem Element. **Verknüpfung entfernen** hebt die Verknüpfung auf; das Element bleibt. Die Liste **Verknüpfte Symbole** führt jedes verknüpfte Element einmal auf, mit seiner Ebene und dem Raum, in dem es steht.

Noch nicht umgesetzt: Die Wahl einer Ansicht auf einem Blatt ist die Wahl des Ebenenplans, den es zeigt; mit dem Elektrowerkzeug platzierte Geräte sind wie bisher in jedem Plan Symbole.
