import { response } from "express"
import request from "supertest"
import app from "../src/app"



//TEST GET ENDPOINTS
describe("get /portfolio", () => {
    test("Should respond with a 200 status code and a JSON", async () => {
        const response = await request(app).get("/portfolio").send()
        expect(response.statusCode).toBe(200)
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
    })
})

describe("get /portfolio/project", () => {
    test("Should respond with a 200 status code", async () => {
        const response = await request(app).get("/portfolio/project").send()
        expect(response.statusCode).toBe(200)
    })
})

describe("get /portfolio/project/:id", () => {
    test("Should respond with a 200 status code", async () => {
        const response = await request(app).get("/portfolio/project/:id").send()
        expect(response.statusCode).toBe(200)
    })
})



//TEST POST ENDPOINTS
describe("post /portfolio/project", () => {
    test("Should respond with a 200 status code", async () => {
        const response = await request(app).post("/portfolio/project").send()
        expect(response.statusCode).toBe(200)
    })
})


//TEST PUT ENDPOINTS
describe("put /portfolio/project", () => {
    test("Should respond with a 200 status code", async () => {
        const response = await request(app).put("/portfolio/project").send()
        expect(response.statusCode).toBe(200)
    })
})


//TEST DELETE ENDPOINTS
describe("delete /portfolio/project", () => {
    test("Should respond with a 200 status code", async () => {
        const response = await request(app).delete("/portfolio/project").send()
        expect(response.statusCode).toBe(404)
    })
})