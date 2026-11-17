---
title: Upodobitev slike modela
summary: Naredite dnevno sliko 3D pogleda: nebo, sonce na zemljepisni širini lokacije, mehke sence, steklena okna; z WebGPU sledenje žarkom na grafični kartici z nebesi, kamero, mešanjem svetlobe, barvno obdelavo, meglo in čakalno vrsto upodobitev.
keywords: upodobitev, prednastavitev, prednastavitve, prednastavitev prizora, notranjost, zunanjost, pogled prereza, noč, en klik, upodabljanje, sledenje žarkom, sledeno žarkom, globalna osvetlitev, odsevi, lomi, visoka kakovost, fotorealistično, realistično, slika, png, nepremična slika, nebo, sonce, dnevna svetloba, sence, mehke sence, ambientna okluzija, steklo, okna, kovina, materiali, izpostavljenost, svetlost, oblačno, mrak, studio, predstavitev, vizualizacija, webgpu, odstranjevanje šuma, fizikalno nebo, hdri, ies, globinska ostrina, panorama, ravnovesje belega, mešanje svetlobe, elementi upodobitve, exr, 16-bitni png, megla, kavstike, čakalna vrsta upodobitev
from: beb74cc7
---

{{ui:Upodobitev}} na orodni vrstici naredi sliko 3D pogleda, ki je videti kot dnevna svetloba: nebo, sonce tam, kjer ga postavi zemljepisna širina lokacije, mehke sence, svetloba z vsega neba, ki temni kote, in barve, ki so lahko videti kot steklo ali kovina. Model in datoteka se ne spremenita.

## Upodobitev pogleda

