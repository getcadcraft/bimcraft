---
title: Rohre und Luftkanäle
summary: Rohr- und Kanalleitungen im Grundriss nach ihren Mittellinien zeichnen; Bögen, T-Stücke, Reduzierungen und Übergänge entstehen automatisch, die Leitungen gehören zu Systemen mit verbundenen Anschlüssen in der IFC-Datei, und sie erscheinen in Plänen, Listen und der Mengenermittlung.
keywords: Rohr, Rohre, Rohrleitung, Rohrleitungen, Sanitär, Installation, Luftkanal, Luftkanäle, Lüftungstechnik, Gebäudetechnik, TGA, Bogen, T-Stück, Reduzierung, Übergang, Formteil, Formteile, Armatur, Armaturen, Absperrschieber, Kugelhahn, Durchgangsventil, Rückschlagventil, Steigleitung, Gefälle, Abfluss, Abwasser, Entlüftung, Kaltwasser, Warmwasser, Kühlwasser, Heizung, Gas, Brandschutz, Zuluft, Umluft, Abluft, Fortluft, System, Systeme, Anschluss, Anschlüsse, Verbinder, Sanitärobjekt, Waschbecken, Spüle, Toilette, WC, Handwaschbecken, Küchenspüle, Dusche, Waschwanne, Entwässerungseinheiten, UHC, DFU, Abflüsse bemessen, Abflussbemessung, Grundleitung, Zweig, Sammelleitung, Luftvolumenstrom, cfm, Reibung, gleiche Reibung, Bemessung, Liste, Mengenermittlung, NBR, NBR 5648, NBR 5688, NBR 8160, PVC-Wasserrohr, PVC-Abflussrohr, DN
from: 85140bc5
---

## Was Sie tun

Zeichnen Sie die Rohre und Luftkanäle eines Gebäudes wie Wände: Klicken Sie auf die Ecken der Mittellinie einer Leitung in der Höhe, die Sie eingestellt haben. BimCraft erstellt die Formteile, ordnet jedes Teil seinem System zu und verbindet sie, damit andere Programme die Leitung als ein zusammenhängendes System lesen.

## Ein Rohr zeichnen

1. {{ui:Zeichnen}} einschalten, {{ui:Build}} öffnen und {{ui:Rohr}} wählen.
2. Wählen Sie in der Leiste das **System** (Kaltwasser, Warmwasser, Sanitärabfluss, Gas …). Es setzt einen üblichen Werkstoff: Kupfer für Wasser, PVC für Abflüsse und Entlüftungen, Stahl für Heizung, Kühlwasser, Gas und Brandschutz. Ändern Sie **Werkstoff**, **Klasse** und **Größe**, wenn nötig. Größen und Wandstärken stammen aus öffentlichen Normen: Stahlrohr nach ASME B36.10M, Kupferrohr nach ASTM B88, PVC nach ASTM D1785 und PEX nach ASTM F876. Brasilianische Projekte können **PVC-Wasserrohr (NBR 5648)** nutzen, das klebeverbundene PVC für Kaltwasser, und **PVC-Abflussrohr (NBR 5688)**, Reihe normal oder verstärkt, für Abflüsse und Entlüftungen: Ihre Größen werden nach DN benannt (DN 25, DN 100). Sobald Sie eines davon gewählt haben, bleibt die Wahl eines anderen Systems bei den brasilianischen Rohren (PVC-Abflussrohr für einen Sanitärabfluss nach PVC-Wasserrohr).
3. Stellen Sie **Höhe** ein: die Höhe der Mittellinie des Rohrs über der Ebene.
4. Klicken Sie, wo das Rohr beginnt, dann auf jede Ecke. Doppelklicken Sie oder drücken Sie {{key:Enter}} am letzten Punkt. {{key:Backspace}} nimmt die letzte Ecke zurück; {{key:Esc}} verwirft die Leitung.

