---
title: Wandformen, Teilen, Versetzen, Bereich strecken und Sperren
summary: Wände als Rechteck, Vieleck, Bogen, auf gewählten Linien oder um einen geklickten Bereich zeichnen; sie teilen, ein Stück herausnehmen, versetzen, Bereich strecken, ausrichten und gegenseitig oder an eine Bemaßung oder eine Rasterlinie sperren. Jede Änderung hält die Wände verbunden und ist ein Rückgängig-Schritt.
keywords: Typ tauschen, Typ ändern, umtypisieren, was sich verschoben hat, lod, Entwicklungsgrad, Verbindungsart, Gehrung, Stumpf, rechtwinklig abschließen, Wandverbindungen, weiter, läuft durch, Verbindung verbieten, Verbindung erlauben, Layer-Priorität, Kern, Priorität, Kreuzung, Rechteck, gedrehtes Rechteck, Vieleck, einbeschrieben, umbeschrieben, Bogen, Mitte, tangentialer Bogen, Linien wählen, Tab, Nachzeichnen, Umriss, Zauberstab, teilen, Teilung mit Lücke, Lücke, Segment löschen, zusammenfügen, Versatz, kopieren, Bereich strecken, Auswahlrahmen, strecken, ausrichten, sperren, Vorhängeschloss, Zwang, Bemaßung sperren, Bemaßung bearbeiten, Raster, an Raster sperren, Rasterlinie verschieben, Platzierungsversatz, Verbindung aus, freistehend, wachsen ab, messen ab, Mittellinie, Innenfläche, Außenfläche, Verbindung lösen, Alt
from: 5b7d2f75
---

## Was Sie tun

Wände mit den Rezepten des Werkzeugs Wand erstellen und ändern. Jedes endet genauso wie das Zeichnen einer Wand über ihre Ecken: Die Ecken verbinden sich von selbst, die Verbindungen werden in der Datei gespeichert, und die ganze Änderung ist ein Schritt in **Änderungen**, den {{ui:Rückgängig}} zurücknimmt. Die Wände behalten ihre Identität: Eine Wand, die Sie teilen, versetzen oder strecken, bleibt dieselbe Wand, mit ihren Türen, Fenstern und Bemaßungen.

## Ein Rechteck, Vieleck oder einen Bogen zeichnen

Bei eingeschaltetem {{ui:Zeichnen}} öffnen Sie {{ui:Formen}} in der Gruppe Zeichnen (oder wählen eine Form in der Liste **Form** der Zeile Wand). Die Zeile Wand zeigt den Wandtyp, die Zeichnungsreferenz, die Außenseite und die Oberseite, wie beim Werkzeug {{ui:Wand}}. Dann klicken Sie, oder geben die Punkte ein (x,y · @dx,dy · @Länge<Winkel · eine Länge entlang des Zeigers):

- **Rechteck**: zwei gegenüberliegende Ecken. Vier Wände, vier verbundene Ecken, ein Schritt.
- **Gedrehtes Rechteck**: wo die erste Seite beginnt und endet (das legt ihre Drehung und Länge fest), dann ein dritter Klick für die andere Seite.
- **Vieleck**: der Mittelpunkt, dann eine Ecke (**Einbeschrieben**) oder die Mitte einer Seite (**Umbeschrieben**). Legen Sie zuerst **Seiten** fest (3 bis 64).
- **Bogen, Mitte**: die Mitte, der Anfang (das legt den Radius fest), das Ende. **Richtung**: der kürzere Weg, gegen den Uhrzeigersinn oder im Uhrzeigersinn. Ein Bogen über drei Viertel eines Kreises wird als zwei Wände gezeichnet.
- **Tangentialer Bogen**: Klicken Sie auf das Ende einer Wand, dann dorthin, wo der Bogen endet. Der Bogen verlässt das Ende der Wand in deren eigener Richtung.

Eine geschlossene Form erhält ihre Außenseite nach außen. Wird sie auf der **Außenfläche** oder der **Innenfläche** gezeichnet, ist die Fläche, auf die Sie klicken, die Fläche, die stehen bleibt.

