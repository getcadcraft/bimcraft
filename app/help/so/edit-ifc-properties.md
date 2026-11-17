---
title: Beddel sifooyinka IFC oo kaydi nuqul la tafatiray
summary: Beddel magaca walxa, tag-ka, sharaxaadda ama qiimaha sifada, ka noqo, oo soo dejiso fayl IFC cusub iyada oo faylka asalka uu sidiisa yahay.
keywords: tafatir, beddel, sifooyinka, cabbiraha, tag, magac, magac beddel, calaamad, kaydi sida, soo dejin, ka noqo, koobiyee, ifc, qor
from: f8035d62
---

## Waxa aad samayn doontid

Saxo xogta moodel IFC: magac beddel walxa, hagaaji tag-ka, beddel qiimaha sifada. Kadibna kaydi fayl IFC cusub oo isbeddellada ku jira. Faylka aad furtay waligiis lama taabto.

## Waxa aad beddeli karto

| Goob | Tafatir ah |
|---|---|
| Magaca, Nooca walxa, Tag, Sharaxaad | Haa |
| Qiimayaasha sifada keligood (qoraal, lambarro, Haa/Maya) | Haa |
| Sifooyinka nooca (goobaha ku calaamadsan "(type)") | Haa, isbeddelkuna wuxuu khuseeyaa walxaha nooca oo dhan |
| Nooca, GlobalId, Khadka | Maya |
| Tirooyinka (dherer, meel, mug, tiro) | Maya |
| Liisaska, liiska doorashada iyo qiimayaasha dhowr qaybood | Maya |
| Joomatari, meel, ku darid ama tirtirid walxaha | Maya |

## Tallaabooyin

1. Fur moodel IFC oo riix walxa aad rabto inaad beddesho.
2. Panelka {{ui:Properties}}, riix qiimaha aad rabto inaad beddesho. Wuxuu noqdaa sanduuq qoraal. Qiime madhan wuxuu muujinayaa *empty*.
3. Qor qiimaha cusub.
4. Riix {{key:Enter}}, ama riix meel kale si aad u hayso. Riix {{key:Esc}} si aad u joojiso.
5. Eeg qiimaha: hadda waa xarfo culus oo jeex buluug ah ayaa dhinacaa, taas oo calaamad u ah qiime la tafatiray.
6. Eeg qaybta {{ui:Changes}} bidix: isbeddelka waxa lagu liistaa sida *walxa*: *goobta*, qiimihii hore ilaa qiimaha cusub.
7. Ku celi qiimayaasha kale ama walxaha kale.
8. Riix {{ui:Save as IFC}} (waxay muujinaysaa inta isbeddel ee sugaysa, tusaale "Save as IFC (3)"), ama riix {{key:Mod+S}}.
9. Ka hel "*magaca asalka* (edited).ifc" galkaaga soo dejinta.

## Waxa aad arki lahayd

Sadarka xaaladda wuxuu leeyahay "Saved *name* (edited).ifc with *n* changes (… bytes). Your original file is unchanged." Liiska {{ui:Changes}} wuu madhnaanayaa, diyaar u ah wareegga xiga.

## Noocyada qiimaha

- **Qoraal**: wax kasta oo aad qorto waa la ilaalinayaa sidaas oo kale. Nadiifinta Magaca, Nooca walxa, Tag ama Sharaxaad waxay ka saaraysaa qiimaha.
- **Lambarro**: qor lambar fudud, tusaale `2.4` ama `1200`, unugyada faylka. Ma jiro calaamad unug. Wax kale wuxuu muujinayaa "Use a number."
- **Lambarro oo dhan** (tiro, lambar oo buuxa): "Use a whole number." haddii aad qorto meel tobanle.
- **Haa/Maya**: qiimuhu wuxuu noqdaa liis doorasho oo leh Haa iyo Maya.

Qiime kasta wuxuu hayaa nooca IFC, sidaas darteed lambarku wuu sii ahaanayaa lambar, barnaamijyada kalena si sax ah ayay u akhrin doonaan.

## Ka noqo

