---
title: Eine Typeigenschaft für jedes Element eines Typs ändern
summary: Typeigenschaften von Elementeigenschaften unterscheiden, einen Wert am Typ ändern, sodass jedes Element ihm folgt, und prüfen, dass die eigene Bearbeitung eines Elements dabei eigen bleibt.
keywords: Typ, Element, Typeigenschaften, Familientyp, gemeinsam, Kopie beim Schreiben, alle Elemente, Massenbearbeitung, Hersteller, Modell
from: bffd8789
---

## Was Sie erreichen

Legen Sie den Hersteller für einen Türtyp fest, sodass jede Tür dieses Typs ihn anzeigt, und geben Sie dann einer Tür eine eigene Brandschutzklasse, ohne die anderen zu berühren. Dies zeigt den Unterschied zwischen Typ- und Elementeigenschaften in BimCraft.

## Typ oder Element?

- Eine **Elementeigenschaft** gehört zu einem einzelnen Element: seine Kennzeichnung, seine Marke, sein Raum, seine eigene Brandschutzklasse.
- Eine **Typeigenschaft** gehört zu dem Typ, den viele Elemente teilen: Hersteller, Modell, Breite eines Türtyps.

Im Bereich {{ui:Eigenschaften}} tragen Sätze, die vom Typ stammen, nach ihrem Namen den Zusatz „ (Typ)“ und die Zeile „Typeigenschaft: Eine Änderung hier gilt für jedes Element dieses Typs.“. Jeder andere Satz gehört dem Element selbst. **Typ** im ersten Block zeigt den Namen des Typs.

## Schritte: den Typ ändern

1. Öffnen Sie ein IFC-Modell und klicken Sie auf eine Tür.
2. Notieren Sie ihren **Typ** im ersten Block des Bereichs {{ui:Eigenschaften}}, zum Beispiel „Single-Flush 900 x 2100“.
3. Scrollen Sie zu einem Satz, dessen Name auf „(Typ)“ endet.
4. Klicken Sie auf den Wert, den Sie ändern möchten, zum Beispiel **Hersteller**.
5. Geben Sie den neuen Wert ein und drücken Sie {{key:Enter}}.
6. Sehen Sie in der Liste {{ui:Änderungen}} nach: Der Eintrag endet mit „(Typ)“.
7. Klicken Sie auf eine andere Tür desselben Typs.
8. Prüfen Sie denselben Wert: Auch er zeigt den neuen Wert.

## Schritte: nur ein Element ändern

1. Klicken Sie auf eine Tür.
2. Öffnen Sie einen Satz, dessen Name nicht „(Typ)“ enthält, zum Beispiel `Pset_DoorCommon`.
3. Klicken Sie auf einen Wert, etwa **FireRating**, geben Sie einen neuen Wert ein und drücken Sie {{key:Enter}}.
4. Klicken Sie auf die benachbarte Tür desselben Typs.
5. Prüfen Sie denselben Wert: Er zeigt weiterhin den alten Wert.

Selbst wenn der Exporter denselben Eigenschaftssatz für beide Türen gemeinsam verwendet hat, hat BimCraft der ersten Tür vor der Änderung eine eigene Kopie gegeben. Siehe [Warum Ihre Bearbeitung nur ein Element ändert](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Speichern

1. Klicken Sie auf {{ui:Als IFC speichern}} oder drücken Sie {{key:Mod+S}}.
2. Öffnen Sie die gespeicherte Kopie in BimCraft oder in einem beliebigen IFC-Viewer, um beide Änderungen zu prüfen.

## Häufige Fehler

- **Nicht jedes Modell hat Typen.** Manche Exporter schreiben keine Typobjekte oder legen alles am Element ab. Dann gibt es keine Sätze mit „(Typ)“, und jedes Element muss einzeln geändert werden.
- **Derselbe Wert erscheint in einem Typsatz und in einem Elementsatz.** Manche Exporter schreiben einen Parameter an beiden Stellen. Andere Programme lesen möglicherweise eine der beiden; ändern Sie beide, wenn sie übereinstimmen sollen.
- **Erwarten, „alle Türen dieses Typs“ zu wählen und gemeinsam zu bearbeiten.** In diesem Build gibt es keine Mehrfachauswahl. Eine Typeigenschaft ist der Weg, viele Elemente auf einmal zu ändern.
