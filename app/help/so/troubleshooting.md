---
title: Hagaajinta dhibaatada
summary: Fariimaha BimCraft tusa, waxa keena, iyo waxa la sameeyo, marka faylal, fayl-galo, moodelo 3D, naqshado iyo wax-beddel la furayo.
keywords: dhibaato, khalad, ma shaqeeyo, ma furmo, guuldaraystay, dhammaystiran ma aha, qaldan, gaabis, shaashad xumaaday, bannaan, maqan, fariin, caawimaad
from: 1e5a79fc
---

Fariimaha waxay ka muuqdaan status line-ka hoose ee stage-ka, oo cas markii wax fashilmay. Fariinta hoose raadi.

## Furista faylasha

**"*magac* ma aha fayl IFC, RVT, RFA, DWG ama DXF."**
BimCraft ma aqoonin faylka. Hubi kordhinta iyo in faylku aanu madhnayn. Faylasha PDF, sawirrada iyo faylasha xafiisku ma furmaan.

**".ifczip lama taageerin weli. Kaydi ama u dhoofi moodelka sida fayl .ifc caadi ah."** (sidoo kale `.ifcxml`)
Ka fur `.ifczip` (waa zip caadi ah oo ku jira `.ifc`) ama u dhoofi IFC caadi ah.

**"… waa fayl mashruuc oo BimCraft weli aan akhrin."**
Fayl `.pln`, `.pla`, `.tpl` ama `.bpn`. Ka dhoofi IFC ama DWG oo ka fur: eeg [Fur faylalka mashruucyada .pln iyo .pla](topic:pln-project-files).

**"Faylkan IFC lama akhrin karin."**
Faylka IFC waa jabay ama dhab ahaan uma eka IFC. Ku fur tafatiraha qoraalka: fayl IFC dhab ah wuxuu ku bilaabmaa `ISO-10303-21;`. Mar kale u dhoofi.

**"Faylkan dhammaystiran ma aha: waa … MB, laakiin tilmaamaha u taagan wuxuu u tilmaamaa xog ugu yaraan … MB gudaha. …"**
Faylka mashruuca ama qoyska ayaa la jaray markii la koobiyeynayay, la soo gudbinayay ama la isku waafajinayay. Fayl ku jira kaydka daruurta oo "oonlaynka keliya" wuxuu u eeg yahay sidaas oo kale. Fayl la furo keligiis ayaa weli furmi doona, fariintan ayaa ku qoran madasha sare ee kaarka, iyo "Waxaa lagu muujinayaa waxa la helay; mar kale koobiyee asalka si aad moodelka oo dhammaystiran u hesho.": kaarku wuxuu muujinayaa kaliya qaybaha baytyadoodu oo dhan faylka ku jiraan, qaybaha kale waxaa hoos ka qoran **Ma jiraan faylka**. Faylka ka dhig mid laga heli karo offline kaydka daruurta, ama mar kale koobiyee asalka oo dib u fur. Gal-galka, BimCraft wuxuu tusaa kaydka ugu cusub ee dhammaystiran.

**"… Liiska nuxurka faylka ayaa sidoo kale qaybta maqan ku jira, sidaas darteed waxba laga furi karo."**
Faylka waa la jaray hore intaa aan la helin xitaa liiska nuxurkiisa. Waxba laga soo kabsan karo nuqulkan. Asalka mar kale koobiyee oo dib u fur.

**"Faylkan BasicFileInfo stream ma leh, sidaas darteed ma aha fayl Revit."**
Faylku waa compound file nooc kale ah (dokumentiyada xafiisyada hore isla weelka ayay isticmaalaan). Hubi inaad doorateen faylka saxda ah.

**"Weli waxaan ka shaqeynaa midka u dambeeyay…"**
BimCraft weli wuu mashquulsan yahay faylka ama fayl-galka hore. Sug inta status line-ku dhammaado, kadibna isku day mar kale.

**Doorsoomaha faylka wuxuu dhigayaa faylkayga mid aan la dooran karin.**
Doorsoomuhu wuxuu bixiyaa kaliya `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` iyo `.dxf`. Faylasha kale ku jiid bogga, BimCraftna wuxuu kuu sheegi doonaa haddii uu akhrin karo.

## Furista fayl-galada

**"Fayl-galkan waxa ku jira in ka badan 20,000 fayl. Dooro fayl-gal yar, sida mashruuc keliya."**
Fayl-gal sare ayaa la doortay, sida darawalka oo dhan. Dooro mid mashruuc keliya.

