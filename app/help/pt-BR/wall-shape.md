---
title: Dar forma a uma parede: fixar, perfil, inclinar e aberturas
summary: Fixe o topo de uma parede a um telhado, piso ou forro, dê a ela seu próprio contorno de elevação, incline-a ou recorte uma abertura sem porta nem janela, nas Propriedades, em uma elevação ou corte, na vista de face da própria parede ou em 3D; cada uma é um passo de desfazer.
keywords: fixar, fixar no topo, fixar na base, telhado, laje, forro, empena, perfil, editar perfil, contorno de elevação, escalonada, platibanda, inclinação, inclinar, inclinada, afunilada, dupla inclinação, abertura, abertura na parede, furo, passagem, sem porta, grips, elevação, corte, 3D, vista de face, parede curva, cópia
from: f558b269
---

## O que você vai fazer

Alterar a forma de uma parede acima e abaixo da planta: o topo pode acompanhar um telhado, uma laje de piso ou um forro, ela pode ter seu próprio contorno visto de lado, pode ser inclinada e pode ter aberturas sem porta nem janela. A planta, os cantos e a linha de localização da parede permanecem como estavam.

## Onde fazer

- **Propriedades**: com {{ui:Draw}} e {{ui:Select}} ativados, clique em uma parede que você desenhou. **Propriedades** mostra as linhas da parede e depois **Forma**, onde tudo é digitado.
- **Uma elevação ou um corte**: o lápis do navegador de projeto ({{ui:Edit in this view}}) abre a vista; escolha uma parede ali e arraste seus grips. Veja "Em uma elevação ou um corte" abaixo.
- **A vista de face da própria parede**: {{ui:Walls}} › {{ui:Edit profile}}, depois clique na parede na planta. Funciona para qualquer parede, também para uma que nenhuma elevação olha de frente, e para uma parede curva (mostrada desenrolada).
- **A planta e a vista 3D**: os quatro comandos em {{ui:Walls}} (grupo Editar): {{ui:Attach top / base}}, {{ui:Edit profile}}, {{ui:Slant}} e {{ui:Wall opening}}. Veja "Na planta e em 3D" abaixo.

Seja qual for o caminho, é a mesma alteração: um passo em **Alterações**, e {{ui:Undo}} a desfaz.

Paredes retas e curvas aceitam todas as ferramentas de forma. Em uma parede curva, as distâncias seguem o arco dela.

## Fixar o topo ou a base

- **Fixar no topo**: escolha um telhado, um piso ou um forro. O topo da parede segue a face inferior do que você escolheu, diretamente acima de cada canto da parede. Sob um telhado inclinado, a parede recebe um topo inclinado, e onde o telhado muda de plano (uma cumeeira ou um espigão), o topo da parede se dobra com ele.
- **Fixar na base**: escolha um piso ou um forro. A base da parede segue a face superior dele.
- Onde nada está acima (ou abaixo) de uma parte da parede, essa parte mantém a altura própria da parede.
- A ligação permanece: altere a inclinação ou o beiral do telhado, ou a altura do forro, e as paredes fixadas acompanham no mesmo passo.
- Escolha **Altura própria** para soltar.

## Editar o perfil

{{ui:Edit profile…}} abre o contorno da parede visto de lado:

- **Linha superior**: linhas de **Ao longo** (a distância do início da parede) e **Altura** (acima da base da parede). Três linhas 0 / 3000, 2500 / 4500, 5000 / 3000 fazem uma empena em uma parede de 5 m.
- **Linha inferior**: deixe vazia para uma base de nível, ou informe linhas para uma parede sobre uma fundação escalonada.
- {{ui:Add a point}} adiciona uma linha; **Remover** tira uma. {{ui:Use this profile}} aplica; {{ui:Back to straight}} remove.

Cada linha percorre a parede uma vez, do início ao fim; uma linha que volta sobre si mesma, ou um topo que desce até a base, é recusada. Com um topo fixado também, usa-se o mais baixo dos dois.

## Inclinar a parede

**Inclinação**: **Vertical**, **Inclinada** (as duas faces se inclinam no mesmo sentido, a espessura permanece) ou **Dupla inclinação** (cada face com seu próprio ângulo: uma parede que fica mais fina ou mais grossa conforme sobe). Digite os graus a partir da vertical; um ângulo positivo inclina para a esquerda da parede, vista a partir do início. A parede permanece onde foi desenhada na base; as paredes unidas a ela não se inclinam junto.

## Aberturas sem porta nem janela

{{ui:Add opening}} faz um furo de 900 de largura no meio da parede. Sua linha em **Aberturas** define **A partir do início**, **Largura**, **Peitoril** (a partir do nível) e **Altura**; **Remover** a tira. A abertura atravessa toda a parede, as quantidades da parede a deixam de fora, e a planta mostra uma falha onde ela alcança a altura de corte da planta. Quando o início da parede desliza ao longo da linha dela, a abertura mantém sua posição; uma mudança que a deixaria fora da parede é recusada.

## Em uma elevação ou um corte

