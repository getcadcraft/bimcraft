---
title: Guardar vistas e percursos
summary: Guarde vistas de câmara do modelo pelo nome, volte a elas, reproduza-as uma a seguir à outra e grave um percurso pelo edifício para reproduzir depois.
keywords: vistas, vistas guardadas, câmara, câmaras, ponto de vista, cena, cenas, visita guiada, apresentação, percurso, percorrer, sobrevoo, gravar, reproduzir, caminho, animação
from: 3af19a36
---

{{ui:Vistas}} na barra de ferramentas guarda câmaras da vista 3D no ficheiro do modelo, para que possa voltar diretamente a elas, e também quem receber o ficheiro.

## Guardar uma vista

1. Prepare a vista 3D: oriente, amplie, oculte o que não quer.
2. Clique em {{ui:Vistas}}, escreva um nome (ou mantenha o sugerido) e clique em {{ui:Guardar vista}} ou prima {{key:Enter}}.

Guardar com um nome que já está na lista atualiza essa vista. Clique no nome de uma vista para voltar a ela; a câmara desloca-se até lá suavemente.

As setas mudam a ordem, o lápis muda o nome e o caixote apaga. Cada alteração é um passo, pelo que {{key:Ctrl+Z}} a anula.

## Reproduzir as vistas

{{ui:Reproduzir as vistas}} passa de uma vista para a seguinte pela ordem da lista, parando um momento em cada uma. {{key:Esc}} ou {{ui:Parar}} termina.

## Gravar um percurso

1. Ative [Caminhar](topic:walk) e comece a andar dentro do edifício.
2. Em {{ui:Vistas}}, clique em {{ui:Gravar um percurso}}.
3. Ande com {{key:W}} {{key:A}} {{key:S}} {{key:D}} e olhe à volta com o rato.
4. Clique em {{ui:Parar a gravação}}. O percurso fica guardado como "Percurso 1", com a sua extensão.

Clique num percurso para o reproduzir tal como o percorreu. {{key:Esc}} para-o.

## Renderizar um percurso como vídeo

Clique no ícone de filme ao lado de um percurso. A caixa de diálogo do vídeo desenha cada fotograma do percurso com as definições de renderização que escolheu da última vez, à dimensão, taxa de fotogramas e qualidade que escolher aqui. Guarde-o como vídeo WebM ou MP4, ou como ZIP com uma imagem por fotograma. Os fotogramas demoram o mesmo tempo que as imagens, por isso comece com {{ui:Rápido}}.

## Narrar um percurso

Clique no ícone de balão de fala ao lado de um percurso. Escreva uma linha por cada coisa dita, e comece cada linha com a hora em que começa (`12`, `0:12` ou `1:02.5`); uma linha sem hora segue a linha anterior, depois do tempo que demora a dizer. Escolha o idioma; se for o cliente quem vai ver, use o idioma dele. {{ui:Pré-visualizar}} reproduz as palavras com a voz deste computador e mostra-as como legendas; o mesmo acontece sempre que o percurso é reproduzido. {{ui:Guardar com o percurso}} mantém a narração no IFC junto com o percurso.

Um assistente ligado pode escrever a narração: peça-lhe que observe o percurso e as vistas guardadas; ele define as linhas no idioma indicado, num único passo de anulação.

O vídeo renderizado não tem som próprio, porque um navegador não consegue gravar a sua própria voz. Guarde as legendas (`.srt` ou `.vtt`) e acrescente-as ao vídeo no leitor ou editor de vídeo. As vozes disponíveis dependem do computador: um idioma sem voz instalada continua a receber as legendas.

## No ficheiro

As vistas e os percursos são guardados no IFC como o conjunto de propriedades `CadCraft_Views` no projeto: IFC simples, que os outros programas ignoram. Estão nas coordenadas do primeiro modelo, pelo que continuam a encaixar depois de o modelo ser recarregado ou de ser adicionado outro modelo.

:::tip
Para renderizar uma imagem a partir de uma vista guardada, vá à vista e clique em [Renderizar](topic:render).
:::
