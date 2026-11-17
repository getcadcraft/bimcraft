---
title: 모델을 Collada 또는 Google Earth용으로 내보내기
summary: 열린 IFC 모델을 Blender 및 기타 3D 프로그램용 Collada(.dae) 파일로, 또는 지도 위 실제 위치에 배치된 Google Earth 패키지(.kmz)로 저장합니다.
keywords: collada, dae, kmz, kml, google earth, blender, 내보내기, 위치 정보, 지리 참조, 위도, 경도, 위치, 3D 프로그램
from: 81cfec09
---

도구 모음의 {{ui:Collada}} 버튼(메뉴 및 리본 스타일에서는 파일 메뉴의 {{ui:Collada 내보내기 (.dae, .kmz)…}})은 현재 열린 내용을 Collada 1.4.1 형식으로 기록합니다. 표시된 모든 모델을 기록하며, 연합된 모델은 배치한 위치 그대로 기록합니다.

## 내보내기

1. {{ui:Collada}}를 선택합니다.
2. 형식을 고릅니다:
   - {{ui:Collada file (.dae), for Blender and other 3D programs}}.
   - {{ui:Google Earth package (.kmz): the model placed where it is on the map}}. 모델에 위치 정보가 있을 때만 제공됩니다.
3. 옵션을 선택한 다음 {{ui:Export}}를 누릅니다. 파일이 다운로드되며, 상태 표시줄에 기록된 요소 수가 표시됩니다.

| 옵션 | 기능 |
|---|---|
| {{ui:Write the location into the file}} | 파일 원점의 위도, 경도, 높이, 방향을 .dae에 추가합니다 |
| {{ui:Height}} | {{ui:On the ground: the model’s level 0 sits on the terrain}} 또는 {{ui:The model’s own height above sea level}} |
| {{ui:Include rooms and spaces}} | 공간도 포함됩니다(기본값은 제외) |
| {{ui:Include hidden elements}} | 숨긴 요소도 기록됩니다(기본값은 보이는 요소만 기록) |

## 파일에 들어가는 내용

| 모델에서 | Collada 파일에서 |
|---|---|
| 건물, 층 | 중첩된 노드. 층은 높이 순서대로 놓이며, 층에 속하지 않은 요소는 "Unplaced" 아래에 놓입니다 |
| 각 요소 | 자체 메시를 가진 노드 하나. 모델에서와 같은 이름을 사용합니다(이름이 없으면 클래스와 태그) |
| 클래스, GlobalId, 사전 정의 유형 | 노드의 추가 데이터(IFC 프로필)에 기록됩니다. ModelCraft 프로필에서는 정확한 이름으로 기록됩니다 |
| 색상 | 투명도를 포함한 재질 |
| 단위와 축 | 미터, Z축이 위쪽. 앞에 있는 모델의 레벨 0은 높이 0에 놓입니다 |

모델은 원점 근처에 머물러서, 단정밀도로 작동하는 프로그램에서도 떨림 없이 표시됩니다. ModelCraft도 같은 작성기로 Collada 파일을 기록하며, 이 파일들을 요소 이름 그대로 엽니다.

## 위치 정보의 출처

앞에 있는 모델이 위치를 제공합니다. 이는 점의 위도와 경도를 구할 때 {{ui:Measure}}에서 쓰는 방식과 같습니다:

- 모델의 좌표계를 통한 지도 변환(IFC4 IfcMapConversion 또는 IFC2X3 속성 세트). 모델에 직접 선택한 좌표계가 파일에 지정된 좌표계보다 우선합니다.
- 그 밖의 경우에는 대지의 위도와 경도를 사용합니다(근사값이며, 대지 규모에서는 충분합니다).

방향은 추정하지 않고 측정합니다. 지도의 회전, 진북, 지도 수렴각을 고려합니다. 모델에 위치를 지정하려면 {{ui:Measure}}에 있는 {{ui:Map origin…}} 명령을 사용합니다.

## 다른 프로그램에서

- **Google Earth**는 .kmz를 읽습니다. 모델은 위치에 나타나며 북쪽을 향하도록 표시됩니다. 일반 .dae에는 Google Earth가 위치를 읽어 오는 곳이 없으므로 .kmz를 사용합니다.
- **Blender**(4.x 및 이전 버전): File, Import, Collada (.dae). 각 요소는 자체 재질을 가진 개별 객체로 들어옵니다. 위치 정보는 파일의 추가 데이터에 보관되며, Blender는 이를 읽지 않습니다. Blender 5.0에서는 내장 Collada 가져오기 기능이 제거되었습니다. 이 경우에는 {{ui:USD}} 또는 glTF 내보내기를 대신 사용하거나, .dae를 Blender 4.5에서 열고 .blend로 저장합니다.

테스트에서는 모든 파일을 Collada 1.4.1 스키마에 대조하고, 독립된 Collada 읽기 도구로 다시 읽어 확인합니다. Blender나 Google Earth에서는 열어 보지 않았습니다.
