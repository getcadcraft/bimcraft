---
title: Faylasha BimCraft furo oo kaydiyo
summary: Qaab kasta oo BimCraft furo, waxa uu hayo, waxa uu kaydiyo, meesha faylasha kaydsamaan, iyo waxa isbeddela browser-yada iyo marka aad khadka ka baxsan tahay.
keywords: qaabab, fur, kaydi, dhoofin, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, soo gelin, asturnaan, cabbirka faylka
from: a7275dbf
---

BimCraft wuxuu akhriyaa faylasha kombuyutarkaaga, tab-ka browser-ka gudihiisa. **Waxba lama soo rarin** CadCraft ama qof kale. Marka aad kaydiso, BimCraft wuxuu browser-ka siiyaa fayl cusub oo la soo dejiyo; weligiis ma qoro fayl aad furtay.

## Waxa uu furo

| Qaabka | Dhamaadka magaca | Waxa aad hesho |
|---|---|---|
| IFC | `.ifc` | Moodelka 3D, dabaqyada, tirada walxaha iyo sifooyinka walax kasta. Magacyada, calaamadaha iyo qiimaha sifooyin keliya ayaa la beddeli karaa. |
| Faylasha mashruuca iyo qoyska | `.rvt` `.rfa` `.rte` `.rft` | Kaarka faylka: nooca la kaydiyay, dhismaha, shaqada wadajirka, macluumaadka mashruuca, cabbirrada qoyska, faylasha lagu xiray iyo sawirka horudhaca. Ma jiro 3D. |
| DWG | `.dwg` | Naqshadda 2D: meesha moodelka, xaashi kasta, lakabyada, naqshadaha lagu xiray, sawirrada iyo aragtida daabacaadda. Meesha moodelka waxaa lagu arkaa 3D. Noocyada AutoCAD 2000 ilaa 2018 ayaa la hubiyey. |
| DXF | `.dxf` | Sida DWG oo kale. |
| STEP | `.step` `.stp` | Qayb, qalab ama moodel uu bixiyo alaab-bixiyaha (AP203, AP214, AP242) oo 3D ah: jirka adag kasta wuxuu noqdaa hal walax (building element proxy) moodel IFC yar oo ku yaal hal dabaq, oo la akhriyo sida saddex-geesood cabbirkiisa dhabta ah, isku-dhis oo qayb walba ku yaal meesha faylku dhigay. Waxay u shaqeysaa sida IFC kasta oo kale: sifooyin, qaybo, cabbir, u kaydi sida IFC. Midabada iyo geedka isku-dhiska lama akhrin. |
| Daruuraha dhibcaha | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Scan-ka muuqaalka 3D, mid ka dhinac moodelka ama keligiis: eeg [Muuji daruurta dhibcaha ee moodelka dhinacdiisa](topic:point-clouds). |
| Bundle-ka mashruuca | `.ccbundle.zip` | Moodelka oo leh muuqaalkiisa, naqshadihiisa iyo kooxaha sifooyinka: eeg [Fur bundle-ka mashruuca](topic:open-project-bundle). |
| Gal | kasta | Warbixin ku saabsan moodel kasta, naqshad kasta iyo bundle kasta ee gudaha ku jira. Mid kasta oo IFC, moodel, naqshad ama bundle warbixinta ku jira ayaa lagu furaa guji. |

[Waxa BimCraft ka akhriyo qaab kasta](topic:file-formats) wuu faahfaahinayaa.

BimCraft wuxuu go'aamiyaa waa maxay faylka isagoo eegaya baytiyada hore iyo sidoo kale magaca, sidaas darteed fayl mashruuc oo kordhin aan caadi ahayn weli wuxuu furmaa kaarka faylka.

### Lama furo

- `.ifczip` iyo `.ifcxml`: BimCraft wuxuu leeyahay: ".ifczip looma taageero weli. Kaydi ama dhoofi moodelka sida fayl .ifc oo caadi ah." Ka soo saar `.ifczip` (wuxuu ku jiraa `.ifc` caadi ah) ama dib u dhoofi sida IFC caadi ah.
- Naqshadaha DGN waxay ku jiraan warbixinta galka laakiin ma furmaan.
- PDF, sawirrada iyo faylasha xafiiska iyagoo keligood ma furmaan. Sawirrada waxaa loo isticmaalaa sawirro gudaha DWG, {{ui:Build}} › {{ui:From a drawing…}} wuxuu bogagga PDF ama scan-ka u beddelaa darbiyo: eeg [Darbiyada laga sameeyo qorshayaal badan](topic:walls-from-plans).

## Waxa uu kaydiyo

| Waxa aad riixdo | Waxa aad hesho | Meesha |
|---|---|---|
| {{ui:Save as IFC}} | Fayl IFC cusub oo leh wax ka beddelkaaga, oo magaciisu yahay "*original name* (edited).ifc" | Galka soo dejinta ee browser-kaaga |
| {{ui:Download CSV}} jadwalka qalabka | CSV ee alaabta liiska ku jirta, oo magaciisu yahay "*drawing name* equipment.csv" | Galka soo dejinta ee browser-kaaga |