Das Rohr rastet wie Wände ein, auch an andere Leitungen: Beginnen Sie am Ende eines Rohrs, um daran weiterzuführen, oder enden Sie an der Linie eines Rohrs, um davon abzuzweigen. Eine neue Leitung übernimmt die Höhe des Rohrs, an dem sie einrastet.

Eine Leitung, die am Anschluss eines Geräts beginnt oder endet, übernimmt dessen Größe und System und bleibt daran fixiert: siehe [Ausstattung mit Anschlüssen (Gebäudetechnik)](topic:mep-equipment) und [Rohre und Kanäle an Ausstattung anschließen](topic:mep-connections).

## Den Installationsstandard des Projekts festlegen

Die erste Liste in der Rohrleiste ist der **Installationsstandard** des Modells: **USA (IPC, Zoll)** oder **Brasilien (ABNT, DN)**. Er wird im Modell gespeichert, sodass alle, die die Datei öffnen, Leitungen gleich beginnen. Unter **USA** beginnt eine neue Leitung in Kupfer (Wasser) oder PVC Schedule 40 (Abflüsse), in Zoll, mit dem Gefälle des International Plumbing Code. Unter **Brasilien** beginnt Kaltwasser als PVC-Wasserrohr DN 25, Sanitär- und Regenabflüsse sowie Entlüftungen als PVC-Abwasserrohr DN 100 mit dem Gefälle der NBR 8160, und Warmwasser in Kupfer. Er gilt auch für eine Leitung, die an einem Sanitäranschluss oder einem Geräteanschluss beginnt. Bereits gezeichnete Rohre behalten ihren Werkstoff und ihre eigenen Tabellen; die Werkstoffliste bleibt offen, sodass Sie absichtlich eine brasilianische Leitung in einem US-Modell zeichnen können. Eine Datei ohne Wahl verhält sich wie bisher: Eine neue Leitung folgt dem gerade verwendeten Werkstoff.

## Einen Luftkanal zeichnen

1. Wählen Sie {{ui:Luftkanal}}. Wählen Sie das System (Zuluft, Umluft, Abluft oder Außenluft) und die Form: rund, rechteckig oder flach oval.
2. Geben Sie Breite und Höhe ein (die Breite eines runden Kanals ist sein Durchmesser) und **Höhe** für die Höhe der Mittellinie.
3. Um ihn aus dem Luftvolumenstrom zu bemessen, geben Sie den **Volumenstrom** und die **Reibung** ein und klicken auf {{ui:Dimensionieren}}. Der Kanal wird nach gleicher Reibung bemessen, dem Verfahren im Kanalkapitel des ASHRAE Handbook, und auf eine vorrätige Größe aufgerundet, sodass die Reibung bei oder unter der eingegebenen Rate liegt. Ohne eingegebene Rate gilt 0.08 in. Wassersäule je 100 ft (0.8 Pa/m). Ein rechteckiger Kanal behält die eingegebene Höhe und erhält eine Breite; BimCraft sagt es, wenn seine Seiten mehr als 4 zu 1 betragen.
4. Klicken Sie die Ecken an wie bei einem Rohr.

## Sanitärobjekte

{{ui:Build}} › {{ui:Familie platzieren}} bietet fünf Sanitärobjekte als Ausgangspunkt, jedes mit einem Abfluss und einem Kaltwasseranschluss: ein **Wasserklosett**, ein **Handwaschbecken**, eine **Küchenspüle**, eine **Duschwanne** und eine **Waschwanne**. Ihre Vorderseite zeigt zu Ihnen, während Sie sie platzieren, und ihre Rückseite liegt an der Wand. Ihre Abflüsse haben die kleinste Abflussgröße nach NBR 8160 (DN 100 für das Wasserklosett, DN 50 für die Küchenspüle, DN 40 für die anderen); Wasser ist DN 20. Ändern Sie ihre Größen oder bearbeiten Sie sie wie jede Familie: siehe [Familien und ihre Größen](topic:families).

