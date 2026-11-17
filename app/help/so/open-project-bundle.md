---
title: Fur bundle-ka mashruuca
summary: Bundle-ka mashruuca waa zip keliya oo leh moodeel, aragtidiisa, habaynteeda iyo kooxaha sifooyinka. Furo, tus aragti oo leh dabaqeeda iyo lakabyadeeda, fur habayn, oo eeg sifooyinka kooxaha mashruuca.
keywords: bundle, bundle-ka mashruuca, ccbundle, zip, aragtiyo, khariidadda aragtiyada, habayn, buugga habaynta, isku-dhafka lakabyada, kooxaha sifooyinka, heerarka, pln, qaab
from: b5b86e8f
---

## Waxa aad samayn doontid

Fur **bundle-ka mashruuca** (`.ccbundle.zip`) oo ku shaqee mashruuca sida loo habeeyay: aragtidiisa, habaynteeda iyo kooxaha sifooyinka, moodeelka korkiisa.

Bundle-ku wuxuu hayaa:

- moodeelka sida IFC,
- habaynta sida PDF iyo DWG,
- liis wax IFC ka tagaa: aragtiyada (mid kasta dabaqiisa, isku-dhafka lakabyadiisa iyo miisaankiisa), habaynta iyo sawirrada lagu dhigay, qeexitaanka sifooyinka kooxahooda, sifeynta, iyo heerarka sida lakabyada, set-yada qalinka, noocyada khadka, buuxinta, dusha iyo isku-darka.

Bundle-yada waxaa qoraya script open-source ah oo ku shaqeeya Archicad-ka, oo liisaska ka waydiiya Archicad laftiisa. BimCraft ma akhristo faylasha `.pln` ama `.tpl` si toos ah; eeg [Fur faylasha mashruuca .pln iyo .pla](topic:pln-project-files).

## Samee bundle

