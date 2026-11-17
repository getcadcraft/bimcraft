---
title: Campos do panel de propiedades
summary: Que significa cada campo do panel Propiedades e dos paneis Ficheiro, Debuxo e Cartafol, e cales pode cambiar.
keywords: propiedades, campos, atributos, globalid, guid, copiar, copiar valor, copiar todo, csv, portapapeis, número de serie, etiqueta, tipo de obxecto, liña, express id, conxunto de propiedades, pset, cantidades, esquema, panel de ficheiro
from: fe55b435
---

## Un elemento IFC

A parte superior do panel {{ui:Properties}} mostra o tipo do elemento sen o prefixo "Ifc" (por exemplo "Door", "WallStandardCase", "FurnishingElement") e o seu nome, ou "Sen nome".

| Campo | Significado | Editable |
|---|---|---|
| Nome | O nome do elemento, moitas veces o nome da familia e do tipo que xera o exportador | Sí |
| Tipo | O nome do tipo do elemento, cando o ten | Non |
| Tipo de obxecto | Unha descrición de tipo en texto libre que algúns exportadores completan | Sí |
| Etiqueta | A etiqueta ou marca do elemento; moitos exportadores aquí escriben o ID do elemento | Sí |
| Descrición | Texto libre | Sí |
| GlobalId | O identificador IFC permanente de 22 caracteres do elemento, o mesmo en cada exportación do mesmo elemento | Non |
| Liña | O número de liña do elemento (`#1234`) neste ficheiro IFC. Cambia entre exportacións | Non |

Máis abaixo aparecen os **conxuntos de propiedades**, ordenados por nome:

- Cada conxunto ábrese e pécha ao premer o seu nome. Os tres primeiros están abertos.
- Un conxunto marcado "(tipo)" pertence ao tipo do elemento: "Propiedade de tipo: un cambio aquí aplícase a cada elemento deste tipo."
- Os conxuntos de cantidades (lonxitudes, superficies, volumes, contos, pesos) son só de lectura.
- As listas e os valores enumerados móstranse, só de lectura.
- Os valores Sí/Non mostran **Sí** ou **Non**.
- Os números redondéanse a catro decimais para a visualización. As lonxitudes (unha propiedade de lonxitude ou a lonxitude dunha cantidade) mostran nas {{ui:Units}} escollidas na barra de ferramentas, coa unidade ao lado, e pode escribir un valor novo nesa unidade ou con outra marca de unidade (2,4 m, 8'-0"): BimCraft escribe de volta o número propio do ficheiro. Os demais números mostran como os ten o ficheiro.
- Un valor baleiro mostra *baleiro*. Un valor editado aparece en negriña cunha barra azul ao lado.

## Copiar un valor

Cada valor en {{ui:Properties}} ten un pequeno botón de copia ao lado: prémao para pór ese valor no portapapeis exactamente como se mostra, por exemplo un GlobalId, un número de serie ou calquera valor dun conxunto de propiedades. Copiar nunca inicia unha edición.

Na parte superior, {{ui:Copy all}} copia todos os valores do elemento como texto, conxunto a conxunto, e {{ui:Copy as CSV}} copia filas de grupo, propiedade e valor para pegar nunha folla de cálculo; os valores baleiros consérvanse para que cada campo teña unha fila. Isto funciona igual para un elemento doutro modelo aberto; cando hai máis dun modelo aberto, o CSV comeza cunha columna Modelo que indica o seu ficheiro.

## O panel Ficheiro (IFC)

| Campo | Significado |
|---|---|
| Ficheiro, Tamaño | O ficheiro que abriu |
| Esquema | A versión de IFC, como IFC2X3 ou IFC4 |
| Proxecto | O nome do proxecto e o seu nome longo |
| Fase | A fase do proxecto, se o exportador a escribiu |
| Exportado desde | O programa exportador, desde a cabeceira do ficheiro |
| Autor | O autor na cabeceira do ficheiro |
| Exportado | A data e a hora na cabeceira do ficheiro |
| Elementos | Cantos elementos con forma se debuxaron |
| Triángulos | Cantos triángulos fan as súas formas; unha medida do peso do modelo |

## O panel Ficheiro (proxecto e ficheiros de familia)

| Campo | Significado |
|---|---|
| Tipo | Proxecto, Plantilla de proxecto, Familia ou Plantilla de familia |
| Gardado en | A versión que gardou o ficheiro por última vez |
| Compilación | A compilación exacta desa versión |
| Lido | Canto do ficheiro leu BimCraft, do seu tamaño total |

## O panel Debuxo (DWG e DXF)

| Campo | Significado |
|---|---|
| Formato | A versión na que se gardou o debuxo, co seu código de formato, como AC1032 |
| Unidades | As unidades de inserción do debuxo, cando están definidas |
| Entidades | Cantos obxectos se leron |
| Capas | Cantas capas hai |
| Follas | Cantas follas (layouts) hai, ou Ningunha |
| Debuxos ligados | Cantos dos seus debuxos ligados se atoparon e cargaron |
| Equipos | Cantos elementos de equipos etiquetados hai nas follas |

## O panel Cartafol

| Campo | Significado |
|---|---|
| Cartafol, Ficheiros, Tamaño | O cartafol que abriu, cantos ficheiros contén e o seu tamaño total |
| Modelos | Ficheiros de proxecto e de familia, cada un coas súas copias de seguranza contadas unha vez |
| Debuxos CAD, modelos IFC | Cantos hai de cada un |
| Problemas | Cantas copias de modelos están incompletas ou son ilexibles, ou Ningún |
