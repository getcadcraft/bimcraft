---
title: Raðaðu, vistaðu og fluttu út lista
summary: Hópaðu lista, gefðu honum millisummur og samtölur, bættu við dálki sem er lesinn úr eiginleika, vistaðu hann sem uppsetningu í skránni og fluttu hann út sem vinnubók (.xlsx), sem texta til að líma í netreikning, eða sem CSV. Skrifstofustaðallinn fyllir inn það sem listinn tilgreinir ekki.
keywords: uppsetning lista, hópa eftir, millisumma, samtala, fyrirsagnir, skrifstofustaðall, sjálfgefnar reglur, uppsetning, hurðalisti eftir hæðum, brunaþol, járnvara, xlsx, vinnubók, netreikningur, líma, csv, útflutningur, reiknitafla, frumefni, velja af lista, tala
from: 95dfd801
---

## Hvað þú gerir

Breyttu venjulegum lista í þann sem skrifstofan þín gefur út: hópaðan eftir hæð, gerð eða rými, með millisummum og samtölu, með dálkunum sem þú þarft, undir eigin nafni. Sendu hann síðan í reiknitöflu. Sérhver röð og sérhver tala veit enn hvaðan hún kom.

## Skref

1. Kveiktu á {{ui:Teikna}} og opnaðu **Listar** í vinstra spjaldinu. Veldu lista, til dæmis **Hurðir**.
2. Fyrir ofan töfluna velurðu **Hópa eftir** (dálk í listanum, eins og Hæð eða Gerð, eða **Engin hópun**) og **Samtölur** (**Engar samtölur**, **Ein samtala**, eða **Millisummur og samtala**). **Eins og stillt** skilur valið eftir vistaðri uppsetningu eða skrifstofustaðli.
3. Til að bæta við dálki sem er lesinn úr frumefnunum slærðu inn heiti eiginleika eða merkis undir töflunni (til dæmis `FireRating`, `Pset_DoorCommon.FireRating` eða heiti merkis eins og `Ironmongery`) og smellir á **Bæta við dálki**. BimCraft les fyrst eiginleikasöfn frumefnisins, og síðan gerðar þess. Þegar ekkert frumefni hefur gildi enn segir það það; dálkurinn fyllist sjálfur þegar gildi er sett.
4. Slærðu inn heiti (til dæmis „Hurðalisti eftir hæðum“) og smelltu á **Vista sem uppsetningu**. Uppsetningin er geymd í byggingarskránni og bætist við listann Lista undir heitinu sínu. Hún fylgir öllum breytingum á líkaninu. **Fjarlægja þessa uppsetningu** tekur hana út aftur. Hvort tveggja er eitt skref í afturköllun.

## Smelltu á tölu til að velja það sem hún kemur úr

Smelltu á hvaða röð sem er, eða á hvaða stakri tölu sem er, til að velja frumefnin á bak við hana á grunnmyndinni og í 3D:

- röð velur frumefni þeirrar raðar;
- millisumma eða samtala velur allt sem hún leggur saman, og fyrirsögn hóps velur sinn hóp;
- tala með eigin frumefni velur þau: **Frádrættir** veggjagerðar velja hurðir hennar og glugga, og veggflatarmál rýmis velur veggi þess.

Það sama virkar í skjali sem búið er til úr líkaninu: í forskoðuninni smellirðu á tölu á lista.

## Útflutningur

- **Sækja Excel** vistar .xlsx-vinnubók. Lengdir, flatarmál, rúmmál og fjöldi eru raunverulegar tölur í þeirri einingu sem dálkurinn sýnir (fet og tommur haldast sem texti). Annað blað, **Frumefni**, listar fyrir hverja línu GlobalId frumefnanna á bak við hana.
- **Afrita fyrir Google Sheets** setur listann á klippiborðið sem texta aðskilinn með tabulator. Í Google Sheet smellirðu á reit A1 og límir. **Opna nýtt Google Sheet** opnar `sheets.new`, vistfang Google fyrir tóman reit, á þínum eigin Google-aðgangi. BimCraft skráir sig ekki inn hjá Google og sendir ekkert þangað: límingin er þín.
- **Sækja CSV** vistar töfluna eins og hún er uppsett á skjánum.

## Skrifstofustaðallinn

Skrifstofa getur sagt einu sinni hvernig listar hennar eru uppsettir. Kveiktu á viðbótinni **Sjálfgefnar reglur** ([Sjálfgefnar reglur](topic:default-policies)) og stilltu, í **Stillingar › Almennt › Sjálfgefnar reglur › Uppsetning lista (skrifstofustaðallinn)**:

| Regla | Hvað hún gerir |
|---|---|
| Hópa lista eftir | Hæð, Gerð, Rými eða engin hópun, fyrir alla lista sem hafa slíkan dálk |
| Samtölur í listum | Engar samtölur, ein samtala í lok, eða millisumma undir hverjum hópi og samtala |
| Titill lista | Mynstur, til dæmis `{project}: {schedule}` |
| Dálkafyrirsagnir | Eins og skrifað, MEÐ HÁSTÖFUM eða Með stórum upphafsstöfum |

Staðallinn gildir um alla lista, hver sem setur þá upp: venjulegu listana í spjaldinu, vistaða uppsetningu, lista sem aðstoðarmaður setur upp, útflutningana og listana í skjölum. Uppsetning sem tilgreinir sína eigin hópun, samtölur eða titil heldur þeim; staðallinn fyllir inn restina. Spjaldið segir hvaða hluta skrifstofustaðallinn stillti. Reglurnar ferðast í skránni Sjálfgefnar reglur með hinum.

## Gott að vita

- Uppsetning nefnir uppsprettulistann og dálka sína; hún geymir engar tölur. Tölurnar eru lesnar úr líkaninu í hvert sinn.
- Listar sem eru ekki raðir frumefna (samsetningar veggja og efnisskýringin) hafa enga uppsetningu og engan útflutning hér.
- Aðstoðarmaður getur gert þetta allt fyrir þig: sjá [Láttu gervigreindaraðstoðarmann vinna með líkanið þitt](topic:assistants).
