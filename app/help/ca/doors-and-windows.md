---
title: Portes i finestres
summary: "Poseu portes i finestres en murs dibuixats: apunteu un mur, veieu el sentit d'obertura i les distàncies als cantons, feu clic; l'obertura del mur es talla sola."
keywords: porta, portes, finestra, finestres, obertura, sentit, frontissa, inverteix, porta corredissa, porta de cassetó, porta de garatge, porta doble, batent, guillotina, guillotina doble, corredera, finestra fixa, ampit, llinda, plegable, porta d'armari, portes franceses, porta de granja, llums laterals, porta d'entrada, finestra de tombar, finestra panoràmica, travessany
from: 4d8ac009
---

## Què farà

Poseu portes i finestres en murs que heu dibuixat ([Dibuixa murs](topic:draw-walls)). Apunteu un mur i la porta o la finestra mostra on aniria, cap a quin costat obre i quina distància hi ha a cada cantó. Feu clic, i l'obertura es talla sola del mur, al plànol i en 3D.

## Col·loca una porta

1. Amb {{ui:Dibuixa}} activat, feu clic a {{ui:Porta}} (o premeu {{key:D}}).
2. Trieu el tipus: **Porta batent simple**, **Porta batent doble**, **Porta corredissa**, **Porta de cassetó**, **Porta de garatge**, **Porta plegable d'armari**, **Portes franceses**, **Porta de granja (sobre el mur)** o **Porta d'entrada amb llums laterals**. La seva mida habitual omple **W** i **H**; trieu-ne una altra de la llista de mides al costat, o escriviu-ne d'altres, per exemple `2'-8"` o `800`. La llista també ofereix les famílies de portes d'aquest model (vegeu [Famílies i les seves mides](topic:families)).
3. Apunteu un mur. El símbol de la porta segueix el punter al llarg del mur, i la distància des de cada extrem d'aquella cara apareix al plànol.
4. La porta obre cap al costat del mur on és el punter. Premeu {{key:H}} (o feu clic a {{ui:Inverteix}}) per posar les frontisses a l'altre extrem.
5. Feu clic. La porta es col·loca i l'eina queda activa per a la següent. Apunteu al mig d'un mur i la porta es centra sola.

Per col·locar-la a una distància exacta, apunteu el mur a prop del cantó des del qual mesureu, escriviu la distància (per exemple `2'` o `600`) i premeu {{key:Enter}}. La distància va des de l'extrem més proper de la cara del mur fins a la vora de la porta.

## Col·loca una finestra

1. Feu clic a {{ui:Finestra}} (o premeu {{key:N}}).
2. Trieu el tipus: **Finestra fixa**, **Finestra guillotina simple**, **Finestra guillotina doble**, **Finestra batent**, **Finestra corredissa**, **Finestra de tombar**, **Finestra panoràmica** o **Llum superior**, i la seva **W**, **H** i **Ampit** (l'alçada de la part inferior de la finestra sobre el terra).
3. Apunteu un mur i feu clic, o escriviu una distància i premeu {{key:Enter}} com per a les portes. Una finestra es col·loca a l'exterior del mur.

## Mou, inverteix, suprimeix

- Amb {{ui:Selecciona}} activat, arrossegueu una porta o una finestra al llarg del seu mur. Arrossegueu-la a un altre mur per moure-la allà.
- {{key:Delete}} suprimeix les portes i finestres seleccionades; el mur es tanca.
- Moure o suprimir un mur mou o suprimeix el que hi ha dins. Quan l'inici d'un mur es mou al llarg de la seva pròpia línia, les seves portes i finestres mantenen el seu lloc.
- {{ui:Desfés}} i {{ui:Refés}} desfan i refan cada col·locació, moviment o supressió.

## Què es rebutja

- **No hi cap en aquest mur.** La porta o la finestra és més ampla que el mur, o sortiria per un dels seus extrems. Proveu una amplada més petita o un mur més llarg.
- **És més alta que el mur.** L'ampit més l'alçada és per sobre de la part superior del mur.

## Què es desa

Cada porta o finestra és una porta o finestra IFC amb la seva mida, la seva operació (per exemple batent simple a l'esquerra), el seu tipus de mida (un tipus per cada mida de la seva família), `Pset_DoorCommon` o `Pset_WindowCommon` i quantitats de base, que omple una obertura IFC al seu mur. L'àrea neta del mur i el seu volum deixen fora l'obertura. Altres programes BIM l'obren com una porta en un mur.

## Bon a saber

- El plànol mostra les portes obertes a 90° amb el seu sentit, les portes corredisses com dos panells, les portes de cassetó corrent dins del mur, les portes de garatge com una línia discontínua per sobre, i les finestres amb el seu marc i les línies de vidre.
- L'amplada és l'amplada total del marc; la fulla de la porta és l'amplada menys els dos brancals.
- Copiar portes i finestres dibuixades encara no està implementat: col·loqueu-ne una altra.

## Finestra d'evacuació de soterrani i pou

Trieu **Finestra d'evacuació de soterrani amb pou** a la llista de tipus de finestra. Comença com una finestra batent de 36 × 48 polzades amb un ampit de 36 polzades per sobre del nivell. El pou és a l'exterior del mur, amb almenys 48 polzades d'amplada lliure, 36 polzades de sortint i un fons 6 polzades per sota de l'ampit. Apareix com a línies discontínues al plànol i com a tres costats oberts per dalt en 3D. El pou forma part del cos IFC de la finestra, de manera que desar, moure, redimensionar o suprimir la finestra se l'emporta. En redimensionar es mantenen almenys 6 polzades a cada brancal.

Són valors de modelatge per defecte, no una certificació de compliment de sortida d'emergència. Comproveu per separat l'obertura lliure real del fabricant, els requisits locals, el terreny, el drenatge i qualsevol escala necessària. La profunditat i l'alçada del pou són dimensions predefinides; no segueixen el terreny.
