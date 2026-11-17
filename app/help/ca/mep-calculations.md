---
title: Dimensiona canonades i conductes, comprova l'ompliment de cables i la il·luminació
summary: Comprova les mides de les canonades i conductes d'alimentació amb la pèrdua de pressió, encamina cables per safates i tubs de cables i veu el seu ompliment, i calcula la il·luminació de les sales a partir de fitxers IES o EULUMDAT. Els valors per defecte estan etiquetats; escriviu els valors del codi vigent.
keywords: dimensionament, dimensionament de canonades, dimensionament de conductes, pèrdua de pressió, unitats d'aparell, demanda, hunter, hazen-williams, velocitat, fricció, fricció igual, pressió del ventilador, comporta, camí crític, safata de cables, tub de cables, ompliment, quadre de cables, ies, ldt, eulumdat, fotometria, il·luminança, lux, uniformitat, càlcul d'il·luminació, densitat de potència, mep, càlculs, problemes
from: 9cb90815
---

## Què faràs

Dibuixeu les canonades, conductes, safates i tubs de cables com de costum, i després obriu el panell **Càlculs**. Cada pestanya llegeix el model, mostra una taula i llista el que és incorrecte com a Problemes al panell ⚠. Quan una mida corregiria un Problema, **Aplica les mides** canvia els trams en un sol pas de desfer.

Aquestes són eines de dibuix. Cada valor per defecte està etiquetat a la pantalla, i cap no és una taula de codi: escriviu els números de la norma amb què dissenyeu i feu revisar el resultat per l'enginyer que en respon.

## Canonades

1. Escolliu la clau del **sistema** (aigua freda és `cw`, aigua calenta `hw`).
2. Definiu la velocitat més alta i, si voleu que es comprovi la pressió, la pressió a la font i la pressió mínima que necessita un aparell.
3. Cliqueu {{ui:Comprova}}.

Cada canonada porta la demanda de les unitats d'aparell que hi ha per sota. La demanda surt d'una corba d'unitats d'aparell enfront del cabal, tal com la va descriure Hunter. **La corba integrada és un exemple, no una taula de codi**; els Problemes ho diuen fins que escriviu la vostra. La fricció és Hazen–Williams, els accessoris són coeficients de pèrdua, i una pujada costa 9.8 kPa per metre. Les unitats d'un aparell surten de la seva classe, o del nombre que definiu amb l'eina d'assistent `loads_set`.

## Conductes

Definiu el sistema, la taxa de fricció (fricció igual) o una velocitat, i qualsevol pèrdua de serpentí, filtre o silenciador. Els terminals prenen el seu cabal d'aire de `loads_set` al difusor. La taula mostra la velocitat i la fricció per peça, la **pressió del ventilador** al camí crític, i la pressió que ha d'absorbir la comporta de cada altre terminal. Les pèrdues dels accessoris fan servir coeficients per defecte arrodonits, no una base de dades d'accessoris.

## Safates i tubs de cables

Dibuixeu-los amb l'eina de {{ui:Conducte}}: els sistemes **Safata de cables** i **Tub de cables** es desen com a portadors de cables, de manera que altres programes els llegeixen com a safates i tubs. A la pestanya Cables, enganxeu la llista de cables (etiqueta, diàmetre exterior en mm, quantitat, `from`, `to`). `from` i `to` són l'etiqueta d'un equip o un punt `x,y,z` en mil·límetres. Els cables segueixen la ruta contínua més curta per les safates i tubs; cada tram mostra el seu ompliment enfront dels límits que escriviu, i el quadre es desa com a CSV amb una longitud que inclou un percentatge de reserva i els extrems.

## Il·luminació

Doneu a cada lluminària el seu fitxer IES (LM-63) o EULUMDAT amb l'eina d'assistent `photometry_set`. Escriviu els objectius, l'espaiat de la quadrícula i l'alçada del pla de treball. El resultat és només il·luminança **directa**: sense reflexions entre superfícies ni ombres, de manera que és un límit inferior en una sala.

## Aspersors contra incendis

El complement **Aspersors contra incendis** té la seva pròpia pestanya; vegeu-ne l'ajuda.
