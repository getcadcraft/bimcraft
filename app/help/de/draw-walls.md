---
title: Wände zeichnen
summary: Wände im Grundriss eines Geschosses zeichnen, indem Sie die Ecken anklicken oder Längen eingeben; Ecken verbinden sich von selbst, und die Wände werden als IFC gespeichert.
keywords: gekrümmt, Bogen, Lagelinie, Ausrichtung, Wand, Wände, zeichnen, Grundriss, Geschossplan, Raum, Ecke, verbinden, Wandtyp, 2x6, 2x4, cmu, Beton, Höhe, Geschoss, Geschosse, eingegebene Länge, Ortho, Fang
from: 8269cd4b
---

## Was Sie tun

Zeichnen Sie die Wände eines Gebäudes auf einem Grundriss jedes Geschosses. Klicken Sie, wo eine Wand beginnt, und dann auf jede Ecke. BimCraft verbindet die Ecken für Sie, gibt jeder Wand ihre Schichten (Verkleidung, Beplankung, Ständer, Trockenbau …) und führt sie bis zum Geschoss darüber. Die 3D-Ansicht zeigt die Wände während des Zeichnens.

## Grundriss öffnen

1. [Ein neues Gebäude beginnen](topic:start-a-new-building) oder ein IFC-Modell öffnen.
2. Klicken Sie in der Symbolleiste auf {{ui:Draw}}. Ein neues Gebäude öffnet sich bereits mit eingeschaltetem Zeichnen.
3. Der Grundriss eines Geschosses wird links angezeigt, die 3D-Ansicht rechts. Wählen Sie das Geschoss in der Liste oben im Grundriss oder über die runde Schaltfläche daneben im Bereich **Geschosse**.
4. {{ui:Plan}}, {{ui:Split}} und {{ui:3D}} sind Werkzeuge in der Zeile {{ui:View}} der Symbolleiste (die Befehle PLAN, SPLIT und die Tasten funktionieren wie bisher). Verwenden Sie {{ui:Plan}} für den Grundriss allein, {{ui:Split}} für beide Ansichten und {{ui:3D}}, um den Grundriss zu schließen. Wenn das Fenster schmal ist (oder die Oberfläche groß eingestellt), setzt {{ui:Split}} den Grundriss über die 3D-Ansicht statt daneben.

Der Grundriss schneidet das Geschoss 4'-0" (1200 mm) über seiner Bodenplatte, wie ein Grundriss es tut. Scrollen Sie zum Zoomen; ziehen Sie mit der mittleren oder rechten Taste (oder halten Sie {{key:Space}} und ziehen Sie), um zu verschieben. Bei aktivem {{ui:Select}} verschiebt auch ein einfaches Ziehen. {{key:F}} passt den Grundriss ein, wenn der Mauszeiger darüber steht.

## Raum zeichnen

1. Klicken Sie auf {{ui:Wall}} (oder drücken Sie {{key:W}}).
2. Wählen Sie den Wandtyp in der ersten Liste, zum Beispiel **Außen 2×6** oder **Innen 2×4**.
3. Wählen Sie die Höhe: **Bis zum Geschoss darüber** (die Wand folgt, wenn sich dieses Geschoss verschiebt), **Bis** ein weiter oben liegendes Geschoss für eine Wand, die über mehrere Geschosse reicht (eine Treppenhalle, ein Raum mit doppelter Höhe, ein hoher Giebel), oder **Feste Höhe** und geben Sie sie ein. Eine solche Wand gehört zu dem Geschoss, auf dem Sie sie gezeichnet haben. Die Grundrisse der Geschosse, die sie durchläuft, zeigen sie heller, die Räume dort schließen an sie an, und Sie können Türen und Fenster von diesen Grundrissen aus in sie setzen (eine Tür steht auf dem Boden dieses Geschosses). Um die Wand selbst zu verschieben oder zu formen, wechseln Sie in das Geschoss, in dem sie beginnt.
4. Klicken Sie, wo die erste Wand beginnt.
5. Klicken Sie auf jede Ecke. Jeder Klick erzeugt eine Wand; die nächste beginnt dort, wo die vorige endete. Länge und Winkel werden neben dem Mauszeiger angezeigt.
6. Klicken Sie erneut auf den ersten Punkt, um den Raum zu schließen. Die Statuszeile nennt die Anzahl der Wände des Raums. Im Mittellinienmodus erhält jede Wand ihre äußere Schicht auf der Außenseite des Raums.
7. Drücken Sie {{key:Esc}} (oder klicken Sie mit der rechten Taste, oder doppelklicken Sie), um ohne Schließen zu beenden.

