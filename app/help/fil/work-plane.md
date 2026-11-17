---
title: Ang work plane: itakda, ipakita, tingnan nang tuwid dito
summary: Ang work plane ang plane na ginagamit ng model lines, model text at ng Work Plane Viewer. Itakda ito sa isang level, face, named reference plane o linya; ipakita ito sa mga view; buksan ang viewer para gumuhit sa patayong plane.
keywords: work plane, itakda ang work plane, ipakita ang work plane, reference plane, work plane viewer, named plane, face, level, patayong plane, vertical plane, gumuhit sa pader, elevation drawing, snap, alignment, ref plane
from: 8aceee1d
---

## Ano ang gagawin mo

Piliin ang plane na iguguhitan mo, tingnan kung nasaan ito, at gumuhit sa plane na nakatayo nang patayo.

## Mga hakbang

1. I-on ang **Draw** at buksan ang menu na **Build** (sa ribbon layout: ang tab na Architecture, Work Plane).
2. Piliin ang **Set Work Plane**. Pagkatapos, gawin ang isa sa mga ito:
   - pumili ng level sa **Set to**;
   - pumili ng named reference plane sa listahang katabi nito;
   - i-click ang linya sa plan: pader, grid line, reference plane, model line o curtain system. Ang work plane ay magiging patayong plane na dumadaan sa linyang iyon;
   - i-click ang patag na face sa 3D view. Nakahiga ang work plane sa face na iyon.
3. Piliin ang **Show Work Plane** para makita ito: isang tinted sheet na may metro grid sa 3D view, dashed outline o linya sa plan, at dashed outline sa elevation at section panel. Piliin ulit para itago.
4. Piliin ang **Work Plane Viewer** para tumingin nang tuwid sa plane. Ang itim na linya ay ang model na hiniwa ng plane. Gamitin ang mga tool nito para gumuhit ng model line, model text o reference plane sa plane. Ang **Tingnan sa 3D** ay iniikot ang 3D view para humarap sa plane.

## Reference plane

Ang reference plane ay named plane na iginuguhit mo bilang linya.

1. Piliin ang **Reference Plane**. Mag-type ng pangalan sa row nito kung gusto mo (kung hindi, bibigyan ka ng awtomatikong pangalan) at ng taas.
2. I-click kung saan ito magsisimula at magtatapos. Sa plan, gumagawa ito ng patayong plane. Sa Work Plane Viewer, gumagawa ito ng plane na nakatayo nang tuwid sa work plane.
3. Lumalabas ito bilang berdeng dashed na linya na may pangalan sa plan, dashed outline sa 3D view at sa elevation at section panel.
4. Piliin ito para palitan ang pangalan nito, baguhin ang haba, taas at foot nito, o pindutin ang **Gamitin bilang work plane**.

Hindi maaaring magkapareho ang pangalan ng dalawang reference plane, dahil sa pangalan ito napipili ang isa.

## Mabuting malaman

- Ang model na walang nakatakdang work plane ay gumagana sa pinakamababang level nito.
- Nise-save ang work plane sa file. Ang pagpapakita o pagtatago nito ay naaalala sa browser na ito, hindi sa file.
- Kung sumusunod ang work plane sa reference plane at inilipat mo ang plane na iyon, gumagalaw din ang work plane.
- Sa patayong work plane, ang Model Line at Model Text tools ay nagbubukas ng viewer, dahil hindi maituturo ng plan ang taas.
- Sinasalo ng drawing tools ang dulo ng reference plane na iginuhit sa plan sa parehong paraan ng pagsalo nila sa dulo ng ibang linya sa viewer.

## Sa IFC file

- Ang work plane ay property set (CadCraft_WorkPlane) sa project.
- Ang reference plane ay IfcAnnotation na may object type na ReferencePlane at ang pangalan nito. Ang shape nito ay ang saradong outline ng plane, kaya nakikita ng ibang programa kung nasaan ito. Ang set nitong CadCraft_ReferencePlane ay naglalaman ng origin, direction, normal at extent. Walang class ang IFC para sa reference plane; ang annotation ay hindi binibilang bilang building element at hindi nagtatakda ng hangganan ng mga kuwarto.
