---
title: Browser, Geräte und Speicher
summary: Was sich in BimCraft zwischen Chrome, Edge, Firefox und Safari unterscheidet, auf Mac, Windows und Linux, mit Maus, Trackpad oder Touch, und wie groß eine Datei sein darf.
keywords: Browser, Chrome, Edge, Firefox, Safari, Brave, Mac, Windows, Linux, iPad, Tablet, Telefon, Touch, Trackpad, Speicher, große Dateien, WebGL, Leistung
from: fd8acba1
---

BimCraft läuft in aktuellen Versionen von Chrome, Edge, Firefox und Safari, auf Mac, Windows und Linux. Die 3D-Ansicht braucht WebGL, das jeder aktuelle Browser hat. Siehe [Browser und Computer](common:browsers) für das, was die Apps allgemein brauchen.

## Ordner öffnen

| Browser | {{ui:Ordner öffnen}} tut Folgendes | Ordner hineinziehen | {{ui:Zuletzt verwendete Ordner}} |
|---|---|---|---|
| Chrome, Edge | Der Ordnerauswahldialog des Browsers, dann „Dem Standort das Anzeigen von Dateien erlauben?“: klicken Sie auf **Dateien anzeigen** | Öffnet sich ohne Abfrage | Ja, für gewählte oder hineingezogene Ordner |
| Firefox | Der Ordnerauswahldialog des Systems | Öffnet sich ohne Abfrage | Nein |
| Safari | Der Ordnerauswahldialog des Systems, mit einer Schaltfläche **Hochladen** (es wird nichts hochgeladen) | Öffnet sich ohne Abfrage | Nein |

Im Hintergrund: Chrome und Edge nutzen den File-System-Access-Auswahldialog und können den Ordner merken. Firefox und Safari nutzen den älteren Ordnerauswahldialog, der jede Datei des Ordners auf einmal übergibt und sich nicht merken lässt. Ein hineingezogener Ordner wird in jedem Browser Eintrag für Eintrag gelesen.

:::chromium
Brave und einige andere Chromium-Browser schalten den Ordnerauswahldialog aus. BimCraft nutzt dann stattdessen den Ordnerauswahldialog des Systems, und der Browser fragt womöglich „*n* Dateien an diese Website hochladen?“. Nichts wird hochgeladen; die Dateien gelangen nur in den Tab. Ziehen Sie den Ordner hinein, um die Abfrage zu vermeiden.
:::

## Mac, Windows und Linux

- Die Tastenkürzel {{key:Mod+S}} und {{key:Mod+Z}} sind auf dem Mac Command und unter Windows und Linux Strg.
- {{key:Ctrl+Shift+F}} (Anzeigemodi) ist auf jeder Plattform Control, auch auf dem Mac.
- Dateidialoge und der Downloads-Ordner gehören Ihrem System.

## Maus, Trackpad und Touch

| Eingabe | 3D-Ansicht | 2D-Zeichnung |
|---|---|---|
| Maus | Ziehen mit links dreht die Ansicht, mit rechts schwenkt, Mausrad zoomt, Klick wählt | Jedes Ziehen schwenkt, Mausrad zoomt, Doppelklick passt ein |
| Trackpad | Klicken und Ziehen dreht; {{key:Shift}} oder {{key:Mod}} und Ziehen schwenkt; Zwei-Finger-Scrollen oder Pinch-Geste zoomt | Klicken und Ziehen schwenkt; Zwei-Finger-Scrollen oder Pinch-Geste zoomt |
| Touch | Ein Finger dreht, zwei Finger per Pinch-Geste und Schwenken, Tippen wählt | Ein Finger schwenkt; noch kein Pinch-Zoom; tippen Sie auf {{ui:Einpassen}} |

Auf einem Mac-Trackpad ist ein Rechtsklick ein Zwei-Finger-Klick (oder Control-Klick). Siehe [Tasten, Mäuse und Trackpads](common:keys).

Tablets und Telefone können einzelne Dateien öffnen und ansehen, aber der Bildschirm ist klein, viele mobile Browser können keine Ordner wählen, und große Modelle passen womöglich nicht in ihren Speicher. Ein Computer funktioniert am besten.

## Große Dateien und Speicher

Alles, was BimCraft liest, liegt im Speicher des Browser-Tabs. Wie viel ein Tab nutzen kann, hängt eher vom Browser und Ihrem Computer ab als von BimCraft.

| Datei | Was gelesen wird | Was zu erwarten ist |
|---|---|---|
| IFC | Die ganze Datei, plus die aus ihr erstellte 3D-Geometrie | Wie groß, hängt von Ihrem Computer und Browser ab; ein Modell von mehreren hundert Megabyte kann für einen Laptop zu viel sein. Über 1.5 Millionen Dreiecke werden die Kanten abgeschaltet |
| Projekt- und Familiendateien | Etwa 40 KB bis 100 KB, egal wie groß | Auch sehr große Zentraldateien öffnen sich sofort, auch von einem Netzlaufwerk |
| DWG und DXF | Die ganze Datei | Sehr große Zeichnungen zeigen „Diese Zeichnung ist sehr groß; nur ein Teil wird angezeigt.“ |
| Ordner | Die Dateiliste, plus einige Kilobyte je Modell | Bis zu 20,000 Dateien |

Geht einem Tab der Speicher aus, zeigt der Browser seine eigene Fehlerseite („Aw, Snap!“ in Chrome zum Beispiel). Schließen Sie andere Tabs, laden Sie BimCraft neu und versuchen Sie es erneut, oder nutzen Sie einen Computer mit mehr Speicher.

## Verwandt

- [Online und offline](topic:online-offline)
- [Fehlerbehebung](topic:troubleshooting)
