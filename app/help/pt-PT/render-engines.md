---
title: Escolher o programa que desenha a imagem
summary: A escolha de Motor na caixa de diálogo Render: os nossos dois motores, outros programas no CadCraft Studio, e o que a web faz em vez disso.
keywords: render, motor, renderizador, motor de renderização, plug-in, plugin, studio, programa externo, desenhado por, fila, motor de suplemento
from: 44a1ef5e
---

{{ui:Render}} tem uma escolha **Motor** acima de {{ui:Mode}}. Os nossos dois motores estão sempre disponíveis e funcionam em todo o lado; os suplementos podem acrescentar mais, e no CadCraft Studio a lista também inclui os programas que assumem a cena.

| Motor | O que faz | Onde |
|---|---|---|
| Integrado: Rápido | A imagem rápida: luz do dia, sombras suaves, efeitos de vidro e metal, em segundos | O navegador e o Studio |
| Integrado: Path tracer | Luz que ressalta entre superfícies na sua placa gráfica ou processador, a fila de renderização e os outros computadores da sua rede | O navegador e o Studio |
| Motor de um suplemento | Desenha a imagem e devolve-a: ver [Desenhar a imagem com outro programa](topic:render-other-program) | O navegador (um motor escrito em JavaScript) ou o Studio (um motor que executa um programa) |
| Um programa que assume a cena | O Studio coloca a cena na sua pasta e mantém-na em sintonia | O Studio |
| Abrir em … | Guarda a cena e abre-a num programa; nada volta: ver [Abrir a cena noutro programa](topic:render-open-in) | A web guarda o ficheiro |

## Como a escolha funciona

- Escolher Rápido ou o Path tracer muda também o {{ui:Mode}}, e vice-versa. Nada mais na caixa de diálogo muda para quem nunca usa outro motor.
- Um motor que não está disponível continua na lista com o motivo («não encontrado», «precisa de uma versão mais recente»); não pode ser escolhido. No navegador, um motor que só funciona no Studio mostra «guarda um ficheiro»: {{ui:Render}} então guarda a cena e as suas definições num ficheiro que leva a esse programa.
- A escolha fica guardada com as definições de renderização do ficheiro, e o último motor escolhido é o motor inicial para os ficheiros que não têm escolha própria.
- Uma imagem de outro programa indica qual o programa que a desenhou e a sua versão, na caixa de diálogo e na fila de renderização. As promessas da página [Render](topic:render) cobrem apenas os **nossos** motores: outro programa ilumina, tonaliza e amostra à sua maneira, por isso duas imagens da mesma cena são parecidas em câmara, sol, lâmpadas e exposição, mas não pixel a pixel.

## O que cada motor recebe

A cena vai para outro programa como um **pacote**: o modelo como ficheiro USD (o mesmo ficheiro que [Guardar como USD](topic:usd) escreve), e um ficheiro de definições que contém o que um importador USD não consegue tratar com segurança: os valores exatos dos materiais, as lâmpadas acesas com a sua potência e perfis de luz, o sol, o céu, a exposição e a câmara tal como a caixa de diálogo a desenharia. Nada é enviado para lado nenhum.

## A fila de renderização

Uma imagem para outro programa pode esperar na [fila de renderização](topic:render#the-render-queue) como as nossas; a sua tarefa lembra qual o motor a que se destina.
