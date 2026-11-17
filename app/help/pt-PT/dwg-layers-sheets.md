---
title: Trabalhar com camadas e folhas
summary: Ligue e desligue as camadas do desenho, alterne entre o espaço modelo e as folhas, e perceba como as folhas mostram o modelo através das suas viewports.
keywords: camadas, ligar desligar camada, congelar, descongelar, folhas, layouts, espaço papel, separadores, viewports, gestor de camadas, la
from: a9a16b53
---

## O que vai fazer

Limpe a vista de um desenho cheio, desligando camadas, e depois veja as folhas do desenho uma a uma.

## Passos: camadas

1. Abra um desenho DWG ou DXF.
2. Encontre a lista {{ui:Camadas}} à esquerda. Cada camada tem uma caixa de verificação, um quadrado de cor e o seu nome.
3. Desmarque uma camada para ocultar tudo o que nela está.
4. Clique em {{ui:Todas desligadas}} para ocultar todas as camadas.
5. Marque apenas as camadas que quer ver.
6. Clique em {{ui:Todas ligadas}} para mostrar tudo outra vez.

## O que deve ver

As camadas desaparecem e reaparecem de imediato, em {{ui:Modelo}} e em todas as folhas. As camadas desligadas ou congeladas no próprio desenho começam desmarcadas.

## Passos: folhas

1. Veja a linha de separadores acima do desenho: {{ui:Modelo}} e, depois, cada folha pelo nome.
2. Clique num separador de folha.
3. Veja a folha: o papel fica sobre uma secretária mais escura, e cada viewport mostra a sua parte do modelo à sua própria escala e ângulo.
4. Amplie uma viewport para ler o detalhe. Está a ampliar a folha, não a viewport, por isso a folha inteira move-se em conjunto.
5. Clique em {{ui:Ajustar}} ou dê duplo clique para ver a folha inteira outra vez.

## Como as folhas funcionam aqui

Uma folha (um layout, ou espaço papel) tem uma legenda e viewports que olham para o espaço modelo. O BimCraft desenha cada viewport recortada na sua borda, à sua escala e rotação, e oculta as camadas congeladas nessa viewport. A primeira viewport de cada folha é a própria folha e não é desenhada duas vezes.

## Erros comuns

- **Esperar que as alterações de camadas sejam guardadas.** As definições de camadas só afetam a vista, até abrir outro ficheiro.
- **Esperar controlo de camadas por viewport.** A lista {{ui:Camadas}} muda uma camada em todo o lado. As camadas congeladas numa viewport pelo desenho continuam congeladas aí.
- **Procurar uma pesquisa de camadas ou estados de camadas.** Ainda não implementado. A lista está na ordem do desenho.
- **Esperar trabalhar dentro de uma viewport.** Não há nada para ativar: o BimCraft apenas mostra a folha. Use {{ui:Modelo}} para ver o espaço modelo diretamente.