Eine Familie gibt unter {{ui:Sanitärobjekt}} auf der Registerkarte {{ui:Anschlüsse}} des Familieneditors an, welches Sanitärobjekt sie ist. Ihr Abfluss wird dann in Entwässerungseinheiten gezählt: 6 UHC für ein Wasserklosett, 1 für ein Handwaschbecken, 3 für eine Küchenspüle oder eine Waschwanne, 2 für eine Dusche (NBR 8160), oder die Entwässerungseinheiten der IPC Table 709.1.

## Vom Anschluss eines Sanitärobjekts

Elemente, die aus einer Familie mit Anschlüssen platziert werden (der Abfluss und Hahn eines Beckens, der Stutzen eines Luftauslasses: siehe [Eine Familie bearbeiten](topic:family-editor)), zeigen ihre freien Anschlüsse als Punkte, solange {{ui:Rohr}} oder {{ui:Luftkanal}} eingeschaltet ist, und der Zeiger rastet an ihnen ein.

- **Am Anschluss beginnen**: Die Leitung übernimmt System und Größe (das Rohr des Werkstoffs aus der Leiste bei oder knapp über der Größe des Anschlusses; ein runder Kanal mit seinem Durchmesser). Zeigt der Anschluss nach unten oder oben, wie der Abfluss unter einem Becken, geht die Leitung zuerst gerade nach unten oder oben auf die Höhe unter **Höhe**, dann weiter nach Ihren Klicks.
- **Am Anschluss enden**: Die Leitung führt nach unten oder oben zu ihm und endet dort.

Die Leitung ist in der IFC-Datei mit dem Element verbunden, sodass andere Programme das Sanitärobjekt als Teil seines Systems sehen. Ein Element, das später mit einem Anschluss am Ende einer Leitung platziert wird, ist ebenfalls damit verbunden. Eine Leitung, die von einem Anschluss weggezogen wird, ist nicht mehr mit ihm verbunden.

## Die Formteile, für Sie erstellt

| Wo | Was BimCraft erstellt |
|---|---|
| Eine Leitung biegt ab | Ein Bogen. Stahlrohr im langen Radius nach ASME B16.9 (1.5 × die Größe), anderes Rohr mit einem Außendurchmesser, runder Kanal mit 1.5 Durchmessern, rechteckiger Kanal mit einer Breite (oder einer Höhe bei Abbiegung nach oben oder unten) |
| Eine Leitung endet an der Linie einer anderen | Ein T-Stück; die andere Leitung wird dort geteilt |
| Zwei Leitungen treffen Stirn an Stirn mit verschiedenen Größen zusammen | Eine Reduzierung (Rohre) oder ein Übergang (Kanäle) |
| Zwei Leitungen gleicher Größe treffen Stirn an Stirn in einem Winkel zusammen | Ein Bogen |

Wenn Sie eine Leitung ändern, verschieben oder löschen, wird jedes Formteil auf dieser Ebene neu erstellt. Ist ein Schenkel zu kurz für die Formteile an seinen Enden, sagt BimCraft es und ändert nichts: Verschieben Sie die Ecke weiter weg.

:::note
Die Formteile und Armaturen sind allgemein gehalten: aus der Rohr- oder Kanalgröße gezeichnet, nicht aus dem Katalog eines Herstellers. Steck-, Press- und Rillenformteile, Armaturengehäuse und Ausstattung haben die eigenen Größen der Hersteller; prüfen Sie sie beim Lieferanten, bevor Sie bestellen.
:::

## Steigleitungen

Geben Sie beim Zeichnen eine neue Höhe unter **Höhe** ein und drücken Sie {{key:Enter}}: Die Leitung geht an der letzten Ecke gerade nach oben oder unten, mit einem Bogen an jedem Ende. Eine Steigleitung kann in die Ebene darüber führen. Jede Ebene zeigt die Teile einer Leitung, die ihr Sichtbereich erreicht, mit **UP** oder **DN** an der Steigleitung.

