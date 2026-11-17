---
title: Escolher qual programa desenha a imagem
summary: A escolha de Motor na caixa de diálogo Renderizar: os nossos dois motores, outros programas no CadCraft Studio e o que a web faz em vez disso.
keywords: renderizar, motor, renderizador, motor de renderização, plug-in, plugin, studio, programa externo, desenhado por, fila, motor de complemento
from: 44a1ef5e
---

{{ui:Renderizar}} tem uma escolha **Motor** acima de Modo. Nossos dois motores estão sempre disponíveis e funcionam em qualquer lugar; complementos podem adicionar mais, e no CadCraft Studio a lista também traz os programas que assumem a cena.

| Motor | O que faz | Onde |
|---|---|---|
| Integrado: Rápido | A imagem parada rápida: luz do dia, sombras suaves, aparências de vidro e metal, em segundos | No navegador e no Studio |
| Integrado: Path tracer | Luz que reflete entre superfícies, na sua placa de vídeo ou processador, a fila de renderização e os outros computadores da sua rede | No navegador e no Studio |
| Motor de um complemento | Desenha e devolve a imagem: veja [Desenhar a imagem com outro programa](topic:render-other-program) | O navegador (um motor escrito em JavaScript) ou o Studio (um motor que executa um programa) |
| Um programa que assume a cena | O Studio coloca a cena na pasta dele e a mantém sincronizada | Studio |
| Abrir em … | Salva a cena e a abre em um programa; nada volta: veja [Abrir a cena em outro programa](topic:render-open-in) | A web salva o arquivo |

## Como a escolha se comporta

- Escolher Rápido ou Path tracer muda o Modo junto, e o contrário também. Nada mais na caixa muda para quem nunca usa outro motor.
- Um motor indisponível continua na lista com o motivo ("não encontrado", "precisa de uma versão mais recente"); você não pode escolhê-lo. No navegador, um motor que só roda no Studio mostra "salva um arquivo": {{ui:Renderizar}} então salva a cena e as configurações em um arquivo que você leva a esse programa.
- A escolha é salva com as configurações de renderização do arquivo, e o último motor escolhido é o motor inicial para arquivos que não têm escolha própria.
- Uma imagem de outro programa informa qual programa a desenhou e a versão dele, na caixa de diálogo e na fila de renderização. As promessas da página [Renderizar](topic:render) cobrem apenas **nossos** motores: outro programa ilumina, ajusta os tons e faz as amostragens à sua maneira, então duas imagens de uma mesma cena ficam parecidas em câmera, sol, lâmpadas e exposição, mas não pixel a pixel.

## O que cada motor recebe

A cena vai para outro programa como um **pacote**: o modelo como arquivo USD (o mesmo arquivo que [Salvar como USD](topic:usd) grava), e um arquivo de configurações que guarda o que um importador de USD não consegue reproduzir com confiança: os valores exatos dos materiais, as lâmpadas que estão ligadas com a potência e os perfis de luz, o sol, o céu, a exposição e a câmera como a caixa de diálogo a desenharia. Nada é enviado para lugar nenhum.

## A fila de renderização

Uma imagem para outro programa pode esperar [na fila de renderização](topic:render#the-render-queue) como as nossas; o trabalho registra para qual motor ele é.
