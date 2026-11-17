---
title: "Políticas predefinidas: defina com que começa um novo edifício"
summary: Indique de uma vez o tipo de parede, os pisos, a primeira folha, as etiquetas LOD, as unidades e a ferramenta com que começa um novo edifício, para projetos métricos e imperiais, e partilhe as políticas pelo escritório como um pequeno ficheiro.
keywords: predefinido, predefinições, políticas predefinidas, política, padrão do escritório, predefinições do escritório, modelo, novo edifício, primeiro tipo de parede, parede métrica, alvenaria, LOD, nível de desenvolvimento, primeira folha, papel, escala, pisos, altura do piso, nomes dos pisos, ferramenta parede, unidades, partilhar, exportar, importar, json
from: 42379aa5
---

## O que vai fazer

Diga ao BimCraft com o que deve começar um novo edifício, para que ninguém no escritório tenha de alterar as mesmas coisas de cada vez. Trata-se de um suplemento: está desligado até o ligar, e uma política que não defina deixa a predefinição do próprio BimCraft exatamente como está.

:::note
Estas são predefinições para edifícios **novos** e coisas **novas**. Um projeto que já começou não é alterado.
:::

## Passos

1. Abra as Definições, vá a {{ui:Suplementos}} e ligue {{ui:Políticas predefinidas}}.
2. Nas Definições, abra o separador **BimCraft** e escolha {{ui:Políticas predefinidas}} na lista à esquerda.
3. Defina as políticas que quiser. Cada uma começa em **do próprio BimCraft**, com o que isso é entre parênteses. Uma política com uma caixa **Métrico** e outra **Imperial** aceita um valor para cada tipo de projeto; preencha apenas as que precisar.
4. Não há botão Guardar: cada alteração é guardada à medida que a faz. Um valor que não pode ser usado é recusado por escrito e o antigo mantém-se.
5. Clique em {{ui:Novo edifício}}. A caixa de diálogo é preenchida com as suas políticas, e cada valor definido por uma política indica **das suas Políticas predefinidas** ao lado. Pode ainda alterar qualquer um deles antes de {{ui:Criar}}.

## As políticas

- **Unidades de um novo edifício**: as unidades passam a este valor ao Criar.
- **Número de pisos**, **Nomes dos pisos** e **Altura do piso**. Num nome, `{n}` conta 1, 2, 3; `{n0}` conta 0, 1, 2; `{nn}` e `{nn0}` fazem o mesmo com dois algarismos. Assim `Piso {nn0}` dá Piso 00, Piso 01, Piso 02.
- **Primeiro tipo de parede**: o que a ferramenta Parede desenha primeiro. Um escritório métrico pode começar com Exterior masonry 300 mm enquanto os projetos imperiais mantêm Exterior 2×6.
- **Etiqueta LOD nos tipos de parede iniciais**: o nível de desenvolvimento (LOD 100 a 500) que os nove tipos iniciais mostram onde quer que um tipo seja listado. Veja [Construir conjuntos de paredes](topic:wall-assemblies).
- **LOD de um tipo de parede novo**: a etiqueta com que um tipo novo começa no editor de tipos. Pode alterá-la aí.
- **Primeira folha**: o seu papel, escala, número e nome da folha (use `{level}` para o nome do piso mais baixo), ou nenhuma primeira folha.
- **Tamanhos de anotação no papel** (Definições › Global › Políticas predefinidas): as alturas do escritório, em milímetros como impressas, para notas, texto de cotas, etiquetas, nomes de compartimentos, letras dos balões de grelha, títulos de vistas e texto de mapas. Um novo edifício toma-as ao Criar e mantém-nas no seu ficheiro. Veja [Desenhar em tamanho real, anotar por escala](topic:annotation-sizes).
- **Ferramenta ativa após Criar**: Selecionar, como o BimCraft faz por si, ou Parede, para que os dois primeiros cliques na planta já desenhem uma parede.

## Layout dos mapas: o padrão do escritório

Em **Definições › Global › Políticas predefinidas**, em **Layout dos mapas (padrão do escritório)**, defina como cada mapa é agrupado, se tem subtotais e um total, o seu título e a capitalização dos cabeçalhos das colunas. Cada mapa que não indique os seus próprios toma-os, seja quem for que o configure. Veja [Criar o layout, guardar e exportar um mapa](topic:schedule-layouts).

## Partilhar pelo escritório

1. Nas Definições, abra o separador **Global** e escolha {{ui:Políticas predefinidas}}.
2. Escreva o **Nome do escritório**, se quiser. Fica escrito no ficheiro.
3. Clique em {{ui:Guardar num ficheiro}}. Obtém um pequeno ficheiro que termina em `.ccdefaults.json`.
4. Noutro computador, ligue o suplemento, abra o mesmo local e clique em {{ui:Carregar de um ficheiro}}. As políticas do ficheiro substituem as desse computador.

O separador Global tem também o **Sistema de unidades de um novo projeto**, que vale para todas as aplicações que tenham o suplemento, e {{ui:Repor todas as políticas}}. {{ui:Repor as predefinições do BimCraft}} no separador BimCraft limpa apenas as do BimCraft.

## Bom saber

- O ficheiro é JSON simples e aberto: uma lista de nomes de políticas e valores. Uma política que o ficheiro indique e que esta versão não conhece fica de fora e é indicada na mensagem; as restantes carregam.
- As políticas ficam guardadas neste navegador, para todas as aplicações CadCraft deste computador. Não são guardadas no ficheiro do edifício, e não são sincronizadas entre computadores: use o ficheiro.
- A etiqueta LOD de um tipo inicial vem da política deste computador. Um tipo que criar como cópia de um inicial leva a sua etiqueta no ficheiro do edifício.
- O BimCraft não tem definição de precisão, por isso não há política de precisão aqui.
- Um edifício iniciado a partir de um modelo traz os pisos e as folhas do próprio modelo. A política do tipo de parede e de unidades continua a aplicar-se.
- Desligue o suplemento e tudo volta a ser do próprio BimCraft. As suas políticas ficam guardadas para quando o voltar a ligar.
