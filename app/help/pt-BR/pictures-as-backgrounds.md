---
title: Colocar uma imagem sob a planta
summary: Posicione uma imagem PNG, JPEG ou WebP (uma planta digitalizada, um esboço, uma foto do local, uma vista aérea) sob a planta de um nível ou em um plano vertical, dimensione-a por dois pontos, mova, gire, atenue e trave-a, veja-a em 3D e no PDF da planta, e mantenha-a junto com o modelo em um pacote.
keywords: imagem, figura, fundo, PNG, JPEG, WebP, digitalização, esboço, foto, aérea, planta de situação, escala, opacidade, travar, referência de fundo, decalcar
from: e3c78d1f
---

## Posicionar uma imagem

Ative {{ui:Draw}}, vá ao nível e escolha {{ui:Picture}} no menu {{ui:Build}}. Depois, {{ui:Insert picture…}} e escolha um arquivo PNG, JPEG ou WebP. Ele é lido no seu navegador e nunca é enviado. Aparece sob a planta, ajustado à vista, e a barra de ferramentas diz que ainda não está em escala. Tudo o que você desenhar fica sobre ela.

## Definir a escala

Escolha {{ui:Scale}}, clique em dois pontos da imagem cuja distância real você conhece (as duas extremidades de uma parede em uma planta digitalizada, uma cota impressa em um esboço), depois digite a distância e pressione {{key:Enter}}. A imagem cresce ou diminui em torno do primeiro ponto que você clicou. {{key:Esc}} cancela.

## Colar uma área copiada

No MarkupCraft, {{ui:Copiar área}} copia parte de uma folha PDF como imagem. De volta ao BimCraft, com a planta de um nível exibida, pressione {{key:Ctrl+V}} (ou {{ui:Paste}} no menu {{ui:Edit}}): a área entra na planta como imagem, centralizada onde está o ponteiro (ou no meio da vista). Quando a folha tinha uma escala de desenho, ela entra em tamanho real, então uma parede nela tem o mesmo comprimento das suas paredes. Sem escala, entra no tamanho do papel e {{ui:Scale}} começa, para você clicar em dois pontos e digitar a distância entre eles. Uma área copiada como sobreposição começa com a opacidade com que foi copiada. É uma etapa de desfazer e é guardada como qualquer outra imagem.

{{ui:Paste}} usa o que você copiou por último: uma área copiada ou algo que você copiou no BimCraft. {{key:Ctrl+V}} também cola qualquer outra imagem PNG, JPEG ou WebP que esteja na área de transferência, posicionada como {{ui:Insert picture…}} e ainda sem escala. Uma área copiada fica lembrada por seis horas.

## Mover, girar, atenuar, travar

{{ui:Move}} toma um ponto-base na imagem e depois o lugar para onde ela deve ir. {{ui:Turn}} recebe um ângulo em graus, em torno do centro da imagem. {{ui:Opacity}} atenua a imagem para que suas linhas se destaquem. {{ui:Lock}} impede que ela se mova enquanto você desenha; uma imagem travada ainda permite mudar sua opacidade e ocultá-la. Cada alteração é uma etapa de desfazer.

## Várias imagens, vários níveis

Uma imagem pertence ao nível em que foi posicionada e aparece na planta e na planta de forro desse nível. Clique em uma imagem para trabalhar nela, ou escolha-a na lista. {{ui:Hide}} a desliga sem removê-la; {{ui:Remove}} (ou {{key:Delete}}) a tira do modelo.

## Imagens na vista 3D

Cada imagem também aparece na vista 3D como um plano chapado: uma imagem de planta fica deitada sobre o nível dela, e uma imagem de plano vertical fica de pé sobre a linha de corte. Ela é desenhada sobre o modelo sem escondê-lo, e o modelo oculta a parte da imagem que está atrás dele. Imagens sobrepostas se ordenam pela distância. Opacidade, Ocultar, Travar e Remover funcionam da mesma forma, e {{ui:Show in 3D}} desliga todos os planos apenas na vista 3D. Um nível comporta no máximo 8 imagens, para manter as vistas rápidas.

## Uma imagem em um plano vertical

Em {{ui:Place on}} escolha {{ui:A vertical plane (section line)}}, depois {{ui:Insert picture…}}. Clique nas duas extremidades de uma linha na planta (uma extremidade de face de parede se encaixa), ou escolha uma linha de corte nomeada do nível em {{ui:Over a section line}} e não são necessários cliques. A imagem fica de pé sobre o nível, sobre essa linha, com a mesma largura dela. Defina sua {{ui:Width}}, sua posição {{ui:Along the line}} e sua {{ui:Height above level}} digitando; {{ui:Turn}} a gira em seu próprio plano. Uma imagem vertical não é desenhada sob a planta; a planta mostra a linha dela enquanto você trabalha nela. O BimCraft não tem janela de corte 2D interativa: cortes e elevações são desenhados nas folhas, e as imagens ainda não são impressas nessas vistas de folha.

## Impressão

{{ui:Print view}} em uma planta grava as imagens do nível no PDF, sob o desenho, em sua escala, rotação e opacidade, recortadas na folha; uma imagem oculta fica de fora. Um JPEG entra como está; as outras imagens são reduzidas a 200 dpi na folha antes.

## Mantida junto ao modelo

Os bytes da imagem não são gravados no texto IFC. O modelo se refere a cada uma pelo nome (um IfcDocumentReference como pictures/<id>.png), e os bytes viajam em um pacote de projeto. Use {{ui:Save as bundle…}} (ou {{ui:Save as IFC}} e escolha o pacote): você obtém um arquivo .ccbundle com o modelo e suas imagens; o IFC continua pequeno e as edições continuam rápidas. Abra o .ccbundle e as imagens voltam.

Um .ifc comum não consegue conter uma imagem sem ficar grande. Ao salvar um, o BimCraft informa quantas imagens são mantidas fora dele e oferece um pacote, ou um IFC comum que incorpora as imagens de até 512 KB e deixa as demais de fora. Um .ifc comum aberto sem o seu pacote mostra essas imagens como ausentes, e Problemas as lista; abra o .ccbundle em que elas foram salvas. Arquivos salvos pela primeira versão, com a imagem dentro do IFC, continuam abrindo, e salvar um pacote move as imagens deles para fora. Uma imagem é mantida como está até 6 MB; uma maior é reduzida primeiro, e você é avisado. Outros programas abrem o modelo e ignoram as imagens. Uma imagem que você ainda não escalou aparece em Problemas como nota.

## Em folhas de corte e elevação

Uma imagem em um plano vertical (escolha {{ui:Vertical}} no painel de imagem e clique nas duas extremidades de uma linha, ou posicione-a sobre uma linha de corte nomeada) é impressa nas vistas de folha que a encaram de frente. Um corte mostra uma imagem que está de pé sobre a linha de corte dele, ou que foi posicionada sobre essa linha pelo nome. Uma elevação mostra cada imagem vertical cujo plano está voltado para ela. A imagem é desenhada sob as linhas da vista, na escala da vista, recortada na vista, e mantém sua opacidade. Abra {{ui:Sheets…}} para vê-la; o PDF da folha a inclui como imagem. Vista por trás, uma imagem fica espelhada, como no 3D. Imagens ocultas são deixadas de fora.
