---
title: Mbaj të dhënat e aseteve dhe regjistrin e mirëmbajtjes në model
summary: Përdor modelin IFC të dorëzuar për drejtimin e ndërtesës: prodhuesi, modeli, numri serial, garancia dhe jetëgjatësia për pajisjet dhe armaturat, dhe një regjistër i punës së mirëmbajtjes, të gjitha të shkruara në IFC.
keywords: dorëzim, certifikatë përfundimi, certifikatë banimi, siç është ndërtuar, paketë dorëzimi, asete, regjistër aseti, menaxhim objektesh, fm, operacione, mirëmbajtje, shërbim, garanci, numër serial, barkod, prodhues, model, jetëgjatësi, dorëzim, cobie, binjak digjital, me vonesë, afat, urdhër pune
from: b84ac492
---

Skeda {{ui:Asete}} në panelin e djathtë e kthen modelin IFC të hapur në një regjistër të pajisjeve të ndërtesës. Gjithçka shkruhet në vetë IFC, në grupet e vetive dhe detyrat e IFC, kështu që programi tjetër që hap skedarin e lexon edhe ai. Asgjë nuk ngarkohet dhe nuk nevojitet server: ruaj IFC për ta mbajtur.

## Çfarë listohet

- Pajisje dhe armatura: mobilje, armatura sanitare, armatura drite, aparate, terminale ajri, valvula, pompa, ventilatorë, kaldaja, cisterna, priza, panele elektrike, ashensorë dhe elemente të tjerë të tillë, dhe artikuj biblioteke me të dhëna pajisjeje.
- Çdo element tjetër që **ndjek**: zgjidhe në model (një derë, një mur, një pompë e vizatuar si objekt i thjeshtë) dhe kliko {{ui:Ndiq të zgjedhurat}}.
- Çdo gjë që ka tashmë të dhëna aseti ose një detyrë mirëmbajtjeje, e shkruar këtu ose nga një program tjetër.

Ajo që është me vonesë del e para, pastaj ajo që ka afat brenda 30 ditësh. Filtro sipas emrit, etiketës, prodhuesit, modelit ose numrit serial, sipas nivelit, ose shëno {{ui:Vetëm me vonesë ose me afat brenda 30 ditësh}}.

## Të dhënat e aseteve

Kliko një aset në listë (ose zgjidhe në model) për të hapur të dhënat e tij: prodhuesi, modeli, referenca e modelit, numri serial, barkodi, dita kur u instalua, numri i garancisë dhe fillimi dhe fundi i saj, dhe jetëgjatësia në vite. {{ui:Ruaj të dhënat}} i shkruan në një hap ({{key:Mod+Z}} e zhbën). Lëre një kuti bosh për të hequr atë vlerë.

## Dokumentet

Nën të dhënat, {{ui:Dokumentet}} liston manualet, garancitë, fotot, certifikatat dhe vizatimet e lidhura me asetin. Zgjidh llojin, jep një titull (ose lëre bosh: përdoret emri i skedarit) dhe shkruaj ku ndodhet:

- një **adresë interneti** (`https://…`): merr një lidhje Hap, që hapet në një skedë të re;
- ose një **emër skedari ose rrugë** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, një ndarje rrjeti): mbaji skedarët pranë IFC, në të njëjtën dosje ose një nën të, që emrat të funksionojnë kur ia jep dosjen dikujt tjetër. BimCraft shfaq emrin; hape skedarin nga dosja.

Skedarët vetë nuk ngarkohen apo kopjohen kurrë në IFC: shkruhet vetëm lidhja. Një adresë interneti me fjalëkalim brenda, dhe çdo lidhje që nuk është adresë interneti ose skedar (si `javascript:`), refuzohen. {{ui:Hiq}} heq një dokument nga aseti (një hap; {{key:Mod+Z}} e zhbën).

Dokumentet që një program tjetër i vuri elementit listohen gjithashtu. Dokumentet në **tipin** e elementit shfaqen në çdo element të atij tipi dhe e thonë këtë; ndryshoi ato aty ku u krijua tipi.

Në IFC çdo dokument është një referencë dokumenti IFC e lidhur me elementin, me llojin e tij të ruajtur te ajo lidhje, në IFC4 dhe IFC2X3 njësoj.

## Regjistri i mirëmbajtjes

Nën dokumentet, {{ui:Regjistro punën e kryer}}: dita kur u krye, puna, kush e bëri, kur është afati tjetër dhe shënime. Çdo hyrje është një hap; {{ui:Redakto}} dhe {{ui:Fshi}} e ndryshojnë më vonë. Data e afatit tjetër të hyrjes më të re vendos nëse aseti është me vonesë ose është afër.

