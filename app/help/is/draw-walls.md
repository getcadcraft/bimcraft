---
title: Teikna veggi
summary: Teiknaðu veggi á grunnmynd hæðar með því að smella á horn eða slá inn lengdir; hornin tengjast sjálf og veggirnir eru vistaðir sem IFC.
keywords: bogadreginn, bogi, staðsetningarlína, jöfnun, veggur, veggir, teikna, grunnmynd, gólfgrunnmynd, rými, horn, tengja, veggtegund, 2x6, 2x4, cmu, steinsteypa, hæð, hæðir, kóti, slegin lengd, hornrétt, smellun
from: 8269cd4b
---

## Hvað þú gerir

Teiknaðu veggi byggingar á grunnmynd af hverri hæð. Smelltu þar sem veggurinn byrjar og síðan á hvert horn; BimCraft tengir hornin fyrir þig, gefur hverjum vegg lög hans (klæðning, undirklæðning, grindarstoðir, gipsplata …) og lætur hann ná upp á hæðina fyrir ofan. Þrívíddarsýnin sýnir veggina jafnóðum.

## Opna grunnmyndina

1. Byrjaðu nýja byggingu ([Byrja nýja byggingu](topic:start-a-new-building)) eða opnaðu IFC-líkan.
2. Smelltu á {{ui:Teikna}} á tækjastikunni. Ný bygging opnast með teikninguna kveikta.
3. Grunnmynd hæðar sýnir vinstra megin og þrívíddarsýnin hægra megin. Veldu hæðina í listanum efst á grunnmyndinni, eða með hringlaga hnappinum við hliðina á henni í spjaldinu **Hæðir**.
4. {{ui:Grunnmynd}}, {{ui:Skipta}} og {{ui:3D}} eru verkfæri í röðinni {{ui:Sýn}} á tækjastikunni (skipanirnar PLAN, SPLIT og flýtilyklarnir virka eins og áður). Notaðu {{ui:Grunnmynd}} fyrir grunnmyndina eina, {{ui:Skipta}} fyrir bæði, og {{ui:3D}} til að loka grunnmyndinni. Þegar glugginn er mjór (eða viðmótsstærðin stór) setur {{ui:Skipta}} grunnmyndina fyrir ofan þrívíddarsýnina í stað þess að vera við hliðina á henni.