1. Riix {{ui:Undo}} qaybta {{ui:Changes}}, ama riix {{key:Mod+Z}} adigoo aan ku qorin goob.
2. Ku celi si aad uga noqoto isbeddello dheeraad ah. Ka noqo kasta wuxuu saaraa isbeddelka ugu cusub.

Kaydinta ka dib ma noqon kartid: ka dib kaydinta liiska wuu bilaabmaa mar kale. Faylka la kaydiyay wuxuu hayaa wax walba.

## Sababta tafatirkaagu u beddelo hal walax oo keliya

Qalabyada soo dhoofiya waxay kaydiyaan meel adiga oo wadaagaya xog. Hal goobo sifo ah ayaa laga yaabaa in ay wadaagaan labaatan albaab, hal qiime ("Fire rating: 60 min") ayaa laga yaabaa in lagu liisto sagaal iyo sagaashan goobood. Haddii BimCraft uu si toos ah u beddelo qiimaha la wadaago, walx kasta oo wadaaga wuu isbeddelayaa.

Sidaas darteed BimCraft wuu koobiyeeyaa ka hor inta uusan qorin:

- Haddii goobta sifada aad tafatirayso ay la wadaago walxo kale, walxaaga wuxuu helaa nuqul gaar ah goobtaas, oo nuqulka keliya ayaa isbeddela.
- Haddii qiimuhu la wadaago goobo kale, goobtaada wuxuu helaa nuqul gaar ah qiimaha.

Walxaha deriska ahi waxay sii hayaan xogtooda hore. Tan waxa loo yaqaan *copy-on-write*. Waxay ku daraysaa dhowr qoraal oo yar faylka, kuwaas oo barnaamijyada IFC oo dhan si caadi ah u akhriyaan.

**Sifooyinka nooca waa ka reeban tahay ujeed ahaan.** Goobta ku calaamadsan "(type)" waxay ka mid tahay nooca walxa, IFC-nina walxaha nooca kasta waxay ka akhriyaan halkaas. Beddelku wuxuu beddelaa nooca, sidaas darteed walxaha nooca oo dhan waxay muujinayaan qiimaha cusub. Liiska {{ui:Changes}} wuxuu calaamadiyaa tafatirkan "(type)". Eeg [Beddel sifada nooca walxaha nooca oo dhan](topic:type-vs-instance).

## Digniinno ka hor inta aadan lumin shaqada

- Fur fayl kale markaad leedahay isbeddello aan la kaydin, waxay weydiisaa "You have *n* unsaved changes to *file*. Discard them?" Riix Cancel si aad u sii shaqeyso, kadibna kaydi.
- Xidhida ama dib u soo rogida tab-ka isbeddello aan la kaydin, browser-ku wuxuu weydiinayaa inaad rabto inaad baxdo.

## Khaladaad caadi ah

- **Qorista unugyada.** `2400 mm` waa la diidaa. Qor `2400`.
- **Beddelka sifada nooca markaad ula jeeddo hal walax.** Raadi calaamadda "(type)" ka hor inta aadan qorin. Haddii aad rabto in hal walax ay kala duwanaato, beddel sifada halkaas ama Tag-ka ama Magaca.
- **Ku filashada in faylka asalka uu isbeddelo.** Kaydinta had iyo jeer waxay soo dejisaa fayl cusub. Adigu u beddel faylka asalka haddii aad rabto, oo ku hay nuqul.
- **Riix {{key:Mod+S}} isbeddel la'aan.** BimCraft wuxuu kaydiyaa kaliya marka wax la kaydiyo; haddii kale browser-kaaga "Save page" ayaa furmi karta. Xir.
- **Kaydinta laba jeer oo rajaynaya laba fayl oo yar.** Kaydin kasta wuxuu ku jiraa tafatir kasta tan iyo markii aad furtay moodelka.
- **Ku filashada in tafatirku uu ku noqdo fayl mashruuc.** BimCraft wuxuu qoraa IFC kaliya. Keen IFC-ga la tafatiray barnaamijkaaga sida aad u keento IFC kasta.
