---
title: Betonbauteile prüfen und Erdbebenlasten erzeugen
summary: Die Bewehrung der Betonträger und Betonstützen des geöffneten Modells einrichten, sie nach ACI 318-19 prüfen, äquivalente Horizontalkräfte nach ASCE 7-22 auf starren Scheiben erzeugen und die Geschossverschiebung sehen. Eine Hilfe für einen Ingenieur zur Prüfung.
keywords: Beton, Stahlbeton, ACI 318, ACI 318-19, Bewehrung, Träger, Stütze, Querkraft, Bügel, Erdbeben, seismisch, ELF, ASCE 7-22, Verschiebung, Geschossverschiebung, Geschosse, starre Scheibe, Geschossgewicht, Auslastung, Tragwerk, Ingenieur, Berechnung
from: 2f342e72
---

Die Blöcke {{ui:Betonbauteile}} und {{ui:Erdbebenlasten}} im Reiter {{ui:Berechnung}} prüfen Stahlbetonträger und Stützen des geöffneten IFC und erzeugen die seitlichen Kräfte eines Erdbebens auf die Geschosse seines Rahmens. Es sind dieselben Blöcke wie in DetailCraft, nach der Berechnung des Reiters {{ui:Berechnung}} ausgeführt und mit den anderen Berechnungseinstellungen im IFC gespeichert.

:::warning
Die Ergebnisse sind **zur Prüfung durch einen Ingenieur**: eine Hilfe, bis ein Ingenieur sie geprüft hat. Betonprüfungen verwenden Kräfte erster Ordnung (eine Stütze in einem Rahmen, den Sie als unverschieblich ansehen, wird für ihr vergrößertes Moment bemessen), ohne Verschiebungsvergrößerung, ohne Torsionsbemessung, ohne seismische Detaillierung (ACI Kapitel 18) und ohne Bügeldetaillierung. Die Erdbebenlasten lassen den Redundanzfaktor, die vertikale Erdbebenwirkung, die Torsionsverstärkung und P-Delta-Effekte aus. **Windlasten sind noch nicht umgesetzt**: Die Windkapitel der Norm stehen nicht in den Referenzseiten des Projekts.
:::

## Was BimCraft liest

Die Berechnung liest die Träger, Stützen und Verstrebungen des Modells mit ihren Profilen (siehe [Das Tragwerk berechnen](topic:frame-analysis)). Der Block {{ui:Betonbauteile}} listet jeden Querschnitt auf, den sie verwenden. Drücken Sie {{ui:Als Beton einrichten…}} bei einem Querschnitt, der Beton ist: BimCraft übernimmt ein Rechteck aus Fläche und Steifigkeit des Profils (die Breite b und Höhe h, die Sie danach ändern können). Ein Querschnitt, der einem Rechteck nicht nahekommt (ein Walzprofil aus Stahl), ergibt eine Größe, die Sie korrigieren müssen, oder bleibt unverändert.

Ein als Beton eingerichteter Querschnitt und jedes Element, dessen Material Beton heißt, wird als Beton berechnet: E = 4700 √f′c, 2400 kg/m³, und standardmäßig mit **gerissenen Querschnitten** (Stützen 0.70 Ig, Träger 0.35 Ig; ACI 318-19 Tabelle 6.6.3.1.1(a)). Wählen Sie {{ui:Ungerissene Querschnitte}}, um das abzuschalten. Ohne diese Einstellungen wird das Modell genau wie zuvor berechnet.

## Bewehrung, Kombinationen, Prüfung

Geben Sie die Betondeckung, die oberen, unteren und seitlichen Stäbe (oder einen Stützenkorb) sowie die Bügel jedes Querschnitts an, setzen Sie f′c, fy, fyt, K und verschieblich oder unverschieblich. Geben Sie den Lastfällen ihre Art, drücken Sie {{ui:Kombinationen bilden}} (ASCE 7 §5.3.1) und dann {{ui:Beton nachweisen}}: Jedes Bauteil erhält eine Auslastung, am Modell farbig dargestellt. Bauteile über der Tragfähigkeit und eine Geschossverschiebung über ihrem Grenzwert werden mit ihrer Klausel in {{ui:Probleme}} aufgelistet; klicken Sie auf eines, um das Element auszuwählen.

## Geschosse und Erdbebenlasten

Im Block {{ui:Erdbebenlasten}} nimmt {{ui:Geschosse suchen}} die Ebenen, an denen zwei oder mehr Träger zusammentreffen; jede wird eine starre Scheibe. {{ui:Gewichte aus Fällen übernehmen}} liest das seismische Gewicht jedes Geschosses aus den Fällen, denen Sie einen Faktor geben. Füllen Sie SDS, SD1, S1, R, Ie, Cd, TL, das System und die Risikokategorie aus, dann {{ui:Erdbebenfälle bilden}} (ASCE 7-22 12.8: Periode, Basisschub, Verteilung über die Geschosse, 5 % zufällige Torsion). Die Geschosskräfte und die Verschiebungsprüfung (12.12) erscheinen nach einem Lauf. Dieselbe Periode und Geschosssteifigkeit speisen das Erdbeben in [Hochwasser, Wind oder Erdbeben abspielen](topic:hazard-playback), wenn Sie das Tragwerk der Berechnung als Quelle wählen.

Platten und Wände aus Beton werden in der Berechnung zu Platten, und der Block {{ui:Deckenbewehrung}} ermittelt den Stahl, den sie je Meter brauchen. Die Details jeder Prüfung stehen im gleichnamigen Thema von DetailCraft.
