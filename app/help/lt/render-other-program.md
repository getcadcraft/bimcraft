---
title: Piešti vaizdą kita programa
summary: Mūsų pačių spindulių sekiklis nupiešia atvaizdavimo vaizdą; kita programa gali jį nupiešti tik per atvaizdavimo variklio priedą CadCraft Studio. Kas perduodama ir kodėl kai kurios programos niekada nesiūlomos.
keywords: atvaizdavimas, variklis, išorinė programa, priedo variklis, studio, fonas, eilė, usd, gltf, nupiešta, blender, gpl
from: 652b413c
---

Vaizdą {{ui:Atvaizduoti}} piešia **mūsų pačių varikliai**: Greitas ir spindulių sekiklis naršyklėje bei CadCraft Studio. Kita programa gali jį nupiešti tik tada, kai jį atneša **atvaizdavimo variklio priedas**: žr. [Atvaizdavimo variklio pridėjimas priedu](topic:render-engine-addons). Norėdami nuvesti sceną į kitą programą ir toliau dirbti joje, naudokite [Atidaryti sceną kitoje programoje](topic:render-open-in) arba [Siųsti sceną žaidimų varikliui](topic:render-unreal).

## Piešti vaizdą priedo varikliu

1. Įjunkite priedą Parametrai › Priedai. Jo variklis atsiranda {{ui:Atvaizduoti}} variklių sąraše.
2. Pasirinkite jį. Jo paties parametrai rodomi po variklių sąrašu.
3. Spustelėkite {{ui:Atvaizduoti}}. Pirmą kartą, kai priedas paleidžia programą, Studio klausia savo dialoge. Eiga rodoma, kol jis piešia; {{ui:Stabdyti}} jį nutraukia. Vaizdas atsiranda pažymėtas variklio, kuris jį nupiešė, pavadinimu.

Variklis, parašytas JavaScript, veikia ir naršyklėje. Variklis, kuris paleidžia programą šiame kompiuteryje, veikia tik Studio; naršyklėje jis rodomas kaip failas, kurį reikia įrašyti.

## Kas perduodama

Variklis gauna **paketą**: modelį kaip USD failą (ir glTF failą, kai to prašo), bei parametrų failą su tikslioms medžiagų reikšmėms, saule ir dangumi, kiekvienu įjungtu šviestuvu su galia ir šviesos profiliu, kamera ir ekspozicija. Kiekviena programa apšviečia, tonuoja ir ima mėginius savaip, todėl vaizdai panašūs kameros, saulės, šviestuvų ir ekspozicijos požiūriu, bet ne pikselis po pikselio.

## Programos, kurių CadCraft niekada nepaleidžia

CadCraft niekada nepaleidžia programos pagal GNU GPL licenciją ir niekada jos neįtraukia kaip variklio ar kaip paskirties „Atidaryti naudojant“. Blender yra viena iš jų, todėl jos nėra variklių sąraše. USD ar glTF failas, įrašytas iš {{ui:Atvaizduoti}}, vis tiek atsidaro jame, kaip ir bet kurioje programoje, skaitančioje tuos failus.

:::note
Panoraminės ir stereo kameros bei dangaus paveikslėlis (naudojamos dangaus spalvos) kitai programai neperduodami. Niekas, padaryta kitoje programoje, į modelį negrįžta.
:::
