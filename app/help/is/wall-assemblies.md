---
title: Veggjasamsetningar og viðmiðunarmál
summary: Búðu til þínar eigin veggjagerðir lag fyrir lag með skilgreindum kjarna, haltu efnissafni verkefnisins og settu málsetningar á fleti og miðlínur sem haldast tengdar þegar veggurinn breytist.
keywords: lod, þróunarstig, lod 200, lod 300, almennur, veggjasamsetning, gerð veggjar, lög, kjarni, kjarnafletur, kjarnamiðlína, holrými, loftbil, himna, vindhimna, efnissafn, efni, þykkt, viðmiðunarmál, málsetning, tengd, staðsetningarlína, klæðning, stoð, gipsplata
from: 4ea8fbf5
---

## Það sem þú gerir

Búðu til veggjagerð sem passar við vegginn sem þú ætlar að byggja: klæðningu, undirklæðningu, stoðkjarna sem er 5½ tomma og gipsplötu, eða múrstein, loftbil og timburvegg. Merktu hvaða lög eru kjarninn, svo málsetning eða staðsetningarlína geti haldið kjarnanum á meðan frágangurinn í kringum hann breytist. Settu síðan málsetningar á veggi við þá fleti og miðlínur sem þú átt við.

## Búa til veggjagerð

1. Byrjaðu á byggingu eða opnaðu IFC-líkan og kveiktu á {{ui:Draw}}, og veldu síðan verkfærið {{ui:Wall}}.
2. Veldu byrjunargerð í {{ui:Wall type}} og opnaðu {{ui:Veggjasamsetningar…}}. Byrjunargerð opnast sem afrit; gefðu nýju gerðinni nafn.
3. Lögin ganga frá ytra byrði efst í listanum að innra byrði neðst. Veldu efni hvers lags, sláðu inn þykkt þess (í einingum verkefnisins, eða tilteknar einingar eins og `12.7 mm` eða `1/2"`), veldu hlutverk þess (frágangur, undirlag, burðarvirki, einangrun, himna) og merktu við **Kjarna**-lögin. Kjarninn verður að vera ein samfelld heild.
4. {{ui:Bæta við lagi}} bætir við lagi, {{ui:Bæta við loftbili}} bætir við loftbili með loftun (óskilgreint, óloftað, loftað), {{ui:Bæta við himnu}} bætir við lagi án nafnþykktar, eins og vindhimnu. Örvarnar færa lag út á við eða inn á við.
5. Forskoðunin teiknar lögin í réttum hlutföllum, með kjarnann undirstrikaðan, númeruð eins og raðirnar, og setur málsetningu á hvert lag, kjarnann og heildina. {{ui:Vista gerð}}.

Nýja gerðin er á lista verkfærisins {{ui:Veggur}} og í **Eiginleikum** valins veggs. Þegar þú vistar gerð sem þú breytir breytast allir veggir sem nota hana; {{ui:Afrita gerð}} býr til sérstaka gerð og gefur hana aðeins þeim veggjum sem þú valdir. Hver vistun er eitt skref til afturköllunar, ásamt veggjunum sem hún færir, hurðum og gluggum í þeim og málsetningunum sem ráðast af þeim.

Loftbil bætir við breidd. Himna bætir engu við: hún helst í gerðinni svo listi geti fundið hana síðar, og hún telst ekki með í þykkt veggsins eða kjarnans. Loftbil eða himna telst aldrei til efnis í föstu formi. Í skrá sem vistuð er sem IFC2X3 er himna geymd í skrá gerðarinnar en sleppt úr efnislögum hennar.

## Merktu gerð með þróunarstigi hennar (LOD)

Gerð getur sagt til um hversu langt hún er þróuð. Í ritlinum býður **Þróunarstig (LOD)** upp á fasta skala 100, 200, 300, 350, 400 og 500, eða **Ekki stillt**. Almennur veggur („Wall 230 generic“) er LOD 100 eða 200; ákveðin uppbygging með raunverulegum lögum sínum („230 clay brick, plastered both sides“) er LOD 300 eða hærra. Merkið er þitt að stilla: BimCraft reiknar það ekki út og byrjunargerðirnar hafa engin.

