---
title: Ka imanaya barnaamijyada BIM iyo naqshadaha kale
summary: Sida caadooyinka BIM-ka desktop-ka iyo muujinta DWG ugu beddelaan BimCraft, iyo farqiyada dadka hor-taagaya.
keywords: u guur, beddel, caadi ah, bim desktop, qoys, cabbirro, baaraha mashruuca, palette-ka sifooyinka, kuubka muuqaalka, xref, maareeyaha lakabyada, farqi, isbarbardhig
from: 2de629af
---

Haddii aad taqaanno Revit, qaybta ugu badan ee BimCraft waxay kuu noqon doontaa mid la yaqaan erayada, laakiin aan la yaqaan xuddunta. Farqiga ugu muhiimsan: **dhismahan wuxuu akhriyaa oo baadhaa moodelada, wuxuuna wax ka beddelaa xogta IFC. Weli ma qoro sida Revit.** Ma taaban kartid derbiyada, ma geli kartid qoysaska, ma samayn kartid aragtiyo ama xaashiyo, ama ma keydin kartid fayl mashruuc. Waxa aad samayn karto waa inaad furto inta badan faylasha dhismaha ee kumbiyuutar kasta oo leh browser, aad aragto waxa ku jira, aad hubiso gal mashruuc oo dhan, iyo inaad xogta moodel IFC ah wax ka saxdo.

## Dabeecadaha la isku dhigay

| Haddii aad caadi u tahay | BimCraft dhexdiisa |
|---|---|
| Furidda `.rvt` Revit si aad moodelka u aragto | BimCraft wuxuu `.rvt` ka furaa kaarka fayl: nooca la sii daayay, macluumaadka mashruuca, isku xirnaanta, hordhac. Moodelka 3D, dhoofi IFC kadibna fur taas. [Akhri fayl mashruuc ama qoys](topic:read-rvt-file) |
| In la eego nooca faylku lagu kaydiyay ka hor furidda | Kaarku wuxuu sare ku sheegaa "saved in Revit …", isagoo aan cusboonaysiin ama taaban faylka |
| Baaraha mashruuca | Ma jiro baare aragtiyo iyo xaashiyo. Moodel IFC wuxuu leeyahay liisaska {{ui:Dabaqyada}} iyo {{ui:Walxaha}}; naqshad waxay leedahay tabs-ka xaashiyada |
| Palette-ka sifooyinka | Panelka {{ui:Sifooyinka}} dhinaca midig, walxaha aad riixday. IFC property sets halkii parameter groups |
| Cabbirrada tusaalaha iyo nooca | Set-yada sifooyinka tusaalaha, iyo set-yada lagu calaamadeeyay "(type)". Isbeddelka nooca wuxuu ku dhacaa walax kasta oo nooca ah, sida Revit. [Bedel sifada nooca walxaha nooca oo dhan](topic:type-vs-instance) |
| Edit Type | Ma jiro daaqad: guji qiimaha set-ka "(type)" oo qor |
| Dooro walxo badan, shaandheeyayaasha, Select All Instances | Mid mid. Weli lama dhisin |
| Kuubka muuqaalka iyo giraanta socodka | Kuubka muuqaalka dhinaca hoose ee midig, afar badhan ({{ui:Ku habee}}, {{ui:Sare}}, {{ui:Hore}}, {{ui:Dhinac}}) iyo wareeg xor ah. Ma jiro giraan socod |
| Shift iyo jiid badhanka dhexe si loo wareego, jiid badhanka dhexe si loo dhaqaajiyo | Jiid bidix wuxuu wareegaa, jiid midig (ama {{key:Shift}} iyo jiid) wuxuu dhaqaajiyaa, wiishka mouse-ka wuu weyneeyaa. Habka menu-ga {{ui:Jadwalka BIM}} wuxuu u beddelaa dhaqaajinta jiid badhanka dhexe, iyo wareegga {{key:Shift}} oo leh badhanka dhexe. [Menu-yada, furayaasha iyo mouse-ka](topic:menus-keys-and-mouse) |
| Qorshayaasha dabaqa, qaybaha, sanduuqyada qaybta | Hal diyaarad {{ui:Goyn}} mar ({{key:X}}); ma jiro sanduuq qayb ama qorshe 2D. [Goyo moodel IFC oo diyaarad goyn ah](topic:section-plane) |
| Qari aragga, kala saar, muuqaal/garaafyo | {{ui:Dabaqyada}} shid iyo demi, {{ui:Meelaha}} iyo {{ui:Xuduudaha}}. Weli ma jiro qarin walax kasta gaar ahaan |
| Qolal | Meelaha IFC, marka hore waa la qariyaa. Guji {{ui:Meelaha}} |
| Kaydi, U kaydi sida, isla-waqtiga xarunta | {{ui:U kaydi sida IFC}} wuxuu soo dejiyaa fayl IFC cusub. Asalku ma beddelmo. Ma jiro xarun, ma jiro wadaageyn |
| Ka noqo {{key:Mod+Z}} | Wuxuu shaqeeyaa wax ka beddelka IFC ilaa aad kaydiso. [Beddel sifooyinka IFC oo kaydi nuqul la wax ka beddelay](topic:edit-ifc-properties) |
| Maamul isku xidhka | Fur gal-ka mashruuca: isku xidh kasta waa la hubiyaa oo waxaa lagu calaamadaa **Gudaha gal-kan**, **Magac isku mid ah ayaa la helay**, **Fayl maktabad** ama **Ma jiro gudaha gal-kan**. [Fur gal-ka mashruuca oo dhan](topic:open-project-folder) |
| Hubinta, ama furida fayl si loo eego inuu qaldan yahay | Warbixinta gal-ka waxay hubisaa nuqul kasta iyo kaydinta inay dhammaatay ama go'day, dhowr ilbiriqsi gudahood. [Hubi gal-ka nuqullada dhaawacan](topic:check-folder-health) |
| Dooro faylka saxda ah gal-ka jajaban | Sanduuqa {{ui:Halkan ka bilow}} wuxuu soo jeediyaa mid, oo sababaha ku jira |

