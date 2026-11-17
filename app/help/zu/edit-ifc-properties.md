---
title: Shintsha izici ze-IFC futhi gcina ikhophi eshintshiwe
summary: Shintsha igama, ithegi, incazelo noma inani lesici lento, uhlehlise, bese ulanda ifayela elisha le-IFC ngenkathi umthombo ushiya njengoba wawunjalo.
keywords: hlela, shintsha, izici, amapharamitha, ithegi, igama, qamba kabusha, marka, gcina njenge, landa, hlehlisa, kopisha, ifc, bhala
from: f8035d62
---

## Okuzokwenza

Lungisa idatha emodelini ye-IFC: qamba kabusha into, lungisa ithegi yayo, shintsha inani lesici. Bese ugcina ifayela elisha le-IFC ngezinguquko zakho. Ifayela ovule alikaze lithintwe.

## Yini ongayishintsha

| Inkambu | Iyahleleka |
|---|---|
| Igama, Uhlobo lwento, Ithegi, Incazelo | Yebo |
| Amanani esici esisodwa (umbhalo, izinombolo, Yebo/Cha) | Yebo |
| Izici zohlobo (amasethi amakwa "(type)") | Yebo, futhi inguquko iyasebenza kuzo zonke izinto zalolo hlobo |
| Uhlobo, GlobalId, Umugqa | Cha |
| Izilinganiso (ubude, izindawo, amavolumu, izinani) | Cha |
| Uhlu, izinhlu ezikhethwayo namanani anezingxenye eziningi | Cha |
| Ijometri, indawo, ukungeza noma ukususa izinto | Cha |

## Izinyathelo

1. Vula imodeli ye-IFC bese uchofoza into ofuna ukuyishintsha.
2. Kuphaneli ye-{{ui:Properties}}, chofoza inani ofuna ukulishintsha. Liguquka libe yibhokisi lokubhala. Inani elingenalutho libonisa *empty*.
3. Thayipha inani elisha.
4. Cindezela {{key:Enter}}, noma chofoza kwenye indawo, ukugcina. Cindezela {{key:Esc}} ukuze ukhansele.
5. Bheka inani: manje lilugqinsi futhi linebha eluhlaza ngasecaleni kwalo, okuphawula inani eliguquliwe.
6. Bheka isigaba se-{{ui:Changes}} ngakwesokunxele: inguquko ihlwiswe njenge-*into*: *inkambu*, inani elidala laya kolisha.
7. Phinda ngamanye amanani noma ngezinye izinto.
8. Chofoza {{ui:Save as IFC}} (ikhombisa inani lezinguquko ezilindele, isibonelo "Save as IFC (3)"), noma cindezela {{key:Mod+S}}.
9. Thola "*igama lokuqala* (edited).ifc" kwifolda yakho yokulanda.

## Okufanele ubone

Umugqa wesimo uthi "Kugciniwe *igama* (edited).ifc ngezinguquko ezingu-*n* (… bytes). Ifayela lakho lokuqala alishintshiwe." Uhlu lwe-{{ui:Changes}} luyaphela, lulungele okulandelayo.

## Izinhlobo zamanani

- **Umbhalo**: noma yini oyithayipha igcinwa njengoba iyunjalo. Ukusula Igama, Uhlobo lwento, Ithegi noma Incazelo kususa inani.
- **Izinombolo**: thayipha inombolo elula, njengo `2.4` noma `1200`, ngeyunithi yefayela ngokwalo. Akukho izimpawu zeyunithi. Noma yini enye iveza "Sebenzisa inombolo."
- **Izinombolo ezigcwele** (izinani, izinombolo ezigcwele): "Sebenzisa inombolo egcwele." uma uthayipha ingxenye edecimal.
- **Yebo/Cha**: inani liba yimenyu enoYebo noCha.

Inani ngalinye ligcina uhlobo lwalo le-IFC, ngakho inombolo ihlala iyinombolo, nezinye izinhlelo ziyifunda ngendlela efanele.

## Hlehlisa

