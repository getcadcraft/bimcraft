---
title: Audita el model: sales, etiquetes, LOD, col·lisions i interfícies
summary: Executeu comprovacions preparades per a sales sense nom, etiquetes que falten, elements per sota del nivell de desenvolupament que demana l'etapa del projecte, col·lisions entre disciplines i interfícies LOD 350. Només consell: no es bloqueja res.
keywords: auditoria, comprovació, sala sense nom, etiqueta que falta, marca, lod, nivell de desenvolupament, fita, etapa, col·lisió, disciplina, coordinació, interfície, lod 350, obertura, llinda, capçal, passatge, manega, tub, conducte, problemes, informe de comprovació, consultiu
from: cc83a14d
---

## Què fareu

Reviseu tot el model d'una vegada abans d'emetre'l. L'auditoria executa conjunts de regles preparats i posa el que troba a la llista {{ui:Problemes}} com a consell. No es bloqueja res: corregiu una troballa, o l'accepteu amb un motiu, com qualsevol altre problema.

## Passos

1. Obriu {{ui:Comprovacions del model}} › {{ui:Auditoria}} al panell esquerre, o {{ui:Eines}} › {{ui:Audita el model…}} (escrit: `AUDIT`).
2. Trieu la {{ui:Fase del projecte}}. És la mateixa etapa que als detalls del dibuix.
3. Marqueu els conjunts de regles que cal executar.
4. Cliqueu {{ui:Executa l'auditoria}}.
5. Llegiu la línia de cada conjunt de regles, i després {{ui:Obre la llista de Problemes}}. Un clic sobre una troballa tria el seu element.
6. {{ui:L'informe de comprovació}} descarrega l'informe: cada troballa, qui ha acceptat què i per què, i els conjunts de regles que s'han executat.

## Els conjunts de regles

- **Sales sense nom**: una sala sense nom, o que encara es diu com la va anomenar el programa ("Sala 3").
- **Etiquetes que falten**: una porta o una finestra sense marca, una sala sense número, un dispositiu elèctric sense etiqueta.
- **Elements per sota del LOD de l'etapa**: cada mur, forjat, sostre, coberta, porta i finestra el LOD de la qual és inferior al que demana l'etapa. Un element llegeix l'etiqueta de LOD del seu tipus; un element verificat a obra és LOD 500. Els elements sense etiqueta es compten en una sola nota, perquè no es poden comprovar.
- **Col·lisions entre disciplines**: elements de dues disciplines (arquitectura, estructura, mecànica, fontaneria, electricitat, segons la classe IFC) que xoquen entre ells. Una coberta que descansa sobre els seus murs no es compta.
- **Interfícies LOD 350**: cada porta i finestra és dins d'una obertura del seu mur, l'obertura cap dins del mur, dues obertures no se superposen, una obertura més ampla que el límit té una llinda o un capçal (un element per sobre, o una nota a la porta o finestra), i un tub, un conducte o una safata de cables que travessa un mur o un forjat té una obertura allà. Les troballes es compten per parella de disciplines.
- **Elements reconeguts que ningú no ha comprovat**: murs, portes, finestres i sales llegits d'un PDF, d'un escaneig o d'un dibuix que encara no estan verificats. Vegeu [Marca els elements com a comprovats o verificats a obra](topic:verification).

## El LOD que demana cada etapa

Obriu {{ui:El LOD que demana cada etapa}} per veure o canviar la taula.

:::note
La taula i l'amplada de la llinda són els valors inicials de CadCraft. No es prenen d'una norma: un projecte fixa el LOD per etapa al seu pla d'execució BIM. Definiu-los amb els vostres. Una oficina pot definir la taula per a tothom a Configuració › Polítiques per defecte › Auditoria; un canvi a la secció Auditoria es manté en aquest ordinador.
:::

## Bon a saber

- Una llinda es pot anotar en lloc de modelar-la: trieu la porta o la finestra i ompliu {{ui:Nota de llinda o capçal}} sota {{ui:Verificació}} a Propietats.
- Un tub que passa per una obertura real no travessa cap superfície i no es denuncia. Un que està modelat directament a través del mur sí que es denuncia.
- La comprovació de col·lisions s'atura al cap d'uns segons en un model molt gran i ho diu. Per a una comprovació completa de dos conjunts escollits, useu [Cerca col·lisions entre elements](topic:clash-check).
- Torneu a executar l'auditoria després de canviar el model. Les troballes acceptades es mantenen acceptades mentre els seus números no canvien.
- Llegeix el model. No substitueix una revisió de coordinació per part de les persones responsables.

## Següent

- [Comprova un model per trobar problemes habituals](topic:model-checks)
- [Cerca col·lisions entre elements](topic:clash-check)
- [Marca els elements com a comprovats o verificats a obra](topic:verification)
