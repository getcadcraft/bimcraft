---
title: Pasirinkite, kuri programa piešia vaizdą
summary: Variklio pasirinkimas atvaizdavimo dialoge: mūsų du varikliai, kitos programos CadCraft Studio ir ką žiniatinklis daro vietoj jų.
keywords: atvaizdavimas, variklis, atvaizdavimo variklis, papildinys, plugin, studio, išorinė programa, piešia, eilė, priedo variklis
from: 44a1ef5e
---

{{ui:Atvaizduoti}} turi **Variklis** pasirinkimą virš {{ui:Forma}}. Mūsų du varikliai visada yra ir veikia visur; priedai gali pridėti daugiau, o CadCraft Studio sąraše yra ir programos, kurios perima sceną.

| Variklis | Ką daro | Kur |
|---|---|---|
| Įtaisytasis: Greitas | Greitas vaizdas: dienos šviesa, minkšti šešėliai, stiklo ir metalo išvaizda, per kelias sekundes | Naršyklėje ir Studio |
| Įtaisytasis: spindulių sekiklis | Šviesa atsispindi tarp paviršių jūsų grafikos plokštėje ar procesoriuje, atvaizdavimo eilė ir kiti kompiuteriai jūsų tinkle | Naršyklėje ir Studio |
| Priedo variklis | Jis nupiešia ir grąžina vaizdą: žr. [Piešti vaizdą kita programa](topic:render-other-program) | Naršyklėje (JavaScript variklis) arba Studio (variklis, kuris paleidžia programą) |
| Programa, perimanti sceną | Studio deda sceną į savo aplanką ir ją palaiko suderintą | Studio |
| Atidaryti naudojant … | Įrašo sceną ir atidaro ją programoje; nieko negrįžta: žr. [Atidaryti sceną kitoje programoje](topic:render-open-in) | Žiniatinklis įrašo failą |

## Kaip veikia pasirinkimas

- Pasirinkus Greitas arba spindulių sekiklį, kartu pasikeičia ir {{ui:Forma}}, ir atvirkščiai. Niekas kitas dialoge nesikeičia tiems, kas niekada nenaudoja kito variklio.
- Variklis, kuris nepasiekiamas, lieka sąraše su priežastimi („nerasta“, „reikia naujesnės versijos“); jo pasirinkti negalima. Naršyklėje variklis, kuris veikia tik Studio, rodo „įrašo failą“: {{ui:Atvaizduoti}} tada įrašo sceną ir jos parametrus į failą, kurį nuneškite toms programai.
- Pasirinkimas įrašomas kartu su failo atvaizdavimo parametrais, o paskutinis pasirinktas variklis yra pradinis variklis failams, kurie neturi savo pasirinkimo.
- Vaizdas iš kitos programos nurodo, kuri programa jį nupiešė ir jos versiją, dialoge ir atvaizdavimo eilėje. Pažadai [Atvaizdavimo](topic:render) puslapyje galioja tik **mūsų pačių** varikliams: kita programa apšviečia, tonuoja ir ima mėginius savaip, todėl du tos pačios scenos vaizdai yra panašūs kameros, saulės, šviestuvų ir ekspozicijos požiūriu, bet ne pikselis po pikselio.

## Ką gauna kiekvienas variklis

Scena eina į kitą programą kaip **paketas**: modelis kaip USD failas (tas pats failas, kurį rašo [Įrašyti kaip USD](topic:usd)), ir parametrų failas, kuriame yra tai, kuo USD importuotojui negalima patikėti: tikslios medžiagų reikšmės, šviestuvai, kurie įjungti, su savo galia ir šviesos profiliais, saulė, dangus, ekspozicija ir kamera tokia, kokią ją piešia dialogas. Niekur nieko neįkeliama.

## Atvaizdavimo eilė

Vaizdas kitai programai gali laukti [atvaizdavimo eilėje](topic:render#the-render-queue) kaip ir mūsų pačių; jo darbas prisimena, kuriam varikliui jis skirtas.
