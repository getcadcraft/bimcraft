---
title: Envia un element a PartCraft i recupera'l
summary: Selecciona un suport, una mènsula, una barana o una peça d'equip, dissenya'l com a peça a PartCraft amb l'edifici al voltant i accepta la nova forma de tornada al model.
keywords: PartCraft, peça, envia, enllaç, element, suport, mènsula, tanca, barana, equip, disseny, anada i tornada, accepta, canviat, enllaços de peça
from: 4ce2f449
---

## Què fareu

Dissenyeu un element de l'edifici com a peça: envieu-lo a PartCraft, canvieu-lo allà (retalleu, afegiu, perforeu, redimensioneu) i porteu la nova forma de tornada al model.

## Passos

1. Seleccioneu un element al model: un element genèric, un equip, un pilar, una biga, una barana o un mobiliari.
2. Trieu {{ui:Enllaços de peça}} a la barra d'eines i després {{ui:Envia a PartCraft}}. PartCraft s'obre en una pestanya nova amb l'element com a peça. Els elements a menys de 3 m es dibuixen en gris al costat perquè pugueu dissenyar-lo al seu lloc. Allà no es poden canviar.
3. Canvieu la peça a PartCraft. A PartCraft trieu {{ui:Fitxer}} › {{ui:Exporta}} › {{ui:Torna a desar a BimCraft}}. Podeu tornar a desar tantes vegades com vulgueu.
4. De tornada a BimCraft, el botó {{ui:Enllaços de peça}} mostra un recompte, i la fitxa indica l'element com a {{ui:Canviat a PartCraft}}, amb el canvi de mida i de volum expressat en paraules.
5. Trieu {{ui:Mostra}} per veure'l, i després {{ui:Accepta}} per donar a l'element la nova forma, o {{ui:Mantén la meva}} per deixar-lo tal com estava.

## Què hauríeu de veure

- Acceptar és un sol pas per desfer. L'element conserva el seu lloc, GlobalId, tipus, material i propietats. Només se substitueix el seu cos.
- L'element rep un conjunt de propietats {{ui:CadCraft_PartLink}} amb l'enllaç, el seu estat i la revisió.
- {{ui:Envia de nou}} obre el mateix element a PartCraft una vegada més, amb el mateix enllaç.

## Bon a saber

- Els murs, els forjats, les cobertes, les portes, les finestres, les escales, les rampes i els espais els dibuixen les eines de l'edifici a partir d'un contorn i es reconstrueixen després de cada canvi. Un cos d'una altra aplicació se sobreescriuria, de manera que aquests elements es rebutgen amb un motiu.
- La forma torna com a malla (una teselació IFC), no com a característiques de la peça. L'historial de la peça es queda a PartCraft.
- Si l'element ha canviat al model després que l'envieu, la fitxa ho indica abans que l'accepteu: acceptar-lo substitueix aquests canvis.
- No es puja res. Les dues aplicacions són pàgines d'un mateix lloc i es passen l'element en aquest navegador. Totes dues han d'estar obertes al mateix navegador.
- L'element s'ha de tancar en un sòlid a PartCraft. Un element amb grans buits oberts es rebutja allà, amb el nombre d'arestes obertes.
- Per acceptar, feu que el model que conté l'element sigui l'actiu.
