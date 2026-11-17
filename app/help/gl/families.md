---
title: Familias e os seus tamaños
summary: As portas, as xanelas e os mobles veñen en familias. Cada tamaño dunha familia é un tipo no ficheiro IFC, así que a lista de tipos queda curta en BimCraft mentres os outros programas len tipos simples.
keywords: familia, familias, tipo, tipos, tamaño, tamaños, tipo de porta, tipo de xanela, moble, mesa, andel, armario, novo tamaño, duplicar, colocar familia, ficheiro de familia, ccfamily, biblioteca ifc, biblioteca de proxecto, grupo, visibilidade, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Que é unha familia

Unha familia é un tipo de cousa en varios tamaños: unha porta batente simple que vén de 32, 36 e 42 polgadas de ancho, ou unha mesa que vén longa e curta. En BimCraft vese a familia unha vez, cos seus tamaños debaixo, en vez dunha lista longa de tipos.

IFC non ten familias. No ficheiro cada tamaño é un tipo normal (un tipo de porta, un tipo de xanela, un tipo de moble…), e a familia é un grupo que lista os seus tamaños. Os outros programas BIM len os tipos e o grupo tal como están; BimCraft lle devolve a familia a partir deles.

## Onde atopalas

- O grupo **Familias** do navegador de proxecto lista as familias deste modelo, con cantos tamaños ten cada unha e cantas están colocadas. Debaixo están as **Familias de partida**: as portas e as xanelas das ferramentas Porta e Xanela, e unha mesa, un andel e un armario base.
- {{ui:Compilación}} › {{ui:Familias…}} mostra a mesma lista nunha xanela.
- Faga clic nunha familia para abrila: os seus tamaños, o valor de cada parámetro en cada tamaño e cantos elementos usa cada un.

## Portas e xanelas

As ferramentas Porta e Xanela listan as familias dese tipo, e ao lado, unha **lista de tamaños**. Escolla un tamaño, ou escriba **W** e **H**: un ancho e un alto que ningún tamaño teña aínda convértense nun novo tamaño da familia ao colocar a porta. As portas do mesmo tamaño comparten un tipo.

En {{ui:Propiedades}}, unha porta ou xanela seleccionada mostra a súa **Familia** e o seu **Tamaño**. Escolla outro tamaño da lista, ou escriba un novo ancho ou alto. {{ui:Abrir a familia}} abre a familia á que pertence.

O marco de cada porta ou xanela segue o grosor do seu propio muro, como antes das familias. O tipo do tamaño tamén conserva a porta debuxada nun muro de 140 mm, para os programas que len tipos.

## Novo tamaño desta familia

1. Abra a familia.
2. Baixo **Novo tamaño desta familia**, escriba os seus valores (Largura, Altura e os demais parámetros da familia) e, se quere, un nome. Sen nome, o tamaño nómease polos seus valores.
3. Faga clic en {{ui:Crear o tamaño}}.

Dous tamaños non poden ter os mesmos valores. **Renomear** cambia o nome dun tamaño; **Retirar** elimina un tamaño que ninguén usa; **Seleccionar** escolle os elementos dese tamaño.

## Colocar mobiliario

1. {{ui:Compilación}} › {{ui:Colocar familia}}, ou {{ui:Colocar}} na xanela dunha familia.
2. Na barra, escolla a familia e o seu tamaño.
3. Faga clic no plano para colocala no nivel. Prema {{key:R}} para xirala 90° antes de facer clic. {{key:Esc}} detén a colocación.

As **Propiedades** dunha peza colocada mostran o seu tamaño, onde está e canto está xirada; {{key:Delete}} a elimina. Cada peza dun mesmo tamaño comparte a forma dese tamaño, así que cambiar a familia muda todas.

## Tamaños desde unha táboa

{{ui:Tamaños desde unha táboa…}} na xanela dunha familia lee un ficheiro CSV (separado por comas, punto e coma ou tabulador). A primeira fila nomea as columnas: o nome ou a etiqueta dun parámetro e, opcionalmente, `Name`. As lonxitudes son milímetros salvo que escriba unha unidade (`1.2 m`, `36 in`); as columnas Sí / Non admiten sí, non, true, false, 1 ou 0; e un parámetro sen columna mantén o seu valor por defecto. Cada fila convértese nun tamaño, nun só paso que pode desfacer; un tamaño que xa existe sáltase. Unha fila que non se lee, ou que a familia non pode debuxar, rexeita a táboa completa e indica a súa liña. Como máximo, 200 filas e 1 MB. {{ui:Gardar os tamaños como táboa}} escribe a mesma táboa de volta.

