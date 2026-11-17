---
title: Etapas do projeto, do briefing às instruções de obra
summary: Comece com um briefing com áreas-alvo e veja Atende ou Falta conforme você desenha, compare opções de concepção com ele, vincule especificações e detalhes aos tipos, revise desenhos de fabricação e registre instruções de obra nos elementos.
keywords: briefing, quadro de áreas, área-alvo, ambientes, opções de concepção, opções, volumetria, orçamento, especificação, spec, detalhe, detalhe construtivo, tipo, desenho de fabricação, revisão, aprovar, reenviar, instrução de obra, revisão, causa, campo, etapa
from: 0a49b852
---

## O que você vai fazer

Percorra as etapas de um projeto em um único painel: escreva o briefing do cliente como ambientes com áreas-alvo, compare opções de concepção com ele, mantenha a especificação e os detalhes construtivos junto dos tipos aos quais pertencem, revise os desenhos de fabricação conforme retornam das equipes e registre instruções de obra nos elementos que elas alteram.

## Passos

1. No painel esquerdo, abra **Etapas do projeto** e, em seguida, **Briefing**.
2. Cole os ambientes, um por linha: `Living; 1; 30` significa um ambiente de 30 m². A quantidade pode ser omitida. Escolha **Adicionar os ambientes**. Preencha o cliente, o local, o orçamento, a tolerância e o programa e, depois, escolha **Salvar o briefing**.
3. Desenhe paredes. Cada ambiente formado pelas paredes que tenha o nome de um ambiente do briefing (um número depois dele, como "Quarto 2", é ignorado) é contado. O **Quadro de áreas** indica **Atende**, **Falta**, **Excede** ou **Não desenhado**, com a diferença em m².
4. Para começar um novo projeto desta forma, escolha **Iniciar um novo projeto a partir de um briefing**. Ele abre um novo modelo, a partir de um dos seus modelos salvos, se você escolher um, e coloca o briefing como primeira etapa.
5. Abra **Opções em relação ao briefing**. Cada opção de volumetria mantida no modelo é desenhada na mesma escala, com sua área bruta, o que o briefing pede e quantos ambientes do briefing cabem. **Empilhar o briefing aqui** coloca os ambientes nos pavimentos da opção, do mais baixo para o mais alto, e informa o que não cabe. O custo vem somente da tabela de preços do projeto; sem linha correspondente, aparece "Sem preço unitário".
6. Abra **Tipos, especificações e detalhes**. Cada tipo de parede, porta, janela e laje mostra se tem texto de especificação, os detalhes vinculados a ele e onde a especificação, os quadros e as folhas divergem. **Vincular um detalhe** adiciona um arquivo do DetailCraft ou do CadCraft, um endereço ou uma folha deste modelo.
7. Abra **Desenhos de fabricação**. Selecione no modelo os elementos que um desenho de fabricação cobre e, em seguida, **Receber**. Use **Aprovar**, **Aprovado com observações** ou **Revisar** com o nome e a nota do revisor. **Reenviado** cria a próxima revisão do mesmo registro e mantém o histórico de revisões. O estado também é gravado em cada elemento.
8. Abra **Instruções de obra**. Selecione os elementos, informe a causa e o que ela faz ao custo e ao prazo com suas próprias palavras e escolha **Registrar**. Depois que uma emissão for registrada, **Explicar as alterações desde esta emissão** indica quais elementos alterados uma instrução cobre e quais mudaram sem nenhum registro.

## Bom saber

- Cada etapa é um **Desfazer**. Nada é recusado: um briefing não atendido, um tipo que diverge do seu texto ou um desenho de fabricação atrasado é um aviso ou uma nota em Problemas.
- Os ambientes do briefing são espaços sem paredes. Eles têm uma meta, não uma área desenhada, por isso os quadros de ambientes e o COBie nunca os contam como ambientes desenhados.
- Um layout apenas empilha ambientes nos pavimentos conforme a área. Não desenha paredes.
- O texto da especificação é escrito em Documentos a partir do modelo. Aqui ele é somente comparado com as dimensões do próprio modelo: nenhuma cláusula de norma é escrita para você.
- Desenhos de fabricação e instruções de obra são registros no mesmo histórico do painel Emissões e revisões, por isso os dois painéis os mostram.
- O estado de um desenho de fabricação é uma propriedade de cada elemento (`CadCraft_ShopDrawing`), e uma instrução de obra é `CadCraft_SiteInstruction`, então Localizar e Colorir por propriedade podem usá-los.
- As marcas verificadas em campo (Etapa 7) estão em Propriedades, em Verificação.
