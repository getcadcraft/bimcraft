---
title: Piilota, eristä ja tee kohteet läpinäkyviksi
summary: Valitse useita kohteita, piilota ne, näytä vain ne tai näytä ne siten, että kaikki muu on läpinäkyvää, ja palauta sitten kaikki näkyviin.
keywords: piilota, eristä, läpinäkyvä, läpinäkyvyys, haamu, röntgen, näytä kaikki, näytä piilotetut, valitse useita, monivalinta, Ctrl-napsautus, Shift-napsautus, näkyvyys
from: 97e98b8c
---

## Mitä teet

Tyhjennä näkymä siihen, mitä katsot: piilota tiellä olevat kohteet, näytä vain valitsemasi tai pidä kaikki muu ruudulla himmeänä ääriviivana, jotta tiedät yhä, missä olet.

## Vaiheet

1. Avaa IFC-malli. Katso [Avaa IFC-malli ja tutki sitä 3D-näkymässä](topic:open-ifc-model).
2. Valitse kohde napsauttamalla sitä. Valitse useampia pitämällä {{key:Mod}} tai {{key:Shift}} painettuna ja napsauttamalla jokaista. Valitun kohteen napsauttaminen tällä tavalla poistaa sen valinnasta.
3. Avaa {{ui:Näytä}} työkalurivillä ja valitse toiminto tai paina sen näppäintä:
   - {{ui:Piilota}} ({{key:H}}) piilottaa valitut kohteet.
   - {{ui:Eristä}} ({{key:I}}) näyttää vain valitut kohteet.
   - {{ui:Läpinäkyvä}} ({{key:T}}) näyttää valitut kohteet sellaisina kuin ne ovat ja kaiken muun läpinäkyvänä.
4. Napsauta samassa valikossa {{ui:Näytä kaikki}} tai paina {{key:Shift+H}} näyttääksesi kaikki kohteet uudelleen.
5. Jos haluat leikata pois kaiken valittujen kohteiden ympärillä, napsauta samassa valikossa {{ui:Leikkauslaatikko valinnan ympärille}} tai paina {{key:Shift+X}}. Katso [Leikkaa IFC-malli leikkaustasolla](topic:section-plane).

## Mitä pitäisi näkyä

- Kun useita kohteita on valittu, {{ui:Ominaisuudet}} kertoo määrän ja luettelee ne luokittain. Napsauta yhtä kohdetta nähdäksesi sen ominaisuudet.
- Piilotettuja kohteita ei voi valita: napsautus osuu niiden takana olevaan kohteeseen.
- Läpinäkyviäkään kohteita ei voi valita, joten seinien läpi voi napsauttaa suoraan eristettyihin kohteisiin.
- Reunat piiloutuvat kohteen mukana ja himmenevät sen mukana.
- Piilotus, eristys ja läpinäkyvyys säilyvät muokatessa, kirjastokohteita sijoitettaessa tai mallia leikattaessa leikkaustasolla. Toisen mallin avaaminen näyttää kaiken uudelleen.

## Yleisiä virheitä

- **Valikon kohdat ovat harmaina.** Mitään ei ole valittu. Valitse ensin kohde; osoita kohtaa nähdäksesi, miksi se ei voi toimia.
- **Eristys näytti seinän, jonka piilotin.** Eristys näyttää täsmälleen valitsemasi, piilotettu tai ei.
- **Koko kerros puuttuu.** Syy on luettelo {{ui:Kerrokset}}, ei {{ui:Näytä kaikki}}: valitse kerros uudelleen.

## Seuraavaksi

- [Näytä ja piilota kerrokset, tilat ja reunat](topic:storeys-and-spaces)
- [Leikkaa IFC-malli leikkaustasolla](topic:section-plane)
