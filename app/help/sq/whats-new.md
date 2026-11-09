---
title: Çfarë ka të re në 0.8 dhe 0.8.1
summary: BimCraft shton njerëzit që ecin nëpër ndërtesë, akustikën e dhomës që dëgjohet, luajtjen e përmbytjes, erës dhe tërmetit, pamjen e ciklit jetësor pesëdhjetëvjeçar, kontrolle sipas një IDS-je, etiketa dhe tabela, Lëviz, Rreshto dhe Shpërndaj, foto nën planimetri, mure nga një skanim, vizatime panelesh, diellin, sistemet e ndarë dhe VRF, dimensionimin e tubave dhe kabllove, kontrollet e betonit dhe sizmike, çdo projeksion hartash, zgjedhjen e motorit të renderimit dhe zhbërjen në Studio; 0.8.1 rregullon veglat gri të shiritit.
keywords: çfarë është e re, shënime lëshimi, regjistër ndryshimesh, ndryshime, 0.8, 0.8.1, versioni, veçori të reja, evakuim, njerëz, radhë, akustikë, reverberim, përgjigje impulsi, përmbytje, erë, tërmet, rrezik, cikli jetësor, jetë shërbimi, ids, etiketa, tabela, lëviz, rreshto, shpërndaj, foto, sfond, skanim në mure, vend nga civilcraft, vizatime panelesh, skelet, diell, pv, ndarë, vrf, fan coil, dimensionim tubash, tavë kabllosh, ndriçim, beton, sizmik, krahaso skanimin, epsg, projeksion, dokumente, shabllon, karbon, kosto, energyplus, motor renderimi, hap në, usd, glb, unreal, zhbëj, shtojca, pcf, simbole, bimë, gjurmo, pena, shirit, shfletuesi i projektit, paraqitje
from: 87b03056
---

Kjo është ajo që ndryshoi në BimCraft 0.8 (2026-11-01) dhe 0.8.1 (2026-11-02), krahasuar me 0.7. BimCraft tani mund t'u përgjigjet pyetjeve për një ndërtesë dhe ta testojë atë, me njerëz, zë, ujë, erë dhe tërmete, dhe ta vizatojë me më shumë vegla; 0.8.1 është një version rregullimi.

## Të reja

### Testo ndërtesën

- **Njerëzit në ndërtesë.** Seksioni {{ui:Njerëzit në ndërtesë}} i panelit të majtë ecën një evakuim ose hyrjet e një dite normale nëpër dhomat, dyert dhe shkallët e tua. Sheh radhët aty ku ndërtesa ngushtohet, ecjen më të gjatë drejt një dalje nga çdo dhomë dhe sa kohë i duhet personit të fundit. Vendos shenjën te {{ui:Mbyllur}} te një derë për të parë çfarë ndryshon, dhe vendos shenjën te {{ui:Shfaq njerëzit në pamjen 3D}} për të parë ecësit. Gjetjet shkojnë te Problemet. Një model i përgjithshëm turmash për vendime projektimi, jo një certifikatë sigurie nga zjarri. Shih [Ec njerëz nëpër ndërtesë](topic:people-in-the-building).
- **Akustika e dhomës, dhe dëgjoje.** Seksioni {{ui:Akustika e dhomës}} jep kohën e reverberimit të çdo dhome sipas brezit oktavë (Sabine dhe Eyring), nga madhësia e saj dhe finituret që zgjedh, dhe me një objektiv tënd thotë sa absorbim do të duhej për ta arritur. {{ui:Luaj në këtë dhomë}} luan një zë, një duartrokitje, nota të pickuara ose skedarin tënd të zërit përmes një përgjigjeje impulsi të llogaritur për dhomën. Vlerat e absorbimit janë vlera tipike të publikuara që ti duhet t'i zëvendësosh. Shih [Akustika e dhomës](topic:room-acoustics).
- **Përmbytja, era dhe tërmeti.** {{ui:Luajtja e rrezikut}} luan ujin që ngrihet nëpër dhoma, presionin e erës mbi çdo kat dhe një tërmet që tund katet, mbi një planimetri ose një pamje elevacioni me një rrëshqitës kohor. Modele të thjeshta, me supozimet e tyre në panel; jo kontroll sipas kodit. Shih [Luaj një përmbytje, erë ose tërmet](topic:hazard-playback).
- **Çfarë konsumohet në pesëdhjetë vjet.** {{ui:Pamja e ciklit jetësor}} liston dritaret, dyert, finituret dhe çatinë me një jetë shërbimi për secilin, vitet kur zëvendësohen dhe, kur shkruan një kosto për njësi, koston sipas vitit dhe vlerën e saj aktuale. {{ui:Ruaj planin (CSV)}} e shkruan. Jetët e shërbimit janë shifra planifikimi. Shih [Shiko çfarë konsumohet gjatë pesëdhjetë viteve](topic:life-cycle-view).
- **Kontrollet e betonit dhe sizmike.** Blloqet {{ui:Elemente betoni}} dhe {{ui:Ngarkesat sizmike}} të skedës {{ui:Analiza}} kontrollojnë trarët dhe kolonat e betonit sipas ACI 318-19, dhe bëjnë forca anësore ekuivalente sipas ASCE 7-22 mbi dysheme të ngurta, me zhvendosjen e katit. Për t'u kontrolluar nga një inxhinier. Shih [Kontrollo elementët e betonit dhe bëj ngarkesa sizmike](topic:concrete-and-seismic).

