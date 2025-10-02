import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppContext } from '../context'; 
import { vi } from 'vitest'; 
import UserForm from '../UserForm';

const MockProvider = ({ children }) => (
   <AppContext.Provider value={{ isOpened: true }}> 
    {children}
  </AppContext.Provider>
);

describe('UserForm', () => {
 const mockOnSave = vi.fn();
const mockOnClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

//1
  test('отображаются поля firstName, lastName и кнопка OK', () => {
    render(
      <MockProvider>
        <UserForm isClosed={mockOnClose} onSave={mockOnSave} />
      </MockProvider>
    );

    expect(screen.getByPlaceholderText(/введите имя/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/введите фамилию/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
  });

  //2
 test('показывает ошибку, если в firstName введены цифры', async () => {
    render(
      <MockProvider>
        <UserForm isClosed={mockOnClose} onSave={mockOnSave} />
      </MockProvider>
    );

    const firstName = screen.getByPlaceholderText(/введите имя/i);
    await userEvent.type(firstName, '123');

    expect(await screen.findByText(/только буквы/i)).toBeInTheDocument();
  });
});