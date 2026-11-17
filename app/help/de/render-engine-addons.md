---
title: Eine Render-Engine mit einem Add-on hinzufügen
summary: Was ein Add-on in der Engine-Liste des Dialogs Rendern ergänzen kann, welche Berechtigung es zum Ausführen eines Programms braucht und was Studio prüft und abfragt.
keywords: Add-on, Addon, Engine, Render-Engine, Entwickler, engine.run, Berechtigung, Programm, Skript, signiert, Studio, API
from: 06295376
---

Ein Add-on (Einstellungen › Add-ons) kann eine Engine zur Engine-Liste von {{ui:Render}} hinzufügen. Den vollständigen Text für Autoren von Add-ons finden Sie in Abschnitt 16 der Add-on-Spezifikation; kurz gefasst:

- Das Add-on registriert eine Engine mit einer ID, die mit seiner eigenen beginnt, einem Namen, optionalen Einstellungen und **entweder** einem Programm zum Ausführen **oder** einer Funktion in JavaScript, die das Bild zeichnet.
- Eine Engine, die ein Programm ausführt, braucht die Berechtigung **`engine.run`**, die vor der Installation und in den Einstellungen angezeigt wird. Sie läuft nur in Studio; im Browser erscheint sie als Datei zum Speichern.
- Das Add-on nennt das Programm (ein einfacher Dateiname, nie eine Shell), ein Skript, das **im signierten Add-on liegt**, und Argumente aus Platzhaltern und einfachen Wörtern. Studio findet das Programm oder bittet Sie einmalig, auf es zu zeigen.
- Beim ersten Start eines Programms durch ein Add-on fragt **Studio in einem eigenen Dialog nach**: welches Add-on, welches Programm und dass ein Skript alles tun kann, was das Programm kann. Erlauben Sie das nur einem Add-on, dem Sie vertrauen. Ihre Antwort wird für dieses Add-on und dieses Programm gespeichert.
- Das Paket (die Szene als USD und eine Einstellungsdatei, mit der glTF-Datei, wenn das Add-on sie anfordert) und das Skript des Add-ons kommen in einen neuen temporären Ordner, das Programm läuft dort, und das Bild kommt zurück, markiert mit dem Engine-Namen des Add-ons.

:::note
Add-ons können ab Add-on-API 1.4 Render-Engines hinzufügen. Ein ausgearbeitetes Beispiel für einen quelloffenen Kommandozeilen-Renderer steht in seinem eigenen Repository; es wurde in diesem Renderer noch nicht ausgeführt.
:::
