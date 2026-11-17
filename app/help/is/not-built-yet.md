---
title: Hvað er ekki smíðað ennþá
summary: Hvað þessi BimCraft-útgáfa gerir ekki ennþá, og hvað á að nota í staðinn í dag.
keywords: vantar, takmarkanir, takmarkanir, ekki studd, vegvísir, hönnunarvinna, líkanagerð, snið, mæla, árekstur, bcf, ský, borðtölva, útflutningur
from: 87777dcc
---

BimCraft er í dag lesari, yfirfarandi og ritill fyrir IFC-gögn sem er byrjaður að teikna byggingar: veggi, hurðir og glugga, rými, gólf, loft og þök (sjá [Teikna veggi](topic:draw-walls), [Hurðir og gluggar](topic:doors-and-windows) og [Rými, gólf, loft og þök](topic:floors-and-roofs)). Þetta er heiðarlegi listinn yfir það sem það gerir ekki ennþá, og hvað á að gera í staðinn.

## Líkanagerð og hönnunarvinna

| Ekki ennþá | Í staðinn, í dag |
|---|---|
| Teikning bita; súlur úr stálsniðum | Notaðu hönnunarforritið þitt og opnaðu IFC-útflutninginn þess hér. Rétthyrndar og kringlóttar súlur eru settar hér (sjá [Rist og súlur](topic:grids-and-columns)); beinir, L-, U-, snúnir og spíralstigar og handrið eru teiknuð hér (sjá [Stigar og handrið](topic:stairs-and-railings)) |
| Gluggi í framhlið kvists; kvistir á þakfletum teiknaðir með hendi; bogin þök; þak með áferð sem er myndgert | Þakfletir teiknaðir eftir hornum sínum, og halli fyrir hvern vegg: sjá [Þök: halli fyrir hvern vegg, stafnar, skúrar og þakfletir](topic:roofs) |
| Breyting á veggjum, hurðum eða gluggum sem annað forrit bjó til | Hönnunarforritið þitt; teikniverkfærin breyta aðeins því sem þau teiknuðu |
| Veggprófílar með útskotum eða götum; veggop sem eru ekki ferhyrnd; að bæta við eða fjarlægja prófílpunkta veggs í 3D-sýninni | Prófíll, festing, halli og op virka í Eiginleikum, í uppréttum og sniðum, á útsýni framhliðar veggsins og með gripum í 3D, fyrir bein og boguð veggi: sjá [Móta vegg: festing, prófíll, halli og op](topic:wall-shape) |
| Á bognum veggjum: {{ui:Stytta / lengja}} og {{ui:Horn}}, umgjörð, sjálfvirkar málsetningar á grunnmynd, smellun eftir boganum (hann smellur á enda sína og miðju bogans) | Teiknaðu vegginn beinan fyrir það, eða notaðu bein stykki. Bognir veggir eru í [Teikna veggi](topic:draw-walls) |
| Dragðu settan safnhlut í 3D-sýninni | Dragðu hann á grunnmyndinni, eða skrifaðu X, Y og Snúning í {{ui:Eiginleikar}}: sjá [Settu búnað og húsgögn úr safninu](topic:place-from-library) |
| Setja plöntur úr plöntusafni Landslagsvinnusvæðis CivilCraft | Settu þær í CivilCraft, eða settu tré og runna úr umhverfissafni safnsins: sjá [Settu búnað og húsgögn úr safninu](topic:place-from-library) |
| Í Pípuviðbótinni (slökkt þar til þú kveikir á henni): teikning leiðaðrar lagnar inn í líkanið, raðnúmer á ísómyndum hennar, skipulagsathugun á búnaði settum úr safninu | Teiknaðu lögnina með {{ui:Pípa}} (sjá [Pípur og loftstokkar](topic:pipes-and-ducts)); skipulagsathugunin les eigin búnaðartöflu viðbótarinnar |
| Snúningur, speglun eða raðun stakra teiknaðra veggja, hurða og glugga (veggir færast og afritast með Færa, Versetja og Teygja kassa: sjá [Veggform, skipting, versetning, teygja og læsing](topic:wall-tools)); tengistíll (stúfur, ferhyrnt) á hornum með bognum vegg eða þremur veggjum eða fleiri (sjá [Veggform, skipting, versetning, teygja og læsing](topic:wall-tools)); texta-verkfæri; gluggatjaldsveggir | Afritaðu allt á hæð með {{ui:Afrita þessa hæð…}} (sjá [Teikna veggi](topic:draw-walls#levels)); annars teiknarðu þá aftur |
| Lög veggjasamsetninga teiknuð á grunnmynd og sniði; mál í sniðum og uppréttum; viðmiðunarmál að hurðum, gluggum og öðrum íhlutum; samsetningar og himnur í skrám og magntölum; efnasafn sem er deilt milli verkefna; forgangur laga í sniðum, uppréttum og 3D og í hnútum þriggja veggja eða fleiri (á grunnmynd eru horn, T-tengi og þverun tveggja veggja hreinsuð eftir forgangi laga: sjá [Veggform, skipting, versetning, teygja og læsing](topic:wall-tools)); vafin eða breytileg lög; breyting á samsetningu veggs sem annað forrit bjó til | Lögin eru í gerð veggsins og forskoðun hans ({{ui:Veggjasamsetningar…}}); veggir eru mældir sem eitt umslag: sjá [Veggjasamsetningar og viðmiðunarmál](topic:wall-assemblies) |
| Breyting á lögun eða stærð hlutar (annað en veggir, hurðir og gluggar teiknaðir hér, og hlutir settir úr fjölskyldu) | Hönnunarforritið þitt. Eyðing, klipping, afritun og líming virka hér: sjá [Eyddu, klipptu, afritaðu og límdu byggingarhluti](topic:edit-elements) |
| Eyðing hæða, rýma, bygginga eða lóðarinnar | Eyddu hlutunum í þeim |
| Líming byggingarhluta inn í annað líkan | Afritaðu og límdu innan eins líkans; settir safnhlutir límast í hvaða líkan sem er |
| Viðbót nýrra eiginleika eða eiginleikasetta | Fylltu inn gildi sem eru fyrir hendi hér, eða bættu breytunni við í hönnunarforritinu þínu og fluttu aftur út |
| Breyting á magntölum, listum og upptalningum | Hönnunarforritið þitt |
| Vistun verkefnaskráa annarra forrita | BimCraft vistar IFC (og sínar eigin fjölskylduskrár: sjá [Fjölskyldur og stærðir þeirra](topic:families)) |
| Fjölskyldur: safn fjölskyldna sem eru settar af grunnmynd og deilt milli verkefna (Safn), hnappur sem dreginn er í 3D-sýninni á settum hlut (þeir dragast í forskoðun fjölskylduritilsins og á grunnmynd), smáatriðastig valin fyrir hverja sýn (eitt stig fyrir verkefnið; blöð velja eftir kvarða), snúningur á uppréttu plani inni í annarri fjölskyldu sem snýst um fjórðung; eigin táknmyndir fyrir hurðir og glugga á grunnmynd (þau teikna upphafsmynd sína) | Fjölskyldur með tilgreindum breytum, formúlum, eigin grunnmyndartákn, hnöppum, endurtekningum, smáatriðastigum, fjölskyldum inni í fjölskyldum, stærðum úr töflu og breytum fyrir hvern hlut eru búnar til hér: sjá [Breyta fjölskyldu](topic:family-editor) og [Fjölskyldur og stærðir þeirra](topic:families). Afritaðu fjölskyldu til að byrja með einni |
| Breyting á tegundum annarra forrita sem fjölskyldum; breyting á safnhlut í fjölskyldu | Tegundir annarra forrita eru skráðar, flokkaðar eftir ágiskun, og hlutir þeirra valdir. Safnhlutir eru settir eins og þeir eru |
| Framleiðendabúnaður, lokar og tæki (afkastageta, þyngd, tengistærðir framleiðenda); lengdir ASME B16.9 T-stykkja og minnkana á stálstykkjum; þrýstitap um tengistykki, flæði og jöfnun; úðarar; kapalbakkar; stærð stokka og loftrása eftir tækjaeiningum; dragning hornpunkta lagnar; skurður á opum í veggjum og plötum; að sleppa enda lagnar sem er föst við tengi (nema með því að eyða búnaðinum); tengi á safnhlutum settum úr Safnglugganum; þyngd tengistykkja; saumar, þykktir og tengi loftstokka | Pípu- og loftstokkslagnir með almennum stöðluðum tengistykkjum, kerfum, teikningum, töflum og magntöku eru teiknaðar hér: sjá [Pípur og loftstokkar](topic:pipes-and-ducts). Almennur búnaður með tengjum, tengdar lagnir og tengiathugunin: [MEP-búnaður með tengjum](topic:mep-equipment), [Tengja pípur og loftstokka við búnað](topic:mep-connections). Árekstrarsett, fjarlægðir og listi yfir op: [Athuga pípur og loftstokka gegn byggingunni](topic:mep-against-structure). Stálspólur og blöð, listi yfir loftstokkaskurð: [Stálpípuspólur og spólublöð](topic:pipe-spools). Færðu hluti framleiðenda inn úr MEP-forritinu þínu sem IFC |
| Hönnunarkóðaathuganir á soðnum I-sniðum, á I-sniðum sem IFC-sniðið nefnir ekki sem valsað W-, S-, IPE-, HEA- eða HEB-stærð, og á rörum, hornjárnum og rásum (þau koma til baka óathuguð); knékun eða kraftsvörun (náttíðnir eru í Endanlegu frumublokkinni) (önnur röð er aðeins P-Delta: teygjanleg, beygjuleg, án minnkunar stífleika); veggir og plötur í greiningunni; álag sem búið er til úr flötum (nema einn þrýstingur á hverja steypta plötu) | Flipinn {{ui:Greining}} gefur krafta, viðbrögð og beygjur bita, súlna og skástífa með fyrstu röð greiningu og athugar valsaða I-snið, sem hjálpartæki þar til verkfræðingur hefur yfirfarið það: sjá [Greina burðargrindina](topic:frame-analysis#design-checks) |

## Skoðun líkana

| Ekki ennþá | Í staðinn, í dag |
|---|---|
| 3D úr verkefnaskrám | Fluttu út IFC og opnaðu það. Sjá [Fáðu verkefnaskrá í 3D í gegnum IFC](topic:rvt-to-ifc) |
| Innanhússuppréttur í mynduðu teikningasetti (þær eru búnar til út frá eiginleikum herbergis og á eigin blöðum); eigin mál á uppréttum og sniðum (hæðamerki, hæðir, breidd og merki hurða og glugga eru teiknuð; athugasemdir eru skrifaðar í sýnina: sjá [Breyta í uppréttum og sniðum](topic:edit-in-elevations)); teikning veggja í uppréttri mynd (þeir eru teiknaðir í plani sniðsins); liðsniðmát í gegnum Studio | Teikningasettið sem búið er til úr líkaninu: sjá [Uppréttir, snið og blöð](topic:sheets). Fyrir hvaða IFC-líkan sem er: eitt {{ui:Snið}}-plan, eða sniðkassi; sjá [Skera IFC-líkan með sniðplani](topic:section-plane) |
| Útsýni á skurði, útsýni á smáatriðum, teiknisýnir og skýringar; teikningalínur og skygging teiknuð í sýn; klipping á upprétti eða sniði; sniðmát fyrir uppréttir, snið, loftgrunnmyndir og 3D-sýnir; loftgrunnmyndir í mynduðu teikningasetti; heilt sett af eigin blöðum í einu PDF | Grunnmyndir og loftgrunnmyndir hafa sviðsbil, klippisvæði, kvarða og undirlag (grunnmyndir einnig sniðmát), og eigin blöð taka grunnmyndir, loftgrunnmyndir, uppréttir, snið og töflur, hvert vistað sem PDF: sjá [Sýnir, sviðsbil og eigin blöð](topic:views-and-sheets) |
| Að færa settan ljós upp í loft eftir á; hallandi eða þrepuð loft; loftmynstur önnur en fimm ristirnar; eigið tákn ljóss í loftgrunnmynd | Settu það með **Festing: Í loftinu**; loftgrunnmyndin teiknar tækið út frá eigin lögun: sjá [Settu búnað og húsgögn úr safninu](topic:place-from-library) |
| Leitarsett deilt með öðrum, sett inni í IFC-skránni | Sett eru geymd í þessum vafra; sjá [Finndu hluti eftir flokki, heiti eða eiginleika](topic:find) |
| Mæling horna, eða eftir leið með nokkrum punktum | Mældu hvern hluta með {{ui:Mæla}}: sjá [Mæltu fjarlægðir, flatarmál flata og staðsetningar í 3D](topic:measure) |
| Áferðir í lifandi 3D-sýn | Málað efni sýnir lit sinn í sýninni og áferð sína í myndgerðum myndum: sjá [Myndgerðu mynd af líkaninu](topic:render) |
| Mjúkir árekstrar (fjarlægðir) milli hvaða tveggja setta sem er, árekstrarhópar, vistun árekstrarniðurstaðna | Keyrðu {{ui:Árekstrarathugun}} og búðu til mál úr þeim sem skipta máli: sjá [Athugaðu árekstra](topic:clash-check). Pípur og loftstokkar gegn byggingunni hafa {{ui:Athuga fjarlægðir}}: sjá [Athuga pípur og loftstokka gegn byggingunni](topic:mep-against-structure) |
| Vistun nokkurra líkana sem eins setts, eða breyting á tveimur líkönum í einu | Breyttu einu líkani í einu; hvert vistar sína skrá |
| Úthlutun mála, skilafrests, merkja, nokkurra sjónarhorna á mál, breyting á máli | Eitt sjónarhorn á hvert mál; sjá [Mál og BCF-skrár](topic:issues-bcf) |
| `.ifczip` og `.ifcxml` | Afþjappaðu eða fluttu út venjulega `.ifc` |
| Kortalög fyrir líkan án kortaumbreytingar, eða í sýnum teikningar | Fluttu líkanið út með hnitunum sínum: sjá [Kort á jörðinni undir líkaninu](topic:map-layers) |
| E57-skannar yfir 6 milljónum punkta eða 512 MB; eigin skrár skannaframleiðenda (RCP, RCS, FLS, LGS, TZF, ZFS); punktský í 3D-sýn teikningar; vistun staðsetningar skýs með líkaninu | Fluttu skannann út sem LAS eða LAZ og opnaðu hann við hlið IFC-líkans: sjá [Punktskýasnið](topic:point-cloud-formats) og [Sýna punktský við hlið líkansins](topic:point-clouds) |
| Skráning skanna: að finna mörk (kúlur, skákborð) í skanna af sjálfu sér, leysa alla skanna saman (knippajöfnun), mælikvarði, skráning gegn líkani | Veldu samsvarandi punkta eða sláðu inn hnit marka, og fínstilltu síðan einn skanna í einu með ICP: sjá [Skráðu marga skanna í einn](topic:register-scans) |
| Opnun verkefnaskráa `.pln`, `.pla`, `.tpl` og `.bpn` | Fluttu út IFC og DWG úr þeim, eða verkefnapakka: sjá [Opnaðu .pln- og .pla-verkefnaskrár](topic:pln-project-files) og [Opnaðu verkefnapakka](topic:open-project-bundle) |
| Opnun listans {{ui:Hlutir}} til að velja eftir gerð | Smelltu á hóp gerðarinnar í {{ui:Líkantré}}: sjá [Finndu leið þína með líkantrénu](topic:model-tree) |
| Skrif athugasemdar eða titils á mál í VR, raddglósur, færsla sniðplans með hendi í VR, sniðkassi í VR | Settu málið í VR, og bættu síðan orðunum við í flipanum Mál; settu sniðplan eða kassa í 3D-sýninni áður en þú ferð inn: sjá [Skoðaðu líkanið í VR-gleraugum](topic:vr-review) |
| Að sjá fólk við borðið í VR (aðeins fólk í VR sést), upptaka VR-göngu | Biddu þau um að koma í VR, eða fylgstu með í 3D-sýninni |
| Dagsbirtuhermun (loftslagsháð dagsbirta, glampi, sólarstundir), gluggar í þaki í dagsbirtustuðlinum, athuganir gegn BS EN 17037 eða grænum byggingarkerfum; ISO 52016-1 orkuaðferðin, klukkustundarhermun orku, varmamassi og brýr, loftslagsskrár | Hönnunartæki: meðaltal dagsbirtustuðuls, lóðrétt himinhluti hvers glugga, sólin gegnum glugga á dagsetningu og dagsbirtustuðullinn á neti ([Metðu dagsbirtu í hverju herbergi](topic:daylight-factor)); hitatap, gráðudagaár og kæliálag á herbergi ([Metðu hita- og kæliálag](topic:heating-and-cooling-loads)). Notaðu hermiforrit til að sýna fram á samræmi |
| Hýstur stafrænn tvíburi byggingar: mælingar vistaðar og viðvörunum sent í tölvupósti þegar BimCraft er lokað, tölvupóstar um viðhald sem er á döfinni; MQTT 5; lestur verka COBie til baka | Mælingar úr CSV-skrá eða beint frá þínum eigin miðlara eða vistfangi meðan líkanið er opið, mörk sem merkja eignir, skjöl, COBie út og inn: sjá [Geymdu eignagögn og viðhaldsskrá í líkaninu](topic:assets-and-maintenance) |
| Viðbót eða lifandi tenging við Enscape, Twinmotion eða önnur sjónmyndunarforrit; FBX- eða Datasmith-skrár; einn hlutur fyrir hvern hlut, vistaðar sýnir og göngur í .glb | Vistaðu .glb fyrir myndgerðarforrit sem lesa glTF, USD-skrá (einn hlutur fyrir hvern hlut, með IFC-gögnum sínum: sjá [Flyttu líkanið út sem USD](topic:usd)), eða IFC fyrir þau sem keyra inni í öðru hönnunarforriti: sjá [Sendu líkanið í myndgerðarforrit](topic:model-for-rendering) og [Opnaðu senuna í öðru forriti](topic:render-open-in) |
| Annað forrit sem teiknar myndgerðina án myndgerðarviðbótar (CadCraft keyrir aldrei forrit undir GNU GPL-leyfinu); víðmynda- eða þrívíddarmyndavélar og himnamynd í gegnum annað forrit; Unreal Engine-viðbótin (skrárnar eru skrifaðar, viðbótin sem opnar þær er ekki gefin út) | Okkar eigin Fast- og Path-tracer vélar; vél viðbótar ([teiknaðu myndina með öðru forriti](topic:render-other-program)); USD-, glTF- eða Unreal-möppuskrá úr Vélalistanum til að taka með í hvaða forrit sem er |
| Í lifandi sýn: dreifing plantna og steina, deiling víðmynda, rölt, ótengd skoðun eða myndband | Lifandi sýn ModelCraft hefur þetta; hér eru myndgerðar myndir og 360° víðmyndir: sjá [Lifandi sýnin](topic:live-view) og [Myndgerðu mynd af líkaninu](topic:render) |

## Teikningar

| Ekki ennþá | Í staðinn, í dag |
|---|---|
| Breyting, mæling eða vistun DWG og DXF | CadCraft-teikniforritið ({{ui:Breyta í CadCraft}} á 2D-sýninni) |
| Prentun eða útflutningur PDF | Prentaðu úr forritinu sem gerði teikninguna; athugaðu það fyrst með {{ui:Prentsýn}} |
| Prentstílar og pennatöflur | {{ui:Prentsýn}} sýnir einfalda svarta línu með línuþykktum |
| DWG-skrár eldri en R13, og tvíundar-DXF (BimCraft segir þér það þegar þú opnar eina) | Vistaðu teikninguna aftur sem nýrri DWG, eða sem ASCII-DXF |
| Teikningar tengdar inni í tengdum teikningum | Opnaðu þær beint |
| TIFF-myndir | Vistaðu PNG- eða JPEG-afrit með sama heiti og bættu því við |
| DGN-teikningar | Skráðar aðeins í möppuskýrslum |
| Hlutir skráðir undir **Ekki teiknað ennþá** | Skoðaðu teikninguna í forritinu sem gerði hana |
| ACIS-föst efni, búkar, svæði og yfirborð, og undirskiptinet í 3D | Fluttu út IFC eða 3D-fleti úr forritinu sem gerði teikninguna |
| Myndir, fjölmerkingar og blöð í 3D-sýn teikningar | Sjáðu þau á flipanum {{ui:Líkan}} og á blöðunum |
| Val hluta í 2D-sýn teikningar | Skiptu yfir í {{ui:3D}} og smelltu á hlutinn þar: sjá [Sjáðu DWG- eða DXF-teikningu í 3D](topic:dwg-in-3d) |
| Töflur yfir búnað úr teikningum án `KCL-ITEM`-merkinga | Ekki í boði |
| Búnaðartafla sem XLSX eða PDF | {{ui:Sækja CSV}} og opnaðu hana í töflureikni |

## Skrár og kerfi

| Ekki ennþá | Í staðinn, í dag |
|---|---|
| Skýjavistun | Vistaðu afrit á tölvunni þinni eða netþjóni skrifstofunnar. Skýjavistun er ekki í boði ennþá |
| Muna möppur í Firefox og Safari | Veldu möppuna aftur, eða dragðu hana inn |
| Afturköllun eftir vistun | Opnaðu upprunalegu skrána aftur til að byrja upp á nýtt |
| Fylling í vantandi hluta skorinnar verkefnaskráar | Afritaðu upprunalegu skrána aftur; í möppu les BimCraft nýjasta heila öryggisafritið |
| Opnun skráanna sem þú hafðir opnar | Óvistaðar breytingar eru boðnar aftur sem „Endurheimta vinnuna þína?“ þegar þú kemur aftur; opnaðu skrárnar aftur af síðustu listanum |
