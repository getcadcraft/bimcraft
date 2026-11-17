---
title: Paneeltekeninge in hout of ligte dunstaal
summary: Raam die model se mure, vloere en dakke as panele in hout of ligte dunstaal, sien elke stut, plaat, latei, balk en kepers op skaal, en stoor die snylys as CSV en die werkswinkeltekeninge as PDF.
keywords: paneel, raamwerk, werkswinkeltekening, snylys, ligte dunstaal, staalstut, LGS, hout, balk, kepers, latei, voorraad, PDF
from: c09f916e
---

## Maak die panele oop

Kies {{ui:Paneeltekeninge}} in die {{ui:Bou}}-kieslys (of tik {{cmd:PANELS}}). Die lys hou elke getekende muur, elke vloer en elke dak van die model, elk met 'n merkblokkie. Mure kom met hul deure en vensters as openinge. 'n Vloer word geraam as die reghoek rondom sy omtrek, met die balke wat die kort rigting loop. 'n Dak word geraam as 'n gewel oor die omtrek van sy mure, met die helling van die dak; die lys sê so, omdat 'n walmdak of 'n komplekse dak nie 'n gewel is nie.

## Materiaal, grootte en afstand

Kies {{ui:Materiaal}}: **Hout** of **Ligte dunstaal**. Staalstukke is C-stutte wat volgens hul diepte en dikte genoem word (byvoorbeeld C92-1.2), met 'n baan vir die platen. {{ui:Lidgrootte}} kies een grootte vir elke gemerkte paneel, of laat dit op Verstek om die standaarde van elke soort paneel te neem. {{ui:Afstand}} is die afstand tussen stutte, balke of kepers. Dit is beginwaardes wat jy moet stel. Dit is nie 'n kodetoets nie: of 'n stut op daardie afstand daardie muur dra, en 'n latei vir daardie spanwydte, is vir die kodetabelle (die Bouregulasies-byvoeging het die IRC s'n) en jou ingenieur.

## Wat jy kry

Die eerste gemerkte paneel word op skaal in die dialoog geteken, met die afmetings. {{ui:Snylys (CSV)}} stoor elke paneel se stukke volgens merk, grootte en lengte, en die voorraadlengtes om vir hulle te koop. {{ui:Werkswinkeltekeninge (PDF)}} stoor een A3-bladsy vir elke paneel, met elke stuk gemerk en sy snylys. {{ui:Tekening (SVG)}} stoor die eerste paneel as 'n tekening. Wat die raamkode ook al vind wat nie geraam kan word nie ('n opening te naby aan die einde van 'n muur, 'n latei wat nie onder die platen pas nie, of 'n stuk langer as die langste voorraad) word ook in **Probleme** gelys sowel as in die dialoog.

## Wat dit nie doen nie

Die panele is tekeninge wat van die model gemaak word wanneer jy vra: niks word in die model geskryf nie, so hulle pas altyd daarby. Om die raamwerk as lede in die model te sit, gebruik {{ui:Raamwerk}} vir houtmure, vloere en dakke.
