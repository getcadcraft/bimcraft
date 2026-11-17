---
title: Faylka mashruuca oo BimCraft ku gal IFC-ga
summary: Dejinta dhoofinta IFC ee si fiican ugu furmaysa BimCraft (nooca, property sets, base quantities, qolalka, moodelada xidhan, kala-dhaliga), sida loo furo natiijada, iyo waxa dhoofintu hayso.
keywords: dhoofin, dhoofinta ifc, rvt to ifc, beddel, 3d, joomatari, ifc2x3, ifc4, Coordination View, Reference View, Design Transfer View, property sets, base quantities, qolalka, meelaha, faylal xidhan, kala-dhaliga la wadaago, barta sahanka, barta saldhigga mashruuca, dejin
from: 3efd5fc9
---

## Waxa aad samayn doontid

Faylka mashruuca u beddel fayl IFC oo aad ku wareegi karto, ku eegi karto, ku hubin karto oo ku tafatiri karto BimCraft. BimCraft wali ma akhrin moodelka 3D ee gudaha fayl `.rvt`, sidaas darteed dhoofintu waxay ku dhacdaa barnaamijka sameeyay (Revit); BimCraft waxa uu furaa natiijada.

## Tallaabooyinka

1. Mashruuca ku fur barnaamijka sameeyay. Kaarka BimCraft wuxuu magacaabaa nooca lagu kaydiyay.
2. Fur muuqaal 3D ah oo muujinaya waxa aad rabto inaad dhoofiso.
3. Dooro **Faylka > Dhoofin > IFC**.
4. Sanduuqa dhoofinta dooro dejin (ama **Beddel dejinta…**) oo leh dejinta hoose.
5. Dooro gal iyo magac fayl, oo dhoofi.
6. BimCraft gudahiisa, guji {{ui:Dooro fayl}} oo dooro faylka cusub ee `.ifc`. Moodelada xidhan ee loo dhoofiyay faylal gaar ah waxay isla muuqaal ugu furmaan {{ui:Ku dar moodeel}}.

## Dejinta ugu wanaagsan ee halkan furmaysa

| Dejinta dhoofiyaha | Dooro | Sababta |
|---|---|---|
| Nooca IFC | **IFC4 Reference View** eegista, hubinta iyo qadarka ka qaadista; **IFC2X3 Coordination View 2.0** marka kuwa kale u baahan yihiin IFC2X3 | Labaduba si buuxda ayay furmaan. **IFC4 Design Transfer View** ayaa sidoo kale furmaysa, oo leh qaababka saxda ah ee ka badan, laakiin faylku waa weyn yahay oo gaabis badan. |
| Nooca faylka | **IFC** (caadi) | BimCraft ma furo `.ifczip` ama `.ifcxml`. |
| Marxalad / walxaha la arki karo | Marxaladda aad ula jeedo, iyo **Dhoofi kaliya walxaha ku muuqda muuqaalka** marka aad u dejinayso muuqaalka 3D | Waxa ka reebaya waxa aad ula jeedday inaad qariso. |
| Property sets | **Dhoofi property sets-ka Revit** iyo **Dhoofi property sets-ka guud ee IFC** | Waxay noqdaan property sets-ka BimCraft muujiyo {{ui:Sifooyinka}}, kuwaas oo ay isticmaalaan {{ui:Raadi}}, {{ui:Midab}} iyo {{ui:Hubinta moodelka}}. |
| Base quantities | **Dhoofi base quantities** | {{ui:Wadarta qadarka}} iyo jadwalada ayaa isticmaalaan (dherer, bed, mug) halkii ay male-awaal ku saari lahaayeen. |
| Qolalka iyo bedadka | **Dhoofi qolalka muuqaalada 3D** (ama doorashada Rooms / Spaces) | Qolalku waxay yimaadaan sida meelo: guji {{ui:Meelaha}} si aad u aragto. |
| Faylalka xidhan | **Dhoofi faylalka xidhan sida IFC gaar ah** | Xidhiid kasta wuxuu noqdaa fayl gaar ah; ku fur wada {{ui:Ku dar moodeel}} oo waa isku toosaan. |
| Saldhigga kala-dhaliga | **Kala-dhaliga la wadaago** (ama barta sahanka) | Faylku markaas wuxuu sidaa booskiisa khariidadda (IfcMapConversion), si Cabbir › Meel, lakabyada khariidada dhulka iyo daruuraha dhibcaha ee lagu meeleeyay kala-dhaliga khariidadda ay shaqeeyaan. Barta saldhigga mashruuca moodelka ku hayso asalka agtiisa laakiin booskiisa khariidadda ma lahan. |
| Kala-jar darbiyada iyo tiirarka heerka | Shid, markaad qadarka dabaq kasta ka qaadayso | Qaybta dabaq kasta waa walxaheeda gaarka ah. |

## Waxa aad arki doontid

Moodelka 3D, oo dabaqyadiisa laga qaado heerarka mashruuca iyo macluumaadka mashruuca ee sanduuqa {{ui:Faylka}}. **Laga dhoofiyay** wuxuu magacaabaa dhoofiyaha.

## Waxa dhoofintu hayso iyo waxa aan hayn

- **La hayo**: joomatriga, dabaqyada, noocyada walxaha, magacyada, nooca, inta badan cabbirrada (property sets ahaan), base quantities marka la waydiiyo, qolalka oo meelo ah, iyo booska khariidadda ee kala-dhaliga la wadaago.
- **Lama hayo**: muuqaalada, xaashiyada, faallooyinka, qoysaska sida qoysas la tafatiri karo, shaqo-kooxaha iyo ikhtiyaarrada naqshadda. Fayl IFC waa sawirka walxaha moodelka, ma aha mashruuca. Xaashiyada, dhoofi DWG oo ku fur muuqaalka 2D.

## Khaladaadka caadiga ah

- **Cabbirrada ka maqan BimCraft.** Shid doorashooyinka property set-ka ee kor ku qoran oo mar kale dhoofi.
- **Qolalka ka maqan.** Shid doorashada qolalka, kadibna guji {{ui:Meelaha}}.
- **Kaydinta sida `.ifczip`.** Dooro IFC caadi ah, ama ka fur `.ifczip`.
- **Booska khariidadda ma jiro.** Dhoofi kala-dhaliga la wadaago; hubi in barta sahanka mashruuca la dejiyay.
- **Wax-ka-beddelka oo laga sugayo inay dib u socdaan.** Wax-ka-beddelka aad ku kaydiso BimCraft waxay galaan fayl IFC cusub, ma aha faylka mashruuca.
