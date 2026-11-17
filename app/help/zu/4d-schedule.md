---
title: Dlala uhlelo lokwakha emodelini
summary: Vula uhlu lomsebenzi njenge-CSV, xhumanisa umsebenzi ngamunye ezintweni ngempahla ethile, bese uhamba phakathi kwamadethi ukuze ubone okusekwakhiwe, okusaqhubeka nokungakaqali.
keywords: 4d, uhlelo, ukulandelana kokwakha, isikhathi, ukwahlukanisa izigaba, uhlelo lwesikhathi, phasing, programme, gantt, imisebenzi, amadethi, ukulingisa, inqubekela phambili, kwakhiwe, csv, isigaba, isigaba sokwakha, iphakheji lomsebenzi, wbs, iqembu
from: 1b985a64
---

## Okuzokwenza

Bheka isakhiwo sikhula: umsebenzi ngamunye ohlelweni lwakho uxhunywe ezintweni ezizowakha, ubonakale ngosuku ngalunye.

## Izinyathelo

1. Vula imodeli ye-IFC bese uvula {{ui:4D schedule}} kwiphaneli eselwakhohlangothi.
2. Chofoza {{ui:Download a template}} ukuze uthole uhlu lomsebenzi onesonto ngesitezi ngasinye, bese uyaliguqula ku-spreadsheet. Noma bhala owakho.
3. Chofoza {{ui:Open a task list…}} bese ukhetha i-CSV.
4. Hudula isilayidi sedethi, noma chofoza {{ui:Play}}.

## Uhlu lomsebenzi

I-CSV enomugqa wekhanda nezikholomu **Task**, **Start**, **Finish**, **Field** and **Value**. Amakhoma noma amasemikholoni kokubili kuyasebenza.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Bhala amadethi njenge-YYYY-MM-DD.
- Umugqa ngamunye uxhumanisa umsebenzi nazo zonke izinto ezinensimu **Field** enenani **Value** elifanayo ngokuphelele. Insimu iyipharamitha efana ne-Storey, Class, Name, Type, Material, Tag noma GlobalId, noma noma yiyiphi ipharamitha ebhalwe ngesethi negama layo: `Pset_WallCommon.FireRating`.
- Phinda umsebenzi emigqeni eminingi, ngamadethi afanayo, ukuze uxhumanise izinto eziningi kuwo.

## Izigaba namaphakheji womsebenzi

Engeza ikholomu **Stage**, ikholomu **Package**, noma zombili, ukuze uqoqe imisebenzi ibe izigaba namaphakheji womsebenzi. I-Phase ne-WBS nazo zisebenza njengamagama amakholomu.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- Umsebenzi owodwa ungena esigabeni esisodwa nakuphakheji elilodwa. Uma umugqa olandelayo walo msebenzi ubiza enye, lowo mugqa ubhalwa ngenombolo yomugqa wawo bese uyakhishwa.
- Igama lephakheji elifanayo ezigabeni ezimbili ngamaphakheji amabili.

Uma uhlu lunamaqembu, uhlu {{ui:Show}} luvela phezu kwedethi. Khetha isigaba noma iphakheji bese silingiswa njengento eyodwa:

- isilayidi ne-{{ui:Play}} kusebenza kusukela ekuqaleni kokuqala kweqembu kuya ekugcineni kokugcina kwalo,
- kuvela imisebenzi yeqembu kuphela, futhi konke okungaphandle kweqembu kube ngokuqondakalayo,
- umugqa ongaphansi kohlu utshela ukuthi imisebenzi emingaki eseqediwe, eseqhubeka nokuzayo ngalolo suku,
- {{ui:Select its elements}} ikhetha zonke izinto zeqembu, ukuze kusetshenziswe {{ui:Show}}, {{ui:Section}} noma uhlu.

Khetha **Womsebenzi wonke** ukuze ubuyele ebonweni lonke lohlelo lwesikhathi.

## Okuzobona

- **Kwakhiwe**: izinto zonke imisebenzi yazo eseqediwe, ngemibala yazo.
- **Kuyaqhubeka**: izinto ezinomsebenzi oqhubekayo ngalolo suku, ngombala we-ochre. Umsebenzi uqhubeka kusukela ngedethi yokuqala kuya ngedethi yokugcina.
- **Akuqalwanga**: ziyabonakala ngokuqondakalayo.
- Izinto ezingekho emsebenzini ziyahlala njengoba zinjalo. Uhlu lukhombisa ukuthi izinto zingaki umsebenzi ngamunye ozithole. Imigqa engafundeki, noma engathola lutho, ibhalwa ngezinombolo zemigqa yayo.

## Izixhumanisi, i-Gantt chart ne-MS Project

- Vula ifayela le-Microsoft Project XML (`.xml`) noma i-CSV enekholomu `Predecessors`. Izixhumanisi zingaba finish to start, start to start, finish to finish noma start to finish, ngamunye unokusheshisa noma ukubambezeleka ngezinsuku.
- Ngaphansi kohlu lomsebenzi, i-Gantt chart idweba umsebenzi ngamunye njengebha enamatshwayi ezixhumanisi. Imisebenzi esendleleni ebucayi ibomvu. Iluphu yesixhumanisi noma i-predecessor engekho ikhonjwa kuphaneli.
- {{ui:Save as MS Project XML}} ne-{{ui:Save CSV with links}} zibhala uhlelo emuva ngezixhumanisi zalo.

## Okulandelayo

- [Thola izinto ngeklasi, igama noma impahla](topic:find)
- [Phahlaza izinto ngempahla](topic:color-by-property)
