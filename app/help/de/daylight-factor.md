---
title: "Tageslicht in jedem Raum abschätzen"
summary: "Der mittlere Tageslichtquotient jedes Raums aus seinen Fenstern, seinen Innenflächen und dem Himmelsausschnitt, den jedes Fenster sieht, mit dem im Modell gemessenen Himmelswinkel. Eine Abschätzung für den frühen Entwurf, keine Simulation und keine Normprüfung."
keywords: Tageslicht, Tageslichtquotient, mittlerer Tageslichtquotient, ADF, vertikale Himmelskomponente, VSC, solare Gewinne, Sonne, g-Wert, Raster, Split-Flux, Himmelskomponente, intern reflektierte Komponente, natürliches Licht, Fenster, Verglasung, Himmelswinkel, Verschattung, Überschattung, Balkon, Vordach, Reflexionsgrad, Transmissionsgrad, frühe Planung, Analyse, Räume, Flächen
from: 5f300a78
---

Die Registerkarte {{ui:Tageslicht}} im rechten Bereich ermittelt den **mittleren Tageslichtquotienten** jedes Raums: wie viel des Lichts eines bedeckten Himmels draußen im Mittel den Raum erreicht, in Prozent. Sie liest die Räume (Flächen) und Fenster des geöffneten IFC-Modells. Am Modell wird nichts geändert, und nichts wird hochgeladen.

:::warning
Alles auf dieser Registerkarte ist **eine Entwurfshilfe, keine Nachweisrechnung**: Abschätzungen des frühen Entwurfs nach veröffentlichten Verfahren, **keine Simulation** und **keine Prüfung gegen eine Bauordnung oder eine Norm**. BS EN 17037, LEED, BREEAM und Energievorschriften verlangen eine Tageslichtsimulation mit dem Klima des Standorts; verwenden Sie dafür ein Tageslichtsimulationsprogramm.
:::

## Berechnung

1. Öffnen Sie ein IFC-Modell mit Räumen (Flächen) und Fenstern. Hier gezeichnete Modelle haben in jedem geschlossenen Wandring einen Raum.
2. Öffnen Sie die Registerkarte {{ui:Tageslicht}} und klicken Sie auf {{ui:Berechnen}}.
3. Jeder Raum zeigt seinen Tageslichtquotienten und eine Stufe: unter 2 %, 2–5 %, 5 % oder mehr. Klicken Sie einen Raum an, um seine Flächen sowie die Fläche und den Himmelswinkel jedes Fensters zu sehen. Der Raum und seine Fenster werden im Modell gewählt.

Ändern Sie eine Eingabe, folgen die Werte sofort. Nach einer Änderung am Modell klicken Sie auf {{ui:Erneut berechnen}}. {{ui:CSV}} speichert jeden Raum mit seinen Werten und den verwendeten Eingaben.

## Die Formel

Mittlerer Tageslichtquotient (%) = T × Ag × θ × M ÷ (A × (1 − R²)), summiert über die Fenster des Raums (Littlefair-Formel, verwendet von BRE 209, BS 8206-2 und CIBSE LG10):

- **T**, der Lichttransmissionsgrad des Glases (zum Start 0.7: verwenden Sie den Wert des Herstellers).
- **Ag**, die verglaste Fläche: die Fläche jedes Fensters (seine Gesamtbreite × Höhe, sonst seine Größe im Modell) × der **verglaste Anteil** (zum Start 0.75: der Rest ist Rahmen).
- **θ**, der Himmelswinkel, den das Fenster sieht, in Grad (siehe unten).
- **M**, der Wartungsfaktor für Verschmutzung des Glases (zum Start 1).
- **A**, jede Innenfläche des Raums: Boden, Wände, Decke und Fenster, aus der eigenen Form des Raums.
- **R**, ihr mittlerer Reflexionsgrad, nach Fläche gewichtet: Boden 0.2, Wände 0.5, Decke 0.7 zum Start; Glas zählt als 0.1.

## Wie der Himmelswinkel gemessen wird

Für jedes Fenster schneidet BimCraft das Modell mit einer senkrechten Ebene, rechtwinklig zum Fenster, von der Außenseite des Glases aus, und blickt vom Horizont gerade nach oben. Alles, was der Schnitt vor dem Fenster trifft (ein gegenüberliegendes Gebäude, ein Balkon oder ein Vordach darüber, die Traufe), verdeckt einen Teil dieser 90°. θ ist, was übrig bleibt. Das Fenster selbst und die Wand, in der es sitzt, bleiben außen vor. Dies geschieht an fünf Stellen über die Breite des Fensters, und der Mittelwert wird gebildet. So nimmt ein dünner Pfosten vor der Mitte nur seinen Anteil, nicht den ganzen Himmel.

Ein Gebäude 8.5 m über der Fenstermitte und 9.9 m entfernt verdeckt 40.65° (der Winkel, dessen Tangens 8.5 ÷ 9.9 ist), sodass θ = 49.35° verbleibt.

## Vertikale Himmelskomponente jedes Fensters

