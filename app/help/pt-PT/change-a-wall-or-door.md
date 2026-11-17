---
title: Alterar uma parede, porta ou janela
summary: Clique numa parede, porta ou janela desenhada e altere o seu tipo, tamanho, altura ou posição em Propriedades, ou arraste-a na planta; cada alteração é um passo de anulação.
keywords: esquadrar, quadrado, 90, ângulo reto, enviesar, ângulo, orto, tamanho do compartimento, face interior, face exterior, medir a partir de, distância de deslocação, distância digitada, curva, arco, altura do arco, raio, linha de referência, justificação, alterar, editar, propriedades, tipo de parede, espessura, comprimento, altura, deslocamento da base, topo, nível, inverter, exterior, tamanho da porta, tamanho da janela, peitoril, distância, mover, pega, arrastar, alterar tipo, vários
from: 63052d5d
---

## O que vai fazer

Altere o que desenhou: selecione uma parede, porta ou janela e escreva um novo número em **Propriedades** ou arraste-a na planta. A planta e a vista 3D acompanham, os cantos voltam a unir-se, e as portas e janelas mantêm-se nas suas paredes.

## Alterar uma parede

1. Com {{ui:Desenhar}} e {{ui:Selecionar}} ativados, clique na parede na planta (ou na vista 3D).
2. **Propriedades** mostra uma caixa com os números da parede. Altere um e prima {{key:Enter}}:
   - **Tipo de parede**: outro dos tipos iniciais. A espessura e as camadas mudam com ele.
   - **Espessura**: qualquer espessura. O tipo mantém as suas outras camadas e a sua camada principal (os montantes ou o bloco) absorve a diferença, por exemplo "Exterior 2×6, 200 mm".
   - **Medir a partir de**: **Linha de centro**, **Face interior** ou **Face exterior**. **Comprimento** e **Tamanho do compartimento** são lidos e definidos a partir daí. A face exterior é o que as cotas da planta mostram.
   - **Comprimento**: a extremidade da parede desloca-se ao longo da sua linha. A parede ligada nessa extremidade desloca-se perpendicularmente a si própria e mantém o seu ângulo.
   - **Tamanho do compartimento** (quando há uma parede paralela do outro lado do compartimento): escreva o tamanho que quer. Esta parede desloca-se perpendicularmente e as paredes ligadas esticam para acompanhar.
   - **Deslocar perpendicularmente**: escreva a distância a que deve deslocar a parede perpendicularmente a si própria: um número positivo desloca-a para fora, um número negativo para dentro.
   - **Ângulo com a parede ligada**: o ângulo com a parede ligada no seu início. Escreva 90 para a pôr em esquadria. Uma parede não ligada a nada mostra **Direção**, em graus a partir do Este.
   - {{ui:Tornar quadrado}}: volta a pôr em ângulos retos as paredes ligadas a esta, na direção em que a maior parte do seu comprimento corre. Funciona em todo o compartimento ou layout ligado, qualquer que seja a parede que selecionar. Uma parede a mais de 10 graus de um ângulo reto fica como está, por isso uma parede definida a 45 graus está segura. Um {{ui:Anular}} desfaz tudo.
   - **Altura da parede**: **Até ao nível acima** segue esse nível; **Até ao Nível 3** (e qualquer nível acima) faz uma parede que atravessa os níveis intermédios; escrever uma altura define então a distância abaixo ou acima desse nível a que fica o topo. **Altura fixa** mantém o número que escrever. **Atravessa** lista os níveis que essa parede atravessa: é desenhada mais clara nas suas plantas, os compartimentos aí fecham-se contra ela, e portas e janelas podem ser colocadas nela a partir dessas plantas. Move-se e remodela-se no nível onde começa.
   - **Deslocamento da base**: a altura acima do nível a que a parede começa. O seu topo mantém-se onde estava.
   - **Exterior**: {{ui:Inverter}} põe as camadas exteriores na outra face.
   - **Linha de referência**: **Linha de centro**, **Face exterior**, **Face interior**, **Face esquerda** ou **Face direita**. Alterar esta opção não move nada. Mais tarde, quando a parede ficar mais espessa (pelo tipo ou pela **Espessura**) ou o seu exterior for invertido, a linha de referência mantém-se e a parede cresce ou inverte-se à volta dela. Uma parede reta que nela encontra um canto segue-a, para que o canto continue fechado. A linha de referência da parede selecionada é desenhada a tracejado na planta. Selecione várias paredes para a definir em todas.
   - **Altura do arco** (paredes curvas): a distância a que o meio se afasta de uma linha reta. 0 torna-a reta; um valor negativo curva-a para o outro lado. O raio aparece ao lado.
