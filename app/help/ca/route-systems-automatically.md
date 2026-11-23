---
title: Encamina automàticament conductes, desguassos, canonades d'aigua i de refrigerant
summary: A la comprovació de col·lisions, BimCraft troba un recorregut pel model obert per als conductes, el desguàs per gravetat, l'aigua freda i calenta i les canonades de refrigerant de tipus split o multi-split, i dibuixa els trams amb els seus accessoris en un sol pas de desfer. Un ajut de delineació: les mides, les pendents i les comprovacions surten de les taules del programa i dels números que escriviu; res d'aquí diu que un projecte compleix cap normativa.
keywords: encaminament automàtic, encamina automàtic, encamina conductes, encamina canonades, desguàs, sanitari, gravetat, baixant, ventilació, sifó, aigua, aigua calenta, bucle de retorn, recirculació, refrigerant, split, multi-split, VRF, longitud equivalent, kit de derivació, ramal en Y
from: 5841d513
---

## Què faràs

Deixeu que BimCraft dissenyi una xarxa de trams entre els connectors que ja hi ha al model, al voltant de murs i bigues, i després comproveu-la amb números que podeu veure.

## Passos

1. Obriu el model i la comprovació de col·lisions. Sota **Encamina conductes automàticament** trieu una unitat de tractament d'aire i els seus terminals, o sota **Encamina altres sistemes automàticament** trieu un sistema.
2. **Desguàs sanitari per gravetat.** Escriviu la posició de la sortida i, si en teniu, les posicions dels baixants. Marqueu **Encamina totes les plantes d'una vegada** per prendre totes les plantes que tenen aparells sanitaris: els desguassos de cada planta troben el baixant al seu propi nivell, i el baixant va de per sobre de l'aixeta més alta fins a la base. Premeu {{ui:Encamina}}.
3. **Sifó fins a la ventilació.** El panell enumera la distància de cada sifó fins a la seva ventilació. Escriviu el màxim que permet la vostra normativa a **Màxim des d'un sifó fins a la seva ventilació**; qualsevol aparell que el superi es marca com a no fet, amb els mil·límetres de més. Marqueu **Ventila pel baixant** quan els aparells no tinguin cap connexió de ventilació pròpia: la distància es mesura aleshores fins al baixant. BimCraft no inclou cap taula normativa per a això: escriviu el número vosaltres.
4. **Aigua freda i calenta.** Trieu la font, escriviu la pressió a la font i la pressió que necessiteu en un aparell. Marqueu **Aigua calenta**, trieu la connexió calenta de l'escalfador, i marqueu **Bucle de retorn** per acabar una línia de retorn a la connexió de **retorn calent** de l'escalfador, o en qualsevol altra connexió que trieu (aquesta acaba a 150 mm, oberta, perquè la uniu vosaltres).
5. **Split, multi-split i VRF.** Trieu la unitat exterior, marqueu les unitats interiors i escriviu la capacitat de cadascuna. Escriviu els límits de les dades del fabricant. Escriviu la **longitud equivalent** d'un colze i d'un kit de derivació (els valors del fabricant), i la longitud més gran i la total es comproven amb les longituds equivalents.
6. Premeu {{ui:Encamina}}. El panell indica quants trams ha dibuixat i què no ha pogut fer, i per què. {{ui:Desfés}} ho desfà tot en un sol pas.

## Què hauríeu de veure

Canonades amb colzes, tes i reductors; desguassos que baixen com a mínim la pendent més petita per a la seva mida; connexions de ventilació als aparells; línies de refrigerant com a parella de líquid i gas que gira en el mateix sentit a cada cantonada, amb un kit de derivació marcat on una derivació surt del tronc.

## Bon és saber

- Quan un desguàs troba un altre desguàs, el model dibuixa una te. El plànol anomena aquests punts unions en Y de 45 graus perquè pugueu canviar l'accessori.
- L'aigua calenta usa la connexió calenta pròpia de l'aparell quan la seva família en té una, i una connexió a 100 mm de la freda quan no en té.
- Les línies de refrigerant comencen entre els dos ports de cada unitat. Quan els dos ports d'una unitat són massa a prop per a un colze, la parella es manté centrada entre tots dos.
- La xarxa d'aigua usa la corba de demanda i els números de fricció que es mostren als càlculs; substituïu-los pels de la vostra normativa abans de fiar-vos de les pressions.
- Les cases grans poden trigar mig minut o més, sobretot per la xarxa calenta.
- És un ajut de delineació. Una persona qualificada ha de comprovar les mides, les pendents, les ventilacions i les pressions segons la normativa que correspongui.

## Següent

[Comprova les col·lisions](topic:clash-check) · [Comprova canonades i conductes contra l'estructura](topic:mep-against-structure) · [Connexions entre canonades i equips](topic:mep-connections)
