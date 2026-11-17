---
title: "Modell prüfen: Räume, Kennzeichnungen, LOD, Kollisionen und Schnittstellen"
summary: Führen Sie fertige Prüfungen aus für unbenannte Räume, fehlende Kennzeichnungen, Bauteile unter dem Detaillierungsgrad (LOD), den die Projektphase verlangt, Kollisionen zwischen Fachdisziplinen und Schnittstellen nach LOD 350. Nur Hinweise: Nichts wird blockiert.
keywords: Prüfung, Kontrolle, unbenannter Raum, fehlende Kennzeichnung, Kennzeichnung, LOD, Detaillierungsgrad, Meilenstein, Phase, Kollision, Disziplin, Koordination, Schnittstelle, LOD 350, Öffnung, Sturz, Unterzug, Durchdringung, Hülse, Rohr, Kanal, Probleme, Prüfbericht, Hinweis
from: cc83a14d
---

## Was Sie tun

Sehen Sie das gesamte Modell in einem Durchgang durch, bevor Sie es herausgeben. Die Prüfung führt fertige Regelsätze aus und legt die Befunde als Hinweise in die Liste {{ui:Problems}}. Nichts wird blockiert: Sie beheben einen Befund oder akzeptieren ihn mit einer Begründung, wie jedes andere Problem.

## Schritte

1. Öffnen Sie {{ui:Model checks}} › {{ui:Audit}} im linken Bereich oder {{ui:Tools}} › {{ui:Audit the model…}} (eingegeben: `AUDIT`).
2. Wählen Sie die {{ui:Project stage}}. Es ist dieselbe Phase wie in den Zeichnungsdetails.
3. Haken Sie die Regelsätze an, die laufen sollen.
4. Klicken Sie auf {{ui:Run the audit}}.
5. Lesen Sie die Zeile für jeden Regelsatz und öffnen Sie dann {{ui:Open the Problems list}}. Ein Klick auf einen Befund wählt sein Bauteil aus.
6. {{ui:The check report}} lädt den Bericht herunter: jeden Befund, wer was akzeptiert hat und warum, und die Regelsätze, die gelaufen sind.

## Die Regelsätze

- **Unbenannte Räume**: ein Raum ohne Namen oder noch mit dem Namen, den das Programm ihm gegeben hat („Raum 3“).
- **Fehlende Kennzeichnungen**: eine Tür oder ein Fenster ohne Kennzeichnung, ein Raum ohne Nummer, ein elektrisches Gerät ohne Kennzeichnung.
- **Bauteile unter dem LOD der Phase**: jede Wand, jeder Boden, jede Decke, jedes Dach, jede Tür und jedes Fenster, deren LOD unter dem liegt, den die Phase verlangt. Ein Bauteil liest das LOD-Kennzeichen seines Typs; ein vor Ort verifiziertes Bauteil ist LOD 500. Bauteile ohne Kennzeichnung werden in einer Anmerkung gezählt, weil sie nicht geprüft werden können.
- **Kollisionen zwischen Disziplinen**: Bauteile zweier Disziplinen (Architektur, Tragwerk, Mechanik, Sanitär, Elektro, nach IFC-Klasse), die sich gegenseitig durchdringen. Ein Dach, das auf seinen Wänden aufliegt, wird nicht gezählt.
- **Schnittstellen nach LOD 350**: jede Tür und jedes Fenster sitzt in einer Öffnung ihrer Wand, die Öffnung passt in die Wand, zwei Öffnungen überlappen sich nicht, eine Öffnung, die breiter als das Limit ist, hat einen Sturz oder Unterzug (ein Element darüber oder eine Notiz an der Tür oder am Fenster), und ein Rohr, Kanal oder eine Kabeltrasse, die eine Wand oder Decke quert, hat dort eine Öffnung. Befunde werden je Paar von Disziplinen gezählt.
- **Erkannte Bauteile, die niemand geprüft hat**: Wände, Türen, Fenster und Räume, die aus einem PDF, einem Scan oder einer Zeichnung gelesen wurden und noch nicht verifiziert sind. Siehe [Bauteile als geprüft oder vor Ort verifiziert markieren](topic:verification).

## Der LOD, den jede Phase verlangt

Öffnen Sie {{ui:The LOD each stage asks for}}, um die Tabelle zu sehen oder zu ändern.

:::note
Die Tabelle und die Sturzbreite sind Ausgangswerte von CadCraft. Sie stammen nicht aus einer Norm: Ein Projekt legt das LOD je Phase in seinem BIM-Ausführungsplan fest. Setzen Sie Ihre Werte. Ein Büro kann die Tabelle für alle festlegen unter Einstellungen › Default Policies › Audit; eine Änderung im Abschnitt Audit bleibt auf diesem Computer erhalten.
:::

## Gut zu wissen

- Ein Sturz kann als Notiz statt als Modell angegeben werden: Wählen Sie die Tür oder das Fenster und füllen Sie {{ui:Lintel or header note}} unter {{ui:Verification}} in den Eigenschaften aus.
- Ein Rohr, das durch eine echte Öffnung läuft, quert keine Fläche und wird nicht gemeldet. Eines, das durch die Wand hindurch modelliert ist, wird gemeldet.
- Die Kollisionsprüfung hält bei einem sehr großen Modell nach einigen Sekunden an und sagt es. Für eine vollständige Prüfung zweier gewählter Sätze verwenden Sie [Kollisionen zwischen Bauteilen finden](topic:clash-check).
- Führen Sie die Prüfung nach Änderungen am Modell erneut aus. Akzeptierte Befunde bleiben akzeptiert, solange ihre Nummern sich nicht ändern.
- Sie liest das Modell. Sie ersetzt keine Koordinationsprüfung durch die verantwortlichen Personen.

## Weiter

- [Ein Modell auf häufige Probleme prüfen](topic:model-checks)
- [Kollisionen zwischen Bauteilen finden](topic:clash-check)
- [Bauteile als geprüft oder vor Ort verifiziert markieren](topic:verification)
