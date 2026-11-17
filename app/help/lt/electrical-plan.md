---
title: Elektros planas
summary: Dėkite rozetes, jungiklius, šviestuvus, jutiklius, jungimo dėžutes ir skydus ant plano tais pačiais simboliais kaip CadCraft Elektra priedas, susiekite jungiklius su šviestuvais, kuriuos jie įjungia, ir išvardykite prietaisus bei grandines žiniaraščiuose.
keywords: elektra, elektros planas, rozetė, lizdas, dvigubas, jungiklis, perjungiamasis, šviesos reguliatorius, šviestuvas, lubinis šviestuvas, įleidžiamas šviestuvas, žemas šviestuvas, judesio jutiklis, jungimo dėžutė, skydas, paskirstymo skydas, grandinė, apkrova, vatai, amperai, jungiklio grandinė, prietaisų žiniaraštis, skydo žiniaraštis
from: f7de1947
---

## Ką darysite

Nubrėžkite namo elektros planą modelyje: rozetes, jungiklius ir skydus ant sienų, šviestuvus ir jutiklius ant lubų. Kiekvienas prietaisas yra tikras elektros elementas IFC faile su savo žymeniu, grandine ir apkrova, o jungikliai prisimena šviestuvus, kuriuos įjungia.

## Įdėti prietaisus

1. Aukšte atidarykite {{ui:Build}} ir pasirinkite {{ui:Electrical}}.
2. Pasirinkite prietaisą: rozetes (maitinimo, duomenų, telefono, garso ir vaizdo), jungiklius ir jutiklius (taip pat termostatą ir laikmatį), šviestuvus, detektorius ir signalizacijas, jungimo dėžutę, skydą arba poskydį.
3. Įveskite **Grandinė**, jei žinote grandinę (bet koks pavadinimas: 1, 2, A-3). Palikite **Montavimo aukštis** tuščią, kad būtų naudojamas įprastas to prietaiso aukštis.
4. Spustelėkite ant plano. Rozetės, jungikliai ir skydai dedami ant artimiausios sienos paviršiaus, nukreipti į patalpos vidų; šviestuvai, jutikliai ir jungimo dėžutės dedami ant lubų ten, kur spustelėjote.

Prietaisai žymimi jiems dedant: **R** rozetėms, **S** jungikliams, **L** šviestuvams, **M** judesio jutikliams, **J** jungimo dėžutėms, **P** skydams. Prietaisai ant sienos juda kartu su siena, kai perkeliate sieną.

Norite ieškoti pagal paveikslėlį? Atidarykite **Simbolių paletė** iš {{ui:Build}}, kad rastumėte prietaisą pagal pavadinimą, pažymėtumėte mėgstamiausius ir įdėtumėte jį vienu spustelėjimu: žr. [Simbolių paletė](topic:symbol-palette).

## Susieti jungiklius su šviestuvais

1. Pasirinkite jungiklį (arba judesio jutiklį) ir spustelėkite **Susieti šviestuvus** skiltyje **Savybės**.
2. Spustelėkite kiekvieną šviestuvą, kurį jis įjungia. Dar kartą spustelėję susietą šviestuvą, atsiejate jį.
3. Paspauskite {{key:Enter}} arba spustelėkite **Atlikta**.

Plane nuo jungiklio iki kiekvieno jo šviestuvo nubrėžiama punktyrinė kreivė. Šviestuvo **Savybės** rodo, kurie jungikliai jį įjungia.

## Patalpa, kurioje stovi prietaisas

Kiekvienas prietaisas žino, kurioje patalpoje yra. Prietaisas ant sienos priklauso patalpai, į kurią jis nukreiptas; lubinis prietaisas – patalpai, virš kurios yra. **Savybės** rodo **Patalpa**, o žiniaraštyje **Elektros prietaisai** yra stulpelis **Patalpa** (numeris ir pavadinimas, pavyzdžiui, 101 Virtuvė).

Ji nuolat atnaujinama: pervadinus ar pernumeravus patalpą, perkėlus prietaisą arba sieną, patalpa atsinaujina tuo pačiu veiksmu. Prietaisas pastato išorinėje pusėje arba erdvėje, kuri nėra patalpa, nurodo, kad nėra patalpoje.

Patalpa taip pat įrašoma į failą, prietaiso savybių rinkinyje `CadCraft_Location` (Room, RoomNumber, RoomName), todėl ją gali naudoti Ieškoti, Spalva pagal savybę ir žymenų žiniaraštis, o taip pat ir kita programa. Plano simboliai ir su simboliu susieti elementai gauna tą patį rinkinį; žr. [Simbolių paletė](topic:symbol-palette).

## Leiskite asistentui juos įdėti

Kai prijungtas asistentas (**Parametrai › Asistentai**, leidus keisti), prietaisus galite prašyti žodžiais: „įdėkite dvigubą rozetę kas 2 m palei svetainės sienas, 300 mm aukštyje, grandinėje 3“ arba „pridėkite lubinį šviestuvą su jo jungikliu prie durų“. Asistentas naudoja penkis įrankius: `devices_add`, `device_change`, `lights_set`, `devices_delete` ir `devices_list`. Jie sukuria tuos pačius prietaisus, kuriuos sukuria {{ui:Electrical}} įrankis, tose pačiose sienose, su tais pačiais žymenimis, grandinėmis, apkrovomis ir aukščiais, o kiekvienas iškvietimas yra vienas atšaukimo žingsnis.

Prietaisas niekada negauna tipo, kurio nėra {{ui:Electrical}} įrankyje: nežinomas tipas atmetamas, o asistentui pateikiamas sąrašas. Rozetė ar jungiklis turi būti ne toliau kaip 600 mm nuo sienos paviršiaus, kaip ir spustelėjus, kitaip iškvietimas atmetamas ir nieko nededama. Numatytieji aukščiai matuojami milimetrais: 300 rozetėms, 1100 jungikliams; lubinis prietaisas kabo nuo lubų.

## Keisti ir išvardyti

Pasirinkite prietaisą, kad pakeistumėte jo žymenį, grandinę, apkrovą (vatais) ir montavimo aukštį. Pasirinkę kelis, galite visus iš karto perkelti į vieną grandinę. Norėdami pašalinti vieną, paspauskite {{key:Delete}}; pašalintas šviestuvas nuimamas nuo savo jungiklių.

{{ui:Schedules}} pasirinkite **Elektros prietaisai** – visi prietaisai su jų aukštu, grandine, apkrova, aukščiu ir šviestuvais, kuriuos įjungia kiekvienas jungiklis, arba **Grandinės** – kiekvienos grandinės prietaisai, bendra apkrova ir srovė. Abu taip pat yra brėžinių rinkinio žiniaraščių lape: žr. [Fasadai, pjūviai ir lapai](topic:sheets).

:::note
Montavimo aukščiai ir apkrovos yra planavimo numatytosios reikšmės (rozetė 16" aukštyje ir 200 W, jungiklis 48", lubinis šviestuvas 60 W), o ne projektas: elektrikas ar inžinierius parenka grandines ir tikrina normas.
:::

:::tip
Simboliai yra tie patys, kuriuos CadCraft Elektra priedas braižo montavimo planuose, todėl plano skaitymas abiejose programose vienodas.
:::
