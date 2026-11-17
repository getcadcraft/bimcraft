---
title: Kadiria mizigo ya joto na upoezaji
summary: Upotevu wa joto wa kila chumba, joto lake kwa mwaka kwa siku-digrii na kilele chake cha upoezaji, kutoka kinachokifunga kwenye modeli na U-value ya kila kipengele, huku kila pembejeo ikionyeshwa. Ni msaada wa usanifu, si hesabu ya kufuata kanuni.
keywords: nishati, joto, upoezaji, upotevu wa joto, mzigo wa joto, mzigo wa upoezaji, u-value, upitishaji wa joto, siku-digrii, hdd, uingizaji hewa, mabadiliko ya hewa, faida za ndani, faida ya jua, lambda, upitishaji, insulation, usanifu wa awali, uchambuzi, vyumba, nafasi
from: ec312d20
---

Kwenye kichupo cha {{ui:Daylight}}, baada ya {{ui:Calculate}}, fungua {{ui:Heating and cooling loads}} kisha ubofye {{ui:Work out the loads}}. Kila chumba kinapata **upotevu wake wa joto** siku ya baridi ya usanifu, **joto lake kwa mwaka** na **kilele chake cha upoezaji** siku ya joto. Hakuna kinachopakiwa; hakuna kinachobadilika kwenye modeli isipokuwa uandike U-value.

:::warning
Hii ni **msaada wa usanifu, si hesabu ya kufuata kanuni**: makadirio ya hali thabiti yenye kila pembejeo kwenye skrini. **Si** mbinu ya ISO 52016-1, si uigaji wala cheti cha nishati; haipimi boilers, pampu za joto wala chillers. Kagua matokeo, na pima vifaa, pamoja na mhandisi.
:::

## Kinachofunga kila chumba

BimCraft inakipata ndani ya modeli yenyewe, kwa hiyo IFC ya programu yoyote inafanya kazi (haihitaji mipaka ya nafasi ambayo baadhi ya programu zinasafirisha). Kutoka kila kipande cha uso wa chumba, inatazama moja kwa moja nje:

- ukuta, dirisha, mlango, sakafu, paa, kifuniko, ukuta wa pazia au boriti wa kwanza unaokutana nao **unafunga** kipande hicho;
- mara tu baada ya kipengele hicho, ama **chumba kingine** (kinahesabiwa kama jirani, kwenye joto lilelile: hakuna upotevu), **hakuna kitu** (nje), au, chini ya sakafu kwenye kiwango cha chini kabisa, **ardhi**;
- mlango wazi unaoingia chumba kingine unahesabiwa kama jirani; kipande kisichokutana na chochote (ndani ya mita 1.5 kando au chini, mita 8 juu) kinaorodheshwa chini ya chumba na kinaachwa.

Madirisha na milango inachukua ukubwa wake kutoka IFC (upana wote × kimo) kutoka ukuta inamokaa. Bofya chumba kwenye jedwali ili uone kila kipengele kinachokifunga pamoja na eneo lake, U-value yake na mahali U-value ilipotoka.

## U-values

Kwa kila kipengele ambacho BimCraft inatumia, kwa mpangilio huu:

1. **U-value ya IFC yenyewe** — `ThermalTransmittance` kwenye seti ya kawaida ya sifa ya kipengele (kwa mfano `Pset_WallCommon`) au ya aina yake. Programu nyingi za usanifu zinaweza kuiandika.
2. **Tabaka zake za nyenzo** — 1 ÷ (upinzani wa uso wa ndani + unene wa kila tabaka ÷ upitishaji wake λ + upinzani wa uso wa nje), pamoja na upinzani wa kawaida wa uso (0.13 na 0.04 m²K/W kwa kuta; 0.10 juu, 0.17 chini ndani). Upitishaji wa kuanzia wa kawaida (pamba ya madini 0.035, tofali 0.77, zege 1.4…); chini ya {{ui:Materials' conductivity}} andika ule wa mtengenezaji, na kila U-value inayotokana na tabaka hizo inafuata.
3. **Thamani ya kawaida** (kuta 0.3, paa 0.2, sakafu 0.25, madirisha 1.4, milango 1.6 W/m²K), iliyowekwa alama kama hivyo — andika yako.

U-value uliyoandika kwenye maelezo ya chumba inaandikwa kwenye seti ya kawaida ya sifa ya kipengele kama `ThermalTransmittance` (hatua moja; {{key:Mod+Z}} inaitengua). Ikiwa vipengele kadhaa vinashiriki seti hiyo (aina moja ya ukuta, kwa mfano), vyote vinabadilika pamoja, na mstari wa hali unasema vingapi.

## Joto

- **Upotevu wa joto** = Σ U × A × (ndani − nje) kwa kila kinachotoka nje + Σ U × A × (ndani − ardhi) kwa sakafu zilizo ardhini + 0.335 × mabadiliko ya hewa kwa saa × ujazo wa chumba × (ndani − nje). 0.335 Wh kwa m³ kwa kelvin ni uzito wa hewa (1.2 kg/m³) mara uwezo wake wa joto (1005 J/kgK).
- **Joto kwa mwaka** = (upotevu wa chumba kwa digrii kuelekea nje, kupitia muundo na hewa, pamoja na upotevu wake wa ardhi uliopimwa kwa tofauti ileile) × **siku-digrii** × 24 ÷ 1000, kwa kWh. Andika siku-digrii za mahali hapo, au {{ui:Read degree-days from a CSV…}} (safu moja kwa kila siku au mwezi; nambari ya mwisho kwenye kila safu inajumlishwa). Tumia siku-digrii za joto la msingi ambalo chanzo chako kinatumia: msingi huo tayari unahesabu joto la bure la watu, taa na jua.

## Upoezaji

**Kilele cha upoezaji** = joto linalopitia muundo na hewa kwenye joto la usanifu wa kiangazi + watu (eneo kwa kila mtu × joto kwa kila mtu) + taa na vifaa kwa kila m² ya sakafu + **jua**: kilele cha {{ui:Sun through the windows on a date}} kwa chumba hicho. Hesabu jua kwanza, siku ya joto; hadi hapo jua linahesabiwa 0 na sehemu inasema hivyo. Kilele cha kila sehemu kinajumlishwa hata zikitokea saa tofauti, jambo linalozidisha kidogo.

## Kinachoachwa

- Mbinu za ISO 52016-1 za kila mwezi na kila saa (kiwango cha kulipia), joto lililohifadhiwa kwenye wingi wa jengo, madaraja ya joto, utendaji wa mifumo ya joto na upoezaji, na faili za hali ya hewa.
- Vyumba vinavyogusana vinachukuliwa kuwa kwenye joto lilelile; nafasi zisizo na joto hazijaigwa.

Angalia pia [Kadiria mwanga wa mchana kwa kila chumba](topic:daylight-factor).
