---
title: Veggir úr setti af grunnmyndum (PDF eða skanni)
summary: Breyttu blaðsíðum PDF-skjals, eða skannaðrar teikningar, í veggi, hurðir og glugga, eitt kótastig fyrir hverja blaðsíðu, með blaðsíðunni geymdri undir hverri grunnmynd.
keywords: pdf, grunnmyndir, sett af grunnmyndum, skanni, skönnuð teikning, tiff, rekja, veggir úr pdf, veggir úr skanna, kótar, blaðsíður, mælikvarði, hurðir, gluggar, opnunarstefna, stallhæð, undirlag
from: b70d9db7
---

## Það sem þú gerir

Byrjaðu líkan úr grunnmyndunum sem þú átt á pappír: PDF-skjal (teiknað sem línur, eða skanni inni í PDF) eða skanni (PNG, JPEG, TIFF með einni síðu eða mörgum). Hver blaðsíða verður veggirnir, hurðirnar og gluggarnir á einum kóta.

## Skref

1. Kveiktu á {{ui:Draw}}. Veldu {{ui:Build}} › {{ui:From a drawing…}}, síðan {{ui:Choose a drawing…}} og veldu PDF-skjalið eða skannann.
2. **Blaðsíður og kótar.** Hver blaðsíða er skráð með því hvað hún er (**línuverk**, eða **mynd (rakin)**) og kótanum sem hún fer á: einn af kótunum þínum, **nýr kóti fyrir ofan hina**, eða **sleppa þessari blaðsíðu**. Blaðsíður eru paraðar við kótana þína í röð; breyttu hvaða þeirra sem er.
3. **Mælikvarði.** Fyrir PDF skaltu segja hvernig hún var teiknuð (**1 : 100**, **1 : 50**…). Fyrir annað, eða þegar þú veist það ekki, veldu **úr fjarlægð sem ég þekki**: smelltu á báða enda málsetningar eða mælikvarðastiku á forskoðuninni, og sláðu síðan inn raunverulegu fjarlægðina. Allar blaðsíðurnar nota einn og sama mælikvarða.
4. Veldu **gerð veggjar** og **hæð nýs kóta**. Láttu **Halda hverri blaðsíðu undir grunnmynd kóta hennar** vera hakaða til að sjá hverja blaðsíðu sem þunnar línur undir grunnmyndinni sinni.
5. Línan undir valkostunum segir hversu marga veggi, hurðir og glugga hún býr til, og á hversu mörgum kótum. Smelltu á {{ui:Make them}}.

## Hvernig það les blaðsíðu

- **Veggir** koma úr pörum samsíða lína allt að 600 mm á milli (báðir fletir veggjar); veggurinn er jafnþykkur bilinu. Skyggingar og letur eru skilin eftir.
- **Hurðir og gluggar.** Bil í vegg (500 til 2600 mm) með hreyfibogateikningu við hliðina er hurð, hengd á öðrum enda bilsins og opnast til hliðar bogans. Bil eða veggur með stallalínum í er gluggi. Bil án hvors tveggja er hurð allt að 1300 mm, og gluggi fyrir ofan það.
- **Skanni** er réttaður fyrst ef hann var skannaður skakkur (glugginn segir það), gerður svarthvítur, hreinsaður af blettum og rakinn; **PDF-blaðsíða sem er mynd** er fyrst teiknuð og síðan meðhöndluð eins. Rakningin finnur miðju hvers pennastriks og fellir beinar línur og boga að henni; hún notar hvorki net né þjálfað líkan.
- **Rými** fylgja af sjálfu sér úr lokuðum lykkjum veggjanna. Þegar PDF hefur texta fær rými nafn sitt úr letrinu inni í því (það stærsta; mál, mælikvarði eða blaðnúmer er ekki nafn). Skanni hefur engan texta, svo rými hans halda þeim nöfnum sem forritið gefur þeim.
- **Allt sem er lesið af blaðsíðunni er merkt óstaðfest**: hver veggur, hurð, gluggi og rými hefur strikaðan kassa og „?“ á grunnmyndinni þar til þú hefur yfirfarið það. Veldu það sem þú hefur yfirfarið og notaðu {{ui:Tools}} › {{ui:Mark as checked}}. Sjá [Merkja þætti sem yfirfarna eða staðfesta á vettvangi](topic:verification).

## Hvað þú ættir að sjá

- Veggirnir, hurðirnar, gluggarnir og rýmin á hverjum kóta, og allir nýir kótar, sem eitt skref: {{key:Mod+Z}} tekur allt til baka.
- Hver blaðsíða sem þunnar línur undir grunnmynd kótans síns, skráð undir {{ui:Build}} › {{ui:From a drawing…}} með {{ui:Remove}}.

:::note
Þetta er það sem línurnar gáfu, með nákvæmni blaðsíðunnar. Skanni getur týnt veikum vegg, tengt tvo veggi sem liggja mjög nálægt hvor öðrum, eða fundið vegg í bletti; sveigja sem teikningin sýnir ekki gerir bil að venjulegri hurð. Athugaðu hvern kóta við blaðsíðuna áður en þú treystir honum, og lagfærðu það sem er rangt með verkfærunum {{ui:Wall}}, {{ui:Door}} og {{ui:Window}}.
:::
