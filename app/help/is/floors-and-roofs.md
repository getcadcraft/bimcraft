---
title: Herbergi, gólf, loft og þök
summary: Rými myndast þegar veggir loka þeim; gefðu rými eða allri byggingunni gólf og loft, og settu valmaþak eða gaflaþak á veggina. Allt þetta fylgir þegar veggirnir færast.
keywords: rými, svæði, flatarmál, ummál, gólf, plata, undirgólf, loft, þak, valmaþak, gaflaþak, halli, útskot, þakskegg, mænir, dalur, 6/12
from: 1fb1813c
---

## Hvað þú gerir

Ljúktu við skel byggingarinnar. Rými koma sjálfkrafa frá veggjunum; gólf, loft og þak taka einn smell hvert. Þar sem þau eru fundin út frá veggjunum fylgja þau þegar veggirnir færast.

## Rými

Hvert rými sem er lokað af teiknuðum veggjum er rými. Það birtist um leið og síðasti veggurinn lokar því, með númeri (101, 102 … á fyrsta kóta, 201 … á þeim næsta) og heiti (**Rými 1**, **Rými 2** …), og flatarmál þess birtist í miðju þess á grunnmyndinni.

- Með {{ui:Velja}} kveikt, smelltu inni í rými til að velja það. Í **Eiginleikum** breytirðu **Heiti** (til dæmis `Eldhús`) og **Númeri**; flatarmál og ummál þess birtast.
- Eyddu vegg milli tveggja rýma og þau verða eitt; teiknaðu vegg þvert yfir rými og það verður tvö. Rými heldur heiti sínu og númeri meðan veggirnir í kringum það færast.
- Ekki er hægt að eyða rými eitt og sér: það er rýmið sem veggirnir mynda.

Flatarmál er mælt innan við veggfletina. Rými eru vistuð sem IFC-rými með gólfflatarmáli, ummáli, hæð og rúmmáli, svo listarnir lesi þau (sjá [Leggðu saman magn, skráðu einingar og gerðu lista yfir svæði](topic:quantity-totals)).

## Gólf

1. Smelltu á {{ui:Gólf}}.
2. Veldu **Þetta rými** eða **Öll byggingin**, **Gerð** (viðargólf eða steypt plata) og þykkt þess.
3. Bentu inn í rými (eða hvar sem er innan byggingarinnar). Það sem gólfið myndi þekja er auðkennt ásamt flatarmáli þess.
4. Smelltu. Efri brún gólfsins er gólf kótans; það fer niður um þykkt sína. Gólf fyrir alla bygginguna nær út að ytri flötum veggjanna.

## Loft

1. Smelltu á {{ui:Loft}}.
2. Veldu **Þetta rými** eða **Öll byggingin**, og **Hæð** þess yfir gólfinu.
3. Bentu inn í rýmið og smelltu.
4. Til að sjá það neðan frá, með grindinni og ljósunum á því, skiptirðu grunnmyndinni yfir í loftmynd hennar: sjá [Sýn, sýnisvið og eigin blöð](topic:views-and-sheets).

## Þak

1. Á kótanum þar sem veggirnir bera þakið, smelltu á {{ui:Þak}}.
2. Skrifaðu **Halla** sem hækkun yfir 12 (`6/12`) eða í gráðum (`30`), og **Útskot**.
3. Veldu **Endana**: **Valmaþak** (allar hliðar halla), **Gaflar á stuttu hliðunum** eða **Gaflar á löngu hliðunum** (bygging með fjórum hliðum), eða **Einhallaþak**.
4. Bentu inn í bygginguna: þakskeggið og mæninn birtast á grunnmyndinni. Smelltu.

Þakið situr ofan á veggjunum, á kótanum fyrir ofan þá, og undirhlið þess mætir ytri fleti veggjanna. Gaflenda er fyllt með gaflvegg jafnþykkum og veggnum fyrir neðan. Bygging í L-, T- eða U-lögun fær valmaþak þar sem vængirnir mætast í dölum.

## Breyttu þeim

Veldu gólf, loft eða þak (í 3D-sýninni, líkantrénu, eða þak með því að smella inni í útlínu þess á kótanum fyrir ofan) og breyttu því í **Eiginleikum**: gerð gólfs, þykkt þess og hversu langt efri brún þess er yfir kótanum; hæð lofts, þykkt þess og **Mynstur** (grindina sem loftmynd teiknar á það: ekkert, 600 × 600, 600 × 1200, 2' × 2' eða 2' × 4'); halli þaks, útskot, endar og þykkt. Sérhver breyting er eitt skref í afturköllun.

## Gefðu gólfi, lofti eða þaki tegund með lögum

Gólf, loft og þak geta fengið **tegund**, eins og veggur: nefnda uppbyggingu úr lögum, hvert með sínu efni og raunverulegri þykkt.

- **Þegar þú setur það.** Verkfærin Gólf, Loft, Þak og Teikna gólf hafa lista **Tegund** á sinni röð. **Engin tegund** setur það eins og áður, með eigin þykkt. Tegund setur það jafnþykkt og lög tegundarinnar samanlögð.
- **Síðar.** Veldu gólf, loft eða þak og veldu **Tegund** í Eiginleikum. Einingin helst sama einingin: staðsetning hennar, herbergi og gögn haldast og ekkert er teiknað aftur. Aðeins tegund hennar, þykkt og efni breytast. Þannig verður eining á skissustigi að fullunninni einingu: skiptu almennu tegundinni út fyrir raunverulega.
- **Breyta tegundinni…** opnar tegundarritilinn á þeirri tegund: lögin frá **efsta** lagi niður, kjarnann, virkni hvers lags og LOD-merkið á tegundinni. Vistun breytir öllum einingum tegundarinnar í einu skrefi, og ein afturköllun tekur það til baka. Breyting á upphafstegund vistar afrit sem þína eigin tegund.
- Meðan eining hefur tegund er **Þykkt** hennar tegundarinnar og ekki hægt að slá hana inn. Veldu aðra tegund, eða **Engin tegund**, til að breyta henni.

Upphafstegundirnar eru ein **almenn** tegund fyrir hvert (eitt lag af almenna efninu, merkt LOD 200) og tvær lagskiptar (merktar LOD 300): timburgólf á bitum og steypugólf með ílögn; timburþak og steypt flatt þak; gifsplötuloft og hangandi flísaloft. Þetta eru upphafsgildi, ekki prófaðar byggingar: athugaðu lögin áður en þú treystir þeim.

Listinn **Lög: flatarmál og rúmmál** sýnir hvert lag í sérhverri tegund í notkun; sjá [Listar, mál og PDF](topic:plan-schedules-and-pdf). Gólf-, þak- og loftategundir ferðast milli verkefna í tegundapakka eða sem atriði úr Safni; sjá [Tegundapakkar](topic:type-packs).

## Góð að vita

- Að færa, bæta við eða eyða veggjum býr til rýmin, gólfin, loftin og þakið yfir þeim aftur.
- Þak passar við hvaða útlínu sem er. Til að gefa hverjum vegg sinn halla, gaflenda eða einhallaenda, upphækkaða þakrás, þakbrún og undirklæðningu, eða til að teikna eitt þakflöt, sjá [Þök: halli fyrir hvern vegg, gaflar, einhallar og þakflötur](topic:roofs).
- {{key:Delete}} eyðir völdu gólfi, lofti eða þaki.
