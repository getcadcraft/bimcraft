---
title: A vista em direto
summary: Um painel ao lado do modelo que o mostra no aspeto em tempo real, com sol, sombras e luz indireta, e que acompanha cada alteração que faz; percorra-o a pé e defina a hora do dia e o mês.
keywords: vista em direto, tempo real, tempo real, render em tempo real, percurso, caminhar, primeira pessoa, apresentação, cliente, segundo ecrã, segunda janela, monitor, hora do dia, sol, estação, mês, sombras, oclusão ambiental, reflexos, luz indireta, iluminação global, webgpu, webgl
from: ea5c02bf
---

A vista em direto mostra o modelo no aspeto em tempo real: o céu e o sol a partir do lugar e da data do terreno, as sombras do sol, as tintas e os materiais que atribuiu aos elementos, as luminárias e a luz indireta que ressalta das paredes e dos pavimentos. Acompanha o que se faz: se rodar a vista 3D, ela roda também; se alterar o modelo, mostra a alteração pouco depois. Nada é carregado.

Desenha a mesma cena, tintas, luminárias e sol que [Renderizar uma imagem](topic:render); para uma imagem final, use essa.

## Abrir

1. Abra um modelo e escolha {{ui:Vista em direto}} na barra de ferramentas. O painel abre sobre a aplicação, em baixo à direita.
2. Arraste a barra de título para o mover; puxe o canto para o aumentar.
3. {{ui:Vista em direto numa nova janela}} (o botão ao lado) ou {{ui:Nova janela}} no painel move-o para uma janela própria, para um segundo ecrã. Se o navegador bloquear as janelas pop-up, abre como painel.
4. {{ui:Fechar}} fecha-o.

## Controlos

| Controlo | O que faz |
|---|---|
| {{ui:Seguir a vista}} | Ligado: a vista em direto olha para onde olha a vista 3D. Caminhar desliga-o |
| {{ui:Caminhar}} | Percorre o modelo (abaixo) |
| {{ui:Gravidade}} | Ao caminhar: fica de pé sobre os pisos e sobe escadas. Desligado: voa |
| {{ui:Hora}} | A hora do dia. O sol move-se ao arrastar |
| {{ui:Mês}} | O mês, para ver o sol no inverno e no verão |
| {{ui:Qualidade}} | {{ui:Para este computador}}, ou {{ui:Baixa}}, {{ui:Médio}} ou {{ui:Alta}} |

A linha em baixo indica o que desenha a vista (WebGPU ou WebGL 2), a qualidade e a luz indireta.

## Percorrer o modelo

1. Rode a vista 3D para o local onde quer estar e escolha {{ui:Caminhar}}. Fica-se de pé sobre o piso abaixo do ponto de vista da vista, com 1.6 m de altura.
2. Clique na vista em direto e use {{key:W}} {{key:A}} {{key:S}} {{key:D}} ou as teclas de seta. Mantenha {{key:Shift}} premida para correr. Arraste para olhar à volta.
3. Degraus até 40 cm são subidos (escadas); qualquer coisa mais alta é uma parede. As paredes param a deslocação, que continua ao longo delas.
4. Com {{ui:Gravidade}} desligada, voa-se: {{key:E}} sobe, {{key:Q}} desce.
5. {{key:Esc}} para de caminhar.

## Luz indireta

A luz que ressalta de uma parede ao sol para o piso, e o interior mais escuro de um compartimento, são calculados em segundo plano, em todos os núcleos do processador. Enquanto calcula, a linha de baixo diz {{ui:Luz indireta: 40 %}}; quando está pronta, a vista incorpora-a. Após uma alteração, recomeça.

:::note
Isto é uma aproximação para uma vista em direto, não uma imagem renderizada: pequenos detalhes entre os pontos recebem a luz indireta dos pontos próximos.
:::

:::note
Os navegadores diferem. Onde o navegador tem WebGPU, a vista em direto usa-o; noutros casos usa WebGL 2 e tem o mesmo aspeto. Sem nenhum dos dois, o painel indica-o.
:::
