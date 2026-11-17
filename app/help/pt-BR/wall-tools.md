---
title: Formas de parede, dividir, deslocar, esticar e travar
summary: Desenhe paredes como retângulo, polígono, arco, sobre linhas escolhidas ou em volta de um contorno; divida-as, retire um trecho, desloque, estique por caixa, alinhe e trave-as entre si, a uma cota ou a uma linha de eixo. Cada alteração mantém as paredes unidas e é um passo de desfazer.
keywords: trocar tipo, mudar tipo, retipar, o que se moveu, lod, nível de desenvolvimento, estilo de junção, meia-esquadria, encontro, esquadro, junções de parede, próxima, atravessa, desativar junção, ativar junção, prioridade de camada, núcleo, prioridade, junção, retângulo, retângulo girado, polígono, inscrito, circunscrito, arco, centro, arco tangente, linhas escolhidas, tab, traçar, contorno, varinha mágica, dividir, dividir com vão, vão, excluir segmento, reunir, deslocamento, cópia, esticar por caixa, marquise, esticar, alinhar, cadeado, restrição, travar cota, editar cota, eixo, travar na grade, mover linha de eixo, deslocamento de posição, junção desligada, extremidades livres, crescer a partir de, medir a partir de, linha de centro, face interna, face externa, desunir, alt
from: 5b7d2f75
---

## O que você vai fazer

Criar e alterar paredes com as receitas da ferramenta Parede. Cada uma termina do mesmo jeito que desenhar uma parede pelos seus cantos: os cantos se unem sozinhos, as junções ficam gravadas no arquivo, e a alteração inteira é um passo em **Alterações** que {{ui:Undo}} desfaz. As paredes mantêm sua identidade: uma parede que você divide, desloca ou estica continua sendo a mesma parede, com suas portas, janelas e cotas.

## Desenhar um retângulo, polígono ou arco

Com {{ui:Draw}} ativado, abra {{ui:Shapes}} no grupo Desenhar (ou escolha uma forma na lista **Forma** da linha Parede). A linha Parede mostra o tipo de parede, a referência de desenho, o lado externo e o topo, como para a ferramenta {{ui:Wall}}. Depois clique, ou digite os pontos (x,y · @dx,dy · @comprimento<ângulo · um comprimento ao longo do ponteiro):

- **Retângulo**: dois cantos opostos. Quatro paredes, quatro junções nos cantos, um passo.
- **Retângulo girado**: onde o primeiro lado começa e termina (isso define sua direção e seu comprimento), depois um terceiro clique para o outro lado.
- **Polígono**: o centro, depois um canto (**Inscrito**) ou o meio de um lado (**Circunscrito**). Defina **Lados** (3 a 64) antes.
- **Arco, centro**: o centro, o início (que define o raio), o fim. **Sentido**: o caminho mais curto, anti-horário ou horário. Um arco de três quartos de círculo é desenhado como duas paredes.
- **Arco tangente**: clique na extremidade de uma parede, depois onde o arco termina. O arco sai da extremidade da parede na direção própria dela.

Uma forma fechada tem seu exterior voltado para fora. Desenhada na **Face externa** ou **Face interna**, a face em que você clica é a que permanece fixa.

## Paredes em linhas que você já tem

- **Escolher linhas**: clique em uma linha e uma parede é colocada nela. Pressione {{key:Tab}} (ou segure {{key:Shift}} enquanto clica) para pegar a cadeia inteira de linhas unidas ponta a ponta. As linhas são as linhas de desenho desta vista, a referência de traçado e as linhas de eixo.
- **Contorno por traçado**: clique dentro de uma área fechada por essas linhas ou por paredes. As paredes contornam a menor área em volta do clique.

## Definir antes de desenhar: deslocamento e junção

A linha Parede tem mais dois campos, usados pela ferramenta {{ui:Wall}} e pelas formas:

- **Deslocamento**: as paredes são desenhadas a esta distância da linha clicada: + à sua esquerda, − à sua direita, vistas no sentido em que você desenha.
- **Junção**: desmarque para desenhar paredes isoladas. Suas extremidades recebem **Desativar junção** e ficam livres onde quer que estejam (veja [Alterar uma parede](topic:change-a-wall-or-door)).

## Dividir, retirar um trecho, reunir

Abra {{ui:Walls}} no grupo Editar.

- **Dividir**: clique em uma parede onde ela deve ser cortada, ou digite a distância do início. Perto de uma parede que a cruza, o corte se ajusta ao ponto de encontro. As duas partes têm o mesmo tipo e permanecem unidas ponta a ponta. **Vão** deixa um espaço desta medida centralizado no corte. **Extremidades livres** dá às extremidades cortadas Desativar junção (Configurações › BimCraft › Paredes › **Quando uma parede é dividida** define qual opção vem marcada no início). Uma porta ou janela vai com o trecho em que está; um corte que a atravessa é recusado.
- **Excluir segmento**: clique onde o trecho começa e onde termina. Uma porta nele vai junto.
- **Reunir**: clique nas duas partes de uma mesma parede (em linha, mesmo tipo). Elas voltam a ser uma parede só, a primeira que você clicou, com as portas de ambas.

