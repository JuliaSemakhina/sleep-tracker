import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { AppProvider } from '../context'; 
import Tabs from '../Tabs.jsx';

test('на последней вкладке кнопка становится "Завершить" и type="submit"', async () => {
  const handleSave = vi.fn();
  render(
    <AppProvider>
      <Tabs tabsCount={3} onEntrySubmit={handleSave} />
    </AppProvider>
  );

  await userEvent.click(screen.getByRole('button', { name: /далее/i }));
  await userEvent.click(screen.getByRole('button', { name: /далее/i }));
  await userEvent.click(screen.getByRole('button', { name: /далее/i }));

  const finishBtn = screen.getByRole('button', { name: /завершить/i });
  expect(finishBtn).toBeInTheDocument();
  expect(finishBtn).toHaveAttribute('type', 'submit');

  await userEvent.click(finishBtn);
});