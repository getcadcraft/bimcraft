---
title: Klassifikationscodes (Uniclass, OmniClass, UniFormat)
summary: Geben Sie jedem Element und jedem Typ einen Klassifikationscode, wählen Sie, welche Systeme ein Projekt nutzt, durchsuchen Sie die mit der App gelieferten Uniclass-Tabellen, laden Sie die eigenen lizenzierten Tabellen Ihres Büros und zeigen Sie die Codes in Bauteillisten. Die Codes werden für andere Software in die IFC-Datei geschrieben.
keywords: Klassifikation, klassifizieren, Code, Uniclass, OmniClass, UniFormat, NBS, CSI, EF, Ss, Pr, Tabelle, Elementcode, Typcode, Standardcode, IfcClassification, IfcClassificationReference, COBie, Listenspalte, CSV, Lizenz
from: 222b94cd
---

## Was Sie tun

Geben Sie Wänden, Böden, Dächern, Türen, Fenstern und allem anderen im Modell einen Klassifikationscode, in bis zu drei Systemen nebeneinander: Uniclass, OmniClass und UniFormat. Andere Fachbereiche und andere Software verlassen sich auf den Code, nicht auf den Namen. Daher werden die Codes in der IFC-Datei als Klassifikationsverweise gespeichert, die jedes BIM-Programm liest.

## Einem Element einen Code geben

1. Wählen Sie ein Element (oder mehrere) und öffnen Sie **Eigenschaften**. Öffnen Sie den Abschnitt {{ui:Klassifikation}}.
2. Tippen Sie den Code in das Feld seines Systems und drücken Sie Enter. Ist eine Codeliste geladen, tippen Sie einen Teil eines Codes oder einige Wörter („Vorhangfassade“) und wählen Sie aus den Treffern. Der Titel des Codes wird dann für Sie eingetragen.
3. {{ui:Gilt für}} legt fest, wohin der Code gehört: **Dieses Element** oder **Sein Typ (jedes Element des Typs)**. Ein Code auf einem Wandtyp gilt für jede Wand dieses Typs, auch für die, die Sie später zeichnen.
4. {{ui:Löschen}} entfernt einen Code.

Unter jedem Code zeigt der Abschnitt, woher er stammt: an diesem Element gesetzt, vom Typ oder als Projektstandard für seine Klasse. Der eigene Code eines Elements gewinnt immer gegen den seines Typs, und der des Typs gegen einen Standard. Sind mehrere Elemente gewählt, bedeutet ein Feld mit „uneinheitlich“, dass sie keinen gemeinsamen Code haben; tippen Sie einen ein, erhalten alle ihn. Jede Änderung ist ein Rückgängig-Schritt.

Ein Code kann immer eingetippt werden, ob eine Liste geladen ist oder nicht. Passt er nicht zu einem Code dieses Systems oder steht er nicht in der geladenen Liste, zeigt ein Hinweis das an, und der Code bleibt so, wie Sie ihn eingegeben haben.

## Die Systeme des Projekts wählen

Öffnen Sie **Daten** in der Modellleiste und wählen Sie {{ui:Klassifikation}} (oder {{ui:Projektklassifizierung…}} im Abschnitt Eigenschaften).

- Aktivieren Sie die Systeme, die dieses Projekt nutzt. Eigenschaften zeigt dann nur diese.
- **Uniclass**: Die Tabellen Elemente/Funktionen (EF), Systeme (Ss) und Produkte (Pr) werden mit der App geliefert. Sie sind © NBS, unter Creative Commons Attribution-NoDerivatives 4.0 lizenziert und werden unverändert weitergegeben. Der Dialog zeigt die Ausgabe jeder Tabelle und den Tag, an dem sie gelesen wurde. Es sind nicht die neuesten Tabellen: Der Herausgeber veröffentlicht neue jedes Quartal auf seiner eigenen Seite.
- **OmniClass** und **UniFormat**: Mit der App wird keine Codeliste geliefert, weil der Herausgeber die Tabellen ohne Lizenz nicht weitergeben lässt. Tippen Sie einen beliebigen Code ein oder laden Sie die eigene lizenzierte Tabelle Ihres Büros.
- {{ui:Tabelle laden (CSV)…}} liest die eigene Tabelle Ihres Büros aus einer CSV-Datei mit einer Codespalte und einer Titelspalte. Eine Kopfzeile mit Code, Number oder Identifier sowie Title, Name oder Description wird automatisch erkannt; ohne sie werden die ersten beiden Spalten verwendet. Die Tabelle bleibt in diesem Browser und wird nie in die Projektdatei übernommen. In der Datei werden nur die Codes gespeichert, die Sie vergeben. Eine neuere Uniclass-Tabelle können Sie auf dieselbe Weise laden.
- {{ui:Bauteilen über ihre Klasse einen Standardcode geben}} gibt jeder Wand, jedem Boden, jedem Dach, jeder Tür, jedem Fenster, jeder Treppe, jeder Rampe, jeder Stütze, jedem Träger und jedem Möbelstück einen Start-Uniclass-Code aus der Tabelle Elemente/Funktionen, wenn es keinen eigenen hat. Danach gezeichnete Elemente erhalten ihn ebenfalls.
- {{ui:Die Codes als Spalten in den Bauteillisten anzeigen}} fügt je System eine Spalte zu den Listen Türen, Fenster, Wände nach Typ und Räume sowie zu deren CSV hinzu. Eine Zeile mit mehreren Elementen zeigt „uneinheitlich“, wenn sich ihre Codes unterscheiden.

## Gut zu wissen

- Die Standardcodes sind die eigene Vorgabe von CadCraft, nicht die des Herausgebers, und sie sind von keinem Praktiker geprüft. Prüfen Sie sie gegen den Standard Ihres Projekts.
- In der Datei ist ein Standard eine echte Klassifikation, mit dem Beziehungsnamen „CadCraft default“ markiert. Sie entfällt, sobald das Element oder sein Typ einen eigenen Code erhält.
- Codes, die eine importierte Datei bereits hat, werden gelesen und angezeigt, mit welcher Schreibweise des Systemnamens das andere Programm sie auch geschrieben hat. Codes anderer Systeme (eines Büros) werden aufgelistet und unverändert gelassen.
- Die Codes werden beim erneuten Öffnen der Datei gelesen, hier oder in einem anderen Programm. Sie werden auch in den IFC5-Alpha-(IFCX-)Export übernommen, wenn diese Laboroption aktiv ist, außer einem Code auf einem Dach.
- Noch nicht umgesetzt: ein Baum zum Durchsuchen einer Tabelle Ebene für Ebene, Codes auf Geschossen und Räumen als Projektstandards und die Prüfung eines Codes gegen die in der Datei genannte Ausgabe.
