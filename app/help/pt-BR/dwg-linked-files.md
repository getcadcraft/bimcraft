---
title: Encontrar desenhos vinculados e imagens
summary: Mostre os desenhos vinculados (xrefs) de um desenho e as imagens da legenda, abrindo a sua pasta ou adicionando os arquivos manualmente.
keywords: xref, referência externa, desenho vinculado, anexar, sobreposição, imagem, figura, logo, legenda, xref ausente, etransmit, gerenciador de referências
from: 5593d4b1
---

## O que você vai fazer

Deixe um desenho completo: mostre os desenhos aos quais ele está vinculado (referências externas, ou xrefs) e as imagens que ele usa, como um logo na legenda.

## O jeito fácil: abrir a pasta

1. Clique em {{ui:Open a folder}} e escolha a pasta que contém o desenho e os seus vínculos, por exemplo a pasta `Cad` inteira de um projeto.
2. No relatório da pasta, role até **Desenhos CAD**.
3. Clique no desenho.
4. Olhe o painel {{ui:Properties}} à direita, em **Desenhos vinculados** e **Imagens**.

O BimCraft procura cada desenho vinculado pelo seu nome ("*nome*.dwg"), primeiro na mesma pasta do desenho e depois em qualquer lugar dentro da pasta que você abriu. As imagens são encontradas do mesmo modo, e também por um nome semelhante: uma exportação do eTransmit ou do Revit costuma acrescentar o nome do projeto na frente, então `logo.png` é encontrado como `Tower-logo-5425051.png`.

## O outro jeito: adicionar arquivos manualmente

1. Abra o desenho sozinho.
2. À direita, em **Desenhos vinculados**, clique em {{ui:Add linked drawings…}}. Em **Imagens**, o botão é {{ui:Add pictures…}}; ambos abrem o mesmo seletor.
3. Escolha os arquivos `.dwg` vinculados e os arquivos de imagem. Você pode escolher vários de uma vez.
4. Espere enquanto o BimCraft abre o desenho novamente com eles.

## O que você deve ver

Cada desenho vinculado e cada imagem aparece listado com um rótulo:

| Rótulo | Significa |
|---|---|
| **Mostrado** | Encontrado e desenhado. O caminho abaixo dele indica de onde veio, ou "adicionado por você". |
| **Mostrado, nome semelhante** | Uma imagem encontrada por um nome semelhante. Verifique se é a correta. |
| **Não encontrado** | Não está na pasta nem nos arquivos que você adicionou. Uma imagem ausente aparece como o seu quadro vazio. |
| **TIFF não pode ser mostrado em um navegador** | A imagem é um arquivo TIFF, que os navegadores não desenham. Salve-a como PNG com o mesmo nome e adicione-a. |
| **Não foi possível ler** | O arquivo foi encontrado, mas não pôde ser aberto como imagem. |

O painel {{ui:Drawing}} à esquerda mostra "*n* de *m* carregados" para os desenhos vinculados. As camadas dos desenhos vinculados aparecem em {{ui:Layers}} como "*nome do vínculo*|*camada*".

## Erros comuns

- **Abrir só o desenho.** "Este desenho mostra apenas o próprio conteúdo até que os seus desenhos vinculados sejam adicionados. Abrir a pasta inteira do projeto os encontra automaticamente."
- **Abrir uma pasta pequena demais.** Se os vínculos estão em uma pasta irmã, abra a pasta pai.
- **Vínculos renomeados.** O BimCraft faz a correspondência dos desenhos vinculados pelo nome. Um vínculo renomeado no disco não é encontrado; adicione-o manualmente.
- **Vínculos de vínculos.** O BimCraft carrega os desenhos aos quais o desenho aberto está vinculado. Os desenhos vinculados dentro deles não são procurados, então normalmente não aparecem nesta versão.
