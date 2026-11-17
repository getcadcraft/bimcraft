---
title: A paleta de símbolos
summary: Encontre símbolos elétricos e de canalização pelo nome ou pela imagem, marque com estrela os que usa e coloque-os na planta com um clique.
keywords: paleta de símbolos, botão de símbolos na barra, parede segue, símbolos, símbolos elétricos, símbolos de canalização, planta de canalização, sanita, lavatório, lava-loiça, banheira, chuveiro, ralo de piso, tampão de limpeza, torneira de mangueira, termoacumulador, válvula, válvula de cunha, água fria, água quente, residual, ventilação, estilo de linha, favoritos, pesquisa
from: 67f20bc0
---

## O que vai fazer

Abra um painel que lista os símbolos elétricos e os símbolos de planta de canalização com as suas imagens e nomes, encontre o que quer e coloque-o na planta. Nada aqui precisa de internet: os símbolos vêm com a aplicação.

## Abrir e colocar um símbolo

1. Abra um modelo e abra {{ui:Build}} › {{ui:Symbol palette}} (comando escrito: SYMBOLS). O mesmo botão está no menu Ferramentas da barra Desenhar e como **Símbolos** no grupo Biblioteca da barra de ferramentas.
2. Escolha um conjunto: **Elétrico** ou **Canalização**, ou **Todos os conjuntos**. Escreva na caixa de pesquisa para restringir a lista. Pode pesquisar pelo nome ou pela abreviatura (WC, CW, HB).
3. Clique num símbolo. A planta fica pronta para o colocar.
   - Um símbolo **elétrico** inicia a ferramenta Elétrica com esse dispositivo escolhido, por isso tudo o que se aplica em [A planta elétrica](topic:electrical-plan) também se aplica: clique na planta, um passo de anulação.
   - Um símbolo de **canalização** inicia a ferramenta de símbolos de planta. Clique na planta. Um aparelho que assenta numa parede (uma sanita, um lavatório, uma banheira, um lava-loiça, uma torneira de mangueira) encaixa-se na face da parede mais próxima, com as costas voltadas para a parede; ralos, válvulas, o termoacumulador e os estilos de linha vão onde clicar.
4. Prima {{key:R}} para rodar o símbolo 90° ({{key:Shift}}+{{key:R}} roda no sentido contrário), ou escreva um ângulo em **Rotação** na barra de opções. Prima {{key:Esc}} para parar.

Um aparelho ou torneira de mangueira que se encaixou numa face de parede lembra-se dessa parede: quando a parede se move, o símbolo move-se com ela (mesma face, mesma distância ao longo da parede) no mesmo passo de anulação. Se eliminar a parede, o símbolo fica onde estava e Problemas indica "perdeu a parede"; mova-o ou elimine-o. Os símbolos colocados longe das paredes não ficam ligados a nada.

Cada símbolo que coloca é um passo de anulação. Um símbolo colocado é uma anotação de planta no ficheiro IFC, com a sua etiqueta (WC1, WC2, ...). Selecione-o para alterar a sua etiqueta ou rotação em **Propriedades**, ou prima {{key:Delete}}.

## O que tem o conjunto de canalização

Aparelhos (sanita, urinol, lavatório, banheira, chuveiro, lava-loiça de cozinha, lava-loiça simples), um ralo de piso, tampões de limpeza de piso e de parede, uma torneira de mangueira, um hidrante de parede, um termoacumulador, válvulas (de cunha, de globo, de esfera, de retenção, borboleta, redutora de pressão) e estilos de linha com as suas abreviaturas: água fria (CW), água quente (HW), retorno de água quente (HWR), residual (W), ventilação (V), águas pluviais (SD) e gás (G). Os desenhos escalam com a planta, por isso mantêm o seu tamanho na folha impressa. Um estilo de linha é um pequeno troço para mostrar o estilo na planta; desenhe os percursos reais de tubagem com as ferramentas de tubo.

:::note
São convenções comuns de planta de canalização, desenhadas por nós; não são certificadas segundo a ISO 4067-1 nem a ASME Y32.4. Foram comparadas com legendas de desenho públicas e manuais de formação (a lista está na nota de fontes do conjunto, que indica onde coincidimos e onde diferimos), não copiadas de nenhum produto, e são de utilização livre (Apache-2.0). Os conjuntos de desenho diferem, por isso verifique a legenda do seu projeto. São símbolos de planta, não um projeto de canalização: não dimensionam tubos nem verificam códigos.
:::

## Favoritos e teclado

- Clique na estrela de um símbolo (ou prima {{key:F}} sobre ele) para o manter como favorito. Os favoritos aparecem primeiro e ficam guardados neste navegador. **Apenas favoritos** mostra só esses.
- {{key:Down}} a partir da caixa de pesquisa passa para os símbolos; as teclas de setas, {{key:Home}} e {{key:End}} movem-se entre eles; {{key:Enter}} escolhe o focado; {{key:Esc}} fecha a paleta.
- Num telemóvel, a paleta é uma folha na parte inferior do ecrã; afasta-se quando escolhe um símbolo, para ver a planta. Abra-a novamente a partir do menu Build ou do botão **Paleta** na barra de opções.

:::tip
Se um ficheiro usar um conjunto de símbolos que esta versão não tem, a planta mostra uma caixa no lugar do símbolo e Problemas indica-o.
:::

## Ligar um elemento colocado a um símbolo

Uma luminária da Biblioteca é um elemento 3D, mas um layout elétrico mostra-a pelo seu símbolo. Coloque-a **uma vez** e ligue-a:

1. Escolha Build › **Symbol link** (ou escreva SYMBOLLINK). Abre-se uma secção Ligação de símbolo no painel da esquerda.
2. Escolha os elementos colocados na planta ou em 3D. A secção indica quantos foram escolhidos e a que estão ligados.
3. Escolha o **Símbolo** (de qualquer conjunto de símbolos: Elétrico, Canalização) e escolha **Ligar**.

O elemento continua a ser um só elemento, e cada mapa o conta uma vez:

- O **3D** mostra sempre o seu corpo.
- Uma **planta** mostra a sua forma de planta, como antes.
- Uma planta cujo **Esta vista mostra os elementos ligados como** esteja em **O seu símbolo (um layout de instalações)** mostra o símbolo no seu lugar. Um clique no símbolo seleciona o elemento. A escolha fica guardada no ficheiro para essa vista (a planta de um nível, a sua planta de teto ou uma chamada).

**Rodar o símbolo 90°** roda o símbolo em relação ao seu elemento. **Remover a ligação** retira a ligação; o elemento fica. O mapa **Símbolos ligados** lista cada elemento ligado uma vez, com o seu nível e o compartimento em que está.

Ainda não implementado: a escolha de uma vista numa folha é a escolha da planta do nível que essa folha mostra; os dispositivos colocados com a ferramenta Elétrica são símbolos em todas as plantas, como antes.
