---
title: Formas de parede, dividir, deslocar, esticar e bloquear
summary: Desenhar paredes como retângulo, polígono, arco, sobre linhas escolhidas ou em redor de um contorno; dividi-las, retirar um troço, deslocá-las, esticá-las por caixa, alinhá-las e bloqueá-las entre si, a uma cota ou a uma linha de grelha. Cada alteração mantém as paredes ligadas e é um passo de Anular.
keywords: trocar tipo, mudar tipo, redefinir tipo, o que se moveu, lod, nível de desenvolvimento, estilo de ligação, meia-esquadria, topo, esquadrar, ligações de paredes, seguinte, passa através, impedir ligação, permitir ligação, prioridade da camada, núcleo, prioridade, junção, retângulo, retângulo rodado, polígono, inscrito, circunscrito, arco, centro, arco tangente, escolher linhas, tabulação, traçar, contorno, varinha mágica, dividir, dividir com intervalo, intervalo, eliminar segmento, voltar a juntar, deslocar, cópia, esticar por caixa, janela de seleção, esticar, alinhar, bloquear, cadeado, restrição, bloquear cota, editar cota, grelha, bloquear à grelha, mover linha de grelha, desvio de posição, ligação desligada, autónoma, crescer a partir de, medir a partir de, linha de eixo, face interior, face exterior, desligar, alt
from: 5b7d2f75
---

## O que se faz

Criar e alterar paredes com as receitas da ferramenta Parede. Cada uma termina da mesma forma que desenhar uma parede pelos seus cantos: os cantos ligam-se por si, as ligações ficam guardadas no ficheiro, e a alteração inteira é um passo em **Alterações** que {{ui:Anular}} desfaz. As paredes mantêm a sua identidade: uma parede que dividir, deslocar ou esticar continua a ser a mesma parede, com as suas portas, janelas e cotas.

## Desenhar um retângulo, polígono ou arco

Com {{ui:Desenhar}} ativo, abra {{ui:Formas}} no grupo Desenhar (ou escolha uma forma na lista **Forma** da linha Parede). A linha Parede mostra o tipo de parede, a referência de desenho, o lado exterior e o topo, como para a ferramenta {{ui:Parede}}. Depois clique, ou escreva os pontos (x,y · @dx,dy · @comprimento<ângulo · um comprimento na direção do ponteiro):

- **Retângulo**: dois cantos opostos. Quatro paredes, quatro ligações de canto, um passo.
- **Retângulo rodado**: onde começa e acaba o primeiro lado (o que define a sua rotação e comprimento), depois um terceiro clique para o outro lado.
- **Polígono**: o centro, depois um canto (**Inscrito**) ou o meio de um lado (**Circunscrito**). Defina primeiro os **Lados** (3 a 64).
- **Arco, centro**: o centro, o início (que define o raio), o fim. **Sentido**: o caminho mais curto, no sentido contrário ao dos ponteiros do relógio ou no sentido dos ponteiros do relógio. Uma varredura de três quartos de círculo é desenhada como duas paredes.
- **Arco tangente**: clique no fim de uma parede, depois onde o arco termina. O arco sai do fim da parede na direção própria da parede.

Uma forma fechada fica com o seu exterior virado para fora. Desenhada na **Face exterior** ou na **Face interior**, a face em que clicar é a que se mantém no lugar.

## Paredes sobre linhas que já existem

- **Escolher linhas**: clique numa linha e uma parede fica sobre ela. Prima {{key:Tab}} (ou mantenha {{key:Shift}} ao clicar) para tomar toda a cadeia de linhas ligadas ponta a ponta. As linhas são as linhas de desenho desta vista, a referência de traçado e as linhas de grelha.
- **Traçar contorno**: clique dentro de uma área fechada por essas linhas ou por paredes. As paredes contornam a menor área à volta do clique.

## Definir antes de desenhar: deslocamento e ligação

A linha Parede tem mais dois campos, usados pela ferramenta {{ui:Parede}} e pelas formas:

