---
title: Revisar o modelo em um headset de VR
summary: Percorra o modelo IFC em tamanho real em um headset de VR: pule, gire, meça, abra-o em corte, posicione problemas BCF com uma imagem, veja-o como um modelo sobre a mesa e encontre os outros participantes de uma sessão ao vivo.
keywords: vr, realidade virtual, headset, webxr, xr, imersivo, quest, oculus, vive, index, pico, percorrer, percurso, teletransporte, revisão de projeto, coordenação, revisão, medir, seção, corte, problema, problemas, bcf, sobre a mesa, modelo em escala, presença, avatares, ao vivo, juntos
from: 8994b36d
---

{{ui:VR}} na barra de ferramentas coloca você dentro do modelo com um headset de VR, em tamanho real. Você fica onde está a câmera da vista 3D, no piso abaixo dela, voltado para o mesmo lado. O headset mostra o que a vista 3D mostra: pavimentos, elementos e modelos ocultos continuam ocultos, e os materiais pintados vêm junto. Nada é enviado: o navegador desenha tudo neste computador (ou no navegador do próprio headset).

## O que você precisa

- Um headset compatível com o navegador (WebXR): o navegador do próprio headset autônomo, ou Chrome ou Edge em um PC com headset conectado.
- Um modelo IFC aberto, em uma página segura (https), como é neste site.

Quando não há headset, {{ui:VR}} fica esmaecido e informa o motivo.

## Começar

1. Ajuste a vista 3D onde quer começar: em um ambiente, ou do lado de fora, olhando para o edifício.
2. Clique em {{ui:VR}} na barra de ferramentas.
3. Coloque o headset.

O menu fica na parte de trás da sua mão esquerda. Aponte para ele com o controle direito e puxe o gatilho para escolher um botão. (Com apenas uma mão, o menu flutua na frente de onde você começou.)

## Como se movimentar

- **Pular:** em {{ui:Mover}}, aponte para um piso e puxe o gatilho; você pousa ali. Ou empurre o analógico para a frente para mirar, e solte para pular. Você só pode pousar em pisos, lajes e terreno (superfícies voltadas para cima), nunca em uma parede.
- **Girar:** empurre o analógico para a esquerda ou para a direita: você gira 30° cada vez.
- **Caminhar:** na sua área de movimentação, simplesmente caminhe.

## Medir

Escolha {{ui:Medir}}, depois puxe o gatilho em dois pontos. A distância aparece entre eles, em metros. Um ponto perto de um canto se encaixa no canto.

## Abrir em corte

Escolha {{ui:Corte}} e puxe o gatilho em uma superfície:

- em uma parede (ou em qualquer coisa que não seja um piso): tudo entre você e essa superfície é cortado, para que você veja o interior. Isso funciona melhor de fora, ou atravessando um ambiente;
- em um piso, de cima: uma planta cortada a 1.2 m acima desse piso, para que as paredes mostrem a parte inferior.

{{ui:Limpar}} remove o corte e as medições. Se um [plano de corte](topic:section-plane) cortar o modelo ao começar, o headset começa com ele.

## Posicionar um problema

Escolha {{ui:Problema}} e puxe o gatilho onde está o problema. Um alfinete numerado o marca, e o problema vai para a guia {{ui:Tópicos}} como um tópico BCF, com uma imagem do que você viu e a câmera onde você estava, nas coordenadas do próprio modelo. Salve-os junto com os demais [problemas](topic:issues-bcf) como um arquivo BCF; outras ferramentas de coordenação os abrem na mesma vista.

Adicione um comentário a um problema depois de sair da RV, na guia Tópicos: digitar no headset ainda não está implementado.

## Ver como modelo sobre a mesa

{{ui:Sobre a mesa}} reduz o modelo para caber em uma mesa à sua frente; ande ao redor dele, ou gire-o com o analógico. {{ui:Tamanho real}} devolve você ao lugar onde estava.

## Com outras pessoas, ao vivo

Em uma [sessão ao vivo](topic:work-live), todos em VR veem os outros como uma cabeça e duas mãos na cor de cada um, com o nome, e um ponto onde cada um aponta. As edições feitas por qualquer pessoa chegam ao seu headset em instantes. As pessoas na mesa de trabalho ainda não são mostradas no headset.

## Sair

Escolha {{ui:Sair da RV}} (ou tire o headset e encerre ali mesmo). A vista 3D na tela se move para onde estava a sua cabeça.

:::note
Testado com um emulador de headset, ainda não em todos os headsets. Um modelo grande pode fazer o headset engasgar: oculte os pavimentos ou modelos que não precisa antes ([ocultar e isolar](topic:hide-and-isolate)).
:::
