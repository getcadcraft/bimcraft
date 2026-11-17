---
title: Fusiona les modificacions de dues persones en un mateix model
summary: Deixeu que git, Fossil o Mercurial fusionin dues còpies editades del mateix model IFC objecte per objecte, perquè dues persones puguin dibuixar en el mateix edifici i unir la feina.
keywords: fusió, merge, git, fossil, mercurial, control de versions, conflicte, tres vies, cadcraft merge, gitattributes, ifc, globalid, equip, dues còpies, branques
from: 50733df8
---

Dues persones prenen una còpia del mateix edifici, una dibuixa l'ala est i l'altra l'oest, i més tard les còpies han de convertir-se en una. Si han tocat objectes diferents, un programa pot fer-ho en lloc d'una persona.

## Què ho fa possible

Cada mur, porta, planta, sala i conjunt de propietats d'un fitxer IFC té un GlobalId que mai no canvia. La fusió busca els objectes per aquest identificador, no pel número que li dona el fitxer (`#123`), perquè els números canvien quan un programa desa. Les parts penjades d'un objecte que no tenen identificador propi (col·locacions, formes, unitats) es comparen pel que contenen.

Totes dues còpies han de ser la mateixa versió d'IFC (2x3, 4 o 4.3). La fusió manté el vostre fitxer tal com és, el seu ordre i els seus números, i afegeix el que és nou; així, un git diff de la fusió només mostra el que la fusió ha canviat.

## Configuració

Git necessita dues línies una vegada per repositori:

```
# .gitattributes
*.ifc merge=cadcraft

# una vegada, a cada ordinador
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sense git, executeu `cadcraft merge <base> <ours> <theirs>`. Fossil i Mercurial prenen els mateixos tres fitxers en la seva pròpia configuració d'eina de fusió. No es puja res; tot s'executa al vostre ordinador.

## Les regles

- Un atribut canviat només en un costat es pren. El mateix canvi en tots dos costats es pren una sola vegada.
- El mateix atribut canviat de dues maneres (la mateixa planta reanomenada de dues maneres) és un **conflicte**: es queda el vostre costat i l'informe llista els dos. Obriu el resultat i corregiu-lo a mà.
- Una llista d'elements (els murs d'una planta, les propietats d'un conjunt) es fusiona com a conjunt: el que afegeix qualsevol dels costats es conserva i el que suprimeix qualsevol dels costats se suprimeix. Dues persones que afegeixen cadascuna murs a la mateixa planta no entren en conflicte.
- Un objecte afegit en qualsevol dels costats es conserva, amb la seva forma i propietats. Suprimit en un costat i sense tocar a l'altre: se suprimeix. Suprimit en un costat i canviat a l'altre: se suprimeix i s'informa.
- La data i l'autor del fitxer, i el registre de propietari de cada objecte, es mantenen com els vostres.

La geometria es fusiona sencera: la forma d'un mur ve d'un costat, mai barrejada punt per punt. Els fitxers IFC i IFCX comprimits en ZIP no es fusionen. Després d'una fusió, obriu el resultat a BimCraft i mireu el tauler de Problemes abans de desar.
