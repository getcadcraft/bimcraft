---
title: Exportar o modelo em USD
summary: Escreva os modelos IFC abertos em USD para renderização, montagem de cenas e outros programas 3D, com a classe IFC, o GlobalId e as propriedades de cada elemento.
keywords: usd, usda, usdc, usdz, openusd, exportar, ifc, globalid, propriedades, pisos, disciplinas, montagem de cenas, archviz, renderização
from: 2be5f7b8
---

{{ui:USD}} na barra de ferramentas escreve o que está aberto (todos os modelos, os federados onde os colocou) como um único ficheiro USD.

## Exportar

1. Escolha {{ui:USD}} na barra de ferramentas.
2. Escolha {{ui:Texto (.usda)}}, {{ui:Binário (.usdc)}} ou {{ui:Pacote (.usdz)}}.
3. O ficheiro é transferido. A barra de estado indica quantos elementos entraram.

## O que está no ficheiro

| No modelo IFC | No ficheiro USD |
|---|---|
| Implantação, edifício, pisos | Grupos encadeados, pisos por ordem de cota |
| Cada elemento | Uma primitiva sob o seu piso e disciplina (Arquitetura, Estrutura, MEP, Mobiliário, Implantação, Espaços, Outros), com a geometria como malha |
| Classe, GlobalId, nome, tipo, etiqueta | Atributos com os nomes `ifc:class`, `ifc:globalId`, `ifc:name` e assim por diante |
| Conjuntos de propriedades e de quantidades | Um atributo por propriedade; comprimentos, áreas e volumes em metros, metros quadrados e metros cúbicos |
| Cores | Materiais (com transparência) |
| Espaços | Mantidos, marcados como guias para que os renderizadores os ignorem |

A geometria fica nas coordenadas do próprio ficheiro IFC. A organização segue as convenções escritas do CadCraft para USD em edifícios.
