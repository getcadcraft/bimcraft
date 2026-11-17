---
title: El plànol elèctric
summary: Col·loca endolls, interruptors, llums, sensors, caixes de connexió i quadres al plànol amb els mateixos símbols que el complement Elèctric de CadCraft, enllaça els interruptors amb els llums que encenen i llista els dispositius i els circuits als quadres.
keywords: elèctric, plànol elèctric, endoll, presa de corrent, doble, interruptor, commutador, regulador de llum, llum, llum de sostre, llum encastada, downlight, sensor de moviment, caixa de connexió, quadre, quadre de distribució, circuit, càrrega, watts, amperes, retorn d'interruptor, quadre de dispositius, quadre de quadres
from: f7de1947
---

## Què faràs

Dibuixa el plànol elèctric de la casa al model: endolls, interruptors i quadres a les parets, llums i sensors al sostre. Cada dispositiu és un element elèctric real del fitxer IFC, amb la seva etiqueta, el seu circuit i la seva càrrega, i els interruptors recorden els llums que encenen.

## Col·loca els dispositius

1. En una planta, obre {{ui:Compilació}} i tria {{ui:Elèctric}}.
2. Tria el dispositiu: endolls (potència, dades, telèfon, àudio-vídeo), interruptors i sensors (també un termòstat i un temporitzador), llums, detectors i alarmes, una caixa de connexió, un quadre o un subquadre.
3. Escriu un **Circuit** si el saps (qualsevol nom: 1, 2, A-3). Deixa **Alçada de muntatge** en blanc per usar l'alçada habitual d'aquell dispositiu.
4. Fes clic al plànol. Els endolls, els interruptors i els quadres van a la cara del mur més proper, orientats cap a la sala; els llums, els sensors i les caixes de connexió van al sostre, on facis clic.

Els dispositius reben etiqueta en situar-los: **R** per als endolls, **S** per als interruptors, **L** per als llums, **M** per als sensors de moviment, **J** per a les caixes de connexió, **P** per als quadres. Els dispositius que són en un mur es mouen amb ell quan mous el mur.

Prefereixes navegar per imatge? Obre la **Paleta de símbols** des de {{ui:Compilació}} per trobar un dispositiu pel nom, marca amb una estrella els que utilitzes i col·loca'l amb un sol clic: consulta [La paleta de símbols](topic:symbol-palette).

## Enllaça els interruptors amb els llums

1. Tria un interruptor (o un sensor de moviment) i fes clic a **Enllaça llums** a {{ui:Propietats}}.
2. Fes clic a cada llum que encén. Torna a fer clic a un llum enllaçat per desenllaçar-lo.
3. Prem {{key:Enter}} o fes clic a **Fet**.

El plànol dibuixa una corba discontínua des de l'interruptor fins a cadascun dels seus llums. A les {{ui:Propietats}} d'un llum es mostra quins interruptors l'encenen.

## La sala on es troba un dispositiu

Cada dispositiu sap en quina sala és. Un dispositiu a un mur és a la sala a la qual mira; un dispositiu de sostre és a la sala que té just a sota. {{ui:Propietats}} mostra **Sala**, i el quadre **Dispositius elèctrics** té una columna **Sala** (número i nom, com ara 101 Cuina).

Es manté actualitzat: si canvies el nom o el número de la sala, mous el dispositiu o mous un mur, la sala se segueix en el mateix pas. Un dispositiu a la cara exterior d'un edifici, o en un espai que no és una sala, indica que no és en cap sala.

La sala també s'escriu al fitxer, al conjunt de propietats del dispositiu `CadCraft_Location` (Room, RoomNumber, RoomName), perquè Cerca, Color per propietat i un quadre d'etiquetes en puguin fer ús, i també un altre programa. Els símbols de planta i els elements enllaçats a un símbol reben el mateix conjunt; consulta [Paleta de símbols](topic:symbol-palette).

## Deixa que el teu assistent els col·loqui

Amb un assistent connectat (a {{ui:Configuració}} › Assistents, amb edicions permeses), pots demanar dispositius amb paraules: "posa un endoll doble cada 2 m al llarg de les parets de la sala d'estar, a 300 mm d'alçada, al circuit 3", o "afegeix un llum de sostre amb el seu interruptor al costat de la porta". L'assistent utilitza cinc eines: `devices_add`, `device_change`, `lights_set`, `devices_delete` i `devices_list`. Fan els mateixos dispositius que l'eina Elèctric, a les mateixes parets i amb les mateixes etiquetes, circuits, càrregues i alçades, i cada crida és un sol pas per desfer.

Un dispositiu mai no rep un tipus que l'eina Elèctric no té: un tipus desconegut es rebutja i a l'assistent se li dóna la llista. Un endoll o un interruptor ha d'estar a menys de 600 mm d'una cara de mur, com en un clic, o la crida es rebutja i no es col·loca res. Les alçades per defecte són en mil·límetres: 300 per als endolls i 1100 per als interruptors; un dispositiu de sostre penja del sostre.

## Canvia'ls i llista'ls

Tria un dispositiu per canviar-ne l'etiqueta, el circuit, la càrrega (watts) i l'alçada de muntatge. Tria'n diversos per posar-los tots en un mateix circuit de cop. Prem {{key:Delete}} per eliminar-ne un; un llum eliminat es treu dels seus interruptors.

A {{ui:Quadres}} tria **Dispositius elèctrics** per veure cada dispositiu amb el seu nivell, circuit, càrrega, alçada i els llums que encén cada interruptor, o **Circuits** per veure els dispositius de cada circuit, la càrrega total i el corrent. Tots dos són també al full de quadres del conjunt de plànols: consulta [Alçats, seccions i fulls](topic:sheets).

:::note
Les alçades de muntatge i les càrregues són valors per defecte de planificació (un endoll a 16" d'alçada i 200 W, un interruptor a 48", un llum de sostre de 60 W), no un disseny: l'electricista o l'enginyer dimensiona els circuits i comprova la normativa.
:::

:::tip
Els símbols són els mateixos que el complement Elèctric de CadCraft dibuixa als plànols d'instal·lació, de manera que un plànol de qualsevol de les dues aplicacions es llegeix igual.
:::