### Kontrollo dhe raporto

- **Kontrollo sipas një IDS-je.** Ngarko skedarin `.ids` që të dha klienti dhe sheh çdo element që nuk e plotëson te Problemet, para se të japësh IFC-në. Hap {{ui:Kontrollo sipas një IDS-je}} nën {{ui:Kontrollet e modelit}}. Shih [Kontrollo një model sipas IDS-së së klientit](topic:check-against-ids).
- **Etiketa dhe tabela.** Përcakto etiketat e tua, vendosi në shumë elemente njëherësh dhe bëj tabela me kolona, filtra dhe grupe që i lexojnë; etiketat ruhen në IFC. Shih [Etiketat dhe tabelat](topic:tags-and-schedules).
- **Dokumentet nga modeli.** {{ui:Dokumentet nga modeli}} plotëson një shabllon specifikimi nga IFC-ja e hapur dhe e ruan si PDF, dokument Word ose Markdown. Shih [Dokumentet nga modeli](topic:documents-from-the-model).
- **Krahaso një skanim me modelin.** Me një re pikash të hapur, {{ui:Krahaso}} gjykon çdo element si të ndërtuar, pjesërisht të ndërtuar, të munguar ose të pa arritur, dhe shfaq përqindjen e ndërtuar. Shih [Krahaso një skanim me modelin](topic:compare-scan-with-model).
- **Karboni dhe kostoja.** Paneli Karboni mbledh karbonin e mbartur nga një tabelë faktorësh që mund ta ndryshosh, dhe paneli Kosto shpërndan çmimet mbi tabelën 4D. Faktorët që vijnë me BimCraft janë gjenerikë dhe të shënuar si të pakontrolluar. Shih [Karboni i mbartur dhe kostoja](topic:embodied-carbon-and-5d-cost).
- **Çdo projeksion hartash.** {{ui:Mas}} › {{ui:Sistemi koordinativ…}} merr një numër EPSG, një zonë UTM, një emër ose përkufizimin tënd të projeksionit. Shih [Georeferencimi me çdo projeksion](topic:georeference-any-projection).

### Vizato dhe redakto

- **Lëviz, Rreshto dhe Shpërndaj.** Nën {{ui:Ndërtimi}}; {{key:Shift+M}} nis Lëviz (thjesht {{key:M}} mbetet Mas). Lëviz kopjon ndërsa lëviz me {{key:C}}, çdo hap është një zhbërje, dhe udhëton në një sesion Live TeamWork. Shih [Lëviz, kopjo, rreshto dhe shpërnda](topic:move-align-distribute).
- **Foto nën planimetri.** {{ui:Ndërtimi}} › {{ui:Foto}} vendos një PNG, JPEG ose WebP nën planimetrinë e një niveli ose mbi një plan vertikal. Vendos shkallën me dy pika, dhe lëviz, rrotullo, zbeho dhe kyç. Një zonë e kopjuar në MarkupCraft ngjitet në shkallën e fletës së saj. Shih [Vendos një foto nën planimetri](topic:pictures-as-backgrounds).
- **Mure nga një skanim.** Me një skanim të hapur, muret, dyert dhe dhomat vijnë si propozime që mban ose refuzon një nga një, në një hap zhbërjeje. Gjenden vetëm muret në dy drejtime pingule. Shih [Kthe një skanim në mure](topic:scan-to-walls).
- **Gjurmo, pena dhe skicë shkalle.** {{ui:Gjurmo}} shfaq një nivel tjetër me vija të ndërprera nën planimetri, {{ui:Pena}} i jep mureve, dyerve dhe dritareve gjerësinë e vet të vijës në një pamje, dhe {{ui:Skicoj shkallën}} e kthen një vijë ecjeje në shkallë. Hapet një rrjetë Wavefront OBJ. Shih [Gjurmo një nivel, pena dhe një shkallë nga një skicë](topic:trace-pens-stairs-obj).
- **Ndërtesat rreth një adrese.** Ndërtesat dhe parcela që gjeti Adresa në vend të CivilCraft vijnë si sugjerime; i shënon ato që shton. Shih [Fillo nga vendi i CivilCraft](topic:site-from-civilcraft).
- **Vizatime panelesh.** {{ui:Ndërtimi}} › {{ui:Vizatime panelesh}} kornizon mure, dysheme dhe çati prej druri ose çeliku të lehtë, dhe ruan një listë prerjesh si CSV dhe vizatime punishteje si PDF. Vlera fillestare, jo një projektim strukturor. Shih [Vizatime panelesh](topic:panel-drawings).
- **Paleta e simboleve dhe bimët.** {{ui:Ndërtimi}} › {{ui:Paleta e simboleve}} gjen simbolet elektrike dhe hidraulike sipas emrit; burimi {{ui:Bimët}} i {{ui:Bibliotekë}} liston rreth 400 bimë me simbole planimetrie. Shih [Paleta e simboleve](topic:symbol-palette) dhe [Vendos një bimë](topic:plant-list).

