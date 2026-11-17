---
title: Procijenite opterećenja grijanja i hlađenja
summary: Gubitak topline svake prostorije, njezino grijanje tijekom godine prema stupanj-danima i vršno hlađenje, iz onoga što je ograničava u modelu i U-vrijednosti svakog elementa, uz sve ulaze prikazane. Pomoćno sredstvo za projektiranje, a ne proračun usklađenosti.
keywords: energija, grijanje, hlađenje, gubitak topline, toplinsko opterećenje, opterećenje hlađenja, U-vrijednost, koeficijent prolaza topline, stupanj-dani, hdd, ventilacija, izmjene zraka, unutarnji dobici, solarni dobitak, lambda, toplinska vodljivost, izolacija, rano projektiranje, analiza, prostorije, prostori
from: ec312d20
---

U kartici {{ui:Dnevno svjetlo}}, nakon {{ui:Izračunaj}}, otvorite {{ui:Opterećenja grijanja i hlađenja}} i kliknite {{ui:Izračunaj opterećenja}}. Svaka prostorija dobiva svoj **gubitak topline** za hladan projektni dan, svoje **grijanje tijekom godine** i svoj **vršni hlađenje** za vruć dan. Ništa se ne šalje na poslužitelj; ništa se u modelu ne mijenja osim ako ne upišete U-vrijednost.

:::warning
Ovo je **pomoćno sredstvo za projektiranje, a ne proračun usklađenosti**: procjena u stacionarnom stanju sa svim ulazima na zaslonu. Ona **nije** metoda ISO 52016-1, nije simulacija i nije energetski certifikat; ne dimenzionira kotlove, dizalice topline ni rashladnike. Provjerite rezultate i dimenzionirajte opremu uz inženjera.
:::

## Što ograničava svaku prostoriju

BimCraft to pronalazi u samom modelu, pa radi IFC bilo kojeg programa (ne treba mu granice prostora koje neki programi izvoze). Od svakog dijela površine svake prostorije gleda ravno van:

- prvi zid, prozor, vrata, pod, krov, obloga, zastakljena stijena ili greda koju sretne **ograničava** taj dio;
- odmah iza tog elementa, ili **druga prostorija** (računa se kao susjedna, na istoj temperaturi: bez gubitka), ili **ništa** (vani), ili, ispod poda na najnižoj etaži, **tlo**;
- otvoreni prolaz u drugu prostoriju računa se kao susjedni; dio koji ne sretne ništa (u radijusu 1.5 m u stranu ili dolje, 8 m gore) navodi se pod prostorijom i ne uzima se u obzir.

Prozori i vrata uzimaju vlastitu veličinu iz IFC-a (ukupna širina × visina) iz zida u kojem stoje. Kliknite prostoriju u tablici da vidite svaki element koji je ograničava, s njegovom površinom, U-vrijednošću i odakle je U-vrijednost došla.

## U-vrijednosti

Za svaki element BimCraft koristi ovim redom:

1. **Vlastita U-vrijednost IFC-a**: `ThermalTransmittance` u zajedničkom skupu svojstava elementa (na primjer `Pset_WallCommon`) ili u njegovu tipu. Većina projektantskih programa može je zapisati.
2. **Njegovi slojevi materijala**: 1 ÷ (unutarnji otpor površine + debljina svakog sloja ÷ njegova vodljivost λ + vanjski otpor površine), s uobičajenim otporima površine (0.13 i 0.04 m²K/W za zidove; 0.10 prema gore, 0.17 prema dolje unutra). Tipične vodljivosti za početak (kamena vuna 0.035, cigla 0.77, beton 1.4…); pod {{ui:Vodljivost materijala}} upišite proizvođačevu, i sve U-vrijednosti iz tih slojeva slijede.
3. **Tipična vrijednost** (zidovi 0.3, krovovi 0.2, podovi 0.25, prozori 1.4, vrata 1.6 W/m²K), označena kao takva: upišite svoju.

U-vrijednost upisana u pojedinosti prostorije zapisuje se u zajednički skup svojstava elementa kao `ThermalTransmittance` (jedan korak; {{key:Mod+Z}} je poništava). Ako više elemenata dijeli taj skup (npr. jedan tip zida), svi se mijenjaju zajedno, a statusni redak kaže koliko ih je.

## Grijanje

- **Gubitak topline** = Σ U × A × (unutra − vani) za sve prema van + Σ U × A × (unutra − tlo) za podove na tlu + 0.335 × izmjene zraka na sat × volumen prostorije × (unutra − vani). 0.335 Wh po m³ po kelvinu je gustoća zraka (1.2 kg/m³) puta njegov toplinski kapacitet (1005 J/kgK).
- **Grijanje tijekom godine** = (gubitak prostorije po stupnju prema van, kroz konstrukciju i zrak, plus njezin gubitak prema tlu razmjerno istoj razlici) × **stupanj-dani** × 24 ÷ 1000, u kWh. Upišite stupanj-dane za mjesto ili {{ui:Pročitaj stupanj-dane iz CSV-a…}} (jedan red po danu ili mjesecu; zadnji broj u svakom redu se zbraja). Koristite stupanj-dane za baznu temperaturu koju koristi vaš izvor: ta bazna temperatura već uračunava besplatnu toplinu ljudi, svjetla i sunca.

## Hlađenje

**Vršno hlađenje** = toplina kroz konstrukciju i zrak pri ljetnoj projektnoj temperaturi + ljudi (podna površina po osobi × toplina po osobi) + osvjetljenje i oprema po m² poda + **sunce**: vrhunac {{ui:Sunce kroz prozore na određeni datum}} za tu prostoriju. Prvo izračunajte sunce, za vruć dan; dok to ne učinite, sunce se računa kao 0 i odjeljak to kaže. Vrhunci svakog dijela zbrajaju se, čak i ako padaju u različitim satima, što malo precjenjuje.

## Što ne obuhvaća

- Mjesečne i satne metode ISO 52016-1 (plaćeni standard), toplinu pohranjenu u masi zgrade, toplinske mostove, rad sustava grijanja i hlađenja te klimatske datoteke.
- Susjedne prostorije uzimaju se na istoj temperaturi; negrijani prostori nisu modelirani.

Vidi također [Procijenite dnevno svjetlo u svakoj prostoriji](topic:daylight-factor).
