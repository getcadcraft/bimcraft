---
title: Eine Familie bearbeiten
summary: Ändern Sie Parameter, Formeln und Volumenkörper einer Familie, zeigen Sie Teile über einen Ja/Nein-Parameter an, schneiden und verbinden Sie Volumenkörper, geben Sie ihr Anschlüsse für Rohre und Kanäle und sehen Sie das Ergebnis aus der IFC-Datei, die sie speichern wird.
keywords: Familieneditor, Familie bearbeiten, Parameter, Formel, Formeln, Sichtbarkeit, Ja Nein, Volumenkörper, Quader, Extrusion, extrudieren, Drehung, Sweep, Profil, Bogen, Boolesche Operation, Ausschneiden, Vereinigen, Differenz, Vereinigung, Griff, Griffe, Arbeitsebene, Skizze, neue Familie, Anschluss, Anschlüsse, Port, Ports, Rohranschluss, Kanalanschluss, Abfluss, Wasserversorgung
from: 1ab31c10
---

## Den Editor öffnen

Öffnen Sie eine Familie (über die Gruppe **Familien** im Projektbrowser oder {{ui:Build}} › {{ui:Familien…}}) und klicken Sie auf {{ui:Die Familie bearbeiten}}. Um bei null anzufangen, klicken Sie auf {{ui:Neue Familie}}: Geben Sie ihr einen Namen, legen Sie fest, was sie ist (eine Tür, ein Fenster, Möbel, eine Ausstattung oder etwas anderes), und bei einer Tür oder einem Fenster, von welcher Startvorlage ihr Plansymbol und ihr Griff stammen. Der Editor öffnet eine Familie mit einigen Parametern und einem Volumenkörper.

Beim Bearbeiten einer Startfamilie gelten Ihre Änderungen nur in diesem Modell. Andere Modelle behalten die Startfamilie unverändert.

Im Modell ändert sich nichts, bis Sie auf {{ui:Die Familie speichern}} klicken. Der Editor hat sein eigenes Rückgängig und Wiederholen (die Pfeilschaltflächen neben dem Namen oder {{key:Mod+Z}} und {{key:Mod+Y}}); das Speichern ist ein Schritt im Rückgängig des Modells.

## Parameter

Die Registerkarte {{ui:Parameter}} listet die Parameter der Familie auf: einen Namen, eine Art und einen Standardwert. Die Arten: **Länge** (Millimeter), **Winkel** (Grad), **Zahl**, **Ganzzahl**, **Ja / Nein**, **Stift** (1–16) sowie drei, die Wörter statt Zahlen enthalten: **Text**, **Material** (eines der Projektmaterialien) und **Füllung** (eine Plan-Füllung). Wörter werden nicht in Formeln verwendet; sie färben einen Volumenkörper (sein **Material**), füllen einen Teil eines Symbols oder werden als `{Name}` im Text eines Symbols gedruckt. Das Feld **Pro Element** macht einen Parameter zu etwas, das jedes platzierte Element für sich selbst festlegt, statt zu seiner Größe.

- Eine **Formel** lässt einen Parameter anderen folgen, zum Beispiel `Width / 30` oder `if(Width > 1200, 2, 1)`. Längen in Formeln sind Millimeter, oder Sie schreiben eine Einheit: `3'`, `6in`, `50cm`.
- Beim Umbenennen eines Parameters wird er in jeder Formel und jedem Feld umbenannt, das ihn verwendet. Ein Parameter, der noch in Gebrauch ist, kann nicht entfernt werden.
- Das **Material** eines Volumenkörpers übernimmt die Farbe eines Projektmaterials (oder eines Material-Parameters), **Angezeigt bei** blendet ihn bei gröberen Detailgraden aus, und **Wiederholen** erstellt Kopien: eine Anzahl (eine Zahl oder ein Ganzzahl-Parameter, 1 bis 200) und den Abstand zwischen ihnen in x, y und z. Ein wiederholter Volumenkörper ist eine Reihe von Brettern, Stäben oder Löchern; bei einer Differenz verwendet, schneiden die Kopien gemeinsam.
- Eine Tür- oder Fensterfamilie erhält außerdem zwei Namen von ihrer Wand: `WallThickness` und `Face` (1 oder −1, die Seite, zu der die Tür aufschlägt).

## Volumenkörper

Die Registerkarte {{ui:Volumenkörper}} listet die Volumenkörper auf. Fügen Sie einen Quader, eine Extrusion, eine Drehung oder einen Sweep hinzu:

| Volumenkörper | Was Sie festlegen |
|---|---|
| Quader | seine zwei Ecken: x0 bis x1, y0 bis y1, z0 bis z1 |
| Extrusion | ein Profil auf einer Arbeitsebene (Grundriss, Vorderansicht oder Seitenansicht), wo die Ebene liegt, und eine Tiefe |
| Drehung | ein Profil, eine Achse auf der Ebene und ein Winkel bis 360° |
| Sweep | ein Pfad aus Punkten und ein Radius (ein Stab oder ein Geländer) |

