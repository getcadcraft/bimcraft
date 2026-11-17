---
title: Wände, Böden und Dächer mit Holzrahmen ausbilden
summary: Ständer, Schwellen, Stürze, Balken, Sparren oder Dachbinder aus dem Modell erzeugen und mit ihm behalten; sie werden neu erstellt, wenn sich Wände, Öffnungen, Böden oder das Dach ändern, und die Schnittholzliste ist die Zuschnittliste.
keywords: TJI, I-Träger, Spannweitentabelle, Tabelle laden, Holzrahmen, Rahmen, Ständer, Schwelle, Oberschwelle, Sturz, Königsständer, Stützständer, Kurzständer, Ecke, kalifornische Ecke, Abzweig, Balken, Randbalken, Auswechslung, Sparren, Kehlsparren, Gratsparren, Kehlbalken, Zuschnittliste, Board Feet, 2x4, 2x6, Abstand, Achsabstand
from: 76d0ffb5
---

## Ziel

Rahmen Sie das Gebäude aus dem, was Sie gezeichnet haben. BimCraft legt die Ständer, Schwellen und Stürze in den Wänden, die Balken in den Böden und die Sparren (oder Dachbinder) im Dach fest, bemisst sie nach beschrifteten Standardtabellen, behält sie mit dem Modell und erstellt sie neu, wann immer sich das ändert, was sie einrahmen. Die Liste **Schnittholz** ist die Zuschnittliste.

## Einrahmen

1. Wählen Sie auf einem Geschoss {{ui:Build}} und wählen Sie {{ui:Holzrahmen}}.
2. Wählen Sie den **Abstand** (16" oder 24" Achsabstand; 400 oder 600 mm), die **Ecken** (dreiständrig oder kalifornisch), **Sparren** oder **Dachbinder** für Dächer und ob Wände eine Reihe **Riegel** auf halber Höhe erhalten. Für Böden wählen Sie **Schnittholz** oder **TJI (vorläufig)** und stellen die Balkenrichtung auf automatisch, Grundriss X oder Grundriss Y.
3. Klicken Sie auf **Alle Wände einrahmen** oder klicken Sie auf eine Wand, einen Boden oder ein Dach (auf dem Geschoss, auf dem das Dach liegt), um nur dieses einzurahmen.

Schalten Sie **Holzrahmen anzeigen** aus, um jedes Rahmenteil zu verbergen, wie eine Ebene; **Transparent** blendet die Wände, Böden und Dächer aus, die eingerahmt sind, damit Sie nur den Rahmen sehen.

## Was Sie erhalten

- **Wände**: eine untere Schwelle (an Türen ausgeschnitten), eine doppelte Oberschwelle, Ständer im Raster ab dem Wandanfang, Königs- und Stützständer und ein Sturz an jeder Tür und jedem Fenster, Kurzständer über Stürzen und unter Fenstern, eine grobe Unterschwelle unter Fenstern, Ecken, wo Wände sich treffen (die durchlaufende Wand erhält die Eckständer), zwei Stützständer, wo eine andere Wand anschließt, und Riegel zwischen den Ständern.
- **Böden**: Balken quer zur kurzen Seite des Bodens standardmäßig oder entlang Ihrer gewählten Grundrissachse; Randbalken rund um den Rand, und doppelte Auswechslungen und Stürze um eine Treppenöffnung, wobei die Balken durch sie hindurch kurz geschnitten werden (Kurzbalken). Der Modus TJI wählt die kleinste aufgeführte Reihe und Tiefe, die die gemessene lichte Spannweite beim gewählten Abstand erreicht.
- **Dächer**: Gewöhnliche Sparren rechtwinklig zu jeder Traufe, Kurzsparren, wo Grate und Kehlen sie schneiden, Grat- und Kehlsparren, Firstbretter, Deckenbalken auf den Schwellen und Kehlbalken – oder einfache Dachbinder im Abstand, je ein Stück.

## Ändern

Wählen Sie ein beliebiges Rahmenteil in der 3D-Ansicht oder im Modellbaum. **Eigenschaften** zeigt seinen Rahmen: Ändern Sie den Abstand, Typ und Richtung der Bodenbalken, die Ecken, die Riegel oder den Dachrahmen. Wenn Sie Wände, Türen und Fenster verschieben oder den Boden oder das Dach ändern, wird der Rahmen von selbst neu erstellt.

Damit ein Teil, das Sie absichtlich gesetzt haben, beim Neuerstellen des Rahmens erhalten bleibt, wählen Sie es und wählen Sie **Dieses Teil beim Neuerstellen des Rahmens behalten**. Ein behaltenes Teil bleibt, wo es ist; ändert sich der Rahmen um es herum, wird es markiert, damit Sie es prüfen können.

