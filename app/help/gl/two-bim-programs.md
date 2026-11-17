---
title: Traballar entre dous programas BIM
summary: Enviar un modelo dun programa BIM a outro mediante IFC con BimCraft no medio, conservar os seus GlobalId, conxuntos de propiedades e clasificacións, configurar os dous programas para as mesmas propiedades, e ver o que volveu.
keywords: ifc, ida e volta, interoperabilidade, globalid, guid, conxuntos de propiedades, psets, clasificacións, parámetros compartidos, mapeo de propiedades, tradutor, bcf, coordinación, intercambio
from: 9f224176
---

## O que vai facer

Mover un modelo entre dous programas BIM, por exemplo de Revit a Archicad e de volta, mediante IFC, con BimCraft no medio para comprobalo, engadirlle cousas e informar do que sobreviviu. Ningún dos formatos propios dos programas se le: todo viaxa como IFC.

## O que conserva BimCraft

Cando cambia un modelo en BimCraft e preme {{ui:Gardar como IFC}}, cada liña que non cambiou escríbese de novo exactamente como estaba. Así:

- Os **GlobalId** seguen sendo os mesmos, e o outro programa pode relacionar cada elemento co que enviou.
- Os **conxuntos de propiedades** e os seus valores permanecen, agás os valores que cambiou.
- As **clasificacións** seguen unidas aos seus elementos.

## Configurar os dous programas para as mesmas propiedades

1. Abra o modelo en BimCraft (e o paquete do proxecto, se o ten: engádense os seus grupos de propiedades).
2. No panel esquerdo, abra {{ui:Entre dous programas BIM}}.
3. Baixo **Asignación de propiedades**, descargue o que necesita cada programa:
   - {{ui:Parámetros compartidos}}: un ficheiro de parámetros compartidos. En Revit, cárgueo con Manage › Shared Parameters e engada os parámetros ás categorías que os necesiten.
   - {{ui:Conxuntos de propiedades para exportar IFC}}: un ficheiro de conxuntos de propiedades definidos polo usuario. Nos axustes de exportación IFC de Revit, escóllao en conxuntos de propiedades definidos polo usuario, para que o IFC exportado leve o mesmo conxunto e os mesmos nomes de propiedade.
   - {{ui:Táboa de mapa (CSV)}}: cada propiedade co seu conxunto IFC e nome, o seu tipo, e os nomes correspondentes en cada programa. Os ficheiros de mapa de Archicad non son un formato publicado, así que configure o seu tradutor IFC e o xestor de propiedades a partir desta táboa a man.
   - {{ui:Ficheiro de mapa}}: a asignación completa nun só ficheiro, para gardar co proxecto.

Os conxuntos estándar (Pset_ e Qto_) quedan fóra do ficheiro de parámetros compartidos: ambos programas os escriben a partir dos seus propios datos.

## Enviar o modelo e traelo de volta

1. Exporte IFC desde o primeiro programa mantendo os GlobalId (Revit: «Store the IFC GUID in an element parameter after export» activado).
2. Abra o IFC en BimCraft, compróbeo ({{ui:Comprobacións do modelo}}, {{ui:Comprobación de interferencias}}), engada incidencias ({{ui:Incidencias}}, BCF), cambie os valores se fan falta, e prema {{ui:Gardar como IFC}}.
3. Abra o IFC gardado no segundo programa, traballe nel, e exporte IFC desde alí mantendo os GlobalId (tradutor de Archicad: «Global Unique Identifiers: Keep existing»).
4. De volta en BimCraft, abra o modelo que saíu, e logo engada o que volveu ({{ui:Engadir un modelo}} en Modelos).
5. En {{ui:Entre dous programas BIM}}, escolla **Enviado** e **Devolto**, e prema {{ui:Facer o informe}}.

## Ler o informe

- **Elementos**: cantos volveron co mesmo GlobalId, cantos faltan e cantos son novos. Os elementos con GlobalId novo aparecen como un que falta e un novo: o outro programa non o conservou.
- **Clase IFC cambiada**: elementos que volveron como outro tipo de elemento.
- **Valores de propiedade conservados**: a proporción de valores que volveron sen cambios. A lista debaixo mostra as propiedades con máis valores cambiados ou que faltan.
- **Clasificacións**: conservadas, cambiadas (mesmo sistema, outro código) ou que faltan.

{{ui:Descargar o informe (CSV)}} dá cada propiedade cos seus recontos. Para ver que elementos se moveron ou cambiaron de forma, use {{ui:Comparar versións}} sobre os mesmos dous modelos.

:::note
BimCraft non executa ningún dos dous programas. Que axustes levan un valor ao outro lado depende dos axustes IFC de cada programa: o informe mostra o que realmente volveu, así que probe un axuste, exporte de novo e compare.
:::

## As incidencias viaxan como BCF

As incidencias que levanta en BimCraft exporanse como BCF ({{ui:Incidencias}}), que ambos programas poden ler coas súas ferramentas BCF, así que unha pregunta sobre un elemento chega á persoa que traballa no outro programa co seu punto de vista.

Véxase tamén [Abrir un paquete de proxecto](topic:open-project-bundle), [Dun ficheiro de proxecto a BimCraft mediante IFC](topic:rvt-to-ifc) e [Comparar dúas versións dun modelo](topic:compare-versions).
