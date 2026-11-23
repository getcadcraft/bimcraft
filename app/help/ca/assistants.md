---
title: Deixeu que un assistent d'IA treballi amb el vostre model
summary: Activeu els assistents a Configuració perquè un assistent del vostre ordinador pugui trobar elements, llegir-ne les propietats, aïllar-los a la vista i dibuixar murs, portes, finestres, forjats, nivells i graelles, a través de CadCraft Studio. Desactivat fins que l'activeu.
keywords: ia, assistent, mcp, script, automatització, studio, troba elements, aïlla, propietats, permisos, desconnecta, activitat, dibuixa murs, afegeix portes, afegeix finestres, nivells, graelles, forjats, desfés, desa, línia d'ordres, cli, sense finestra, usa amb assistents d'IA
from: 66d72742
---

## Què aprendreu

Com deixar que un assistent d'IA (qualsevol assistent que parli MCP) miri dins del model IFC que teniu obert i hi dibuixi, què pot i què no pot fer, i com aturar-lo.

## Què pot fer un assistent a BimCraft

| Demana | Què passa | Necessita |
|---|---|---|
| Trobar elements | Obté una llista d'elements per classe, planta, nom o valor de propietat, tal com ho fa **Cerca** | Llegeix |
| Llegir propietats | Obté els atributs d'un element, el tipus, els conjunts de propietats i les quantitats, tal com els mostra **Propietats** | Llegeix |
| Descriure el model, llistar els murs | Obté els nivells, els murs, les portes, les finestres, les sales, els forjats, les graelles i les columnes, i els extrems, el tipus i l'alçada de cada mur | Llegeix |
| Aïllar, fer transparent, amagar o mostrar | La vista 3D canvia com si haguéssiu usat el menú {{ui:Mostra}} | Canvia la vista i dibuixa |
| Dibuixar murs, portes, finestres, forjats, nivells o línies de graella | El model canvia com si haguéssiu usat les eines de {{ui:Dibuixa}}: els murs s'uneixen, i les sales, els forjats i les cobertes se n'adapten | Canvia la vista i dibuixa |
| Canviar un nom o un valor de propietat | El nom, la descripció, el tipus d'objecte o l'etiqueta d'un element, o el valor d'una propietat. Un valor que comparteixen altres elements es copia primer per a ell; un valor del seu tipus només canvia quan l'assistent ho indica, perquè cada element d'aquest tipus en fa el seguiment | Canvia la vista i dibuixa |
| Moure, suprimir, canviar murs, portes i finestres | Els elements es mouen o se suprimeixen amb els que allotgen; els murs dibuixats amb les eines de {{ui:Dibuixa}} canvien pels seus extrems o tipus, les portes i finestres pel seu lloc, mida o tipus, i les sales i les unions se n'adapten | Canvia la vista i dibuixa |
| Preparar, organitzar i llegir un quadre | "Un quadre de portes per planta, amb resistència al foc i ferreteria": l'assistent en dona el nom, les columnes (una propietat o una etiqueta es converteix en columna) i l'agrupació; BimCraft l'omple des del model i el disposa, i pren de l'estàndard de l'estudi allò que l'assistent no ha indicat. La configuració s'afegeix a la llista de **Quadres**. Cada línia que rep conté els seus elements, de manera que pot seleccionar-los | Llegeix per llegir; Canvia la vista i dibuixa per desar una configuració |
| Exportar un quadre | CSV, Excel o text separat per tabuladors per enganxar a Google Sheets (no s'envia res a Google) | Exporta |
| Llegir i definir els acabats de les sales | Els tipus d'acabat, l'acabat del terra, de la paret i del sostre de cada sala, i les zones; les àrees, els recomptes de rajoles i els volums del suport es treuen després dels quadres d'acabats | Llegeix; Canvia la vista i dibuixa per definir-los |
| Seleccionar elements, desfer els seus propis passos | Els elements es trien a la vista; se'n desfa l'últim pas | Canvia la vista i dibuixa |
| Desar | Un fitxer IFC nou amb tots els canvis, tal com ho fa {{ui:Desa com a IFC}} (l'original no es canvia mai) | Desa |
| Exportar USD | Els models oberts com a OpenUSD (.usda, .usdc o .usdz), tal com ho escriu {{ui:USD}} a la barra d'eines | Exporta |
| Renderitzar una imatge, executar la cua de renderitzat | Una imatge de la vista 3D, tal com la fa el diàleg {{ui:Renderitza}} amb la vostra configuració de renderitzat, tret que demani altres, o imatges d'alta qualitat afegides a la cua del diàleg i renderitzades una rere l'altra (la cua necessita WebGPU). El model no canvia res ([Renderitza una imatge](topic:render)) | Exporta |

Cada canvi que fa un assistent és un pas de **Canvis**, amb el nom "Assistent: …" (per exemple "Assistent: afegeix 4 murs"), de manera que {{key:Mod+Z}} desfà tota la seva acció, i podeu veure de qui és cada pas. A la finestra no pot obrir fitxers: obriu el model, i treballa amb el que està obert.

## Activeu-ho

Els assistents arriben a BimCraft a través de CadCraft Studio al vostre ordinador; el navegador normal no hi té accés.

1. Obriu {{ui:Configuració}} i trieu la pestanya **BimCraft**.
2. Sota **Assistents**, marqueu **Permet que els assistents d'IA i els scripts usin BimCraft**.
3. **Llegeix** ja està marcat. Marqueu també **Canvia la vista i dibuixa** si l'assistent pot aïllar i amagar elements i dibuixar, i **Desa** si pot desar el model com a fitxer nou.
4. Connecteu l'assistent a Studio (Studio mostra l'adreça i la configuració que cal enganxar-hi).

## Mentre hi ha un assistent connectat

Una nota a dalt del panell dret indica quin assistent està connectat i què pot fer. Feu clic a {{ui:Desconnecta}} per acabar-ne la sessió de seguida; haurà de tornar a connectar-se per continuar.

**Activitat**, sota **Assistents** a Configuració, enumera totes les crides que ha fet l'assistent, les més recents primer, i si han funcionat.

:::tip
Demaneu-ho en paraules senzilles, per exemple "aïlla els murs exteriors del nivell 1", "quines portes no tenen classificació de foc?" o "dibuixa una sala de 6 per 4 metres al nivell 1 amb una porta al mur sud". L'assistent troba els elements i els mostra a la vista, o els dibuixa.
:::

## Sense finestra: scripts i línia d'ordres

Les mateixes eines de dibuix funcionen amb fitxers IFC de les carpetes que indiqueu, sense cap finestra oberta: el servidor MCP i la línia d'ordres de CadCraft poden començar un edifici nou o obrir un fitxer IFC, descriure'l, afegir-hi murs, portes, finestres, forjats, nivells i graelles, desfer els canvis i desar-lo com a fitxer `.ifc` nou. Quatre eines més serveixen per a scripts: `ifc_batch` executa fins a 200 passos d'edició com un de sol (tot o res: un sol desfer n'endarrereix tot el lot, i un pas rebutjat desfà la resta i n'indica el nom); `ifc_describe` enumera els nivells i cada mur amb les seves portes i finestres; `ifc_render_png` escriu una imatge de comprovació amb ombrejat pla del model (sense materials, textures ni ombres) sense finestra; `usd_export` escriu `.usda`, `.usdc` o `.usdz`. A la línia d'ordres, `cadcraft bim script.json --from model.ifc -o out.ifc` executa un script de passos, i `--usd`, `--png` i `--plan` escriuen un fitxer USD, una imatge o un plànol de la mateixa execució. Vosaltres decidiu quines carpetes pot usar i si pot canviar o desar alguna cosa.

## Desactiveu-ho

Desmarqueu **Permet que els assistents d'IA i els scripts usin BimCraft**. Tots els assistents es desconnecten de seguida, i la configuració es manté per a la pròxima vegada.

## Vegeu també

- [Receptes per a assistents d'IA](common:assistants-recipes): exemples treballats, cadascun amb les eines que crida.
- [Troba elements per classe, nom o propietat](topic:find)
- [Amaga, aïlla i fes transparents els elements](topic:hide-and-isolate)
- [Configuració de BimCraft](topic:settings)