3. Cada alteração é um passo em **Alterações**; {{ui:Anular}} desfaz-a.

## Arrastar uma parede na planta

Quando uma parede está selecionada, mostra três grips (pontos de controlo): um quadrado em cada extremidade e um círculo no meio.

- Arraste uma extremidade para tornar a parede mais comprida, mais curta ou para a rodar. Ajusta-se como a ferramenta Parede, e encaixa em esquadria com a parede ligada na outra extremidade quando está a menos de 3 graus; {{key:Shift}} mantém-na nos eixos da planta.
- As paredes ligadas à extremidade que arrasta mantêm o seu ângulo: as suas extremidades deslizam ao longo das próprias linhas para se encontrarem com a nova linha da parede, por isso nada fica inclinado. Mantenha {{key:Mod}} para um arrasto livre (a extremidade da parede ligada acompanha a sua, e essa parede roda), ou {{key:Alt}} para desfazer as ligações a esta parede.
- Arraste o meio para mover a parede inteira perpendicularmente a si própria, seja qual for o sentido do arrasto. Os seus cantos deslizam ao longo das paredes ligadas, que mantêm o seu ângulo.
- Mantenha {{key:Mod}} enquanto arrasta o meio para um movimento livre, quando quer mesmo quebrar o ângulo. {{ui:Tornar quadrado}} repõe-no.
- Enquanto uma pega está premida, escreva uma distância e prima {{key:Enter}} (ou largue): a parede desloca-se exatamente essa distância, na direção em que estava a arrastar. {{key:Esc}} cancela o movimento.
- Uma parede curva selecionada mostra pegas nas extremidades e uma pega redonda no meio do arco. Arraste a pega redonda para a curvar.
- Portas e janelas mantêm-se na parede. Uma parede demasiado curta para o que contém é recusada com « Não cabe nessa parede. »

## Alterar uma porta ou janela

1. Clique na porta ou janela na planta.
2. Em **Propriedades**: **Tipo** (outra porta ou janela do mesmo tipo), **Largura**, **Altura**, **Peitoril** (janelas), **Desde o início** e **Desde o fim** (a distância de cada extremidade da face da parede até à sua borda), **Dobradiças** {{ui:Inverter}} (portas de uma folha e janelas de batente; as portas de correr, de bolso, de celeiro e de dobrar dizem **Abre para** em vez disso; as janelas fixas, de guilhotina e panorâmicas e as portas duplas não têm nenhuma), e **Abre para** (portas) ou **Lado do aro** (janelas) {{ui:Inverter}}.
3. Ou arraste-a ao longo da sua parede, ou para outra parede: veja [Portas e janelas](topic:doors-and-windows).

## Alterar vários de uma vez

Selecione várias paredes (ou várias portas, ou várias janelas) com {{key:Shift}}+clique ou {{key:Mod}}+clique. **Propriedades** oferece o que têm em comum: **Alterar tipo…**, a altura, o tamanho. Uma só alteração define todas, e um único {{ui:Anular}} desfaz tudo.

## Bom saber

- Os números aparecem nas {{ui:Unidades}} escolhidas na barra de ferramentas.
- As paredes, portas e janelas de outros programas mostram os seus dados IFC em **Propriedades** como antes, sem esta caixa.
