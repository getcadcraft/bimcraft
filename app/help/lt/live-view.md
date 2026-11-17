---
title: Gyvasis vaizdas
summary: Skydelis šalia modelio, rodantis jį realaus laiko vaizdu su saule, šešėliais ir atšokusia šviesa; juo galima vaikščioti, nustatyti paros laiką ir mėnesį, o jis seka kiekvieną jūsų pakeitimą.
keywords: gyvasis vaizdas, realus laikas, realaus laiko, realaus laiko atvaizdavimas, vaikščiojimas, vaikščioti, pirmasis asmuo, pristatymas, klientas, antras ekranas, antras langas, monitorius, paros laikas, saulė, sezonas, mėnuo, šešėliai, aplinkos okliuzija, atspindžiai, atšokusi šviesa, globalus apšvietimas, webgpu, webgl
from: ea5c02bf
---

Gyvajame vaizde modelis rodomas realaus laiko vaizdu: dangus ir saulė pagal jūsų statybvietės vietą ir datą, saulės šešėliai, dažai ir medžiagos, kurias priskyrėte elementams, lempos bei nuo sienų ir grindų atšokusi šviesa. Jis seka tai, ką darote: pasukite 3D vaizdą – jis pasisuka kartu, pakeiskite modelį – jis parodo pakeitimą po akimirkos. Nieko nesiunčiama.

Jis piešia tą pačią sceną, dažus, lempas ir saulę kaip [Atvaizduoti paveikslėlį](topic:render); baigtam paveikslėliui naudokite tą funkciją.

## Atidaryti

1. Atidarykite modelį ir įrankių juostoje pasirinkite {{ui:Gyvasis vaizdas}}. Skydelis atsidaro virš programos, apatiniame dešiniajame kampe.
2. Vilkite jo antraštės juostą, kad perkeltumėte, ir traukite kampą, kad padidintumėte.
3. {{ui:Gyvasis vaizdas naujame lange}} (šalia esantis mygtukas) arba {{ui:Naujas langas}} skydelyje perkelia jį į atskirą langą antram ekranui. Jei naršyklė blokuoja iškylančiuosius langus, jis atsidaro kaip skydelis.
4. {{ui:Uždaryti}} jį uždaro.

## Valdikliai

| Valdiklis | Ką daro |
|---|---|
| {{ui:Sekti vaizdą}} | Įjungta: gyvasis vaizdas žiūri ten, kur žiūri 3D vaizdas. Vaikščiojimas jį išjungia |
| {{ui:Vaikščioti}} | Vaikščiokite po modelį (žemiau) |
| {{ui:Gravitacija}} | Vaikštant: stovite ant grindų ir lipate laiptais. Išjungta: skraidote |
| {{ui:Laikas}} | Dienos valanda. Saulė juda, kai tempiate |
| {{ui:Mėnuo}} | Mėnuo, kad matytumėte saulę žiemą ir vasarą |
| {{ui:Kokybė}} | {{ui:Šiam kompiuteriui}}, arba {{ui:Žema}}, {{ui:Vidutinis}} arba {{ui:Aukšta}} |

Apatinėje eilutėje parašyta, kas piešia vaizdą (WebGPU arba WebGL 2), kokybė ir atšokusi šviesa.

## Vaikščioti po modelį

1. Pasukite 3D vaizdą į vietą, kur norite stovėti, ir pasirinkite {{ui:Vaikščioti}}. Stovite ant grindų žemiau vaizdo akies taško, 1,6 m aukščio.
2. Spustelėkite gyvąjį vaizdą, tada naudokite {{key:W}} {{key:A}} {{key:S}} {{key:D}} arba rodyklių klavišus. Laikykite {{key:Shift}}, kad bėgtumėte. Tempkite, kad žvilgtelėtumėte aplink.
3. Žingsniai iki 40 cm įveikiami (laiptai); viskas aukščiau yra siena. Sienos jus sustabdo, o jūs slystate palei jas.
4. Kai {{ui:Gravitacija}} išjungta, skraidote: {{key:E}} kyla aukštyn, {{key:Q}} leidžiasi žemyn.
5. {{key:Esc}} sustabdo vaikščiojimą.

## Atšokusi šviesa

Šviesa, atšokanti nuo saulės apšviestos sienos į grindis, ir tamsesnis kambario vidus skaičiuojami fone visuose procesoriaus branduoliuose. Kol skaičiuojama, apatinėje eilutėje rodoma {{ui:Atšokusi šviesa: 40 %}}; kai ji paruošta, vaizdas ją įtraukia. Pakeitus ką nors, skaičiavimas prasideda iš naujo.

:::note
Tai gyvojo vaizdo apytikslis skaičiavimas, o ne atvaizduotas paveikslėlis: smulkios detalės tarp taškų gauna artimiausių taškų atšokusią šviesą.
:::

:::note
Naršyklės skiriasi. Kur naršyklė turi WebGPU, gyvasis vaizdas naudoja jį; kitur naudojamas WebGL 2 ir vaizdas atrodo taip pat. Jei nėra nei vieno, skydelis apie tai praneša.
:::
