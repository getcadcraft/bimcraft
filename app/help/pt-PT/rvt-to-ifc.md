---
title: Do ficheiro de projeto para o BimCraft através de IFC
summary: As definições de exportação IFC que abrem melhor no BimCraft (versão, conjuntos de propriedades, quantidades de base, compartimentos, modelos associados, coordenadas), como abrir o resultado e o que a exportação mantém.
keywords: exportar, exportação IFC, rvt para ifc, converter, 3d, geometria, ifc2x3, ifc4, vista de coordenação, vista de referência, vista de transferência de projeto, conjuntos de propriedades, quantidades de base, compartimentos, espaços, ficheiros associados, coordenadas partilhadas, ponto de levantamento, ponto base do projeto, definições
from: 3efd5fc9
---

## O que vai fazer

Transformar um ficheiro de projeto num ficheiro IFC que pode rodar a vista, inspecionar, verificar e editar no BimCraft. O BimCraft ainda não lê o modelo 3D dentro de um ficheiro `.rvt`, pelo que a exportação é feita no programa que criou o ficheiro (Revit); o BimCraft abre o resultado.

## Passos

1. Abra o projeto no programa que o criou. O cartão do BimCraft indica a versão em que foi guardado.
2. Abra uma vista 3D que mostre o que pretende exportar.
3. Escolha **Ficheiro > Exportar > IFC**.
4. Na caixa de exportação, escolha uma configuração (ou **Modificar configuração…**) com as definições abaixo.
5. Escolha uma pasta e um nome de ficheiro, e exporte.
6. No BimCraft, clique em {{ui:Choose a file}} e escolha o novo ficheiro `.ifc`. Os modelos associados exportados como ficheiros próprios abrem na mesma cena com {{ui:Add a model}}.

## As definições que abrem melhor aqui

| Definição no exportador | Escolha | Porquê |
|---|---|---|
| Versão IFC | **IFC4 Reference View** para ver, verificar e medir quantidades; **IFC2X3 Coordination View 2.0** quando outros precisarem de IFC2X3 | Ambas abrem por completo. **IFC4 Design Transfer View** também abre, com formas mais exatas, mas o ficheiro é maior e mais lento. |
| Tipo de ficheiro | **IFC** (simples) | O BimCraft não abre `.ifczip` nem `.ifcxml`. |
| Fase / elementos visíveis | A fase pretendida e **Exportar apenas os elementos visíveis na vista**, quando configurar a vista 3D para isso | Deixa de fora o que ocultou de propósito. |
| Conjuntos de propriedades | **Exportar conjuntos de propriedades do Revit** e **Exportar conjuntos de propriedades IFC comuns** | Passam a ser os conjuntos de propriedades que o BimCraft mostra em {{ui:Properties}}, e que {{ui:Find}}, {{ui:Color}} e {{ui:Model checks}} usam. |
| Quantidades de base | **Exportar quantidades de base** | As {{ui:Quantity totals}} e os mapas usam-nas (comprimentos, áreas, volumes) em vez de estimar. |
| Compartimentos e áreas | **Exportar compartimentos nas vistas 3D** (ou a opção Compartimentos / Espaços) | Os compartimentos chegam como espaços: clique em {{ui:Spaces}} para os ver. |
| Ficheiros associados | **Exportar ficheiros associados como IFC separados** | Cada associação passa a ser um ficheiro próprio; abra-os em conjunto com {{ui:Add a model}} e alinham-se. |
| Base de coordenadas | **Coordenadas partilhadas** (ou o ponto de levantamento) | O ficheiro passa a levar a sua posição no mapa (IfcMapConversion), pelo que Medir › Localização, as camadas de mapa sobre o terreno e as nuvens de pontos colocadas por coordenadas de mapa funcionam. O ponto base do projeto mantém o modelo perto da origem, mas sem a sua posição no mapa. |
| Dividir paredes e pilares por piso | Ligado, quando extrair quantidades por piso | Cada parte de um piso passa a ser um elemento próprio. |

## O que deve ver

O modelo em 3D, com os pisos tirados dos níveis do projeto e as informações do projeto no painel {{ui:File}}. **Exportado de** indica o exportador.

## O que a exportação mantém, e o que não mantém

- **Mantém**: geometria, pisos, tipos de elementos, nomes, tipos, a maioria dos parâmetros (como conjuntos de propriedades), quantidades de base quando pedidas, compartimentos como espaços, e a posição no mapa com coordenadas partilhadas.
- **Não mantém**: vistas, folhas, anotações, famílias como famílias editáveis, conjuntos de trabalho e opções de projeto. Um ficheiro IFC é um instantâneo dos elementos do modelo, não do projeto. Para as folhas, exporte DWG e abra-o na vista 2D.

## Erros comuns

- **Parâmetros em falta no BimCraft.** Ative as opções de conjuntos de propriedades acima e exporte de novo.
- **Compartimentos em falta.** Ative a opção de compartimentos e depois clique em {{ui:Spaces}}.
- **Guardar como `.ifczip`.** Escolha IFC simples, ou descomprima o `.ifczip`.
- **Sem posição no mapa.** Exporte com coordenadas partilhadas; verifique se o ponto de levantamento do projeto está definido.
- **Esperar que as alterações voltem ao projeto.** As alterações que guardar no BimCraft vão para um novo ficheiro IFC, não para o ficheiro de projeto.
