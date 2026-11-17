---
title: Plaas 'n prent onder die plan
summary: Plaas 'n PNG-, JPEG- of WebP-prent ('n geskandeerde plan, 'n skets, 'n terreinfoto, 'n lugfoto) onder 'n vlak se plan of op 'n vertikale vlak, skaal dit deur twee punte, skuif, draai, vervaag en sluit dit vas, sien dit in 3D en in die plan-PDF, en hou dit langs die model in 'n bundel.
keywords: prent, beeld, agtergrond, PNG, JPEG, WebP, skandeer, skets, foto, lugfoto, terreinplan, skaal, ondeursigtigheid, sluit vas, onderlaag, naspoor
from: e3c78d1f
---

## Plaas 'n prent

Skakel {{ui:Teken}} aan, gaan na die vlak, en kies {{ui:Prent}} in die {{ui:Bou}}-kieslys. Dan {{ui:Voeg prent in…}} en kies 'n PNG-, JPEG- of WebP-lêer. Dit word in jou blaaier gelees en nooit opgelaai nie. Dit verskyn onder die plan, in die aansig gepas, en die werkbalk sê dit is nog nie geskaal nie. Alles wat jy teken, sit bo-op dit.

## Stel die skaal

Kies {{ui:Skaal}}, klik twee punte op die prent waarvan jy die werklike afstand ken (twee punte van 'n muur op 'n geskandeerde plan, 'n maat wat op 'n skets gedruk is), tik dan die afstand in en druk {{key:Enter}}. Die prent groei of krimp rondom die eerste punt wat jy geklik het. {{key:Esc}} kanselleer.

## Plak 'n gekopieerde gebied

In MarkupCraft kopieer {{ui:Kopieer gebied}} 'n deel van 'n PDF-blad as 'n prent. Terug in BimCraft, met 'n vlak se plan wat wys, druk {{key:Ctrl+V}} (of {{ui:Plak}} in die {{ui:Wysig}}-kieslys): die gebied beland op die plan as 'n prent, gesentreer waar die aanwyser is (of in die middel van die aansig). Wanneer die blad 'n tekenskaal gehad het, kom dit in sy ware grootte in, so 'n muur daarop is so lank as jou mure. Sonder een kom dit in papiergrootte in en {{ui:Skaal}} begin, sodat jy twee punte kan klik en hul afstand intik. 'n Gebied wat as oorlegging gekopieer is, begin by die ondeursigtigheid waarmee dit gekopieer is. Dit is een ontdoenstap en word soos enige ander prent gehou.

{{key:Ctrl+V}}-plak neem wat jy laaste gekopieer het: 'n gekopieerde gebied, of iets wat jy in BimCraft gekopieer het. {{key:Ctrl+V}} plak ook enige ander PNG-, JPEG- of WebP-prent op jou knipbord, geplaas soos {{ui:Voeg prent in…}} en nog nie geskaal nie. 'n Gekopieerde gebied word ses uur onthou.

## Skuif, draai, vervaag, sluit vas

{{ui:Skuif}} neem 'n basispunt op die prent en dan die plek waarheen dit moet gaan. {{ui:Draai}} neem 'n hoek in grade, om die prent se middelpunt. {{ui:Ondeursigtigheid}} vervaag dit sodat jou lyne uitstaan. {{ui:Sluit vas}} hou dit daarvan af om te skuif terwyl jy teken; 'n vasgesluite prent laat jou steeds die ondeursigtigheid verander en dit wegsteek. Elke verandering is een ontdoenstap.

## Verskeie prente, verskeie vlakke

'n Prent behoort aan die vlak waarop dit geplaas is en wys op daardie vlak se plan en plafonplan. Klik op 'n prent om daaraan te werk, of kies dit in die lys. {{ui:Verberg}} skakel dit af sonder om dit te verwyder; {{ui:Verwyder}} (of {{key:Delete}}) haal dit uit die model.

## Prente in die 3D-aansig

