---
title: Deixe um assistente de IA trabalhar com o seu modelo
summary: Ative os assistentes em Configurações para que um assistente no seu computador possa localizar elementos, ler as propriedades deles, isolá-los na vista e desenhar paredes, portas, janelas, pisos, níveis e eixos, por meio do CadCraft Studio. Desligado até você ativá-lo.
keywords: ia, assistente, mcp, script, automação, studio, localizar elementos, isolar, propriedades, permissões, desconectar, atividade, desenhar paredes, adicionar portas, adicionar janelas, níveis, eixos, pisos, desfazer, salvar, linha de comando, cli, sem janela, usar com assistentes de ia
from: 66d72742
---

## O que você vai aprender

Como deixar um assistente de IA (qualquer assistente que fale MCP) examinar o modelo IFC que você tem aberto e desenhar nele, o que ele pode e não pode fazer e como interrompê-lo.

## O que um assistente pode fazer no BimCraft

| Ele pede para | O que acontece | Precisa de |
|---|---|---|
| Localizar elementos | Ele recebe uma lista de elementos por classe, pavimento, nome ou valor de propriedade, como **Localizar** faz | Ler |
| Ler propriedades | Ele recebe os atributos de um elemento, o tipo, os conjuntos de propriedades e as quantidades, como **Propriedades** os mostra | Ler |
| Descrever o modelo, listar paredes | Ele recebe os níveis, paredes, portas, janelas, ambientes, pisos, eixos e pilares, e as extremidades, o tipo e a altura de cada parede | Ler |
| Isolar, tornar transparente, ocultar ou exibir | A vista 3D muda como se você tivesse usado o menu {{ui:Exibir}} | Alterar a vista e desenhar |
| Desenhar paredes, portas, janelas, pisos, níveis ou linhas de eixo | O modelo muda como se você tivesse usado as ferramentas de {{ui:Desenhar}}: as paredes se unem, e os ambientes, pisos e coberturas acompanham | Alterar a vista e desenhar |
| Alterar um nome ou um valor de propriedade | O Nome, a Descrição, o Tipo de objeto ou a Etiqueta de um elemento, ou o valor de uma propriedade. Um valor que ele compartilha com outros elementos é copiado para ele antes; um valor do seu tipo muda somente quando o assistente indicar isso, porque todo elemento desse tipo acompanha | Alterar a vista e desenhar |
| Mover, excluir, alterar paredes, portas e janelas | Os elementos são movidos ou excluídos junto com o que hospedam; paredes desenhadas com as ferramentas de {{ui:Desenhar}} mudam pelas extremidades ou pelo tipo, portas e janelas pelo lugar, tamanho ou tipo, e ambientes e uniões acompanham | Alterar a vista e desenhar |
| Configurar, organizar e ler uma tabela | "Uma tabela de portas por pavimento, com resistência ao fogo e ferragens": o assistente nomeia a tabela, as colunas dela (uma propriedade ou etiqueta vira uma coluna) e o agrupamento; o BimCraft a preenche a partir do modelo e a organiza, usando o padrão do escritório para o que o assistente não informou. A configuração entra na sua lista de tabelas. Cada linha devolvida informa os elementos dela, para que ele possa selecioná-los | Ler para ler; Alterar a vista e desenhar para salvar uma configuração |
| Exportar uma tabela | CSV, Excel ou texto separado por tabulações para colar no Google Sheets (nada é enviado ao Google) | Exportar |
| Ler e definir acabamentos de ambientes | Os tipos de acabamento, o acabamento de piso, parede e teto de cada ambiente, e as zonas; áreas, quantidades de peças e volumes de substrato então vêm das tabelas de acabamentos | Ler; Alterar a vista e desenhar para definir |
| Selecionar elementos, desfazer os próprios passos | Os elementos são escolhidos na vista; o último passo dele é desfeito | Alterar a vista e desenhar |
| Salvar | Um novo arquivo IFC com todas as alterações, como faz {{ui:Salvar como IFC}} (o original nunca é alterado) | Salvar |
| Exportar USD | Os modelos abertos como OpenUSD (.usda, .usdc ou .usdz), como {{ui:USD}} na barra de ferramentas os grava | Exportar |
| Renderizar uma imagem, executar a fila de renderização | Uma imagem da vista 3D, como faz a caixa de diálogo {{ui:Renderizar}} com as suas configurações de renderização, a menos que ele peça outras, ou imagens de alta qualidade adicionadas à fila da caixa de diálogo e renderizadas uma após a outra (a fila exige WebGPU). Nada no modelo muda ([Renderizar uma imagem](topic:render)) | Exportar |

