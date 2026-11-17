---
title: Familjet dhe madhësitë e tyre
summary: Dyert, dritaret dhe mobiljet vijnë në familje. Çdo madhësi e një familjeje është një tip në skedarin IFC, kështu që lista e tipeve mbetet e shkurtër në BimCraft ndërsa programet e tjera lexojnë tipe të thjeshta.
keywords: familje, familjet, tip, tipet, madhësi, madhësitë, tip dere, tip dritareje, mobilje, tavolinë, raft, dollap, madhësi e re, dyfisho, vendos familje, skedar familjeje, ccfamily, bibliotekë IFC, bibliotekë projekti, grup, dukshmëri, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Çfarë është një familje

Një familje është një lloj gjëje në disa madhësi: një derë me krah të vetëm që vjen 32, 36 dhe 42 inç e gjerë, ose një tavolinë që vjen e gjatë dhe e shkurtër. Në BimCraft e sheh familjen një herë, me madhësitë e saj nën të, në vend të një liste të gjatë tipesh.

IFC nuk ka familje. Në skedar çdo madhësi është një tip i zakonshëm (një tip dere, një tip dritareje, një tip mobiljeje…), dhe familja është një grup që liston madhësitë e saj. Programet e tjera BIM i lexojnë tipet dhe grupin ashtu siç janë; BimCraft e lexon familjen përsëri prej tyre.

## Ku t'i gjesh

- Grupi **Familjet** i shfletuesit të projektit liston familjet e këtij modeli, me sa madhësi ka secila dhe sa janë vendosur. Më poshtë janë **Familjet fillestare**: dyert dhe dritaret e mjeteve Derë dhe Dritare, dhe një tavolinë, një njësi raftesh dhe një dollap bazë.
- {{ui:Ndërtimi}} › {{ui:Familjet…}} shfaq të njëjtën listë në një dritare.
- Kliko një familje për ta hapur: madhësitë e saj, vlerat e secilës madhësi dhe sa element e përdor secila.

## Dyert dhe dritaret

Mjetet Derë dhe Dritare listojnë familjet e atij lloji, pastaj një **listë madhësish** pranë tyre. Zgjidh një madhësi, ose shkruaj **W** dhe **H**: një gjerësi dhe lartësi që asnjë madhësi nuk e ka ende bëhet një madhësi e re e familjes kur vendos derën. Dyert me të njëjtën madhësi ndajnë një tip të vetëm.

Te {{ui:Vetitë}}, një derë ose dritare e zgjedhur shfaq **Familjen** dhe **Madhësinë**. Zgjidh një madhësi tjetër nga lista, ose shkruaj një gjerësi ose lartësi të re. {{ui:Hap familjen}} hap familjen ku bën pjesë.

Kornizat e çdo dyeje ose dritareje ndjekin trashësinë e murit të vet, si më parë me familjet. Tipi i madhësisë mban edhe derën e vizatuar në një mur 140 mm, për programet që lexojnë tipet.

## Madhësi e re nga kjo familje

1. Hap familjen.
2. Nën **Madhësi e re nga kjo familje**, shkruaj vlerat e saj (Gjerësia, Lartësia dhe parametrat e tjerë të familjes) dhe, nëse do, një emër. Pa emër, merr emrin nga vlerat.
3. Kliko {{ui:Bëj madhësinë}}.

Dy madhësi nuk mund të kenë të njëjtat vlera. **Riemëro** ndryshon emrin e një madhësie; **Hiq** heq një madhësi që askush nuk e përdor; **Përzgjidh** zgjedh elementet e asaj madhësie.

## Vendos mobilje

1. {{ui:Ndërtimi}} › {{ui:Vendos familje}}, ose {{ui:Vendos}} në dritaren e një familjeje.
2. Te shiriti, zgjidh familjen dhe madhësinë e saj.
3. Kliko mbi planimetri për ta vendosur në nivel. Shtyp {{key:R}} për ta rrotulluar 90° para se të klikosh. {{key:Esc}} ndalon.

**Vetitë** e një pjese të vendosur tregojnë madhësinë, vendin dhe sa është rrotulluar; {{key:Delete}} e heq. Çdo pjesë e një madhësie ndan formën e asaj madhësie, kështu që ndryshimi i familjes i ndryshon të gjitha.

## Madhësi nga një tabelë

{{ui:Përmasa nga një tabelë…}} te dritarja e një familjeje lexon një skedar CSV (presje, pikëpresje ose tab). Rreshti i parë emërton kolonat: emrin ose etiketën e një parametri, dhe opsionalisht `Name`. Gjatësitë janë milimetra përveç nëse shkruan një njësi (`1.2 m`, `36 in`); kolonat Po / Jo pranojnë yes, no, true, false, 1 ose 0; dhe një parametër pa kolonë mban vlerën e vet të parazgjedhur. Çdo rresht bëhet një madhësi, në një hap që mund ta zhbësh; një madhësi që ekziston tashmë kapërcehet. Një rresht që nuk lexohet, ose që familja nuk mund ta vizatojë, refuzon të gjithë tabelën dhe e emëron rreshtin e vet. Më shumë se 200 rreshta ose 1 MB nuk pranohen. {{ui:Ruaj përmasat si tabelë}} shkruan të njëjtën tabelë prapa.

