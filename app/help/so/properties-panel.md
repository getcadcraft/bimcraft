---
title: Goobaha panelka sifooyinka
summary: Waxa goob kasta oo ku jirta panelka Sifooyinka iyo panelalka Faylka, Naqshadda iyo Gal ka dhigan yahay, iyo kuwa aad bedeli karto.
keywords: sifooyinka, goobaha, sifooyinka, globalid, guid, koobiyee, koobiyee qiimaha, koobiyee dhammaan, csv, clipboard, lambarka taxanaha, tag, nooca shayga, xariiq, express id, property set, pset, tirooyinka, schema, panelka faylka
from: fe55b435
---

## Walax IFC

Sare ee panelka {{ui:Sifooyinka}} waxa uu muujiyaa nooca walxa iyada oo aan lahayn xarfaha "Ifc" (tusaale "Door", "WallStandardCase", "FurnishingElement") iyo magaciisa, ama "Unnamed" haddii aanu magac lahayn.

| Goobta | Macnaha | Waa la beddeli karaa |
|---|---|---|
| Magac | Magaca walxaha, inta badan magaca qoyska iyo nooca uu dhoofiyuhu qoro | Haa |
| Nooca | Magaca nooca walxaha, marka uu leeyahay | Maya |
| Nooca shayga | Sharaxaad xor ah oo nooca ah oo dhoofiyayaasha qaarkood buuxiyaan | Haa |
| Tag | Calaamadda ama tag-ka walxaha; dhoofiyayaasha badani halkan ayay ku qoraan ID-ga walxaha | Haa |
| Sharaxaad | Qoraal xor ah | Haa |
| GlobalId | Aqoonsiga IFC ee joogtada ah ee 22 xaraf ee walxaha, isku mid dhoofinta kasta ee walxahaas | Maya |
| Xariiq | Lambarka xariiqda walxaha (`#1234`) ee faylka IFC-kan. Wuu isbeddelaa dhoofin kasta | Maya |

Hoosta waxa yimaada **qaybaha sifooyinka**, oo lagu kala saaray magaca:

- Qayb kasta way furmaa oo way xirmaa marka aad riixdo magaciisa. Saddexda hore way furan yihiin.
- Qayb lagu calaamadeeyay "(type)" waxay ka tirsan tahay nooca walxaha: "Sifada nooca: isbeddel halkan ayaa ku dhacaya walxaha nooca kasta."
- Qaybaha tirooyinka (dherer, aag, mug, tiro, miisaan) waa kuwo keliya-akhris ah.
- Liisaska iyo qiimayaasha la tiriyay waa la muujiyaa, keliya-akhris.
- Qiimayaasha Haa/Maya waxa lagu muujiyaa **Haa** ama **Maya**.
- Tirooyinka waxa loo wareejiyaa afar meel oo tobanka ah. Dherer (sifada dhererka ama dherer tiro) wuxuu muujiyaa {{ui:Cutubyada}} ee lagu dhejiyay qalabka sare, oo cutubka ku xiga, waxaadna ku qori kartaa tiro cusub oo cutubkaas ah ama cutub kale oo lagu calaamadeeyay, sida 2.4 m ama 8'-0": BimCraft wuxuu qoraa tirada faylka mar kale. Tirooyinka kale waxay muujiyaan sida faylku u haysto.
- Qiime madhan wuxuu muujiyaa *madhan*. Qiime la tafatiray waa xoog, oo xariiq buluug ah ayaa ku taal dhinacisa.

## Koobiyee qiime

Qiime kasta oo {{ui:Sifooyinka}} wuxuu leeyahay badhan koobiyeyn yar oo ku xiga: riix si aad qiimaha u dhigto clipboard-ka siday u muuqato, tusaale GlobalId, lambarka taxanaha ama qiime kasta oo qaybta sifada. Koobiyeynta weligeed ma bilaabo wax wax ka beddelid.

Sare, {{ui:Koobiyee dhammaan}} wuxuu koobiyeeyaa qiimaha walxaha oo dhan qoraal ahaan, qayb qayb; {{ui:Koobiyee CSV ahaan}} wuxuu koobiyeeyaa safafka kooxda, sifada iyo qiimaha si aad ugu dhejiso spreadsheet; qiimayaasha madhan waa la hayaa si goob kasta u leedahay safka. Tanu waa isku mid walax moodeel furan kale; marka moodeelo badan la furo, CSV-ga wuxuu ku bilaabmaa tiir Moodeel oo magaca faylkiisa ku qoran.

## Panelka Faylka (IFC)

| Goobta | Macnaha |
|---|---|
| File, Size | Faylka aad furtay, iyo cabbirkiisa |
| Schema | Nooca IFC, sida IFC2X3 ama IFC4 |
| Project | Magaca mashruuca iyo magaciisa dheer |
| Phase | Marxalada mashruuca, haddii dhoofiyuhu qoray |
| Exported from | Barnaamijka dhoofiyey, laga akhriyay madasha faylka |
| Author | Qoraaga madasha faylka |
| Exported | Taariikhda iyo waqtiga madasha faylka |
| Elements | Inta walxood oo leh qaab la sawiray |
| Triangles | Inta saddex-geesood ee qaababkoodu sameeyaan; cabbir ah sida uu culus yahay moodeelku |

## Panelka Faylka (faylasha mashruuca iyo qoyska)

| Goobta | Macnaha |
|---|---|
| Kind | Nooca: Mashruuc, Qaab mashruuc, Qoys ama Qaab qoys |
| Saved in | Siideynta ugu dambaysay ee keydisay faylka |
| Build | Dhismaha saxda ah ee siideynta |
| Read | Inta faylka BimCraft akhriyay, marka loo barbardhigo cabbirkiisa |

## Panelka Naqshadda (DWG iyo DXF)

| Goobta | Macnaha |
|---|---|
| Format | Siideynta naqshadda lagu keydiyay, oo leh koodkeeda qaabka, sida AC1032 |
| Units | Cutubyada geli-ka naqshadda, marka la dejiyo |
| Entities | Inta walxood ee la akhriyay |
| Layers | Inta lakabyada |
| Sheets | Inta xaashiyood (qaabeynta), ama Midna |
| Linked drawings | Inta naqshad oo xidhiidh ah laga helay oo la soo raray |
| Equipment | Inta qalab oo tag leh ee ku jira xaashiyada |

## Panelka Gal

| Goobta | Macnaha |
|---|---|
| Folder, Files, Size | Galka aad furtay, inta faylal ee ku jira, iyo wadarta cabbirkooda |
| Models | Faylasha mashruuca iyo qoyska, mid kasta nuqulladiisa oo keliya hal mar la tiriyay |
| CAD drawings, IFC models | Inta mid kasta |
| Problems | Inta nuqul moodeel ah oo dhammaystirnayn ama akhri la'aan ah, ama Midna |
