---
title: Laat 'n KI-assistent met jou model werk
summary: Skakel assistente in Instellings aan sodat 'n assistent op jou rekenaar elemente kan vind, hul eienskappe kan lees, hulle in die aansig kan isoleer en mure, deure, vensters, vloere, vlakke en roosters kan teken, deur CadCraft Studio. Af totdat jy dit aanskakel.
keywords: ki, assistent, mcp, skrip, outomatisering, studio, vind elemente, isoleer, eienskappe, toestemmings, ontkoppel, aktiwiteit, teken mure, voeg deure by, voeg vensters by, vlakke, roosters, vloere, ontdoen, stoor, opdragreël, cli, sonder venster, gebruik met KI-assistente
from: c5ee595b
---

## Wat jy sal leer

Hoe om 'n KI-assistent (enige assistent wat MCP praat) die IFC-model wat jy oop het te laat ondersoek en daarin te laat teken, wat dit kan en nie kan doen nie, en hoe om dit te stop.

## Wat 'n assistent in BimCraft kan doen

| Dit vra om | Wat gebeur | Benodig |
|---|---|---|
| Elemente vind | Dit kry 'n lys elemente volgens klas, verdieping, naam of eienskapwaarde, soos **Vind** doen | Lees |
| Eienskappe lees | Dit kry een element se eienskappe, tipe, eienskapstelle en hoeveelhede, soos **Eienskappe** dit wys | Lees |
| Beskryf die model, lys mure | Dit kry die vlakke, mure, deure, vensters, vertrekke, vloere, roosters en kolomme, en elke muur se punte, tipe en hoogte | Lees |
| Isoleer, deurskynend, versteek of wys | Die 3D-aansig verander soos as jy die {{ui:Wys}}-kieslys gebruik het | Verander aansig en teken |
| Teken mure, deure, vensters, vloere, vlakke of roosterlyne | Die model verander soos as jy die {{ui:Teken}}-gereedskap gebruik het: mure sluit aan, en vertrekke, vloere en dakke volg | Verander aansig en teken |
| Verander 'n naam of 'n eienskapwaarde | Een element se Naam, Beskrywing, Objektipe of Etiket, of een eienskapwaarde. 'n Waarde wat dit met ander elemente deel, word eers vir dit gekopieer; 'n waarde van sy tipe verander slegs as die assistent dit sê, omdat elke element van daardie tipe volg | Verander aansig en teken |
| Skuif, skrap, verander mure, deure en vensters | Elemente skuif of word geskrap saam met wat hulle host; mure wat met die {{ui:Teken}}-gereedskap getekend is, verander volgens hul punte of tipe, deure en vensters volgens hul plek, grootte of tipe, en vertrekke en verbindings volg | Verander aansig en teken |
| Stel op, rangskik en lees 'n skedule | "'n Deurskedule volgens vloer, met vuurgradering en beslag": die assistent noem die skedule, sy kolomme ('n eienskap of etiket word 'n kolom) en sy groepering; BimCraft vul dit uit die model en rangskik dit, en neem wat die assistent nie gesê het nie uit die kantoorstandaard. Die opstelling voeg by jou Skedules-lys. Elke reël wat dit terugkry, noem sy elemente, sodat dit hulle kan kies | Lees om te lees; Verander aansig en teken om 'n opstelling te stoor |
| Voer 'n skedule uit | CSV, Excel, of tab-geskeide teks om in Google Sheets te plak (niks word na Google gestuur nie) | Uitvoer |
| Lees en stel vertrekafwerkings | Die afwerkingstipes, elke vertrek se vloer-, muur- en plafondafwerking, sones; oppervlaktes, teëltellings en substraatvolumes kom dan uit die afwerkingskedules | Lees; Verander aansig en teken om te stel |
| Kies elemente, ontdoen sy eie stappe | Elemente word in die aansig gekies; sy laaste stap word teruggeneem | Verander aansig en teken |
| Stoor | 'n Nuwe IFC-lêer met elke verandering, soos {{ui:Stoor as IFC}} dit maak (die oorspronklike word nooit verander nie) | Stoor |
| Voer USD uit | Die oop modelle as OpenUSD (.usda, .usdc of .usdz), soos {{ui:USD}} op die nutsbalk dit skryf | Uitvoer |
| Render 'n prent, laat die renderrij loop | 'n Prent van die 3D-aansig, soos die {{ui:Render}}-dialoog dit maak met jou Render-instellings tensy dit om ander vra, of hoëgehalte-prente by die dialoog se rij gevoeg en een na die ander gerender (die rij benodig WebGPU). Niks in die model verander nie ([Render 'n prent](topic:render)) | Uitvoer |

Elke verandering wat 'n assistent maak, is een stap in **Veranderinge**, genoem "Assistent: …" (byvoorbeeld "Assistent: voeg 4 mure by"), so {{key:Mod+Z}} neem sy hele aksie terug, en jy kan sien wie se stap dit was. In die venster kan dit nie lêers oopmaak nie: jy maak die model oop; dit werk met die een wat oop is.

## Skakel dit aan

Assistente bereik BimCraft deur CadCraft Studio op jou rekenaar; die gewone blaaier het geen toegang nie.

1. Open {{ui:Instellings}} en kies die **BimCraft**-oortjie.
2. Onder **Assistente**, merk **Laat KI-assistente en skrifte BimCraft gebruik**.
3. **Lees** is vir jou gemerk. Merk **Verander aansig en teken** ook as die assistent mag isoleer, versteek en teken, en **Stoor** as dit die model as 'n nuwe lêer mag stoor.
4. Koppel die assistent in Studio (Studio wys die adres en die instellings om in te plak).

## Terwyl 'n assistent gekoppel is

'n Nota bo-aan die regterpaneel sê watter assistent gekoppel is en wat dit kan doen. Klik {{ui:Ontkoppel}} om sy sessie dadelik te beëindig; dit moet weer koppel om voort te gaan.

**Aktiwiteit**, onder **Assistente** in Instellings, lys elke oproep wat die assistent gemaak het, nuutste eerste, met of dit gewerk het.

:::tip
Vra in gewone woorde, byvoorbeeld "isoleer die buitemure op Vlak 1", "watter deure het geen vuurgradering nie?" of "teken 'n 6 by 4 meter vertrek op Vlak 1 met 'n deur in die suidmuur". Die assistent vind die elemente en wys hulle in jou aansig, of teken hulle.
:::

## Sonder 'n venster: skrifte en die opdragreël

Dieselfde tekengereedskap werk op IFC-lêers in vouers wat jy noem, sonder dat 'n venster oop is: CadCraft se MCP-bediener en opdragreël kan 'n nuwe gebou begin of 'n IFC-lêer oopmaak, dit beskryf, mure, deure, vensters, vloere, vlakke en roosters byvoeg, dit ontdoen en as 'n nuwe `.ifc`-lêer stoor. Jy besluit watter vouers dit mag gebruik en of dit enigiets mag verander of stoor.

## Skakel dit af

Ontmerk **Laat KI-assistente en skrifte BimCraft gebruik**. Elke assistent word dadelik ontkoppel, en die instelling word vir volgende keer behou.

## Sien ook

- [Resepte vir KI-assistente](common:assistants-recipes): werkende voorbeelde, elk met die gereedskap wat dit roep.
- [Vind elemente volgens klas, naam of eienskap](topic:find)
- [Versteek, isoleer en maak elemente deurskynend](topic:hide-and-isolate)
- [BimCraft-instellings](topic:settings)
