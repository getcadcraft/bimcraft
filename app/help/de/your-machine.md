---
title: Womit Ihr Rechner rendert
summary: Einstellungen › Rendering zeigt die Grafik, Prozessorkerne und den Speicher, die dieser Browser der App zur Verfügung stellt, sowie die Stufe, die festlegt, wo das Rendering beginnt.
keywords: Ihr Rechner, Grafikkarte, GPU, WebGPU, WebGL, Prozessor, CPU, Kerne, Threads, Speicher, RAM, gemeinsamer Speicher, Isolation, Stufe, Geschwindigkeit, langsam, Renderinggeschwindigkeit, Laptop
from: 360f2375
---

Öffnen Sie {{ui:Einstellungen}} ({{key:Mod+,}}), bleiben Sie auf der eigenen Registerkarte dieser App und scrollen Sie zu {{ui:Rendering}}. {{ui:Ihr Rechner}} listet auf, was dieser Browser der App für das Rendering zur Verfügung stellt. Nichts davon verlässt Ihren Computer.

| Zeile | Was sie bedeutet |
|---|---|
| {{ui:Grafik}} | Die Grafikkarte, die der Browser meldet. "WebGPU" bedeutet, dass sie die Renderarbeit erledigen kann; "WebGL 2 only" bedeutet, dass es kein WebGPU gibt: die Live-Ansicht und hochwertige Bilder nutzen die Grafikkarte über WebGL 2 (Bilder mit dem älteren WebGL-Path-Tracer, ohne die Zusatzfunktionen, die WebGPU brauchen); ein Software-Ersatz bedeutet, dass alles auf dem Prozessor läuft |
| {{ui:Prozessor}} | Wie viele Prozessorkerne der Browser meldet |
| {{ui:Arbeitsspeicher}} | Ungefähr wie viel Speicher der Computer hat, wenn der Browser es meldet. Manche Browser tun das nicht |
| {{ui:Gemeinsamer Speicher}} | Ob die Seite Speicher zwischen ihren Workern teilen darf. Ein: Jeder Kern kann an einer Kopie einer Szene arbeiten; aus: Jeder braucht eine eigene Kopie, sodass eine große Szene auf weniger Kernen gleichzeitig Platz findet |
| {{ui:Schneller Prozessorcode}} | Ob der Browser den schnelleren WebAssembly-Code ausführt. Ohne ihn wird ein langsamerer Ersatz verwendet |
| {{ui:Geschoss}} | {{ui:Grafikkarte, hoch}}, {{ui:Grafikkarte, einfach}} oder {{ui:Nur Prozessor}}, mit dem Grund darunter |

## Die Stufe

Die Stufe legt fest, wo das Rendering beginnt, damit ein Laptop mit einem eingebauten Grafikchip oder ganz ohne Grafikkarte reaktionsfähig bleibt. Ein eingebauter oder Smartphone-Grafikchip oder 4 GB Speicher oder weniger erhält nie {{ui:Grafikkarte, hoch}}.

:::note
Browser unterscheiden sich. Derselbe Computer kann in einem Browser WebGPU und in einem anderen "WebGL 2 only" anzeigen. Unter Linux haben die meisten Browser noch kein WebGPU.
:::