## Definir en cada elemento

Un parámetro marcado **Por elemento** no editor (un Sí / Non que engade un travesaño, unha etiqueta ou un material) non forma parte dun tamaño: dúas portas dun mesmo tamaño poden ser diferentes. Escolla o elemento e {{ui:Propiedades}} mostra estes parámetros; cambie un e ese elemento debúxase de novo coa súa propia forma (os mobles e os accesorios reciben unha forma propia, e as portas e as xanelas refanse nos seus muros). Póñaos todos de novo nos valores por defecto e o elemento volve á forma do seu tamaño.

## Nivel de detalle

{{ui:Compilación}} › {{ui:Familias…}} › **Nivel de detalle** fixa, para cada familia do modelo, o que se garda nos sólidos e o que se debuxa nos símbolos de planta: **Fino** mantén todo, e **Medio** e **Groso** deixan fóra as partes que o editor marca como máis finas (ficheiros máis pequenos, vistas máis rápidas). **Automático** garda todo e deixa que a escala da vista de cada folla escolla: 1:50 e máis grande, fino; 1:100, medio; 1:200 e máis pequena, groso. É un paso que pode desfacer.

## Duplicar unha familia

Non ten que empezar desde cero. {{ui:Duplicar}} copia unha familia cos seus parámetros, sólidos e tamaños baixo un novo nome. Cambie a copia no editor; o orixinal queda como estaba.

## Ficheiros de familia

- {{ui:Gardar o ficheiro de familia}} garda un `.ccfamily.json` cos parámetros, os sólidos e os tamaños da familia. Ábrao noutro modelo con {{ui:Abrir un ficheiro de familia…}} no grupo Familias.
- {{ui:Gardar como IFC}} garda a familia como un pequeno ficheiro IFC: os tipos dos seus tamaños e o seu grupo, declarados por unha biblioteca de proxecto IFC. Os outros programas ábrenno como un conxunto de tipos; BimCraft ábreo de novo como familia.

Un ficheiro de familia aberto aquí léese como datos e compróbase antes de escribir nada. Unha familia cuxa clave xa está no modelo entra como unha familia separada. Unha familia que contén outras (vexa Familias dentro, na axuda do editor) trae consigo as súas: o ficheiro as lista, e o modelo conserva as que xa ten.

## Familias na Biblioteca

Abra {{ui:Familias…}} e escolla {{ui:Desde a Biblioteca…}} para ver as familias que se compartiron na Biblioteca. {{ui:Engadir a este proxecto}} lee unha coma un ficheiro de familia: BimCraft comproba cada campo antes de crear nada, a familia entra como unha familia propia e ábrese no editor. Engadila é un paso de desfacer. Para compartir as súas, use {{ui:Gardar todas como biblioteca}} e envíe o ficheiro á Biblioteca (o persoal da Biblioteca publica un ficheiro de familia cun comando, e cada familia é un elemento propio cos seus tamaños). Se non se pode chegar á Biblioteca, a lista di iso e non cambia nada.

## Tipos doutros programas

Os tipos feitos por outros programas aparecen tamén no grupo Familias, agrupados por unha suposición: pola parte do nome dos seus elementos antes do primeiro dous puntos, ou polos nomes de tipo que só difiren nos seus números. A xanela da familia di que suposición usou. Listanse e pode seleccionar os seus elementos, pero non se editan aquí: non teñen receita de familia.

:::note
As portas e as xanelas de partida debúxanse exactamente como antes das familias. Os ficheiros feitos antes das familias ábrense sen cambios: as súas portas e xanelas aparecen baixo a súa familia cos tamaños en uso, e pasan a un tamaño propio a primeira vez que as cambia.
:::

Ver tamén [Editar unha familia](topic:family-editor) e [Portas e xanelas](topic:doors-and-windows).