Elke prent staan ook in die 3D-aansig as 'n plat vlak: 'n plan-prent lê op sy vlak, 'n prent op 'n vertikale vlak staan oor sy snitlyn. Dit word oor die model geteken sonder om dit te versteek, en die model verberg die deel van die prent wat agter hom is. Oorvleuelende prente sorteer volgens afstand. Ondeursigtigheid, Verberg, Sluit vas en Verwyder werk dieselfde, en {{ui:Wys in 3D}} skakel al die vlakke af, in die 3D-aansig alleen. 'n Vlak hou hoogstens 8 prente, om die aansigte vinnig te hou.

## 'n Prent op 'n vertikale vlak

Onder {{ui:Plaas op}} kies {{ui:'n Vertikale vlak (snitlyn)}}, en dan {{ui:Voeg prent in…}}. Klik die twee punte van 'n lyn op die plan (die punt van 'n muurvlak vang vas), of kies 'n benoemde snitlyn van die vlak in {{ui:Oor 'n snitlyn}} en geen klikke is nodig nie. Die prent staan op die vlak oor daardie lyn, so breed as die lyn. Stel sy {{ui:Breedte}}, sy plek {{ui:Langs die lyn}} en sy {{ui:Hoogte bo vlak}} deur te tik; {{ui:Draai}} draai dit in sy eie vlak. 'n Vertikale prent word nie onder die plan geteken nie; die plan wys sy lyn terwyl jy daaraan werk. BimCraft het geen interaktiewe 2D-snitvenster nie: snitte en aansigte word op die blaaie geteken, en prente word nog nie in daardie bladaansigte gedruk nie.

## Druk

{{ui:Druikaansig}} op 'n plan skryf die vlak se prente in die PDF onder die tekening, teen hul skaal, draai en ondeursigtigheid, afgesny by die blad; 'n verborge prent bly uit. 'n JPEG gaan in soos dit is; ander prente word eers na 200 dpi op die blad afgeskaal.

## Langs die model gehou

Die prent se grepe word nie in die IFC-teks geskryf nie. Die model verwys na elk een volgens naam (as 'n IfcDocumentReference soos pictures/<id>.png) en die grepe reis in 'n projekbundel. Gebruik {{ui:Stoor as bundel…}} (of {{ui:Stoor as IFC}} en kies dit): jy kry een .ccbundle-lêer met die model en sy prente, die IFC bly klein en wysigings bly vinnig. Maak die .ccbundle oop en die prente is terug.

'n Gewone .ifc kan nie 'n prent hou sonder om groot te word nie. Wanneer jy een stoor, sê BimCraft hoeveel prente buite dit gehou word en bied 'n bundel aan, of 'n gewone IFC wat die prente tot 512 KB insluit en die ander uitlaat. 'n Gewone .ifc wat sonder sy bundel oopgemaak word, wys daardie prente as ontbrekend, en Probleme lys hulle; maak die .ccbundle oop waarin hulle gestoor is. Lêers wat deur die eerste weergawe gestoor is, met die prent binne die IFC, maak steeds oop, en 'n bundelstoor skuif hul prente uit. 'n Prent word soos dit is gehou tot 6 MB; 'n groter een word eers kleiner gemaak, en jy word vertel. Ander programme maak die model oop en ignoreer die prente. 'n Prent wat jy nog nie geskaal het nie, word as 'n nota in Probleme gelys.

## In snit- en aansigblaaie

'n Prent op 'n vertikale vlak (kies {{ui:Vertikaal}} in die prentpaneel en klik die twee punte van 'n lyn, of plaas dit oor 'n benoemde snitlyn) word gedruk in die bladaansigte wat reguit daarna kyk. 'n Snit wys 'n prent wat op sy snitlyn staan, of wat oor daardie snitlyn volgens naam geplaas is. 'n Aansig wys elke vertikale prent waarvan die vlak daarna kyk. Die prent word onder die aansig se lyne geteken, teen die aansig se skaal, afgesny by die aansig, en behou sy ondeursigtigheid. Maak {{ui:Blaaie…}} oop om dit te sien; die blad-PDF dra dit as 'n beeld. Van agter gesien is 'n prent gespieël, soos in 3D. Verborge prente word weggelaat.
