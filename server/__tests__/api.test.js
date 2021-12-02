const request = require("supertest");
const app = require("../index");
const axios = require("axios");
const Service = require("../controllers/services");
const Subscribe = require("../controllers/subscribes")
// const { findAll } = require("../models")

// describe("auth API Test", () => {
//   it("POST /auth/signup 요청 시 201와 Signup success 메시지가 전달되어야 합니다.", async() => {
//     const response = await request(app).post("/auth/signup").send({
//       email: "",
//       password: {},
//       salt: {},
//       nickname: "",
//     });
//     expect(response.statusCode).toBe(201);
//     expect(response).toBe("Signup success")
//   });
// });

describe("service API Test", () => {
  it("GET /service 요청 시 200 코드와 데이터가 전달되어야 합니다.", async () => {
    const response = await request(app)
      .get("/service")
      .send({
        id: 1,
        title: "",
        message: "",
        outer_image: "",
        category: "",
        demo: true,
        Prices: [
          {
            title: "",
            price: "",
          },
        ],
      });
    expect(response.statusCode).toBe(200);
  });
  it("GET /service:id 요청 시 200 코드와 데이터가 전달되어야 합니다.", async () => {
    const response = await request(app)
      .get("/service/:id")
      .send({
        inner_image: "",
        url: "",
        total_comments: 0,
        total_likes: 0,
        Comment: [
          {
            id: 1,
            message: "",
            likes: true,
            createdAt: "",
            updatedAt: "",
          },
        ],
      });
    expect(response.statusCode).toBe(200);
  });
});

describe("subscribe API Test", () => {
  it("GET /subscribe 요청 시 200 코드와 데이터가 전달되어야 합니다.", async () => {
    axios.get = jest.fn().mockResolvedValue({
      user_id: 1,
    });

    const subscribes = await Subscribe.findAll({
      include: [
        {
          Service,
        },
      ],
    });

    expect(subscribes).toEqual({
      id: 1,
      paydate: 1,
      planname: "",
      planprice: "",
      Service: [
        {
          id: 1,
          title: "",
          outer_image: "",
          category: "",
        },
      ],
    });
    expect(response.statusCode).toBe(200);
  });
});

// const { Service } = require("./models");

// let req, res;
// beforeEach(() => {
//   req = httpMocks.createRequest();
//   res = httpMocks.createResponse();
// });

// Service.findOne = jest.fn();
// Service.findAll = jest.fn();

// it("GET /service 성공 시 200 코드 반환", async () => {
//   const response = await request(app).get("/service");
//   expect(response.statusCode).toBe(200);
// });

// describe("test /service", () => {
//   it("무엇이 리턴될까요?", (done) => {
//     request(service)
//       .get("/service")
//       .then((response) => {
//         expect(response.text).toEqual({});
//         done();
//       });
//   });
// });
