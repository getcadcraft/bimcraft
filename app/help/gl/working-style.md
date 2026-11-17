---
title: Estilo de traballo, vistas duplicadas, plumas no papel, Informar como e modelos
summary: Escolla como se comporta BimCraft segundo a súa forma de traballar, duplique calquera vista como copia propia ou ligada, garde as substitucións de plumas no ficheiro e imprima tal como se ve ou mediante unha táboa de plumas, informe dun elemento como outra clase IFC e comece os proxectos desde as súas propias prantillas.
keywords: estilo de traballo, vista duplicada, duplicar, copiar vista, vista dependente, vista ligada, copia propia, copia de vista, substitucións de plumas, plumas, grosores de liña, imprimir como se ve, táboa de plumas, estilo de trazado, ctb, monocromo, escala de grises, informar como, clase IFC, reclasificar, tipo predefinido, elemento xenérico, laxe como estrada, muro como panel, cuberta como rampla, prantilla de proxecto, prantilla, nova desde prantilla, gardar como prantilla, estándar da oficina
from: 231d98b0
---

## O que vai facer

Configure BimCraft para a súa forma de traballar, duplique vistas, imprímaas como espera, conte os elementos como o que son realmente e comece cada proxecto desde a prantilla da súa oficina.

## Escoller un estilo de traballo

1. Abra {{ui:Configuración}} e a lapela {{ui:BimCraft}}. Busque {{ui:Estilo de traballo}}.
2. Escolla unha opción:
   - {{ui:Cada vista a súa}} (a primeira opción): unha vista duplicada copia as súas anotacións e quedan como propias desa vista; as follas imprímense tal como as mostra a pantalla.
   - {{ui:Anotacións e táboas de plumas compartidas}}: as vistas duplicadas comparten as anotacións; a impresión pasa por unha táboa de plumas.
3. Debaixo da opción hai catro cousas que define. Se cambia unha delas por separado, o estilo pasa a aparecer como {{ui:Personalizado}}.

O estilo de traballo gárdase neste navegador, igual que a disposición do espazo de traballo. Unha prantilla leva o estilo aos proxectos novos.

## Duplicar unha vista

1. No {{ui:Navegador de proxecto}}, cada planta, planta de teito, chamada, alzado e sección ten un botón {{ui:Duplicar}} (dúas follas).
2. Nomee a copia e escolla como se comporta:
   - {{ui:Copia propia}}: os seus debuxos, cotas, recorte, elementos ocultos e plumas cópianse e quedan propios. Editar calquera das dúas vistas non cambia a outra, así que unha vista nunha folla emitida queda como se emitiu.
   - {{ui:Ligado}}: mostra a mesma vista con un só conxunto de anotacións e configuración.
3. A copia aparece en {{ui:Vistas duplicadas}}. Prema nela para abrila; a barra sobre a planta indica que é unha copia, con {{ui:Subir}} para volver á súa vista.
4. O seu botón de control deslizante abre a súa configuración: o nome, {{ui:Intervalo de vista}} (unha copia propia ten o seu), {{ui:Converter en copia propia}} para unha ligada, e {{ui:Eliminar}}.

As copias de alzados e seccións van nas súas propias follas, como as vistas das que proceden. Duplicar é un único paso de desfacer, e as copias gárdanse no IFC xunto ás chamadas.

## Plumas gardadas coa vista e impresas tal como se ven

1. Active {{ui:Debuxar}} e escolla {{ui:Plumas}}.
2. {{ui:Para}} agora lista todas as categorías: muros, portas e xanelas, laxes, cubertas, piares, escaleiras, mobiliario e o resto, e debuxo e cotas.
3. {{ui:Aplicar}} garda a pluma no IFC coa vista que se mostra: unha planta, unha planta de teito, unha chamada ou unha vista duplicada. As plumas feitas antes da versión 0.9 gardáronse no navegador; {{ui:Gardar estas no ficheiro}} as move.
4. As follas e o PDF debuxan cada pluma tal como a pantalla a mostra.

Para imprimir a través dunha táboa de plumas, estableza {{ui:Imprimir}} na fila Plumas en {{ui:Mediante unha táboa de plumas}}, despois escolla unha táboa (cor, monocromo ou escala de grises) ou {{ui:Editar táboa de plumas…}}: cada cor recibe a cor, o grosor e a trama coas que se imprime. A táboa é o ficheiro de estilos de trazado de CadCraft, así que {{ui:Importar…}} admite unha táboa feita na aplicación CadCraft e {{ui:Exportar}} devolve unha. O modelo conserva a súa elección; se non hai ningunha, decide o estilo de traballo.

## Informar dun elemento como outra clase

Unha laxe debuxada como estrada, un muro usado como panel, unha cuberta con forma de rampla: conserve a ferramenta coa que a debuxou e informe de que é o que é.

1. Escolla o elemento e abra {{ui:Propiedades}}. Abra {{ui:Informar como}}.
2. Escriba na caixa de busca para atopar unha clase que encaixe coa forma, escóllaa e o seu tipo predefinido. Para un tipo propio, escolla USERDEFINED e dille un nome.
3. {{ui:Aplicar}} (un paso de desfacer). {{ui:Limpar}} informa de novo del como se debuxou.

Segue editándoo coa ferramenta coa que se debuxou. O IFC gardado escríbeo coa clase informada, así que outros programas, a medición de {{ui:Cantidades}}, Buscar, Cor por, as comprobacións do modelo e {{ui:Problemas}} contano como tal. Os cuadros excluen un muro informado como panel do cuadro de muros, e {{ui:Elementos por clase informada}} lista todos. Funciona en ficheiros IFC4 e IFC2X3; a lista ofrece só as clases que admite a versión IFC do ficheiro. As portas, xanelas, escaleiras, cuartos e niveis conservan a súa propia clase.

## Gardar un proxecto como prantilla e comezar desde ela

1. Con un proxecto aberto, prema {{ui:Gardar como modelo}} xunto a {{ui:Gardar}}.
2. Dea un nome. Marque {{ui:Iniciar os modelos novos a partir dela}} para facela a súa predeterminada, e Tamén descargar o ficheiro de prantilla para compartila como ficheiro IFC.
3. Unha prantilla conserva os niveis, as plantillas de vista e a configuración das vistas, as vistas duplicadas e as chamadas, o debuxo, as plumas e a táboa de plumas, as etiquetas, as familias e os tipos, as follas, os tamaños de folla, os cadros de título e o estilo de traballo. Os muros, as laxes, as portas e os demais elementos do modelo quedan fóra.
4. Prema {{ui:Edificio novo}} e escóllaa en {{ui:Iniciar desde}}, ou escolla {{ui:Un ficheiro de prantilla…}} para unha que lle enviasen. O proxecto novo recibe o seu propio nome e a súa propia identidade de proxecto; todo o demais é como o ten a prantilla.

:::note
As prantillas gárdanse neste navegador. As prantillas de equipo compartidas a través de CadCraft Studio aínda non están feitas: envíe o ficheiro de prantilla no seu lugar.
:::
