---
title: Laat 'n KI-assistent met jou model werk
summary: Skakel assistente aan in Instellings sodat 'n assistent op jou rekenaar elemente kan vind, hul eienskappe kan lees, hulle in die aansig kan isoleer en mure, deure, vensters, vloere, vlakke en roosters kan teken, deur CadCraft Studio. Af totdat jy dit aanskakel.
keywords: ki, assistent, mcp, skrip, outomatisering, studio, vind elemente, isoleer, eienskappe, toestemmings, ontkoppel, aktiwiteit, teken mure, voeg deure by, voeg vensters by, vlakke, roosters, vloere, ontdoen, stoor, opdragreël, cli, koplose, gebruik met KI-assistente
from: 66d72742
---

## Wat jy sal leer

Hoe jy 'n KI-assistent (enige assistent wat MCP praat) toelaat om na die IFC-model wat jy oop het te kyk en daarin te teken, wat dit kan en nie kan doen nie, en hoe om dit te stop.

## Wat 'n assistent in BimCraft kan doen

| Dit vra om | Wat gebeur | Benodig |
|---|---|---|
| Vind elemente | Dit kry 'n lys elemente volgens klas, verdieping, naam of eienskapwaarde, soos **Soek** dit doen | Lees |
| Lees eienskappe | Dit kry een element se eienskappe, tipe, eienskapstelle en hoeveelhede, soos **Eienskappe** dit wys | Lees |
| Beskryf die model, lys mure | Dit kry die vlakke, mure, deure, vensters, vertrekke, vloere, roosters en kolomme, en elke muur se eindpunte, tipe en hoogte | Lees |
| Isoleer, deursigtig maak, verberg of wys | Die 3D-aansig verander asof jy die {{ui:Wys}}-kieslys gebruik het | Verander die aansig en teken |
| Teken mure, deure, vensters, vloere, vlakke of roosterlyne | Die model verander asof jy die {{ui:Teken}}-gereedskap gebruik het: mure sluit aan, en vertrekke, vloere en dakke volg | Verander die aansig en teken |
| Verander 'n naam of 'n eienskapwaarde | Een element se Naam, Beskrywing, Voorwerptipe of Etiket, of een eienskapwaarde. 'n Waarde wat dit met ander elemente deel, word eers vir dit gekopieer; 'n waarde van sy tipe verander slegs wanneer die assistent dit sê, omdat elke element van daardie tipe volg | Verander die aansig en teken |
| Skuif, skrap, verander mure, deure en vensters | Elemente skuif of word geskrap saam met wat hulle huisves; mure wat met die {{ui:Teken}}-gereedskap geteken is, verander volgens hul eindpunte of tipe, deure en vensters volgens hul plek, grootte of tipe, en vertrekke en verbindings volg | Verander die aansig en teken |
| Stel 'n skedule op, rangskik dit en lees dit | "'n Deurskedule volgens verdieping, met brandgradering en beslaggoed": die assistent noem die skedule, sy kolomme ('n eienskap of etiket word 'n kolom) en sy groepering; BimCraft vul dit uit die model en lê dit uit, en neem wat die assistent nie gesê het nie uit die kantoorstandaard. Die opstelling sluit by jou Skedules-lys aan. Elke reël wat dit terugkry noem sy elemente, sodat dit hulle kan kies | Lees om te lees; Verander die aansig en teken om 'n opstelling te stoor |
| Voer 'n skedule uit | CSV, Excel, of tab-geskeide teks om in Google Sheets te plak (niks word na Google gestuur nie) | Voer uit |
| Lees en stel vertrekafwerkings | Die afwerkingstipes, elke vertrek se vloer-, muur- en plafonafwerking, sones; oppervlaktes, teltings van teëls en volumes van onderlaag kom dan uit die afwerkingskedules | Lees; Verander die aansig en teken om in te stel |
| Kies elemente, ontdoen sy eie stappe | Elemente word in die aansig gekies; sy laaste stap word teruggeneem | Verander die aansig en teken |
| Stoor | 'n Nuwe IFC-lêer met elke verandering, soos {{ui:Stoor as IFC}} dit maak (die oorspronklike word nooit verander nie) | Stoor |
| Voer USD uit | Die oop modelle as OpenUSD (.usda, .usdc of .usdz), soos {{ui:USD}} op die werkbalk dit skryf | Voer uit |
| Weergee 'n prent, laat die weergeery loop | 'n Prent van die 3D-aansig, soos die {{ui:Weergee}}-dialoog dit maak met jou Weergee-instellings tensy dit om ander vra, of hoëgehalte-prente wat by die dialoog se ry gevoeg en een na die ander weergegee word (die ry benodig WebGPU). Niks in die model verander nie ([Weergee 'n prent](topic:render)) | Voer uit |

Elke verandering wat 'n assistent maak, is een stap in **Veranderinge**, genoem "Assistent: …" (byvoorbeeld "Assistent: voeg 4 mure by"), sodat {{key:Mod+Z}} sy hele aksie terugneem, en jy kan sien wie se stap dit was. In die venster kan dit nie lêers oopmaak nie: jy maak die model oop; dit werk met die een wat oop is.

## Skakel dit aan

Assistente bereik BimCraft deur CadCraft Studio op jou rekenaar; die gewone blaaier het geen manier om in te kom nie.

1. Maak {{ui:Instellings}} oop en kies die **BimCraft**-oortjie.
2. Onder **Assistente**, merk **Laat KI-assistente en skripte BimCraft gebruik**.
3. **Lees** is vir jou gemerk. Merk ook **Verander die aansig en teken** as die assistent elemente mag isoleer en verberg en teken, en **Stoor** as dit die model as 'n nuwe lêer mag stoor.
4. Koppel die assistent in Studio (Studio wys die adres en die instellings om daarin te plak).

## Terwyl 'n assistent gekoppel is

'n Nota bo-aan die regterpaneel sê watter assistent gekoppel is en wat dit kan doen. Klik {{ui:Ontkoppel}} om sy sessie onmiddellik te beëindig; dit moet weer koppel om voort te gaan.

**Aktiwiteit**, onder **Assistente** in Instellings, lys elke oproep wat die assistent gemaak het, nuutste eerste, met of dit gewerk het.

:::tip
Vra in gewone woorde, byvoorbeeld "isoleer die buitemure op Vlak 1", "watter deure het geen brandgradering nie?" of "teken 'n 6 by 4 meter vertrek op Vlak 1 met 'n deur in die suidmuur". Die assistent vind die elemente en wys hulle in jou aansig, of teken hulle.
:::

## Sonder 'n venster: skripte en die opdragreël

Dieselfde tekengereedskap werk op IFC-lêers in vouers wat jy noem, sonder 'n oop venster: CadCraft se MCP-bediener en opdragreël kan 'n nuwe gebou begin of 'n IFC-lêer oopmaak, dit beskryf, mure, deure, vensters, vloere, vlakke en roosters byvoeg, dit ontdoen en as 'n nuwe `.ifc`-lêer stoor. Vier meer gereedskapstukke pas by skripte: `ifc_batch` voer tot 200 wysigingstappe as een uit (alles of niks: een ontdoening neem die hele bondel terug, en 'n geweigerde stap ontdoen die res en noem die stap); `ifc_describe` lys die vlakke en elke muur met sy deure en vensters; `ifc_render_png` skryf 'n plat-geskaduwe kontrolerprent van die model (geen materiale, teksture of skaduwees) sonder 'n venster; `usd_export` skryf `.usda`, `.usdc` of `.usdz`. Op die opdragreël voer `cadcraft bim script.json --from model.ifc -o out.ifc` 'n skrip van stappe uit, en `--usd`, `--png` en `--plan` skryf 'n USD-lêer, 'n prent of 'n plan uit dieselfde lopie. Jy bepaal watter vouers dit mag gebruik en of dit enigiets mag verander of stoor.

## Skakel dit af

Ontmerk **Laat KI-assistente en skripte BimCraft gebruik**. Elke assistent word dadelik ontkoppel, en die instelling word vir die volgende keer behou.

## Sien ook

- [Resepte vir KI-assistente](common:assistants-recipes): uitgewerkte voorbeelde, elk met die gereedskap wat dit roep.
- [Vind elemente volgens klas, naam of eienskap](topic:find)
- [Verberg, isoleer en maak elemente deursigtig](topic:hide-and-isolate)
- [BimCraft-instellings](topic:settings)
