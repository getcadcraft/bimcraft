---
title: Desfacer entre aplicacións en CadCraft Studio
summary: Dentro de Studio, BimCraft comunica a Studio cada paso terminado, para que Studio poida desfacer o último paso na ventá na que traballaches por último.
keywords: desfacer, studio, entre aplicacións, desfacer do proxecto, historial, diario, ventá
from: c66dd0c1
---

## Que fai

En CadCraft Studio, cada ventá de aplicación comunica a Studio cando un paso está terminado (un muro debuxado, un conxunto de muros aceptado dunha dixitalización). Studio conserva eses pasos na orde en que traballaches e pode pedirlle á ventá que fixo o último que o desfaga, usando o propio desfacer desa ventá. Ctrl+Z dentro de BimCraft segue sendo propio de BimCraft e tamén se lle comunica a Studio.

## Que hai que saber

- Studio só pide a unha ventá que desfaga cando a súa lista de desfacer está exactamente como a deixou o paso. Despois de Gardar (que inicia unha lista de cambios nova) ou despois de cambiar o modelo que editas, BimCraft responde que a lista cambiou e Studio omite esta ventá. Non se forza nada.
- Desfacer os efectos dunha aplicación noutra non está feito.
- Fóra de Studio non cambia nada.
- A opción do menú de Studio que pide desfacer vén cunha versión de Studio; ata entón os pasos xa se rexistran, pero ningún elemento do menú os usa.

## Seguinte

- [Traballar en directo con outros](topic:work-live)
