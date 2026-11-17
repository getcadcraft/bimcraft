---
title: Colocar uma imagem por baixo da planta
summary: Coloque uma imagem PNG, JPEG ou WebP (uma planta digitalizada, um esboço, uma fotografia do local, uma vista aérea) por baixo da planta de um piso ou num plano vertical, escale-a com dois pontos, mova, rode, esbata e bloqueie-a, veja-a em 3D e no PDF da planta, e mantenha-a junto do modelo num pacote.
keywords: imagem, figura, fundo, PNG, JPEG, WebP, digitalização, esboço, fotografia, vista aérea, planta do local, escala, opacidade, bloquear, base, traçar
from: e3c78d1f
---

## Colocar uma imagem

Ative {{ui:Desenhar}}, vá ao piso e escolha {{ui:Imagem}} no menu {{ui:Compilação}}. Depois {{ui:Inserir imagem…}} e escolha um ficheiro PNG, JPEG ou WebP. É lido no seu navegador e nunca é carregado. Aparece por baixo da planta, ajustada à vista, e a barra de ferramentas indica que ainda não está escalada. Tudo o que desenhar fica por cima dela.

## Definir a escala

Escolha {{ui:Escala}}, clique em dois pontos da imagem cuja distância real conhece (duas extremidades de uma parede numa planta digitalizada, uma cota impressa num esboço), depois escreva a distância e prima {{key:Enter}}. A imagem aumenta ou diminui em torno do primeiro ponto em que clicou. {{key:Esc}} cancela.

## Colar uma área copiada

No MarkupCraft, {{ui:Copiar área}} copia parte de uma folha PDF como imagem. De volta ao BimCraft, com a planta de um piso visível, prima {{key:Ctrl+V}} (ou {{ui:Colar}} no menu {{ui:Editar}}): a área cai na planta como imagem, centrada onde está o cursor (ou no meio da vista). Quando a folha tinha uma escala de desenho, entra à sua dimensão real, por isso uma parede nela tem o mesmo comprimento que as suas paredes. Sem escala, entra no tamanho do papel e {{ui:Escala}} começa, para que possa clicar em dois pontos e escrever a sua distância. Uma área copiada como sobreposição começa com a opacidade com que foi copiada. É um único passo de anulação e fica guardada como qualquer outra imagem.

{{ui:Colar}} usa o que copiou por último: uma área copiada ou algo que copiou no BimCraft. {{key:Ctrl+V}} também cola qualquer outra imagem PNG, JPEG ou WebP que esteja na área de transferência, colocada como {{ui:Inserir imagem…}} e ainda não escalada. Uma área copiada fica lembrada durante seis horas.

## Mover, rodar, esbater, bloquear

{{ui:Mover}} pede um ponto base na imagem e depois o sítio para onde deve ir. {{ui:Rodar}} pede um ângulo em graus, em torno do centro da imagem. {{ui:Opacidade}} esbate-a para que as suas linhas se destaquem. {{ui:Bloquear}} impede que se mova enquanto desenha; uma imagem bloqueada continua a permitir alterar a sua opacidade e ocultá-la. Cada alteração é um passo de anulação.

## Várias imagens, vários pisos

Uma imagem pertence ao piso onde foi colocada e aparece na planta desse piso e na sua planta de teto. Clique numa imagem para trabalhar nela, ou escolha-a na lista. {{ui:Ocultar}} desliga-a sem a remover; {{ui:Remover}} (ou {{key:Delete}}) retira-a do modelo.

## Imagens na vista 3D

Cada imagem fica também na vista 3D como um plano: uma imagem de planta assenta no seu piso, e uma imagem de plano vertical fica de pé sobre a sua linha de corte. É desenhada sobre o modelo sem o ocultar, e o modelo oculta a parte da imagem que está atrás dele. As imagens sobrepostas ordenam-se pela distância. A opacidade, ocultar, bloquear e remover funcionam da mesma forma, e {{ui:Mostrar em 3D}} desliga todos os planos apenas na vista 3D. Um piso tem no máximo 8 imagens, para manter as vistas rápidas.

## Uma imagem num plano vertical

Em {{ui:Colocar em}} escolha {{ui:Um plano vertical (linha de corte)}}, depois {{ui:Inserir imagem…}}. Clique nas duas extremidades de uma linha na planta (uma extremidade de face de parede encaixa), ou escolha uma linha de corte com nome do piso em {{ui:Sobre uma linha de corte}} e não é preciso clicar. A imagem fica de pé sobre o piso, sobre essa linha, com a mesma largura da linha. Defina a sua {{ui:Largura}}, o seu lugar {{ui:Ao longo da linha}} e a sua {{ui:Altura acima do nível}} escrevendo os valores; {{ui:Rodar}} roda-a no seu próprio plano. Uma imagem vertical não é desenhada por baixo da planta; a planta mostra a sua linha enquanto trabalha nela. O BimCraft não tem uma janela de corte 2D interativa: cortes e alçados são desenhados nas folhas, e as imagens ainda não são impressas nessas vistas de folha.

## Impressão

{{ui:Vista de impressão}} numa planta escreve as imagens do piso no PDF por baixo do desenho, na sua escala, rotação e opacidade, recortadas à folha; uma imagem oculta fica de fora. Um JPEG entra tal como está; as outras imagens são reduzidas a 200 dpi na folha antes.

## Guardadas junto ao modelo

Os bytes da imagem não são escritos no texto IFC. O modelo refere cada uma pelo nome (um IfcDocumentReference, como pictures/<id>.png) e os bytes seguem num pacote de projeto. Use {{ui:Guardar como pacote…}} (ou {{ui:Guardar como IFC}} e escolha-o): obtém-se um único ficheiro .ccbundle com o modelo e as suas imagens; o IFC continua pequeno e as edições continuam rápidas. Abra o .ccbundle e as imagens voltam.

Um .ifc simples não pode conter uma imagem sem ficar grande. Ao guardar um, o BimCraft diz quantas imagens ficam fora dele e oferece um pacote, ou um IFC simples que incorpora as imagens até 512 KB e deixa as restantes de fora. Um .ifc simples aberto sem o seu pacote mostra essas imagens como em falta, e Problemas lista-as; abra o .ccbundle em que foram guardadas. Os ficheiros guardados pela primeira versão, com a imagem dentro do IFC, continuam a abrir, e guardar um pacote move as suas imagens para fora. Uma imagem é mantida como está até 6 MB; uma maior é reduzida primeiro, e é avisado. Outros programas abrem o modelo e ignoram as imagens. Uma imagem que ainda não foi escalada é listada em Problemas como nota.

## Em folhas de corte e alçado

Uma imagem num plano vertical (escolha {{ui:Vertical}} no painel de imagem e clique nas duas extremidades de uma linha, ou coloque-a sobre uma linha de corte com nome) é impressa nas vistas de folha que a olham de frente. Um corte mostra uma imagem que assenta na sua linha de corte, ou que foi colocada sobre essa linha pelo nome. Um alçado mostra todas as imagens verticais cujo plano lhe fica de frente. A imagem é desenhada por baixo das linhas da vista, à escala da vista, recortada à vista, e mantém a sua opacidade. Abra {{ui:Folhas…}} para a ver; o PDF da folha inclui-a como imagem. Vista por trás, uma imagem fica espelhada, tal como em 3D. As imagens ocultas ficam de fora.
