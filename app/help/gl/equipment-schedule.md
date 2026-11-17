---
title: Crear un cuadro de equipamento e exportar CSV
summary: Converta as etiquetas de elementos dun debuxo de cociña ou de hostalaría nun cuadro de equipamento, filtreo, vaia a cada elemento na súa folla e descárgueo como CSV.
keywords: equipamento, cuadro, hostalaría, cociña, etiquetas de elementos, kcl, atributos, bom, lista de materiais, csv, folla de cálculo, exportar, extracción de datos
from: e3faa1c8
---

## O que vai facer

Lea a lista de equipamento dun debuxo de cociña ou de hostalaría, revísea, atope cada elemento no plano e descárgueo como ficheiro de folla de cálculo.

Isto funciona en debuxos cuxas etiquetas de equipamento levan os seus datos como atributos de bloque, como fan as bibliotecas de deseño de cociñas como KCL: cada etiqueta contén o número de elemento (`KCL-ITEM`), a cantidade, a categoría, o fabricante, o modelo, os datos eléctricos e de fontanería e as observacións. Os outros debuxos non teñen lapela {{ui:Equipamento}}.

## Pasos

1. Abra o debuxo, de preferencia desde a súa carpeta de proxecto, para que tamén se carguen os debuxos ligados.
2. Faga clic na lapela {{ui:Equipamento}} enriba do debuxo. A súa etiqueta indica cantos elementos hai en follas, por exemplo "Equipamento (88)".
3. Lea o cuadro: **Elemento**, **Cant.**, **Equipamento**, **Fabricante**, **Modelo**, **Eléctrico**, **Fontanería** e **Onde**.
4. Escolla o que listar no menú enriba da táboa: **Todas as follas**, unha folla, **Non en ningunha folla** ou **Todo o etiquetado no debuxo**. Cada opción mostra o seu total.
5. Escriba na caixa de filtro ("Filtro: categoría, fabricante, modelo…") para reducir a lista, por exemplo `frigorífico` ou `208`.
6. Faga clic no nome da folla na columna **Onde** dun elemento.
7. Mire o debuxo: BimCraft cambia a esa folla, achega o zoom ao elemento e debuxa un anel ao seu redor. A liña de estado di "Elemento *n*, *categoría*, está marcado con anel na *folla*."
8. Faga clic en {{ui:Equipamento}} para volver ao cuadro.
9. Faga clic en {{ui:Descargar CSV}}.

## O que debería ver

- Un ficheiro chamado "*nome do debuxo* equipment.csv" (co nome da folla entre parénteses cando listou unha soa folla) na súa cartafol de descargas. Ábrese en Excel, Numbers, LibreOffice ou Google Sheets.
- A liña de estado: "Descargado *nome do ficheiro* (*n* elementos)."

O CSV ten estas columnas: Elemento, Cant., Categoría, Fabricante, Modelo, Eléctrico, Fontanería, Observacións, Observacións eléctricas, Observacións de fontanería, Follas e Colocados (cantas etiquetas). Descarga exactamente as filas que mostra a táboa, despois do menú e do filtro.

## Como se constrúe o cuadro

- Lese das **propias etiquetas**, non do cuadro debuxado na folla. A nota enriba da táboa indica cantas etiquetas se leron.
- Unha fila é un número de elemento cun conxunto de datos. A súa cantidade é a **suma** das súas etiquetas, como conta un cuadro impreso: estanterías etiquetadas "5" nun sitio e "3" noutro son 8, e mostrase como "5 + 3".
- **Onde** lista as follas que mostran cada elemento, calculadas a partir do que mostra a vista de cada folla, que é o que se imprime. "Só modelo" significa que ningunha folla o mostra.
- **Número usado dúas veces** marca un número de elemento en dous equipamentos distintos. A fila leva unha marca ámbar.
- As etiquetas que ningunha folla mostra gárdanse aparte, baixo **Non en ningunha folla**. Adoitan ser restos de planos anteriores ou doutros traballos, e nunca se mesturan en **Todas as follas**.
- **Eléctrico** mostra amperes, kW, HP, voltios, fase, conexión e enchufe tal como están etiquetados. **Fontanería** mostra os tamaños de conexión: CW auga fría, HW auga quente, DD desaugadoiro directo, ID desaugadoiro indirecto, e gas. Os demais campos da etiqueta aínda non se mostran.

## Erros comúns

- **Non hai lapela {{ui:Equipamento}}.** O debuxo non ten etiquetas `KCL-ITEM`, ou o seu equipamento está debuxado sen datos. Non hai nada que ler.
- **As cantidades difiren do cuadro impreso.** Un cuadro impreso pode listar números de reserva ou usar nomes máis curtos có das etiquetas. Fíese das etiquetas para saber o que está colocado, e comprobe as diferenzas co deseñador.
- **Ao abrir o CSV aparecen caracteres estraños.** O ficheiro está en UTF-8. Ábrao co comando de importación da súa folla de cálculo e escolla UTF-8 se o programa lho pregunta.
- **Unha cela empeza cun apóstrofo.** Os valores que comezan por `=`, `+`, `-` ou `@` levan un `'` diante, para que as follas de cálculo non os executen como fórmulas.
- **{{key:F}} e {{key:P}} non fan nada.** Funcionan no debuxo, non no cuadro. Faga clic antes nunha lapela de folla.
