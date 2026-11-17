---
title: Samee jadwal qalab oo soo dhoofi CSV
summary: U beddel calaamadaha alaabta ee sawirka cunto-bixinta jadwal qalab, sifee, u gudub alaabta kasta xaashideeda, oo soo deji CSV.
keywords: qalab, jadwal, cunto-bixin, jikada, calaamadaha alaabta, kcl, sifooyinka, bom, liiska agabka, csv, miiska xisaabta, soo dhoofin, soo saarida xogta
from: e3faa1c8
---

## Waxa aad samayn doontid

Akhri liiska qalabka ka yimid sawirka jikada ama cunto-bixinta, hubi, ka hel alaabta kasta qorshaha, oo soo deji faylka miiska xisaabta.

Tani waxay shaqeysaa sawiro ay calaamadaha qalabkoodu xogtooda ku sidaan sifooyinka bloogga, sida maktabadaha naqshadaynta jikada ee KCL: calaamad kasta waxay haysaa lambarka alaabta (`KCL-ITEM`), tirada, qaybta, soo saaraha, moodelka, xogta korontada iyo biyo-dhigga, iyo tixgelinno. Sawiro kale ma lahan tab {{ui:Qalabka}}.

## Tallaabooyin

1. Fur sawirka, si wanaagsan faylka mashruucu ka, si sawirrada xiriirka ahna ay u soo soo baxaan.
2. Riix tab-ka {{ui:Qalabka}} ee kor ku yaal sawirka. Calaamaddiisu waxay tusaysaa inta alaab ku jirta xaashiyada, tusaale "Qalabka (88)".
3. Akhri jadwalka: **Alaabta**, **Tirada**, **Qalabka**, **Soo saaraha**, **Moodelka**, **Korontada**, **Biyo-dhigga** iyo **Halka**.
4. Dooro waxa la liistaayo menu-ka kor ku yaal miiska: **Xaashi kasta**, hal xaashi, **Ma jiro xaashi**, ama **Wax kasta oo calaamad lagu sameeyay sawirka**. Doorasho kasta waxay tusaysaa tirada.
5. Ku qor sanduuqa shaandheynta ("Shaandhee: qaybta, soo saaraha, moodelka…") si aad liiska u yareyso, tusaale `qaboojiye` ama `208`.
6. Riix magaca xaashida ee tiirka **Halka**.
7. Fiiri sawirka: BimCraft wuxuu u beddelaa xaashidaas, wuxuuna ku weyneeyaa alaabta oo wareeg ku hareeraynayaa. Xariiqda xaaladda waxay leedahay "Alaabta *n*, *qayb* waa la wareegay *xaashida*."
8. Riix {{ui:Qalabka}} si aad ugu noqoto jadwalka.
9. Riix {{ui:Soo deji CSV}}.

## Waxa aad arki doontaa

- Fayl magiciisu yahay "*magaca sawirka* equipment.csv" (magaca xaashida qaad qaansada haddii aad liistay hal xaashi) ku jira galkaaga soo dejinta. Wuxuu ku furmaa Excel, Numbers, LibreOffice ama Google Sheets.
- Xariiqda xaaladda: "Waa la soo dejiyay *magaca faylka* (*n* alaab)."

CSV-ga waxa ku jira tiirarkan: Item, Qty, Category, Manufacturer, Model, Electrical, Plumbing, Remarks, Electrical remarks, Plumbing remarks, Sheets, Placed (inta calaamad). Waxay soo dejisaa safafka saxda ah ee miiska tusaya, kadib menu-ka iyo shaandhaynta.

## Sida jadwalka loo dhiso

- Waxaa laga akhriyaa **calaamadaha laftooda**, ma aha miiska jadwalka ee lagu sawiray xaashida. Fiiro ku qoran sare miiska wuxuu sheegaa inta calaamad la akhriyay.
- Hal safka waa hal lambar alaabta oo leh hal xog. Tiradeedu waa **wadarta** calaamadaha, sida jadwal la daabacay u tiriyo: shelf la calaamadeeyay "5" meel, "3" meel kale waa 8, oo lagu muujiyaa "5 + 3".
- **Halka** waxay ku taxaan xaashiyada tusaya alaabta kasta, oo lagu go'aamiyay waxa muujinaya viewports-ka xaashi kasta, kaasoo daabacan. "Moodeel keliya" macnaheedu waa ma jiro xaashi tusta.
- **Lambar la isticmaalay laba jeer** wuxuu calaamadeeyaa hal lambar alaabta oo ku jira laba qalab oo kala duwan. Safka waxaa ku yaal calaamad casaan-jaalle ah.
- Calaamadaha aan xaashi tusin waxaa lagu kala saaraa **Ma jiro xaashi**. Waxay badanaa ka hadhay qorshayaasha hore ama shuqullada kale, weligood lama isku qasin **Dhammaan xaashiyada**.
- **Korontada** waxay tusaysaa amperka, kW, HP, volts, phase, xidhiidhka iyo plug sida calaamadeeyay. **Biyo-dhigga** wuxuu tusaa cabbirrada xidhiidhka: CW biyo qabow, HW biyo kulul, DD biyo-dhigga toosan, ID biyo-dhigga aan toosnayn, iyo gas. Goobaha kale ee calaamadda weli lama muujin.

## Khaladaad caadi ah

- **Ma jiro tab {{ui:Qalabka}}.** Sawirku ma leh calaamado `KCL-ITEM`, ama qalabkiisa waa la sawiray oo aan xog lahayn. Ma jiro wax la akhriyo.
- **Tirooyinku way ka duwan yihiin jadwalka la daabacay.** Jadwal la daabacay wuxuu liisan karaa lambarro dheeraad ah, ama magacyo gaaban oo ka duwan calaamadaha. Calaamadaha ku aaddan waxa la dhigay; farqiga la hubi naqshadeeyaha.
- **Furidda CSV-ga oo calaamado aan caadi ahayn muujinaysa.** Faylku waa UTF-8. Ku fur amarka soo dhoofinta ee miiska xisaabta oo dooro UTF-8 haddii barnaamijku weydiisto.
- **Unug wuxuu ku bilaabmaa apostrophe.** Qiyamka ku bilaabma `=`, `+`, `-` ama `@` waxay helaan `'` hor ah si miisaska aanay u fulin sida qaacidooyin.
- **{{key:F}} iyo {{key:P}} ma samaynayaan wax.** Waxay shaqeeyaan sawirka, ma aha jadwalka. Marka hore riix tab-ka xaashiga.
