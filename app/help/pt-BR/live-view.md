---
title: A vista em tempo real
summary: Um painel ao lado do modelo que o mostra no aspecto em tempo real, com sol, sombras e luz refletida, e que acompanha cada alteração que você faz; percorra-o e defina a hora do dia e o mês.
keywords: vista em tempo real, tempo real, renderização em tempo real, percurso, caminhar, primeira pessoa, apresentação, cliente, segunda tela, segunda janela, monitor, hora do dia, sol, estação, mês, sombras, oclusão ambiente, reflexos, luz refletida, iluminação global, webgpu, webgl
from: ea5c02bf
---

A vista em tempo real mostra o modelo no aspecto em tempo real: o céu e o sol a partir do lugar e da data do seu terreno, as sombras do sol, as tintas e materiais que você atribuiu aos elementos, luminárias e a luz refletida por paredes e pisos. Ela acompanha o que você faz: se você gira a vista 3D, ela gira também; se você altera o modelo, ela mostra a mudança logo em seguida. Nada é enviado.

Ela desenha a mesma cena, tintas, luminárias e sol que [Renderizar imagem](topic:render); para uma imagem final, use essa função.

## Abrir

1. Abra um modelo e escolha {{ui:Vista em tempo real}} na barra de ferramentas. O painel abre sobre o aplicativo, no canto inferior direito.
2. Arraste a barra de título para movê-lo; puxe um canto para aumentá-lo.
3. {{ui:Vista em tempo real em nova janela}} (o botão ao lado) ou {{ui:Nova janela}} no painel o move para uma janela própria, para uma segunda tela. Se o seu navegador bloquear janelas pop-up, ela abre como painel.
4. {{ui:Fechar}} a fecha.

## Os controles

| Controle | O que faz |
|---|---|
| {{ui:Acompanhar a vista}} | Ligado: a vista em tempo real olha para onde a vista 3D olha. Caminhar a desliga |
| {{ui:Caminhar}} | Caminha pelo modelo (abaixo) |
| {{ui:Gravidade}} | Ao caminhar: fica sobre os pisos e sobe escadas. Desligado: voa |
| {{ui:Hora}} | A hora do dia. O sol se move ao arrastar |
| {{ui:Mês}} | O mês, para ver o sol no inverno e no verão |
| {{ui:Qualidade}} | {{ui:Para este computador}}, ou {{ui:Baixa}}, {{ui:Médio}} ou {{ui:Alta}} |

A linha na parte inferior indica o que desenha a vista (WebGPU ou WebGL 2), a qualidade e a luz refletida.

## Percorrer o modelo

1. Gire a vista 3D para o ponto onde quer ficar e escolha {{ui:Caminhar}}. Você fica sobre o piso, abaixo do ponto de visão da vista, com 1.6 m de altura.
2. Clique na vista em tempo real e use {{key:W}} {{key:A}} {{key:S}} {{key:D}} ou as setas do teclado. Mantenha {{key:Shift}} pressionada para correr. Arraste para olhar ao redor.
3. Degraus de até 40 cm são subidos (escadas); o que for mais alto é uma parede. As paredes param você, e você desliza ao longo delas.
4. Com {{ui:Gravidade}} desligada, você voa: {{key:E}} sobe, {{key:Q}} desce.
5. {{key:Esc}} para de caminhar.

## Luz refletida

A luz que reflete de uma parede ensolarada para o piso, e o interior mais escuro de um ambiente, é calculada em segundo plano, em todos os núcleos do processador. Enquanto calcula, a linha inferior mostra {{ui:Luz refletida: 40 %}}; quando fica pronta, a vista a incorpora. Após uma alteração, o cálculo recomeça.

:::note
Trata-se de uma aproximação para a vista em tempo real, não de uma imagem renderizada: pequenos detalhes entre os pontos recebem a luz refletida dos pontos próximos a eles.
:::

:::note
Os navegadores variam. Onde o navegador tem WebGPU, a vista em tempo real o usa; em outros casos, usa WebGL 2 e tem a mesma aparência. Sem nenhum dos dois, o painel informa isso.
:::
