---
title: Sienų konstrukcijos ir orientaciniai matmenys
summary: Kurkite savus sienų tipus sluoksnis po sluoksnio su aiškia šerdimi, laikykite projekto medžiagų biblioteką ir matuokite iki paviršių bei ašių, kurios lieka prijungtos, kai siena keičiasi.
keywords: LOD, plėtros lygis, lod 200, lod 300, bendrinė, sienos konstrukcija, sienos tipas, sluoksniai, šerdis, šerdies paviršius, šerdies ašis, oro tarpas, membrana, namo apvalkalas, medžiagų biblioteka, medžiagos, storis, orientacinis matmuo, matmuo, asociatyvus, atskaitos linija, apkalimas, stovas, gipskartonis
from: 4ea8fbf5
---

## Ką darysite

Sukurkite sienos tipą, atitinkantį sieną, kurią statysite: apkalimas, apdangalas, 5½ colio stovų šerdis ir gipskartonis arba plytos, oro tarpas ir medinio karkaso siena. Pažymėkite, kurie sluoksniai yra šerdis, kad matmuo ar atskaitos linija galėtų laikyti šerdį, kol apdaila aplink ją keičiasi. Tada matuokite sienas iki paviršių ir ašių, kurių norite.

## Sukurkite sienos tipą

1. Pradėkite pastatą arba atidarykite IFC modelį, įjunkite {{ui:Braižymas}}, tada pasirinkite {{ui:Siena}} įrankį.
2. Pasirinkite pradinį tipą {{ui:Sienos tipas}} ir atidarykite {{ui:Sienų konstrukcijos…}}. Pradinis tipas atsidaro kaip kopija; suteikite naujam tipui pavadinimą.
3. Sluoksniai eina nuo išorės, sąrašo viršuje, iki vidaus, sąrašo apačioje. Pasirinkite kiekvieno sluoksnio medžiagą, įveskite jo storį (projekto vienetais arba aiškiai, pavyzdžiui `12.7 mm` ar `1/2"`), pasirinkite jo funkciją (apdaila, pagrindas, konstrukcija, izoliacija, membrana) ir pažymėkite **Šerdis** sluoksnius. Šerdis turi būti vientisa grupė.
4. {{ui:Pridėti sluoksnį}} prideda sluoksnį, {{ui:Pridėti oro tarpą}} prideda oro tarpą su jo vėdinimu (nenurodytas, nevėdinamas, vėdinamas), {{ui:Pridėti membraną}} prideda sluoksnį be nominalaus storio, pavyzdžiui namo apvalkalą. Rodyklės perkelia sluoksnį į išorę arba į vidų.
5. Peržiūra nubraižo sluoksnius pagal mastelį, su pabrauta šerdimi, sunumeruotus kaip eilutės, ir kiekvieną sluoksnį, šerdį bei visą storį pamatuoja. {{ui:Įrašyti tipą}}.

Naujas tipas yra sienos įrankio sąraše ir pasirinktos sienos **Savybėse**. Įrašius tipą, kurį redaguojate, pasikeičia kiekviena siena, kuri jį naudoja; {{ui:Dubliuoti tipą}} sukuria atskirą tipą ir priskiria jį tik pasirinktoms sienoms. Kiekvienas įrašymas yra vienas anuliavimo žingsnis kartu su sienomis, kurias jis perkelia, jose esančiomis durimis ir langais bei matmenimis, kurie nuo jų priklauso.

Oro tarpas prideda plotį. Membrana neprideda nieko: ji lieka tipe, kad žiniaraštis ją vėliau rastų, ir neįskaičiuojama į sienos ar šerdies storį. Oro tarpas ar membrana niekada neskaičiuojami kaip kietoji medžiaga. Faile, įrašytame IFC2X3 formatu, membrana išlieka tipo įraše, bet neįtraukiama į jo fizinius medžiagų sluoksnius.

## Pažymėkite tipą jo plėtros lygiu (LOD)

Tipas gali nurodyti, kiek jis išplėtotas. Redaktoriuje **Plėtros lygis (LOD)** siūlo fiksuotą skalę 100, 200, 300, 350, 400 ir 500 arba **Nenustatyta**. Bendrinė siena („Wall 230 generic“) yra LOD 100 arba 200; konkreti konstrukcija su tikrais sluoksniais („230 clay brick, plastered both sides“) yra LOD 300 ar daugiau. Žymę nustatote jūs: BimCraft jos neapskaičiuoja, o pradiniai tipai jos neturi.

