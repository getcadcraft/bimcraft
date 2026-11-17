---
title: Ler un ficheiro de proxecto ou familia
summary: Abra un ficheiro .rvt, .rfa, .rte ou .rft e lea a súa versión, o traballo compartido, a información do proxecto, os parámetros da familia, as ligazóns e a imaxe de vista previa, sen o programa que o fixo.
keywords: rvt, rfa, rte, rft, ficheiro de proxecto, familia, versión, qué versión, compilación, traballo compartido, central, información do proxecto, vista previa, miniatura, ligazóns
from: df3600e1
---

## Que farás

Descubra o que hai nun ficheiro de proxecto ou familia sen abrilo en Revit: que versión o gardou, se está en traballo compartido, a información do proxecto e a que se liga. Útil cando un ficheiro chega doutra persoa e precisa saber en qué versión abrilo.

## Pasos

1. Prema {{ui:Choose a file}}.
2. Escolla un ficheiro `.rvt`, `.rfa`, `.rte` ou `.rft`.
3. Agarde un momento. A liña de estado di "Lendo o ficheiro…" e despois "Aberto *nome do ficheiro*".
4. Mire a parte superior da tarxeta: a imaxe de vista previa gardada no ficheiro, o tipo de ficheiro e a versión na que se gardou, e o nome do proxecto.
5. Desprácese para ler as seccións da tarxeta.

## Que debe ver

A tarxeta no centro, coas seguintes seccións cando o ficheiro as contén:

| Sección | Que indica |
|---|---|
| Ficheiro | Nome, tamaño, tipo (proxecto, plantilla de proxecto, familia ou plantilla de familia), a versión e a compilación na que se gardou, traballo compartido, a ruta do modelo central, onde se gardou por última vez, quen o gardou, configuración rexional e GUID do documento |
| Información do proxecto | Os campos propios do proxecto, como nome, número, cliente, enderezo e estado. Os campos que aínda teñen os valores predeterminados dun proxecto novo omítense. |
| Familia, Familia: … | Para unha familia: o seu nome, categoría, versión, última actualización e os seus parámetros, grupo a grupo |
| Ligados e ficheiros referenciados | Cada modelo ligado, ligazón CAD, imaxe e táboa de notas que o ficheiro apunta, coa súa ruta gardada |

Na esquerda, o panel {{ui:File}} repite os datos principais e engade **Lido**: canto do ficheiro leu realmente BimCraft, normalmente uns 40 KB dun ficheiro de moitos megabytes. Na dereita, o panel {{ui:Properties}} indica que as propiedades dos elementos precisan o modelo 3D.

## Por que non hai 3D

O modelo 3D e os elementos dentro dun ficheiro de proxecto gárdanse nun formato non documentado. BimCraft le só as partes do ficheiro que están documentadas ou son claramente lexibles: a información do ficheiro, a información do proxecto, os datos da familia, a lista de ligazóns e a imaxe de vista previa. Non adiviña o resto. Para ver o modelo en 3D e ler as propiedades dos elementos, exporte IFC desde o programa que fixo o ficheiro. Consulte [Obter un ficheiro de proxecto en 3D mediante IFC](topic:rvt-to-ifc).

## Erros habituais

- **Esperar 3D.** Vexa o de arriba.
- **As ligazóns só mostran a súa ruta gardada.** Un ficheiro aberto por si só non pode comprobar se existen as súas ligazóns. Abra o cartafol onde vive, e BimCraft marca cada ligazón como atopada ou non: [Abrir un cartafol de proxecto completo](topic:open-project-folder).
- **"Este ficheiro está incompleto…"** O ficheiro cortouse mentres se copiaba, subía ou sincronizaba. Un ficheiro dunha unidade na nube que aínda está "só en liña" tamén fai isto. BimCraft aínda o abre e mostra só o recuperado: un aviso ámbar na parte superior da tarxeta, unha sección **Recuperado deste ficheiro** que lista as partes cuxos bytes están todos no ficheiro, e **Non está no ficheiro** para o resto. Non se completa a parte que falta, así que a versión, a imaxe de vista previa ou a información do proxecto poden faltar cando se gardaron despois do corte. Se incluso a lista de contidos do ficheiro se cortou, non se pode abrir nada. Copie de novo o orixinal e volva abrilo para o ficheiro completo.
- **"Este ficheiro non ten imaxe de vista previa".** Algúns ficheiros gárdanse sen ela. É normal.
- **Abrir unha copia de seguranza por erro.** Os ficheiros con nome como `Tower.0004.rvt` son copias numeradas. Ao abrir o cartafol agrúpanse co seu modelo.
