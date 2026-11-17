---
title: A paleta de símbolos
summary: Encontre símbolos elétricos e hidrossanitários pelo nome ou pela figura, marque com estrela os que você usa e posicione-os na planta com um clique.
keywords: paleta de símbolos, botão da barra de símbolos, parede acompanha, símbolos, símbolos elétricos, símbolos hidrossanitários, planta hidrossanitária, bacia sanitária, vaso sanitário, lavatório, pia, banheira, chuveiro, ralo, tampão de inspeção, torneira de mangueira, aquecedor de água, válvula, registro de gaveta, água fria, água quente, esgoto, ventilação, estilo de linha, favoritos, pesquisa
from: 67f20bc0
---

## O que você vai fazer

Abra um painel que lista os símbolos elétricos e os símbolos de planta hidrossanitária com suas figuras e nomes, encontre o que você quer e posicione-o na planta. Nada aqui precisa de internet: os símbolos vêm com o aplicativo.

## Abrir e posicionar um símbolo

1. Abra um modelo e abra {{ui:Build}} › {{ui:Paleta de símbolos}} (comando digitado: SYMBOLS). O mesmo botão está no menu Ferramentas da barra Desenhar e como **Símbolos** no grupo Biblioteca da barra de ferramentas.
2. Escolha um conjunto: **Elétrico** ou **Hidrossanitário**, ou **Todos os conjuntos**. Digite na caixa de pesquisa para reduzir a lista. Você pode pesquisar pelo nome ou pela abreviação (WC, CW, HB).
3. Clique em um símbolo. A planta fica pronta para posicioná-lo.
   - Um símbolo **elétrico** inicia a ferramenta Elétrica com esse dispositivo escolhido, então tudo o que está em [A planta elétrica](topic:electrical-plan) se aplica: clique na planta, uma etapa de desfazer.
   - Um símbolo **hidrossanitário** inicia a ferramenta de símbolo de planta. Clique na planta. Um aparelho que fica na parede (bacia sanitária, lavatório, banheira, pia, torneira de mangueira) se encaixa na face da parede mais próxima, com o fundo voltado para a parede; ralos, registros, o aquecedor de água e os estilos de linha vão para onde você clicar.
4. Pressione {{key:R}} para girar o símbolo 90° ({{key:Shift}}+{{key:R}} gira no outro sentido), ou digite um ângulo em **Rotação** na barra de opções. Pressione {{key:Esc}} para parar.

Um aparelho ou torneira de mangueira que se encaixou em uma face de parede lembra essa parede: quando a parede se move, o símbolo se move com ela (mesma face, mesma distância ao longo da parede) na mesma etapa de desfazer. Se você excluir a parede, o símbolo permanece onde estava e o painel **Problemas** lista "perdeu sua parede"; mova-o ou exclua-o. Símbolos posicionados longe de paredes não estão vinculados a nada.

Cada símbolo que você posiciona é uma etapa de desfazer. Um símbolo posicionado é uma anotação de planta no arquivo IFC, com sua etiqueta (WC1, WC2, ...). Selecione-o para alterar sua etiqueta ou sua rotação em **Propriedades**, ou pressione {{key:Delete}}.

## O que o conjunto hidrossanitário tem

Aparelhos (bacia sanitária, mictório, lavatório, banheira, chuveiro, pia de cozinha, pia simples), um ralo, tampões de inspeção de piso e de parede, uma torneira de mangueira, um hidrante de parede, um aquecedor de água, válvulas (gaveta, globo, esfera, retenção, borboleta, redutora de pressão) e estilos de linha com suas abreviações: água fria (CW), água quente (HW), retorno de água quente (HWR), esgoto (W), ventilação (V), águas pluviais (SD) e gás (G). Os desenhos acompanham a escala da planta, então mantêm seu tamanho na folha impressa. Um estilo de linha é um pequeno trecho que mostra o estilo na planta; desenhe os trechos reais de tubulação com as ferramentas de tubulação.

:::note
Estas são convenções comuns de planta hidrossanitária, desenhadas por nós; não são certificadas segundo ISO 4067-1 ou ASME Y32.4. Foram comparadas com legendas de desenhos públicos e manuais de treinamento (a lista está na nota de fontes do conjunto, que indica onde coincidimos e onde diferimos), não copiadas de nenhum produto, e são livres para uso (Apache-2.0). Conjuntos de desenho variam, então confira a legenda do seu próprio projeto. São símbolos de planta, não um projeto hidrossanitário: não dimensionam tubos nem verificam normas.
:::

## Favoritos e teclado

- Clique na estrela de um símbolo (ou pressione {{key:F}} sobre ele) para mantê-lo como favorito. Os favoritos aparecem primeiro e ficam neste navegador. **Somente favoritos** mostra apenas eles.
- {{key:Down}} a partir da caixa de pesquisa leva aos símbolos; as setas, {{key:Home}} e {{key:End}} movem entre eles; {{key:Enter}} escolhe o símbolo em foco; {{key:Esc}} fecha a paleta.
- Em um celular, a paleta é uma folha na parte inferior da tela; ela sai do caminho quando você escolhe um símbolo, para que você veja a planta. Abra-a novamente pelo menu {{ui:Build}} ou pelo botão **Paleta** na barra de opções.

:::tip
Se um arquivo usa um conjunto de símbolos que esta versão não tem, a planta mostra uma caixa no lugar do símbolo e os **Problemas** o listam.
:::

## Vincular um elemento posicionado a um símbolo

Um luminário da Biblioteca é um elemento 3D, mas um layout elétrico o mostra pelo seu símbolo. Você o posiciona **uma vez** e o vincula:

1. Escolha Build › **Vínculo de símbolo** (ou digite SYMBOLLINK). Uma seção Vínculo de símbolo se abre no painel da esquerda.
2. Escolha os elementos posicionados na planta ou na 3D. A seção diz quantos foram escolhidos e a que estão vinculados.
3. Escolha o **Símbolo** (de qualquer conjunto: Elétrico, Hidrossanitário) e escolha **Vincular**.

O elemento continua sendo um só, e cada tabela o conta uma vez:

- A **3D** sempre mostra o seu corpo.
- Uma **planta** mostra sua forma de planta, como antes.
- Uma planta cuja opção **Esta vista mostra elementos vinculados como** está em **O seu símbolo (um layout de instalações)** mostra o símbolo no lugar dele. Um clique no símbolo seleciona o elemento. A escolha fica guardada no arquivo para essa vista (a planta de um pavimento, sua planta de forro ou um detalhe).

**Girar o símbolo 90°** gira o símbolo em relação ao seu elemento. **Remover o vínculo** o desfaz; o elemento permanece. A tabela **Símbolos vinculados** lista cada elemento vinculado uma vez, com seu pavimento e o ambiente em que está.

Não implementado: a escolha de uma vista em uma folha é a escolha da planta do pavimento que ela mostra; dispositivos posicionados com a ferramenta Elétrica são símbolos em todas as plantas, como antes.
