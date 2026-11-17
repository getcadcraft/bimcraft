---
title: Kontrolli torusid ja kanaleid konstruktsiooni suhtes
summary: Käivita torude ja kanalite valmis põrkekomplektid seinte, plaatide, talade ja postide vastu, leia lõigud, mis on konstruktsioonile liiga lähedal oma isolatsiooni ja vahe järgi, ning loetle avad, mida lõigud seinte ja plaatide kaudu vajavad, CSV-na ja BCF-na.
keywords: mep, põrge, põrkekontroll, koordineerimine, konstruktsioon, seinad, plaadid, talad, postid, vahekaugus, pehme põrge, isolatsioon, vahe, ava, avad, läbiviik, hülss, südamik, ehitaja töö, bcf, csv
from: 2d597f01
---

## Mida teed

Veendu, et teenused sobivad hoonesse: mis läheb konstruktsiooniga kokku, mis käib sellele liiga lähedal ja kus seinad ja plaadid vajavad auke. Ava vasakpoolses paneelis {{ui:Põrkekontroll}}; jaotis **Torud ja kanalid konstruktsiooni vastu** asub tavalise kontrolli all.

## Kõvad põrked

Kahe komplekti loendid pakuvad nüüd ka **Torud ja kanalid**, **Seinad**, **Plaadid ja katused**, **Talad**, **Postid** ja **Konstruktsioon** (kõik neli), koos sellega, mitu elementi kumbki sisaldab. Kliki {{ui:Torud ja kanalid × konstruktsioon}}, et valida esimene ja viimane ning käivitada kontroll; või vali ise mis tahes paar ja kliki {{ui:Käivita}}. Vt [Põrgete kontroll](topic:clash-check).

## Vahekaugused

Mõned teenused vajavad ümbritsevat ruumi: oma isolatsiooni ning tööruumi või hülsi jaoks.

1. Anna torulõigule või kanalilõigule omaduste **Isolatsiooni** paksus (selle jaoks ei joonistata midagi).
2. Sisesta põrkekontrollis **Vahe torude ja kanalite ümber** (mm).
3. Kliki {{ui:Kontrolli vahekaugusi}}: iga osa, mis on seinale, plaadile, talale või postile lähemal kui tema isolatsioon pluss vahe, loetletakse koos kaugusega, mis tal on, ja kaugusega, mis sellel peaks olema. Kliki reale, et näha mõlemat.

Osa, mis läbib seina või plaati, on ava, mitte vahekaugus, ja on loetletud seal.

## Vajalikud avad

Kliki {{ui:Vajalikud avad}}. Kus lõigu keskjoon läbib seina või plaati, loetleb BimCraft avad, mida see vajab: ümmargune ümmargusele torule või kanalile, muidu ristkülikukujuline, nii suur kui lõigu välismõõt pluss kaks korda isolatsioon pluss kaks korda vahe, keskendatud kohta, kus lõik ristub. Kliki reale, et näha lõiku ja seina või plaati.

- {{ui:Avad CSV-na}}: üks rida iga ava kohta: lõik, selle mõõt ja isolatsioon, ava mõõt, element, millest läbi käiakse, ja selle GlobalId, korrus, keskme X, Y ja Z ning kui kaugele lõik läbi läheb.
- {{ui:Avad BCF-probleemidena}}: üks probleem iga ava kohta, kaameraga, mis vaatab seda, ning valitud lõik ja element, konstruktsiooniinseneri programmi jaoks.

:::note
Midagi ei lõigata: avad on nimekiri nende jaoks, kes neid mõõtmestavad. Vahe on sinu sisestada; ükski norm ei ütle, kui suur ava peab olema. Talad ja postid on põrked, mitte avad: kas toru tohib neist läbi minna, on konstruktsiooniinseneri otsus.
:::
