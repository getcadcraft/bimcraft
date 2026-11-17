---
title: Frá öðrum BIM- og teikniforritum
summary: Hvernig venjur úr skrifborðs-BIM og DWG-skoðun passa við BimCraft, og munurinn sem fólk rekst oft á.
keywords: skipti, flytja yfir, kunnuglegt, skrifborðs bim, fjölskylda, breytur, verkefnavafri, eiginleikaspjald, útsýniskubbur, xref, lagastjóri, munur, bera saman
from: 2de629af
---

Ef þú þekkir Revit, mun flest í BimCraft virka kunnuglega í orðum en ókunnuglega í umfangi. Mikilvægasti munurinn: **þessi útgáfa les og skoðar líkön og breytir IFC-gögnum. Hún býr ekki til líkön eins og Revit enn.** Þú getur ekki teiknað veggi, sett inn fjölskyldur, búið til sýnir eða blöð, eða vistað verkefnaskrá. Það sem þú getur gert er að opna nánast hvaða byggingarskrá sem er á hvaða tölvu sem er með vafra, sjá hvað er í henni, athuga heila verkefnamöppu og leiðrétta gögnin í IFC-líkani.

## Venjur í samanburði

| Það sem þú notar venjulega | Í BimCraft |
|---|---|
| Að opna `.rvt` í Revit til að sjá líkanið | BimCraft opnar `.rvt` sem skráarspjald: útgáfu, verkefnaupplýsingar, tengingar, forskoðun. Fyrir þrívíddarlíkanið, fluttu út IFC og opnaðu það. [Lestu verkefnis- eða fjölskylduskrá](topic:read-rvt-file) |
| Að athuga í hvaða útgáfu skrá var vistuð áður en hún er opnuð | Spjaldið segir efst "vistað í Revit …", án þess að uppfæra eða snerta skrána |
| Verkefnavafrinn | Enginn vafri fyrir sýnir og blöð. IFC-líkan hefur listana {{ui:Hæðir}} og {{ui:Hlutir}}; teikning hefur flipa fyrir blöð |
| Eiginleikaspjaldið | {{ui:Eiginleikar}}-spjaldið hægra megin, fyrir hlutinn sem þú smelltir á. IFC-eiginleikasett í stað breytuhópa |
| Breytur hlutar og gerðar | Eiginleikasett hlutar, og sett merkt "(gerð)". Breyting á gerð gildir um sérhvern hlut af gerðinni, eins og í Revit. [Breyttu eiginleika gerðar fyrir alla hluti af gerð](topic:type-vs-instance) |
| Breyta gerð | Enginn gluggi: smelltu á gildi í settinu "(gerð)" og skrifaðu |
| Val á mörgum hlutum, síur, Velja öll tilvik | Einn hlutur í einu. Ekki enn smíðað |
| Útsýniskubbinn og leiðsöguhjólið | Útsýniskubbur neðst hægra megin, fjórir hnappar ({{ui:Passa}}, {{ui:Ofan}}, {{ui:Framan}}, {{ui:Hlið}}) og frjáls snúningur. Ekkert leiðsögruhjól |
| Shift og dragið með miðjuhnappi til að snúa, miðjuhnappur til að hliðra | Dragðu með vinstri hnappi til að snúa, með hægri (eða {{key:Shift}} og drag) til að hliðra; hjólið aðdrátt. {{ui:BIM-borði}}-valmyndarstíllinn skiptir yfir í hliðrun með miðjuhnappi og {{key:Shift}} með miðjuhnappi til að snúa. [Valmyndir, lyklar og mús](topic:menus-keys-and-mouse) |
| Grunnmyndir, snið, sniðkassar | Eitt {{ui:Snið}}-plan í einu ({{key:X}}); enginn sniðkassi né 2D-grunnmyndir. [Skerðu IFC-líkan með sniðflöt](topic:section-plane) |
| Fela í sýn, einangra, sýnileiki/grafík | {{ui:Hæðir}} kveikt og slökkt, {{ui:Rými}} og {{ui:Brúnir}}. Enn ekki hægt að fela hvern hlut fyrir sig |
| Herbergi | IFC-rými, falin í fyrstu. Smelltu á {{ui:Rými}} |
| Vista, Vista sem, samstilla við miðlægt | {{ui:Vista sem IFC}} sækir nýja IFC-skrá. Upprunalega breytist aldrei. Enginn miðlægur gagnagrunnur, engin samvinnuvinnsla |
| Afturkalla með {{key:Mod+Z}} | Virkar á IFC-breytingar þar til þú vistar. [Breyttu IFC-eiginleikum og vistaðu breytt afrit](topic:edit-ifc-properties) |
| Stjórna tenglum | Opnaðu verkefnamöppuna: sérhver tenging er athuguð og merkt **Í þessari möppu**, **Sama heiti fannst**, **Safnskrá** eða **Ekki í þessari möppu**. [Opnaðu heila verkefnamöppu](topic:open-project-folder) |
| Úttekt, eða opna skrá til að sjá hvort hún sé skemmd | Möppuskýrslan athugar sérhvert afrit og öryggisafrit hvort það sé afskorið, á nokkrum sekúndum. [Athugaðu möppu fyrir skemmd afrit](topic:check-folder-health) |
| Að velja rétta skrá úr ruglingslegri möppu | Reiturinn {{ui:Byrjaðu hér}} stingur upp á einni, með rökum |

