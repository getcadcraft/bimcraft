---
title: Marca els elements com a comprovats o verificats in situ
summary: Un element llegit d'un PDF o d'un escaneig no està verificat fins que el comproveu. Marqueu els elements com a comprovats, o com a verificats in situ (LOD 500) amb qui els ha mesurat, quan i com, i lliureu un model as-built que indiqui quin és quin.
keywords: no verificat, verificat, comprovat, verificat in situ, as-built, lod 500, tancament, lliurament, mesurat in situ, cinta, làser, escaneig, topografia, edifici existent, alteració, marca com a comprovat, verificació, etapa 7
from: df35d908
---

## Què hi fareu

Seguiu el que algú ha mirat realment al model. Un element té una de tres marques, o cap:

- **No verificat**: el programa l'ha reconegut d'un PDF, d'un dibuix escanejat, d'un dibuix calcat o d'un escaneig de núvol de punts. Ningú no l'ha comprovat encara.
- **Comprovat**: una persona l'ha comparat amb el dibuix d'on prové.
- **Verificat in situ (LOD 500)**: una persona l'ha mesurat a l'obra. Qui, quan i com es guarden amb ell.
- **Sense marca**: dibuixat per una persona. El model no fa cap afirmació sobre ell.

## Passos

1. Trieu un element o molts (murs, portes, finestres, sales, qualsevol element).
2. A {{ui:Propietats}}, obriu {{ui:Verificació}}.
3. Escriviu qui l'ha comprovat o mesurat. La data és avui tret que la canvieu.
4. Cliqueu {{ui:Marca com a comprovat}}. Per a un mesurament a l'obra, trieu com s'ha mesurat (cinta mètrica, mesuradora làser de distàncies, escaneig, topografia) i cliqueu {{ui:Marca com a verificat in situ (LOD 500)}}.
5. {{ui:Marca com a no verificat}} i {{ui:Treu la marca}} desfan. Cada clic és un pas que podeu desfer, per a tota la selecció.

Per marcar una selecció ràpidament: {{ui:Eines}} › {{ui:Marca com a comprovat}} (escrit: `MARKCHECKED`) la marca com a comprovada per vosaltres, avui.

## Què heu de veure

- A la planta, un element no verificat té una caixa discontínua i un "?"; un de verificat in situ té una marca de verificació. Desmarqueu {{ui:Mostra les marques de verificació a la planta}} a la secció {{ui:Auditoria}} per amagar-les.
- {{ui:Quadres}} › {{ui:Verificació}} llista cada element marcat amb el seu nivell, estat, qui, quan, com i d'on procedeix.
- L'auditoria llista els elements no verificats, i compta un element verificat in situ com a LOD 500. Vegeu [Auditoria del model](topic:audit-the-model).

## Des d'un escaneig

Quan compareu un escaneig amb el model, {{ui:Marca com a verificats in situ els elements coincidents}} marca cada element que l'escaneig ha vist com a construït dins de la tolerància, amb el mètode "scan" i la tolerància a la nota. Vegeu [Compara un escaneig amb el model](topic:compare-scan-with-model).

:::warning
Aquesta comparació fa coincidir la caixa de cada element amb els punts de l'escaneig. No és un mesurament topogràfic. Useu-la per als elements que també heu mirat vosaltres.
:::

## El model as-built i el paquet de lliurament

{{ui:Crea el paquet de lliurament}} a la pestanya {{ui:Recursos}} posa el model as-built al zip, amb:

- un resum al projecte de quants elements estan verificats in situ, comprovats, no verificats i sense marca;
- `as-built/verified-elements.csv`: cada element i sala amb el seu estat, qui, quan i com;
- `as-built/as-built-drawings.pdf`: el joc de dibuixos tal com és ara;
- el registre de canvis dels dibuixos, quan el model ha emès jocs.

Vegeu [Recursos i manteniment](topic:assets-and-maintenance).

## Com es guarda a l'IFC

Cada element marcat porta el conjunt de propietats `CadCraft_Verification`: State, By, On, Method, Source, Note i LevelOfDevelopment (`LOD 500` mentre és verificat in situ). Són propietats de text pla, de manera que altres programes les llisten i Cerca, Color per propietat i els quadres d'etiquetes les poden fer servir. La declaració as-built és el conjunt de propietats `CadCraft_AsBuilt` al projecte. Un element sense el conjunt no es va mesurar a l'obra.

## Següent

- [Murs a partir d'un joc de plànols](topic:walls-from-plans)
- [Auditoria del model](topic:audit-the-model)
