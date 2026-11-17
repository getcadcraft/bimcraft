---
title: Deshacer entre aplicaciones en CadCraft Studio
summary: Dentro de Studio, BimCraft comunica a Studio cada paso terminado, para que Studio pueda deshacer su último paso en la ventana con la que trabajó por última vez.
keywords: deshacer, studio, entre aplicaciones, deshacer del proyecto, historial, diario, ventana
from: c66dd0c1
---

## Qué hace

En CadCraft Studio, cada ventana de aplicación informa a Studio cuando un paso está terminado (un muro dibujado, un conjunto de muros aceptado a partir de un escaneado). Studio conserva esos pasos en el orden en que trabajó y puede pedir a la ventana que creó el último que lo deshaga, usando el propio deshacer de esa ventana. Ctrl+Z dentro de BimCraft sigue siendo el de BimCraft y también se comunica a Studio.

## Qué debe saber

- Studio solo pide a una ventana que deshaga cuando su lista de deshacer está exactamente como la dejó el paso. Después de Guardar (que inicia una lista de cambios nueva) o después de cambiar el modelo que edita, BimCraft responde que la lista se ha movido y Studio omite esta ventana. No se fuerza nada.
- Deshacer los efectos de una aplicación en otra todavía no está implementado.
- Fuera de Studio no cambia nada.
- El elemento de menú de Studio que pide el deshacer llega con una versión de Studio; hasta entonces los pasos se notifican, pero ningún elemento de menú los usa.

## Siguiente

- [Trabajar en vivo con otros](topic:work-live)
