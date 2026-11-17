---
title: Ansichten, Ansichtsbereiche und eigene Blätter
summary: Jeden Grundriss, jede Ansicht, jeden Schnitt, jede 3D-Ansicht, Liste und jedes Blatt im Projektbrowser finden, für jeden Grundriss festlegen, wie er geschnitten wird und was er zeigt, Ausschnitte erstellen, Linien und Schraffuren in einer Ansicht zeichnen, Einstellungen in Ansichtsvorlagen halten und eigene Blätter anordnen.
keywords: Ausschnitt, Ausschnittsansicht, Detailansicht, vergrößerter Grundriss, Zeichnen, Detaillinien, Zeichenlinien, Schraffur, Schraffurbereich, gefüllter Bereich, Füllmuster, Deckenplan, RCP, Deckenraster, Leuchten, Projektbrowser, Ansichten, Ansichtsbereich, Zuschnitt, Zuschneidebereich, Ansicht zuschneiden, Ansichtsmaßstab, Unterlage, anderes Geschoss zeigen, Halbton, Schnittebene, Schnitthöhe, oben, unten, Ansichtstiefe, Sichtbarkeit, Kategorien, in Ansicht ausblenden, Ansichtsvorlage, Vorlagen, Blatt, Blätter, Schriftfeld, Ansichtsfenster, Maßstab, Blätter anordnen, Layout, PDF, Grundrisseinstellungen, Browser
from: ee1d5afe
---

## Was Sie tun

Arbeiten Sie so, wie BIM-Projekte organisiert sind: jede Ansicht in einer Liste, jeder Grundriss dort geschnitten, wo Sie es möchten, dieselben Einstellungen für mehrere Grundrisse über eine Vorlage, und Blätter, die Sie selbst anordnen.

## Der Projektbrowser

1. Schalten Sie {{ui:Zeichnen}} ein. Das linke Bedienfeld hat unter den Modellen einen {{ui:Projektbrowser}}.
2. Er listet:
   - **Grundrisse**: jedes Geschoss. Klicken Sie auf einen, um seinen Grundriss zu sehen. Die Schaltfläche mit dem Schieberegler daneben legt seinen Ansichtsbereich fest (unten). Ein Grundriss, der einer Vorlage folgt, zeigt den Namen der Vorlage.
   - **Deckenpläne**: der Deckenplan jedes Geschosses (unten).
   - **Ausschnitte**: jeder Ausschnitt mit der Ansicht, auf der er gezeichnet ist, und {{ui:Neuer Ausschnitt}}. **Fehlend** listet Ausschnitte, deren Ansicht nicht mehr existiert.
   - **Ansichten** und **Schnitte**: die vier Seiten und jede Schnittlinie. Klicken Sie auf eine, um den Zeichnungssatz zu öffnen, in dem sie gezeichnet ist.
   - **3D-Ansichten**: die Ansichten, die Sie mit {{ui:Ansichten}} gespeichert haben.
   - **Listen**: klicken Sie auf eine, um sie unter dem Grundriss zu zeigen.
   - **Blätter**: die Blätter, die Sie erstellt haben, {{ui:Neues Blatt}}, und {{ui:Zeichnungssatz…}} für den ganzen aus dem Modell erstellten Satz.
   - **Ansichtsvorlagen** mit {{ui:Neue Vorlage}}, und **Verknüpfungen** (die verknüpften Modelle).

## Den Ansichtsbereich eines Grundrisses festlegen

1. Klicken Sie auf die Schaltfläche mit dem Schieberegler neben einem Geschoss unter **Grundrisse**.
2. Legen Sie die Höhen oberhalb dieses Geschosses fest:
   - **Schnitt bei**: wo der Grundriss durch Wände, Türen und Fenster schneidet (1200 mm, etwa 4 ft, sofern Sie es nicht ändern).
   - **Oben**: Dinge über dem Schnitt und unter der Oberkante werden gestrichelt gezeichnet (ein hoher Schrank, ein Träger). Lassen Sie es leer für die Geschosshöhe.
   - **Unten** und **Tiefe unter der Unterkante**: Dinge, die tiefer liegen als der Schnitt, werden in dünnen Linien bis zur Unterkante gezeichnet, und so weit darunter.
