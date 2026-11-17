---
title: Formatos de nuvens de pontos: o que abre e o que exportar
summary: Quais os ficheiros de digitalização a laser que abrem na vista 3D, quais são formato próprio do fabricante de um scanner, e o que exportar do software do scanner para que a digitalização abra aqui.
keywords: nuvem de pontos, digitalização a laser, digitalização, formatos, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, exportar, não consigo abrir, não lido
from: 1e985f01
---

## O que abre aqui

Abra estes ficheiros com {{ui:Aberta}} ou arrastando-os para a página (veja o tópico sobre mostrar uma nuvem de pontos ao lado do modelo):

| Formato | Extensão | O que é lido |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: pontos, cores, intensidade, classes LiDAR, o sistema de coordenadas. LAZ até 1 GB. |
| E57 | `.e57` | Cada digitalização do ficheiro, colocada pela sua pose; cores, ou intensidade quando o ficheiro não tem cores. As imagens do ficheiro ficam de fora (é indicado). Até 6 milhões de pontos e 512 MB por agora: exporte digitalizações maiores como LAS ou LAZ. |
| PLY | `.ply` | Texto e binário (ambas as ordens de bytes): as coordenadas x y z dos vértices, cores e intensidade. As faces ficam de fora (é indicado). |
| PCD | `.pcd` | Texto e binário: x y z, cores agrupadas ou separadas, intensidade. Os ficheiros PCD comprimidos ainda não são lidos: guarde-os como binário ou texto. |
| PTX | `.ptx` | Uma ou mais digitalizações, cada uma colocada pela sua própria transformação; os pontos que o scanner não mediu ficam de fora. Metros. |
| PTS, XYZ | `.pts`, `.xyz` | Texto: x y z, com intensidade e cores quando as colunas existem. |

## Ficheiros que só o software do fabricante lê

Alguns ficheiros de digitalização são formato próprio do fabricante de um scanner, sem descrição publicada nem leitor aberto. O BimCraft não os consegue ler e, ao abrir um deles, aparece um cartão que indica o que é e o que fazer. Exporte a digitalização a partir do software do fabricante como E57 ou LAS (ou PTX, PTS) e depois abra o ficheiro exportado.

| Ficheiro | Extensão | Exportar a partir de |
|---|---|---|
| Projeto ReCap | `.rcp` | ReCap: abra o projeto e exporte-o. O projeto apenas aponta para as suas digitalizações, por isso copiar só o `.rcp` não dá pontos. |
| Digitalização ReCap | `.rcs` | ReCap: abra o projeto a que a digitalização pertence e exporte-o. |
| Digitalização FARO | `.fls` | FARO SCENE. |
| Digitalização Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Digitalização Trimble | `.tzf` | Trimble RealWorks ou Trimble Business Center. |
| Digitalização Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Quando a exportação pedir um formato, LAS ou LAZ mantém tudo o que o BimCraft mostra (cores, intensidade, classes e o sistema de coordenadas) no ficheiro mais pequeno.
:::

## Porque não são lidos estes ficheiros

Estes formatos não são publicados, e a única forma de os ler é a biblioteca de software de cada fabricante, sob os seus próprios termos. O BimCraft lê apenas formatos que consegue ler com o seu próprio código no seu computador, por isso uma digitalização nunca tem de ser enviada para lado nenhum para ser aberta.
