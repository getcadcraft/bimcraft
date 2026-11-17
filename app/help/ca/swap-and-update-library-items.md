---
title: Substitueix un element col·locat i actualitza elements de la biblioteca
summary: Substituïu un element de la biblioteca col·locat per un altre, mantenint-ne el lloc i el número d'element, i reviseu a Biblioteca si hi ha versions més noves de tot el que hi ha al model.
keywords: substitueix, reemplaça, substitució, actualitza, versió més recent, comprova si hi ha actualitzacions, biblioteca, retirat, canvi de llicència, número d'element
from: 8bdfe01d
---

## Què hi fareu

Canvieu d'opinió sobre un element sense tornar-lo a moure, i manteniu actualitzats els elements de la biblioteca d'un model.

## Substitueix un element

1. Feu clic a un element de la biblioteca col·locat al model.
2. A {{ui:Propietats}}, feu clic a {{ui:Substitueix l'element…}} a la casella **Element de la biblioteca**. S'obre la pestanya {{ui:Biblioteca}}.
3. Busqueu el nou element i feu clic a la seva targeta.
4. Feu clic a {{ui:Substitueix … per aquest}}.

L'element conserva el seu lloc, el gir, la planta, el número d'element, la quantitat i les notes. El seu tipus, la seva forma i les dades de l'element canvien pel nou element. Els elements col·locats de la mateixa manera comparteixen un tipus, com en col·locar-los.

Un element que té variants (vegeu [Col·loca i substitueix un element de la biblioteca que té variants](topic:library-variants)) llista les altres variants a dalt de la pestanya {{ui:Biblioteca}} quan el substituïu: un clic per a cadascuna.

Quan el nou element és una cosa d'una altra classe, per exemple un lavabo en lloc d'una taula, la classe IFC de l'element canvia per coincidir (aquí, d'element de mobiliari a terminal sanitari), perquè altres programes el planifiquin correctament. Continua sent el mateix element, amb el mateix GlobalId, de manera que els enllaços cap a ell continuen funcionant. {{key:Mod+Z}} torna a posar la classe antiga amb l'element antic.

## Comprova si hi ha actualitzacions

1. Feu clic a {{ui:Actualitzacions}} a la barra d'eines (o a {{ui:Comprova si hi ha actualitzacions}} a la casella d'un element de la biblioteca).
2. Llegiu la llista: cada element de la biblioteca del model amb la seva versió al model, la darrera versió i un estat: **Al dia**, **Versió més recent**, **Retirat** o **No trobat**. També indica què ha canviat (geometria, dades, llicència o una correcció).
3. Feu clic a {{ui:Actualitza}} en una fila, o a {{ui:Actualitza-ho tot}}.

## Què hauríeu de veure

- «S'han actualitzat *n* col·locacions. Es conserven les posicions, els números d'element, les quantitats i les notes.»
- «Actualitzat: *element*» a la llista de canvis. {{key:Mod+Z}} desfà cadascun.

## Bones coses a saber

- Només es poden comprovar els elements que venen de la biblioteca. Els elements dels fitxers no porten identificador de biblioteca.
- Quan ha canviat una llicència, la còpia que ja heu col·locat conserva la llicència amb què va arribar fins que l'actualitzeu.
- Un element **Retirat** no s'ofereix per a noves col·locacions. Un retirat per motius de drets d'autor no es pot baixar en absolut; substituïu-lo amb {{ui:Substitueix l'element…}}.
- Una variant col·locada es manté com a variant quan la versió més nova de l'element encara la té; en cas contrari, pren la variant per defecte de l'element.
- La comprovació envia només els identificadors i les versions dels elements, mai el vostre model.
