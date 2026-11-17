---
title: Pima umbali, maeneo ya nyuso na maeneo katika 3D
summary: Pima kati ya pointi mbili za modeli ya IFC ukishika kona na kingo, soma tofauti kwenye X, Y na Z, na pima eneo la uso tambarare.
keywords: pima, kipimo, umbali, urefu, eneo, eneo la uso, shika, kona, kingo, kanda, rula, kibali, mahali, latitudo, longitudo, lat long, viwianishi, marejeo ya kijiografia, ubadilishaji wa ramani, EPSG, upimaji, eastings, northings, WGS 84, datum
from: 5f430bba
---

## Utakachofanya

Angalia kibali, urefu wa ukuta au ukubwa wa uso moja kwa moja kutoka modeli, bila kufungua programu ya uandishi.

## Hatua

1. Fungua modeli ya IFC.
2. Bofya {{ui:Pima}} kwenye upau wa zana, au bonyeza {{key:M}}. Upau unafunguka chini ya mwonekano.
3. **Umbali:** ukiwa umechagua {{ui:Umbali}}, bofya pointi ya kwanza, kisha ya pili. Karibu na kona kielekezi kinashika hapo, karibu na ukingo kinashika kwenye ukingo; lebo ndogo kwenye kielekezi inasema ni ipi. Kila jozi ya mibofyo hutengeneza kipimo kimoja.
4. **Eneo la uso:** chagua {{ui:Eneo la uso}} kisha bofya uso. Uso wote tambarare unawaka na eneo lake linaonekana.
5. **Mistari myoofu:** shikilia {{key:Shift}} unapochagua pointi ya pili, au bonyeza {{ui:Nyoofu}} kwenye upau ili kuiweka. Mstari kisha unakimbia kwenye mhimili mmoja ambao kielekezi kiko karibu nao zaidi (katika mwonekano wa juu, kwenye X au Y ya mpango; katika mionekano mingine kwenye X, Y au Z), na lebo ya kielekezi inasema "straight along an axis". {{key:M}} bado huanzisha na kusimamisha Kupima.
6. Bofya {{ui:Futa}} kuondoa vipimo, au {{ui:Imekamilika}} (au {{key:Esc}}) kusimamisha kupima.

## Utakachokiona

- Mstari kati ya pointi mbili wenye urefu wake juu yake, na kwenye upau urefu pamoja na mbali unavyoenda kwenye X, Y na Z (katika mihimili ya modeli, Z ikielekea juu), vyote katika {{ui:Vipimo}} vilivyochaguliwa kwenye upau wa zana.
- Eneo la uso katika mita za mraba, juu ya uso na kwenye upau.
- Lebo zinabaki kwenye vipimo vyake unapozunguka, kusogeza na kuvuta.
- Unapopima, mibofyo haichagui vipengele. Ndege ya sehemu au kisanduku bado vinakata modeli, na unaweza kupima kile kinachoonyesha, pamoja na nyuso zilizokatwa.

## Pointi iko wapi duniani

Bofya {{ui:Mahali}} kwenye upau wa kupima, kisha bofya pointi kwenye modeli (inashika kwenye kona na kingo kama inavyofanya kwa umbali). Upau unaonyesha:

- **latitudo na longitudo**, kwa digrii za desimali na kwa digrii, dakika na sekunde, katika WGS 84 kwa kuanzia;
- **viwianishi vya ramani** (eastings na northings, vimeandikwa katika {{ui:Vipimo}} vilivyochaguliwa kwenye upau wa zana) katika mfumo wa ramani wa modeli yenyewe, kwa mfano `EPSG:28356`;
- **urefu** na datum wima ambayo faili linaitaja, na **datum yake yenyewe** ya faili (kwa mfano GDA94).

{{ui:Nakili}} huweka yote kwenye ubao wa kunakili kwa mstari mmoja. Badilisha mfumo ambao latitudo na longitudo ziko chini ya {{ui:Mipangilio}} › {{ui:BimCraft}} › {{ui:Mahali}}: WGS 84 (kama GPS na ramani za wavuti), datum yenyewe ya faili, au nyingine ya kawaida kama ETRS89 au NAD83.

Hii inahitaji modeli yenye marejeo ya kijiografia: moja iliyosafirishwa pamoja na viwianishi vya ramani (ubadilishaji wa ramani hadi mfumo uliopangwa wenye msimbo wa EPSG). Modeli inayobeba latitudo na longitudo ya eneo tu inapata nafasi ya makadirio, iliyohesabiwa kutoka pointi ya eneo na kaskazini yake halisi, na upau unasema hivyo. Modeli kadhaa zikiwa wazi, kila pointi inatumia marejeo ya kijiografia ya modeli yake.

:::note
Kuhama kati ya datum (kwa mfano GDA94 hadi WGS 84) kunafanywa bila faili za gridi, kwa hiyo ni sahihi kwa mita chache; mstari wa hali unasema ni sahihi kwa kiasi gani. Viwianishi vya ramani vyenyewe ni sahihi kabisa.
:::

## Makosa ya kawaida

- **"…has no georeference".** Faili halina ubadilishaji wa ramani wala latitudo na longitudo ya eneo. Lisafirishe tena pamoja na mfumo wake wa viwianishi umewekwa (viwianishi vilivyoshirikiwa / pointi ya upimaji katika zana ya uandishi).
- **Viwianishi vya ramani lakini bila latitudo na longitudo.** Faili linataja mfumo wake wa ramani bila msimbo wa EPSG, au lenye msimbo usio kwenye orodha; mstari wa hali unasema ni upi.

- **Pointi inatua kwenye uso, si kwenye kona.** Kushika kunaangalia kipengele kilicho chini ya kielekezi. Sogea karibu zaidi na kona, au vuta karibu.
- **Eneo ni dogo kuliko ulivyotarajia.** Nafasi wazi hazihesabiwi, na uso unaopinda ni nyuso kadhaa: bofya kila moja.
- **{{key:Esc}} imesimamisha kupima.** {{key:Esc}} ya kwanza inaondoa umbali uliokatwa nusu; ya pili ndiyo inasimamisha.

## Ifuatayo

- [Kata modeli ya IFC kwa ndege ya sehemu](topic:section-plane)
- [Ficha, tenga na tazama kupitia vipengele](topic:hide-and-isolate)
