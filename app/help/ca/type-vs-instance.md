---
title: Canviar una propietat de tipus per a cada element d'un tipus
summary: Distingiu les propietats de tipus de les d'instància, canvieu un valor al tipus perquè cada element el segueixi, i comproveu que l'edició d'un element continuï sent seva.
keywords: tipus, instància, propietats de tipus, tipus de família, compartit, còpia en escriure, tots els elements, edició massiva, fabricant, model
from: bffd8789
---

## Què fareu

Establiu el fabricant d'un tipus de porta perquè cada porta d'aquest tipus el mostri, i després doneu a una sola porta el seu propi valor de resistència al foc, sense tocar les altres. Això mostra la diferència entre propietats de tipus i d'instància a BimCraft.

## Tipus o instància?

- Una propietat d'**instància** pertany a un sol element: la seva etiqueta, la seva marca, la seva sala, el seu propi valor de resistència al foc.
- Una propietat de **tipus** pertany al tipus que comparteixen molts elements: fabricant, model, amplada d'un tipus de porta.

Al tauler {{ui:Propietats}}, els conjunts que vénen del tipus tenen " (tipus)" després del seu nom i la línia "Type property: a change here applies to every element of this type." Qualsevol altre conjunt pertany a l'element mateix. **Tipus** al primer bloc mostra el nom del tipus.

## Passos: canvieu el tipus

1. Obriu un model IFC i feu clic a una porta.
2. Anoteu el seu **Tipus** al primer bloc del tauler {{ui:Propietats}}, per exemple "Single-Flush 900 x 2100".
3. Desplaceu-vos fins a un conjunt el nom del qual acaba en "(tipus)".
4. Feu clic al valor que voleu canviar, per exemple **Manufacturer**.
5. Escriviu el nou valor i premeu {{key:Enter}}.
6. Mireu la llista {{ui:Canvis}}: l'entrada acaba en "(tipus)".
7. Feu clic en una altra porta del mateix tipus.
8. Comproveu el mateix valor: també mostra el nou valor.

## Passos: canvieu només un element

1. Feu clic a una porta.
2. Obriu un conjunt sense "(tipus)" al nom, per exemple `Pset_DoorCommon`.
3. Feu clic a un valor, com **FireRating**, escriviu un nou valor i premeu {{key:Enter}}.
4. Feu clic a la porta del costat, del mateix tipus.
5. Comproveu el mateix valor: encara mostra el valor antic.

Encara que l'exportador hagués compartit aquell conjunt de propietats entre totes dues portes, BimCraft va donar a la primera porta la seva pròpia còpia abans de canviar-lo. Vegeu [Per què l'edició només canvia un element](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Desa

1. Feu clic a {{ui:Desa com a IFC}} o premeu {{key:Mod+S}}.
2. Obriu la còpia desada a BimCraft, o en qualsevol visor IFC, per comprovar tots dos canvis.

## Errors habituals

- **No tots els models tenen tipus.** Alguns exportadors no escriuen objectes de tipus, o ho posen tot a la instància. Aleshores no hi ha conjunts "(tipus)", i cada element s'ha de canviar individualment.
- **El mateix valor apareix en un conjunt de tipus i en un d'instància.** Alguns exportadors escriuen un paràmetre en tots dos llocs. Altres programes poden llegir-ne un o l'altre; canvieu-los tots dos si necessiteu que coincideixin.
- **Esperar seleccionar "totes les portes d'aquest tipus" i editar-les juntes.** En aquesta versió no hi ha selecció múltiple. Una propietat de tipus és la manera de canviar molts elements alhora.