## Wände auf Linien, die Sie schon haben

- **Linien wählen**: Klicken Sie auf eine Linie, dann kommt eine Wand darauf. Drücken Sie {{key:Tab}} (oder halten Sie {{key:Shift}} beim Klicken gedrückt), um die ganze Kette von Linien zu übernehmen, die Ende an Ende verbunden sind. Die Linien sind die Zeichenlinien dieser Ansicht, die Nachzeichnungsreferenz und die Rasterlinien.
- **Umriss nachzeichnen**: Klicken Sie in eine Fläche, die von diesen Linien oder von Wänden geschlossen wird. Die Wände laufen um die kleinste Fläche um den Klick herum.

## Vor dem Zeichnen einstellen: Versatz und Verbindung

Die Zeile Wand hat zwei weitere Felder, die vom Werkzeug {{ui:Wand}} und den Formen verwendet werden:

- **Versatz**: Die Wände werden so weit von der angeklickten Linie entfernt gezeichnet: + nach links, − nach rechts, von der Zeichenrichtung aus gesehen.
- **Verbindung**: Entfernen Sie den Haken, um freistehende Wände zu zeichnen. Ihre Enden erhalten **Verbindung verbieten** und bleiben frei, wohin auch immer sie gehen (siehe [Eine Wand ändern](topic:change-a-wall-or-door)).

## Teilen, ein Stück herausnehmen, zusammenfügen

Öffnen Sie {{ui:Wände}} in der Gruppe Bearbeiten.

- **Teilen**: Klicken Sie auf eine Wand, wo sie geschnitten werden soll, oder geben Sie den Abstand vom Anfang ein. In der Nähe einer Wand, die sie kreuzt, rastet der Schnitt dort ein, wo sie sich treffen. Die beiden Teile haben denselben Typ und bleiben Ende an Ende verbunden. **Lücke** lässt einen Abstand dieser Länge, zentriert auf den Schnitt. **Freie Enden** gibt den Schnittenden stattdessen Verbindung verbieten (Einstellungen › BimCraft › Wände › **Wenn eine Wand geteilt wird** legt fest, welches Feld zu Beginn angehakt ist). Eine Tür oder ein Fenster geht mit dem Teil, in dem es steht; ein Schnitt durch eines wird abgelehnt.
- **Segment löschen**: Klicken Sie dorthin, wo das Stück beginnt, und dorthin, wo es endet. Eine Tür in dem Stück geht mit ihm.
- **Zusammenfügen**: Klicken Sie auf die zwei Teile einer Wand (in einer Linie, gleicher Typ). Sie werden wieder eine Wand, die zuerst angeklickte, mit den Türen beider Teile.

## Verbindungsart, Verbindung verbieten, Layer-Priorität

Öffnen Sie {{ui:Wände}} in der Gruppe Bearbeiten.

