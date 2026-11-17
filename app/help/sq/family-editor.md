---
title: Redakto një familje
summary: Ndrysho parametrat, formulat dhe trupat e një familjeje, shfaq pjesët me një parametër Po / Jo, pres dhe bashko trupat, jepi lidhës për tuba dhe kanale, dhe shiko rezultatin e vizatuar nga IFC që do të ruajë.
keywords: redaktues familjeje, redakto familjen, parametër, parametra, formulë, formula, dukshmëri, po jo, trup, trupa, kuti, ekstrudim, ekstrudo, rrotullim, lëvizje, profil, hark, boolean, booleanet, prerje, bashkim, diferencë, dorezë, doreza, plan pune, skicë, familje e re, lidhës, porta, lidhës tubi, lidhës kanali, kullim, furnizim uji
from: 1ab31c10
---

## Hap redaktuesin

Hap një familje (te **Familjet** e shfletuesit të projektit, ose {{ui:Ndërtimi}} › {{ui:Familjet…}}) dhe kliko {{ui:Redakto familjen}}. Për të nisur nga zero, kliko {{ui:Familje e re}}: jepi një emër, thuaj çfarë është (derë, dritare, mobilje, pajisje ose diçka tjetër) dhe, për një derë ose dritare, nga cili fillestar vijnë simboli i planimetrisë dhe doreza e saj. Redaktuesi hapet me një familje që ka disa parametra dhe një trup.

Redaktimi i një familjeje fillestare e mban ndryshimin vetëm në këtë model. Modelet e tjera e mbajnë fillestarin ashtu siç është.

Asgjë në model nuk ndryshon derisa të klikosh {{ui:Ruaj familjen}}. Redaktuesi ka zhbërjen e vet dhe ribërjen (butonat me shigjetë pranë emrit, ose {{key:Mod+Z}} dhe {{key:Mod+Y}}); ruajtja është një hap në zhbërjen e modelit.

## Parametrat

Tab-i {{ui:Parametrat}} liston parametrat e familjes: një emër, një lloj dhe një parazgjedhje. Llojet: **Gjatësi** (milimetra), **Kënd** (gradë), **Numër**, **Numër i plotë**, **Po / Jo**, **Stilolaps** (1–16), dhe tre që mbajnë fjalë në vend të numrave: **Tekst**, **Material** (një nga materialet e projektit) dhe **Mbushje** (një mbushje planimetrie). Fjalët nuk përdoren në formula; ato i japin ngjyrë një trupi (**Materialin** e tij), mbushin një pjesë simboli, ose shtypen si `{Name}` brenda tekstit të simbolit. Kutia **Për element** e bën një parametër që çdo element i vendosur e vendos vetë, në vend që të jetë pjesë e madhësisë.

- Një **formulë** e bën një parametër të ndjekë të tjerët, për shembull `Width / 30` ose `if(Width > 1200, 2, 1)`. Gjatësitë në formula janë milimetra, ose shkruaj një njësi: `3'`, `6in`, `50cm`.
- Riemërtimi i një parametri e riemërton atë në çdo formulë dhe fushë që e përdor. Një parametër që është ende në përdorim nuk mund të hiqet.
- **Materiali** i një trupi merr ngjyrën e një materiali të projektit (ose të një parametri Material), **Shfaqet në** e fsheh në nivele më të trasha detaji, dhe **Përsërit** bën kopje: një numër (një numër ose një parametër numër i plotë, 1 deri 200) dhe hapi midis tyre në x, y dhe z. Një trup i përsëritur është një rresht dërrasash, shufrash ose vrimash; i përdorur në prerje, kopjet pritën bashkë.
- Një familje derë ose dritare merr edhe dy emra nga muri i saj: `WallThickness` dhe `Face` (1 ose -1, ana nga ku hapet dera).

## Trupat

Tab-i {{ui:Trupat}} liston trupat. Shto një kuti, një ekstrudim, një rrotullim ose një lëvizje:

| Trupi | Çfarë vendos |
|---|---|
| Kuti | dy kulmet e saj: x0 deri x1, y0 deri y1, z0 deri z1 |
| Ekstrudim | një profil në një plan pune (plan, përpara ose anash), ku është plani dhe një thellësi |
| Rrotullim | një profil, një bosht në plan dhe një kënd deri 360° |
| Lëvizje | një shteg pikash dhe një rreze (një shufër ose një rrip) |

