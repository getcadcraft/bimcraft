---
title: Incidències i fitxers BCF
summary: Desa una vista del model com a incidència — càmera, elements triats, els ocults i la secció —, comparteix-la com a fitxer BCF amb altres eines de coordinació, i obre els seus fitxers BCF per veure les seves incidències.
keywords: bcf, bcfzip, incidència, incidències, tema, punt de vista, informe de col·lisions, coordinació, comentari, instantània, obre bcf, desa bcf, exporta, importa
from: 2a6cf201
---

## Què faràs

Assenyala un problema del model i conserva la vista que el mostra, i després passa-la en un fitxer BCF, el format que llegeixen i escriuen les altres eines de coordinació.

## Passos

1. Obre un model IFC i prepara la vista: orbita-la, tria els elements implicats, amaga el que estorba, i talla-la amb un pla de secció o una caixa.
2. Fes clic a la pestanya {{ui:Incidències}} a la dreta, i després a {{ui:Nova incidència des d'aquesta vista}}.
3. Escriu un títol, i un comentari si vols; tria un estat; indica el teu nom o correu electrònic (si tens la sessió iniciada, el nom del teu compte ja s'omple; consulta [Configuració de BimCraft](topic:settings#your-name-on-issues)). Fes clic a {{ui:Crea la incidència}}.
4. Fes clic a {{ui:Mostra}} en una incidència per tornar a posar la seva vista.
5. Fes clic a {{ui:Desa BCF}} per baixar totes les incidències en un sol fitxer `.bcf`.
6. Per veure les incidències que ha fet algú altre, fes clic a {{ui:Obre BCF…}} i tria el seu fitxer `.bcf` o `.bcfzip`.

## Què hauries de veure

- Cada incidència a la llista amb una imatge de la seva vista, el seu títol, estat, autor i data.
- {{ui:Mostra}} torna a posar la càmera, els elements triats, el que estava ocult (o només les coses que es mostraven) i la secció. Els elements es troben pel seu GlobalId en cada model obert; la línia d'estat indica si n'hi ha alguns que no hi són.
- Un pla o una caixa de secció d'una altra eina es mostra quan s'alinea amb els eixos del model; els plans inclinats o addicionals tornen com a volum de secció (fins a 6 plans). Una incidència conserva la primera caixa d'un volum de diverses caixes.

## Bones de saber

- El fitxer és BCF 2.1 i conserva la vista en les coordenades pròpies del model, de manera que les altres eines posen la càmera al mateix lloc.
- Les incidències es queden en aquesta pestanya fins que les desis. Obrir un altre model conserva la llista; obre el model al qual pertanyen les incidències abans de mostrar-les.
- Una càmera paral·lela (ortogonal) d'una altra eina es mostra amb la càmera de perspectiva d'aquest visor, allunyada perquè la mateixa part del model ompli la vista.

## Errors habituals

- **{{ui:Mostra}} ha mogut la càmera a un lloc estrany.** La incidència es va fer en un altre model o amb altres coordenades. Obre primer el model correcte.
- **El fitxer no s'obre.** No és un BCF zip, o està malmès; la línia d'estat diu per què.

## Següent

- [Amaga, aïlla i fes transparents els elements](topic:hide-and-isolate)
- [Talla un model IFC amb un pla de secció](topic:section-plane)
