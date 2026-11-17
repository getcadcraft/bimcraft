---
title: Dokumentet dhe rishikimet (depoja)
summary: Një udhëzues hap pas hapi për një punë reale: vendos një dosje projekti me modele IFC nën kontroll, merr një model për redaktim, ndrysho, regjistro me një shënim, dërgoje për shqyrtim, mirato dhe lësho, shiko historikun dhe çfarë përdor, çfarë sheh një person tjetër kur skedari është i mbajtur, dhe si punon me dosjet në cloud.
keywords: depo, dokumente, udhëzues, mësim, merr për redaktim, regjistro, rishikim, lëshim, miratim, kyçje, historik, ku përdoret, ifc, model, dosje cloud, dosje projekti, dy persona, dosje e përbashkët
from: 0a753f25
---

## Çfarë do të bësh

Je Ana, që punon te Riverside Clinic me një koleg, Ben. Modelet IFC të projektit ndodhen në një dosje që të dy e arrini (një disk i përbashkët, një dosje e sinkronizuar, ose një dosje cloud). Në fund, një skedar ka kaluar nga kopja e parë në një rishikim të lëshuar **A**, është ndryshuar përsëri si **B.1**, ke parë kush bëri çfarë, dhe ke parë çfarë sheh Ben kur ti e mban skedarin.

Gjithçka mbahet në një dosje të fshehur `.ccvault` pranë skedarëve të tu: pa server, pa ngarkim (një dosje cloud është përjashtimi, shih hapin e fundit). Për çdo buton dhe rregull në një vend, shih temën *Dokumentet: marrja për redaktim, rishikimet dhe lëshimi* aty ku e ka aplikacioni yt.

## 1. Përgatit dosjen e projektit

1. Zgjidh {{ui:Dokumentet}} pranë {{ui:Hap një dosje}} në ekranin e fillimit, ose {{ui:Dokumentet…}} në menynë **Skedar**.
2. Zgjidh {{ui:Zgjidh dosjen e projektit}} dhe zgjidh dosjen që mban modelet IFC të projektit. (Dosjet e projektit punojnë në Studio dhe në shfletuesit që mund të hapin një dosje, si Chrome dhe Edge. Në shfletues të tjerë paneli e thotë këtë.)
3. Zgjidh {{ui:Ndryshimi}} pranë **Ti:** dhe shkruaj emrin tënd, `Ana` (nëse pyet, edhe emrin e këtij kompjuteri). Paneli tani thotë *Ti: Ana në* dhe kompjuterin tënd. Emri yt shkon në çdo gjë që bën.
4. Zgjidh {{ui:Krijo një depo në këtë dosje}} dhe shkruaj emrin e projektit, `Riverside clinic`. Paneli thotë *Depoja u krijua për Riverside clinic.*

## 2. Vendos një skedar nën kontroll

1. Hap **Skedarët jashtë depos** dhe zgjidh {{ui:Shto}} pranë `models/House.ifc`.
2. Shfaqet nën **Skedarët në depo** në rishikimin **A.1**, gjendja **Në punë**. A.1 është kopja e parë; depoja mban një kopje të çdo rishikimi.

## 3. Merr për redaktim, ndrysho, regjistro

1. Zgjidh {{ui:E hapur}} pranë `models/House.ifc`. Modeli hapet në BimCraft dhe paneli mbyllet që ta shohësh. Hap panelin përsëri nga {{ui:Dokumentet}}.
2. Hap panelin përsëri dhe zgjidh {{ui:Merr për redaktim}}. Rreshti tani thotë **Marrë për redaktim nga ti**. Një skedar kyçjeje është krijuar në `.ccvault/locks`; askush tjetër nuk mund ta marrë këtë skedar për redaktim derisa ta regjistrosh.
3. Ndrysho modelin: lëviz një mur, shto një derë. Ruajtja refuzohet nëse modeli nuk është marrë për redaktim nga ti, dhe thotë pse; {{ui:Ruaj si}} punon gjithmonë për një kopje tënden.
4. Hap panelin, zgjidh {{ui:Regjistro}} dhe shkruaj çfarë ndryshoi (`Lëvizi derën`). Paneli thotë *u regjistrua si A.2*. Skedari në dosjen e projektit është tani modeli që kishe hapur, dhe kyçja është hequr. Regjistrimi pa ndryshim e mban rishikimin.

Nëse ndryshon mendje, {{ui:Zhbëj marrjen}} e kthen skedarin pa një rishikim të ri.

## 4. Shqyrtim dhe lëshim

1. Zgjidh {{ui:Dërgo për shqyrtim}}. Gjendja bëhet **Për shqyrtim** dhe skedari bëhet vetëm për lexim.
2. Para miratimit, zgjidh {{ui:Cilësimet e projektit}} dhe liste kush mund të miratojë (një emër për rresht), për shembull `Ben` dhe `Carla`, dhe shëno rregullin që miratuesi duhet të jetë dikush tjetër përveç autorit. Zgjidh {{ui:Ruaj cilësimet}}. Tani vetë depoja refuzon çdo tjetër.
3. Ben (ose Carla) zgjedh {{ui:Miratoje}} dhe shkruan emrin e miratuesit. Gjendja bëhet **Lëshuar** dhe rishikimi bëhet **A**, me *miratuar nga* dhe emrin. Një skedar i lëshuar është vetëm për lexim. {{ui:Ktheje}} do ta kthente në Në punë, me një arsye.

