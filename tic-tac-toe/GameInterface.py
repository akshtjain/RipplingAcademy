from abc import ABC, abstractmethod


class GameInterface(ABC):
    @abstractmethod
    def start_game(self):
        pass

    @abstractmethod
    def end_game(self):
        pass