---
title: Waxa cusub ee 0.8 iyo 0.8.1
summary: BimCraft wuxuu ku daraa dadka dhismaha ku socda, dhawaaqa qolalka aad maqli karto, ciyaarinta daadka, dabaysha iyo dhulgariirka, muuqaal nolosha 50 sano, hubinta IDS, calaamadaha iyo jadwallada, Move, Align iyo Distribute, sawirrada hoos qorshaha, darbiyo laga sameeyo scan, sawirrada panelka, qorraxda, tuubooyinka iyo VRF, cabbirka tuubada iyo kaabta, hubinta kontaadada iyo jilicsanaanta, khariidad kasta oo map projection ah, doorashada render engine, iyo Studio undo; 0.8.1 wuxuu hagaajiyaa qalabyada madow ee layout-ka Ribbon.
keywords: waxa cusub, release notes, sheekada isbeddelka, isbeddel, 0.8, 0.8.1, nooca, astaamo cusub, dadka, dhawaaq, daad, dabayl, dhulgariir, nolosha, ids, calaamado, jadwal, move, align, distribute, sawir, dhinac, darbi, scan, panel, qorraxda, kala qaybin, tuubo, kaabo, cabbir, kontaado, jilicsanaan, epsg, khariidad, dukumentiyo, template, kaarboon, kharash, energyplus, render engine, u fur, usd, glb, unreal, undo, kordhin, pcf, calaamadaha palette, dhirta, raad, qalmaha, ribbon, project browser, layout
from: 87b03056
---

Waa waxa isbeddelay BimCraft 0.8 (2026-11-01) iyo 0.8.1 (2026-11-02), marka la barbardhigo 0.7. Hadda BimCraft wuxuu jawaabi karaa su'aalaha ku saabsan dhismaha oo wuxuu tijaabin karaa, dadka, dhawaaqa, biyaha, dabaysha iyo dhulgariirka, wuxuuna sawiri karaa qalabyo badan; 0.8.1 waa nooc hagaajin.

## Cusub

### Tijaabi dhismaha

- **Dadka dhismaha ku jira.** Qaybta {{ui:People in the building}} ee panelka bidix waxay dadka u socodsiisaa qolalkaaga, albaabadaaga iyo jaadadkaaga, iyadoo la eegayo baxid degdeg ah ama imaanshaha caadiga ah maalinta. Waxaad aragtaa xariiqyada meelaha dhismuhu ku cidhiidhsan yahay, socodka ugu dheer ee qol kasta uu u qaado albaabka baxista, iyo waqtiga qofka ugu dambeeya. Calaamadee {{ui:Shut}} albaab si aad u aragto wixii isbeddelaya, oo calaamadee {{ui:Show the people in the 3D view}} si aad u daawato socodka. Natiijooyinka waxay u tagayaan **Dhibaatooyinka**. Waa qaab qiyaas oo dad badan u gaar ah go'aannada naqshadda, ma aha shahaado badbaado dab. Eeg [Dadka u socda dhismaha](topic:people-in-the-building).
- **Dhawaaqa qolka, oo maqal.** Qaybta {{ui:Room acoustics}} waxay siisaa wakhtiga dib-u-dhawaaqa qol kasta sida band-ka octave-ka (Sabine iyo Eyring) oo ka saleysan cabbirkiisa iyo dhamaystirka aad doorato, iyo haddii aad bartilmaameedka leedahay, waxay sheegaysaa intee ka mid ah nuugidda loo baahan yahay si uu u buuxiyo. {{ui:Play it in this room}} wuxuu ciyaaraa cod, dhaqaaq, shanqaad ama faylka sanka aad leedahay, adoo isticmaalaya impulse response loo xisaabiyay qolka. Qiimaha nuugidda waa qiyaas caadi ah oo la daabacay oo aad bedeli karto. Eeg [Dhawaaqa qolka](topic:room-acoustics).
- **Ciyaarinta daadka, dabaysha iyo dhulgariirka.** {{ui:Hazard playback}} wuxuu ciyaaraa biyo kor u kacaya qolalka, cadaadiska dabaysha dabaqa kasta, iyo dhulgariir gariirinaya dabaqyada, qorshe ama muuqaal dhinac ah oo leh jiiddo waqtiga. Moodello fudud oo mala-awaalkooda ku qoran guddiga; ma aha hubin code. Eeg [Ciyaar daad, dabayl ama dhulgariir](topic:hazard-playback).
- **Waxa qaxaya 50 sano gudahood.** {{ui:Life-cycle view}} wuxuu liistaa daaqadaha, albaabada, dhamaystirka iyo saqafka, mid kasta oo leh nolosha adeegga, sannadaha la beddelayo, iyo marka aad qiimaha halkii unug ku qortid, kharashka sannad kasta iyo qiimaha hadda. {{ui:Save the schedule (CSV)}} wuu soo saaraa. Nolosha adeegga waa qiyaas qorshe. Eeg [Eeg waxa qaxaya 50 sano](topic:life-cycle-view).
- **Hubinta kontaadada iyo jilicsanaanta.** Xidhmooyinka {{ui:Concrete members}} iyo {{ui:Seismic loads}} ee {{ui:Analysis}} ayaa hubiya kontaado-kontaadada iyo tiirarka ee ACI 318-19 waxayna sameeyaan xoogagga dhulgariirka siman ee ASCE 7-22 dabaqyada adag, iyo socodka dabaqa. Injineer ayaa hubin doona. Eeg [Hubi xubnaha kontaadada oo samee culeysyada jilicsanaanta](topic:concrete-and-seismic).

