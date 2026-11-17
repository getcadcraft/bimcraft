---
title: Treballar entre dos programes BIM
summary: Envieu un model d'un programa BIM a un altre a través d'IFC, amb BimCraft al mig; conserveu els seus GlobalIds, conjunts de propietats i classificacions; configureu tots dos programes per a les mateixes propietats; i vegeu què ha tornat.
keywords: ifc, anada i tornada, interoperabilitat, globalid, guid, conjunts de propietats, psets, classificacions, paràmetres compartits, correspondència de propietats, traductor, bcf, coordinació, intercanvi
from: 9f224176
---

## Què fareu

Traslladeu un model d'un programa BIM a un altre, per exemple de Revit a Archicad i de tornada, a través d'IFC, amb BimCraft al mig per comprovar-lo, afegir-hi coses i informar del que ha sobreviscut. No es llegeix el format de fitxer propi de cap dels dos programes: tot viatja com a IFC.

## Què conserva BimCraft

Quan canvieu un model a BimCraft i feu clic a {{ui:Desa com a IFC}}, cada línia que no heu canviat s'escriu de nou exactament igual. Així doncs:

- Els **GlobalIds** es mantenen, i l'altre programa pot fer coincidir cada element amb el que li va enviar.
- Els **conjunts de propietats** i els seus valors es mantenen, excepte els valors que heu canviat.
- Les **classificacions** segueixen unides als seus elements.

## Configureu tots dos programes per a les mateixes propietats

1. Obriu el model a BimCraft (i el paquet de projecte, si en teniu un: els seus grups de propietats s'hi afegeixen).
2. Al tauler de l'esquerra, obriu {{ui:Entre dos programes BIM}}.
3. Sota **Correspondència de propietats**, descarregueu el que necessita cada programa:
   - {{ui:Paràmetres compartits}}: un fitxer de paràmetres compartits. A Revit, carregueu-lo amb Manage › Shared Parameters i afegiu els paràmetres a les categories que els necessiten.
   - {{ui:Conjunts de propietats d'exportació IFC}}: un fitxer de conjunts de propietats definits per l'usuari. A la configuració d'exportació IFC de Revit, trieu-lo sota els conjunts de propietats definits per l'usuari, de manera que l'IFC exportat porti el mateix conjunt i els mateixos noms de propietat.
   - {{ui:Taula de correspondència (CSV)}}: cada propietat amb el seu conjunt IFC i nom, el seu tipus, i els noms corresponents a cada programa. Els fitxers de correspondència d'Archicad no són un format publicat, així que configureu a mà el seu traductor IFC i el gestor de propietats a partir d'aquesta taula.
   - {{ui:Fitxer de correspondència}}: tota la correspondència en un sol fitxer, per guardar-lo amb el projecte.

Els conjunts estàndard (Pset_ i Qto_) no s'inclouen al fitxer de paràmetres compartits: tots dos programes els escriuen a partir de les seves pròpies dades.

## Enviar el model i tornar-lo a portar

1. Exporteu IFC des del primer programa amb els GlobalIds conservats (Revit: "Store the IFC GUID in an element parameter after export" activat).
2. Obriu-lo a BimCraft, comproveu-lo ({{ui:Comprovacions del model}}, {{ui:Comprovació de col·lisions}}), afegiu-hi incidències ({{ui:Incidències}}, BCF), canvieu valors si cal, i feu {{ui:Desa com a IFC}}.
3. Obriu l'IFC desat al segon programa, treballeu-hi, i exporteu IFC des d'allà amb els GlobalIds conservats (traductor d'Archicad: "Global Unique Identifiers: Keep existing").
4. De tornada a BimCraft, obriu el model que ha sortit i, després, afegiu el que ha tornat ({{ui:Afegeix un model}} sota Models).
5. A {{ui:Entre dos programes BIM}}, trieu **Enviat** i **Tornat**, i feu clic a {{ui:Fes l'informe}}.

## Llegiu l'informe

- **Elements**: quants han tornat amb el mateix GlobalId, quants falten i quants són nous. Els elements amb un GlobalId nou apareixen com un de desaparegut i un de nou: l'altre programa no l'ha conservat.
- **Classe IFC canviada**: elements que han tornat com una altra classe d'element.
- **Valors de propietat conservats**: la proporció de valors que han tornat sense canvis. La llista de sota mostra les propietats amb més valors canviats o absents.
- **Classificacions**: conservades, canviades (mateix sistema, un altre codi) o absents.

{{ui:Baixa l'informe (CSV)}} dona totes les propietats amb els seus recomptes. Per veure quins elements s'han mogut o han canviat de forma, feu servir {{ui:Compara versions}} amb els mateixos dos models.

:::note
BimCraft no executa cap dels dos programes. Quins ajustos transporten un valor depèn de la configuració IFC de cada programa: l'informe mostra el que realment ha tornat, així que proveu un ajust, torneu a exportar i compareu.
:::

## Les incidències viatgen com a BCF

Les incidències que plantegeu a BimCraft s'exporten com a BCF ({{ui:Incidències}}), que tots dos programes poden llegir amb les seves eines BCF, de manera que una pregunta sobre un element arriba a la persona que treballa a l'altre programa amb el seu punt de vista.

Vegeu també [Obrir un paquet de projecte](topic:open-project-bundle), [De fitxer de projecte a BimCraft a través d'IFC](topic:rvt-to-ifc) i [Comparar dues versions d'un model](topic:compare-versions).
