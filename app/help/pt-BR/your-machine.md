---
title: Com o que a sua máquina renderiza
summary: Configurações › Renderização mostra a placa de vídeo, os núcleos do processador e a memória que este navegador permite ao aplicativo usar, e o nível que define onde a renderização começa.
keywords: sua máquina, placa de vídeo, gpu, webgpu, webgl, processador, cpu, núcleos, threads, memória, ram, memória compartilhada, isolamento, nível, velocidade, lento, velocidade de renderização, notebook
from: 360f2375
---

Abra {{ui:Configurações}} ({{key:Mod+,}}), fique na guia própria deste aplicativo e role até {{ui:Renderização}}. {{ui:Seu computador}} lista o que este navegador permite que o aplicativo use para renderização. Nada disso sai do seu computador.

| Linha | O que significa |
|---|---|
| {{ui:Gráficos}} | A placa de vídeo que o navegador informa. "WebGPU" significa que ela pode fazer o trabalho de renderização; "WebGL 2 only" significa que não há WebGPU: a visualização ao vivo e as imagens de alta qualidade usam a placa de vídeo pelo WebGL 2 (imagens com o antigo traçador de caminhos WebGL, sem os recursos que exigem WebGPU); um substituto por software significa que tudo roda no processador |
| {{ui:Processador}} | Quantos núcleos de processador o navegador informa |
| {{ui:Memória}} | Aproximadamente quanta memória o computador tem, quando o navegador informa. Alguns navegadores não informam |
| {{ui:Memória compartilhada}} | Se a página pode compartilhar memória entre os seus workers. Ligada, cada núcleo pode trabalhar em uma única cópia de uma cena; desligada, cada um precisa da própria cópia, então uma cena grande cabe em menos núcleos ao mesmo tempo |
| {{ui:Código de processador rápido}} | Se o navegador executa o código WebAssembly mais rápido. Sem ele, é usado um substituto mais lento |
| {{ui:Nível}} | {{ui:Placa de vídeo, alta}}, {{ui:Placa de vídeo, básica}} ou {{ui:Somente processador}}, com o motivo abaixo |

## O nível

O nível define onde a renderização começa, para que um notebook com chip gráfico integrado ou sem placa de vídeo continue responsivo. Um chip gráfico integrado ou de celular, ou 4 GB de memória ou menos, nunca recebe {{ui:Placa de vídeo, alta}}.

:::note
Os navegadores variam. O mesmo computador pode mostrar WebGPU em um navegador e "WebGL 2 only" em outro. No Linux, a maioria dos navegadores ainda não tem WebGPU.
:::
