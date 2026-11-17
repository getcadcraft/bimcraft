---
title: Cambiar unha propiedade de tipo para cada elemento dun tipo
summary: Distinguir propiedades de tipo de propiedades de instancia, cambiar un valor no tipo para que cada elemento o siga, e comprobar que a edición dun elemento segue sendo só súa.
keywords: tipo, instancia, propiedades de tipo, tipo de familia, compartido, copia ao escribir, todos os elementos, edición en lote, fabricante, modelo
from: bffd8789
---

## O que vai facer

Estableza o fabricante nun tipo de porta para que cada porta dese tipo o mostre, e logo dea a unha porta a súa propia resistencia ao lume sen tocar as outras. Isto mostra a diferenza entre propiedades de tipo e de instancia en BimCraft.

## Tipo ou instancia?

- Unha propiedade de **instancia** pertence a un só elemento: a súa etiqueta, a súa marca, o seu cuarto, a súa propia resistencia ao lume.
- Unha propiedade de **tipo** pertence ao tipo que comparten moitos elementos: fabricante, modelo, largura dun tipo de porta.

No panel {{ui:Propiedades}}, os conxuntos que veñen do tipo levan " (tipo)" despois do seu nome, e a liña "Propiedade de tipo: un cambio aquí aplícase a cada elemento deste tipo." Calquera outro conxunto pertence ao propio elemento. **Tipo** no primeiro bloque mostra o nome do tipo.

## Pasos: cambiar o tipo

1. Abra un modelo IFC e prema nunha porta.
2. Anote o seu **Tipo** no primeiro bloque do panel {{ui:Propiedades}}, por exemplo "Single-Flush 900 x 2100".
3. Desprácese ata un conxunto cuxo nome remate en "(tipo)".
4. Prema o valor que quere cambiar, por exemplo **Manufacturer**.
5. Escriba o novo valor e prema {{key:Enter}}.
6. Mire a lista {{ui:Cambios}}: a entrada remata en "(tipo)".
7. Prema outra porta do mesmo tipo.
8. Comprobe o mesmo valor: tamén amosa o novo valor.

## Pasos: cambiar só un elemento

1. Prema unha porta.
2. Abra un conxunto sen "(tipo)" no nome, por exemplo `Pset_DoorCommon`.
3. Prema un valor, como **FireRating**, escriba un novo valor e prema {{key:Enter}}.
4. Prema a porta do lado, do mesmo tipo.
5. Comprobe o mesmo valor: segue amosando o valor antigo.

Aínda que o exportador compartise ese conxunto de propiedades entre as dúas portas, BimCraft deu á primeira porta a súa propia copia antes de cambialo. Véxase [Por que a súa edición cambia só un elemento](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Gardar

1. Prema {{ui:Gardar como IFC}} ou prema {{key:Mod+S}}.
2. Abra a copia gardada en BimCraft, ou en calquera visor IFC, para comprobar os dous cambios.

## Erros habituais

- **Non todos os modelos teñen tipos.** Algúns exportadores non escriben obxectos de tipo, ou poñen todo na instancia. Entón non hai conxuntos "(tipo)", e cada elemento debe cambiarse por separado.
- **O mesmo valor aparece nun conxunto de tipo e nun de instancia.** Algúns exportadores escriben un parámetro nos dous sitios. Outros programas poden ler un ou outro; cambie os dous se precisa que coincidan.
- **Esperar poder escoller "todas as portas deste tipo" e editalas xuntas.** Nesta versión non hai selección múltipla. Unha propiedade de tipo é a forma de cambiar moitos elementos á vez.
