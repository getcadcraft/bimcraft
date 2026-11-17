---
title: Millä koneesi renderöi
summary: Asetukset › Renderöinti näyttää grafiikan, suorittimen ytimet ja muistin, jotka tämä selain sallii sovelluksen käyttää, sekä tason, joka määrää, mistä renderöinti alkaa.
keywords: koneesi, näytönohjain, gpu, webgpu, webgl, suoritin, cpu, ytimet, säikeet, muisti, ram, jaettu muisti, eristys, taso, nopeus, hidas, renderöinnin nopeus, kannettava
from: 360f2375
---

Avaa {{ui:Asetukset}} ({{key:Mod+,}}), pysy tämän sovelluksen omalla välilehdellä ja vieritä kohtaan {{ui:Renderöinti}}. {{ui:Koneesi}} luettelee, mitä tämä selain sallii sovelluksen käyttää renderöintiin. Mikään siinä ei poistu tietokoneeltasi.

| Rivi | Mitä se tarkoittaa |
|---|---|
| {{ui:Grafiikka}} | Näytönohjain, jonka selain ilmoittaa. ”WebGPU” tarkoittaa, että se pystyy tekemään renderöintityön; ”WebGL 2 only” tarkoittaa, ettei WebGPU:ta ole: elävä näkymä ja korkealaatuiset kuvat käyttävät näytönohjainta WebGL 2:n kautta (kuvat vanhemmalla WebGL-polunjäljittäjällä ilman WebGPU:ta vaativia lisiä); ohjelmistopohjainen korvike tarkoittaa, että kaikki toimii suorittimella |
| {{ui:Suoritin}} | Kuinka monta suorittimen ydintä selain ilmoittaa |
| {{ui:Muisti}} | Likimääräinen tietokoneen muisti, kun selain sen kertoo. Jotkin selaimet eivät kerro sitä |
| {{ui:Jaettu muisti}} | Saako sivu jakaa muistia työsäikeidensä välillä. Kun päällä, jokainen ydin voi työstää yhtä kopiota näkymästä; kun pois, jokaisella on oma kopionsa, joten suuri näkymä mahtuu kerralla harvempiin ytimiin |
| {{ui:Nopea suorittimen koodi}} | Käyttääkö selain nopeampaa WebAssembly-koodia. Ilman sitä käytetään hitaampaa varakoodia |
| {{ui:Taso}} | {{ui:Näytönohjain, korkea}}, {{ui:Näytönohjain, perus}} tai {{ui:Vain suoritin}}, ja syy sen alla |

## Taso

Taso on kohta, josta renderöinti alkaa, jotta kannettava tietokone, jossa on sisäinen grafiikkapiiri tai ei lainkaan näytönohjainta, pysyy reagoivana. Sisäinen tai puhelimen grafiikkapiiri taikka enintään 4 GB muistia ei koskaan saa tasoa {{ui:Näytönohjain, korkea}}.

:::note
Selaimet eroavat toisistaan. Sama tietokone voi näyttää WebGPU:n yhdessä selaimessa ja ”WebGL 2 only” toisessa. Linuxissa useimmissa selaimissa ei ole vielä WebGPU:ta.
:::