## Abflüsse und ihr Gefälle

Sanitär- und Regenabflüsse beginnen mit dem kleinsten Gefälle, das der International Plumbing Code für ihre Größe erlaubt: 1/4 in. je Fuß bis 2-1/2 in., 1/8 in. je Fuß von 3 bis 6 in., 1/16 in. je Fuß ab 8 in. PVC-Abflussrohr nach brasilianischer Norm beginnt mit dem Gefälle der NBR 8160: 2 % bis DN 75, 1 % ab DN 100. Geben Sie in der Leiste oder in den Eigenschaften ein anderes Gefälle ein: `1/4"/ft`, `2 %` oder `1:50`. Die Leitung fällt ab ihrem ersten Punkt, zeichnen Sie Abflüsse daher in Fließrichtung. Der Grundriss zeigt das Gefälle und einen Pfeil. Die Eigenschaften warnen, wenn ein Abfluss flacher liegt als das Mindestgefälle des Regelwerks.

## Abflüsse nach Entwässerungseinheiten bemessen

Wählen Sie einen Sanitärabfluss: **Entwässerungseinheiten** in den Eigenschaften zeigt, wie viele er führt und die kleinste Größe, die er braucht. Jedes Sanitärobjekt, dessen Abflussanschluss an der Leitung liegt, zählt mit, ebenso jeder Abfluss, der in sie mündet: Zeichnen Sie Abflüsse in Fließrichtung, jeder endet an dem Abfluss, in den er mündet.

- Abflüsse aus PVC-Abflussrohr nach brasilianischer Norm zählen **UHC** und folgen der NBR 8160; die anderen zählen **DFU** und folgen dem International Plumbing Code.
- **Abfluss**: Ein **Zweig** wird nach der Tabelle des Regelwerks für Sanitärzweige bemessen; eine **Grundleitung** nach ihrer Tabelle je Gefälle, daher ist ihr **Gefälle** wichtig.
- Ein Abfluss ist nie kleiner als die Abflüsse der Sanitärobjekte, die er bedient (ein Wasserklosett braucht DN 100 oder 3 in.), und nie kleiner als ein Abfluss, der in ihn mündet. Nach NBR 8160 ist eine Grundleitung mindestens DN 100.

{{ui:Abflüsse bemessen}} macht jeden Sanitärabfluss des Modells, der für seine Entwässerungseinheiten zu klein ist, zu der Größe, die er braucht, als einen Schritt, den Sie rückgängig machen können. Ein Abfluss, der größer gezeichnet ist als nötig, bleibt unverändert. Trägt ein Abfluss mehr, als die größte Größe seines Rohrs bei seinem Gefälle leisten kann, sagt BimCraft es: Geben Sie ihm ein steileres Gefälle oder ein anderes Rohr.

:::note
Die Tabellen gelten für waagerechte Abflüsse. Fallleitungen, Entlüftungen und Regenabflüsse werden hier nicht bemessen: Prüfen Sie sie und den ganzen Entwurf nach dem Regelwerk, das für das Projekt gilt.
:::

## Armaturen

1. Wählen Sie {{ui:Armatur}} und die Art: Absperrschieber, Kugelhahn, Durchgangsventil oder Rückschlagventil.
2. Klicken Sie auf ein Rohr, an der Stelle, wo sie hin soll. Das Rohr wird um sie herum getrennt, und die Armatur ist auf beiden Seiten angeschlossen.

Die Eigenschaften der Leitung listen ihre Armaturen auf, jede mit {{ui:Entfernen}}.

Weitere Armaturenarten, ein Schmutzfänger, Klappen an Kanälen, eigene Rohrspezifikationen und Herstellerfamilien: siehe [Rohrspezifikationen, Armaturen, Klappen und Herstellerfamilien](topic:pipe-specs).

## Eine Leitung ändern

Wählen Sie einen beliebigen Teil einer Leitung, im Grundriss oder in der 3D-Ansicht. In den Eigenschaften:

