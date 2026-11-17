---
title: Liste gestalten, speichern und exportieren
summary: Group a schedule, give it subtotals and totals, add a column read from a property, save it as a set-up in the file, and export it as a spreadsheet workbook (.xlsx), as text to paste into an online sheet, or as CSV. The office standard fills in what a schedule does not state.
keywords: Listenlayout, gruppieren nach, Zwischensumme, Summe, Überschriften, Büro-Standard, Standardrichtlinien, Einrichtung, Türenliste nach Geschoss, Feuerwiderstand, Beschläge, xlsx, Arbeitsmappe, Online-Tabellenblatt, einfügen, CSV, exportieren, Tabellenblatt, Elemente, aus Liste wählen, Wert
from: 95dfd801
---

## Was Sie tun

Machen Sie aus einer einfachen Liste die, die Ihr Büro herausgibt: nach Geschoss, Typ oder Raum gruppiert, mit Zwischensummen und einer Summe, mit den Spalten, die Sie brauchen, unter eigenem Namen. Dann senden Sie sie an ein Tabellenblatt. Jede Zeile und jeder Wert kennt noch die Elemente, aus denen er stammt.

## Schritte

1. Schalten Sie {{ui:Draw}} ein und öffnen Sie **Listen** im linken Bereich. Wählen Sie eine Liste, zum Beispiel **Türen**.
2. Oberhalb der Tabelle wählen Sie **Gruppieren nach** (eine Spalte der Liste, etwa Geschoss oder Typ, oder **Keine Gruppierung**) und **Summen** (**Keine Summen**, **Eine Gesamtsumme** oder **Zwischensummen und Gesamtsumme**). **Wie eingestellt** überlässt die Wahl der gespeicherten Einrichtung oder dem Büro-Standard.
3. Um eine Spalte hinzuzufügen, die aus den Elementen gelesen wird, geben Sie unter der Tabelle einen Eigenschafts- oder Tag-Namen ein (zum Beispiel `FireRating`, `Pset_DoorCommon.FireRating` oder den Namen eines Tags wie `Ironmongery`) und klicken Sie auf **Spalte hinzufügen**. BimCraft liest zuerst die eigenen Eigenschaftssätze des Elements, dann die seines Typs. Hat noch kein Element einen Wert, sagt es das; die Spalte füllt sich von selbst, sobald ein Wert gesetzt ist.
4. Geben Sie einen Namen ein (zum Beispiel „Türenliste nach Geschoss“) und klicken Sie auf **Als Einrichtung speichern**. Die Einrichtung wird in der Gebäudedatei gespeichert und erscheint unter ihrem Namen in der Liste **Listen**. Sie folgt jeder Änderung des Modells. **Diese Einrichtung entfernen** nimmt sie wieder heraus. Beides ist ein Schritt für Rückgängig.

## Klicken Sie auf einen Wert, um auszuwählen, woher er stammt

Klicken Sie auf eine beliebige Zeile oder einen einzelnen Wert, um die dahinterliegenden Elemente im Grundriss und in 3D auszuwählen:

- eine Zeile wählt die Elemente dieser Zeile;
- eine Zwischensumme oder eine Gesamtsumme wählt alles, was sie addiert; eine Gruppenüberschrift wählt ihre Gruppe;
- ein Wert mit eigenen Elementen wählt diese: die **Abzüge** eines Wandtyps wählen seine Türen und Fenster, der Wandbereich eines Raums seine Wände.

Dasselbe funktioniert in einem Dokument aus dem Modell: Klicken Sie in der Vorschau auf einen Wert einer Liste.

## Export

- **Excel herunterladen** speichert eine .xlsx-Arbeitsmappe. Längen, Flächen, Volumen und Anzahlen sind echte Zahlen in der Einheit, die die Spalte zeigt (Fuß und Zoll bleiben Text). Ein zweites Blatt, **Elements**, listet für jede Zeile die GlobalIds der Elemente dahinter.
- **Für Google Sheets kopieren** legt die Liste als tabulatorgetrennten Text in Ihre Zwischenablage. In einem Google-Tabellenblatt klicken Sie auf Zelle A1 und fügen ein. **Neues Google Sheet öffnen** öffnet `sheets.new`, Googles eigene Adresse für ein leeres Tabellenblatt, in Ihrem eigenen Google-Konto. BimCraft meldet Sie nicht bei Google an und sendet dorthin nichts: Das Einfügen liegt bei Ihnen.
- **CSV herunterladen** speichert die Tabelle so, wie sie auf dem Bildschirm angeordnet ist.

## Der Büro-Standard

Ein Büro kann einmal festlegen, wie seine Listen angeordnet sind. Schalten Sie das Add-on **Default Policies** ein ([Default Policies](topic:default-policies)) und stellen Sie unter **Einstellungen › Global › Default Policies › Listenlayout (Büro-Standard)** ein:

| Richtlinie | Was sie tut |
|---|---|
| Listen gruppieren nach | Geschoss, Typ, Raum oder keine Gruppierung, für jede Liste mit einer solchen Spalte |
| Summen in Listen | Keine Summen, eine Summe am Ende oder eine Zwischensumme unter jeder Gruppe und eine Gesamtsumme |
| Listentitel | Ein Muster, zum Beispiel `{project}: {schedule}` |
| Spaltenüberschriften | Wie geschrieben, IN GROSSBUCHSTABEN oder Mit Großbuchstaben |

Der Standard gilt für jede Liste, unabhängig davon, wer sie einrichtet: die einfachen Listen im Bereich, eine gespeicherte Einrichtung, eine Liste, die ein Assistent einrichtet, die Exporte und die Listen in einem Dokument. Eine Einrichtung, die ihre eigene Gruppierung, Summen oder ihren eigenen Titel angibt, behält sie; der Standard ergänzt den Rest. Der Bereich zeigt an, welche Teile der Büro-Standard festgelegt hat. Die Richtlinien reisen in der Default-Policies-Datei mit den anderen.

## Gut zu wissen

- Eine Einrichtung nennt ihre Quellliste und ihre Spalten; sie enthält keine Zahlen. Die Zahlen werden jedes Mal aus dem Modell gelesen.
- Listen, die keine Elementzeilen sind (die Wandaufbauten und die Materiallegende), haben hier kein Layout und keinen Export.
- Ein Assistent kann all das für Sie tun: siehe [Einen KI-Assistenten mit Ihrem Modell arbeiten lassen](topic:assistants).
