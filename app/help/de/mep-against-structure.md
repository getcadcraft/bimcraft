---
title: Rohre und Luftkanäle gegen das Tragwerk prüfen
summary: Die fertigen Kollisionssätze von Rohren und Luftkanälen gegen Wände, Decken, Träger und Stützen laufen lassen, Führungen finden, die dem Tragwerk näher kommen als ihre Dämmung und ein Spiel, und die Öffnungen auflisten, die Führungen durch Wände und Decken brauchen, als CSV und BCF.
keywords: mep, Kollision, Kollisionsprüfung, Koordination, Tragwerk, Wände, Decken, Träger, Stützen, Abstand, weiche Kollision, Dämmung, Spiel, Öffnung, Öffnungen, Durchdringung, Hülse, Kern, Bauleistung, bcf, csv
from: 2d597f01
---

## Was Sie tun

Sorgen Sie dafür, dass die Installationen zum Gebäude passen: was in das Tragwerk hineinläuft, was zu nah daran vorbeiführt und wo Wände und Decken Durchbrüche brauchen. Öffnen Sie {{ui:Kollisionsprüfung}} im linken Bereich; der Abschnitt **Rohre und Luftkanäle gegen das Tragwerk** steht unter der üblichen Prüfung.

## Harte Kollisionen

Die beiden Satzlisten bieten jetzt auch **Rohre und Luftkanäle**, **Wände**, **Decken und Dächer**, **Träger**, **Stützen** und **Tragwerk** (alle vier) an, jeweils mit der Anzahl der Elemente darin. Klicken Sie auf {{ui:Rohre und Kanäle × Tragwerk}}, um das erste und das letzte auszuwählen und die Prüfung zu starten; oder wählen Sie selbst ein beliebiges Paar und klicken Sie auf {{ui:Starten}}. Siehe [Auf Kollisionen prüfen](topic:clash-check).

## Abstände

Manche Installationen brauchen Platz um sich herum: für ihre Dämmung und für Arbeiten oder eine Hülse.

1. Geben Sie einer Rohr- oder Luftkanalführung ihre **Dämmung**-Stärke im Eigenschaftenbereich an (dafür wird nichts gezeichnet).
2. Tragen Sie das **Spiel um Rohre und Luftkanäle** (mm) in der Kollisionsprüfung ein.
3. Klicken Sie auf {{ui:Abstände prüfen}}: Jedes Teil, das näher an einer Wand, Decke, einem Träger oder einer Stütze liegt als seine Dämmung plus das Spiel, wird mit dem vorhandenen und dem geforderten Abstand aufgelistet. Klicken Sie auf eine Zeile, um die beiden zu sehen.

Ein Teil, das durch eine Wand oder Decke führt, ist eine Öffnung, kein Abstand, und wird dort stattdessen aufgelistet.

## Nötige Öffnungen

Klicken Sie auf {{ui:Nötige Öffnungen}}. Wo die Mittellinie einer Führung durch eine Wand oder eine Decke läuft, listet BimCraft die Öffnung auf, die sie braucht: rund bei einem runden Rohr oder Luftkanal, sonst rechteckig, so groß wie die äußere Abmessung der Führung plus die doppelte Dämmung plus das doppelte Spiel, zentriert an der Stelle, an der die Führung kreuzt. Klicken Sie auf eine Zeile, um die Führung und die Wand oder Decke zu sehen.

- {{ui:Öffnungen als CSV}}: eine Zeile je Öffnung mit der Führung, ihrer Größe und Dämmung, der Größe der Öffnung, dem Element, durch das sie führt, und dessen GlobalId, dem Geschoss, den X-, Y- und Z-Werten der Mitte und wie weit die Führung hindurchgeht.
- {{ui:Öffnungen als BCF-Themen}}: ein Thema je Öffnung mit einer Kamera, die darauf blickt, und der gewählten Führung und dem gewählten Element, für das Programm des Tragwerksplaners.

:::note
Es wird nichts ausgeschnitten: Die Öffnungen sind eine Liste für diejenigen, die sie dimensionieren. Das Spiel geben Sie selbst ein; keine Norm sagt, wie groß eine Öffnung sein muss. Träger und Stützen sind Kollisionen, keine Öffnungen: ob ein Rohr hindurchgehen darf, entscheidet der Tragwerksplaner.
:::
