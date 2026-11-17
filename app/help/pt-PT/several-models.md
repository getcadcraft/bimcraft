---
title: Ver vários modelos IFC em conjunto
summary: Acrescente mais ficheiros IFC à cena, como os de arquitetura, estrutura e serviços, veja-os nas mesmas coordenadas, mova um, oculte outro e escolha qual editar.
keywords: federar, federação, modelo federado, vários modelos, vários ficheiros, combinar, sobreposição, coordenação, especialidade, estrutura, mep, serviços, offset, mover modelo, modelo ativo, adicionar um modelo
from: df0efbbf
---

## O que vai fazer

Veja modelos de diferentes especialidades num só sítio: o modelo do arquiteto com os modelos de estrutura e de serviços nele incluídos. Cada um mantém-se como ficheiro próprio; o BimCraft apenas os mostra em conjunto.

## Passos

1. Abra o primeiro modelo IFC como habitualmente.
2. Em {{ui:Modelos}}, à esquerda, clique em {{ui:Adicionar um modelo…}} e escolha um ou mais ficheiros IFC. Cada um aparece na lista e na vista 3D.
3. Desmarque um modelo para o ocultar; marque-o para o voltar a mostrar.
4. Se um modelo chegar no sítio errado (um ponto de levantamento diferente), clique em {{ui:Mover}} por baixo dele, escreva a distância a mover ao longo de X, Y e Z em metros, e clique em {{ui:Aplicar}}.
5. O modelo com o ponto é o que edita. Clique no ponto de outro modelo para editar esse.
6. Clique em × ao lado de um modelo para o retirar da cena.

## Abrir os modelos da equipa

Quando o modelo aberto é um ficheiro na nuvem num projeto de equipa, aparece {{ui:Abrir os modelos da equipa}} por baixo da lista. Abre os outros modelos IFC do projeto ao lado deste, cada um deslocado pelo offset que o projeto definiu. Os modelos ocultos para si ficam de fora e são contados; um modelo que o projeto roda é aberto sem rotação e também contado; os ficheiros que não são IFC (um DWG, por exemplo) são ignorados e indicados na linha de estado. Um modelo já aberto nunca é aberto duas vezes. O botão fica oculto para um ficheiro que não está num projeto de equipa.

## O que deve ver

- Cada modelo nas coordenadas do primeiro modelo, tal como o seu ficheiro os posiciona. Modelos exportados do mesmo projeto alinham-se sem mover nada.
- Escolher um elemento de um modelo que não está a editar mostra as suas propriedades só de leitura, com {{ui:Editar esse modelo}} para mudar.
- A {{ui:Árvore do modelo}}, os {{ui:Pisos}}, a {{ui:Cor}}, a lista de {{ui:Alterações}}, a colocação de itens da biblioteca e {{ui:Guardar como IFC}} funcionam todos no modelo que edita. Ocultar, isolar, tornar transparente e {{ui:Selecionar tudo}} funcionam em todos os modelos.
- {{ui:Guardar como IFC}} transfere o modelo que edita, apenas com as suas alterações.

## Erros comuns

- **Um modelo está longe ou em falta.** O seu ficheiro usa outras coordenadas. Use {{ui:Ajustar}} para o encontrar e depois {{ui:Mover}} para o pôr no sítio.
- **Eliminar ou Copiar está a cinzento num elemento escolhido.** Pertence a outro modelo: mude primeiro para ele.
- **Abrir um ficheiro com Escolher um ficheiro substituiu tudo.** Isso inicia uma cena nova. Use {{ui:Adicionar um modelo…}} para acrescentar ficheiros ao que já tem.

## Seguinte

- [Ocultar, isolar e tornar transparentes os elementos](topic:hide-and-isolate)
- [Colorir elementos por uma propriedade](topic:color-by-property)