Cada alteração feita por um assistente é um passo em **Alterações**, com o nome "Assistente: …" (por exemplo "Assistente: adicionar 4 paredes"), então {{key:Mod+Z}} desfaz a ação inteira dele, e você vê de quem era cada passo. Na janela, ele não consegue abrir arquivos: você abre o modelo, e ele trabalha com o que estiver aberto.

## Ativar

Os assistentes chegam ao BimCraft pelo CadCraft Studio no seu computador; o navegador comum não tem como acessá-lo.

1. Abra {{ui:Configurações}} e escolha a guia **BimCraft**.
2. Em **Assistentes**, marque **Permitir que assistentes de IA e scripts usem o BimCraft**.
3. **Ler** já vem marcada para você. Marque também **Alterar a vista e desenhar** se o assistente puder isolar e ocultar elementos e desenhar, e **Salvar** se ele puder salvar o modelo como um novo arquivo.
4. Conecte o assistente no Studio (o Studio mostra o endereço e as configurações a colar nele).

## Enquanto um assistente estiver conectado

Uma nota no topo do painel direito informa qual assistente está conectado e o que ele pode fazer. Clique em {{ui:Desconectar}} para encerrar a sessão dele imediatamente; ele precisará se conectar de novo para continuar.

**Atividade**, em **Assistentes** nas Configurações, lista cada chamada feita pelo assistente, da mais recente para a mais antiga, com a indicação de se funcionou.

:::tip
Peça com palavras simples, por exemplo "isole as paredes externas do Nível 1", "quais portas não têm resistência ao fogo?" ou "desenhe um ambiente de 6 por 4 metros no Nível 1 com uma porta na parede sul". O assistente localiza os elementos e os mostra na sua vista, ou os desenha.
:::

## Sem janela: scripts e linha de comando

As mesmas ferramentas de desenho funcionam em arquivos IFC das pastas que você indicar, sem nenhuma janela aberta: o servidor MCP e a linha de comando do CadCraft podem criar um edifício novo ou abrir um arquivo IFC, descrevê-lo, adicionar paredes, portas, janelas, pisos, níveis e eixos, desfazer e salvá-lo como um novo arquivo `.ifc`. Mais quatro ferramentas servem a scripts: `ifc_batch` executa até 200 passos de edição como um só (tudo ou nada: um desfazer leva o lote inteiro de volta, e um passo recusado desfaz o resto e informa qual passo foi); `ifc_describe` lista os níveis e cada parede com as portas e janelas dela; `ifc_render_png` grava uma imagem de verificação com sombreamento simples do modelo (sem materiais, texturas ou sombras) sem janela; `usd_export` grava `.usda`, `.usdc` ou `.usdz`. Na linha de comando, `cadcraft bim script.json --from model.ifc -o out.ifc` executa um script de passos, e `--usd`, `--png` e `--plan` gravam um arquivo USD, uma imagem ou uma planta da mesma execução. Você decide quais pastas ele pode usar e se pode alterar ou salvar algo.

## Desligar

Desmarque **Permitir que assistentes de IA e scripts usem o BimCraft**. Todos os assistentes são desconectados imediatamente, e a configuração é mantida para a próxima vez.

## Veja também

- [Receitas para assistentes de IA](common:assistants-recipes): exemplos resolvidos, cada um com as ferramentas que chama.
- [Localizar elementos por classe, nome ou propriedade](topic:find)
- [Ocultar, isolar e tornar elementos transparentes](topic:hide-and-isolate)
- [Configurações do BimCraft](topic:settings)
