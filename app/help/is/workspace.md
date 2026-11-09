---
title: Skjár BimCraft
summary: Yfirferð um hverja stiku, hvert spjald og hvern hnapp eftir nafni á skjánum, og hvernig skjárinn breytist fyrir hverja tegund skráa.
keywords: skjár, útlit, spjöld, tækjastika, viðmót, ui, yfirferð, eiginleikaspjald, vafri, forritastika
from: 2eb01ec2
---

Skjár BimCraft er með stiku efst og þrjú svæði undir henni: spjald vinstra megin, sviðið í miðjunni og {{ui:Eiginleikar}}-spjaldið hægra megin. Það sem birtist á hverju svæði fer eftir því hvað þú opnaðir: IFC-líkan, verkefnis- eða fjölskylduskrá, teikningu eða möppu.

## Forritastikan

Þunna stikan efst tilheyrir CadCraft-vefsvæðinu, ekki BimCraft sjálfu. Frá vinstri til hægri:

- Merki CadCraft: fer á forsíðu CadCraft.
- Heiti forritsins og útgáfuvalmynd. Í starfsmannasmíðinni sýnir hún hvaða smíð þú keyrir og leyfir þér að skipta yfir í útgefna útgáfu.
- {{ui:Um BimCraft}}: síða forritsins á vefnum.
- {{ui:Stillingar}}: stillingar BimCraft og þær sem öll forritin deila. Sjá [Stillingar BimCraft](topic:settings).
- {{ui:Allur skjárinn}}: skiptir á milli skjástillinga. Sjá [Skjástillingar](topic:workspace#screen-modes) hér að neðan.
- {{ui:Pappír}} og {{ui:Líkan}}: ljós og dökk þemu. Þrívíddarsýnin og tvívíðu teikningarnar fylgja því þema sem þú velur.

## Vinstra spjaldið

Vinstra spjaldið byrjar alltaf á **Opna skrá eða möppu**:

- Dropasvæðið, {{ui:Veldu skrá, eða slepptu skrá eða möppu hér}}. Smelltu á það til að velja eina skrá, eða slepptu skrá eða möppu á það (eða hvar sem er á síðunni).
- {{ui:Opna möppu}}: veldu heila verkefnamöppu. Sjá [Opna alla verkefnamöppuna](topic:open-project-folder).
- {{ui:Nýlegar möppur}}: birtist í Chrome og Edge eftir að þú hefur opnað möppu með möppuvalinu eða með því að sleppa henni. Smelltu á {{ui:Opna aftur}} og á heiti möppunnar til að opna hana aftur, eða á litla × til að gleyma henni.

Undir henni birtast hlutar eftir því sem við á:

| Hluti | Hvenær hann birtist | Hvað er í honum |
|---|---|---|
| {{ui:Breytingar}} | IFC-líkan er opið | Óvistaðar breytingar þínar, nýjustu efst, með {{ui:Afturkalla}} og {{ui:Vista sem IFC}} |
| {{ui:Skrá}} | Líkan eða skráarspjald er opið | Upplýsingar um skrána: stærð, skema eða útgáfu, verkefni, höfund, fjölda hluta |
| {{ui:Teikning}} | DWG eða DXF er opið | Snið, einingar, fjöldi eininga og laga, blöð, tengdar teikningar, búnaður |
| {{ui:Mappa}} | Mappa er opin | Fjöldi skráa og líkana, stærð, vandamál sem fundust |
| {{ui:Til baka í möppuna}} | Þú opnaðir skrá úr möppu | Fer aftur í skýrslu möppunnar |
| {{ui:Lög}} | Teikning er opin | Gátreitur fyrir hvert lag, með {{ui:Allt kveikt}} og {{ui:Allt slökkt}} |
| {{ui:Hæðir}} | IFC-líkan er opið | Gátreitur fyrir hverja hæð, efstu hæð fyrst |
| {{ui:Hlutir}} | IFC-líkan er opið | Hversu marga hluti af hverri gerð líkanið hefur (30 algengustu) |

## Sviðið

Miðja skjásins sýnir opnu skrána.

- **Tómt**: „Opnaðu líkan af byggingu.“ með {{ui:Veldu skrá}} og {{ui:Opna möppu}}, og stutta lýsingu á hverju sniði.
- **IFC-líkan**: þrívíddarsýnin með stiku efst, í nefndum hópum eins og í teikniforriti CadCraft, með tákn hvers verkfæris fyrir ofan heiti þess: {{ui:Sýn}} ({{ui:Passa}}, {{ui:Ofan}}, {{ui:Framan}}, {{ui:Hlið}}, {{ui:Brúnir}}, {{ui:Rými}}); {{ui:Breyta}} ({{ui:Afturkalla}}, {{ui:Endurgera}}, {{ui:Afrita}}, {{ui:Líma}} og {{ui:Meira}}, sjá [Afrita, líma og tvöfalda hluti úr safninu](topic:copy-paste)); {{ui:Líkan}} ({{ui:Einingar}} og {{ui:Teikna}}); {{ui:Safn}} ({{ui:Safn}}, {{ui:Búnaður}}, {{ui:Uppfærslur}}, {{ui:Heimildir}}); {{ui:Yfirferð}} ({{ui:Sýna}}, {{ui:Snið}}, {{ui:Ganga}}, {{ui:Mæla}}; sjá [Skera IFC-líkan með sneiðmyndaplani](topic:section-plane)); og {{ui:Úttak}} (myndgerð, lifandi sýn, VR, útflutningur, málning og vistaðar sýnir). Með {{ui:Teikna}} kveikt hefur teiknastikan undir henni sama útlit: {{ui:Sýn}} (kótinn og tegund grunnmyndar), {{ui:Teikna}}, {{ui:Breyta}} og {{ui:Safn}}. Sýnisteningur er í neðra hægra horninu. Sjá [Opna IFC-líkan og líta um í þrívídd](topic:open-ifc-model). {{ui:Stillingar}}, {{ui:Almennt}} velur tákn, heiti eða bæði á þessum hnöppum, sýnir eða felur heiti hópanna, og hægri smellur á stikuna raðar verkfærunum og hópunum. Í lágum glugga felur stikan heitin undir táknunum.
- **Verkefnis- eða fjölskylduskrá**: skráarspjaldið, með forskoðunarmyndinni, verkefnaupplýsingum og tengdum skrám. Sjá [Lesa verkefnis- eða fjölskylduskrá](topic:read-rvt-file).
- **DWG eða DXF**: röð flipa ({{ui:Líkan}}, síðan einn fyrir hvert blað, síðan {{ui:Búnaður}} þegar teikningin hefur merktan búnað, {{ui:3D}}, {{ui:Passa}} og {{ui:Prentsýn}}), teikningin og lifandi X- og Y-hnit í einu horni. Sjá [Skoða DWG- eða DXF-teikningu](topic:view-dwg) og [Skoða DWG- eða DXF-teikningu í þrívídd](topic:dwg-in-3d).
- **Mappa**: skýrsla möppunnar, með reitnum {{ui:Byrjaðu hér}} og töflum yfir líkön, tengla, IFC-líkön og teikningar. Sjá [Opna alla verkefnamöppuna](topic:open-project-folder).

**Stöðulínan** neðst á sviðinu segir þér hvað BimCraft er að gera („Les líkanið…“, „Smíða rúmfræði: 1200 af 5400 hlutum“) og hvað fór úrskeiðis, með rauðu, þegar eitthvað bregst. Skilaboð um árangur hverfa eftir nokkrar sekúndur.

## Eiginleikaspjaldið

Hægra spjaldið sýnir:

- Fyrir IFC-líkan: hlutinn sem þú smelltir á, með heiti sínu, gerð, merki, GlobalId og hverju eiginleikasetti. Gildi sem þú getur breytt líta út eins og hnappar. Sjá [Reitir eiginleikaspjaldsins](topic:properties-panel).
- Fyrir teikningu: hvernig þú ferð um, tengdar teikningar og myndir hennar og hvort hvert fannst, og lista yfir það sem er **Ekki teiknað ennþá**.
- Fyrir skráarspjald eða möppu: stutta athugasemd um hvað á að opna næst.

## Á litlum skjá

Þegar glugginn er mjórri en fartölvuskjár raðar BimCraft svæðunum upp: sviðið ofan á, spjöldin undir. Skrunaðu síðunni til að ná í spjöldin. Í síma mynda þau eina dálk; á spjaldtölvu tvo.

## Skjástillingar

{{ui:Allur skjárinn}}-hnappurinn á forritastikunni, eða {{key:Ctrl+Shift+F}} á öllum stýrikerfum, skiptir á milli þriggja stillinga:

1. Venjuleg.
2. Allur skjárinn, með stikunum enn sýnilegum.
3. Allur skjárinn með falinni forritastiku. Færðu bendilinn að efri brúninni, eða pikkaðu þar, til að fá hana aftur.

Ýttu á {{key:Esc}} til að fara aftur í venjulegt. Vafrar sem styðja ekki allan skjá (eins og á iPhone) skipta aðeins á milli venjulegra stika og falinna.

## Tengt

- [Lyklar og mús](topic:keyboard)
- [Skrár sem BimCraft opnar og vistar](topic:files)
