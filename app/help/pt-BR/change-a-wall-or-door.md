---
title: Alterar uma parede, porta ou janela
summary: Clique em uma parede, porta ou janela desenhada e altere seu tipo, tamanho, altura ou posição em Propriedades, ou arraste-a na planta; cada alteração é uma etapa de desfazer.
keywords: esquadrar, quadrado, 90, ângulo reto, inclinar, ângulo, orto, tamanho do ambiente, face interna, face externa, medir a partir de, distância de deslocamento, distância digitada, curva, arco, altura do arco, raio, linha de localização, justificação, alterar, editar, propriedades, tipo de parede, espessura, comprimento, altura, deslocamento da base, topo, nível, inverter, externa, tamanho da porta, tamanho da janela, peitoril, distância, mover, grip, arrastar, alterar tipo, vários
from: 63052d5d
---

## O que você vai fazer

Altere o que você desenhou: selecione uma parede, porta ou janela e digite um novo número em **Propriedades** ou arraste-a na planta. A planta e a vista 3D acompanham, os cantos se unem de novo, e portas e janelas permanecem nas suas paredes.

## Alterar uma parede

1. Com {{ui:Desenhar}} ativado e {{ui:Selecionar}} ativado, clique na parede na planta (ou na vista 3D).
2. **Propriedades** mostra uma caixa com os números da parede. Altere um e pressione {{key:Enter}}:
   - **Tipo de parede**: outro dos tipos iniciais. A espessura e as camadas mudam com ele.
   - **Espessura**: qualquer espessura. O tipo mantém suas outras camadas e sua camada principal (os montantes ou o bloco) absorve a diferença, por exemplo "Externa 2×6, 200 mm".
   - **Medir a partir de**: **Linha de centro**, **Face interna** ou **Face externa**. **Comprimento** e **Tamanho do ambiente** são lidos e definidos a partir dela. Face externa é o que as cotas da planta mostram.
   - **Comprimento**: a extremidade da parede se move ao longo da sua linha. A parede unida a essa extremidade se move em esquadro com ela mesma e mantém seu ângulo.
   - **Tamanho do ambiente** (quando há uma parede paralela do outro lado do ambiente): digite o tamanho desejado. Esta parede se move em esquadro e as paredes unidas se esticam para acompanhar.
   - **Mover em esquadro**: digite a distância para mover a parede em esquadro com ela mesma: um número simples a move para fora, um número negativo a move para dentro.
   - **Ângulo com a parede unida**: o ângulo com a parede unida no seu início. Digite 90 para deixá-la em esquadro. Uma parede não unida a nada mostra **Direção**, em graus a partir do leste.
   - {{ui:Esquadrar}}: devolve as paredes ligadas a esta aos ângulos retos, na direção em que a maior parte do comprimento delas corre. Funciona no ambiente ou layout conectado inteiro, qualquer que seja a parede selecionada. Uma parede a mais de 10 graus de um ângulo reto permanece como está, então uma parede a 45 graus é segura. Um {{ui:Desfazer}} desfaz tudo.
   - **Altura da parede**: **Até o nível acima** segue esse nível; **Até o Nível 3** (e qualquer nível mais acima) cria uma parede que atravessa os níveis intermediários; digitar uma altura então define quanto abaixo ou acima desse nível fica o topo. **Altura fixa** mantém o número que você digitar. **Atravessa** lista os níveis que essa parede atravessa: ela é desenhada mais clara nas plantas deles, os ambientes ali se fecham contra ela, e portas e janelas podem ser posicionadas nela a partir dessas plantas. Ela é movida e remodelada no nível em que começa.
   - **Deslocamento da base**: quanto acima do nível a parede começa. Seu topo permanece onde estava.
   - **Externa**: {{ui:Inverter}} coloca as camadas externas na outra face.
   - **Linha de localização**: **Linha de centro**, **Face externa**, **Face interna**, **Face esquerda** ou **Face direita**. Mudar isso não move nada. Depois, quando a parede ficar mais espessa (por tipo ou por **Espessura**) ou o lado externo for invertido, a linha de localização permanece no lugar e a parede cresce ou inverte em torno dela. Uma parede reta que chega a ela em um canto acompanha, para que o canto continue fechado. A linha de localização da parede selecionada é desenhada tracejada na planta. Selecione várias paredes para definir isso em todas elas.
   - **Altura do arco** (paredes curvas): quanto o meio se afasta de uma linha reta. 0 deixa a parede reta; um valor negativo a curva para o outro lado. O raio aparece ao lado.
