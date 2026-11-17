---
title: Wände und Türen aus einem Handy- oder Laserscan
summary: Verwandeln Sie einen Scan eines Raums in vorgeschlagene Wände, Türen und Räume, die Sie einzeln annehmen.
keywords: Scan, Handyscan, Lidar, Punktwolke, Wände aus Scan, Türen aus Scan, Raumscan, PLY, E57, LAS, OBJ, vorschlagen
from: a4ef0f10
---

## Was es tut

Mit einem geöffneten Scan (eine Punktwolke wie PLY, E57 oder LAS, oder ein Netz wie OBJ) schneidet BimCraft den Scan auf Grundrisshöhe, dreht ihn rechtwinklig zum Gebäude und sucht nach langen, dünnen Reihen von Punkten: Das sind Wände. Eine Lücke von etwa Türbreite zwischen zwei Reihen auf einer Linie wird zu einer Wand mit einer Tür darin. Die Wände, die einen Raum schließen, bilden einen Raum.

Nichts wird gezeichnet, bis Sie es annehmen. Die Wände und Türen kommen als Liste von Vorschlägen (es sind Änderungen im Modus Vorschlagen): Behalten Sie die richtigen, verwerfen Sie die anderen. Alles, was Sie behalten, wird in einem Schritt für Rückgängig gezeichnet. Die Räume erscheinen von selbst.

## Was es prüft

Wände, die nicht schließen, Wandreihen, die kürzer sind als eine Wand dick ist, und eine türgroße Lücke ohne Wand darum werden als Probleme mit einer Position gemeldet, damit Sie den Scan dort ansehen können.

## Ungeprüft, bis es kontrolliert ist

Die Wände, Türen und Räume, die Sie aus einem Scan annehmen, sind als ungeprüft markiert: ein gestrichelter Kasten und ein „?“ im Grundriss, bis Sie sie als geprüft markieren. Siehe [Elemente als geprüft oder vor Ort verifiziert markieren](topic:verification).

## Was es nicht kann

- Es findet Wände, die in zwei rechtwinklig zueinander stehenden Richtungen verlaufen. Eine schräge oder gekrümmte Wand wird nicht gefunden.
- Ein Geschoss nach dem anderen. Fenster werden nicht gefunden (ein Fenster ist nur eine Lücke, wenn der Schnitt auf Brüstungshöhe liegt).
- Es wurde an erzeugten Raumscans und Netzen getestet, noch nicht an Scans eines echten Handys. Wie gut es bei einem echten Scan arbeitet (Drift bei einem langen Rundgang, Möbel vor Wänden, Glas, offene Türen), ist nicht bekannt; das Abstimmen an echten Scans ist der nächste Schritt. Prüfen Sie jeden Vorschlag gegen den Scan, bevor Sie ihn annehmen.
