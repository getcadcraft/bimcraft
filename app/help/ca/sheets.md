---
title: Alçats, seccions i fulls
summary: Dibuixeu línies de secció a la planta i després obriu Fulls per tenir un joc de fulls a punt per imprimir a partir del model: plantes de cada nivell, els quatre alçats, seccions d'edifici, quadres i entramats de paret, amb caixetins i escales, en un sol PDF.
keywords: fulls, joc de dibuixos, documents de construcció, imprimeix, traça, pdf, alçat, alçats, alçat nord, secció, secció d'edifici, línia de secció, tall, línies ocultes, caixetí, número de full, escala, 1/4" = 1'-0", 1:50, 1:100, paper, 11x17, 24x36, A3, A1, joc per a llicència
from: 91ed0cde
---

## Què hi fareu

Feu un joc de dibuixos a partir del model: la planta de cada nivell, els alçats nord, est, sud i oest, una secció d'edifici per a cada línia de secció, els quadres de portes, finestres, sales i fusta, i un alçat de cada paret amb entramat. El joc es torna a dibuixar a partir del model cada vegada que l'obriu, de manera que sempre coincideix amb el que heu construït.

## Dibuixeu una línia de secció

1. En un nivell, obriu {{ui:Compilació}} i trieu {{ui:Línia de secció}}.
2. Cliqueu on comença la línia i on acaba. La línia curta del mig indica el costat cap al qual mira la secció: l'esquerra de la línia, en anar del primer clic al segon.
3. La línia es veu a la planta amb els seus caps i la seva lletra (A, després B, i així successivament).

Seleccioneu la línia per canviar-la a **Propietats**: la seva lletra, **Inverteix la vista** per mirar en sentit contrari, i **Mira fins a** per aturar la vista a una distància determinada darrere del tall (0 mostra tot el que hi ha darrere). Premeu {{key:Delete}} per eliminar-la.

## Obriu els fulls

1. Cliqueu {{ui:Fulls}} a la barra del model (al costat de {{ui:Imprimeix}}).
2. Els fulls es llisten a l'esquerra: **A-101** i següents per a les plantes, **A-201** per als alçats, **A-301** per a les seccions, **A-401** per als quadres i **S-101** per a l'entramat de les parets. Cliqueu-ne un per veure'l.
3. Trieu el **Paper**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 o A1. El paper manté el seu nom estàndard i la seva mida s'escriu en les {{ui:Unitats}} que heu triat, per exemple *Letter · 8.5 × 11 in* o *A3 · 297 × 420 mm*.
4. Cliqueu {{ui:Baixa el conjunt en PDF}}: una pàgina per full.

## Notes estàndard d'un paquet normatiu

En un full, {{ui:Notes estàndard}} permet col·locar notes d'un paquet normatiu (per disciplina) a la columna de la dreta del full. Cada nota conserva el paquet i la clàusula d'on procedeix, i el full imprès indica quan el paquet no està verificat. Les notes són un punt de partida: la persona responsable del plànol decideix què diuen. Necessiten el complement Building regulations.

## Què hi ha als fulls

- **Les plantes** mostren murs, portes, finestres, sales amb les seves àrees, cotes i línies de secció, a l'escala estàndard més gran que hi càpiga: 1/4" = 1'-0" o més petita (1:50 o més petita en mil·límetres).
- **Els alçats** es dibuixen a partir del model 3D amb les línies ocultes eliminades, dos per full, tots a la mateixa escala, amb una línia de terra a sota. La coberta, les fonamentacions i el terreny es mostren tal com s'han modelat.
- **Les seccions** omplen allò que travessa el tall (murs, forjats, la coberta) i dibuixen el que es veu més enllà.
- **Els alçats i les seccions porten les seves notes:** una marca per a cada nivell amb el seu nom i la seva alçada a la dreta, l'alçada entre nivells a l'esquerra, i en un alçat l'amplada de l'edifici a sota i una etiqueta (D1, W1) a cada porta i finestra d'una paret que us mira. Per a les parets pròpies d'una sala, vegeu [Alçats interiors](topic:interior-elevations).
- **Els quadres** són les mateixes taules que {{ui:Quadres}} a la barra del model.
- **L'entramat** mostra els muntants, les soleres, els dintells i els ampits de cada paret amb entramat tal com es veuen des del seu exterior, perquè una brigada pugui replantejar-la. Vegeu [Entramat de parets, forjats i cobertes](topic:framing).

Cada full té un caixetí amb el seu número, el seu títol, el nom del fitxer i la data.

:::tip
Els fulls surten del model: per canviar un dibuix, canvieu el model i torneu a obrir {{ui:Fulls}}.
:::

:::note
Els alçats i les seccions només mostren línies i farcits: les cotes, les marques de nivell i les notes sobre ells encara no estan implementades.
:::
