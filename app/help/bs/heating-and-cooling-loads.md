---
title: Procijeni opterećenja grijanjem i hlađenjem
summary: Gubitak toplote svake prostorije, njeno grijanje tokom godine po stepen-danima i vrhunac hlađenja, iz onoga što je ograničava u modelu i U-vrijednosti svakog elementa, uz prikazan svaki ulaz. Pomoćno sredstvo za projektovanje, nije provjera usklađenosti.
keywords: energija, grijanje, hlađenje, gubitak toplote, toplotno opterećenje, opterećenje hlađenjem, U-vrijednost, toplotna propusnost, stepen-dani, hdd, ventilacija, izmjene zraka, unutrašnji dobici, solarni dobitak, lambda, provodljivost, izolacija, rano projektovanje, analiza, prostorije, prostori
from: ec312d20
---

U kartici {{ui:Dnevna svjetlost}}, nakon {{ui:Izračunaj}}, otvori {{ui:Opterećenja grijanjem i hlađenjem}} i klikni {{ui:Izračunaj opterećenja}}. Svaka prostorija dobija svoj **gubitak toplote** za hladan projektni dan, svoje **grijanje tokom godine** i svoj **vrhunac hlađenja** za vrući. Ništa se ne šalje; ništa se ne mijenja u modelu, osim ako ne upišeš U-vrijednost.

:::warning
Ovo je **pomoćno sredstvo za projektovanje, a ne provjera usklađenosti**: procjena u stacionarnom stanju sa svakim ulazom na ekranu. **Nije** metoda ISO 52016-1, nije simulacija i nije energetski certifikat; ne dimenzioniše kotlove, toplotne pumpe ni rashladne jedinice. Rezultate provjeri, a opremu dimenzioniši s inženjerom.
:::

## Šta ograničava svaku prostoriju

BimCraft to nalazi u samom modelu, pa radi s IFC-om bilo kojeg programa (ne treba mu granice prostora koje neki programi izvoze). Sa svakog dijela površine svake prostorije gleda ravno van:

- prvi zid, prozor, vrata, pod, krov, obloga, zavjesni zid ili greda koju sretne **ograničava** taj dio;
- odmah iza tog elementa, ili **druga prostorija** (računa se kao susjedna, na istoj temperaturi: bez gubitka), ili **ništa** (vani), ili, ispod poda na najnižem nivou, **tlo**;
- otvoreni prolaz u drugu prostoriju računa se kao susjedni; dio koji ne sretne ništa (u okviru 1.5 m u stranu ili dolje, 8 m gore) navodi se pod prostorijom i ne uračunava se.

Prozori i vrata uzimaju svoju veličinu iz IFC-a (ukupna širina × visina) iz zida u kojem stoje. Klikni prostoriju u tabeli da vidiš svaki element koji je ograničava, sa njegovom površinom, U-vrijednošću i odakle je U-vrijednost došla.

## U-vrijednosti

Za svaki element BimCraft koristi ovim redom:

1. **Vlastita U-vrijednost IFC-a** — `ThermalTransmittance` u zajedničkom skupu svojstava elementa (na primjer `Pset_WallCommon`) ili u njegovom tipu. Većina projektnih programa je može upisati.
2. **Njegovi slojevi materijala** — 1 ÷ (unutrašnji otpor površine + debljina svakog sloja ÷ njegova provodljivost λ + vanjski otpor površine), sa uobičajenim otporima površine (0.13 i 0.04 m²K/W za zidove; 0.10 prema gore, 0.17 prema dolje unutra). Tipične provodljivosti za početak (mineralna vuna 0.035, cigla 0.77, beton 1.4…); pod {{ui:Provodljivost materijala}} upiši proizvođačevu, i svaka U-vrijednost iz tih slojeva prati.
3. **Tipična vrijednost** (zidovi 0.3, krovovi 0.2, podovi 0.25, prozori 1.4, vrata 1.6 W/m²K), označena kao takva — upiši svoju.

U-vrijednost upisana u detalj prostorije zapisuje se u zajednički skup svojstava elementa kao `ThermalTransmittance` (jedan korak; {{key:Mod+Z}} to poništava). Ako više elemenata dijeli taj skup (na primjer, jedan tip zida), svi se mijenjaju zajedno, a statusna linija kaže koliko ih je.

## Grijanje

- **Gubitak toplote** = Σ U × A × (unutra − vani) za sve prema van + Σ U × A × (unutra − tlo) za podove na tlu + 0.335 × izmjene zraka na sat × zapremina prostorije × (unutra − vani). 0.335 Wh po m³ po kelvinu je gustina zraka (1.2 kg/m³) puta njegov toplotni kapacitet (1005 J/kgK).
- **Grijanje tokom godine** = (gubitak prostorije po stepenu prema vani, kroz konstrukciju i zrak, plus njen gubitak prema tlu razmjerno istoj razlici) × **stepen-dani** × 24 ÷ 1000, u kWh. Upiši stepen-dane za mjesto, ili {{ui:Učitaj stepen-dane iz CSV-a…}} (jedan red po danu ili mjesecu; zbroji se posljednji broj u svakom redu). Koristi stepen-dane do bazne temperature tvog izvora: ta baza već uzima u obzir besplatnu toplotu ljudi, svjetla i sunca.

## Hlađenje

**Vrhunac hlađenja** = toplota kroz konstrukciju i zrak na ljetnoj projektnoj temperaturi + ljudi (površina po osobi × toplota po osobi) + osvjetljenje i oprema po m² poda + **sunce**: vrhunac {{ui:Sunce kroz prozore na datum}} za tu prostoriju. Prvo izračunaj sunce, na vrući dan; dok to ne uradiš, sunce se računa kao 0 i odjeljak to kaže. Vrhunci svakog dijela se zbrajaju iako padaju u različito vrijeme, što malo preuveličava.

## Šta izostavlja

- Mjesečne i satne metode ISO 52016-1 (plaćeni standard), toplotu uskladištenu u masi zgrade, toplotne mostove, rad sistema grijanja i hlađenja, i klimatske datoteke.
- Susjedne prostorije se uzimaju na istoj temperaturi; negrijani prostori nisu modelirani.

Vidi i [Procijeni dnevno svjetlo u svakoj prostoriji](topic:daylight-factor).
