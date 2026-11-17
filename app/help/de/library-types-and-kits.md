---
title: Symbole, Typen und Assets, Projektvorlagen und Quick Kits
summary: Die Bibliothek hat drei Arten von Elementen (Symbole, Typen, Assets). Fügen Sie einem Projekt einen Typ hinzu, beginnen Sie mit einer geteilten Projektvorlage, fügen Sie ein Quick Kit hinzu und teilen Sie eigene über die Upload-Seite der Bibliothek.
keywords: Bibliothek, Symbole, Typen, Assets, Typ, Wandtyp, Bodentyp, Dachtyp, Deckentyp, Projektvorlage, Vorlage, Quick Kit, Kit, teilen, hochladen, Version, Änderungsprotokoll, LOD, Klassifikation, Lizenz, Notizen aus der Praxis
from: e13b0e67
---

## Was Sie tun

Finden Sie in der Bibliothek, was Sie brauchen, nach seiner Art. Fügen Sie dem Projekt, das Sie zeichnen, einen Typ hinzu, beginnen Sie ein neues Projekt aus einer geteilten Vorlage und teilen Sie Ihre eigenen Vorlagen, Typen und Kits.

## Die drei Arten von Bibliothekselementen

- **Symbole** sind Zeichenkonventionen: nur 2D, im Beschriftungsmaßstab gezeichnet, nach Fachbereich gruppiert.
- **Typen** beschreiben, woraus ein Element besteht: seine Schichten mit ihrer echten Stärke, sein Detaillierungsgrad (LOD) und sein Klassifikationscode. Ein Typ wird dem Projekt hinzugefügt, nicht gezeichnet.
- **Assets** sind physische Objekte wie Türen, Fenster, Möbel, Sanitär- und Haustechnikobjekte, mit einer Planansicht und einem 3D-Körper in Originalgröße.

Auf dem Reiter {{ui:Bibliothek}} wählen Sie {{ui:Bibliothek}} und verwenden **Art des Elements**, um Alles, Symbole, Typen oder Assets anzuzeigen.

## Einen Typ zu Ihrem Projekt hinzufügen

1. Unter **Art des Elements** **Typen** wählen und einen öffnen.
2. Aufbau, LOD und Klassifikation unter dem Bild prüfen, dann auf {{ui:Diesem Projekt hinzufügen}} klicken.
3. Er wird als Wand-, Boden-, Dach- oder Deckentyp hinzugefügt, mit dem Sie zeichnen können. Existiert bereits ein Typ mit diesem Namen, wird der neue als Kopie hinzugefügt, und Ihrer bleibt unverändert. Ein Rückgängig entfernt ihn wieder.

## Projektvorlagen und Quick Kits

Wählen Sie {{ui:Kits}}, um zu sehen, was Menschen geteilt haben.

- **Eine Projektvorlage** ist eine IFC-Datei mit Geschossen, Rastern, Typen und Einstellungen. {{ui:In meine Vorlagen speichern}} legt sie unter Neues Gebäude bei Starten mit ab.
- **Ein Quick Kit** ist eine Liste von Bibliothekselementen. {{ui:Elemente des Kits anzeigen}} listet sie als Karten, die Sie platzieren können.
- Jedes Kit hat eine Version und ein Änderungsprotokoll, neueste zuerst. Eine Version, die mit 0 beginnt, dient der Diskussion; 1.0.0 ist nur für das, was der Verantwortliche der Linie übernommen hat.

## Eigene teilen

- **Eine Projektvorlage:** {{ui:Als Vorlage speichern}} wählen, {{ui:Außerdem eine Datei zum Teilen in der Bibliothek erstellen}} anhaken, angeben, was sie enthält, und eine Version eintragen. Sie erhalten eine `.json`-Datei.
- **Ein Quick Kit:** In {{ui:Kits}} **Quick Kit aus diesem Projekt erstellen** wählen. Es listet die Bibliothekselemente auf, die das Projekt verwendet.
- **Ein Typ:** In {{ui:Typpakete}} einen Typ ankreuzen und {{ui:Als Bibliothekselement speichern…}} wählen.

Laden Sie die Datei auf der Upload-Seite der Bibliothek hoch. Sie durchläuft dieselbe Prüfung wie jedes Element, und dort wählen Sie die Lizenz: Jedes Element nennt seine Lizenz. Für Elemente werden LOD, eine IFC-Klasse und ein Klassifikationscode verlangt (ein Code, nicht nur ein Name).

## Notizen aus der Praxis

Auf der Seite jedes Bibliothekselements können angemeldete Mitglieder eine Notiz hinzufügen: in einem echten Projekt verwendet, an einem Beispielprojekt getestet oder ein Problem gefunden. Nennen Sie in wenigen Worten, um was für ein Projekt es ging, und lassen Sie Kundennamen weg. Eine Notiz ist öffentlich und keine Bewertung: Sie ändert das Element nicht.

## Gut zu wissen

- Aus der App wird nichts übertragen. Die Dateien entstehen auf Ihrem Computer, und Sie laden sie selbst hoch.
- Ein Kit aus einer Vorlage enthält den IFC-Text genau so, wie er gespeichert wurde. Prüfen Sie ihn auf Privates, bevor Sie hochladen.
- CadCraft zeigt Symbole und Assets im Reiter Bibliothek; Typen und Vorlagen sind für BimCraft-Projekte gedacht.