Script-ku waa horumarin tijaabo ah: lama isticmaalin nooc kasta oo Archicad ah weli. Ka hel [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Waxaad u baahan tahay Archicad 24 ama ka dambeeya iyo Python 3.8 ama ka dambeeya; wax kale oo la rakibo ma jiro.

1. Ku kaydi `archicad_bundle.py` gal, tusaale ahaan `C:\cc-bundle`.
2. Archicad-ka, fur mashruuca oo samee set daabacaad oo magaciisu yahay saxda **CadCraft bundle**: aragtida 3D sida IFC, habayn kasta sida PDF, habayn kasta mar kale sida DWG, lagu daabaco faylal diskka ku jira gal fidsan oo keli ah.
3. Mashruuca oo furan, orod `python archicad_bundle.py --probe --out .` hal mar. Wuxuu akhrisaa oo keliya, wuxuuna qorayaa `probe.json`.
4. Orod `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (ku isticmaal turjumaanka IFC aad dooratay). Archicad wuu daabacaa setka, script-ku wuxuu qorayaa `<project>.ccbundle.zip`.

Haddii daabacaadda script-ka fashilanto, daabac setka gacanta oo orod `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. README-ga kaydka wuxuu leeyahay dhammaan xulashooyinka. Haddii wax soo gala ma soo dhaafaan, ka fur dhibaato halkaas oo ku lifaaqdo `probe.json`.

## Fur bundle

1. Riix {{ui:Choose a file}}, ama ku tuur `.ccbundle.zip` BimCraft. Gal aad ku furtay {{ui:Open a folder}} gudihiisa, bundle-yada waxaa lagu liisanayaa hoosta **Bundle-yada mashruuca**; riix magaciisa.
2. Moodeelka wuxuu u furmaa sida IFC kasta, qaybta **Bundle-ka mashruuca** ayaa ka soo muuqata bidix, hoosta xaqiiqooyinka faylka.

Wax lagu soo rarin maayo: bundle-ka waxaa lagu akhriyaa kombiyuutarkaaga, mid mid, sidaas darteed moodel weyn lama koobiyeeyo laba jeer.

## Muuji aragti

Hoosta **Aragtiyada**, aragtiyada waxaa lagu kooxeeyay galalka ay mashruucu lahaa. Riix magaca aragti:

- **Qorshe dabaq** wuxuu muujinayaa dabaqiisa oo keliya, laga eego sare.
- **Isku-dhafka lakabyadeeda** wuxuu qariyaa unsuriyada lakabyada ay isku-dhafkaasi qariyo. Xariga xaaladdu wuxuu sheegayaa inta unsur ee qarisay.
- **Miisaankeeda** waa la muujiyaa magaca ku xiga iyo xariga xaaladda.
- **Aragta 3D** wuxuu muujinayaa dabaq kasta.

Si aad mar kale wax walba u muujiso, isticmaal {{ui:Show all}} gudaha {{ui:Show}} oo calaamadi dabaq kasta.

:::note
BimCraft wuxuu lakabyada ka helaa diiwaanka lakabyada ee faylka IFC. Haddii IFC-ga aan lagu dhoofin, isku-dhafka lakabyadu waxba ma qariyo, xariga xaaladduna wuxuu sheegaa 0 unsur la qariyay.
:::

## Fur habayn

Hoosta **Habaynta**, habayn kasta wuxuu muujinayaa lambarkeeda, magaceeda, cabbirka warqadda iyo aragtida lagu dhigay.

- **PDF** wuxuu kaydiyaa PDF-ka habaynta ee bundle-ka.
- **DWG** wuxuu furaa sawirka habaynta ee aragta 2D. Riix aragti kasta si aad ugu soo noqoto moodeelka.
- **Ku fur …** wuxuu faylka habaynta u gudbiyaa app-ka shaqeeya, tab cusub: PDF wuxuu u gudbaa MarkupCraft, DWG wuxuu u gudbaa CadCraft. Wuxuu muuqdaa kaliya marka app-kaas uu furan yahay meel ku xigta BimCraft. Faylka waxaa laga akhriyaa bundle-ka markii tabka la soo rarayo, wax lagu soo rarin maayo.

Habayn aan labadaba lahayn wuxuu leeyahay **Faylka bundle-ka kuma jiro**.

## Eeg sifooyinka kooxaha mashruuca

Dooro unsur. **Kooxaha sifooyinka** wuxuu muujinayaa sifooyinkiisa hoosta kooxaha uu mashruucu qeexay, oo lagu isku xidhay hab-sifada iyo magaca uu qeexidda siiyo IFC, ama haddii kale magaciisa. Kuwa kale waxay ku sii jiraan {{ui:Properties}} sida caadiga ah. **Qeexitaanka sifooyinka** wuxuu liisanayaa qeexitaan kasta oo leh kooxdiisa, noociisa iyo magaca IFC.

## Heerarka iyo qoraallada

- **Heerarka** wuxuu tiriyaa lakabyada, isku-dhafka lakabyada, set-yada qalinka, noocyada khadka, buuxinta, dusha, isku-darka iyo alaabta ku jirta bundle-ka.
- **Qoraallada** wuxuu liisanayaa waxa script-ku ka heli waayay nooca Archicad-kaas, goob kasta oo BimCraft akhrin waayay, iyo fayl kasta oo bundle-ku magacaabo laakiin aanu haynin.

## Xallinta dhibaatooyinka

- **"… waa zip laakiin ma aha bundle mashruuc."** Zip-ka ma leh `manifest.json`. Fur zip-ka oo fur `.ifc` ku jirta.
- **"… waa bundle mashruuc oo ka cusub kan BimCraft akhrin karo."** Cusbooneysii BimCraft.
- **"… ma hayo moodeelka uu manifest-ku magacaabo."** Zip-ka waa la gooyay ama waa la wax ka beddelay. Samee bundle-ka mar kale.
- **Aragti wuxuu muujinayaa dabaq kasta.** Dabaqiisa ma ku jiro IFC-ga moodeelka (xariga xaaladdu wuu sheegaa). Hubi in dhoofinta IFC ay dabaqaas ku jirtay.

Eeg sidoo kale [Shaqaynta laba barnaamij BIM dhexdooda](topic:two-bim-programs) iyo [BimCraft wuxuu ka akhriyo qaab kasta](topic:file-formats).
