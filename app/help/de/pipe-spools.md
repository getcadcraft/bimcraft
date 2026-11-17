---
title: Stahlrohr-Rohrstücke und Rohrstückblätter
summary: Eine Stahl-Stumpfschweißleitung in Rohrstücke schneiden, höchstens so lang wie gewählt, an den Montageschweißnähten, die Sie setzen; sie nummerieren und je Rohrstück ein Rohrstückblatt (3D-Ansicht, Zuschnittlängen, Formteile, Schweißnähte, Stückliste) als PDF und CSV herunterladen. Luftkanäle erhalten eine Zuschnittliste gerader Stücke.
keywords: Rohrstück, Rohrstücke, Rohrstückblatt, Isometrie, Fertigung, Vorfertigung, Montageschweißnaht, Werkstattschweißnaht, Stumpfschweißnaht, Zuschnittlänge, Zuschnittliste, Stückliste, Stahlrohr, Schedule 40, Leitungsnummer, Kanal-Zuschnittliste, Kanalstücke
from: 539f51de
---

## Was Sie tun

Eine Stahlrohrleitung in die Teile zerlegen, die die Werkstatt verschweißt und der Monteur einbaut: Rohrstücke, nicht länger als eine gewählte Länge, geteilt an den Montageschweißnähten, die Sie setzen, jedes mit eigenem Blatt.

Nur **Stahl-Stumpfschweißrohr** wird in Rohrstücke geschnitten (Rohrgrößen nach ASME B36.10M, Bögen im langen Radius nach ASME B16.9). Kupfer-, PVC- und PEX-Verbindungen sind keine Stumpfschweißungen, deshalb haben ihre Leitungen keine Rohrstücke.

## Eine Leitung in Rohrstücke schneiden

1. Wählen Sie eine Stahlrohrleitung. Im Bereich {{ui:Eigenschaften}} setzen Sie den Haken bei **In Rohrstücke schneiden**.
2. **Längstes Rohrstück**: die größte Mittellinienlänge, die ein Rohrstück haben darf (anfangs 6 m, etwa 20 ft).
3. **Leitungsnummer**: Teil jeder Rohrstücknummer. Eine neue Leitung in Rohrstücken erhält die nächste freie Nummer ihres Systems.

Die Rohrstücke werden entlang der Leitung ab ihrem ersten Punkt nummeriert: `CHW-12-S01`, `CHW-12-S02` … (System, Leitungsnummer, Rohrstück). Ein Rohrstück wächst Teil für Teil; das Teil, das es zu lang machen würde, beginnt das nächste, und eine gerade Länge, die länger als ein Rohrstück ist, wird dort geschnitten, wo das Rohrstück voll ist.

## Montageschweißnähte setzen

1. {{ui:Build}} öffnen und {{ui:Montageschweißnaht}} wählen.
2. Klicken Sie auf ein Rohr im Rohrstück, dort wo die Montageschweißnaht hin soll. Innerhalb einer geraden Länge wird das Rohr an dieser Stelle geschnitten; innerhalb eines Formteils oder einer Armatur wandert die Schweißnaht zur näheren Verbindung.

Die Eigenschaften listen die Montageschweißnähte der Leitung, jede mit {{ui:Entfernen}}. Jede Änderung ist ein Schritt von {{ui:Rückgängig}}.

## Rohrstückblätter

In den Eigenschaften einer Leitung in Rohrstücken:

- {{ui:Rohrstückblätter (PDF)}}: eine Seite je Rohrstück. Links das Rohrstück in isometrischer Ansicht (30°), seine geraden Längen nummeriert, Werkstattschweißnähte als Punkte, Montageschweißnähte mit FW markiert, und die Nordrichtung des Plans. Rechts die Nummer des Rohrstücks, Größe, Schedule und Länge, dann seine **Zuschnittlängen**, **Formteile**, **Schweißnähte** (eine Werkstatt-Stumpfschweißnaht an jeder Verbindung innerhalb des Rohrstücks, eine Montageschweißnaht dort, wo es an das nächste Rohrstück stößt) und seine **Stückliste** mit dem Gewicht des Rohrs (ASME B36.10M, Gewicht glatte Enden).
- {{ui:Rohrstückliste (CSV)}}: dasselbe, ein Block je Rohrstück.

:::note
Die Zuschnittlängen gelten von Ende zu Ende, wie gezeichnet: Es wird weder ein Wurzelspalt noch eine Schweißzugabe abgezogen. Bögen liegen im langen Radius nach B16.9; T-Stücke, Reduzierungen und Armaturen sind allgemein gehalten, aus der Rohrgröße bemessen, nicht nach B16.9 oder einem Hersteller, und das Blatt sagt das. Gewichte von Formteilen sind nicht angegeben. Eine Hilfe für Planung und Koordination, von einem Ingenieur bemessen.
:::

## In der IFC-Datei

Jedes Teil einer Leitung in Rohrstücken trägt **CadCraft_Spool** mit seiner SpoolId, der Leitung, der Nummer des Rohrstücks in der Leitung und dem Ort, wo es entlang der Leitung beginnt und endet. Die Leitung behält ihre Regeln (längstes Rohrstück, Montageschweißnähte, Leitungsnummer) in ihrem eigenen Satz, sodass die Rohrstücke beim erneuten Öffnen der Datei gleich zurückkommen.

## Luftkanäle: eine Zuschnittliste

Öffnen Sie {{ui:Build}} und klicken Sie auf {{ui:Kanal-Zuschnittliste}}: eine CSV der geraden Kanalstücke nach System, Form und Größe. Jede gerade Länge wird in Stücke der **Stücklänge** aus der Leiste des Luftkanals zerlegt (anfangs 1500 mm, etwa 5 ft), dazu der Rest. Es sind nur Längen: keine Nähte, Blechstärken oder Verbinder.
