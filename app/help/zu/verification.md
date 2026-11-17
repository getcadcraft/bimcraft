---
title: Maka izinto njengezihloliwe noma eziqinisekiswe endaweni
summary: Into efundwe kwi-PDF noma eskenwe ayiqinisekisiwe kuze uyihlole. Maka izinto njengezihloliwe, noma njengeziqinisekisiwe endaweni (LOD 500) ngokuthi ubani, nini nangaphi, bese unikeza imodeli ye-as-built esho okuyiyo.
keywords: akuqinisekisiwe, kuqinisekisiwe, kuhloliwe, eziqinisekiswe endaweni, as built, as-built, lod 500, ukuvala, ukunikezela, kulinganiswe endaweni, ithepi, ilaser, ukuskena, ukuhlola umhlaba, isakhiwo esikhona, ukushintsha, maka njengokuhlolwe, ukuqinisekiswa, isigaba 7
from: df35d908
---

## Okuzokwenza

Gcina ukulandelela lokho okuthile emodelini ngempela okube sekukhona umuntu okubukile. Into inophawu olulodwa kwezintathu, noma alunalo:

- **Akuqinisekisiwe**: uhlelo lukubonile kusuka kwi-PDF, emdwebeni oskeniwe, emdwebeni olandelwe noma kuskena wamafu wamaphoyinti. Akukakho muntu okuhlolile.
- **Kuhloliwe**: umuntu uyiqhathanise nomdwebo ivela kuwo.
- **Kuqinisekisiwe endaweni (LOD 500)**: umuntu uyilinganisile endaweni. Ubani, nini nangaphi kugcinwa nayo.
- **Alunophawu**: idwetshwe umuntu. Imodeli ayenzi isimangalo ngayo.

## Izinyathelo

1. Khetha into eyodwa noma eminingi (izindonga, iminyango, amawindi, amakamelo, noma yiyiphi into).
2. Kuphaneli {{ui:Izici}}, vula {{ui:Ukuqinisekiswa}}.
3. Thayipha ubani ohlole noma olinganise. Usuku yilolu lwanamuhla uma ungalushintshi.
4. Chofoza {{ui:Maka njengokuhlolwe}}. Ukulinganisa endaweni, khetha indlela yokulinganisa (ithepi, imitha yebanga le-laser, ukuskena, ukuhlola umhlaba) bese uchofoza {{ui:Maka njengokuqinisekiswe endaweni (LOD 500)}}.
5. {{ui:Maka njengongaqinisekisiwe}} no-{{ui:Susa impawu}} kubuyisela. Ukuchofoza ngakunye kuyisinyathelo esingahlehliswa, ngakho konke okukhethiwe.

Ukumaka okukhethiwe ngokushesha: {{ui:Amathuluzi}} › {{ui:Maka njengokuhlolwe}} (uthayipha: `MARKCHECKED`) umaka lokho okukhethiwe njengokuhlolwe nguwe, namhlanje.

## Okufanele ubone

- Kuplani, into engakaqinisekiswa inebhokisi elibhoksiwe nombuzo "?"; into eqinisekisiwe endaweni inetiki. Susa ukukhethwa kokuthi {{ui:Bonisa izimpawu zokuqinisekisa eplanini}} kwisigaba {{ui:Ukuhlola}} ukuze uzifihle.
- {{ui:Uhlu}} › {{ui:Ukuqinisekiswa}} ibhala zonke izinto ezimakiwe nesigaba sazo, isimo, ubani, nini, indlela nokuvela kwazo.
- Ukuhlola kuhlu izinto ezingakaqinisekiswa, futhi kubala into eqinisekisiwe endaweni njenge-LOD 500. Bheka [Hlola imodeli](topic:audit-the-model).

## Ukusuka kuskena

Uma uqhathanisa iskena nemodeli, {{ui:Maka izinto ezifanayo njengeziqinisekisiwe endaweni}} umaka yonke into iskena esiyibonile njengoba yakhiwe ngaphakathi kwesilinganiso sokubekezelela, ngendlela ethi "scan" nokubekezelela esihlokweni. Bheka [Qhathanisa iskena nemodeli](topic:compare-scan-with-model).

:::warning
Lokhu kuqhathanisa kuhambisa ibhokisi lento ngayinye namaphoyinti eskena. Akuyona ukuhlola komhlaba. Yisebenzise ezintweni nawe ozibukile.
:::

## Imodeli ye-as-built nephakethi yokunikezela

{{ui:Khiwa iphakethi yokunikezela}} kuthebhu {{ui:Izimpahla}} ifaka imodeli ye-as-built ku-zip, ine:

- isitatimende kuphrojekthi sokuthi izinto eziningi eziqinisekiswe endaweni, eziholiwe, ezingakaqinisekiswa nezingamakiwe;
- `as-built/verified-elements.csv`: yonke into negumbi ngalinye nesimo sayo, ubani, nini nangaphi;
- `as-built/as-built-drawings.pdf`: iseti yemidwebo njengoba ikunjalo manje;
- ushintsho lomdwebo, uma imodeli inamaseti akhishiwe.

Bheka [Izimpahla nokugcinwa](topic:assets-and-maintenance).

## Indlela ekugcinwa ngayo ku-IFC

Isicabha ngasinye esimakiwe sithwala isethi yezici `CadCraft_Verification`: State, By, On, Method, Source, Note, and LevelOfDevelopment (`LOD 500` uma iqinisekiswe endaweni). Ziwumbhalo oqobo, ngakho ezinye izinhlelo ziyazibala, futhi Thola, Umbala ngesici nohlu lwamathegi kungazisebenzisa. Isitatimende se-as-built siyisethi yezici `CadCraft_AsBuilt` kuphrojekthi. Isicabha esingenaso isethi asilinganiswanga endaweni.

## Okulandelayo

- [Izindonga kusuka emasethini wamapulani](topic:walls-from-plans)
- [Hlola imodeli](topic:audit-the-model)
