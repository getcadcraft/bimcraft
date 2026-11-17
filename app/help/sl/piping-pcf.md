---
title: Pošljite cevovod v program za analizo napetosti ali izometrijo in ga preberite nazaj (PCF)
summary: Vode cevovoda modela zapišite kot datoteko komponent cevovoda PCF ali preberite datoteko PCF iz programa za analizo napetosti ali izometrijo ter njeno cev narišite kot vode.
keywords: pcf, datoteka komponent cevovoda, analiza napetosti, izometrija, izometrije, izvoz, uvoz, cevovod, obrat, jeklena cev, premik projekta, drugi programi
from: 24f91355
---

## Kaj boste naredili

PCF je navadna besedilna datoteka, ki jo programi za analizo napetosti in izometrijo berejo in pišejo. Našteje komponente vsakega cevovoda z njihovimi končnimi točkami in premeri.

## Izvoz

1. Izberite orodje Cev. Vrstica z možnostmi prikazuje **Izvozi PCF**.
2. Kliknite nanj. Zapiše se vsak vod cevi v modelu: ravna cev, kolena (zavoj za 90 stopinj, sicer upogib), T-kosi s svojo točko odcepa, redukcije in ventili.
3. Datoteka uporablja milimetre. Premeri so nazivni premeri v milimetrih. Središčna točka kolena je njegov vogal, kjer se stakneta njegova kraka.

PCF se zapiše za jeklene cevi s stikovnim varom. Vod v drugem materialu se prav tako zapiše, s ključi komponent za jeklo, in to je zabeleženo v plošči Težave.

## Uvoz

1. Izberite orodje Cev in kliknite **Uvozi PCF…**, nato izberite datoteko.
2. Ravna cev do kolen, upogibov, ventilov in prirobnic postane en vod na trenutni etaži. Sprememba dimenzije začne nov vod. Odcep T-kosa postane svoj vod, ki se začne v središču T-kosa.
3. Model sam postavi svoje fitinge. Redukcije in T-kosi se ne kopirajo: pojavijo se tam, kjer se stikajo vodi različnih dimenzij ali odcep.

:::note
Višine v datoteki so prebrane kot višine nad trenutno etažo. Obremenitve, podpore in sama analiza napetosti niso v datoteki PCF in se ne prenesejo.
:::

## Preverite, kaj je prišlo

- Skupna dolžina cevi na cevovod mora ustrezati izvornemu.
- Plošča Težave našteje po enkrat: kolena, katerih središčna točka ni enako oddaljena od obeh koncev, cev brez dolžine in premer, ki ni standardna dimenzija.

## Cevovod, ki je že v datoteki IFC

Ko je odprta datoteka IFC, **Izvozi PCF** zapiše tudi njene lastne odseke cevi, fitinge in ventile poleg vodov, ki ste jih narisali. Odsek dobi svoje konce iz svojih priključnih mest ali iz koncev svojega telesa. Fiting brez priključnih mest se izpusti, plošča Težave pa to pove. Izvozite lahko samo iz IFC, kadar model nima narisanih vodov.

Pri uvozu podpore, odcepi (olets), prirobnice, tesnila in zamaški v datoteki niso narisani. Plošča Težave našteje, koliko jih je bilo izpuščenih, da nič ne izgine neopazno.
