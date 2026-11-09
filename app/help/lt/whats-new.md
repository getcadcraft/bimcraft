---
title: Kas naujo 0.8 ir 0.8.1 versijoje
summary: BimCraft prideda žmones, vaikštančius per pastatą, patalpų akustiką, kurią galima išgirsti, potvynio, vėjo ir žemės drebėjimo atkūrimą, penkiasdešimties metų gyvavimo ciklo vaizdą, patikras pagal IDS, žymas ir žiniaraščius, Move, Align ir Distribute, paveikslėlius po planu, sienas iš skenavimo, skydų brėžinius, saulės, padalintas ir VRF sistemas, vamzdžių ir kabelių dydžių parinkimą, betono ir seisminius patikrinimus, bet kokią kartografinę projekciją, atvaizdavimo variklio pasirinkimą ir Studio anuliavimą; 0.8.1 ištaiso Ribbon išdėstymo pilkus įrankius.
keywords: kas naujo, what's new, leidimo pastabos, pakeitimų žurnalas, pakeitimai, 0.8, 0.8.1, versija, naujos funkcijos, evakuacija, žmonės, eilės, akustika, reverberacija, impulso atsakas, potvynis, vėjas, žemės drebėjimas, pavojus, gyvavimo ciklas, tarnavimo laikas, ids, žymos, žiniaraščiai, perkelti, lygiuoti, paskirstyti, paveikslėlis, fonas, skenavimas į sienas, vieta iš civilcraft, skydų brėžiniai, karkasas, saulė, pv, padalintas, vrf, fan coil, vamzdžio dydis, kabelių dėklas, apšvieta, betonas, seismika, palyginti skenavimą, epsg, projekcija, dokumentai, šablonas, anglies pėdsakas, kaina, energyplus, atvaizdavimo variklis, atidaryti su, usd, glb, unreal, anuliuoti, priedai, pcf, simboliai, augalai, atsekti, pieštukai, ribbon, projekto naršyklė, maketas
from: 87b03056
---

Tai, kas pasikeitė BimCraft 0.8 (2026-11-01) ir 0.8.1 (2026-11-02) versijose, palyginti su 0.7. BimCraft dabar gali atsakyti į klausimus apie pastatą ir jį patikrinti: su žmonėmis, garsu, vandeniu, vėju ir žemės drebėjimais, ir piešti su daugiau įrankių; 0.8.1 yra taisymų leidimas.

## Nauja

### Patikrinkite pastatą

- **Žmonės pastate.** Skyrius {{ui:Žmonės pastate}} kairiajame skydelyje praveda evakuaciją arba įprastos dienos atvykimus per jūsų patalpas, duris ir laiptus. Matote eiles ten, kur pastatas susiaurėja, ilgiausią kelią iki išėjimo iš kiekvienos patalpos ir kiek laiko užtrunka paskutinis žmogus. Pažymėkite {{ui:Uždaryta}} ant durų, kad pamatytumėte, kas pasikeičia, ir pažymėkite {{ui:Rodyti žmones 3D vaizde}}, kad stebėtumėte vaikštančiuosius. Rezultatai patenka į Problemas. Tai grubus minios modelis projektiniams sprendimams, o ne gaisrinės saugos sertifikatas. Žr. [Praveskite žmones per pastatą](topic:people-in-the-building).
- **Patalpų akustika, ir ją galite išgirsti.** Skyrius {{ui:Patalpų akustika}} pateikia kiekvienos patalpos reverberacijos laiką pagal oktavų juostas (Sabine ir Eyring) pagal jos dydį ir jūsų pasirinktas apdailas; su jūsų nurodytu tikslu parodo, kiek garso sugerties reikėtų, kad jį pasiektumėte. {{ui:Groti šioje patalpoje}} groja balsą, plojimą, nuskintas natas ar jūsų garso failą per patalpai apskaičiuotą impulso atsaką. Garso sugerties vertės yra įprastos paskelbtos reikšmės, kurias galite pakeisti. Žr. [Patalpų akustika](topic:room-acoustics).
- **Potvynio, vėjo ir žemės drebėjimo atkūrimas.** {{ui:Pavojaus atkūrimas}} rodo, kaip vanduo kyla per patalpas, vėjo slėgį ant kiekvieno aukšto ir žemės drebėjimą, purtantį aukštus, plane ar fasade su laiko slankikliu. Paprasti modeliai su jų prielaidomis skydelyje; tai nėra normų patikrinimas. Žr. [Atkurti potvynį, vėją ar žemės drebėjimą](topic:hazard-playback).
- **Kas nusidėvi per penkiasdešimt metų.** {{ui:Gyvavimo ciklo vaizdas}} išvardija langus, duris, apdailas ir stogą, kiekvienas su tarnavimo laiku, metus, kada jie keičiami, ir, kai įvedate kainą už vienetą, kainą pagal metus bei jos dabartinę vertę. {{ui:Įrašyti grafiką (CSV)}} ją įrašo. Tarnavimo laikai yra planavimo skaičiai. Žr. [Pažiūrėkite, kas nusidėvi per penkiasdešimt metų](topic:life-cycle-view).
- **Betono ir seisminiai patikrinimai.** Blokai {{ui:Betoniniai elementai}} ir {{ui:Seisminės apkrovos}} skirtuke {{ui:Analizė}} tikrina betonines sijas ir kolonas pagal ACI 318-19 ir sudaro ekvivalentines skersines jėgas pagal ASCE 7-22 ant standžių perdangų, su aukšto poslinkiu. Skirta inžinieriui patikrinti. Žr. [Patikrinkite betoninius elementus ir sudarykite seismines apkrovas](topic:concrete-and-seismic).

