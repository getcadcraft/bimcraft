---
title: Flatarmál og afmörkun flatarmáls
summary: Mældu heildarflatarmál byggingar eða leigurými innan afmörkunarlína sem þú teiknar eða tekur af veggjum, og settu flatarmálin á lista.
keywords: flatarmál, flatarmál svæða, afmörkun flatarmáls, kerfi flatarmáls, heildarflatarmál byggingar, brúttóflatarmál, GFA, leigurými, grunnmynd flatarmáls, listi yfir flatarmál, velja veggi, ekki lokað
from: c79f96d2
---

## Hvað þú gerir

Teiknaðu afmörkun flatarmálskerfis, settu flatarmál innan hennar og lestu heildarsummurnar.

## Hvar verkfærin eru

- Borðútlit: {{ui:Arkitektúr}} › **Rými og flatarmál** › {{ui:Flatarmál}} og {{ui:Afmörkun}}.
- Klassískt útlit: Teiknistikan › valmyndin {{ui:Rými}}.

## Skref

1. Veldu {{ui:Afmörkun}}. Í línunni velurðu {{ui:Kerfi}}: Heildarflatarmál byggingar eða Leigurými. Hvert kerfi hefur sínar eigin afmarkanir.
2. Veldu hvernig línurnar eru gerðar í {{ui:Búa til með}}:
   - **Teikna**: smelltu punkt eftir punkt.
   - **Velja veggi: miðlína**: smelltu á vegg, og miðlína hans er afmörkun.
   - **Velja veggi: smellt hlið**: smelltu á vegg hvoru megin sem þú vilt; sú hlið er afmörkunin. Fyrir heildarflatarmál byggingar smelltu á ytri hlið ytri veggja.
3. Veldu {{ui:Flatarmál}}. Veldu sama kerfi, skrifaðu heiti, númer eða gerð ef þú vilt, og smelltu innan afmarkananna.
4. Flatarmálið er mælt strax. Veldu það til að breyta heiti, númeri eða gerð í Eiginleikum.

## Hvað fylgir hverju

- Afmörkun sem gerð er með því að velja vegg fylgir þeim vegg: færðu vegginn og flatarmálið er mælt aftur í sama skrefi.
- Afmörkun sem þú teiknaðir er þar sem þú teiknaðir hana.
- Hliðar veggja sem mætast í horni mætast þar líka, þannig að fjórir valdir veggir loka flatarmáli án bila.
- Afmörkun flatarmáls sést á grunnmyndinni meðan herbergis- eða flatarmálsverkfæri er í hendi, þannig að hún truflar ekki grunnmyndina annars.

## Ef afmörkunin lokast ekki

Flatarmálið er samt sett. Það segir **Ekki lokað** og mælir ekkert fyrr en afmörkunin lokast um það. Þetta er ráðgjöf: ekkert er hafnað.

## Listinn

Vinstra spjald › {{ui:Listar}} › **Flatarmál**: kerfi, númer, heiti, gerð, hæð, flatarmál og ummál, með samtölu. Smellur á línu velur flatarmálið. {{ui:Sækja CSV}} gefur sömu töflu.

## Í IFC

Flatarmál er IfcSpace án líkama: PredefinedType GFA fyrir kerfi heildarflatarmáls byggingar, USERDEFINED með ObjectType Rentable fyrir leigurými. Það ber GrossFloorArea og GrossPerimeter, og ekkert nettóflatarmál, þannig að það er ekki ruglað saman við herbergi. Afmörkun er IfcVirtualElement.

## Ekki smíðað enn

- Eigin kerfi (aðeins Heildarflatarmál byggingar og Leigurými).
- Litafyllingar eftir gerð flatarmáls.
- Reglur sem staðsetja afmörkunina fyrir þig, svo sem „að glerlínu“.

Sjá einnig [Herbergi og aðskilnaðir](topic:rooms-and-separators), [Merkingar herbergja og flatarmála](topic:room-and-area-tags).
