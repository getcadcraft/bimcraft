---
title: Unidades ao importar: un ficheiro indica as súas unidades, ou pregúntaseche antes
summary: Cando un ficheiro que importas indica as súas unidades, BimCraft úsaas e dino. Cando non o fai, BimCraft pregunta antes de colocar nada e lembra a túa resposta para ese ficheiro.
keywords: unidades, importar, abrir, OBJ, STL, DWG, DXF, IFC, nube de puntos, elemento da biblioteca, milímetros, metros, polgadas, pés, escala, tamaño incorrecto, demasiado grande, demasiado pequeno, 1000 veces, preguntar, lembrado
from: f044e9bc
---

## Que farás

Importar un ficheiro e asegurarte de que entra co tamaño correcto.

## Pasos

1. Abre ou engade o ficheiro como de costume: {{ui:Aberta}}, {{ui:Ficheiros}} da Biblioteca, {{ui:Nubes de puntos}}, ou Construír › Desde un debuxo.
2. Se o ficheiro indica as súas unidades, non se pregunta nada. A liña de estado di que unidades indica o ficheiro.
3. Se non o fai, un diálogo pregunta polas **Unidades de** o ficheiro. Escolle cal é unha unidade no ficheiro e fai clic en {{ui:Usar estas unidades}}. Non se coloca nada antes de responder.
4. {{ui:Cancelar}} (ou {{key:Esc}}) non importa nada.

## Que ficheiros indican as súas unidades

- **IFC**: indica a súa unidade de lonxitude, e "Aberto" di cal. Un IFC que non indica ningunha pregúntase antes de abrirse; a túa resposta escríbese no modelo, así que o ficheiro a indica unha vez que gardes.
- **DWG e DXF**: as unidades de inserción do debuxo. Un debuxo sen elas pregúntase (ficheiros da Biblioteca, Construír › Desde un debuxo, terreo a partir de curvas de nivel).
- **Listas de puntos** para o terreo: non indican unidades. Pregúntase.
- **Nubes de puntos**: LAS e LAZ cun sistema de coordenadas, E57, PTX e PLY indican as súas. Os demais pregúntanse.
- **OBJ e STL**: nunca indican unidades. Pregúntase.
- **glTF e GLB**: metros, pola regra propia do formato.
- **Imaxes**: non teñen tamaño propio. Unha imaxe se axusta á vista e ti fixas o seu tamaño con Escala por dous puntos. O tamaño que indiques lémbrase para ese ficheiro: cando se coloca de novo, entra con ese tamaño e a liña de estado di iso.
- **O complemento Nubes de puntos**: pregunta cando constrúes unha nube cuxo ficheiro non indica unidade, e etiqueta os números da nube coa unidade que leva.

## Bo saber

- A resposta lémbrase para ese ficheiro (o seu nome, tamaño e data) neste computador, en todas as aplicacións de CadCraft. A seguinte vez que entre o mesmo ficheiro non se pregunta, e a liña de estado di que se usaron as unidades lembradas.
- Para que se pregunte de novo: a paleta de comandos ({{key:Mod+K}}) › **Preguntar de novo polas unidades dos ficheiros importados**.
- Unha lista de unidades que unha importación xa ten (as Unidades da Biblioteca, as Unidades da barra da nube, Unidades do debuxo en Desde un debuxo) cambia as unidades despois. A lista Unidades da ferramenta de terreo é agora só con que comeza a pregunta.