### Patikrinkite ir ataskaitykite

- **Patikrinimas pagal IDS.** Įkelkite `.ids` failą, kurį jums pateikė klientas, ir prieš pristatydami IFC Problemose pamatykite kiekvieną elementą, neatitinkantį reikalavimų. Atidarykite {{ui:Patikrinti pagal IDS}} skiltyje {{ui:Modelio patikros}}. Žr. [Patikrinkite modelį pagal kliento IDS](topic:check-against-ids).
- **Žymos ir žiniaraščiai.** Apibrėžkite savo žymas, nustatykite jas iš karto daugeliui elementų ir kurkite žiniaraščius, kurių stulpeliai, filtrai ir grupės jas nuskaito; žymos išsaugomos IFC. Žr. [Žymos ir žiniaraščiai](topic:tags-and-schedules).
- **Dokumentai iš modelio.** {{ui:Dokumentai iš modelio}} užpildo specifikacijos šabloną iš atidaryto IFC ir įrašo jį kaip PDF, Word dokumentą arba Markdown. Žr. [Dokumentai iš modelio](topic:documents-from-the-model).
- **Palyginkite skenavimą su modeliu.** Atidarę taškų debesį, {{ui:Palyginti}} įvertina kiekvieną elementą kaip pastatytą, iš dalies pastatytą, trūkstamą arba nepasiektą ir parodo pastatytą procentą. Žr. [Palyginkite skenavimą su modeliu](topic:compare-scan-with-model).
- **Anglies pėdsakas ir kaina.** Skydelis Carbon sudeda įkomponuotąjį anglies pėdsaką pagal faktorių lentelę, kurią galite redaguoti, o skydelis Cost paskirsto kainas per 4D tvarkaraštį. BimCraft pateikiami faktoriai yra bendrieji ir pažymėti kaip nepatikrinti. Žr. [Įkomponuotasis anglies pėdsakas ir kaina](topic:embodied-carbon-and-5d-cost).
- **Bet kokia kartografinė projekcija.** {{ui:Matuoti}} › {{ui:Koordinačių sistema…}} priima EPSG numerį, UTM zoną, pavadinimą ar jūsų pačių projekcijos apibrėžimą. Žr. [Georeferencija su bet kokia projekcija](topic:georeference-any-projection).

### Piešti ir redaguoti

