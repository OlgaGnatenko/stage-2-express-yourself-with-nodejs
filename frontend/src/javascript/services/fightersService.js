import { callApi } from "../helpers/apiHelper";

class FightersService {
  async getFighters() {
    try {
      const endpoint = "user/";      
      const apiResult = await callApi(endpoint, "GET");
      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  async getFighterDetails(_id) {
    try {
      const endpoint = `user/${_id}`;
      const apiResult = await callApi(endpoint, "GET");
      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  async updateFighterDetails(_id, fighterDetailsMap) {
    try {
      const fighterDetails = await fightersService.getFighterDetails(_id);
      if (!fighterDetailsMap.get(_id)) {
        fighterDetailsMap.set(_id, fighterDetails);
      }
      return fighterDetails;
    } catch (error) {
      throw error;
    }
  }
}

export const fightersService = new FightersService();