## Vendos për çdo element

Një parametër i shënuar **Për element** në redaktues (një Po / Jo që shton një dritare sipër derës, një etiketë, një material) nuk është pjesë e madhësisë: dy dyer të së njëjtës madhësi mund të ndryshojnë. Zgjidh elementin dhe **Vetitë** shfaq këto parametra; ndrysho një dhe ai element vizatohet përsëri me formën e vet (mobiljet dhe pajisjet marrin formë të tyre, dyert dhe dritaret bëhen përsëri në muret e tyre). Vendosi të gjitha në parazgjedhje dhe elementi kthehet te forma e madhësisë së vet.

## Niveli i detajit

{{ui:Ndërtimi}} › {{ui:Familjet…}} › **Niveli i detajit** vendos, për çdo familje në model, çfarë ruhet te trupat dhe vizatohet te simbolet e planimetrisë: **E hollë** mban gjithçka, **Mesatare** dhe **E trashë** heqin pjesët që redaktuesi i shënon si më të holla (skedarë më të vegjël, pamje më të shpejta). **Automatike** ruan gjithçka dhe e lë pamjen e fletës të zgjedhë sipas shkallës së saj: 1:50 dhe më të mëdha të holla, 1:100 mesatare, 1:200 dhe më të vogla të trasha. Një hap që mund ta zhbësh.

## Dyfisho një familje

Nuk duhet të nisesh nga zero. {{ui:Dyfisho}} kopjon një familje me parametrat, trupat dhe madhësitë e saj nën një emër të ri. Ndrysho kopjen në redaktues; origjinali mbetet ashtu siç ishte.

## Skedarët e familjes

- {{ui:Ruaj skedarin e familjes}} ruan një `.ccfamily.json`: parametrat, trupat dhe madhësitë e familjes. Hapeni në një model tjetër me {{ui:Hap një skedar familjeje…}} te grupi Familjet.
- {{ui:Ruaj si IFC}} ruan familjen si një skedar IFC të vogël: tipet e madhësive të saj dhe grupi i saj, të deklaruar nga një bibliotekë projekti IFC. Programet e tjera e hapin si një grup tipesh; BimCraft e hap përsëri si familje.

Një skedar familjeje i hapur këtu lexohet si të dhëna dhe kontrollohet para se të shkruhet ndonjë gjë. Një familje që çelësi i saj ekziston tashmë në model hyn si familje e veçantë. Një familje që mban të tjera (shih Familje brenda, në ndihmën e redaktuesit) i sjell ato bashkë: skedari i liston, dhe modeli mban ato që ka tashmë.

## Familjet në Bibliotekë

Hap {{ui:Familjet…}} dhe zgjidh {{ui:Nga Biblioteka…}} për të parë familjet që janë ndarë në Bibliotekë. {{ui:Shto te ky projekt}} lexon një familje si një skedar familjeje: BimCraft kontrollon çdo fushë para se të krijojë ndonjë gjë, familja hyn si familje e vetvetes, dhe hapet në redaktues. Shtimi është një hap i vetëm zhbërjeje. Për ta ndarë të tuajën, përdor {{ui:Ruaj të gjitha si bibliotekë}} dhe dërgo skedarin te Biblioteka (stafi i Bibliotekës e publikon një skedar familjeje me një komandë, dhe çdo familje është një artikull i vetë me madhësitë e saj). Nëse Biblioteka nuk arrihet, lista e thotë këtë dhe asgjë nuk ndryshon.

## Tipet e programeve të tjera

Tipet e krijuara nga programe të tjera shfaqen edhe në grupin Familjet, të grupuara me një supozim: sipas pjesës së emrit të elementeve para dy pikave të para, ose sipas emrave të tipeve që ndryshojnë vetëm në numrat e tyre. Dritarja e familjes thotë cilin supozim përdori. Ato listohen dhe mund t'i zgjedhësh elementet, por nuk redaktohen këtu: nuk kanë recetë familjeje.

:::note
Dyert dhe dritaret fillestare vizatohen saktësisht si më parë, para familjeve. Skedarët e bërë para familjeve hapen pa ndryshim: dyert dhe dritaret e tyre shfaqen nën familjen e tyre me madhësitë në përdorim, dhe kalojnë në një madhësi të vetën herën e parë që i ndryshon.
:::

See also [Redakto një familje](topic:family-editor) dhe [Dyert dhe dritaret](topic:doors-and-windows).
