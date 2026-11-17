---
title: Deshacer entre aplicaciones en CadCraft Studio
summary: Dentro de Studio, BimCraft le indica a Studio cada paso terminado, para que Studio pueda deshacer su último paso en la ventana en la que trabajó por última vez.
keywords: deshacer, studio, entre aplicaciones, deshacer del proyecto, historial, diario, ventana
from: c66dd0c1
---

## Qué hace

En CadCraft Studio, cada ventana de aplicación le avisa a Studio cuando un paso está terminado (un muro dibujado, un conjunto de muros aceptado de un escaneo). Studio guarda esos pasos en el orden en que trabajó y puede pedirle a la ventana que hizo el paso más reciente que lo deshaga, usando el deshacer propio de esa ventana. Ctrl+Z dentro de BimCraft sigue siendo el de BimCraft y también se le informa a Studio.

## Qué debe saber

- Studio solo pide a una ventana que deshaga cuando su lista de deshacer está exactamente como la dejó el paso. Después de Guardar (que inicia una lista de cambios nueva) o después de cambiar el modelo que edita, BimCraft responde que la lista cambió y Studio omite esta ventana. No se fuerza nada.
- Deshacer los efectos de una aplicación en otra no está implementado.
- Fuera de Studio no cambia nada.
- El elemento de menú de Studio que pide deshacer viene con una versión de Studio; hasta entonces, los pasos se informan, pero ningún elemento de menú los usa.

## Siguiente

- [Trabajar en vivo con otros](topic:work-live)
