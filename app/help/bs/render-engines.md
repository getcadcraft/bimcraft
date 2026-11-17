---
title: Izbor programa koji crta sliku
summary: Izbor motora u dijalogu Renderuj: naša dva vlastita motora, drugi programi u CadCraft Studiju, i šta web radi umjesto toga.
keywords: renderuj, motor, renderer, motor renderovanja, dodatak, plugin, studio, vanjski program, nacrtao, red, motor dodatka
from: 44a1ef5e
---

{{ui:Renderuj}} ima izbor **Motor** iznad Oblika. Naša dva vlastita motora su uvijek tu i rade svuda; dodaci mogu dodati još, a u CadCraft Studiju lista sadrži i programe koji preuzimaju scenu.

| Motor | Šta radi | Gdje |
|---|---|---|
| Ugrađeni: Brzo | Brza statična slika: dnevno svjetlo, meke sjene, izgled stakla i metala, za nekoliko sekundi | Pregledač i Studio |
| Ugrađeni: Praćenje putanje | Svjetlo koje se odbija između površina na vašoj grafičkoj kartici ili procesoru, red renderovanja i drugi računari u vašoj mreži | Pregledač i Studio |
| Motor dodatka | Crta i vraća sliku: vidi [Nacrtajte sliku drugim programom](topic:render-other-program) | Pregledač (motor napisan u JavaScriptu) ili Studio (motor koji pokreće program) |
| Program koji preuzima scenu | Studio stavlja scenu u svoju fasciklu i drži je usklađenom | Studio |
| Otvori u … | Spašava scenu i otvara je u programu; ništa se ne vraća: vidi [Otvaranje scene u drugom programu](topic:render-open-in) | Web spašava datoteku |

## Kako izbor funkcioniše

- Biranje Brzo ili Praćenje putanje mijenja i oblik, i obrnuto. Ništa drugo u dijalogu se ne mijenja za korisnike koji nikada ne koriste drugi motor.
- Motor koji nije dostupan ostaje na listi sa razlogom („nije pronađeno“, „treba novija verzija“); ne možete ga odabrati. U pregledniku motor koji radi samo u Studiju prikazuje „čuva datoteku“: {{ui:Renderuj}} tada spašava scenu i njene postavke u datoteku koju odnosite tom programu.
- Izbor se čuva sa postavkama renderovanja datoteke, a motor koji ste zadnji izabrali je početni motor za datoteke koje nemaju vlastiti izbor.
- Slika iz drugog programa kaže koji program ju je nacrtao i njegovu verziju, u dijalogu i u redu renderovanja. Obećanja stranice [Renderuj](topic:render) pokrivaju samo **naše vlastite** motore: drugi program osvjetljava, tonira i uzorkuje na svoj način, pa su dvije slike iste scene slične po kameri, suncu, svjetiljkama i izloženosti, ali ne piksel po piksel.

## Šta svaki motor dobija

Scena ide drugom programu kao **paket**: model kao USD datoteka (ista koju piše [Spasi kao USD](topic:usd)), i datoteka postavki koja sadrži ono čemu se USD uvoznik ne može vjerovati: tačne vrijednosti materijala, svjetiljke koje su uključene sa svojom snagom i profilima svjetla, sunce, nebo, izloženost i kameru kako bi je dijalog nacrtao. Ništa se ne šalje nigdje.

## Red renderovanja

Slika za drugi program može čekati u [redu renderovanja](topic:render#the-render-queue) kao i naša; njen zadatak pamti za koji je motor.
