---
title: Com o que o seu computador renderiza
summary: Definições › Renderização mostra os gráficos, os núcleos do processador e a memória que este navegador permite à aplicação usar, e o nível que define onde a renderização começa.
keywords: o seu computador, placa gráfica, gpu, webgpu, webgl, processador, cpu, núcleos, threads, memória, ram, memória partilhada, isolamento, escalão, nível, velocidade, lento, velocidade de renderização, portátil
from: 360f2375
---

Abra {{ui:Definições}} ({{key:Mod+,}}), fique no separador desta aplicação e desloque até {{ui:Renderização}}. {{ui:O seu computador}} lista o que este navegador permite à aplicação usar na renderização. Nada disto sai do seu computador.

| Linha | O que significa |
|---|---|
| {{ui:Gráficos}} | A placa gráfica que o navegador indica. "WebGPU" significa que consegue fazer o trabalho de renderização; "Só WebGL 2" significa que não há WebGPU: a vista em tempo real e as imagens de alta qualidade usam a placa gráfica através do WebGL 2 (imagens com o caminho de traçado WebGL mais antigo, sem as funcionalidades que exigem WebGPU); um substituto por software significa que tudo corre no processador |
| {{ui:Processador}} | Quantos núcleos do processador o navegador indica |
| {{ui:Memória}} | Aproximadamente quanta memória tem o computador, quando o navegador o indica. Alguns navegadores não o indicam |
| {{ui:Memória partilhada}} | Se a página pode partilhar memória entre os seus workers. Ativada, cada núcleo pode trabalhar sobre uma só cópia de uma cena; desativada, cada um precisa da sua própria cópia, pelo que uma cena grande cabe em menos núcleos em simultâneo |
| {{ui:Código rápido para o processador}} | Se o navegador executa o código WebAssembly mais rápido. Sem ele é usada uma alternativa mais lenta |
| {{ui:Nível}} | {{ui:Placa gráfica, alto}}, {{ui:Placa gráfica, básico}} ou {{ui:Só processador}}, com o motivo por baixo |

## O nível

O nível é onde começa a renderização, para que um portátil com um chip gráfico integrado ou sem placa gráfica se mantenha ágil. Um chip gráfico integrado ou de telemóvel, ou 4 GB de memória ou menos, nunca obtém {{ui:Placa gráfica, alto}}.

:::note
Os navegadores diferem. O mesmo computador pode mostrar WebGPU num navegador e "Só WebGL 2" noutro. No Linux, a maioria dos navegadores ainda não tem WebGPU.
:::