## Estilo de junção, Desativar junção, prioridade de camada

Abra {{ui:Walls}} no grupo Editar.

- **Estilo de junção**: clique em um canto onde duas paredes retas terminam. Cada clique passa para o próximo estilo: **Meia-esquadria** (as duas extremidades cortadas na linha do canto interno ao externo, como todo canto começa), **Encontro** (uma parede avança até a face externa da outra, que para contra o lado dela) e **Esquadro** (como encontro, e a parede que avança termina em esquadro; em ângulo reto parece encontro). **Próxima**, ou {{key:Tab}}, torna a outra parede a que avança. A lista **Estilo** na barra mostra o canto clicado por último. As mesmas duas escolhas estão em **Propriedades** de uma parede: **Estilo de junção no início / no fim** e **Atravessa**. Cada alteração é um passo em **Alterações**. A planta, o corpo 3D, os ambientes e as quantidades acompanham.
- Em um T, a parede cujo lado é encontrado sempre atravessa. Onde duas paredes se cruzam, um clique (ou **Contínua onde cruza** em Propriedades) diz qual das duas é contínua; isso decide quais camadas da parede são desenhadas através do cruzamento.
- O estilo pertence à junção: permanece quando as paredes se movem e só sai quando a junção sai (a parede é excluída, dividida naquela extremidade, ou a extremidade recebe Desativar junção). Um canto com parede curva, ou onde três ou mais paredes se encontram, mantém a meia-esquadria. Um canto mais agudo que cerca de 30 graus, ou mais raso que cerca de 150, também volta para a meia-esquadria.
- **Desativar junção**: clique perto de uma extremidade de parede. Essa extremidade fica livre: não se une a nada, onde quer que a parede vá, até você clicar nela de novo. Extremidades livres são marcadas com uma cruz enquanto a ferramenta está ativa. A mesma chave é **Junção no início / Junção no fim** em Propriedades.
- **Prioridade de camada**: onde paredes com camadas se encontram, a camada mais forte corta a mais fraca, então núcleos se unem a núcleos e um acabamento para contra a camada mais forte. Cada camada tem uma prioridade de 0 a 999; por padrão ela vem da função da camada (estrutura 800, substrato 600, isolamento 400, membrana 300, acabamento 200, uma câmara de ar 100). {{ui:Layer priority}} abre a composição de parede, onde a coluna **Prioridade** define o número próprio de uma camada. Camadas de mesma prioridade param uma contra a outra, e uma linha é desenhada só entre materiais diferentes. Você vê isso nas plantas com detalhe **Médio** ou **Fino**, em cantos, junções em T e cruzamentos de duas paredes retas; Configurações › BimCraft › Paredes › **Limpar camadas de parede onde as paredes se encontram** desliga. Isso muda só o que é desenhado dentro das paredes: os contornos e as quantidades das paredes permanecem como o estilo de junção os define.

## Trocar o tipo de muitas paredes

Passar de plantas de esboço para desenhos de trabalho é sobretudo uma troca de tipo. Você não redesenha nada.

1. Selecione as paredes (uma, ou várias com {{key:Ctrl}} ou {{key:Shift}}).
2. Em Propriedades, pressione **Trocar tipo…** sob Tipo de parede (ou abra {{ui:Walls}} no grupo Editar e escolha {{ui:Swap type}}, que abre a mesma lista). A lista abre dentro de Propriedades, no bloco das próprias paredes selecionadas. Não é uma caixa de diálogo e não cobre nada: a planta, a vista 3D e a seleção continuam funcionando enquanto ela está aberta, e ela acompanha as paredes que você seleciona.
3. A lista mostra todos os tipos de parede com sua espessura e sua marcação LOD, por exemplo "Parede 230 genérica, LOD 200" e "230 tijolo de barro, rebocada dos dois lados, LOD 300". Os tipos que as paredes selecionadas têm agora são marcados. Digite em **Localizar** para filtrar: um nome, uma espessura ou `lod 300`.
4. Clique em um tipo. Cada parede selecionada muda para ele em um só passo, então um {{ui:Undo}} desfaz a troca inteira. O pequeno x fecha a lista.

Cada parede mantém sua linha de localização. Uma parede sobre a linha de centro cresce para os dois lados; uma parede cuja linha de localização é uma face mantém essa face e cresce para o outro lado, e as paredes unidas a ela acompanham nos cantos. Paredes travadas a uma parede trocada também a acompanham. Portas e janelas permanecem nas suas paredes e são recortadas de novo para a nova espessura.

Após a troca, a lista mostra **O que se moveu**: quantas paredes mudaram e para o quê, a espessura e o LOD antes e depois, as paredes que se deslocaram lateralmente para manter sua linha de localização, as paredes unidas que acompanharam, as portas e janelas reinseridas, e cada ambiente cuja área mudou, com sua área antes e depois. A barra de status diz o mesmo em uma linha. O relatório apenas informa; nunca interrompe uma troca. Escolher um tipo em **Propriedades › Tipo de parede** faz a mesma troca e dá o mesmo relatório.

