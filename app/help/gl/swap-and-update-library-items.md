---
title: Cambiar un elemento colocado e actualizar os elementos da biblioteca
summary: Substitúa un elemento colocado da biblioteca por outro, mantendo o seu lugar e o seu número de elemento, e comprobe na Biblioteca se hai versións novas de todo o que hai no modelo.
keywords: cambiar, substituír, substituto, actualizar, versión nova, buscar actualizacións, biblioteca, retirado, cambio de licenza, número de elemento
from: 8bdfe01d
---

## Que vai facer

Cambie de opinión sobre un elemento sen movelo de novo, e manteña actualizados os elementos da biblioteca dun modelo.

## Cambiar un elemento

1. Prema un elemento da biblioteca colocado no modelo.
2. En {{ui:Propiedades}}, prema {{ui:Cambiar elemento…}} no cadro **Elemento da biblioteca**. Ábrese a lapela {{ui:Biblioteca}}.
3. Busque o novo elemento e prema a súa tarxeta.
4. Prema {{ui:Cambiar … por este}}.

O elemento conserva o seu lugar, xiro, piso, número de elemento, cantidade e notas. O seu tipo, forma e datos cambian aos do novo elemento. Os elementos colocados do mesmo xeito comparten un tipo, como ao colocalos.

Un elemento que ten variantes (vexa [Colocar e cambiar un elemento da biblioteca con variantes](topic:library-variants)) amosa as súas outras variantes na parte superior da lapela {{ui:Biblioteca}} cando o cambia: un clic en cada unha.

Cando o novo elemento é un tipo de cousa distinta, por exemplo un lavabo no lugar dunha mesa, a clase IFC do elemento cambia para coincidir (aquí, de elemento de mobiliario a terminal sanitario), para que outro software o inclúa correctamente nos cadros. Segue sendo o mesmo elemento, co mesmo GlobalId, así que as ligazóns cara a el seguen funcionando. {{key:Mod+Z}} restaura a clase antiga co elemento antigo.

## Buscar actualizacións

1. Prema {{ui:Actualizacións}} na barra de ferramentas (ou {{ui:Buscar actualizacións}} no cadro dun elemento da biblioteca).
2. Lea a lista: cada elemento da Biblioteca no modelo coa súa versión no modelo, a última versión e un estado: **Actualizado**, **Versión nova**, **Retirado** ou **Non atopado**. Tamén indica o que cambiou (xeometría, datos, licenza ou unha corrección).
3. Prema {{ui:Actualizar}} nunha fila, ou {{ui:Actualizar todo}}.

## Que debe ver

- "Actualizáronse *n* colocacións. As posicións, os números de elemento, as cantidades e as notas consérvanse."
- Liñas "Actualizado: *elemento*" na lista de cambios. {{key:Mod+Z}} desfai cada unha.

## Cousas que convén saber

- Só se poden comprobar os elementos que proceden da Biblioteca. Os elementos dos ficheiros non levan identificador da biblioteca.
- Cando cambia unha licenza, a copia que xa colocou conserva a licenza coa que chegou ata que a actualice.
- Un elemento **Retirado** non se ofrece para novas colocacións. Un retirado por razóns de copyright non pode descargarse en absoluto; substitúao con {{ui:Cambiar elemento…}}.
- Unha variante colocada segue sendo esa variante cando a versión nova do elemento aínda a ten; se non, toma a variante predeterminada do elemento.
- A comprobación envía só os identificadores e as versións dos elementos, nunca o seu modelo.
