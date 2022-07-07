import re

import MagicNumbers
import MagicStrings


class Referee:
    def __init__(self):
        pass

    def check_validity_and_make_move(self, game_board, input_string, move_char):
        input_string = input_string.strip()
        is_string_valid = self.check_input(input_string)
        if not is_string_valid:
            self.referee_says(MagicStrings.WRONG_INPUT_FORMAT)
            return False
        is_valid_move = game_board.check_validity_and_make_move(input_string[0], input_string[2], move_char)
        callout_string = None
        if not is_valid_move:
            callout_string = MagicStrings.BAD_MOVE
        else:
            callout_string = MagicStrings.GOOD_MOVE
        self.referee_says(callout_string)
        return is_valid_move

    def check_input(self, move_string):
        move_string_reg = re.compile(r'^\d,\d$')
        move_string_extracted = move_string_reg.search(move_string)
        if move_string_extracted is None:
            return False

        coordinate_list = move_string_extracted.group().split(',')
        for num_string in coordinate_list:
            if int(num_string) > MagicNumbers.TIC_TAC_TOE_GRID_SIZE:
                return False

        return True


    def is_game_tied(self, game_board):
        return game_board.is_move_available() is False

    @staticmethod
    def is_winner_detected(game_board):
        if game_board.diagonal_match() or game_board.row_match() or game_board.column_match():
            return True

    @staticmethod
    def referee_says(callout_string):
        print(MagicStrings.REFEREE_SAYS + callout_string)
