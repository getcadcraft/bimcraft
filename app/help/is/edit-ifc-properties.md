---
title: Breyta IFC-eiginleikum og vista breytt afrit
summary: Breyttu heiti, merki, lýsingu eða gildi eiginleika á hlut, afturkallaðu, og sæktu nýja IFC-skrá á meðan frumritið helst óbreytt.
keywords: breyta, breyting, eiginleikar, færibreytur, merki, heiti, endurnefna, merking, vista sem, sækja, afturkalla, afrita, ifc, skrifa
from: f8035d62
---

## Hvað þú gerir

Leiðréttu gögn í IFC-líkani: endurnefndu hlut, lagfærðu merki hans, breyttu gildi eiginleika. Vistaðu síðan nýja IFC-skrá með breytingunum þínum. Skránni sem þú opnaðir er aldrei breytt.

## Hvað þú getur breytt

| Reitur | Hægt að breyta |
|---|---|
| Heiti, Hlutargerð, Merki, Lýsing | Já |
| Stakt eiginleikagildi (texti, tölur, Já/Nei) | Já |
| Gerðareiginleikar (eiginleikasett merkt "(gerð)") | Já, og breytingin gildir um alla hluti af þeirri gerð |
| Gerð, GlobalId, Lína | Nei |
| Magn (lengdir, flatarmál, rúmmál, fjöldi) | Nei |
| Listar, upptalningar og önnur margra hluta gildi | Nei |
| Rúmfræði, staða, að bæta við eða eyða hlutum | Nei |

## Skref

1. Opnaðu IFC-líkan og smelltu á hlutinn sem þú vilt breyta.
2. Í spjaldinu {{ui:Eiginleikar}} smelltu á gildið sem þú vilt breyta. Það verður að textareit. Tómt gildi birtist sem *tómt*.
3. Sláðu inn nýja gildið.
4. Ýttu á {{key:Enter}}, eða smelltu annars staðar, til að halda því. Ýttu á {{key:Esc}} til að hætta við.
5. Skoðaðu gildið: það er nú feitletrað með bláu striki við hliðina, sem merkir breytt gildi.
6. Skoðaðu hlutann {{ui:Breytingar}} vinstra megin: breytingin er skráð sem *hlutur*: *reitur*, gamalt gildi í nýtt.
7. Endurtaktu fyrir önnur gildi eða aðra hluti.
8. Smelltu á {{ui:Vista sem IFC}} (sýnir hversu margar breytingar bíða, til dæmis "Vista sem IFC (3)"), eða ýttu á {{key:Mod+S}}.
9. Finndu "*upprunalegt heiti* (breytt).ifc" í niðurhalsmöppunni þinni.

## Hvað þú ættir að sjá

Stöðulínan segir "Vistaði *heiti* (breytt).ifc með *n* breytingum (… bæti). Upprunalega skráin þín er óbreytt." Listinn {{ui:Breytingar}} tæmist, tilbúinn fyrir næstu umferð.

## Tegundir gilda

- **Texti**: allt sem þú slærð inn er geymt eins og það er. Að hreinsa Heiti, Hlutargerð, Merki eða Lýsingu fjarlægir gildið.
- **Tölur**: sláðu inn venjulega tölu, eins og `2.4` eða `1200`, í einingum skrárinnar. Engin einingatákn. Annað sýnir "Notaðu tölu."
- **Heiltölur** (fjöldi, heiltölur): "Notaðu heiltölu." ef þú slærð inn aukastaf.
- **Já/Nei**: gildið verður valmynd með Já og Nei.

Hvert gildi heldur sinni IFC-gerð, þannig að tala helst tala og önnur forrit lesa hana rétt.

## Afturkalla

1. Smelltu á {{ui:Afturkalla}} í hlutanum {{ui:Breytingar}}, eða ýttu á {{key:Mod+Z}} meðan þú ert ekki að skrifa í reit.
2. Endurtaktu til að afturkalla meira. Hver afturköllun fjarlægir nýjustu breytinguna.

Þú getur ekki afturkallað yfir vistun: eftir vistun byrjar listinn upp á nýtt. Vistaða skráin geymir allt.

## Af hverju breytingin þín snertir aðeins einn hlut

Útflytjendur spara pláss með því að deila gögnum. Eitt eiginleikasett getur verið deilt af tuttugu hurðum, og eitt gildi ("Brunaþol: 60 mín") getur verið skráð í níutíu settum. Ef BimCraft breytti sameiginlega gildinu einfaldlega, myndi hver hlutur sem deilir því breytast líka.

Þess vegna afritar BimCraft áður en það skrifar:

- Ef eiginleikasettið sem þú breytir er deilt með öðrum hlutum fær hluturinn þinn sitt eigið afrit af settinu, og aðeins afritið breytist.
- Ef gildið er deilt með öðrum settum fær settið þitt sitt eigið afrit af gildinu.

Nágrannarnir halda gömlu gögnunum sínum. Þetta kallast *afritun við skrift* (copy-on-write). Það bætir nokkrum litlum færslum við skrána, sem hvert IFC-forrit les eðlilega.

**Gerðareiginleikar eru undantekningin, viljandi.** Sett merkt "(gerð)" tilheyrir gerð hlutarins, og í IFC les hver hlutur af þeirri gerð það þaðan. Ef þú breytir því breytist gerðin, þannig að hver hlutur af gerðinni sýnir nýja gildið. Listinn {{ui:Breytingar}} merkir slíkar breytingar með "(gerð)". Sjá [Breyta gerðareiginleika fyrir alla hluti af gerð](topic:type-vs-instance).

## Viðvaranir áður en þú tapar vinnu

- Að opna aðra skrá meðan þú ert með óvistaðar breytingar spyr "Þú ert með *n* óvistaðar breytingar á *skrá*. Henda þeim?" Smelltu á Hætta við til að halda áfram að vinna, og vistaðu síðan.
- Að loka eða endurhlaða flipanum með óvistuðum breytingum fær vafrann til að spyrja hvort þú viljir fara.

## Algeng mistök

- **Að skrifa einingar.** `2400 mm` er hafnað. Sláðu inn `2400`.
- **Að breyta gerðareiginleika þegar þú meintir einn hlut.** Leitaðu að athugasemdinni "(gerð)" áður en þú slærð inn. Ef þú vilt að einn hlutur sé öðruvísi, breyttu tilvikseiginleika eða merki eða heiti hans í staðinn.
- **Að búast við að upprunalega skráin breytist.** Vistun sækir alltaf nýja skrá. Skiptu sjálfur um upprunalegu skrána ef það er það sem þú vilt, og geymdu afrit.
- **Að ýta á {{key:Mod+S}} án breytinga.** BimCraft vistar aðeins þegar eitthvað er til að vista; annars gæti "Vista síðu" vafrans opnast. Lokaðu honum.
- **Að vista tvisvar og búast við tveimur litlum skrám.** Hver vistun geymir allar breytingar frá því þú opnaðir líkanið.
- **Að búast við að breytingar fari aftur í verkefnisskrá.** BimCraft skrifar aðeins IFC. Settu breytta IFC-skrána inn í hönnunarforritið þitt eins og þú flytur inn hvaða IFC sem er.