Grunnmyndin sker hæðina 1200 mm (4'-0") fyrir ofan gólf hennar, eins og gólfgrunnmynd gerir. Skrunaðu til að zooma; dragðu með miðju eða hægri hnappi (eða haltu {{key:Space}} inni og dragðu) til að hliðra. Þegar {{ui:Velja}} er kveikt hliðrar venjulegur dráttur líka. {{key:F}} með bendilinn yfir grunnmyndinni passar hana.

## Teikna herbergi

1. Smelltu á {{ui:Veggur}} (eða ýttu á {{key:W}}).
2. Veldu veggtegundina í fyrsta listanum, til dæmis **Útveggur 2×6** eða **Innveggur 2×4**.
3. Veldu hæð hans: **Upp að hæðinni fyrir ofan** (veggurinn fylgir ef sú hæð færist til), **Upp að** hæð enn ofar fyrir vegg sem nær yfir nokkrar hæðir (stigaop, tvöfalt rými, há gaflhlið), eða **Föst hæð** og sláðu hana inn. Slíkur veggur tilheyrir hæðinni sem þú teiknaðir hann á; grunnmyndir hæðanna sem hann nær í sýna hann ljósari, herbergin þar lokast upp að honum, og þú getur smellt hurðum og gluggum í hann af þeim grunnmyndum (hurð stendur á gólfi þeirrar hæðar). Til að færa eða móta vegginn sjálfan skaltu fara á þá hæð sem hann byrjar á.
4. Smelltu þar sem fyrsti veggurinn byrjar.
5. Smelltu á hvert horn. Hver smellur býr til vegg; sá næsti byrjar þar sem síðasti endaði. Lengd og horn sjást við hlið bendilsins.
6. Smelltu aftur á fyrsta punktinn til að loka herberginu. Stöðulínan segir hversu marga veggi herbergið hefur, og í miðlínuham fær hver veggur ytra lag sitt utan á herberginu.
7. Ýttu á {{key:Esc}} (eða hægrismelltu, eða tvísmelltu) til að hætta án þess að loka.

Hornin tengjast sjálf: tveir veggir mætast í skálínu (mitre), veggur sem endar á öðrum stoppar við andlit hans (T), og þrír eða fleiri veggir á sama punkti deila horninu. Veggir sem skerast eru látnir vera eins og þeir eru.

Heilt herbergi í einu: opnaðu {{ui:Form}} fyrir ferhyrning, snúinn ferhyrning, marghyrning, boga, veggi á völdum línum eða umhverfis útlínu (sjá [Veggjaform, skipting, útfærsla, teygja og læsing](topic:wall-tools)).

## Veldu viðmiðun teikningar

Veldu **Miðlína**, **Innri flötur** eða **Ytri flötur** áður en fyrsti smellur er gerður. Þegar flötur er valinn lýsa smellir þínir og innsláttar lengdir þeirri fleti; BimCraft færir miðlínu veggsins um hálfa heildarþykkt og tengir samliggjandi horn. Veldu **Ytri hlið til vinstri** eða **Ytri hlið til hægri** miðað við stefnu teikningarinnar. Fyrir lokaða útlínu teiknaða rangsælis er ytri hliðin hægra megin; réttsælis, vinstra megin. Með **Innri flötur** er líkami veggsins hinum megin við línuna þína frá ytri hliðinni; með **Ytri flötur** er hann hinum megin. Flatateikning heldur þeirri ytri hlið sem þú valdir þegar þú lokar lykkjunni. Á miðlínunni taka veggir sem loka ekki herbergi þá ytri hlið sem þú valdir; þegar herbergi er lokað stillir hver veggur ytri hlið sína utan á herberginu af sjálfu sér, hvernig sem þú teiknaðir það.

Breyting á veggtegund, viðmiðun eða ytri hlið endar núverandi keðju. Nálægt snúningshorni eru löng skálínuhorn takmörkuð með því að skilja eftir ferkantaða enda.

Meðan teiknað er getur endapunktur yfir auðu rými jafnast lárétt eða lóðrétt við endapunkt veggs eða fyrra horn. Brotin leiðarlína tengir þann punkt við smellibendilinn. {{key:Shift}} heldur teikningarstefnunni hornréttri; jöfnunin hættir þá meðfram henni. Nálægir endapunktar, miðpunktar og skurðpunktar veggja hafa forgang fram yfir fjarlæga jöfnun.

## Staðsetningarlína

Með **Viðmiðun** á **Ytri flötur** eða **Innri flötur** heldur veggurinn þeirri hlið sem staðsetningarlínu sinni. Ef veggurinn þykknar síðar eða ytri hlið hans er snúin, helst sú hlið á sínum stað og veggurinn stækkar eða snýst um hana. Beinn veggur sem mætir henni í horni fylgir, þannig að hornið lokast enn. Þú getur breytt staðsetningarlínunni síðar í **Eiginleikar**: sjá [Breyta vegg, hurð eða glugga](topic:change-a-wall-or-door).

## Teikna bogadreginn vegg

1. Smelltu á {{ui:Veggur}} og veldu síðan **Bogadreginn** í **Lögun**-listanum í valkostaröðinni.
2. Smelltu þar sem veggurinn byrjar, og síðan þar sem hann endar.
3. Smelltu á punkt á boganum. Eða sláðu inn hæð bogans og ýttu á {{key:Enter}}.
4. Keðjan heldur áfram frá enda veggsins. Ýttu á {{key:Esc}} til að ljúka henni.

Bogadreginn veggur tengist veggjunum við enda sína (horn- og T-tengingar virka), myndar herbergi og heldur hurðum og gluggum meðfram boganum. Þau haldast bein einingar, hornrétt á vegginn á miðjunni, og fjarlægð þeirra er mæld eftir boganum. Veggur getur snúist mest þrjá fjórðu hluta hrings. Hann smellist í enda sína og á miðpunkt bogans.

Ekki enn smíðað fyrir bogadregna veggi: {{ui:Stytta / lengja}} og {{ui:Horn}}, grindarsmíði, sjálfvirkar málsetningar á grunnmynd og smellun eftir boganum. Sjá [Hvað er ekki enn til](topic:not-built-yet).

## Slá inn lengd í stað þess að smella

Eftir fyrsta smellinn skaltu slá inn og ýta á {{key:Enter}}:

| Innsláttur | Teiknar |
|---|---|
| `12'6"` eða `3810` | vegg þessarar lengdar, í þá stefnu sem bendillinn sýnir |
| `12'6"<90` | þessa lengd, í þessu horni (gráður, rangsælis frá hægri) |
| `@3000,0` | að punkti í þessari fjarlægð frá þeim síðasta, þvert og upp |
| `1200,3400` | að þessum punkti á grunnmyndinni |

Ef tala er slegin inn meðan Veggur-verkfærið er virkt fer hún beint í reitinn {{ui:Lengd}}. Í fetum og tommum er venjuleg tala tommur; í millimetrum er hún millimetrar. Þú getur alltaf slegið inn einingu: `3.5 m`, `10 ft`, `6 1/2"`.

## Smellur

- Endar veggja, hornpunktar þeirra og miðpunktar veggja smellast þegar bendillinn er nálægt (ferningur, þríhyrningur).
- Bendillinn smellist á miðlínu veggjar eða aðra hvora flötina (kross).
- Frá síðasta punkti heldur stefnan sér á 15° fresti þegar hún er nálægt; haltu {{key:Shift}} inni til að halda henni við 0°, 90°, 180° eða 270°.
- Frjálsar stefnur námunda lengdina að 1/2" (eða 10 mm).

## Breyta, afturkalla, eyða

- Hver veggur er eitt skref í **Breytingar**: {{ui:Afturkalla}} og {{ui:Endurgera}} taka veggi til baka og setja þá aftur.
- Með {{ui:Velja}} kveikt smellirðu á vegg á grunnmyndinni til að velja hann; þrívíddarsýnin og **Eiginleikar** fylgja. {{key:Delete}} eyðir völdum veggjum, og veggirnir sem þeir tengdust eru hreinsaðir aftur.

## Hæðir

Spjaldið **Hæðir** sýnir hverja hæð með kóta hennar og hæð.

- Sláðu inn nýtt heiti, kóta eða hæð og ýttu á {{key:Enter}}. Breyting á hæð (eða kóta) hæðar færir hæðirnar fyrir ofan um sömu tölu, og veggir sem ná upp að hæð fylgja.
- {{ui:Bæta við hæð efst}} bætir við hæð fyrir ofan þá efstu, jafn háa og hún.
- {{ui:Bæta við kóta fyrir neðan}} bætir við hæð undir þeirri lægstu (kjallara), jafn háa og hún: kóti hennar er neikvæður þegar lægsta hæðin er í 0, og engin önnur hæð færist. {{ui:Afturkalla}} tekur hana aftur burt.
- {{ui:Afrita þessa hæð…}} teiknar aftur það sem er á hæðinni sem þú horfir á, á annarri hæð eða á nýrri hæð ofan á: veggi hennar með hurðum og gluggum, gólf og loft (ekki þök). Veggir sem náðu upp að hæðinni fyrir ofan ná upp að hæðinni fyrir ofan þá nýju; herbergi birtast af sjálfu sér. Eitt {{ui:Afturkalla}} tekur allt til baka. Ef hin hæðin hefur þegar veggi bætist afritið við þá.
- {{ui:Einingar}} á tækjastikunni velur einingarnar (fet og tommur, tommur, decimal-fet, millimetrar, sentimetrar eða metrar) fyrir allt sem teikniverkfærin sýna og lesa.

## Vista

Smelltu á {{ui:Vista sem IFC}}. Hver veggur er IFC-veggur með miðlínu sinni, sammengdu lögun, gerð og lögum, `Pset_WallCommon` og grunnmagni (lengd, hæð, flatarmál og rúmmál), þannig að önnur BIM-forrit geta opnað hann og birt hann í lista.

## Gott að vita

- Veggir eru teiknaðir á miðlínu sinni. Þykktin kemur úr veggtegundinni.
- Grunnmyndin sýnir veggi sem teiknaðir eru hér fyllta, og allt annað (safnhluti, líkön úr öðrum forritum) skorið af sama fleti, með því sem liggur undir skurðinum í þunnum línum.
- Veggir sem gerðir eru af öðrum forritum birtast á grunnmyndinni, en ekki er enn hægt að breyta þeim með þessum verkfærum.