- **Perkelti, lygiuoti ir paskirstyti.** Skiltyje {{ui:Versija}}; {{key:Shift+M}} pradeda Perkelti (paprastas {{key:M}} lieka Matuoti). Perkėlimas kopijuoja judant su {{key:C}}, kiekvienas žingsnis yra vienas anuliavimas, ir jis veikia Live TeamWork sesijoje. Žr. [Perkelti, kopijuoti, lygiuoti ir paskirstyti](topic:move-align-distribute).
- **Paveikslėliai po planu.** {{ui:Versija}} › {{ui:Paveikslėlis}} padeda PNG, JPEG arba WebP po aukšto planu arba ant vertikalios plokštumos. Mastelį nustatykite dviem taškais, o paveikslėlį galite perkelti, pasukti, išblukinti ir užrakinti. Sritis, nukopijuota MarkupCraft, įklijuojama jos lapo mastelyje. Žr. [Padėkite paveikslėlį po planu](topic:pictures-as-backgrounds).
- **Sienos iš skenavimo.** Atidarius skenavimą, sienos, durys ir patalpos pateikiamos kaip siūlymai, kuriuos išsaugote arba atmetate po vieną, viename anuliavimo žingsnyje. Randamos tik sienos dviejose statmenose kryptyse. Žr. [Paverskite skenavimą sienomis](topic:scan-to-walls).
- **Atsekimas, pieštukai ir laiptai iš eskizo.** {{ui:Atsekti}} rodo kitą aukštą punktyrine linija po planu, {{ui:Pieštukai}} suteikia sienoms, durims ir langams atskirą linijos storį viename vaizde, o {{ui:Laiptų eskizas}} paverčia ėjimo liniją laiptais. Atidaromas Wavefront OBJ tinklelis. Žr. [Atsekite aukštą, pieštukus ir laiptus iš eskizo](topic:trace-pens-stairs-obj).
- **Pastatai aplink adresą.** Pastatai ir sklypas, kuriuos rado CivilCraft Address to site, pateikiami kaip siūlymai; pažymėkite tuos, kuriuos norite pridėti. Žr. [Pradėkite nuo CivilCraft vietos](topic:site-from-civilcraft).
- **Skydų brėžiniai.** {{ui:Versija}} › {{ui:Sienų skydų brėžiniai}} įrėmina sienas, perdangas ir stogus medienos ar lengvo plieno karkase ir įrašo pjovimo sąrašą kaip CSV, o dirbtuvių brėžinius kaip PDF. Pradinės vertės, o ne konstrukcinis projektas. Žr. [Skydų brėžiniai](topic:panel-drawings).
- **Simbolių paletė ir augalai.** {{ui:Versija}} › {{ui:Simbolių paletė}} suranda elektros ir santechnikos simbolius pagal pavadinimą; šaltinis {{ui:Augalai}} iš {{ui:Biblioteka}} išvardija apie 400 augalų su planų simboliais. Žr. [Simbolių paletė](topic:symbol-palette) ir [Įdėkite augalą](topic:plant-list).

### Vamzdžiai, kanalai ir energija

- **Padalintos, VRF ir ventiliatoriniai ritiniai.** Vidaus ir lauko blokai su jų jungtimis, o šaltnešio linijos parenkamos pagal lentelę su įprastomis pavyzdinėmis vertėmis, kurias galite pakeisti. Žr. [Padalintos, VRF ir ventiliatoriniai ritiniai](topic:split-vrf-fan-coils).
- **Skaičiavimai.** Skydelis Calculations tikrina tiekimo vamzdžių ir kanalų dydžius pagal slėgio kritimą, veda kabelius per dėklus ir vamzdžius bei rodo jų užpildymą, o apšvietimą skaičiuoja pagal IES ar EULUMDAT failus. Numatytosios vertės pažymėtos; įveskite savo normos vertes. Žr. [Vamzdžių, kanalų, kabelių ir šviestuvų skaičiavimai](topic:mep-calculations).
- **PCF failai.** Vamzdžio įrankio **Export PCF** įrašo linijas vamzdžių įtempimo ir izometrinėms programoms, o perskaitytas PCF failas nubrėžia jo vamzdį. Žr. [Vamzdžių komponentų failai](topic:piping-pcf).
- **Saulės PV.** Įdėkite masyvus ant stogų ar žemės, nuskaidrinkite juos pagal modelį, įvertinkite metinę energiją, patikrinkite grandines ir sukurkite vienlinijinės schemos duomenis. Pradinis modulis ir nuostoliai yra bendrieji. Žr. [Saulės PV](topic:solar-pv).
- **EnergyPlus failas.** Skydelis Check with EnergyPlus įrašo modelį kaip IDF, kurį galite paleisti savo EnergyPlus. Paleisti naršyklėje reikia jūsų pačių talpinamos versijos, kurios adresą įvedate patys; BimCraft jos neturi. Žr. [Patikrinkite šildymą ir vėsinimą su EnergyPlus](topic:check-with-energyplus).

### Vaizdai ir failai

- **Pasirinkite atvaizdavimo variklį.** {{ui:Atvaizduoti}} turi pasirinkimą {{ui:Variklis}}. Mūsų du įmontuoti varikliai (Fast ir Path tracer) lieka numatytieji. **Atidaryti su** įrašo sceną kaip USD arba glTF failą, o Unreal projekto aplanką kaip .zip; CadCraft Studio priedas gali pridėti variklį. Unreal įskiepis, kuris atidaro projektą, nėra išleistas. Žr. [Pasirinkite, kuri programa piešia paveikslėlį](topic:render-engines).
- **Studio anuliavimas.** CadCraft Studio viduje BimCraft praneša Studio kiekvieną baigtą žingsnį, kad Studio galėtų anuliuoti jūsų paskutinį žingsnį tame lange, kuriuo naudojotės paskutinį kartą. Žr. [Anuliavimas tarp programų](topic:undo-across-apps).
- **Priedai jūsų faile.** IFC įrašo, kurie priedai į jį rašė, ir pasiūlo tuos, kurių jums trūksta, kai jį atidarote. Žr. [Priedai jūsų faile](topic:add-ons-in-your-file).

