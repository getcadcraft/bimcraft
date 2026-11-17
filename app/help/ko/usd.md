---
title: 모델을 USD로 내보내기
summary: 열린 IFC 모델을 렌더링, 장면 조립 및 기타 3D 프로그램용 USD로 씁니다. 모든 요소의 IFC 클래스, GlobalId, 속성을 함께 씁니다.
keywords: usd, usda, usdc, usdz, openusd, 내보내기, ifc, globalid, 속성, 층, 분야, 장면 조립, 건축 시각화, 렌더링
from: 2be5f7b8
---

도구 모음의 {{ui:USD}} 버튼은 열려 있는 모든 것(모든 모델, 배치한 연합 모델 포함)을 하나의 USD 파일로 씁니다.

## 내보내기

1. 도구 모음의 {{ui:USD}} 버튼을 선택합니다.
2. {{ui:텍스트(.usda)}}, {{ui:바이너리(.usdc)}} 또는 {{ui:패키지(.usdz)}} 중 하나를 고릅니다.
3. 파일이 내려받아집니다. 상태 막대에 들어간 요소 수가 표시됩니다.

## 파일에 들어 있는 내용

| IFC 모델 | USD 파일 |
|---|---|
| 대지, 건물, 층 | 중첩된 그룹, 층은 높이 순서대로 |
| 각 요소 | 해당 층과 분야(Architecture, Structure, MEP, Furnishing, Site, Spaces, Other) 아래의 프림 하나, 지오메트리는 메시로 |
| 클래스, GlobalId, 이름, 유형, 태그 | 이름이 `ifc:class`, `ifc:globalId`, `ifc:name` 등인 속성 |
| 속성 및 수량 세트 | 속성마다 속성 하나. 길이, 면적, 부피는 미터, 제곱미터, 세제곱미터 단위 |
| 색상 | 재질(투명도 포함) |
| 공간 | 유지되며, 렌더러가 건너뛰도록 안내용으로 표시 |

지오메트리는 IFC 파일 자체의 좌표에 놓입니다. 배치는 건물에 대한 CadCraft의 USD 규칙을 따릅니다.