## Si ruhet në IFC

- Prodhuesi dhe modeli në `Pset_ManufacturerTypeInformation`, numri serial, barkodi dhe dita e instalimit në `Pset_ManufacturerOccurrence`, garancia në `Pset_Warranty`, jetëgjatësia në `Pset_ServiceLife`, në vetë elementin. Kur tipi i elementit mban tashmë një prodhues ose model, ai shfaqet derisa të shkruash të tuajin.
- Çdo hyrje mirëmbajtjeje është një **detyrë** IFC e llojit mirëmbajtje, e lidhur me elementin, me datat e saj (në IFC4 edhe si kohët e vetë detyrës) dhe një grup `CadCraft_Maintenance` me ditën, kush e bëri dhe ditën e afatit tjetër.
- Vlerat që ndajnë elemente të tjerë kopjohen së pari: ndryshimi i një aseti nuk ndryshon kurrë fqinjët e tij.
- Në skedarët e vjetër IFC2X3 datat shkruhen si tekst (YYYY-MM-DD); ky version kërkon atje një regjistrim të veçantë datash, që BimCraft nuk e shkruan.

## Leximet e sensorëve

Hap {{ui:Vlerat e sensorëve}} dhe {{ui:Hap leximet (CSV)…}} për të sjellë leximet e eksportuara nga një sistem menaxhimi ndërtese, një regjistrues të dhënash ose një fletëllogari:

- **Kolona e parë është koha**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` ose sekonda Unix. Një kohë pa zonë lexohet në zonën kohore të kompjuterit tënd. Datat me ditën e parë si `23/10/2026` nuk lexohen (janë të paqarta); eksporto datat ISO.
- **Çdo kolonë tjetër është një sensor**, me titull **etiketën**, **emrin** ose **GlobalId** të asetit të tij. Një titull që nuk përputhet me asnjë aset, ose përputhet me më shumë se një, listohet dhe lihet jashtë. Presjet, pikë-presjet ose tab ndajnë kolonat; me pikë-presje ose tab lexohet edhe presja dhjetore (`21,5`).
- Kohët ose vlerat që nuk lexohen (një fjalë, një njësi e shkruar në qelizë) numërohen dhe lihen jashtë, pa u supozuar kurrë.

Leximi i fundit shfaqet te kolona {{ui:Leximi}} e listës dhe te blloku {{ui:Sensori}} i asetit, me një **grafik** të çdo leximi (në telefon, grafikët presin derisa prek {{ui:Shfaq grafikun}}). Vendos një **kufi të ulët dhe të lartë** dhe një njësi te një aset dhe kliko {{ui:Ruaj kufijtë}}: një lexim jashtë tyre e shënon asetin. Shëno {{ui:Shfaq në model}} për të ngjyrosur çdo aset sipas leximit të tij: blu nën kufirin e ulët, jeshil brenda kufijve, e kuqe mbi kufirin e lartë, dhe, për asetet pa kufij, një shkallë e vetme blu nga leximi më i ulët deri te më i larti, me leximin e tij si etiketë (deri në 60 etiketa, ato të shënuara të parat).

**Leximet mbeten në skedën e këtij shfletuesi**: nuk ruhen në IFC dhe nuk dërgohen askund; hape CSV-në përsëri herën tjetër. **Kufijtë ruhen në IFC** (një grup `CadCraft_Sensor` në element: Low, High, Unit), kështu që personi tjetër që hap skedarin sheh të njëjtat shenja.

## Leximet e drejtpërdrejta

{{ui:Transmetim i drejtpërdrejtë}} lexon vlera ndërsa ndodhin, **drejtpërdrejt nga ky shfletues te sistemi yt**. Asgjë nuk kalon nga serveri ynë dhe asgjë nuk ruhet askund përveç skedës së shfletuesit tënd. Asgjë nuk lidhet kur hapet një skedar: vetëm {{ui:Lidh}} e bën.

- **MQTT mbi WebSockets**: adresa e dëgjuesit WebSocket të brokerit tënd (`wss://broker.example.com:8884/mqtt`), dhe një ose më shumë tema me `{tag}` aty ku shkon etiketa e asetit, për shembull `site/{tag}/temperature` (BimCraft abonohet te `site/+/temperature` dhe e lexon etiketën nga tema e çdo mesazhi). Temat pa `{tag}` emërojnë vetë sensorin. Një mesazh është ose një numër i thjeshtë (`21.5`) ose JSON si `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (vendos {{ui:Fusha e vlerës në JSON}} nëse e jotja quhet ndryshe).
- **Pyet një adresë (HTTP)**: një adresë interneti që sistemi yt i menaxhimit të ndërtesës ose një skript i vogël yt përgjigjet, e pyetur çdo disa sekonda (të paktën 5). Mund të përgjigjet me JSON të indeksuar sipas etiketës (`{"AHU-1": 21.5}`), një listë JSON (`[{"tag": "AHU-1", "value": 21.5}]`), ose një CSV leximesh si ai më sipër. Nëse nuk përgjigjet, BimCraft pret dyfishin e kohës para se të pyesë përsëri, deri në pesë minuta.

