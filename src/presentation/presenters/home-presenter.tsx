import { userUseCase } from "../../core/di/injection";
import HomePresenter from "./home-presenter.types";

export const useHomePresenter = (): HomePresenter => {
  return {
    getData: async () => {
      await userUseCase.getUsers();
    },
  };
};
