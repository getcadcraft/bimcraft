---
title: Enviar um elemento para o PartCraft e recuperá-lo
summary: Selecione um apoio, uma consola, uma guarda ou uma peça de equipamento, projete-o como peça no PartCraft com o edifício à volta e aceite a nova forma de volta no modelo.
keywords: partcraft, peça, enviar, ligação, elemento, apoio, consola, guarda, vedação, equipamento, projeto, ida e volta, aceitar, alterado, ligações de peças
from: 4ce2f449
---

## O que vai fazer

Projete um elemento do edifício como peça: envie-o para o PartCraft, altere-o aí (cortar, acrescentar, furar, redimensionar) e traga a nova forma de volta para o modelo.

## Passos

1. Selecione um elemento no modelo: um elemento genérico, um equipamento, um pilar, uma viga, uma guarda ou mobiliário.
2. Escolha {{ui:Part links}} na barra de ferramentas e depois {{ui:Send to PartCraft}}. O PartCraft abre num novo separador com o elemento como peça. Os elementos a menos de 3 m são desenhados a cinzento ao lado, para que o possa projetar no seu sítio. Não podem ser alterados aí.
3. Altere a peça no PartCraft. No PartCraft escolha {{ui:File}} › {{ui:Export}} › Guardar de volta no BimCraft. Pode guardar de volta as vezes que quiser.
4. De volta ao BimCraft, o botão {{ui:Part links}} mostra uma contagem, e o cartão lista o elemento como {{ui:Changed in PartCraft}}, com a alteração de tamanho e de volume descrita por extenso.
5. Escolha {{ui:Show}} para o ver, depois {{ui:Accept}} para dar ao elemento a nova forma, ou {{ui:Keep mine}} para o deixar como estava.

## O que deve ver

- Aceitar é um único passo de anulação. O elemento mantém o seu lugar, GlobalId, tipo, material e propriedades. Só o seu corpo é substituído.
- O elemento recebe um conjunto de propriedades CadCraft_PartLink com a ligação, o estado e a revisão.
- {{ui:Send again}} abre o mesmo elemento no PartCraft mais uma vez, na mesma ligação.

## Bom saber

- Paredes, pisos, coberturas, portas, janelas, escadas, rampas e espaços são desenhados pelas ferramentas do edifício a partir de um contorno e reconstruídos após cada alteração. Um corpo vindo de outra aplicação seria sobreposto, por isso estes elementos são recusados, com o motivo indicado.
- A forma volta como malha (uma teselação IFC), e não como as operações da peça. O histórico da peça fica no PartCraft.
- Se o elemento foi alterado no modelo depois de o enviar, o cartão indica-o antes de aceitar: aceitar substitui essas alterações.
- Nada é enviado. As duas aplicações são páginas do mesmo site e passam o elemento entre si neste navegador. Ambas têm de estar abertas no mesmo navegador.
- O elemento tem de se fechar num sólido no PartCraft. Um elemento com grandes lacunas abertas é recusado aí, com o número de arestas abertas.
- Para aceitar, ative o modelo que contém o elemento.
