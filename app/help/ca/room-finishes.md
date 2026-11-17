---
title: Acabats de sala i quadres d'acabats
summary: Indiqueu què cobreix el terra, els murs i el sostre de cada sala, afegiu zones com un revestiment de taulell amb rajola, i obteniu quadres d'acabats per sala, mur i zona, amb àrees, recomptes de rajoles (incloses les talls) i volums de suport.
keywords: acabat, acabats, quadre d'acabats, acabats de sala, acabat de terra, acabat de mur, acabat de sostre, sòcol, rajola, rajoles, rajoles tallades, recompte de rajoles, pèrdua, suport, capa de morter, placa de suport, guix, zona, revestiment de taulell, franja de revestiment, zona humida, interior, quantitats
from: 8c30498c
---

## Què farà

Indiqueu a BimCraft una vegada en què s'acaba cada sala. Els quadres d'acabats llavors donen les àrees, les rajoles a encarregar i els volums de suport, i canvien amb el model.

## Passos

1. Activeu {{ui:Dibuixa}}, obriu **Quadres** al tauler de l'esquerra i feu clic a **Acabats de sala**.
2. Sota **Tipus d'acabat**, feu clic a **Afegeix un tipus d'acabat**. Doneu-li un nom, un tipus (Rajola, Làmina, Capa o Tauler) i un gruix. Per a una rajola, indiqueu-ne la llargada i l'amplada, la junta i un percentatge de pèrdua. Si hi ha alguna cosa sota l'acabat (una capa de morter, una placa de suport, una capa de guix), anomeneu-la a **Suport** i indiqueu-ne el gruix.
3. Sota **Sales**, trieu l'acabat de terra, de mur i de sostre de cada sala. Escriviu un nom de sòcol i la seva alçada si la sala en té.
4. Sota **Zones**, feu clic a **Afegeix una zona** per a una part d'una sala que rep un altre acabat:
   - una zona de **mur** és una franja entre dues alçades sobre el terra (un revestiment de taulell des de 0 fins a 1200, una franja de revestiment). És en tots els murs de la sala, o trieu els murs d'aquella sala al model i feu clic al botó **Activa** per limitar-la a aquests;
   - una zona de **terra** o de **sostre** és una àrea que escriviu. Es descompta de l'acabat propi de la sala.
5. Feu clic a **Desa**. És un sol pas de Desfés. Les longituds s'escriuen en les unitats del projecte.

## Els quadres

Quatre entrades s'afegeixen a la llista de Quadres:

- **Acabats per sala**: cada sala amb el seu acabat de terra, de mur i de sostre, les seves àrees, i el sòcol amb la seva longitud.
- **Acabats per mur**: cada tram de mur de la cara de la sala i la franja que cobreix un acabat, amb la longitud, l'àrea bruta, els descomptes, l'àrea neta i, per a les rajoles, les rajoles senceres, les tallades i les rajoles a encarregar.
- **Acabats per zona**: cada zona amb el seu acabat, àrea neta, rajoles i volum de suport.
- **Quantitats d'acabats**: una fila per acabat: àrea neta, rajoles senceres i tallades, rajoles a encarregar, el suport i el seu volum, i el volum propi de l'acabat.

Agrupeu, totalitzeu, deseu i exporteu-los com qualsevol quadre: vegeu [Disposa, desa i exporta un quadre](topic:schedule-layouts). Feu clic en una xifra per seleccionar d'on ve: els descomptes d'un mur seleccionen les seves portes i finestres.

## Com es mesuren els acabats

- **Murs**: cada tram de mur de la cara de la sala, la seva longitud al llarg de la sala multiplicada per l'alçada que cobreix l'acabat, menys la part de cada porta i finestra dins d'aquesta alçada. Un mur més baix que la sala s'acaba fins a la seva pròpia part superior. El mètode de mesura del projecte decideix quines obertures són massa petites per descomptar-les ([Quadres](topic:plan-schedules-and-pdf)).
- **Terres i sostres**: la sala dins de les cares interiors dels murs, menys les illes que hi ha.
- **Sòcols**: la longitud de mur de la sala menys l'amplada de les portes.
- **Rajoles**: col·locades en una quadrícula des d'un cantó de la superfície, amb una junta entre rajoles. Una rajola totalment sobre la superfície és una rajola sencera; una rajola parcialment sobre ella (a una vora, al voltant d'una obertura) és una rajola tallada. Les rajoles a encarregar són les senceres més les tallades, més la pèrdua, arrodonides amunt. Cada rajola tallada es compta com una rajola nova: els retalls no es reutilitzen.
- **Volum de suport**: l'àrea neta multiplicada pel gruix del suport.
- Un recompte marcat amb **≈** es calcula a partir de l'àrea en lloc de col·locar-lo rajola a rajola: una superfície amb una zona escrita descomptada, o una de molt gran.

## Bo de saber

- Els acabats es guarden al fitxer de l'edifici (conjunt de propietats `CadCraft_Finishes` del projecte). Cada sala que té un acabat rep també el conjunt de propietats estàndard d'IFC `Pset_SpaceCoveringRequirements`, perquè altres programes llegeixin els noms.
- La distribució de rajoles comença en un cantó. No es calcula una distribució centrada a la sala, un patró (espiga, aparell de maó) ni la reutilització de retalls.
- Un mur corbat, i un límit de sala que no és un mur (un separador de sala), apareix com a **Altre límit** amb la seva longitud i sense obertures.
- L'entrada **Acabats** que hi havia abans llista les capes d'acabat dels tipus de mur; **Capes: àrea i volum** llista cada capa de cada tipus amb capes. Els acabats de sala d'aquí són el que s'aplica a la sala per sobre d'aquells.
- Un assistent pot definir els acabats per a vosaltres amb `finishes_set`: vegeu [Deixa que un assistent d'IA treballi amb el vostre model](topic:assistants).
