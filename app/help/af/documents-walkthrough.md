---
title: Dokumente en hersienings (die kluis)
summary: 'n Stap-vir-stap-gang deur een regte werk: plaas 'n projekvouer van IFC-modelle onder beheer, neem 'n model uit, verander dit, lewer dit in met 'n nota, stuur dit vir nasien, keur dit goed en vrystel dit, sien die geskiedenis en wat dit gebruik, wat 'n tweede persoon sien terwyl dit gesluit is, en hoe dit met wolkvouers werk.
keywords: kluis, dokumente, gang, uitleg, tutoriaal, uitneem, inlewer, hersiening, vrystelling, goedkeur, slot, geskiedenis, ifc, model, wolkvouer, projekvouer, twee mense, gedeelde vouer
from: 0a753f25
---

## Wat jy gaan doen

Jy is Ana en werk aan die Riverside-kliniek saam met 'n kollega, Ben. Die projek se IFC-modelle woon in een vouer wat julle albei kan bereik ('n gedeelde skyf, 'n gesinkroniseerde vouer, of 'n wolkvouer). Teen die einde het een lêer gegaan van sy eerste kopie na vrygestelde hersiening **A**, is weer verander as **B.1**, jy het gesien wie wat gedoen het, en jy het gesien wat Ben sien wanneer jy die lêer hou.

Alles word in 'n versteekte `.ccvault`-vouer langs jou lêers bewaar: geen bediener nie, niks word opgelaai nie ('n wolkvouer is die uitsondering, sien die laaste stap). Vir elke knoppie en reël op een plek, sien die onderwerp *Dokumente: uitneem, hersienings en vrystelling* waar jou app dit het.

## 1. Stel die projekvouer op

