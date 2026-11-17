---
title: Saugokite turto duomenis ir priežiūros įrašą modelyje
summary: Naudokite perduotą IFC modelį pastatui eksploatuoti: gamintojas, modelis, serijos numeris, garantija ir tarnavimo laikas įrangai bei įrenginiams, taip pat atliktos priežiūros įrašas, viskas įrašyta į IFC.
keywords: perdavimas, užbaigimo pažymėjimas, naudojimo leidimas, kaip pastatyta, perdavimo paketas, turtas, turto registras, pastato eksploatacija, fm, eksploatacija, priežiūra, aptarnavimas, garantija, serijos numeris, brūkšninis kodas, gamintojas, modelis, tarnavimo laikas, perdavimas, cobie, skaitmeninis dvynys, pradelsta, artėjanti, darbo nurodymas
from: b84ac492
---

Skirtuke {{ui:Ištekliai}} dešinėje juostoje atidarytas IFC modelis tampa pastato įrangos įrašu. Viskas įrašoma į pačią IFC, IFC savo savybių rinkiniuose ir užduotyse, todėl ją perskaito ir kita programa, kuri atidaro failą. Nieko neįkeliama ir serveris nereikalingas: išsaugokite IFC, kad jį išlaikytumėte.

## Kas įtraukiama

- Įranga ir įrenginiai: baldai, sanitarinė įranga, šviestuvai, prietaisai, oro išleidimai, vožtuvai, siurbliai, ventiliatoriai, katilai, talpos, lizdai, skirstomieji skydai, liftai ir kiti panašūs elementai, taip pat bibliotekos elementai su įrangos duomenimis.
- Bet kuris kitas elementas, kurį **sekate**: pasirinkite jį modelyje (duris, sieną, siurblį, nubrėžtą kaip paprastą objektą) ir spustelėkite {{ui:Sekti pasirinktus}}.
- Viskas, kas jau turi turto duomenų ar priežiūros užduotį, įrašytą čia arba kitos programos.

Pirmiausia rodoma, kas pradelsta, paskui – kas artėja per 30 dienų. Filtruokite pagal pavadinimą, žymą, gamintoją, modelį ar serijos numerį, pagal lygį arba pažymėkite {{ui:Tik pradelsti arba artėjantys per 30 dienų}}.

## Turto duomenys

Spustelėkite turtą sąraše (arba pasirinkite jį modelyje), kad atidarytumėte jo duomenis: gamintojas, modelis, modelio nuoroda, serijos numeris, brūkšninis kodas, įrengimo diena, garantijos numeris ir jos pradžia bei pabaiga, taip pat tarnavimo laikas metais. {{ui:Įrašyti duomenis}} įrašo juos vienu žingsniu ({{key:Mod+Z}} anuliuoja). Palikite laukelį tuščią, kad pašalintumėte tą reikšmę.

## Dokumentai

Po duomenimis {{ui:Dokumentai}} išvardija su turtu susietus vadovus, garantijas, nuotraukas, pažymėjimus ir brėžinius. Pasirinkite rūšį, suteikite pavadinimą (arba palikite tuščią: naudojamas failo pavadinimas) ir įveskite, kur jis yra:

- **interneto adresą** (`https://…`): jam atsiranda nuoroda Atidaryti, kuri atsidaro naujame skirtuke;
- arba **failo pavadinimą ar kelią** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, tinklo išteklių): laikykite failus šalia IFC, tame pačiame aplanke arba jo viduje, kad pavadinimai veiktų perduodant aplanką. BimCraft rodo pavadinimą; atidarykite failą iš aplanko.

Failai patys niekada neįkeliami ir nekopijuojami į IFC: įrašoma tik nuoroda. Interneto adresas su slaptažodžiu ir bet kokia nuoroda, kuri nėra nei interneto adresas, nei failas (pavyzdžiui `javascript:`), atmetamos. {{ui:Pašalinti}} pašalina dokumentą iš turto (vienas žingsnis; {{key:Mod+Z}} anuliuoja).

Dokumentai, kuriuos kita programa įdėjo į elementą, taip pat išvardijami. Dokumentai ant elemento **tipo** rodomi kiekvienam to tipo elementui, ir tai nurodoma; keiskite juos ten, kur tipas buvo sukurtas.

IFC faile kiekvienas dokumentas yra IFC dokumento nuoroda, susieta su elementu, o jo rūšis įrašyta prie to ryšio – tiek IFC4, tiek IFC2X3.

## Priežiūros įrašas

