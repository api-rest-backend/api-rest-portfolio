import request from "supertest";
import app from '../src/app'

// TESTING GET ENDPOINTS


    it("return all information", (done) => {
      request(app)
        .get("/porfolio.mode.ts")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done)
    });
  