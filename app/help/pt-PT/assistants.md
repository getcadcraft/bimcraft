---
title: Permitir que um assistente de IA trabalhe com o seu modelo
summary: Ative os assistentes nas Definições para que um assistente no seu computador possa encontrar elementos, ler as suas propriedades, isolá-los na vista e desenhar paredes, portas, janelas, lajes, níveis e grelhas, através do CadCraft Studio. Desativado até ser ativado.
keywords: ia, assistente, mcp, script, automatização, studio, encontrar elementos, isolar, propriedades, permissões, desligar, atividade, desenhar paredes, adicionar portas, adicionar janelas, níveis, grelhas, lajes, anular, guardar, linha de comandos, cli, sem janela, usar com assistentes de IA
from: 66d72742
---

## O que vai aprender

Como permitir que um assistente de IA (qualquer assistente que fale MCP) consulte o modelo IFC que tem aberto e desenhe nele, o que pode e não pode fazer, e como o parar.

## O que um assistente pode fazer no BimCraft

| Pede para | O que acontece | Precisa de |
|---|---|---|
| Encontrar elementos | Recebe uma lista de elementos por classe, piso, nome ou valor de propriedade, tal como faz **Encontrar** | Ler |
| Ler propriedades | Recebe os atributos, o tipo, os conjuntos de propriedades e as quantidades de um elemento, tal como os mostra **Propriedades** | Ler |
| Descrever o modelo, listar paredes | Recebe os níveis, as paredes, portas, janelas, compartimentos, lajes, grelhas e colunas, e as extremidades, o tipo e a altura de cada parede | Ler |
| Isolar, tornar transparente, ocultar ou mostrar | A vista 3D muda como se tivesse usado o menu {{ui:Mostrar}} | Alterar a vista e desenhar |
| Desenhar paredes, portas, janelas, lajes, níveis ou linhas de grelha | O modelo muda como se tivesse usado as ferramentas de {{ui:Desenhar}}: as paredes unem-se, e os compartimentos, lajes e coberturas acompanham | Alterar a vista e desenhar |
| Alterar um nome ou um valor de propriedade | O Nome, a Descrição, o Tipo de objeto ou a Etiqueta de um elemento, ou um valor de propriedade. Um valor que ele partilha com outros elementos é primeiro copiado para ele; um valor do seu tipo só muda quando o assistente o indicar, porque todos os elementos desse tipo acompanham | Alterar a vista e desenhar |
| Mover, eliminar, alterar paredes, portas e janelas | Os elementos movem-se ou são eliminados com os que hospedam; as paredes desenhadas com as ferramentas de {{ui:Desenhar}} mudam pelas extremidades ou pelo tipo, as portas e janelas pelo lugar, tamanho ou tipo, e os compartimentos e as ligações acompanham | Alterar a vista e desenhar |
| Configurar, organizar e ler um mapa | «Um mapa de portas por piso, com resistência ao fogo e ferragens»: o assistente dá nome ao mapa, às suas colunas (uma propriedade ou etiqueta torna-se uma coluna) e ao seu agrupamento; o BimCraft preenche-o a partir do modelo e organiza-o, tomando do padrão do gabinete o que o assistente não indicou. A configuração junta-se à sua lista de Mapas. Cada linha que recebe de volta indica os seus elementos, para que os possa selecionar | Ler para ler; Alterar a vista e desenhar para guardar uma configuração |
| Exportar um mapa | CSV, Excel ou texto separado por tabulações para colar no Google Sheets (nada é enviado ao Google) | Exportar |
| Ler e definir os acabamentos dos compartimentos | Os tipos de acabamento, o acabamento do piso, da parede e do teto de cada compartimento, e as zonas; as áreas, as contagens de azulejos e os volumes de substrato vêm depois dos mapas de acabamentos | Ler; Alterar a vista e desenhar para definir |
| Selecionar elementos, anular os seus próprios passos | Os elementos são escolhidos na vista; o último passo é anulado | Alterar a vista e desenhar |
| Guardar | Um novo ficheiro IFC com todas as alterações, tal como o produz {{ui:Guardar como IFC}} (o original nunca é alterado) | Guardar |
| Exportar USD | Os modelos abertos como OpenUSD (.usda, .usdc ou .usdz), tal como os escreve {{ui:USD}} na barra de ferramentas | Exportar |
| Renderizar uma imagem, executar a fila de renderização | Uma imagem da vista 3D, tal como a produz a caixa {{ui:Render}} com as suas definições de Render, a não ser que peça outras, ou imagens de alta qualidade adicionadas à fila da caixa e renderizadas uma a seguir à outra (a fila precisa de WebGPU). Nada no modelo muda ([Renderizar uma imagem](topic:render)) | Exportar |