- **Verbindungsart**: Klicken Sie auf eine Ecke, an der zwei gerade Wände enden. Jeder Klick geht zur nächsten Art: **Gehrung** (beide Enden auf der Linie vom inneren zum äußeren Eckpunkt geschnitten, womit jede Ecke beginnt), **Stumpf** (eine Wand läuft bis zur Außenfläche der anderen durch, die an deren Seite endet) und **Rechtwinklig abschließen** (wie Stumpf, und die durchlaufende Wand endet rechtwinklig; bei einem rechten Winkel sieht es aus wie Stumpf). **Weiter** oder {{key:Tab}} macht die andere Wand zur durchlaufenden. Die Liste **Art** in der Leiste zeigt die Ecke, die Sie zuletzt angeklickt haben. Dieselben beiden Auswahlmöglichkeiten gibt es in den **Eigenschaften** einer Wand: **Verbindungsart am Anfang / am Ende** und **Läuft durch**. Jede Änderung ist ein Schritt in **Änderungen**. Der Grundriss, der 3D-Körper, die Räume und die Mengen folgen.
- An einem T läuft immer die Wand durch, an deren Seite die andere anstößt. Wo sich zwei Wände kreuzen, legt ein Klick (oder **Durchgehend an Kreuzung** in den Eigenschaften) fest, welche der beiden durchgehend ist; das bestimmt, welche Schichten der Wand durch die Kreuzung gezeichnet werden.
- Die Art gehört zur Verbindung: Sie bleibt, wenn sich die Wände bewegen, und endet nur, wenn die Verbindung endet (die Wand wird gelöscht, an diesem Ende geteilt oder das Ende erhält Verbindung verbieten). Eine Ecke mit einer gekrümmten Wand oder an der drei oder mehr Wände zusammentreffen, behält die Gehrung. Eine Ecke, die spitzer als etwa 30 Grad oder flacher als etwa 150 Grad ist, fällt ebenfalls auf die Gehrung zurück.
- **Verbindung verbieten**: Klicken Sie nahe einem Wandende. Dieses Ende wird gelöst: Es verbindet sich mit nichts, wohin die Wand auch geht, bis Sie erneut darauf klicken. Freie Enden werden bei eingeschaltetem Werkzeug mit einem Kreuz markiert. Derselbe Schalter ist **Verbindung am Anfang / Verbindung am Ende** in den Eigenschaften.
- **Layer-Priorität**: Wo Wände mit Schichten zusammentreffen, schneidet die stärkere Schicht die schwächere, sodass Kerne an Kerne stoßen und eine Oberfläche an der stärkeren Schicht endet. Jede Schicht hat eine Priorität von 0 bis 999; standardmäßig ergibt sie sich aus der Funktion der Schicht (Tragwerk 800, Untergrund 600, Dämmung 400, Membran 300, Oberfläche 200, eine Luftschicht 100). {{ui:Layer-Priorität}} öffnet den Wandaufbau, wo die Spalte **Priorität** die eigene Zahl einer Schicht setzt. Schichten mit gleicher Priorität stoßen aneinander, und eine Linie wird nur zwischen verschiedenen Materialien gezeichnet. Sie sehen es in Grundrissen mit **Mittel** oder **Fein** als Detail, an Ecken, T-Verbindungen und Kreuzungen zweier gerader Wände; Einstellungen › BimCraft › Wände › **Wandschichten an Wandanschlüssen bereinigen** schaltet es aus. Es ändert nur, was innerhalb der Wände gezeichnet wird: die Umrisse und Mengen der Wände bleiben so, wie die Verbindungsart sie ergibt.

## Den Typ vieler Wände tauschen

Der Weg von Skizzenplänen zu Arbeitszeichnungen ist meist ein Wechsel des Typs: Eine generische Wand wird zum konkreten Aufbau. Sie zeichnen nichts neu.

1. Wählen Sie die Wände (eine oder mehrere mit {{key:Ctrl}} oder {{key:Shift}}).
2. Drücken Sie in den Eigenschaften unter Wandtyp auf **Typ tauschen…** (oder öffnen Sie {{ui:Wände}} in der Gruppe Bearbeiten und wählen Sie {{ui:Typ tauschen}}, was dieselbe Liste öffnet). Die Liste öffnet sich in den Eigenschaften, im eigenen Block der gewählten Wände. Es ist kein Dialog, und sie verdeckt nichts: Grundriss, 3D-Ansicht und Auswahl arbeiten weiter, während sie offen ist, und sie folgt den Wänden, die Sie wählen.
3. Die Liste zeigt jeden Wandtyp mit seiner Dicke und seiner LOD-Kennzeichnung, zum Beispiel „Wand 230 generisch, LOD 200“ und „230 Ziegel, beidseitig verputzt, LOD 300“. Die Typen, die die gewählten Wände jetzt haben, sind markiert. Tippen Sie in **Suchen**, um einzugrenzen: einen Namen, eine Dicke oder `lod 300`.
4. Klicken Sie auf einen Typ. Jede gewählte Wand wird in einem Schritt darauf geändert, sodass ein {{ui:Rückgängig}} den ganzen Tausch zurücknimmt. Das kleine x schließt die Liste.

