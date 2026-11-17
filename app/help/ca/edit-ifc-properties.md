---
title: Canviar propietats IFC i desar una còpia editada
summary: Canvieu el nom, l'etiqueta, la descripció o un valor de propietat d'un element, desfeu-ho, i baixeu un fitxer IFC nou mentre l'original es queda com estava.
keywords: editar, canviar, propietats, paràmetres, etiqueta, nom, reanomenar, marca, desar com a, baixar, desfer, còpia, ifc, escriure
from: f8035d62
---

## Què hi fareu

Corregiu dades d'un model IFC: reanomeneu un element, corregiu-ne l'etiqueta, canvieu un valor de propietat. Després deseu un fitxer IFC nou amb els canvis. El fitxer que heu obert no es toca mai.

## Què podeu canviar

| Camp | Editable |
|---|---|
| Nom, Tipus d'objecte, Etiqueta, Descripció | Sí |
| Valors de propietat individuals (text, números, Sí/No) | Sí |
| Propietats de tipus (conjunts marcats "(tipus)") | Sí, i el canvi s'aplica a tots els elements d'aquell tipus |
| Tipus, GlobalId, Línia | No |
| Quantitats (longituds, àrees, volums, recomptes) | No |
| Llistes, enumeracions i altres valors de diverses parts | No |
| Geometria, posició, afegir o suprimir elements | No |

## Passos

1. Obriu un model IFC i feu clic a l'element que voleu canviar.
2. Al tauler {{ui:Propietats}}, feu clic al valor que voleu canviar. Es converteix en una caixa de text. Un valor buit es mostra com a *buit*.
3. Escriviu el valor nou.
4. Premeu {{key:Enter}}, o feu clic en un altre lloc, per mantenir-lo. Premeu {{key:Esc}} per cancel·lar.
5. Mireu el valor: ara està en negreta amb una barra blava al costat, que marca un valor editat.
6. Mireu la secció {{ui:Canvis}} de l'esquerra: el canvi apareix a la llista com *element*: *camp*, valor antic a valor nou.
7. Repetiu-ho per a altres valors o altres elements.
8. Feu clic a {{ui:Desa com a IFC}} (mostra quants canvis estan pendents, per exemple "Desa com a IFC (3)"), o premeu {{key:Mod+S}}.
9. Busqueu "*nom original* (editat).ifc" a la vostra carpeta de baixades.

## Què heu de veure

La línia d'estat diu "Desat *nom* (editat).ifc amb *n* canvis (… bytes). El fitxer original no ha canviat." La llista {{ui:Canvis}} es buida, a punt per a la següent ronda.

## Tipus de valors

- **Text**: tot el que escriviu es conserva tal com és. Esborrar Nom, Tipus d'objecte, Etiqueta o Descripció treu el valor.
- **Números**: escriviu un número simple, com `2.4` o `1200`, en les unitats del propi fitxer. Sense símbols d'unitat. Qualsevol altra cosa mostra "Useu un número."
- **Enters** (recomptes, nombres sencers): "Useu un nombre enter." si escriviu un decimal.
- **Sí/No**: el valor es converteix en un menú amb Sí i No.

Cada valor conserva el seu tipus IFC, així que un número es queda com a número i altres programes el llegeixen correctament.

## Desfer

1. Feu clic a {{ui:Desfés}} a la secció {{ui:Canvis}}, o premeu {{key:Mod+Z}} mentre no escriviu en un camp.
2. Repetiu per desfer més. Cada desfer treu el canvi més recent.

No podeu desfer més enllà d'un desat: després de desar, la llista torna a començar. El fitxer desat conserva tot.

## Per què l'edició només canvia un element

Els exportadors estalvien espai compartint dades. Un conjunt de propietats pot ser compartit per vint portes, i un valor ("Resistència al foc: 60 min") pot aparèixer en noranta conjunts. Si BimCraft simplement canviés el valor compartit, cada element que el comparteix també canviaria.

Així que BimCraft copia abans d'escriure:

- Si el conjunt de propietats que editeu és compartit amb altres elements, el vostre element rep la seva pròpia còpia del conjunt, i només canvia la còpia.
- Si el valor és compartit amb altres conjunts, el vostre conjunt rep la seva pròpia còpia del valor.

Els veïns conserven les seves dades antigues. Això es diu *còpia en escriure*. Afegeix unes poques entrades petites al fitxer, que tots els programes IFC llegeixen amb normalitat.

**Les propietats de tipus són l'excepció a propòsit.** Un conjunt marcat "(tipus)" pertany al tipus de l'element, i en IFC cada element d'aquell tipus el llegeix des d'allà. Canviar-lo canvia el tipus, així que cada element del tipus mostra el valor nou. La llista {{ui:Canvis}} marca aquests canvis amb "(tipus)". Vegeu [Canviar una propietat de tipus per a tots els elements d'un tipus](topic:type-vs-instance).

## Avisos abans de perdre feina

- Si obriu un altre fitxer tenint canvis no desats, us demana "Teniu *n* canvis no desats a *fitxer*. Els descartem?" Feu clic a Cancel·la per seguir treballant, i després deseu.
- Tancar o recarregar la pestanya amb canvis no desats fa que el navegador pregunti si voleu sortir.

## Errors habituals

- **Escriure unitats.** `2400 mm` es rebutja. Escriviu `2400`.
- **Canviar una propietat de tipus quan volíeu canviar un element.** Busqueu la nota "(tipus)" abans d'escriure. Si voleu que un element sigui diferent, canvieu una propietat d'instància o la seva Etiqueta o Nom.
- **Esperar que el fitxer original canviï.** Desar sempre baixa un fitxer nou. Substituïu l'original vosaltres mateixos si és el que voleu, i guardeu-ne una còpia.
- **Prémer {{key:Mod+S}} sense canvis.** BimCraft només desa quan hi ha alguna cosa a desar; si no, pot obrir-se el "Desa la pàgina" del navegador. Tanqueu-lo.
- **Desar dues vegades i esperar dos fitxers petits.** Cada desat conté totes les edicions des que heu obert el model.
- **Esperar que les edicions tornin a un fitxer de projecte.** BimCraft només escriu IFC. Porteu l'IFC editat al vostre programa d'autoria com importaríeu qualsevol IFC.