### Hubi oo warbixi

- **Ka hubi IDS-ka.** Soo rar faylka `.ids` ee macmiilku kuu siiyay oo ka arag dhammaan walxaha aan ku habboonayn iyagoo {{ui:Dhibaatooyinka}}, ka hor intaadan u geynin IFC. Fur {{ui:Check against an IDS}} hoos {{ui:Model checks}}. Eeg [Ka hubi moodelka IDS-ka macmiilka](topic:check-against-ids).
- **Calaamadaha iyo jadwallada.** Qeex calaamadahaaga, dhig dhowr walxood mar keliya, samee jadwallo tiirarkoodu, shaandhayaasha iyo koox-kooxeedyadu akhriyaan; calaamadahu waxay ku jiraan IFC. Eeg [Calaamadaha iyo jadwallada](topic:tags-and-schedules).
- **Dukumentiyada moodelka ka yimid.** {{ui:Documents from the model}} wuxuu buuxiyaa template-ka qeexitaanka IFC-ka furan oo u kaydiyaa PDF, dukumenti Word ama Markdown. Eeg [Dukumentiyada moodelka ka yimid](topic:documents-from-the-model).
- **Scan-ka iyo moodelka isbarbardhig.** Marka daruuraha dhibcaha la furan yahay, {{ui:Compare}} wuxuu go'aaminayaa walxaha kasta sida la dhisay, qayb ahaan la dhisay, maqan ama aan la gaarin, wuxuuna muujinayaa boqolkiiba la dhisay. Eeg [Isbarbardhig scan-ka iyo moodelka](topic:compare-scan-with-model).
- **Kaarboon iyo kharash.** Pane-ka Kaarboon wuxuu isku daraa kaarboonka ku jira agabka laga bilaabo miis isbeddeli kara oo qiimaha, pane-ka Kharashna wuxuu qiimaha u kala qaybiyaa jadwalka 4D. Qiimayaasha ku yimid BimCraft waa guud oo waxaa lagu calaamadiyay in aan la hubin. Eeg [Kaarboonka ku jira iyo kharashka](topic:embodied-carbon-and-5d-cost).
- **Khariidad kasta oo map projection ah.** {{ui:Measure}} › {{ui:Coordinate system…}} wuxuu qaataa lambarka EPSG, aagga UTM, magac ama qeexitaankaaga projection-ka. Eeg [Isku xir projection kasta](topic:georeference-any-projection).

