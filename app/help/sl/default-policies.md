---
title: "Privzete politike: nastavite, s čim se začne nova stavba"
summary: Enkrat povejte, s katero vrsto zidu, etažami, prvim listom, oznakami LOD, enotami in orodjem se začne nova stavba, za metrske in imperialne projekte, ter delite politike v pisarni kot majhno datoteko.
keywords: privzeto, privzete, privzete politike, politika, pisarniški standard, pisarniške privzete nastavitve, predloga, nova stavba, prva vrsta zidu, metrski zid, zidovina, LOD, raven razvoja, prvi list, papir, merilo, etaže, imena etaž, višina etaže, orodje za zid, enote, deljenje, izvoz, uvoz, json
from: 42379aa5
---

## Kaj boste naredili

Povejte BimCraft, s čim naj se začne nova stavba, da nihče v pisarni ne spreminja istih stvari vsakič znova. To je dodatek: je izklopljen, dokler ga ne vklopite, in politika, ki je ne nastavite, pusti BimCraftovo privzeto vrednost tako, kot je.

:::note
Te so privzete vrednosti za **nove** stavbe in **nove** stvari. Projekt, ki ste ga že začeli, se ne spremeni.
:::

## Koraki

1. Odprite Nastavitve, pojdite na {{ui:Dodatki}} in vklopite {{ui:Privzete politike}}.
2. V Nastavitvah odprite zavihek **BimCraft** in na seznamu levo izberite {{ui:Privzete politike}}.
3. Nastavite politike, ki jih želite. Vsaka se začne na **BimCraftovi lastni** vrednosti, z vrednostjo v oklepaju. Politika s poljema **Metrično** in **Imperialno** sprejme eno vrednost za vsako vrsto projekta; izpolnite samo tiste, ki jih potrebujete.
4. Gumba Shrani ni: vsaka sprememba se shrani, ko jo naredite. Vrednost, ki je ni mogoče uporabiti, je zavrnjena z opozorilom, stara pa ostane.
5. Kliknite {{ui:Nova stavba}}. Pogovorno okno se napolni iz vaših politik, poleg vsake vrednosti, ki jo politika nastavi, pa piše **iz vaših privzetih politik**. Katerokoli od njih lahko še spremenite pred {{ui:Ustvari}}.

## Politike

- **Enote nove stavbe**: enote se ob ustvarjanju preklopijo na to.
- **Število etaž**, **Imena etaž** in **Višina etaže**. V imenu `{n}` šteje 1, 2, 3; `{n0}` šteje 0, 1, 2; `{nn}` in `{nn0}` počneta isto z dvema števkama. Tako `Etaža {nn0}` da Etaža 00, Etaža 01, Etaža 02.
- **Prva vrsta zidu**: kar orodje za zid nariše najprej. Metrična pisarna lahko začne z Zunanja zidovina 300 mm, medtem ko imperialni projekti ostanejo pri Zunanja 2×6.
- **Oznaka LOD na začetnih vrstah zidov**: raven razvoja (LOD 100 do 500), ki jo kaže devet začetnih vrst, kjer koli je vrsta navedena. Glejte [Gradnja zidnih sestavov](topic:wall-assemblies).
- **LOD nove izdelane vrste zidu**: oznaka, s katero se nova vrsta začne v urejevalniku vrst. Tam jo lahko spremenite.
- **Prvi list**: njegov papir, merilo, številka lista in ime (uporabite `{level}` za ime najnižje etaže) ali brez prvega lista.
- **Velikosti opomb na papirju** (Nastavitve › Splošno › Privzete politike): višine pisarne v milimetrih, kot so natisnjene, za opombe, besedilo kote, oznake, imena prostorov, črke krogcev mreže, naslove pogledov in besedilo razpredelnic. Nova stavba jih prevzame ob ustvarjanju in jih ohrani v svoji datoteki. Glejte [Risanje v polni velikosti, označevanje po merilu](topic:annotation-sizes).
- **Orodje, ki je aktivno po ustvarjanju**: Izberi, kakor BimCraft sam od sebe, ali Zid, da prva dva klika na tlorisu že narišeta zid.

## Postavitev razpredelnic: pisarniški standard

V **Nastavitve › Splošno › Privzete politike**, pod **Postavitev razpredelnic (pisarniški standard)**, nastavite, kako je vsaka razpredelnica združena, ali ima vmesne vsote in skupno vsoto, njen naslov in velikost črk naslovov stolpcev. Vsaka razpredelnica, ki sama ne navede svojih, jih prevzame, kdorkoli jo nastavi. Glejte [Postavitev, shranjevanje in izvoz razpredelnice](topic:schedule-layouts).

## Delite jih v pisarni

1. V Nastavitvah odprite zavihek **Splošno** in izberite {{ui:Privzete politike}}.
2. Po želji vpišite **Ime pisarne**. Zapiše se v datoteko.
3. Kliknite {{ui:Shrani v datoteko}}. Dobite majhno datoteko, ki se konča z `.ccdefaults.json`.
4. Na drugem računalniku vklopite dodatek, odprite isto mesto in kliknite {{ui:Naloži iz datoteke}}. Politike iz datoteke nadomestijo tiste na tem računalniku.

Zavihek Splošno ima tudi **Sistem enot novega projekta**, ki velja za vsako aplikacijo, ki ima dodatek, in {{ui:Ponastavi vse politike}}. {{ui:Ponastavi na BimCraftove lastne privzete vrednosti}} na zavihku BimCraft počisti samo BimCraftove.

## Dobro je vedeti

- Datoteka je navaden odprt JSON: seznam imen politik in vrednosti. Politika, ki jo datoteka navaja in je ta različica ne pozna, je izpuščena in navedena v sporočilu; ostale se naložijo.
- Politike so shranjene v tem brskalniku za vsako aplikacijo CadCraft na tem računalniku. Niso shranjene v datoteki stavbe in se ne sinhronizirajo med računalniki: uporabite datoteko.
- Oznaka LOD na začetnem tipu prihaja iz politike na tem računalniku. Tip, ki ga naredite kot kopijo začetnega, nosi svojo oznako v datoteki stavbe.
- BimCraft nima nastavitve natančnosti, zato tukaj ni politike natančnosti.
- Stavba, začeta iz predloge, prinese lastne etaže in liste predloge. Politika vrste zidu in enot še velja.
- Izklopite dodatek in vse je spet BimCraftovo lastno. Vaše politike se ohranijo za takrat, ko ga znova vklopite.