3. Entfernen Sie unter **In diesem Grundriss angezeigt** die Auswahl, die dieser Grundriss auslässt: Möbel, Räume, Stützen und so weiter.
4. Um einzelne Elemente auszulassen: Wählen Sie sie im Grundriss oder in der 3D-Ansicht, öffnen Sie das Dialogfeld und klicken Sie auf {{ui:Die gewählten hier ausblenden}}. {{ui:Alle einblenden}} holt sie zurück.
5. Klicken Sie auf {{ui:Diese Einstellungen verwenden}}.

Der Grundriss wird sofort neu geschnitten; der Zeichnungssatz und Ihre Blätter folgen ihm. Der Schnitt einer Punktwolke folgt ebenfalls der Schnitthöhe.

## Einen Grundriss zuschneiden, ihm einen Maßstab geben, ein anderes Geschoss darunter zeigen

Alle drei sind im selben Dialogfeld (die Schaltfläche mit dem Schieberegler neben einem Geschoss):

- **Maßstab**: der Maßstab, in dem der Grundriss gedruckt wird ({{ui:Drucken}} in der Leiste des Grundrisses) und mit dem er auf ein Blatt kommt. **Einpassen** wählt den größten Standardmaßstab, der passt.
- **Zuschneidebereich**: klicken Sie auf {{ui:Im Grundriss zeichnen…}}, dann klicken Sie auf eine Ecke und die gegenüberliegende Ecke im Grundriss ({{key:Esc}} beendet). Der Grundriss außerhalb des Bereichs ist auf dem Bildschirm abgeblendet, und Sie können dort weiterhin arbeiten; gedruckt, auf Blättern und im Zeichnungssatz zeigt der Grundriss nur, was innerhalb liegt. {{ui:Löschen}} hebt den Zuschnitt auf. {{ui:Einpassen}} passt auf den Zuschnitt.
- **Unterlage**: wählen Sie ein anderes Geschoss. Seine Wände, geschnittenen Elemente, Türen und Fenster werden hell unter diesem Grundriss gezeichnet, um Dinge auf dem Geschoss darunter oder darüber auszurichten. Sie können sie hier nicht wählen, und sie werden hellgrau gedruckt.

Eine Ansichtsvorlage enthält den Maßstab zusammen mit den Höhen und Kategorien. Zuschneidebereich und Unterlage gehören immer nur zu dem einen Grundriss.

## Der Deckenplan eines Geschosses

Jedes Geschoss hat neben seinem Grundriss einen Deckenplan: den von unten gesehenen Grundriss, zum Anordnen von Decken und dessen, was an ihnen hängt.

