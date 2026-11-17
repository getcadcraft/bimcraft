---
title: Skerðu IFC-líkan með sniðplani
summary: Sneiddu 3D-líkanið ofan frá, framan eða frá hlið, eða haltu aðeins því sem er innan sniðkassa eða rúmmáls úr nokkrum kössum með hallandi flötum, til að sjá inn í það; færðu skurðinn með drætti eða innslætti, snúðu honum við og veldu hvað skurðurinn sýnir.
keywords: snið, sniðplan, sniðkassi, handföng, draga, spássía, valkassi, klippikassi, skurður, klipping, sneiða, grunnmyndarskurður, grunnmynd, útlit, innan, innri, snúa við, frávik, sniðrúmmál, þrepað snið, L-laga, halli, hallandi skurður, skálína, aukaplan
from: 6315e71a
---

## Hvað þú gerir

Skerðu í gegnum IFC-líkan með einu plani til að sjá inn í það: ofan frá fyrir grunnmynd, eða framan eða frá hlið fyrir snið í gegnum bygginguna.

## Skref

1. Opnaðu IFC-líkan. Sjá [Opnaðu IFC-líkan og skoðaðu í 3D](topic:open-ifc-model).
2. Smelltu á {{ui:Snið}} á tækjastikunni, eða ýttu á {{key:X}}. Líkanið er skorið hálfa leið upp og stika birtist undir tækjastikunni.
3. Veldu hvaðan skorið er: {{ui:Ofan}}, {{ui:Framan}} eða {{ui:Hlið}}. Framan og Hlið snúa líka sýninni til að horfa á skurðinn.
4. Færðu skurðinn: dragðu **Frávik**-sleðann, eða sláðu inn fjarlægð í metrum í reitinn og ýttu á {{key:Enter}}. Þú getur slegið inn millimetra líka, til dæmis `1200 mm`.
5. Smelltu á {{ui:Snúa við}} til að halda hinni hlið skurðarins.
6. Smelltu á frumefni á skurðinum til að sjá eiginleika þess.
7. Smelltu á {{ui:Slökkt}}, smelltu á {{ui:Snið}} aftur, eða ýttu á {{key:X}} til að taka skurðinn burt.

## Sniðkassi

Smelltu á {{ui:Kassi}} í sömu stiku til að halda aðeins því sem er innan kassa. Hver af {{ui:X}}, {{ui:Y}} og {{ui:Z}} hefur tvo sleða: hvar kassinn byrjar og hvar hann endar, í metrum frá jaðri líkansins. Gildin birtast við hliðina á þeim.

- {{ui:Kassi utan um valið}} smeygir kassanum utan um frumefnin sem þú valdir og aðdregur að þeim. Hann skilur eftir 300 mm á hverri hlið; breyttu því í {{ui:Stillingar}} › {{ui:BimCraft}} › {{ui:Svigrúm í kringum valið}}.
- Með völdum frumefnum gerir {{ui:Sýna}} › {{ui:Sniðkassi utan um valið}} eða {{key:Shift+X}} það sama í einu skrefi, jafnvel þótt enginn skurður sé virkur.
- **Handföng** á kassanum færa hann með bendlinum: dragðu ferning á miðri hlið til að færa þá hlið, eða á miðri brún til að færa tvær hliðar sem mætast þar, eða á horni til að færa þrjár. Sleðarnir fylgja. Í {{ui:Ofan}} færir horn kassann í grunnmynd, í {{ui:Framan}} eða {{ui:Hlið}} í útliti.
- {{ui:Allt líkanið}} opnar kassann aftur fyrir allt líkanið.
- {{ui:Ofan}}, {{ui:Framan}} eða {{ui:Hlið}} fara aftur í eitt plan.

## Rúmmál úr nokkrum kössum, hallandi fletir og aukaplön

Kassi er ekki alltaf rétta formið: þrepað snið, L-laga vængur, eða skurður meðfram vegg sem er ekki réttur við rist.

