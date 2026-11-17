---
title: Ein Geschoss durchpausen, Stifte je Ansicht festlegen, eine Treppe skizzieren, eine OBJ-Datei öffnen
summary: Ein anderes Geschoss gestrichelt unter dem Grundriss anzeigen und ausrichten, Wänden, Türen und Fenstern in einer Ansicht einen eigenen Stift geben, mit einer Laufline eine Treppe erzeugen und ein Wavefront-OBJ-Netz öffnen.
keywords: Durchpausreferenz, Geisterbild, Unterlage, Stift, Linienstärke, Linientyp, Überschreibung, Treppe, Skizze, Podest, OBJ, Netz, Import, Wavefront
from: 333ebbde
---

## Ein Geschoss durchpausen

Wählen Sie {{ui:Durchpausen}} im Menü {{ui:Build}} und dann eine Ansicht in der Liste: den Grundriss eines anderen Geschosses, den Deckenspiegel eines Geschosses oder einen Ausschnitt (auf seinen Zuschnittsbereich beschnitten). Dessen Wände, Stützen und Böden werden gestrichelt unter dem Grundriss angezeigt, den Sie gerade zeichnen. Verschieben Sie ihn, indem Sie einen Basispunkt auf der Referenz und dann die Stelle anklicken, an die dieser Punkt soll, oder geben Sie X, Y und einen Winkel ein (er dreht sich um seinen eigenen Mittelpunkt). {{ui:Zurücksetzen}} setzt ihn zurück, {{ui:Ausblenden}} entfernt ihn. Er ist nur eine Referenz: Nichts lässt sich darauf wählen, er wird nicht gedruckt und nicht im IFC gespeichert. BimCraft merkt sich das für jedes Geschoss in diesem Browser.

## Stifte je Ansicht

Wählen Sie {{ui:Stifte}}. Legen Sie fest, wofür der Stift gilt: alle Wände, alle Türen, alle Fenster, den Typ des gewählten Elements oder die gewählten Elemente. Wählen Sie eine Strichstärke, eine Linie (durchgezogen, gestrichelt, gepunktet) und eine Farbe und dann {{ui:Übernehmen}}. Die Änderung gilt nur für den Grundriss dieses Geschosses. Eine Auswahl hat Vorrang vor einem Typ, und ein Typ hat Vorrang vor einer ganzen Kategorie. {{ui:Alle löschen}} entfernt sie. Sie werden in diesem Browser gespeichert. Aktivieren Sie **Stiftfarben in 3D**, um die Farbstifte im 3D-Modell einzufärben (eine Strichstärke oder Strichelung gehört zur Linie, daher ist dort nur die Farbe sichtbar); deaktivieren Sie es, um zurückzuwechseln. {{ui:Drucken}} zeichnet sie auf die PDF-Datei des Grundrisses: Die Strichstärke skaliert vom Bildschirm (der Standard-Wandstift von 1,75 Pixeln entspricht 0,5 mm), Strichelungen bleiben Strichelungen, und eine Farbe wird in ihrem Papierwert gedruckt.

## Eine Treppe aus einer Skizze

Wählen Sie {{ui:Treppe skizzieren}} und klicken Sie die Ecken der Laufline an, beginnend mit der untersten Stufe. Eine Linie ergibt eine gerade Treppe, zwei rechtwinklig aufeinandertreffende Linien ergeben eine L-Treppe, und drei Linien (hoch, quer, zurück) ergeben eine U-Treppe. Drücken Sie {{key:L}}, um ein Podest zu zeichnen: Klicken Sie seine Ecken an und drücken Sie {{key:Enter}}; seine kurze Seite legt die Breite der Treppe fest. Drücken Sie {{key:Enter}}, um die Treppe zu platzieren. Jede Stufe wird aus der Länge Ihrer Linie und der Anzahl der Setzstufen berechnet, die die Höhe benötigt. Danach ist sie eine gewöhnliche Treppe: Ändern Sie sie in den Eigenschaften, und Treppenhaus und Handläufe folgen.

Aktivieren Sie **Als Familie erstellen** in der Leiste des Werkzeugs (oder drücken Sie {{key:F}}), bevor Sie {{key:Enter}} drücken, um die Treppe stattdessen als Familie zu platzieren (eine gerade, L- oder U-Treppe). Sie wird als ein einziges Element eingefügt und öffnet sich im Familieneditor mit ihrer Breite, Auftrittstiefe, Gesamthöhe, den Stufen je Lauf und dem Abstand einer U-Treppe als Parameter, sodass Sie Größen, ein Planzeichen oder Hotspots hinzufügen können. Stufen und Setzstufenhöhe ergeben sich daraus. Sie hat weder Handläufe noch Treppenhaus: Diese gehören zu einer gewöhnlichen Treppe.

## Eine OBJ-Datei öffnen

Öffnen Sie eine `.obj`-Datei wie jede andere Datei. Eine OBJ-Datei hat keine Einheiten, daher liest BimCraft Meter mit Y nach oben, wie es die meisten Programme schreiben. Jedes Objekt oder jede Gruppe wird zu einem Netzelement auf einem einzelnen Geschoss, und Sie können es anschließend ansehen, messen, schneiden, in ein Modell einsetzen und als IFC speichern. Linien, Kurven und Flächen werden weggelassen, und die Statuszeile weist darauf hin.

Ein Objekt, das genau ein gerades Prisma ist (ein geschlossenes Netz mit zwei parallelen, identischen Endflächen und ebenen Seiten, die rechtwinklig dazu stehen: eine Platte, ein Pfosten, ein Mauerstein, eine Platte mit Löchern), wird im IFC als eigener extrudierter Volumenkörper des IFC mit seinem Umriss und seiner Tiefe gespeichert, nicht als Liste von Dreiecken. Andere Programme lesen es als echten Körper, es bleibt klein, und Tiefe und Umriss lassen sich später bearbeiten. Die Statuszeile zeigt an, wie viele Objekte auf diese Weise erhalten blieben. Alles, was kein exaktes Prisma ist (eine verjüngte Form, ein Netz mit einem verschobenen Eckpunkt, ein Netz mit einer Lücke), bleibt als Dreiecke erhalten. Eine STEP-Datei wird auf dieselbe Weise gelesen.
