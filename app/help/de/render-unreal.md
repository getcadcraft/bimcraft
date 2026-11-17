---
title: Die Szene an eine Game-Engine senden
summary: Studio kann die Szene in ein Unreal-Engine-Projekt schreiben und sie bei jedem Senden abgeglichen halten; Ihre eigenen Änderungen liegen in einer Ebene, die CadCraft nie schreibt. Das Plug-in, das sie öffnet, ist noch nicht veröffentlicht.
keywords: unreal, unreal engine, Game-Engine, Verknüpfung, senden, USD-Stage, Projekt, live, Cine-Kamera, Movie Render Queue
from: 154d55ef
---

In CadCraft Studio kann die Engine-Liste eine **Verknüpfung** zu einem Unreal-Engine-Projekt enthalten. Sie wirkt nur in eine Richtung: von CadCraft zu Unreal.

## Die Szene senden

1. Wählen Sie den Unreal-Eintrag in der Engine-Liste. Beim ersten Mal fragt Studio nach dem Ordner Ihres Projekts (dem mit der Datei `.uproject`); er wird gemerkt.
2. Klicken Sie auf {{ui:Send}}. Studio schreibt `CadCraft/<Dateiname>/` in das Projekt: die Szene als USD-Datei, die Einstellungsdatei, Lichtprofile und zwei kleine Ebenendateien.
3. Ändern Sie das Modell, speichern Sie und senden Sie erneut. Nur die Szene und die Einstellungsdatei werden ersetzt.

## Ihre eigenen Änderungen sind sicher

Die Stage, die Unreal öffnet, ist eine kleine Root-Ebene, die einmal erstellt wird, mit zwei Ebenen darunter: **Ihre** oben (`<name>.user.usda`, zunächst leer, wird von CadCraft nie neu geschrieben) und die Szene von CadCraft darunter. Änderungen, die Sie in Ihrer eigenen Ebene speichern, bleiben erhalten, wenn die Szene erneut gesendet wird. Lichter und andere Akteure, die Sie im Unreal-Level platzieren, liegen außerhalb der Stage und werden ebenfalls nicht berührt.

## Ohne Studio

Im Browser oder auf einem Computer, auf dem Studio Unreal nicht findet, wählen Sie in der Engine-Liste **Unreal-Projektordner (.zip)** und klicken Sie auf {{ui:Render}}. Es wird derselbe Ordner als ZIP gespeichert: Entpacken Sie ihn in den Ordner `CadCraft` Ihres Projekts. Lassen Sie **Stage-Dateien einschließen** beim ersten Mal eingeschaltet; schalten Sie es für spätere Speicherungen aus, damit das ZIP nur die Szene und die Einstellungsdatei enthält und Ihre eigene Ebene nie ersetzt wird.

:::note
Das Unreal-Plug-in, das die Stage öffnet, Sonne, Lampen, Kameras und Belichtung anwendet, jedem Senden folgt und eine Kamera rendert, ist **noch nicht veröffentlicht** und wurde in Unreal noch nicht ausgeführt. Bis dahin legt Senden die Dateien ins Projekt, und die USD-Werkzeuge von Unreal können sie öffnen. Windows ist das erste System; macOS folgt.
:::
