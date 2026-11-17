---
title: "Mustaqbalka cimilada: 2050 iyo 2080 daadad, kulayl iyo dab-baadi"
summary: Dib u socodsii daadadka, sannadka tamarta iyo hubinta dab-baadiga iyadoo cimilada mustaqbalka la adeegsanayo (qaababka SSP2-4.5 iyo SSP5-8.5, sannadaha 2050 iyo 2080) xirmo xog cimilo, oo lagu soo bandhigo isku dhinac hadda iyo mustaqbal.
keywords: cimilada, isbeddelka cimilada, mustaqbal, 2050, 2080, ssp, cmip6, qaab, heerka badda, daad, kulayl, faylka cimilada, epw, morph, energyplus, dab-baadi, dab, cimilada dabka
from: 224ecd08
---

Xogta cimilada waxa ka timid **xirmo xog**, ma aha app-ka. Ku shid add-on-ka {{ui:Mustaqbalka cimilada}} Dejinta › Add-ons, ama rar faylka xirmo aad leedahay block-ka {{ui:Mustaqbal cimilo}}.

:::warning
Xirmada ku timid add-on-ka waa **tijaabo**: saddex meelood (Denver, Miami, Johannesburg), hal qaab cimilo, iyo shan sannadood in kasta oo 20 sannadood ah. Waxa loogu talagalay isku dayidda qalabka, **ma aha naqshadeyn**. Panelku waxa uu taas ku sheegaa xarfo qaro ah markii la isticmaalayo. Xirmo buuxa (qaabab badan, sannadaha oo dhan, meelo badan) waxa lagu dhisaa `tools/climate/build-pack.mjs` iyadoo laga soo qaadayo xogta NASA NEX-GDDP-CMIP6.
:::

## Dooro mustaqbal

Dhinaca bidix ee panelka {{ui:Ciyaarinta khatarta}}, dooro **Scenario** (SSP2-4.5, dhexdhexaadka, ama SSP5-8.5, qiiqa sare) iyo **Year** (2050 waxa ay la macno tahay 2041-2060, 2080 waxa ay la macno tahay 2071-2090; labaduba waxay ka hor yimaadaan 1995-2014). **Place** waa meesha xirmada ugu dhow goobta moodelka (IfcSite latitude iyo longitude), ama midka aad dooratay. Meel kasta oo ka fog, isbeddelka celceliska adduunka ee xirmada ayaa la isticmaalaa oo panelku wuu sheegaa.

## Daad, hadda iyo mustaqbal isku dhinac

Scenario la doortay, deji **Flood type**: xeebta (wuxuu ku daraa kor u kaca heerka badda), webi ama roob culus (wuxuu ka dhigaa mid qoto dheer badan isbeddelka roobka maalinta ugu qoyan), ama labadaba. Riix Run: daadku wuu ciyaaraa sida hore, miis ayaa muujinaya daadka hadda iyo kan mustaqbalka isku dhinac (heerka biyaha, qolalka qoyaanka, biyaha ugu qoto-dheer). Male-ahaan qaybaha hoose ayaa lagu liistaa:

- heerka xeebta wuxuu kor u kacaa kor u kaca badda oo dhan; wamuuj iyo mawjadaha lama beddelo;
- socodka webiga wuxuu si la mid ah ugu kacaa roobka maalinta ugu qoyan, qotodheerkana wuxuu raacaa socodka ilaa xoogga 0.6 (sinaajiga Manning ee kanaal ballaaran);
- labada qaybood si fudud ayaa loo daraa.

## Kulayl: faylka cimilada mustaqbalka

Dooro nooca {{ui:Kulayl: faylka cimilada mustaqbalka}}, dooro fayl cimilo `.epw` oo hadda ah, kadibna riix {{ui:Samee faylka cimilada mustaqbalka}}. Faylka waxa **la morph-gareeyaa** bil bil iyadoo la adeegsanayo habka isbeddelka iyo kordhinta ee la daabacay (Belcher, Hacker and Powell 2005): celceliska bisha wuu kululaanayaa isbeddelka xirmada, galabta kulul wuxuu kululaanayaa isbeddelka heerka ugu kulul maalinta, habeenada qabowna wuxuu kululaanayaa isbeddelka heerka ugu hooseeya maalinta. Qoyaanka xigta wuxuu raacaa isbeddelka xirmada, dew point-na waa dib loo xisaabiyaa. Cadaadiska iyo dabaysha way sidii ay ahaayeen. Miiska wuxuu isbarbardhigaa celceliska iyo heerkulka ugu kulul, heerkulka naqshadeynta qabowga 0.4 % iyo kulaylka 99.6 %, saacadaha 30 °C iyo 35 °C, iyo degree-days.

{{ui:Kaydi faylka cimilada mustaqbalka}} wuu kaydiyaa; {{ui:Isticmaal hubinta tamarta}} wuxuu siinayaa hubinta EnergyPlus (tab-ka Energy). Faylka mustaqbalka waa isla sannadka cimilada caadiga ah, oo kulul: ma ku daro mowjado kulul oo cusub.

## Sannad tamarta, hadda iyo mustaqbal isku dhinac

Hubinta EnergyPlus ee tab-ka Energy (add-on u gaar ah oo leh engine-kaaga), dooro fayl cimilo oo hadda ah, kadibna scenario iyo sannad block-ka {{ui:Mustaqbal cimilo}}, oo riix {{ui:Samee sannad: hadda iyo mustaqbal}}: sannadku wuxuu ku socdaa faylka hadda iyo mustaqbalkiisa oo morph-gareeyay, kulaylka iyo qabowga qol kasta ayaa isku dhinac lagu liistaa.

## Dab-baadiga (screening keliya)

Dooro nooca {{ui:Dab-baadiga (screening keliya)}}: beerta ugu dhow, jiifka ka kor u kaca ilaa dhismaha, iyo masaafada ilaa beertaas. Natiijadu waa qaybta ka bilaabanta aad u hooseeya ilaa aad u sarreeya, hadda iyo mustaqbal.

:::warning
**Screening keliya.** Tani waa miisaankeenna nidaamka kaliya si loo ogaado in goob u baahan tahay qiimayn dab-baadi oo sax ah, ma aha qiimo qawaaniin ama bushfire attack level. Waxay isku dhufataa miisaan u eg beerta, factor jiifka (dabku wuxuu ku dhufanayaa xawaaraha ilaa laba jeer 10 darajo kasta oo kor u kacaysa, oo lagu tiriyo ilaa 20 darajo), factor masaafada (10 m oo loo qaybiyay masaafada, ugu badnaan 1) iyo isbeddelka xirmada ee fire-weather index-ka.
:::

## Xogta ka timid halkay

- **Heerkulka, qoyaanka, qorraxda, roobka, cimilada dabka:** NASA NEX-GDDP-CMIP6, natiijada modelka CMIP6 ee maalin kasta la yareeyay. Natiijada modelka kasta waxa ku jira CC BY 4.0. Isbeddelka cimilada dabka waa Canadian Fire Weather Index oo maalin kasta laga xisaabiyey cimilada modelka (qoyaanka maalinta halkii qoyaanka duhurka).
- **Kor u kaca heerka badda:** celceliska adduunka ee IPCC AR6 (ma aha meel gaar ah; dhulka kor u kaca ama hoos u dhacaya kuma jiro), ilaa xirmo ay leedahay xog meel gaar ah.
- Xirmadu waxay magacaabaysaa isha, liisanka iyo taariikhda; panelku wuu muujiyaa.
