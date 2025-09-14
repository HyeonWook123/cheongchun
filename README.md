# 청년취업진로교육원 랜딩페이지

군 복무 청년들을 위한 취업 상담 서비스 랜딩페이지입니다.

## 🚀 빠른 시작

### 로컬에서 확인하기
1. 웹사이트 폴더를 열기
2. `index.html` 파일을 더블클릭하여 브라우저에서 열기

### 간이 서버로 실행하기
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (http-server 설치 필요)
npx http-server
```

브라우저에서 `http://localhost:8000` 접속

## 📝 콘텐츠 수정 방법

### 1. 텍스트/링크 변경
`assets/config.js` 파일을 열어 원하는 내용을 수정합니다.

```javascript
// 예시: 브랜드명 변경
brandName: "우리회사",

// 예시: 카카오 채널 URL 변경
kakaoChannelUrl: "https://pf.kakao.com/실제채널ID",

// 예시: 연락처 변경
contact: {
  phone: "010-1234-5678",
  email: "contact@example.com",
  address: "서울시 강남구 테헤란로 123"
}
```

### 2. 이미지 교체
`assets/images/` 폴더에 동일한 파일명으로 이미지를 교체합니다.

필요한 이미지 파일:
- `logo.png` - 상단 로고
- `hero-person.png` - 메인 히어로 이미지
- `about-person.png` - 소개 섹션 이미지
- `proof-1.jpg`, `proof-2.jpg`, `proof-3.jpg` - 증빙 자료 슬라이드
- `phone-mock.png` - 카카오톡 화면 목업
- `favicon.ico` - 브라우저 탭 아이콘

### 3. 색상/디자인 변경
`styles.css` 파일 상단의 CSS 변수를 수정합니다.

```css
:root {
  --brand: #1f6fff;        /* 메인 브랜드 색상 */
  --brand-dark: #0051e0;   /* 진한 브랜드 색상 */
  --text: #212529;         /* 기본 텍스트 색상 */
  --radius: 8px;           /* 모서리 둥글기 */
}
```

## 🔗 카카오톡 채널 연동

### 방법 1: 단순 링크 (기본)
`config.js`에서 `kakaoChannelUrl`만 설정하면 됩니다.
```javascript
kakaoChannelUrl: "https://pf.kakao.com/실제채널ID"
```

### 방법 2: 공식 위젯 사용 (선택)
1. [카카오 개발자](https://developers.kakao.com) 사이트에서 앱 생성
2. JavaScript 키 발급
3. 카카오톡 채널 관리자센터에서 채널 Public ID 확인
4. `config.js`에 정보 입력:

```javascript
kakaoAppKey: "발급받은_JavaScript_키",
kakaoChannelPublicId: "_채널PublicID"
```

## 📱 모바일 최적화
- 375px ~ 1440px 반응형 디자인
- 모바일 퍼스트 접근
- 터치 친화적 UI
- 이미지 지연 로딩

## 🔧 추가 기능

### FAQ 추가/수정
`config.js`의 `faq` 배열에 항목 추가:
```javascript
faq: [
  { 
    q: "질문 내용", 
    a: "답변 내용" 
  },
  // 더 추가...
]
```

### 가격 패키지 수정
`config.js`의 `pricing` 배열 수정:
```javascript
pricing: [
  {
    title: "패키지명",
    price: "50,000",
    features: ["특징1", "특징2"],
    popular: true  // 인기 표시
  }
]
```

### 콘텐츠 카드 추가
`config.js`의 `contents` 배열에 추가:
```javascript
contents: [
  {
    badge: "NEW",
    badgeColor: "#28a745",
    title: "서비스명",
    text: "서비스 설명"
  }
]
```

## 📊 성능 최적화
- 이미지 지연 로딩 적용
- CSS/JS 최소화 권장
- 시스템 폰트 사용으로 로딩 속도 개선
- 정적 파일로만 구성 (서버 불필요)

## 🌐 SEO
- Open Graph 메타 태그 포함
- 시맨틱 HTML 구조
- 접근성 고려 (ARIA 속성, 키보드 네비게이션)

## 📞 문의
설정 파일의 연락처 정보를 참고하세요.

---

© 2025 청년취업진로교육원. All rights reserved.