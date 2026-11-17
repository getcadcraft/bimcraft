---
title: Skjöl og endurskoðanir (geymslan)
summary: Skref fyrir skref yfirferð á einu raunverulegu verkefni: settu möppu verkefnis með IFC-líkönum undir stjórn, skráðu líkan út, breyttu því, skráðu það inn með athugasemd, sendu það í yfirferð, samþykktu og gefðu það út, skoðaðu söguna og hvað notar það, hvað annar aðili sér á meðan það er læst, og hvernig þetta virkar með skýjamöppum.
keywords: geymsla, skjöl, yfirferð, kennsla, útskráning, innskráning, endurskoðun, útgáfa, samþykkja, læsing, saga, IFC, líkan, skýjamappa, verkefnamappa, tveir aðilar, sameiginleg mappa
from: 0a753f25
---

## Það sem þú gerir

Þú ert Ana, sem vinnur að Riverside Clinic með samstarfsmanni, Ben. IFC-líkön verkefnisins eru í einni möppu sem þið bæði náið í (sameiginlegt drif, samstilltri möppu eða skýjamöppu). Í lokin hefur ein skrá farið frá fyrsta eintaki yfir í gefna endurskoðun **A**, hefur verið breytt aftur sem **B.1**, þú hefur séð hver gerði hvað, og þú hefur séð hvað Ben sér þegar þú heldur á skránni.

Allt er geymt í falinni möppu `.ccvault` við hliðina á skránum þínum: enginn þjónn, ekkert hlaðið upp (skýjamappa er undantekningin, sjá síðasta skrefið). Fyrir alla hnappa og allar reglur á einum stað, sjá efnið *Skjöl: útskráning, endurskoðanir og útgáfa* þar sem forritið þitt hefur það.

## 1. Settu upp verkefnamöppuna

1. Veldu {{ui:Skjöl}} við hliðina á {{ui:Opna möppu}} á upphafsskjánum, eða {{ui:Skjöl…}} í valmyndinni **{{ui:Skrá}}**.
2. Veldu {{ui:Veldu verkefnamöppuna}} og veldu möppuna sem geymir IFC-líkön verkefnisins. (Verkefnamöppur virka í Studio og í vöfrum sem geta opnað möppu, eins og Chrome og Edge. Í öðrum vöfrum segir spjaldið það.)
3. Veldu {{ui:Breyting}} við hliðina á **Þú:** og skrifaðu nafnið þitt, `Ana` (ef spurt er, líka heiti þessarar tölvu). Spjaldið segir nú *Þú: Ana á* og tölvan þín. Nafnið þitt fylgir öllu sem þú gerir.
4. Veldu {{ui:Stofna geymslu í þessari möppu}} og skrifaðu heiti verkefnisins, `Riverside clinic`. Spjaldið segir *Geymsla stofnuð fyrir Riverside clinic.*

## 2. Settu skrá undir stjórn

1. Opnaðu **Skrár sem eru ekki í geymslunni** og veldu {{ui:Bæta við}} við hliðina á `models/House.ifc`.
2. Hún birtist undir **Skrár í geymslunni** í endurskoðun **A.1**, staða **Í vinnslu**. A.1 er fyrsta eintakið; geymslan geymir afrit af hverri endurskoðun.

## 3. Skráðu út, breyttu, skráðu inn

1. Veldu {{ui:Opna}} við hliðina á `models/House.ifc`. Líkanið opnast í BimCraft og spjaldið lokast svo þú sjáir það. Opnaðu spjaldið aftur frá {{ui:Skjöl}}.
2. Opnaðu spjaldið aftur og veldu {{ui:Skrá út}}. Röðin segir nú **Skráð út til þín**. Læsingarskrá hefur verið búin til í `.ccvault/locks`; enginn annar getur skráð þessa skrá út fyrr en þú skráir hana inn.
3. Breyttu líkaninu: færðu vegg, bættu við hurð. Vistun er hafnað nema líkanið sé skráð út til þín, og segir af hverju; Vista sem virkar alltaf fyrir afrit af þínu eigin.
4. Opnaðu spjaldið, veldu {{ui:Skrá inn}} og skrifaðu hvað breyttist (`Færði hurðina`). Spjaldið segir *skráð inn sem A.2*. Skráin í verkefnamöppunni er nú líkanið sem þú hafðir opið, og læsingin er farin.

Ef þú skiptir um skoðun, skilar {{ui:Afturkalla útskráningu}} skránni án nýrrar endurskoðunar.

## 4. Yfirferð og útgáfa