{{ui:Berechnen}} misst außerdem für jedes Fenster, was es vom gesamten Himmel sieht: denselben senkrechten Schnitt, gedreht in jede Richtung vor der Fensterfront (alle 2°, von einer Seite zur anderen). So nimmt ein Gebäude seitlich, eine Lamelle oder eine tiefe Laibung ihren Anteil. Daraus ermittelt BimCraft die **vertikale Himmelskomponente (VSC)**: wie viel des Lichts des bedeckten Himmels das Glas erreicht, als Anteil dessen, was ein offenes, flaches Dach erhalten würde. Ein Fenster ohne Hindernis davor erhält **39.6 %**, das Höchstmaß für ein senkrechtes Fenster. Ein langes Gebäude, das 25° über dem Fenster aufragt, lässt etwa **27 %** übrig, der Wert, den die britische Richtlinie (BRE 209) als Faustregel verwendet. Jedes Fenster im Detail eines Raums zeigt seine VSC und seinen **Verdeckungswinkel** (wie hoch Objekte gerade vor ihm aufragen).

Der Himmel ist der Standard-Normalhimmel der CIE, der senkrecht nach oben dreimal heller ist als am Horizont. Der Schnitt ist exakt: Es wird nichts abgetastet.

## Die Sonne durch die Fenster an einem Datum

Öffnen Sie {{ui:Sonne durch die Fenster an einem Datum}} und wählen Sie ein Datum. BimCraft verfolgt die Sonne an diesem Tag in Viertelstunden und summiert für jedes Fenster die Wärme, die die Sonne durch das Glas bringt:

- die **direkte Sonne**, wenn sie vor dem Fenster steht und nichts im Modell sie verdeckt (derselbe exakte Schnitt, zur Sonne gedreht: Ein Balkon, der die hohe Sommersonne am Mittag beschattet, lässt die tief stehende Wintersonne herein);
- das **Himmelslicht** auf dem Glas, abzüglich dessen, was das Fenster nicht sehen kann;
- das Licht vom **Boden** (sein Reflexionsgrad: zum Start 0.2);
- alles, multipliziert mit dem **g-Wert** des Glases (der Anteil der Sonnenenergie, den es durchlässt: zum Start 0.6; verwenden Sie den Wert des Herstellers) und seinem verglasten Anteil.

Jeder Raum zeigt die Tagessumme in kWh und seine Spitze in Watt mit der Uhrzeit. Das Detail eines Raums zeichnet den Tag als Diagramm. Der Himmel ist nach dem Modell von Hottel klar (Duffie & Beckman, *Solar Engineering of Thermal Processes*), mit den Sommer- oder Winterwerten für den Ort und die Jahreszeit sowie der Höhe des Grundstücks. Die Sonnenposition stammt von NOAA. Breiten- und Längengrad des Grundstücks stammen aus dem Grundstück der IFC, und Norden aus dem wahren Norden des Modells. Hat das Modell kein Grundstück, geben Sie Breiten- und Längengrad ein. Die Zeitangaben sind Normalzeit (ohne Sommerzeit) in der Zeitzone, die Sie eingeben, sonst in der, die der Längengrad nahelegt.

Nicht berücksichtigt werden: Wolken (es ist ein klarer Tag), das Glas, das bei flachem Einfall weniger durchlässt, Rahmen, die das Glas beschatten, Jalousien, und was Wände und Dach aufnehmen. Die Kühlabschätzung auf derselben Registerkarte verwendet die Spitze.

## Der Tageslichtquotient auf einem Raster

Öffnen Sie {{ui:Tageslichtquotient auf einem Raster}} und {{ui:Raster berechnen}}. BimCraft legt ein Raster über den Boden jedes Raums, in der Höhe der Arbeitsebene (zum Start 0.85 m), einen halben Meter von den Wänden entfernt. Den Tageslichtquotienten an jedem Punkt ermittelt es nach dem **BRE-Split-Flux-Verfahren**:

- die **Himmelskomponente**: der bedeckte Himmel, vom Punkt aus durch die Öffnung jedes Fensters gesehen, abzüglich der Rahmen;
- die **außen reflektierte Komponente**: was der Punkt durch das Fenster von Gebäuden draußen sieht, die mit einem Zehntel der Helligkeit des Himmels hinter ihnen leuchten (ändern Sie die Helligkeit der Verdeckung, wenn sie deutlich heller oder dunkler sind);
- die **innen reflektierte Komponente**: das Licht, das im Raum hin- und herprallt, von den Flächen und Reflexionsgraden des Raums, der Fensterfläche und dem Anteil davon außerhalb (die BRE-Formel, mit dem Transmissionsgrad des Glases anstelle des klaren Glases, das sie annahm).

Jeder Raum zeigt seinen Mittelwert, seinen niedrigsten Punkt und wie viel davon 2 % oder mehr erhält. Das Detail eines Raums zeichnet seinen Grundriss, jeden Punkt in der Farbe seines Tageslichtquotienten und die Fenster in Rot. Damit es auf jedem Computer schnell bleibt, erhält ein Raum höchstens **400 Punkte**: In einem großen Raum wächst der Abstand, bis es passt. Geben Sie einen Abstand ein, um Ihren eigenen zu wählen.

## Nicht berücksichtigt

- Dachfenster (liegendes oder geneigtes Glas) werden aufgelistet, aber nicht gezählt: Die Formeln hier gelten für Fenster in Wänden.
- Fenster ohne Raum dahinter (zum Beispiel eine Halle ohne Raum) werden getrennt aufgelistet.
- Fensterlaibungen (die Öffnung wird an der Außenseite gemessen), Blendung, Sonnenstunden und klimabasiertes Tageslicht. Für BS EN 17037, LEED oder BREEAM verwenden Sie ein Tageslichtsimulationsprogramm.
- Die Stufen stammen aus älteren britischen Richtlinien (BS 8206-2). Sie werden als Orientierung angezeigt, niemals als Bestanden oder Nicht bestanden.
