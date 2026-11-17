---
title: Deixar um assistente de IA trabalhar com seu modelo
summary: Ative os assistentes em Configurações para que um assistente no seu computador possa localizar elementos, ler suas propriedades, isolá-los na vista e desenhar paredes, portas, janelas, pisos, níveis e grades, por meio do CadCraft Studio. Desligado até você ativá-lo.
keywords: ia, assistente, mcp, script, automação, studio, localizar elementos, isolar, propriedades, permissões, desconectar, atividade, desenhar paredes, adicionar portas, adicionar janelas, níveis, grades, pisos, desfazer, salvar, linha de comando, cli, sem janela, usar com assistentes de IA
from: c5ee595b
---

## O que você vai aprender

Como permitir que um assistente de IA (qualquer assistente que fale MCP) examine o modelo IFC aberto e desenhe nele, o que ele pode e não pode fazer, e como interrompê-lo.

## O que um assistente pode fazer no BimCraft

| Ele pede para | O que acontece | Requer |
|---|---|---|
| Localizar elementos | Ele recebe uma lista de elementos por classe, pavimento, nome ou valor de propriedade, como faz **Localizar** | Leitura |
| Ler propriedades | Ele recebe os atributos de um elemento, tipo, conjuntos de propriedades e quantidades, como **Propriedades** mostra | Leitura |
| Descrever o modelo, listar paredes | Ele recebe os níveis, paredes, portas, janelas, ambientes, pisos, grades e pilares, e os extremos, tipo e altura de cada parede | Leitura |
| Isolar, tornar transparente, ocultar ou exibir | A vista 3D muda como se você tivesse usado o menu {{ui:Exibir}} | Alterar a vista e desenhar |
| Desenhar paredes, portas, janelas, pisos, níveis ou linhas de grade | O modelo muda como se você tivesse usado as ferramentas de {{ui:Desenhar}}: paredes se unem, ambientes, pisos e telhados acompanham | Alterar a vista e desenhar |
| Alterar um nome ou um valor de propriedade | Nome, Descrição, Tipo de objeto ou Etiqueta de um elemento, ou um valor de propriedade. Um valor que ele compartilha com outros elementos é copiado para ele antes; um valor do tipo muda somente quando o assistente indica, porque todo elemento desse tipo acompanha | Alterar a vista e desenhar |
| Mover, excluir, alterar paredes, portas e janelas | Elementos são movidos ou excluídos junto com o que hospedam; paredes desenhadas com as ferramentas de {{ui:Desenhar}} mudam pelos extremos ou tipo, portas e janelas pela posição, tamanho ou tipo, e ambientes e junções acompanham | Alterar a vista e desenhar |
| Configurar, organizar e ler uma tabela | "Uma tabela de portas por pavimento, com resistência ao fogo e ferragens": o assistente nomeia a tabela, suas colunas (uma propriedade ou etiqueta vira uma coluna) e seu agrupamento; o BimCraft a preenche a partir do modelo e a organiza, usando o padrão do escritório para o que o assistente não indicou. A configuração entra na sua lista de Tabelas. Cada linha devolvida nomeia seus elementos, para que ele possa selecioná-los | Leitura para ler; Alterar a vista e desenhar para salvar uma configuração |
| Exportar uma tabela | CSV, Excel ou texto separado por tabulações para colar no Google Sheets (nada é enviado ao Google) | Exportar |
| Ler e definir acabamentos de ambientes | Os tipos de acabamento, o piso, a parede e o forro de cada ambiente, zonas; áreas, quantidades de azulejos e volumes de substrato então vêm das tabelas de acabamento | Leitura; Alterar a vista e desenhar para definir |
| Selecionar elementos, desfazer as próprias etapas | Elementos são escolhidos na vista; sua última etapa é desfeita | Alterar a vista e desenhar |
| Salvar | Um novo arquivo IFC com todas as alterações, como faz {{ui:Salvar como IFC}} (o original nunca é alterado) | Salvar |
| Exportar USD | Os modelos abertos como OpenUSD (.usda, .usdc ou .usdz), como grava {{ui:USD}} na barra de ferramentas | Exportar |
| Renderizar uma imagem, executar a fila de renderização | Uma imagem da vista 3D, como faz a caixa de diálogo {{ui:Renderizar}} com as suas configurações de renderização, a menos que peça outras, ou imagens de alta qualidade adicionadas à fila da caixa de diálogo e renderizadas uma após a outra (a fila precisa de WebGPU). Nada no modelo muda ([Renderizar uma imagem](topic:render)) | Exportar |

Cada alteração feita por um assistente é uma etapa em **Alterações**, com o nome "Assistente: …" (por exemplo, "Assistente: adicionar 4 paredes"), para que {{key:Mod+Z}} desfaça toda a sua ação e você veja de quem foi a etapa. Na janela, ele não consegue abrir arquivos: você abre o modelo; ele trabalha com o que estiver aberto.

## Ativar

Os assistentes chegam ao BimCraft pelo CadCraft Studio no seu computador; o navegador comum não tem como entrar.

1. Abra {{ui:Configurações}} e escolha a aba **BimCraft**.
2. Em **Assistentes**, marque **Permitir que assistentes de IA e scripts usem o BimCraft**.
3. **Leitura** já vem marcada. Marque também **Alterar a vista e desenhar** se o assistente puder isolar e ocultar elementos e desenhar, e **Salvar** se ele puder salvar o modelo como um novo arquivo.
4. Conecte o assistente no Studio (o Studio mostra o endereço e as configurações a colar nele).

## Enquanto um assistente está conectado

Uma nota no topo do painel direito informa qual assistente está conectado e o que ele pode fazer. Clique em {{ui:Desconectar}} para encerrar a sessão dele imediatamente; ele precisa conectar de novo para continuar.

**Atividade**, em **Assistentes** nas Configurações, lista cada chamada feita pelo assistente, da mais recente para a mais antiga, com indicação de ter funcionado ou não.

:::tip
Pergunte em linguagem simples, por exemplo "isole as paredes externas do Nível 1", "quais portas não têm resistência ao fogo?" ou "desenhe um ambiente de 6 por 4 metros no Nível 1 com uma porta na parede sul". O assistente localiza os elementos e os mostra na sua vista, ou os desenha.
:::

## Sem janela: scripts e linha de comando

As mesmas ferramentas de desenho funcionam em arquivos IFC de pastas que você indicar, sem nenhuma janela aberta: o servidor MCP e a linha de comando do CadCraft podem criar um novo edifício ou abrir um arquivo IFC, descrevê-lo, adicionar paredes, portas, janelas, pisos, níveis e grades, desfazer e salvá-lo como um novo arquivo `.ifc`. Você decide quais pastas ele pode usar e se pode alterar ou salvar algo.

## Desativar

Desmarque **Permitir que assistentes de IA e scripts usem o BimCraft**. Todos os assistentes são desconectados imediatamente, e a configuração é mantida para a próxima vez.

## Veja também

- [Receitas para assistentes de IA](common:assistants-recipes): exemplos práticos, cada um com as ferramentas que chama.
- [Localizar elementos por classe, nome ou propriedade](topic:find)
- [Ocultar, isolar e tornar elementos transparentes](topic:hide-and-isolate)
- [Configurações do BimCraft](topic:settings)
