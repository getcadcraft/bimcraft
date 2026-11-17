---
title: Dar forma a uma parede: fixar, perfil, inclinação e vãos
summary: Fixar o topo de uma parede a uma cobertura, piso ou teto, dar-lhe o seu próprio contorno de alçado, inclina-la ou abrir um vão sem porta nem janela, em Propriedades, num alçado ou corte, na vista de face da própria parede ou em 3D; cada alteração é um passo de Anular.
keywords: fixar, fixar topo, fixar base, cobertura, laje, teto, empena, perfil, editar perfil, contorno de alçado, escalonada, platibanda, inclinação, inclinada, inclinar, tombar, afunilada, dupla inclinação, vão, vão na parede, abertura, passagem, sem porta, pegas, alçado, corte, vista de face, parede curva, cópia
from: f558b269
---

## O que se faz

Alterar a forma de uma parede acima e abaixo da sua planta: o topo pode seguir uma cobertura, uma laje de piso ou um teto; pode ter o seu próprio contorno visto de lado; pode ser inclinada; e pode ter vãos sem porta nem janela. A planta da parede, os seus cantos e a sua linha de localização mantêm-se como estavam.

## Onde se pode fazer

- **Propriedades**: com {{ui:Desenhar}} e {{ui:Selecionar}} ativos, clique numa parede que desenhou. **Propriedades** mostra as linhas da parede e, depois, **Forma**, onde tudo se escreve.
- **Um alçado ou um corte**: o lápis do navegador de projeto ({{ui:Editar nesta vista}}) abre a vista; escolha lá uma parede e arraste as suas pegas. Veja "Num alçado ou corte" abaixo.
- **A vista de face da própria parede**: {{ui:Paredes}} › {{ui:Editar perfil}}, depois clique na parede na planta. Funciona para qualquer parede, também para uma que nenhum alçado veja de frente, e para uma parede curva (mostrada desenrolada).
- **A planta e a vista 3D**: os quatro comandos em {{ui:Paredes}} (grupo Editar): {{ui:Ligar topo / base}}, {{ui:Editar perfil}}, {{ui:Inclinação}} e {{ui:Vão na parede}}. Veja "Na planta e em 3D" abaixo.

Qualquer que seja a forma escolhida, é sempre a mesma alteração: um passo em **Alterações**, e {{ui:Anular}} desfaz.

As paredes retas e as curvas aceitam todas as ferramentas de Forma. Numa parede curva, as distâncias seguem o seu arco.

## Fixar o topo ou a base

- **Fixar ao topo**: escolha uma cobertura, um piso ou um teto. O topo da parede segue a face inferior do que escolheu, na vertical de cada canto da parede. Sob uma cobertura inclinada, a parede fica com um topo inclinado, e onde a cobertura muda de plano (uma cumeeira ou uma linha de espigão) o topo da parede dobra com ela.
- **Fixar à base**: escolha um piso ou um teto. A base da parede segue a face do seu topo.
- Onde não houver nada por cima (ou por baixo) de uma parte da parede, essa parte mantém a altura própria da parede.
- A ligação mantém-se: se alterar a inclinação ou o beirado da cobertura, ou a altura do teto, as paredes fixadas acompanham na mesma alteração.
- Escolha **Altura própria** para soltar a ligação.

## Editar o perfil

{{ui:Editar perfil…}} abre o contorno da parede visto de lado:

- **Linha de topo**: linhas de **Ao longo** (a distância desde o início da parede) e **Altura** (acima da base da parede). Três linhas 0 / 3000, 2500 / 4500, 5000 / 3000 fazem uma empena numa parede de 5 m.
- **Linha de base**: deixe vazio para uma base de nível, ou dê linhas para uma parede sobre uma fundação escalonada.
- {{ui:Acrescentar um ponto}} acrescenta uma linha, **Remover** tira uma. {{ui:Usar este perfil}} aplica-o; {{ui:Voltar a reta}} remove-o.

Cada linha percorre a parede uma só vez, do seu início ao seu fim; uma linha que volta sobre si própria, ou um topo que desce até à base, é recusado. Com um topo fixado também, usa-se o mais baixo dos dois.

## Inclinar a parede

**Inclinação**: **Vertical**, **Inclinada** (as duas faces se inclinam no mesmo sentido, a espessura mantém-se) ou **Dupla inclinação** (cada face com o seu ângulo: uma parede que fica mais fina ou mais grossa à medida que sobe). Escreva os graus a partir da vertical; um ângulo positivo inclina para a esquerda da parede, vista a partir do seu início. A parede fica onde foi desenhada na base; as paredes ligadas a ela não se inclinam com ela.

## Vãos sem porta nem janela

{{ui:Adicionar vão}} abre um furo de 900 de largura no meio da parede. A sua linha em **Vãos** define **Desde o início**, **Largura**, **Peitoril** (a partir do nível) e **Altura**; **Remover** tira-o. O vão atravessa toda a parede, as quantidades da parede deixam-no de fora, e a planta mostra uma abertura onde ele chega à altura de corte da planta. Quando o início da parede desliza ao longo da sua linha, o vão mantém a sua posição; uma alteração que o deixaria fora da parede é recusada.