Çdo numër mund të jetë një numër i shkruar ose një shprehje e parametrave. Çdo trup ka një ngjyrë dhe **Shfaqet kur**: lëre bosh për ta shfaqur gjithmonë, ose emëro një parametër Po / Jo (ose shkruaj një krahasim si `Shelves >= 3`) për ta shfaqur vetëm atëherë. Ky është një parametër dukshmërie.

### Vizato një profil

Një profil ekstrudimi ose rrotullimi vizatohet në planin e tij të punës nën pamjen paraprake:

- Kliko mbi letër për të shtuar një pikë pas asaj të zgjedhur.
- Tërhiq një pikë për ta lëvizur. Pikat ngjiten në rrjetë; mbaj {{key:Shift}} për t'i vendosur lirshëm.
- Kliko një katror të vogël mbi një segment për të shtuar një pikë aty. {{key:Shift}}+kliko mbi të për ta bërë atë segment hark (kliko përsëri për anën tjetër, pastaj drejt).
- Kliko dy herë mbi një pikë për ta hequr.

Pikat e zbrazëta vendosen nga parametrat: ndryshoji në tabelë, jo duke i tërhequr.

## Booleanet

Tab-i {{ui:Booleanet}} pret trupin e dytë nga i pari, ose i bashkon. Rezultati i një Boolean-i mund të priset ose të bashkohet përsëri. Një trup i përdorur në një Boolean vizatohet vetëm si pjesë e tij.

Kur trupi i dytë është i fshehur nga parametri i tij Po / Jo, i pari mbahet ashtu siç është; kur i pari është i fshehur, rezultati është i fshehur.

## Simboli i planimetrisë

Tab-i {{ui:Simboli i planimetrisë}} vizaton atë që tregon plani për këtë familje, në vend të prerjes së trupave të saj: vija, drejtkëndësha, rrathë, harqe, shumëkëndësha dhe tekst, në boshtet e vetë familjes. Çdo pjesë ka një **stilolaps** (1–16, një shprehje ose një parametër Stilolaps), një **mbushje** (asnjë, e plotë, diagonale, e kryqëzuar, beton, izolim, tokë, ose një parametër Mbushje), një shprehje **shfaqet nga**, një **diapazon prerjeje** në milimetra mbi bazën e vet (pjesa vizatohet me peshë të plotë kur prerja e planit është brenda saj, e hollë nën të, me pika mbi të: një dollap mbi prerjen shfaqet me pika), një nivel detaji dhe një përsëritje. Teksti mund të emërojë parametra si `{Name}`. **Plani tregon: Prerjen e trupave** e mban planin duke prerë trupat, ndërsa simboli mbetet në familje. Programet e tjera e lexojnë simbolin si gjurmën e familjes (vija dhe forma; teksti mbetet në BimCraft).

## Familje brenda

Tab-i {{ui:Familje brenda}} vendos një familje tjetër brenda kësaj: një këmbë në një tavolinë, një dorezë te një derë. Zgjidh familjen, pastaj ku shkon (x, y, z), sa është rrotulluar (vetëm çerekrrotullime: 0, 90, 180, 270), kur shfaqet, dhe vlerat që merr, një për rresht si `Height = Height - 40`. Ruajtja e familjes së brendshme e vizaton këtë përsëri; një familje që mbahet nga një tjetër nuk mund të fshihet; një familje nuk mund ta mbajë veten, as përmes një tjetre, dhe mbivendosja ndalon në katër nivele.

## Pikat aktive

Një pikë aktive është një pikë ose një skaj që tërheq për të ndryshuar një parametër. Në tab-in {{ui:Pikat aktive}} shto një, zgjidh boshtin përgjatë të cilit tërhiqet dhe parametrin numër që ndryshon, dhe shkruaj pozicionin e saj me të njëjtat shprehje si trupat. Në pamjen paraprake, zgjidh **Pikat aktive** nën dorezat për t'i tërhequr. Mbi një element të vendosur në planimetri (zgjidhe me {{ui:Përzgjidh}}) pikat aktive x dhe y shfaqen si doreza: tërhiq një dhe elementi merr madhësinë që vendos pikën aty, përmes çdo formule ndërmjet; një Zhbëj e kthen. Një pikë aktive nuk mund të ndryshojë një parametër të kontrolluar, një Po / Jo ose një fjalë.