1. Chofoza {{ui:Undo}} esigabeni se-{{ui:Changes}}, noma cindezela {{key:Mod+Z}} umaungabhali emkhakheni.
2. Phinda ukuhlehlisa okwengeziwe. Ukuhlehlisa ngakunye kususa inguquko emusha kakhulu.

Awukwazi ukuhlehlisa ngaphesheya kokugcina: ngemva kokugcina, uhlu luyaqala kabusha. Ifayela eligciniwe ligcina konke.

## Kungani ukuhlela kwakho kushintsha into eyodwa kuphela

Abathumeli bagcina isikhala ngokwabelana ngedatha. Isethi yezici eyodwa ingabelwa izitezi ezingamashumi amabili, nenani elilodwa ("Fire rating: 60 min") lingaba ezethini ezingamakhulu ayisishiyagalombili. Uma i-BimCraft yayishintsha inani elabelwanayo, zonke izinto ezabelana ngalo bezizoshintsha nazo.

Ngakho i-BimCraft iyakopisha ngaphambi kokubhala:

- Uma isethi yezici oyihlelayo ibelwane nezinye izinto, into yakho ithola ikhophi yayo, futhi ikhophi kuphela ishintsha.
- Uma inani libelwane nezinye izethi, iseti yakho ithola ikhophi yalo.

Abayizinhlangothi zakho bagcina idatha yabo endala. Lokhu kubizwa ngokuthi *copy-on-write*. Yengeza izinkomba ezimbalwa ezincane efayeleni, lezo zonke izinhlelo ze-IFC ziyazifunda ngokuvamile.

**Izici zohlobo yisiphambeko ngenhloso.** Iseti emaka "(type)" ingeyohlobo lwento, futhi ku-IFC zonke izinto zalolo hlobo ziyayifunda kulo. Ukushintsha lokho kushintsha uhlobo, ngakho zonke izinto zohlobo zibonisa inani elisha. Uhlu lwe-{{ui:Changes}} luphawula lezi zinguquko nge-"(type)". Bona [Shintsha isici sohlobo sazo zonke izinto zohlobo](topic:type-vs-instance).

## Izexwayiso ngaphambi kokulahlekelwa umsebenzi

- Ukuvula enye ifayela kuyilapho unezinguquko ezingagciniwe kubuza "Unezinguquko ezingu-*n* ezingagcinwanga ku-*ifayela*. Zilahle?" Chofoza Cancel ukuze uqhubeke nokusebenza, bese ugcina.
- Ukuvala noma ukulayisha kabusha ithebhu enezinguquko ezingagcinwanga kubuza isiphequluli ukuthi uyafuna ukuphuma yini.

## Amaphutha ajwayelekile

- **Ukuthayipha iyunithi.** `2400 mm` iyenqatshwa. Thayipha `2400`.
- **Ukushintsha isici sohlobo kanti wawufuna into eyodwa.** Bheka inothi le-"(type)" ngaphambi kokuthayipha. Uma ufuna ukuthi into eyodwa ihluke, shintsha isici sento noma ithegi yayo noma igama.
- **Ukulindele ukuthi ifayela lakuqala lishintshe.** Ukugcina kulanda ifayela elisha njalo. Shintsha okuqala ngokwakho uma kuwukuthi ufuna, futhi ugcine ikhophi.
- **Ukucindezela {{key:Mod+S}} ngaphandle kwezinguquko.** I-BimCraft igcina kuphela lapho kukhona okugcinwayo; ngaphandle kwalokho ukuthi "Save page" yesiphequluli ingavula. Yivale.
- **Ukugcina kabili bese ulindele amafayela amabili amancane.** Ukugcina ngakunye kugcina wonke ukuhlela kusukela uvule imodeli.
- **Ukulindele ukuthi ukuhlela kubuyele kufayela lephrojekthi.** I-BimCraft ibhala i-IFC kuphela. Landa i-IFC ehleliwe kuhlelo lwakho lokwakha njengoba wenza noma yimuphi okulethwayo nge-IFC.
