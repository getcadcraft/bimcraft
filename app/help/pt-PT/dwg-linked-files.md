---
title: Encontrar desenhos e imagens ligados
summary: Mostre os desenhos ligados de um desenho (xrefs) e as imagens da legenda, abrindo a sua pasta ou adicionando os ficheiros à mão.
keywords: xref, referência externa, desenho ligado, anexar, sobreposição, imagem, fotografia, logótipo, legenda, xref em falta, etransmit, gestor de referências
from: 5593d4b1
---

## O que vai fazer

Complete um desenho: mostre os desenhos a que se liga (referências externas, ou xrefs) e as imagens que usa, como um logótipo na legenda.

## O modo fácil: abrir a pasta

1. Clique em {{ui:Abrir uma pasta}} e escolha a pasta que contém o desenho e as suas ligações, por exemplo a pasta `Cad` inteira de um projeto.
2. No relatório da pasta, desloque até **Desenhos CAD**.
3. Clique no desenho.
4. Veja o painel {{ui:Propriedades}} à direita, em **Desenhos ligados** e **Imagens**.

O BimCraft procura cada desenho ligado pelo nome ("*nome*.dwg"), primeiro na mesma pasta do desenho, depois em qualquer parte da pasta que abriu. As imagens são encontradas da mesma forma, e também por um nome semelhante: uma exportação do eTransmit ou do Revit costuma acrescentar o nome do projeto à frente, por isso `logo.png` é encontrada como `Tower-logo-5425051.png`.

## O outro modo: adicionar os ficheiros à mão

1. Abra o desenho sozinho.
2. À direita, em **Desenhos ligados**, clique em {{ui:Adicionar desenhos referenciados…}}. Em **Imagens**, o botão é {{ui:Adicionar imagens…}}; ambos abrem o mesmo seletor.
3. Escolha os ficheiros `.dwg` ligados e os ficheiros de imagem. Pode escolher vários de uma vez.
4. Aguarde enquanto o BimCraft volta a abrir o desenho com eles.

## O que deve ver

Cada desenho ligado e cada imagem aparece na lista com uma etiqueta:

| Etiqueta | Significa |
|---|---|
| **Mostrado** | Encontrado e desenhado. O caminho por baixo indica a origem, ou "adicionado por si". |
| **Mostrado, nome semelhante** | Uma imagem encontrada por um nome semelhante. Verifique se é a correta. |
| **Não encontrado** | Não está na pasta nem nos ficheiros que adicionou. Uma imagem em falta aparece como o seu quadro vazio. |
| **TIFF não pode ser mostrado num navegador** | A imagem é um ficheiro TIFF, que os navegadores não desenham. Guarde-a como PNG com o mesmo nome e adicione-a. |
| **Não foi possível ler** | O ficheiro foi encontrado, mas não pôde ser aberto como imagem. |

O painel {{ui:Desenho}} à esquerda mostra "*n* de *m* carregados" para os desenhos ligados. As camadas dos desenhos ligados aparecem em {{ui:Camadas}} como "*nome da ligação*|*camada*".

## Erros comuns

- **Abrir só o desenho.** "Este desenho mostra apenas o seu próprio conteúdo até os seus desenhos ligados serem adicionados. Abrir a pasta inteira do projeto encontra-os automaticamente."
- **Abrir uma pasta demasiado pequena.** Se as ligações estiverem numa pasta irmã, abra a pasta-mãe.
- **Ligações renomeadas.** O BimCraft associa os desenhos ligados pelo nome. Uma ligação renomeada no disco não é encontrada; adicione-a à mão.
- **Ligações de ligações.** O BimCraft carrega os desenhos a que o desenho aberto se liga. Os desenhos ligados dentro desses não são procurados, por isso normalmente não aparecem nesta versão.