Emri i miratuesit është emri i shkruar në panel; është një regjistër se kush e firmosi, jo një provë identiteti.

## 5. Një rishikim i ri

1. Te skedari i lëshuar, zgjidh {{ui:Rishikim i ri}}. E mban për shkronjën e radhës.
2. Ndrysho, pastaj {{ui:Regjistro}}. Rishikimi është **B.1**, në punë. Lëshoje në të njëjtën mënyrë dhe bëhet **B**. {{ui:Zhbëj marrjen}} para regjistrimit të parë e lë në **A**.

Shkronjat e rishikimit ndjekin A, B … Z, AA, AB. Nëse standardi yt lë jashtë disa shkronja, cilësimi i projektit *Përdor sekuencën ASME Y14.35* kalon I, O, Q, S, X dhe Z për rishikimet e ardhshme.

## 6. Shiko çfarë ndodhi

Zgjidh emrin e skedarit për të hapur detajet e tij:

- **{{ui:Historiku}}**: çdo ngjarje, më e reja e para, me kush, cili kompjuter dhe kur: *Regjistroi A.2* nga Ana, *Lëshuar* nga Ben, e kështu me radhë.
- **{{ui:Rishikimet}}**: tabela e rishikimeve: çdo rishikim i mbajtur, me datën, kush e regjistroi, shënimin dhe kush e miratoi. Depoja mban një kopje të secilit në `.ccvault/revs`.
- **{{ui:Përdor}}**: dokumentet ku pikon një model IFC.
- **{{ui:Përdorur nga}}**: Përdorur nga liston çdo model në depo që tregon këtë skedar.

## Modelet që tregojnë dokumente të tjera

Një model IFC që tregon dokumente të tjera në dosje (vizatime, tabela) i shfaq te **Përdor**, dhe secili prej tyre shfaq modelin te **Përdorur nga**. Regjistro një dokument dhe mund të shohësh cilat modele i referohen.

## 7. Çfarë sheh Ben ndërsa ti e mban skedarin

Tani merr përsëri për redaktim skedarin, dhe kërkoji Ben të hapë të njëjtën dosje projekti në kompjuterin e tij dhe të hapë panelin. Në rreshtin e skedarit ai sheh **Marrë për redaktim nga Ana në** kompjuterin tënd **që** nga ora, dhe nuk ka buton {{ui:Merr për redaktim}}. Nëse provon megjithatë, depoja refuzon: kyçja është një skedar që sistemi nuk e krijon dy herë, kështu që dy persona nuk mund ta mbajnë skedarin as në të njëjtën pjesë sekonde, kur dosja është në disk në Studio. (Në një shfletues dosja lejon vetëm një përpjekje të mirë, dhe paneli e thotë këtë te **Dosja**.)

Nëse Ana është larg dhe Ben ka nevojë për skedarin, {{ui:Thyeje marrjen}} e liron. Ai duhet të shkruajë një arsye; shkon në regjistër me kë ishte marrja. Kur projekti liston administratorë, vetëm ata mund ta bëjnë. Një marrje më e vjetër se kufiri i vjetërsisë (14 ditë si parazgjedhje) shënohet *shumë kohë*. Pas thyerjes, regjistrimi i vonuar i Anës refuzohet, kështu që ju dy nuk mund ta mbishkruani njëri-tjetrin.

## 8. Dosjet cloud

Një dosje cloud është një dosje projekti e mbajtur në depozitën cloud të ekipit tuaj, kështu që ekipi nuk ka nevojë për disk të përbashkët. Në Studio, i kyçur në llogarinë tënde CadCraft, paneli shfaq {{ui:Hap një dosje cloud}} pranë {{ui:Zgjidh dosjen e projektit}}. Zgjidhe dhe zgjidh dosjen, e listuar si hapësirë pune / dosje. Pronari i hapësirës së punës e krijon dosjen së pari, dhe depozita cloud e ekipit duhet të jetë në fuqi. Gjithçka më sipër punon njësoj; serveri e krijon kyçjen, që është e rreptë mes personave. Nëse nuk je i kyçur, paneli të kërkon të hysh. Në një skedë të zakonshme shfletuesi butoni cloud nuk ofrohet; përdor Studio.

## Provoje

Bëj tetë hapat më sipër me një kopje të një skedari real. Për hapat me dy persona të nevojitet një person tjetër, ose dy dritare me dy emra. Nëse e provon me një dosje reale të përbashkët, faqja e testimit të komunitetit ka një kontroll që pyet pikërisht këtë, dhe pranon rezultatet.
