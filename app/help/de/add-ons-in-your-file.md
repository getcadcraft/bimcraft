---
title: Von Ihrer Datei verwendete Add-ons
summary: BimCraft vermerkt in einer IFC-Datei, welche Add-ons hineingeschrieben haben, und bietet beim Öffnen an, die fehlenden hinzuzufügen.
keywords: Add-on, Addon, diese Datei verwendet, fehlendes Add-on, trusscraft, Bibliothek, Eintrag, cadcraft_addons
from: 9d9500d8
---

## Was es tut

Wenn ein Add-on etwas in das Modell schreibt (einen Dachbinder, eine Rohrleitung), vermerkt BimCraft das Add-on und seine Version im IFC-Projekt, in einem Eigenschaftssatz namens CadCraft_AddOns. Der Eintrag wird im selben Rückgängig-Schritt geschrieben wie die eigene Änderung des Add-ons, sodass das Rückgängigmachen der Änderung auch den Eintrag entfernt. Andere Programme ignorieren den Eigenschaftssatz; was das Add-on gezeichnet hat, bleibt in jedem Fall in der Datei.

## Schritte

1. Öffnen Sie eine IFC-Datei, an deren Entstehung ein Add-on beteiligt war.
2. Ist ein verwendetes Add-on nicht aktiviert, zeigt ein Hinweis über dem Modell, welche es sind, mit einer Schaltfläche, um sie aus Ihrem Bibliothekskonto hinzuzufügen.
3. Fügen Sie sie hinzu oder schließen Sie den Hinweis. Das Modell wird in beiden Fällen geöffnet.

## Häufige Fehler

- **Kein Hinweis erscheint.** Sie sind in diesem Tab nicht bei Ihrem Konto angemeldet, oder die Datei enthält keinen Eintrag (sie wurde vor den Einträgen oder von einem anderen Programm erstellt).
- **Die Änderungsliste zeigt "undefined".** Behoben: Beschriftungen zeigen jetzt den Namen des Add-ons.

## Weiter

- [Ausrüstung und Möbel aus der Bibliothek platzieren](topic:place-from-library)
