---
title: Hlola izakhi zekhonkrithi nenza imithwalo yokuzamazama
summary: Setha izinduku zamabhimu ekhonkrithi nezinsika zemodeli evulekile, uzihlole ngokwe-ACI 318-19, wenze amandla ansundu alinganayo ngokwe-ASCE 7-22 emasiteji aqinile, bese ubona ukuhamba kwesitezi. Isisiza umnjiniyela ukuthi ahlole.
keywords: ikhonkrithi, reinforced concrete, ACI 318, ACI 318-19, rebar, beam, column, shear, ties, seismic, earthquake, equivalent lateral force, ELF, ASCE 7-22, drift, storey drift, floors, rigid diaphragm, story weight, utilisation, structural, engineer, analysis
from: 2f342e72
---

Amabhlogo {{ui:Izakhi zekhonkrithi}} no {{ui:Imithwalo yokuzamazama}} ethebhu {{ui:Ukuhlaziya}} ahlola amabhimu nezinsika zekhonkrithi ye-IFC evulekile, futhi enza amandla okuzamazama aqondile emaphansini wesakhiwo sayo. Ngamabhlogo afanayo ne-DetailCraft, asebenza ngemva kokuhlaziya kwethebhu {{ui:Ukuhlaziya}}, futhi agcinwa ku-IFC ndawonye nezinye izilungiselelo zokuhlaziya.

:::warning
Imiphumela **yokuhlolwa umnjiniyela**: isisiza kuze kube yilapho enye yabonwa. Ukuhlolwa kwekhonkrithi kusebenzisa amandla e-first-order (insika esakhiweni esingeyona i-sway iklanywa ngomzwango wayo okhuliswe), ngaphandle kokukhulisa i-sway, ngaphandle kokuklanywa kwe-torsion, ngaphandle kwemininingwane yokuzamazama (isahluko 18 se-ACI) nangaphandle kwemininingwane yama-tie. Imithwalo yokuzamazama ishiya ngaphandle isici sokuvikela okuphindiwe, umphumela wokuzamazama ovundlile, ukukhuliswa kwe-torsion kanye nemiphumela ye-P-delta. **Imithwalo yomoya ayikakhiwe**: izahluko zomoya zomqondo azikho ezikhasini lezinkomba zephrojekthi.
:::

## BimCraft ifunda ini

Ukuhlaziya kufunda amabhimu, izinsika nezinduku zemodeli, ngephrofayili zazo (bona [Hlaziya uhlaka lwesakhiwo](topic:frame-analysis)). Ibhlogo {{ui:Izakhi zekhonkrithi}} idwala zonke izigaba ezisetshenziswa. Cindezela {{ui:Setha njengekhonkrithi…}} esigabeni esiyikhonkrithi: BimCraft ithatha uhlaka ngendawo nokuqina kwephrofayili (ububanzi b nokujula h ongakushintsha), ngakho isigaba esingasondelani nohlaka (isimo sensimbi esigoqiwe) sinika usayizi okufanele ulungise, noma sishiywe.

Isigaba esisethelwe njengekhonkrithi, nanoma yisiphi isakhi esinento ebizwa ngokuthi yikhonkrithi, sihlaziywa njengekhonkrithi: E = 4700 √f′c, 2400 kg/m³, futhi ngokuzenzakalelayo ngezigaba **ezigqekiwe** (izinsika 0.70 Ig, amabhimu 0.35 Ig; ACI 318-19 Table 6.6.3.1.1(a)). Khetha {{ui:Izigaba eziphelele}} ukuze uyivale. Ngaphandle kwalezi zilungiselelo imodeli ihlaziywa njengakuqala.

## Izinduku, izinhlanganisela, ukuhlola

Nikeza ukumboza, izinduku ezingaphezulu, ezingaphansi nezohlangothi (noma ikheji yensimbi yensika) kanye namaxhuku wesigaba ngasinye, bese usetha f′c, fy, fyt, K kanye ne-sway noma i-non-sway. Nikeza amacala womthwalo uhlobo lwawo, cindezela {{ui:Dala izinhlanganisela}} (ASCE 7 §5.3.1) bese {{ui:Hlola ikhonkrithi}}: isakhi ngasinye sithola ukusetshenziswa, sidwetshwe emodelini. Izakhi ezedlule amandla, nokuhamba kwesitezi okudlule umkhawulo wakho, zishiwo ku-{{ui:Izinkinga}} ngesigatshana sazo; chofoza enye ukuze ukhethe isakhi.

## Amaphansi namandla okuzamazama

Ebhlogweni {{ui:Imithwalo yokuzamazama}}, {{ui:Thola amaphansi}} uthatha amazinga lapho amabhimu amabili noma ngaphezulu ehlangana; ngalinye liba yidayaframu eqinile. {{ui:Thatha izisindo emacaleni}} ifunda isisindo sokuzamazama sephansi ngalinye emacaleni onika isici kuwo. Gcwalisa i-SDS, SD1, S1, R, Ie, Cd, TL, uhlelo kanye nesigaba sengozi, bese {{ui:Yenza amacala okuzamazama}} (ASCE 7-22 12.8: isikhathi, isisekelo sokunyakaza, ukusatshalaliswa phezu kwamaphansi, 5 % ukuphambuka okungazelelwe ngokuzenzakalelayo). Amandla esitezi nokuhlolwa kokuhamba kwesitezi (12.12) kuvela ngemva kokusebenza. Isikhathi esifanayo nokuqina kwesitezi kudla okuzamazama kwe-[Dlala ukugeleza, umoya noma ukuzamazama](topic:hazard-playback) uma ukhetha uhlaka lokuhlaziya njengomthombo wakho.

Amasilabhu nodonga lwekhonkrithi aba ama-plate ekuhlaziyeni, nebhlogo {{ui:Ukuqinisa kwesilabhu}} lisebenza ngensimbi edingekayo ngemitha ngayinye. Imininingwane yalokho kuhlolwa yonke ikhona kwitopiki ye-DetailCraft ngegama elifanayo.
