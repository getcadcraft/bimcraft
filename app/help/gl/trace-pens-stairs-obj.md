---
title: Calcar un nivel, definir plumas por vista, esbozar unha escaleira, abrir un OBJ
summary: Mostrar outro nivel en trazos baixo a planta e aliñalo, dar aos muros, portas e xanelas a súa propia pluma nunha vista, debuxar unha liña de percorrido para obter unha escaleira, e abrir unha malla Wavefront OBJ.
keywords: referencia de calco, fantasma, subxacente, pluma, grosor de liña, tipo de liña, substitución, escaleira, esbozo, descanso, OBJ, malla, importar, Wavefront
from: 333ebbde
---

## Calcar un nivel

Escolla {{ui:Calcar}} no menú {{ui:Compilación}}, logo unha vista da lista: a planta doutro nivel, a planta de teito dun nivel ou un corte (recortado ao seu marco). Os seus muros, columnas e chans móstranse en trazos baixo a planta que está debuxando. Muévao premendo un punto base na referencia e logo onde ese punto debe ir, ou escriba X, Y e un ángulo (xira arredor do seu propio centro). {{ui:Restablecer}} devólvea ao seu sitio, {{ui:Ocultar}} elimínaa. É só unha referencia: nada a escolle, non se imprime e non se garda no IFC. BimCraft lembra esta referencia para cada nivel neste navegador.

## Plumas por vista

Escolla {{ui:Plumas}}. Diga para que é a pluma: todos os muros, todas as portas, todas as xanelas, o tipo do elemento escollido ou os elementos escollidos. Escolla un grosor, unha liña (continua, de trazos, de puntos) e unha cor, e logo {{ui:Aplicar}}. O cambio só vale para a planta deste nivel. Unha escolla individual gaña a un tipo, e un tipo gaña a unha categoría completa. {{ui:Limpar todo}} elimínaas. Gárdanse neste navegador. Marque **Cores das plumas en 3D** para pintar no modelo 3D as plumas de cor (o grosor ou o trazo son da liña, así que só se ve a cor); desmárquea para volver atrás. {{ui:Imprimir}} debuxa as plumas no PDF da planta: o grosor escálase desde a pantalla (a pluma por defecto dos muros, de 1,75 píxeles, é de 0,5 mm), os trazos seguen sendo trazos, e unha cor imprímese co seu valor do tema de papel.

## Unha escaleira a partir dun esbozo

Escolla {{ui:Esbozar escaleira}} e prema nas esquinas da liña de percorrido, empezando polo chanzo inferior. Unha liña é unha escaleira recta; dúas liñas que se encontran en ángulo recto son unha L; e tres liñas (subir, cruzar, volver) son unha U. Prema {{key:L}} para debuxar un descanso: prema nas súas esquinas e logo {{key:Enter}}, e o seu lado curto fixa a largura da escaleira. Prema {{key:Enter}} para colocar a escaleira. Cada pisada calcúlase a partir do comprimento da súa liña e do número de contrahuellas que pide a altura. Despois é unha escaleira normal: cámbiea en Propiedades, e o oco da escaleira e os pasamáns seguen o cambio.

Marque **Facer dela unha familia** na fila da ferramenta (ou prema {{key:F}}) antes de {{key:Enter}} para colocar a escaleira como familia (unha escaleira recta, L ou U). Entra como un só elemento e ábrese no editor de familias coa súa largura, pisada, altura total, as pisadas de cada tramo e a fenda dunha U como parámetros, para que poida engadir medidas, un símbolo de planta ou puntos activos. Os chanzos e a altura da contrahuella xorden deses parámetros. Non ten pasamáns nin oco de escaleira: eses pertencen a unha escaleira normal.

## Abrir un OBJ

Abra un ficheiro `.obj` como calquera outro. Un OBJ non ten unidades, así que BimCraft lee metros con Y cara arriba, como o escriben a maioría dos programas. Cada obxecto ou grupo convértese nun elemento de malla nun só nivel, e despois pode ver, medir, seccionar, colocalo nun modelo e gardalo como IFC. Liñas, curvas e superficies quedan fóra, e a liña de estado indícao.

Un obxecto que é exactamente un prisma recto (unha malla pechada con dúas caras extremas paralelas e idénticas e os lados planos en ángulo recto con elas: unha laxe, un poste, un bloque de muro, unha placa con buratos) gárdase no IFC como o sólido extruído propio de IFC, co seu contorno e a súa profundidade, e non como unha lista de triángulos. Outros programas lóeno como un sólido real, ocupa pouco, e a súa profundidade e contorno poden editarse despois. A liña de estado indica cantos obxectos se gardaron así. Calquera cousa que non sexa exactamente un prisma (unha forma afilada, unha malla cun vértice movido, unha malla con oco) queda en triángulos. Un ficheiro STEP lese do mesmo xeito.