## TJI-Böden aus einer geladenen Tabelle

BimCraft enthält keine Spannweitentabellen der Trägerhersteller (sie gehören dem Hersteller und ändern sich mit jeder Auflage). Wählen Sie den Rahmen eines Bodens, stellen Sie **Bodenbalken** auf **TJI (vorläufig)** und wählen Sie unter **Eigenschaften** **Tabelle laden…**: eine Datei im Format `cadcraft-tji-table`, JSON oder CSV, die Sie aus den aktuellen Spannweitentabellen des Herstellers erstellt haben. Sie nennt den Hersteller, das Produkt und die Auflage sowie die Quelle der Zahlen und listet für jeden Lastfall (Verkehrslast, Eigenlast, Durchbiegungsgrenze, Auflagerlänge) die größte lichte Spannweite jeder Reihe und Tiefe bei jedem Abstand auf.

- BimCraft übernimmt die **lichte Spannweite** des Bodens, wählt die flachste Tiefe und darin die Reihe, deren aufgeführte Spannweite für den gewählten Abstand und Lastfall reicht, und rahmt den Boden damit ein. Liegt die Spannweite oder der Abstand außerhalb der Tabelle, sagt es das und ändert nichts.
- Die Lasten, die Durchbiegungsgrenze, die Auflagerlänge, die Tabelle und der Satz „Vorläufige Planungshinweise; die endgültige Auswahl erfordert die Tabellen des Herstellers und die Projektlasten“ werden auf der Schnittholzliste gedruckt, mit dem Rahmen ins Modell geschrieben und im Bereich **Probleme** als Hinweis aufgeführt. Eine als Beispiel gekennzeichnete Tabelle wird dazu in einer Warnung genannt.
- Ist das Add-on **Bauvorschriften** eingeschaltet, liest dessen Regel für Bodenbalken ebenfalls eine geladene Tabelle; ohne Tabelle werden TJI-Balken bei dieser Prüfung wie bisher ausgelassen.
- Die Tabelle bleibt in diesem Browser, bis Sie sie löschen oder eine andere laden. Die Datei: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: inches, feet, psf; oder `metric`: mm, Meter, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) und `rows` (`series`, `depth`, `spans`: für jede Fall-ID der Abstand und die größte lichte Spannweite, zum Beispiel `"16": "15-6"`). In CSV stehen dieselben Angaben als Zeilen `# key = value`, danach `series,depth,case,spacing,span`.
- Ohne geladene Tabelle wird ein TJI-Layout abgelehnt, und nichts ändert sich: **TJI-Tabelle laden: Die Tabellen des Herstellers gehören dem Hersteller und sind nicht eingebaut.** Ein Modell, das mit der älteren eingebauten TJI-Tabelle (vor dieser Änderung) eingerahmt wurde, behält alle Balken, die es hat; Eigenschaften und Probleme sagen, dass die Tabelle nötig ist, und der Boden lässt sich neu einrahmen, sobald Sie eine geladen haben. Vollholzbalken funktionieren wie bisher.

Dies sind Planungshinweise. Die endgültige Balkenauswahl braucht die Tabellen des Herstellers, die Projektlasten und den Ingenieur.

## Die Zuschnittliste

Wählen Sie im Bereich Listen **Schnittholz**: jedes Rahmenteil, gruppiert nach Querschnitt und nach der Lagerlänge, die Sie kaufen würden (ganze Längen von 2' ab 8'; in Millimetern Schritte von 600 mm ab 2400 mm), mit der Stückzahl und den Board Feet. **CSV** lädt sie herunter.

:::warning
Die Abmessungen von Stürzen, Balken, Sparren und Deckenbalken stammen aus beschrifteten Standardtabellen für typische ein- oder zweigeschossige Wohnhäuser, keine Berechnung. **Eigenschaften** zeigt an, wenn eine Spannweite oder eine Öffnung über ihre Tabelle hinausgeht. Ein Planer oder Ingenieur prüft Spannweiten, Lasten und Anschlüsse.

TJI-Layouts verwenden nur eine Tabelle, die Sie laden und die aus den aktuellen Spannweitentabellen des Herstellers erstellt wurde; BimCraft liefert keine mit. Der Vorschlag prüft weder Auflager, Einzellasten, Kragarme, Durchbrüche, Treppenöffnungssturz noch Anschlüsse, und das I-Profil im Modell ist schematisch.
:::

## Was gespeichert wird

Jede eingerahmte Wand, jeder Boden und jedes Dach wird als IFC-Elementbaugruppe („Framing“) aus IFC-Stäben (Ständer, Schwellen, Sparren, Kehlbalken, Riegel, Dachbinder) und Balken (Stürze, Balken, Randbalken, Firstbretter) gespeichert, jeweils mit Querschnitt, Länge und Board Feet.
