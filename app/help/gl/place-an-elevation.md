---
title: Colocar unha elevación e abrir a súa vista
summary: Coloque un marcador de elevación na planta, oriénteo cara ao lado que quere ver, despois atope o seu debuxo no navegador do proxecto, edítoo e póñao nunha folla. Pasos para as disposicións en cinta e para a disposición clásica.
keywords: elevación, vista de elevación, marcador de elevación, etiqueta de elevación, colocar unha elevación, nova elevación, crear unha elevación, elevación exterior, vista lateral, vista frontal, vista desde un punto, onde está a miña elevación, abrir elevación, elevación nunha folla, inverter elevación, cambiar o nome da elevación, elevación norte, mosaico de vistas, dividir vista, planta e 3D lado a lado
from: a7cfd2b9
---

## O que vai facer

Cree unha elevación propia: un debuxo do edificio visto desde un punto que escolla, mirando na dirección que escolla. Lévanos dous clics sobre unha planta. O debuxo aparece despois listado cos demais alzados do edificio.

:::note
Os catro lados xa existen. Cada edificio ten elevacións Norte, Leste, Sur e Oeste en {{ui:Project browser}} baixo {{ui:Elevations}} sen colocar nada. Coloque unha propia cando queira unha vista desde outro lugar: en ángulo recto cunha ala inclinada, desde dentro dun patio ou dun muro dentro dunha sala.
:::

## Onde está a ferramenta

- Disposicións en cinta: {{ui:View}} › **Crear** › {{ui:Elevation}}.
- Disposición clásica: active {{ui:Draw}}, despois {{ui:Build}} › {{ui:Elevation}}.
- Calquera estilo de menú: o comando chámase Elevación; a paleta de comandos atópao e a liña de comandos admite ELEVATION.

## Pasos

1. Escolla {{ui:Elevation}}. Unha elevación colócase sobre unha planta, polo que, se estaba na vista 3D, BimCraft mostra a planta do nivel no que estaba. O punteiro indica **Seleccione onde se sitúa a elevación**.
2. Faga clic no punto desde onde se toma a vista. Para unha elevación exterior, faga clic fóra do edificio, a pouca distancia do muro que quere ver.
3. O punteiro indica agora **Seleccione a dirección da vista**. Achegue o cursor ao edificio: unha frecha mostra a dirección, e a liña curta sobre o primeiro clic é o bordo desde onde se mira a vista. Faga clic.
4. Aparece na planta un círculo cun número e un punteiro. Ese é o marcador de elevación. O primeiro é o 1, o seguinte o 2.
5. Prema Esc para terminar, ou siga e coloque outro.

Colocar un marcador é un só paso: {{key:Mod+Z}} desfai o paso.

## Abrir o debuxo

A planta permanece diante de vostede despois do segundo clic. O debuxo está no {{ui:Project browser}}:

1. Abra {{ui:Elevations}}. A súa aparece despois dos catro lados como **Elevación 1**.
2. Prema o botón de lapis {{ui:Edit in this view}} na súa fila para ver o debuxo e traballar nel: mover muros, portas, xanelas e niveis, engadir notas e cotas. Consulte [Editar en elevacións e seccións](topic:edit-in-elevations).
3. Prema a propia fila para abrir o conxunto de debuxos, ou engada a vista a unha folla propia. Consulte [Vistas e follas](topic:views-and-sheets).

Na disposición clásica o navegador do proxecto está no panel esquerdo mentres {{ui:Draw}} está activo. Nas disposicións en cinta é a lapela {{ui:Project Browser}} baixo Propiedades.

## Que mostra a vista

- Todo o que hai diante do marcador, ata onde chega o edificio. Nada detrás del.
- Os niveis, cos seus nomes e alturas.
- Se o marcador está dentro do edificio, córtase o que estea no seu punto, como o faría unha sección. Para unha elevación exterior limpa, sitúese fóra.

## Cambiar

Seleccione o marcador na planta (prema o seu círculo con {{ui:Select}}). Propiedades ten:

- {{ui:Label}}: o seu número ou un nome propio, de até 8 caracteres.
- {{ui:Flip the view}}: mirar en sentido contrario desde o mesmo lugar.
- {{ui:Look as far as}}: ata onde chega a vista diante do marcador. 0 mostra todo.

Prema Delete para eliminar o marcador e o seu debuxo. Desfacer restaura ambos.

:::tip
Para ver a planta e a vista 3D á vez mentres traballa, use {{ui:View}} › **Xanelas** › {{ui:Tile Views}} nas disposicións en cinta, ou {{ui:Split}} na disposición clásica. Un clic nunha lapela de vista volve a unha soa vista.
:::

## Límites

- Un marcador aínda non se pode arrastrar nin xirar na planta. Elimínao e colóqueo de novo, ou use {{ui:Flip the view}}.
- Na lista de vistas que pode engadir a unha folla, unha elevación propia aparece cos cortes.
- As etiquetas de portas e xanelas debúxanse nos catro alzados laterais, non no que colocou.

## No IFC

O marcador gárdase no ficheiro como un IfcAnnotation chamado "Elevation 1" co tipo de obxecto "Elevation marker", no nivel onde se colocou. Outro programa mostrao como unha anotación; o debuxo en si fágao BimCraft a partir do modelo cada vez.
