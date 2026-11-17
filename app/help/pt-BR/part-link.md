---
title: Enviar um elemento para o PartCraft e trazê-lo de volta
summary: Escolha um apoio, suporte, guarda-corpo ou peça de equipamento, projete-o como uma peça no PartCraft com a edificação ao redor e aceite a nova forma de volta no modelo.
keywords: partcraft, peça, enviar, link, elemento, apoio, suporte, cerca, guarda-corpo, equipamento, projeto, ida e volta, aceitar, alterado, links de peça
from: 4ce2f449
---

## O que você vai fazer

Projete um elemento da edificação como uma peça: envie-o ao PartCraft, altere-o lá (recortar, adicionar, furar, redimensionar) e traga a nova forma de volta ao modelo.

## Passos

1. Selecione um elemento no modelo: um elemento genérico, um equipamento, um pilar, uma viga, um guarda-corpo ou um móvel.
2. Escolha {{ui:Links de peça}} na barra de ferramentas e depois {{ui:Enviar para o PartCraft}}. O PartCraft abre em uma nova guia com o elemento como peça. Os elementos a até 3 m são desenhados em cinza ao lado dele, para que você o projete no lugar. Eles não podem ser alterados ali.
3. Altere a peça no PartCraft. No PartCraft, escolha {{ui:Arquivo}} › {{ui:Exportar}} › {{ui:Salvar de volta no BimCraft}}. Você pode salvar de volta quantas vezes quiser.
4. De volta ao BimCraft, o botão {{ui:Links de peça}} mostra uma contagem, e o cartão lista o elemento como {{ui:Alterado no PartCraft}}, com a mudança de tamanho e de volume descrita em palavras.
5. Escolha {{ui:Exibir}} para vê-lo, depois {{ui:Aceitar}} para dar ao elemento a nova forma, ou {{ui:Manter o meu}} para deixá-lo como estava.

## O que você deve ver

- Aceitar é uma única etapa de desfazer. O elemento mantém seu lugar, GlobalId, tipo, material e propriedades. Apenas o corpo dele é substituído.
- O elemento recebe um conjunto de propriedades {{ui:CadCraft_PartLink}} com o link, seu status e a revisão.
- {{ui:Enviar novamente}} abre o mesmo elemento no PartCraft mais uma vez, no mesmo link.

## Vale saber

- Paredes, pisos, coberturas, portas, janelas, escadas, rampas e espaços são desenhados pelas ferramentas de construção a partir de um contorno e refeitos após cada alteração. Um corpo vindo de outro aplicativo seria sobrescrito, então esses elementos são recusados, com o motivo informado.
- A forma volta como malha (uma tesselação IFC), e não como os recursos da peça. O histórico da peça permanece no PartCraft.
- Se o elemento mudou no modelo depois que você o enviou, o cartão informa isso antes de você aceitar: aceitar substitui essas mudanças.
- Nada é enviado. Os dois aplicativos são páginas de um mesmo site e passam o elemento entre si neste navegador. Ambos precisam estar abertos no mesmo navegador.
- O elemento deve fechar-se como um sólido no PartCraft. Um elemento com grandes lacunas abertas na forma é recusado ali, com o número de arestas abertas.
- Para aceitar, torne ativo o modelo que contém o elemento.
