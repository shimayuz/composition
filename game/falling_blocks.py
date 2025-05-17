import pygame
import random

# Game constants
CELL_SIZE = 30
COLS = 10
ROWS = 20
WIDTH = COLS * CELL_SIZE
HEIGHT = ROWS * CELL_SIZE

# Define the shapes of Tetris pieces
SHAPES = {
    'I': [[1, 1, 1, 1]],
    'J': [[1, 0, 0], [1, 1, 1]],
    'L': [[0, 0, 1], [1, 1, 1]],
    'O': [[1, 1], [1, 1]],
    'S': [[0, 1, 1], [1, 1, 0]],
    'T': [[0, 1, 0], [1, 1, 1]],
    'Z': [[1, 1, 0], [0, 1, 1]],
}

COLORS = {
    'I': (0, 240, 240),
    'J': (0, 0, 240),
    'L': (240, 160, 0),
    'O': (240, 240, 0),
    'S': (0, 240, 0),
    'T': (160, 0, 240),
    'Z': (240, 0, 0),
}

def rotate(shape):
    """Rotate a shape clockwise."""
    return [list(row) for row in zip(*shape[::-1])]

class Piece:
    def __init__(self, kind):
        self.kind = kind
        self.shape = SHAPES[kind]
        self.x = COLS // 2 - len(self.shape[0]) // 2
        self.y = 0

    def rotate(self, board):
        new_shape = rotate(self.shape)
        if not self._collision(board, self.x, self.y, new_shape):
            self.shape = new_shape

    def move(self, dx, dy, board):
        if not self._collision(board, self.x + dx, self.y + dy, self.shape):
            self.x += dx
            self.y += dy
            return True
        return False

    def _collision(self, board, x, y, shape):
        for cy, row in enumerate(shape):
            for cx, cell in enumerate(row):
                if cell:
                    bx = x + cx
                    by = y + cy
                    if bx < 0 or bx >= COLS or by >= ROWS:
                        return True
                    if by >= 0 and board[by][bx]:
                        return True
        return False

    def place(self, board):
        for cy, row in enumerate(self.shape):
            for cx, cell in enumerate(row):
                if cell:
                    board[self.y + cy][self.x + cx] = self.kind


def clear_lines(board):
    cleared = 0
    new_board = [row for row in board if any(c == 0 for c in row)]
    cleared = ROWS - len(new_board)
    for _ in range(cleared):
        new_board.insert(0, [0] * COLS)
    return new_board, cleared


def draw_board(screen, board, current_piece):
    screen.fill((0, 0, 0))
    for y, row in enumerate(board):
        for x, cell in enumerate(row):
            if cell:
                color = COLORS[cell]
                pygame.draw.rect(screen, color, (x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE))
    if current_piece:
        for cy, row in enumerate(current_piece.shape):
            for cx, cell in enumerate(row):
                if cell:
                    x = (current_piece.x + cx) * CELL_SIZE
                    y = (current_piece.y + cy) * CELL_SIZE
                    pygame.draw.rect(screen, COLORS[current_piece.kind], (x, y, CELL_SIZE, CELL_SIZE))
    pygame.display.flip()


def main():
    pygame.init()
    screen = pygame.display.set_mode((WIDTH, HEIGHT))
    clock = pygame.time.Clock()
    board = [[0] * COLS for _ in range(ROWS)]
    current = Piece(random.choice(list(SHAPES.keys())))
    drop_event = pygame.USEREVENT + 1
    pygame.time.set_timer(drop_event, 500)
    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    current.move(-1, 0, board)
                elif event.key == pygame.K_RIGHT:
                    current.move(1, 0, board)
                elif event.key == pygame.K_DOWN:
                    current.move(0, 1, board)
                elif event.key == pygame.K_UP:
                    current.rotate(board)
            elif event.type == drop_event:
                if not current.move(0, 1, board):
                    current.place(board)
                    board, _ = clear_lines(board)
                    current = Piece(random.choice(list(SHAPES.keys())))
                    if current._collision(board, current.x, current.y, current.shape):
                        running = False
        draw_board(screen, board, current)
        clock.tick(60)
    pygame.quit()

if __name__ == "__main__":
    main()
