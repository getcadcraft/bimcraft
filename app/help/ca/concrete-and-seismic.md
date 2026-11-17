---
title: Comprova elements de formigó i fes càrregues sísmiques
summary: Configura les barres de bigues i pilars de formigó del model obert, comprova'ls segons ACI 318-19, calcula les forces laterals equivalents segons ASCE 7-22 en forjats rígids i vegeu la deriva de planta. Una ajuda perquè un enginyer ho comprovi.
keywords: formigó, formigó armat, ACI 318, ACI 318-19, armadura, biga, pilar, tallant, estreps, sísmic, terratrèmol, força lateral equivalent, ELF, ASCE 7-22, deriva, deriva de planta, forjats, diafragma rígid, pes de planta, utilització, estructural, enginyer, anàlisi
from: 2f342e72
---

Els blocs {{ui:Elements de formigó}} i {{ui:Càrregues sísmiques}} de la pestanya {{ui:Anàlisi}} comproven les bigues i els pilars de formigó armat de l'IFC obert, i calculen les forces horitzontals d'un terratrèmol sobre els forjats de la seva estructura. Són els mateixos blocs del DetailCraft, executats després de l'anàlisi de la pestanya {{ui:Anàlisi}}, i es desen a l'IFC amb la resta de configuracions d'anàlisi.

:::warning
Els resultats són **per a la comprovació per un enginyer**: una ajuda fins que n'hagi revisat un. Les comprovacions de formigó usen forces de primer ordre (un pilar d'un pòrtic que considereu sense desplaçament es dimensiona pel seu moment amplificat), sense amplificació per desplaçament, sense disseny a torsió, sense detallat sísmic (capítol 18 de l'ACI) i sense detallat d'estreps. Les càrregues sísmiques deixen de banda el factor de redundància, l'efecte sísmic vertical, l'amplificació per torsió i els efectes P-delta. **Les càrregues de vent no estan implementades: els capítols de vent de la norma no són a les pàgines de referència del projecte.**
:::

## Què llegeix BimCraft

L'anàlisi llegeix les bigues, els pilars i els contraventaments del model amb els seus perfils (vegeu [Analitza el pòrtic estructural](topic:frame-analysis)). El bloc {{ui:Elements de formigó}} llista cada secció que usen. Premeu {{ui:Configura com a formigó…}} en una secció que sigui de formigó: BimCraft pren un rectangle de l'àrea i de la rigidesa del perfil (l'amplada b i l'alçada h, que després podeu canviar), de manera que una secció que no s'assembla gaire a un rectangle (una secció laminada d'acer) dona una mida que cal corregir, o es deixa estar.

Una secció configurada com a formigó, i qualsevol element el material del qual es digui formigó, s'analitza com a formigó: E = 4700 √f′c, 2400 kg/m³, i per defecte amb **seccions fissurades** (pilars 0.70 Ig, bigues 0.35 Ig; ACI 318-19 taula 6.6.3.1.1(a)). Trieu {{ui:Seccions brutes}} per desactivar-ho. Sense aquests ajustos el model s'analitza exactament com abans.

## Barres, combinacions, comprovació

Doneu el recobriment, les barres superiors, inferiors i laterals (o una gàbia de pilar) i els estreps de cada secció, i configureu f′c, fy, fyt, K i si és amb desplaçament o sense. Doneu a les hipòtesis de càrrega el seu tipus, premeu {{ui:Crea combinacions}} (ASCE 7 §5.3.1) i després {{ui:Comprova el formigó}}: cada element rep una utilització, pintada al model. Els elements per sobre de la capacitat, i una deriva de planta per sobre del seu límit, es llisten a {{ui:Problemes}} amb la seva clàusula; cliqueu-ne un per seleccionar l'element.

## Forjats i càrregues sísmiques

Al bloc {{ui:Càrregues sísmiques}}, {{ui:Troba els forjats}} agafa els nivells on es troben dues o més bigues; cadascun es torna un diafragma rígid. {{ui:Pren els pesos dels casos}} llegeix el pes sísmic de cada forjat dels casos als quals doneu un factor. Ompliu SDS, SD1, S1, R, Ie, Cd, TL, el sistema i la categoria de risc, i després {{ui:Fes els casos sísmics}} (ASCE 7-22 12.8: període, esforç tallant a la base, distribució per plantes, 5 % de torsió accidental). Les forces de planta i la comprovació de deriva (12.12) es mostren després d'executar-ho. El mateix període i la mateixa rigidesa de planta alimenten el terratrèmol de [Reprodueix una inundació, vent o un terratrèmol](topic:hazard-playback) quan trieu el pòrtic d'anàlisi com a font.

Els forjats i els murs de formigó esdevenen plaques a l'anàlisi, i el bloc {{ui:Armadura de forjats}} calcula l'acer que necessiten per metre. Els detalls de cada comprovació són al tema del mateix nom del DetailCraft.