### Tubat, kanalet dhe energjia

- **Të ndarë, VRF dhe fan coil.** Njësi të brendshme dhe të jashtme me lidhjet e tyre, dhe grupe linjash të dimensionuara sipas një tabele vlerash tipike shembull që mund t'i ndryshosh. Shih [Të ndarë, VRF dhe fan coil](topic:split-vrf-fan-coils).
- **Llogaritjet.** Paneli Llogaritjet kontrollon dimensionet e tubave dhe kanaleve të furnizimit me rënien e presionit, nxjerr kabllot nëpër tavat dhe tubat dhe shfaq mbushjen e tyre, dhe llogarit ndriçimin nga skedarët IES ose EULUMDAT. Vlerat fillestare janë të etiketuara; shkruaj vlerat e kodit tënd. Shih [Llogaritjet e tubave, kanaleve, kabllove dhe dritave](topic:mep-calculations).
- **Skedarët PCF.** Veglës së tubit **Eksporto PCF** i shkruan segmentet për programet e stresit të tubave dhe ato izometrike, dhe një skedar PCF i lexuar mbrapsht vizaton tubin e vet. Shih [Skedarët e komponentëve të tubave](topic:piping-pcf).
- **Diell PV.** Vendos grupe mbi çati ose tokë, bëj hije nga modeli, vlerëso energjinë vjetore, kontrollo vargjet dhe bëj të dhëna për diagramin me një vijë. Moduli fillestar dhe humbjet janë gjenerike. Shih [Diell PV](topic:solar-pv).
- **Skedari EnergyPlus.** Paneli Kontrollo me EnergyPlus shkruan modelin si IDF për ta ekzekutuar në EnergyPlus-in tënd. Ekzekutimi në shfletues kërkon një ndërtim që e strehon vetë dhe ku shkruan adresën e tij; BimCraft nuk e mban. Shih [Kontrollo ngrohjen dhe ftohjen me EnergyPlus](topic:check-with-energyplus).

### Foto dhe skedarë

- **Zgjidh motorin e renderimit.** {{ui:Renderim}} ka një zgjedhje {{ui:Motori}}. Dy motorët tanë të integruar (Fast dhe Path tracer) mbeten parazgjedhje. **Hap në** ruan skenën si skedar USD ose glTF, dhe një dosje projekti Unreal si .zip; në CadCraft Studio një shtojcë mund të shtojë një motor. Shtojca Unreal që hap projektin nuk është publikuar. Shih [Zgjidh cili program vizaton foton](topic:render-engines).
- **Zhbëje në Studio.** Brenda CadCraft Studio, BimCraft i tregon Studio-s çdo hap të përfunduar, që Studio ta zhbëjë hapin tënd të fundit në dritaren që ke përdorur së fundi. Shih [Zhbëj mes aplikacioneve](topic:undo-across-apps).
- **Shtojcat në skedarin tënd.** Një IFC regjistron cilat shtojca shkruan në të, dhe ofron ato që të mungojnë kur e hap. Shih [Shtojcat në skedarin tënd](topic:add-ons-in-your-file).

