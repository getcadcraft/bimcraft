---
title: Pogled v živo
summary: Plošča ob modelu, ki ga prikazuje v videzu v realnem času, s soncem, senco in odbito svetlobo, in sledi vsaki vaši spremembi; skozi njo se sprehodite ter nastavite čas dneva in mesec.
keywords: pogled v živo, realni čas, realnočasni, upodobitev v realnem času, sprehod, sprehod skozi, prvoosebni, predstavitev, naročnik, drugi zaslon, drugo okno, monitor, čas dneva, sonce, letni čas, mesec, senca, ambientalna okluzija, odsevi, odbita svetloba, globalna osvetlitev, webgpu, webgl
from: ea5c02bf
---

Pogled v živo prikazuje model v videzu v realnem času: nebo in sonce z vašega mesta in datuma, sončne sence, barve in materiale, ki ste jih dali elementom, svetilke ter svetlobo, odbito od sten in tal. Sledi temu, kar počnete: zasukate 3D pogled in tudi on se zasuče, spremenite model in čez trenutek to pokaže. Nič se ne naloži navzgor.

Riše isti prizor, barve, svetilke in sonce kot [Upodobi sliko](topic:render); za končano sliko uporabite to.

## Odprtje

1. Odprite model in izberite {{ui:Pogled v živo}} v orodni vrstici. Plošča se odpre nad aplikacijo, spodaj desno.
2. Povlecite njeno naslovno vrstico, da jo premaknete, in potegnite njen kot, da jo povečate.
3. {{ui:Pogled v živo v novem oknu}} (gumb ob njem) ali {{ui:Novo okno}} na plošči ga premakne v lastno okno, za drugi zaslon. Če vaš brskalnik blokira pojavna okna, se odpre kot plošča.
4. {{ui:Zapri}} ga zapre.

## Upravljalniki

| Upravljalnik | Kaj naredi |
|---|---|
| {{ui:Sledi pogledu}} | Vklopljeno: pogled v živo gleda, kamor gleda 3D pogled. Sprehajanje ga izklopi |
| {{ui:Sprehod}} | Sprehod skozi model (spodaj) |
| {{ui:Gravitacija}} | Med sprehodom: stojite na tleh in plezajte po stopnicah. Izklopljeno: letite |
| {{ui:Ura}} | Ura dneva. Sonce se premika, ko povlečete |
| {{ui:Mesec}} | Mesec, da vidite sonce pozimi in poleti |
| {{ui:Kakovost}} | {{ui:Za ta računalnik}} ali {{ui:Nizka}}, {{ui:Srednja}} ali {{ui:Visoka}} |

Spodnja vrstica pove, kaj riše pogled (WebGPU ali WebGL 2), kakovost in odbito svetlobo.

## Sprehod skozi model

1. Obrnite 3D pogled tja, kjer želite stati, in izberite {{ui:Sprehod}}. Stojite na tleh pod točko pogleda, visoki 1.6 m.
2. Kliknite pogled v živo, nato uporabite {{key:W}} {{key:A}} {{key:S}} {{key:D}} ali puščične tipke. Držite {{key:Shift}} za tek. Povlecite, da se ozrete.
3. Višine stopnic do 40 cm premagate samodejno (to so stopnice); vse višje je zid. Zidovi vas ustavijo in ob njih drsite.
4. Z izklopljeno {{ui:Gravitacija}} letite: {{key:E}} gor, {{key:Q}} dol.
5. {{key:Esc}} ustavi sprehod.

## Odbita svetloba

Svetloba, ki se odbije od sončne stene na tla, in temnejša notranjost sobe se izračunata v ozadju na vsakem procesorskem jedru. Med računanjem spodnja vrstica pravi {{ui:Odbita svetloba: 40 %}}; ko je pripravljeno, pogled to upošteva. Po spremembi se začne znova.

:::note
To je približek za pogled v živo, ne upodobljena slika: majhne podrobnosti med točkami dobijo odbito svetlobo bližnjih točk.
:::

:::note
Brskalniki se razlikujejo. Kjer ima brskalnik WebGPU, pogled v živo to uporablja; drugod uporablja WebGL 2 in izgleda enako. Če nobeden ni na voljo, plošča to pove.
:::
