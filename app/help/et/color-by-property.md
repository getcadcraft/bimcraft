---
title: Elementide värvimine omaduse järgi
summary: Värvi iga element ühe omaduse väärtuse järgi, näiteks klassi, tüübi, korruse, materjali, tuleresistentsusklassi või maksumuse järgi, loe legendi, klõpsa väärtusel, et näha ainult neid elemente, ja salvesta värvid skeemina, mida saab kasutada teistes mudelites.
keywords: värv, värvi järgi, legend, nutikas vaade, välimus, omadus, tüüp, materjal, tuleresistentsus, filter, eraldamine, teema, väärtused, skeem, värviskeem, salvesta värvid, taaskasutus, meeskond, json, värvinäidis
from: f081d343
---

## Mida teete

Näed ühe pilguga, kuidas omadus mudelis jaotub: millised seinad on välised, millised materjalid kus kasutusel, millistel elementidel puudub tuleresistentsusklass. Igal elemendil on oma väärtuse värv ning legend ütleb, mida iga värv tähendab ja mitmel elemendil see on.

## Sammud

1. Ava IFC-mudel.
2. Klõpsa paremal sakil {{ui:Värv}}.
3. Vali nimekirjast omadus. Esimesed kuuluvad igale elemendile ({{ui:Klass}}, {{ui:Tüüp}}, {{ui:Korrus}}, {{ui:Materjal}}, {{ui:Nimi}}…); ülejäänud pärinevad mudeli omadushulkadest ja kogushulkadest, hulga nime all. Iga nime järel olev arv näitab, mitmel elemendil see on.
4. Loe legendi: värv, väärtus ja mitmel elemendil see on.
5. Klõpsa väärtusel, et näha ainult neid elemente. Hoia all {{key:Mod}} ja klõpsa, et lisada veel väärtusi. Vajuta {{key:Shift+H}}, et taas kõik näha.
6. Klõpsa {{ui:Väljas}}, et naasta mudeli enda värvide juurde.

## Mida peaksite nägema

- Kuni seitsmel väärtusel on oma värv, kõige sagedasem väärtus esimesena. Rohkem väärtusi jagavad ühe halli värvi ja on loetletud **teised väärtused**.
- Arvuline omadus, millel on palju erinevaid väärtusi, jaotatakse kuueks võrdseks vahemikuks, heledast (madal) tumedani (kõrge).
- Omaduseta elemendid on kahvatuhallid ja loetletud **Väärtus puudub**, et värvilised paistaksid silma.
- Värvid kohanduvad teemadega Paber ja Mudel ning jäävad alles, kui mudelit muudad.
- Tüübi omadus kehtib kõigile selle tüübi elementidele; kui elemendil on sama omaduse oma väärtus, siis oma väärtus võidab.

## Muuda värve ja salvesta skeemina

- Klõpsa legendis väärtuse värvinäidisel, et valida sellele teine värv. Mudel värvitakse kohe uuesti.
- {{ui:Salvesta skeem}} laadib värvid alla väikese `.json`-failina, mis on nimetatud omaduse järgi, näiteks `Class colors.json`.
- Teisel mudelil või kaasõpetaja arvutis klõpsa {{ui:Ava skeem…}} ja vali see fail. Igale skeemi väärtusele antakse oma värv, nii et sama tuleresistentsusklass või süsteem on igas mudelis ühevärviline.
- Skeemis puuduvat väärtust värvitakse halliks ja see on loetletud kui „ei ole skeemis“; skeemis olevad väärtused, mida see mudel ei sisalda, jäävad nimekirja arvuga 0, et näeksid kogu skeemi.
- Skeem säilitab oma värvid mõlemas teemas. Omaduse valimine nimekirjast lähtub taas automaatsetest värvidest.

## Levinud vead

- **„Sellel mudelil pole … väärtusi.“** Skeem salvestati omadusele, mida see mudel ei sisalda (näiteks teise omadushulga nimega). Ava selle mudelitüübi jaoks tehtud skeem või vali nimekirjast omadus.

- **Omadus puudub nimekirjast.** Ükski mudeli elementidest, millel on kuju, ei oma seda. Korruste ja ruumide enda omadusi ei loetleta.
- **Kõik on ühevärvilised.** Kõigil elementidel on sama väärtus või mitte ühtegi: vaata legendi arve.

## Järgmised

- [Peida, eralda ja vaata läbi elemente](topic:hide-and-isolate)
- [Leia tee mudelipuu abil](topic:model-tree)
