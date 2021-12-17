import axios from "axios";

jest.mock("axios");

describe("addThought", () => {
  describe("when API call is successful", () => {
    it("should return new thought id", async () => {
      let mockId = 1;

      axios.post.mockResolvedValueOnce({_id: mockId});

      let result = await axios.post("api/thought/add", {
        userId: 1,
        topicId: 1,
        text: "values.text",
      })

      expect(result._id).toEqual(mockId);
    });
  });
});

describe("removeThought", () => {
  describe("when API call is successful", () => {
    it("should send 200", async () => {
      let mockId = 1;

      axios.post.mockResolvedValueOnce(200);

      let result = await axios.post(`api/thought/remove/${mockId}`, {})

      expect(result).toEqual(200);
    });
  });
});