---
title: Complementos que usa o seu ficheiro
summary: BimCraft anota nun ficheiro IFC que complementos escribiron nel, e ofrece engadir os que lle faltan cando o abre.
keywords: complemento, addon, este ficheiro usa, complemento que falta, trusscraft, biblioteca, rexistro, cadcraft_addons
from: 9d9500d8
---

## Que fai

Cando un complemento escribe no modelo (unha armadura, un tramo de tubaxe), BimCraft rexistra o complemento e a súa versión no proxecto IFC, nun conxunto de propiedades chamado CadCraft_AddOns. O rexistro escríbese no mesmo paso de Desfacer que o propio cambio do complemento, así que desfacer o cambio tamén retira o rexistro. Os outros programas ignoran o conxunto de propiedades; o que debuxou o complemento queda igualmente no ficheiro.

## Pasos

1. Abra un ficheiro IFC no que axudou a facer un complemento.
2. Se falta algún dos complementos que usou, unha nota enriba do modelo indica cales son, cun botón para engadilos desde a súa conta da Biblioteca.
3. Engádaos, ou peche a nota. O modelo ábrese en calquera caso.

## Erros habituais

- **Non aparece nota.** Non ten a sesión iniciada na súa conta nesta lapela, ou o ficheiro non ten rexistro (foi feito antes de existir os rexistros, ou por outro programa).
- **A lista de cambios di "undefined".** Corrixido: as etiquetas mostran agora o nome do complemento.

## Seguinte

- [Colocar equipos e mobiliario desde a biblioteca](topic:place-from-library)
