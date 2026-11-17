---
title: Exportar o modelo como USD
summary: Grave os modelos IFC abertos como USD para renderização, montagem de cena e outros programas 3D, com a classe IFC, o GlobalId e as propriedades de cada elemento.
keywords: usd, usda, usdc, usdz, openusd, exportar, ifc, globalid, propriedades, pavimentos, disciplinas, montagem de cena, archviz, renderização
from: 2be5f7b8
---

{{ui:USD}} na barra de ferramentas grava o que está aberto (todos os modelos, os federados onde você os posicionou) como um único arquivo USD.

## Exportar

1. Escolha {{ui:USD}} na barra de ferramentas.
2. Escolha {{ui:Texto (.usda)}}, {{ui:Binário (.usdc)}} ou {{ui:Pacote (.usdz)}}.
3. O arquivo é baixado. A barra de status informa quantos elementos entraram.

## O que há no arquivo

| No modelo IFC | No arquivo USD |
|---|---|
| Terreno, edifício, pavimentos | Grupos aninhados, pavimentos em ordem de elevação |
| Cada elemento | Um prim sob o seu pavimento e disciplina (Arquitetura, Estrutura, MEP, Mobiliário, Terreno, Espaços, Outros), com a geometria como malha |
| Classe, GlobalId, nome, tipo, etiqueta | Atributos chamados `ifc:class`, `ifc:globalId`, `ifc:name` e assim por diante |
| Conjuntos de propriedades e de quantidades | Um atributo por propriedade; comprimentos, áreas e volumes em metros, metros quadrados e metros cúbicos |
| Cores | Materiais (com transparência) |
| Espaços | Mantidos, marcados como guias para que os renderizadores os ignorem |

A geometria fica nas coordenadas do próprio arquivo IFC. O layout segue as convenções USD escritas pelo CadCraft para edifícios.