Jede Wand behält ihre Ortungslinie. Eine Wand auf ihrer Mittellinie wächst nach beiden Seiten; eine Wand, deren Ortungslinie eine Fläche ist, behält diese Fläche und wächst in die andere Richtung, und die an sie angrenzenden Wände folgen an den Ecken. Wände, die an einer getauschten Wand gesperrt sind, folgen ihr ebenfalls. Türen und Fenster bleiben in ihren Wänden und werden für die neue Dicke neu geschnitten.

Nach dem Tausch zeigt die Liste **Was sich verschoben hat**: wie viele Wände sich geändert haben und zu welchem Typ, die Dicke und den LOD vorher und nachher, die Wände, die seitlich verschoben wurden, um ihre Ortungslinie zu halten, die verbundenen Wände, die gefolgt sind, die Türen und Fenster, die neu eingesetzt wurden, und jeden Raum, dessen Fläche sich geändert hat, mit seiner Fläche vorher und nachher. Die Statusleiste sagt dasselbe in einer Zeile. Der Bericht zeigt nur an; er hält einen Tausch nie an. Die Wahl eines Typs unter **Eigenschaften › Wandtyp** führt denselben Tausch aus und gibt denselben Bericht.

Zwei Dinge halten einen Tausch auf, und dann wird nichts geändert: eine Tür oder ein Fenster, das in seiner Wand nicht mehr passt (eine Wand wird kürzer, wo eine Ecke folgt; machen Sie die Tür zuerst schmaler oder verschieben Sie sie von der Ecke weg), und eine Sperre, die der Tausch brechen würde (eine Wand, die über ihre Mittellinie an einer Rasterlinie gesperrt ist, während ihre Ortungslinie eine Fläche ist; entsperren Sie sie oder setzen Sie die Ortungslinie zurück auf die Mittellinie).

Ein mit BimCraft verbundener Assistent kann denselben Tausch ausführen (Werkzeuge `wall_types_list` und `walls_swap_type`) und erhält denselben Bericht zurück.

Die LOD-Kennzeichnung eines Typs wird im Editor des Wandaufbaus gesetzt: siehe [Wandaufbauten](topic:wall-assemblies).

## Versetzen und Bereich strecken

- **Versatz**: Klicken Sie auf eine Wand, dann auf die Seite, zu der sie verschoben werden soll, oder geben Sie den Abstand ein. Die Wand verschiebt sich rechtwinklig zu sich selbst, und die mit ihr verbundenen Wände werden gestreckt. Haken Sie **Kopieren** an, um stattdessen eine parallele Kopie zu erhalten (sie ist mit dem Original nicht verbunden).
- **Bereich strecken**: Klicken Sie auf zwei Ecken eines Rahmens, dann auf einen Punkt, von dem aus verschoben wird, und einen Punkt, zu dem verschoben wird. Jedes Wandende im Rahmen wird verschoben; eine Wand, die ganz im Rahmen liegt, wird verschoben, und die Wände, die an sie stoßen, kommen mit; Wände, die den Rahmen kreuzen, werden gestreckt.

## Eine Bemaßung bearbeiten und sperren

Wählen Sie eine Referenzbemaßung (Beschriften › {{ui:Referenzbemaßung}}) und geben Sie ihren Wert in den **Eigenschaften** ein: Die Wand ihrer zweiten Referenz verschiebt sich rechtwinklig zu sich selbst, die erste Referenz bleibt, und die verbundenen Wände folgen. Haken Sie **Diese Bemaßung sperren** an, um den Wert zu halten: Wenn sich später eine der beiden Wände bewegt, folgt die andere. Ein gesperrter Wert kann nicht überschrieben werden, bis Sie den Haken entfernen.

## Ausrichten und sperren

