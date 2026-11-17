---
title: Deshacer entre aplicaciones en CadCraft Studio
summary: Dentro de Studio, BimCraft informa a Studio cada paso terminado, para que Studio pueda deshacer tu último paso en la ventana en la que trabajaste por última vez.
keywords: deshacer, studio, entre aplicaciones, deshacer del proyecto, historial, diario, ventana
from: c66dd0c1
---

## Qué hace

En CadCraft Studio, cada ventana de aplicación informa a Studio cuando un paso está terminado (un muro dibujado, un conjunto de muros aceptado desde un escaneo). Studio guarda esos pasos en el orden en que trabajaste y puede pedir a la ventana que hizo el último que lo deshaga, usando el propio deshacer de esa ventana. Ctrl+Z dentro de BimCraft sigue siendo el de BimCraft, y también se informa a Studio.

## Qué tenés que saber

- Studio solo pide a una ventana que deshaga cuando su lista de deshacer está exactamente como la dejó el paso. Después de Guardar (que inicia una lista de cambios nueva) o después de cambiar el modelo que editás, BimCraft responde que la lista se movió y Studio omite esta ventana. No se fuerza nada.
- Deshacer los efectos de una app en otra todavía no está hecho.
- Fuera de Studio no cambia nada.
- El elemento del menú de Studio que pide deshacer viene con una versión de Studio; hasta entonces los pasos se informan pero ningún elemento de menú los usa.

## Seguir leyendo

- [Trabajar en vivo con otros](topic:work-live)
</content>
