---
title: Die Befehlszeile in der Statusleiste
summary: In einem Layout mit Befehlszeile überall tippen, und die Buchstaben landen in der Zeile unten. Sie zeigt passende Befehle, führt einen Verlauf und verdeckt nie die Zeichnung.
keywords: Befehlszeile, überall tippen, eingegebener Befehl, Statusleiste, Verlauf, Pfeiltasten, Enter, Leertaste, WALL, DOOR, Duncan-Layout, Rhino-Layout, Tastenkürzel, Tasten, Befehlssuche
from: d583b52d
---

## Was Sie tun

Werkzeuge starten, indem Sie ihre Namen eintippen, ohne vorher in ein Feld zu klicken.

## Schritte

1. Ein Layout mit Befehlszeile wählen: {{ui:Einstellungen}} öffnen, {{ui:Global}} wählen, dann {{ui:Layout}}, und **Duncan** (oder **Rhino**) auswählen. Die Zeile sitzt in der Statusleiste unten im Fenster.
2. Mit dem Zeiger irgendwo und ohne ein genutztes Feld `wall` eintippen. Die Buchstaben erscheinen in der Befehlszeile, und darüber zeigt eine Liste die passenden Befehle.
3. {{key:Enter}} drücken. Das Werkzeug Wand startet.
4. In die Befehlszeile klicken (oder erneut eine Taste drücken). Bei leerer Zeile zeigt die Liste die zuvor eingegebenen Befehle. {{key:Up}} und {{key:Down}} blättern durch sie; {{key:Enter}} führt den angezeigten aus.

## Was Sie eingeben können

- Ein Befehlswort des verwendeten Menüstils, wo der Stil sie hat (`WALL`, `WA`, `DOOR` im Drafting-Stil).
- Der Schlüssel eines Befehls als Wort: `W` und dann {{key:Enter}} oder {{key:Space}} ist Wand, `D` ist Tür.
- Der Name eines Befehls, mit oder ohne Leerzeichen: `split wall`, `wallrectangle`.
- Der Anfang eines Wortes oder Namens, wenn nur ein Befehl so beginnt.
- Alles andere öffnet die Befehlssuche mit dem, was Sie eingegeben haben.

## Gut zu wissen

- {{key:Esc}} leert die Zeile und gibt die Tasten wieder an die Zeichnung.
- In diesen Layouts startet ein einzelner Buchstabe nicht mehr von selbst ein Werkzeug: Er wartet in der Zeile auf {{key:Enter}} oder {{key:Space}}. Tasten mit {{key:Ctrl}}, die Funktionstasten, {{key:Delete}} und {{key:Esc}} funktionieren wie bisher. In den anderen Layouts ändert sich nichts.
- Während ein Zeichenwerkzeug läuft, gehören Ziffern dem Werkzeug (eine eingegebene Länge).
- Die Eingabe in einem Feld, einem Dialog oder den Einstellungen bleibt dort.
- Der Verlauf wird auf diesem Rechner gespeichert, 50 Befehle je App.
