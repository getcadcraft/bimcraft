---
title: Símbolos, tipos e activos, modelos de proxecto e Quick Kits
summary: A biblioteca ten tres clases de elementos (símbolos, tipos e activos). Engada un tipo ao seu proxecto, comece desde un modelo de proxecto compartido, engada un Quick Kit e comparta os seus propios a través da páxina de envío da biblioteca.
keywords: biblioteca, símbolos, tipos, activos, tipo, tipo de muro, tipo de chan, tipo de cuberta, tipo de teito, modelo de proxecto, modelo, quick kit, kit, compartir, enviar, versión, historial de cambios, LOD, clasificación, licenza, notas da práctica
from: e13b0e67
---

## Que vai facer

Atope na Biblioteca o que precisa segundo o que é, engada un tipo ao proxecto que está a debuxar, comece un proxecto novo desde un modelo que alguén compartiu e comparta os seus propios modelos, tipos e kits.

## As tres clases de elementos da Biblioteca

- **Símbolos** son convencións de debuxo: só 2D, debuxados ao tamaño de anotación, agrupados por disciplina.
- **Tipos** indican de que está feito un elemento: as súas capas co seu grosor real, o seu nivel de desenvolvemento (LOD) e o seu código de clasificación. Un tipo engádese ao proxecto, non se debuxa.
- **Activos** son obxectos físicos, como portas, xanelas, mobiliario, accesorios e equipamento, cunha vista en planta e un corpo 3D a tamaño real.

Na lapela {{ui:Biblioteca}}, escolla {{ui:Biblioteca}} e use **Tipo de elemento** para amosar Todo, Símbolos, Tipos ou Activos.

## Engadir un tipo ao proxecto

1. Escolla **Tipos** en Tipo de elemento e abra un.
2. Comprobe a súa composición, o LOD e a clasificación baixo a imaxe, despois prema {{ui:Engadir a este proxecto}}.
3. Engádese como tipo de muro, chan, cuberta ou teito co que pode debuxar. Se xa existe un tipo con ese nome, o novo engádese como copia e o seu queda como estaba. Un Desfacer retírao.

## Modelos de proxecto e Quick Kits

Escolla {{ui:Kits}} para ver o que compartiu a xente.

- **Un modelo de proxecto** é un ficheiro IFC con niveis, cuadrículas, tipos e axustes. {{ui:Gardar nas miñas plantillas}} métello en Edificio novo, baixo Iniciar desde.
- **Un Quick Kit** é unha lista de elementos da biblioteca. {{ui:Mostrar os elementos do kit}} amósaos como tarxetas que pode colocar.
- Cada kit ten unha versión e un historial de cambios, o máis novo primeiro. Unha versión que comeza por 0 serve para discutir; 1.0.0 só é para o que o responsable da liña adoptou.

## Compartir os seus propios

- **Un modelo de proxecto:** {{ui:Gardar como modelo}}, marque {{ui:Crear tamén un ficheiro para compartir na Biblioteca}}, engada o que contén e unha versión. Obterá un ficheiro `.json`.
- **Un Quick Kit:** en {{ui:Kits}}, escolla {{ui:Crear un Quick Kit a partir deste proxecto}}. Lista os elementos da biblioteca que usa o proxecto.
- **Un tipo:** en {{ui:Paquetes de tipos}}, marque un tipo e prema {{ui:Gardar como elemento da Biblioteca…}}.

Envíe o ficheiro na páxina de envío da Biblioteca. Pasa pola mesma revisión que calquera elemento, e alí escolle a licenza: cada elemento indica a súa licenza. A cada elemento pídesele o seu LOD, unha clase IFC e un código de clasificación (un código, non só un nome).

## Notas da práctica

Na páxina de calquera elemento da Biblioteca, os membros con sesión iniciada poden engadir unha nota: usado nun proxecto real, probado nun proxecto de mostra ou atopado un problema. Diga en poucas palabras que tipo de proxecto é e omita os nomes dos clientes. Unha nota é pública e non é unha valoración: non cambia o elemento.

## Bo que saber

- Desde a aplicación non se envía nada. Os ficheiros fanse no seu computador e vostede envíaos.
- Un kit feito a partir dun modelo leva o texto IFC tal como se gardou. Comprobe se hai algo privado antes de enviar.
- CadCraft amosa Símbolos e Activos na súa lapela Biblioteca; os Tipos e os modelos son para proxectos de BimCraft.
