---
title: Ver vários modelos IFC juntos
summary: Adicione mais arquivos IFC à cena, como arquitetura, estrutura e instalações, veja-os nas mesmas coordenadas, mova um, oculte um e escolha qual você edita.
keywords: federar, federação, modelo federado, vários modelos, vários arquivos, combinar, sobreposição, coordenação, disciplina, estrutura, mep, instalações, deslocamento, mover modelo, modelo ativo, adicionar um modelo
from: df0efbbf
---

## O que você vai fazer

Veja modelos de diferentes disciplinas em um só lugar: o modelo do arquiteto com os modelos de estrutura e de instalações. Cada um continua sendo um arquivo próprio; o BimCraft apenas os mostra juntos.

## Passos

1. Abra o primeiro modelo IFC normalmente.
2. Em {{ui:Modelos}} à esquerda, clique em {{ui:Adicionar um modelo…}} e escolha um ou mais arquivos IFC. Cada um aparece na lista e na vista 3D.
3. Desmarque um modelo para ocultá-lo; marque-o para mostrá-lo de novo.
4. Se um modelo entrar no lugar errado (um ponto de levantamento diferente), clique em {{ui:Mover}} abaixo dele, digite quanto mover ao longo de X, Y e Z em metros e clique em {{ui:Aplicar}}.
5. O modelo com o ponto é o que você edita. Clique no ponto de outro modelo para editar esse.
6. Clique em × ao lado de um modelo para retirá-lo da cena.

## Abrir os modelos da equipe

Quando o modelo aberto é um arquivo na nuvem em um projeto de equipe, {{ui:Abrir os modelos da equipe}} aparece abaixo da lista. Ele abre os outros modelos IFC do projeto ao lado deste, cada um com o deslocamento definido pelo projeto. Modelos ocultos para você ficam de fora e são contados; um modelo que o projeto gira é aberto sem giro e também contado; arquivos que não são IFC (um DWG, por exemplo) são ignorados e citados na linha de status. Um modelo já aberto nunca é aberto duas vezes. O botão fica oculto para um arquivo que não está em um projeto de equipe.

## O que você deve ver

- Cada modelo nas coordenadas do primeiro modelo, como o arquivo o posiciona. Modelos exportados do mesmo projeto se alinham sem mover nada.
- Ao selecionar um elemento de um modelo que você não está editando, as propriedades dele aparecem somente para leitura, com {{ui:Editar esse modelo}} para trocar.
- A {{ui:Árvore do modelo}}, {{ui:Pavimentos}}, {{ui:Cor}}, a lista de {{ui:Alterações}}, a colocação de itens da biblioteca e {{ui:Salvar como IFC}} funcionam no modelo que você edita. Ocultar, isolar, transparência e {{ui:Selecionar tudo}} funcionam em todos os modelos.
- {{ui:Salvar como IFC}} baixa o modelo que você edita, somente com as alterações dele.

## Erros comuns

- **Um modelo está longe ou sumiu.** O arquivo dele usa outras coordenadas. Use {{ui:Ajustar}} para encontrá-lo e depois {{ui:Mover}} para colocá-lo no lugar.
- **Excluir ou Copiar está cinza em um elemento selecionado.** Ele pertence a outro modelo: troque para ele primeiro.
- **Abrir um arquivo com Escolher um arquivo substituiu tudo.** Isso inicia uma nova cena. Use {{ui:Adicionar um modelo…}} para adicionar arquivos à cena atual.

## Próximos passos

- [Ocultar, isolar e ver através de elementos](topic:hide-and-isolate)
- [Colorir elementos por uma propriedade](topic:color-by-property)
