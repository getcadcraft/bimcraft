---
title: Comparar unha nube de puntos co modelo e o calendario 4D
summary: Xulgue cada elemento do modelo contra unha nube de puntos aberta (construído, en parte, falta, non alcanzado), vexa a porcentaxe construída, coloreae o modelo segundo iso e, cun calendario 4D cargado, liste o que vai atrasado ou adiantado no día 4D.
keywords: nube de puntos, escaneo, progreso, porcentaxe completada, construído, falta, atrasado, adiantado, 4D, progreso en obra, desviación, como construído, escaneo láser, dron, comparar
from: 6fdc9003
---

Abra un IFC, abra unha nube de puntos xunto a el (vexa [Nubes de puntos](topic:point-clouds)) e colóquea sobre o modelo. A sección {{ui:Comparar a nube de puntos co modelo}} aparece no panel da dereita mentres estea aberta unha nube.

## Que fai

Prema {{ui:Comparar}}. Cada elemento do modelo xúlgase pola súa superficie, porque iso é o que ve un escáner. As seis caras da súa caixa córtanse en celas de uns 20 cm; unha cela conta cando un punto do escaneo está dentro da súa {{ui:Tolerancia}} (50 mm para comezar) da cara. Conta a mellor cara grande, así que un muro escaneado desde un lado non se penaliza polo outro lado.

- **Construído**: vese polo menos o 40 % da superficie.
- **En parte**: do 10 % ao 40 %.
- **Falta**: menos que iso, pero o escaneo chega ao elemento (puntos a menos de 1,5 m del).
- **Non alcanzado**: o escaneo nunca chegou alí, así que non se di nada del.

Para os elementos construídos e en parte construídos tamén dá o desvío medio dos puntos do escaneo respecto da superficie do modelo e indica se o elemento está no seu sitio (dentro da tolerancia), preto (ata tres veces) ou desviado (máis lonxe). Só ve desvíos de ata cinco veces a tolerancia: un elemento construído máis lonxe do seu sitio que iso lese como falta.

O resumo dá a porcentaxe construída entre os elementos que alcanza o escaneo, por número e por volume. Os elementos en parte construídos cóntanse por separado e non se suman aos construídos.

## Fronte ao calendario 4D

Con un calendario 4D cargado (vexa [Calendario 4D](topic:4d-schedule)), o resultado tamén usa o día que fixo no control deslizante 4D: os elementos que deberían estar listos ese día e que o escaneo non mostra como construídos están **atrasados**; os elementos aínda non previstos que están construídos están **adiantados**. Os elementos atrasados listanse en {{ui:Problemas}}, e a táboa pode filtrarse por eles. Sen calendario non se di nada sobre atrasos nin adiantos.

## A táboa e o modelo

Prema unha fila para seleccionar o elemento. {{ui:Colorear o modelo}} pinta os elementos de verde (construído), ámbar (en parte), vermello (falta) ou gris (non alcanzado); {{ui:Cores propias}} devólveas. {{ui:Gardar CSV}} escribe a táboa. {{ui:Marcar os elementos coincidentes como verificados en obra}} marca como verificado en obra (LOD 500, método escaneo) cada elemento visto como construído e dentro da tolerancia, nun só paso que pode desfacer. Consulte [Marcar elementos como comprobados ou verificados en obra](topic:verification).

:::warning
Isto compara a caixa de cada elemento con puntos do escaneo dentro dunha tolerancia. **Non é un levantamento, un cómputo de cantidades nin unha base para pagamentos.** Un elemento oculto tras outro escaneado (un muro detrás dun revestimento, unha laxe debaixo dun acabado de chan) comparte a súa superficie e pode lerse como construído; un elemento curvo ou inclinado ten unha caixa maior que o seu corpo e pode lerse como en parte ou en falta. Mire a lista antes de actuar sobre ela. Os comentarios de permisos e as notas de progreso non forman parte disto: quedan nas columnas onde os garda.
:::

Un asistente pode executar a mesma comparación coa ferramenta {{ui:Comparar a nube de puntos co modelo}}; non cambia nada no modelo.
