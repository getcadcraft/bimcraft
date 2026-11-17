---
title: "Políticas padrão: defina com o que um novo edifício começa"
summary: Diga uma vez qual tipo de parede, níveis, primeira folha, etiquetas LOD, unidades e ferramenta um novo edifício começa, para projetos métricos e imperiais, e compartilhe as políticas no escritório como um pequeno arquivo.
keywords: padrão, padrões, políticas padrão, política, padrão do escritório, padrões do escritório, modelo, novo edifício, primeiro tipo de parede, parede métrica, alvenaria, LOD, nível de desenvolvimento, primeira folha, papel, escala, níveis, altura do nível, nomes dos níveis, ferramenta de parede, unidades, compartilhar, exportar, importar, json
from: 42379aa5
---

## O que você vai fazer

Diga ao BimCraft com o que um novo edifício deve começar, para que ninguém no escritório precise alterar as mesmas coisas toda vez. Isto é um complemento: ele fica desligado até você ativá-lo, e uma política que você não define deixa o padrão do próprio BimCraft exatamente como está.

:::note
Estes são padrões para edifícios **novos** e coisas **novas**. Um projeto que você já começou não é alterado.
:::

## Passos

1. Abra as Configurações, vá a {{ui:Complementos}} e ative {{ui:Políticas padrão}}.
2. Em Configurações, abra a guia **BimCraft** e escolha {{ui:Políticas padrão}} na lista à esquerda.
3. Defina as políticas que quiser. Cada uma começa no padrão do próprio BimCraft, indicado entre parênteses. Uma política com uma caixa **Métrico** e uma caixa **Imperial** recebe um valor para cada tipo de projeto; preencha apenas as que precisar.
4. Não há botão Salvar: cada alteração é salva assim que você a faz. Um valor que não pode ser usado é recusado com uma explicação em texto, e o antigo permanece.
5. Clique em {{ui:Nova edificação}}. A caixa de diálogo é preenchida com suas políticas, e cada valor definido por uma política mostra **das suas Políticas padrão** ao lado. Você ainda pode alterar qualquer um deles antes de {{ui:Criar}}.

## As políticas

- **Unidades de uma nova edificação**: as unidades mudam para esta ao criar.
- **Número de níveis**, **Nomes dos níveis** e **Altura do nível**. Em um nome, `{n}` conta 1, 2, 3; `{n0}` conta 0, 1, 2; `{nn}` e `{nn0}` fazem o mesmo com dois dígitos. Assim, `Pavimento {nn0}` gera Pavimento 00, Pavimento 01, Pavimento 02.
- **Primeiro tipo de parede**: o que a ferramenta Parede desenha primeiro. Um escritório métrico pode começar com Alvenaria externa 300 mm, enquanto projetos imperiais mantêm Externa 2×6.
- **Etiqueta LOD nos tipos de parede iniciais**: o nível de desenvolvimento (LOD 100 a 500) que os nove tipos iniciais mostram onde quer que um tipo seja listado. Veja [Montar conjuntos de parede](topic:wall-assemblies).
- **LOD de um tipo de parede novo**: a etiqueta com que um novo tipo começa no editor de tipos. Você pode alterá-la ali.
- **Primeira folha**: o papel, a escala, o número e o nome da folha (use `{level}` para o nome do nível mais baixo), ou nenhuma primeira folha.
- **Tamanhos de anotação no papel** (Configurações › Geral › Políticas padrão): as alturas do escritório, em milímetros como impressos, para notas, textos de cota, etiquetas, nomes de ambientes, letras de balões de grade, títulos de vista e texto de tabela. Um novo edifício os recebe ao criar e os mantém no arquivo. Veja [Desenhar em tamanho real, anotar por escala](topic:annotation-sizes).
- **Ferramenta ativa após Criar**: Selecionar, como o BimCraft faz por conta própria, ou Parede, para que os dois primeiros cliques na planta já desenhem uma parede.

## Layout de tabelas: o padrão do escritório

Em **Configurações › Geral › Políticas padrão**, em **Layout de tabela (padrão do escritório)**, defina como cada tabela é agrupada, se tem subtotais e um total, seu título e a capitalização dos cabeçalhos das colunas. Toda tabela que não declara os próprios usa esses, quem quer que a tenha criado. Veja [Organizar, salvar e exportar uma tabela](topic:schedule-layouts).

## Compartilhe no escritório

1. Em Configurações, abra a guia **Geral** e escolha {{ui:Políticas padrão}}.
2. Digite o **Nome do escritório**, se quiser. Ele é gravado no arquivo.
3. Clique em {{ui:Salvar em um arquivo}}. Você recebe um pequeno arquivo terminado em `.ccdefaults.json`.
4. Em outro computador, ative o complemento, abra o mesmo lugar e clique em {{ui:Carregar de um arquivo}}. As políticas do arquivo substituem as desse computador.

A guia Geral também tem o **Sistema de unidades de um novo projeto**, que vale para todo aplicativo que tiver o complemento, e {{ui:Redefinir todas as políticas}}. {{ui:Redefinir para os padrões do BimCraft}} na guia BimCraft limpa apenas as do BimCraft.

## Bom saber

- O arquivo é um JSON simples e aberto: uma lista de nomes de políticas e valores. Uma política que o arquivo cita e esta versão não conhece fica de fora e é citada na mensagem; o restante ainda é carregado.
- As políticas ficam guardadas neste navegador, para todos os aplicativos CadCraft deste computador. Não são gravadas no arquivo do edifício e não são sincronizadas entre computadores: use o arquivo.
- A etiqueta LOD de um tipo inicial vem da política deste computador. Um tipo que você cria como cópia de um inicial leva a sua etiqueta no arquivo do edifício.
- O BimCraft não tem configuração de precisão, então não há política de precisão aqui.
- Um edifício iniciado a partir de um modelo traz os próprios níveis e folhas do modelo. A política de tipo de parede e de unidades ainda se aplica.
- Desative o complemento e tudo volta a ser do BimCraft. Suas políticas são mantidas para quando você o reativar.