### Në çdo aplikacion

- **Lidh AI-në tënde.** Asistenti yt mund ta drejtojë BimCraft përmes lidhjes së Studio-s dhe t'u përgjigjet pyetjeve për modelin, si cilat dhoma janë nën një sipërfaqe të caktuar. Studio nuk ka AI të vetën. Shih [Lëre një asistent AI të punojë me modelin tënd](topic:assistants).
- **Rreshtat e shiritit të veglave.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Rreshtat e shiritit të veglave}} ofron Mbështjell, 2 rreshta ose 1 rresht; Mbështjell mbetet parazgjedhja.
- **Pajisjet e hyrjes.** Cilësimet e trackpad-it, lapsit, mausit 3D, kontrollorit dhe MIDI ndahen nga të gjitha aplikacionet.
- **Problemet dhe Live.** Paneli i paralajmërimeve dhe sesionet Live funksionojnë si më parë, me kontrollet e reja më sipër që furnizojnë Problemet.
- **Gjuhët.** 54 gjuhë, dhjetë prej tyre të reja. Ato përveç anglishtes janë përkthime makine që ende nuk i ka lexuar një folës amtar; temat e ndihmës janë kryesisht në anglisht.

## Rregulluar në 0.8.1

- **Paraqitja Shirit + Shfletuesi i projektit.** Fut › Importo CAD, Fut › Imazh dhe Menaxho › Njësitë e projektit thoshin "Nuk është ndërtuar ende në BimCraft". Imazhi hap veglën Foto, Importo CAD hap {{ui:Ndërtimi}} › {{ui:Nga një vizatim…}} (DWG, DXF, PDF ose skanim), dhe Njësitë e projektit hapin {{ui:Cilësimet}} › {{ui:Globale}} › {{ui:Njësitë}}. Lëviz dhe Rreshto nisin veglat Lëviz dhe Rreshto, Niveli hap {{ui:Shto nivele…}}, Fazat hapin seksionin Fazat e rinovimit, dhe Materialet hapin bibliotekën e materialeve.
- **Seksioni i klasave DWG.** Lexohej si lloji i gabuar; u rregullua në BimCraft dhe në aplikacionet e tjera që lexojnë DWG.
- **Gjuha gjatë ekzekutimit.** Studio dhe edicionet e paketuara mund të ndërrojnë gjuhën tani pa rinisje. Kjo nuk është testuar ende në çdo platformë; na thuaj nëse gjuha nuk ndryshon.
- **Skripti i paketës Archicad.** `archicad_bundle.py`, një shkarkim i veçantë, tani e gjen rrugën e Archicad, shikon dosjen për deri në 20 sekonda dhe riprovon pranë paketës.

## Nuk është ende në këtë version

- **Ndihmat e sigurisë dhe të projektimit.** Njerëzit në ndërtesë nuk kanë kufi distance ecjeje nga një kod ndërtimi (ti e shkruan kufirin) dhe nuk janë kontrolluar me dorë mbi një planimetri reale. Shifrat e akustikës, ciklit jetësor dhe rrezikut janë vlera planifikimi, jo kontroll sipas kodit.
- **Klimat e ardhshme dhe EnergyPlus.** Nuk ka klima të ardhshme të integruara: mund të ngarkosh një skedar skenari për ekzekutimin e përmbytjes. Ekzekutimi i EnergyPlus në shfletues nuk është pjesë e këtij versioni.
- **Paraqitja Shirit.** Llogaritja e sasive të materialeve mbetet "Nuk është ndërtuar", sepse BimCraft nuk ka listë sasish materialesh, dhe 54 vegla të tjera gri të shiritit nuk kanë ende një vegël BimCraft pas tyre.
- **Nënshkrimi dhe platformat.** Instaluesit e Windows dhe .dmg i macOS nuk janë të nënshkruar, kështu që SmartScreen shfaq {{ui:Më shumë informacion}}, pastaj {{ui:Ekzekuto gjithsesi}}, dhe macOS kërkon klik me butonin e djathtë, pastaj {{ui:E hapur}}. Ndërtimi për iPad dhe iPhone nuk u ri-ndërtua për 0.8.1.
- **Testet në faqe reale.** Disa teste të vjetra të shfletuesit BimCraft ende dështojnë në faqen tonë të testimit, ashtu si para 0.8.1.

Gjithçka tjetër është te [Çfarë nuk është ndërtuar ende](topic:not-built-yet). Ndryshimet e mëparshme janë te [Çfarë ka të re në 0.7](topic:whats-new-0-7).