Po dokumentais spustelėkite {{ui:Įrašyti atliktus darbus}}: diena, kada jie atlikti, darbas, kas jį atliko, kada reikia kitą kartą ir pastabos. Kiekvienas įrašas yra vienas žingsnis; {{ui:Redaguoti}} ir {{ui:Naikinti}} keičia jį vėliau. Naujausio įrašo kito termino data nusprendžia, ar turtas pradelstas ar greitai reikalingas.

## Kaip tai saugoma IFC

- Gamintojas ir modelis – `Pset_ManufacturerTypeInformation`, serijos numeris, brūkšninis kodas ir įrengimo diena – `Pset_ManufacturerOccurrence`, garantija – `Pset_Warranty`, tarnavimo laikas – `Pset_ServiceLife`, pačiame elemente. Kai elemento tipas jau turi gamintoją ar modelį, jis rodomas tol, kol įvesite savo.
- Kiekvienas priežiūros įrašas yra IFC **užduotis** priežiūros rūšies, susieta su elementu, su savo datomis (IFC4 – ir kaip paties užduoties laikai) ir `CadCraft_Maintenance` rinkiniu su diena, kas atliko, ir kita priežiūros diena.
- Reikšmės, kurias elementas bendrina su kitais, pirmiausia nukopijuojamos: pakeitus vieną turtą, kaimynai niekada nepasikeičia.
- Senesniuose IFC2X3 failuose datos įrašomos kaip tekstas (YYYY-MM-DD); ši versija reikalauja atskiro datos įrašo, kurio BimCraft neįrašo.

## Jutiklių rodmenys

Atidarykite {{ui:Jutiklių reikšmės}} ir {{ui:Atidaryti rodmenis (CSV)…}}, kad įkeltumėte rodmenis, eksportuotus iš pastato valdymo sistemos, duomenų registratoriaus ar skaičiuoklės:

- **pirmas stulpelis yra laikas**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` arba Unix sekundės. Laikas be zonos skaitomas pagal jūsų kompiuterio laiko juostą. Dienos pirma tvarka, pavyzdžiui `23/10/2026`, neskaitomos (jos dviprasmiškos); eksportuokite ISO datas.
- **kiekvienas kitas stulpelis yra vienas jutiklis**, antraštėje nurodytas savo turto **žyma**, **pavadinimu** arba **GlobalId**. Antraštė, kuri nesutampa su jokiu turtu arba sutampa su keliais, išvardijama ir praleidžiama. Stulpeliai atskiriami kableliais, kabliataškiais ar tabuliacijomis; su kabliataškiais ar tabuliacijomis skaitomas ir dešimtainis kablelis (`21,5`).
- Laikai ar reikšmės, kurių neperskaitoma (žodis, vienetas įrašytas į langelį), suskaičiuojamos ir praleidžiamos, niekada neįspėjamos.

Paskutinis rodmuo rodomas sąrašo stulpelyje {{ui:Rodmuo}} ir turto bloke {{ui:Jutiklis}}, su **grafiku**, rodančiu visus rodmenis (telefone grafikai laukia, kol palietę {{ui:Rodyti grafiką}}). Nustatykite turtui **žemą ir aukštą ribą** bei vienetą ir spustelėkite {{ui:Įrašyti ribas}}: rodmuo už ribų pažymi turtą. Pažymėkite {{ui:Rodyti modelyje}}, kad kiekvienas turtas būtų nudažytas pagal rodmenį – mėlynai žemiau žemos ribos, žaliai ribose ir raudonai virš aukštos ribos, o turtui be ribų – viena mėlyna skalė nuo mažiausio iki didžiausio rodmens – su rodmeniu kaip etikete (iki 60 etikečių, pirmiausia pažymėtos).

**Rodmenys lieka šiame naršyklės skirtuke**: jie neįrašomi į IFC ir niekur neišsiunčiami; kitą kartą CSV atidarykite iš naujo. **Ribos įrašomos į IFC** (`CadCraft_Sensor` rinkinys elemente: Low, High, Unit), todėl kitas žmogus, atidarantis failą, mato tuos pačius pažymėjimus.

## Gyvi rodmenys

{{ui:Tiesioginis srautas}} nuskaito reikšmes, kai jos atsiranda, **tiesiai iš šios naršyklės į jūsų pačių sistemą**. Niekas nepraeina per mūsų serverį ir niekur nesaugoma, išskyrus jūsų naršyklės skirtuką. Atidarius failą niekas neprisijungia: prisijungia tik {{ui:Prisijungti}}.

- **MQTT per WebSockets**: jūsų brokerio WebSocket klausytojo adresas (`wss://broker.example.com:8884/mqtt`) ir viena ar kelios temos su `{tag}`, kur įrašoma turto žyma, pavyzdžiui `site/{tag}/temperature` (BimCraft prenumeruoja `site/+/temperature` ir nuskaito žymą iš kiekvieno pranešimo temos). Temos be `{tag}` įvardija patį jutiklį. Pranešimas yra arba paprastas skaičius (`21.5`), arba JSON, pavyzdžiui `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (nustatykite {{ui:Reikšmės laukas JSON}}, jei jūsų vadinamas kitaip).
- **Klausti adreso (HTTP)**: interneto adresas, į kurį atsako jūsų pastato valdymo sistema arba jūsų mažas scenarijus, klausiamas kas kelias sekundes (mažiausiai kas 5). Atsakyti gali JSON, susietas su žyma (`{"AHU-1": 21.5}`), JSON sąrašas (`[{"tag": "AHU-1", "value": 21.5}]`) arba CSV rodmenų, panašių į aukščiau aprašytą. Jei neatsako, BimCraft prieš klausdamas vėl laukia dvigubai ilgiau, iki penkių minučių.

