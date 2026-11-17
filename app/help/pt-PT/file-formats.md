---
title: O que o BimCraft lê de cada formato
summary: Exatamente o que o BimCraft lê de ficheiros IFC, de projeto e de família, DWG e DXF, e o que deixa de lado.
keywords: formatos, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versões, compatibilidade, o que é lido
from: 9b8dfb4f
---

## IFC

| Lê | Detalhes |
|---|---|
| Geometria | Cada elemento com uma forma, colorido como o ficheiro indica. As divisões e os espaços são desenhados transparentes e ocultos no início |
| Pisos | Os pisos do edifício por ordem de cota, e os elementos que estão em cada um. Os elementos sem piso são agrupados como "Sem piso" |
| Contagens de elementos | Quantos elementos de cada tipo (paredes, portas, lajes…), mostrados em {{ui:Elements}} |
| Dados do projeto | Nome do projeto, nome longo e fase; esquema; o programa que exportou, o autor e a data de exportação, a partir do cabeçalho do ficheiro |
| Dados dos elementos | Nome, tipo, tipo de objeto, etiqueta, descrição, GlobalId; cada conjunto de propriedades e de quantidades do elemento e do seu tipo |

Editáveis: nome, tipo de objeto, etiqueta, descrição e valores individuais de propriedades. Guardados como um novo ficheiro IFC. Os esquemas IFC2X3, IFC4 e IFC4X3 abrem, lidos pelo motor IFC próprio do BimCraft; o que ainda não consegue desenhar é listado em **Ainda não desenhado** no painel {{ui:File}}. O modelo é movido para a origem ao abrir, por isso um modelo colocado longe dela continua a aparecer no centro do ecrã. Os ficheiros `.ifczip` e `.ifcxml` não abrem.

## Ficheiros de projeto e de família

`.rvt` projetos, `.rte` modelos de projeto, `.rfa` famílias e `.rft` modelos de família.

| Lê | Detalhes |
|---|---|
| Informação do ficheiro | Versão e compilação, trabalho partilhado, caminho do modelo central, último caminho guardado, nome do utilizador, idioma, GUID do documento |
| Informação do projeto | Os campos próprios do projeto (nome, número, cliente, morada, estado…), sem os valores predefinidos de um projeto novo |
| Informação da família | Nome da família, categoria, versão, última atualização, e os seus parâmetros por grupo |
| Ligações | A lista de modelos ligados, ligações CAD, imagens e tabelas de notas-chave a que o ficheiro aponta |
| Imagem de pré-visualização | A miniatura guardada no ficheiro |

Não lido: o modelo 3D, os elementos, as vistas, as folhas e os mapas. Estão guardados num formato não documentado. O BimCraft lê apenas algumas dezenas de quilobytes de cada ficheiro, por isso o tamanho do ficheiro quase não importa.

## Ficheiros de projeto .pln, .pla, .tpl e .bpn

Ainda não lidos: o BimCraft indica-o quando abre um. Exporte IFC para o modelo e DWG para os desenhos; veja [Abrir ficheiros de projeto .pln e .pla](topic:pln-project-files).

## DWG e DXF

| Lê | Detalhes |
|---|---|
| Espaços | O espaço modelo e cada folha (layout), por ordem dos separadores |
| Janelas de vista | As janelas de vista (viewports) de cada folha, com a sua escala, rotação e camadas congeladas |
| Camadas | Nome, cor, ligada ou desligada, congelada, marca de impressão e espessura de linha |
| Objetos | Linhas, polilinhas, arcos, círculos, elipses, splines, tramas e sólidos, texto e texto multilinha, blocos e atributos, cotas, linhas de chamada e chamadas múltiplas, tabelas, pontos, imagens |
| Desenhos ligados | Desenhados onde são inseridos, quando os seus ficheiros são encontrados |
| Imagens | Desenhadas a partir dos ficheiros de imagem quando são encontrados (PNG, JPEG, GIF, BMP, WebP; não TIFF) |
| Etiquetas de equipamento | Etiquetas de itens de restauração (atributos `KCL-ITEM`), para o mapa de equipamento |

Tudo o resto é contado em **Ainda não desenhado**, nunca adivinhado. Os formatos DWG do AutoCAD 2000 a 2018 são os verificados (os ficheiros R13 e R14 também são aceites, mas nenhum estava no conjunto de testes; os DWG mais antigos não abrem). O painel {{ui:Drawing}} mostra o código do formato (como AC1032). Os ficheiros DXF de todas as versões abrem, incluindo R12. Ambos são lidos pelos leitores próprios do BimCraft, neste separador. Nada é guardado de volta em DWG ou DXF.

## Numa pasta

| Tipo | Extensões | No relatório |
|---|---|---|
| Modelos | `.rvt` `.rfa` `.rte` `.rft` | Agrupados com cópias numeradas, verificados quanto à integridade, ficha lida, ligações verificadas |
| IFC | `.ifc` | Listados; abrem em 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Listados com os modelos que os ligam; DWG e DXF abrem em 2D, DGN não |
| Restos | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Listados em **Afastados** |
| Pastas de manutenção | `*_backup`, `*_log`, `Revit_temp`, pastas ocultas | Listadas em **Afastados**, não lidas |

Veja [Relatório de pasta: funções, estados e ligações](topic:folder-roles).
