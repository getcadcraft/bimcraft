---
title: Bauteile ausblenden, isolieren und transparent darstellen
summary: Mehrere Bauteile wählen, sie ausblenden, nur sie anzeigen oder sie anzeigen, während alles andere transparent ist, und danach alles wieder einblenden.
keywords: ausblenden, isolieren, transparent, Geist, Röntgen, alle einblenden, einblenden, mehrere auswählen, Mehrfachauswahl, Ctrl-Klick, Shift-Klick, Sichtbarkeit
from: 97e98b8c
---

## Was Sie tun

Die Ansicht auf das reduzieren, was Sie betrachten: Bauteile ausblenden, die im Weg sind, nur die gewählten anzeigen oder alles Übrige als schwachen Umriss auf dem Bildschirm lassen, damit Sie noch wissen, wo Sie sind.

## Schritte

1. Öffnen Sie ein IFC-Modell. Siehe [IFC-Modell öffnen und in 3D umsehen](topic:open-ifc-model).
2. Klicken Sie ein Bauteil an, um es zu wählen. Um weitere zu wählen, halten Sie {{key:Mod}} oder {{key:Shift}} gedrückt und klicken Sie jedes an. Ein so gewähltes Bauteil erneut anzuklicken, nimmt es wieder heraus.
3. Öffnen Sie {{ui:Anzeigen}} in der Symbolleiste und wählen Sie die Aktion oder drücken Sie deren Taste:
   - {{ui:Ausblenden}} ({{key:H}}) blendet die gewählten Bauteile aus.
   - {{ui:Isolieren}} ({{key:I}}) zeigt nur die gewählten Bauteile.
   - {{ui:Transparent}} ({{key:T}}) zeigt die gewählten Bauteile, wie sie sind, und alles andere transparent.
4. Klicken Sie {{ui:Alle einblenden}} im selben Menü an oder drücken Sie {{key:Shift+H}}, um jedes Bauteil wieder anzuzeigen.
5. Um stattdessen alles um die gewählten Bauteile herum abzuschneiden, klicken Sie {{ui:Schnittbox um die Auswahl}} im selben Menü an oder drücken Sie {{key:Shift+X}}. Siehe [IFC-Modell mit einer Schnittebene schneiden](topic:section-plane).

## Was Sie sehen sollten

- Sind mehrere Bauteile gewählt, nennt {{ui:Eigenschaften}} deren Anzahl und listet sie nach Klasse. Klicken Sie ein einzelnes an, um seine Eigenschaften zu sehen.
- Ausgeblendete Bauteile lassen sich nicht wählen: Ein Klick trifft, was dahinter liegt.
- Transparente Bauteile lassen sich ebenfalls nicht wählen, sodass Sie durch Wände hindurch auf das klicken können, was Sie isoliert haben.
- Kanten werden zusammen mit ihrem Bauteil ausgeblendet und mit ihm schwach dargestellt.
- Ausblenden, Isolieren und Transparent bleiben erhalten, während Sie bearbeiten, Bibliothekselemente platzieren oder das Modell mit einer Schnittebene schneiden. Das Öffnen eines anderen Modells zeigt wieder alles.

## Häufige Fehler

- **Die Menüpunkte sind ausgegraut.** Nichts ist gewählt. Klicken Sie zuerst ein Bauteil an; zeigen Sie auf einen Punkt, um zu lesen, warum er nicht funktioniert.
- **Isolieren zeigte eine Wand, die ich ausgeblendet hatte.** Isolieren zeigt genau das, was Sie gewählt haben, ausgeblendet oder nicht.
- **Ein ganzes Geschoss fehlt.** Das liegt an der Liste {{ui:Geschosse}}, nicht an {{ui:Alle einblenden}}: Haken Sie das Geschoss erneut an.

## Weiter

- [Geschosse, Räume und Kanten ein- und ausblenden](topic:storeys-and-spaces)
- [IFC-Modell mit einer Schnittebene schneiden](topic:section-plane)
