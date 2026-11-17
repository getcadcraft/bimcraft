---
title: Vertrekafwerkings en afwerkingskedules
summary: Sê wat die vloer, mure en plafon van elke vertrek bedek, voeg sones soos 'n spatbord by, en kry afwerkingskedules per vertrek, muur en sone met oppervlaktes, teltellings van teëls insluitend snitte, en onderlaagvolumes.
keywords: afwerking, afwerkings, afwerkingskedule, vertrekafwerkings, vloerafwerking, muurafwerking, plafonafwerking, plint, teël, teëls, gesnyde teëls, teltelling, afval, onderlaag, estrik, agterbord, pleister, sone, spatbord, dado, nat area, binne, hoeveelhede
from: 8c30498c
---

## Wat jy sal doen

Vertel BimCraft een keer waarmee elke vertrek afgewerk is. Die afwerkingskedules gee dan die oppervlaktes, die teëls om te bestel en die onderlaagvolumes, en verander saam met die model.

## Stappe

1. Skakel {{ui:Teken}} aan, maak **Skedules** in die linkerpaneel oop en klik **Vertrekafwerkings**.
2. Onder **Afwerkingstipes** klik **Voeg 'n afwerkingstipe by**. Gee dit 'n naam, 'n soort (Teël, Vel, Laag of Bord) en 'n dikte. Vir 'n teël, gee die teël se lengte en breedte, die voeg en 'n afvaltoelae in persent. As iets onder die afwerking kom ('n estrik, 'n agterbord, 'n pleisterlaag), noem dit onder **Onderlaag** en gee die dikte daarvan.
3. Onder **Vertrekke** kies die vloer-, muur- en plafonafwerking van elke vertrek. Tik 'n plintnaam en sy hoogte as die vertrek een het.
4. Onder **Sones** klik **Voeg 'n sone by** vir 'n deel van 'n vertrek wat 'n ander afwerking kry:
   - 'n **muur**-sone is 'n band tussen twee hoogtes bo die vloer ('n spatbord vanaf 0 tot 1200, 'n dado). Dit is op elke muur van die vertrek, of kies mure van daardie vertrek in die model en klik die **Aan**-knoppie om dit daartoe te beperk;
   - 'n **vloer**- of **plafon**-sone is 'n oppervlakte wat jy tik. Dit word uit die vertrek se eie afwerking geneem.
5. Klik **Stoor**. Dit is een stap in Ontdoen. Lengtes word in die projek se eenhede getik.

## Die skedules

Vier inskrywings sluit by die Skedules-lys aan:

- **Afwerkings per vertrek**: elke vertrek met sy vloer-, muur- en plafonafwerking, hul oppervlaktes, en die plint met sy lengte.
- **Afwerkings per muur**: elke stuk muur aan 'n vertrek se kant en die band daarvan wat 'n afwerking bedek, met sy lengte, bruto oppervlakte, aftrekkings, netto oppervlakte en, vir teëls, hele teëls, gesnyde teëls en teëls om te bestel.
- **Afwerkings per sone**: elke sone met sy afwerking, netto oppervlakte, teëls en onderlaagvolume.
- **Afwerkingshoeveelhede**: een ry per afwerking: netto oppervlakte, hele en gesnyde teëls, teëls om te bestel, die onderlaag en sy volume, en die afwerking se eie volume.

Groepeer, totaliseer, stoor en voer hulle uit soos enige skedule: sien [Lê 'n skedule uit, stoor en voer dit uit](topic:schedule-layouts). Klik op 'n syfer om te kies waar dit vandaan kom: die aftrekkings van 'n muur kies sy deure en vensters.

## Hoe afwerkings gemeet word

- **Mure**: elke stuk muur aan die vertrek se kant, sy lengte langs die vertrek maal die hoogte wat die afwerking bedek, minus die deel van elke deur en venster binne daardie hoogte. 'n Muur wat laer is as die vertrek, word tot sy eie bopunt afgewerk. Die projek se meetmetode bepaal watter openings te klein is om af te trek ([Skedules](topic:plan-schedules-and-pdf)).
- **Vloere en plafonne**: die vertrek binne sy muurvlakke, minus die eilande daarin.
- **Plinte**: die vertrek se muurlengte minus die breedte van sy deure.
- **Teëls**: gelê as 'n rooster vanaf een hoek van die oppervlak, met een voeg tussen teëls. 'n Teël wat heeltemal op die oppervlak is, is 'n hele teël; 'n teël wat gedeeltelik daarop is (aan 'n rand, om 'n opening) is 'n gesnyde teël. Teëls om te bestel is hele plus gesnyde, plus die afvaltoelae, na bo afgerond. Elke gesnyde teël word as 'n nuwe teël getel: afsnitte word nie hergebruik nie.
- **Onderlaagvolume**: die netto oppervlakte maal die onderlaag se dikte.
- 'n Telling wat met **≈** gemerk is, word uit die oppervlakte bereken in plaas van teël-vir-teël uitgelê: 'n oppervlakte met 'n getikte sone daaruit geneem, of 'n baie groot een.

## Goed om te weet

- Die afwerkings word in die gebouleer gehou (eiendomstel `CadCraft_Finishes` op die projek). Elke vertrek wat 'n afwerking het, kry ook die standaard IFC-eiendomstel `Pset_SpaceCoveringRequirements`, sodat ander programme die name lees.
- Die teëluitleg begin by 'n hoek. 'n Uitleg wat in die vertrek gesentreer is, 'n patroon (vismotief, baksteenverband) en hergebruik van afsnitte word nie bereken nie.
- 'n Geboë muur, en 'n vertrekgrens wat nie 'n muur is nie ('n vertrekskeiding), word gelys as **Ander grens** met sy lengte en geen openings nie.
- Die **Afwerkings**-inskrywing wat voorheen daar was, lys die afwerklae van die muurtipes; **Lae: oppervlakte en volume** lys elke laag van elke gelaagde tipe. Die vertrekafwerkings hier is wat bo-op daardie op die vertrek toegepas word.
- 'n KI-assistent kan afwerkings vir jou stel met `finishes_set`: sien [Laat 'n KI-assistent met jou model werk](topic:assistants).
