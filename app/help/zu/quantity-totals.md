---
title: Engeza ndawonye izinani, uhlu lwezinto nezindawo zohlelo
summary: Bala izinto futhi wengeze ubude, izindawo, amavolumu noma noma iyiphi inombolo yezici, uhlelwe ngayo noma yiyiphi isici; uhlu lomugqa owodwa ngento; noma uhlele izindawo ngezindawo nevolumu zazo. Ngayinye ilandwa njenge-CSV.
keywords: izinani, quantity, quantities, takeoff, amanani aphelele, isamba, uhlelo, bill of quantities, boq, qto, csv, hlanganisa ngo, bala, ubude, indawo, ivolumu, izindawo, amagumbi, uhlelo lwamagumbi, uhlelo lwezindawo, uhlu lwezinto
from: e2e7210c
---

## Okuzokwenziwa

Thola amanani aphelele kumodeli: ubude bezindonga ngezitezi, inani lezivalo ngohlobo, ivolumu yesilabhu ngento, nezindleko zayo yonke indawo.

## Izinyathelo

1. Vula imodeli ye-IFC.
2. Vula {{ui:Amanani aphelele}} ephaneli yangakwesobunxele.
3. Ku-{{ui:Bala}}, khetha {{ui:Yonke into}} noma izinto ezikhethiwe kuphela.
4. Ngaphansi kwe-{{ui:Hlanganisa ngo}}, khetha isici, njengo-{{ui:Iklasi}}. Chofoza {{ui:Engeza iqembu}} ukuze uhlukanise kabili, kuze kube kathathu, isibonelo ngo-{{ui:Isitezi}}.
5. Ngaphansi kwe-{{ui:Engeza ndawonye}}, thikha izinombolo ozofaka amanani kuzo. Amasethi wezibalo wemodeli athikwe ekuqaleni.
6. Chofoza {{ui:Landa i-CSV}} ukuze uvule ithebula kusipredishithi.

## Okufanele ubone

- Umugqa ngamunye weqembu nenani lezinto zawo, nomugqa wesamba.
- Izinto ezingenalo inani ziyabalwa kodwa azengezi lutho. Lapho kwenzeka lokho, i-CSV yengeza ikholomu ethi "ishiyiwe" eduze kwesamba ukuze ubone ukuthi zingaki.
- Izinombolo zisezinyunithini zefayela, njengoba ifayela ziligcina, ngokuvamile amamilimitha ngobude.

## Umugqa owodwa ngento, noma izindawo

Shintsha {{ui:Bonisa}}:

- **Umugqa owodwa ngento**: into ngayinye emgqeni wayo, nezici ngaphansi kwe-{{ui:Amakholomu}} namanani ngaphansi kwe-{{ui:Engeza ndawonye}}. I-CSV iqala ngeGlobalId yento ngayinye. Chofoza inani lokuqala emgqeni ukuze ukhethe lowo nto.
- **Izindawo**: igumbi ngalinye nenombolo yalo, igama, isitezi, indawo nevolumu, namasamba azo. Izindawo nevolumu ziwuthela kuma-quantity wesikhala njengoba ifayela lisho. Uma ingenawo, ziyalinganiswa kusimo sesikhala ngo-m² no-m³ futhi zibonisiwe ngohlobo lwe-italic; i-CSV ichaza ukuthi yiyiphi.

## Okulandelayo

- [Thola izinto ngeklasi, igama noma isici](topic:find)
- [Umbala wezinto ngesici](topic:color-by-property)

## Ukwakhiwa (IFC 4.3)

Khetha **Infrastructure (IFC 4.3)** ohlwini lwe-view ukuze ubone imigwaqo, imizila yesitimela, amabhuloho nemisebenzi yolwandle ihlanganiswe ngeklasi nangohlobo, ngobude, indawo nevolumu ifayela elizibhala ngokwalo. Inani elingalitshiwe yifayela liyashiywa lingenalutho, lingalinganiswanga. **Thumela amanani okwakhiwa ku-TakeoffCraft** lilondoloza ifayela le-`.quantities.json` ethi i-TakeoffCraft iyivule njengamanani ahlelwe.