Në pamjen 3D, të njëjtat pika aktive shfaqen si doreza mbi elementin e zgjedhur, dhe ato lart-poshtë (boshti z) shfaqen edhe atje, gjë që planimetria nuk mund ta vizatojë. Zgjidh elementin, tërhiq një dorezë përgjatë boshtit të vet dhe lësho: elementi merr madhësinë që vendos pikën aty, si një hap i vetëm zhbërjeje. Dorezat fshihen kur kutia e prerjes është e ndezur, sepse ajo përdor të njëjtat doreza.

## Lidhësit

Familjet e vendosura në dysheme (mobiljet, pajisjet dhe të tjerat) kanë një tab {{ui:Lidhësit}}: pikat ku një tub ose kanal bashkohet me elementin, si te rubineti dhe kullimi i një lavamani. Kliko {{ui:Shto një lidhës}} dhe vendos:

- **Lloji**: tub ose kanal, dhe **Sistemi** i tij (ujë i ftohtë, kullim sanitar, ajër furnizimi…).
- **x**, **y** dhe **z**: ku ndodhet, në boshtet e vetë familjes. Si numrat e një trupi, secili mund të jetë një numër ose një formulë e parametrave, kështu që lidhësi lëviz me madhësinë.
- **Dalja**: drejtimi nga i cili del tubi ose kanali, përgjatë një boshti të familjes (një kullim nën një lavaman del **Poshtë**).
- **Madhësia (mm)**: madhësia nominale e tubit (DN) ose diametri i kanalit të rrumbullakët.
- **Rrjedha**: **Hyrje** për një lidhës që furnizohet (një rubinet), **Dalje** për një që kullon.

Pamja paraprake vizaton çdo lidhës si unazë me një shigjetë për në dalje. Dyert dhe dritaret nuk kanë lidhës.

Për një pajisje hidraulike, zgjidh cilën është nën **Pajisja hidraulike** (tualet, lavaman, lavaman kuzhine, dush, lavaman lavanderie). Pajisjet fillestare e thonë këtë vetë.

Çdo element i vendosur nga familja merr lidhësit e vet si porta në skedarin IFC, dhe ato vizatohen përsëri kur elementi ndryshon madhësi ose kur familja ruhet. Programet që lexojnë sistemet IFC shohin ku i përket çdo tub ose kanal.

## Pamja paraprake dhe dorezat e saj

Pamja paraprake është familja e shkruar si IFC, nga i njëjti kod që e ruan në model, dhe e vizatuar përsëri. Ajo që sheh është ajo që marrin programet e tjera. Poshtë saj, **Madhësia e shfaqur** vendos vlerat e parametrave që përdor pamja paraprake.

**Dorezat** janë pika mbi pamjen paraprake: **Madhësia** shfaq një dorezë për Gjerësinë, Thellësinë dhe Lartësinë; **Trupi i zgjedhur** shfaq një mbi çdo faqe të trupit që ke zgjedhur. Tërhiq një dorezë:

- mbi një faqe të vendosur nga një parametër, ndryshon madhësia e shfaqur (formulat e familjes mbeten);
- mbi një faqe të vendosur nga një numër i shkruar, ndryshon ai numër.

## Ruajtja

{{ui:Ruaj familjen}} kontrollon familjen, pastaj vizaton përsëri çdo madhësi të saj dhe bën përsëri çdo element të saj, si një hap i vetëm që mund ta zhbësh. Nëse një madhësi nuk mund të vizatohet me ndryshimin (për shembull një trup do të mbetej pa gjerësi në atë madhësi), asgjë nuk ruhet dhe redaktuesi thotë cila madhësi.

Nëse dikush tjetër ka ruajtur të njëjtën familje ndërsa redaktuesi yt ishte i hapur (në një sesion Live TeamWork, ose në një dritare tjetër), {{ui:Ruaj familjen}} refuzon dhe e thotë këtë, në vend që të zëvendësojë ndryshimin e tyre me tënden. Mbyll redaktuesin, hap përsëri familjen për të parë ndryshimin e tyre, dhe bëje tënden përsëri.

:::note
Gjeometria ruhet si trupat e vetë IFC: ekstrudime, rrotullime, disqe të lëvizur dhe rezultate Boolean. Asgjë nuk kthehet në listë trekëndëshash, kështu që skedarët mbeten të vegjël dhe programet e tjera mund t'i lexojnë format si forma. Profilet me harqe ruhen me harqe në IFC4; IFC2X3 nuk ka segmente harku në profil, kështu që aty harqet ruhen si copa të shkurtra drejt.
:::

Shih edhe [Familjet dhe madhësitë e tyre](topic:families).