Kiekvienas rodmuo patenka į turtą, kurio žyma, pavadinimas ar GlobalId jį nurodo, lygiai taip, kaip CSV stulpelis; pavadinimai, kurie neatitinka jokio turto, išvardijami. Rodmenys papildo {{ui:Jutiklių reikšmės}}: sąrašas, grafikai, ribos ir spalvos modelyje veikia taip pat.

**Jūsų slaptažodis ar prieigos raktas** įvedamas vienam ryšiui: jis perduodamas ryšiui, o laukelis ištuštinamas; niekada neįrašomas nei į šią naršyklę, nei į IFC. Raktas siunčiamas kaip standartinė antraštė `Authorization: Bearer`, slapukai nesiunčiami.

{{ui:Įrašyti šiuos parametrus į IFC}} įrašo adresą, temas, reikšmės lauką ir tai, kaip dažnai klausti, į modelį (`CadCraft_Feed` rinkinys projekte; slaptažodžio lauko nėra), todėl kitas žmogus, atidarantis failą, įveda tik savo prisijungimą ir spustelėja {{ui:Prisijungti}}. Nedėkite slaptažodžio ar rakto į patį adresą: adresas su vartotojo vardu ir slaptažodžiu atmetamas.

:::note
**Ko reikia jūsų brokeriui ar adresui.** Naršyklės puslapis gali kalbėtis tik su serveriu, kuris tai leidžia:
- Puslapis saugus (https), todėl naršyklė jungiasi tik prie `wss://` ir `https://` adresų – išskyrus jūsų pačių kompiuterį (`localhost`), kur `ws://` ir `http://` veikia bandymui.
- HTTP adresas turi leisti šio puslapio užklausas (CORS: antraštė `Access-Control-Allow-Origin`, o `Authorization` tarp leidžiamų antraščių, jei naudojate raktą).
- Dauguma brokerių (Mosquitto, EMQX, HiveMQ ir kiti) siūlo WebSocket klausytoją; jis dažnai išjungtas, kol jo neįjungiate. BimCraft kalba MQTT 3.1.1.
:::

**Įspėjimų nėra, kai BimCraft uždarytas**: ribos pažymi turtą tik tada, kai modelis atidarytas ir prijungtas srautas. Pastatą stebėti visą parą reikia serverio, o BimCraft jo neveikia.

## COBie skaičiuoklė

**COBie** yra perdavimo skaičiuoklė, kurios daugelis savininkų ir eksploatavimo komandų reikalauja (ją paskelbė National BIM Standard JAV; BS 1192-4 Jungtinėje Karalystėje). Atidarykite {{ui:COBie skaičiuoklė}} skirtuke:

- {{ui:Įrašyti kaip COBie (.xlsx)}} parašo COBie 2.4 lapus – Contact, Facility, Floor, Space, Type, Component, System, Job, Document ir Attribute – iš modelio ir turto duomenų: pastatą, jo lygius ir patalpas (plotai iš modelio kiekių), kiekvieną turtą kaip komponentą su jo serijos numeriu, įrengimo diena, garantijos pradžia, žyma ir brūkšniniu kodu, jo tipą su gamintoju, modeliu, tarnavimo laiku ir garantijos trukme, sistemas, kurioms jis priklauso, priežiūros įrašą kaip darbus ir susietus dokumentus. Kiekvienas komponentas turi elemento IFC GlobalId. Stulpeliui „created by“ įveskite savo el. pašto adresą arba palikite tuščią (tada rašoma n/a). Reikšmės, kurių modelyje nėra, rašomos **n/a**; kategorijų stulpeliuose yra IFC klasė, o ne OmniClass kodas.
- {{ui:Nuskaityti COBie skaičiuoklę…}} nuskaito vieną atgal, iš BimCraft ar kitos programos, ir **pirmiausia išvardija kiekvieną pakeitimą**: kuris turtas, kuri reikšmė, iš ko į ką ir nauji dokumentai. {{ui:Taikyti}} įrašo visus vienu žingsniu ({{key:Mod+Z}} anuliuoja). Eilutės atitinkamos pagal GlobalId, paskui pagal komponento pavadinimą. Eilutės, neatitinkančios nieko modelyje, išvardijamos, bet nepridedamos.

