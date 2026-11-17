---
title: Pamjet, rangjet e pamjeve dhe fletët tuaja
summary: Gjeni çdo planimetri, fasadë, prerje, pamje 3D, tabelë dhe fletë te shfletuesi i projektit, caktoni si preret secila planimetri dhe çfarë shfaq, bëni thirrje, vizatoni vija dhe vijëzime në një pamje, mbani cilësimet në shabllone pamjesh, dhe rregulloni fletët tuaja.
keywords: thirrje, pamje thirrjeje, pamje detaji, planimetri e zmadhuar, vizatim, vija detaji, vijëzim, zonë vijëzimi, zonë e mbushur, model mbushjeje, planimetria e reflektuar e tavanit, rcp, planimetri tavani, rrjet tavani, armatura drite, shfletuesi i projektit, pamje, rang pamjeje, shkurtim, zonë shkurtimi, shkallë pamjeje, nënshtresë, shfaq një nivel tjetër, halftone, plan prerës, lartësi prerjeje, lart, poshtë, thellësi pamjeje, dukshmëri, kategori, fshih në pamje, shabllon pamjeje, shabllone, fletë, bllok titulli, viewport, shkallë, rregullo fletët, shtrirje, pdf, cilësime pamjeje planimetrie, shfletues
from: ee1d5afe
---

## Çfarë do të bëni

Punoni ashtu si organizohen projektet BIM: çdo pamje në një listë, çdo planimetri e prerë aty ku dëshironi, të njëjtat cilësime për disa planimetri përmes një shablloni, dhe fletë që i rregulloni vetë.

## Shfletuesi i projektit

1. Ndizni {{ui:Vizato}}. Paneli majtas ka një {{ui:Shfletuesi i projektit}} nën modelet.
2. Lista përmban:
   - **Planimetritë e kateve**: çdo nivel. Klikoni një për të parë planimetrinë e tij. Butoni me rrëshqitës pranë tij cakton rangun e pamjes (më poshtë). Një planimetri që ndjek një shabllon shfaq emrin e shablloni.
   - **Planimetritë e tavanit**: planimetria e reflektuar e tavanit për çdo nivel (më poshtë).
   - **Thirrjet**: çdo thirrje me pamjen ku është vizatuar, dhe {{ui:Thirrje e re}}. **Mungon** liston thirrjet pamja e të cilave nuk ekziston më.
   - **Fasadat** dhe **Prerjet**: katër anët dhe çdo vijë prerjeje. Klikoni një për të hapur grupin e vizatimeve ku janë vizatuar.
   - **Pamjet 3D**: pamjet që keni ruajtur me {{ui:Pamjet}}.
   - **Tabelat**: klikoni një për ta shfaqur nën planimetri.
   - **Fletët**: fletët që keni bërë, {{ui:Fletë e re}}, dhe {{ui:Grupi i vizatimeve…}} për tërë grupin e nxjerrë nga modeli.
   - **Shabllonet e pamjeve**, me {{ui:Shabllon i ri}}, dhe **Lidhjet** (modelet e lidhura).

## Cakto rangun e pamjes së një planimetrie

1. Klikoni butonin me rrëshqitës pranë një niveli te **Planimetritë e kateve**.
2. Vendosni lartësitë, mbi atë nivel:
   - **Pritet në**: ku planimetria pret muret, dyert dhe dritaret (1200 mm, rreth 4 ft, përveç nëse e ndryshoni).
   - **Lart**: gjërat mbi prerjen dhe nën majën vizatohen me vija të ndërprera (një dollap i lartë, një trari). Lëreni bosh për lartësinë e nivelit.
   - **Poshtë** dhe **Thellësia nën fund**: gjërat më të ulëta se prerja vizatohen me vija të holla deri në fund, dhe aq poshtë tij.
