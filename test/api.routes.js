let server = require("../index");
let chai = require("chai");
let chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

describe("Test GET route /api", () => {
    it("It should return a hello world message", (done) => {
        chai.request(server)
            .get("/api")
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.json;
                response.body.should.have.property('message').eq('Hello World!');
                done();
            });
    });
});

describe("Test GET route /api/activity", () => {
    it("It should return a valid activity if no parameters are provided", (done) => {
        chai.request(server)
            .get("/api/activity")
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.json;
                response.body.should.have.property('participants').eq(1);
                response.body.should.have.property('activity');
                response.body.should.have.property('type');
                response.body.should.have.property('price');
                response.body.should.have.property('link');
                response.body.should.have.property('key');
                response.body.should.have.property('accessibility');
                done();
            });
    });
    it("It should return an activity for 4 participants", (done) => {
        chai.request(server)
            .get("/api/activity")
            .query({ participants: 4 })
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.json;
                response.body.should.have.property('participants').eq(4);
                response.body.should.have.property('activity');
                response.body.should.have.property('type');
                response.body.should.have.property('price');
                response.body.should.have.property('link');
                response.body.should.have.property('key');
                response.body.should.have.property('accessibility');
                done();
            });
    });
    it("It should return a cooking activity for 3 participants", (done) => {
        chai.request(server)
            .get("/api/activity")
            .query({
                participants: 3,
                type: 'cooking'
            })
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.json;
                response.body.should.have.property('participants').eq(3);
                response.body.should.have.property('activity');
                response.body.should.have.property('type').eq('cooking');
                response.body.should.have.property('price');
                response.body.should.have.property('link');
                response.body.should.have.property('key');
                response.body.should.have.property('accessibility');
                done();
            });
    });
    it("It should return a social activity", (done) => {
        chai.request(server)
            .get("/api/activity")
            .query({
                type: 'social'
            })
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.json;
                response.body.should.have.property('participants');
                response.body.should.have.property('activity');
                response.body.should.have.property('type').eq('social');
                response.body.should.have.property('price');
                response.body.should.have.property('link');
                response.body.should.have.property('key');
                response.body.should.have.property('accessibility');
                done();
            });
    });
    it("It should return error if invalid activity type provided", (done) => {
        chai.request(server)
            .get("/api/activity")
            .query({
                type: 'unsupportedActivityType'
            })
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.json;
                response.body.should.have.property('error').eq('No activity found with the specified parameters');
                done();
            });
    });
    it("It should return error if more than 5 participants requested", (done) => {
        chai.request(server)
            .get("/api/activity")
            .query({
                participants: 6
            })
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.json;
                response.body.should.have.property('error').eq('No activity found with the specified parameters');
                done();
            });
    });
    it("It should return error if less than 1 participant requested", (done) => {
        chai.request(server)
            .get("/api/activity")
            .query({
                participants: 0
            })
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.json;
                response.body.should.have.property('error').eq('No activity found with the specified parameters');
                done();
            });
    });
    it("It should return an activity ignorring unsupported paremeters", (done) => {
        chai.request(server)
            .get("/api/activity")
            .query({
                unsupportedParam1: 0,
                unsupportedParam2: 'unsupported',
                unsupportedParam3: true
            })
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.json;
                response.body.should.have.property('participants').eq(1);
                response.body.should.have.property('activity');
                response.body.should.have.property('type');
                response.body.should.have.property('price');
                response.body.should.have.property('link');
                response.body.should.have.property('key');
                response.body.should.have.property('accessibility');
                response.body.should.not.have.property('unsupportedParam1');
                response.body.should.not.have.property('unsupportedParam2');
                response.body.should.not.have.property('unsupportedParam3');
                done();
            });
    });
});