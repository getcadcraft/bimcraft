---
title: Živý pohľad
summary: Panel vedľa modelu, ktorý ho zobrazuje v reálnočasovom vzhľade so slnkom, tieňmi a odrazeným svetlom a sleduje každú vašu zmenu. Prejdite sa ním a nastavte čas dňa a mesiac.
keywords: živý pohľad, reálny čas, realtime, reálnočasové vykreslenie, prechádzka, prechod, prvá osoba, prezentácia, klient, druhá obrazovka, druhé okno, monitor, čas dňa, slnko, ročné obdobie, mesiac, tiene, ambient occlusion, odrazy, odrazené svetlo, globálne osvetlenie, webgpu, webgl
from: ea5c02bf
---

Živý pohľad zobrazuje model v reálnočasovom vzhľade: oblohu a slnko podľa miesta a dátumu vašej lokality, slnečné tiene, farby a materiály, ktoré ste prvkom priradili, svetlá a svetlo odrazené od stien a podláh. Sleduje, čo robíte: ak otočíte 3D pohľad, otočí sa aj on, a ak zmeníte model, o chvíľu zobrazí zmenu. Nič sa nenahráva.

Kreslí tú istú scénu, farby, svetlá a slnko ako [Vykreslenie obrázka](topic:render). Na hotový obrázok použite toto.

## Otvorenie

1. Otvorte model a na paneli nástrojov vyberte {{ui:Živý pohľad}}. Panel sa otvorí nad aplikáciou, vpravo dole.
2. Potiahnite jeho titulný pruh, aby ste ho presunuli. Potiahnite jeho roh, aby ste ho zväčšili.
3. {{ui:Živý pohľad v novom okne}} (tlačidlo vedľa neho) alebo {{ui:Nové okno}} na paneli presunie ho do vlastného okna, napríklad pre druhú obrazovku. Ak váš prehliadač blokuje vyskakovacie okná, otvorí sa ako panel.
4. {{ui:Zavrieť}} ho zatvorí.

## Ovládacie prvky

| Ovládací prvok | Čo robí |
|---|---|
| {{ui:Sledovať pohľad}} | Zapnuté: živý pohľad sa díva tam, kam 3D pohľad. Prechádzanie ho vypne |
| {{ui:Prechádzka}} | Prechod modelom (nižšie) |
| {{ui:Gravitácia}} | Pri prechádzaní: stojte na podlahách a stúpajte po schodoch. Vypnuté: lietajte |
| {{ui:Čas}} | Hodina dňa. Slnko sa posúva pri ťahaní |
| {{ui:Mesiac}} | Mesiac, aby ste videli slnko v zime a v lete |
| {{ui:Kvalita}} | {{ui:Pre tento počítač}}, alebo {{ui:Nízka}}, {{ui:Stredná}} alebo {{ui:Vysoká}} |

Riadok dole hovorí, čo vykresľuje pohľad (WebGPU alebo WebGL 2), kvalitu a odrazené svetlo.

## Prechod modelom

1. Otočte 3D pohľad tam, kde chcete stáť, a vyberte {{ui:Prechádzka}}. Stojíte na podlahe pod očným bodom pohľadu, vysokí 1.6 m.
2. Kliknite do živého pohľadu a potom používajte {{key:W}} {{key:A}} {{key:S}} {{key:D}} alebo šípky. Podržte {{key:Shift}} na beh. Potiahnutím sa rozhliadate.
3. Schody do výšky 40 cm sa vystúpia; všetko vyššie je stena. Steny vás zastavia a po nich sa kĺžete.
4. Pri vypnutej {{ui:Gravitácia}} lietate: {{key:E}} stúpa, {{key:Q}} klesá.
5. {{key:Esc}} zastaví prechádzanie.

## Odrazené svetlo

Svetlo, ktoré sa odrazí od steny osvetlenej slnkom na podlahu, a tmavšie vnútro miestnosti sa počítajú na pozadí na každom jadre procesora. Kým sa počíta, dolný riadok hovorí {{ui:Odrazené svetlo: 40 %}}; keď je hotové, pohľad ho prevezme. Po zmene sa výpočet začne znova.

:::note
Toto je priblíženie pre živý pohľad, nie vykreslený obrázok: malé detaily medzi bodmi dostanú odrazené svetlo od najbližších bodov.
:::

:::note
Prehliadače sa líšia. Tam, kde má prehliadač WebGPU, živý pohľad ho používa; inde používa WebGL 2 a vyzerá rovnako. Ak nemá ani jedno, panel to oznámi.
:::