1. Veldu {{ui:Senda í yfirferð}}. Staðan verður **Í yfirferð** og skráin verður lesin eingöngu.
2. Áður en þú samþykkir skaltu velja {{ui:Stillingar verkefnis}} og skrá hverjir mega samþykkja (eitt nafn í línu), til dæmis `Ben` og `Carla`, og haka í regluna um að samþykkjandinn verði að vera einhver annar en höfundurinn. Veldu {{ui:Vista stillingar}}. Nú hafnar geymslan sjálf öllum öðrum.
3. Ben (eða Carla) velur {{ui:Samþykkja}} og skrifar nafn samþykkjandans. Staðan verður **Gefið út** og endurskoðunin verður **A**, með *samþykkt af* og nafninu. Skrá sem er gefin út er lesin eingöngu. {{ui:Senda til baka}} hefði skilað henni í **Í vinnslu**, með ástæðu.

Nafn samþykkjandans er nafnið sem skrifað er í spjaldið; það er skrá yfir hver skrifaði undir, ekki sönnun á auðkenni.

## 5. Ný endurskoðun

1. Á skránni sem er gefin út skaltu velja {{ui:Ný endurskoðun}}. Þú heldur henni fyrir næsta stafinn.
2. Breyttu henni, og veldu síðan {{ui:Skrá inn}}. Endurskoðunin er **B.1**, í vinnslu. Gefðu hana út á sama hátt og hún verður **B**. {{ui:Afturkalla útskráningu}} fyrir fyrstu innskráningu skilur hana eftir í **A**.

Stafir endurskoðana ganga A, B … Z, AA, AB. Ef staðallinn þinn sleppir sumum stöfum, sleppir verkefnisstillingin *Nota röð ASME Y14.35* I, O, Q, S, X og Z í næstu endurskoðunum.

## 6. Sjáðu hvað gerðist

Veldu heiti skrárinnar til að opna upplýsingar hennar:

- **{{ui:Saga}}**: hver atburður, nýjastur fyrst, með hver, hvaða tölva og hvenær: *Skráð inn A.2* af Ana, *Gefið út* af Ben, og svo framvegis.
- **{{ui:Endurskoðanir}}**: töflu endurskoðana: hver endurskoðun sem er geymd, með dagsetningu sinni, hver skráði hana inn, athugasemdinni og hver samþykkti. Geymslan geymir afrit af hverri í `.ccvault/revs`.
- **{{ui:Notar}}**: skjölin sem IFC-líkan vísar í.
- **{{ui:Notuð af}}**: Notuð af listar öll líkön í geymslunni sem vísa í þessa skrá.

## Líkön sem vísa í önnur skjöl

IFC-líkan sem vísar í önnur skjöl í möppunni (teikningar, lista) sýnir þau undir **Notar**, og hvert þeirra sýnir líkanið undir **Notuð af**. Skráðu skjal inn og þú sérð hvaða líkön vísa í það.

## 7. Hvað Ben sér á meðan þú heldur á skránni

Skráðu skrána út aftur, og biddu Ben um að opna sömu verkefnamöppu á sinni tölvu og opna spjaldið. Á röð skráarinnar sér hann **Skráð út af Ana á** tölvu þinni **síðan** tímann, og engan hnapp {{ui:Skrá út}}. Ef hann reynir samt hafnar geymslan því: læsingin er skrá sem kerfið býr ekki til tvisvar, þannig að tveir aðilar geta ekki haldið skránni báðir, jafnvel á sömu sekúndubroti, þegar mappan er á disknum í Studio. (Í vafra leyfir mappan aðeins bestu tilraun, og spjaldið segir það undir **Mappa**.)

Ef Ana er fjarverandi og Ben þarf skrána, losar {{ui:Rjúfa útskráningu}} hana. Hann verður að skrifa ástæðu; hún fer í skráninguna ásamt því hver átti útskráninguna. Þegar verkefnið skráir stjórnendur geta aðeins þeir gert þetta. Útskráning eldri en tímamörkin (14 dagar sjálfgefið) er merkt *lengi*. Eftir rof er seinni innskráning Ana hafnað, þannig að þið getið ekki yfirskrifað hvort annað.

## 8. Skýjamöppur

Skýjamappa er verkefnamappa sem er geymd í skýjageymslu liðsins, þannig að liðið þarf enga sameiginlega drifið. Í Studio, innskráð á CadCraft-reikninginn þinn, sýnir spjaldið {{ui:Opna skýjamöppu}} við hliðina á {{ui:Veldu verkefnamöppuna}}. Veldu hana og veldu möppuna, sem er skráð sem vinnusvæði / mappa. Eigandi vinnusvæðis býr fyrst til möppuna, og skýjageymsla liðsins verður að vera virk. Allt ofangreint virkar eins; þjónninn býr til læsinguna, og hún er stíf milli fólks. Ef þú ert ekki innskráð(ur) segir spjaldið að skrá sig inn. Í venjulegum vafraflipa er skýjahnappurinn ekki boðinn; notaðu Studio.

## Prófaðu það

Gerðu átta skrefin hér að ofan með afriti af raunverulegri skrá. Fyrir skrefin tvö þarftu annan aðila, eða tvo glugga með tveimur nöfnum. Ef þú prófar með raunverulegri sameiginlegri möppu, skráir síða Prófanir samfélagsins athugun sem spyr nákvæmlega þetta og tekur við niðurstöðum.
