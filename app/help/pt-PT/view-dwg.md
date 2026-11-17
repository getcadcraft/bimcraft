---
title: Ver um desenho DWG ou DXF
summary: Abra um DWG ou DXF, desloque-se no espaço modelo e nas folhas, leia coordenadas e veja o que ainda não está desenhado.
keywords: blocos dinâmicos, estados de visibilidade, dwg, dxf, cad, desenho, 2d, ver, visualizador, deslocar, zoom, espaço modelo, espaço papel, layout, coordenadas, abrir dwg
from: 4db3122a
---

## O que vai fazer

Abra um desenho CAD, veja-o em 3D ou 2D, desloque-se nele, passe do espaço modelo para as suas folhas e leia coordenadas. O BimCraft mostra desenhos DWG e DXF; não os edita nem os guarda. Para alterar um, clique em {{ui:Editar no CadCraft}} e o desenho abre na aplicação de desenho do CadCraft, num novo separador.

## Passos

1. Clique em {{ui:Escolher um ficheiro}}, ou arraste o desenho para a página.
2. Escolha um ficheiro `.dwg` ou `.dxf`.
3. Aguarde enquanto a linha de estado indica "A ler o desenho…". Desenhos grandes demoram alguns segundos. Depois indica quanto tempo demorou a leitura, "a renderizar…" enquanto é desenhada a primeira imagem, e quanto tempo isso demorou.
4. O desenho abre em 3D, a forma mais rápida de mostrar um desenho grande (ver [Ver um desenho DWG ou DXF em 3D](topic:dwg-in-3d)). Clique em {{ui:Modelo}} para a vista 2D plana. Para abrir sempre os desenhos em 2D, defina {{ui:Definições}} › {{ui:BimCraft}} › **Os desenhos abrem em** para {{ui:Modelo (2D)}}. Um desenho sem nada no espaço modelo, ou um navegador que não consegue mostrar 3D, abre em 2D.
5. Veja os separadores acima do desenho: primeiro {{ui:Modelo}}, depois um separador por folha, pela ordem do próprio desenho.
6. Clique num separador de folha para ver essa folha: o papel, com o modelo mostrado através dos seus viewports.
7. Clique em {{ui:Modelo}} para voltar ao espaço modelo.
8. Mova o ponteiro sobre o desenho e leia as coordenadas X e Y no canto.

## O que deve ver

- O desenho, ajustado à janela. As cores seguem o desenho; as linhas brancas (cor 7) são desenhadas na tinta do tema, e as cores claras são escurecidas no tema claro para continuarem legíveis.
- O painel {{ui:Desenho}} à esquerda: ficheiro, tamanho, formato (por exemplo "AutoCAD 2018 (AC1032)"), unidades, contagens de entidades e de camadas, o número de folhas, e os desenhos referenciados e equipamentos, quando existirem.
- A lista {{ui:Camadas}} à esquerda.
- À direita: como se desloca, os desenhos e imagens referenciados, e **Ainda não desenhado**.

## Deslocar-se

:::mouse
| Para | Faça isto |
| Deslocar | Arraste com qualquer botão do rato |
| Zoom | Role a roda; o ponto sob o ponteiro mantém-se |
| Ajustar | Duplo clique, prima {{key:F}}, ou clique em {{ui:Ajustar}} |
:::

:::mac mouse
Num trackpad, deslocar com dois dedos **faz zoom**, não desloca. O gesto de pinça também faz zoom. Para deslocar, clique e arraste.
:::

:::touch
Arraste com um dedo para deslocar. O zoom por pinça ainda não está implementado para desenhos: toque em {{ui:Ajustar}} para ver a folha inteira, e use um rato ou trackpad para ampliar.
:::

## Blocos dinâmicos

Um bloco dinâmico é desenhado como o desenho o mostra: cada bloco colocado no estado de visibilidade com que o desenho foi guardado («Planta» ou «Alçado», «Cuba simples» ou «Cuba dupla»). No painel direito, **Blocos dinâmicos** lista cada um colocado no espaço modelo: quantos estão colocados, os estados que mostram e todos os estados que o bloco tem. Em {{ui:3D}}, clique num bloco colocado para ver em Propriedades **Bloco dinâmico**, **Estado mostrado** e **Outros estados**. O BimCraft não muda de estado.

## Ainda não desenhado

Alguns tipos de objetos não são desenhados nesta versão. São contados em **Ainda não desenhado**, à direita («Estas partes do desenho são ignoradas por agora, não são adivinhadas.»), para que saiba que falta algo. Linhas, polilinhas, arcos, círculos, elipses, splines, tramas e preenchimentos sólidos, texto e texto multilinha, blocos com atributos, cotas, linhas de chamada e chamadas múltiplas, tabelas, imagens e viewports são desenhados. Faces 3D, malhas poliédricas e malhas de polígonos são desenhadas como as suas arestas vistas de cima; mude para {{ui:3D}} para as ver como superfícies.

Um DXF binário não abre: o BimCraft indica-o. Guarde-o novamente como DXF ASCII, ou como DWG, a partir do programa que o criou.

## Erros comuns

- **O desenho parece vazio.** Algumas camadas podem estar desligadas ou congeladas no próprio desenho; começam desmarcadas em {{ui:Camadas}}. Clique em {{ui:Todas ligadas}}. Se o estado disser "*nome* é um desenho vazio: não tem linhas, texto nem blocos.", não há nada nele.
- **Uma folha mostra uma moldura vazia.** A folha pode depender de desenhos referenciados. Ver [Encontrar desenhos referenciados e imagens](topic:dwg-linked-files).
- **O texto parece um pouco diferente.** O BimCraft desenha o texto com uma fonte sem serifas estreita, e não com as fontes do próprio desenho; por isso o texto pode ser um pouco mais largo ou mais estreito do que no programa que o criou.
- **"*nome* não pôde ser lido. Pode estar danificado, ou guardado num formato que o leitor ainda não trata."** O código entre parênteses no fim indica o formato do ficheiro. Guarde-o a partir do programa que o criou como DWG mais antigo ou como DXF, e tente de novo.
- **Espera medir, desenhar ou editar.** O BimCraft apenas mostra desenhos. Clique em {{ui:Editar no CadCraft}} para abrir o mesmo ficheiro na aplicação de desenho do CadCraft, que o edita e guarda uma cópia como DWG ou DXF. O ficheiro original não é alterado, e os desenhos referenciados ficam no BimCraft. O botão só aparece onde o CadCraft está disponível para si.

## Seguinte

- [Ver um desenho DWG ou DXF em 3D](topic:dwg-in-3d)
- [Trabalhar com camadas e folhas](topic:dwg-layers-sheets)
- [Verificar um desenho na vista de impressão](topic:print-view)
