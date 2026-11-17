---
title: In Ansichten und Schnitten bearbeiten, Blattgrößen, Schriftfelder und Umbenennen
summary: Wände, Türen, Fenster und Geschosse verschieben und Wände, Öffnungen, Geschosse, Bemaßungen und Notizen direkt in einer Ansicht oder einem Schnitt zeichnen, eigene Blattgrößen und Schriftfelder als Daten behalten und Familien, Größen und Elemente im Projektbrowser umbenennen.
keywords: neues Geschoss in Ansicht, Bemaßung in Ansicht, in Ansicht bearbeiten, in Schnitt bearbeiten, Ansicht, Schnitt, Wand in Ansicht verschieben, Fensterbank, Geschosshöhe, Geschoss ziehen, Wand in Schnitt zeichnen, Notizen in Ansicht, Annotation, Blattgröße, benutzerdefinierte Blattgröße, Papiergröße, Schriftfeld, Schriftfeldvorlage, Blattformat, Rahmen, Felder, Kunde, gezeichnet von, Revision, Familie umbenennen, Typ umbenennen, Element umbenennen, Projektbrowser
from: 8726cf83
---

## Was Sie tun

Ändern Sie das Gebäude dort, wo Sie es von der Seite sehen, richten Sie die Blätter ein, die Ihr Büro verwendet, und geben Sie Familien, Größen und Elementen die Namen, die Sie wünschen.

## In einer Ansicht oder einem Schnitt bearbeiten

1. Schalten Sie {{ui:Draw}} ein. Öffnen Sie im {{ui:Project browser}} {{ui:Elevations}} oder {{ui:Sections}}.
2. Klicken Sie in einer Zeile auf die Stiftschaltfläche {{ui:Edit in this view}}. Die Ansicht öffnet sich so, wie die Blätter sie zeichnen, mit dem, was Sie ändern können, darüber.
3. Mit {{ui:Select and move}}:
   - ziehen Sie eine Wand, die zur Ansicht zeigt, entlang ihrer Linie;
   - ziehen Sie eine Tür oder ein Fenster entlang ihrer Wand, und ein Fenster nach oben oder unten, um seine Fensterbank zu ändern;
   - ziehen Sie die Linie eines Geschosses nach oben oder unten, um seine Höhe zu ändern;
   - ziehen Sie eine Notiz.
4. {{ui:Door}} und {{ui:Window}}: klicken Sie auf eine Wand, wo sie hinkommt (ein Fenster in der Höhe, die Sie anklicken).
5. {{ui:Wall}} (in Schnitten): klicken Sie, wo sie auf der Ebene des Schnitts beginnt und endet. Sie wird auf dem Geschoss unter Ihrem ersten Klick gezeichnet, bis zum nächsten Geschoss.
6. {{ui:Note}}: klicken Sie und schreiben Sie. Notizen werden in der Datei gespeichert und auf jedem Blatt gezeichnet, das die Ansicht zeigt.
7. {{ui:Level}}: klicken Sie auf die Höhe, auf der ein neues Geschoss hinkommt. Es ist so hoch wie der Abstand zum Geschoss darüber (3000 mm ganz oben); ziehen Sie seine Linie, um sie zu ändern. Ein zweites Geschoss innerhalb von 50 mm eines anderen wird abgelehnt.
8. {{ui:Dimension}}: klicken Sie, wo sie beginnt und endet. Die Klicks fangen die Kanten von Wand, Tür, Fenster und Geschoss ein, und die Bemaßung ist horizontal oder vertikal, je nachdem, in welche Richtung Sie sich bewegen. Sie wird in der Datei gespeichert und mit ihrer Länge auf jedem Blatt gezeichnet, das die Ansicht zeigt. Klicken Sie mit {{ui:Select and move}} darauf, um sie zu wählen.
9. {{ui:Delete}} oder die Delete-Taste löscht die gewählte Wand, Tür, Fenster, Bemaßung oder Notiz. Ctrl+Z macht die letzte Änderung rückgängig, solange das Panel offen ist. Esc kehrt zu {{ui:Select and move}} zurück.

Jede Änderung ist dieselbe wie im Grundriss und ein einzelner Rückgängig-Schritt: Grundriss, 3D-Ansicht und Blätter folgen.

## Blattgrößen und Schriftfelder

1. Öffnen Sie ein Blatt ({{ui:New sheet}} oder eines Ihrer eigenen unter {{ui:Sheets}}). Neben {{ui:Paper}} stehen {{ui:Title block}} und {{ui:Formats…}}.
2. {{ui:Paper}} listet jede Standardgröße (Letter bis Arch E, A4 bis A0) und Ihre eigenen.
3. {{ui:Title block}}: {{ui:Strip (bottom)}}, {{ui:Column (right)}} mit den üblichen Feldern oder Ihr eigenes. Die Felder des gewählten erscheinen unter dem Namen des Blatts: Geben Sie den Kunden, den Zeichner und die Revision ein.
4. {{ui:Formats…}} erstellt Ihre eigenen: eine Blattgröße (Name, Breite, Höhe, Rahmen) und ein Schriftfeld (wo es steht, seine Breite, seine Felder, eines pro Zeile; beenden Sie ein Feld mit *, damit es groß wird).
5. {{ui:Export}} speichert sie als Bibliotheksdatei, und {{ui:Import…}} fügt eine zu einem anderen Modell hinzu. Sie werden im Modell gespeichert, daher trägt eine Vorlage sie mit.

## Familien, Größen und Elemente umbenennen

1. Öffnen Sie im {{ui:Project browser}} {{ui:Families}}.
2. Der Stift neben einer Familie benennt sie um; der Typ jeder Größe übernimmt den neuen Namen.
3. Öffnen Sie die Größen einer Familie, um eine Größe oder ein daraus platziertes Element umzubenennen (bis zu 40 pro Größe werden aufgelistet).

Jede Umbenennung ist ein einzelner Rückgängig-Schritt.
