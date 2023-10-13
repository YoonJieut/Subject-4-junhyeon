# SUBJECT-4 윤준현
해당 파일은 MAIN과 SUB 페이지 2페이지로 이루어져있습니다.

Main과 Sub 모두 가운데 슬라이드가 있습니다. 

script로 마크업과 위-아래 슬라이드를 구현해봤습니다.



주소록 : <http://localhost:8080>

사용법 : 주소창에 '주소록/sub" 혹은 "주소록/" 작성해보기


## 구성 요소
1개의 실행파일과 4개의 모듈, 엔트리 파일 app.js와 실행된 html 2개가 존재합니다.


## 작성 및 사용법
###### 페이지 추가는 app.js와 실행파일의 fileInfo 객체를 수정해야 합니다.

app.js에서 if의 추가를 통해 작성이 가능하게 구성되어 있습니다.

if문 중 해당 부분만 수정해주면 됩니다.


    ```
    if(req.url === "여기에 다른 루트를 작성"){ ... };
    ```


실행 파일의 fileInfo 객체를 수정하므로서 여러 html파일을 생성할 수 있습니다.



###### 실행 파일의 구성요소

styleTag : 3개 매개변수, 각각 슬라이드의 배경색, 문자열입력

Html 템플릿 : 3개의 매개변수
  1. styleTag 함수로 작성됨
  2. elmentScript 문자열로 작성됨
  3. pureslide 문자열로 작성됨

단, 색을 지정할 땐, 오타가 허용되지 않는다.





## 파일 설명
###### app.js
엔트리 파일이자, 서버에 관련된 로직이 담겨 있습니다.


###### action/writefile.js
실행 파일입니다. 매개변수의 조건에 맞춰서 fileInfo에 데이터들을 작성해주면 됩니다.


###### module/HTMLTemplate.js
텍스트 타입을 리턴하는 함수 파일입니다. html의 기본틀을 담고 있습니다.
매개변수는 style태그가 담기는 styleTag, 동적 스타일 스크립트가 담기는 elementScript, 슬라이드의 로직이 담기는 logics의 매개변수를 담고 있습니다.
(styleTag, elementScript, logics - 3가지)


###### module/elementScript.js
텍스트 타입의 파일입니다. 동적으로 스타일링한 스크립트를 담고 있습니다.


###### module/pureslide.js
텍스트 타입의 파일입니다. 슬라이드의 로직을 담고 있습니다.


###### module/styleTag.js
텍스트 타입을 리턴하는 함수입니다. html의 style태그 내용을 담고 있습니다.
매개변수는 fir, sec, thr의 슬라이드들의 색을 교환하는 매개변수를 담고 있습니다.