- **Offset**: as paredes são desenhadas a esta distância da linha em que clica: + para a sua esquerda, − para a sua direita, vistas no sentido em que desenha.
- **Ligação**: desmarque para desenhar paredes autónomas. As suas extremidades ficam com **Impedir ligação** e mantêm-se livres onde quer que vão (veja [Alterar uma parede](topic:change-a-wall-or-door)).

## Dividir, retirar um troço, voltar a juntar

Abra {{ui:Paredes}} no grupo Editar.

- **Dividir**: clique numa parede onde deve ser cortada, ou escreva a distância desde o seu início. Perto de uma parede que a atravessa, o corte encaixa no ponto onde se encontram. As duas partes têm o mesmo tipo e mantêm-se ligadas ponta a ponta. **Intervalo** deixa um espaço com esse comprimento centrado no corte. **Extremidades livres** dá às extremidades cortadas a opção Impedir ligação (Definições › BimCraft › Paredes › **Ao dividir uma parede** define qual fica marcada desde o início). Uma porta ou janela segue o troço em que está; um corte que a atravesse é recusado.
- **Eliminar segmento**: clique onde o troço começa e onde termina. Uma porta nesse troço vai com ele.
- **Voltar a juntar**: clique nas duas partes de uma mesma parede (alinhadas, do mesmo tipo). Voltam a ser uma só parede, a primeira em que clicou, com as portas de ambas.

## Estilo de ligação, Impedir ligação, prioridade da camada

Abra {{ui:Paredes}} no grupo Editar.

- **Estilo de ligação**: clique num canto onde duas paredes retas terminam. Cada clique passa ao estilo seguinte: **Meia-esquadria** (ambas as extremidades cortadas na linha do canto interior ao canto exterior, que é como começa todo o canto), **Topo** (uma parede atravessa até à face exterior da outra, que pára contra o seu lado) e **Esquadrar** (como topo, e a parede que atravessa acaba em esquadro; num ângulo reto parece topo). **Seguinte**, ou {{key:Tab}}, faz da outra parede a que atravessa. A lista **Estilo** na barra mostra o canto em que clicou por último. As mesmas duas escolhas estão em **Propriedades** de uma parede: **Estilo de ligação no início / no fim** e **Passa através**. Cada alteração é um passo em **Alterações**. A planta, o corpo 3D, os compartimentos e as quantidades acompanham.
- Num T, a parede cujo lado é encontrado passa sempre através. Onde duas paredes se cruzam, um clique (ou **Contínua onde cruza** em Propriedades) indica qual das duas é contínua; isso decide de qual parede as camadas são desenhadas através do cruzamento.
- O estilo pertence à ligação: mantém-se quando as paredes se movem e só desaparece quando a ligação desaparece (a parede é eliminada, dividida nessa extremidade, ou a extremidade passa a Impedir ligação). Um canto com uma parede curva, ou onde se encontram três ou mais paredes, mantém a meia-esquadria. Um canto mais agudo do que cerca de 30 graus, ou mais plano do que cerca de 150, também recorre à meia-esquadria.
- **Impedir ligação**: clique perto de uma extremidade de parede. Essa extremidade fica livre: não se liga a nada, onde quer que a parede vá, até clicar nela de novo. As extremidades livres são marcadas com uma cruz enquanto a ferramenta estiver ativa. O mesmo interruptor é **Ligar no início / Ligar no fim** em Propriedades.
- **Prioridade da camada**: onde paredes com camadas se encontram, a camada mais forte corta a mais fraca, pelo que os núcleos se ligam a núcleos e um acabamento pára contra a camada mais forte. Cada camada tem uma prioridade de 0 a 999; por predefinição, vem da função da camada (estrutura 800, suporte 600, isolamento 400, membrana 300, acabamento 200, uma caixa de ar 100). {{ui:Prioridade da camada}} abre a composição da parede, onde a coluna **Prioridade** define o número próprio de uma camada. Camadas com a mesma prioridade param uma contra a outra, e uma linha só é desenhada entre materiais diferentes. Vê-se nas plantas com detalhe **Médio** ou **Fino**, nos cantos, nos T e nos cruzamentos de duas paredes retas; Definições › BimCraft › Paredes › **Limpar camadas das paredes onde se encontram** desliga-o. Altera apenas o que é desenhado dentro das paredes: os contornos e as quantidades das paredes ficam como o estilo de ligação os dá.

