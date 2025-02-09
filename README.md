## node 설치, 버전 확인
```
$ node -v
$ npm -v
```

## 전역으로 gulp-cli 설치 : sh 명령어로 gulp 실행을 위해.
```
$ npm install --global gulp-cli
```

## GIT clone 으로 project 폴더 생성
```
$ git clone https://github.com/2ynhn/gulp-sass.git
```

## Node modules 설치 : package.json 에 있는 모듈들이 설치 됩니다.
```
$ npm install
```

## gulp 실행 : package.json 의 "script" 의 "gulp" 를 수행합니다.
```
$ gulp
```
- 실행결과 : 브라우저에서 root의 index.html 이 열립니다.
- watch 중지 : 터미널에서 Ctrl + C 로 gulp 중지

## gulpfile.js 설명
- html() : html 확인 (live server 유사)
- style() : src 폴더의 scss파일을 dist 폴더에 css파일로 생성
