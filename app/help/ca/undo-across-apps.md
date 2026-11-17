---
title: Desfés entre aplicacions a CadCraft Studio
summary: Dins de Studio, BimCraft informa Studio de cada pas acabat, de manera que Studio pot desfer el darrer pas a la finestra en què heu treballat per últim.
keywords: desfés, studio, entre aplicacions, desfer del projecte, historial, diari, finestra
from: c66dd0c1
---

## Què fa

A CadCraft Studio, cada finestra d'aplicació informa Studio quan un pas s'ha acabat (un mur dibuixat, un conjunt de murs acceptat d'un escaneig). Studio guarda aquests passos en l'ordre en què heu treballat i pot demanar a la finestra que ha fet el darrer que el desfaci, amb el seu propi desfés. Ctrl+Z dins de BimCraft continua sent el de BimCraft i també s'informa a Studio.

## Què cal saber

- Studio només demana a una finestra que desfaci quan la seva llista de desfer és exactament com la va deixar el pas. Després de Desa (que comença una llista de canvis nova) o després de canviar el model que editeu, BimCraft respon que la llista s'ha mogut i Studio omet aquesta finestra. No es força res.
- Desfer els efectes d'una aplicació en una altra no està implementat.
- Fora de Studio no canvia res.
- L'element del menú de Studio que demana el desfer arriba amb una versió de Studio; fins llavors els passos s'informen però cap element de menú no els fa servir.

## Següent

- [Treballa en directe amb altres](topic:work-live)
