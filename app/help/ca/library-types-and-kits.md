---
title: Símbols, tipus i recursos, plantilles de projecte i Quick Kits
summary: La biblioteca té tres classes d'element (símbols, tipus, recursos). Afegeix un tipus al teu projecte, comença des d'una plantilla de projecte compartida, afegeix un Quick Kit, i comparteix els teus propis a la pàgina de pujada de la biblioteca.
keywords: biblioteca, símbols, tipus, recursos, tipus de mur, tipus de forjat, tipus de coberta, tipus de sostre, plantilla de projecte, plantilla, quick kit, kit, compartir, pujada, versió, historial de canvis, LOD, classificació, llicència, notes de la pràctica
from: e13b0e67
---

## Què faràs

Troba a la Biblioteca el que necessites segons el que és, afegeix un tipus al projecte que estàs dibuixant, comença un projecte nou a partir d'una plantilla que algú ha compartit, i comparteix les teves pròpies plantilles, tipus i kits.

## Les tres classes d'element de la biblioteca

- **Símbols** són convencions de dibuix: només 2D, dibuixats a la mida d'anotació, agrupats per disciplina.
- **Tipus** indiquen de què està fet un element: les seves capes amb el gruix real, el seu nivell de desenvolupament (LOD) i el seu codi de classificació. Un tipus s'afegeix al projecte, no es dibuixa.
- **Recursos** són objectes físics com portes, finestres, mobiliari, accessoris i equipament, amb una vista en planta i un cos 3D a mida real.

A la pestanya {{ui:Biblioteca}}, tria {{ui:Biblioteca}} i fes servir **Categoria d'element** per mostrar Tot, Símbols, Tipus o Recursos.

## Afegeix un tipus al projecte

1. Tria **Tipus** sota Categoria d'element i obre'n un.
2. Revisa la seva composició, el LOD i la classificació sota la imatge, i després fes clic a {{ui:Afegeix a aquest projecte}}.
3. S'afegeix com a tipus de mur, forjat, coberta o sostre amb què pots dibuixar. Si ja hi ha un tipus amb aquest nom, el nou s'afegeix com a còpia i el teu queda tal com era. Un Desfés el treu.

## Plantilles de projecte i Quick Kits

Tria {{ui:Kits}} per veure què ha compartit la gent.

- **Una plantilla de projecte** és un fitxer IFC amb nivells, quadrícules, tipus i configuració. {{ui:Desa a les meves plantilles}} la posa a Edifici nou, sota Comença des de.
- **Un Quick Kit** és una llista d'elements de biblioteca. {{ui:Mostra els elements del kit}} els llista com a targetes que pots col·locar.
- Cada kit té una versió i un historial de canvis, el més recent primer. Una versió que comença per 0 és per a debat; 1.0.0 només és per al que el propietari de la línia ha adoptat.

## Comparteix els teus

- **Una plantilla de projecte:** {{ui:Desa com a plantilla}}, marca {{ui:Crea també un fitxer per compartir a la biblioteca}}, afegeix el que conté i una versió. Obtens un fitxer `.json`.
- **Un Quick Kit:** a {{ui:Kits}}, tria {{ui:Fes un Quick Kit a partir d'aquest projecte}}. Llista els elements de biblioteca que usa el projecte.
- **Un tipus:** a {{ui:Paquets de tipus}}, marca un tipus i tria {{ui:Desa com a element de la Biblioteca…}}.

Puja el fitxer a la pàgina de pujada de la biblioteca. Passa per la mateixa revisió que qualsevol element, i hi tries la llicència: cada element declara la seva llicència. Als elements se'ls demana el seu LOD, una classe IFC i un codi de classificació (un codi, no només un nom).

## Notes de la pràctica

A la pàgina de qualsevol element de la biblioteca, els membres que han iniciat la sessió poden afegir una nota: utilitzat en un projecte real, provat en un projecte de mostra, o trobat un problema. Digues en poques paraules quin tipus de projecte és i no hi posis noms de clients. Una nota és pública i no és una valoració: no canvia l'element.

## Bones de saber

- No s'envia res des de l'aplicació. Els fitxers es fan al teu ordinador i els puges tu mateix.
- Un kit fet a partir d'una plantilla porta el text IFC exactament tal com es va desar. Revisa'l per si hi ha alguna cosa privada abans de pujar-lo.
- CadCraft mostra els símbols i els recursos a la seva pestanya Biblioteca; els tipus i les plantilles són per als projectes de BimCraft.