Žyma rodoma šalia tipo pavadinimo sienos įrankio tipų sąraše, sienos **Savybėse** ir [Keisti tipą](topic:wall-tools) sąraše, o ataskaita po keitimo nurodo, ar lygis pakilo, ar nukrito. Norėdami ją matyti žiniaraštyje **Sienos pagal tipą** ir jo CSV, pažymėkite **Rodyti kiekvieno sienos tipo LOD sienų žiniaraštyje** skiltyje Parametrai › BimCraft › Sienos: pridedamas paskutinis stulpelis LOD. Ji įrašoma IFC faile kartu su tipu (tipo savybių rinkinyje `CadCraft_WallType` kaip savybė `LOD` ir tipo įraše), todėl išlieka, kai failą atidarote vėl. Žyma kol kas taikoma tik sienų tipams, o ne atskiriems elementams ar kitoms elementų rūšims.

## Bendrinės sienos eskizo etapui

Sienos įrankio tipų sąrašas prasideda dviem **bendrinėmis** sienomis: **Generic wall 200 mm (exterior)** ir **Generic wall 100 mm (interior)**. Kiekviena yra vienas bendrinės medžiagos sluoksnis, pažymėtas LOD 200. Naudokite jas, kai žinote, kur sienos eis, bet dar nežinote, iš ko jos bus padarytos.

Siena, kurios tipas pažymėtas **LOD 100** arba **LOD 200**, kiekviename plane nubraižoma kaip **viena brūkšniuota juosta**, visais detalumo lygiais: be sluoksnių, be sluoksnių linijų. Taip yra su bendrinėmis sienomis ir su bet kuriuo jūsų tipu, kurį pažymėjote LOD 100 ar 200. Pati siena yra užbaigta: turi savo storį, duris ir langus, kambarius bei kiekius.

Kad ją išplėtotumėte, pakeiskite jos tipą (Redaguoti › Sienos › **Keisti tipą** arba Tipas Savybėse). Siena niekada nebenubraižoma: ta pati siena įgauna naują tipą, o ataskaita nurodo, kas pasikeitė. Tipas, pažymėtas LOD 300 ar aukščiau, nubraižomas su savo sluoksniais kaip anksčiau.

Norėdami nubraižyti kiekvieną sieną pagal jos sluoksnius, nepriklausomai nuo žymos: Parametrai › BimCraft › Sienos, panaikinkite **Braižyti LOD 100 ar LOD 200 tipo sienas kaip vieną brūkšniuotą juostą**.

Pradiniai durys ir langai taip pat yra bendrinės rūšys (dydis ir atidarymo būdas, ne gaminys). Kai įjungta **Rodyti kiekvieno sienos tipo LOD sienų žiniaraštyje**, Durų ir Langų žiniaraščiai jiems rodo LOD 200.

## Suteikite tipui kiekių skaičiavimo duomenis

Sienos tipo redaktoriuje **Kiekių skaičiavimo duomenys** pateikia tai, ką sąmatininkui reikia žinoti apie sieną, vienam kartui kiekvienam tipui: **vienetą**, iš kurio ji pastatyta (plytą ar bloką: jo pavadinimą, ilgį, aukštį ir plotį), **skiedinį** (pavadinimą ir siūlės storį) ir **įkainį** su jo valiutos kodu (trys raidės, pavyzdžiui USD, EUR ar ZAR) ir tuo, kam jis taikomas: kvadratiniam metrui ar kvadratinei pėdai grynojo sienos ploto, metrui ar pėdai sienos ilgio arba kiekvienai sienai. Viskas nebūtina.

Tai įrašoma kartu su tipu faile. Tada kiekviena to tipo siena tai pateikia: {{ui:Žiniaraščiai}} › **Sienų tipai: kiekių skaičiavimo duomenys** rodo vienetą, skiedinį, įkainį ir įkainį, padaugintą iš išmatuoto kiekio, o kiekių skaičiavimas, perduodamas TakeoffCraft, su tuo sienos tipo elementu neša šiuos duomenis. Pakeiskite tipą, ir visos sienos seka.

Dar trys laukai skirti plytų ar blokų ir skiedinio skaičiavimui:

- **Atliekos vienetuose, %** pridedamos prie vienetų skaičiaus. Palikite tuščią, kad būtų naudojama projekto matavimo metodo reikšmė, o jei metodas jos neturi, nieko. Įveskite 0, kad atliekų nebūtų, ką bepasakytų metodas.
- **Papildomas skiedinys, %** skirtas angoms ar perforacijoms, kurios sugeria skiedinį. Jis pridedamas prie skiedinio tūrio. Palikite tuščią, jei jų nėra.
- **Sluoksniai, pastatyti iš šio vieneto**: pažymėkite kiekvieną sluoksnį, kuris yra šios plytos ar bloko sienos dalis. Dvisienė siena turi du. Jei nieko nepažymėta, skaičiuojami šerdies sluoksniai.

