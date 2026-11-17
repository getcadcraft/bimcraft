---
title: Odabir programa koji crta sliku
summary: Izbor motora u dijaloškom okviru Render: naši vlastiti motori, drugi programi u CadCraft Studiju i što web radi umjesto toga.
keywords: render, motor, renderer, motor za render, dodatak, studio, vanjski program, nacrtao, red, usd, gltf, dodatak motora
from: 44a1ef5e
---

{{ui:Render}} ima izbor **Motor** iznad {{ui:Mode}}. Naša dva vlastita motora uvijek su tu i rade svugdje; dodaci mogu dodati još, a u CadCraft Studiju popis sadrži i programe koji preuzimaju scenu.

| Motor | Što radi | Gdje |
|---|---|---|
| Ugrađeni: {{ui:Fast}} | Brza slika bez pomicanja: dnevna svjetlost, meke sjene, izgled stakla i metala, u sekundama | Preglednik i Studio |
| Ugrađeni: Path tracer | Svjetlo koje se odbija između površina na vašoj grafičkoj kartici ili procesoru, red za render i ostala računala na vašoj mreži | Preglednik i Studio |
| Motor dodatka | Crta i vraća sliku: vidi [Nacrtajte sliku drugim programom](topic:render-other-program) | Preglednik (motor napisan u JavaScriptu) ili Studio (motor koji pokreće program) |
| Program koji preuzima scenu | Studio stavlja scenu u svoju mapu i održava je usklađenom | Studio |
| Otvori u … | Sprema scenu i otvara je u programu; ništa se ne vraća: vidi [Otvorite scenu u drugom programu](topic:render-open-in) | Web sprema datoteku |

## Kako izbor funkcionira

- Odabir {{ui:Fast}} ili Path tracera mijenja i {{ui:Mode}}, i obrnuto. Ništa drugo u dijaloškom okviru se ne mijenja za ljude koji nikad ne koriste drugi motor.
- Motor koji nije dostupan ostaje na popisu s razlogom („nije pronađeno“, „treba noviju verziju“); ne možete ga odabrati. U pregledniku motor koji radi samo u Studiju prikazuje „sprema datoteku“: {{ui:Render}} tada sprema scenu i njezine postavke u datoteku koju odnosite tom programu.
- Izbor se sprema uz postavke rendera datoteke, a motor koji ste zadnji odabrali je početni motor za datoteke koje nemaju vlastiti izbor.
- Slika iz drugog programa kaže koji ju je program nacrtao i koje je verzije, u dijaloškom okviru i u {{ui:Render queue}}. Obećanja na stranici [Render](topic:render) pokrivaju samo **naše vlastite** motore: drugi program osvjetljuje, tonira i uzorkuje na svoj način, pa su dvije slike iste scene slične po kameri, suncu, svjetiljkama i ekspoziciji, ali ne piksel po piksel.

## Što svaki motor dobiva

Scena ide drugom programu kao **paket**: model kao USD datoteka (ista datoteka koju zapisuje [Spremi kao USD](topic:usd)) i datoteka postavki koja sadrži ono čemu se USD uvoznik ne može pouzdati: točne vrijednosti materijala, svjetiljke koje su uključene sa svojom snagom i profilima svjetla, sunce, nebo, ekspoziciju i kameru onakvu kakvu bi dijaloški okvir nacrtao. Ništa se ne učitava nigdje.

## Red za render

Slika za drugi program može čekati u [redu za render](topic:render#the-render-queue) kao i naša vlastita; njezin zadatak pamti za koji je motor.
