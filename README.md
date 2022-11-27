
### 패키지 인스톨

```
yarn 기반의 모노레포로 구성하여 yarn을 이용해서 패키지 인스톨을 실행한다.
yarn install // 프로젝트 root 위치에서 설치해야 함 *.tgz 파일을 로컬파일 사용 중이기 때문
```

### component library 빌드방법
```
cd component-lib
yarn build
yarn pack 
```

### component library 사용
package registry 업로드 후 사용 하거나 로컬파일로 사용가능
로컬파일 사용시에는 아래처럼 package.json에 설정하여 사용가능 (.tgz 파일 위치에따라 수정 필요할 수 있음)
```
   dependencies:{
    "component-lib": "file:./component-lib-v0.0.6.tgz"
    ...
   }
```


### 웹 프로젝트 실행
```
cd web
yarn dev
```