Waxyaabaha kale waxaa lagu kaydiyaa meesha ay ka abuurmaan, mid kasta mawduuciisa gaarka ah: {{ui:USD}} ([Dhoofi moodelka USD](topic:usd)), {{ui:Collada}} (.dae iyo Google Earth .kmz: [Dhoofi moodelka Collada ama Google Earth](topic:collada)), .glb {{ui:For rendering}}, sawirrada rendarka, xaashiyada iyo qorshayaasha PDF ahaan, jadwalada iyo liisaska CSV ahaan, dhibaatooyinka BCF, xisaab-miiska COBie, faylasha qoyska, iyo scan-yada la diiwaangeliyay LAS ama E57. BimCraft ma kaydiyo DWG, DXF ama faylasha mashruuca, mana beddelo faylasha aad furtay.

:::chromium
Chrome iyo Edge waxay kaydiyaan soo dejinta galka lagu dejiyay dejintooda, badanaa Downloads. Si aad mar kasta loo weydiiyo meesha lagu kaydiyo, shid "Ask where to save each file before downloading" oo ku jira dejinta soo dejinta ee browser-ka.
:::

:::firefox
Firefox wuxuu kaydiyaa galka Downloads ilaa aad dejinteeda ku dhigto "Always ask you where to save files".
:::

:::safari
Safari wuxuu kaydiyaa Downloads ilaa aad galka kale ka dooratid **Safari > Settings > General > File download location**.
:::

## Kaydinta marka labaad

Mar kasta oo la kaydiyo, moodelka oo dhan waa la soo dejiyaa, oo ay ku jiraan **dhammaan wax ka beddelka aad ka furtay ilaa hadda**, ma aha kuwa kaliya ee ka dambeeya kaydintii ugu dambeysay. Liiska {{ui:Changes}} mar kasta oo la kaydiyo wuu madhnaadaa, sidaas darteed kaydinta ka dib ma noqon kartid. Si aad dib ugu bilowdo asalka, mar kale fur faylka asalka ah.

## Faylal waaweyn iyo xusuusta

- **Faylasha IFC** waxaa lagu akhriyaa oo dhan xusuusta tab-ka, xisaabinta 3D-na xusuusta ayay kor ugu darta. Moodel dhan dhowr boqol megabait ah ayaa laga yaabaa inay ka badan tahay laptop-ka. Ka sarreeya 1.5 milyan saddex-geesood, xuduudaha waa la demiyaa si xusuusta loo badbaadiyo ("Xuduudaha way demasan yihiin moodelada aad u waaweyn").
- **Faylasha mashruuca** lama akhriyo oo dhan. BimCraft wuxuu akhriyaa oo keliya qaybaha yaryar ee uu u baahan yahay, qiyaastii 40 KB ilaa 100 KB xitaa faylku uu weyn yahay, sidaas darteed moodel dhexe oo 500 MB ah oo ku yaal diskka shabakada wuxuu furmaa wax yar gudahood.
- **DWG iyo DXF** waa la akhriyaa oo dhan. Naqshad aad u weyn waxay muujisaa: "Naqshaddan aad ayay u weyn tahay; qayb keliya ayaa la tusayaa."
- **Galalka** ilaa 20,000 fayl ayaa furmaa. Waxaa la akhriyaa oo kaliya dhowr kiilo baayt oo kaarka moodel kasta u baahan.

Eeg [Browser-yada, qalabka iyo xusuusta](topic:platforms) wixii ka badan.

## Khadka ku jira iyo ka baxsan

Furista faylasha weligiis uma baahna internet. Hal akhriye ayaa ka soo raraya goobta markii ugu horraysay ee aad u baahato: mishiinka IFC, markii ugu horreysay ee aad furto moodel IFC ("Mishiinka IFC waa la bilaabayaa…"). Akhriyeyaasha DWG iyo DXF waa qayb ka mid ah app-ka.

:::offline
Waxaad ka baxsan tahay khadka. Haddii badhanka barta app-ka uu leeyahay {{ui:Offline ready}}, qaababka oo dhan waa la furayaa sida caadiga ah. Haddii kale, moodelka IFC ma furmi karo ilaa aad dib u xiriirto, marka laga reebo mid hore u furmay tab-kan. Eeg [Khadka ku jira iyo ka baxsan](topic:online-offline).
:::

Si aad BimCraft-ka u isticmaasho adigoon xiriir lahayn, guji {{ui:Save for offline}} barta app-ka intaad khadka ku jirto, kadibna sug {{ui:Offline ready}}. Nuqulka la kaydiyay wuxuu qiyaastii yahay 33 MB; wuxuu ku jiraa mishiinka IFC, sidaas darteed moodelada IFC khadka ka baxsan ayay sidoo kale ku furmaan. [Shaqaynta khadka ka baxsan](common:offline) ayaa sharraxaysa nuqullada la kaydiyay guud ahaan.

## Kaydinta daruuraha

Kaydinta daruuraha weli lama heli karo. Kaydi nuqullada aad wax ka beddeshay kombuyutarkaaga ama server-ka faylalka xafiiskaaga, sida aad u kaydiso fayl kasta. Eeg [Faylashaaga](common:your-files).