Cada alteração feita por um assistente é um passo em **Alterações**, com o nome «Assistente: …» (por exemplo «Assistente: adicionar 4 paredes»), pelo que {{key:Mod+Z}} anula toda a sua ação, e pode ver de quem foi o passo. Na janela não pode abrir ficheiros: abre-se o modelo, e o assistente trabalha com o que estiver aberto.

## Ativar

Os assistentes chegam ao BimCraft através do CadCraft Studio no seu computador; o navegador comum não tem acesso.

1. Abra {{ui:Definições}} e escolha o separador **BimCraft**.
2. Em **Assistentes**, marque **Permitir que assistentes de IA e scripts usem o BimCraft**.
3. **Ler** está marcado por predefinição. Marque também **Alterar a vista e desenhar** se o assistente puder isolar e ocultar elementos e desenhar, e **Guardar** se puder guardar o modelo como um novo ficheiro.
4. Ligue o assistente no Studio (o Studio mostra o endereço e as definições a colar nele).

## Enquanto um assistente estiver ligado

Uma nota no topo do painel direito indica qual o assistente ligado e o que pode fazer. Clique em {{ui:Desligar}} para terminar a sessão de imediato; terá de voltar a ligar-se para continuar.

A **Atividade**, em **Assistentes** nas Definições, lista todos os pedidos feitos pelo assistente, do mais recente para o mais antigo, com indicação de se foram bem-sucedidos.

:::tip
Escreva em palavras simples, por exemplo «isole as paredes exteriores do Nível 1», «que portas não têm resistência ao fogo?» ou «desenhe um compartimento de 6 por 4 metros no Nível 1, com uma porta na parede sul». O assistente encontra os elementos e mostra-os na vista, ou desenha-os.
:::

## Sem janela: scripts e linha de comandos

As mesmas ferramentas de desenho funcionam em ficheiros IFC nas pastas que indicar, sem janela aberta: o servidor MCP e a linha de comandos do CadCraft podem criar um edifício novo ou abrir um ficheiro IFC, descrevê-lo, acrescentar paredes, portas, janelas, lajes, níveis e grelhas, anular e guardá-lo como um novo ficheiro `.ifc`. Mais quatro ferramentas servem os scripts: `ifc_batch` executa até 200 passos de edição como um só (tudo ou nada: uma anulação desfaz o lote inteiro, e um passo recusado anula os restantes e indica o passo); `ifc_describe` lista os níveis e todas as paredes com as suas portas e janelas; `ifc_render_png` escreve uma imagem de verificação com sombreado liso do modelo (sem materiais, texturas nem sombras) sem janela; `usd_export` escreve `.usda`, `.usdc` ou `.usdz`. Na linha de comandos, `cadcraft bim script.json --from model.ifc -o out.ifc` executa um script de passos, e `--usd`, `--png` e `--plan` escrevem um ficheiro USD, uma imagem ou uma planta a partir da mesma execução. Indique quais as pastas que pode usar e se pode alterar ou guardar alguma coisa.

## Desativar

Desmarque **Permitir que assistentes de IA e scripts usem o BimCraft**. Todos os assistentes são desligados de imediato, e a definição fica guardada para a próxima vez.

## Ver também

- [Receitas para assistentes de IA](common:assistants-recipes): exemplos práticos, cada um com as ferramentas que chama.
- [Encontrar elementos por classe, nome ou propriedade](topic:find)
- [Ocultar, isolar e tornar transparentes elementos](topic:hide-and-isolate)
- [Definições do BimCraft](topic:settings)
