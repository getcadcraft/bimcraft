---
title: Fases do projeto, do programa às instruções de obra
summary: Comece por um programa com áreas-alvo e veja se cumpre ou fica insuficiente à medida que desenha, compare opções de conceito com ele, associe especificações e detalhes aos tipos, reveja desenhos de oficina e registe instruções de obra nos elementos.
keywords: programa, mapa de áreas, área-alvo, cumprido, insuficiente, espaços, opções de conceito, opções, volumetria, orçamento, especificação, spec, detalhe, detalhe construtivo, tipo, desenho de oficina, revisão, aprovar, reenviar, instrução de obra, revisão, causa, obra, fase
from: 0a49b852
---

## O que vai fazer

Percorra as fases de um projeto num só painel: escreva o programa do cliente como espaços com áreas-alvo, compare opções de conceito com ele, mantenha a especificação e os detalhes construtivos junto dos tipos a que pertencem, reveja os desenhos de oficina à medida que regressam dos subempreiteiros e registe instruções de obra nos elementos que alteram.

## Passos

1. No painel esquerdo, abra **Fases do projeto** e, depois, **Programa**.
2. Cole os espaços, um por linha: `Living; 1; 30` significa um espaço de 30 m². A contagem pode ser omitida. Escolha **Adicionar os espaços**. Preencha o cliente, o local, o orçamento, a tolerância e o calendário e, depois, **Guardar o programa**.
3. Desenhe as paredes. Cada compartimento que as paredes fecham e que tem o nome de um espaço do programa (um número a seguir, como «Quarto 2», é ignorado) é contado. O **Mapa de áreas** indica **Cumprido**, **Insuficiente**, **Excede** ou **Não desenhado**, com a diferença em m².
4. Para começar um novo projeto desta forma, escolha **Iniciar um novo projeto a partir de um programa**. Abre um modelo novo, a partir de um dos seus modelos guardados, se escolher um, e coloca o programa como primeiro passo.
5. Abra **Opções face ao programa**. Cada opção de volumetria guardada no modelo é desenhada à mesma escala, com a sua área bruta, o que o programa pede e quantos dos espaços do programa cabem. **Distribuir o programa aqui** coloca os espaços nos pisos da opção, do mais baixo para o mais alto, e indica o que não cabe. O custo vem apenas da tabela de preços do projeto; sem linha correspondente, indica «Sem preço unitário».
6. Abra **Tipos, especificações e detalhes**. Cada tipo de parede, porta, janela e piso indica se tem texto de especificação, os detalhes associados e onde a especificação, os mapas e as folhas não coincidem. **Ligar um detalhe** adiciona um ficheiro DetailCraft ou CadCraft, um endereço ou uma folha deste modelo.
7. Abra **Desenhos de oficina**. Selecione os elementos que um desenho de oficina abrange no modelo e, depois, **Receber**. Use **Aprovar**, **Aprovado com observações** ou **Rever**, com o nome e a nota do revisor. **Reenviado** cria a revisão seguinte do mesmo registo e mantém o histórico de revisões. O estado também fica escrito em cada elemento.
8. Abra **Instruções de obra**. Selecione os elementos, indique a causa e o que ela implica para o custo e para o prazo, com as suas próprias palavras, e escolha **Registar**. Depois de uma emissão ter sido registada, **Explicar as alterações desde esta emissão** indica quais dos elementos alterados são abrangidos por uma instrução e quais foram alterados sem nada registado.

## Bom saber

- Cada passo pode ser desfeito com um único **Anular**. Nada é recusado: um programa não cumprido, um tipo que não coincide com o seu texto ou um desenho de oficina atrasado é um aviso ou uma nota em **Problemas**.
- Os espaços do programa são áreas sem paredes. Têm uma meta, não uma área desenhada, por isso os mapas de compartimentos e o COBie nunca os contam como compartimentos desenhados.
- Uma distribuição apenas coloca os espaços nos pisos por área. Não desenha paredes.
- O texto da especificação é escrito em **Documentos** a partir do modelo. Aqui é apenas comparado com as dimensões do próprio modelo: nunca é escrita por si nenhuma cláusula de norma.
- Os desenhos de oficina e as instruções de obra são registos no mesmo histórico do painel **Emissões e revisões**, por isso ambos os painéis os mostram.
- O estado de um desenho de oficina é uma propriedade de cada elemento (`CadCraft_ShopDrawing`), e uma instrução de obra é `CadCraft_SiteInstruction`, pelo que **Localizar** e **Colorir por propriedade** as podem usar.
- As marcas verificadas em obra (Fase 7) estão em **Propriedades**, em **Verificação**.