## Trocar o tipo de muitas paredes

Passar de plantas de esboço a desenhos de trabalho é sobretudo uma mudança de tipo: uma parede genérica passa a ser a composição específica. Não se redesenha nada.

1. Escolha as paredes (uma, ou várias com {{key:Ctrl}} ou {{key:Shift}}).
2. Em Propriedades, prima **Trocar tipo…** em Tipo de parede (ou abra {{ui:Paredes}} no grupo Editar e escolha {{ui:Trocar tipo}}, que abre a mesma lista). A lista abre dentro de Propriedades, no bloco das paredes escolhidas. Não é uma caixa de diálogo e não tapa nada: a planta, a vista 3D e a seleção continuam a funcionar enquanto está aberta, e segue as paredes que escolhe.
3. A lista mostra cada tipo de parede com a sua espessura e a sua marcação LOD, por exemplo "Parede 230 genérica, LOD 200" e "230 tijolo de argila, rebocada nos dois lados, LOD 300". Os tipos que as paredes escolhidas têm agora estão marcados. Escreva em **Localizar** para filtrar: um nome, uma espessura, ou `lod 300`.
4. Clique num tipo. Cada parede escolhida muda para ele num só passo, pelo que um {{ui:Anular}} desfaz a troca inteira. O pequeno x fecha a lista.

Cada parede mantém a sua linha de localização. Uma parede no seu eixo cresce para os dois lados; uma parede cuja linha de localização é uma face mantém essa face e cresce para o outro lado, e as paredes ligadas a ela acompanham nos cantos. As paredes bloqueadas a uma parede trocada também a acompanham. As portas e janelas ficam nas suas paredes e são recortadas de novo para a nova espessura.

Após a troca, a lista mostra **O que se moveu**: quantas paredes mudaram e para quê, a espessura e o LOD antes e depois, as paredes que se deslocaram de lado para manter a sua linha de localização, as paredes ligadas que acompanharam, as portas e janelas que voltaram a ser alojadas, e cada compartimento cuja área mudou, com a área antes e depois. A barra de estado diz o mesmo numa linha. O relatório apenas informa; nunca impede uma troca. Escolher um tipo em **Propriedades › Tipo de parede** faz a mesma troca e dá o mesmo relatório.

Há duas situações que impedem uma troca, e então nada é alterado: uma porta ou janela que deixaria de caber na sua parede (uma parede fica mais curta onde um canto acompanha; torne a porta mais estreita ou afaste-a do canto primeiro), e um bloqueio que a troca quebraria (uma parede bloqueada a uma linha de grelha pelo seu eixo enquanto a sua linha de localização é uma face; desbloqueie-a ou volte a pôr a linha de localização no eixo).

Um assistente ligado ao BimCraft pode fazer a mesma troca (ferramentas `wall_types_list` e `walls_swap_type`) e recebe o mesmo relatório.

A marcação LOD de um tipo é definida no editor de composições de parede: veja [Composições de parede](topic:wall-assemblies).

## Deslocar e esticar por caixa

- **Offset**: clique numa parede e depois no lado para onde a mover, ou escreva a distância. A parede desloca-se em esquadro consigo própria e as paredes ligadas a ela esticam-se. Marque **Copiar** para obter antes uma cópia paralela (não fica ligada ao original).
- **Esticar por caixa**: clique em dois cantos de uma caixa, depois num ponto de origem e num ponto de destino. Cada extremidade de parede dentro da caixa move-se; uma parede totalmente dentro da caixa move-se, e as paredes que nela encostam também; as paredes que atravessam a caixa são esticadas.

