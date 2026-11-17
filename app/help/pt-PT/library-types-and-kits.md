---
title: Símbolos, tipos e recursos, modelos de projeto e Quick Kits
summary: A Biblioteca tem três tipos de item (Símbolos, Tipos, Recursos). Adicione um Tipo ao seu projeto, comece a partir de um modelo de projeto partilhado, adicione um Quick Kit e partilhe os seus próprios através da página de carregamento da Biblioteca.
keywords: biblioteca, símbolos, tipos, recursos, tipo, tipo de parede, tipo de piso, tipo de cobertura, tipo de teto, modelo de projeto, modelo, quick kit, kit, partilhar, carregar, versão, registo de alterações, LOD, classificação, licença, notas da prática
from: e13b0e67
---

## O que vai fazer

Encontre na Biblioteca o que precisa pelo que é, adicione um Tipo ao projeto que está a desenhar, comece um projeto novo a partir de um modelo que alguém partilhou, e partilhe os seus próprios modelos, tipos e kits.

## Os três tipos de item da Biblioteca

- **Símbolos** são convenções de desenho: apenas 2D, desenhados à dimensão de anotação, agrupados por especialidade.
- **Tipos** dizem do que um elemento é feito: as suas camadas com a espessura real, o seu nível de desenvolvimento (LOD) e o código de classificação. Um Tipo é adicionado ao projeto, não desenhado.
- **Recursos** são objetos físicos, como portas, janelas, mobiliário, acessórios e equipamento, com uma vista em planta e um corpo 3D à escala real.

No separador {{ui:Library}}, escolha {{ui:Library}} e use **Tipo de item** para mostrar Tudo, Símbolos, Tipos ou Recursos.

## Adicionar um Tipo ao seu projeto

1. Escolha **Tipos** em Tipo de item e abra um.
2. Verifique a sua composição, o LOD e a classificação por baixo da imagem e, depois, escolha {{ui:Add to this project}}.
3. É adicionado como tipo de parede, piso, cobertura ou teto com o qual pode desenhar. Se já existir um tipo com esse nome, o novo é adicionado como cópia e o seu fica como estava. Uma operação de Anular remove-o.

## Modelos de projeto e Quick Kits

Escolha {{ui:Kits}} para ver o que as pessoas partilharam.

- **Um modelo de projeto** é um ficheiro IFC com níveis, malhas, tipos e definições. {{ui:Save to my templates}} coloca-o em Novo edifício, em Começar a partir de.
- **Um Quick Kit** é uma lista de itens da Biblioteca. {{ui:Show the kit's items}} mostra-os como cartões que pode colocar.
- Cada kit tem uma versão e um registo de alterações, da mais recente para a mais antiga. Uma versão que começa por 0 destina-se à discussão; a 1.0.0 é só para o que o responsável da linha adotou.

## Partilhar os seus

- **Um modelo de projeto:** {{ui:Save as template}}, assinale {{ui:Also make a file to share in the Library}}, acrescente o que contém e uma versão. Obtém um ficheiro `.json`.
- **Um Quick Kit:** em {{ui:Kits}}, escolha {{ui:Make a Quick Kit from this project}}. Lista os itens da Biblioteca que o projeto usa.
- **Um Tipo:** em {{ui:Type packs}}, assinale um tipo e escolha {{ui:Save as a Library item…}}.

Carregue o ficheiro na página de carregamento da Biblioteca. Segue a mesma revisão de qualquer item, e aí escolhe a licença: todos os itens indicam a sua licença. Pede-se a cada item o seu LOD, uma classe IFC e um código de classificação (um código, não apenas um nome).

## Notas da prática

Em qualquer página de item da Biblioteca, os membros com sessão iniciada podem acrescentar uma nota: usado num projeto real, testado num projeto de exemplo, ou encontrado um problema. Diga em poucas palavras que tipo de projeto foi e não indique nomes de clientes. Uma nota é pública e não é uma avaliação: não altera o item.

## Bom saber

- Nada é enviado a partir da aplicação. Os ficheiros são feitos no seu computador e carregados por si.
- Um kit feito a partir de um modelo transporta o texto IFC exatamente como foi guardado. Verifique se há algo privado antes de carregar.
- A CadCraft mostra Símbolos e Recursos no seu separador Biblioteca; os Tipos e modelos são para projetos do BimCraft.
