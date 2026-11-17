---
title: Suriin ang reverberation ng silid at pakinggan ito
summary: Oras ng reverberation kada octave band para sa bawat silid (Sabine at Eyring) mula sa laki at mga finish nito, isang target na ikaw mismo ang magtatakda, at isang boses, palakpak o musikang pinatutugtog sa pamamagitan ng kinompyutang impulse response ng silid.
keywords: acoustics, reverberation, reverb time, rt60, sabine, eyring, absorption, echo, tunog, pakinggan, impulse response, pagsasalita, silid-aralan, opisina, alpombra, ceiling tile, ingay
from: 16996cbb
---

Binubuo ng seksyong {{ui:Acoustics ng silid}} sa kaliwang panel kung gaano katagal nananatili ang tunog sa bawat silid. Binabasa nito ang floor area, taas, pader, pinto at bintana ng bawat silid mula sa bukas na IFC model. Walang binabago sa model.

## Piliin ang mga finish

Kapag sinasabi ng model kung ano ang nasa isang surface, binabasa ito ng silid: ang loob na layer ng type ng bawat pader (kilala ang gypsum, plaster, brick, concrete at block), ang uri ng sahig (kahoy o concrete) at kung may tiles ang ceiling. Makikita sa tabi ng bawat pagpipilian kung galing ito sa model, sa default, o sa pinili mo; pumili ng ibang finish para i-override ito. Anumang hindi sinasabi ng model ay nananatili sa default. Ang mga coefficient ay **karaniwang nailathalang halaga**; palitan ang mga ito ng test data ng produkto kapag mayroon ka nito. I-type ang **target** (ang pinakamahabang mid-frequency reverberation na gusto mo) at anumang silid na lumampas dito ay magkakaroon ng babala, kasama ang absorption na magpapababa rito.

## Basahin ang table

Ibinibigay ang reverberation para sa 125 Hz hanggang 4 kHz. Angkop ang Sabine sa mga live na silid at Eyring sa mga dead na silid; ang linyang may markang *Used* ay gumagamit ng Eyring kapag mas mataas sa 0.2 ang average absorption. Kasama ang absorption ng hangin (pinaiikli nito ang mataas na band sa malalaking silid). Statistical model ito: ipinapalagay nitong pantay ang pagkalat ng tunog, kaya ang mahaba o patag na silid at napakaliliit na silid ay magaspang na gabay lamang, at hindi binibilang ang muwebles, tao at bukas na pinto.

## Makinig

Ang {{ui:I-play sa silid na ito}} ay nagpapatugtog ng boses (gawa rito), palakpak, pinitik na nota o **sarili mong sound file** (nananatili ito sa iyong computer) sa pamamagitan ng impulse response na kinompyute para sa silid: ang direktang tunog, ang unang reflection ng isang box na ganoon kalaki, at isang buntot na humihina sa sariling reverberation time ng silid sa bawat band. Ang {{ui:I-play nang dry}} ay nagpapatugtog ng parehong tunog sa parehong lakas nang walang silid. Maaari mong i-save ang impulse response o ang tunog sa silid bilang mga WAV file. Parang silid ito na may ganoong laki at finish, hindi ng alinmang tunay na silid.

## Mga tao at muwebles

I-type ang bilang ng **mga taong nasa silid na ito** para idagdag ang kanilang absorption. Ang muwebles na nasa model (sofa, kama, upuan, mesa, aparador, hinahanap ayon sa pangalan) ay nagdaragdag ng sarili nitong absorption. Ang mga bilang ay magaspang na planning value, bilugan; palitan ng sukat para sa silid na mahalaga.

## Source at listener

Sa ilalim ng {{ui:Source at listener}}, pindutin ang {{ui:Ilagay ang source}} o {{ui:Ilagay ang listener}} at i-click ang plano ng silid. Ang tunog na pinatutugtog mo ay naririnig mula roon: dumarating ang direktang tunog pagkatapos ng distansya, at ang reverberant na bahagi ay nasa lakas para sa distansyang iyon. I-clear ang dalawa para bumalik sa kahon ng distansya.

## Hindi pantay na absorption at room mode

Sa ilalim ng {{ui:Uneven absorption (box room)}}, i-type ang silid bilang isang box at piliin ang mga finish ng sahig, ceiling at pader. Dinaragdagan ng table ng Fitzroy at Arau-Puchades ang Sabine at Eyring: hiwalay nilang tinatrato ang tatlong pares ng magkatapat na surface, kaya hindi nababasang masyadong maikli ang silid na may alpombra at matigas na ceiling. Kapag malaki ang pagkakaiba ng mga pares, may tala na nagsasabi kung alin ang pagkakatiwalaan. Sa ibaba ng table, inililista ng **Room modes** ang pinakamababang standing wave ng box at ang frequency kung saan may hiwalay na mode ang silid sa halip na pantay na sound field. Mga hula ang mga ito para sa box room, pantulong sa disenyo at hindi sukat.

## Units

Ipinapakita ang mga lawak, taas, volume at distansya ng silid sa {{ui:Units}} na pinili mo (square at cubic feet, inches, millimeters, centimeters o meters). Nananatili sa SI ang kalkulasyon mismo; ang display lamang ang nagbabago. Hindi nagbabago ang mga oras (segundo), frequency at lakas.