**Ausrichten und sperren**: Klicken Sie auf eine Wandfläche (oder die Mittellinie, nahe der Mitte der Wand) oder auf eine Rasterlinie, dann auf die Fläche der Wand, die auf diese Linie gebracht werden soll. Die Wand verschiebt sich rechtwinklig darauf. Haken Sie zuerst **Sperren** an, damit sie ausgerichtet bleiben: Ein Vorhängeschloss erscheint im Grundriss, und wenn sich eine Wand bewegt, folgt die andere. Die **Eigenschaften** einer Wand listen ihre **Sperren** auf, jede mit **Entsperren**.

## Wände an Rasterlinien sperren

Wählen Sie eine Wand, die entlang einer Rasterlinie verläuft oder deren Ende auf einer liegt, und wählen Sie die Rasterlinie in den **Eigenschaften** › **An Raster sperren**. Dann wählen Sie die Rasterlinie mit dem Werkzeug {{ui:Raster}} und geben in {{ui:Verschieben um}} einen Abstand ein: Die Linie verschiebt sich rechtwinklig zu sich selbst, und die an sie gesperrten Wände folgen mit ihren verbundenen Wänden, in einem Schritt. Eine an eine Rasterlinie gesperrte Wand kann nicht von selbst davon weg verschoben werden (verschieben Sie die Linie oder entsperren Sie die Wand); eine Rasterlinie, die so gedreht wird, dass eine gesperrte Wand nicht rechtwinklig auf ihr bleiben kann, wird abgelehnt. Das Umbenennen der Linie behält die Sperre; das Löschen der Linie entfernt sie.

## Länge: welche Seite hält und was sie misst

- **Wachsen ab** (Eigenschaften einer Wand): **Anfang bleibt** (das Ende bewegt sich), **Ende bleibt** (der Anfang bewegt sich) oder **Mitte bleibt** (beide Enden bewegen sich um die Hälfte). Während Sie die Länge eingeben, markiert der Grundriss den Punkt, der bleibt. Die an dem sich bewegenden Ende angrenzende Wand verschiebt sich rechtwinklig zu sich selbst und behält ihren Winkel.
- **Messen ab** (neben Bemaßung im Grundriss, in den Eigenschaften und in Einstellungen › BimCraft › Wände): die Mittellinie, die Innenfläche oder die Außenfläche. Das Längenfeld und die Wandbemaßungen des Grundrisses lesen dasselbe, sodass sie übereinstimmen. Standardmäßig steht es auf der Mittellinie.
- Um eine Wand frei von ihren Verbindungen zu verschieben (sie lösen sich, die Wand behält ihre Identität), halten Sie {{key:Alt}} gedrückt, während Sie an ihrem mittleren Griff ziehen.

## Gut zu wissen

- Diese Rezepte sind die der Spezifikation des Werkzeugs Wand (Seiten 4 bis 9). Verbindungsart und Layer-Priorität sind für gerade Wände ausgelegt; die Layer-Priorität wird nur im Grundriss angezeigt (nicht in Schnitten, Ansichten oder 3D, wo eine Wand ein Körper ist), nicht an Knoten von drei oder mehr Wänden, und Membranen werden nicht übernommen.
- Die Art einer Verbindung wird in ihrem Datensatz in der IFC-Datei gespeichert (der Name der `IfcRelConnectsPathElements`, zum Beispiel `CadCraft join L butt 1`), sodass andere Programme die Verbindung weiterhin lesen und eine ältere Datei mit Gehrungen öffnet.
- Die Sperren und Verbindungen werden in der IFC-Datei gespeichert (die Sperren als `CadCraft_WallHolds` am Projekt, die Verbindungen als `IfcRelConnectsPathElements`), sodass sie da sind, wenn Sie die Datei erneut öffnen.
- Gekrümmte Wände können geteilt, wieder zusammengefügt werden und ein Stück kann herausgenommen werden; sie werden nicht versetzt oder gesperrt.
- Siehe auch [Wände zeichnen](topic:draw-walls), [Eine Wand, Tür oder ein Fenster ändern](topic:change-a-wall-or-door) und [Eine Wand formen](topic:wall-shape).
