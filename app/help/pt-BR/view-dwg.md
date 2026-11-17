---
title: Ver um desenho DWG ou DXF
summary: Abra um DWG ou DXF, navegue pelo espaço modelo e pelas folhas, leia as coordenadas e veja o que ainda não foi desenhado.
keywords: blocos dinâmicos, estados de visibilidade, dwg, dxf, cad, desenho, 2d, vista, visualizador, pan, zoom, espaço modelo, espaço papel, layout, coordenadas, abrir dwg
from: 4db3122a
---

## O que você vai fazer

Abra um desenho CAD, veja-o em 3D ou 2D, navegue por ele, alterne entre o espaço modelo e as folhas, e leia as coordenadas. O BimCraft mostra desenhos DWG e DXF; ele não os edita nem os salva. Para alterar um, clique em {{ui:Editar no CadCraft}} e o desenho abre no aplicativo de desenho CadCraft em uma nova guia.

## Passos

1. Clique em {{ui:Escolher um arquivo}}, ou arraste o desenho para a página.
2. Escolha um arquivo `.dwg` ou `.dxf`.
3. Aguarde enquanto a linha de status diz "Lendo o desenho…". Desenhos grandes levam alguns segundos. Depois ela informa quanto tempo a leitura levou, "renderizando…" enquanto a primeira imagem é desenhada, e quanto tempo isso levou.
4. O desenho abre em 3D, a forma mais rápida de mostrar um desenho grande (veja [Ver um desenho DWG ou DXF em 3D](topic:dwg-in-3d)). Clique em {{ui:Modelo}} para a vista 2D plana. Para sempre abrir desenhos em 2D, defina {{ui:Configurações}} › {{ui:BimCraft}} › **Desenhos abrem em** como {{ui:Modelo (2D)}}. Um desenho sem nada no espaço modelo, ou em um navegador em que não é possível mostrar 3D, abre em 2D.
5. Veja as guias acima do desenho: primeiro {{ui:Modelo}}, depois uma guia por folha, na ordem do próprio desenho.
6. Clique na guia de uma folha para ver essa folha: o papel, com o modelo mostrado pelas suas viewports.
7. Clique em {{ui:Modelo}} para voltar ao espaço modelo.
8. Mova o ponteiro sobre o desenho e leia as coordenadas X e Y no canto.

## O que você deve ver

- O desenho, ajustado à janela. As cores seguem o desenho; linhas brancas (cor 7) são desenhadas na tinta do tema, e cores claras são escurecidas no tema claro para continuarem legíveis.
- O painel {{ui:Desenho}} à esquerda: arquivo, tamanho, formato (por exemplo "AutoCAD 2018 (AC1032)"), unidades, contagens de entidades e de camadas, número de folhas, e desenhos vinculados e equipamentos, quando houver.
- A lista {{ui:Camadas}} à esquerda.
- À direita: como se movimentar, desenhos e imagens vinculados, e **Ainda não desenhados**.

## Como se movimentar

:::mouse
| Para | Faça isto |
|---|---|
| Pan | Arraste com qualquer botão do mouse |
| Zoom | Role a roda; o ponto sob o ponteiro permanece no lugar |
| Ajustar | Clique duas vezes, pressione {{key:F}} ou clique em {{ui:Ajustar}} |
:::

:::mac mouse
Em um trackpad, rolar com dois dedos **dá zoom**, não faz pan. Pinçar também dá zoom. Para fazer pan, clique e arraste.
:::

:::touch
Arraste com um dedo para fazer pan. O zoom por pinça ainda não está implementado para desenhos: toque em {{ui:Ajustar}} para ver a folha inteira, e use um mouse ou trackpad para aproximar.
:::

## Blocos dinâmicos

Um bloco dinâmico é desenhado como o desenho o mostra: cada bloco posicionado no estado de visibilidade com que o desenho foi salvo ("Planta" ou "Frente", "Cuba simples" ou "Cuba dupla"). À direita, **Blocos dinâmicos** lista cada um posicionado no espaço modelo: quantos estão posicionados, os estados que exibem e todos os estados que o bloco tem. Em {{ui:3D}}, clique em um bloco posicionado para ver **Bloco dinâmico**, **Estado exibido** e **Outros estados** em Propriedades. O BimCraft não troca estados.

## Ainda não desenhados

Alguns tipos de objetos não são desenhados nesta versão. Eles são contados em **Ainda não desenhados**, à direita ("Estas partes do desenho são ignoradas por enquanto, sem serem adivinhadas."), para que você saiba que algo está faltando. Linhas, polilinhas, arcos, círculos, elipses, splines, hachuras e preenchimentos sólidos, textos e textos de múltiplas linhas, blocos com atributos, cotas, linhas de chamada e multichamadas, tabelas, imagens e viewports são desenhados. Faces 3D, malhas poliface e malhas de polígonos são desenhadas como suas arestas vistas de cima; mude para {{ui:3D}} para vê-las como superfícies.

Um DXF binário não abre: o BimCraft informa isso. Salve-o de novo como DXF ASCII, ou como DWG, no programa que o criou.

## Erros comuns

- **O desenho parece vazio.** Algumas camadas podem estar desligadas ou congeladas no próprio desenho; elas começam desmarcadas em {{ui:Camadas}}. Clique em {{ui:Todas ligadas}}. Se a linha de status disser "*nome* é um desenho vazio: não contém linhas, textos nem blocos.", não há nada nele.
- **Uma folha mostra uma moldura vazia.** A folha pode depender de desenhos vinculados. Veja [Encontrar desenhos e imagens vinculados](topic:dwg-linked-files).
- **O texto parece um pouco diferente.** O BimCraft desenha o texto em uma fonte sans-serif estreita, não nas fontes do próprio desenho; por isso o texto pode ficar um pouco mais largo ou mais estreito do que no programa que o criou.
- **"*nome* não pôde ser lido. Ele pode estar danificado ou salvo em um formato que o leitor ainda não suporta."** O colchete no final indica o código de formato do arquivo. Salve-o no programa que o criou como um DWG mais antigo ou como DXF, e tente novamente.
- **Achar que é possível medir, desenhar ou editar.** O BimCraft apenas visualiza desenhos. Clique em {{ui:Editar no CadCraft}} para abrir o mesmo arquivo no aplicativo de desenho CadCraft, que o edita e salva uma cópia como DWG ou DXF. Seu arquivo original não é alterado, e os desenhos vinculados permanecem no BimCraft. O botão aparece apenas onde o CadCraft está disponível para você.

## Próximos passos

- [Ver um desenho DWG ou DXF em 3D](topic:dwg-in-3d)
- [Trabalhar com camadas e folhas](topic:dwg-layers-sheets)
- [Verificar um desenho na visualização de impressão](topic:print-view)
