from abc import ABC, abstractmethod


class PlayerInterface(ABC):

    @abstractmethod
    def tic_tac_toe_move(self):
        pass
