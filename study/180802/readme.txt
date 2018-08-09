그냥 install 하면 ./node_modules 디렉터리에 패키지 설치를 하고 끝. --save, --save-dev 옵션은 ./package.json 업데이트를 같이해준다. 

어디에 패키지 정보를 추가하느냐가 다른데,

 --save 옵션은 dependencies object에 추가하고 --save-dev 옵션은 devDepenencies object에 추가한다.

dependencies와 devDepenencies 차이는 npm install을 할 때 나타난다. dependencies는 항상 설치되고 devDepenencies는 --production 옵션을 붙이면 빠진다. 

npm install “$package” 명령어로 설치할 때는 --dev 옵션을 붙여야지만 설치된다.