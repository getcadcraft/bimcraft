---
title: Revisar o modelo cun visor de RV
summary: Percorre o modelo IFC a tamaño real nun visor de RV: salta, xira, mide, ábreo por corte, coloca incidencias BCF cunha imaxe, ve o modelo como maqueta de mesa e atende aos demais dunha sesión en directo.
keywords: rv, realidade virtual, visor, webxr, xr, inmersivo, quest, oculus, vive, index, pico, percorrer, percorrido, teletransporte, revisión de deseño, coordinación, revisión, medir, sección, corte, incidencia, incidencias, bcf, sobre mesa, maqueta a escala, presenza, avatares, en directo, xuntos
from: 8994b36d
---

{{ui:VR}} na barra de ferramentas métete dentro do modelo cun visor de RV, a tamaño real. Estás de pé onde está a cámara da vista 3D, no chan baixo ela, mirando ao mesmo lado. O visor mostra o que mostra a vista 3D: os pisos, elementos e modelos ocultos seguen ocultos, e os materiais pintados veñen igualmente. Non se sube nada: o navegador o debuxa neste computador (ou no navegador do propio visor).

## Que necesitas

- Un visor que o navegador poida controlar (WebXR): o navegador propio dun visor independente, ou Chrome ou Edge nun PC con visor conectado.
- Un modelo IFC aberto, nunha páxina segura (https), como ocorre neste sitio.

Sen visor, {{ui:VR}} aparece en gris e indica o motivo.

## Comezar

1. Coloca a vista 3D onde queres comezar: nunha sala, ou fóra mirando ao edificio.
2. Fai clic en {{ui:VR}} na barra de ferramentas.
3. Ponte o visor.

O menú está na parte de atrás da túa man esquerda. Apunta con el co mando dereito e aperta o gatillo para escoller un botón. (Con só unha man, o menú flota diante de onde comezaches.)

## Moverse

- **Saltar:** en {{ui:Mover}}, apunta a un chan e aperta o gatillo; aterras aí. Ou empurra a palanca cara adiante para apuntar, e solta para saltar. Só podes aterrar en pisos, lousas e terreo (superficies que miran cara arriba), nunca nun muro.
- **Xirar:** empurra a palanca á esquerda ou á dereita: xiras 30° cada vez.
- **Camiñar:** na túa área de xogo, simplemente camiña.

## Medir

Escolle {{ui:Medir}}, despois aperta o gatillo en dous puntos. A distancia móstrase entre eles, en metros. Un punto preto dunha esquina encaixa na esquina.

## Abrir por corte

Escolle {{ui:Sección}} e aperta o gatillo sobre unha superficie:

- sobre un muro (ou calquera cousa que non sexa un piso): cortase todo o que está entre ti e esa superficie, para ver dentro. Isto funciona mellor desde fóra, ou atravesando unha sala;
- sobre un piso, desde arriba: un corte en planta a 1,2 m sobre ese piso, para que os muros mostren a súa parte inferior.

{{ui:Limpar}} quita o corte e as medicións. Se un [plano de sección](topic:section-plane) corta o modelo ao comezar, o visor comeza con el.

## Colocar unha incidencia

Escolle {{ui:Incidencia}} e aperta o gatillo onde está o problema. Un alfinete numerado o marca, e a incidencia pasa á lapela {{ui:Incidencias}} como un tema BCF, cunha imaxe do que viches e a cámara onde estabas, nas coordenadas propias do modelo. Gárdaas co resto das túas [incidencias](topic:issues-bcf) como ficheiro BCF; outras ferramentas de coordinación ábrenas na mesma vista.

Engade un comentario a unha incidencia despois de saír da RV, na lapela Incidencias: escribir no visor aínda non está feito.

## Velo como maqueta de mesa

{{ui:Sobre mesa}} encolle o modelo para que caiba nunha mesa diante de ti; camiña ao seu redor, ou xírao coa palanca. {{ui:Tamaño real}} devólvete ao lugar onde estabas.

## Con outros, en directo

Nunha [sesión en directo](topic:work-live), todos en RV ven aos demais como unha cabeza e dúas mans na súa propia cor, co seu nome, e un punto onde cada un apunta. Os cambios que faga alguén chegan ao teu visor en un momento. As persoas na mesa de traballo aínda non se mostran no visor.

## Saír

Escolle {{ui:Saír de RV}} (ou quítate o visor e remata aí). A vista 3D na pantalla move-se ata onde estaba a túa cabeza.

:::note
Probado cun emulador de visor, aínda non en todos os visores. Un modelo grande pode facer que o visor vaia a tirones: oculta antes os pisos ou modelos que non necesites ([ocultar e illar](topic:hide-and-isolate)).
:::
