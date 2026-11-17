---
title: Do arquivo de projeto para o BimCraft via IFC
summary: As configurações de exportação IFC que abrem melhor no BimCraft (versão, conjuntos de propriedades, quantidades base, ambientes, modelos vinculados, coordenadas), como abrir o resultado e o que a exportação mantém.
keywords: exportar, exportação ifc, rvt para ifc, converter, 3d, geometria, ifc2x3, ifc4, vista de coordenação, vista de referência, vista de transferência de projeto, conjuntos de propriedades, quantidades base, ambientes, espaços, arquivos vinculados, coordenadas compartilhadas, ponto de levantamento, ponto base do projeto, configurações
from: 3efd5fc9
---

## O que você vai fazer

Transforme um arquivo de projeto em um arquivo IFC que você pode girar, inspecionar, verificar e editar no BimCraft. O BimCraft ainda não lê o modelo 3D dentro de um arquivo `.rvt`, então a exportação acontece no programa que criou o arquivo (o Revit); o BimCraft abre o resultado.

## Passos

1. Abra o projeto no programa que o criou. O cartão do BimCraft indica a versão em que ele foi salvo.
2. Abra uma vista 3D que mostre o que você quer exportar.
3. Escolha **File > Export > IFC**.
4. Na caixa de exportação, escolha uma configuração (ou **Modify setup…**) com as definições abaixo.
5. Escolha uma pasta e um nome de arquivo, e exporte.
6. No BimCraft, clique em {{ui:Choose a file}} e escolha o novo arquivo `.ifc`. Os modelos vinculados exportados como arquivos próprios são abertos na mesma cena com {{ui:Add a model}}.

## As configurações que abrem melhor aqui

| Configuração no exportador | Escolha | Motivo |
|---|---|---|
| IFC version | **IFC4 Reference View** para visualizar, verificar e fazer levantamentos; **IFC2X3 Coordination View 2.0** quando outros precisarem de IFC2X3 | Os dois abrem por completo. **IFC4 Design Transfer View** também abre, com formas mais exatas, mas o arquivo é maior e mais lento. |
| File type | **IFC** (simples) | O BimCraft não abre `.ifczip` nem `.ifcxml`. |
| Phase / visible elements | A fase que você quer e **Export only elements visible in view**, quando você configurar a vista 3D para isso | Deixa de fora o que você ocultou de propósito. |
| Property sets | **Export Revit property sets** e **Export IFC common property sets** | Eles viram os conjuntos de propriedades que o BimCraft mostra em {{ui:Propriedades}}, e que {{ui:Localizar}}, {{ui:Cor}} e {{ui:Verificações do modelo}} usam. |
| Base quantities | **Export base quantities** | {{ui:Totais de quantitativos}} e as tabelas os usam (comprimentos, áreas, volumes) em vez de estimar. |
| Rooms and areas | **Export rooms in 3D views** (ou a opção Rooms / Spaces) | Os ambientes chegam como espaços: clique em {{ui:Espaços}} para vê-los. |
| Linked files | **Export linked files as separate IFCs** | Cada vínculo vira um arquivo próprio; abra-os juntos com {{ui:Add a model}} e eles se alinham. |
| Coordinate base | **Shared coordinates** (ou o ponto de levantamento) | O arquivo então carrega a sua posição no mapa (IfcMapConversion), e assim Medir › Localização, as camadas de mapa no terreno e as nuvens de pontos posicionadas por coordenadas de mapa funcionam. O ponto base do projeto mantém o modelo perto da origem, mas sem a sua posição no mapa. |
| Split walls and columns by level | Ativado, quando você levanta quantitativos por pavimento | A parte de cada pavimento é um elemento próprio. |

## O que você deve ver

O modelo em 3D, com os pavimentos tirados dos níveis do projeto e as informações do projeto no painel {{ui:Arquivo}}. **Exported from** indica o exportador.

## O que a exportação mantém e o que não mantém

- **Mantido**: geometria, pavimentos, tipos de elementos, nomes, tipos, a maioria dos parâmetros (como conjuntos de propriedades), quantidades base quando solicitadas, ambientes como espaços e a posição no mapa com coordenadas compartilhadas.
- **Não mantido**: vistas, folhas, anotações, famílias como famílias editáveis, worksets e opções de projeto. Um arquivo IFC é um retrato dos elementos do modelo, não do projeto. Para as folhas, exporte DWG e abra-o na vista 2D.

## Erros comuns

- **Parâmetros ausentes no BimCraft.** Ative as opções de conjunto de propriedades acima e exporte de novo.
- **Ambientes ausentes.** Ative a opção de ambientes e depois clique em {{ui:Espaços}}.
- **Salvar como `.ifczip`.** Escolha IFC simples, ou descompacte o `.ifczip`.
- **Sem posição no mapa.** Exporte com coordenadas compartilhadas e verifique se o ponto de levantamento do projeto está definido.
- **Esperar que as edições voltem ao projeto.** As edições que você salva no BimCraft vão para um novo arquivo IFC, não para o arquivo de projeto.
