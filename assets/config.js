// 사이트 설정 - 이 파일만 수정하면 전체 사이트 콘텐츠가 변경됩니다
window.__SITE_CONFIG__ = {
  // 브랜드 정보
  brandName: "청년취업진로교육원",
  
  // 카카오톡 채널 설정
  kakaoChannelUrl: "https://pf.kakao.com/_sylen", // 카카오 채널 URL을 여기에 입력
  
  // [선택] 카카오 공식 위젯 사용시 (없으면 링크 방식으로 동작)
  kakaoAppKey: "", // 카카오 앱 키 (https://developers.kakao.com 에서 발급)
  kakaoChannelPublicId: "", // 카카오 채널 공개 ID
  
  // 연락처 정보
  contact: {
    phone: "010-0000-0000",
    email: "hello@example.com",
    address: "서울시 ○○구 ○○로 00",
  },
  
  // 히어로 섹션
  hero: {
    headline: "ARMY.kr",
    subcopy: "서류 준비부터 면접까지, 카카오로 빠르게 상담받으세요.",
    image: "assets/images/hero_image.png",
    badges: [
      "평균 응답 10분",
      "합격률 89%",
      "상담 만족도 4.8"
    ]
  },
  
  // 가격 정보
  pricing: [
    {
      title: "1차 상담(베이직)",
      price: "40,000",
      unit: "원",
      features: [
        "경력/진로 설계",
        "서류 피드백 1회",
        "카카오 실시간 Q&A",
        "30분 화상 상담"
      ],
      cta: "카카오로 1차 상담 신청",
      popular: false
    },
    {
      title: "2차+서류 패키지(프리미엄)",
      price: "60,000",
      unit: "원",
      features: [
        "서류·면접 종합",
        "서류 피드백 2회",
        "포트폴리오 코칭",
        "1시간 화상 상담",
        "모의 면접 1회"
      ],
      cta: "카카오로 패키지 신청",
      popular: true
    }
  ],
  
  // 증빙 자료 이미지
  proofs: {
    title: "실제 서류 첨삭 사례",
    subtitle: "합격자들의 생생한 후기",
    images: [
      "assets/images/certification_1.jpeg",
      "assets/images/certification_2.jpeg",
      "assets/images/certification_3.jpeg",
      "assets/images/certification_4.jpeg"
    ]
  },
  
  // 카카오 배너
  kakaoBanner: {
    title: "카카오톡으로 빠른 상담",
    caption: "카카오톡으로 바로 연결됩니다",
    phoneMock: "assets/images/mock_up.png",
    cta: "카카오 상담 받기"
  },
  
  // 3가지 핵심 특징
  features3: [
    { 
      icon: "⚡", 
      title: "최단 응답", 
      text: "근무시간 내 평균 10분 내 회신" 
    },
    { 
      icon: "🏆", 
      title: "신뢰성", 
      text: "실제 합격 사례 다수 보유" 
    },
    { 
      icon: "💼", 
      title: "전문성", 
      text: "군 경력 전환·서류 전략 특화" 
    }
  ],
  
  // 소개 섹션
  about: {
    title: "What is ARMYKR?",
    text: "군 복무 경력과 취업 상담을 연결해 최적의 솔루션을 제공합니다. 전역 예정자와 군 복무 중인 청년들의 성공적인 사회 진출을 돕는 전문 컨설팅 서비스입니다.",
    image: "assets/images/about-person.png",
    stats: [
      { number: "2,000+", label: "누적 상담" },
      { number: "89%", label: "취업 성공률" },
      { number: "4.8", label: "만족도" }
    ]
  },
  
  // FAQ
  faq: [
    { 
      q: "상담은 어떻게 진행되나요?", 
      a: "카카오 채널로 먼저 연결되며, 기본 정보 확인 후 일정을 잡습니다. 화상 상담은 줌(Zoom)을 통해 진행됩니다." 
    },
    { 
      q: "서류 첨삭은 몇 회인가요?", 
      a: "상품에 따라 1–2회 제공되며, 추가 구매도 가능합니다. 첨삭은 워드 파일의 메모 기능을 활용해 상세히 진행됩니다." 
    },
    { 
      q: "환불 규정이 있나요?", 
      a: "상담 시작 전 전액 환불, 시작 후에는 진행 단계에 따라 일부 환불됩니다. 자세한 내용은 문의 주세요." 
    },
    {
      q: "군 복무 중에도 상담 가능한가요?",
      a: "네, 가능합니다. 휴가나 외박 시간을 활용하거나, 카카오톡 채팅 상담으로 진행할 수 있습니다."
    },
    {
      q: "어떤 분야의 취업을 도와주나요?",
      a: "IT, 제조, 서비스, 공기업 등 전 분야를 지원합니다. 군 경력을 살릴 수 있는 직무를 중점적으로 컨설팅합니다."
    }
  ],
  
  // 콘텐츠 그리드
  contents: [
    { 
      badge: "상담중", 
      badgeColor: "#28a745",
      title: "취업 서류 첨삭", 
      text: "이력서/자기소개서 핵심 보정" 
    },
    { 
      badge: "인기", 
      badgeColor: "#dc3545",
      title: "면접 1:1 코칭", 
      text: "실전 질문 대비" 
    },
    { 
      badge: "신규", 
      badgeColor: "#007bff",
      title: "군 경력 전환", 
      text: "민간 역량 언어로 변환" 
    },
    { 
      badge: "Tip", 
      badgeColor: "#ffc107",
      title: "합격 사례", 
      text: "분야별 요약 아카이브" 
    },
    {
      badge: "추천",
      badgeColor: "#6f42c1",
      title: "포트폴리오",
      text: "경쟁력 있는 포트폴리오 구성"
    },
    {
      badge: "HOT",
      badgeColor: "#fd7e14",
      title: "공기업 준비",
      text: "NCS, 자소서 전략"
    }
  ],
  
  // 진행 단계
  steps: [
    { 
      number: "01",
      title: "상담 신청", 
      text: "카카오 채널에서 기본 정보 전송",
      icon: "📝"
    },
    { 
      number: "02",
      title: "접수·검토", 
      text: "경력/목표 분석 후 제안",
      icon: "🔍"
    },
    { 
      number: "03",
      title: "안내·진행", 
      text: "일정·자료 공유, 피드백 반복",
      icon: "🚀"
    }
  ],
  
  // 최종 CTA
  finalCTA: {
    title: "지금 바로 시작하세요",
    subtitle: "군 복무를 마치고 새로운 시작을 준비하는 당신을 응원합니다",
    buttonText: "무료 상담 신청하기"
  },
  
  // 푸터 정보
  footer: {
    bizName: "청년취업진로교육원",
    address: "서울시 ○○구 ○○로 00",
    reg: "사업자등록번호 000-00-00000",
    ceo: "대표 홍길동",
    copyright: "© 2025 All rights reserved.",
    links: [
      { text: "이용약관", url: "#" },
      { text: "개인정보처리방침", url: "#" }
    ]
  }
};