### Sawir oo wax ka beddel

- **Guuri, Isku toosi iyo Kala qaybi.** Hoos {{ui:Build}}; {{key:Shift+M}} wuxuu bilaabaa Guuri (M oo keliya weli waa Qiyaas). Guuri wuxuu nuqul sameeyaa intaad socoto {{key:C}}, tallaabo kasta waa hal undo, wuxuuna ku socdaa kulan Live TeamWork. Eeg [Guuri, nuqul samee, isku toosi iyo kala qaybi](topic:move-align-distribute).
- **Sawirrada hoos qorshaha.** {{ui:Build}} › {{ui:Picture}} wuxuu geliyaa sawir PNG, JPEG ama WebP hoos qorshaha heer ama dhinac toosan. Cabbirka ku dhig laba dhibcood, oo guuri, leexi, sii dhimo oo xidh. Aag laga koobiyeeyey MarkupCraft waxay ku dhejisaa cabbirka xaashideeda. Eeg [Sawirka hoos qorshaha](topic:pictures-as-backgrounds).
- **Darbiyo scan-ka laga sameeyo.** Scan furan oo la furay, darbiyada, albaabada iyo qolalka waxay yimaaddaan soo jeedinno aad mid mid ilaaliso ama diido, hal undo gudaha. Waxaa la helaa oo keliya darbiyada laba jihood oo toosan. Eeg [Scan-ka u beddel darbiyo](topic:scan-to-walls).
- **Raad, qalmaha iyo jaad sawir.** {{ui:Trace}} wuxuu muujiyaa heer kale oo jajab ah hoos qorshaha, {{ui:Pens}} wuxuu siinayaa darbiyada, albaabada iyo daaqadaha khadkooda culeyska gaar ah muuqaal keli ah, {{ui:Sketch stair}} wuxuu jidka hadalka u beddelaa jaad. Faylka Wavefront OBJ ayaa furma. Eeg [Raad heer, qalmaha iyo jaad sawir](topic:trace-pens-stairs-obj).
- **Dhismayaal ku wareegsan cinwaan.** Dhismayaasha iyo barcelka ay CivilCraft's Address to site helay waxay yimaaddaan soo jeedinno; waxaad calaamadaysaa kuwa aad ku darto. Eeg [Ka bilow goobta CivilCraft](topic:site-from-civilcraft).
- **Sawirrada panelka.** {{ui:Build}} › {{ui:Panel drawings}} wuxuu qaabeeyaa darbiyada, dabaqyada iyo saqafyada alwaax ama bir fiiqan ah, wuxuuna u kaydiyaa liiska jarista CSV ahaan iyo sawirrada dukaanka PDF ahaan. Qiimayaal bilow ah, ma aha naqshadda qaab-dhismeedka. Eeg [Sawirrada panelka](topic:panel-drawings).
- **Palettada calaamadaha iyo dhirta.** {{ui:Build}} › {{ui:Symbol palette}} wuxuu helaa calaamadaha korontada iyo biyaha magacooda; ilaha {{ui:Plants}} ee {{ui:Library}} wuxuu liistaa ku dhowaad 400 dhir oo leh calaamado qorshe. Eeg [Palettada calaamadaha](topic:symbol-palette) iyo [Dhig dhir](topic:plant-list).

### Tuubooyin, tuubooyinka hawada iyo tamar

