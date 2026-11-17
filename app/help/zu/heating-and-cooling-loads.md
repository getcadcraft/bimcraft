---
title: Linganisa izidingo zokushisa nokupholisa
summary: Ukulahlekelwa kukashisa kwegumbi ngalinye, ukushisa konyaka ngamasosha ezinsuku nesikhathi sokupholisa esiphezulu, kusuka kokuthi lingamelwe yini emodelini nakwi-U-value yento ngayinye, nazo zonke izigaba zokufaka zibonakala. Iyinsiza yokuklama, hhayi ukubala okuhambisana nemithetho.
keywords: amandla, ukushisa, ukupholisa, ukulahlekelwa kukashisa, isidingo sokushisa, isidingo sokupholisa, u-value, ukudluliswa kukashisa, amasosha ezinsuku, hdd, ukuvuthwa komoya, izinguquko zomoya ngehora, ukushisa kwangaphakathi, ukushisa kwelanga, lambda, ukuqhuba, ukugoqwa, ukuklama kuqala, ukuhlaziya, amagumbi, izindawo
from: ec312d20
---

Kuthebhu ethi {{ui:Daylight}}, ngemva kwe-{{ui:Calculate}}, vula {{ui:Heating and cooling loads}} bese uchofoza {{ui:Work out the loads}}. Igumbi ngalinye lithola **ukulahlekelwa kukashisa** losuku olubandayo lokuklama, **ukushisa konyaka** kanye **nesikhathi sokupholisa esiphezulu** ngosuku olushisayo. Akukho okulayishwa; akukho okushintshwa emodelini ngaphandle kokuthi uthayipha i-U-value.

:::warning
Lena **yinsiza yokuklama, hhayi ukubala okuhambisana nemithetho**: isilinganiso esizinzile nezigaba zonke ezibonakala esikrinini. **Akuyona** indlela ye-ISO 52016-1, akuyona ukulingisa, futhi akuyona isitifiketi samandla; ayilinganisi amabhoyila, ama-heat pump noma ama-chiller. Hlola imiphumela, futhi ulinganise izinto nonjiniyela.
:::

## Yini elingamele igumbi ngalinye

I-BimCraft iyithola emodelini qobo, ngakho i-IFC yanoma iyiphi inhlelo isebenza (ayidingi imingcele yezindawo ezinye izinhlelo ezizithumelayo). Kuyo yonke ingxenye yendawo yegumbi ngalinye ibheka ngqo phandle:

- ushintsho lokuqala, iwindi, umnyango, ifloor, uphahla, isigubekeli, ukugoqa kwekhethini noma ibhimu alihlangabezanayo **limelela** lowo mucu;
- ngemva kwalowo mbandela, noma **elinye igumbi** (libalwe njengelingakende, ngokushisa okufanayo: akukho ukulahlekelwa), **akukho lutho** (ngaphandle), noma, ngaphansi kwefloor esitezini esiphansi kakhulu, **umhlabathi**;
- umnyango ovulekile oya kwelinye igumbi ubalwa njengongakende; ingxenye engahlangabezani nalutho (ngaphakathi kwe-1.5 m ngasohlangothini noma ngaphansi, ne-8 m ngaphezulu) ihlinzwa phansi kwegumbi ibe ayibalwa.

Amawindi nemisuka ithatha usayizi wayo kwi-IFC (ububanzi bonke × ubude) kusuka kudonga okuhlezi kulo. Chofoza igumbi ethebhuleni ukuze ubone yonke into elivalayo ngendawo yayo, i-U-value yayo nokuthi i-U-value yavela kuphi.

## U-values

Ngento ngayinye i-BimCraft isebenzisa, kuleli odlweni:

