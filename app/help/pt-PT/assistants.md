---
title: Deixe um assistente de IA trabalhar com o seu modelo
summary: Ative os assistentes nas Definições para que um assistente no seu computador possa localizar elementos, ler as suas propriedades, isolá-los na vista e desenhar paredes, portas, janelas, pisos, níveis e eixos, através do CadCraft Studio. Desligado até o ativar.
keywords: ia, assistente, mcp, script, automatização, studio, localizar elementos, isolar, propriedades, permissões, desligar, atividade, desenhar paredes, adicionar portas, adicionar janelas, níveis, eixos, pisos, anular, guardar, linha de comandos, cli, sem interface, usar com assistentes de IA
from: c5ee595b
---

## O que vai aprender

Como deixar um assistente de IA (qualquer assistente que fale MCP) consultar o modelo IFC que tem aberto e desenhar nele, o que pode e não pode fazer, e como o parar.

## O que um assistente pode fazer no BimCraft

| Pede para | O que acontece | Precisa de |
|---|---|---|
| Localizar elementos | Recebe uma lista de elementos por classe, piso, nome ou valor de propriedade, tal como **Localizar** faz | Ler |
| Ler propriedades | Recebe os atributos, o tipo, os conjuntos de propriedades e as quantidades de um elemento, tal como **Propriedades** os mostra | Ler |
| Descrever o modelo, listar paredes | Recebe os níveis, paredes, portas, janelas, compartimentos, pisos, eixos e pilares, e as extremidades, o tipo e a altura de cada parede | Ler |
| Isolar, tornar transparente, ocultar ou mostrar | A vista 3D muda como se tivesse usado o menu {{ui:Mostrar}} | Alterar a vista e desenhar |
| Desenhar paredes, portas, janelas, pisos, níveis ou linhas de eixo | O modelo muda como se tivesse usado as ferramentas {{ui:Desenhar}}: as paredes unem-se, e os compartimentos, pisos e coberturas acompanham | Alterar a vista e desenhar |
| Alterar um nome ou um valor de propriedade | O Nome, a Descrição, o Tipo de objeto ou a Etiqueta de um elemento, ou um valor de propriedade. Um valor que partilhe com outros elementos é copiado para ele primeiro; o valor do tipo só muda quando o assistente o indicar, porque todos os elementos desse tipo o seguem | Alterar a vista e desenhar |
| Mover, eliminar, alterar paredes, portas e janelas | Os elementos movem-se ou são eliminados juntamente com os que os acolhem; as paredes desenhadas com as ferramentas {{ui:Desenhar}} mudam pelas extremidades ou pelo tipo, as portas e janelas pela posição, tamanho ou tipo, e os compartimentos e as ligações acompanham | Alterar a vista e desenhar |
| Configurar, organizar e ler um mapa | «Um mapa de portas por piso, com classificação de resistência ao fogo e ferragens»: o assistente indica o nome do mapa, as suas colunas (uma propriedade ou etiqueta torna-se uma coluna) e o agrupamento; o BimCraft preenche-o a partir do modelo e dispõe-no, tirando do padrão do escritório o que o assistente não indicou. A configuração junta-se à sua lista de Mapas. Cada linha devolvida indica os seus elementos, para que possa selecioná-los | Ler para ler; Alterar a vista e desenhar para guardar uma configuração |
| Exportar um mapa | CSV, Excel ou texto separado por tabulações para colar no Google Sheets (nada é enviado ao Google) | Exportar |
| Ler e definir os acabamentos dos compartimentos | Os tipos de acabamento, o acabamento do piso, da parede e do teto de cada compartimento, e as zonas; as áreas, o número de azulejos e os volumes do suporte vêm depois dos mapas de acabamentos | Ler; Alterar a vista e desenhar para definir |
| Selecionar elementos, anular os próprios passos | Os elementos são selecionados na vista; o seu último passo é anulado | Alterar a vista e desenhar |
| Guardar | Um novo ficheiro IFC com todas as alterações, como o faz {{ui:Guardar como IFC}} (o original nunca é alterado) | Guardar |
| Exportar USD | Os modelos abertos em OpenUSD (.usda, .usdc ou .usdz), como o faz {{ui:USD}} na barra de ferramentas | Exportar |
| Renderizar uma imagem, executar a fila de renderização | Uma imagem da vista 3D, como a faz a caixa de diálogo {{ui:Render}} com as suas definições de Render, a menos que peça outras; ou imagens de alta qualidade acrescentadas à fila da caixa de diálogo e renderizadas uma após outra (a fila precisa de WebGPU). Nada no modelo muda ([Renderizar uma imagem](topic:render)) | Exportar |

Cada alteração feita por um assistente é um passo em **Alterações**, com o nome «Assistente: …» (por exemplo, «Assistente: adicionar 4 paredes»), por isso {{key:Mod+Z}} anula toda a sua ação, e pode ver de quem foi o passo. Na janela, não pode abrir ficheiros: o modelo abre-se à parte e o assistente trabalha com o que estiver aberto.

## Ativar

Os assistentes chegam ao BimCraft através do CadCraft Studio no seu computador; o navegador simples não tem forma de entrar.

1. Abra {{ui:Definições}} e escolha o separador **BimCraft**.
2. Em **Assistentes**, marque **Permitir que os assistentes de IA e os scripts usem o BimCraft**.
3. **Ler** já vem marcado. Marque também **Alterar a vista e desenhar** se o assistente puder isolar e ocultar elementos e desenhar, e **Guardar** se puder guardar o modelo como um novo ficheiro.
4. Ligue o assistente no Studio (o Studio mostra o endereço e as definições para colar nele).

## Enquanto um assistente está ligado

Uma nota no topo do painel direito indica qual o assistente ligado e o que pode fazer. Clique em {{ui:Desligar}} para terminar a sessão de imediato; ele tem de voltar a ligar-se para continuar.

**Atividade**, em **Assistentes** nas Definições, lista todas as chamadas feitas pelo assistente, das mais recentes para as mais antigas, com indicação de terem funcionado ou não.

:::tip
Peça em palavras simples, por exemplo «isolar as paredes exteriores do Nível 1», «que portas não têm classificação de resistência ao fogo?» ou «desenhar um compartimento de 6 por 4 metros no Nível 1 com uma porta na parede sul». O assistente localiza os elementos e mostra-os na vista, ou desenha-os.
:::

## Sem janela: scripts e linha de comandos

As mesmas ferramentas de desenho funcionam em ficheiros IFC de pastas que indique, sem nenhuma janela aberta: o servidor MCP e a linha de comandos do CadCraft podem criar um novo edifício ou abrir um ficheiro IFC, descrevê-lo, acrescentar paredes, portas, janelas, pisos, níveis e eixos, anular e guardá-lo como um novo ficheiro `.ifc`. Define-se quais as pastas que pode usar e se pode alterar ou guardar seja o que for.

## Desativar

Desmarque **Permitir que os assistentes de IA e os scripts usem o BimCraft**. Todos os assistentes são desligados de imediato, e a definição fica guardada para a próxima vez.

## Ver também

- [Receitas para assistentes de IA](common:assistants-recipes): exemplos resolvidos, cada um com as ferramentas que chama.
- [Localizar elementos por classe, nome ou propriedade](topic:find)
- [Ocultar, isolar e tornar elementos transparentes](topic:hide-and-isolate)
- [Definições do BimCraft](topic:settings)
