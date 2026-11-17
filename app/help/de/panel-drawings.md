---
title: Elementzeichnungen in Holz oder Leichtbaustahl
summary: Rahmen Sie die Wände, Böden und Dächer des Modells als Elemente in Holz oder Leichtbaustahl, sehen Sie jeden Ständer, jede Schwelle, jeden Sturz, jeden Deckenbalken und jeden Sparren maßstabsgerecht, und speichern Sie die Zuschnittsliste als CSV und die Werkstattzeichnungen als PDF.
keywords: Element, Rahmen, Werkstattzeichnung, Zuschnittsliste, Leichtbaustahl, Stahlständer, LGS, Holz, Deckenbalken, Sparren, Sturz, Lagerware, PDF
from: c09f916e
---

## Die Elemente öffnen

Wählen Sie {{ui:Elementzeichnungen}} im Menü {{ui:Build}} (oder geben Sie {{cmd:PANELS}} ein). Die Liste enthält jede gezeichnete Wand, jeden Boden und jedes Dach des Modells, jeweils mit einem Häkchen. Wände werden mit ihren Türen und Fenstern als Öffnungen übernommen. Ein Boden wird als Rechteck um seinen Umriss gerahmt, wobei die Deckenbalken die kurze Richtung überspannen. Ein Dach wird als Giebel über dem Umriss seiner Wände gerahmt, mit der Dachneigung des Dachs. Die Liste sagt dies dazu, denn ein Walmdach oder ein komplexes Dach ist kein Satteldach.

## Material, Größe und Abstand

Wählen Sie {{ui:Material}}: **Holz** oder **Leichtbaustahl**. Stahlteile sind C-Ständer, benannt nach Tiefe und Dicke (zum Beispiel C92-1.2), mit einer Laufschiene für die Schwellen. {{ui:Profilgröße}} wählt eine Größe für alle angehakten Elemente, oder lassen Sie sie auf Standard, um die Vorgaben jeder Elementart zu verwenden. {{ui:Abstand}} ist der Abstand zwischen Ständern, Deckenbalken oder Sparren. Dies sind Ausgangswerte, die Sie festlegen. Sie sind keine Normprüfung: Ob ein Ständer in diesem Abstand diese Wand trägt und ob ein Sturz diese Spannweite trägt, entnehmen Sie den Tabellen der Vorschriften (das Add-on Bauvorschriften enthält die des IRC) und Ihrem Tragwerksplaner.

## Was Sie erhalten

Das erste angehakte Element wird im Dialog maßstabsgerecht mit den Maßen gezeichnet. {{ui:Zuschnittsliste (CSV)}} speichert alle Teile jedes Elements nach Kennzeichen, Größe und Länge sowie die Lagerlängen, die Sie dafür kaufen müssen. {{ui:Werkstattzeichnungen (PDF)}} speichert eine A3-Seite für jedes Element, mit jedem Teil gekennzeichnet und seiner Zuschnittsliste. {{ui:Zeichnung (SVG)}} speichert das erste Element als Zeichnung. Alles, was der Rahmencode nicht rahmen kann (eine Öffnung zu nah am Wandende, ein Sturz, der nicht unter die Schwellen passt, ein Teil, das länger als die längste Lagerware ist), wird sowohl im Dialog als auch unter **Probleme** aufgelistet.

## Was es nicht tut

Die Elemente sind Zeichnungen, die bei jeder Anfrage aus dem Modell erstellt werden. Es wird nichts in das Modell geschrieben, sie passen also immer zu ihm. Um den Rahmen als Bauteile in das Modell zu übernehmen, verwenden Sie {{ui:Holzrahmen}} für Holzwände, -böden und -dächer.
