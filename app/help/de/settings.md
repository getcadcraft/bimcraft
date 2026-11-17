---
title: BimCraft-Einstellungen
summary: Legen Sie fest, ob Räume und Spaces angezeigt werden, ob Kanten gezeichnet werden und in welcher Ansicht ein Modell geöffnet wird, und beginnen Sie mit eingeschaltetem Wandfang.
keywords: Einstellungen, Voreinstellungen, Optionen, Spaces, Räume, ifcspace, Kanten, Linien, Leistung, großes Modell, Öffnungsansicht, Kamera, Draufsicht, Wandfang, Fangen
from: 4416e64f
---

Öffnen Sie {{ui:Einstellungen}} mit dem Zahnrad in der App-Leiste oder {{key:Mod+,}}. Die erste Registerkarte, {{ui:BimCraft}}, enthält die Einstellungen, die zu dieser App gehören; {{ui:Allgemein}} enthält die Einstellungen, die alle CadCraft-Apps gemeinsam nutzen (Design, Symbolleiste, Bereiche). Die Einstellungen von BimCraft gelten nur in der App: Sie ändern sie hier, und dieser Browser merkt sie sich. {{ui:BimCraft-Einstellungen zurücksetzen}} am unteren Rand des Dialogfelds setzt sie und die gemeinsamen Einstellungen auf den Ausgangszustand zurück.

## Menüs, Tasten und Maus

Der Menüstil (die eigene Symbolleiste von BimCraft, eine Menüleiste im Stil einer Wohnungsplanung, ein BIM-Menüband oder eine Befehlszeile zum Zeichnen), Ihre eigenen Tasten und Menüs sowie die Funktion von Mausrad und Maustasten. Siehe [Menüs, Tasten und Maus](topic:menus-keys-and-mouse).

## Beim Öffnen eines Modells

- **Räume und Spaces anzeigen** (am Anfang aus): Räume und Spaces sind durchsichtige Körper, die die dahinterliegenden Wände verdecken können, daher starten sie ausgeblendet. Die Schaltfläche {{ui:Räume}} über dem Modell schaltet sie für das geöffnete Modell trotzdem ein und aus.
- **Kanten**: {{ui:Kanten ein}} (der Anfangswert) zeichnet die Kantenlinien, die den Zeichnungscharakter erzeugen. {{ui:Nur kleine Modelle}} zeichnet sie nur bei Modellen mit weniger als 300,000 Dreiecken, was große Modelle schneller schaltbar hält. {{ui:Kanten aus}} startet jedes Modell ohne sie. Die Schaltfläche {{ui:Kanten}} schaltet sie weiterhin für das geöffnete Modell um. Ab 1.5 Millionen Dreiecken sind Kanten immer aus.

## Zeichnungen öffnen in

So wird eine DWG- oder DXF-Zeichnung zuerst angezeigt: {{ui:3D (am schnellsten)}} (der Anfangswert) zeigt auch eine große Zeichnung schnell, oder {{ui:Modell (2D)}} öffnet die flache Ansicht des Modellbereichs. Die Registerkarten über der Zeichnung wechseln jederzeit zwischen {{ui:Modell}}, den Blättern und {{ui:3D}}. Eine Zeichnung ohne Inhalt im Modellbereich oder ein Browser, der 3D nicht darstellen kann, öffnet immer in 2D.

## Öffnungsansicht

Die Kamera, mit der ein Modell geöffnet wird: {{ui:Einpassen}} (der Anfangswert, das ganze Modell von einer Ecke aus), {{ui:Oben}}, {{ui:Vorne}} oder {{ui:Seite}}. Die Schaltflächen über dem Modell ändern die Ansicht jederzeit.

**Ein Gebäude im Grundstück gedreht**: Viele Modelle kommen mit dem Gebäude in einem Winkel zu den Achsen der Datei (bei Vermessungs- oder gemeinsamen Koordinaten). {{ui:Rechtwinklig zum Gebäude}} (der Anfangswert) richtet ein solches Gebäude rechtwinklig aus: {{ui:Einpassen}}, {{ui:Oben}}, {{ui:Vorne}}, {{ui:Seite}}, die Flächen des ViewCube und jeder neue Schnitt folgen seinen Wänden, und der Kompass des ViewCube zeigt weiterhin nach Norden des Modells. {{ui:Wie im Grundstück platziert}} behält die Achsen der Datei bei. Ein Gebäude, dessen Wände an den Achsen verlaufen, sieht in beiden Fällen gleich aus.

