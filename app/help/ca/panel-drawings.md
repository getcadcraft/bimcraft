---
title: Plànols de panells en fusta o acer de perfil lleuger
summary: Encaixeu els murs, els forjats i les cobertes del model com a panells de fusta o d'acer de perfil lleuger, vegeu cada muntant, solera, dintel, bigueta i cabiró a escala, i deseu la llista de talls en CSV i els plànols de taller en un PDF.
keywords: panell, entramat, plànol de taller, llista de talls, acer de perfil lleuger, muntant d'acer, LGS, fusta, bigueta, cabiró, dintel, estoc, PDF
from: c09f916e
---

## Obriu els panells

Trieu {{ui:Plànols de panells}} al menú {{ui:Compilació}} (o escriviu {{cmd:PANELS}}). La llista conté cada mur dibuixat, cada forjat i cada coberta del model, cadascun amb una marca. Els murs apareixen amb les seves portes i finestres com a obertures. Un forjat es munta com el rectangle que envolta el seu contorn, amb les biguetes en la direcció curta. Una coberta es munta com una coberta a dues aigües sobre el contorn dels seus murs, amb la pendent de la coberta; la llista ho indica, perquè una coberta a quatre vessants o una coberta complexa no és a dues aigües.

## Material, mida i separació

Trieu {{ui:Material}}: **Fusta** o **Acer de perfil lleuger**. Les peces d'acer són muntants en C designats per la seva profunditat i gruix (per exemple C92-1.2), amb una guia per a les soleres. {{ui:Mida de l'element}} tria una mida per a tots els panells marcats, o deixeu-lo en Per defecte per prendre els valors per defecte de cada tipus de panell. {{ui:Separació}} és la distància entre muntants, biguetes o cabirons. Són valors inicials que heu d'ajustar. No són una comprovació normativa: si un muntant amb aquesta separació sosté aquest mur, i un dintel amb aquesta llum, ho diuen les taules normatives (el complement Normativa de l'edificació té les de l'IRC) i el vostre enginyer.

## Què obteniu

El primer panell marcat es dibuixa a escala al diàleg, amb les dimensions. {{ui:Llista de talls (CSV)}} desa les peces de cada panell per marca, mida i longitud, i les longituds d'estoc a comprar per a elles. {{ui:Plànols de taller (PDF)}} desa una pàgina A3 per cada panell, amb cada peça marcada i la seva llista de talls. {{ui:Plànol (SVG)}} desa el primer panell com a plànol.

Tot el que el codi d'entramat troba que no es pot muntar (una obertura massa a prop del final d'un mur, un dintel que no cap sota les soleres, una peça més llarga que l'estoc més llarg) es llista a Problemes i també al diàleg.

## Què no fa

Els panells són plànols fets a partir del model cada vegada que els demaneu: no s'escriu res al model, de manera que sempre coincideixen amb ell. Per posar l'entramat al model com a barres, useu {{ui:Entramat}} per a murs, forjats i cobertes de fusta.
