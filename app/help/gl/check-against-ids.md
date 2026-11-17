---
title: Comprobar un modelo contra o IDS dun cliente
summary: Cargue o ficheiro .ids que lle deron e vexa en Problemas todos os elementos que non o cumpren, antes de entregar o IFC.
keywords: ids, information delivery specification, buildingsmart, requisitos, entrega, comprobación, validación, qa, eir, bep, propiedade, clasificación, material, contratación
from: 7b960222
---

## Que vai facer

Un IDS (Information Delivery Specification, unha norma de buildingSMART) é a lista do que debe conter un IFC: que clases, que propiedades con que valores, clasificacións, materiais e onde debe estar cada cousa. Os clientes e a contratación pública envían un co traballo. BimCraft comproba o modelo IFC aberto contra el e enumera cada elemento que non cumpre.

## Pasos

1. Abra un modelo IFC.
2. Abra {{ui:Comprobar contra un IDS}} no panel esquerdo, en {{ui:Comprobacións do modelo}}, ou escolla {{ui:Comprobar contra IDS…}} do menú do seu estilo de menú.
3. Prema {{ui:Cargar un ficheiro .ids…}} e escolla o ficheiro. Non se envía nada.
4. Lea o resultado: cada especificación con {{ui:Cumpre}} ou {{ui:Non cumpre}} e cantos elementos lle aplican.
5. Abra Problemas ({{key:Ctrl+Shift+M}}) e prema un fallo para seleccionar o elemento e achegarse a el.

## Que debe ver

- Un aviso por cada elemento e requisito que non cumpre, co nome da especificación, o que pide o IDS e o que ten o elemento.
- Unha especificación obrigatoria á que ningún elemento do modelo corresponde é un aviso propio.
- O informe de comprobación (en Problemas) comeza co IDS: o seu título, versión e autor, e os recontos de aplicables, superadas e non superadas de cada especificación.

## Boas a saber

- O IFC garda só unha referencia ao IDS (o seu nome, título, versión e un hash), non o IDS en si: o IDS dun cliente pode ser confidencial, e o IFC vai a outras persoas. O IDS queda neste navegador xunto ao modelo, así que, ao abrir de novo aquí o IFC gardado, compróbase outra vez. Cargar ou esquecer o IDS é un paso que se pode desfacer.
- Se se abre noutro ordenador ou noutro navegador, Problemas mostra unha nota de que non se atopou o IDS: cárgueo de novo para volver comprobalo.
- Para enviar o IDS xunto co IFC, active {{ui:Gardar o IDS dentro do IFC}} en Configuración, na pestana BimCraft, antes de cargalo.
- Cada edición, desfacer e refacer compróbase de novo un momento despois.
- Os valores compáranse ao modo IDS: o texto exactamente (as maiúsculas contan), e os números en unidades SI cunha pequena tolerancia (as lonxitudes en metros, así que un modelo en milímetros se converte antes).
- Unha especificación escrita para outra versión de IFC (por exemplo IFC2X3 cando o modelo é IFC4) compróbase igualmente; o resultado así o indica.
- Se o ficheiro IDS ten fallos que unha auditoría de IDS marcaría, o diálogo os enumera; as especificacións nas que están fallan.
- Pode aceptar un fallo cun motivo, como calquera problema. Segue aceptado mentres os valores do elemento se manteñan.

- Os patróns do IDS léense como o valor completo. Un `^` ao principio e un `$` ao final tómanse tamén como « o valor completo », como a maioría dos ficheiros IDS os entende.

## Seguinte

- [Comprobar un modelo para detectar problemas comúns](topic:model-checks)
- [Cambiar un muro ou unha porta](topic:change-a-wall-or-door)
