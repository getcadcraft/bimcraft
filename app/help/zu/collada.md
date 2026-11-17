---
title: Thumela imodeli njenge-Collada noma yephakheji ye-Google Earth
summary: Bhala amamodeli e-IFC avulekile njengefayela le-Collada (.dae) lebhulauza nezinye izinhlelo ze-3D, noma njengephakheji ye-Google Earth (.kmz) ebekwe lapho imodeli ikhona kumephu.
keywords: collada, dae, kmz, kml, google earth, blender, thumela, geolocation, georeference, latitude, longitude, indawo, izinhlelo ze-3d
from: 81cfec09
---

{{ui:Collada}} ethulini lamathuluzi (noma {{ui:Thumela i-Collada (.dae, .kmz)…}} kumenyu Ifayela kumitlolo yemenyu nebha yeribhoni) ibhala okuvuliwe njenge-Collada 1.4.1: yonke imodeli eboniswayo, nemodeli ezixhunyiwe lapho uzibeke khona.

## Thumela

1. Khetha {{ui:Collada}}.
2. Khetha ifomethi:
   - {{ui:Ifayela le-Collada (.dae), le-Blender nezinye izinhlelo ze-3D}}.
   - {{ui:Iphakheji ye-Google Earth (.kmz): imodeli ibekwe lapho ikhona kumephu}}. Ikhonjiswa kuphela uma imodeli inendawo.
3. Khetha izinketho, bese ukhetha {{ui:Thumela}}. Ifayela liyalandwa, futhi ibha yesimo ikutshela ukuthi izinto ezingaki zingenile.

| Inketho | Yenza ini |
|---|---|
| {{ui:Write the location into the file}} | Yengeza i-latitude, i-longitude, ukuphakama nesiqondiso somsuka wefayela le-.dae |
| {{ui:Height}} | {{ui:On the ground: the model’s level 0 sits on the terrain}}, noma {{ui:The model’s own height above sea level}} |
| {{ui:Include rooms and spaces}} | Izindawo nazo ziyangeniswa (zishiywa ngokuzenzakalelayo) |
| {{ui:Include hidden elements}} | Izinto ozifihlile nazo ziyabhalwa (ngokuzenzakalelayo kubhalwa okubonakalayo kuphela) |

## Okusefayelini

| Kumodeli | Kufayela le-Collada |
|---|---|
| Isakhiwo, izitezi | Izinodi ezigxilile, izitezi ngokulandelana kokuphakama; izinto ezingekho esiteziini esithile zingaphansi kwe-"Akubekiwe" |
| Yonke into | Inodi eyodwa enemeshi yayo, ibizwe njengakumodeli (igama layo, uma lingekho, iklasi nethegi yayo) |
| Iklasi, GlobalId, uhlobo olucacisiwe | Edatheni eyengeziwe yenodi (i-IFC profile), ngegama elifanayo ngokuphelele (i-ModelCraft profile) |
| Imibala | Izinto zokwakha, nokukhanya |
| Iziyunithi nama-eksisi | Mitha, Z iphakame. Izinga 0 lemodeli ephambili lisekuphakameni 0 |

Imodeli ihlala eduze komsuka emhlabeni, ngakho izinhlelo ezisebenza ngokunemba okuncane zibonisa kahle ngaphandle kokunyikinyeka. I-ModelCraft ibhala amafayela ayo e-Collada ngomlobi ofanayo, futhi ivula lawa mafayela ngamagama ezakhi zawo.

## Lapho indawo ivela khona

Imodeli ephambili inikeza indawo, ngendlela efanayo {{ui:Linganisa}} ahlola ngayo i-latitude ne-longitude yephoyinti:

- Ukuguqulwa kwemephu (i-IFC4 IfcMapConversion, noma amasethi ezici we-IFC2X3) ngohlelo lwamakhoordineyithi lemodeli. Uhlelo owukhethele imodeli luyanqoba olufakwe ngamafayela.
- Kungenjalo, i-latitude ne-longitude yendawo yokwakha (eseduze: kuhle endaweni yonke yokwakha).

Isiqondiso siyalinganiswa, asiphoqiwe: sithatha phezu kokujikeleza kwemephu, enyakatho yeqiniso nokuhlangana kwemephu. Ukuze unike imodeli indawo, sebenzisa {{ui:Umsuka wemephu…}} kuLinganisa.

## Ezinye izinhlelo

- **Google Earth** ifunda i-.kmz: imodeli ivela endaweni yayo, ijikelezwe ibheke enyakatho. I-.dae ejwayelekile alinayo indawo ifayela le-Google Earth elifunda kuyo; sebenzisa i-.kmz.
- **Blender** (4.x nangaphambili): File, Import, Collada (.dae). Yonke into ingena njengento yayo ene-material yayo. Indawo igcinwa edatheni eyengeziwe yefayela, Blender ayifundi leyo datha. I-Blender 5.0 yakhipha isifaki se-Collada esasakhiwe ngaphakathi; kuyo, sebenzisa {{ui:USD}} noma ukuthumela kwe-glTF, noma vula i-.dae ku-Blender 4.5 bese ugcina njenge-.blend.

Izivivinyo zethu zihlola wonke amafayela ngesikimu se-Collada 1.4.1 futhi ziwafunde ngomfundi ozimele we-Collada. Azikaze zivule kuBlender noma kuGoogle Earth.
