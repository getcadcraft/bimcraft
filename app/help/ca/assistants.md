---
title: Deixeu que un assistent d'IA treballi amb el vostre model
summary: Activeu els assistents a Configuració perquè un assistent del vostre ordinador pugui trobar elements, llegir-ne les propietats, aïllar-los a la vista i dibuixar murs, portes, finestres, forjats, plantes i graelles, a través de CadCraft Studio. Desactivat fins que l'activeu.
keywords: ia, assistent, mcp, script, automatització, studio, troba elements, aïlla, propietats, permisos, desconnecta, activitat, dibuixa murs, afegeix portes, afegeix finestres, plantes, graelles, forjats, desfer, desar, línia d'ordres, cli, sense finestra, utilitza amb assistents d'IA
from: c5ee595b
---

## Què aprendreu

Com deixar que un assistent d'IA (qualsevol assistent que parli MCP) miri el model IFC que teniu obert i hi dibuixi, què pot i què no pot fer, i com aturar-lo.

## Què pot fer un assistent a BimCraft

| Demana | Què passa | Necessita |
|---|---|---|
| Trobar elements | Obté una llista d'elements per classe, planta, nom o valor de propietat, com ho fa **Cerca** | Lectura |
| Llegir propietats | Obté els atributs d'un element, el tipus, els conjunts de propietats i les quantitats, tal com els mostra **Propietats** | Lectura |
| Descriure el model, llistar murs | Obté les plantes, murs, portes, finestres, sales, forjats, graelles i pilars, i els extrems, el tipus i l'alçada de cada mur | Lectura |
| Aïllar, fer transparent, amagar o mostrar | La vista 3D canvia com si haguéssiu fet servir el menú {{ui:Mostra}} | Canvia la vista i dibuixa |
| Dibuixar murs, portes, finestres, forjats, plantes o línies de graella | El model canvia com si haguéssiu fet servir les eines {{ui:Dibuixa}}: els murs s'uneixen, les sales, els forjats i les coberts segueixen | Canvia la vista i dibuixa |
| Canviar un nom o un valor de propietat | El Nom, la Descripció, el Tipus d'objecte o l'Etiqueta d'un element, o el valor d'una propietat. Un valor que comparteix amb altres elements es copia primer per a ell; un valor del seu tipus només canvia quan l'assistent ho diu, perquè cada element d'aquell tipus el segueix | Canvia la vista i dibuixa |
| Moure, suprimir, canviar murs, portes i finestres | Els elements es mouen o se suprimeixen amb els que els allotgen; els murs dibuixats amb les eines {{ui:Dibuixa}} canvien pels seus extrems o tipus, les portes i finestres per la seva posició, mida o tipus, i les sales i unions segueixen | Canvia la vista i dibuixa |
| Configurar, organitzar i llegir un quadre | "Un quadre de portes per planta, amb classificació de foc i ferreteria": l'assistent en defineix el nom, les columnes (una propietat o una etiqueta es converteix en una columna) i l'agrupació; BimCraft l'omple a partir del model i el disposa, prenent del estàndard de l'oficina allò que l'assistent no ha indicat. La configuració s'afegeix a la vostra llista de Quadres. Cada línia que rep porta els seus elements, de manera que pot seleccionar-los | Lectura per llegir; Canvia la vista i dibuixa per desar una configuració |
| Exportar un quadre | CSV, Excel, o text separat per tabuladors per enganxar a Google Sheets (res no s'envia a Google) | Exporta |
| Llegir i definir els acabats de les sales | Els tipus d'acabat, el terra, la paret i el fals sostre de cada sala, les zones; les àrees, el recompte de rajoles i els volums de suport surten llavors dels quadres d'acabats | Lectura; Canvia la vista i dibuixa per definir-los |
| Seleccionar elements, desfer els seus propis passos | Els elements es trien a la vista; el seu últim pas es desfà | Canvia la vista i dibuixa |
| Desar | Un fitxer IFC nou amb cada canvi, tal com ho fa {{ui:Desa com a IFC}} (l'original mai no es modifica) | Desa |
| Exportar USD | Els models oberts com a OpenUSD (.usda, .usdc o .usdz), tal com ho escriu {{ui:USD}} a la barra d'eines | Exporta |
| Renderitzar una imatge, executar la cua de renderitzat | Una imatge de la vista 3D, tal com la fa el diàleg {{ui:Renderitza}} amb la vostra configuració de Renderitzat tret que demani altres, o imatges d'alta qualitat afegides a la cua del diàleg i renderitzades una rere l'altra (la cua necessita WebGPU). Res del model canvia ([Renderitza una imatge](topic:render)) | Exporta |

Cada canvi que fa un assistent és un pas a **Canvis**, amb el nom "Assistent: …" (per exemple "Assistent: afegeix 4 murs"), de manera que {{key:Mod+Z}} desfà tota la seva acció, i podeu veure de qui és cada pas. A la finestra no pot obrir fitxers: vosaltres obriu el model; ell treballa amb el que és obert.

## Activeu-lo

Els assistents arriben a BimCraft a través de CadCraft Studio al vostre ordinador; el navegador simple no té cap manera d'entrar.

1. Obriu {{ui:Configuració}} i trieu la pestanya **BimCraft**.
2. Sota **Assistents**, marqueu **Permet que els assistents d'IA i els scripts usin BimCraft**.
3. **Lectura** ja està marcada per a vosaltres. Marqueu també **Canvia la vista i dibuixa** si l'assistent pot aïllar i amagar elements i dibuixar, i **Desa** si pot desar el model com a fitxer nou.
4. Connecteu l'assistent a Studio (Studio mostra l'adreça i la configuració que cal enganxar-hi).

## Mentre hi ha un assistent connectat

Una nota a la part superior del panell dret indica quin assistent està connectat i què pot fer. Cliqueu {{ui:Desconnecta}} per acabar la seva sessió de seguida; haurà de tornar a connectar-se per continuar.

**Activitat**, sota **Assistents** a Configuració, llista cada crida que ha fet l'assistent, la més recent primer, amb l'indicació de si ha funcionat.

:::tip
Demaneu-ho en paraules senzilles, per exemple "aïlla els murs exteriors de la planta 1", "quines portes no tenen classificació de foc?" o "dibuixa una sala de 6 per 4 metres a la planta 1 amb una porta al mur sud". L'assistent troba els elements i els mostra a la vista, o els dibuixa.
:::

## Sense finestra: scripts i línia d'ordres

Les mateixes eines de dibuix funcionen sobre fitxers IFC en carpetes que indiqueu, sense cap finestra oberta: el servidor MCP i la línia d'ordres de CadCraft poden iniciar un edifici nou o obrir un fitxer IFC, descriure'l, afegir-hi murs, portes, finestres, forjats, plantes i graelles, desfer-ho i desar-lo com a fitxer `.ifc` nou. Vosaltres decidiu quines carpetes pot fer servir i si pot canviar o desar alguna cosa.

## Desactiveu-lo

Desmarqueu **Permet que els assistents d'IA i els scripts usin BimCraft**. Cada assistent es desconnecta de seguida, i la configuració es conserva per a la propera vegada.

## Vegeu també

- [Receptes per als assistents d'IA](common:assistants-recipes): exemples treballats, cadascun amb les eines que crida.
- [Cerca elements per classe, nom o propietat](topic:find)
- [Amaga, aïlla i fes transparents els elements](topic:hide-and-isolate)
- [Configuració de BimCraft](topic:settings)
