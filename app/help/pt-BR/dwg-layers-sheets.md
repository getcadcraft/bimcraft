---
title: Trabalhar com camadas e folhas
summary: Ligue e desligue camadas de desenho, alterne entre o espaço modelo e as folhas, e entenda como as folhas mostram o modelo por meio das suas viewports.
keywords: camadas, ligar desligar camada, congelar, descongelar, folhas, layouts, espaço papel, guias, viewports, gerenciador de camadas, la
from: a9a16b53
---

## O que você vai fazer

Limpe a visão de um desenho cheio ligando e desligando camadas, depois veja as folhas do desenho uma a uma.

## Passos: camadas

1. Abra um desenho DWG ou DXF.
2. Encontre a lista {{ui:Layers}} à esquerda. Cada camada tem uma caixa de seleção, uma amostra de cor e o seu nome.
3. Desmarque uma camada para ocultar tudo o que há nela.
4. Clique em {{ui:All off}} para ocultar todas as camadas.
5. Marque apenas as camadas que você quer ver.
6. Clique em {{ui:All on}} para mostrar tudo de novo.

## O que você deve ver

As camadas somem e reaparecem de uma vez, em {{ui:Model}} e em todas as folhas. Camadas desligadas ou congeladas no próprio desenho começam desmarcadas.

## Passos: folhas

1. Olhe a linha de guias acima do desenho: {{ui:Model}}, depois cada folha pelo nome.
2. Clique em uma guia de folha.
3. Observe a folha: o papel fica sobre uma mesa mais escura, e cada viewport mostra a sua parte do modelo na sua própria escala e ângulo.
4. Dê zoom em uma viewport para ler os detalhes. Você está dando zoom na folha, não na viewport, então a folha inteira se move junto.
5. Clique em {{ui:Fit}} ou dê um duplo clique para ver a folha inteira de novo.

## Como as folhas funcionam aqui

Uma folha (um layout, ou espaço papel) contém uma legenda e viewports que olham para o espaço modelo. O BimCraft desenha cada viewport recortada pela sua borda, na sua própria escala e rotação, e oculta as camadas congeladas nessa viewport. A primeira viewport de cada folha é a própria folha e não é desenhada duas vezes.

## Erros comuns

- **Esperar que as alterações de camadas sejam salvas.** As configurações de camada afetam apenas a visualização, até você abrir outro arquivo.
- **Esperar controle de camada por viewport.** A lista {{ui:Layers}} alterna uma camada em todos os lugares. Camadas congeladas em uma viewport pelo desenho continuam congeladas ali.
- **Procurar uma busca de camadas ou estados de camada.** Ainda não implementado. A lista está na ordem do desenho.
- **Esperar trabalhar dentro de uma viewport.** Não há nada para ativar: o BimCraft apenas mostra a folha. Use {{ui:Model}} para olhar o espaço modelo diretamente.
