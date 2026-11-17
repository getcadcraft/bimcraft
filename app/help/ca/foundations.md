---
title: Fonamentacions sota els murs
summary: Col·loqueu una llosa sobre el terreny, murs de base amb llosa, un espai reptador o un soterrani sota un edifici amb un clic; les sabates es dimensionen a partir dels murs i del nombre de plantes, i la fonamentació se segueix quan els murs es mouen.
keywords: fonamentació, sabata, llosa sobre el terreny, vora engrossida, llosa monolítica, mur de base, espai reptador, soterrani, mur de soterrani, gelada, formigó, amplada de la sabata
from: c0e20172
---

## Què fareu

Doneu a l'edifici una fonamentació que coincideixi amb els seus murs. BimCraft segueix l'exterior dels murs, dimensiona les sabates segons el tipus de mur i quantes plantes hi descansen, i la torna a fer cada cop que els murs canvien.

## Posa una fonamentació

1. A la planta on hi descansen els murs (normalment la primera), obriu {{ui:Compilació}} i trieu {{ui:Fonamentació}}.
2. Trieu el tipus:
   - **Llosa sobre el terreny**: una llosa de formigó de 4" la part superior de la qual és el terra, amb una vora engrossida sota els murs.
   - **Murs de base i llosa**: murs de fonamentació fins al terra sobre sabates, amb una llosa a dins.
   - **Espai reptador**: murs de fonamentació que s'aturen sota l'entramat del terra, sobre sabates, sense llosa.
   - **Soterrani**: murs de fonamentació d'alçada completa sobre sabates, amb una llosa de soterrani, sota l'entramat del terra.
3. Assenyaleu dins de l'edifici: les sabates es mostren discontínues amb la seva mida. Feu clic.

Fer clic en un edifici que ja té fonamentació la selecciona, així que la podeu canviar en lloc d'afegir-ne una segona.

## Canvieu-la

Seleccioneu la fonamentació (feu clic dins de l'edifici amb {{ui:Fonamentació}}, o feu clic a qualsevol de les seves parts a la vista 3D o a l'arbre del model) i canvieu-la a **Propietats**: el tipus, l'amplada i la profunditat de la sabata, la profunditat de la cara inferior de la sabata, el gruix del mur, quant per sota del terra s'aturen els murs, l'alçada del soterrani i el gruix de la llosa. Cada canvi és un sol pas per desfer.

Les mides marcades **auto** provenen dels murs: sabates de 12", 15" o 23" d'amplada per a una, dues o tres plantes sobre llosa o murs de base; de 18", 22" o 27" sobre un espai reptador o un soterrani; i 4" més amples sota murs de maçoneria o de formigó. Escriviu una mida per fixar-ne la vostra; escriviu `0` per tornar a **auto**.

:::warning
Les mides automàtiques són valors per defecte etiquetats per a cases lleugeres típiques, no són càlcul d'enginyeria. Un dissenyador o un enginyer comprova les sabates, les profunditats i els murs segons el terreny, la profunditat de gelada i les càrregues.
:::

## Què es desa

Una fonamentació es desa com a conjunt d'elements IFC («Foundation») format per una sabata (o per la vora engrossida d'una llosa), un mur de fonamentació i una llosa segons el que necessiti el seu tipus, tot de formigó, cadascun amb les seves quantitats: longituds, amplades, alçades, àrees i volums, a punt per als amidaments.

## Bones de saber

- Moure, afegir o suprimir murs torna a fer la fonamentació que hi ha sota; dibuixar murs a la planta de sobre eixampla les sabates de sota per a la planta addicional.
- {{key:Delete}} suprimeix una fonamentació triada amb totes les seves parts.
- Amb el terreny del lloc al model (vegeu [El terreny del lloc, la plataforma de l'edifici i el paviment](topic:terrain)), els murs de base i les sabates de l'espai reptador baixen amb ell en graons de 8".
- Les sabates sota els murs interiors encara no estan implementades.
