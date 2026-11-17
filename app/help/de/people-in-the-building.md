---
title: Personen durch das Gebäude führen
summary: Eine Evakuierung oder die normalen Ankünfte eines Tages durch Ihre Räume, Türen und Treppen, mit Warteschlangen, wo das Gebäude enger wird, dem längsten Weg zu einem Ausgang aus jedem Raum und den Ergebnissen als Probleme. Ein grobes Menschenmodell für Entwurfsentscheidungen, kein Brandschutznachweis.
keywords: Personen, Evakuierung, Rettungsweg, Flucht, Ausgang, Fluchtweglänge, Warteschlange, Menschenmenge, Strom, Türbreite, Treppen, Ankunft, Engpass, Simulation, Belegung, Fußgänger, Was-wäre-wenn, gesperrte Tür
from: 84aa8920
---

Der Abschnitt {{ui:Personen im Gebäude}} im linken Panel führt Personen durch die Räume, Türen und Treppen des geöffneten IFC-Modells. Am Modell wird nichts verändert, und nichts wird hochgeladen.

:::warning
Dies ist **eine Entwurfshilfe, kein Brandschutznachweis**. Sie kennt weder Feuer, Rauch, Panik, eingeschränkte Mobilität noch die Anforderungen einer Vorschrift an Sie. Die Grenzen setzen Sie: Der längste Weg zu einem Ausgang und die verfügbare Zeit sind Zahlen, die Sie eingeben. Nichts davon wird angenommen.
:::

## Ausführen

1. Öffnen Sie ein Modell mit geschlossenen Räumen und Türen. Eine Tür, an der nur auf einer Seite ein Raum liegt, ist ein Ausgang. Eine Tür zwischen zwei Räumen verbindet sie. Eine Treppe verbindet die Räume an ihren Enden.
2. Wählen Sie **Evakuierung** (alle gehen zu einem Ausgang), **Ankunft** (alle kommen herein und gehen zu einem Raum) oder **Austausch** (die Personen in den Räumen verlassen sie, während ebenso viele hereinkommen) sowie die Bodenfläche je Person. Räume mit Namen wie Flur, Treppe, Foyer oder WC beherbergen niemanden.
3. Klicken Sie auf {{ui:Starten}}. Sie erhalten die Zeit, bis die letzte Person draußen ist (und wann die Hälfte und neun von zehn draußen sind), die Warteschlange an jeder Tür und Treppe, den Raum mit dem längsten Weg und einen Plan, der den Ablauf abspielt.

## Was-wäre-wenn

Setzen Sie in der Tabelle ein Häkchen bei {{ui:Gesperrt}} an einer Tür und führen Sie erneut aus: Die Personen finden einen anderen Weg, oder die Räume ohne Fluchtweg werden als Fehler aufgelistet. Eine doppelt so breite Tür leert einen Raum deutlich schneller. Die Tabelle zeigt, wo die Warteschlangen entstehen.

## Wie es funktioniert

Jeder Raum ist ein Raster, sodass Personen um Ecken gehen, nicht durch Wände. Die Geschwindigkeit sinkt, wenn ein Raum sich füllt (S = 1.4 (1 − 0.266 D) m/s, D in Personen je m²). Eine Tür lässt je Meter ihrer Breite 1.3 Personen pro Sekunde durch, abzüglich 150 mm auf jeder Seite; eine Treppe 1.0 und langsamer beim Gehen. Personen warten in einer Warteschlange nach dem Prinzip „wer zuerst kommt“. Eine Laufnummer wiederholt denselben Lauf exakt.

Der Assistent kann dasselbe ausführen: Bitten Sie um eine Evakuierung oder um den längsten Weg zu einem Ausgang aus jedem Raum.

## Personen in jedem Raum

Öffnen Sie {{ui:Personen in jedem Raum}}, um für einen beliebigen Raum eine Zahl einzutragen. Ein leeres Feld verwendet die Angabe zur Bodenfläche (grau angezeigt); 0 leert einen Raum. Ihre Angaben werden für den Lauf verwendet und in diesem Browser gespeichert.

## Gegenläufiger Verkehr an Türen

Beim **Austausch** treffen Personen, die hinausgehen, und Personen, die hereinkommen, an denselben Türen aufeinander. Wenn eine Tür dicht hinter der letzten Person eine Person in der Gegenrichtung durchlässt, behält sie einen Teil ihrer Rate (hier 0.8; eine Annahme, da veröffentlichte Werte variieren). Die Tabelle zählt die Richtungswechsel. Eine Tür, die oft die Richtung wechselt, wird unter Probleme als Hinweis aufgelistet.

## Treppen und Podeste

Jedes Podest einer Treppe kostet einen Gehenden eine Sekunde zum Wenden (eine Annahme). Eine gerade Treppe hat keines; eine L- oder U-Treppe hat eines. Die Rate der Treppe ergibt sich weiterhin aus der Breite ihres Laufs.

## In der 3D-Ansicht

Setzen Sie ein Häkchen bei {{ui:Die Personen in der 3D-Ansicht anzeigen}}, dann erscheinen die Gehenden als Figuren im Modell, nach ihrer Tätigkeit gefärbt, und bewegen sich beim Abspielen des Laufs. Dem Modell wird nichts hinzugefügt.