## Num alçado ou corte

Abra a vista com o lápis do navegador de projeto. Com {{ui:Selecionar e mover}} ativo:

- **Perfil**: clique numa parede virada para a vista. As suas linhas de topo e de base ficam azuis, com uma pega quadrada em cada ponto e um ponto no meio de cada troço.
  - Arraste um quadrado para mover esse ponto (os dois pontos das extremidades movem-se apenas na vertical).
  - Arraste um ponto para mover o troço inteiro para cima ou para baixo.
  - Faça duplo clique numa linha (ou clique com o botão direito) para acrescentar um ponto ali; {{ui:Acrescentar um ponto (topo)}} e {{ui:Acrescentar um ponto (base)}} acrescentam um no meio do troço mais longo.
  - Clique num quadrado e prima Delete (ou clique nele com o botão direito) para remover esse ponto. {{ui:Voltar a reta}} remove o perfil.
  - Com um ponto escolhido, escreva o seu **Ao longo** e a **Altura** na faixa abaixo da barra de ferramentas.
- **Fixar**: a faixa tem as listas **Fixar ao topo** e **Fixar à base** para a parede escolhida. Ou use a ferramenta {{ui:Fixar ao topo}} ou {{ui:Fixar à base}}: clique na parede ou paredes, depois na cobertura, no piso ou no teto, mostrados como caixas tracejadas. Todas as paredes escolhidas ficam fixadas num só passo.
- **Vãos de parede**: com a ferramenta {{ui:Vão na parede}}, arraste um retângulo sobre a face de uma parede. De volta a {{ui:Selecionar e mover}}, arraste um vão para o mover, arraste uma das suas oito pegas para o redimensionar, escreva **Desde o início**, **Largura**, **Peitoril** e **Altura** na faixa, ou prima Delete para o remover.
- **Inclinação**: uma parede que a vista atravessa (vista de topo, como um corte através dela, ou num alçado a partir da sua extremidade) também pode ser clicada. Arraste a pega redonda no seu topo para a inclinar, ou escolha **Vertical**, **Inclinada** ou **Dupla inclinação** na faixa e escreva os ângulos.

As medidas encaixam em passos de 10 mm; escreva um valor para tudo o que for mais fino. Uma parede curva pode ser editada num alçado enquanto percorrer a vista num sentido; a vista de face da própria parede funciona sempre.

## Na planta e em 3D

Abra {{ui:Paredes}} no grupo Editar:

- {{ui:Ligar topo / base}}: escolha **Fixar ao topo** ou **Fixar à base** na linha da ferramenta. Clique na parede ou paredes (na planta ou na vista 3D) e depois no que devem fixar: em 3D clique na própria cobertura, piso ou teto; na planta clique num ponto por baixo dele (quando há mais do que um, uma lista pergunta qual).
- {{ui:Editar perfil}}: na planta, clique numa parede para abrir a sua vista de face. Em 3D, clique numa parede: os seus pontos de perfil ficam com pegas; arraste uma delas no plano da parede.
- {{ui:Inclinação}}: clique numa parede (planta ou 3D) e escreva o quanto se inclina.
- {{ui:Vão na parede}}: na planta, clique numa parede onde vai o vão; a sua **Largura**, **Altura** e **Peitoril** estão na linha da ferramenta. Em 3D, clique num canto na face da parede e depois no canto oposto. Com uma parede escolhida em 3D, os seus vãos têm pegas: os cantos redimensionam, o meio move.

As pegas 3D são as da própria vista 3D, pelo que esperam enquanto a caixa de corte mostrar as suas pegas.

## Na planta

Uma parede inclinada é desenhada onde a planta a corta (1200 acima do nível, salvo indicação contrária da vista): o seu contorno é deslocado pelo quanto se inclina nessa altura, e uma dupla inclinação fica mais larga ou mais estreita ali. O seu contorno no piso é desenhado com as linhas finas do que está abaixo do corte. Os cantos, as pegas e as cotas da parede mantêm-se na base.

## Cópias

{{ui:Copiar este nível…}} e Mover com **Copiar** levam consigo o perfil, a inclinação e os vãos da parede. Uma parede fixada a um piso ou teto fica fixada ao piso ou teto copiado do novo nível; uma ligação a uma cobertura não é copiada com o nível (as coberturas não são copiadas). Uma cópia no mesmo nível mantém-se fixada à mesma cobertura, piso ou teto.

## No ficheiro

Uma parede com forma é escrita como um sólido facetado (IfcFacetedBrep), que outros programas leem tal como foi desenhada; as suas definições ficam na parede (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Um vão é um IfcOpeningElement dentro da parede, sem nada que o preencha.

## Ainda não implementado

- Um perfil com balanços ou furos no contorno (use vãos para os furos).
- Em 3D: acrescentar ou remover pontos de perfil, e a inclinação por uma pega (use a vista de face da parede, um alçado ou um corte, ou escreva os valores).
- {{ui:Offset}} com Copiar ativo não copia a forma nem os vãos da parede (Mover com Copiar copia).
- As camadas de uma parede inclinada não são desenhadas em plantas de detalhe Médio e Fino (o seu contorno é).
- Vãos que não são retangulares.
