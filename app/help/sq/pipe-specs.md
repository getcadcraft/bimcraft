---
title: Specifikimet e tubave, valvulat, damperët dhe familjet e prodhuesve
summary: Krijoni specifikimet tuaja të tubave (tabela madhësish me material, bashkim dhe ashpërsi), të ruajtura në skedarin e modelit; vendosni valvula, një filtër dhe damperë në linja; dhe sillni një model valvule ose pajisjeje të prodhuesit si familje me porta lidhjeje.
keywords: specifikim tubi, specifikime tubash, specifikim tubacioni, klasë tubacioni, tub i personalizuar, tabelë madhësish, tub, tub higjienik, inox, tabelë, diametër i jashtëm, trashësi muri, diametër i brendshëm, ashpërsi, klasë presioni, csv, json, import, eksport, fletëllogaritëse, standard, bpe, din, en 10357, en 10255, valvul, valvula, valvul flluture, valvul balancimi, valvul kontrolli, filtër, damper, damper vëllimi, damper zjarri, oem, prodhues, familje, familje, porta, lidhje, step, obj, gltf, ifc, radiator, konvektor, panel ngrohës, njësi trajtimi ajri, difuzor, rrjetë
from: bc2f7c4e
---

## Çfarë do të bëni

Vizatoni tub sipas specifikimit tuaj në vend të tabelave të integruara të çelikut, bakrit dhe plastikës, vendosni valvula dhe damperë në linja, dhe vendosni modelin e një prodhuesi me porta ku lidhen tubat.

:::note
Mjet hartimi dhe koordinimi. Një specifikim tubi mban numrat që shkruani ose importoni: kontrolloni çdo tabelë sipas standardit të projektit tuaj. Valvulat, filtrat dhe damperët e integruar janë forma skematike të përmasuara sipas linjës, jo gjatësi e një prodhuesi ose e një standardi valvulash.
:::

## Krijo një specifikim tubi

1. Ndizni {{ui:Vizato}}, hapni {{ui:Ndërtimi}} dhe zgjidhni {{ui:Specifikimet e tubave}}. I njëjti buton gjendet edhe në shiritin e veglës Tub.
2. Zgjidhni {{ui:I ri}}, ose nisni nga një skedar, një ngjitje ose një specifikim fillestar (më poshtë).
3. Shkruani emrin e tij, standardin ose referencën që ndjek, materialin dhe llojin e skajit ose bashkimit.
4. Shkruani një rresht për çdo madhësi: emrin e madhësisë, diametrin e jashtëm dhe murin, në milimetra. Shkruani diametrin e brendshëm në vend të murit nëse e keni atë: tjetri plotësohet. DN, klasa e presionit dhe pesha janë opsionale.
5. Opsionale: ashpërsia në milimetra (llogaritja e rënies së presionit e përdor), trashësia e izolimit me të cilën fillojnë linjat e reja, rrezja e lakimit si faktor i diametrit të jashtëm, nëse specifikimi ka trungje dhe reduktorë, dhe një ngjyrë të vetën në 3D.
6. Shënoni shërbimet, për shembull ujë i ftohur, linjat e të cilave të reja duhet të nisin në këtë specifikim.
7. Zgjidhni {{ui:Ruaj në model}}.

Specifikimet ruhen në skedarin e modelit. Kushdo që e hap skedarin i ka ato, dhe {{ui:Zhbëj}} kthen një ndryshim prapa.

Një specifikim, ose një nga madhësitë e tij, nuk mund të fshihet ndërsa një linjë është vizatuar në të. Ndryshimi i numrave të një madhësie rivizaton linjat në atë madhësi.

## Ripërdor një specifikim në një model tjetër

- {{ui:Eksporto .json}} ruan specifikimin e zgjedhur si një skedar të vogël; {{ui:Eksporto të gjitha}} ruan çdo specifikim të modelit. {{ui:Importo një skedar}} i lexon përsëri.
- {{ui:Eksporto .csv}} ruan tabelën e madhësive për një fletëllogaritëse. {{ui:Importo një skedar}} lexon edhe një `.csv`.
- {{ui:Ngjit rreshtat}} merr një tabelë të kopjuar nga një fletëllogaritëse. Rreshti i parë emërton kolonat: `Size`, `OD` dhe `Wall` (ose `ID`), dhe opsionalisht `DN`, `Pressure`, `Weight`. Një rresht për çdo madhësi. Numrat janë në milimetra, përveç nëse zgjidhni inç ose një qelizë shkruan njësinë e vet (`0.065 in`).

## Specifikime fillestare

{{ui:Shto një specifikim fillestar}} shton një nga këto në modelin tuaj si një kopje që mund ta redaktoni:

| Fillestar | Madhësitë |
|---|---|
| Tub ASME BPE | nga 1/4" deri 6" |
| Tub EN 10357 seria A (DIN 11850 rreshti 2) | DN10 deri DN200 |
| Tub çeliku EN 10255, seria e mesme | DN15 deri DN150 |
| Tub çeliku EN 10255, seria e rëndë | DN15 deri DN125 |