Duas coisas interrompem uma troca, e então nada é alterado: uma porta ou janela que não caberia mais na sua parede (uma parede fica mais curta onde um canto acompanha; torne a porta mais estreita ou afaste-a do canto antes) e uma trava que a troca quebraria (uma parede travada a uma linha de eixo pelo seu centro enquanto sua linha de localização é uma face; destrave-a ou volte a linha de localização para o centro).

Um assistente conectado ao BimCraft pode fazer a mesma troca (ferramentas `wall_types_list` e `walls_swap_type`) e recebe o mesmo relatório de volta.

A marcação LOD de um tipo é definida no editor de composição de parede: veja [Composições de parede](topic:wall-assemblies).

## Deslocar e esticar por caixa

- **Deslocamento**: clique em uma parede, depois no lado para onde movê-la, ou digite a distância. A parede se move em esquadro em relação a si mesma, e as paredes unidas a ela se esticam. Marque **Copiar** para uma cópia paralela (ela não fica unida à original).
- **Esticar por caixa**: clique em dois cantos de uma caixa, depois em um ponto de origem e em um ponto de destino. Cada extremidade de parede dentro da caixa se move; uma parede inteiramente dentro se move, e as paredes que encostam nela vão junto; paredes que cruzam a caixa se esticam.

## Editar uma cota e travá-la

Escolha uma cota de referência ({{ui:Annotate}} › {{ui:Reference dimension}}) e digite seu valor em **Propriedades**: a parede da sua segunda referência se move em esquadro em relação a si mesma, a primeira referência se mantém, e as paredes unidas acompanham. Marque **Travar esta cota** para manter o valor: quando qualquer uma das paredes se mover depois, a outra acompanha. Um valor travado não pode ser sobrescrito até você desmarcá-lo.

## Alinhar e travar

**Alinhar e travar**: clique em uma face de parede (ou na linha de centro, perto do meio da parede) ou em uma linha de eixo, depois na face da parede que deve ser trazida para essa linha. A parede se move em esquadro até ela. Marque **Travar** antes para mantê-las alinhadas: um cadeado aparece na planta, e quando uma parede se move a outra acompanha. Em **Propriedades** de uma parede, a lista **Travas** mostra cada uma com **Destravar**.

## Travar paredes a linhas de eixo

Escolha uma parede que segue uma linha de eixo, ou cuja extremidade está sobre uma, e escolha a linha de eixo em **Propriedades** › **Travar na grade**. Depois escolha a linha de eixo com a ferramenta {{ui:Grid}} e digite uma distância em {{ui:Move by}}: a linha se move em esquadro em relação a si mesma, e as paredes travadas a ela acompanham, com suas paredes unidas, em um só passo. Uma parede travada a uma linha de eixo não pode sair dela sozinha (mova a linha, ou destrave a parede); uma linha de eixo girada de modo que uma parede travada não consiga permanecer em esquadro sobre ela é recusada. Renomear a linha mantém a trava; excluí-la remove a trava.

## Comprimento: qual lado permanece, e o que ele mede

- **Crescer a partir de** (Propriedades de uma parede): **Início permanece** (a extremidade se move), **Fim permanece** (o início se move) ou **Centro permanece** (as duas extremidades se movem pela metade). Enquanto você digita o Comprimento, a planta marca o ponto que permanece. A parede unida na extremidade que se move, move-se em esquadro em relação a si mesma e mantém seu ângulo.
- **Medir a partir de** (ao lado de Dimensões na planta, em Propriedades e em Configurações › BimCraft › Paredes): a linha de centro, a face interna ou a face externa. O campo Comprimento e as cotas de parede da planta leem a mesma referência, então concordam. Começa na linha de centro.
- Para mover uma parede livre de suas junções (elas se rompem, a parede mantém sua identidade), segure {{key:Alt}} enquanto arrasta o grip do meio.

## Vale saber

- Estas receitas são as da especificação da ferramenta de parede (páginas 4 a 9). Estilo de junção e prioridade de camada são feitos para paredes retas; a prioridade de camada aparece só na planta (não em cortes, elevações ou 3D, onde a parede é um único corpo), não em nós de três paredes ou mais, e membranas não são prolongadas.
- O estilo de uma junção é gravado no registro dela no arquivo IFC (o nome do `IfcRelConnectsPathElements`, por exemplo `CadCraft join L butt 1`), então outros programas ainda leem a junção, e um arquivo mais antigo abre com meias-esquadrias.
- As travas e as junções são gravadas no arquivo IFC (as travas como `CadCraft_WallHolds` no projeto, as junções como `IfcRelConnectsPathElements`), então estão lá quando você abrir o arquivo de novo.
- Paredes curvas podem ser divididas, reunidas e ter um trecho retirado; não são deslocadas nem travadas.
- Veja também [Desenhar paredes](topic:draw-walls), [Alterar uma parede, porta ou janela](topic:change-a-wall-or-door) e [Forma de parede](topic:wall-shape).
