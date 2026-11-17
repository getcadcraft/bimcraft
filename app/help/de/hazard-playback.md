---
title: Hochwasser, Wind oder Erdbeben am Gebäude abspielen
summary: Eindringendes Wasser in den Räumen, Winddruck auf jedem Geschoss oder ein Erdbeben, das die Geschosse erschüttert, abgespielt in einem Plan oder einer Ansicht mit einem Zeitschieber. Einfache Modelle mit aufgelisteten Annahmen; keine Normprüfung und kein Tragwerksentwurf.
keywords: Gefahr, Hochwasser, Wind, Erdbeben, seismisch, Geschossverschiebung, Seitenauslenkung, Basisschub, Wasserstand, Klima, Szenario, Meeresspiegel, Wiedergabe, Geschoss, Periode
from: ff0d34d1
---

Der Bereich {{ui:Gefahrenwiedergabe}} im linken Bedienfeld spielt eine Gefahr am geöffneten IFC-Modell ab. Am Modell wird nichts verändert.

:::warning
Das sind **einfache Modelle, um zu sehen, was eine Gefahr mit diesem Grundriss macht**, keine Hochwasserstudie, keine Prüfung nach einer Windnorm und kein Tragwerksentwurf. Jedes Ergebnis nennt seine Annahmen.
:::

## Hochwasser

Legen Sie den höchsten Wasserstand über dem tiefsten Geschoss fest sowie die Minuten für Anstieg, Halten und Absinken. Wasser dringt in einen Raum durch eine Öffnung ein, deren Schwelle es überschritten hat; Räume, die über Öffnungen unterhalb des Wasserstands mit nassen Räumen verbunden sind, stehen auf demselben Niveau (quasistatisch). Die Tabelle zeigt, wann jeder Raum erstmals nass wird und wie tief das Wasser dort steht; der Plan spielt es ab. Geben Sie die größte Wassermenge ein, die ein Raum aufnehmen darf; Räume darüber werden als Warnungen angezeigt. **Klimazukunft:** Laden Sie Ihre eigene Szenariodatei (JSON oder CSV mit einem Jahr, einem Meeresspiegelanstieg und einem Hochwasserfaktor) und wählen Sie ein Jahr. Oder schalten Sie das Add-on Klimazukunft ein und wählen Sie ein Szenario und ein Jahr: Das Hochwasser läuft zweimal, Gegenwart neben Zukunft (siehe den Abschnitt „Klimazukunft: Hochwasser, Hitze und Waldbrand 2050 und 2080“). Die Arten Waldbrandexposition und Hitze: künftige Wetterdatei stehen in derselben Liste.

## Wind

Der Druck folgt ½ρV², wobei die Geschwindigkeit mit der Höhe zunimmt; die Kraft auf ein Geschoss ist dieser Druck mal einem Böenfaktor, den beiden Druckbeiwerten, der Breite und der Geschosshöhe. Sie erhalten Schub, Kippmoment und die Seitenauslenkung.

## Erdbeben

Ein Schubgebäude: eine Masse je Geschoss (Grundfläche × Kilogramm pro Quadratmeter, die Sie festlegen), dieselbe Steifigkeit in jedem Geschoss, angepasst an die erste Periode, die Sie angeben (eine Zehntelsekunde je Geschoss, wenn Sie das Feld leer lassen; das wird dann angezeigt), Dämpfung und eine erzeugte Bodenbewegung (ein Impuls oder gefiltertes Rauschen) bei der Spitzenbeschleunigung, die Sie wählen. Das Ergebnis ist die Geschossverschiebung jedes Geschosses, die Geschossbeschleunigungen und der Basisschub; die Ansicht spielt die Seitenauslenkung ab, vergrößert dargestellt. Geben Sie ein zulässiges Verschiebungsverhältnis ein, werden Geschosse darüber als Warnungen angezeigt. Das Verfahren ist elastisch: Nichts fließt und nichts reißt.

## Steifigkeit der Geschosse aus dem Analyserahmen

Für ein Erdbeben oder für Windschwingung wählen Sie **Der Analyserahmen** als Quelle der Steifigkeit, statt eine Periode einzugeben. Jedes Geschoss wird der Reihe nach seitlich belastet, der Rahmen (Balken, Stützen, Verbände, Decken) wird berechnet, und die Steifigkeit der Geschosse mit allem, was zusammenwirkt, bestimmt die Berechnung. Das Gewicht ergibt sich aus dem Eigengewicht der Bauteile plus der Flächenlast pro Quadratmeter, die Sie im Planfeld jedes Geschosses festlegen. Die tatsächliche erste Periode wird angezeigt. Das Verfahren ist elastisch: Nichts fließt, und Torsion wird nicht modelliert. Beim Wind bleiben die Geschosskräfte die oben genannten Annahmen (ein Potenzgesetz-Profil, Ihr Böenfaktor und die festen Druckbeiwerte, keine Windnorm); nur die Seitenauslenkung kommt aus dem Rahmen, indem die volle Steifigkeitsmatrix des Rahmens mit diesen Kräften gelöst wird. Das Modell braucht eine IFC-Datei mit einem Rahmen, den die Registerkarte Analyse lesen kann.

## Einheiten

Wassertiefen, Seitenauslenkung und Verschiebung je Geschoss, Abstände und Flächen werden in der {{ui:Einheiten}} angezeigt, die Sie gewählt haben. Kräfte (kN), Zeiten und Beschleunigungen behalten ihre eigenen Einheiten, und ein Wert, den Sie in einem Feld mit der Angabe in Metern eingeben, bleibt in Metern. Dasselbe gilt für die Ergebnisse zu Evakuierung, Tageslicht, Heizen und Kühlen sowie Einrichtung: Längen, Flächen und Volumen folgen Ihrer Wahl; Druck, Durchfluss, Temperatur, Energie und Leistung werden nie umgerechnet.