Jede Zahl kann eine eingegebene Zahl oder ein Ausdruck aus den Parametern sein. Jeder Volumenkörper hat eine Farbe und **Angezeigt wenn**: Lassen Sie das Feld leer, um ihn immer anzuzeigen, oder nennen Sie einen Ja/Nein-Parameter (oder schreiben Sie einen Vergleich wie `Shelves >= 3`), um ihn nur dann anzuzeigen. Das ist ein Sichtbarkeitsparameter.

### Ein Profil zeichnen

Das Profil einer Extrusion oder einer Drehung wird unter der Vorschau auf seiner Arbeitsebene gezeichnet:

- Klicken Sie auf die Zeichenfläche, um einen Punkt nach dem gewählten hinzuzufügen.
- Ziehen Sie einen Punkt, um ihn zu verschieben. Punkte rasten am Raster ein; halten Sie {{key:Shift}} gedrückt, um sie frei zu setzen.
- Klicken Sie auf ein kleines Quadrat an einem Segment, um dort einen Punkt hinzuzufügen. {{key:Shift}}+Klick darauf macht dieses Segment zu einem Bogen (ein erneuter Klick für die andere Richtung, dann gerade).
- Doppelklicken Sie auf einen Punkt, um ihn zu entfernen.

Hohle Punkte werden durch Parameter festgelegt: Ändern Sie sie in der Tabelle, nicht durch Ziehen.

## Boolesche Operationen

Die Registerkarte {{ui:Boolesche Operationen}} schneidet den zweiten Volumenkörper aus dem ersten heraus oder verbindet beide. Das Ergebnis einer booleschen Operation kann erneut ausgeschnitten oder verbunden werden. Ein Volumenkörper, der in einer booleschen Operation verwendet wird, wird nur als Teil davon gezeichnet.

Ist der zweite Volumenkörper durch seinen Ja/Nein-Parameter ausgeblendet, bleibt der erste unverändert; ist der erste ausgeblendet, ist das Ergebnis ausgeblendet.

## Plansymbol

Die Registerkarte {{ui:Plansymbol}} zeichnet, was der Plan für diese Familie zeigt, statt des Schnitts ihrer Volumenkörper: Linien, Rechtecke, Kreise, Bögen, Polygone und Text, auf den eigenen Achsen der Familie. Jeder Teil hat einen **Stift** (1–16, ein Ausdruck oder ein Stift-Parameter), eine **Füllung** (keine, voll, diagonal, gekreuzt, Beton, Dämmung, Erde oder ein Füllungs-Parameter), einen Ausdruck **angezeigt durch**, einen **Schnittbereich** in Millimetern über seiner Basis (ein Teil wird voll gezeichnet, wenn der Schnitt des Plans in ihm liegt, dünn darunter, gestrichelt darüber: Ein Schrank über dem Schnitt wird gestrichelt angezeigt), einen Detailgrad und eine Wiederholung. Text darf Parameter als `{Name}` nennen. **Der Plan zeigt: Den Schnitt der Volumenkörper** lässt den Plan die Volumenkörper schneiden, während das Symbol in der Familie bleibt. Andere Programme lesen das Symbol als Grundriss der Familie (Linien und Formen; der Text bleibt in BimCraft).

## Enthaltene Familien

Die Registerkarte {{ui:Enthaltene Familien}} setzt eine weitere Familie in diese: ein Bein an einem Tisch, einen Griff an einer Tür. Wählen Sie die Familie, dann wohin sie kommt (x, y, z), wie weit sie gedreht ist (nur Vierteldrehungen: 0, 90, 180, 270), wann sie angezeigt wird und die Werte, die sie erhält, je Zeile als `Height = Height - 40`. Beim Speichern der inneren Familie wird diese neu gezeichnet. Eine Familie, die von einer anderen enthalten wird, kann nicht gelöscht werden. Eine Familie kann sich nicht selbst enthalten, auch nicht über eine andere, und die Verschachtelung endet bei vier Ebenen.

## Hotspots

Ein Hotspot ist ein Punkt oder eine Kante, die Sie ziehen, um einen Parameter zu ändern. Fügen Sie auf der Registerkarte {{ui:Hotspots}} einen hinzu, wählen Sie die Achse, entlang der er zieht, und den Zahlenparameter, den er ändert, und schreiben Sie seine Position in denselben Ausdrücken wie bei den Volumenkörpern. In der Vorschau wählen Sie **Hotspots** unter den Griffen, um sie zu ziehen. Bei einem platzierten Element im Plan (wählen Sie es mit {{ui:Wählen}}) erscheinen die x- und y-Hotspots als Griffe: Ziehen Sie einen, und das Element erhält die Größe, die den Hotspot dorthin setzt, über alle Formeln dazwischen; ein Rückgängig stellt es wieder her. Ein Hotspot kann keinen abgeleiteten Parameter, kein Ja / Nein und kein Wort ändern.

