---
title: Grupos de modelo
summary: Faga que os elementos escollidos sexan un só grupo con nome, coloque o grupo de novo noutro lugar e cambie unha copia para cambialas todas.
keywords: grupo, grupo de modelo, agrupar, desagrupar, instancia, copia, repetir, unidade tipo, tramo, apartamento, editar grupo, IfcGroup
from: 121c5027
---

## Que vai facer

Agrupar un tramo tipo, colocalo varias veces e cambiar todas as copias cambiando unha.

## Onde está a ferramenta

- Disposicións de cinta: {{ui:Arquitectura}} › **Modelo** › {{ui:Grupo de modelo}}.
- Disposición clásica: a barra Debuxar › menú {{ui:Cuartos}} › Grupo de modelo.

## Pasos

1. Con Seleccionar, escolla os elementos: prema un, e Ctrl+clic ou Shift+clic nos outros.
2. Escolla {{ui:Grupo de modelo}}. Convértense nun grupo de inmediato. Escriba un {{ui:Nome do grupo}} na fila primeiro para darlle nome, ou escriba un despois para cambiarlle o nome.
3. Prema {{ui:Colocar outro}} e prema onde debe quedar a copia: a súa esquina inferior esquerda vai ao punto onde preme.
4. Cambie calquera copia: mova o extremo dun muro, cambie o tamaño dunha porta, elimine unha columna. Todas as outras copias do grupo cambian no mesmo paso, e unha única acción de Desfacer desfai todo.
5. Mentres a ferramenta Grupo de modelo estea activa, un clic nun elemento escolle todo o seu grupo.

## Outras cousas que pode facer

- {{ui:Engadir os escollidos}}: engade máis elementos ao grupo que escolleu por último.
- {{ui:Desagrupar}}: esta copia pasa a ser de novo elementos ordinarios. As outras copias seguen sendo un grupo.
- Mova unha copia completa con {{ui:Mover}}: é o mesmo grupo nun lugar novo; as outras non se moven.
- Elimine os elementos dunha copia e esa copia desaparece.

## Que pode haber nun grupo

Os muros cos seus portas e xanelas, as columnas e os chans debuxados pódense colocar de novo e manter iguais. Un grupo pode ter tamén outros elementos, pero nese caso non se pode colocar de novo por agora; a fila di por que.

As copias móvense, non se xiran nin se espellan.

## No IFC

Un grupo é un IfcGroup cun IfcRelAssignsToGroup cara aos seus membros, que seguen sendo muros, columnas e chans ordinarios. Cada copia dun grupo leva o mesmo id de definición.

## Aínda non construído

- Xirar ou espellar unha copia.
- Escaleiras, cubertas, chans de cuartos e elementos da biblioteca nun grupo que se coloca de novo.
- O perfil dun muro, a súa inclinación e as súas aberturas non se levan ás copias.
- Grupos dentro de grupos.

Véxase tamén [Mover, aliñar e distribuír](topic:move-align-distribute).