Çdo lexim shkon te aseti emri i të cilit e jep etiketa, emri ose GlobalId, saktësisht si do të bënte një kolonë CSV; emrat që nuk përputhen me asnjë aset listohen. Leximet bashkohen me {{ui:Vlerat e sensorëve}}: lista, grafikët, kufijtë dhe ngjyrat në model funksionojnë njësoj.

**Fjalëkalimi ose token-i yt** shkruhet për një lidhje të vetme: i jepet lidhjes dhe kutia zbrazet; nuk ruhet kurrë në këtë shfletues ose në IFC. Një token dërgohet si header standard `Authorization: Bearer`, dhe asnjë cookie nuk dërgohet.

{{ui:Mbaji këto cilësime në IFC}} shkruan adresën, temat, fushën e vlerës dhe sa shpesh të pyetet, në model (një grup `CadCraft_Feed` në projekt; nuk ka fushë për fjalëkalim), kështu që personi tjetër që hap skedarin shkruan vetëm hyrjen e vet dhe kliko {{ui:Lidh}}. Mos vendos një fjalëkalim ose çelës në vetë adresën: një adresë me emër përdoruesi dhe fjalëkalim brenda refuzohet.

:::note
**Çfarë kërkon brokeri ose adresa jote.** Një faqe shfletuesi mund të flasë vetëm me një server që e lejon:
- Faqja është e sigurt (https), kështu që shfletuesi lidhet vetëm me adresa `wss://` dhe `https://` — përveç në kompjuterin tënd (`localhost`), ku `ws://` dhe `http://` funksionojnë për testim.
- Një adresë HTTP duhet të lejojë kërkesa nga kjo faqe (CORS: header-i `Access-Control-Allow-Origin`, dhe `Authorization` ndër header-at e lejuar nëse përdor token).
- Shumica e brokerëve (Mosquitto, EMQX, HiveMQ dhe të tjerë) ofrojnë një dëgjues WebSocket; shpesh është i fikur derisa ta ndezësh. BimCraft flet MQTT 3.1.1.
:::

Kur BimCraft është mbyllur **nuk ka alarme**: kufijtë e shënojnë një aset vetëm ndërsa modeli është hapur me një transmetim të lidhur. Monitorimi i një ndërtese gjatë gjithë kohës kërkon një server, që BimCraft nuk e drejton.

## Fletëllogari COBie

**COBie** është fletëllogaria e dorëzimit që shumë pronarë dhe ekipe menaxhimi kërkojnë (e botuar nga National BIM Standard në SHBA; BS 1192-4 në Mbretërinë e Bashkuar). Hap {{ui:Fletëllogari COBie}} në skedë:

- {{ui:Ruaj si COBie (.xlsx)}} shkruan fletët COBie 2.4 — Contact, Facility, Floor, Space, Type, Component, System, Job, Document dhe Attribute — nga modeli dhe të dhënat e aseteve: ndërtesa, nivelet dhe dhomat e saj (sipërfaqet nga sasitë e modelit), çdo aset si një komponent me numrin e tij serial, ditën e instalimit, fillimin e garancisë, etiketën dhe barkodin, tipin e tij me prodhuesin, modelin, jetëgjatësinë dhe gjatësinë e garancisë, sistemet ku bën pjesë, regjistrin e mirëmbajtjes si punë dhe dokumentet e lidhura. Çdo komponent mban GlobalId IFC të elementit. Shkruaj emailin tënd për kolonën "created by" të COBie, ose lëre bosh (atëherë shfaqet n/a). Vlerat që modeli nuk i ka thonë **n/a**; kolonat e kategorisë mbajnë klasën IFC, jo kodin OmniClass.
- {{ui:Lexo një fletëllogari COBie…}} e lexon përsëri, nga BimCraft ose një program tjetër, dhe **liston çdo ndryshim para së gjithash**: cilin aset, cilën vlerë, nga çfarë në çfarë, dhe dokumentet e reja. {{ui:Zbato}} i shkruan të gjitha në një hap ({{key:Mod+Z}} e zhbën). Rreshtat përputhen sipas GlobalId, pastaj sipas emrit të komponentit. Rreshtat që nuk përputhen me asgjë në model listohen, nuk shtohen.