3. Nën **Shfaqur në këtë planimetri**, hiqni zgjedhjen e asaj që kjo planimetri le jashtë: mobiljet, dhomat, kolonat dhe të tjera.
4. Për të lënë jashtë elementë të vetëm: zgjidhni ato në planimetri ose në pamjen 3D, hapni dialogun dhe klikoni {{ui:Fshih të zgjedhurat këtu}}. {{ui:Shfaq të gjitha}} i kthen.
5. Klikoni {{ui:Përdor këto cilësime}}.

Planimetria pritet përsëri menjëherë, dhe grupi i vizatimeve dhe fletët tuaja e ndjekin. Ndarja e renës së pikave ndjek gjithashtu lartësinë e prerjes.

## Shkurto një planimetri, jepi një shkallë, shfaq një nivel tjetër nën të

Të tre janë në të njëjtin dialog (butoni me rrëshqitës pranë një niveli):

- **Shkallë**: shkalla në të cilën planimetria shtypet ({{ui:Printo}} në shiritin e planimetrisë) dhe vendoset në një fletë. **Përshtat** zgjedh shkallën standarde më të madhe që futet.
- **Zona e shkurtimit**: klikoni {{ui:Vizato në planimetri…}}, pastaj klikoni një qoshe dhe qoshen e kundërt në planimetri ({{key:Esc}} ndalon). Planimetria jashtë zonës errësohet në ekran, dhe ju mund të punoni akoma atje; kur shtypet, në fletë dhe në grupin e vizatimeve, planimetria shfaq vetëm atë që është brenda. {{ui:Pastro}} e heq shkurtimin. {{ui:Përshtat}} përshtat shkurtimin.
- **Nënshtresa**: zgjidhni një nivel tjetër. Muret e tij, elementët e prerë, dyert dhe dritaret vizatohen të çelëta nën këtë planimetri, për t'u përputhur me nivelin më poshtë ose më lart. Nuk mund t'i zgjidhni këtu, dhe shtypen me gri të çelët.

Një shabllon pamjeje mban shkallën bashkë me lartësitë dhe kategoritë. Zona e shkurtimit dhe nënshtresa i përkasin gjithmonë vetëm asaj planimetrie.

## Planimetria e tavanit të një niveli

Çdo nivel ka një planimetri të reflektuar tavani pranë planimetrisë së tij: planimetrinë e parë nga poshtë, për të shtrirë tavanet dhe ato që varen prej tyre.

