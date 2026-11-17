---
title: Documentos a partir do modelo
summary: Escriba unha vez unha especificación ou unha descrición como plantilla, con campos para cantidades, propiedades e etiquetas, e enchéaa desde o IFC aberto como PDF ou documento de Word.
keywords: documento, documentos, especificación, especificación técnica, descrición, plantilla, markdown, informe, word, docx, pdf, cantidades, cadro, oficio, cadro de portas, acabados, documentcad
from: 2b0c9156
---

## Que vai facer

Unha plantilla é un texto en Markdown con campos entre dobres chaves. BimCraft enche os campos a partir do modelo aberto (contas, cantidades por tipo, propiedades, as súas [etiquetas](topic:tags-and-schedules)) e garda o resultado como PDF, documento Word (.docx) ou Markdown.

## Pasos

1. Abra un modelo IFC.
2. No panel esquerdo, baixo {{ui:Cantidades}}, abra {{ui:Documentos do modelo}}.
3. Escolla unha plantilla: {{ui:Portas e ferraxaría}} ou {{ui:Muros, forros e acabados}}, ou {{ui:Cargar unha plantilla (.md)…}} para a súa propia.
4. Se a plantilla lee etiquetas que o modelo aínda non define, faga clic en {{ui:Engadir as etiquetas desta plantilla}}, e despois etiquete elementos baixo {{ui:Etiquetas}}.
5. Cambie o texto como quere e faga clic en {{ui:Mostrar o documento}}.
6. Faga clic en {{ui:PDF}} (escolla antes A4 ou Letter) ou en {{ui:Word (.docx)}}.

## O que debe ver

- O documento enchido baixo os botóns, cos seus cadros.
- Unha lista de avisos cando un campo non se pode ler (unha etiqueta non definida, unha propiedade que o modelo non ten, un bloque que nunca se pecha); un campo así imprímese como `[?…]`.
- Páxinas PDF co título do documento e "Páxina 1 de 3" ao pé de cada páxina; as táboas longas pasan á páxina seguinte coa súa fila de cabeceira.

## Campos

| Campo | Dá |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | o nome e a descrición do proxecto, o nome do ficheiro, hoxe |
| `{{count IfcDoor}}` | cantas portas |
| `{{sum IfcWall NetSideArea}}` | un total, coa súa unidade |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | aritmética (`+ - * /` e parénteses) sobre termos entre corchetes: `[sum …]`, `[count …]`, e dentro dun each `[qty Width]`. `round n` fixa os decimais, `unit` engade unha unidade. Algo que non pode ler, ou unha división por cero, imprime `[?…]` e avisa |
| `{{qty IfcWall NetSideArea by Type}}` | unha táboa: unha fila por tipo coa súa conta e total, e unha fila de total |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | unha táboa, unha fila por elemento |
| `{{tag Finish}}` | nun bucle, o valor do elemento; noutro lugar, cada valor usado (Carballo, Pintura) |
| `{{tags}}` | as definicións de etiquetas como táboa |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | o texto unha vez por elemento; a parte despois de `{{else}}` cando non hai ningún |
| `{{#group IfcWall by Type}} … {{/group}}` | o texto unha vez por tipo, con `{{value}}`, `{{count}}`, `{{sum Length}}` e un `{{#each}}` simple dentro |

Dentro de `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (a Etiqueta IFC), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (o propio do elemento, coa súa unidade).

Unha clase pode ser varias (`IfcDoor|IfcWindow`) ou todos os elementos (`*`). Restrinxa calquera delas con `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. As probas son `=`, `!=`, `~` (contén), `>`, `<`, `>=`, `<=`, `has` e `hasnot`; una varias con `and`; escriba un valor con espazos entre "aspas". `sort Name` ordena un bucle.

## Cadros e a especificación nun documento

`{{schedule doors}}` imprime un cadro do modelo como táboa, coa súa disposición de oficina: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, ou o nome dunha configuración que gardou en Cadros. `{{specification}}` imprime a especificación do proxecto. As plantillas **Cadros de planos de obra** e **Especificación** usan estes. Na vista previa, faga clic nunha cifra dun cadro deste tipo para seleccionar os elementos de onde vén. Vexa [Dispor, gardar e exportar un cadro](topic:schedule-layouts) e [Escribir a especificación a partir do modelo](topic:specification).

## Cousas que convén saber

- Un campo nomea un integrado (Name, Type, Storey, Class, Material, Mark), unha etiqueta (`tag:Fire rating`, ou o seu nome), unha propiedade (`Pset_WallCommon.FireRating`) ou só o nome dunha propiedade (`NetSideArea`, `Width`): un nome sen máis le o conxunto de cada elemento, primeiro os conxuntos de cantidades, así que `Width` nunha porta é a anchura da porta, non o grosor dun muro. Dentro de `where`, un nome sen máis le o conxunto que teñen a maioría dos elementos escollidos.
- As cantidades son o que di os conxuntos de cantidades do ficheiro (BimCraft escríbeos para o que debuxa); as unidades veñen dos axustes de unidades do ficheiro.
- As palabras de campo (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) quedan en inglés en todas as linguas. As plantillas de exemplo están en inglés.
- O texto do modelo nunca se converte en formato: un nome cun `*` ou `|` imprímese tal cal.
- Garde unha plantilla que cambiou con {{ui:Gardar neste navegador}} (só este navegador a ten) ou {{ui:Descargar a plantilla}}.
- O texto do PDF usa as fontes PDF estándar: un carácter fóra do texto da Europa occidental imprímese como "?" e a liña de estado indica cantos son.
- As plantillas por oficio viven na Biblioteca (tipo Plantilla de documento). En Documentos a partir do modelo, escolla Desde a Biblioteca…, escolla unha, e entran o seu texto e as etiquetas que lee; edítea como quera. Publicar a súa propia plantilla na Biblioteca é a mesma subida que calquera outro elemento. Aínda non se fai: cálculos alén de contas e totais.