**"Browser-ku ma siin oggolaansho *magac*. Mar kale dooro adigoo isticmaalaya Fur fayl-gal."**
Gujisay {{ui:Reopen}} fayl-gal dhowaan la isticmaalay, oggolaanshaha browser-ka waa la diiday ama wuu dhacay. Mar kale dooro fayl-galka ama ku jiid.

**Browser-ku wuxuu leeyahay wuxuu "soo gudbin" doonaa faylasha.**
Taasi waa erayga browser-ka u gaar ah ee uu faylasha u wareejiyo bogga. BimCraft ma diro meel. Si aad uga fogaato su'aasha, fayl-galka ku jiid.

**Taleefan ama tablet-ka wax ma dhacaan.**
Browser-ro badan oo mobile ah ma dooran karaan fayl-gallo. Fur faylal keliya, ama isticmaal kombiyuutar.

## IFC engine-ka wuxuu soo socdaa markii ugu horreysay

**Status line-ku wuxuu ku sii jiraa "Waxaa bilaabmaya IFC engine…", ama wuxuu muujinayaa khalad sida "Failed to fetch".**
IFC engine-ka lama soo dejin karin. Waxaad ku jirtaa offline, ama firewall ama content blocker ayaa joojinaya.

:::offline
Waad offline tahay. Haddii badhanka bar-ka app-ka aanu leeyn {{ui:Offline ready}}, IFC engine-ka waligiis lama kaydin browser-kan. Isku xidh mar kale, fur faylka mar kale, kadibna guji {{ui:Save for offline}} si uu xiligii soo socda offline-ka u shaqeeyo. Eeg [Shaqada oonlaynka iyo offline](topic:online-offline).
:::

:::online
Dib u rar bogga oo mar kale isku day. Shabakadda shaqada, weydii kooxdaada IT inay ogolaadaan faylasha `.wasm` ee goobtan.
:::

## Kaydinta si offline loo isticmaalo

**Badhanku wuxuu leeyahay {{ui:Could not save}}.**
Qaar ka mid ah faylasha lama soo dejin, badanaa sababtoo ah xiriirku wuu go'ay. Hubi xiriirkaaga oo mar kale guji badhanka. Nuqulka offline ee hore waa la hayaa ilaa mid cusub uu dhammaystiro.

**Badhanku wuxuu leeyahay {{ui:Offline not available}}.**
Daaqaddan ma kaydin karto nuqul offline, tusaale ahaan daaqad gaar ah ama kombiyuutar shaqo oo la maamulo. Eeg [Shaqada offline](common:offline).

**Badhanku wuxuu waqti ku sii jiraa "Kaydinta *n* ee *m*".**
Nuqulka BimCraft ku dhow yahay 11 MB, inta badan waa IFC engine-ka. Tab-ka u furan ilaa uu leeyahay {{ui:Offline ready}}.

**BimCraft wuxuu offline ku furmay, laakiin wuxuu u eeg yahay mid hore u dhacay.**
Nuqulkaaga kaydsan waa booqashadii hore. Markaad online tahay, guji {{ui:Offline ready}} oo dooro {{ui:Save again (get the newest version)}}.

## Muuqaalka 3D

**Moodelka meesha kuma jiro ee aad filaysay, ama wuu yar yahay.**
Riix {{key:F}} ama guji {{ui:Fit}}. Fit wuxuu had iyo jeer ku wareegaa wax kasta oo moodelka ku jira, oo ay ku jiraan dabaqyada aad ka saartay iyo walxaha fogaanta ka ah dhismaha, sidaas darteed dhismuhu yar ayuu u muuqan karaa. Ka dibna ku weynee.

**Gujinta ma dooranayso wax.**
Gacanta si xasilloon ayaad uga hayn gujinta: jiidis yar ayaa wareega. Walxaha dabaqyada aan la calaamayn ma la dooran karo. Marka {{ui:Spaces}} la shiido, meelaha dhalaalaya ayaa la doortaa ka hor waxa ku jira.

**Badhanka {{ui:Edges}} wuu madhan yahay: "Xuduudaha waa la damiyay moodelada aad u waaweyn".**
Moodelku wuxuu leeyahay in ka badan 1.5 milyan oo saddex-geesood. Xuduudaha waa la daayay si xusuusta loo kaydiyo.

**Tab-ku wuu gaabiyaa, cad ama wuxuu muujinayaa bogga khalad ee browser-ka.**
Moodelku wuu weyn yahay xusuusta tab-ka browser-ku siiyo. Tabbada kale xir oo dib u rar. Soo dhoof IFC yar: hal dhis, hal qaybood ama dabaqyo yar. Eeg [Browser-yada, qalabka iyo xusuusta](topic:platforms).