1. Klikoni nivelin nën **Planimetritë e tavanit** te shfletuesi, ose zgjidhni {{ui:Planimetria e tavanit}} pranë nivelit në shiritin e planimetrisë.
2. Muret priten në 2300 mm (rreth 7'-6"). Vizatohet ajo që shtrihet mbi atë prerje dhe nën lartësinë e nivelit: tavanet me rrjetin e tyre dhe një etiketë lartësie (`CLG 2438`), dritat, traret. Dyert, dritaret dhe ajo që shtrihet nën prerje lihen jashtë.
3. Për të bërë një tavan, përdorni {{ui:Tavan}} si te planimetria e katit, pastaj zgjidhni tavanin dhe zgjidhni **Modelin** e tij te Vetitë. Shih [Dhoma, dysheme, tavane dhe çati](topic:floors-and-roofs).
4. Për të varur një dritë prej tij, vendosni elementin nga biblioteka ndërsa shfaqet planimetria e tavanit: ai shkon te **Në tavan**. Shih [Vendos pajisje dhe mobilje nga biblioteka](topic:place-from-library).
5. Butoni me rrëshqitës pranë një planimetrie tavani cakton prerjen dhe lartësinë e saj, shkallën, kategoritë, zonën e shkurtimit dhe nënshtresën, si për një planimetri kati. Planimetritë e tavanit nuk marrin shabllon pamjeje.

Ajo vizatohet në të njëjtën mënyrë si planimetria e katit (një planimetri e reflektuar, jo një pasqyrë). Një tavan më i ulët se prerja nuk vizatohet: ulni prerjen për planimetrinë e tavanit të atij niveli. Planimetritë e tavanit shkojnë në fletët tuaja si planimetritë; grupi i vizatimeve nuk i shton vetvetiu.

## Bëni një thirrje

Një thirrje tregon një pjesë të planimetrisë më të madhe, me shkallën e vet, si një pamje e veçantë: një kuzhinë, një shkallë, një qoshe muri.

1. Shfaqni planimetrinë, planimetrinë e tavanit ose thirrjen ku i përket.
2. Zgjidhni {{ui:Shëno}} › {{ui:Thirrje}} në shiritin e planimetrisë (ose {{ui:Thirrje e re}} në shfletues), pastaj klikoni një qoshe të zonës dhe qoshen e kundërt. {{key:Esc}} ndalon.
3. Thirrja bëhet në 1:20 (1/2" = 1'-0" në këmbë dhe inç). Drejtkëndëshi i saj dhe një etiketë e rrumbullakët vizatohen në planimetri.
4. Klikoni etiketën me {{ui:Përzgjidh}}, ose thirrjen në shfletues, për ta hapur: planimetria shfaq vetëm atë zonë, në shkallën e thirrjes. Shiriti thotë {{ui:Thirrja:}} dhe emrin e saj; {{ui:Lart}} kthehet te pamja ku është vizatuar.
5. Butoni me rrëshqitës pranë saj (në shfletues ose në shirit) e riemëron, ndryshon shkallën, vizaton përsëri drejtkëndëshin e saj ose e fshin.

Një thirrje shfaq atë që shfaq pamja e saj: të njëjtën prerje, të njëjtat kategori, tavanet e një planimetrie tavani. Një thirrje e thirrjes funksionon në të njëjtën mënyrë. Vendoseni thirrjen në një fletë si një planimetri; etiketa e saj atëherë thotë ku ndodhet (`1 / A-501`: pamja e parë në fletën A-501). {{ui:Printo}} te një thirrje shtyp vetëm atë zonë në shkallën e saj.

Fshirja e një thirrjeje fshin edhe thirrjet e vizatuara brenda saj, dhe vijat e vijëzimet e vizatuara në to (pyeteni para). Nëse niveli ku është vizatuar një thirrje fshihet, thirrja mbetet nën **Mungon** derisa ta fshini, dhe fletët ku është ajo e raportojnë si të munguar.

## Vizato vija dhe vijëzime në një pamje

Hartimi është punë 2D që i përket vetëm një pamjeje: shënime me vija, një zonë e vijëzuar me beton ose dhe, një zonë e mbushur. Nuk është kurrë në pamjen 3D dhe as në një planimetri tjetër.

1. Shfaqni planimetrinë e katit, planimetrinë e tavanit ose thirrjen ku do të vizatoni.
2. Zgjidhni nga {{ui:Shëno}} në shiritin e planimetrisë:
   - {{ui:Vijë}}: klikoni ku fillon dhe ku përfundon. Vija e radhës fillon aty ku mbaroi e fundit; {{key:Enter}} fillon nga e para.
   - {{ui:Polivijë}}: klikoni pikat e saj; {{key:Enter}} ose një klikim i dyfishtë e mbyll, një klikim mbi pikën e parë e mbyll.
   - {{ui:Drejtkëndësh}}: dy qoshe të kundërta.
   - {{ui:Zona e vijëzimit}}: zgjidhni **Modelin** (E ngurtë, Diagonale, Kryq, Beton, Izolim, Tokë) dhe shkallën e tij në shirit, pastaj klikoni qoshet; {{key:Enter}}, një klikim i dyfishtë ose një klikim mbi qoshen e parë e mbyll. Me {{ui:Mbush një dhomë}} të zgjedhur, një klikim brenda një dhome vijëzon konturin e saj.
3. Pikat kapen si muret; {{key:Shift}} mban një vijë në kënd të drejtë, dhe mund të shkruani një gjatësi si për muret. {{key:Backspace}} heq pikën e fundit.

Zgjidhni një vijë ose vijëzim me {{ui:Përzgjidh}} në planimetri. Vetitë ndryshon modelin dhe shkallën e një vijëzimi dhe ka {{ui:Zhvendos…}} (klikoni pikën nga ku të lëvizet, pastaj ku shkon). {{key:Delete}} e fshin. Çdo vijë, vijëzim dhe ndryshim është një hap.

Vijat dhe vijëzimet shtypen me planimetrinë, shkojnë në fletët tuaja me të dhe janë në grupin e vizatimeve. Hiqni zgjedhjen e **Shënimeve** në një rang pamjeje për t'i lënë jashtë asaj pamjeje.

## Mbani cilësimet në një shabllon pamjeje

1. Klikoni {{ui:Shabllon i ri}} në shfletues, ose {{ui:Ruaj si shabllon…}} në rangun e pamjes së një planimetrie (ajo planimetri e përdor pastaj).
2. Jepini një emër, vendosni lartësitë dhe kategoritë, dhe klikoni {{ui:Ruaj shabllonin}}.
3. Në rangun e pamjes së çdo planimetrie, zgjidhni shabllonin. Planimetria merr lartësitë dhe kategoritë e tij; ndryshoni shabllonin për të ndryshuar çdo planimetri që e përdor. Elementët që keni fshehur një nga një mbeten të fshehur në planimetrinë e tyre.
4. Klikoni një shabllon në shfletues për ta ndryshuar, riemërtuar ose fshirë. Fshirja e një shabllon i lë planimetritë e tij me cilësimet e veta.

## Rregulloni një fletë tuajën

1. Klikoni {{ui:Fletë e re}}. Shkruani numrin dhe titullin e saj dhe zgjidhni letrën.
2. Klikoni {{ui:Shto}} pranë një planimetrie, planimetrie tavani, thirrjeje, fasade, prerjeje ose tabele. Ajo bie në mes të fletës.
3. Tërhiqeni aty ku shkon. Me të zgjedhur, zgjidhni një **Shkallë**, ose lëreni në shkallën e planimetrisë (kur planimetria ka një), përndryshe shkallën që përshtatet në një të tretën e fletës. {{ui:Hiq fletën}} e heq.
4. Klikoni {{ui:Ruaj fletën}}. Ajo listohet nën **Fletët**; klikojeni për ta ndryshuar më vonë.
5. {{ui:Shkarko si PDF}} ruan atë fletë si një faqe.

## Çfarë duhet të shihni

- Planimetri të prera në lartësitë tuaja, me atë që është mbi prerje me vija të ndërprera dhe atë që keni pastruar jashtë.
- Një planimetri e shkurtuar, e errësuar jashtë zonës së vet në ekran dhe e prerë sipas saj në letër, në shkallën që keni dhënë.
- Një planimetri tavani me rrjetat e tavaneve dhe etiketat e lartësisë, dhe dritat në tavan.
- Thirrje me drejtkëndëshin dhe etiketën e tyre në planimetri, secila hapet në shkallën e vet.
- Vija dhe vijëzime vetëm në pamjen ku i keni vizatuar.
- Fletët tuaja të vizatohen sërish nga modeli çdo herë që i hapni, kështu gjithmonë përputhen me të. Një pamje ku është fshirë niveli ose vija e prerjes raportohet, nuk vizatohet.
- Çdo ndryshim këtu është një hap: {{key:Mod+Z}} e zhbën.

:::note
Gjithçka kjo ruhet në skedarin IFC si grupe vetish që programet e tjera nuk i prekin: rangu i pamjes dhe planimetria e tavanit e çdo niveli në nivel, shabllonet, thirrjet dhe fletët tuaja në projekt. Vijat dhe vijëzimet janë anotacione IFC në nivelin e tyre, kështu programet e tjera i shohin si kurba 2D dhe zona të vijëzuara (vizatimin e tyre të çdo modeli), por jo se cilës pamje i përkasin.
:::

:::tip
Programet e tjera BIM e quajnë prerjen rang pamjeje ose plan prerës, shabllonet shabllone pamjesh ose cilësime pamjeje, vijat e hartimit vija detaji, dhe zonat e vijëzuara zona të mbushura. Idetë janë të njëjta; cilësimet e pamjes nuk udhëtojnë tek ato.
:::