- **Split, VRF iyo fan coil.** Cutubyada gudaha iyo dibedda leh xidhiidhadooda, iyo khadadka la cabbiray iyadoo laga soo qaatay miis tusaale qiyaasaha caadiga ah oo aad bedeli karto. Eeg [Split, VRF iyo fan coil](topic:split-vrf-fan-coils).
- **Xisaabinno.** Pane-ka Xisaabinta wuxuu hubiyaa cabbirka tuubada biyaha iyo tuubooyinka hawada iyo dhaqdhaqaqa, wuxuuna marin u sameeyaa kaableyada tallaabooyinka iyo tuubooyinka, wuxuuna muujiyaa buuxinta, wuxuuna xisaabiyaa iftiinka IES ama EULUMDAT. Qiimayaasha caadiga ah waa la calaamadiyay; qor qiimayaasha xeerkaaga. Eeg [Xisaabinta tuubada, tuubooyinka hawada, kaableyada iyo iftiinka](topic:mep-calculations).
- **Faylasha PCF.** Amarka **Export PCF** ee Pipe wuxuu qoraa jidadka barnaamijyada xoogga tuubada iyo isometric-ka, faylka PCF la akhriyo wuxuu dib u sawiraa tuubadiisa. Eeg [Faylasha qaybaha tuubada](topic:piping-pcf).
- **Solar PV.** Ku rakib kakoobo saqafka ama dhulka, hooshi ka dhig moodelka, qiyaas tamarta sanadlaha ah, hubi xadhkaha koronta oo samee xogta diagrammaha hal-khadka. Moodulka bilowga ah iyo khasaaraha waa caadi. Eeg [Solar PV](topic:solar-pv).
- **Faylka EnergyPlus.** Pane-ka Hubi kulaylka iyo qaboojinta EnergyPlus wuxuu qoraa moodelka IDF si aad ku socodsiiso EnergyPlus-kaaga. Browser-ka ku socodsiintiisu waxay u baahan tahay dhis aad martigelisid oo aad ku qorto cinwaankiisa; BimCraft ma sido. Eeg [Hubi kulaylka iyo qaboojinta EnergyPlus](topic:check-with-energyplus).

### Sawirro iyo faylal

- **Dooro mishiinka rendarka.** {{ui:Render}} wuxuu leeyahay doorasho {{ui:Engine}}. Laba mishiin oo gudaha ah (Fast iyo Path tracer) ayaa weli ah caadiga. **{{ui:Open in}}** wuxuu muuqaalka u kaydiyaa faylka USD ama glTF, iyo galka mashruuca Unreal sida .zip; CadCraft Studio gudaha add-on ayaa ku dari kara mishiin. Plug-in-ka Unreal ee furaya mashruuca lama sii deynin. Eeg [Dooro barnaamijka sawirka sameeya](topic:render-engines).
- **Studio undo.** Gudaha CadCraft Studio, BimCraft wuxuu u sheegaa Studio tallaabo kasta oo dhammaatay si Studio u furto tallaabadaadii ugu dambeysay daaqada aad ugu dambeyntii isticmaashay. Eeg [Undo barnaamijyada oo dhan](topic:undo-across-apps).
- **Add-ons faylkaaga.** IFC wuxuu diiwaangeliyaa add-ons-ka ku qoray, wuxuuna kuu soo bandhigaa kuwa aad ka maqan tahay marka aad furto. Eeg [Add-ons faylkaaga](topic:add-ons-in-your-file).

### App kasta

- **Ku xidh AI-gaaga.** Kaaliyahaaga shaqsiga ah wuxuu wax ka qaban karaa BimCraft iyada oo loo marayo xiriirka Studio, wuxuuna ka jawaabi karaa su'aalaha moodelka, sida qolalka ku jira aag la siiyay. Studio ma leh AI u gaar ah. Eeg [Kaaliye AI ha ku shaqeeyo moodelkaaga](topic:assistants).
- **Safafka qalabka.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} wuxuu bixiyaa Wrap, 2 safaf ama 1 safaf; Wrap ayaa weli ah caadiga.
- **Aaladaha gelinta.** Trackpad, qalin, mouse 3D, controller iyo dejinta MIDI waa la wadaagaa dhammaan apps-ka.
- **Dhibaatooyinka iyo Live.** Panelka digniinta iyo kulamada Live waxay shaqeeyaan sida hore, oo hubinnada cusub ee kor ku qoran ayaa dhibaatooyinka ku darayaa.
- **Luuqadaha.** 54 luuqadood, toddoba ka mid ah oo cusub. Kuwa aan Ingiriisi ahayn waa tarjumaad mashiin ah oo aan weli akhriyay qof af-hooyo ah; mawduucyada caawinta badanaaba Ingiriisi ayay yihiin.

