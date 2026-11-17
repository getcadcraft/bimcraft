---
title: Salvar vistas e percursos
summary: Guarde vistas de câmera do modelo pelo nome, volte a elas, reproduza-as uma após a outra, e grave um percurso pelo edifício para reproduzir depois.
keywords: vistas, vistas salvas, câmera, câmeras, ponto de vista, cena, cenas, tour, apresentação, percurso, percorrer, sobrevoo, gravar, reproduzir, caminho, animação
from: 3af19a36
---

{{ui:Vistas}} na barra de ferramentas mantém câmeras da vista 3D no arquivo do modelo, para que você e quem você enviar o arquivo possam voltar diretamente a elas.

## Salvar uma vista

1. Ajuste a vista 3D: orbite, aplique zoom, oculte o que não quer.
2. Clique em {{ui:Vistas}}, digite um nome (ou mantenha o sugerido) e clique em {{ui:Salvar vista}} ou pressione {{key:Enter}}.

Salvar com um nome que já está na lista atualiza essa vista. Clique no nome de uma vista para voltar a ela; a câmera se move até ali suavemente.

As setas alteram a ordem, o lápis renomeia, a lixeira exclui. Cada alteração é um passo, então {{key:Ctrl+Z}} a desfaz.

## Reproduzir as vistas

{{ui:Reproduzir as vistas}} passa de uma vista para a seguinte na ordem da lista, parando por um instante em cada uma. {{key:Esc}} ou {{ui:Parar}} a encerra.

## Gravar um percurso

1. Ative [Caminhar](topic:walk) e comece a caminhar dentro do edifício.
2. Em {{ui:Vistas}}, clique em {{ui:Gravar um percurso}}.
3. Caminhe com {{key:W}} {{key:A}} {{key:S}} {{key:D}} e olhe ao redor com o mouse.
4. Clique em {{ui:Parar a gravação}}. O percurso é salvo como "Percurso 1", com seu comprimento.

Clique em um percurso para reproduzi-lo como você o caminhou. {{key:Esc}} o encerra.

## Renderizar um percurso como vídeo

Clique no ícone de filme ao lado de um percurso. A caixa de diálogo de vídeo desenha cada quadro do percurso com as configurações de renderização que você escolheu por último, no tamanho, na taxa de quadros e na qualidade que você escolher aqui. Salve como vídeo WebM ou MP4, ou como ZIP com uma imagem por quadro. Os quadros levam tanto tempo quanto as imagens, então comece com {{ui:Rápido}}.

## Narrar um percurso

Clique no ícone de balão de fala ao lado de um percurso. Escreva uma linha para cada coisa dita, e comece cada linha com o tempo em que ela começa (`12`, `0:12` ou `1:02.5`); uma linha sem tempo segue a linha de cima, depois do tempo que leva para ser dita. Escolha o idioma, no idioma do cliente se for ele quem vai assistir. {{ui:Pré-visualizar}} reproduz as palavras com a voz deste computador e as mostra como legendas; o mesmo acontece sempre que o percurso é reproduzido. {{ui:Salvar com o percurso}} mantém a narração no IFC junto com o percurso.

Seu próprio assistente conectado pode escrever a narração para você: peça que analise o percurso e as vistas salvas, e ele define as linhas no idioma que você indicar, como um único passo de desfazer.

O vídeo renderizado não tem som próprio, porque não é possível gravar a voz pelo navegador. Salve as legendas (`.srt` ou `.vtt`) e adicione-as ao vídeo no seu player ou editor de vídeo. As vozes que você pode escolher dependem do computador: um idioma sem voz instalada ainda recebe as legendas.

## No arquivo

Vistas e percursos são mantidos no IFC como o conjunto de propriedades `CadCraft_Views` no projeto: IFC simples que outros programas ignoram. Eles estão nas coordenadas do primeiro modelo, por isso continuam válidos depois que o modelo é recarregado ou outro modelo é adicionado.

:::tip
Para renderizar uma imagem de uma vista salva, vá até a vista e clique em [Renderizar](topic:render).
:::
