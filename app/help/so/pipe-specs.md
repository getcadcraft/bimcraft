---
title: Qaababka tuubada, faalfooyinka, damperrada iyo qoysaska soo saaraha
summary: Samee qaababkaaga tuubada (miisaska cabbirka oo leh agabka, xidhka iyo caarnimada), oo lagu kaydiyo faylka moodeelka; dhig faalfooyin, shaandhe iyo damperro xariiqyada; oo keenso faalfo ama qalab soo saare oo qoys ah oo leh dekedo xidhiidh.
keywords: qaabka tuubada, qaababka tuubada, qaabka xariiqa, fasalka tuubada, tuubo gaar ah, miisaska cabbirka, tuubo, tuubo nadiif ah, bir alaab, jadwal, dibadda dhexroorka, qaro darbiga, dhexroorka gudaha, caarnimo, cadaadis qiimo, csv, json, soo geli, u dhoof, miis, xaashi, bpe, din, en 10357, en 10255, faalfo, faalfooyin, faalfo kala goysa, faalfo dheelitir, faalfo xakameyn, shaandhe, damper, damper mugga, damper dabka, oem, soo saare, qoys, qoysas, dekedo, xidhiidh, step, obj, gltf, ifc, radiyaatar, konvektor, kulaykeeye panel, qaybiye hawada, faafiye, dhegle
from: bc2f7c4e
---

## Waxa aad samayn doontid

Tuubo ku rasm qaabkaaga gaarka ah halkii aad ka isticmaali lahayd miisaska dhismaha ee birta, naxaasta iyo plastikada, dul dhig faalfooyin iyo damperro xariiqyada, oo dhig moodeel soo saare oo leh dekedo ay tuubooyinku ku xidhmaan.

:::note
Qalab qabyo iyo isku-duubis. Qaabka tuubada wuxuu hayaa tirooyinka aad ku qortay ama aad soo gelisay: hubi miis kasta si waafaqsan heerkaaga mashruuca. Faalfooyinka, shaandheyada iyo damperrada ku dhex jira waa qaabab fudud oo lagu cabbiray xariiqda, ma aha dhererka soo saaraha ama heerka faalfaha.
:::

## Samee qaabka tuubada

1. Shid {{ui:Sawir}}, fur {{ui:Dhismaha}} oo dooro {{ui:Qaababka tuubada}}. Isla badhanka ayaa ku yaal qalabka Tuubo.
2. Dooro {{ui:Cusub}}, ama ka bilow fayl, koobiyeyn ama qaab bilow oo hoos ku qoran.
3. Ku qor magaciisa, heerka ama tixraaca uu raaco, agabka iyo nooca dhammaadka ama isku xidhka.
4. Ku qor hal safka cabbir kasta: magaca cabbirka, dibadda dhexroorka iyo darbiga, millimitir ku. Ku qor dhexroorka gudaha halkii darbiga haddii aad haysato taas: kan kale waa la buuxiyaa. DN, cadaadis qiimo iyo miisaanka waa ikhtiyaari.
5. Ikhtiyaari: caarnimada millimitir ku (xisaabta hoos u dhigista cadaadiska ayaa isticmaasha), dhumucda dhufashada ee xariiqyada cusub ka bilaabmaan, dhexroorka qallooca oo ah qayb ka mid ah dibadda dhexroorka, in qaabku leeyahay tee iyo reducer, iyo midab u gaar ah 3D.
6. Calaamadi adeegyada xariiqyadooda cusub ee ka bilaabmi doona qaabkan, tusaale ahaan biyo qabow.
7. Dooro {{ui:Ku kaydi moodelka}}.

Qaababka waxa lagu kaydiyaa faylka moodeelka. Qof kasta oo furta faylka ayaa leh, Undo wuu ka soo celiyaa isbedelka.

Qaab, ama mid ka mid ah cabbirradiisa, looma tirtiri karo intii xariiq lagu rasmeeyay. Isbedelka tirooyinka cabbir kasta ayaa dib u rasmeeya xariiqyada cabbirkaas.

## Dib ugu isticmaal qaab moodeel kale

- {{ui:U dhoof .json}} wuxuu kaydiyaa qaabka la doortay fayl yar; {{ui:U dhoof dhammaan}} wuxuu kaydiyaa dhammaan qaababka moodeelka. {{ui:Soo geli fayl}} ayaa dib u akhrisa.
- {{ui:U dhoof .csv}} wuxuu kaydiyaa miiska cabbirka xaashi xisaab. {{ui:Soo geli fayl}} wuxuu sidoo kale akhrisaa `.csv`.
- {{ui:Ku dhaji safafka}} wuxuu qaataa miis laga koobiyeeyay xaashi xisaab. Safka koowaad wuxuu magacaabaa tiirarka: `Size`, `OD` iyo `Wall` (ama `ID`), iyo ikhtiyaari `DN`, `Pressure`, `Weight`. Hal safka cabbir kasta. Tirooyinku waa millimitir, inkastoo aad dooratid inch ama unugga oo qora unugiisa (`0.065 in`).

## Qaababka bilowga

{{ui:Ku dar qaab bilow}} wuxuu moodeelkaaga ku darayaa mid ka mid ah kuwan, nuqul aad tafatiri karto:

| Bilow | Cabbirrada |
|---|---|
| ASME BPE tube | 1/4" ilaa 6" |
| EN 10357 series A tube (DIN 11850 row 2) | DN10 ilaa DN200 |
| EN 10255 steel tube, medium series | DN15 ilaa DN150 |
| EN 10255 steel tube, heavy series | DN15 ilaa DN125 |