Merkið birtist við hlið nafns gerðarinnar á lista gerða í verkfærinu {{ui:Veggur}}, í **Eiginleikum** veggs og á listanum [{{ui:Skipta um gerð}}](topic:wall-tools), og skýrslan eftir skipti segir hvort þróunarstigið hækkaði eða lækkaði. Til að sjá það á listanum **Veggir eftir gerð** og í CSV-skrá hans skaltu merkja **Sýna þróunarstig hverrar veggjagerðar í veggjalistanum** í {{ui:Stillingar}} › BimCraft › {{ui:Veggir}}: þá bætist síðasti dálkurinn, LOD, við. Það er vistað í IFC-skránni með gerðinni (í eiginleikasetti gerðarinnar `CadCraft_WallType`, sem eiginleikinn `LOD`, og inni í skrá gerðarinnar), svo það er þarna þegar þú opnar skrána aftur. Merkið er eingöngu á veggjagerðum í bili, ekki á stökum byggingarhlutum eða öðrum gerðum byggingarhluta.

## Almennir veggir fyrir skissustigið

Listi yfir gerðir verkfærisins {{ui:Veggur}} byrjar á tveimur **almennum** veggjum: **Generic wall 200 mm (exterior)** og **Generic wall 100 mm (interior)**. Hvor um sig er eitt lag af almenna efninu, merkt LOD 200. Notaðu þá þegar þú veist hvar veggirnir eiga að vera en ekki enn úr hverju þeir eru gerðir.

Veggur sem gerð hans er merkt **LOD 100** eða **LOD 200** er teiknaður á öllum grunnmyndum sem **eitt skyggt band**, á öllum smáatriðastigum: engin lög, engar lagalínur. Þetta á við um almennu veggina og um hvaða gerð sem þú átt sjálf og merkir LOD 100 eða 200. Veggurinn sjálfur er fullgerður: hann hefur þykkt sína, hurðir og glugga, rými sín og magntölur sínar.

Til að þróa hann skaltu skipta um gerð hans ({{ui:Breyta}} › {{ui:Veggir}} › **Skipta um gerð**, eða {{ui:Gerð veggjar}} í **Eiginleikum**). Veggurinn er aldrei teiknaður aftur: sami veggurinn tekur nýju gerðina og skýrslan segir hvað færðist. Gerð merkt LOD 300 eða hærra er teiknuð með lögum sínum eins og áður.

Til að teikna alla veggi eftir lögum þeirra, hvaða merki sem þeir hafa: {{ui:Stillingar}} › BimCraft › {{ui:Veggir}}, og taktu hakið af **Teikna veggi af gerð LOD 100 eða LOD 200 sem eitt skyggt band**.

Byrjunarhurðir og -gluggar eru líka almennar tegundir (stærð og opnunarháttur, ekki vara). Með **Sýna þróunarstig hverrar veggjagerðar í veggjalistanum** kveikt sýna listar yfir hurðir og glugga LOD 200 fyrir þá.

## Gefðu gerð magntökugögn sín

Í ritli veggjagerðar tekur **Magntökugögn** það sem kostnaðaráætlunarmaður þarf að vita um vegginn, einu sinni fyrir gerðina: **eininguna** sem hann er gerður úr (múrstein eða blokk: heiti hans, lengd, hæð og breidd), **múrblönduna** (heiti og þykkt sam­skeytis) og **verðið** með gjaldmiðilskóða (þrír stafir, til dæmis USD, EUR eða ZAR) og það hvað það gildir um: fermetra eða ferfet af nettóflatarmáli veggjar, metra eða fet af lengd veggjar, eða hvern vegg. Allt þetta er valfrjálst.

Það er vistað með gerðinni í skránni. Sérhver veggur af gerðinni skilar því síðan af sér: {{ui:Listar}} › **Gerðir veggja: magntökugögn** sýnir eininguna, múrblönduna, verðið og verðið sinnum mældu magni, og magntakan sem send er í TakeoffCraft ber það á atriði þeirrar veggjagerðar. Breyttu því í gerðinni og allir veggir fylgja.

Þrír reitir til viðbótar eru til að telja múrsteina eða blokkir og múrblöndu:

- **Úrgangur á einingum, %** bætist við fjölda eininga. Skildu hann eftir auðan til að nota töluna úr mælingaaðferð verkefnisins, eða engan ef aðferðin hefur enga. Settu 0 til að hafa engan úrgang, hvað sem aðferðin segir.
- **Auka múrblanda, %** er fyrir innskurði eða göt sem taka við múrblöndu. Hún bætist við rúmmál múrblöndunnar. Skildu hana eftir auða ef engin er.
- **Lög úr þessari einingu**: merktu við hvert lag sem er blað þessa múrsteins eða blokkar. Holveggur hefur tvö. Ef ekkert er merkt eru kjarnalögin talin.

