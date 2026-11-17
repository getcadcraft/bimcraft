---
title: Nachbargebäude und Flurstück aus CivilCraft
summary: Übernehmen Sie die Gebäude und das Flurstück, die „Adresse zu Grundstück“ in CivilCraft rund um eine Adresse findet, als Vorschläge, und fügen Sie die angekreuzten hinzu.
keywords: Grundstück, Adresse, Flurstück, Nachbarn, Umfeld, CivilCraft, ccsite, Gebäude, Grundstücksumriss, vorschlagen
from: 3be9407b
---

## Was es tut

In CivilCraft findet Oberfläche › Mehr › Adresse zu Grundstück aus offenen Daten die Gebäude, das Flurstück, die Zonierung, die Überschwemmungszone und den Boden rund um eine Adresse. Die Schaltfläche „An BimCraft als Vorschläge senden“ (oder „Grundstück als Datei speichern“ und dann die `.ccsite.json` hier öffnen) bringt sie zu BimCraft. Nichts wird hinzugefügt, bis Sie es sagen.

## So verwenden Sie es

1. Starten oder öffnen Sie ein Modell. Der Adresspunkt liegt im Ursprung des Geschosses, auf dem Sie sich befinden.
2. Ein Dialogfeld listet jedes Nachbargebäude und das Flurstück mit einem Kontrollkästchen auf. Entfernen Sie das Häkchen bei allem, was Sie nicht wollen.
3. Gebäude, deren Höhe die Quelle nicht angab, verwenden die Höhe, die oben im Dialogfeld eingetragen ist. Ein Gebäude, für das nur die Anzahl der Geschosse angegeben war, zählt 3 m pro Geschoss, und das Dialogfeld sagt es.
4. Drücken Sie „Angekreuzte hinzufügen“. Die Gebäude werden zu Wänden um ihre Grundflächen, so hoch wie aufgelistet, in einem Schritt zum Rückgängigmachen. Das Flurstück wird zum Grundstücksumriss, als zweiter Schritt zum Rückgängigmachen.

Zonierung, Überschwemmungszone und Boden werden nur zur Information aufgelistet; sie werden nicht gezeichnet.

## Was Sie wissen sollten

- Die Umrisse sind so gut wie die offenen Daten: OpenStreetMap und die Flurstücksebenen der Landkreise unterscheiden sich von Ort zu Ort stark. Prüfen Sie, was wichtig ist, anhand einer Vermessung.
- Positionen sind Meter nach Osten und Norden vom Adresspunkt, in einer ebenen Näherung, auf wenige Meter genau innerhalb weniger Kilometer.
- Die Daten tragen die Lizenzen ihrer Quellen (OpenStreetMap ist ODbL); das Dialogfeld zeigt die Quellenangabe.
