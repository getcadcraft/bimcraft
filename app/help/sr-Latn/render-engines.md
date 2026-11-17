---
title: Izbor programa koji crta sliku
summary: Izbor motora u dijalogu Renderuj, drugi programi u CadCraft Studiu i šta web radi umesto toga.
keywords: renderovanje, motor, renderer, motor za renderovanje, dodatak, plugin, studio, spoljni program, nacrtano od, red, motor iz dodatka
from: 44a1ef5e
---

{{ui:Render}} ima izbor **Motor** iznad {{ui:Mode}}. Naša dva motora su uvek tu i rade svuda; dodaci mogu da dodaju još, a u CadCraft Studiu lista sadrži i programe koji preuzimaju scenu.

| Motor | Šta radi | Gde |
|---|---|---|
| Ugrađeni: {{ui:Fast}} | Brza slika: dnevna svetlost, meke senke, izgled stakla i metala, za nekoliko sekundi | Pregledač i Studio |
| Ugrađeni: Praćenje putanje zraka | Svetlost koja se odbija između površina na grafičkoj kartici ili procesoru, red za renderovanje i ostali računari na mreži | Pregledač i Studio |
| Motor iz dodatka | Crta i vraća sliku: vidi [Nacrtaj sliku drugim programom](topic:render-other-program) | Pregledač (motor napisan u JavaScriptu) ili Studio (motor koji pokreće program) |
| Program koji preuzima scenu | Studio smešta scenu u svoju fasciklu i drži je usklađenom | Studio |
| Otvori u … | Čuva scenu i otvara je u programu; ništa se ne vraća: vidi [Otvaranje scene u drugom programu](topic:render-open-in) | Web čuva datoteku |

## Kako izbor radi

- Izbor {{ui:Fast}} ili Praćenja putanje zraka menja i {{ui:Mode}}, i obrnuto. Ništa drugo u dijalogu se ne menja za one koji nikad ne koriste drugi motor.
- Motor koji nije dostupan ostaje na listi uz razlog („nije pronađen”, „treba novija verzija”); ne može se izabrati. U pregledaču motor koji radi samo u Studiju pokazuje „čuva datoteku”: {{ui:Render}} tada čuva scenu i njena podešavanja u datoteku koju odneseš tom programu.
- Izbor se čuva sa podešavanjima renderovanja datoteke, a motor koji si poslednji izabrao je početni motor za datoteke koje nemaju svoj izbor.
- Slika iz drugog programa kaže koji ju je program nacrtao i njegovu verziju, u dijalogu i u {{ui:Render queue}}. Obećanja sa stranice [Renderovanje](topic:render) pokrivaju samo **naše** motore: drugi program osvetljava, tonira i uzorkuje na svoj način, pa su dve slike iste scene slične po kameri, suncu, svetiljkama i izloženosti, ali ne piksel po piksel.

## Šta svaki motor dobija

Scena ide drugom programu kao **paket**: model kao USD datoteka (ista datoteka koju piše [Sačuvaj kao USD](topic:usd)) i datoteka podešavanja koja sadrži ono čemu se uvoznik USD-a ne može verovati: tačne vrednosti materijala, svetiljke koje su uključene sa svojom snagom i profilima svetla, sunce, nebo, izloženost i kameru onako kako je dijalog crta. Ništa se nigde ne otprema.

## Red za renderovanje

Slika za drugi program može da čeka u [redu za renderovanje](topic:render#the-render-queue) kao i naše; njen posao pamti za koji je motor.
