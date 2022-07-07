import MagicStrings
from GameInterface import GameInterface
from Referee import Referee
from TicTacToeBoard import TicTacToeBoard
from HumanPlayer import HumanPlayer
import MagicNumbers


class TicTacToe(GameInterface):
    def __init__(self):
        self.player_list = [HumanPlayer(), HumanPlayer()]
        self.move_char_list = [MagicStrings.PLAYER_0_MOVE, MagicStrings.PLAYER_1_MOVE]
        self.referee = Referee()
        self.game_board = TicTacToeBoard()
        self.is_game_in_progress = True
        self.is_game_drawn = False
        self.winner = None
        self.turn = 0
        print(MagicStrings.TIC_TIC_TOE_MOVE_INSTRUCTION)
        self.start_game();

    def start_game(self):
        while self.is_game_in_progress:
            is_valid_move = False
            self.game_board.print_board()
            while not is_valid_move:
                input_string = self.player_list[self.turn].tic_tac_toe_move()
                move_char = self.move_char_list[self.turn]
                is_valid_move = self.referee.check_validity_and_make_move(self.game_board, input_string, move_char)
            self.check_end_conditions()
            if self.check_end_conditions():
                self.end_game()
            self.change_turn()

    def end_game(self):
        self.game_board.print_board()
        if self.winner is not None:
            print(MagicStrings.PLAYER_X_WON.format(self.turn))

        if self.is_game_drawn:
            print(MagicStrings.GAME_DRAWN)

        self.is_game_in_progress = False

    def check_end_conditions(self):
        self.winner = self.referee.is_winner_detected(self.game_board)
        if self.winner:
            return True
        self.is_game_drawn = self.referee.is_game_tied(self.game_board)
        if self.is_game_drawn:
            return True
        return False

    def change_turn(self):
        self.turn = (self.turn+1)%MagicNumbers.TIC_TAC_TOE_PLAYER_COUNT

