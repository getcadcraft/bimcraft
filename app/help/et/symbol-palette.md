---
title: Sümbolipalett
summary: Leia elektri- ja santehnikasümbolid nime või pildi järgi, märgi tähega need, mida kasutad, ja paiguta need plaanile ühe klõpsuga.
keywords: sümbolipalett, sümbolite tööriistariba nupp, sein järgib, sümbolid, elektrisümbolid, santehnikasümbolid, santehnikaplaan, WC-pott, tualett, pesukauss, valamu, vann, dušš, põrandakaev, puhastusava, aiakraan, boiler, ventiil, siiberventiil, külm vesi, soe vesi, heitvesi, õhutus, joonestiil, lemmikud, otsing
from: 67f20bc0
---

## Mida sa teed

Ava üks paneel, mis loetleb elektrisümbolid ja santehnikaplaani sümbolid koos piltide ja nimedega, leia see, mida tahad, ja paiguta see plaanile. Siin pole interneti vaja: sümbolid tulevad rakendusega kaasa.

## Ava see ja paiguta sümbol

1. Ava mudel ning ava {{ui:Versioon}} › {{ui:Sümbolipalett}} (sisestatav käsk: SYMBOLS). Sama nupp on joonistusriba menüüs Tööriistad ning nimega **Sümbolid** tööriistariba teegi rühmas.
2. Vali komplekt: **Elektri** või **Santehnika** või **Kõik komplektid**. Kirjuta otsingukasti, et nimekirja kitsendada. Otsida saab nime või lühendi järgi (WC, CW, HB).
3. Klõpsa sümbolil. Plaan on valmis seda paigutama.
   - Elektrisümbol käivitab elektritööriista koos valitud seadmega, nii et kõik, mis kehtib jaotise [Elektriplaan](topic:electrical-plan) kohta, rakendub: klõpsa plaanil, üks tagasivõtmise samm.
   - Santehnikasümbol käivitab plaanisümboli tööriista. Klõpsa plaanil. Seinal asuv seade (WC-pott, pesukauss, vann, valamu, aiakraan) haakub lähima seinapinnaga, seljaga vastu seina; äravoolud, ventiilid, boiler ja joonestiilid lähevad sinna, kuhu klõpsad.
4. Vajuta {{key:R}}, et pöörata sümbolit 90 kraadi ({{key:Shift}}+{{key:R}} pöörab teises suunas), või sisesta nurk valikuribal väljale **Pööre**. Peatamiseks vajuta {{key:Esc}}.

Seinale haakunud seade või aiakraan mäletab seda seina: kui sein liigub, liigub sümbol koos sellega (sama pind, sama kaugus mööda seina) samas tagasivõtmise sammus. Kui sa seina kustutad, jääb sümbol sinna, kus ta oli, ja **Probleemid** loetleb „kaotas oma seina“; liiguta või kustuta see. Seintest eemal paigutatud sümbolid ei ole millegagi seotud.

Iga paigutatud sümbol on üks tagasivõtmise samm. Paigutatud sümbol on IFC-failis plaani märkus oma sildiga (WC1, WC2, ...). Vali see, et muuta selle silti või pööret **Omadustes**, või vajuta {{key:Delete}}.

## Mis on santehnikakomplektis

Seadmed (WC-pott, pissuaar, pesukauss, vann, dušš, köögivalamu, ühekordne valamu), põrandakaev, põranda- ja seinapuhastusavad, aiakraan, seinahüdrant, boiler, ventiilid (siiber, kerk, kuul, tagasilöök, liblikas, rõhku alandav) ning joonestiilid koos lühenditega: külm vesi (CW), soe vesi (HW), soe vee tagasivool (HWR), heitvesi (W), õhutus (V), sadevesi (SD) ja gaas (G). Joonised skaleeruvad plaaniga, nii et säilitavad oma suuruse trükitud lehel. Joonestiil on lühike tükk, mis näitab stiili plaanil; tegelikke torustikke joonista torutööriistadega.

:::note
Need on tavalised santehnikaplaani tähised, mille on joonistanud meie; need ei ole sertifitseeritud standardite ISO 4067-1 ega ASME Y32.4 järgi. Neid on võrreldud avalike jooniselegendide ja koolitusmaterjalidega (loend on komplekti allikamärkuses, mis ütleb, kus me vastame ja kus erineme). Need ei ole kopeeritud ühestki tootest ning neid võib vabalt kasutada (Apache-2.0). Jooniste komplektid erinevad, nii et kontrolli oma projekti legendi. Need on plaanisümbolid, mitte santehnikaprojekt: need ei määra torude suurusi ega kontrolli norme.
:::

## Lemmikud ja klaviatuur

- Klõpsa sümboli tähel (või vajuta sellel {{key:F}}), et see lemmikuks märkida. Lemmikud on nimekirjas esimesed ja jäävad sellesse brauserisse. **Ainult lemmikud** näitab ainult neid.
- {{key:Down}} otsingukastist viib sümbolite sekka; nooleklahvid, {{key:Home}} ja {{key:End}} liiguvad nende vahel; {{key:Enter}} valib fokuseeritud sümboli; {{key:Esc}} sulgeb palett.
- Telefonis on palett ekraani alumises servas leht; see taandub, kui valid sümboli, et näeksid plaani. Ava see uuesti menüüst Versioon või valikuriba nupust **Palett**.

:::tip
Kui fail kasutab sümbolkomplekti, mida see versioon ei sisalda, näitab plaan sümboli kohal kasti ja **Probleemid** loetleb selle.
:::

## Seo paigutatud element sümboliga

Teegi valgusti on 3D-element, aga elektriplaan näitab seda oma sümbolina. Paigutad selle **üks kord** ja seome:

1. Vali {{ui:Versioon}} › **Sümbolilink** (või sisesta SYMBOLLINK). Vasakule paneelile avaneb jaotis Sümbolilink.
2. Vali paigutatud elemendid plaanil või 3D-vaates. Jaotis ütleb, mitu on valitud ja millega nad on seotud.
3. Vali **Sümbol** (mis tahes sümbolikomplektist: Elekter, Santehnika) ja vali **Seo**.

Element on endiselt üks element ning iga loend loeb ta ühe korra:

- **3D** näitab alati selle keha.
- **Plaan** näitab oma plaanikuju nagu varem.
- Plaan, mille **See vaade näitab seotud elemente** on seatud väärtusele **Nende sümbol (teenuste paigutus)**, näitab sümbolit oma kohal. Klõps sümbolil valib elemendi. Valik jääb sellele vaatele (korruse põrandaplaanile, lae plaanile või tähistusele) faili.

**Pööra sümbolit 90°** pöörab sümbolit elemendi suhtes. **Eemalda seos** võtab seose ära; element jääb alles. Loend **Seotud sümbolid** loetleb iga seotud elemendi ühe korra koos tema tasandi ja ruumiga, kus ta seisab.

Pole veel valmis: vaate valik lehel on valik selle tasandi plaanile, mida ta näitab; elektritööriistaga paigutatud seadmed on sümbolid igas plaanis nagu varem.