Haddii inta badan moodelada aad furto si aad u hubiso, sida barnaamij hubinta moodelka ama IFC, dooro habka menu-ga {{ui:Eegaha}}: qalabyada eegista iyo hubinta ayaa hore u yimaadda, qalabyada dhismaha ayaa ku jira hal liis. Eeg [Menu-yada, furayaasha iyo mouse-ka](topic:menus-keys-and-mouse).

## Marka DWG-ga la eegayo

Haddii aad DWG ku furto AutoCAD ama DWG viewer:

| Haddii aad caadi u tahay | BimCraft dhexdiisa |
|---|---|
| Tabs-ka moodelka iyo qaabeynta hoose | Tabs-ka sare ee naqshadda: {{ui:Moodeel}} iyo mid kasta oo xaashi ah |
| ZOOM Extents, laba jeer guji wheel-ka | Laba jeer guji, {{key:F}} ama {{ui:Ku habee}} |
| U dhaqaaq badhanka dhexe | Jiid badhanka kasta |
| Maareeyaha lakabyada | Liiska {{ui:Lakabyada}}: calaamee si aad u muujiso, ka saar si aad u qariso, {{ui:Dhammaan shid}} iyo {{ui:Dhammaan demi}} |
| Maareeyaha xref | **Naqshadaha isku xidhan** dhinaca midig, oo leh **La muujiyay** ama **Lama helin**, iyo {{ui:Ku dar naqshado isku xidhan…}} |
| Hore u eegista daabacaadda | {{ui:Aragtida daabacaadda}} ama {{key:P}}: madow ku qoran cad oo leh culeyska xariiqda. Ma daabacdo |
| Soo saarista xogta sifooyinka bloogga | Tab-ka {{ui:Qalabka}} naqshadaha cuntada ee calaamadeeyay, oo leh {{ui:Soo deji CSV}} |
| Qiyaas, sawir, wax ka beddel, u kaydi sida | Ma jirto BimCraft-ka. Barnaamijka naqshadaha CadCraft wuu sawiraa oo wuu wax ka beddelaa |

## Farqiyada dadka hor-taagaya

- **Waxa uu ku shaqeeyaa browser-ka, browser-kuna wuu ka taxaddaraa faylashaada.** BimCraft wuxuu akhrin karaa kaliya faylasha iyo gallada aad siiso, adigoo doorta ama jiidaya. Ma furi karo fayl isaga kaligiis, ma-na qori karo meel kale. Kaydin kasta waa soo dejin.
- **Waxba lama soo rarin.** Erayga "upload" ee sanduuqyada gallada browser-ka qaarkood waa erayga browser-ka laftiisa. Faylasha waxay sii joogaan kumbiyuutarkaaga.
- **IFC waa qaabka moodelka.** Fayl mashruuc wuxuu u furmaa kaarka sababta oo ah waxa ku jira 3D aan la qeexin. Ku tixgeli IFC inuu yahay jidka moodelada u galaan BimCraft.
- **Wax ka beddelku waa nuqul-ku-qoris.** Beddelka qiimaha hal walax ma beddelo kuwa ku dhow, xitaa haddii dhoofiyuhu qiimahaas la wadaago. Sifooyinka nooca waa kiiska gaarka ah ee la go'aamiyay.
- **Ma jiro mashruuc, ma jiro aragtiyo.** BimCraft wuxuu muujiyaa hal fayl mar, ma xusuusto wax ka mid ah marka aad xirto tab-ka, marka laga reebo magacyada galalka dhowaan ee Chrome iyo Edge.
- **Furayaasha Mac.** Meesha gaabinta Windows ee Revit ay isticmaasho Ctrl, gaabinta BimCraft waxay isticmaashaa {{key:Mod}}: Command oo ah Mac.
- **Dabeecadaha mouse-kaaga.** Wareegidda waa badhanka bidix, ma aha Shift iyo badhanka dhexe, mooyaane haddii aad dooratid habka menu-ga {{ui:Jadwalka BIM}} ama aad badhamada u dejiso adiga laftaadu ee [Menu-yada, furayaasha iyo mouse-ka](topic:menus-keys-and-mouse).

Eeg [Waxa weli aan la dhisin](topic:not-built-yet) si aad u ogaato waxa aad maanta isticmaasho.
