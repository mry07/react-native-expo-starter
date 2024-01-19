import { userUseCase } from "../../core/di/injection";

type HomePresenter = {
  getData: () => void;
};

export const useHomePresenter = (): HomePresenter => {
  return {
    getData: async () => {
      await userUseCase.getUsers();
    },
  };
};