Ef þú opnar líkön aðallega til að yfirfara þau, eins og í forriti til yfirferðar eða IFC-skoðunar, veldu valmyndarstílinn {{ui:Skoðari}}: skoðunar- og yfirferðarverkfærin koma fyrst og byggingarverkfærin bíða í einni valmynd. Sjá [Valmyndir, lyklar og mús](topic:menus-keys-and-mouse).

## Frá skoðun DWG-skráa

Ef þú opnar DWG-skrár í AutoCAD eða DWG-skoðara:

| Það sem þú notar venjulega | Í BimCraft |
|---|---|
| Model- og útlitsflipar neðst | Flipar yfir teikningunni: {{ui:Líkan}} og einn fyrir hvert blað |
| ZOOM Extents, tvísmelltu á hjólið | Tvísmellur, {{key:F}} eða {{ui:Passa}} |
| Hliðra með miðjuhnappi | Dragðu með hvaða hnappi sem er |
| Lagastjórinn | {{ui:Lög}}-listinn: merktu til að sýna, afmerktu til að fela, {{ui:Allt kveikt}} og {{ui:Allt slökkt}} |
| Xref-stjórinn | **Tengdar teikningar** hægra megin, með **Sýnd** eða **Fannst ekki**, og {{ui:Bæta við tengdum teikningum…}} |
| Prentforskoðun | {{ui:Prentsýn}} eða {{key:P}}: svart á hvítu með línuþykktum. Hún prentar ekki |
| Gagnaútdráttur úr blokkaeiginleikum | {{ui:Búnaður}}-flipinn fyrir merktar veitingateikningar, með {{ui:Sækja CSV}} |
| Mæla, teikna, breyta, vista sem | Ekki í BimCraft. Teikniforrit CadCraft teiknar og breytir |

## Munur sem kemur fólki á óvart

- **Forritið keyrir í vafranum og vafrinn fer varlega með skrárnar þínar.** BimCraft getur aðeins lesið skrár og möppur sem þú afhendir því, með því að velja þær eða draga þær inn. Það getur ekki opnað skrá sjálft og getur ekki vistað yfir skrá. Sérhver vistun er niðurhal.
- **Ekkert er hlaðið upp.** Orðið „upload“ í möppugluggum sumra vafra er orðalag vafrans sjálfs. Skrárnar eru áfram á tölvunni þinni.
- **IFC er líkansniðið.** Verkefnaskrá opnast sem spjald því þrívíddarefni hennar er óskjalfest. Líttu á IFC sem leiðina sem líkön berast inn í BimCraft.
- **Breytingar eru afritaðar þegar þær eru skrifaðar.** Breyting á gildi eins hlutar breytir aldrei nágrönnum hans, jafnvel þótt útflytjandinn hafi deilt því gildi á milli þeirra. Eiginleikar gerða eru viljandi undantekningin.
- **Ekkert verkefni, engar sýnir.** BimCraft sýnir eina skrá í einu og man ekkert um hana eftir að þú lokar flipanum, nema heiti nýlegra mappa í Chrome og Edge.
- **Mac-lyklar.** Þar sem Windows-flýtileiðir Revit nota Ctrl, nota flýtileiðir BimCraft {{key:Mod}}: Command á Mac.
- **Músarvenjur þínar.** Snúningur er á vinstri hnappi, ekki Shift og miðjuhnappi, nema þú veljir {{ui:BIM-borði}}-valmyndarstílinn eða stillir hnappana sjálf(ur) í [Valmyndir, lyklar og mús](topic:menus-keys-and-mouse).

Sjá [Hvað er ekki smíðað enn](topic:not-built-yet) fyrir það sem nota á í staðinn í dag.
