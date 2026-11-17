---
title: Orientações de desenho: tamanhos incomuns são criados, com um aviso
summary: O BimCraft cria o que você pede. Um tamanho fora do usual vira um aviso em Problemas; ele nunca impede você de desenhar ou salvar.
keywords: orientação, aviso, problemas, recusado, não desenha, muito pequeno, muito estreito, mínimo, limite, largura de escada, espelho, piso, pilar, rampa, tamanho de porta, linha de grade, altura de nível, água-furtada, escada caracol, inclinação de plataforma, parede curta, sem bloqueios
from: 20090130
---

## O que você vai fazer

Desenhe um tamanho que não seja o usual e veja onde o BimCraft avisa você sobre isso.

## Passos

1. Desenhe ou altere o elemento como quiser: por exemplo, uma escada com 400 mm de largura.
2. O BimCraft cria como você pediu.
3. Abra {{ui:Problems}} na barra superior. Em **Orientações de desenho** há um aviso que informa o elemento, o tamanho que você deu e a faixa usual.
4. Clique no aviso para selecionar o elemento. Altere o tamanho se foi um deslize, ou deixe como está: um aviso pode ser aceito, com ou sem motivo.

## O que é orientação

Estes casos eram recusados antes. Agora são criados, cada um com um aviso:

- **Escadas**: mais estreitas que 500 mm ou mais largas que 5 m; espelhos fora de 100 a 300 mm; pisos fora de 150 a 600 mm.
- **Escadas caracol**: um pilar central fora de 40 a 400 mm; pisos com menos de 100 mm de profundidade na linha de caminhada.
- **Pilares**: menores que 50 mm de largura ou menores que 300 mm de altura.
- **Rampas**: menos de 300 mm de largura.
- **Portas e janelas**: menos de 100 mm de largura ou altura.
- **Linhas de grade**: menos de 100 mm de comprimento.
- **Paredes**: uma parede que fica com menos de 50 mm de comprimento, por exemplo após um aparar.
- **Níveis**: menos de 1 m ou mais de 100 m de altura (edifício novo, níveis desencontrados, altura de um nível).
- **Água-furtadas**: fora de 600 mm a 12 m de largura, uma parede frontal fora de 300 mm a 4 m, um beiral com mais de 1 m, paredes fora de 50 a 400 mm.
- **Plataformas de edifício**: taludes laterais fora de 1:1 a 10:1.

## O que continua recusado

Apenas o que não pode ser construído ou encontrado, cada um com uma mensagem que explica o motivo:

- Um tamanho menor que 10 mm (uma parede menor que 1 mm): não há nada para construir.
- Uma água-furtada não mais larga que duas vezes a espessura de sua parede: suas duas paredes laterais se encontrariam.
- Uma plataforma de edifício com taludes laterais mais íngremes que 0,1:1 (isso é um muro de arrimo) ou mais planos que 100:1 (a terraplenagem continuaria sem fim).
- Algo que não cabe onde você o colocou, um contorno que se cruza, ou um elemento que não está mais no modelo.

## Bom saber

- O aviso é calculado a partir do modelo, então ele reaparece quando você abre o arquivo depois, e desaparece quando o tamanho é corrigido.
- Verificações de modelo, pacotes de normas e verificações IDS também apenas listam o que encontram. Nada em {{ui:Problems}} impede você de desenhar ou salvar.
- As faixas usuais são prática geral, não um código de obras. Para um código, adicione o complemento Normas de construção e escolha o seu local.

## Próximos passos

- [Verificar um modelo quanto a problemas comuns](topic:model-checks)
- [Escadas e guarda-corpos](topic:stairs-and-railings)
