---
title: Mengen an TakeoffCraft übergeben
summary: Ein Klick übergibt die Mengen des Modells an TakeoffCraft – Wände nach Typ, Dächer nach geneigter Fläche, Firste, Grate und Kehlen, Fundamente, Türen und Fenster, Unterschränke, elektrische Geräte, Bodenfläche und die Holz-Zuschnittliste –, markiert auf einem Plan jedes Geschosses, mit den Kalkulationsbausteinen der Gewerkepakete an den Positionen.
keywords: Mengenermittlung, Massenermittlung, Kalkulation, Schätzung, Materialliste, Stückliste, takeoffcraft, Mengen, Wandfläche, Dachfläche, Dachquadrate, Fundament, Beton, Kubikmeter, Kubikyards, Zuschnittliste, Holz, Gewerkepaket, Kalkulationsbaustein
from: c5a745af
---

## Was Sie hier tun

Verwandeln Sie das Modell in eine Materialliste und Kalkulation in TakeoffCraft. BimCraft zeichnet einen Plan jedes Geschosses in einem Standardmaßstab, markiert jede Menge darauf und legt die Mengenermittlung in die PDF. TakeoffCraft misst die Markierungen selbst, sodass sich jede Zahl auf dem Blatt prüfen lässt.

## Übergeben

1. Klicken Sie in der Modellleiste neben {{ui:Blätter}} auf {{ui:Mengenermittlung}}.
2. TakeoffCraft öffnet sich mit den Plänen in einem neuen Tab. Wenn es fragt, wählen Sie, die Mengenermittlung zu öffnen, die es in der PDF gefunden hat.
3. Tragen Sie Ihre Preise in der Mengentabelle von TakeoffCraft ein; die Kalkulationsbausteine listen die Materialien bereits auf.

:::note
Ist TakeoffCraft hier nicht verfügbar, lädt die Schaltfläche stattdessen die PDF herunter. Öffnen Sie sie später in TakeoffCraft: Dort findet es die Mengenermittlung darin.
:::

## Was gemessen wird

- **Wände** nach Typ und Höhe: ihre Mittellinien als Strecken, mit der Wandhöhe am Element, sodass TakeoffCraft Länge und Wandfläche ermittelt. Jede Strecke trägt die Türen und Fenster der Wand, sodass TakeoffCraft sie nach derselben Regel wie die Listen von BimCraft einmal aus der Wandfläche herausrechnet: Beide stimmen bei Brutto, Abzügen und Netto überein. Die Mengendaten eines Wandtyps (Einheit, Mörtel, Satz; siehe [Wandkalkulationsbausteine](topic:wall-assemblies)) kommen als eine bepreiste Zeile am Element dieses Typs mit. Bei einer anderen als der Standard-Messmethode (siehe [Messmethode wählen](topic:plan-schedules-and-pdf#choose-a-measurement-method)) trägt die Mengenermittlung die Methode, jede Strecke trägt, was die Anschlüsse von ihrer Wandfläche abziehen, und TakeoffCraft misst nach derselben Methode und nennt sie. Ein Typ, dessen Einheit eine Länge und eine Höhe hat, übergibt zwei Komponenten mit Mengen: die zu bestellenden Einheiten und das Mörtelvolumen, bepreist, wenn der Satz je Einheit, je 1000 Einheiten oder je m³ Mörtel gilt. Eine Anzahl, die genau auf einer ganzen Zahl liegt, kann in TakeoffCraft eine Einheit höher ausfallen, weil die Übergabe die Positionen auf dem Blatt rundet.
- **Dächer**: jede Dachebene als Fläche mit ihrer Neigung (TakeoffCraft ergibt die geneigte Fläche), Firste, Grate und Kehlen (Grate und Kehlen entlang ihrer Neigung), Traufen und Ortgänge.
- **Fundamente**: Einzelfundamente und Streifenfundamente als Strecken um ihre Mitten, Bodenplatten als Flächen mit ihrer Dicke, sodass der Beton über das Volumen herauskommt.
- **Türen und Fenster**, nach Typ gezählt, mit Fensterverkleidung.
- **Unterschränke** nach der Länge ihrer Fronten.
- **Elektrische Geräte**, nach Art gezählt.
- **Bodenfläche** jedes Geschosses aus seinen Räumen.
- **Die Holz-Zuschnittliste** aus dem Tragwerk, auf einem eigenen Blatt gezählt (ein Punkt je Stück).

Wo ein Gewerkepaket einen passenden Kalkulationsbaustein hat – Außen- und Innenwände, Decken, Einzelfundamente, Streifenfundamente, Sockelwände, Dachschindeln, First- und Gratabdeckung, Kehlen, Traufen, Innentüren, Fensterverkleidung, Unterschränke, Steckdosen, Schalter, Leuchten, Abzweigdosen und den Verteiler –, kommt das Element mit seinen Materialien und Formeln. Die Pakete kommen ohne Preise und sind noch nicht von einem Kalkulator geprüft worden.

:::tip
Die Pläne werden bei jedem Klick aus dem Modell neu erstellt; nach einer Änderung klicken Sie also einfach erneut auf {{ui:Mengenermittlung}}.
:::
