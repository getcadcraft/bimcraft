---
title: O que o BimCraft lê de cada formato
summary: Exatamente o que o BimCraft lê de arquivos IFC, de projeto e de família, DWG e DXF, e o que ele deixa de lado.
keywords: formatos, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versões, compatibilidade, o que é lido
from: 9b8dfb4f
---

## IFC

| Lê | Detalhes |
|---|---|
| Geometria | Cada elemento com forma, colorido como o arquivo indica. Ambientes e espaços são desenhados transparentes e ocultos no início |
| Pavimentos | Pavimentos da edificação em ordem de elevação, e quais elementos ficam em cada um. Elementos fora de qualquer pavimento são agrupados como "Sem pavimento" |
| Contagem de elementos | Quantos elementos de cada tipo (paredes, portas, lajes…), mostrado em {{ui:Elements}} |
| Dados do projeto | Nome do projeto, nome longo e fase; esquema; o programa de exportação, o autor e a data de exportação, do cabeçalho do arquivo |
| Dados do elemento | Nome, tipo, tipo de objeto, etiqueta, descrição, GlobalId; cada conjunto de propriedades e conjunto de quantidades do elemento e do seu tipo |

Editável: nome, tipo de objeto, etiqueta, descrição e valores únicos de propriedade. Salvo como um novo arquivo IFC. Os esquemas IFC2X3, IFC4 e IFC4X3 abrem, lidos pelo motor IFC próprio do BimCraft; o que ele ainda não consegue desenhar aparece listado como **Ainda não desenhado** no painel {{ui:File}}. O modelo é movido para a origem ao abrir, então um modelo posicionado longe dela ainda aparece no centro da tela. `.ifczip` e `.ifcxml` não abrem.

## Arquivos de projeto e de família

`.rvt` projetos, `.rte` modelos de projeto, `.rfa` famílias e `.rft` modelos de família.

| Lê | Detalhes |
|---|---|
| Informações do arquivo | Versão e build, compartilhamento de trabalho, caminho do modelo central, último caminho salvo, nome do usuário, idioma regional, GUID do documento |
| Informações do projeto | Os campos próprios do projeto (nome, número, cliente, endereço, status…), sem os padrões de um novo projeto |
| Informações da família | Nome da família, categoria, versão, última atualização, e seus parâmetros por grupo |
| Vínculos | A lista de modelos vinculados, vínculos de CAD, imagens e tabelas de palavras-chave que o arquivo aponta |
| Imagem de visualização | A miniatura salva no arquivo |

Não lidos: o modelo 3D, os elementos, as vistas, as folhas e as tabelas. Eles são guardados em um formato não documentado. O BimCraft lê apenas algumas dezenas de kilobytes de cada arquivo, então o tamanho do arquivo quase não importa.

## Arquivos de projeto .pln, .pla, .tpl e .bpn

Ainda não lidos: o BimCraft informa isso quando você abre um deles. Exporte IFC para o modelo e DWG para os desenhos; veja [Abrir arquivos de projeto .pln e .pla](topic:pln-project-files).

## DWG e DXF

| Lê | Detalhes |
|---|---|
| Espaços | Espaço modelo e cada folha (layout), na ordem das abas |
| Viewports | As viewports de cada folha, com sua escala, rotação e camadas congeladas |
| Camadas | Nome, cor, ligada/desligada, congelada, marca de plotagem e espessura de linha |
| Objetos | Linhas, polilinhas, arcos, círculos, elipses, splines, hachuras e sólidos, texto e texto de múltiplas linhas, blocos e atributos, cotas, linhas de chamada e multichamadas, tabelas, pontos, imagens |
| Desenhos vinculados | Desenhados onde são inseridos, quando seus arquivos são encontrados |
| Imagens | Desenhadas a partir dos arquivos de imagem quando encontrados (PNG, JPEG, GIF, BMP, WebP; não TIFF) |
| Etiquetas de equipamento | Etiquetas de itens de serviço de alimentação (atributos `KCL-ITEM`), para a tabela de equipamentos |

Tudo o mais é contado em **Ainda não desenhado**, nunca adivinhado. Os formatos DWG do AutoCAD 2000 a 2018 são os verificados (arquivos R13 e R14 também são aceitos, mas nenhum estava no conjunto de testes; DWGs mais antigos não abrem). O painel {{ui:Drawing}} mostra o código do formato, como AC1032. Arquivos DXF de todas as versões abrem, inclusive R12. Ambos são lidos pelos leitores próprios do BimCraft, nesta aba. Nada é salvo de volta em DWG ou DXF.

## Em uma pasta

| Tipo | Extensões | No relatório |
|---|---|---|
| Modelos | `.rvt` `.rfa` `.rte` `.rft` | Agrupados com cópias de backup numeradas, verificados quanto à integridade, com a ficha lida e os vínculos conferidos |
| IFC | `.ifc` | Listados; abrem em 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Listados com os modelos que os vinculam; DWG e DXF abrem em 2D, DGN não abre |
| Sobras | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Listados em **Separados** |
| Pastas de manutenção | `*_backup`, `*_log`, `Revit_temp`, pastas ocultas | Listadas em **Separados**, não lidas |

Veja [Relatório da pasta: funções, situações e vínculos](topic:folder-roles).