- **System**, **Werkstoff**, **Klasse** und **Größe** (Rohre) oder **Form**, **Breite**, **Höhe** (Kanäle).
- **Höhe über der Ebene** verschiebt die ganze Leitung nach oben oder unten.
- **Dämmung**: ihre Stärke, behalten für die Abstandsprüfung und die Liste der Durchbrüche (dafür wird nichts gezeichnet): siehe [Rohre und Kanäle gegen das Tragwerk prüfen](topic:mep-against-structure).
- Stahlrohr: **In Rohrstücke schneiden**: siehe [Stahlrohr-Rohrstücke und Rohrstückblätter](topic:pipe-spools).
- **Gefälle** (Rohre).
- **Volumenstrom** mit {{ui:Dimensionieren}}: für Wasser die kleinste Größe, die das Wasser bei 8 ft/s (2.4 m/s) hält, oder 5 ft/s (1.5 m/s) für Warmwasser; bei 3 m/s für das brasilianische PVC-Wasserrohr (NBR 5626). Bei Kanälen die Geschwindigkeit und Reibungsrate des Kanals wie gezeichnet. Sanitärabflüsse werden stattdessen nach ihren Entwässerungseinheiten bemessen: siehe **Abflüsse nach Entwässerungseinheiten bemessen** oben.

Jede Änderung ist ein Schritt von {{ui:Rückgängig}}. {{key:Delete}} löscht die ganze Leitung.

## Grundrisse

- Rohre kleiner als 150 mm (etwa 6 in.) werden als eine Linie auf ihrer Mittellinie gezeichnet, größere Rohre und alle Kanäle als zwei Linien in ihrer Breite.
- Jedes System hat eine eigene Farbe; das PDF des Grundrisses druckt sie schwarz.
- Jede Leitung ist mit ihrer Größe und ihrem System beschriftet (zum Beispiel `2" CW` oder `16×10 SA`).
- Der Sichtbereich eines Grundrisses bestimmt, welche Leitungen er zeigt, und {{ui:In diesem Grundriss angezeigt}} kann **Rohre** oder **Kanäle** weglassen: siehe [Ansichten, Sichtbereiche und eigene Blätter](topic:views-and-sheets).

## Listen und Mengenermittlung

Das Feld {{ui:Listen}} enthält **Rohre** (nach System, Werkstoff und Größe, mit ihren Längen), **Kanäle** (nach System, Form und Größe, mit Längen und äußerer Oberfläche) und **Formteile und Armaturen** (nach Art und Größe, gezählt). Klicken Sie auf eine Zeile, um zu wählen, was sie auflistet; {{ui:CSV herunterladen}} lädt sie herunter.

{{ui:Mengenermittlung}} übergibt die Leitungen an TakeoffCraft: Rohr und Kanal nach Größe als Leitungen, die im Grundriss gezeichnet sind (geneigte Abflüsse werden entlang ihres Gefälles gemessen), Formteile und Armaturen dort gezählt, wo sie sind: siehe [Mengen des Modells an TakeoffCraft senden](topic:takeoff). Steigleitungen bleiben aus diesem Blatt heraus, weil ein Grundriss sie nicht messen kann; die Liste der Rohre enthält ihre Länge.

## In der IFC-Datei

Jede Leitung ist eine Baugruppe, die ihre Teile enthält: Rohr- und Kanalsegmente, Formteile und Armaturen, jedes mit Typ, Werkstoff, einer Farbe für sein System und seinen Anschlüssen. Sich berührende Anschlüsse sind verbunden, und jedes Teil gehört zu seinem Verteilungssystem (IFC2X3-Dateien erhalten dasselbe als Strömungssegmente, Formteile und Regler in einem System). Andere Programme, die IFC-Systeme lesen, sehen je System eine zusammenhängende Leitung. Die eigene Definition der Leitung wird mit ihr gespeichert, sodass BimCraft sie beim Ändern genauso wieder erstellt.
