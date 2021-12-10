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
        message: "-이용기기 모바일, 태블릿, PC -화질 HD(720p)화질 -동시시청 1명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 4,
        title: "스탠다드",
        price: "10900원",
        message: "-이용기기 모바일, 태블릿, PC, TV -화질 FHD(1080p)화질 -동시시청 2명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 4,
        title: "프리미엄",
        price: "13900원",
        message: "-이용기기 모바일, 태블릿, PC, TV -화질 UHD(4k)화질 -동시시청 4명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 5,
        title: "베이식",
        price: "7900원",
        message: "-이용기기 모바일, 태블릿, PC -화질 HD(720p)화질 -동시시청 1명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 5,
        title: "스탠다드",
        price: "10900원",
        message: "-이용기기 모바일, 태블릿, PC, TV -화질 FHD(1080p)화질 -동시시청 2명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 5,
        title: "프리미엄",
        price: "13900원",
        message: "-이용기기 모바일, 태블릿, PC, TV -화질 UHD(4k)화질 -동시시청 4명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 6,
        title: "베이식",
        price: "9900원",
        message: "-이용기기 모바일, 태블릿, PC, TV -화질 FHD(1080p)화질 -동시시청 1명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 6,
        title: "프리미엄",
        price: "14900원",
        message: "-이용기기 모바일, 태블릿, PC, TV -화질 FHD(1080p)화질 -동시시청 4명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 7,
        title: "기본",
        price: "9900원",
        message: "-이용기기 모바일, 태블릿, PC, TV -화질 UHD(4k)화질 -동시시청 4명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 8,
        title: "기본",
        price: "6500원",
        message: "-이용기기 모바일, 태블릿, PC, TV -화질 UHD(4k)화질 -동시시청 5명",
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