In der 3D-Ansicht erscheinen dieselben Hotspots als Griffe am gewählten Element, und auch die Auf-und-ab-Hotspots (Achse z) werden dort gezeigt, was der Plan nicht zeichnen kann. Wählen Sie das Element, ziehen Sie einen Griff entlang seiner Achse und lassen Sie los: Das Element erhält die Größe, die den Hotspot dorthin setzt, als ein Rückgängig-Schritt. Die Griffe sind ausgeblendet, solange die Schnittbox aktiv ist, da sie dieselben Griffe verwendet.

## Anschlüsse

Familien, die auf einem Boden platziert werden (Möbel, Ausstattungen und andere), haben eine Registerkarte {{ui:Anschlüsse}}: die Punkte, an denen ein Rohr oder ein Kanal an das Element anschließt, wie bei dem Wasserhahn und dem Abfluss eines Waschbeckens. Klicken Sie auf {{ui:Anschluss hinzufügen}} und legen Sie fest:

- **Art**: Rohr oder Kanal, und ihr **System** (Kaltwasser, Abwasser, Zuluft …).
- **x**, **y** und **z**: wo er liegt, auf den eigenen Achsen der Familie. Wie bei den Zahlen eines Volumenkörpers kann jede eine Zahl oder eine Formel aus den Parametern sein, sodass der Anschluss mit der Größe mitwandert.
- **Austritt**: die Richtung, in der ein Rohr oder Kanal ihn verlässt, entlang einer der Achsen der Familie (ein Abfluss unter einem Waschbecken geht **Nach unten**).
- **Größe (mm)**: die Nennweite des Rohrs (DN) oder der Durchmesser des runden Kanals.
- **Fluss**: **Zufluss** für einen Anschluss, der gespeist wird (ein Wasserhahn), **Abfluss** für einen, der abführt.

Die Vorschau zeichnet jeden Anschluss als Ring mit einem Pfeil in Austrittsrichtung. Türen und Fenster haben keine Anschlüsse.

Für eine Sanitärausstattung wählen Sie unter **Sanitärausstattung** aus, welche es ist (WC, Waschbecken, Küchenspüle, Dusche, Waschtrog). Die Startausstattungen geben das bereits an.

Jedes aus der Familie platzierte Element erhält seine Anschlüsse als Ports in der IFC-Datei, und sie werden neu erstellt, wenn sich die Größe des Elements ändert oder die Familie gespeichert wird. Programme, die IFC-Systeme lesen, sehen, wohin jedes Rohr oder jeder Kanal gehört.

## Die Vorschau und ihre Griffe

Die Vorschau ist die Familie als IFC geschrieben, durch denselben Code, der sie im Modell speichert, und wieder gezeichnet. Was Sie sehen, bekommen auch andere Programme. Darunter legt **Angezeigte Größe** die Parameterwerte fest, die die Vorschau verwendet.

**Griffe** sind Punkte auf der Vorschau: **Die Größe** zeigt einen Griff für Breite, Tiefe und Höhe; **Der gewählte Volumenkörper** zeigt einen auf jeder Fläche des gewählten Volumenkörpers. Ziehen Sie einen Griff:

- bei einer Fläche, die durch einen Parameter festgelegt ist, ändert sich die angezeigte Größe (die Formeln der Familie bleiben erhalten);
- bei einer Fläche, die durch eine eingegebene Zahl festgelegt ist, ändert sich die Zahl.

## Speichern

{{ui:Die Familie speichern}} prüft die Familie, zeichnet dann jede ihrer Größen neu und erstellt jedes ihrer Elemente neu, als ein Schritt, den Sie rückgängig machen können. Lässt sich eine Größe mit der Änderung nicht zeichnen (zum Beispiel hätte ein Volumenkörper bei dieser Größe keine Breite), wird nichts gespeichert, und der Editor nennt die Größe.

Hat jemand anderes dieselbe Familie gespeichert, während Ihr Editor geöffnet war (in einer Live-TeamWork-Sitzung oder in einem anderen Fenster), verweigert {{ui:Die Familie speichern}} das und sagt es, statt ihre Änderung durch Ihre zu ersetzen. Schließen Sie den Editor, öffnen Sie die Familie erneut, um deren Änderung zu sehen, und machen Sie Ihre Änderung noch einmal.

:::note
Die Geometrie wird als eigene IFC-Volumenkörper gespeichert: Extrusionen, Drehungen, Sweep-Körper und boolesche Ergebnisse. Nichts wird in eine Liste von Dreiecken umgewandelt, daher bleiben die Dateien klein, und andere Programme können die Formen als Formen lesen. Profile mit Bögen werden in IFC4 mit Bögen gespeichert; IFC2X3 hat in einem Profil keine Bogensegmente, daher werden die Bögen dort als kurze gerade Stücke gespeichert.
:::

Siehe auch [Familien und ihre Größen](topic:families).
