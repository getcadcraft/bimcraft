---
title: Estilo de trabalho, vistas duplicadas, canetas no papel, Classificar como e modelos
summary: Escolha como o BimCraft se comporta para a sua forma de trabalhar, duplique qualquer vista como cópia própria ou ligada, mantenha as substituições de canetas no ficheiro e imprima como é apresentado ou através de uma tabela de canetas, classifique um elemento como outra classe IFC e comece os projetos a partir dos seus próprios modelos.
keywords: estilo de trabalho, duplicar vista, duplicar, copiar vista, vista dependente, vista ligada, cópia própria, cópia de vista, substituições de canetas, canetas, espessuras de linha, imprimir como apresentado, tabela de canetas, estilo de impressão, ctb, monocromático, escala de cinzentos, classificar como, classe IFC, reclassificar, tipo predefinido, modelo genérico, laje como estrada, parede como painel, cobertura como rampa, modelo de projeto, modelo, novo a partir de modelo, guardar como modelo, padrão do escritório
from: 231d98b0
---

## O que vai fazer

Configure o BimCraft para a sua forma de trabalhar, duplique vistas, imprima-as como espera, conte os elementos como aquilo que realmente são e comece cada projeto a partir do modelo do seu escritório.

## Escolher um estilo de trabalho

1. Abra {{ui:Definições}} e o separador {{ui:BimCraft}}. Encontre {{ui:Estilo de trabalho}}.
2. Escolha um:
   - {{ui:Cada vista com as suas anotações}} (a primeira opção): uma vista duplicada copia as suas anotações e continuam a ser dessa vista; as folhas são impressas como aparecem no ecrã.
   - {{ui:Anotações e tabelas de canetas partilhadas}}: as vistas duplicadas partilham as anotações; a impressão passa por uma tabela de canetas.
3. Abaixo da escolha estão as quatro coisas que ela define. Altere uma delas isoladamente; o estilo passa então a aparecer como {{ui:Personalizado}}.

O estilo de trabalho é guardado neste navegador, tal como a disposição do espaço de trabalho. Um modelo transporta-o para os novos modelos.

## Duplicar uma vista

1. No {{ui:Navegador do projeto}}, cada planta de piso, planta de teto, chamada, alçado e corte tem um botão {{ui:Duplicar}} (duas folhas).
2. Dê um nome à cópia e escolha o seu comportamento:
   - {{ui:Cópia própria}}: o desenho, as cotas, o recorte, os elementos ocultos e as canetas são copiados e continuam a ser próprios. Editar uma das vistas nunca altera a outra, por isso uma vista numa folha emitida mantém-se como foi emitida.
   - {{ui:Ligado}}: mostra a mesma vista, com um só conjunto de anotações e definições.
3. A cópia fica listada em {{ui:Vistas duplicadas}}. Clique nela para a abrir; a barra acima da planta indica que é uma cópia, com {{ui:Subir}} para voltar à respetiva vista.
4. O botão de deslizador abre as suas definições: o nome, o {{ui:Alcance da vista}} (uma cópia própria tem o seu), {{ui:Tornar cópia própria}} para uma cópia ligada, e {{ui:Eliminar}}.

As cópias de alçados e cortes vão para as suas próprias folhas, tal como as vistas de onde vieram. Duplicar conta como um só passo de anulação, e as cópias ficam guardadas no IFC junto às chamadas.

## Canetas guardadas com a vista, impressas como apresentadas

1. Ative {{ui:Desenhar}} e escolha {{ui:Canetas}}.
2. {{ui:Para}} lista agora todas as categorias: paredes, portas e janelas, lajes, coberturas, pilares, escadas, mobiliário e restantes, e desenho e cotas.
3. {{ui:Aplicar}} mantém a caneta no IFC com a vista apresentada: uma planta, uma planta de teto, uma chamada ou uma vista duplicada. As canetas feitas antes da versão 0.9 eram guardadas no navegador; {{ui:Manter estas no ficheiro}} move-as.
4. As folhas e o PDF desenham cada caneta como aparece no ecrã.

Para imprimir através de uma tabela de canetas, defina {{ui:Imprimir}} na linha Canetas para {{ui:Através de uma tabela de canetas}} e, depois, escolha uma tabela (cor, monocromática, escala de cinzentos) ou {{ui:Editar tabela de canetas…}}: cada cor recebe a cor, a espessura e a trama com que imprime. A tabela é o ficheiro de estilo de impressão do CadCraft, por isso {{ui:Importar…}} aceita uma tabela feita na aplicação CadCraft e {{ui:Exportar}} devolve uma. O modelo mantém a sua escolha; sem nenhuma, decide o estilo de trabalho.

## Classificar um elemento como outra classe

Uma laje desenhada como estrada, uma parede usada como painel, uma cobertura moldada como rampa: mantenha a ferramenta com que a desenhou e classifique-a como aquilo que é.

1. Escolha o elemento e abra {{ui:Propriedades}}. Abra {{ui:Classificar como}}.
2. Escreva na caixa de pesquisa para encontrar uma classe que se adeque à forma, escolha-a e o respetivo tipo predefinido. Para um tipo próprio, escolha USERDEFINED e dê-lhe um nome.
3. {{ui:Aplicar}} (um passo de anulação). {{ui:Limpar}} volta a classificá-lo como foi desenhado.

Continua a editá-lo com a ferramenta com que foi desenhado. O IFC guardado escreve-o como a classe classificada, por isso outros programas, a medição de {{ui:Quantidades}}, Localizar, Colorir por, as verificações do modelo e {{ui:Problemas}} contam-no como essa classe. As tabelas deixam de fora da tabela de paredes uma parede classificada como painel, e {{ui:Elementos por classe classificada}} lista todos eles. Funciona em ficheiros IFC4 e IFC2X3; a lista oferece apenas as classes da versão IFC do ficheiro. Portas, janelas, escadas, compartimentos e pisos mantêm a sua própria classe.

## Guardar um projeto como modelo, e começar a partir dele

1. Com um projeto aberto, clique em {{ui:Guardar como modelo}} ao lado de {{ui:Guardar}}.
2. Dê-lhe um nome. Marque {{ui:Transferir também o ficheiro do modelo}} para o partilhar como ficheiro IFC, e {{ui:Começar novos modelos a partir dele}} para o tornar o seu predefinido.
3. Um modelo guarda os pisos, os modelos de vista e as definições de vista, as vistas duplicadas e as chamadas, o desenho, as canetas e a tabela de canetas, as etiquetas, as famílias e os tipos, as folhas, os formatos de folha, as legendas e o estilo de trabalho. Paredes, lajes, portas e todos os outros elementos do modelo ficam de fora.
4. Clique em {{ui:Novo edifício}} e escolha-o em {{ui:Começar a partir de}}, ou escolha {{ui:Um ficheiro de modelo…}} para um que lhe tenham enviado. O novo projeto recebe o seu próprio nome e a sua própria identidade de projeto; tudo o resto é como o modelo o tem.

:::note
Os modelos são guardados neste navegador. Os modelos de equipa partilhados através do CadCraft Studio ainda não estão implementados: envie o ficheiro do modelo.
:::
