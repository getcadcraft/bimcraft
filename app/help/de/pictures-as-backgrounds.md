---
title: Ein Bild unter den Grundriss legen
summary: Platzieren Sie ein PNG-, JPEG- oder WebP-Bild (einen gescannten Plan, eine Skizze, ein Foto des Geländes, ein Luftbild) unter dem Grundriss eines Geschosses oder auf einer vertikalen Ebene. Skalieren Sie es über zwei Punkte, verschieben, drehen, abblenden und sperren Sie es, sehen Sie es in 3D und im PDF des Plans, und bewahren Sie es zusammen mit dem Modell in einem Bundle auf.
keywords: Bild, Abbildung, Hintergrund, PNG, JPEG, WebP, Scan, Skizze, Foto, Luftbild, Lageplan, Maßstab, Deckkraft, Sperren, Unterlage, nachzeichnen
from: e3c78d1f
---

## Ein Bild platzieren

Schalten Sie {{ui:Zeichnen}} ein, gehen Sie zum Geschoss und wählen Sie {{ui:Bild}} im Menü {{ui:Build}}. Klicken Sie dann auf {{ui:Bild einfügen…}} und wählen Sie eine PNG-, JPEG- oder WebP-Datei. Sie wird in Ihrem Browser gelesen und nie hochgeladen. Sie erscheint unter dem Grundriss, an die Ansicht angepasst, und die Symbolleiste sagt, dass sie noch nicht skaliert ist. Alles, was Sie zeichnen, liegt darüber.

## Den Maßstab festlegen

Wählen Sie {{ui:Maßstab}}, klicken Sie auf zwei Punkte des Bildes, deren reale Entfernung Sie kennen (zwei Enden einer Wand auf einem gescannten Plan, ein Maß, das auf einer Skizze steht), geben Sie dann die Entfernung ein und drücken Sie {{key:Enter}}. Das Bild wächst oder schrumpft um den ersten angeklickten Punkt. {{key:Esc}} bricht ab.

## Einen kopierten Bereich einfügen

In MarkupCraft kopiert {{ui:Bereich kopieren}} einen Teil eines PDF-Blatts als Bild. Zurück in BimCraft, bei sichtbarem Grundriss eines Geschosses, drücken Sie {{key:Ctrl+V}} (oder {{ui:Einfügen}} im Menü {{ui:Bearbeiten}}). Der Bereich landet als Bild auf dem Grundriss, zentriert an der Zeigerposition (oder in der Mitte der Ansicht). Hat das Blatt einen Zeichnungsmaßstab, wird er in der wahren Größe eingefügt, sodass eine Wand darauf so lang ist wie Ihre Wände. Ohne einen solchen wird er in Papiergröße eingefügt und {{ui:Maßstab}} startet, sodass Sie zwei Punkte anklicken und ihre Entfernung eingeben können. Ein als Überlagerung kopierter Bereich beginnt mit der Deckkraft, mit der er kopiert wurde. Es ist ein Schritt zum Rückgängigmachen und wird wie jedes andere Bild gespeichert.

Beim Einfügen wird das zuletzt Kopierte verwendet: ein kopierter Bereich oder etwas, das Sie in BimCraft kopiert haben. {{key:Ctrl+V}} fügt auch jedes andere PNG-, JPEG- oder WebP-Bild aus Ihrer Zwischenablage ein, platziert wie {{ui:Bild einfügen…}} und noch nicht skaliert. Ein kopierter Bereich wird sechs Stunden gemerkt.

## Verschieben, drehen, abblenden, sperren

{{ui:Verschieben}} nimmt einen Basispunkt auf dem Bild und danach den Ort, an den es soll. {{ui:Drehen}} nimmt einen Winkel in Grad, um die Mitte des Bildes. {{ui:Deckkraft}} blendet es ab, damit Ihre Linien hervorstechen. {{ui:Sperren}} verhindert, dass es sich beim Zeichnen bewegt; ein gesperrtes Bild lässt Sie weiterhin die Deckkraft ändern und es ausblenden. Jede Änderung ist ein Schritt zum Rückgängigmachen.

## Mehrere Bilder, mehrere Geschosse

Ein Bild gehört zu dem Geschoss, auf dem es platziert wurde, und erscheint im Grundriss und Deckenspiegel dieses Geschosses. Klicken Sie auf ein Bild, um daran zu arbeiten, oder wählen Sie es in der Liste. {{ui:Ausblenden}} schaltet es ab, ohne es zu entfernen. {{ui:Entfernen}} (oder {{key:Delete}}) nimmt es aus dem Modell.

## Bilder in der 3D-Ansicht