## Editar uma cota e bloqueá-la

Escolha uma cota de referência (Anotar › {{ui:Cota de referência}}) e escreva o seu valor em **Propriedades**: a parede da sua segunda referência desloca-se em esquadro consigo própria, a primeira referência mantém-se e as paredes ligadas acompanham. Marque **Bloquear esta cota** para manter o valor: quando qualquer das paredes se mover mais tarde, a outra acompanha. Um valor bloqueado não pode ser escrito por cima até desmarcar.

## Alinhar e bloquear

**Alinhar e bloquear**: clique numa face de parede (ou no eixo, perto do meio da parede) ou numa linha de grelha, depois na face da parede a trazer para essa linha. A parede desloca-se em esquadro para ela. Marque **Bloquear** primeiro para as manter alinhadas: um cadeado aparece na planta, e quando uma parede se move a outra segue-a. Em **Propriedades** de uma parede, a lista **Bloqueios** mostra cada um deles, com **Desbloquear**.

## Bloquear paredes a linhas de grelha

Escolha uma parede que segue uma linha de grelha, ou cuja extremidade está sobre uma, e escolha a linha de grelha em **Propriedades** › **Bloquear à grelha**. Depois escolha a linha de grelha com a ferramenta {{ui:Grelha}} e escreva uma distância em {{ui:Mover em}}: a linha desloca-se em esquadro consigo própria e as paredes bloqueadas a ela seguem-na, com as suas paredes ligadas, num só passo. Uma parede bloqueada a uma linha de grelha não pode sair dela por si só (mova a linha, ou desbloqueie a parede); uma linha de grelha rodada de modo que uma parede bloqueada não possa ficar em esquadro sobre ela é recusada. Mudar o nome da linha mantém o bloqueio; eliminá-la remove o bloqueio.

## Comprimento: que lado se mantém, e o que mede

- **Crescer a partir de** (Propriedades de uma parede): **O início mantém-se** (a extremidade move-se), **O fim mantém-se** (o início move-se) ou **O centro mantém-se** (ambas as extremidades se movem metade). Enquanto escreve o Comprimento, a planta marca o ponto que se mantém. A parede ligada à extremidade que se move desloca-se em esquadro consigo própria e mantém o seu ângulo.
- **Medir a partir de** (ao lado de Cotas na planta, em Propriedades e em Definições › BimCraft › Paredes): o eixo, a face interior ou a face exterior. O campo Comprimento e as cotas de paredes da planta leem o mesmo, pelo que concordam. Começa no eixo.
- Para mover uma parede livre das suas ligações (elas quebram-se, a parede mantém a sua identidade), mantenha {{key:Alt}} enquanto arrasta a sua pega do meio.

## Bom saber

- Estas receitas são as da especificação da ferramenta de paredes (páginas 4 a 9). O estilo de ligação e a prioridade da camada são feitos para paredes retas; a prioridade da camada aparece apenas na planta (não em cortes, alçados ou 3D, onde uma parede é um só corpo), não em nós de três ou mais paredes, e as membranas não são transportadas.
- O estilo de uma ligação fica guardado no seu registo no ficheiro IFC (o nome do `IfcRelConnectsPathElements`, por exemplo `CadCraft join L butt 1`), para que outros programas continuem a ler a ligação e um ficheiro mais antigo abra com meias-esquadrias.
- Os bloqueios e as ligações ficam guardados no ficheiro IFC (os bloqueios como `CadCraft_WallHolds` no projeto, as ligações como `IfcRelConnectsPathElements`), pelo que estão lá quando abrir o ficheiro de novo.
- Paredes curvas podem ser divididas, voltadas a juntar e ter um troço retirado; não são deslocadas nem bloqueadas.
- Veja também [Desenhar paredes](topic:draw-walls), [Alterar uma parede, porta ou janela](topic:change-a-wall-or-door) e [Dar forma a uma parede](topic:wall-shape).