1. Í {{ui:Kassi}} smellirðu á {{ui:Bæta við kassa}}. Skurðurinn heldur nú því sem er innan **einhvers** kassanna, þannig að tveir kassar mynda þrepað eða L-laga rúmmál. Listinn við hliðina sýnir hvaða kassa sleðarnir breyta ({{ui:Kassi 1}}, {{ui:Kassi 2}}…); {{ui:Fjarlægja þennan kassa}} tekur valda kassann í burtu. Rúmmál heldur allt að 8 kössum.
2. Opnaðu {{ui:Halli og flatir}} til að móta valda kassann:
   - Veldu {{ui:Flötur}} og sláðu inn hversu mikið hann hallar hvora leið, í gráðum (allt að 80). Flöturinn snýst um miðju sína; hinir flatirnir haldast þar sem sleðarnir settu þá. {{ui:Rétta}} setur hann aftur.
   - {{ui:Bæta við fleti}} sker kassann með einu plani til viðbótar. {{ui:Fletir}} er leiðin sem hliðin sem er skorin burt snýr, í gráðum frá X í átt að Y; {{ui:Halli}} er hversu mikið hún hallar upp (0 fyrir lóðrétt plan, 90 fyrir flatt); {{ui:Frávik}} er hversu langt planið er frá miðju kassans, í metrum. × fjarlægir það. Kassi tekur allt að 6 aukaplön.
3. Þar sem rúmmálið sker í gegnum fast efni eru skurðflötin fyllt eins og áður, líka þar sem tveir kassar mætast í þrepi.

:::tip
Ef útlínan hverfur og ekkert er eftir þýðir það að hallarnir eða planin skilja ekkert eftir inni í þeim kassa; stikan segir það. Hallaðu fleti til baka eða breyttu fráviki plansins.
:::

## Bygging snúin á lóðinni

Mörg líkön setja bygginguna í horn við ása skráarinnar (raunnorður, sameiginleg hnit). Þegar veggirnir liggja í horn byrjar nýtt snið réttum horni við bygginguna: {{ui:Framan}}, {{ui:Hlið}} og kassinn liggja eftir eigin veggjum, og {{ui:Hornrétt á bygginguna}} í sniðstikunni er kveikt. Smelltu á hann fyrir ása líkansins, og aftur til að fara til baka (stöðulínan segir hversu mikið bygginguna er snúið). Með **Stillingar › BimCraft › Bygging snúin á lóðinni › Eins og staðsett á lóðinni** byrja snið og sýnir þess í staðinn á ásum líkansins. Sjá [Stillingar](topic:settings).

## Það sem þú átt að sjá

- **Ofan** heldur því sem er undir skurðinum, svo þú horfir niður í herbergin. Frávikið er mælt upp frá botni líkansins.
- **Framan** heldur því sem er á bak við skurðinn, séð framan frá; **Hlið** heldur því sem er handan hans, séð frá hlið. Frávikið er mælt frá framhlið eða hlið líkansins.
- Þunn lituð útlína sýnir hvar planið er.
- Þar sem planið sker í gegnum vegg, plötu eða annað fast efni er skurðflöturinn fylltur með dökkum lit, eins og teiknað snið. {{ui:Fylling}} á stikunni kveikir og slekkur á þessu.
- Sýnisteningurinn neðst í hægra horninu snýr líkaninu til að horfa á skurðinn frá hvaða hlið sem er.
- Smellt er á það sem þú sérð: það sem er skorið burt er ekki hægt að velja.

## Algeng mistök

- **Ekkert breyttist.** Skurðurinn gæti verið fyrir ofan þakið eða utan líkansins. Dragðu sleðann, eða sláðu inn minna frávik.
- **Frávikið hoppaði til baka.** Fjarlægð utan líkansins er færð á endann þess, og stöðulínan segir það.
- **Athugasemd sýnir aðeins hluta rúmmálsins mína.** Athugasemd (BCF) heldur einum kassa með hallandi flötum og planum: fyrsta kassa rúmmálsins. Stöðulínan segir það þegar þú býrð til athugasemdina.
- **Skurðurinn er holur.** {{ui:Fylling}} á stikunni er slökkt: smelltu á hana til að fylla skurðflöt veggja, platna og annarra fastra hluta.
- **Fyllt skurð lítur út fyrir að vera flekkótt eða vantar bút.** Fylling krefst lokaðra fastra hluta; frumefni sem lögun þess í skránni er ekki lokuð (eitt blað, laufblöð trjáa) er ekki fyllt heldur er það látið ómálað. Frumefni úr hlutum í mismunandi litum (rammi og gler hans) er fyllt þegar hlutarnir loka saman.
- **Hvar er sniðstikan?** Hún situr efst í 3D-sýninni sem hún sker: í 3D-helmingnum í {{ui:Skipta}}, og undir teiknistikunni í {{ui:Grunnmynd}} einni. Í stuttri sýn skrollar hún.

## Næst

- [Sýndu og faldu hæðir, rými og jaðra](topic:storeys-and-spaces)
- [Sjáðu DWG- eða DXF-teikningu í 3D](topic:dwg-in-3d): teikningar í 3D hafa sama sniðplan
