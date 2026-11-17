---
title: Crea un quadre d'equipament i exporta'l en CSV
summary: Converteix les etiquetes d'elements d'un plànol de cuina de restauració en un quadre d'equipament, filtra'l, salta a cada element al seu full i el baixa en CSV.
keywords: equipament, quadre, restauració, cuina, etiquetes d'elements, KCL, atributs, BOM, llista de materials, CSV, full de càlcul, exportació, extracció de dades
from: e3faa1c8
---

## Què faràs

Llegeix la llista d'equipament d'un plànol de cuina o de restauració, revisa-la, troba cada element al plànol i baixa-la com a fitxer de full de càlcul.

Això funciona en plànols on les etiquetes d'equipament porten les seves dades com a atributs de bloc, com fan les biblioteques de disseny de cuines com KCL: cada etiqueta conté el número d'element (`KCL-ITEM`), la quantitat, la categoria, el fabricant, el model, les dades elèctriques i de fontaneria, i les observacions. Els altres plànols no tenen la pestanya {{ui:Equipament}}.

## Passos

1. Obre el plànol, de preferència des de la seva carpeta de projecte perquè es carreguin també els plànols enllaçats.
2. Fes clic a la pestanya {{ui:Equipament}} sobre el plànol. La seva etiqueta mostra quants elements hi ha als fulls, per exemple "Equipament (88)".
3. Llegeix el quadre: **Element**, **Quantitat**, **Equipament**, **Fabricant**, **Model**, **Elèctric**, **Fontaneria** i **Ubicació**.
4. Tria què llistar al menú de sobre de la taula: **Cada full**, un full, **No és en cap full** o **Tot el que està etiquetat al plànol**. Cada opció mostra el seu recompte.
5. Escriu al quadre de filtre ("Filtre: categoria, fabricant, model…") per reduir la llista, per exemple `frigorífic` o `208`.
6. Fes clic al nom del full a la columna **Ubicació** de l'element.
7. Mira el plànol: BimCraft canvia a aquest full, fa zoom sobre l'element i dibuixa un anell al voltant. La línia d'estat diu "L'element *n*, *categoria*, està encerclat al *full*."
8. Fes clic a {{ui:Equipament}} per tornar al quadre.
9. Fes clic a {{ui:Baixa el CSV}}.

## Què hauries de veure

- Un fitxer anomenat "*nom del plànol* equipment.csv" (amb el nom del full entre parèntesis quan n'has llistat un de sol) a la carpeta de baixades. S'obre amb Excel, Numbers, LibreOffice o Google Sheets.
- La línia d'estat: "Baixat *nom del fitxer* (*n* elements)."

El CSV té aquestes columnes: Element, Quantitat, Categoria, Fabricant, Model, Elèctric, Fontaneria, Observacions, Observacions elèctriques, Observacions de fontaneria, Fulls, Col·locats (quantes etiquetes). Baixa exactament les files que mostra la taula, després del menú i del filtre.

## Com es construeix el quadre

- Es llegeix a partir de les **etiquetes en si**, no del quadre dibuixat al full. La nota de sobre la taula indica quantes etiquetes s'han llegit.
- Una fila és un número d'element amb un conjunt de dades. La seva quantitat és la **suma** de les seves etiquetes, com la comptaria un quadre imprès: una prestatgeria etiquetada "5" en un lloc i "3" en un altre fa 8, mostrat com "5 + 3".
- **Ubicació** llista els fulls que mostren cada element, calculats a partir del que mostren les finestres gràfiques de cada full, és a dir, el que s'imprimeix. "Només model" vol dir que cap full no el mostra.
- **Número usat dues vegades** marca un número d'element en dos equips diferents. La fila té una marca àmbar.
- Les etiquetes que cap full no mostra es mantenen a part, sota **No és en cap full**. Sovint són restes de plànols anteriors o d'altres obres, i mai no es barregen amb **Cada full**.
- **Elèctric** mostra amperes, kW, HP, volts, fase, connexió i endoll tal com estan etiquetats. **Fontaneria** mostra les mides de connexió: CW aigua freda, HW aigua calenta, DD desguàs directe, ID desguàs indirecte, i gas. Encara no es mostren els altres camps de l'etiqueta.

## Errors habituals

- **Sense la pestanya {{ui:Equipament}}.** El plànol no té etiquetes `KCL-ITEM`, o el seu equipament està dibuixat sense dades. No hi ha res a llegir.
- **Els recomptes difereixen del quadre imprès.** Un quadre imprès pot llistar números de reserva o usar noms més curts que les etiquetes. Fes cas de les etiquetes per al que està col·locat; revisa les diferències amb el dissenyador.
- **En obrir el CSV es veuen caràcters estranys.** El fitxer és UTF-8. Obre'l amb l'ordre d'importació del teu full de càlcul i tria UTF-8 si el programa ho demana.
- **Una cel·la comença amb un apòstrof.** Els valors que comencen per `=`, `+`, `-` o `@` reben una `'` inicial perquè els fulls de càlcul no els executin com a fórmules.
- **{{key:F}} i {{key:P}} no fan res.** Funcionen al plànol, no al quadre. Fes clic primer a una pestanya de full.