Miisaskan waa dibadda dhexroorka iyo darbiyada ay laba ama in ka badan bogagga bixiyeyaasha ee la daabacay ku daabacaan heerka, oo ay isku raacaan. Heerarka laftooda looma soo qaadin. Cabbirrada uu hal bog keliya siiyay waa laga reebay. Bilow kasta wuxuu muujiyaa bogagga ilaha ah, wuxuuna ku calaamadaysan yahay "hubi heerkaaga mashruuca". Caarnimo, cadaadis qiimo ama miisaan lama siin.

## Xariiq ku rasm qaab

1. Dooro {{ui:Tuubo}}. Xariiq ku bilaabma adeeg aad ku calaamaysay qaab, wuxuu ku bilaabmaa qaabkaas. Xariiq kasta oo kale, dooro qaabka liiska agabka: qaababka waxa lagu liistaa agabka dhismaha ka dib sida "Qaab: magac".
2. Liiska cabbirku hadda wuxuu haysaa cabbirrada qaabkaas oo keliya. Dooro mid oo xariiqda rasm.

Si aad xariiq ugu wareejiso qaab markii dambe, dooro oo beddel **Material** ee Properties. Cabbirkeedu wuxuu noqonayaa cabbirka qaabka ugu dhow ee dibadda dhexroorka.

Faylka IFC tuubadu waxay leedahay magaca qaabka, heerka, agabka, xidhka iyo cabbirrada (`CadCraft_PipeSpec` iyo `Pset_PipeSegmentTypeCommon`, tuubada iyo nooceeda).

Xisaabaha cabbirka iyo hoos u dhigista cadaadiska waxay akhriyaan dhexroorka gudaha ee qaabka. Marka qaabku caarnimo leeyahay, xoogga xariiqda waxa lagu xisaabiyaa Darcy-Weisbach; haddii kale, caadiga xisaabta ayaa la isticmaalaa.

## Faalfooyin, shaandhe iyo damperro

1. Dooro {{ui:Faalfo}} oo dooro nooca bar-ka: gate, ball, butterfly, globe, check, balancing ama control valve, ama shaandhe, xariiqyada; damper mugga ama damper dabka, tuubada hawada.
2. Guji xariiqda meesha ay tagayso. Xariiqda waa la jarayaa agteeda, labada dhinac ayay isku xidhan yihiin. Waxay qaadaa cabbirka xariiqda oo waxay la socotaa xariiqda.

Properties of the run wuxuu liistaa mid kasta oo leh {{ui:Ka saar}}; xariiqda mar kale ayaa isku xidhma.

Xisaabta hoos u dhigista cadaadiska waxay tirinta khasaaraha fitting-ka faalfaha gate, ball, globe iyo check kaliya. Noocyada kale, damperrada iyo qoysaska soo saaraha khasaare ma darayaan halkaas: u oggolow kaaga hubinta. Waxa lagu tiriyaa jadwalka **Fittings iyo faalfooyin** iyo takeoff-ka, waxaana lagu qoraa IFC sida faalfo, shaandhe (strainer) iyo damperro leh laba dekedo oo isku xidhan.

## Moodeel soo saare sida qoys

1. Fur {{ui:Dhismaha}} oo dooro {{ui:Qoysaska}}, kadibna {{ui:Soo geli moodeel}}. Waxa la akhriyaa IFC, STEP, OBJ, STL, glTF iyo faylalka shayga Maktabadda. Faylalka OBJ iyo STL, marka hore deji unitiyada faylka iyo axis-ka sare.
2. Sanduuqa dekedaha, ku qor magaca, soo saaraha iyo lambarka moodeelka.
3. Dooro in ay tahay **xariiq saaran** (faalfo, shaandhe ama damper) ama **Qalabka**, iyo sida loo qoro.
4. Siiso dekedaheeda. Mid kasta wuxuu leeyahay magac, tuubo ama tuubada hawada, adeegga, cabbirka millimitir (dibadda dhexroorka tuubada), cabbirka magaca sida qaabkaaga u magacaabo, nooca dhammaadka, booska iyo jihada uu u jeedo. {{ui:Wajiga dushiisa}} wuxuu dekedda dhigaa bartamaha dhinac kasta oo sanduuqa moodeelka ah. Muuqaalka sare ee yar wuxuu muujiyaa dekedaha.
5. Dooro {{ui:Kaydi qoyska moodeelka gudihiisa}}.

Qoys xariiq saaran wuxuu u baahan yahay laba dekedood oo isu jeeda ka fogaysa oo ku yaal hal khad. Dooro liiska qalabka Faalfo oo guji xariiq: waa lagu dhigi doonaa dhererkiisa, tuubooyinkuna dekedahiisa ayay ku xidhmaan.

Qoys lama fidiyo. Haddii dekedihiisu aanay ahayn cabbirka xariiqda, waa lagu sheegi doonaa markaad dhigayso, {{ui:Hubi xidhiidhka}} ayaa liistaa.

Qoyska qalabka waxa lagu dhigaa {{ui:Qalabka}}, nooca **qoyska soo saaraha**. Tuubooyinka iyo tuubada hawada dekedahiisa ayay ku xidhmaan.

{{ui:Soo dejiso shay Maktabad ahaan}} wuxuu qoyska dekedahiisa ku kaydiyaa fayl aad u gudbin karto Maktabadda.

## Radiyaatarrada iyo konvektorrada

{{ui:Qalabka}} wuxuu sidoo kale leeyahay **Radiyaatar** iyo **Konvektor / kulaykeeye panel**: jidh guud oo leh xidhiidh socod iyo soo celin biyo kulaynta. Eeg [Qalabka MEP ee dekedaha leh](topic:mep-equipment).