1. Kies {{ui:Documents}} langs {{ui:Open a folder}} op die beginskerm, of {{ui:Documents…}} in die **Lêer**-kieslys.
2. Kies {{ui:Choose the project folder}} en kies die vouer wat die projek se IFC-modelle hou. (Projekvouers werk in Studio en in blaaiers wat 'n vouer kan oopmaak, soos Chrome en Edge. In ander blaaiers sê die paneel dit.)
3. Kies {{ui:Change}} langs **Jy:** en tik jou naam, `Ana` (as dit vra, ook die naam van hierdie rekenaar). Die paneel sê nou *Jy: Ana op* en jou rekenaar. Jou naam kom op alles wat jy doen.
4. Kies {{ui:Start a vault in this folder}} en tik die projek se naam, `Riverside-kliniek`. Die paneel sê *Kluis begin vir Riverside-kliniek.*

## 2. Bring 'n lêer onder beheer

1. Maak **Lêers nie in die kluis nie** oop en kies {{ui:Add}} langs `models/House.ifc`.
2. Dit verskyn onder **Lêers in die kluis** by hersiening **A.1**, status **Werk aan die gang**. A.1 is sy eerste kopie; die kluis hou 'n kopie van elke hersiening.

## 3. Neem uit, verander, lewer in

1. Kies {{ui:Open}} langs `models/House.ifc`. Die model maak oop in BimCraft en die paneel sluit sodat jy dit kan sien. Maak die paneel weer oop vanaf {{ui:Documents}}.
2. Maak die paneel weer oop en kies {{ui:Check out}}. Die ry sê nou **Uitgeneem aan jou**. 'n Slotlêer is in `.ccvault/locks` gemaak; niemand anders kan hierdie lêer uitneem voordat jy dit inlewer nie.
3. Verander die model: skuif 'n muur, voeg 'n deur by. Stoor word geweier tensy die model aan jou uitgeneem is, en dit sê waarom; Stoor as werk altyd vir 'n kopie van jou eie.
4. Maak die paneel oop, kies {{ui:Check in}} en tik wat verander het (`Deur geskuif`). Die paneel sê *ingelewer as A.2*. Die lêer in die projekvouer is nou die model wat jy oop gehad het, en die slot is weg. Inlewering sonder 'n verandering hou die hersiening.

As jy van plan verander, gee {{ui:Undo check-out}} die lêer terug sonder 'n nuwe hersiening.

## 4. Nasien en vrystel

1. Kies {{ui:Send for review}}. Die status word **Vir nasien** en die lêer is net-lees.
2. Voor goedkeuring, kies {{ui:Project settings}} en lys wie mag goedkeur (een naam per reël), byvoorbeeld `Ben` en `Carla`, en merk die reël dat die goedkeurder iemand anders as die outeur moet wees. Kies {{ui:Save settings}}. Nou weier die kluis self enigiemand anders.
3. Ben (of Carla) kies {{ui:Approve}} en tik die goedkeurder se naam. Die status word **Vrygestel** en die hersiening word **A**, met *goedgekeur deur* en die naam. 'n Vrygestelde lêer is net-lees. {{ui:Send back}} sou dit terug na Werk aan die gang gestuur het, met 'n rede.

Die goedkeurder se naam is die naam wat in die paneel getik is; dit is 'n rekord van wie goedgekeur het, nie 'n bewys van identiteit nie.

## 5. 'n Nuwe hersiening

1. Op die vrygestelde lêer, kies {{ui:New revision}}. Jy hou dit vir die volgende letter.
2. Verander dit, en klik dan {{ui:Check in}}. Die hersiening is **B.1**, werk aan die gang. Stel dit op dieselfde manier vry en dit word **B**. {{ui:Undo check-out}} voor die eerste inlewering laat dit by **A**.

Hersieningsletters loop A, B … Z, AA, AB. As jou standaard sommige letters oorslaan, die projekinstelling *Gebruik die ASME Y14.35-volgorde* slaan I, O, Q, S, X en Z oor vir die volgende hersienings.

## 6. Sien wat gebeur het

Kies die lêer se naam om sy besonderhede oop te maak:

- **{{ui:History}}**: elke gebeurtenis, nuutste eerste, met wie, watter rekenaar en wanneer: *Ingelewer A.2* deur Ana, *Vrygestel* deur Ben, ensovoorts.
- **{{ui:Revisions}}**: die hersieningtabel: elke hersiening wat bewaar is, met sy datum, wie dit ingelewer het, die nota, en wie dit goedgekeur het. Die kluis hou 'n kopie van elkeen in `.ccvault/revs`.
- **{{ui:Uses}}**: die dokumente waarna 'n IFC-model wys.
- **{{ui:Used by}}**: Gebruik deur lys elke model in die kluis wat na hierdie lêer wys.

## Modelle wat na ander dokumente wys

'n IFC-model wat na ander dokumente in die vouer wys (tekeninge, skedules) wys hulle onder **Gebruik**, en elk van daardie wys die model onder **Gebruik deur**. Lewer 'n dokument in en jy kan sien watter modelle daarna verwys.

## 7. Wat Ben sien terwyl jy die lêer hou

Neem nou die lêer weer uit, en vra Ben om dieselfde projekvouer op sy rekenaar oop te maak en die paneel oop te maak. Op die lêer se ry sien hy **Uitgeneem deur Ana op** jou rekenaar **sedert** die tyd, en geen {{ui:Check out}}-knoppie nie. As hy tog probeer, weier die kluis: die slot is 'n lêer wat die stelsel nie twee keer sal maak nie, so twee mense kan nie albei die lêer hou nie, selfs nie in dieselfde sekonde nie, wanneer die vouer in Studio op skyf is. (In 'n blaaier laat die vouer net 'n beste poging toe, en die paneel sê dit onder **Vouer**.)

As Ana weg is en Ben die lêer nodig het, maak {{ui:Break check-out}} dit vry. Hy moet 'n rede tik; dit gaan in die logboek saam met wie se uitneem dit was. Wanneer die projek admins lys, kan net hulle dit doen. 'n Uitneem ouer as die verouderingsgrens (standaard 14 dae) word gemerk as *lank gelede*. Ná die breek word Ana se laat inlewering geweier, so julle twee kan mekaar nie oorskryf nie.

## 8. Wolkvouers

'n Wolkvouer is 'n projekvouer wat in jou span se wolkberging gehou word, so die span het geen gedeelde skyf nodig nie. In Studio, aangemeld by jou CadCraft-rekening, wys die paneel {{ui:Open a cloud folder}} langs {{ui:Choose the project folder}}. Kies dit en kies die vouer, gelys as werkruimte / vouer. 'n Werkruimte-eienaar maak die vouer eerste, en die span se wolkberging moet van krag wees. Alles hierbo werk dieselfde; die bediener maak die slot, wat streng is oor mense heen. As jy nie aangemeld is nie, sê die paneel om aan te meld. In 'n gewone blaaiertjie word die wolkknoppie nie aangebied nie; gebruik Studio.

## Probeer dit

Doen die agt stappe hierbo met 'n kopie van 'n regte lêer. Vir die twee-persoon-stappe het jy nog 'n persoon nodig, of twee vensters met twee name. As jy dit wel met 'n regte gedeelde vouer probeer, lys die Gemeenskapstoetsbladsy 'n toets wat presies dit vra, en neem resultate.