1. Nastavite 3D pogled, kakor želite sliko: vrtite in povečujte, skrijte etaže ali elemente, ki jih ne želite, in nastavite [prerez](topic:section-plane), če naj slika prikaže rez.
2. Kliknite {{ui:Upodobitev}} na orodni vrstici.
3. Izberite {{ui:Prizor}}, če pritisnjeni ni tisti, ki ga želite (glejte [Prednastavitve prizora](topic:render#scene-presets-a-good-picture-in-one-click)), izberite {{ui:Velikost}}, nato v pogovornem oknu kliknite {{ui:Upodobitev}}.

   Slika se polni med upodabljanjem in se z vsakim prehodom izboljša. {{ui:Ustavi}} (ali {{key:Esc}}) konča zgodaj in ohrani sliko do tega trenutka.

4. Kliknite {{ui:Shrani}}, da prenesete sliko kot PNG, ali {{ui:Shrani kot}} za drugo obliko (glejte [Shranjevanje slike](topic:render#save-the-picture)). Ime dobi po datoteki modela.

:::tip
Začnite z {{ui:Osnutek}} pri {{ui:Velikost pogleda}}, da preverite kamero, nato za končno sliko upodobite {{ui:Dobro}} ali {{ui:Najboljše}} v večji velikosti.
:::

## Prednastavitve prizora: dobra slika z enim klikom

Vrh pogovornega okna ima štiri gumbe {{ui:Prizor}}. Vsak z enim klikom nastavi nebo, svetlost, tla, robne črte, kakovost in sonce, tako da pred prvo sliko ni ničesar za učenje. Kliknite enega, nato {{ui:Upodobitev}}.

| Prizor | Kaj nastavi | Za kaj ga uporabiti |
|---|---|---|
| {{ui:Zunanjost}} | Jasno nebo, sonce modela, tla vklopljena | Stavba od zunaj |
| {{ui:Notranjost}} | Oblačno nebo (enakomerna svetloba, brez ostrih sončnih lis), pol stopnje svetlejše | Pogled iz notranjosti prostora |
| {{ui:Pogled prereza}} | Belo studio, brez tal, robne črte v hitri upodobitvi | Model, prerezan s prerezom |
| {{ui:Noč}} | Sonce pod obzorjem (opolnoč sredi zime za polobla lokacije), za eno stopnjo svetlejše | Svetilke, ki osvetljujejo model. Brez svetilk je slika temna |

- {{ui:Izberi za ta pogled}} izbere namesto vas: {{ui:Pogled prereza}}, ko je rez vklopljen, {{ui:Notranjost}}, ko je kamera znotraj modela, sicer {{ui:Zunanjost}}. Prvič, ko odprete pogovorno okno, se tako začne samodejno.
- Vse nastavitve ostanejo spodaj in jih je mogoče spremeniti. Ko spremenite eno nastavitev, se prizor ne ujema več, noben gumb ni pritisnjen in vrstica pod gumbi pove, da so nastavitve vaše. Ponovno kliknite prizor, da vrnete njegove vrednosti.
- Prizor se ne dotika pogona, načina, velikosti, materialov, kamere ali svetilk.

:::note
Prizori dajo enake vrednosti v ModelCraftu in BimCraftu. Kako je končna slika videti, je odvisno od vašega modela in grafične kartice.
:::

## Kaj je vidno na sliki

Kar 3D pogled prikazuje kot polno telo: skriti in prosojni elementi, skrite etaže in skriti modeli so izpuščeni, prostori se prikažejo samo, ko je {{ui:Prostori}} vklopljeno. Ravnina ali kvader prereza prereže sliko, kakor prereže pogled. Elementi se prikažejo v svojih barvah: barvanje po lastnosti (zavihek {{ui:Barva}}) se ne uporablja.

## Nastavitve

| Nastavitev | Kaj naredi |
|---|---|
| {{ui:Velikost}} | Velikost pogleda, dvakratna velikost pogleda, Full HD, 4K ali kvadrat |
| {{ui:Način}} | {{ui:Hitro}} ali {{ui:Visoka kakovost (sledenje žarkom)}} (spodaj) z njeno {{ui:Časovna omejitev}} |
| {{ui:Kakovost}} | Koliko prehodov (ali, v visoki kakovosti, vzorcev) se povpreči: {{ui:Osnutek}} 16, {{ui:Dobro}} 64, {{ui:Najboljše}} 256. Več prehodov da gladkejše sence in robove, traja pa dlje |
| {{ui:Nebo}} | {{ui:Jasno nebo}}, {{ui:Oblačno}}, {{ui:Mrak}} ali {{ui:Belo studio}} (preprosto belo ozadje) |
| {{ui:Sonce}} | 21. junij ob 15:00 na zemljepisni širini, ki jo datoteka navaja za njeno lokacijo (IfcSite), obrnjeno k pravemu severu modela. Označite {{ui:Uporabi drug datum in uro za to sliko}} za drug čas |
| {{ui:Svetlost}} | Svetlejše ali temnejše, po korakih (stopnjah) |
| {{ui:Tla pod modelom}} | Tla na najnižji točki modela, ki sprejemajo sence in se stopijo z obzorjem |
| {{ui:Nariši robove}} | Nariše robove elementov tanko čez sliko |

Ko je sonce ob izbranem času pod obzorjem, je noč: nebo potemni in svetilke modela ga osvetlijo.

## Svetilke

Vsaka svetilka v modelu je v sliki svetilka: svetila v datoteki IFC (IfcLightFixture ali element, vnesen kot svetilo), vključno s tistimi, ki jih postavite iz knjižnice. Vsaka sveti navzdol tik pod svetilom. Ko datoteka navede moč svetila, je njena svetlost iz nje; sicer je 800 lumnov, topla bela.

Pogovorno okno našteje svetilke pod {{ui:Svetilke}}: odznačite eno, da jo izklopite, ali vpišite njeno svetlost v lumnih. Te spremembe se shranijo v IFC (nabor lastnosti svetila `CadCraft_Light`, kjer jih lahko spremenite tudi v Lastnostih), {{key:Ctrl+Z}} pa jih razveljavi.

Če datoteka ne pove, kje je njena lokacija, je sonce postavljeno na 40° severne širine, pogovorno okno pa to pove. Čas je lokalni čas lokacije, izračunan iz njene dolžine, zato je lahko ura zamaknjena tam, kjer so ure nastavljene drugače.

Te nastavitve se hranijo v tem brskalniku za naslednjo sliko. Ne shranijo se v datoteko IFC.

## Steklo in drugi materiali

Pod {{ui:Materiali}} ima vsaka barva na zaslonu svoj videz: {{ui:Mat}}, {{ui:Satenast}}, {{ui:Sijajen}}, {{ui:Kovina}}, {{ui:Polirana kovina}}, {{ui:Steklo}} ali {{ui:Motno steklo}}. Barve, ki jih datoteka IFC naredi prosojne (na primer zasteklitev oken), se začnejo kot {{ui:Steklo}}.

:::note
V načinu {{ui:Hitro}} steklo in kovina odsevata nebo, ne preostanka modela, in svetloba se ne lomi skozi steklo. Način {{ui:Visoka kakovost (sledenje žarkom)}} spodaj naredi oboje.
:::

## Visoka kakovost

Izberite {{ui:Način}} › {{ui:Visoka kakovost (sledenje žarkom)}} za sliko, ki sledi svetlobi tako, kot jo vidi kamera:

- svetloba se odbija med površinami, zato je soba, osvetljena skozi okno ali s svetilko, osvetljena z vseh strani, barve pa se prelivajo na sosednje;
- steklo je pravo steklo: svetloba se lomi skozenj in odseva model;
- kovina in polirane površine odsevajo preostali model;
- svetlobne plošče svetijo kot plošče, z mehkimi senami.

Veliko počasnejše je kot {{ui:Hitro}}: vsak prehod znova sledi svetlobi za vsak piksel. Slika se začne zrnata in se čisti, ko se vzorci seštevajo, zato začnite majhno ({{ui:Velikost pogleda}}, {{ui:Osnutek}}) in izberite {{ui:Časovna omejitev}}: ko se izteče, slika do tega trenutka ostane. {{ui:Ustavi}} jo prav tako ohrani. Prvi prehod počaka, medtem ko brskalnik pripravlja sledilnik žarkov.

Kjer ima brskalnik WebGPU, je sledilnik žarkov CadCraftov lastni in teče na grafični kartici; vrstica pod sliko to pove. Po {{ui:Ustavi}} ali časovni omejitvi {{ui:Nadaljuj}} nadaljuje z isto sliko, dokler ne dobi vseh vzorcev; sprememba nastavitve ali ponovni pritisk na {{ui:Upodobitev}} začne znova. Brez WebGPU se slika riše z WebGL (vrstica to pove), {{ui:Nadaljuj}} pa ni ponujen.

:::linux
Firefox in večina nastavitev Chroma v Linuxu še nimata WebGPU, zato tam visoka kakovost uporablja WebGL.
:::

V tem načinu robovi niso narisani, teksture kažejo svojo barvo in hrapavost, ne pa izbočin, rez pa se naredi na modelu, preden se slika začne.

{{ui:Odstrani šum (odpravi zrnatost, ki ostane po vzorcih)}} je privzeto vklopljeno: ko je slika končana ali ustavljena, zrnatost, ki ostane, odpravi nevronska mreža, narejena za to (objavljena mreža Intel Open Image Denoise, zagnana na vašem računalniku: na grafični kartici, sicer na procesorju). {{ui:Prikaži}} › {{ui:Slika pred odstranitvijo šuma}} prikaže, kakor je bila upodobljena.

## Neba in profili svetlobe na grafični kartici

Z WebGPU ima visoka kakovost še dve nebi:

- {{ui:Fizikalno nebo}} izračuna dnevno svetlobo iz višine sonca: globoko modro nad glavo, bleda pas ob obzorju in sonce, ki je ob nizkem položaju toplejše in temnejše. {{ui:Motnost}} gre od zelo jasnega dne (2) do zelo meglenega (10).
- {{ui:Slika neba (HDRI)}} osvetli model s panoramsko sliko resničnega kraja. {{ui:Izberite sliko …}} vzame datoteko `.hdr` ali `.exr` v ekvirektangularni projekciji; {{ui:Zasukaj}} jo zavrti okoli modela, {{ui:Svetlost slike}} pa jo naredi svetlejšo ali temnejšo. Slika ima svoje sonce, zato se sonce modela ne doda. Ohrani se samo, dokler je stran odprta: po ponovnem odprtju jo izberite znova.

Vsaka svetilka na seznamu {{ui:Svetilke}} lahko prevzame profil svetlobe proizvajalca: {{ui:Profil IES …}} prebere datoteko IES (LM-63), svetilka pa nato seva svetlobo tako, kot to naredi to svetilo (ozka luč od zgoraj, osvetlitev stene). Vsaka svetilka s tem imenom ga uporablja, svetilka pa ohrani svojo svetlost. Kliknite ime profila, da prenehate z njegovo uporabo.

Okna iz prozornega stekla pomagajo svetlobi neba priti v prostor.

Način {{ui:Hitro}} in sledilnik žarkov WebGL prikažeta {{ui:Fizikalno nebo}} in {{ui:Slika neba (HDRI)}} kot jasno nebo in prezreta profile svetlobe.

## Kamera

{{ui:Kamera}} nastavi sliko kot fotografijo:

- {{ui:Izpostavljenost}}: ohranite {{ui:Drsnik svetlosti}} ali izberite {{ui:Nastavitve kamere}} in nastavite {{ui:Zaslonka (f-število)}}, {{ui:Čas osvetlitve}} in {{ui:ISO}} kot na fotoaparatu; EV ob njih je običajna vrednost izpostavljenosti. f/16 pri 1/100 s in ISO 100 ustreza sončnemu dnevu; temnejši prizor potrebuje širšo zaslonko, počasnejši zaklop ali višji ISO. To deluje v vseh načinih.
- {{ui:Globinska ostrina}} zamegli, kar je bližje ali dlje od {{ui:Razdalja ostrenja (m)}}, kakor bi to naredila leča s tem f-številom (pustite prazno, da ostri to, kar je v sredini pogleda); {{ui:Oblika zaslonke}} da nejasnim svetlobam okroglo ali lamelasto obliko.
- {{ui:Dvotočkovna perspektiva (navpičnice ostanejo navpične)}} poravna kamero in premakne sliko, kot to naredi arhitekturna leča tilt-shift, tako da se stene ne nagibajo, ko gledate navzgor ali navzdol na stavbo.
- {{ui:Ravnovesje belega}} nastavi, katera barva svetlobe je videti kot bela: nižje (na primer 3000 K) za toplo svetlobo svetilk, višje za senco in oblačne dni.
- {{ui:Projekcija}}: {{ui:Panorama 360°}} naredi sliko 2:1 vsega okoli kamere za pregledovalnike panoram; {{ui:Stereo panorama 360°}} zloži levo in desno oko za naočnike; {{ui:Kubna mapa (6 ploskev)}} naredi šest kvadratnih pogledov v mreži 3 × 2. Širina pride iz {{ui:Velikost}}.

Projekcija, globinska ostrina, dvotočkovna perspektiva in ravnovesje belega potrebujejo sledilnik žarkov na grafični kartici (WebGPU), zato se prikažejo samo v {{ui:Visoka kakovost (sledenje žarkom)}}.

## Dokončanje slike

{{ui:Slika}} barvno obdela visoko kakovostno sliko kot fotografijo, vsaka kontrola pa spremeni končno sliko takoj, brez ponovne upodobitve:

- {{ui:Videz (pogledna transformacija)}}: {{ui:ACES filmic}} (slika kot prej), {{ui:AgX}} (mehkejša, ohrani barvo v zelo svetli svetlobi), {{ui:Filmic}} (nežna filmska krivulja) ali {{ui:Standardno}} (preprosto, svetla svetloba se odreže na belo).
- {{ui:Kontrast}} in {{ui:Stiskanje svetlih delov}} (vrne podrobnosti v zelo svetlih delih).
- {{ui:Cvetenje (bloom)}} (mehak sijaj okoli svetle luči), {{ui:Bliščanje}} z {{ui:Žarki bliščanja}} (zvezdni žarki iz najsvetlejših točk) in {{ui:Vinjetiranje}} (temnejši koti).
- {{ui:Barvna tabela (.cube) …}} uporabi barvno obdelavo iz datoteke `.cube` z njeno {{ui:Moč barvne tabele}}; kot slika neba se ohrani samo, dokler je stran odprta.

## Shranjevanje slike

{{ui:Shrani kot}} poleg {{ui:Shrani}} izbere datoteko: {{ui:PNG}}, {{ui:JPEG}} ali {{ui:WebP}} za deljenje (JPEG in WebP samo tam, kjer brskalnik lahko zapiše), in po visokokakovostni upodobitvi na grafični kartici še:

- {{ui:PNG, 16 bitov}}: barvno obdelana slika s finejšimi koraki med odtenki, za tiskanje ali nadaljnjo obdelavo.
- {{ui:EXR, vsi sloji (32-bitni float)}}: slika, kakor je bila upodobljena (linearna svetloba, brez obdelave), z vsakim elementom upodobitve in skupino svetlobe kot svojim slojem, za programe za kompozicijo.
- {{ui:Datoteka upodobitve (.ccrender, za poznejše ponovno barvno obdelavo)}}: vse, kar pogovorno okno potrebuje za ponovno mešanje in barvno obdelavo slike. {{ui:Odpri datoteko upodobitve …}} jo vrne z njenim mešanjem in obdelavo, brez upodabljanja.

## Mešanje svetlobe po upodobitvi

Vklopite {{ui:Mešanje svetlobe (barvo in svetlost vsake luči spremenite po upodobitvi)}}, preden pritisnete {{ui:Upodobitev}}. Ko je slika končana (ali ustavljena), {{ui:Pomešaj sliko}} našteje njene luči v skupinah: nebo, sonce in svetilke po imenu (vsaka svetilka z istim imenom je ena skupina). Izklopite skupino, ji dajte barvo ali jo naredite svetlejšo ali temnejšo, in slika se takoj spremeni, brez ponovne upodobitve. {{ui:Shrani mešanico}} ohrani mešanje pod imenom, ki ga boste izbrali pozneje; {{ui:Kot upodobljeno}} vrne sliko, kakor je bila narejena. {{ui:Shrani}} shrani zmešano sliko.

{{ui:Elementi upodobitve (albedo, normale, globina, difuzno, zrcalno, prepustnost, emisija, ID-ji)}} ohrani tudi dele slike. {{ui:Prikaži}} preklopi pogled na enega od njih: barve površin (albedo), normale, globino, difuzno, zrcalno in prepuščeno svetlobo (vsako neposredno in posredno), kar sveti, in nebo, ter barvo na objekt ali na material za izdelavo mask.

Oba hranita dodatne sloje na grafični kartici. Pri velikih velikostih grafična kartica morda nima prostora; pogovorno okno to pove in manjša velikost deluje.

## Megla, dim, šum in kavstike

Ti so v {{ui:Megla, dim in šum}} in delujejo v {{ui:Visoka kakovost (sledenje žarkom)}} na grafični kartici; drugi pogoni teh ne vsebujejo.

- {{ui:Megla in zamegljenost}} zapolni zrak do določene višine z meglo, ki jo osvetljujeta sonce in nebo ter svetilke. {{ui:Kako daleč vidite, v metrih}} nastavi, kako gosta je (okoli 100 m je rahla zamegljenost, 20 m gosta megla), {{ui:Višina megle nad tlemi, v metrih}} je, kje se konča, in {{ui:Svetlobni žarki}} je, kako močno se megla sveti proti svetlobi. Sončna svetloba zapusti meglo na njenem vrhu, zato tam, kjer sonce prodre skozi okno ali med stavbami, vidite svetlobne žarke.
- {{ui:Dim ali oblak}} doda en volumen dima ali oblaka, osvetljenega kot megla. {{ui:Vrsta}} je {{ui:Oblak}}, {{ui:Dimni steber}} ali {{ui:Iz volumske datoteke (.ccvol)}}, CadCraftova lastna mrežasta oblika. {{ui:Podrobnost}} in {{ui:Različica}} spremenita narejen oblak ali steber, {{ui:Velikost njene najdaljše stranice, v metrih (0 = velikost modela)}}, {{ui:Premik X (m)}}, {{ui:Premik Y (m)}}, {{ui:Premik Z (m)}} in {{ui:Zasukaj}} ga postavijo (začne se na sredini modela), {{ui:Debelina}} ga naredi gostejšega, {{ui:Žarenje naprej}} ga naredi svetlejšega proti svetlobi, {{ui:Barva}} pa ga obarva. Datoteka volumna se ohrani samo, dokler je stran odprta, kot slika neba.
- {{ui:Zgodnja ustavitev tam, kjer je slika čista (prilagodljivo vzorčenje)}} ne da več vzorcev pikslom, ki so se umirili. {{ui:Dopustni šum}} je, koliko zrnatosti ostane, ko se piksel ustavi. Vrstica pod sliko pove, koliko vzorcev je piksel v povprečju dobil.
- {{ui:Kavstike (svetloba, ki jo steklo lomi ali zrcala odbijajo)}} sledi svetlobi iz svetilk in sonca, zato je svetla lisa pod stekleno kroglo ali odsev zrcala na steni čist, ne zrnat. Je izklopljen, dokler sta vklopljeni megla, dim, mešanje svetlobe ali elementi upodobitve, in je narejen za slike, ne za panorame 360°.

## Čakalna vrsta upodobitev

{{ui:Čakalna vrsta upodobitev}} v pogovornem oknu: {{ui:Dodaj to sliko v čakalno vrsto}} ohrani nastavitve in pogled slike, {{ui:Zaženi čakalno vrsto}} pa upodobi, kar čaka, eno za drugo, na tem računalniku. Zapiranje strani ohrani čakalno vrsto; odprite isti model, da nadaljujete. {{ui:Shrani}} prenese končano, {{ui:Odstrani}} in {{ui:Počisti dokončano}} pospravita seznam. Čakalna vrsta upodablja v visoki kakovosti, zato potrebuje WebGPU.

## Koliko časa traja

Slika nastane na vašem računalniku, na grafični kartici; nič se ne naloži. Čas raste s prehodi in s pikslih: {{ui:Najboljše}} ima 16-krat več prehodov kot {{ui:Osnutek}}, 4K slika pa ima okoli štirikrat več pikslov kot Full HD. Veliki modeli trajajo na prehod dlje.
