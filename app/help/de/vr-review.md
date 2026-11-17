---
title: Das Modell mit einer VR-Brille prüfen
summary: Das IFC-Modell in Originalgröße mit einer VR-Brille begehen: springen, sich drehen, messen, aufschneiden, BCF-Themen mit einem Bild platzieren, es als Tischmodell sehen und die anderen einer Live-Sitzung treffen.
keywords: vr, virtuelle Realität, Brille, webxr, xr, immersiv, quest, oculus, vive, index, pico, durchgehen, Rundgang, teleportieren, Designprüfung, Koordination, Prüfung, messen, Schnitt, schneiden, Thema, Themen, bcf, Tischmodell, Maßstabsmodell, Präsenz, Avatare, live, gemeinsam
from: 8994b36d
---

{{ui:VR}} in der Symbolleiste setzt Sie mit einer VR-Brille in das Modell, in Originalgröße. Sie stehen dort, wo die Kamera der 3D-Ansicht ist, auf dem Boden darunter, und schauen in dieselbe Richtung. Die Brille zeigt, was die 3D-Ansicht zeigt: ausgeblendete Geschosse, Elemente und Modelle bleiben verborgen, und gefärbte Materialien kommen mit. Nichts wird hochgeladen: Der Browser zeichnet alles auf diesem Computer (oder im Browser der Brille).

## Was Sie brauchen

- Eine Brille, die der Browser steuern kann (WebXR): der eigene Browser einer eigenständigen Brille, oder Chrome oder Edge auf einem PC mit angeschlossener Brille.
- Ein geöffnetes IFC-Modell auf einer sicheren Seite (https), wie sie auf dieser Website ist.

Ohne Brille ist {{ui:VR}} ausgegraut und sagt, warum.

## Starten

1. Richten Sie die 3D-Ansicht dort ein, wo Sie beginnen wollen: in einem Raum oder draußen mit Blick auf das Gebäude.
2. Klicken Sie auf {{ui:VR}} in der Symbolleiste.
3. Setzen Sie die Brille auf.

Das Menü liegt auf der Rückseite Ihrer linken Hand. Zeigen Sie mit dem rechten Controller darauf und drücken Sie den Abzug, um eine Schaltfläche zu wählen. (Mit nur einer Hand schwebt das Menü vor der Stelle, an der Sie begonnen haben.)

## Sich bewegen

- **Springen:** Wählen Sie unter {{ui:Verschieben}} einen Boden, zeigen Sie darauf und drücken Sie den Abzug; Sie landen dort. Oder schieben Sie den Stick nach vorn, um zu zielen, und lassen Sie ihn los, um zu springen. Sie können nur auf Böden, Decken und Gelände landen (Flächen, die nach oben zeigen), niemals auf einer Wand.
- **Drehen:** schieben Sie den Stick nach links oder rechts: Sie drehen sich jedes Mal um 30°.
- **Gehen:** gehen Sie einfach in Ihrem Spielbereich.

## Messen

Wählen Sie {{ui:Messen}}, dann drücken Sie den Abzug auf zwei Punkten. Der Abstand wird zwischen ihnen in Metern angezeigt. Ein Punkt nahe einer Ecke rastet an der Ecke ein.

## Aufschneiden

Wählen Sie {{ui:Schnitt}} und drücken Sie den Abzug auf einer Fläche:

- auf einer Wand (oder allem, was kein Boden ist): alles zwischen Ihnen und dieser Fläche wird weggeschnitten, sodass Sie hineinsehen. Das funktioniert am besten von außen oder quer durch einen Raum;
- auf einem Boden, von oben: ein Grundrissschnitt 1.2 m über diesem Boden, sodass die Wände ihren unteren Teil zeigen.

{{ui:Löschen}} entfernt den Schnitt und die Messungen. Wenn beim Start eine [Schnittebene](topic:section-plane) das Modell schneidet, startet die Brille damit.

## Ein Thema platzieren

Wählen Sie {{ui:Thema}} und drücken Sie den Abzug dort, wo das Problem ist. Eine nummerierte Nadel markiert es, und das Thema kommt als BCF-Thema in die Registerkarte {{ui:Themen}}, mit einem Bild dessen, was Sie gesehen haben, und der Kamera an Ihrer Stelle, in den eigenen Koordinaten des Modells. Speichern Sie sie mit dem Rest Ihrer [Themen](topic:issues-bcf) als BCF-Datei; andere Koordinationswerkzeuge öffnen sie in derselben Ansicht.

Fügen Sie einen Kommentar zu einem Thema hinzu, nachdem Sie VR verlassen haben, in der Registerkarte {{ui:Themen}}: Tippen in der Brille ist noch nicht umgesetzt.

## Als Tischmodell sehen

{{ui:Tischplatte}} verkleinert das Modell, damit es auf einen Tisch vor Ihnen passt; gehen Sie darum herum oder drehen Sie es mit dem Stick. {{ui:Originalgröße}} setzt Sie dorthin zurück, wo Sie waren.

## Mit anderen, live

In einer [Live-Sitzung](topic:work-live) sieht jeder in VR die anderen als Kopf und zwei Hände in ihrer eigenen Farbe, mit ihrem Namen, und einen Punkt, wohin jeder zeigt. Änderungen, die jemand vornimmt, erreichen Ihre Brille innerhalb eines Augenblicks. Personen am Schreibtisch werden in der Brille noch nicht angezeigt.

## Verlassen

Wählen Sie {{ui:VR verlassen}} (oder nehmen Sie die Brille ab und beenden Sie es dort). Die 3D-Ansicht auf dem Bildschirm wechselt dorthin, wo Ihr Kopf war.

:::note
Mit einem Brillen-Emulator getestet, noch nicht auf jeder Brille. Ein großes Modell kann die Brille ruckeln lassen: Blenden Sie zuerst Geschosse oder Modelle aus, die Sie nicht brauchen ([Ausblenden und Isolieren](topic:hide-and-isolate)).
:::
