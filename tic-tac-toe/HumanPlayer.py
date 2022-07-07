import MagicStrings;
from PlayerInterface import PlayerInterface


class HumanPlayer(PlayerInterface):
    def __init__(self):
        self.name = "Human"

    @staticmethod
    def tic_tac_toe_move():
        move_string = input("Enter your Move: ")
        return move_string