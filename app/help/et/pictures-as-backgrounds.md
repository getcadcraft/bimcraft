---
title: Pildi paigutamine plaani alla
summary: Aseta PNG-, JPEG- või WebP-pilt (skannitud plaan, visand, saidifoto, aerofoto) tasandi plaani alla või vertikaaltasandile, mõõtkava kahe punktiga, teisalda, pööra, tuhmenda ja lukusta, vaata 3D-s ja plaani PDF-is ning hoia see mudeli kõrval paketis.
keywords: pilt, kujutis, taust, PNG, JPEG, WebP, skannimine, visand, foto, aerofoto, asukohaplaan, mõõtkava, läbipaistmatus, lukusta, alusjoon, jälgimine
from: e3c78d1f
---

## Pildi paigutamine

Lülita sisse {{ui:Joonista}}, mine tasandile ja vali menüüst {{ui:Versioon}} käsk {{ui:Pilt}}. Seejärel {{ui:Lisa pilt…}} ja vali PNG-, JPEG- või WebP-fail. Seda loetakse sinu brauseris ja seda ei laadita kunagi üles. See ilmub plaani alla, sobitatud vaatesse, ja tööriistarida ütleb, et pilt ei ole veel mõõtkavas. Kõik, mida joonistad, on pildi peal.

## Mõõtkava seadmine

Vali {{ui:Mõõtkava}}, klõpsa pildil kahel punktil, mille tegelik vahemaa on sulle teada (kahe seina otsad skannitud plaanil, trükitud mõõt visandil), seejärel sisesta vahemaa ja vajuta {{key:Enter}}. Pilt kasvab või kahaneb ümber esimese klõpsatud punkti. {{key:Esc}} tühistab.

## Kopeeritud ala kleepimine

MarkupCraftis kopeerib {{ui:Kopeeri ala}} osa PDF-lehest pildina. Tagasi BimCraftis, kui tasandi plaan on näha, vajuta {{key:Ctrl+V}} (või {{ui:Kleebi}} menüüs {{ui:Redigeeri}}): ala ilmub plaanile pildina, keskele, kuhu osuti on (või vaate keskele). Kui lehel oli joonise mõõtkava, tuleb see oma tegelikus suuruses, nii et sein sellel on sama pikk kui su seinad. Ilma selleta tuleb paberi suuruses ja {{ui:Mõõtkava}} algab, nii et saad klõpsata kahel punktil ja sisestada nende vahemaa. Kattena kopeeritud ala algab selle läbipaistmatusega, millega see kopeeriti. See on üks tagasivõtmise samm ja see hoitakse nagu iga pilt.

Kleepimine võtab selle, mida kopeerisid viimasena: kopeeritud ala või midagi, mille kopeerisid BimCraftis. {{key:Ctrl+V}} kleebib ka mis tahes muu PNG-, JPEG- või WebP-pildi sinu lõikepuhvrist, paigutatult nagu {{ui:Lisa pilt…}} ja veel mõõtkavastamata. Kopeeritud ala mäletatakse kuus tundi.

## Teisalda, pööra, tuhmenda, lukusta

{{ui:Teisalda}} võtab pildil alguspunkti ja seejärel koha, kuhu see peaks minema. {{ui:Pööra}} võtab nurga kraadides, pildi keskpunkti ümber. {{ui:Läbipaistmatus}} tuhmendab pilti, et sinu jooned silma paistaksid. {{ui:Lukusta}} hoiab selle joonistamise ajal liikumast; lukustatud pilt laseb sul siiski muuta läbipaistmatust ja pilti peita. Iga muudatus on üks tagasivõtmise samm.

## Mitu pilti, mitu tasandit

Pilt kuulub tasandile, millele see paigutati, ja on näha selle tasandi plaanil ja lae plaanil. Klõpsa pildil, et sellega töötada, või vali see loendist. {{ui:Peida}} lülitab selle välja ilma eemaldamata; {{ui:Eemalda}} (või {{key:Delete}}) võtab selle mudelist välja.

## Pildid 3D-vaates