Jedes Bild steht auch in der 3D-Ansicht als flache Ebene: Ein Grundrissbild liegt auf seinem Geschoss, ein Bild auf einer vertikalen Ebene steht über seiner Schnittlinie. Es wird über dem Modell gezeichnet, ohne es zu verdecken, und das Modell verdeckt den Teil des Bildes, der dahinter liegt. Überlappende Bilder werden nach Abstand sortiert. Deckkraft, Ausblenden, Sperren und Entfernen funktionieren gleich, und {{ui:In 3D anzeigen}} schaltet alle Ebenen nur in der 3D-Ansicht ab. Ein Geschoss hält höchstens 8 Bilder, damit die Ansichten schnell bleiben.

## Ein Bild auf einer vertikalen Ebene

Wählen Sie unter {{ui:Platzieren auf}} {{ui:Eine vertikale Ebene (Schnittlinie)}}, dann {{ui:Bild einfügen…}}. Klicken Sie auf die zwei Enden einer Linie im Plan (ein Wandflächenende rastet ein), oder wählen Sie unter {{ui:Über einer Schnittlinie}} eine benannte Schnittlinie des Geschosses, dann sind keine Klicks nötig. Das Bild steht auf dem Geschoss über dieser Linie, so breit wie die Linie. Stellen Sie seine {{ui:Breite}}, seine Position {{ui:Entlang der Linie}} und seine {{ui:Höhe über Geschoss}} durch Eingabe ein. {{ui:Drehen}} dreht es in seiner eigenen Ebene. Ein vertikales Bild wird nicht unter dem Grundriss gezeichnet; der Grundriss zeigt seine Linie, während Sie daran arbeiten. BimCraft hat kein interaktives 2D-Schnittfenster: Schnitte und Ansichten werden auf den Blättern gezeichnet, und Bilder werden in diesen Blattansichten noch nicht gedruckt.

## Drucken

{{ui:Druckansicht}} auf einem Grundriss schreibt die Bilder des Geschosses in das PDF unter die Zeichnung, im Maßstab, mit Drehung und Deckkraft, auf das Blatt beschnitten. Ein ausgeblendetes Bild bleibt außen vor. Ein JPEG wird unverändert übernommen; andere Bilder werden auf dem Blatt zuerst auf 200 dpi reduziert.

## Neben dem Modell aufbewahren

Die Bytes des Bildes werden nicht in den IFC-Text geschrieben. Das Modell verweist auf jedes Bild über seinen Namen (eine IfcDocumentReference wie pictures/<id>.png), und die Bytes reisen in einem Projekt-Bundle. Verwenden Sie {{ui:Als Bundle speichern…}} (oder {{ui:Als IFC speichern}} und wählen Sie es): Sie erhalten eine .ccbundle-Datei mit dem Modell und seinen Bildern. Die IFC bleibt klein, und Änderungen bleiben schnell. Öffnen Sie die .ccbundle, und die Bilder sind wieder da.

Eine einfache .ifc kann kein Bild aufnehmen, ohne groß zu werden. Beim Speichern sagt BimCraft, wie viele Bilder außerhalb davon gehalten werden, und bietet ein Bundle oder eine einfache IFC an, die die Bilder bis 512 KB einbettet und die übrigen weglässt. Eine einfache .ifc, die ohne ihr Bundle geöffnet wird, zeigt diese Bilder als fehlend, und Probleme listet sie auf. Öffnen Sie in diesem Fall die .ccbundle, in der sie gespeichert wurden. Dateien der ersten Version, bei denen das Bild in der IFC lag, öffnen sich weiterhin, und ein Bundle-Speichern verschiebt ihre Bilder heraus. Ein Bild wird bis 6 MB unverändert gehalten; ein größeres wird zuerst verkleinert, und Sie werden darüber informiert. Andere Programme öffnen das Modell und ignorieren die Bilder. Ein Bild, das Sie noch nicht skaliert haben, wird unter Probleme als Hinweis aufgelistet.

## In Schnitt- und Ansichtsblättern

Ein Bild auf einer vertikalen Ebene (wählen Sie {{ui:Vertikal}} im Bildpanel und klicken Sie auf die zwei Enden einer Linie, oder platzieren Sie es über einer benannten Schnittlinie) wird in den Blattansichten gedruckt, die direkt darauf blicken. Ein Schnitt zeigt ein Bild, das auf seiner Schnittlinie steht oder über dieser Schnittlinie nach Namen platziert wurde. Eine Ansicht zeigt jedes vertikale Bild, dessen Ebene ihr zugewandt ist. Das Bild wird unter den Linien der Ansicht gezeichnet, im Maßstab der Ansicht, auf die Ansicht beschnitten, und behält seine Deckkraft. Öffnen Sie {{ui:Blätter…}}, um es zu sehen. Das Blatt-PDF enthält es als Bild. Von hinten gesehen ist ein Bild gespiegelt, wie in 3D. Ausgeblendete Bilder bleiben außen vor.
