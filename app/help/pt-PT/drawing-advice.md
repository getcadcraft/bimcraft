---
title: Sugestões de desenho: tamanhos fora do usual são criados, com um aviso
summary: O BimCraft cria o que pede. Um tamanho fora do usual torna-se um aviso em Problemas; nunca impede de desenhar ou guardar.
keywords: sugestão, aviso, problemas, recusado, não desenha, muito pequeno, muito estreito, mínimo, limite, largura da escada, espelho, cobertor, pilar, rampa, tamanho da porta, linha de grelha, altura do nível, trapeira, escada de caracol, inclinação da plataforma, parede curta, sem bloqueios
from: 20090130
---

## O que vai fazer

Desenhe um tamanho que não é o usual e veja onde o BimCraft o assinala.

## Passos

1. Desenhe ou altere o elemento como quiser: por exemplo, uma escada com 400 mm de largura.
2. O BimCraft cria-o conforme pedido.
3. Abra {{ui:Problemas}} na barra superior. Em **Sugestões de desenho** há um aviso que indica o elemento, o tamanho escrito e o intervalo usual.
4. Clique no aviso para selecionar o elemento. Altere o tamanho se foi um lapso, ou deixe-o: um aviso pode ser aceite, com ou sem motivo.

## O que é sugestão

Estes casos eram recusados antes. Agora são criados, cada um com um aviso:

- **Escadas**: mais estreitas do que 500 mm ou mais largas do que 5 m; espelhos fora de 100 a 300 mm; cobertores fora de 150 a 600 mm.
- **Escadas de caracol**: um poste fora de 40 a 400 mm; cobertores com menos de 100 mm de profundidade na linha de percurso.
- **Pilares**: com menos de 50 mm de largura ou menos de 300 mm de altura.
- **Rampas**: com menos de 300 mm de largura.
- **Portas e janelas**: com menos de 100 mm de largura ou altura.
- **Linhas de grelha**: com menos de 100 mm de comprimento.
- **Paredes**: uma parede que fique com menos de 50 mm de comprimento, por exemplo ao aparar.
- **Níveis**: com menos de 1 m ou mais de 100 m de altura (edifício novo, níveis desfasados, altura de um nível).
- **Trapeiras**: com 600 mm a 12 m de largura, uma parede da frente fora de 300 mm a 4 m, um beirado superior a 1 m, paredes fora de 50 a 400 mm.
- **Plataformas de edifício**: inclinações laterais fora de 1:1 a 10:1.

## O que continua recusado

Só o que não pode ser construído ou encontrado, cada caso com uma mensagem que diz porquê:

- Um tamanho abaixo de 10 mm (uma parede abaixo de 1 mm): não há nada para construir.
- Uma trapeira não mais larga do que o dobro da espessura da sua parede: as suas duas paredes laterais encontrar-se-iam.
- Uma plataforma com inclinações laterais mais íngremes do que 0.1:1 (isso seria um muro de suporte) ou mais planas do que 100:1 (o nivelamento continuaria sem fim).
- Algo que não cabe onde foi colocado, um contorno que se cruza a si mesmo, ou um elemento que já não está no modelo.

## Bom saber

- A sugestão é calculada a partir do modelo; por isso volta a aparecer quando o ficheiro for aberto mais tarde, e desaparece quando o tamanho for corrigido.
- As verificações do modelo, os pacotes de regulamentação e as verificações IDS também apenas listam o que encontram. Nada em {{ui:Problemas}} impede de desenhar ou guardar.
- Os intervalos usuais são prática geral, não um código de construção. Para um código, adicione o suplemento Regulamentação de edifícios e escolha o seu local.

## A seguir

- [Verificar um modelo em busca de problemas comuns](topic:model-checks)
- [Escadas e corrimãos](topic:stairs-and-railings)
