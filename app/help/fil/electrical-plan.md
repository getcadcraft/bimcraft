---
title: Ang electrical plan
summary: Maglagay ng outlet, switch, ilaw, sensor, junction box at panel sa plan gamit ang parehong symbol ng Electrical add-on ng CadCraft, i-link ang mga switch sa mga ilaw na pinapaandar nila, at ilista ang mga device at circuit sa mga schedule.
keywords: electrical, electrical plan, outlet, receptacle, duplex, switch, three-way, dimmer, ilaw, ilaw sa kisame, recessed light, downlight, sensor ng galaw, junction box, panel, distribution board, circuit, load, watts, amps, switch leg, iskedyul ng device, iskedyul ng panel
from: f7de1947
---

## Ang gagawin mo

Iguhit ang electrical plan ng bahay sa model: mga outlet, switch at panel sa mga pader, at mga ilaw at sensor sa kisame. Bawat device ay totoong electrical element sa IFC file, may sariling tag, circuit at load, at naaalala ng mga switch ang mga ilaw na pinapaandar nila.

## Maglagay ng device

1. Sa isang level, buksan ang {{ui:Build}} at piliin ang {{ui:Electrical}}.
2. Piliin ang device: mga outlet (power, data, phone, audio-video), mga switch at sensor (kasama ang thermostat at timer), mga ilaw, detector at alarm, junction box, panel o sub-panel.
3. I-type ang **Circuit** kung alam mo ito (anumang pangalan: 1, 2, A-3). Iwanang blangko ang **Taas ng pagkakabit** para sa karaniwang taas ng device na iyon.
4. I-click sa plan. Ang mga outlet, switch at panel ay ilalagay sa mukha ng pinakamalapit na pader, nakaharap papasok sa silid; ang mga ilaw, sensor at junction box ay ilalagay sa kisame kung saan ka nag-click.

Nilalagyan ng tag ang mga device habang inilalagay: **R** para sa outlet, **S** para sa switch, **L** para sa ilaw, **M** para sa motion sensor, **J** para sa junction box, **P** para sa panel. Ang mga device sa pader ay gumagalaw kasama ng pader kapag inilipat mo ang pader.

Mas gusto mong maghanap gamit ang larawan? Buksan ang **Symbol palette** mula sa {{ui:Build}} para hanapin ang device ayon sa pangalan, i-star ang mga madalas mong gamitin at ilagay ito sa isang click: tingnan ang [Ang symbol palette](topic:symbol-palette).

## I-link ang mga switch sa mga ilaw

1. Pumili ng switch (o motion sensor) at i-click ang **Link lights** sa **Properties**.
2. I-click ang bawat ilaw na pinapaandar nito. I-click muli ang naka-link na ilaw para alisin ang link.
3. Pindutin ang {{key:Enter}} o i-click ang **Tapos**.

Gumuguhit ang plan ng may tuldok na kurba mula sa switch papunta sa bawat ilaw nito. Ipinapakita ng **Properties** ng ilaw kung aling mga switch ang nagpapaandar dito.

## Ang silid na kinatatayuan ng device

Alam ng bawat device ang silid kung saan ito nakatayo. Ang device sa pader ay nasa silid na nakaharap dito; ang device sa kisame ay nasa silid na nasa ilalim nito. Ipinapakita ng **Properties** ang **Silid**, at may column na **Silid** ang schedule na **Electrical devices** (numero at pangalan, gaya ng 101 Kitchen).

Ina-update ito palagi: palitan ang pangalan o numero ng silid, ilipat ang device, o ilipat ang pader, at susunod ang silid sa parehong hakbang. Ang device sa labas na mukha ng gusali, o sa espasyong hindi silid, ay magsasabing wala ito sa silid.

Nakasulat din ang silid sa file, sa property set ng device na `CadCraft_Location` (Room, RoomNumber, RoomName), kaya magagamit ito ng Find, Color by property at tag schedule, at ng ibang program. Makukuha ng mga plan symbol at element na naka-link sa symbol ang parehong set; tingnan ang [Symbol palette](topic:symbol-palette).

## Hayaan ang assistant na maglagay ng mga ito

Kapag may nakakonektang assistant (Mga setting › Assistants, may pinapayagang edit), maaari kang humiling ng mga device sa salita: "maglagay ng double socket kada 2 m sa mga pader ng sala, 300 mm ang taas, sa circuit 3", o "magdagdag ng ilaw sa kisame kasama ang switch nito malapit sa pinto". Limang tool ang ginagamit ng assistant: `devices_add`, `device_change`, `lights_set`, `devices_delete` at `devices_list`. Gumagawa sila ng parehong device na ginagawa ng Electrical tool, sa parehong pader at may parehong tag, circuit, load at taas, at ang bawat tawag ay isang undo step.

Hindi kailanman magkakaroon ng uri ang device na wala sa Electrical tool: tinatanggihan ang hindi kilalang uri at ibinibigay sa assistant ang listahan. Dapat nasa loob ng 600 mm mula sa mukha ng pader ang socket o switch, gaya ng isang click, o tatanggihan ang tawag at walang ilalagay. Ang default na taas ay nasa milimetro: 300 para sa socket, 1100 para sa switch; ang device sa kisame ay nakabitin mula sa kisame.

## Baguhin at ilista sila

Pumili ng device para baguhin ang tag, circuit, load (watts) at taas ng pagkakabit. Pumili ng marami para ilagay silang lahat sa iisang circuit nang sabay-sabay. Pindutin ang {{key:Delete}} para alisin ang isa; ang naburang ilaw ay tatanggalin sa mga switch nito.

Sa {{ui:Schedules}}, piliin ang **Electrical devices** para sa bawat device kasama ang level, circuit, load, taas at mga ilaw na pinapaandar ng bawat switch, o ang **Circuits** para sa mga device ng bawat circuit, kabuuang load at current. Parehong nasa schedule sheet ng drawing set: tingnan ang [Mga elevation, section at sheet](topic:sheets).

:::note
Ang taas ng pagkakabit at load ay mga default sa pagpaplano (outlet na 16" ang taas at 200 W, switch na 48", ilaw sa kisame na 60 W), hindi disenyo: ang electrician o engineer ang nagsusukat ng mga circuit at nagsusuri sa code.
:::

:::tip
Ang mga symbol ay ang mga iginuguhit ng Electrical add-on ng CadCraft sa mga installation plan, kaya pareho ang basa ng plan mula sa alinmang app.
:::