Die Ecken verbinden sich von selbst: Zwei Wände treffen sich auf einer Gehrung, eine Wand, die an einer anderen endet, stoppt an deren Vorderseite (ein T), und drei oder mehr Wände an einem Punkt teilen sich die Ecke. Sich kreuzende Wände bleiben, wie sie sind.

Einen ganzen Raum auf einmal: Öffnen Sie {{ui:Shapes}} für ein Rechteck, ein gedrehtes Rechteck, ein Polygon, Bögen, Wände auf gewählten Linien oder um einen Umriss (siehe [Wandwerkzeuge](topic:wall-tools)).

## Zeichenbezug wählen

Wählen Sie **Mittellinie**, **Innenfläche** oder **Außenfläche**, bevor Sie den ersten Klick setzen. Mit gewählter Fläche beschreiben Ihre Klicks und eingegebenen Längen diese Fläche. BimCraft versetzt die Wandmittellinie um die Hälfte der Gesamtstärke und verbindet aufeinanderfolgende Ecken. Wählen Sie **Außen links** oder **Außen rechts** bezogen auf Ihre Zeichenrichtung. Bei einem geschlossenen Umriss, der gegen den Uhrzeigersinn gezeichnet wird, liegt die Außenseite rechts; im Uhrzeigersinn links. Bei **Innenfläche** liegt der Körper der Wand auf der Außenseite Ihrer Linie; bei **Außenfläche** auf der anderen Seite. Beim Zeichnen über Flächen bleibt Ihre gewählte Außenseite erhalten, wenn Sie die Schleife schließen. Auf der Mittellinie nehmen Wände, die keinen Raum schließen, die Außenseite an, die Sie gewählt haben. Das Schließen eines Raums setzt die Außenseite jeder Wand von selbst auf die Außenseite des Raums, egal in welcher Richtung Sie gezeichnet haben.

Das Ändern von Wandtyp, Bezug oder Außenseite beendet die aktuelle Kette. Nahe einer umkehrenden Ecke werden lange Gehrungen begrenzt, indem rechtwinklige Enden bleiben.

Während des Zeichnens kann ein Endpunkt über leerem Raum sich horizontal oder vertikal an einem Wandendpunkt oder einer früheren Ecke ausrichten. Eine gestrichelte Hilfslinie verbindet diesen Punkt mit dem eingerasteten Mauszeiger. {{key:Shift}} hält die Zeichenrichtung rechtwinklig; die Ausrichtung endet dann entlang dieser Richtung. Nahe Endpunkte, Mittelpunkte und Wandschnittpunkte haben Vorrang vor einer entfernten Ausrichtung.

## Lagelinie

Mit **Bezug** auf **Außenfläche** oder **Innenfläche** behält die Wand diese Fläche als Lagelinie. Wird die Wand später dicker oder ihre Außenseite gedreht, bleibt diese Fläche an Ort und Stelle, und die Wand wächst bzw. dreht sich um sie. Eine gerade Wand, die sie an einer Ecke trifft, folgt, sodass die Ecke weiterhin schließt. Sie können die Lagelinie später in den {{ui:Properties}} ändern: siehe [Wand, Tür oder Fenster ändern](topic:change-a-wall-or-door).

## Gekrümmte Wand zeichnen

1. Klicken Sie auf {{ui:Wall}} und wählen Sie dann **Gekrümmt** in der Liste **Form** der Optionszeile.
2. Klicken Sie, wo die Wand beginnt, dann, wo sie endet.
3. Klicken Sie auf einen Punkt ihres Bogens. Oder geben Sie die Bogenhöhe ein und drücken Sie {{key:Enter}}.
4. Die Kette läuft am Ende der Wand weiter. Drücken Sie {{key:Esc}}, um sie zu beenden.

Eine gekrümmte Wand verbindet sich an ihren Enden mit den Wänden (Ecken- und T-Verbindungen funktionieren), bildet Räume und nimmt Türen und Fenster entlang ihres Bogens auf. Diese bleiben gerade Einheiten, rechtwinklig zur Wand in ihrer Mitte, und ihr Abstand wird entlang des Bogens gemessen. Eine Wand kann höchstens drei Viertel eines Kreises umfassen. Sie rastet an ihren Enden und an der Mitte ihres Bogens ein.

Noch nicht umgesetzt für gekrümmte Wände: {{ui:Trim / extend}} und {{ui:Corner}}, Ständerwerk, automatische Maßketten im Grundriss und Einrasten entlang des Bogens. Siehe [Was noch nicht umgesetzt ist](topic:not-built-yet).

## Länge eingeben statt zu klicken