## Lagu hagaajiyay 0.8.1

- **Layout-ka Ribbon + Project browser.** Geli › Soo geli CAD, Geli › Sawir iyo Maamul › Cutubyada mashruuca waxay ku yiraahdeen "Weli lama dhisin BimCraft-ka". Hadda Sawir wuxuu furaa qalabka Sawirka, Soo geli CAD wuxuu furaa {{ui:Build}} › {{ui:From a drawing…}} (DWG, DXF, PDF ama scan), Cutubyada mashruuca wuxuu furaa {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}. Guuri iyo Isku toosi waxay shaqeeyaan qalabyadooda, Heer waxay furtaa {{ui:Add levels…}}, Marxaladaha waxay furaan qaybta Marxaladaha dayactirka, Agabka waxay furaan maktabadda agabka.
- **Qaybta DWG classes.** Waxa loo akhriyay nooc qaldan; waa la hagaajiyay BimCraft iyo apps-ka kale ee akhrinaya DWG.
- **Luuqadda wakhtiga shaqada.** Studio iyo xirmooyinka la xidhay waxay hadda ku beddeli karaan luuqadda iyada oo aan dib loo bilaabin. Weli lama tijaabin dhammaan madal-ka; noo sheeg haddii luuqaddu ku beddelmin.
- **Qoraalka Archicad bundle.** `archicad_bundle.py`, download kale, ayaa hadda helaa jidka Archicad, wuxuu daawadaa galka ilaa 20 ilbiriqsi, wuxuuna ku dayaa mar kale bundle-ka hareerihiisa.

## Weli ma jirto nooca hadda

- **Amniga iyo caawimada naqshadda.** Dadka dhismaha ku jira ma leh xad masaafo socod oo ka timid code dhismaha (adiga ayaad xadka gelisaa), mana hubin gacanta qorshe dhab ah. Qiimayaasha dhawaaqa, nolosha iyo daadka waa qiyaasaha qorshaha, ma aha hubin code.
- **Cimilada mustaqbalka iyo EnergyPlus.** Ma jiro cimilada mustaqbalka ee gudaha: waxaad soo gelin kartaa faylka sheekada daadka. Ciyaarinta EnergyPlus ee browser-ka kuma jirto nooca hadda.
- **Layout-ka Ribbon.** Material Takeoff wuxuu weli yahay "Not built" sababtoo ah BimCraft ma leh liis tirada agabka, 54 qalab kale oo madow ee ribbon-ka weli ma leh qalab BimCraft ah oo ka dambeeya.
- **Saxiixa iyo madal-yada.** Rakibaadyada Windows iyo .dmg macOS aan la saxiixin, sidaas darteed SmartScreen wuxuu muujinayaa {{ui:More info}}, kadibna {{ui:Run anyway}}, macOS wuxuu u baahan yahay midig-guji kadibna {{ui:Open}}. Dhismaha iPad iyo iPhone looma dib u dhisin 0.8.1.
- **Tijaabooyinka bogga dhabta ah.** Tijaabooyinka browser-ka BimCraft ee hore qaarkood weli way fashilmaan bogga tijaabada, sidii ka hor 0.8.1.

Waxa kale oo dhan wuxuu ku jiraa [Waxa aan weli la dhisin](topic:not-built-yet). Isbeddelada hore waxay ku jiraan [Waxa cusub ee 0.7](topic:whats-new-0-7).