Iga pilt seisab ka 3D-vaates lamava tasapinnana: tasandi plaani pilt lamab oma tasandil, vertikaaltasandi pilt seisab oma lõikejoone kohal. See joonistatakse mudeli peale ilma seda varjamata, ja mudel peidab selle osa pildist, mis on tema taga. Kattuvad pildid sorteeritakse kauguse järgi. Läbipaistmatus, Peida, Lukusta ja Eemalda töötavad samamoodi ning {{ui:Näita 3D-vaates}} lülitab kõik tasapinnad välja ainult 3D-vaates. Tasand hoiab kuni 8 pilti, et vaated oleksid kiired.

## Vertikaaltasandil olev pilt

Jaotises {{ui:Asukoht}} vali {{ui:Vertikaaltasand (lõikejoon)}} ja seejärel {{ui:Lisa pilt…}}. Klõpsa plaanil joone kahte otsa (seinapinna ots haardub) või vali tasandi nimega lõikejoon jaotises {{ui:Lõikejoone kohal}}, siis klõpsamist ei vajata. Pilt seisab tasandil selle joone kohal, sama lai kui joon. Määra oma {{ui:Laius}}, koht {{ui:Mööda joont}} ja {{ui:Kõrgus tasandist}} sisestades; {{ui:Pööra}} pöörab seda tema enda tasapinnas. Vertikaalset pilti ei joonistata plaani alla; plaan näitab selle joont, kui sellega töötad. BimCraftil ei ole interaktiivset 2D-lõiguaknat: lõiked ja vaated joonistatakse lehtedele ning pilte ei prindita neis lehevaadetes veel.

## Printimine

{{ui:Prindivaade}} plaanil kirjutab tasandi pildid PDF-i joonise alla, nende mõõtkavas, pöörde ja läbipaistmatusega, lehe piiridesse lõigatuna; peidetud pilt jääb välja. JPEG läheb sisse nagu on; muud pildid viiakse enne lehel 200 dpi-ni.

## Hoitakse mudeli kõrval

Pildi baite ei kirjutata IFC-teksti. Mudel viitab igale neist nime järgi (IfcDocumentReference, näiteks pictures/<id>.png) ja baidid liiguvad projektipaketis. Kasuta {{ui:Salvesta paketina…}} (või {{ui:Salvesta IFC-na}} ja vali see): saad ühe .ccbundle-faili mudeli ja selle piltidega, IFC jääb väikeseks ja muudatused kiired. Ava .ccbundle ja pildid on tagasi.

Tavaline .ifc ei saa pilti hoida ilma suureks minemata. Kui salvestad selle, ütleb BimCraft, mitu pilti on sellest väljas hoitud, ja pakub kas paketti või tavalist IFC-d, mis manustab pildid kuni 512 KB ja jätab ülejäänud välja. Tavaline .ifc, mis avatakse ilma oma paketita, näitab neid pilte puudu olevatena ja probleemide loend need loetleb; ava .ccbundle, millesse need salvestati. Esimese versiooni salvestatud failid, kus pilt oli IFC sees, avanevad ikka, ja paketina salvestamine viib nende pildid välja. Pilt hoitakse nii nagu on kuni 6 MB; suurem vähendatakse enne suuruselt ja sellest teatatakse. Teised programmid avavad mudeli ja ignoreerivad pilte. Pilt, mida pole veel mõõtkavastatud, on probleemide loendis märkusena.

## Lõike- ja vaatelehtedel

Vertikaaltasandi pilt (vali pildipaneelis {{ui:Vertikaalne}} ja klõpsa joone kahte otsa või aseta see nimega lõikejoone kohale) prinditakse lehevaadetesse, mis vaatavad otse selle peale. Lõige näitab pilti, mis seisab tema lõikejoonel või mis paigutati lõikejoone kohale nime järgi. Vaade näitab kõiki vertikaalseid pilte, mille tasapind on selle poole. Pilt joonistatakse vaate joonte alla, vaate mõõtkavas, vaatega lõigatuna, ja säilitab oma läbipaistmatuse. Ava {{ui:Lehed…}}, et seda näha; lehe PDF kannab seda pildina. Tagant vaadatuna on pilt peegelpildina, nagu 3D-s. Peidetud pilte ei jäeta välja.
