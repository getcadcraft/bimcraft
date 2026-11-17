---
title: Amaphakheji ohlobo: yabelana ngezinhlobo zodonga njengamafayela avulekile
summary: Gcina izinhlobo zodonga nezingqimba zazo, izimpahla, amathegi nezikhodi zokuhlukaniswa, nemindeni njengefayela elivulekile elilodwa (umbhalo we-JSON ojwayelekile noma i-IFC), bese uyengeza kwenye iphrojekthi. Izinhlobo zodonga zefayela le-IFC evela kwenye inhlelo nazo zingafundwa.
keywords: iphakheji lohlobo, izinhlobo, uhlobo lodonga, yabelana, thumela, ngenisa, umtapo, ifomethi evulekile, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, izimpahla, izingqimba, isifanekiso, umgomo wehhovisi, imindeni
from: e4c91331
---

## Okuzokwenza

Thutha izinhlobo zakho zodonga kusuka kwiphrojekthi eyodwa iye kwenye, noma uzinikeze umuntu osebenza kwenye inhlelo. Iphakheji lohlobo linohlobo ngalunye lodonga nezingqimba zalo, ukuthi lujulile kangakanani, izimpahla, ingxenye emaphakathi, izikhala, ukubaluleka kwezingqimba, izinga lokuthuthukiswa, idatha yokubala amanani nezikhodi zokuhlukaniswa, kanye nanoma yimiphi imindeni oyengezile. Iyifayela elivulekile: umbhalo we-JSON ojwayelekile ongafundwa noma ubani, noma ifayela le-IFC. Akukho okukhiyelwe kufemu, ezweni noma ku-akhawunti.

## Londoloza izinhlobo kusuka kwiphrojekthi

1. Vula **Idatha** embarini yemodeli bese ukhetha {{ui:Amaphakheji ohlobo}}.
2. Ngaphansi kwe-{{ui:Londoloza izinhlobo kule phrojekthi}}, thikha izinhlobo zodonga ozofaka. Izinhlobo zephrojekthi ngokwayo ziyathikwa; uhlobo lokuqala lungangezwa futhi lingene njengekhophi. Thikha imindeni uma ufuna ukuthi ifake.
3. Thayipha i-{{ui:Igama lephakheji}}.
4. {{ui:Londoloza njengephakheji (.json)}} ilanda ifayela le-`.cctypes.json`. {{ui:Londoloza njenge-IFC (.ifc)}} ilanda ifayela le-IFC eliphethe izinhlobo kuphela: ngohlobo ngalunye lodonga njenge-IfcWallType nesethi yalo yezingqimba zezimpahla, izimpahla nokuhlukaniswa, kunoma iyiphi inhlelo ye-BIM.

## Engeza izinhlobo ephrojekthini

1. Kuleyo ngxoxo efanayo, khetha {{ui:Vula iphakheji noma ifayela le-IFC…}} bese ukhetha iphakheji le-`.json` noma ifayela le-`.ifc`.
2. Ingxoxo ibala lokho ifayela eliphethe: uhlobo ngalunye lodonga nokujula kwalo, inani lezingqimba namakhodi, izimpahla nemindeni.
3. Khetha okwenzeka ku-{{ui:Uhlobo esinalo lale phrojekthi}}: **Gcina leyo yephrojekthi**, **Engeza leyo yephakheji njengekhophi** (izothola igama elisha elisiphela nge-"(2)"), noma **Yithathele indawo (kuphela uma kungekho dongo elilusebenzisayo)**.
4. {{ui:Engeza kuphrojekthi}}. Ingxoxo ibala okwengeziwe, okukopishiwe, okuthathelwe indawo noma okugcinwe. Kuyisinyathelo sokuhlehlisa esisodwa.

Izinhlobo ezintsha zisendaweni yohlu lwezinhlobo zethuluzi lodonga ngokushesha.

## Izinhlobo zephansi, zophahla nelilingi

Uhlu lwezinhlobo ezigcinwayo luphinde lube nezinhlobo zephrojekthi zephansi, zophahla nelilingi nezokuqala zazo (zimakwe ngokuthi Iphansi, Uphahla, Ilingi). Iphakheji lingathwala zonke izinhlobo ezine; uhlobo ngalunye lubiza igama layo le-IFC (IfcWallType, IfcSlabType, IfcCoveringType). Uhlobo lwephansi, luphahla noma lwelilingi esetshenziswa izinto alufakwa esikhundleni kusuka ephakheji: lushintshe kumhleli wohlobo.

## Uhlobo olulodwa njengento yeLibrary

Thikha into eyodwa yohlobo bese ukhetha **Londoloza njengento yeLibrary…**. Igcina ifayela le-`.cctype.json`: into yeLibrary yohlobo lwe-Types eyodwa ebamba lolohlobo (izingqimba, izimpahla, i-LOD namakhodi okuhlukaniswa). Ilayishe ku-Library ukuze uyabelane nayo. **Vula iphakheji noma ifayela le-IFC** ifunda nento enjalo futhi yengeze uhlobo lwayo kuphrojekthi njengephakheji.

## Okufanele wazi

- Ifayela le-IFC evela kwenye inhlelo lingavulwa lapha futhi. Uhlobo ngalunye lodonga oluneziqu zezingqimba luyafundwa: igama, izimpahla zezingqimba nobukhulu, nanoma yisiphi isikhala kwifayela ngokwalo. Yiziphi izingqimba eziyisisekelo nokuthi ingqimba ngayinye yenzani (ukuqeda, isakhiwo, ukugcinwa kokushisa) kuqagelwa, uhlobo luphawulwa **(kuqagelwe)**, futhi kufanele ulihlole kumhleli wohlobo lodonga. Uhlobo lodonga oluntuleyo ezingqimbeni lushiywa ngaphandle futhi lubizwe.
- Impahla ephrojekthi isivele inayo igcinwa njengoba njalo. Impahla entsha egama lalo selithathiwe ithola "(iphakheji)" ngemva kwegama lalo.
- Uhlobo lodonga abalusebenzisayo alusoze lwathathelwa indawo ephakheji. Lushintshe kumhleli wohlobo lodonga, okuhambisa izindonga zalo ngokufanele.
- Ikhodi esethwe kudonga owodwa ayihambi: yeyalowo dongo. Ikhodi esethwe ohlobweni iyahamba.
- Ifayela linensimu ifomethi engenayo, ingqimba enezimpahla ezingekho, noma okungasiyo umbhalo ojwayelekile, liyenqatshwa, nomlayezo utshela lapho nokuthi kungani.
- Akwakhiwe: izinhlobo zephansi, zophahla nelilingi (azinazo izinhlobo kulenguqulo: ngalinye linobukhulu bayo), izinhlobo zeminyango namawindi ngaphandle kwemindeni, namahetshi noma imibala evela kwenye inhlelo.