Įkainis gali būti taip pat už vienetą užsakymui, už 1000 vienetų užsakymui arba už m³ skiedinio. Kai vienetas turi ilgį ir aukštį, **Žiniaraščiai: kiekių skaičiavimo duomenys** rodo vienetų skaičių viename m² (ar ft²) vieno sienos sluoksnio, vienetus užsakymui ir skiedinio tūrį; formulės yra [Plytos, blokai ir skiedinys](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Tipas turi vieną vienetą: dviejų skirtingų vienetų sluoksnių (plytų išorinio ir blokų vidinio) kol kas negalima suskaičiuoti viename tipe.

## Išlaikykite šerdį vietoje

**Savybėse** nustatykite sienos **Atskaitos liniją** į šerdies paviršių arba šerdies ašį. Kai vėliau pridedate ar storinate apdailą, ši linija lieka savo vietoje, o siena auga aplink ją; sienos, kurios su ja susitinka kampe, seka, todėl tiesūs kampai lieka uždari.

## Projekto medžiagos

{{ui:Medžiagų biblioteka…}} išvardija projekto medžiagas: pavadinimą, kategoriją, storį, nuo kurio sluoksnis prasideda, rodymo spalvą, pjūvio užpildymo raštą ir pastabas. Biblioteka įrašoma IFC faile kartu su projektu. Pasirinkus sluoksniui medžiagą, tas sluoksnis gauna medžiagos numatytąjį storį, kurį vėliau galite pakeisti; biblioteką redaguojant vėliau niekada nekeičiamos jau nubraižytos sienos. Medžiagą taip pat galite sukurti iš sluoksnio medžiagų sąrašo su {{ui:+ Nauja medžiaga…}}.

## Orientaciniai matmenys

{{ui:Anotuoti}} › {{ui:Orientacinis matmuo}}: pasirinkite horizontalų, vertikalų arba įstrižą matmenį ir atskaitos tašką: išorinį ar vidinį apdailos paviršių, išorinį ar vidinį šerdies paviršių, sienos ašį arba šerdies ašį. Pasirinkite pirmą sieną, pakeiskite atskaitos tašką, jei norite, pasirinkite antrą, tada spustelėkite, kur eina matmens linija. Du atskaitos taškai vienoje sienoje matuoja jos visą storį arba šerdies storį. {{ui:Orientaciniai matmenys…}} išvardija vaizdo matmenis, įskaitant tuos, kurie prarado sieną, su {{ui:Savybės}}, Perrišti atskaitos taškus ir {{ui:Naikinti}}.

### Pridėkite plano matmenis pagal taisykles

{{ui:Anotuoti}} › {{ui:Pridėti plano matmenis…}} pažymi aukšto plano, kurį žiūrite, išorę: bendrą dydį kiekviena kryptimi, matmenų eilę palei kiekvieną išorinį kraštą (sienų galai, sienos, kurios susitinka su kraštu, ir jame esančios durys bei langai), o eilės išdėstytos laisvai nuo pastato. Pažymėkite, ko norite, perskaitykite skaičių, tada {{ui:Pridėti matmenis}}. Tai įprasti orientaciniai matmenys, todėl jie seka sienas, kai sienos perkeliamos, o kiekvieną iš jų galite pasirinkti, perkelti ar ištrinti; visas rinkinys yra vienas anuliavimo žingsnis, o paleidus iš naujo nieko nedubliuojama.

Tai matuoja tik išorę: patalpos viduje, lenktos sienos ir sienos, nestatmenos planui, paliekamos rankiniams įrankiams, o tinklelio linijos nėra sienos, todėl matmenys tarp tinklelio linijų čia nedaromi. Jūsų prijungtas asistentas tai gali padaryti su `plan_dimension`.

Matmuo prikabintas prie sienų, o ne prie vietos ekrane: kai siena perkeliama arba keičiamas jos tipas, vertė seka. Jei siena ištrinama, matmuo rodo, kad jis neišspręstas, ir nerodo skaičiaus, kol jo neperrišate arba neanuliuojate. Ilgio laukas taip pat priima plano koordinates, pavyzdžiui `10',12'`, kad matmens linija būtų tiksliai toje vietoje.

Matmenys skirti sienoms, kurias nubraižė BimCraft, planų vaizduose. Dar neįgyvendinta: matmenys pjūviuose ir fasaduose, iki durų, langų ir kitų komponentų, bei sluoksniai, nubraižyti plane ir pjūvyje; žr. [Kas dar neįgyvendinta](topic:not-built-yet).

## Taip pat žr.

[Braižyti sienas](topic:draw-walls), [Keisti sieną, duris ar langą](topic:change-a-wall-or-door), [Savybių skydelis](topic:properties-panel).
