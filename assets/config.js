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
    headline: "구직청원휴가\n간편하게 해결하세요!",
    subcopy: "50% 이상 복무 군인분들께\n신청부터 승인까지 완벽 지원",
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
      q: "비대면 상담도 가능한가요?",
      a: "가능합니다. 저희 청춘도약일자리교육원에서는 나라를 위해 열심히 복무해주시는 국군 장병님들에게 최대한 편의를 제공하기 위해서 비대면 상담도 함께 진행을 하고있습니다."
    },
    {
      q: "상담가능한 일정은 어떻게 되나요?",
      a: "장병분들께서 원하시는 일정에 진행하실 수 있습니다. 대면 상담은 월-토요일 09:00 ~ 18:00, 비대면 상담은 카카오톡 채널로 연락주시면 다른 상담과 겹치지 않는 선에서 언제든지 예약진행을 도와드리고 있습니다."
    },
    {
      q: "당일 예약도 가능한가요?",
      a: "가능합니다. 국군 장병님들에게 최대한 편의를 제공하기 위해 장병분들에 한해 당일 예약도 받고 있습니다."
    },
    {
      q: "언제부터 구직청원휴가를 사용 가능한가요?",
      a: "군 복무기간의 50% 이상을 마치셨다면 누구든 받을 수 있습니다. 제 12조 (청원휴가) ⑫ 의무복무기간의 2분의 1 이상을 마친 병(병)은 취업상담, 채용시험 응시, 현장채용행사 참석 등 구직활동을 하기 위하여 의무복무기간 중 2일의 범위에서 구직휴가를 받을 수 있다. (군인의 지위 및 복무에 관한 기본법 시행령)"
    },
    {
      q: "꼭 상담 예정확인서를 제출해야하나요?",
      a: "부대에 따라 다릅니다. 하지만, 저희 청춘도약일자리교육원에서는 예약이 확정되는 대로 항상 상담 예정확인서를 보내드리기 때문에 걱정하지 않으셔도 됩니다."
    },
    {
      q: "인증 서류는 어떤 자료들이 발급되나요?",
      a: "세 가지의 인증 서류가 발급됩니다. 예약 확정 시 보내드리는 '상담 예정확인서'와 상담 완료 후 드리는 '상담내역서'와 '수료증'를 발급해드립니다. 최근 부대에서 본인 내용이 포함된 상담내역서를 제출하라는 경우가 더러 있는데, 이 부분까지 '상담내역서'에서 제공해드리니 걱정하지 않으셔도 됩니다."
    },
    {
      q: "상담 소요 시간은 어떻게 되나요?",
      a: "소중한 휴가 시간에 시간을 내서 오신 장병분들을 마음을 누구보다 잘 이해하기 때문에, 최대한 장병분들의 요구에 따라 상담을 진행하고 있습니다. 상담을 신청한 장병분의 요청에 따라 실속있는 과정제 초점을 맞춰 최대한 간결하게 진행하기도 하고, 구체적인 상담을 원하신다면 충분한 시간을 들여 상담을 진행하고 있습니다."
    },
    {
      q: "상담 일정 변경이 가능한가요?",
      a: "가능합니다! 기존 예정일 기준 2일 전까지 연락주시면 상담 일정 변경이 가능합니다."
    },
    {
      q: "상담 문의는 어떻게 하나요?",
      a: "카카오톡에서 '청춘도약일자리교육원'을 검색하시고, 카카오톡 채널로 문의를 주시면 바로 예약 상담을 진행해드리고 있습니다. 모바일 접속 시에는 블로그 프로필에 카카오톡 채널 링크 를 통해서, 데스크탑 접속시에는 블로그 상단 버튼 클릭 시 바로 카카오톡 채널로 문의가능하니 참고해주세요."
    },
    {
      q: "비용이 발생하나요?",
      a: "비용이 발생합니다. 다만, 국군 장병분께서 진행하시는 '구직 관련 상담'인 만큼 다른 상담에 비해 매우 적은 비용만 받고 진행하고 있습니다. 상담 횟수에 따라 가격이 상이하기 때문에, 이 부분은 '청춘도약일자리교육원' 카카오톡 채널로 문의주시면 바로 답변드리겠습니다."
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