Nach dem ersten Klick eingeben und {{key:Enter}} drücken:

| Eingabe | Zeichnet |
|---|---|
| `12'6"` oder `3810` | eine Wand dieser Länge in der Richtung, die der Mauszeiger zeigt |
| `12'6"<90` | so lang, in diesem Winkel (Grad, gegen den Uhrzeigersinn von rechts) |
| `@3000,0` | zu einem Punkt in dieser Entfernung vom letzten, quer und nach oben |
| `1200,3400` | zu diesem Punkt im Grundriss |

Eine Zahl eingeben, während das Wand-Werkzeug aktiv ist, geht direkt in das Feld {{ui:Length}}. In Fuß und Zoll ist eine einfache Zahl Zoll; in Millimetern ist sie Millimeter. Sie können die Einheit immer angeben: `3.5 m`, `10 ft`, `6 1/2"`.

## Fang

- Wandenden, ihre Flächenecken und Wandmitten rasten ein, wenn der Mauszeiger nahe ist (ein Quadrat, ein Dreieck).
- Der Mauszeiger rastet auf der Mittellinie einer Wand oder auf einer ihrer Flächen ein (ein Kreuz).
- Ab dem letzten Punkt hält die Richtung bei jeweils 15° ein, wenn sie nahe liegt. Halten Sie {{key:Shift}}, um sie auf 0°, 90°, 180° oder 270° zu halten.
- Freie Richtungen runden die Länge auf 1/2" (oder 10 mm).

## Ändern, rückgängig machen, löschen

- Jede Wand ist ein Schritt unter {{ui:Changes}}: {{ui:Undo}} und {{ui:Redo}} nehmen Wände zurück und stellen sie wieder her.
- Bei aktivem {{ui:Select}} klicken Sie im Grundriss auf eine Wand, um sie zu wählen. Die 3D-Ansicht und die {{ui:Properties}} folgen. {{key:Delete}} löscht die gewählten Wände, und die Wände, mit denen sie verbunden waren, werden wieder bereinigt.

## Geschosse

Der Bereich **Geschosse** listet jedes Geschoss mit Höhenlage und Höhe auf.

- Geben Sie einen neuen Namen, eine Höhenlage oder eine Höhe ein und drücken Sie {{key:Enter}}. Ändern Sie die Höhe (oder Höhenlage) eines Geschosses, verschieben sich die Geschosse darüber um den gleichen Betrag, und Wände, die bis zu einem Geschoss reichen, folgen.
- {{ui:Add a level on top}} fügt ein Geschoss über dem obersten hinzu, genauso hoch.
- {{ui:Add a level below}} fügt ein Geschoss unter dem untersten hinzu (einen Keller), genauso hoch wie dieses. Seine Höhenlage ist negativ, wenn das unterste Geschoss bei 0 liegt, und kein anderes Geschoss verschiebt sich. {{ui:Undo}} nimmt es wieder weg.
- {{ui:Copy this level…}} zeichnet, was auf dem betrachteten Geschoss liegt, auf einem anderen Geschoss oder auf einem neuen darüber noch einmal: seine Wände mit Türen und Fenstern, Böden und Decken (keine Dächer). Wände, die bis zum Geschoss darüber reichten, reichen nun bis zum Geschoss über dem neuen; Räume erscheinen von selbst. Ein {{ui:Undo}} nimmt alles zurück. Hat das andere Geschoss schon Wände, wird die Kopie zu ihnen hinzugefügt.
- {{ui:Units}} in der Symbolleiste wählt die Einheiten (Fuß und Zoll, Zoll, Dezimalfuß, Millimeter, Zentimeter oder Meter) für alles, was die Zeichenwerkzeuge anzeigen und lesen.

## Speichern

Klicken Sie auf {{ui:Save as IFC}}. Jede Wand wird zu einer IFC-Wand mit ihrer Mittellinie, ihrer verbundenen Form, ihrem Typ und ihren Schichten, `Pset_WallCommon` und Basismengen (Länge, Höhe, Flächen und Volumen), damit andere BIM-Programme sie öffnen und auswerten können.

## Gut zu wissen

- Wände werden auf ihrer Mittellinie gezeichnet. Die Stärke stammt aus dem Wandtyp.
- Der Grundriss zeigt hier gezeichnete Wände ausgefüllt und alles andere (Bibliothekselemente, Modelle aus anderen Programmen), das von derselben Ebene geschnitten wird, mit dem, was unterhalb des Schnitts liegt, in dünnen Linien.
- Wände, die andere Programme erstellt haben, erscheinen im Grundriss, lassen sich mit diesen Werkzeugen aber noch nicht ändern.
