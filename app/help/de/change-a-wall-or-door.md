---
title: Eine Wand, Tür oder ein Fenster ändern
summary: Klicken Sie auf eine gezeichnete Wand, Tür oder ein Fenster und ändern Sie Typ, Größe, Höhe oder Platz in den Eigenschaften, oder ziehen Sie es im Plan; jede Änderung ist ein Rückgängig-Schritt.
keywords: rechtwinklig ausrichten, rechtwinklig, 90, rechter Winkel, schief, Winkel, Ortho, Raumgröße, Innenseite, Außenseite, messen ab, Verschiebeabstand, eingegebener Abstand, gekrümmt, Bogen, Bogenhöhe, Radius, Ortungslinie, Ausrichtung, ändern, bearbeiten, Eigenschaften, Wandtyp, Stärke, Länge, Höhe, Sockelversatz, Oberkante, Ebene, umkehren, außen, Türgröße, Fenstergröße, Brüstung, Abstand, verschieben, Griff, ziehen, Typ ändern, mehrere
from: 63052d5d
---

## Was Sie tun

Ändern Sie, was Sie gezeichnet haben: Wählen Sie eine Wand, Tür oder ein Fenster und geben Sie eine neue Zahl in den **Eigenschaften** ein oder ziehen Sie es im Plan. Plan und 3D-Ansicht folgen, die Ecken verbinden sich wieder, und Türen und Fenster bleiben in ihren Wänden.

## Eine Wand ändern

1. Mit eingeschaltetem {{ui:Draw}} und {{ui:Select}} klicken Sie im Plan (oder in der 3D-Ansicht) auf die Wand.
2. **Eigenschaften** zeigt ein Feld mit den Zahlen der Wand. Ändern Sie eine und drücken Sie {{key:Enter}}:
   - **Wandtyp**: ein anderer der Startertypen. Stärke und Schichten ändern sich mit ihm.
   - **Stärke**: jede beliebige Stärke. Der Typ behält seine anderen Schichten, und seine Hauptschicht (die Ständer oder der Block) übernimmt die Differenz, zum Beispiel „Außen 2×6, 200 mm“.
   - **Messen ab**: **Mittellinie**, **Innenseite** oder **Außenseite**. **Länge** und **Raumgröße** werden davon gelesen und festgelegt. Außenseite ist das, was die Bemaßungen des Plans zeigen.
   - **Länge**: Das Wandende verschiebt sich entlang seiner Linie. Die an diesem Ende angeschlossene Wand verschiebt sich rechtwinklig zu sich selbst und behält ihren Winkel.
   - **Raumgröße** (wenn es eine parallele Wand quer über den Raum gibt): Geben Sie die gewünschte Größe ein. Diese Wand verschiebt sich rechtwinklig, und die angeschlossenen Wände strecken sich mit.
   - **Rechtwinklig verschieben**: Geben Sie ein, wie weit die Wand rechtwinklig zu sich selbst verschoben wird: eine einfache Zahl verschiebt sie nach außen, eine Zahl mit Minus nach innen.
   - **Winkel zur angeschlossenen Wand**: der Winkel zur Wand, die an ihrem Anfang angeschlossen ist. Geben Sie 90 ein, um ihn rechtwinklig zu setzen. Eine nirgends angeschlossene Wand zeigt **Richtung**, in Grad ab Osten.
   - {{ui:Square up}}: dreht die mit dieser Wand verbundenen Wände zurück in rechte Winkel, entlang der Richtung, in der der größte Teil ihrer Länge verläuft. Es wirkt auf den gesamten verbundenen Raum oder Grundriss, egal welche Ihrer Wände Sie wählen. Eine Wand, die mehr als 10 Grad vom rechten Winkel abweicht, bleibt unverändert, sodass eine auf 45 Grad gesetzte Wand sicher ist. Ein {{ui:Undo}} nimmt alles zurück.
   - **Wandhöhe**: **Bis zum Geschoss darüber** folgt diesem Geschoss, **Bis Geschoss 3** (und jedes weitere Geschoss darüber) erzeugt eine Wand, die durch die Geschosse dazwischen läuft; eine eingegebene Höhe legt dann fest, wie weit unter oder über diesem Geschoss die Oberkante liegt. **Feste Höhe** behält die Zahl bei, die Sie eingeben. **Verläuft durch** listet die Geschosse auf, die eine solche Wand durchläuft: Sie wird in deren Plänen heller gezeichnet, Räume schließen dort an sie an, und Türen und Fenster können aus diesen Plänen in ihr platziert werden. Sie wird auf dem Geschoss verschoben und umgeformt, auf dem sie beginnt.
   - **Sockelversatz**: wie weit über dem Geschoss die Wand beginnt. Ihre Oberkante bleibt, wo sie war.
   - **Außen**: {{ui:Flip}} legt die Außenschichten auf die andere Seite.
   - **Ortungslinie**: **Mittellinie**, **Außenseite**, **Innenseite**, **Linke Seite** oder **Rechte Seite**. Das Ändern verschiebt nichts. Später, wenn die Wand dicker wird (durch Typ oder **Stärke**) oder ihre Außenseite umgekehrt wird, bleibt die Ortungslinie stehen, und die Wand wächst oder kehrt sich um diese herum. Eine gerade Wand, die sie an einer Ecke trifft, folgt, sodass die Ecke geschlossen bleibt. Die Ortungslinie der gewählten Wand wird im Plan gestrichelt gezeichnet. Wählen Sie mehrere Wände, um sie für alle festzulegen.
   - **Bogenhöhe** (gekrümmte Wände): wie weit die Mitte von einer geraden Linie abweicht. 0 macht sie gerade; ein negativer Wert biegt sie zur anderen Seite. Der Radius wird daneben angezeigt.
