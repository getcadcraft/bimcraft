---
title: Mostrar e ocultar pavimentos, espaços e arestas
summary: Desative pavimentos para ver o interior de uma edificação, mostre ambientes e espaços, e ligue e desligue as linhas de aresta.
keywords: pavimentos, níveis, andares, ocultar, isolar, ambientes, espaços, ifcspace, arestas, visibilidade, corte
from: b838dcc0
---

## O que você vai fazer

Veja o interior de um modelo IFC desativando os pavimentos acima do que lhe interessa, depois mostre os ambientes e espaços, e desligue as linhas de aresta para um visual mais limpo.

## Passos: ver um piso

1. Abra um modelo IFC. Veja [Abrir um modelo IFC e explorar em 3D](topic:open-ifc-model).
2. Localize a lista {{ui:Pavimentos}} à esquerda. O pavimento mais alto vem primeiro, como ao ler um corte de cima para baixo.
3. Desmarque a cobertura e todos os pavimentos acima do piso que você quer.
4. Clique em {{ui:Superior}} para olhar de cima para esse piso.
5. Marque os pavimentos novamente para restaurá-los.

## O que você deve ver

Cada pavimento que você desmarca desaparece de imediato, com tudo o que estiver nele. A lista mostra apenas pavimentos que contêm algo visível. Elementos não atribuídos a nenhum pavimento são agrupados como **Sem pavimento** na parte inferior; elementos do terreno e alguns móveis costumam cair aí.

## Passos: mostrar ambientes e espaços

1. Clique em {{ui:Espaços}} na barra de ferramentas acima do modelo. O botão fica pressionado.
2. Observe o modelo: ambientes e espaços aparecem como volumes claros e translúcidos.
3. Clique em um espaço para ler suas propriedades, como nome, número e área, à direita.
4. Clique em {{ui:Espaços}} novamente para ocultá-los.

Os espaços ficam ocultos quando um modelo é aberto, porque, de outra forma, cobririam paredes e pisos.

## Passos: arestas

1. Clique em {{ui:Arestas}} para desligar as linhas finas de aresta.
2. Clique novamente para religá-las.

Em modelos muito grandes (acima de 1.5 milhão de triângulos) o botão fica esmaecido, com a dica "As arestas estão desligadas para modelos muito grandes". Isso economiza memória.

## Erros comuns

- **Desmarcar um pavimento e ainda ver partes dele.** Um elemento pertence ao pavimento que o programa exportador atribuiu a ele. Uma parede alta ou uma escada geralmente pertence apenas ao pavimento base, então permanece quando o pavimento de cima é ocultado, ou desaparece com o pavimento de baixo.
- **Ocultar pavimentos para ver o interior.** Uma caixa de corte costuma ser mais rápida: veja [Cortar um modelo IFC com um plano de corte](topic:section-plane#a-section-box). Você também pode desmarcar linhas na {{ui:Árvore do modelo}} (veja [Encontrar seu caminho com a árvore do modelo](topic:model-tree)).
- **Clicar em um espaço através de uma parede.** O clique escolhe a superfície visível mais próxima. Oculte o pavimento de cima, ou mude para {{ui:Superior}}, e clique.
- **Os nomes dos pavimentos parecem estranhos.** O BimCraft mostra os nomes de pavimento salvos no arquivo. Se disserem "Level 1" ou um número, é o que o exportador gravou.