## Bibliothekselemente platzieren

**Mit eingeschaltetem Wandfang beginnen** (am Anfang aus): Beim Platzieren oder Einfügen eines Bibliothekselements rastet seine Rückseite an der nächsten Wand ein und zeigt zum Raum. {{key:Tab}} oder {{ui:Wandfang}} in der Platzierungsleiste schaltet ihn für den Moment aus. Ein Geschoss ohne Wände startet ohne ihn.

## Schnittbox

{{ui:Spielraum um die Auswahl}} ist der Abstand, den {{ui:Schnittbox um die Auswahl}} auf jeder Seite der gewählten Bauteile lässt, in Millimetern: Anfangswert 300, bis zu 5000. Siehe [Ein IFC-Modell mit einer Schnittebene schneiden](topic:section-plane).

## Standort

{{ui:Breiten- und Längengrad in}} wählt das System, in dem {{ui:Messen}} › {{ui:Standort}} Breiten- und Längengrade angibt: WGS 84 (EPSG:4326, der Anfangswert, wie GPS und Webkarten es verwenden), {{ui:Das eigene Datum der Datei}} oder eines von ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 und CGCS2000. Das eigene Kartensystem und das Datum der Datei werden immer ebenfalls angezeigt. Siehe [Entfernungen, Flächen und Standorte in 3D messen](topic:measure).

## Eckenanzeige

Was in der unteren rechten Ecke der 3D-Ansichten steht (ein IFC-Modell und eine auf 3D umgeschaltete Zeichnung): {{ui:ViewCube}} (der Anfangswert), {{ui:Achsensymbol}} (ein kleines X, Y und Z) oder {{ui:Keine}}. Die Änderung wirkt sofort. Die 2D-Zeichnungsansicht zeigt nie eine Anzeige.

Klicken Sie im ViewCube auf eine Fläche, eine Kante oder eine Ecke, um von dieser Seite aus zu sehen, ziehen Sie den Würfel, um die Ansicht zu drehen, ziehen Sie den Ring, um sich zu wenden, und klicken Sie auf das Haus für die Startansicht.

## Ihr Name bei Themen

Angemeldet tragen Themen den Namen Ihres Kontos, und BimCraft fragt nichts ab: Dieser Teil zeigt {{ui:Aus Ihrem Konto (<name>)}}. {{ui:Anderen Namen verwenden}} öffnet ein Feld für einen anderen Namen, der gilt, bis Sie {{ui:Meinen Kontonamen verwenden}} wählen. Abgemeldet fragt das Themenformular wie bisher nach einem Namen. Siehe [Themen und BCF-Dateien](topic:issues-bcf).

## Assistenten

**KI-Assistenten und Skripte BimCraft nutzen lassen** (am Anfang aus) erlaubt einem Assistenten auf Ihrem Computer, das geöffnete Modell über CadCraft Studio zu erreichen: **Lesen** findet Elemente und liest ihre Eigenschaften, **Ansicht ändern** isoliert, blendet aus und blendet ein. **Aktivität** listet seine Aufrufe auf. Siehe [Einen KI-Assistenten mit Ihrem Modell arbeiten lassen](topic:assistants).

:::note
Die übrigen Einstellungen gelten, wenn ein Modell geöffnet wird oder das Platzieren beginnt. Ein bereits geöffnetes Modell behält sein Aussehen, bis Sie die Schaltflächen der Symbolleiste verwenden oder es erneut öffnen.
:::

## Verwandte Themen

- [Bibliothekselemente kopieren, einfügen und duplizieren](topic:copy-paste)
- [Ausrüstung und Möbel aus der Bibliothek platzieren](topic:place-from-library)
- [Der BimCraft-Bildschirm](topic:workspace)
- [Einen KI-Assistenten mit Ihrem Modell arbeiten lassen](topic:assistants)
