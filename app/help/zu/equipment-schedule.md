---
title: Yakha uhlu lwezinsiza uphinde ulande i-CSV
summary: Guqula amathegi ezinto emdwebeni wokudla ube uhlu lwezinsiza, uhlunge, uye kwesinye ngasinye ishidini lakhe, bese ulanda kube yi-CSV.
keywords: izinsiza, uhlu, ukudla, ikhishi, amathegi ezinto, kcl, izici, bom, uhlu lwezinto ezidingekayo, csv, ishidi lezibalo, ukuthumela, ukukhipha idatha
from: e3faa1c8
---

## Okuzokwenza

Funda uhlu lwezinsiza kumdwebo wekhishi noma wokudla, uluhlole, uthole isinto ngasinye kupulani, bese ulanda njengefayela le-spreadsheet.

Lokhu kusebenza kumidwebo lapho amathegi ezinsiza ephethe idatha yawo njengezici zebhulokhi, njengoba kwenza amalabhulari okuklama amakhishi afana ne-KCL: ithegi ngayinye iphethe inombolo yento (`KCL-ITEM`), inani, isigaba, umkhiqizi, imodeli, idatha yoge namanzi, nezimvumelo. Eminye imidwebo ayinayo ithebhu ethi {{ui:Equipment}}.

## Izinyathelo

1. Vula umdwebo, ngokuvamile usuka kwifolda yephrojekthi ukuze nemidwebo exhunyiwe ilayishwe.
2. Chofoza ithebhu ethi {{ui:Equipment}} ngaphezulu komdwebo. Ilebula yayo ikhombisa ukuthi zingaki izinto ezisemashidini, njengokuthi "Equipment (88)".
3. Funda uhlu: **Item**, **Qty**, **Equipment**, **Manufacturer**, **Model**, **Electrical**, **Plumbing** kanye **Where**.
4. Khetha okuzohlwanyelwa kwimenyu ngaphezulu kwethebula: **Zonke izishidi**, ishidi elilodwa, **Akekho ishidi**, noma **Konke okuthegiwe emdwebeni**. Ngayinye ikhombisa inani layo.
5. Bhala kubhokisi lokuhlunga ("Filter: category, maker, model…") ukuze unciphise uhlu, njengokuthi `refrigerator` noma `208`.
6. Chofoza igama leshidi lesinto ekholomini ethi **Where**.
7. Bheka umdwebo: i-BimCraft ishintshela kuleshidi, izoomela kusinto bese idweba indilinga ozungeze yona. Umugqa wesimo uthi "Item *n*, *category* is ringed on *sheet*."
8. Chofoza {{ui:Equipment}} ukuze ubuyele kuhlu.
9. Chofoza {{ui:Download CSV}}.

## Okufanele ukubone

- Ifayela elithi "*igama lomdwebo* equipment.csv" (negama leshidi ephakathi kwamabhulaketi uma uhlu lwelishidi elilodwa) kufolda yakho yokulanda. Livulwa ku-Excel, Numbers, LibreOffice noma Google Sheets.
- Umugqa wesimo: "Ulandiwe *igama lefayela* (*n* izinto)."

I-CSV inamakholomu: Item, Qty, Category, Manufacturer, Model, Electrical, Plumbing, Remarks, Electrical remarks, Plumbing remarks, Sheets, Placed (amathegi amangaki). Ilanda kuphela imigqa ethi ethebula, ngemva kwemenyu nokuhlunga.

## Ukwakhiwa kohlu

- Lufundwa kusuka **kumathegi ngokwawo**, hhayi kuthebula lohlu elidwetshwe kushidi. Inothi ngaphezulu kwethebula likhomba amathegi angaki afundwe.
- Umugqa owodwa ungunombolo eyodwa yento nesethi eyodwa yedatha. Inani lawo yi-**sum** yamathegi awo, njengoba uhlu oluphrintiwe luyibala: amashelufu athegwe "5" endaweni eyodwa nowathi "3" kwenye ayi-8, akhonjiswe njengo "5 + 3".
- **Where** ibala amashidi abonisa ngayinye into, ngokusekelwe kokubonakala ezibonelweni zeshidi, okuphrintwayo. "Model only" kusho ukuthi akukho shidi elibonisa lokho.
- **Number used twice** ibhala inombolo yento eyodwa ezinhlobonhlobo ezimbili ezihlukene zezinsiza. Umugqa unophawu lwe-amber.
- Amathegi angabonakali kunoma iliphi ishidi agcinwa ehlukaniswe ngaphansi kwe-**Not on any sheet**. Ngokuvamile asala emipulanini yangaphambili noma emisebenzini yezinye izinhlelo, futhi awaxutshwa ne-**Zonke izishidi**.
- **Electrical** ikhombisa ama-amp, ama-kW, i-HP, ama-volt, isigaba, ukuxhumeka nephlagi njengoba kuthegiwe. **Plumbing** ikhombisa usayizi wokuxhumeka: CW amanzi abandayo, HW amanzi ashisayo, DD ukukhipha okuqondile, ID ukukhipha okungaqondile, negesi. Ezinye izinkambu zethegi azikakabonakali.

## Izinkinga ezivamile

- **Akukho ithebhu ethi {{ui:Equipment}}.** Umdwebo awunawo amathegi e-`KCL-ITEM`, noma izinsiza zawo zidwetshwe ngaphandle kwedatha. Akukho okufundwayo.
- **Amanani ahlukile kohlu oluphrintiwe.** Uhlu oluphrintiwe lungadlula izinombolo ezingasetshenziswa noma lusebenzise amagama amafushane kunamathegi. Themba amathegi ngokuthi yini ebekiwe; hlola umehluko nomklami.
- **Ukuvula i-CSV kukhombisa izinhlamvu ezingavamile.** Ifayela lingu-UTF-8. Liyovula ngomyalo wokungenisa wesipredishithi bese ukhetha UTF-8 uma uhlelo lukubuza.
- **Iseli iqala ngophawu lwe-apostrophe.** Amanani aqala nge-`=`, `+`, `-` noma `@` athola i-`'` ephambili ukuze izipredishithi zingawasebenzisi njengamafomula.
- **{{key:F}} no-{{key:P}} azisebenzi.** Asebenza emdwebeni, hhayi kuhlu. Chofoza ithebhu yeshidi kuqala.
