---
title: 모델에서 문서 만들기
summary: 수량, 속성, 태그에 대한 필드를 갖춘 시방서 또는 설명을 템플릿으로 한 번 작성하고, 열린 IFC에서 PDF 또는 Word 문서로 채웁니다.
keywords: 문서, 시방서, 시방, 설명, 템플릿, markdown, 보고서, word, docx, pdf, 수량, 일람표, 공종, 문 일람표, 마감, DocumentCAD
from: 2b0c9156
---

## 작업 내용

템플릿은 이중 중괄호 안에 필드가 있는 Markdown 텍스트입니다. BimCraft는 열린 모델에서 필드를 채우고(개수, 유형별 수량, 속성, 여러분의 [태그](topic:tags-and-schedules)) 결과를 PDF, Word 문서(.docx) 또는 Markdown으로 저장합니다.

## 단계

1. IFC 모델을 엽니다.
2. 왼쪽 패널의 {{ui:수량}} 아래에서 {{ui:모델에서 문서 만들기}} 항목을 엽니다.
3. 템플릿을 고릅니다: {{ui:문 및 철물}} 또는 {{ui:벽, 라이닝, 마감}}, 또는 자신의 템플릿을 쓰려면 {{ui:템플릿 불러오기 (.md)…}}.
4. 템플릿이 모델에 아직 정의되지 않은 태그를 읽으면 {{ui:이 템플릿의 태그 추가}} 버튼을 클릭한 다음, {{ui:태그}} 아래에서 요소에 태그를 붙입니다.
5. 텍스트를 원하는 대로 바꾸고 {{ui:문서 표시}} 버튼을 클릭합니다.
6. {{ui:PDF}} 버튼(먼저 A4 또는 Letter를 고르십시오)이나 {{ui:Word (.docx)}} 버튼을 클릭합니다.

## 보게 되는 것

- 버튼 아래에 표가 포함된 채워진 문서가 나타납니다.
- 필드를 읽을 수 없을 때 경고 목록이 나타납니다(정의되지 않은 태그, 모델에 없는 속성, 닫히지 않은 블록). 이런 필드는 `[?…]`로 인쇄됩니다.
- PDF 페이지에는 문서 제목이 있고, 각 페이지 아래쪽에 "Page 1 of 3"이 표시됩니다. 긴 표는 머리글 행과 함께 다음 페이지로 이어집니다.

## 필드

| 필드 | 결과 |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | 프로젝트 이름과 설명, 파일 이름, 오늘 날짜 |
| `{{count IfcDoor}}` | 문의 개수 |
| `{{sum IfcWall NetSideArea}}` | 단위가 붙은 합계 |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | 대괄호 안의 항으로 구성된 산술 연산(`+ - * /` 및 괄호): `[sum …]`, `[count …]`, 그리고 each 안에서는 `[qty Width]`. `round n`은 소수점 자리수를, `unit`은 단위를 추가합니다. 읽을 수 없는 항이나 0으로 나누기는 `[?…]`로 인쇄되며 경고합니다 |
| `{{qty IfcWall NetSideArea by Type}}` | 표: 유형마다 한 행(개수와 합계), 그리고 합계 행 |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | 표, 요소마다 한 행 |
| `{{tag Finish}}` | 반복문 안에서는 요소의 값, 그 외에는 사용된 모든 값(Oak, Paint) |
| `{{tags}}` | 태그 정의를 표로 |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | 요소마다 한 번씩 텍스트. 요소가 없으면 `{{else}}` 뒤 부분 |
| `{{#group IfcWall by Type}} … {{/group}}` | 유형마다 한 번씩 텍스트. `{{value}}`, `{{count}}`, `{{sum Length}}` 및 안의 일반 `{{#each}}`를 사용 |

`{{#each}}` 안에서는 `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}`(IFC 태그), `{{guid}}`, `{{n}}`(1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}`(요소 자신의 값, 단위 포함)를 사용합니다.

클래스는 여러 개(`IfcDoor|IfcWindow`)거나 모든 요소(`*`)일 수 있습니다. `where`로 범위를 좁힙니다: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. 검사는 `=`, `!=`, `~`(포함), `>`, `<`, `>=`, `<=`, `has`, `hasnot`입니다. 여러 조건은 `and`로 잇고, 공백이 있는 값은 "따옴표"로 감쌉니다. `sort Name`은 반복문을 정렬합니다.

## 문서 안의 일람표와 시방서

`{{schedule doors}}`는 모델 일람표를 사무실 레이아웃에 맞춘 표로 인쇄합니다: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, 또는 일람표에서 저장한 설정의 이름. `{{specification}}`은 프로젝트의 시방서를 인쇄합니다. **작업 도면 일람표**와 **시방서** 템플릿이 이것들을 사용합니다. 미리 보기에서 그런 일람표의 수치를 클릭하면 그 수치의 출처 요소가 선택됩니다. [일람표 배치, 저장 및 내보내기](topic:schedule-layouts)와 [모델에서 시방서 작성](topic:specification)을 참조하십시오.

## 알아두면 좋은 점

- 필드는 내장 값(Name, Type, Storey, Class, Material, Mark), 태그(`tag:Fire rating` 또는 그 이름), 속성(`Pset_WallCommon.FireRating`), 또는 속성 이름만(`NetSideArea`, `Width`)을 가리킵니다. 이름만 쓰면 각 요소 자체의 세트를 읽으며, 수량 세트를 먼저 봅니다. 따라서 문의 `Width`는 벽 두께가 아니라 문의 폭입니다. `where` 안에서 이름만 쓰면 선택한 요소 대부분이 가진 세트를 읽습니다.
- 수량은 파일의 수량 세트가 말하는 값입니다(BimCraft가 그린 것에 대해 기록합니다). 단위는 파일의 단위 설정에서 옵니다.
- 필드 단어(`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` 등)는 모든 언어에서 영어로 남습니다. 예시 템플릿도 영어입니다.
- 모델의 텍스트는 서식이 되지 않습니다. `*` 또는 `|`가 들어 있는 이름은 그대로 인쇄됩니다.
- 고친 템플릿은 {{ui:이 브라우저에 보관}} 기능(이 브라우저에만 있음)이나 {{ui:템플릿 다운로드}} 기능으로 보관하십시오.
- PDF 텍스트는 표준 PDF 글꼴을 사용합니다. 서유럽 텍스트 밖의 문자는 "?"로 인쇄되며, 상태 표시줄에 그 개수가 나타납니다.
- 공종별 템플릿은 라이브러리(종류: 문서 템플릿)에 있습니다. 문서 항목에서 **라이브러리에서 선택…**을 고르고 하나를 선택하면 그 텍스트와 필요한 태그가 가져와집니다. 원하는 대로 편집하십시오. 자신의 템플릿을 라이브러리에 게시하는 것은 다른 항목과 같은 업로드입니다. 아직 만들지 않았습니다: 개수와 합계를 넘는 계산.
