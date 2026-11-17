---
title: Ehitusala, sellel olev hoone ja selle tasandid
summary: Joonista ehitusala kontuur, aseta ja pööra hoone alal, lisa tasandeid antud kõrgustel või jaga hoone kõrgus ning joonista valitud tasandil.
keywords: ehitusala, ehitusala plaan, ehitusjoon, tagasihoidmine, servituut, kasutusõigus, sõidukoridor, kinnistupiir, kinnistu, krunt, piir, hoone paigutus, hoone pööramine, hoone paigutamine, tasandid, korrused, lisa tasandeid, jaga kõrgust, korrusekõrgus, IfcSite, IfcBuilding, IfcBuildingStorey, ruumistruktuur
from: 48d10c1e
---

## Mida sa teed

Seadista IFC-mudeli osad, mis hoiavad kõike muud: ehitusala, sellel olev hoone ja hoone tasandid.

Mudel on korraldatud **ehitusalana**, mis hoiab **hoonet**, mis hoiab oma **tasandeid** (korruseid); seinad, põrandad ja kõik muu kuuluvad tasandile. {{ui:Fail}} › {{ui:Uus hoone}} seadistab kõik kolm. Teise programmi mudel, millel on hoone, kuid ei ole ehitusala, saab ehitusala esimesel joonistamisel: hoone paigutatakse sinna, kus ta juba oli.

## Ehitusala joonistamine

1. Lülita sisse {{ui:Joonista}}, seejärel vali {{ui:Versioon}} › {{ui:Ehitusala}}.
2. Klõpsa ehitusala nurki (tööriist kinnitub nagu Seina tööriist). Klõpsa esimest nurka uuesti; topeltklõps või {{key:Enter}} lõpetab. {{key:Backspace}} võtab nurga tagasi.
3. Rida näitab ehitusala pindala. Joonista uuesti, et muuta.

Iga tasandi plaan näitab ehitusala kontuuri kinnistupiirina.

## Hoone paigutamine ehitusalale

Kui {{ui:Ehitusala}} on sisse lülitatud, sisesta hoone **X** ja **Y** ehitusalal ning selle **Pööre** kraadides, või klõpsa {{ui:Aseta hoone klõpsuga}} ja klõpsa kohta, kuhu hoone alguspunkt läheb. Kõik hoones (tasandid, seinad, telgvõrgud, kõik, mis joonistasid) liigub koos sellega; ehitusala ja selle kontuur jäävad paigale. Plaanid näitavad iga tasandit jätkuvalt hoone suhtes ristkülikus.

## Ehitusjooned ja servituudid

Ehitusjooned ja servituudid (kasutusõigused, sõidukoridorid) joonistatakse ehitusalale piirangutena. Need **hoiatavad, nad ei blokeeri kunagi**: sein, mis ulatub ühe kohale, joonistatakse nii, nagu palusid, ja hoiatus, mis nimetab seina ja joone või servituudi, ilmub Probleemides. Liiguta sein tagasi ja hoiatus kustub. Hoiatuse võib kinnitada põhjendusega (näiteks lubatud leevendus, mille ametiasutus andis).

- **Ehitusjoon tagasihoidmistest.** {{ui:Versioon}} › {{ui:Ehitusjoon}}, seejärel {{ui:Tagasihoidmised}}: sisesta, kui kaugel joon on ehitusala igast piirist. Piirid on tööriista sisselülitamise ajal plaanil nummerdatud. Joon arvutatakse nendest kaugustest ja järgib ehitusala kontuuri, kui joonistad selle uuesti nii mitme piiriga. Kaugused on sinu omad, võetud sinu omandidokumendist või planeeringust; BimCraft ei täida ühtegi.
- **Joonistatud ehitusjoon.** Kui {{ui:Ehitusjoon}} on sisse lülitatud, klõpsa selle punkte ja lõpeta topeltklõpsu või {{key:Enter}}ga. Lõpeta esimesel punktil suletud joone jaoks: sees olev ala on see, kuhu võib ehitada, ja sein, millel on mõni osa väljaspool seda, saab hoiatuse. Avatud joon hoiatab ainult seina kohta, mis seda ületab.
- **Servituut.** {{ui:Versioon}} › {{ui:Servituut}}: vali selle liik, sisesta nimi, registreeritud viide ja laius, seejärel klõpsa selle keskjoont ja lõpeta (riba) või sulge see esimesel punktil (ala). Sein, millel on mõni osa sellel, saab hoiatuse igal tasandil.
- Nägu, mis on täpselt joonel, on puutuv, mitte ristuv (tolerants on 1 mm).
- Iga valikukomplekti praegust massivalikut kontrollitakse samamoodi nagu seinu: mass väljaspool piiri, üle ehitusjoone või servituudil saab hoiatuse. Vaata [Massivariandid kõrvuti](topic:massing-options).
- Vali üks nupuga {{ui:Vali}}, et muuta selle nime, viidet, liiki või laiust, liigutada seda või kustutada.

Need joonistatakse iga tasandi plaanile, lehtedele ja plaani-PDF-ile: ehitusjooned katkendjoonena, servituudid punktiirina, igaüks oma sildiga. IFC-failis on igaüks annotatsioon (IfcAnnotation, tüüp BuildingLine või Servitude) ehitusalal, koos oma joonega lihtsa kõverana, mida teised programmid saavad lugeda. Kontroll kasutab iga seina tegelikku kontuuri plaanil, koos selle liitekohtadega nii, nagu on joonistatud; kõverat seina kontrollitakse oma paksuse järgi selle keskjoone ümber.

## Tasandite lisamine

{{ui:Tasandid}} paneelis {{ui:Lisa tasand ülale}} lisab ühe ja {{ui:Lisa tasand allapoole}} lisab ühe madalaima alla (keldri, negatiivsel kõrgusel). {{ui:Lisa tasandeid…}} lisab mitu korraga:

- **Nendel kõrgustel**: sisesta kõrgused madalaimast tasandist kõrgemal, eraldatud komadega (näiteks `12', 24', 36'`). Kõrgused, millel on juba tasand, jäetakse vahele.
- **Jaga hoone kõrgus**: sisesta hoone kõrgus ja tasandite arv. Olemasolevad tasandid liiguvad oma uutele kõrgustele madalaimast ülespoole, puuduvad lisatakse ja nende kohal olevad jäävad paigale.

Seinad, mis ulatuvad ülemise tasandini, järgivad seda, samuti veerud ja rambid.

{{ui:Kopeeri see tasand…}} (samast paneelist) kopeerib selle tasandi peale, mida vaatad, teisele tasandile või uuele tasandile ülal, nii et plaan saab hoones ühe sammuga üles liikuda. Vaata [Seinte joonistamine](topic:draw-walls).

## Joonista tasandil

Iga {{ui:Joonista}} tööriist töötab tasandi kohta, mis on valitud plaani tasandiloendis (või valitud {{ui:Tasandid}} paneelist): see, mida joonistad, kuulub sellele tasandile.

## Mida peaksid nägema

- Iga neist muudatustest on üks samm: {{key:Mod+Z}} võtab selle tagasi.
- IFC-failis: ehitusala (IfcSite) koos oma kontuuri ja pindalaga, hoone (IfcBuilding), mis on sellele paigutatud, ja tasandid (IfcBuildingStorey) hoones.

Vaata ka [Koordinaadid BimCraft'is](topic:coordinates) projekti alguspunkti ja mõõdistuspunkti kohta.
