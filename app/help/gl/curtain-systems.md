---
title: "Sistemas de cortina: muros acristalados nunha cuadrícula, con montantes"
summary: Debuxe un sistema de cortina como un muro ou colóqueo sobre unha cara, e despois axuste as súas liñas de cuadrícula e os seus montantes. Gárdase como IfcCurtainWall cos seus paneis e montantes.
keywords: sistema de cortina, muro cortina, cuadrícula de cortina, montante, acristalamento, fachada de vidro, muro de vidro, panel, panel de vidro, por cara, cara, masa, liña de cuadrícula, espazamento, perfil, travesaño, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Que vai facer

Faga un muro acristalado de paneis entre montantes, cambie onde están as súas liñas de cuadrícula e escolla que liñas levan un montante.

## Pasos

1. Active {{ui:Debuxar}} e abra o menú **Construír** (nunha disposición en cinta: a lapela Arquitectura).
2. Escolla **Sistema de cortina**. Na súa fila defina a parte superior (o piso de enriba, ou unha altura), unha liña cada tanto ao longo dela, unha liña cada tanto en vertical (déixeo baleiro para ningunha), se leva montantes e o perfil do montante.
3. Faga clic onde comeza e onde remata, como ao debuxar un muro. {{key:Shift}} mantén o sistema cadrado.
4. Para cambiar a cuadrícula escolla **Cuadrícula de cortina** e faga clic no sistema:
   - **Engadir unha liña**: unha liña vertical vai onde fai clic. Para unha liña horizontal, escriba primeiro a súa altura en **A**.
   - **Mover unha liña**: faga clic na liña e despois onde vai.
   - **Retirar unha liña**: faga clic na liña.
   - **Definir por espazamento**: escriba o espazamento en **Cada**, e despois faga clic no sistema.
5. Para cambiar os montantes escolla **Montante**, indique sobre que actúa (a liña vertical en que fai clic, a liña horizontal a unha altura, o bordo ou todas as liñas), escolla **Colocar montantes** ou **Retirar montantes** e un perfil, e despois faga clic no sistema.
6. Seleccione un sistema para ver todo en **Propiedades**: cada liña da cuadrícula coa súa posición, unha marca para o seu montante e un botón para retiralo; o espazamento; o bordo; o perfil; o grosor do panel.

## Por cara

**Por cara** crea un sistema de cortina sobre unha cara plana que fai clic na vista 3D. A súa fila ten os mesmos axustes de cuadrícula e montante.

- Funciona sobre calquera cara plana de calquera elemento que mostre a vista 3D: unha masa, un muro, un chan, un plano de cuberta, un piar, un elemento colocado. A cara pode ser vertical, inclinada ou horizontal.
- O sistema toma o contorno da cara. Un frontón ou outra forma rara recorta os paneis e os montantes ao seu contorno.
- Pode facer un **muro** no seu lugar, ao longo da base dunha cara vertical e tan alto como a cara. Un muro aquí sempre queda vertical, así que unha cara inclinada ou horizontal non pode levar un.
- Non fai unha cuberta. Unha cuberta en BimCraft calcúlase a partir do contorno dun piso e dunha pendente, non dunha única cara.
- Unha cara curva son moitas caras planas pequenas: un clic toma unha delas.
- Unha cara con aberturas: o sistema cubre o contorno exterior da cara.

## Como se mide

- **Superficie bruta** é o contorno do sistema.
- **Superficie de vidro** son os paneis tal como se fan: cada panel perde medio ancho de montante por un lado cando hai un montante da cuadrícula e un ancho completo cando hai un montante no bordo.
- Un montante vertical vai de bordo a bordo. Un montante horizontal para en cada montante vertical e no bordo. Os montantes do bordo quedan dentro do contorno; onde se encontran dous, pasa o máis vertical. As xuntas córtanse a escuadra, non a inglete.
- **Cuadros** ten unha lista de **Sistemas de cortina** con estes números cando o modelo ten un.

## No ficheiro IFC

Un IfcCurtainWall no seu piso, formado por un IfcPlate (panel de cortina) por cada panel e un IfcMember (montante) por cada tramo de montante, cada un co seu propio formato, material e cantidades base.

## Cousas que convén saber

- Calquera tamaño faise como o pida. Só se rexeita un contorno sen superficie, porque non hai nada que facer.
- Un sistema debuxado como un muro conserva a altura coa que se debuxou. Se despois move un nivel, defina de novo a súa altura en Propiedades.
- A ferramenta Mover aínda non move un sistema de cortina. Elimínea e debuxea de novo, ou cambie a súa cuadrícula no sitio.
- {{ui:Desfacer}} desfai cada paso: o sistema completo, un cambio de cuadrícula, un cambio de montantes.
