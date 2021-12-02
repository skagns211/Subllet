// const service = require("../controllers/services");
const request = require("supertest");
const server = require("../index");
// const { Service } = require("./models");

// let req, res;
// beforeEach(() => {
//   req = httpMocks.createRequest();
//   res = httpMocks.createResponse();
// });

// Service.findOne = jest.fn();
// Service.findAll = jest.fn();

it("성공 시 200 코드 반환", async () => {
  const response = await request(server).get("/service");
  expect(response.statusCode).toBe(200);
});

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
