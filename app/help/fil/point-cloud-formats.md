---
title: Point cloud formats: ano ang nabubuksan, at ano ang i-export
summary: Aling laser scan file ang nabubuksan sa 3D view, alin ang sariling format ng gumawa ng scanner, at ano ang i-export mula sa software ng scanner para mabuksan dito ang scan.
keywords: point cloud, laser scan, scan, formats, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, export, hindi mabuksan, hindi nababasa
from: 1e985f01
---

## Ano ang nabubuksan dito

Buksan ang mga ito gamit ang {{ui:Bukas}} o sa pag-drop sa pahina (tingnan ang topic tungkol sa pagpapakita ng point cloud sa tabi ng model):

| Format | Extension | Ano ang nababasa |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: mga punto, kulay, intensity, LiDAR class, ang coordinate system. LAZ hanggang 1 GB. |
| E57 | `.e57` | Bawat scan sa file, bawat isa ay nakalagay ayon sa pose nito; mga kulay, o intensity kapag walang kulay ang file. Hindi kasama ang mga picture sa file (sinasabi). Hanggang 6 milyong punto at 512 MB sa ngayon: i-export ang mas malalaking scan bilang LAS o LAZ. |
| PLY | `.ply` | Text at binary (parehong byte order): x y z ng vertex, mga kulay at intensity. Hindi kasama ang faces (sinasabi). |
| PCD | `.pcd` | Text at binary: x y z, packed o hiwalay na mga kulay, intensity. Hindi pa nababasa ang compressed na PCD: i-save ang mga ito bilang binary o text. |
| PTX | `.ptx` | Isa o higit pang scan, bawat isa ay nakalagay sa sarili nitong transform; hindi kasama ang mga punto na hindi sinukat ng scanner. Meters. |
| PTS, XYZ | `.pts`, `.xyz` | Text: x y z, kasama ang intensity at mga kulay kapag nandoon ang mga column. |

## Mga file na sariling software lang ng scanner ang nakakabasa

Ilang scan file ay sariling format ng gumawa ng scanner, walang nailathalang paglalarawan at walang bukas na reader. Hindi sila mabasa ng BimCraft, at kapag may binuksan ka, magpapakita ito ng card na nagsasabi kung ano ito at kung ano ang gagawin. I-export ang scan mula sa software ng gumawa bilang E57 o LAS (o PTX, PTS), pagkatapos buksan ang na-export na file.

| File | Extension | I-export mula sa |
|---|---|---|
| ReCap project | `.rcp` | ReCap: buksan ang project at i-export ito. Ituturo lang ng project ang mga scan nito, kaya walang punto kung kopyahin lang ang `.rcp`. |
| ReCap scan | `.rcs` | ReCap: buksan ang project na kinabibilangan ng scan at i-export ito. |
| FARO scan | `.fls` | FARO SCENE. |
| Leica scan | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble scan | `.tzf` | Trimble RealWorks o Trimble Business Center. |
| Z+F scan | `.zfs` | Z+F LaserControl. |

:::tip
Kapag humihingi ng format ang export, pinananatili ng LAS o LAZ ang lahat ng ipinapakita ng BimCraft (mga kulay, intensity, class at coordinate system) sa pinakamaliit na file.
:::

## Bakit hindi nababasa ang mga file na ito

Hindi nailalathala ang mga format na iyon, at ang tanging paraan para basahin ang mga ito ay ang sariling software library ng bawat gumawa, ayon sa sarili nitong mga tuntunin. Binabasa lang ng BimCraft ang mga format na kaya nitong basahin gamit ang sarili nitong code sa iyong computer, kaya hindi kailanman kailangang ipadala ang scan kahit saan para mabuksan.
