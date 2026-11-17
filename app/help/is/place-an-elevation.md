---
title: Setja inn útlit og opna sýn þess
summary: Settu útlitsmerki á grunnmynd, beindu því í þá átt sem það á að horfa, finndu síðan teikninguna í verkefnavafranum, breyttu henni þar og settu hana á blað. Skref fyrir borðaskipulag og fyrir klassískt skipulag.
keywords: útlit, útlitssýn, útlitsmerki, útlitsmiði, setja inn útlit, nýtt útlit, búa til útlit, ytra útlit, hliðarsýn, framsýn, sýn frá punkti, hvar er útlitið mitt, opna útlit, útlit á blaði, snúa útliti við, endurnefna útlit, norðurútlit, raða sýnum, skipta sýn, grunnmynd og þrívídd hlið við hlið
from: a7cfd2b9
---

## Það sem þú gerir

Þú býrð til þitt eigið útlit: teikningu af byggingunni séða frá punkti sem þú velur, og horfir í þá átt sem þú velur. Það tekur tvo smelli á grunnmynd. Teikningin er síðan skráð með hinum útlitum byggingarinnar.

:::note
Hliðarnar fjórar eru þegar til staðar. Sérhver bygging hefur Norður-, Austur-, Suður- og Vesturútlit í {{ui:Verkefnavafri}} undir {{ui:Útlit}} án þess að setja nokkuð inn. Settu inn þitt eigið þegar þú vilt sýn frá öðrum stað: hornrétt á skáhalla álmu, innan úr innigarði eða af einum vegg inni í rými.
:::

## Hvar skipunin er

- Borðaskipulag: {{ui:Sýn}} › **Búa til** › {{ui:Kóti}}.
- Klassískt skipulag: kveiktu á {{ui:Teikna}}, og síðan {{ui:Smíð}} › {{ui:Kóti}}.
- Í hvaða valmyndarstíl sem er heitir skipunin Kóti; skipanaleitin finnur hana og skipanalínan tekur við ELEVATION.

## Skref

1. Veldu {{ui:Kóti}}. Útlit er sett á grunnmynd, þannig að ef þú varst í þrívíddarsýninni sýnir BimCraft grunnmynd hæðarinnar sem þú varst á. Bendillinn segir **Smelltu þar sem útlitsmerkið stendur**.
2. Smelltu þar sem sýnin er tekin. Fyrir ytra útlit skaltu smella utan við bygginguna, spölkorn frá veggnum sem þú vilt sjá.
3. Bendillinn segir nú **Smelltu í þá átt sem það horfir**. Færðu þig í átt að byggingunni: ör sýnir stefnuna og stutta línan þvert yfir fyrsta smellinn er brúnin sem sýnin horfir frá. Smelltu.
4. Hringur með númeri og bendli birtist á grunnmyndinni. Það er útlitsmerkið. Það fyrsta er 1, það næsta 2.
5. Ýttu á Esc til að ljúka, eða haltu áfram og settu inn annað.

Að setja inn merki er eitt skref: {{key:Mod+Z}} afturkallar það.

## Opna teikninguna

Grunnmyndin er áfram fyrir framan þig eftir annan smellinn. Teikninguna er að finna í {{ui:Verkefnavafri}}:

1. Opnaðu {{ui:Útlit}}. Þitt er skráð á eftir hliðunum fjórum sem **Elevation 1**.
2. Smelltu á blýantshnappinn {{ui:Breyta í þessari sýn}} á línu þess til að sjá teikninguna og vinna í henni: færa veggi, hurðir, glugga og hæðir, bæta við athugasemdum og málsetningum. Sjá [Breyta í útlitum og sniðum](topic:edit-in-elevations).
3. Smelltu á línuna sjálfa til að opna teikningasettið, eða bættu sýninni á blað sem þú átt sjálfur. Sjá [Sýnir og blöð](topic:views-and-sheets).

Í klassíska skipulaginu er verkefnavafrinn í vinstra spjaldinu meðan {{ui:Teikna}} er virkt. Í borðaskipulaginu er hann flipinn {{ui:Verkefnavafri}} undir Eiginleikar.

## Hvað sýnin sýnir

- Allt fyrir framan merkið, eins langt og byggingin nær. Ekkert fyrir aftan það.
- Hæðirnar, með nöfnum sínum og hæðum.
- Ef merkið stendur inni í byggingunni er allt sem það stendur í skorið þar, eins og snið sker það. Fyrir hreint ytra útlit skaltu standa úti.

## Breyttu því

Veldu merkið á grunnmyndinni (smelltu á hringinn þess með {{ui:Velja}}). Eiginleikar hefur:

- {{ui:Merki}}: númer þess eða nafn sem þú átt sjálfur, allt að 8 stafir.
- {{ui:Snúa sýninni við}}: horfa í gagnstæða átt frá sama stað.
- {{ui:Horfa eins langt og}}: hversu langt fyrir framan merkið sýnin nær. 0 sýnir allt.

Ýttu á Delete til að fjarlægja merkið og teikninguna þess. Afturkalla setur hvort tveggja aftur.

:::tip
Til að sjá grunnmynd og þrívíddarsýn samtímis meðan þú vinnur skaltu nota {{ui:Sýn}} › **Gluggar** › {{ui:Raða sýnum}} í borðaskipulaginu, eða {{ui:Skipta}} í klassíska skipulaginu. Smellur á sýnaflipa fer aftur í eina sýn.
:::

## Takmarkanir

- Ekki er hægt að draga eða snúa merki á grunnmyndinni enn sem komið er. Eyddu því og settu það inn aftur, eða notaðu {{ui:Snúa sýninni við}}.
- Á lista yfir sýnir sem þú getur bætt á blað er útlit sem þú hefur sett inn skráð með sniðunum.
- Hurða- og gluggamerki eru teiknuð á hliðarútlitin fjögur, ekki á útlit sem þú settir inn.

## Í IFC

Merkið er vistað í skránni sem IfcAnnotation með heitinu „Elevation 1“ og hlutartegundinni „Elevation marker“, á hæðinni sem það var sett á. Annað forrit sýnir það sem athugasemd; teikninguna sjálfa býr BimCraft til úr líkaninu í hvert skipti.
