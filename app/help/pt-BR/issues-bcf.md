---
title: Tópicos e arquivos BCF
summary: Salve uma vista do modelo como tópico (câmera, elementos escolhidos, ocultos e corte), compartilhe-a como arquivo BCF com outras ferramentas de coordenação e abra os arquivos BCF delas para ver os tópicos.
keywords: bcf, bcfzip, tópico, tópicos, ponto de vista, relatório de interferências, coordenação, comentário, instantâneo, abrir bcf, salvar bcf, exportar, importar
from: 2a6cf201
---

## O que você vai fazer

Aponte para um problema no modelo e guarde a vista que o mostra; depois, envie-a em um arquivo BCF, o formato que outras ferramentas de coordenação leem e gravam.

## Passos

1. Abra um modelo IFC e ajuste a vista: gire a vista até ele, selecione os elementos envolvidos, oculte o que atrapalha e corte-o com um plano de corte ou uma caixa de corte.
2. Clique na guia {{ui:Tópicos}} à direita e depois em {{ui:Novo tópico a partir desta vista}}.
3. Digite um título e, se quiser, um comentário; escolha um status; informe seu nome ou e-mail (conectado, o nome da sua conta é preenchido; veja [Configurações do BimCraft](topic:settings#your-name-on-issues)). Clique em {{ui:Criar tópico}}.
4. Clique em {{ui:Exibir}} em um tópico para recolocar a vista dele.
5. Clique em {{ui:Salvar BCF}} para baixar todos os tópicos como um único arquivo `.bcf`.
6. Para ver tópicos que outra pessoa criou, clique em {{ui:Abrir BCF…}} e escolha o arquivo `.bcf` ou `.bcfzip` dela.

## O que você deve ver

- Cada tópico na lista, com uma imagem da vista, título, status, autor e data.
- {{ui:Exibir}} recoloca a câmera, os elementos escolhidos, o que estava oculto (ou só as coisas exibidas) e o corte. Os elementos são encontrados pelo GlobalId em cada modelo aberto; a linha de status informa se alguns não estão lá.
- Um plano ou uma caixa de corte de outra ferramenta é exibido quando está alinhado aos eixos do modelo; planos inclinados ou extras voltam como um volume de corte (até 6 planos). Um tópico mantém a primeira caixa de um volume com várias caixas.

## Bom saber

- O arquivo é BCF 2.1 e mantém a vista nas coordenadas do próprio modelo, para que outras ferramentas coloquem a câmera no mesmo lugar.
- Os tópicos ficam nesta guia até você salvá-los. Abrir outro modelo mantém a lista; abra o modelo ao qual os tópicos se referem antes de exibi-los.
- Uma câmera paralela (ortogonal) de outra ferramenta é exibida com a câmera em perspectiva deste visualizador, afastada para que a mesma parte do modelo preencha a vista.

## Erros comuns

- **Exibir moveu a câmera para um lugar estranho.** O tópico foi feito em outro modelo ou com outras coordenadas. Abra primeiro o modelo certo.
- **O arquivo não abre.** Ele não é um zip BCF ou está danificado; a linha de status informa o motivo.

## Próximos passos

- [Ocultar, isolar e deixar elementos transparentes](topic:hide-and-isolate)
- [Cortar um modelo IFC com um plano de corte](topic:section-plane)