3. Jede Änderung ist ein Schritt in **Änderungen**; {{ui:Undo}} nimmt sie zurück.

## Eine Wand im Plan ziehen

Wenn eine Wand gewählt ist, zeigt sie drei Griffe: ein Quadrat an jedem Ende und einen Kreis in der Mitte.

- Ziehen Sie ein Ende, um die Wand länger, kürzer zu machen oder zu drehen. Sie rastet wie das Werkzeug Wand ein und fängt sich rechtwinklig an der Wand, die am anderen Ende angeschlossen ist, wenn Sie innerhalb von 3 Grad sind; {{key:Shift}} hält sie auf den Achsen des Plans.
- Die am gezogenen Ende angeschlossenen Wände behalten ihren Winkel: Ihre Enden gleiten entlang ihrer eigenen Linien, bis sie die neue Linie der Wand treffen, sodass nichts schräg wird. Halten Sie {{key:Mod}} für ein freies Ziehen (das Ende der angeschlossenen Wand kommt mit Ihrem, und diese Wand dreht sich), oder {{key:Alt}}, um die Verbindungen an dieser Wand zu lösen.
- Ziehen Sie die Mitte, um die ganze Wand rechtwinklig zu sich selbst zu verschieben, egal in welche Richtung Sie ziehen. Ihre Ecken gleiten entlang der angeschlossenen Wände, sodass diese ihren Winkel behalten.
- Halten Sie {{key:Mod}} beim Ziehen der Mitte für ein freies Verschieben, wenn Sie den Winkel tatsächlich lösen wollen. {{ui:Square up}} stellt ihn wieder her.
- Während ein Griff gehalten wird, geben Sie einen Abstand ein und drücken Sie {{key:Enter}} (oder lassen Sie los): Die Wand geht genau so weit, auf die Weise, wie Sie gezogen haben. {{key:Esc}} verwirft die Bewegung.
- Eine gewählte gekrümmte Wand zeigt Griffe an ihren Enden und einen runden Griff in der Mitte ihres Bogens. Ziehen Sie den runden Griff, um sie zu biegen.
- Türen und Fenster bleiben in der Wand. Eine Wand, die zu kurz für das ist, was sie hält, wird mit „Das passt nicht in diese Wand.“ abgelehnt.

## Eine Tür oder ein Fenster ändern

1. Klicken Sie im Plan auf die Tür oder das Fenster.
2. In den **Eigenschaften**: **Typ** (eine andere Tür oder ein anderes Fenster derselben Art), **Breite**, **Höhe**, **Brüstung** (Fenster), **Vom Anfang** und **Vom Ende** (der Abstand von jedem Ende der Wandfläche bis zu seiner Kante), **Angeln** {{ui:Flip}} (Türen mit einem Flügel und Drehfenster; Schiebe-, Taschen-, Scheunen- und Falttüren zeigen stattdessen **Öffnet nach**; feste, hängende und Bildfenster sowie zweiflügelige Türen haben keines), und **Schlägt an** (Türen) oder **Rahmenseite** (Fenster) {{ui:Flip}}.
3. Oder ziehen Sie es entlang seiner Wand oder auf eine andere Wand: siehe [Türen und Fenster](topic:doors-and-windows).

## Mehrere auf einmal ändern

Wählen Sie mehrere Wände (oder mehrere Türen oder mehrere Fenster) mit {{key:Shift}}+Klick oder {{key:Mod}}+Klick. **Eigenschaften** bietet an, was sie gemeinsam haben: **Typ ändern…**, die Höhe, die Größe. Eine Änderung setzt alle, und ein {{ui:Undo}} nimmt alles zurück.

## Gut zu wissen

- Die Zahlen erscheinen in den {{ui:Units}}, die in der Symbolleiste gewählt sind.
- Wände, Türen und Fenster aus anderen Programmen zeigen ihre IFC-Daten wie bisher in den **Eigenschaften**, ohne dieses Feld.
