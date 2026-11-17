---
title: Vamzdžių ir ortakių dydžių parinkimas, kabelių užpildymo ir apšvietimo patikra
summary: Patikrinkite tiekimo vamzdžių ir ortakių dydžius su slėgio nuostoliu, nukreipkite kabelius per kabelių trasas ir vamzdinius kanalus bei matykite jų užpildymą, ir apskaičiuokite patalpų apšvietimą pagal IES arba EULUMDAT failus. Numatytosios reikšmės pažymėtos; įveskite galiojančių normų reikšmes.
keywords: dimensionavimas, vamzdžio dimensionavimas, ortakio dimensionavimas, slėgio nuostolis, sanitariniai vienetai, paklausa, hunter, hazen-williams, greitis, trintis, vienoda trintis, ventiliatoriaus slėgis, sklendė, kritinis kelias, kabelių trasa, vamzdinis kanalas, užpildymas, kabelių žiniaraštis, ies, ldt, eulumdat, fotometrija, apšvietimas, lux, tolygumas, apšvietimo skaičiavimas, galios tankis, mep, skaičiavimai, problemos
from: 9cb90815
---

## Ką darysite

Nubrėžkite vamzdžius, ortakius, kabelių trasas ir vamzdinius kanalus įprastu būdu, tada atverkite skydelį **Skaičiavimai**. Kiekviena skiltis nuskaito modelį, rodo lentelę ir išvardija, kas netinka, kaip **Problemos** ⚠ skydelyje. Kai dydis ištaisytų problemą, **Taikyti dydžius** pakeičia linijas vienu atšaukimo žingsniu.

Tai projektavimo pagalbinės priemonės. Kiekvienas numatytasis nustatymas ekrane pažymėtas, ir nė vienas nėra normų lentelė: įveskite skaičius iš standarto, pagal kurį projektuojate, ir rezultatą patikrinkite inžinierius, kuris už jį atsako.

## Vamzdžiai

1. Pasirinkite **sistemos** raktą (šaltas vanduo – `cw`, karštas – `hw`).
2. Nustatykite didžiausią greitį ir, jei norite tikrinti slėgį, slėgį šaltinyje bei mažiausią slėgį, kurio reikia sanitariniam įrenginiui.
3. Spustelėkite {{ui:Tikrinti}}.

Kiekvienas vamzdis neša žemiau esančių sanitarinių įrenginių paklausą. Paklausa gaunama iš sanitarinių vienetų kreivės pagal srautą, kaip aprašė Hunter. **Įmontuota kreivė yra pavyzdys, o ne normų lentelė**; Problemos tai nurodo tol, kol neįvesite savosios. Trintis skaičiuojama pagal Hazen–Williams, jungiamųjų detalių nuostoliai – nuostolių koeficientais, o kiekvienas pakilimas kainuoja 9,8 kPa metrui. Įrenginio vienetai nustatomi pagal jo tipą arba pagal skaičių, kurį nustatote pagalbine priemone `loads_set`.

## Ortakiai

Nustatykite sistemą, trinties normą (vienoda trintis) arba greitį ir bet kokį šilumokaičio, filtro ar duslintuvo nuostolį. Galiniai įrenginiai savo oro srautą paima iš `loads_set` ant difuzoriaus. Lentelėje rodomas greitis ir trintis kiekvienam gabalui, **ventiliatoriaus slėgis** kritiniame kelyje ir slėgis, kurį kiekvienos kitos galinės sklendės turi sugerti. Jungiamųjų detalių nuostoliai naudoja suapvalintus numatytuosius koeficientus, o ne jungiamųjų detalių duomenų bazę.

## Kabelių trasos ir vamzdiniai kanalai

Braižykite juos ortakio įrankiu: sistemos **Kabelių trasa** ir **Vamzdinis kanalas** išsaugomos kaip kabelių nešikliai, todėl kitos programos juos skaito kaip trasas ir kanalus. Skirtuke Kabeliai įklijuokite kabelių sąrašą (žymė, išorinis skersmuo mm, kiekis, nuo, iki). `nuo` ir `iki` yra įrenginio žymė arba taškas `x,y,z` milimetrais. Kabeliai seka trumpiausią nenutrūkstamą maršrutą per trasas ir kanalus; kiekvienas maršrutas rodo savo užpildymą, lyginant su jūsų įvestomis ribomis, o žiniaraštis išsaugomas CSV formatu, kurio ilgis apima atsargos procentą ir galus.

## Apšvietimas

Kiekvienam šviestuvui priskirkite jo IES (LM-63) arba EULUMDAT failą pagalbine priemone `photometry_set`. Įveskite tikslus, tinklelio žingsnį ir darbo plokštumos aukštį. Rezultatas rodo tik **tiesioginį** apšvietimą: be tarpusavio atspindžių ir be šešėlių, todėl patalpoje tai yra apatinė riba.

## Priešgaisriniai purkštuvai

Priedas **Priešgaisriniai purkštuvai** turi savo skirtuką; žr. jo žinyną.