3. Cada alteração é uma etapa em **Alterações**; {{ui:Desfazer}} a desfaz.

## Arrastar uma parede na planta

Quando uma parede está selecionada, ela mostra três grips: um quadrado em cada extremidade e um círculo no meio.

- Arraste uma extremidade para tornar a parede mais longa, mais curta ou para girá-la. Ela encaixa como a ferramenta Parede, e se ajusta em esquadro com a parede unida à outra extremidade quando você está a menos de 3 graus; {{key:Shift}} a mantém nos eixos da planta.
- As paredes unidas à extremidade que você arrasta mantêm seu ângulo: suas extremidades deslizam ao longo das próprias linhas até encontrar a nova linha da parede, então nada fica inclinado. Mantenha {{key:Mod}} para um arraste livre (a extremidade da parede unida acompanha a sua e aquela parede gira), ou {{key:Alt}} para desfazer as uniões nesta parede.
- Arraste o meio para mover a parede inteira em esquadro com ela mesma, qualquer que seja a direção do arraste. Seus cantos deslizam ao longo das paredes unidas, então essas paredes mantêm seu ângulo.
- Mantenha {{key:Mod}} enquanto arrasta o meio para um movimento livre, quando você realmente quer desfazer o ângulo. {{ui:Esquadrar}} o devolve.
- Enquanto um grip está pressionado, digite uma distância e pressione {{key:Enter}} (ou solte): a parede vai exatamente essa distância, na direção em que você arrastava. {{key:Esc}} cancela o movimento.
- Uma parede curva selecionada mostra grips nas extremidades e um grip redondo no meio do arco. Arraste o grip redondo para curvá-la.
- Portas e janelas permanecem na parede. Uma parede curta demais para o que ela contém é recusada com a mensagem "Não cabe nessa parede."

## Alterar uma porta ou janela

1. Clique na porta ou janela na planta.
2. Em **Propriedades**: **Tipo** (outra porta ou janela do mesmo tipo), **Largura**, **Altura**, **Peitoril** (janelas), **Do início** e **Do fim** (a distância de cada extremidade da face da parede até a borda dela), **Dobradiças** {{ui:Inverter}} (portas de uma folha e janelas de abrir; portas de correr, de embutir, de correr externa e sanfonadas dizem **Abre para** em vez disso; janelas fixas, de guilhotina e panorâmicas e portas duplas não têm nenhuma), e **Sentido de abertura** (portas) ou **Lado do caixilho** (janelas) {{ui:Inverter}}.
3. Ou arraste-a ao longo da parede, ou para outra parede: veja [Portas e janelas](topic:doors-and-windows).

## Alterar vários de uma vez

Selecione várias paredes (ou várias portas, ou várias janelas) com {{key:Shift}}+clique ou {{key:Mod}}+clique. **Propriedades** oferece o que elas têm em comum: **Alterar tipo…**, a altura, o tamanho. Uma alteração define todas elas, e um {{ui:Desfazer}} desfaz tudo.

## Bom saber

- Os números aparecem na {{ui:Unidades}} escolhida na barra de ferramentas.
- Paredes, portas e janelas de outros programas mostram seus dados IFC em **Propriedades**, como antes, sem esta caixa.
