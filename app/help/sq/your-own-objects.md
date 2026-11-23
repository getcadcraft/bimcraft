---
title: Sjell objektet e tua dhe skedarët e familjeve në Bibliotekë
summary: Lexo skedarët e familjes (.rfa) dhe skedarët IFC, DWG, DXF, glTF ose OBJ në skedën Bibliotekë, vendosi si çdo artikull bibliotekë, dhe mbaji te Objektet e mia, një listë private që vetëm ti e sheh.
keywords: rfa, familje, familje, bibliotekë familjesh, objektet e mia, objekte private, bibliotekë private, importo objekte, përmbajtje e prodhuesit, objekte bim, objekt ifc, gltf, obj, bllok dwg, mbaj, ndërro, migro
from: 886261f8
---

## Çfarë do të bësh

Sill te BimCraft objektet që tashmë ke: një bibliotekë familjesh nga Revit, një shkarkim IFC ose DWG nga një prodhues, një rrjetë nga një modelues tjetër. Lexon skedarin te skeda {{ui:Bibliotekë}}, vendos objektin në modelin tënd si një element IFC të rregullt, dhe, nëse e do sërish më vonë, e mban te {{ui:Objektet e mia}}.

## Hapat

1. Hap një model IFC, ose fillo një ndërtesë të re.
2. Kliko skedën {{ui:Bibliotekë}} pranë {{ui:Vetitë}}.
3. Kliko {{ui:Skedarë…}}, pastaj {{ui:Zgjidh një skedar…}}. Zgjidh një skedar ose disa njëherësh: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` ose `.csv`. Ose kliko {{ui:Zgjidh një dosje…}} për të lexuar një dosje të tërë dhe dosjet brenda saj (deri në 200 skedarë njëherësh).
4. Kliko një kartelë për të parë çfarë u lexua: pamjen paraprake të planimetrisë, emrin, prodhuesin dhe modelin, madhësitë dhe shënimet.
5. Kliko {{ui:Vendos në planimetri}} ose {{ui:Vendos në model}} për ta vendosur.
6. Për ta përdorur sërish në projekte të tjera, kliko {{ui:Mbaje te objektet e mia}}. Me disa skedarë të lexuar, {{ui:Mbaji të gjitha te objektet e mia}} i mban të gjithë njëherësh.
7. Më vonë, kliko {{ui:Objektet e mia}} te skeda Bibliotekë për t'i gjetur. Ato vendosen, zëvendësohen dhe përditësohen si çdo artikull biblioteke.

Skedarët lexohen në këtë skedë. Asgjë nuk ngarkohet derisa të zgjedhësh {{ui:Mbaje te objektet e mia}}.

## Çfarë lexohet nga çdo lloj skedari

| Skedar | Çfarë merr |
|---|---|
| IFC | Çdo lloj elementi si objekt me formën e tij reale 3D, klasën IFC dhe grupet e vetive |
| glTF, GLB, OBJ | Një objekt me formën e tij reale 3D si rrjetë. Vendos së pari njësitë dhe cili drejtim është lart. |
| DWG, DXF | Çdo bllok si objekt me vizatimin e tij të planimetrisë dhe atributet |
| Skedar familjeje (`.rfa`) | Emri i familjes, kategoria, prodhuesi, modeli, parametrat dhe llojet e saj. **Jo forma e saj 3D:** një kuti me Gjerësinë, Thellësinë dhe Lartësinë e familjes e zëvendëson. |
| CSV | Një objekt për rresht: emri, madhësitë dhe të dhënat, i vizatuar si kuti |

## Skedarët e familjeve dhe forma e tyre 3D

Forma 3D brenda një skedari `.rfa` ruhet në një format të padokumentuar, ndaj BimCraft lexon të dhënat e familjes dhe nuk e hamendëson gjeometrinë e saj. Kartela e thotë këtë: "Gjeometria nuk u lexua nga kjo familje; një kuti zëvendëson."

Për të sjellë një familje me formën e saj reale, eksporto nga programi që e krijoi (Revit):

1. Hap familjen, ose një projekt me familjen të vendosur në të.
2. Zgjidh **File > Export > IFC**. Shih [cilësimet e eksportit që hapen më mirë këtu](topic:rvt-to-ifc).
3. Te BimCraft, lexo skedarin `.ifc` me {{ui:Skedarë…}}. Çdo lloj familjeje vjen si objekt i veçantë, me formën dhe grupet e vetive.

Shumë prodhues ofrojnë një shkarkim IFC ose DWG pranë skedarit të familjes. Ato lexohen drejtpërdrejt.

## Llojet e familjes

Një familje me disa lloje vjen si një artikull me një zgjedhje {{ui:Varianti}}, një variant për çdo lloj. Çdo variant ka vlerat që ndryshojnë midis llojeve, dhe kutinë e vet kur lloji ka një Gjerësi dhe një Thellësi. Një familje me një lloj është një artikull i thjeshtë i mbushur me vlerat e atij lloji.

Disa familje i mbajnë llojet në një katalog llojesh: një skedar `.txt` me të njëjtin emër pranë skedarit të familjes. Zgjidh të dyja bashkë, ose zgjidh dosjen, dhe rreshtat e katalogut bëhen variantet.

## Të dhënat e familjes mbi një formë reale

Nëse një dosje mban një skedar familjeje dhe një skedar IFC, glTF ose OBJ me të njëjtin emër (`Chair.rfa` dhe `Chair.ifc`), zgjidh të dyja bashkë ose zgjidh dosjen. BimCraft bën një artikull: skedari i familjes jep emrin, prodhuesin, modelin, parametrat dhe llojet, dhe skedari tjetër jep formën reale 3D. Shënimet thonë nga cili skedar erdhi forma. Një formë përdoret për çdo lloj.

Kur një skedar familjeje ka një foto të ruajtur brenda, detajet e artikullit e shfaqin atë foto nën vizatimin e planimetrisë. Fotoja shfaqet vetëm aty; nuk mbahet me artikullin.

## Objektet e mia

{{ui:Objektet e mia}} është lista jote private në Bibliotekë. Vetëm ti e sheh çfarë ka brenda: nuk është në bibliotekën publike, nuk shfaqet në kërkim, dhe nuk i shfaqet ekipit tënd. Ndjek llogarinë tënde, kështu që të njëjtët objekte janë atje në një kompjuter tjetër pasi të hysh në bibliotekë.

- Duhet të jesh i hyrë në bibliotekë për të mbajtur një objekt. Shih [hyr në bibliotekë](topic:library-credits).
- Mbajtja e një objekti dërgon atë vetëm objekt në llogarinë tënde. Deri atëherë ai mbetet në kompjuterin tënd.
- {{ui:Hiq nga objektet e mia}} heq një objekt nga lista. Kopjet që janë vendosur tashmë në vizatime mbeten.
- Për ta ndarë një objekt me të gjithë, ngarkoje në vend të kësaj në bibliotekën publike, me një licencë që zgjedh ti.

:::note
{{ui:Objektet e mia}} janë duke u testuar dhe mund të mos jenë ende të hapura për llogarinë tënde. Nëse burimi mungon, ose thotë "Objektet e mia nuk janë ende të hapura për këtë llogari", mund të lexosh dhe të vendosësh skedarët e tu me {{ui:Skedarë…}}; ata ruhen brenda modelit tënd.
:::

## Gabimet e zakonshme

- **Pritja e formës reale të familjes nga një `.rfa`.** Lexohen vetëm të dhënat e saj. Eksporto IFC për formën.
- **Dy artikuj aty ku prisje një.** Një familje dhe skedari i saj i formës bashkohen vetëm kur emrat e tyre përputhen saktësisht, përveç mbaresës, dhe janë në të njëjtën dosje.
- **Një rrjetë vjen njëmijë herë më e madhe ose e shtrirë anash.** Vendos {{ui:Njësitë e skedarit}} dhe {{ui:Boshti lart i rrjetës}} nën {{ui:Skedarë…}} përpara se të zgjedhësh skedarin.
- **"Nuk ka të dhëna familjeje" te një skedar.** Është një projekt (`.rvt` i ruajtur me një mbaresë tjetër) ose një shabllon familjeje, jo një familje. Shih [Lexo një skedar projekti ose familjeje](topic:read-rvt-file).
- **Mbajtja e përmbajtjes që mund të mos ruash.** Disa biblioteka me pagesë nuk lejojnë kopje jashtë shërbimit të tyre. Kontrollo kushtet e përmbajtjes që nuk e ke krijuar ti.
