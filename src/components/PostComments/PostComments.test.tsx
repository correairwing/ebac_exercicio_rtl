import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';
import PostComments from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve inserir 2 comentarios', () => {
        render(<PostComments />);

        const commentInput = screen.getByPlaceholderText(/adicionar comentário/i);
        const submitButton = screen.getByText(/comentar/i);

        fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(submitButton);

        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

        fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
        fireEvent.click(submitButton);
    
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});