### Visose programose

- **Prijunkite savo DI.** Jūsų pačių asistentas gali valdyti BimCraft per Studio ryšį ir atsakyti į klausimus apie modelį, pavyzdžiui, kurios patalpos yra po tam tikru plotu. Studio pats DI neturi. Žr. [Leiskite DI asistentui dirbti su jūsų modeliu](topic:assistants).
- **Įrankių juostos eilutės.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Įrankių juostos eilutės}} siūlo Wrap, 2 eilutes arba 1 eilutę; Wrap lieka numatytasis.
- **Įvesties įrenginiai.** Jutiklinės plokštės, rašiklio, 3D pelės, valdiklio ir MIDI parametrai bendri visoms programoms.
- **Problemos ir Live.** Įspėjimų skydelis ir Live sesijos veikia kaip anksčiau; nauji aukščiau aprašyti patikrinimai pateikia rezultatus į Problemas.
- **Kalbos.** 54 kalbos, iš jų dešimt naujos. Kitos nei anglų kalbos yra mašininiai vertimai, kurių dar neperskaitė gimtakalbis; pagalbos temos daugiausia anglų kalba.

## Ištaisyta 0.8.1

- **Ribbon + projekto naršyklės išdėstymas.** Insert › Import CAD, Insert › Image ir Manage › Project Units rodė „Dar neįgyvendinta BimCraft“. Dabar Image atidaro Paveikslėlio įrankį, Import CAD atidaro {{ui:Versija}} › {{ui:Iš brėžinio…}} (DWG, DXF, PDF ar skenavimas), o Project Units atidaro {{ui:Parametrai}} › {{ui:Visuotiniai}} › {{ui:Vienetai}}. Move ir Align paleidžia Perkelti ir Lygiuoti įrankius, Level atidaro {{ui:Pridėti lygius…}}, Phases atidaro skyrių Renovation phases, o Materials atidaro medžiagų biblioteką.
- **DWG klasių skyrius.** Jis buvo nuskaitomas kaip netinkamas tipas; ištaisyta BimCraft ir kitose programose, kurios nuskaito DWG.
- **Kalba veikiant.** Studio ir supakuoti leidimai dabar gali keisti kalbą be perkrovimo. Tai dar neišbandyta visose platformose; praneškite, jei kalba nepasikeičia.
- **Archicad paketo scenarijus.** `archicad_bundle.py`, atskiras atsisiuntimas, dabar suranda Archicad kelią, stebi aplanką iki 20 sekundžių ir bando dar kartą šalia paketo.

## Dar neįgyvendinta šioje versijoje

- **Saugos ir projektavimo pagalbinės priemonės.** Skyriuje People in the building nėra statybos normų atstumo ribos (ją įvedate patys), ir jis nebuvo rankiniu būdu patikrintas su tikru planu. Akustikos, gyvavimo ciklo ir pavojaus skaičiai yra planavimo vertės, o ne normų patikrinimas.
- **Klimato scenarijai ir EnergyPlus.** Integruotų klimato scenarijų nėra: potvynio skaičiavimui galite įkelti scenarijaus failą. Paleidimas naršyklėje su EnergyPlus šiame leidime nėra įtrauktas.
- **Ribbon išdėstymas.** Material Takeoff lieka „Not built“, nes BimCraft neturi medžiagų kiekių sąrašo, o dar 54 pilkai rodomi Ribbon įrankiai neturi BimCraft įrankio.
- **Pasirašymas ir platformos.** Windows diegimo programos ir macOS .dmg nepasirašyti, todėl SmartScreen rodo {{ui:Daugiau informacijos}}, o paskui {{ui:Vis tiek paleisti}}; macOS reikia dešiniuoju pelės klavišu spustelėti, tada {{ui:Atvira}}. iPad ir iPhone versija 0.8.1 nebuvo perkurta.
- **Tikrieji puslapių bandymai.** Kai kurie senesni BimCraft naršyklės bandymai mūsų bandymų puslapyje vis dar nepraeina, kaip ir prieš 0.8.1.

Viskas kita: [Kas dar neįgyvendinta](topic:not-built-yet). Ankstesni pakeitimai: [Kas naujo 0.7](topic:whats-new-0-7).