Abra a vista com o lápis do navegador de projeto. Com {{ui:Select and move}} ativado:

- **Perfil**: clique em uma parede voltada para a vista. Suas linhas superior e inferior ficam azuis, com um grip quadrado em cada ponto e um ponto no meio de cada trecho.
  - Arraste um quadrado para mover aquele ponto (os dois pontos das extremidades se movem só para cima e para baixo).
  - Arraste um ponto para mover o trecho inteiro para cima ou para baixo.
  - Clique duas vezes em uma linha (ou clique com o botão direito) para adicionar um ponto ali; {{ui:Add a point (top)}} e {{ui:Add a point (bottom)}} adicionam um no meio do trecho mais longo.
  - Clique em um quadrado e pressione Delete (ou clique nele com o botão direito) para remover aquele ponto. {{ui:Back to straight}} remove o perfil.
  - Com um ponto selecionado, digite seu **Ao longo** e **Altura** na faixa abaixo da barra de ferramentas.
- **Fixar**: a faixa tem as listas **Fixar no topo** e **Fixar na base** para a parede selecionada. Ou use a ferramenta {{ui:Attach top}} ou {{ui:Attach base}}: clique na parede ou nas paredes, depois no telhado, piso ou forro, mostrados como caixas tracejadas. Todas as paredes selecionadas são fixadas em um só passo.
- **Aberturas na parede**: com a ferramenta {{ui:Wall opening}}, arraste um retângulo na face de uma parede. De volta em {{ui:Select and move}}, arraste uma abertura para movê-la, arraste um dos seus oito grips para redimensioná-la, digite **A partir do início**, **Largura**, **Peitoril** e **Altura** na faixa, ou pressione Delete para removê-la.
- **Inclinação**: uma parede que a vista acompanha (vista de ponta, como um corte através dela, ou uma elevação vista pela extremidade) também pode ser clicada. Arraste a alça redonda no topo para incliná-la, ou escolha **Vertical**, **Inclinada** ou **Dupla inclinação** na faixa e digite os ângulos.

Os tamanhos se ajustam a 10 mm; digite um valor para algo mais fino. Uma parede curva pode ser editada em uma elevação enquanto percorre uma direção pela vista; a vista de face própria dela sempre funciona.

## Na planta e em 3D

Abra {{ui:Walls}} no grupo Editar:

- {{ui:Attach top / base}}: escolha **Fixar no topo** ou **Fixar na base** na linha da ferramenta. Clique na parede ou nas paredes (na planta ou na vista 3D), depois no que elas vão fixar: em 3D, clique no próprio telhado, piso ou forro; na planta, clique em um ponto abaixo dele (quando há mais de um, uma lista pergunta qual).
- {{ui:Edit profile}}: na planta, clique em uma parede para abrir sua vista de face. Em 3D, clique em uma parede: seus pontos de perfil recebem grips; arraste um deles no plano da parede.
- {{ui:Slant}}: clique em uma parede (planta ou 3D) e digite o quanto ela se inclina.
- {{ui:Wall opening}}: na planta, clique em uma parede onde vai a abertura; sua **Largura**, **Altura** e **Peitoril** ficam na linha da ferramenta. Em 3D, clique em um canto na face da parede e depois no canto oposto. Com uma parede selecionada em 3D, suas aberturas têm grips: os cantos redimensionam, o meio move.

Os grips em 3D são os da própria vista 3D, então esperam enquanto a caixa de corte mostra os seus grips.

## Na planta

Uma parede inclinada é desenhada onde a planta a corta (1200 acima do nível, a menos que a vista indique outra coisa): seu contorno é deslocado pelo quanto ela se inclina nessa altura, e uma dupla inclinação fica mais larga ou mais estreita ali. O contorno dela no piso é desenhado com as linhas finas do que está abaixo do corte. Os cantos, grips e cotas da parede permanecem na base.

## Cópias

{{ui:Copy this level…}} e Mover com **Copiar** levam junto o perfil, a inclinação e as aberturas da parede. Uma parede fixada a um piso ou forro fica fixada ao piso ou forro copiado do novo nível; uma fixação a um telhado não é copiada com um nível (telhados não são copiados). Uma cópia no mesmo nível permanece fixada ao mesmo telhado, piso ou forro.

## No arquivo

Uma parede com forma é gravada como um sólido facetado (IfcFacetedBrep), que outros programas leem como foi desenhada; suas configurações ficam na parede (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Uma abertura é um IfcOpeningElement na parede, sem nada preenchendo-a.

## Ainda não implementado

- Um perfil com beirais ou furos no contorno (use aberturas para furos).
- Em 3D: adicionar ou remover pontos de perfil, e a inclinação por alça (use a vista de face da parede, uma elevação ou um corte, ou digite os valores).
- {{ui:Offset}} com Copiar ativado não copia a forma nem as aberturas da parede (Mover com Copiar copia).
- As camadas de uma parede inclinada não são desenhadas nas plantas em detalhe Médio e Fino (o contorno é).
- Aberturas que não são retângulos.