Verðið getur líka verið á hverja pöntunareiningu, á hverjar 1000 pöntunareiningar eða á hvern m³ af múrblöndu. Þar sem einingin hefur lengd og hæð sýnir **Gerðir veggja: magntökugögn** einingar á m² (eða ft²) af einu blaði, einingar til pöntunar og rúmmál múrblöndu; formúlurnar eru í [Múrsteinar, blokkir og múrblanda](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Gerð hefur eina einingu: ekki er hægt að telja tvö blöð úr mismunandi einingum (ytra blað úr múrsteini og innra blað úr blokk) á einni gerð ennþá.

## Haltu kjarnanum kyrrum

Í **Eiginleikum** stillir þú **Staðsetningarlínu** veggjar á kjarnafleti eða kjarnamiðlínu. Þegar þú bætir við frágangi síðar eða þykkir hann, helst sú lína þar sem hún er og veggurinn vex í kringum hana; veggir sem mætast henni í horni fylgja, svo beinu hornin haldast lokuð.

## Verkefnaefni

{{ui:Efnissafn…}} listar efni verkefnisins: heiti, flokk, þykktina sem lag byrjar með, birtingarlit, skurðfyllingarmynstur og athugasemdir. Safnið er vistað í IFC með verkefninu. Þegar þú velur efni fyrir lag fær það lag sjálfgefna þykkt efnisins, sem þú getur síðan breytt; breyting á safninu síðar breytir aldrei stærð veggja sem þú hefur þegar teiknað. Þú getur líka búið til efni úr efnalista lagsins með {{ui:+ Nýtt efni…}}.

## Viðmiðunarmál

{{ui:Merkja}} › {{ui:Viðmiðunarmál}}: veldu lárétt, lóðrétt eða jafnstillt, og viðmiðun: ytri eða innri klæðningarflöt, ytri eða innri kjarnaflöt, miðlínu veggjar eða kjarnamiðlínu. Veldu fyrsta vegginn, breyttu viðmiðuninni ef þú vilt, veldu annan, og smelltu síðan þar sem málsetningarlínan á að vera. Tvær viðmiðanir á sama vegg mæla heildarþykkt hans eða kjarnaþykkt. {{ui:Viðmiðunarmál…}} listar málsetningar sýnarinnar, þar á meðal þær sem misstu vegg, með {{ui:Eiginleikar}}, Tengja viðmiðanir aftur og Eyða.

### Málsetja alla grunnmyndina eftir reglum

{{ui:Merkja}} › {{ui:Setja málsetningar á grunnmyndina…}} setur málsetningar utan á grunnmyndinni sem þú ert að skoða: heildarstærðina í báðar áttir, röð málsetninga meðfram hverjum ytri jaðri (endar veggja, veggir sem mætast jaðrinum, og hurðir og gluggar í honum), og röðunum er komið fyrir laus við bygginguna. Merktu það sem þú vilt, lestu fjöldann og smelltu síðan á {{ui:Bæta við málsetningunum}}. Þetta eru venjulegar viðmiðunarmálsetningar, svo þær fylgja veggjunum þegar þeir færast, og þú getur valið, fært eða eytt hverri þeirra. Allt settið er eitt skref til afturköllunar, og ef þú keyrir það aftur er engin ný málsetning búin til.

Það málsetur aðeins utanverðuna: herbergi innan byggingarinnar, bogadregnir veggir og veggir sem eru ekki réttir á grunnmyndinni eru eftir fyrir handverkfærin, og ristlínur eru ekki veggir, þannig að málsetningar milli rista eru ekki gerðar hér. Tengdi aðstoðarmaðurinn þinn getur gert það sama með `plan_dimension`.

Málsetningin er tengd við veggina, ekki við blett á skjánum: þegar veggur færist eða gerð hans breytist, fylgir gildið. Ef vegg er eytt segir málsetningin að hún sé óleyst og sýnir ekkert gildi, þar til þú tengir hana aftur eða afturkallar. Lengdarreiturinn tekur líka við hnitum á grunnmynd eins og `10',12'` fyrir málsetningarlínu á nákvæmum stað.

Málsetningar eru fyrir veggi sem BimCraft teiknaði, í grunnmyndum. Ekki smíðað enn: málsetningar í sniðum og útlitsmyndum, á hurðir, glugga og aðra hluta, og samsetningarlög sem eru teiknuð á grunnmynd og sniði; sjá [Hvað er ekki smíðað enn](topic:not-built-yet).

## Sjá einnig

[Teikna veggi](topic:draw-walls), [Breyta vegg, hurð eða glugga](topic:change-a-wall-or-door), [Eiginleikar](topic:properties-panel).