1. Klicken Sie auf das Geschoss unter **Deckenpläne** im Browser, oder wählen Sie {{ui:Deckenplan}} neben dem Geschoss auf der Leiste des Grundrisses.
2. Die Wände werden bei 2300 mm (etwa 7'-6") geschnitten. Was über diesem Schnitt und unter der Geschosshöhe liegt, wird gezeichnet: Decken mit ihrem Raster und einer Höhenkennzeichnung (`CLG 2438`), Leuchten, Träger. Türen, Fenster und was unter dem Schnitt liegt, werden ausgelassen.
3. Um eine Decke zu erstellen, verwenden Sie {{ui:Deckenverkleidung}} wie im Grundriss, dann wählen Sie sie aus und wählen unter Eigenschaften ihr **Muster**. Siehe [Räume, Böden, Decken und Dächer](topic:floors-and-roofs).
4. Um eine Leuchte daran zu hängen, platzieren Sie das Element aus der Bibliothek, während der Deckenplan angezeigt wird: Es kommt unter **An der Decke**. Siehe [Ausstattung und Möbel aus der Bibliothek platzieren](topic:place-from-library).
5. Die Schaltfläche mit dem Schieberegler neben einem Deckenplan legt seinen Schnitt und seine Oberkante, Maßstab, Kategorien, Zuschneidebereich und Unterlage fest, wie bei einem Grundriss. Deckenpläne nehmen keine Ansichtsvorlage.

Er wird in derselben Richtung gezeichnet wie der Grundriss (ein reflektierter Grundriss, kein Spiegelbild). Eine Decke, die tiefer liegt als der Schnitt, wird nicht gezeichnet: Senken Sie den Schnitt für den Deckenplan dieses Geschosses. Deckenpläne kommen wie Grundrisse auf Ihre eigenen Blätter; der Zeichnungssatz fügt sie nicht von selbst hinzu.

## Einen Ausschnitt erstellen

Ein Ausschnitt zeigt einen Teil eines Grundrisses größer, in einem eigenen Maßstab, als eigene Ansicht: eine Küche, eine Treppe, eine Wandecke.

1. Zeigen Sie den Grundriss, Deckenplan oder Ausschnitt, zu dem er gehört.
2. Wählen Sie {{ui:Beschriften}} › {{ui:Ausschnitt}} auf der Leiste des Grundrisses (oder {{ui:Neuer Ausschnitt}} im Browser), dann klicken Sie auf eine Ecke des Bereichs und die gegenüberliegende Ecke. {{key:Esc}} beendet.
3. Der Ausschnitt wird in 1:20 erstellt (1/2" = 1'-0" in Fuß und Zoll). Sein Rechteck und eine runde Markierung werden im Grundriss gezeichnet.
4. Klicken Sie mit {{ui:Wählen}} auf die Markierung oder im Browser auf den Ausschnitt, um ihn zu öffnen: Der Grundriss zeigt nur diesen Bereich, im Maßstab des Ausschnitts. Die Leiste zeigt {{ui:Ausschnitt:}} und seinen Namen; {{ui:Hoch}} führt zurück zur Ansicht, auf der er gezeichnet ist.
5. Die Schaltfläche mit dem Schieberegler daneben (im Browser oder auf der Leiste) benennt ihn um, ändert seinen Maßstab, zeichnet sein Rechteck neu oder löscht ihn.

Ein Ausschnitt zeigt, was seine Ansicht zeigt: denselben Schnitt, dieselben Kategorien, die Decken eines Deckenplans. Ein Ausschnitt eines Ausschnitts funktioniert genauso. Setzen Sie einen Ausschnitt wie einen Grundriss auf ein Blatt; seine Markierung zeigt dann, wo er ist (`1 / A-501`: die erste Ansicht auf Blatt A-501). {{ui:Drucken}} in einem Ausschnitt druckt nur diesen Bereich in seinem Maßstab.

Das Löschen eines Ausschnitts löscht auch die Ausschnitte, die darin gezeichnet sind, sowie die darin gezeichneten Linien und Schraffuren (Sie werden zuerst gefragt). Wird das Geschoss gelöscht, auf dem ein Ausschnitt gezeichnet ist, bleibt der Ausschnitt unter **Fehlend**, bis Sie ihn löschen, und die Blätter, auf denen er liegt, melden ihn als fehlend.

## Linien und Schraffuren in einer Ansicht zeichnen

Zeichnen ist 2D-Arbeit, die nur zu einer Ansicht gehört: Notizen in Linien, eine schraffierte Fläche aus Beton oder Erde, ein gefüllter Bereich. Sie ist nie in der 3D-Ansicht und nie in einem anderen Grundriss.

1. Zeigen Sie den Grundriss, Deckenplan oder Ausschnitt, in dem Sie zeichnen wollen.
2. Wählen Sie auf der Leiste des Grundrisses aus {{ui:Beschriften}}:
   - {{ui:Zeile}}: klicken Sie, wo sie beginnt und wo sie endet. Die nächste Linie beginnt, wo die letzte endete; {{key:Enter}} beginnt neu.
   - {{ui:Polylinie}}: klicken Sie auf ihre Punkte; {{key:Enter}} oder ein Doppelklick beendet sie, ein Klick auf ihren ersten Punkt schließt sie.
   - {{ui:Rechteck}}: zwei gegenüberliegende Ecken.
   - {{ui:Schraffurbereich}}: wählen Sie das **Muster** (Vollfläche, Diagonal, Kreuzschraffur, Beton, Dämmung, Erde) und seinen Maßstab auf der Leiste, dann klicken Sie auf die Ecken; {{key:Enter}}, ein Doppelklick oder ein Klick auf die erste Ecke schließt ihn. Mit angekreuztem {{ui:Einen Raum füllen}} schraffiert ein Klick in einem Raum dessen Umriss.
3. Punkte rasten ein wie bei Wänden; {{key:Shift}} hält eine Linie rechtwinklig, und Sie können eine Länge eingeben wie bei Wänden. {{key:Backspace}} nimmt den letzten Punkt zurück.

Wählen Sie eine Linie oder Schraffur mit {{ui:Wählen}} im Grundriss. Eigenschaften ändert Muster und Maßstab einer Schraffur und hat {{ui:Verschieben…}} (klicken Sie auf den Punkt, von dem aus verschoben wird, dann darauf, wohin er soll). {{key:Delete}} löscht sie. Jede Linie, Schraffur und Änderung ist ein Schritt.

Linien und Schraffuren werden mit dem Grundriss gedruckt, kommen mit ihm auf Ihre Blätter und sind im Zeichnungssatz. Deaktivieren Sie **Beschriftungen** in einem Ansichtsbereich, um sie aus dieser Ansicht auszulassen.

## Die Einstellungen in einer Ansichtsvorlage halten

1. Klicken Sie im Browser auf {{ui:Neue Vorlage}}, oder auf {{ui:Als Vorlage speichern…}} im Ansichtsbereich eines Grundrisses (dieser Grundriss verwendet sie dann).
2. Geben Sie ihr einen Namen, legen Sie die Höhen und Kategorien fest und klicken Sie auf {{ui:Die Vorlage speichern}}.
3. Wählen Sie im Ansichtsbereich eines beliebigen Grundrisses die Vorlage. Der Grundriss übernimmt ihre Höhen und Kategorien; ändern Sie die Vorlage, um jeden Grundriss zu ändern, der sie verwendet. Elemente, die Sie einzeln ausgeblendet haben, bleiben in ihrem eigenen Grundriss ausgeblendet.
4. Klicken Sie im Browser auf eine Vorlage, um sie zu ändern, umzubenennen oder zu löschen. Beim Löschen behalten ihre Grundrisse ihre Einstellungen als eigene.

## Ein eigenes Blatt anordnen

1. Klicken Sie auf {{ui:Neues Blatt}}. Geben Sie seine Nummer und seinen Titel ein und wählen Sie das Papier.
2. Klicken Sie neben einem Grundriss, Deckenplan, Ausschnitt, einer Ansicht, einem Schnitt oder einer Liste auf {{ui:Hinzufügen}}. Er landet in der Mitte des Blatts.
3. Ziehen Sie ihn an die richtige Stelle. Wenn er ausgewählt ist, wählen Sie einen **Maßstab**, oder lassen Sie ihn auf dem eigenen Maßstab des Grundrisses (wenn er einen hat), sonst auf dem Maßstab, der ein Drittel des Blatts füllt. {{ui:Vom Blatt entfernen}} nimmt ihn heraus.
4. Klicken Sie auf {{ui:Das Blatt speichern}}. Es wird unter **Blätter** aufgelistet; klicken Sie darauf, um es später zu ändern.
5. {{ui:Als PDF herunterladen}} speichert dieses Blatt als eine Seite.

## Was Sie sehen sollten

- Grundrisse, geschnitten auf Ihren Höhen, mit dem, was über dem Schnitt liegt, gestrichelt, und dem, was Sie ausgelassen haben, weggelassen.
- Ein zugeschnittener Grundriss, auf dem Bildschirm außerhalb seines Bereichs abgeblendet und auf dem Papier auf ihn geschnitten, im Maßstab, den Sie ihm gegeben haben.
- Ein Deckenplan mit den Rastern und Höhenkennzeichnungen der Decken und den Leuchten an der Decke.
- Ausschnitte mit ihrem Rechteck und ihrer Markierung auf dem Grundriss, jeder öffnet sich in seinem eigenen Maßstab.
- Linien und Schraffuren nur in der Ansicht, in der Sie sie gezeichnet haben.
- Ihre Blätter werden bei jedem Öffnen neu aus dem Modell gezeichnet, sodass sie immer dazu passen. Eine Ansicht, deren Geschoss oder Schnittlinie gelöscht wurde, wird gemeldet, nicht gezeichnet.
- Jede Änderung hier ist ein Schritt: {{key:Mod+Z}} nimmt sie zurück.

:::note
Alles davon wird in der IFC-Datei als Eigenschaftssätze gespeichert, die andere Programme unberührt lassen: der Ansichtsbereich und der Deckenplan jedes Geschosses am Geschoss, die Vorlagen, Ausschnitte und Ihre Blätter am Projekt. Linien und Schraffuren sind IFC-Beschriftungen in ihrem Geschoss, daher sehen andere Programme sie als 2D-Kurven und schraffierte Flächen (mit ihrer eigenen Darstellung jedes Musters), aber nicht, zu welcher Ansicht sie gehören.
:::

:::tip
Andere BIM-Programme nennen den Schnitt Ansichtsbereich oder Schnittebene, Vorlagen Ansichtsvorlagen oder Ansichtseinstellungen, Zeichenlinien Detaillinien und Schraffurbereiche gefüllte Bereiche. Die Ideen sind dieselben; die Ansichtseinstellungen übertragen sich nicht auf sie.
:::
