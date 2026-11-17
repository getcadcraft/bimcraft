---
title: Rekja kóta, stilla penna eftir sýn, skissa stiga og opna OBJ
summary: Sýndu aðra hæð brotna undir grunnmyndinni og jafnaðu hana, gefðu veggjum, hurðum og gluggum sinn eigin penna í einni sýn, teiknaðu gönguleið til að fá stiga, og opnaðu Wavefront OBJ-möskva.
keywords: rekja, draugamynd, undirlag, penni, línuþykkt, línugerð, yfirskrift, stigi, skissa, stigapallur, OBJ, möskvi, innflutningur, Wavefront
from: 333ebbde
---

## Rekja kóta

Veldu {{ui:Rekja}} í {{ui:Smíð}}-valmyndinni, og síðan sýn í listanum: grunnmynd annars kóta, loftgrunnmynd kóta eða skurðarmynd (klippt að sínu úrklippusvæði). Veggir hennar, súlur og gólf birtast strikuð undir grunnmyndinni sem þú ert að teikna. Færðu hana með því að smella á grunnpunkt á tilvísuninni og síðan þar sem sá punktur á að vera, eða sláðu inn X, Y og horn (hún snýst um sinn eigin miðpunkt). {{ui:Endurstilla}} skilar henni á sinn stað, {{ui:Fela}} fjarlægir hana. Hún er aðeins tilvísun: ekkert velst af henni, hún er ekki prentuð og ekki vistuð í IFC. BimCraft man hana fyrir hvern kóta í þessum vafra.

## Pennar eftir sýn

Veldu {{ui:Pennar}}. Segðu til um hvað pennin er fyrir: alla veggi, allar hurðir, alla glugga, gerð valins hlutar eða valda hluti. Veldu þykkt, línu (heil, strikuð, punktuð) og lit, og síðan {{ui:Beita}}. Breytingin gildir aðeins fyrir grunnmynd þessa kóta. Val gengur framar gerð og gerð gengur framar heilum flokki. {{ui:Hreinsa allt}} fjarlægir þá. Þeir eru geymdir í þessum vafra. Hakaðu við **Litir penna í 3D** til að mála litapennana á líkanið í 3D-sýn (þykkt og strik tilheyra línu, svo aðeins liturinn sést þar); afhakaðu til að fara til baka. {{ui:Prenta}} teiknar þá á PDF-skjal grunnmyndarinnar: þykktin er skölluð frá skjánum (sjálfgefinn veggpenni 1.75 pixlar er 0.5 mm), strik haldast strik og litur prentast í sínu gildi fyrir pappírsþema.

## Stigi úr skissu

Veldu {{ui:Skissa stiga}} og smelltu á hornin á gönguleiðinni, neðsta þrep fyrst. Ein lína er beinn stigi, tvær línur sem mætast í rétt horn eru L, og þrjár línur (upp, þvert, aftur) eru U. Ýttu á {{key:L}} til að teikna stigapall: smelltu á hornin hans og ýttu á {{key:Enter}}, og stutta hliðin ákvarðar breidd stigans. Ýttu á {{key:Enter}} til að setja stigann. Hvert þrep er reiknað út frá lengd línunnar og fjölda hæðarþrepa sem hæðin krefst. Eftir það er hann venjulegur stigi: breyttu honum í Eiginleikum, og stigaopið og handriðin fylgja.

Hakaðu við **Gera að fjölskyldu** í verkfærastikunni (eða ýttu á {{key:F}}) áður en ýtt er á {{key:Enter}}, til að setja stigann sem fjölskyldu í staðinn (beinan, L eða U). Hann kemur inn sem eitt stykki og opnast í fjölskylduritlinum með breidd sinni, þrepi, heildarhæð, þrepunum í hverjum stigaarmi og bili U-stigans sem breytur, svo þú getir bætt við stærðum, grunnmyndartákni eða heitum reitum. Skref og hæð þrepa fylgja af þeim. Hann hefur ekki handrið né stigaop: þau tilheyra venjulegum stiga.

## Opna OBJ

Opnaðu `.obj`-skrá eins og aðra skrá. OBJ hefur engar einingar, svo BimCraft les metra með Y upp, eins og flest forrit skrifa hana. Sérhver hlutur eða hópur verður einn möskvahlutur á einni hæð, og þú getur síðan skoðað, mælt, skorið, sett hann í líkan og vistað sem IFC. Línur, bogar og yfirborð eru skilin eftir, og stöðustikan segir frá því.

Hlutur sem er nákvæmlega bein prisma (lokaður möskvi með tveimur samsíða, eins endaflötum og sléttum hliðum hornrétt á þá: plata, staur, veggblokk, plata með götum) er vistaður í IFC sem útpressuð fasti IFC með útlínum sínum og dýpt, en ekki sem listi þríhyrninga. Önnur forrit lesa hann sem alvöru fast, hann helst lítill, og dýpt hans og útlínur má breyta síðar. Stöðustikan segir hversu margir hlutir voru varðveittir þannig. Allt sem er ekki nákvæmlega prisma (mjókkandi form, möskvi með einum hornpunkti færðum, möskvi með bili) helst sem þríhyrningar. STEP-skrá er lesin á sama hátt.
