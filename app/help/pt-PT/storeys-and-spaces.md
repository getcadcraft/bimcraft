---
title: Mostrar e ocultar pisos, espaços e arestas
summary: Desligue pisos para ver o interior de um edifício, mostre compartimentos e espaços, e ligue e desligue as linhas de aresta.
keywords: pisos, níveis, andares, ocultar, isolar, compartimentos, espaços, ifcspace, arestas, visibilidade, corte
from: b838dcc0
---

## O que vai fazer

Veja o interior de um modelo IFC desligando os pisos acima do que lhe interessa, depois mostre os compartimentos e espaços, e desligue as linhas de aresta para um aspeto mais limpo.

## Passos: ver um piso

1. Abra um modelo IFC. Veja [Abrir um modelo IFC e ver em 3D](topic:open-ifc-model).
2. Encontre a lista {{ui:Storeys}} à esquerda. O piso mais alto vem primeiro, como ao ler um corte de cima para baixo.
3. Desmarque a cobertura e todos os pisos acima do piso que quer.
4. Clique em {{ui:Top}} para olhar para esse piso de cima.
5. Volte a marcar os pisos para os repor.

## O que deve ver

Cada piso que desmarcar desaparece de imediato, com tudo o que está nele. A lista só mostra pisos que contêm algo visível. Os elementos que não estão atribuídos a nenhum piso são agrupados como **Sem piso** no fim; elementos do terreno e algum mobiliário costumam ficar aí.

## Passos: mostrar compartimentos e espaços

1. Clique em {{ui:Spaces}} na barra de ferramentas acima do modelo. O botão fica premido.
2. Olhe para o modelo: os compartimentos e espaços aparecem como volumes pálidos e transparentes.
3. Clique num espaço para ler as suas propriedades, como o nome, o número e a área, à direita.
4. Clique novamente em {{ui:Spaces}} para os ocultar.

Os espaços ficam ocultos quando um modelo abre, porque de outra forma cobririam as paredes e os pisos.

## Passos: arestas

1. Clique em {{ui:Edges}} para desligar as linhas finas de aresta.
2. Clique novamente para as voltar a ligar.

Em modelos muito grandes (mais de 1.5 milhões de triângulos) o botão fica a cinzento com a dica "As arestas estão desligadas para modelos muito grandes". Isto poupa memória.

## Erros comuns

- **Desmarcar um piso e continuar a ver partes dele.** Um elemento pertence ao piso que o programa exportador lhe atribuiu. Uma parede alta ou uma escada costuma pertencer apenas ao seu piso base, por isso fica visível quando o piso de cima está oculto, ou desaparece com o piso de baixo.
- **Ocultar pisos para ver o interior.** Uma caixa de corte costuma ser mais rápida: veja [Cortar um modelo IFC com um plano de corte](topic:section-plane#a-section-box). Também pode desmarcar linhas na {{ui:Model tree}} (veja [Encontrar o seu caminho com a árvore do modelo](topic:model-tree)).
- **Clicar num espaço através de uma parede.** O clique escolhe a superfície visível mais próxima. Oculte o piso de cima, ou mude para {{ui:Top}}, e depois clique.
- **Os nomes dos pisos parecem estranhos.** O BimCraft mostra os nomes de piso guardados no ficheiro. Se disserem "Level 1" ou um número, é isso que o exportador escreveu.
