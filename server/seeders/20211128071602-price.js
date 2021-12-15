"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Prices", [
      {
        service_id: 1,
        title: "베이식",
        price: "9500원",
        message:
          "-이용기기 모바일, 태블릿, PC, TV -화질 SD(480p)화질 -동시시청 1명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 1,
        title: "스탠다드",
        price: "13500원",
        message:
          "-이용기기 모바일, 태블릿, PC, TV -화질 FHD(1080p)화질 -동시시청 2명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 1,
        title: "프리미엄",
        price: "14500원",
        message:
          "-이용기기 모바일, 태블릿, PC, TV -화질 UHD(4K)화질 -동시시청 4명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 2,
        title: "베이식",
        price: "7900원",
        message:
          "-이용기기 모바일, 태블릿, PC, TV -화질 FHD(1080p)화질 -동시시청 1명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 2,
        title: "프리미엄",
        price: "12900원",
        message:
          "-이용기기 모바일, 태블릿, PC, TV -화질 UHD(4K)화질 -동시시청 4명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 3,
        title: "프리미엄",
        price: "9500원",
        message: "-이용기기 모바일, 태블릿, PC, TV",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 4,
        title: "베이식",
        price: "7900원",
        message:
          "-이용기기 모바일, 태블릿, PC -화질 HD(720p)화질 -동시시청 1명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 4,
        title: "스탠다드",
        price: "10900원",
        message:
          "-이용기기 모바일, 태블릿, PC, TV -화질 FHD(1080p)화질 -동시시청 2명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 4,
        title: "프리미엄",
        price: "13900원",
        message:
          "-이용기기 모바일, 태블릿, PC, TV -화질 UHD(4k)화질 -동시시청 4명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 5,
        title: "베이식",
        price: "7900원",
        message:
          "-이용기기 모바일, 태블릿, PC -화질 HD(720p)화질 -동시시청 1명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 5,
        title: "스탠다드",
        price: "10900원",
        message:
          "-이용기기 모바일, 태블릿, PC, TV -화질 FHD(1080p)화질 -동시시청 2명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 5,
        title: "프리미엄",
        price: "13900원",
        message:
          "-이용기기 모바일, 태블릿, PC, TV -화질 UHD(4k)화질 -동시시청 4명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 6,
        title: "베이식",
        price: "9900원",
        message:
          "-이용기기 모바일, 태블릿, PC, TV -화질 FHD(1080p)화질 -동시시청 1명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 6,
        title: "프리미엄",
        price: "14900원",
        message:
          "-이용기기 모바일, 태블릿, PC, TV -화질 FHD(1080p)화질 -동시시청 4명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 7,
        title: "기본",
        price: "9900원",
        message:
          "-이용기기 모바일, 태블릿, PC, TV -화질 UHD(4k)화질 -동시시청 4명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 8,
        title: "기본",
        price: "6500원",
        message:
          "-이용기기 모바일, 태블릿, PC, TV -화질 UHD(4k)화질 -동시시청 5명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 9,
        title: "기본",
        price: "11900원",
        message: "-전자책 무제한",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 9,
        title: "기본",
        price: "15900원",
        message: "-종이책 무제한",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 10,
        title: "기본",
        price: "4900원",
        message: "-전자책 무제한",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 11,
        title: "기본",
        price: "9900원",
        message: "-전자책 무제한",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 12,
        title: "스탠다드",
        price: "5500원",
        message: "-동시독서 5명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 12,
        title: "프리미엄",
        price: "7700원",
        message: "-동시독서 5명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 13,
        title: "무제한 듣기",
        price: "6900원",
        message: "-VIBE PC 웹, VIBE 앱, VIBE 모바일 웹에서 무제한 스트리밍",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 13,
        title: "무제한 듣기 + 오프라인 재생",
        price: "9800원",
        message: "-무제한 듣기 + VIBE 앱에서 오프라인 재생(DRM 저장)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 14,
        title: "개인",
        price: "10900원",
        message:
          "- 계정 1개, - 광고 없는 음악 감상, - 다운로드하여 오프라인에서 감상, - 나만의 맞춤 플레이리스트, - 7천만 개에 달하는 곡, - 여러 기기에서 감상",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 14,
        title: "듀오",
        price: "16350원",
        message:
          "- Premiun 별도 계정 2개, - 광고 없는 음악 감상, - 다운로드하여 오프라인에서 감상, - 나만의 맞춤 플레이리스트, - 7천만 개에 달하는 곡, - 여러 기기에서 감상",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 15,
        title: "개인",
        price: "8900원",
        message:
          "- 동시 1명 스트리밍, - 8천 5백만여 곡, 광고 없는 스트리밍, - Dolbt Atmos 지원 공간 음향",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 15,
        title: "가족",
        price: "13500원",
        message:
          "- 동시 5명 스트리밍, - 가족 구성원별 개인 음악 보관함, - 가족 구성원별 개인 맞춤 음악 추천, - 8천 5백만여 곡, - 광고 없는 스트리밍, - Dolbt Atmos 지원 공간 음향",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 16,
        title: "음악감상",
        price: "8400원",
        message: "- 지니 웹, 지니 앱 음악 무제한 감상",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 16,
        title: "스마트 음악감상(모바일 전용)",
        price: "7400원",
        message: "- 지니 앱 음악 무제한 감상",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 16,
        title: "데이터 세이프 음악감상",
        price: "10900원",
        message: "- 언제 어디서나 데이터 소모 없이 무제한 음악감상",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 17,
        title: "HI-FI 스트리밍 클럽",
        price: "12000원",
        message:
          "- 무손실 고음질 음원파일(FLAC) 무제한 스트리밍, - PC, 앱, 카카오톡, AI 스피커, 카카오 미니, 카카오 내비 지원",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 17,
        title: "스트리밍 클럽",
        price: "7900원",
        message:
          "- 기기 제한 없이 무제한 스트리밍, - PC, 앱, 카카오톡, AI 스피커, 카카오 미니, 카카오 내비 지원",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 17,
        title: "모바일 스트리밍 클럽",
        price: "6900원",
        message:
          "- 모바일 기기에서 무제한 스트리밍, 앱, 카카오톡, 카카오 내비 지원",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 18,
        title: "무제한 듣기 + 오프라인 재생",
        price: "10900원",
        message: "- 기기 제한 없음, - 무제한 스트리밍, - 오프라인 재생",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 18,
        title: "무제한 듣기",
        price: "7900원",
        message: "- 기기 제한 없음, - 무제한 스트리밍",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 18,
        title: "모바일 무제한 듣기",
        price: "6900원",
        message: "- 모바일 전용, - 무제한 스트리밍",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 19,
        title: "로켓와우",
        price: "2900원",
        message:
          "- 로켓배송상품 100% 무료배송, - 새벽배송 (19시 전까지 주문시), - 저녁배송 (09시 전까지 주문시 당일배송), - 로켓배송상품 30일 무료반품, - 쿠팡플레이 무료 이용",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 20,
        title: "컬리패스",
        price: "4500원",
        message:
          "- 샛별배송 지역 고객에 한해 15,000원 이상 주문시 무제한 무료배송",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 21,
        title: "네이버 멤버십",
        price: "4900원",
        message:
          "- 네이버 페이 최대 5% 적립, - 강력한 디지털 콘텐츠(티빙, 시리즈온, 네이버 웹툰 등), - 이달의 쇼핑 추가 3% 적립, - 매월 찾아오는 멤버십 데이",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 22,
        title: "슈퍼세이브",
        price: "5000원",
        message:
          "- 2% + a 구매적립, - 전용쿠폰 및 특가딜, - 슈퍼세이브 회원만 참여 가능한 전용 이벤트, - 우선 상담 서비스",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 23,
        title: "우주패스 all",
        price: "9900원",
        message:
          "- Amazon 해외직구 무료배송 + 매달 5,000원 할인쿠폰 2장 지급, - 매달 11번가 3,000포인트 지급, - 매달 Google One 멤버십 100GB 지급, - 콘텐츠, 생활/쇼핑, 교통, 음식/디저트, 교육/보험 등 카테고리의 추가 혜택",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 23,
        title: "우주패스 mini",
        price: "4900원",
        message:
          "- Amazon 해외직구 무료배송 + 매달 5,000원 할인쿠폰 2장 지급, - 매달 11번가 3,000포인트 지급, - 매달 Google One 멤버십 100GB 또는 wavve Lite 이용권 중 택 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 24,
        title: "PRO or SENS(리필 면도날)",
        price: "8900원",
        message:
          "- 리필 면도날 4입, - 배송 주기(8주, 16주) 지정 가능, - 배송비 무료",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 24,
        title: "PRO or SENS(리필 면도날 + 쉐이빙젤)",
        price: "12800원",
        message:
          "- 리필 면도날 4입 + 쉐이빙젤 150ml - 배송 주기(8주, 16주) 지정 가능, - 배송비 무료",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 24,
        title: "PRO or SENS(리필 면도날 + 리페어 애프터쉐이브)",
        price: "14800원",
        message:
          "- 리필 면도날 4입 + 리페어 애프터쉐이브 60ml - 배송 주기(8주, 16주) 지정 가능, - 배송비 무료",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 25,
        title: "올인원 64",
        price: "64200원",
        message: "- 물빨래 90L+와이셔츠 20장+드라이클리닝 3장+3회 배송",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 25,
        title: "올인원 73",
        price: "73800원",
        message: "- 물빨래 120L+와이셔츠 20장+드라이클리닝 3장+4회 배송",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 25,
        title: "올인원 115",
        price: "115000원",
        message:
          "- 물빨래 240L+와이셔츠 20장+드라이블리닝 5장+이불 2개+8회 배송",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 25,
        title: "와이셔츠&드라이 43",
        price: "43500원",
        message: "- 와이셔츠20장+드라이클리닝 2장+2회 배송",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 25,
        title: "와이셔츠&드라이 52",
        price: "52000원",
        message: "- 와이셔츠 20장+드라이클리닝 4장+3회 배송",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 25,
        title: "와이셔츠&드라이 59",
        price: "59600원",
        message: "- 와이셔츠 20장+드라이클리닝 6장+4회 배송",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 25,
        title: "드라이온리 58",
        price: "58600원",
        message: "- 드라이클리닝 12장+2회 배송",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 25,
        title: "드라이온리 68",
        price: "68800원",
        message: "- 드라이클리닝 15장+2회 배송",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 25,
        title: "드라이온리 84",
        price: "84300원",
        message: "- 드라이클리닝 18장+3회 배송",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 25,
        title: "런드리&드라이 47",
        price: "47400원",
        message: "- 물빨래 90L+드라이클리닝 3장+3회 배송",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 25,
        title: "런드리&드라이 59",
        price: "59600원",
        message: "- 물빨래 120L+드라이클리닝 4장+4회 배송",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 25,
        title: "런드리&드라이 78",
        price: "78800원",
        message: "- 물빨래 240L+드라이클리닝 4장+4회 배송",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 25,
        title: "런드리온리 38",
        price: "38700원",
        message: "- 물빨래 90L+3회 배송",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 25,
        title: "런드리온리 50",
        price: "50400원",
        message: "- 물빨래 120L+4회 배송",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 25,
        title: "런드리온리 70",
        price: "70000원",
        message: "- 물빨래 240L+4회 배송",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 25,
        title: "베딩온리 28",
        price: "28700원",
        message: "- 이불 3개 + 1회 배송",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 26,
        title: "담화박스",
        price: "39000원",
        message:
          "- 매월 셋째주 목요일 도착, - 전국 1,200개 이상의 양조장 술 중 잠재적 '인생술'만 골라 받기, - 단품 구매보다 평균 12% 더 저렴",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 27,
        title: "청소 매니저",
        price: "46200원 부터",
        message:
          "- 청소 희망 일자, 시간에 청소매니저가 방문해 집청소를 대신 해 드립니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