Skaičiuoklė laikoma nepatikima: formulės niekada neskaitomos ir nevykdomos (tik paskutinė langelyje įrašyta reikšmė); reikšmė, dėl kurios garantija pasibaigtų anksčiau nei prasidėtų, ir dokumento nuoroda, kuri nėra nei interneto adresas, nei failo pavadinimas, praleidžiamos ir suskaičiuojamos, o labai dideli sąsiuviniai atmetami. COBie darbai yra tipo planuojami darbai: jie įrašomi, bet neskaitomi atgal. BimCraft rašomoje skaičiuoklėje tekstas, kurį skaičiuoklė galėtų palaikyti formule (prasidedantis `=`, `+`, `-` arba `@`), pažymimas kaip tekstas.

Sąsiuvinis mūsų testuose patikrintas nepriklausomu skaičiuoklių skaitytuvu; jis nebuvo patikrintas COBie validatoriumi. Jei priimanti komanda jį naudoja, praneškite, ką jis sako.

## Perdavimo dokumentai

Dokumentai, kurie su baigtu pastatu atitenka savininkui, priklauso projektui, o ne vienam turtui. Skirtuke {{ui:Ištekliai}} atidarykite {{ui:Perdavimo dokumentai}}:

1. {{ui:Pridėti dokumentą}}, pasirinkite jo rūšį (užbaigimo pažymėjimas, naudojimo leidimas, garantija, vadovas, kaip pastatyta brėžiniai, kita) ir įveskite pavadinimą, išdavimo datą, kas jį išdavė ir jo numerį.
2. Nurodykite, kur jis yra: interneto adresas, failo pavadinimas, laikomas šalia IFC, arba {{ui:Prisegti failą}}.
3. {{ui:Pridėti į sąrašą}}. {{ui:Redaguoti}} ir {{ui:Pašalinti}} keičia sąrašą; kiekvienas yra vienas žingsnis, kurį galite anuliuoti.

{{ui:Sudaryti perdavimo paketą}} parsisiunčia vieną zip failą: viršelio puslapį su kiekvienu dokumentu, tą patį sąrašą kaip skaičiuoklėje, COBie sąsiuvinį (dokumentai yra jo Document lape, kaip eilutės apie Facility), modelį ir kiekvieną prisegtą failą. Užbaigimo ar naudojimo leidimas, kurio dar nėra sąraše, paminimas viršelyje; paketas vis tiek sudaromas.

Modelis pakete yra **kaip pastatyta modelis**: jame nurodyta, kurie elementai išmatuoti vietoje. Kartu aplanke `as-built`: pareiškimas, kiekvieno elemento sąrašas su jo patikrinimo būsena, dabartinis brėžinių rinkinys kaip vienas PDF (kaip pastatyta brėžiniai) ir brėžinių pakeitimų žurnalas, kai modelis išleido rinkinius. Žr. [Pažymėkite elementus kaip patikrintus arba patikrintus vietoje](topic:verification).

- IFC faile kiekvienas dokumentas yra IfcDocumentInformation, susietas su projektu (IfcRelAssociatesDocument), su pavadinimu, nuoroda, data, išdavėju ir vieta, kad jį išvardytų kitos programos.
- Prisegtas failas įrašomas pagal pavadinimą, dydį ir SHA-256. Norėdami išlaikyti patį failą kartu su projektu, naudokite {{ui:Įrašyti projektą kaip paketą}} (.ccbundle saugo modelį ir prisegtus failus; atidarius jie grąžinami, kiekvienas patikrinamas pagal savo įrašą). Įprastas įrašymas klausia, ko norite.
- Paprastas .ifc išlaiko įrašą, o ne patį failą: jį atidarę naudokite {{ui:Prisegti failą iš naujo}}. Tas pats failas atpažįstamas; kitas failas pakeičia įrašą.

## CSV

{{ui:CSV}} įrašo kiekvieną turtą su jo duomenimis, kiekvieną priežiūros įrašą ir kiekvieną dokumentą, po vieną eilutę, skaičiuoklei ar kitai priežiūros programai.

:::note
Nepadaryta: paslauga, kuri saugo rodmenis ir siunčia įspėjimus, kai BimCraft uždarytas, ir COBie darbų skaitymas atgal. Žr. [Dar nepadaryta](topic:not-built-yet).
:::
