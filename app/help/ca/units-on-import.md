---
title: Unitats en importar: un fitxer indica les seves unitats, o us ho preguntem primer
summary: Quan un fitxer que importeu indica les seves unitats, BimCraft les fa servir i ho diu. Quan no ho fa, BimCraft pregunta abans de col·locar res i recorda la vostra resposta per a aquell fitxer.
keywords: unitats, importar, obre, OBJ, STL, DWG, DXF, IFC, núvol de punts, element de biblioteca, mil·límetres, metres, polzades, peus, escala, mida incorrecta, massa gran, massa petita, 1000 vegades, preguntar, recordades
from: f044e9bc
---

## Què fareu

Importeu un fitxer i assegureu-vos que entra a la mida correcta.

## Passos

1. Obriu o afegiu el fitxer com de costum: {{ui:Oberta}}, els {{ui:Fitxers}} de la biblioteca, {{ui:Núvols de punts}}, o Construeix › Des d'un dibuix.
2. Si el fitxer indica les seves unitats, no es pregunta res. La línia d'estat diu quines unitats indica el fitxer.
3. Si no ho fa, un diàleg demana **Unitats de** el fitxer. Trieu quina és una unitat al fitxer i cliqueu {{ui:Fes servir aquestes unitats}}. No es col·loca res abans de respondre.
4. {{ui:Cancel·la}} (o {{key:Esc}}) no porta res.

## Quins fitxers indiquen les seves unitats

- **IFC**: indica la seva unitat de longitud, i «Obert» diu quina. Un IFC que no n'indica cap es pregunta abans d'obrir-se; la vostra resposta s'escriu al model, de manera que el fitxer la indica quan el deseu.
- **DWG i DXF**: les unitats d'inserció del dibuix. Un dibuix sense elles es pregunta (fitxers de la biblioteca, Construeix › Des d'un dibuix, terreny a partir de corbes de nivell).
- **Llistes de punts** per al terreny: no indiquen unitats. Es pregunta.
- **Núvols de punts**: LAS i LAZ amb un sistema de coordenades, E57, PTX i PLY indiquen les seves. Els altres es pregunten.
- **OBJ i STL**: mai no indiquen unitats. Es pregunta.
- **glTF i GLB**: metres, segons la regla del format.
- **Imatges**: no tenen mida pròpia. Una imatge s'ajusta a la vista i definiu la seva mida amb Escala per dos punts. La mida que doneu es recorda per a aquell fitxer: col·locat de nou, entra amb aquesta mida i la línia d'estat ho diu.
- **El complement Núvols de punts**: pregunta quan construeix un núvol el fitxer del qual no indica cap unitat, i etiqueta els números del núvol amb la unitat que porta.

## Bon de saber

- La resposta es recorda per a aquell fitxer (el seu nom, mida i data) en aquest ordinador, a totes les aplicacions de CadCraft. La propera vegada que entra el mateix fitxer no us pregunten, i la línia d'estat diu que s'han fet servir les unitats recordades.
- Per tornar a preguntar: la paleta d'ordres ({{key:Mod+K}}) › **Torna a preguntar per les unitats dels fitxers importats**.
- Una llista d'unitats que una importació ja té (les Unitats de la biblioteca, les Unitats de la barra del núvol, les Unitats del dibuix a Construeix › Des d'un dibuix) encara canvia les unitats després. La llista Unitats de l'eina de terreny ara només és on comença la pregunta.
