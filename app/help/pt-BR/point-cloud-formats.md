---
title: Formatos de nuvem de pontos: o que abre e o que exportar
summary: Quais arquivos de varredura a laser abrem na vista 3D, quais são formato próprio de um fabricante de scanner e o que exportar do software do scanner para que a varredura abra aqui.
keywords: nuvem de pontos, varredura a laser, varredura, escaneamento, formatos, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, exportação, não abre, não lido
from: 1e985f01
---

## O que abre aqui

Abra estes com {{ui:Aberto}} ou arrastando-os para a página (veja o tópico sobre como mostrar uma nuvem de pontos ao lado do modelo):

| Formato | Extensão | O que é lido |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: pontos, cores, intensidade, classes LiDAR, o sistema de coordenadas. LAZ até 1 GB. |
| E57 | `.e57` | Cada varredura do arquivo, posicionada pela sua pose; cores, ou intensidade quando o arquivo não tem cores. As imagens do arquivo ficam de fora (o BimCraft avisa). Até 6 milhões de pontos e 512 MB por enquanto: exporte varreduras maiores como LAS ou LAZ. |
| PLY | `.ply` | Texto e binário (as duas ordens de bytes): x y z dos vértices, cores e intensidade. As faces ficam de fora (o BimCraft avisa). |
| PCD | `.pcd` | Texto e binário: x y z, cores empacotadas ou separadas, intensidade. Arquivos PCD compactados ainda não são lidos: salve-os como binário ou texto. |
| PTX | `.ptx` | Uma ou mais varreduras, cada uma posicionada pela sua própria transformação; os pontos que o scanner não mediu ficam de fora. Metros. |
| PTS, XYZ | `.pts`, `.xyz` | Texto: x y z, com intensidade e cores quando as colunas existem. |

## Arquivos que só o software do scanner lê

Alguns arquivos de varredura são formato próprio de um fabricante de scanner, sem descrição publicada e sem leitor aberto. O BimCraft não consegue lê-los, e ao abrir um deles aparece um cartão que diz o que é e o que fazer. Exporte a varredura do software do fabricante como E57 ou LAS (ou PTX, PTS) e abra o arquivo exportado.

| Arquivo | Extensão | Exporte pelo |
|---|---|---|
| Projeto ReCap | `.rcp` | ReCap: abra o projeto e exporte-o. O projeto apenas aponta para as suas varreduras, então copiar só o `.rcp` não dá pontos. |
| Varredura ReCap | `.rcs` | ReCap: abra o projeto ao qual a varredura pertence e exporte-o. |
| Varredura FARO | `.fls` | FARO SCENE. |
| Varredura Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Varredura Trimble | `.tzf` | Trimble RealWorks ou Trimble Business Center. |
| Varredura Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Quando a exportação pedir um formato, LAS ou LAZ mantém tudo o que o BimCraft mostra (cores, intensidade, classes e o sistema de coordenadas) no arquivo menor.
:::

## Por que esses arquivos não são lidos

Esses formatos não são publicados, e a única forma de lê-los é pela biblioteca de software de cada fabricante, sob os termos próprios dela. O BimCraft lê apenas formatos que consegue ler com o seu próprio código no seu computador, então uma varredura nunca precisa ser enviada para lugar nenhum para ser aberta.
