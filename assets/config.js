// 사이트 설정 - 이 파일만 수정하면 전체 사이트 콘텐츠가 변경됩니다
window.__SITE_CONFIG__ = {
  // 브랜드 정보
  brandName: "청춘도약일자리교육원",
  tagline: "2030 청년들을 위한 일자리 정보 포털",

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
    headline: "구직청원휴가, 청춘도약일자리교육원에서 쉽고 깔끔하게 해결하세요!",
    subcopy: "50% 이상 복무하신 모든 군인분들께 구직청원휴가 신청부터 승인까지 완벽 지원",
    image: "assets/images/hero_image.png",
    primaryCta: "무료 자가진단 시작",
    secondaryCta: "정부 근거 보기",
    badges: [
      "평균 승인률 95%",
      "신청 당일 서류발급",
      "24시간 상담지원"
    ]
  },

  // 자가진단 섹션
  selfDiagnosis: {
    title: "나는 구직청원휴가 신청이 가능할까요?",
    subtitle: "간단한 체크만으로 즉시 확인하세요",
    categories: [
      {
        id: "military-job",
        title: "군인 구직휴가",
        icon: "🎖️",
        active: true
      },
      {
        id: "startup",
        title: "창업 지원",
        icon: "💼",
        active: false
      },
      {
        id: "education",
        title: "입시 준비",
        icon: "📚",
        active: false
      }
    ],
    form: {
      questions: [
        {
          id: "branch",
          title: "군종을 선택해주세요",
          type: "radio",
          options: ["육군", "해군", "공군", "해병대"]
        },
        {
          id: "rank",
          title: "현재 계급 및 복무 현황",
          type: "radio",
          options: [
            "병장 (복무 50% 이상)",
            "상병 (복무 50% 이상)",
            "일병 (복무 50% 미만)",
            "이병 (복무 50% 미만)"
          ]
        },
        {
          id: "used_leave",
          title: "구직청원휴가 사용 경험",
          type: "radio",
          options: ["처음 신청", "재신청"]
        },
        {
          id: "consultation_type",
          title: "선호하는 상담 방식",
          type: "radio",
          options: ["비대면 (화상/전화)", "대면 상담"]
        }
      ],
      result: {
        title: "구직청원휴가 신청이 가능합니다!",
        subtitle: "50% 이상 복무하신 분은 모두 신청 가능하며, 저희가 도와드리겠습니다.",
        cta: "상담 예약하러 가기"
      }
    }
  },

  // 서류 샘플 섹션
  documentSamples: {
    title: "실제 발급되는 서류",
    subtitle: "부대 제출용 공식 서류를 미리 확인하세요",
    documents: [
      {
        id: "consultation-record",
        title: "상담내역서",
        description: "발급처, 담당자, 상담 일시·내용 요약",
        features: ["공식 서명/직인", "문의처 포함", "진위확인 QR코드"],
        image: "assets/images/certification_1.jpeg",
        sample: true
      },
      {
        id: "certificate",
        title: "수료증",
        description: "상담/교육 수료 시 발급되는 공식 증명서",
        features: ["수료과정명", "교육시간", "고유번호", "발급일자"],
        image: "assets/images/certification_4.jpeg",
        sample: true
      },
      {
        id: "reservation-confirm",
        title: "예약확정서",
        description: "상담 예정 확인서 (필요시 발급)",
        features: ["예약 일시/장소", "신청자 정보", "예약번호"],
        image: "assets/images/certification_2.jpeg",
        sample: true
      }
    ]
  },

  // 프로세스 안내
  process: {
    title: "휴가 받기까지 전체 여정",
    subtitle: "신청부터 승인까지 단계별 안내",
    steps: [
      {
        id: "apply",
        title: "신청",
        description: "온라인으로 간편 신청",
        duration: "5분",
        requirements: ["기본정보", "희망일정"],
        output: "신청접수증",
        responsible: "사용자"
      },
      {
        id: "reservation",
        title: "상담예약",
        description: "전문 상담사와 일정 조율",
        duration: "당일~1일",
        requirements: ["연락처", "가능시간"],
        output: "예약확정서",
        responsible: "상담사"
      },
      {
        id: "document-issue",
        title: "예약확정서 발급",
        description: "부대 제출용 예약 증명서 (필요시)",
        duration: "즉시",
        requirements: ["예약완료"],
        output: "예약확정서",
        responsible: "시스템"
      },
      {
        id: "consultation",
        title: "상담 진행",
        description: "진로상담 및 취업지도 실시",
        duration: "30분~1시간",
        requirements: ["신분증", "이력서"],
        output: "상담내역서",
        responsible: "상담사"
      },
      {
        id: "certificate-issue",
        title: "증빙서류 발급",
        description: "상담내역서, 수료증 등 공식서류",
        duration: "상담 후 즉시",
        requirements: ["상담완료"],
        output: "공식서류",
        responsible: "교육원"
      },
      {
        id: "submission",
        title: "부대 제출",
        description: "발급받은 서류를 부대에 제출",
        duration: "1~2일",
        requirements: ["공식서류"],
        output: "휴가신청서",
        responsible: "사용자"
      },
      {
        id: "approval",
        title: "승인",
        description: "부대 검토 후 휴가 승인",
        duration: "3~7일",
        requirements: ["부대검토"],
        output: "휴가승인서",
        responsible: "부대"
      }
    ]
  },

  // 가격 및 패키지
  pricing: [
    {
      title: "Basic",
      subtitle: "기본 상담",
      price: "49,000",
      unit: "원",
      popular: false,
      features: [
        "진로상담 30분",
        "상담내역서 발급",
        "기본 서류 가이드",
        "카카오톡 Q&A"
      ],
      limitations: [
        "급행처리 불가",
        "추가 서류 별도"
      ],
      cta: "Basic 선택",
      guarantee: "부대 사유로 승인 불가시 50% 환불"
    },
    {
      title: "Standard",
      subtitle: "상담 + 서류발급",
      price: "89,000",
      unit: "원",
      popular: true,
      features: [
        "진로상담 60분",
        "모든 증빙서류 발급",
        "부대 제출 가이드",
        "예약확정서 포함",
        "24시간 카톡 지원"
      ],
      limitations: [
        "급행처리 +20,000원"
      ],
      cta: "Standard 선택",
      guarantee: "부대 사유로 승인 불가시 전액 환불"
    }
  ],

  // 후기 섹션
  reviews: {
    title: "실제 이용 후기",
    subtitle: "구직청원휴가를 성공적으로 받으신 분들의 생생한 후기",
    cta: "더 많은 후기 보기",
    samples: [
      {
        name: "김○○ 병장",
        branch: "육군",
        rating: 5,
        text: "처음에는 복잡할 줄 알았는데 정말 간단했어요. 상담도 친절하고 서류도 바로 나와서 부대에서 바로 승인받았습니다.",
        date: "2024.01.15"
      },
      {
        name: "이○○ 상병",
        branch: "해군",
        rating: 5,
        text: "다른 곳은 비싸던데 여기는 가격도 합리적이고 정말 빨라요. 당일에 모든 서류 받아서 놀랐습니다.",
        date: "2024.01.10"
      }
    ]
  },

  // FAQ
  faq: [
    {
      q: "부대에서 예약확정서를 요구하면 어떻게 받나요?",
      a: "Standard 이상 패키지에서는 예약확정서가 자동으로 포함됩니다. Basic 패키지 이용시에도 요청하시면 무료로 발급해드립니다."
    },
    {
      q: "승인 불가 시 어떻게 되나요?",
      a: "부대 사유로 승인이 불가할 경우, Basic 50% 환불, Standard는 전액 환불해드립니다. 개인 사유는 환불 불가합니다."
    },
    {
      q: "개인정보 보관 및 파기는 언제 하나요?",
      a: "상담 완료 후 6개월간 보관하며, 이후 자동 파기됩니다. 즉시 삭제를 원하시면 언제든 요청 가능합니다."
    },
    {
      q: "급행 처리의 가능 조건과 제한은 무엇인가요?",
      a: "Standard 패키지 선택 시 1~2일 내 상담 및 서류 발급이 가능합니다. 급행 처리가 필요한 경우 추가 비용으로 당일 처리도 가능합니다."
    },
    {
      q: "어떤 서류 조합이 필요한가요?",
      a: "기본적으로 상담내역서만 있으면 되지만, 부대에 따라 예약확정서나 수료증을 추가 요구할 수 있습니다. Standard 패키지는 모든 서류가 포함됩니다."
    },
    {
      q: "군종이나 부대별로 차이가 큰가요?",
      a: "기본 절차는 동일하지만, 일부 부대에서 요구하는 서류 형식이 다를 수 있습니다. 저희는 모든 군종과 부대 사례를 보유하고 있어 맞춤 대응 가능합니다."
    },
    {
      q: "결제 후 일정 변경이나 취소가 가능한가요?",
      a: "상담 24시간 전까지는 무료 변경 가능합니다. 취소는 상담 전까지 가능하며, 취소 수수료 10%를 제외하고 환불됩니다."
    },
    {
      q: "상담이 근무 외 시간에도 가능한가요?",
      a: "평일 오전 9시~오후 9시, 주말 오전 10시~오후 6시까지 상담 가능합니다. 긴급한 경우 추가 비용으로 시간 외 상담도 가능합니다."
    },
    {
      q: "필요 최소 정보만 제출해도 되나요?",
      a: "네, 상담과 서류 발급에 필요한 최소한의 정보만 수집합니다. 이름, 연락처, 군종, 계급 정도만 있으면 됩니다."
    },
    {
      q: "서류에 담당자 실명과 연락처가 포함되나요?",
      a: "네, 모든 공식 서류에는 담당 상담사 실명, 자격증 번호, 연락처가 포함되어 부대에서 진위 확인이 가능합니다."
    }
  ],

  // 카카오 배너
  kakaoBanner: {
    title: "카카오톡으로 빠른 상담",
    caption: "구직청원휴가 관련 궁금한 점을 바로 해결하세요",
    phoneMock: "assets/images/mock_up.png",
    cta: "카카오톡 상담하기"
  },

  // 최종 CTA
  finalCta: {
    title: "지금 바로 구직청원휴가 신청하세요",
    subtitle: "50% 이상 복무하신 모든 분들께 완벽한 서류 지원",
    cta: "무료 자가진단 시작하기"
  },

  // 푸터
  footer: {
    description: "2030 청년들을 위한 일자리 정보 포털",
    copyright: "© 2024 청춘도약일자리교육원. All rights reserved.",
    links: [
      { text: "이용약관", url: "#" },
      { text: "개인정보처리방침", url: "#" },
      { text: "사업자정보", url: "#" }
    ]
  },

  // 증빙 자료 (기존 슬라이더)
  proofs: {
    title: "실제 서류 첨삭 사례",
    subtitle: "합격자들의 생생한 후기",
    images: [
      "assets/images/certification_1.jpeg",
      "assets/images/certification_2.jpeg",
      "assets/images/certification_3.jpeg",
      "assets/images/certification_4.jpeg"
    ]
  }
};

// 전역 접근을 위한 별칭
const config = window.__SITE_CONFIG__;