Këto tabela janë diametrat e jashtëm dhe muret që dy ose më shumë faqe furnizuesish të publikuara i shtypin për standardin dhe bien dakord. Nuk janë marrë nga vetë standardet. Madhësitë që jep vetëm një faqe janë lënë jashtë. Çdo fillestar tregon faqet e tij burimore dhe është shënuar "kontrollo me standardin e projektit tënd". Nuk jepet asnjë ashpërsi, klasë presioni apo peshë.

## Vizato një linjë në një specifikim

1. Zgjidhni {{ui:Tub}}. Një shërbim që keni shënuar në një specifikim nis aty. Për çdo linjë tjetër, zgjidhni specifikimin te lista e materialeve: specifikimet shfaqen pas materialeve të integruara si "Spec: emri".
2. Lista e madhësive tani përmban vetëm madhësitë e atij specifikimi. Zgjidhni një dhe vizatoni linjën.

Për ta zhvendosur një linjë në një specifikim më vonë, përzgjidheni dhe ndryshoni **Materiali** te Vetitë. Madhësia e saj bëhet madhësia më e afërt e specifikimit sipas diametrit të jashtëm.

Në skedarin IFC, tubi mban emrin e specifikimit, standardin, materialin, bashkimin dhe përmasat e tij (`CadCraft_PipeSpec` dhe `Pset_PipeSegmentTypeCommon`, te tubi dhe te tipi i tij).

Llogaritjet e madhësisë dhe të rënies së presionit lexojnë diametrin e brendshëm të specifikimit. Kur specifikimi ka ashpërsi, fërkimi i një linje llogaritet me të (Darcy-Weisbach); pa të përdoret vlera e zakonshme e llogaritjes.

## Valvula, filtri dhe damperë

1. Zgjidhni {{ui:Valvul}} dhe zgjidhni llojin te shiriti: valvul portë, sferike, flluture, globi, kontrolli, balancimi ose kontrolli, ose një filtër, për tubat; një damper vëllimi ose një damper zjarri, për kanalet.
2. Klikoni te linja ku shkon. Linja pritet rreth saj dhe të dy anët mbeten të lidhura. Ajo merr madhësinë e linjës dhe lëviz me të.

Vetitë e linjës i listojnë një nga një me {{ui:Hiq}}; linja mbyllet përsëri.

Llogaritja e rënies së presionit numëron humbje përbërësi vetëm për valvulat portë, sferike, globi dhe kontrolli. Llojet e tjera, damperët dhe familjet e prodhuesve nuk shtojnë humbje aty: lëreni hapësirë në kontrollin tuaj. Ato numërohen te **Pjesë lidhëse dhe valvula** dhe në llogaritjen e sasive, dhe shkruhen në IFC si valvula, një filtër (filtri) dhe damperë me dy porta të lidhura.

## Një model prodhuesi si familje

1. Hapni {{ui:Ndërtimi}} dhe zgjidhni {{ui:Familjet}}, pastaj {{ui:Importo një model}}. Lexohen skedarë IFC, STEP, OBJ, STL, glTF dhe artikuj Biblioteke. Për OBJ dhe STL, vendosni së pari njësitë e skedarit dhe boshtin lart.
2. Te dialogu i portave, shkruani emrin, prodhuesin dhe numrin e modelit.
3. Zgjidhni nëse shkon **Në një linjë** (valvul, filtër ose damper) apo është **Pajisjet**, dhe si shkruhet.
4. Jepini portat. Secila ka një emër, tub ose kanal, shërbimin, madhësinë në milimetra (diametri i jashtëm për një tub), madhësinë nominale sipas emrit të specifikimit tuaj, llojin e skajit, pozicionin dhe mënyrën si përballet. {{ui:Në një faqe}} vendos një portë në qendër të një faqeje të kutisë së modelit. Pamja e vogël nga lart tregon portat.
5. Zgjidhni {{ui:Ruaj familjen në model}}.

Një familje që shkon në një linjë kërkon saktësisht dy porta që përballen njëra me tjetrën në një drejtëz. Zgjidheni te lista e veglës Valvul dhe klikoni te një linjë: vendoset me gjatësinë e vet dhe tubat lidhen me portat e saj.

Një familje nuk shtrihet kurrë. Nëse portat e saj nuk janë në madhësinë e linjës, ju njoftohet kur e vendosni, dhe {{ui:Kontrollo lidhjet}} e liston.

Një familje pajisjesh vendoset me {{ui:Pajisjet}}, lloji **Familje prodhuesi**. Tubat dhe kanalet ngjiten te portat e saj.

{{ui:Shkarko si artikull Biblioteke}} ruan një familje me portat e saj si skedar që mund ta dorëzoni në Bibliotekë.

## Radiatorë dhe konvektorë

{{ui:Pajisjet}} ka gjithashtu **Radiator** dhe **Konvektor / panel ngrohës**: trupa gjenerikë me një lidhje furnizimi dhe kthimi për ujë ngrohjeje. Shih [Pajisjet MEP me porta](topic:mep-equipment).
