import MagicNumbers
import MagicStrings


class TicTacToeBoard:
    def __init__(self):
        self.board_layout = [' --- --- --- ', '|   |   |   |', ' --- --- --- ', '|   |   |   |', ' --- --- --- ',
                             '|   |   |   |', ' --- --- --- ']
        self.row_positions = [1, 3, 5];
        self.col_positions = [2, 6, 10];
        self.game_state = [['', '', ''], ['', '', ''], ['', '', '']];

    def print_board(self):
        for line in self.board_layout:
            print(line)

    def check_validity_and_make_move(self, row, col, move_char):
        row_pos, col_pos = self.convert_position_to_array_index(row, col)
        is_possible = self.check_move_validity(row_pos, col_pos)
        if is_possible:
            self.make_move(row_pos, col_pos, row, col, move_char)
        return is_possible

    def check_move_validity(self, row_pos, col_pos):
        if self.board_layout[row_pos][col_pos] == ' ':
            return True
        return False

    def make_move(self, row_pos, col_pos, row, col, move_char):
        # self.board_layout[row_pos][col_pos] = move_char[0]
        # self.game_state[row-1][col-1] = move_char[0]
        str2 = self.board_layout[row_pos]
        str2 = str2[:col_pos] + move_char + str2[col_pos + 1:]
        self.board_layout[row_pos] = str2
        self.game_state[int(row) - 1][int(col) - 1] = move_char

    def convert_position_to_array_index(self, row, col):
        row_pos = self.row_positions[int(row) - 1];
        col_pos = self.col_positions[int(col) - 1];
        return row_pos, col_pos

    def register_move(self):
        pass

    def diagonal_match(self):
        max_match_count = 0
        grid_size = MagicNumbers.TIC_TAC_TOE_GRID_SIZE
        for move_str in [MagicStrings.PLAYER_0_MOVE, MagicStrings.PLAYER_1_MOVE]:
            match_count = 0
            for i in range(0, grid_size):
                if self.game_state[i][i] == move_str:
                    match_count += 1
            max_match_count = max(match_count, max_match_count)
            match_count = 0
            for i in range(0, grid_size):
                if self.game_state[i][grid_size - i - 1] == move_str:
                    match_count += 1
            max_match_count = max(match_count, max_match_count)

        if max_match_count == grid_size:
            return True
        return False

    # TODO fix duplicate in row and col matcher

    def column_match(self):
        max_match_count = 0
        grid_size = MagicNumbers.TIC_TAC_TOE_GRID_SIZE
        for move_str in [MagicStrings.PLAYER_0_MOVE, MagicStrings.PLAYER_1_MOVE]:
            for col in range(0, grid_size):
                match_count = 0
                for row in range(0, grid_size):
                    if self.game_state[row][col] == move_str:
                        match_count += 1
                max_match_count = max(match_count, max_match_count)
        if max_match_count == grid_size:
            return True
        return False

    def row_match(self):
        max_match_count = 0
        grid_size = MagicNumbers.TIC_TAC_TOE_GRID_SIZE
        for move_str in [MagicStrings.PLAYER_0_MOVE, MagicStrings.PLAYER_1_MOVE]:

            for row in range(0, grid_size):
                match_count = 0
                for col in range(0, grid_size):
                    if self.game_state[row][col] == move_str:
                        match_count += 1
                max_match_count = max(match_count, max_match_count)
        if max_match_count == grid_size:
            return True
        return False

    def is_move_available(self):
        moves_available = 0
        grid_size = MagicNumbers.TIC_TAC_TOE_GRID_SIZE
        for row in range(0, grid_size):
            for col in range(0, grid_size):
                if self.game_state[row][col] == '':
                    moves_available += 1
        return moves_available > 0