Një fletëllogari trajtohet si e pabesuar: formulat nuk lexohen apo ekzekutohen kurrë (vetëm vlera e ruajtur e fundit në qelizë), një vlerë që do ta bënte një garanci të mbarojë përpara se të fillojë dhe një lidhje dokumenti që nuk është adresë interneti ose emër skedari lihen jashtë dhe numërohen, dhe librat e punës shumë të mëdhenj refuzohen. Punët e COBie janë punë të planifikuara të një tipi, kështu që shkruhen, por nuk lexohen përsëri. Në fletëllogarinë që shkruan BimCraft, teksti që një fletëllogari mund ta marrë për formulë (që fillon me `=`, `+`, `-` ose `@`) shënohet si tekst.

Libri i punës është kontrolluar në testet tona kundër një lexuesi të pavarur fletëllogarish; nuk ka kaluar nëpër një validues COBie. Nëse një ekip pranues e nxjerr një, na thuaj çfarë thotë.

## Dokumentet e dorëzimit

Letrat që i dorëzohen pronarit me ndërtesën e përfunduar i përkasin projektit, jo një aseti. Në skedën {{ui:Asete}}, hap {{ui:Dokumentet e dorëzimit}}:

1. {{ui:Shto një dokument}}, zgjidh llojin (certifikatë përfundimi, certifikatë banimi, garanci, manual, vizatime siç janë ndërtuar, tjetër), dhe shkruaj titullin, datën e lëshimit, kush e lëshoi dhe numrin e referencës.
2. Thuaj ku ndodhet: një adresë interneti, një emër skedari i mbajtur pranë IFC, ose {{ui:Bashkango një skedar}}.
3. {{ui:Shto në listë}}. {{ui:Redakto}} dhe {{ui:Hiq}} e ndryshojnë listën; secili është një hap që mund ta zhbësh.

{{ui:Ndërtto paketën e dorëzimit}} shkarkon një zip: një faqe kopertine që liston çdo dokument, e njëjta listë si një fletëllogari, libri COBie (dokumentet janë në fletën e tyre Document, si rreshta për Facility), modeli, dhe çdo skedar i bashkangjitur. Një certifikatë përfundimi ose banimi që nuk është ende në listë emërohet në kopertinë; paketa ndërtohet gjithsesi.

Modeli në paketë është **modeli siç është ndërtuar**: thotë cilët elementë u matën në terren. Me të, në dosjen `as-built`: deklarata, një listë e çdo elementi me gjendjen e tij të verifikimit, grupi i vizatimeve siç është tani si një PDF (vizatimet siç janë ndërtuar), dhe regjistri i ndryshimeve të vizatimeve kur modeli ka lëshuar grupe. Shih [Shëno elementet si të kontrolluara ose të verifikuara në terren](topic:verification).

- Në skedarin IFC çdo dokument është një IfcDocumentInformation e lidhur me projektin (IfcRelAssociatesDocument), me titullin, referencën, datën, lëshuesin dhe vendin e tij, kështu që programet e tjera e listojnë.
- Një skedar i bashkangjitur regjistrohet me emër, madhësi dhe SHA-256. Për ta mbajtur vetë skedarin me projektin, përdor {{ui:Ruaje projektin si paketë}} (një .ccbundle mban modelin dhe skedarët e bashkangjitur; hapja e tij i kthen, secili i kontrolluar sipas regjistrimit të vet). Një ruajtje e zakonshme pyet cilin do.
- Një .ifc i thjeshtë mban regjistrimin, jo skedarin: pasi e hap, përdor {{ui:Bashkango përsëri skedarin}}. Skedari i njëjtë njihet; një tjetër zëvendëson regjistrimin.

## CSV

{{ui:CSV}} ruan çdo aset me të dhënat e tij, çdo hyrje mirëmbajtjeje dhe çdo dokument, nga një rresht për secilin, për një fletëllogari ose një program tjetër mirëmbajtjeje.

:::note
Nuk është ndërtuar: një shërbim i hostuar që mban leximet dhe dërgon alarme kur BimCraft është mbyllur, dhe lexim i punëve të COBie. Shih [Të pandërtuara akoma](topic:not-built-yet).
:::
