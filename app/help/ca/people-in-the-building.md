---
title: Fes passar persones per l'edifici
summary: Una evacuació o les arribades d'un dia normal pels vostres sales, portes i escales, amb cues on l'edifici s'estreny, el recorregut més llarg fins a una sortida des de cada sala, i les troballes com a Problemes. Un model de multitud aproximat per a decisions de disseny, no un certificat de seguretat contra incendis.
keywords: persones, evacuació, egress, fuga, sortida, distància de recorregut, cua, multitud, flux, amplada de porta, escales, arribades, coll d'ampolla, simulació, ocupants, vianant, què passaria si, porta bloquejada
from: 84aa8920
---

La secció {{ui:Persones a l'edifici}} del tauler de l'esquerra fa passar persones per les sales, portes i escales del model IFC obert. No es canvia res del model i no es puja res.

:::warning
Això és **una eina de disseny, no un certificat de seguretat contra incendis**. No coneix el foc, el fum, el pànic, les diferències de mobilitat ni el que us exigeix una normativa. Els límits són vostres: el recorregut més llarg fins a una sortida i el temps disponible són xifres que escriviu, i no se'n suposa cap.
:::

## Executeu-la

1. Obriu un model amb sales i portes tancades. Una porta amb una sala només a un costat és una sortida; una porta entre dues sales les uneix; una escala uneix les sales als seus extrems.
2. Trieu **Evacuació** (tothom camina cap a una sortida), **Arribades** (tothom entra i camina cap a una sala) o **Intercanvi** (les persones de les sales surten mentre n'entren tantes), i la superfície de sòl per persona. Les sales amb nom de passadís, escala, vestíbul o lavabo no hi allotgen ningú.
3. Feu clic a {{ui:Executa}}. Obteniu el temps que triga l'última persona a sortir (i quan ho han fet la meitat i nou de cada deu), la cua a cada porta i escala, la sala amb el recorregut més llarg, i un plànol que reprodueix l'execució.

## Què passaria si

Marqueu {{ui:Tancada}} en una porta de la taula i torneu a executar: les persones troben un altre camí, o les sales sense cap sortida es llisten com a errors. Una porta dues vegades més ampla buida una sala molt abans; la taula mostra on hi ha les cues.

## Com funciona

Cada sala és una quadrícula, de manera que les persones caminen per les cantonades, no pels murs. La velocitat baixa a mesura que una sala s'omple (S = 1.4 (1 − 0.266 D) m/s, D en persones per m²). Una porta deixa passar 1.3 persones per segon per cada metre d'amplada, menys 150 mm a cada costat; una escala, 1.0 i caminar més lent. Les persones esperen en una cua per ordre d'arribada. Un número d'execució repeteix exactament la mateixa execució.

L'assistent pot executar el mateix: demaneu una evacuació, o el recorregut més llarg fins a una sortida des de cada sala.

## Persones a cada sala

Obriu {{ui:Persones a cada sala}} per escriure un número per a qualsevol sala. Una casella en blanc usa la xifra de superfície de sòl (mostrada en gris); 0 buida una sala. Els vostres números s'utilitzen per a l'execució i es guarden en aquest navegador.

## Contraflux a les portes

A **Intercanvi**, les persones que surten i les que entren es troben a les mateixes portes. Quan una porta deixa passar algú en sentit contrari just darrere de l'última persona, conserva part de la seva taxa (0.8 aquí; una suposició, perquè els valors publicats varien), i la taula compta els canvis de sentit. Una porta que canvia de sentit sovint apareix a Problemes com a nota.

## Escales i replans

Cada replà d'una escala costa un segon a qui camina per girar (una suposició). Una escala recta no en té cap; una escala en L o en U en té un. La taxa de l'escala encara surt de l'amplada del seu tram.

## A la vista 3D

Marqueu {{ui:Mostra les persones a la vista 3D}} i els vianants apareixen com a figures al model, de colors segons el que facin, i es mouen mentre reproduïu l'execució. No s'hi afegeix res al model.
