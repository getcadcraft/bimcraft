---
title: Rever o modelo num visor de RV
summary: Percorra o modelo IFC em tamanho real num visor de RV: salte, rode, meça, corte o modelo, coloque questões BCF com uma imagem, veja-o como maqueta de mesa e encontre os outros de uma sessão em direto.
keywords: rv, realidade virtual, visor, webxr, xr, imersivo, quest, oculus, vive, index, pico, percorrer, percurso, teletransporte, revisão de projeto, coordenação, revisão, medir, corte, questão, questões, bcf, maqueta de mesa, modelo à escala, presença, avatares, live, em conjunto
from: 8994b36d
---

{{ui:VR}} na barra de ferramentas coloca-o dentro do modelo com um visor de RV, em tamanho real. Fica onde está a câmara da vista 3D, no chão por baixo dela, virado para o mesmo lado. O visor mostra o que a vista 3D mostra: pisos, elementos e modelos ocultos continuam ocultos, e os materiais pintados também aparecem. Nada é enviado: o navegador desenha-o neste computador (ou no navegador do próprio visor).

## O que precisa

- Um visor que o navegador consegue controlar (WebXR): o navegador do próprio visor autónomo, ou Chrome ou Edge num PC com um visor ligado.
- Um modelo IFC aberto, numa página segura (https), como é neste site.

Sem visor, {{ui:VR}} aparece a cinzento e indica porquê.

## Começar

1. Prepare a vista 3D no ponto onde quer começar: numa divisão, ou no exterior a olhar para o edifício.
2. Clique em {{ui:VR}} na barra de ferramentas.
3. Coloque o visor.

O menu está nas costas da mão esquerda. Aponte-o com o comando direito e puxe o gatilho para escolher um botão. (Só com uma mão, o menu flutua à frente do ponto de partida.)

## Deslocar-se

- **Saltar:** em {{ui:Mover}}, aponte para um piso e puxe o gatilho; aterra aí. Ou empurre o manípulo para a frente para mirar, e largue para saltar. Só pode aterrar em pisos, lajes e no terreno (superfícies voltadas para cima), nunca numa parede.
- **Rodar:** empurre o manípulo para a esquerda ou para a direita: roda 30° de cada vez.
- **Andar:** na área disponível, basta andar.

## Medir

Escolha {{ui:Medir}} e puxe o gatilho em dois pontos. A distância aparece entre eles, em metros. Um ponto perto de um canto encaixa no canto.

## Cortar o modelo

Escolha {{ui:Corte}} e puxe o gatilho sobre uma superfície:

- numa parede (ou qualquer coisa que não seja um piso): tudo entre si e essa superfície é cortado, para ver para dentro. Funciona melhor do exterior, ou através de uma divisão;
- num piso, de cima: um corte de planta a 1.2 m acima desse piso, para que as paredes mostrem a sua parte inferior.

{{ui:Limpar}} retira o corte e as medições. Se um [plano de corte](topic:section-plane) cortar o modelo ao começar, o visor começa com ele.

## Colocar uma questão

Escolha {{ui:Questão}} e puxe o gatilho onde está o problema. Um alfinete numerado marca-o, e a questão vai para o separador {{ui:Questões}} como um tópico BCF, com uma imagem do que viu e a câmara onde estava, nas coordenadas do próprio modelo. Guarde-as com o resto das suas [questões](topic:issues-bcf) num ficheiro BCF; outras ferramentas de coordenação abrem-nas na mesma vista.

Acrescente um comentário a uma questão depois de sair da RV, no separador {{ui:Questões}}: escrever no visor ainda não está implementado.

## Ver como maqueta de mesa

{{ui:Maqueta de mesa}} reduz o modelo para caber numa mesa à sua frente; ande à volta dela, ou rode-a com o manípulo. {{ui:Escala real}} repõe-no no sítio onde estava.

## Com outros, em direto

Numa [sessão Live](topic:work-live), todos na RV veem os outros como uma cabeça e duas mãos na sua própria cor, com o nome, e um ponto onde cada um aponta. As alterações que qualquer pessoa faça chegam ao seu visor em instantes. As pessoas às secretárias ainda não são mostradas no visor.

## Sair

Escolha {{ui:Sair da RV}} (ou tire o visor e termine aí). A vista 3D no ecrã move-se para onde estava a sua cabeça.

:::note
Testado com um emulador de visor, ainda não em todos os visores. Um modelo grande pode fazer o visor travar: oculte primeiro os pisos ou modelos de que não precisa ([ocultar e isolar](topic:hide-and-isolate)).
:::