1. **I-U-value yesi-IFC ngokwayo** — i-`ThermalTransmittance` esethini levo ejwayelekile yezici (isibonelo `Pset_WallCommon`) noma kuhlobo lwayo. Izinhlelo eziningi zokuklama zingayibhala.
2. **Izendlalelo zayo zezinto** — 1 ÷ (ukumelana komphezulu wangaphakathi + ubukhulu ngalunye ÷ ukuqhuba kwalo λ + ukumelana komphezulu wangaphandle), nokumelana okujwayelekile komphezulu (0.13 kanye 0.04 m²K/W kumadonga; 0.10 phezulu kanye 0.17 phansi ngaphakathi). Ukuqhuba okujwayelekile ukuqala ngakho (i-mineral wool 0.035, ibhurikhi 0.77, ukhonkolo 1.4…); ngaphansi kwe-{{ui:Ukuqhuba kwezinto zokwakha}} thayipha eyomkhiqizi, futhi zonke ii-U-value ezivela kulezo zendlalelo ziyalandela.
3. **Inani elijwayelekile** (amadonga 0.3, uphahla 0.2, ama-floor 0.25, amawindi 1.4, iminyango 1.6 W/m²K), libonakaliswa njengalo — thayipha eyakho.

I-U-value othayipha ekuthinteni kwegumbi ibhalwa esethini levo ejwayelekile yezici njenge-`ThermalTransmittance` (isinyathelo esisodwa; {{key:Mod+Z}} iyasihlehlisa). Uma izinto eziningi zabelana ngalo sethi (uhlobo olulodwa lodonga, isibonelo), zonke ziyashintsha ndawonye, nomugqa wesimo uthi zingaki.

## Ukushisa

- **Ukulahlekelwa kukashisa** = Σ U × A × (ngaphakathi − ngaphandle) kukho konke okuphandle + Σ U × A × (ngaphakathi − umhlabathi) kuma-floor asemhlabathini + 0.335 × izinguquko zomoya ngehora × ivolumu yegumbi × (ngaphakathi − ngaphandle). Ama-0.335 Wh ngelinye imitha yevolumu ngelinye ledigri lika-kelvin amelwe ukuthi ukuminyana komoya (1.2 kg/m³) kuphindwe ngamandla awo okushisa (1005 J/kgK).
- **Ukushisa konyaka** = (ukulahlekelwa kwegumbi ngedigri ngayinye phandle, ngokusebenzisa isakhiwo nomoya, kanye nokulahlekelwa kwalo emhlabathini okulinganiswe ngomehluko ofanayo) × **amasosha ezinsuku** × 24 ÷ 1000, ku-kWh. Thayipha amasosha ezinsuku endawo, noma {{ui:Read degree-days from a CSV…}} (umugqa owodwa ngosuku noma ngenyanga; inombolo yokugcina kuyo yonke imigqa iyengezwa). Sebenzisa amasosha ezinsuku ngezinga lokushisa lesisekelo umthombo wakho owasebenzisayo: lesi sisekelo sesivele sihlanganisa ukushisa mahhala kubantu, kumalambu nakulanga.

## Ukupholisa

**Isikhathi sokupholisa esiphezulu** = ukushisa okudlula esakhiweni nomoya ekushiseni kwehlobo lokuklama + abantu (indawo ngomuntu × ukushisa ngomuntu) + ukukhanya nezinto zikagesi ngemitha yesikwele yendawo + **ilanga**: isikhathi esiphezulu se-{{ui:Sun through the windows on a date}} salelo gumbi. Bala ilanga kuqala, ngosuku oshisayo; kuze kube yilapho, ilanga libalwa njengo-0 futhi isigaba siyasho lokho. Izikhathi eziphezulu zengxenye ngayinye zifakwa ndawonye nakuba zingawela ngamahora ahlukene, okweqisa kancane.

## Okushiywa yiyo

- Izindlela zesikhathi ze-ISO 52016-1 zangenyanga nangehora (isitandade esikhokhelwayo), ukushisa okugcinwe ngobukhulu besakhiwo, izixhumanisi zokushisa, ukusebenza kwezinhlelo zokushisa nokupholisa, namafayela wesimo sezulu.
- Izindawo ezihlanganayo zithathwa ngokushisa okufanayo; izindawo ezingashisiwe azenziwa njengemodeli.

Bona futhi [Linganisa ukukhanya kosuku kuleligumbi ngalinye](topic:daylight-factor).
