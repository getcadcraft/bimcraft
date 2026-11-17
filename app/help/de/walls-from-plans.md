---
title: Wände aus einem Satz Pläne (PDF oder Scan)
summary: Die Seiten eines PDFs oder einer gescannten Zeichnung in Wände, Türen und Fenster umwandeln, ein Geschoss für jede Seite, wobei die Seite unter jedem Grundriss erhalten bleibt.
keywords: pdf, Pläne, Plansatz, Scan, gescannte Zeichnung, tiff, nachzeichnen, Wände aus einem PDF, Wände aus einem Scan, Geschosse, Seiten, Maßstab, Türen, Fenster, Schwenkrichtung, Brüstung, Unterlage
from: b70d9db7
---

## Was Sie tun

Ein Modell aus den Plänen beginnen, die Sie auf Papier haben: ein PDF (als Linien gezeichnet oder ein Scan in einem PDF) oder ein Scan (PNG, JPEG, TIFF mit einer oder mehreren Seiten). Jede Seite wird zu den Wänden, Türen und Fenstern eines Geschosses.

## Schritte

1. Schalten Sie {{ui:Zeichnen}} ein. Wählen Sie {{ui:Build}} › {{ui:Aus einer Zeichnung…}}, dann {{ui:Zeichnung wählen…}} und wählen Sie das PDF oder den Scan.
2. **Seiten und Geschosse.** Jede Seite wird mit ihrer Art aufgelistet (**Linienzeichnung** oder **ein Bild (nachgezeichnet)**) und dem Geschoss, zu dem sie gehört: eines Ihrer Geschosse, **ein neues Geschoss über den anderen** oder **diese Seite weglassen**. Seiten werden in der Reihenfolge Ihren Geschossen zugeordnet; ändern Sie jede davon.
3. **Maßstab.** Bei einem PDF geben Sie an, wie es gezeichnet wurde (**1 : 100**, **1 : 50** …). Für alles andere oder wenn Sie es nicht wissen, wählen Sie **aus einem bekannten Abstand**: Klicken Sie in der Vorschau auf die beiden Enden einer Bemaßung oder eines Maßstabsbalkens, und geben Sie dann den wahren Abstand ein. Alle Seiten verwenden den einen Maßstab.
4. Wählen Sie den **Wandtyp** und die **Höhe eines neuen Geschosses**. Lassen Sie **Jede Seite unter dem Grundriss ihres Geschosses behalten** angehakt, um jede Seite als dünne Linien unter ihrem Grundriss zu sehen.
5. Die Zeile unter den Auswahlmöglichkeiten sagt, wie viele Wände, Türen und Fenster auf wie vielen Geschossen entstehen. Klicken Sie auf {{ui:Erstellen}}.

## So liest es eine Seite

- **Wände** entstehen aus Paaren paralleler Linien bis 600 mm Abstand (den zwei Flächen einer Wand); die Wand ist so dick wie der Abstand. Schraffuren und Beschriftungen werden weggelassen.
- **Türen und Fenster.** Eine Lücke in einer Wand (500 bis 2600 mm) mit einem daneben gezeichneten Schwenkbogen ist eine Tür, angeschlagen an einem Ende der Lücke und öffnend zu der Seite des Schwenkbogens. Eine Lücke oder eine Wand mit Brüstungslinien darin ist ein Fenster. Eine Lücke ohne beides ist eine Tür bis 1300 mm und darüber ein Fenster.
- **Ein Scan** wird zuerst begradigt, wenn er schief gescannt wurde (der Dialog sagt es), in Schwarzweiß umgewandelt, von Flecken bereinigt und nachgezeichnet; eine **PDF-Seite, die ein Bild ist**, wird zuerst gezeichnet und dann genauso behandelt. Das Nachzeichnen findet die Mitte jedes Strichs und passt gerade Linien und Bögen daran an; es verwendet kein Netzwerk und kein trainiertes Modell.
- **Räume** ergeben sich von selbst aus den geschlossenen Schleifen, die die Wände bilden. Hat das PDF Text, übernimmt ein Raum seinen Namen aus der Beschriftung darin (der größten; eine Bemaßung, ein Maßstab oder eine Blattnummer ist kein Name). Ein Scan hat keinen Text, daher behalten seine Räume die Namen, die das Programm ihnen gibt.
- **Alles, was aus der Seite gelesen wird, ist als ungeprüft markiert**: Jede Wand, Tür, jedes Fenster und jeder Raum hat einen gestrichelten Kasten und ein „?“ im Grundriss, bis Sie es prüfen. Wählen Sie, was Sie geprüft haben, und verwenden Sie {{ui:Werkzeuge}} › {{ui:Als geprüft markieren}}. Siehe [Elemente als geprüft oder vor Ort verifiziert markieren](topic:verification).

## Was Sie sehen sollten

- Die Wände, Türen, Fenster und Räume auf jedem Geschoss und alle neuen Geschosse, als ein Schritt: {{key:Mod+Z}} nimmt alles zurück.
- Jede Seite als dünne Linien unter dem Grundriss ihres Geschosses, aufgelistet unter {{ui:Build}} › {{ui:Aus einer Zeichnung…}} mit {{ui:Entfernen}}.

:::note
Das ist, was die Linien ergeben haben, mit der Genauigkeit der Seite. Ein Scan kann eine schwache Wand verlieren, zwei sehr nah beieinanderliegende Wände verbinden oder eine Wand in einem Fleck finden; ein Schwenkbogen, den die Zeichnung nicht zeigt, macht aus einer Lücke eine einfache Tür. Prüfen Sie jedes Geschoss anhand der Seite, bevor Sie sich darauf verlassen, und korrigieren Sie Fehlerhaftes mit den Werkzeugen {{ui:Wand}}, {{ui:Tür}} und {{ui:Fenster}}.
:::
