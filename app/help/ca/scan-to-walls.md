---
title: Murs i portes a partir d'un escaneig amb telèfon o làser
summary: Convertiu un escaneig d'una sala en murs, portes i sales proposats, que accepteu un a un.
keywords: escaneig, escaneig amb telèfon, lidar, núvol de punts, murs a partir de l'escaneig, portes a partir de l'escaneig, escaneig de sala, ply, e57, las, obj, suggereix
from: a4ef0f10
---

## Què fa

Amb un escaneig obert (un núvol de punts com PLY, E57 o LAS, o una malla com OBJ), BimCraft talla l'escaneig a l'alçada del plànol, el gira perquè quedi quadrat amb l'edifici, i busca tirades de punts llargues i primes: són els murs. Un buit de l'amplada aproximada d'una porta entre dues tirades d'una mateixa línia esdevé un mur amb una porta. Els murs que tanquen un espai formen una sala.

No es dibuixa res fins que ho accepteu. Els murs i les portes arriben com una llista de propostes (són canvis en mode Suggereix): conserveu els que són correctes, rebutgeu els altres, i tot el que conserveu es dibuixa en un sol pas de Desfés. Les sales apareixen soles.

## Què comprova

Els murs que no es tanquen, les tirades de murs més curtes que el gruix d'un mur, i un buit de mida de porta sense cap mur al voltant s'informen com a Problemes, amb una posició, de manera que pugueu mirar l'escaneig allà.

## No verificat fins que es comprova

Els murs, les portes i les sales que accepteu d'un escaneig es marquen com a no verificats: una caixa discontínua i un "?" al plànol fins que els marqueu com a comprovats. Vegeu [Marca els elements com a comprovats o verificats in situ](topic:verification).

## Què no pot fer

- Troba murs que segueixen dues direccions perpendiculars. Un mur diagonal o corbat no es troba.
- Una planta alhora. Les finestres no es troben (una finestra només és un buit quan el tall és a l'alçada de l'ampit).
- S'ha provat amb escanejos de sales i malles generades, encara no amb escanejos d'un telèfon real. No se sap com ho fa amb un escaneig real (desviació en un recorregut llarg, mobles contra els murs, vidre, portes obertes), i ajustar-ho amb escanejos reals és el següent pas. Comproveu cada proposta amb l'escaneig abans d'acceptar-la.
