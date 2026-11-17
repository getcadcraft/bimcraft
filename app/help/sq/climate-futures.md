---
title: "Skenarë klimatikë: përmbytje, nxehtësi dhe zjarr pyjor në 2050 dhe 2080"
summary: Ekzekutoni përsëri përmbytjen, vitin energjetik dhe një ekran paraprak të zjarrit pyjor me klimën e ardhshme (skenarët SSP2-4.5 dhe SSP5-8.5, vitet 2050 dhe 2080) nga një paketë të dhënash klimatike, e paraqitur krah së tashmes.
keywords: klimë, ndryshim klimatik, e ardhme, 2050, 2080, ssp, cmip6, skenar, nivel deti, përmbytje, nxehtësi, skedar moti, epw, morph, energyplus, zjarr pyjor, zjarr, moti i zjarrit
from: 224ecd08
---

Të dhënat klimatike vijnë nga një **paketë të dhënash**, jo nga aplikacioni. Aktivizoni shtesën {{ui:Climate futures}} te Cilësimet › Shtesat, ose ngarkoni një skedar paketë të vetin te blloku {{ui:Climate future}}.

:::warning
Paketa që vjen me shtesën është një **mostër**: tre vende (Denver, Miami, Johannesburg), një model klime, pesë vite në çdo periudhë 20-vjeçare. Është aty për të provuar veglat, **jo për projektim**. Paneli e thotë këtë me shkronja të trasha kur është në përdorim. Një paketë e plotë (shumë modele, të gjitha vitet, më shumë vende) ndërtohet me `tools/climate/build-pack.mjs` nga të dhënat NEX-GDDP-CMIP6 të NASA-s.
:::

## Zgjidhni një të ardhme

Te {{ui:Hazard playback}} në panelin e majtë, zgjidhni një **Skenar** (SSP2-4.5, rruga e mesme, ose SSP5-8.5, emetime të larta) dhe një **Vit** (2050 do të thotë 2041-2060, 2080 do të thotë 2071-2090; të dyja krahasuar me 1995-2014). **Vendi** është vendi i paketës më të afërt me vendndodhjen e modelit (gjerësia dhe gjatësia gjeografike e IfcSite), ose ai që zgjidhni ju. Shumë larg çdo vendi, përdoren ndryshimet mesatare globale të paketës dhe paneli e thotë këtë.

## Përmbytja, e tashmja krah së ardhmes

Me një skenar të zgjedhur, vendosni **Llojin e përmbytjes**: bregdetare (shton ngritjen e nivelit të detit), lumore ose shi i rëndë (më e thellë me ndryshimin e shiut të ditës më të lagësht), ose të dyja. Shtypni **Nis**: përmbytja luhet si më parë, dhe një tabelë paraqet përmbytjen e tashme dhe atë të ardhme krah për krah (niveli i ujit, dhomat që lagen, uji më i thellë). Supozimet listohen nën të:

- një nivel bregdetar ngrihet me gjithë ngritjen e nivelit të detit; ngritja e stuhisë dhe valët nuk ndryshohen;
- rrjedha e lumit rritet një me një me shiun e ditës më të lagësht, dhe thellësia ndjek rrjedhën në fuqinë 0.6 (ekuacioni i Manning për kanal të gjerë);
- dy pjesët thjesht mblidhen.

## Nxehtësia: një skedar i ardhshëm moti

Zgjidhni llojin {{ui:Heat: future weather file}}, zgjidhni një skedar moti `.epw` të ditëve të sotme dhe shtypni {{ui:Make the future weather file}}. Skedari **morfohet** muaj pas muaji me metodën e publikuar të zhvendosjes dhe shtrirjes (Belcher, Hacker dhe Powell 2005): mesatarja e muajit ngrohet me ndryshimin e paketës, pasditet e nxehta me ndryshimin e maksimumit ditor, dhe netët e ftohta me ndryshimin e minimumit ditor; lagështia relative lëviz me ndryshimin e paketës dhe pika e vesës llogaritet përsëri. Presioni dhe era mbeten ashtu si ishin. Tabela krahason temperaturat mesatare dhe më të larta, temperaturat e projektimit 0.4 % për ftohje dhe 99.6 % për ngrohje, orët në 30 °C dhe 35 °C, dhe ditët-shkallë.

{{ui:Save the future weather file}} e ruan; {{ui:Use it in the energy check}} ia jep kontrollit EnergyPlus (skeda Energjia). Skedari i ardhshëm është i njëjti vit tipik, më i ngrohtë: nuk shton valë të reja nxehtësie.

## Viti energjetik, i tashmi krah së ardhmes

Në kontrollin EnergyPlus të skedës Energjia (një shtesë e vetme, me motorin tuaj), zgjidhni një skedar moti të tashëm, pastaj një skenar dhe një vit te blloku {{ui:Climate future}}, dhe shtypni **Simulo një vit: i tashmi dhe i ardhmi**: viti llogaritet mbi skedarin e tashëm dhe mbi të ardhmen e tij të morfuar, dhe ngrohja dhe ftohja e çdo dhome listohen krah për krah.

## Ekspozimi ndaj zjarrit pyjor (vetëm paraprak)

Zgjidhni llojin {{ui:Wildfire exposure (screening only)}}: bimësia më e afërt, pjerrësia lart nga ajo deri te ndërtesa dhe distanca deri te ajo. Rezultati është një brez nga shumë i ulët deri në ekstrem, i tashëm dhe i ardhshëm.

:::warning
**Vetëm paraprak.** Kjo është shkalla jonë relative për të thënë nëse një vend ka nevojë për një vlerësim të duhur të zjarrit pyjor, jo një vlerësim kodi ose një nivel sulmi zjarri pyjor. Shumëzon një peshë për bimësinë, një faktor pjerrësie (zjarri pothuajse dyfishon shpejtësinë për çdo 10 gradë lart, numëruar deri në 20 gradë), një faktor distance (10 m të pjesëtuara me distancën, më së shumti 1) dhe ndryshimin e paketës në indeksin e motit të zjarrit.
:::

## Nga vijnë numrat

- **Temperatura, lagështia, dielli, shiu, moti i zjarrit:** NASA NEX-GDDP-CMIP6, rezultate ditore të modeleve CMIP6 të zbritura në shkallë. Rezultati i çdo modeli është sipas CC BY 4.0. Ndryshimi i motit të zjarrit është Indeksi Kanadez i Motit të Zjarrit, i llogaritur ditë për ditë nga moti i modelit (me lagështi ditore në vend të lagështisë së mesditës).
- **Ngritja e nivelit të detit:** mesatarja globale IPCC AR6 (jo lokale; ngritja ose ulja e tokës nuk është brenda saj), përveç nëse një paketë mban shifra lokale.
- Paketa emëron burimin, licencën dhe datën e vet; paneli i shfaq ato.
