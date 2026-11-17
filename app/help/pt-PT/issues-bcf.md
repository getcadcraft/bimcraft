---
title: Questões e ficheiros BCF
summary: Guarde uma vista do modelo como questão — câmara, elementos selecionados, elementos ocultos, corte — partilhe-a como ficheiro BCF com outras ferramentas de coordenação e abra os seus ficheiros BCF para ver as respetivas questões.
keywords: bcf, bcfzip, questão, questões, tópico, ponto de vista, relatório de conflitos, coordenação, comentário, instantâneo, abrir bcf, guardar bcf, exportar, importar
from: 2a6cf201
---

## O que vai fazer

Aponte para um problema no modelo, guarde a vista que o mostra e entregue-a num ficheiro BCF, o formato que as outras ferramentas de coordenação leem e escrevem.

## Passos

1. Abra um modelo IFC e prepare a vista: rode-a até aos elementos, selecione os elementos envolvidos, oculte o que está no caminho, corte-a com um plano ou uma caixa de corte.
2. Clique no separador {{ui:Issues}} à direita e, depois, em {{ui:New issue from this view}}.
3. Escreva um título e, se quiser, um comentário; escolha um estado; indique o seu nome ou e-mail (com sessão iniciada, o nome da sua conta fica preenchido; ver [Definições do BimCraft](topic:settings#your-name-on-issues)). Clique em {{ui:Create issue}}.
4. Clique em {{ui:Show}} numa questão para repor a sua vista.
5. Clique em {{ui:Save BCF}} para transferir todas as questões num único ficheiro `.bcf`.
6. Para ver questões que outra pessoa criou, clique em {{ui:Open BCF…}} e escolha o respetivo ficheiro `.bcf` ou `.bcfzip`.

## O que deve ver

- Cada questão na lista, com uma imagem da sua vista, o título, o estado, o autor e a data.
- {{ui:Show}} repõe a câmara, os elementos selecionados, o que estava oculto (ou as únicas coisas mostradas) e o corte. Os elementos são encontrados pelo seu GlobalId em cada modelo aberto; a linha de estado indica se alguns não estão lá.
- Um plano ou uma caixa de corte de outra ferramenta é mostrado quando fica alinhado com os eixos do modelo; planos inclinados ou extra voltam como volume de corte (até 6 planos). Uma questão guarda a primeira caixa de um volume com várias caixas.

## Bom saber

- O ficheiro é BCF 2.1 e guarda a vista nas coordenadas próprias do modelo, para que as outras ferramentas coloquem a câmara no mesmo sítio.
- As questões ficam neste separador até as guardar. Abrir outro modelo mantém a lista; abra o modelo a que as questões dizem respeito antes de as mostrar.
- Uma câmara paralela (ortogonal) vinda de outra ferramenta é mostrada com a câmara em perspetiva deste visualizador, recuada para que a mesma parte do modelo preencha a vista.

## Erros comuns

- **Mostrar levou a câmara para um sítio estranho.** A questão foi feita noutro modelo ou com outras coordenadas. Abra primeiro o modelo certo.
- **O ficheiro não abre.** Não é um zip BCF, ou está danificado; a linha de estado indica o motivo.

## A seguir

- [Ocultar, isolar e ver através de elementos](topic:hide-and-isolate)
- [Cortar um modelo IFC com um plano de corte](topic:section-plane)