**Muuqaalka 3D wuxuu ahaado madhan.**
WebGL waa la damin karaa ama waa la xannibay. Dejinta browser-ka, shid hardware acceleration (ama graphics acceleration) oo browser-ka dib u bilow.

## Tafatirka IFC

**"Isticmaal tiro."** Qiimuhu waa tiro. Qor tiro caadi ah oo aan unug lahayn, sida `2.4`.

**"Isticmaal tiro oo dhan."** Qiimuhu waa tiro dhan ama integer. Ka saar meelaha tobanka.

**"Sifooyinka keliya ee qiime keliya leh ayaa la tafatiri karaa."** Liisaska, doorashooyinka iyo cabbirrada waa kuwo la akhriyi karo oo keliya.

**{{key:Mod+S}} wuxuu furaa daaqadda browser-ka "Save page".**
Isbeddel aan la kaydin ma jiro, sidaas darteed BimCraft wuxuu furaha u daayay browser-ka. Xir daaqadda.

**{{key:Mod+Z}} wax ma sameeyo.**
Waxay shaqeysaa kaliya markaad isbeddello aan la kaydin haysid oo aadan goobta qoraalka ku qorin. Kaydin kadib, waxba ma jiro oo dib loo celin karo.

**Liiska {{ui:Changes}} wuxuu weli muujinayaa tafatirro kadib markaad iska tuurtay oo aad furtay qorshe ama fayl-gal.**
Markaad jawaabta "Ma tuurtaa?" ku jawaabto OK kadibna aad fur wax aan ahayn moodel IFC, tafatirradii hore xusuusta ayay ku sii jiraan, {{ui:Save as IFC}} ayaa mar kale kaydin doona. Si aad dhab ahaan u bilowdo, fur IFC-ga asalka ah mar kale, ama dib u rar bogga.

**Tafatirkaygu wuxuu beddelay walxo ka badan kuwii aan dooray.**
Waad beddeshay hanti ku jirta set-ka calaamadsan "(nooc)". Hantida nooca waxay ku dhacdaa walxaha nooca oo dhan. Guji {{ui:Undo}}. Eeg [Beddel hantida nooca walxaha nooc kasta](topic:type-vs-instance).

## Naqshadaha

**"*magac* lama akhrin karin. Waxaa laga yaabaa inuu waxyeelo yeesho, ama waxaa lagu kaydiyay nooc akhristuhu weli wax ka qabanayn (…)."**
Naqshadda ka kaydi barnaamijkii samaysay sida DWG hore (2018 ama ka hor) ama sida DXF, kadibna mar kale isku day.

**"Naqshaddani waxba ma muujin karto."** ama **"*magac* waa naqshad madhan: ma hayso xarriiqyo, qoraal ama block."**
Naqshaddu waa madhan tahay, ama waxay haysaa kaliya waxyaabo BimCraft weli aan sawirin (eeg **Weli lama sawirin** midig).

**"Naqshaddani aad bay u weyn tahay; qayb kaliya ayaa la muujinayaa."**
BimCraft wuu joojiyay sawirka si uu u jawaabo. Dami dabaqyada aadan u baahnayn, ama fur xaashiyada aad u baahan tahay naqshad yar.

**Qaybo ka mid ah xaashida ayaa maqan.**
Naqshadaha la xidhiidha ayaa maqan yihiin: eeg **Naqshadaha la xidhiidha** midig. Eeg [Hel naqshadaha iyo sawirada la xidhiidha](topic:dwg-linked-files). Dabaqyada ayaa sidoo kale damin kara: guji {{ui:All on}}.

**Sawir wuxuu u muuqdaa frame madhan.**
Faylkiisa lama helin, ama waa TIFF ("TIFF lama muujin karo browser-ka"). Ku dar nuqul PNG ama JPEG ah oo leh {{ui:Add pictures…}}.

**Ku-dhaqidda trackpad-kaaga wuxuu ku weynaysaa halkii uu naqshadda ku guurin lahaa.**
Taasi waa sida naqshaddu ugu shaqeyso BimCraft. Gujii oo jiid si aad u guurto.

## Weli waad ku jirtaa dhibaato

Akhri [Waxa aan weli la dhisin](topic:not-built-yet): wixii aad raadinayso waxaa laga yaabaa inuusan ku jirin dhismahan.
